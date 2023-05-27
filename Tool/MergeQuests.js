const path = require("path");
const fs = require("fs");

const questData3_2 = "QuestExcelConfigData (3.2).json";
if (!fs.existsSync(questData3_2)) {
  console.log(
    "Place a copy of QuestExcelConfigData for game version 3.2 in the same directory as this script."
  );
  console.log(`Name the file ${questData3_2}.`);
  return;
}

const questPatchesDir = "Patches/Quest";
if (!fs.existsSync(questPatchesDir)) {
  console.log(
    "Place a copy of the patches directory from the custom resources repository in the same directory as this script."
  );
  console.log("Ensure the custom resources has a 'Quest' directory.");
  return;
}
// btw use `npx prettier --write .` in folder scene after patch

// Define constants.
const unknownCondition = {
  type: "QUEST_COND_UNKNOWN",
  param: [0, 0],
};
const questBlacklist = [
  "acceptCond",
  "finishCond",
  "failCond",
  "beginExec",
  "finishExec",
  "failExec",
];

/*
 * These are quests patches which should be applied.
 * These are (basically) applied last.
 * Format is: { questId: { (patches) } }
 */
const patches = {
  35402: {
    gainItems: [
      {
        itemId: 1021,
        count: 1,
      },
    ],
  },
  35104: {
    beginExec: [
      {
        type: "QUEST_EXEC_SET_IS_GAME_TIME_LOCKED",
        param: ["1"],
        param_str: "",
      },
    ],
  },
};

/*
 * These are main quest patches which should be applied.
 * These are (basically) applied last.
 * Format is: { mainId: { (patches) } }
 */
const mainPatches = {};

// Load quest patches from the patches directory.
const questPatches = fs.readdirSync(questPatchesDir);
for (const questPatch of questPatches) {
  const patchData = JSON.parse(
    fs.readFileSync(path.join(questPatchesDir, questPatch), "utf-8")
  );
  const mainQuestId = patchData.id;

  // Check if the patch has sub-quests.
  if (patchData.subQuests) {
    for (const quest of patchData.subQuests) {
      const { subId } = quest;

      // Clean the quest data.
      delete quest.subId;
      delete quest.mainId;

      // Apply the patch.
      patches[subId] = quest;
    }
  }

  delete patchData.id;
  delete patchData.subQuests;
  if (Object.keys(patchData).length > 0) {
    mainPatches[mainQuestId] = patchData;
  }
}

/**
 * Returns a cleaned version of a condition/execution.
 *
 * @param condition The condition data.
 */
function clean(condition) {
  let { type, param, param_str, count } = {
    type: condition._type ?? condition.type,
    param: condition._param ?? condition.param,
    param_str: condition._param_str ?? condition.param_str,
    count: condition._count ?? condition["count"],
  };

  const object = {
    type,
    param: !param
      ? []
      : param.filter((param) => param !== null && param !== ""),
    param_str: param_str ?? "",
  };

  // Check for a 'count' parameter.
  if (count) object.count = count;

  return object;
}

/**
 * Returns a cleaned version of the guide.
 *
 * @param guide The guide data.
 */
function cleanGuide(guide) {
  // Check for a param field.
  if (guide.param == null) return guide;

  guide.param = guide.param.filter((param) => param !== null && param !== "");

  return guide;
}

/**
 * Removes un-used fields from an object.
 *
 * @param object The object.
 * @param blacklist Fields to ignore.
 */
function removeFields(object, blacklist = []) {
  for (const field in object) {
    if (blacklist.includes(field)) continue;

    if (object[field] == null) delete object[field];
    if (Array.isArray(object[field])) {
      if (object[field].length === 0) delete object[field];
    }
  }
}

const binOutput = path.join(__dirname, "../Resources/BinOutput/Quest");
const fileOutput = path.join(
  __dirname,
  "../Resources/ExcelBinOutput/QuestExcelConfigData.json"
);
const mainQuestFile = path.join(
  __dirname,
  "../Resources/ExcelBinOutput/MainQuestExcelConfigData.json"
);
const talkFile = path.join(
  __dirname,
  "../Resources/ExcelBinOutput/TalkExcelConfigData.json"
);

// Load the data from the files.
const rel3_2 = fs.readFileSync(questData3_2, "utf-8");
const latest = fs.readFileSync(fileOutput, "utf-8");
const mainQuest = fs.readFileSync(mainQuestFile, "utf-8");
const talks = fs.readFileSync(talkFile, "utf-8");

// Parse the data into JSON.
/** @type array */
const rel3_2_data = JSON.parse(rel3_2);
/** @type array */
const latest_data = JSON.parse(latest);
/** @type array */
const mainQuest_data = JSON.parse(mainQuest);
/** @type array */
const talks_data = JSON.parse(talks);

