# Grasscutter Resources
> <em>Resource Version - "Certain Anime Game" 3.3</em><br/>

- ExcelBinOutput (3.3 GC)
- BinOutput (3.3 GIO: Talent,Scene>SceneNpcBorn,LevelEntity,Gadget,Avatar | GC 3.3 Scene>Point,Quest,HomeworldDefaultSave | GC ?.? LevelDesign>Routes)
- Scripts (3.3 GIO)
- Readable (??)
- Subtitle (??)
- TextMap (??)
- QuestEncryptionKeys (3.2)

## Learn LUA
 How Dungeons work:
- [Spire of Solitary Enlightenment - LV 4](Resources/Scripts/Scene/40653/scene40653_group240653001.lua)
## Required lua files
- Quest/Share/*
- Scene/{sceneId}/scene{sceneId}_block{this.id}.lua
- Scene/{sceneId}/scene{sceneId}_dummy_points.lua
- Scene/{sceneId}/scene{sceneId}_group{this.id}.lua
- Scene/{sceneId}/scene{sceneId}.lua
- flat.luas.scenes.full_globals.lua.json (only used if the above is not used)
- Common/*.lua (useless because this function doesn't exist yet)
## Required BinOutput files
- Scene/Point/* (scene*_point.json)
- Scene/SceneNpcBorn/*
- Avatar/* (ConfigAvatar_*.json) or /Data/AbilityEmbryos.json
- AbilityGroup/AbilityGroup_Other_PlayerElementAbility.json
- Ability/Temp/*
- Talent/EquipTalents/*
- Talent/AvatarTalents/*
- Quest/*
- HomeworldDefaultSave/* (scene*_home_config.json)
- Gadget/*
- LevelDesign/Routes/*
- LevelEntity/* (ConfigLevelEntity_*.json)

Because there are a lot of useless files, so I made a separate repo: Full Version (GIO) and Grasscutter Version are needed for Grasscutter only.

## Problem Not finished yet:
- Make Quest 2.8-3.3 work with modified QuestExcelConfigData which you can get from BinOutput/Quest/*.json. [use binout instead of excelconfig](https://github.com/Hartie95/Grasscutter/commit/0284de81563d30afb81733d7a3523a97419eb977)
- [Missing Scripts](https://github.com/Hartie95/Grasscutter/wiki/missing-scripts) should have been resolved by using latest data from "Script/Common" folder so let's wait for latest update from him ;).
- Quest should have worked automatically continued when quest was completed (if using [Hartie95 fork](https://github.com/Hartie95/Grasscutter/wiki/The-Outlander-Who-Caught-the-Wind-(Prologue-Act-1)))

## Problem Solved:
- Natural Spawn for Sumeru area is available.

## Credits 
 - [Dimbreath](https://github.com/Dimbreath) (Everything except Script,BinOutput) <br/>
 - [tamilpp25](https://github.com/tamilpp25/Grasscutter_Resources) (Script,BinOutput) <br/> 
 - [timing1337](https://github.com/timing1337/GenshinData) (3.1 BinOutput) <br/>
 - [Koko-boya](https://github.com/Koko-boya) (Original Owner Grasscutter_Resources) <br/>
 - [lilmayofuksu](https://github.com/lilmayofuksu/animepython) (Script aka Lua)<br/>
 - [GI-cutscenes](https://github.com/ToaHartor/GI-cutscenes/) (Key Quest) <br/>
 - [MTAlexKen](https://github.com/MTAlexKen/Genshin-resources) (Routes)<br/>
 - [radioegor146](https://github.com/radioegor146) <br/>
 - [TheLostTree](https://github.com/TheLostTree) <br/>