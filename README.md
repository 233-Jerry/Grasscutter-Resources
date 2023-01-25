# Grasscutter Resources
> <em>Resource - "Certain Anime Game" Version 3.4</em><br/>

- ExcelBinOutput - 3.4 TomyJan
- BinOutput - GC 2.7 Quest,Scene>Point,HomeworldDefaultSave | TomyJan 3.4 All except Quest
- Scripts - 3.4 GIO ***Used for Big World LUA ***
- TextMap - 3.4 TomyJan ***for language translations items,etc are used for gm-books***
- QuestEncryptionKeys - 3.2 GIO ***Used for cutscenes that require a key, see Credits below***

## What is difference between GIO and GC?
- GIO is a leaked full file from official server which was released last month (maybe 28/10/2022) which is available from 3.1-4.0 so it's possible that version 3.2+ some animations/characters are still in beta (aka beta old) so data won't be accurate anymore if it's already release because of the many revisions.
- GC is a Grasscutter that has been dump file by several GC Teams and several other people whose results are from current beta and includes latest released version, only the problem is that most of the data is still unk_name so it's hard to understand and sometimes it's still inaccurate because mix from previous version.

## Learn LUA
 How Dungeons work:
- [Spire of Solitary Enlightenment - LV 4](Resources/Scripts/Scene/40653/scene40653_group240653001.lua)
## Required LUA files
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

Because there are a lot of useless files, so I made a separate repo: GIO and Grasscutter Version are needed for Grasscutter only.

## Problem Not finished yet:
- Make Quest 2.8-3.3 work with modified QuestExcelConfigData which you can get from BinOutput/Quest/*.json. [use binout instead of excelconfig](https://github.com/Hartie95/Grasscutter/commit/0284de81563d30afb81733d7a3523a97419eb977)
- [Missing Scripts](https://github.com/Hartie95/Grasscutter/wiki/missing-scripts) should have been resolved by using latest data from "Script/Common" folder so let's wait for latest update from him ;).
- Quest should have worked automatically continued when quest was completed (if using [Hartie95 fork](https://github.com/Hartie95/Grasscutter/wiki/The-Outlander-Who-Caught-the-Wind-(Prologue-Act-1)))

## Problem Solved:
- Natural Spawn for Sumeru area is available.

## Credits 
 - [GCTeam](https://git.crepe.moe/grasscutters/Grasscutter_Resources) (Everything) <br/>
 - [TomyJan](https://github.com/TomyJan/GCResource) <br/>
 - [Dimbreath](https://gitlab.com/Dimbreath/gamedata) (Everything except Script,BinOutput) <br/> 
 - [timing1337](https://github.com/timing1337/GenshinData) (3.1 BinOutput) <br/>
 - [Koko-boya](https://github.com/Koko-boya) (Original Owner Grasscutter_Resources) <br/>
 - [tamilpp25](https://github.com/tamilpp25) (Backup) <br/>
 - [lilmayofuksu](https://github.com/lilmayofuksu/animepython) (LUA 2.6)<br/>
 - [GI-cutscenes](https://github.com/ToaHartor/GI-cutscenes/) (Key Quest) <br/>
 - [MTAlexKen](https://github.com/MTAlexKen/Genshin-resources) (Routes)<br/>
 - [radioegor146](https://github.com/radioegor146) <br/>
 - [TheLostTree](https://github.com/TheLostTree) <br/>