// Merge the data.
const quests = [];
const newQuests = [];
const newQuestsNoFound = [];
for (const mainQuestData of mainQuest_data) {
  const mainQuestId = mainQuestData.id;
  const binfile = `${binOutput}/${mainQuestId}.json`;

  console.log(`Scanning main quest ${mainQuestId}...`);

  // Find all sub-quests for the main quest.
  let isNewQuest = false;
  let SaveBin = true;
  let subQuests = rel3_2_data.filter((quest) => quest.mainId === mainQuestId);
  if (subQuests.length === 0) {
    // This will be considered a new quest if no quest configuration is found in version 3.2. based on mainQuestData file data
    isNewQuest = true;

    // since not all new quests are in `QuestExcelConfigData` we have to look again in `Quest bin folder` so both should be there. and sometimes the `Quest Bin Folder` doesn't have new quest data so we have to look in `quest main` or `quest config` in `Excel folder`
    subQuests = latest_data.filter((quest) => quest.mainId === mainQuestId);
    if (subQuests.length === 0) {
      console.log(`Looking for alternatives quest sub ${binfile}`);
      const binsub_r = fs.readFileSync(binfile);
      const binsub_d = JSON.parse(binsub_r);
      let subQuestBin = binsub_d.subQuests;
      if (subQuestBin !== undefined) {
        subQuests = subQuestBin; // copy `subquest bin` to `subquest config`
        SaveBin = false; // meanwhile don't save quest data bin because data we use data bin so should be same unless is patched?.
      }
    }
    if (subQuests.length !== 0) {
      newQuests.push(mainQuestId);
    } else {
      newQuestsNoFound.push(mainQuestId);
    }
  }

  // Find all talks for the main quest.
  const talks = talks_data.filter((talk) => talk.questId === mainQuestId);

  console.log("=====================================");
  console.log(`Performing merge on main quest ${mainQuestId}.`);
  console.log(`This quest is ${isNewQuest ? "new" : "old"}.`);
  console.log(`There are ${subQuests.length} sub-quests.`);
  console.log(`There are ${talks.length} talks.`);
  console.log("=====================================");

  // Check if the quest has sub-quests.
  if (subQuests.length === 0) {
    console.log(`Main quest ${mainQuestId} has no sub-quests, skipping...`);
    continue;
  }
  // Create the base quest data.
  const quest = {
    /** @type number */ id: mainQuestId,
    /** @type string */ type: mainQuestData.type,
    /** @type number */ series: mainQuestData.series,
    /** @type number */ titleTextMapHash: mainQuestData.titleTextMapHash,
    /** @type number */ descTextMapHash: mainQuestData.descTextMapHash,
    /** @type string */ luaPath: mainQuestData.luaPath,
    /** @type string */ showType: mainQuestData.showType,
    /** @type number[] */ suggestTrackMainQuestList:
      mainQuestData.suggestTrackMainQuestList,
    /** @type number[] */ rewardIdList: mainQuestData.rewardIdList,
    /** @type number[] */ chapterId: mainQuestData.chapterId,
    /** @type any[] */ subQuests: [],
    /** @type any[] */ talks: [],
  };

  // Create sub-quests for the main quest.
  for (const subQuestData of subQuests) {
    const subQuest = {
      json_file: `${mainQuestId}.json`,
      ...subQuestData,
    };

    // Validate conditions.
    const {
      /** @type any[] */ acceptCond,
      /** @type any[] */ finishCond,
      /** @type any[] */ failCond,
    } = subQuestData;

    if (acceptCond) {
      subQuest.acceptCond = acceptCond
        .filter((cond) => cond._type !== null || cond.type !== null)
        .map(clean);
    }
    if (finishCond) {
      subQuest.finishCond = finishCond
        .filter((cond) => cond._type !== null || cond.type !== null)
        .map(clean);
    }
    if (failCond) {
      subQuest.failCond = failCond
        .filter((cond) => cond._type !== null || cond.type !== null)
        .map(clean);
    }

    // Validate executions.
    const {
      /** @type any[] */ beginExec,
      /** @type any[] */ finishExec,
      /** @type any[] */ failExec,
    } = subQuestData;

    if (beginExec) {
      subQuest.beginExec = beginExec
        .filter((cond) => cond._type !== null || cond.type !== null)
        .map(clean);
    }
    if (finishExec) {
      subQuest.finishExec = finishExec
        .filter((cond) => cond._type !== null || cond.type !== null)
        .map(clean);
    }
    if (failExec) {
      subQuest.failExec = failExec
        .filter((cond) => cond._type !== null || cond.type !== null)
        .map(clean);
    }

    // Check if the quest is new.
    if (isNewQuest) {
      // Add the unknown accept condition.
      if (subQuestData.acceptCond == undefined) {
        subQuestData.acceptCond = [unknownCondition];
        // Create an unknownCondition if acceptCond is undefined
      } else {
        subQuestData.acceptCond.push(unknownCondition);
      }
      if (subQuest.acceptCond == undefined) {
        subQuest.acceptCond = [unknownCondition];
      } else {
        subQuest.acceptCond.push(unknownCondition);
      }
    }

    // fix (Expected a string but was BEGIN_OBJECT)
    if (typeof subQuestData.acceptCondComb === "object") {
      subQuestData.acceptCondComb = "LOGIC_NONE"; // ???
    }
    if (typeof subQuest.acceptCondComb === "object") {
      subQuest.acceptCondComb = "LOGIC_NONE"; // ???
    }

    if (typeof subQuestData.finishCondComb === "object") {
      subQuestData.finishCondComb = "LOGIC_NONE"; // ???
    }
    if (typeof subQuest.finishCondComb === "object") {
      subQuest.finishCondComb = "LOGIC_NONE"; // ???
    }

    if (typeof subQuestData.failCondComb === "object") {
      subQuestData.failCondComb = "LOGIC_NONE"; // ???
    }
    if (typeof subQuest.failCondComb === "object") {
      subQuest.failCondComb = "LOGIC_NONE"; // ???
    }

    // fix null
    if (subQuestData.finishCond == null) {
      subQuestData.finishCond = []; // ???
    }
    if (subQuest.finishCond == null) {
      subQuest.finishCond = []; // ???
    }
    if (subQuestData.failCond == null) {
      subQuestData.failCond = []; // ???
    }
    if (subQuest.failCond == null) {
      subQuest.failCond = []; // ???
    }

    if (subQuestData.beginExec == null) {
      subQuestData.beginExec = []; // ???
    }
    if (subQuest.beginExec == null) {
      subQuest.beginExec = []; // ???
    }
    if (subQuestData.finishExec == null) {
      subQuestData.finishExec = []; // ???
    }
    if (subQuest.finishExec == null) {
      subQuest.finishExec = []; // ???
    }
    if (subQuestData.failExec == null) {
      subQuestData.failExec = []; // ???
    }
    if (subQuest.failExec == null) {
      subQuest.failExec = []; // ???
    }

    // Validate the quest guide.
    const { guide } = subQuestData;
    //  || guide.type !== null
    if (guide !== undefined && guide.type !== undefined) {
      subQuest.guide = cleanGuide(guide);
    } else subQuest.guide = {};

    // Remove fields which are empty.
    removeFields(subQuest, questBlacklist);

    // Check if the quest has any patches.
    if (patches[subQuestData.subId]) {
      Object.assign(subQuest, patches[subQuestData.subId]);
    }

    // Add to the main quest's collection.
    const subQuestForMain = Object.assign({}, subQuest);
    delete subQuestForMain.json_file;
    delete subQuestForMain.stepDescTextMapHash;
    delete subQuestForMain.guideTipsTextMapHash;
    quest.subQuests.push(subQuestForMain);

    // Add to the global collection.
    quests.push(subQuest);
  }

  // Create talks for the main quest.
  for (const talkData of talks) {
    const talk = {
      ...talkData,
    };

    // Validate conditions.
    const {
      /** @type any[] */ beginCond,
      /** @type any[] */ finishCond,
      /** @type any[] */ failCond,
    } = talkData;

    if (beginCond) {
      talk.beginCond = beginCond.filter((cond) => cond.type != null).map(clean);
    }
    if (finishCond) {
      talk.finishCond = finishCond
        .filter((cond) => cond.type != null)
        .map(clean);
    }
    if (failCond) {
      talk.failCond = failCond.filter((cond) => cond.type != null).map(clean);
    }

    // Validate executions.
    const {
      /** @type any[] */ beginExec,
      /** @type any[] */ finishExec,
      /** @type any[] */ failExec,
    } = talkData;

    if (beginExec) {
      talk.beginExec = beginExec.filter((cond) => cond.type != null).map(clean);
    }
    if (finishExec) {
      talk.finishExec = finishExec
        .filter((cond) => cond.type != null)
        .map(clean);
    }
    if (failExec) {
      talk.failExec = failExec.filter((cond) => cond.type != null).map(clean);
    }

    // Remove un-used fields.
    removeFields(talk);

    // Add to the main quest's collection.
    quest.talks.push(talk);
  }

  // Remove un-used fields.
  removeFields(quest);

  // Check if the main quest has any patches.
  if (mainPatches[quest.id]) {
    Object.assign(quest, mainPatches[quest.id]);
  }

  // Create the main quest file.
  fs.writeFileSync(binfile, JSON.stringify(quest, null, 2));
}

// Write the new quest data.
fs.writeFileSync(fileOutput, JSON.stringify(quests, null, 2));

console.log("=====================================");
console.log(`There are ${quests.length} quests.`);
console.log(`There are ${newQuests.length} new quests.`);
console.log(`There are ${newQuestsNoFound.length} quests not found.`);

for (let i = 0; i < newQuests.length; i += 9) {
  const newQuestsSlice = newQuests.slice(i, i + 9);
  console.log(`New quests: ${newQuestsSlice.join(", ")}`);
}

console.log("=====================================");
