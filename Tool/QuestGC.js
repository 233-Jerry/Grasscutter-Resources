//requiring path and fs modules
const path = require('path');
const fs = require('fs');

const QuestDataTimORI = path.join(__dirname, '../Resources/BinOutput/Quest');

const output_final = "output2.json";

// Get Hash
//const config_quest_31 = fs.readFileSync("QuestExcelConfigData_3.1.json");
const config_quest_32 = fs.readFileSync("QuestExcelConfigData_3.6.json");
const config_quest_28 = fs.readFileSync("QuestExcelConfigData_2.8.json");
//const json_config_quest_31 = JSON.parse(config_quest_31);
const json_config_quest_32 = JSON.parse(config_quest_32);
const json_config_quest_28 = JSON.parse(config_quest_28);

//console.log(config_quest_31);

var index = 0;
var index2 = 0;
var index3 = 0;
var data = [];
fs.readdir(QuestDataTimORI, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Read file
        var relfile = path.join(QuestDataTimORI, file);
        const json_string_raw = fs.readFileSync(relfile);
        try {
            // Get Quest
            const dataquest = JSON.parse(json_string_raw);
            //console.log(dataquest);
            var order = 1;
            if (dataquest["subQuests"]) {
                dataquest["subQuests"].forEach(function (subdata) {

                    var subid = parseInt(subdata['subId']);
                    var mainid = parseInt(dataquest['id']);

                    /*
                    Act I: A Gathering of Outlanders
                    if (subid == 4009701) {
                        console.log(subdata);
                    }
                    */

                    var picked = json_config_quest_32.find(j => j.subId == subid);

                    var questmain = new Object();
                    questmain["json_file"] = file;
                    // Main Quest
                    questmain["mainId"] = mainid;
                    // Sub Quest
                    questmain["subId"] = subid;
                    questmain["order"] = subdata['order'];//order;
                    questmain["showType"] = subdata['showType'];

                    var acceptCond = [];
                    var finishCond = [];
                    var failCond = [];
                    var guide = {};
                    var finishExec = [];
                    var failExec = [];
                    var beginExec = [];

                    var questDes = picked['descTextMapHash'];

                    // just use old logic if found it
                    var use_old = json_config_quest_28.find(j => j.subId == subid);
                    if (use_old) {
                        acceptCond = use_old['acceptCond']; // menerima quest di per tentu
                        finishCond = use_old['finishCond']; // quest selesai
                        failCond = use_old['failCond']; // jika quest gagal
                        guide = use_old['guide']; // penujuk
                        finishExec = use_old['finishExec']; //finsih
                        failExec = use_old['failExec'];
                        beginExec = use_old['beginExec'];
                        questDes = use_old['descTextMapHash'];
                    } else {
                        if (subdata['acceptCond']) {
                            acceptCond = subdata['acceptCond'];
                        }
                        if (subdata['finishCond']) {
                            finishCond = subdata['finishCond'];
                        }
                        if (subdata['failCond']) {
                            failCond = subdata['failCond'];
                        }
                        if (subdata['guide']) {
                            guide = subdata['guide'];
                        }
                        if (subdata['finishExec']) {
                            finishExec = subdata['finishExec'];
                        }
                        if (subdata['failExec']) {
                            failExec = subdata['failExec'];
                        }
                        if (subdata['beginExec']) {
                            beginExec = subdata['beginExec'];
                        }
                        if (subdata['descTextMapHash']) {
                            questDes = subdata['descTextMapHash'];
                        }
                        index2++;
                    }

                    // JLHDNCOGCBO -> LLPGHDDJDHN -> acceptCond                
                    /*
                    dataquest["JLHDNCOGCBO"].forEach(function (step0) {
                        step0["LLPGHDDJDHN"].forEach(function (step1) {
                            acceptCond.push({
                                "_type": step1['_type'],
                                "_param": step1['param']
                            });
                        });
                    });
                    */

                    // TODO: if not use picked
                    questmain["descTextMapHash"] = questDes;
                    questmain["stepDescTextMapHash"] = picked['stepDescTextMapHash'];
                    questmain["guideTipsTextMapHash"] = picked['guideTipsTextMapHash'];

                    questmain["acceptCond"] = acceptCond;
                    questmain["finishCond"] = finishCond;
                    questmain["failCond"] = failCond;

                    questmain["guide"] = guide;

                    questmain["finishExec"] = finishExec;
                    questmain["failExec"] = failExec;
                    questmain["beginExec"] = beginExec;

                    var exclusiveNpcList = new Array();
                    var sharedNpcList = new Array();
                    var trialAvatarList = new Array();
                    var exclusivePlaceList = new Array();

                    questmain["exclusiveNpcList"] = exclusiveNpcList;
                    questmain["sharedNpcList"] = sharedNpcList;
                    questmain["trialAvatarList"] = trialAvatarList;
                    questmain["exclusivePlaceList"] = exclusivePlaceList;

                    data.push(questmain);
                    order++;
                    index++;
                });
            } else {
                // console.log(dataquest) // maybe quest hide
                index3++;
            }
        } catch (err) {
            // skip
            console.log(err);
        }

        // Do whatever you want to do with the file
        if (index == 0) {
            //console.log(file);
        }
    });

    json_config_quest_32.forEach(function (s) {

        var subid = parseInt(s['subId']);
        var mainid = parseInt(s['mainId']);

        var found_config = data.find(j => j.subId == subid);
        if (!found_config) {

            var questmain = new Object();
            //questmain["json_file"] = mainid;
            // Main Quest
            questmain["mainId"] = mainid;
            // Sub Quest
            questmain["subId"] = subid;
            questmain["order"] = s['order'];
            questmain["showType"] = s['showType'];

            var acceptCond = [];
            var finishCond = [];
            var failCond = [];
            var guide = {};
            var finishExec = [];
            var failExec = [];
            var beginExec = [];

            // TODO: check text file if have logic
            // PEEDHLOEOMJ -> finishCond   
            if (s["finishCond"]) {
                s["finishCond"].forEach(function (step1) {
                    finishCond.push({
                        "_type": step1['type'],
                        "_param": step1['param'],
                        "_param_str": step1['_param_str'] ? step1['_param_str'] : "",
                        "_count": step1['count']
                    });
                });
            }
            // check if have guide
            //guide = s['guide'];
            // check if have finishExec
            if (s["finishExec"]) {
                s["finishExec"].forEach(function (step1) {
                    finishExec.push({
                        "_type": step1['type'],
                        "_param": step1['param']
                    });
                });
            }
            // check if have failExec
            if (s["failExec"]) {
                s["failExec"].forEach(function (step1) {
                    failExec.push({
                        "_type": step1['type'],
                        "_param": step1['param']
                    });
                });
            }
            // beginExec
            if (s["beginExec"]) {
                s["beginExec"].forEach(function (step1) {
                    beginExec.push({
                        "_type": step1['type'],
                        "_param": step1['param']
                    });
                });
            }

            questmain["descTextMapHash"] = s['descTextMapHash'];
            questmain["stepDescTextMapHash"] = s['stepDescTextMapHash'];
            questmain["guideTipsTextMapHash"] = s['guideTipsTextMapHash'];

            questmain["acceptCond"] = acceptCond;
            questmain["finishCond"] = finishCond;
            questmain["failCond"] = failCond;

            questmain["guide"] = guide;

            questmain["finishExec"] = finishExec;
            questmain["failExec"] = failExec;
            questmain["beginExec"] = beginExec;

            var exclusiveNpcList = new Array();
            var sharedNpcList = new Array();
            var trialAvatarList = new Array();
            var exclusivePlaceList = new Array();

            questmain["exclusiveNpcList"] = exclusiveNpcList;
            questmain["sharedNpcList"] = sharedNpcList;
            questmain["trialAvatarList"] = trialAvatarList;
            questmain["exclusivePlaceList"] = exclusivePlaceList;

            data.push(questmain);

            index2++;
        }
    });

    var strNotes = JSON.stringify(data, null, 4);
    console.log("Subquest All " + data.length + " , Quest 3.2 New " + index2 + " subquest , hide "+index3+" ");
    fs.writeFile(output_final, strNotes, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });

});