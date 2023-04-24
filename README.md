# Grasscutter Resources
> <em>Resource Anime Game v3.6</em><br/>

- ExcelBinOutput - 3.6 Dimbreath
- BinOutput - 3.6 Dimbreath
- Scripts - 3.6 GIO & Dump manual by me & hiro *** for natural spawn and many other things ***
- TextMap - 3.6 Dimbreath *** for language translations items,etc are used for gm-books ***
- QuestEncryptionKeys - 3.5 GI-cutscenes *** Used for cutscenes that require a key ***

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
## Required Grasscutter-Quests
- (LUA) Gadget (Control Stats Gadget)
- (BIN) Config Monster (???)
- (LUA) Scene/{sceneId}/scene_grid.json (???)
- Folder Server, This is made by community/user. [source](https://github.com/Anime-Game-Servers/CustomGCResources/tree/patches)

Because there are a lot of useless files, so I made a separate repo: [GIO](https://gitlab.com/YuukiPS/GIO-Resources) and Grasscutter Version are needed for Grasscutter only and [Anime Game](https://gitlab.com/YuukiPS/GS-Resources) is full version dump.

## Problem Not finished yet:
- Make Quest 3.0 work with modified QuestExcelConfigData which you can get from BinOutput/Quest/*.json. [use binout instead of excelconfig](https://github.com/Hartie95/Grasscutter/commit/0284de81563d30afb81733d7a3523a97419eb977)
- [Missing Scripts](https://github.com/Hartie95/Grasscutter/wiki/missing-scripts) should have been resolved by using latest GIO Data from "Script/Common" folder so let's wait for latest update from him ;).
- Quest should have worked automatically continued when quest was completed (if using [Hartie95 fork](https://github.com/Hartie95/Grasscutter/wiki/The-Outlander-Who-Caught-the-Wind-(Prologue-Act-1))) (Not working in version 3.0+ due to lack of data. need manual skip,start,next)
- Natural Spawn for new area version 3.6 is no longer accurate using data from gio there are lots of monsters sunk in ground and buried treasure. maybe you really should just dump current live version.

## Problem Solved:
- Natural Spawn for Sumeru area and other is available.
- If `QuestEncryptionKeys.json` file is not found in your GC, please move `/Server/QuestEncryptionKeys.json` file to the root of the `Resources` folder. and you only need `Resources`, folder like `Tool` only tools to make it easier for me to manage this.

## Credits 
 - [Dimbreath](https://gitlab.com/Dimbreath/gamedata) (Everything except Script,BinOutput) <br/> 
 - [Crepe](https://git.crepe.moe/grasscutters/Grasscutter_Resources) (Everything) <br/>
 - [TomyJan](https://github.com/TomyJan/GCResource) <br/> 
 - [timing1337](https://github.com/timing1337/GenshinData) (3.1 BinOutput) <br/>
 - [Koko-boya](https://github.com/Koko-boya) (Original Owner Grasscutter_Resources) <br/>
 - [tamilpp25](https://github.com/tamilpp25) (Backup) <br/>
 - [lilmayofuksu](https://github.com/lilmayofuksu/animepython) (LUA 2.6)<br/>
 - [GI-cutscenes](https://github.com/ToaHartor/GI-cutscenes/) (Key Quest) <br/>
 - [MTAlexKen](https://github.com/MTAlexKen/Genshin-resources) (Routes)<br/>
 - [radioegor146](https://github.com/radioegor146) <br/>
 - [TheLostTree](https://github.com/TheLostTree) <br/>
 - [Sycamore0](https://github.com/Sycamore0/GenshinData) <br/>