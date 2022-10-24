-- 基础信息
local base_info = {
	group_id = 133310346
}

--================================================================
-- 
-- 配置
-- 
--================================================================

-- 怪物
monsters = {
}

-- NPC
npcs = {
}

-- 装置
gadgets = {
	{ config_id = 346003, gadget_id = 70500000, pos = { x = -2936.409, y = 305.791, z = 4763.719 }, rot = { x = 339.690, y = 42.691, z = 353.111 }, level = 32, point_type = 1001, area_id = 28 },
	{ config_id = 346006, gadget_id = 70500000, pos = { x = -2937.308, y = 306.172, z = 4764.818 }, rot = { x = 359.365, y = 266.929, z = 21.261 }, level = 32, point_type = 1001, area_id = 28 }
}

-- 区域
regions = {
}

-- 触发器
triggers = {
}

-- 变量
variables = {
}

--================================================================
-- 
-- 初始化配置
-- 
--================================================================

-- 初始化时创建
init_config = {
	suite = 1,
	end_suite = 0,
	rand_suite = false
}

--================================================================
-- 
-- 小组配置
-- 
--================================================================

suites = {
	{
		-- suite_id = 1,
		-- description = ,
		monsters = { },
		gadgets = { 346003, 346006 },
		regions = { },
		triggers = { },
		rand_weight = 100
	}
}

--================================================================
-- 
-- 触发器
-- 
--================================================================