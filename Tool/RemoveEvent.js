const path = require('path')
const fs = require('fs')

const scene_path = path.join(__dirname, '../Resources/BinOutput/Scene/Point/scene3_point.json')
const raw_data = fs.readFileSync(scene_path, 'utf-8')
const json = JSON.parse(raw_data)

function indexOfSmart(data, match) {
  if (typeof data === 'string') {
    return data.indexOf(match) >= 0
  }

  return false
}

function removeEvt() {
  const filters = [
    'LunaRite',
    'BlitzRush',
    'TreasureMap',
    'ActivityBlessing',
    'ActivityHachi',
    'ActivityPotion',
    'ActivityMiniEldritch',
    'ActivityGacha',
    'ActivityInstable',
    'ActivityMuqadas',
    'SeaLampGiving',
    'TreasureMapNPC',
    'Mechanicus',
    'FleurFair',
    'HideAndSeek',
    'ChannellerSlab',
    'Perpetual',
    'GrowFlowers',
    'MusicGame',
    'ProjectionGame',
    'IrodoriPhoto',
    'IrodoriFlower',
    'IrodoriChess',
    'GearGame',
    'GravenInnocenceCarve',
    'AsterMiddle',
    'MarkIrodoriMaster',
    'MarkMusicGame',
    'MarkArenaChallenge',
    'UI_ACTIVITY_WINDFIELD_TITLE',
    'UI_DUNGEON_ENTRY_39',
    'LanV3',
    'DrakePrimoRock',
    'MarkElectroHercules',
    'UI_ACTIVITY_ARENACHALLENGE_TITLE_1',
    'MarkBrickBreaker',
    'Bartender',
    'FungusFighter',
    'ActivityFungusFighter'
  ]

  const excluded_points = [
    '694',
    '695',
    '696',
    '686',
    '687',
    '688'
  ]

  const new_json = {
    points: {}
  }

  var arr = [];

  for (const key of Object.keys(json.points)) {
    const current = json.points[key]

    if (excluded_points.filter(x => x === key).length > 0) {
      console.log('invalid key:', key);
      continue;
    }

    if (Object.keys(current).filter(x => filters.filter(y => indexOfSmart(current[x], y)).length > 0).length > 0) {
      console.log('event removed:', key);
      arr.push(parseInt(key));
      continue;
    }

    new_json.points[key] = current
  }

  return arr
}

// Write file
//const destination = path.join(__dirname, './resources/BinOutput/Scene/Point/scene3_point.json')
//fs.writeFileSync(destination, JSON.stringify(removeEvt(), undefined, 2))
console.log(removeEvt());
