-- 任务配置数据开始-----------------------------

main_id = 3032sub_ids = {	303201,	303202,	303204,	303203,	303205,}-- 任务配置数据结束----------------------------------- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-- 父任务执行项数据开始-----------------------------finish_action = {	CLIENT = { },	SERVER = { },}fail_action = {	CLIENT = { },	SERVER = { },}cancel_action = {	CLIENT = { },	SERVER = { },}-- 父任务执行项数据结束------------------------------- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-- Actor模块数据开始---------------------------------- 空-- Actor模块数据结束---------------------------------- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-- 文本模块数据开始----------------------------------- 空-- 文本模块数据结束----------------------------------- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-- 路点模块数据开始----------------------------------- 空-- 路点模块数据结束----------------------------------- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-- 断线重连生成内容 开始------------------------------ 和questdata配的存档点对应rewind_data = {	["303201"] = { },	["303202"] = 	{		npcs = 		{			{				id = 1056,				alias = "Npc1056",				script = "Actor/Npc/TempNPC",				pos = "Q303201_N1056",				scene_id = 1075,				room_id = 1,				data_index = 1,			},			{				id = 1065,				alias = "Npc1065",				script = "Actor/Npc/TempNPC",				pos = "Q303202_N12827",				scene_id = 1075,				room_id = 1,				data_index = 2,			},		},	},	["303204"] = 	{		npcs = 		{			{				id = 1056,				alias = "Npc1056",				script = "Actor/Npc/TempNPC",				pos = "Q303201_N1056",				scene_id = 1075,				room_id = 1,				data_index = 1,			},			{				id = 1065,				alias = "Npc1065",				script = "Actor/Npc/TempNPC",				pos = "Q303202_N12827",				scene_id = 1075,				room_id = 1,				data_index = 2,			},		},	},	["303205"] = 	{		npcs = 		{			{				id = 1056,				alias = "Npc1056",				script = "Actor/Npc/TempNPC",				pos = "Q303201_N1056",				scene_id = 1075,				room_id = 1,				data_index = 1,			},			{				id = 1065,				alias = "Npc1065",				script = "Actor/Npc/TempNPC",				pos = "Q303202_N12827",				scene_id = 1075,				room_id = 1,				data_index = 2,			},			{				id = 12991,				alias = "Npc12991",				script = "Actor/Npc/TempNPC",				pos = "Q303203_T303203_N12991",				scene_id = 3,				room_id = 0,				data_index = 3,			},			{				id = 12992,				alias = "Npc12992",				script = "Actor/Npc/TempNPC",				pos = "Q303203_T303203_N12992",				scene_id = 3,				room_id = 0,				data_index = 4,			},		},	},}-- 断线重连生成内容 结束------------------------------ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-- 校验数据 开始------------------------------------ 和任务lua中生成NPC/Monster/Gadget/Item等对应quest_data = {	["303201"] = 	{		npcs = 		{			{				id = 1056,				alias = "Npc1056",				script = "Actor/Npc/TempNPC",				pos = "Q303201_N1056",				scene_id = 1075,				room_id = 1,				data_index = 1,			},			{				id = 1065,				alias = "Npc1065",				script = "Actor/Npc/TempNPC",				pos = "Q303202_N12827",				scene_id = 1075,				room_id = 1,				data_index = 2,			},		},	},	["303202"] = { },	["303203"] = 	{		npcs = 		{			{				id = 1056,				alias = "Npc1056",				script = "Actor/Npc/TempNPC",				pos = "Q303201_N1056",				scene_id = 1075,				room_id = 1,				data_index = 1,			},			{				id = 1065,				alias = "Npc1065",				script = "Actor/Npc/TempNPC",				pos = "Q303202_N12827",				scene_id = 1075,				room_id = 1,				data_index = 2,			},			{				id = 12991,				alias = "Npc12991",				script = "Actor/Npc/TempNPC",				pos = "Q303203_T303203_N12991",				scene_id = 3,				room_id = 0,				data_index = 3,			},			{				id = 12992,				alias = "Npc12992",				script = "Actor/Npc/TempNPC",				pos = "Q303203_T303203_N12992",				scene_id = 3,				room_id = 0,				data_index = 4,			},		},	},	["303204"] = 	{		npcs = 		{			{				id = 1056,				alias = "Npc1056",				script = "Actor/Npc/TempNPC",				pos = "Q303201_N1056",				scene_id = 1075,				room_id = 1,				data_index = 1,			},			{				id = 1065,				alias = "Npc1065",				script = "Actor/Npc/TempNPC",				pos = "Q303202_N12827",				scene_id = 1075,				room_id = 1,				data_index = 2,			},		},		transmit_points = 		{			{				point_id = 1,				scene_id = 3,				pos = "Q30320_guide",			},		},	},	["303205"] = 	{		npcs = 		{			{				id = 1005,				alias = "Paimon",				script = "Actor/Quest/Q352/Paimon",				pos = "Q303205_T303205_N1005",				scene_id = 3,				room_id = 1,				data_index = 1,			},			{				id = 12999,				alias = "Npc12999",				script = "Actor/Npc/TempNPC",				pos = "Q303205_T303205_N12999",				scene_id = 3,				room_id = 0,				data_index = 2,			},		},	},}-- 校验数据 结束------------------------------------ >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>