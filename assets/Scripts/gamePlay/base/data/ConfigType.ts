export var ConfigType = {
  tableList: ["robot_name", "LevelConfig", "card_difference2", "Map1", "audio_config", "VibrationLevel_Android", "reward_config", "rank_col_reward", "headRingConfig", "rank_win_streak_boost", "VibrationConfig_Android", "playerRoleName", "headConfig", "task", "daily_challenge", "card_config", "Map2", "i18n_config_ZH_CN", "i18n_config_EN_US", "i18n_config_EN_GB", "i18n_config_ZH_HK", "i18n_config_ZH_TW", "i18n_config_PT_PT", "i18n_config_PT_BR", "i18n_config_ES", "i18n_config_ES_419", "i18n_config_FR", "i18n_config_DE", "i18n_config_JA", "i18n_config_KO", "i18n_config_RU", "rank_col_leader_board", "Travel", "item_config", "mainGameTopSkin", "Map3", "Map4", "Map5", "TravelNavigation", "flower_star_config", "Map6", "card_config2", "HallTheme", "SelectCardGroupConfig", "MaterialConfig", "BoardDye", "TurnDye", "BoardParamRuleConfig", "VibrationConfig_IOS", "flower_card_config", "Map7"],
  robot_name: {
    name: "robot_name",
    names: ["RobotName"],
    types: ["string"],
    keys: ["RobotName"]
  },
  LevelConfig: {
    name: "LevelConfig",
    names: ["id", "mapRes", "mapConfig", "levelCount", "hards", "height", "finishOffset", "gift", "badge", "giftRewards", "badgeRewards"],
    types: ["int", "string", "string", "int", "list", "int", "int", "list", "list", "list", "list"],
    keys: ["id"]
  },
  card_difference2: {
    name: "card_difference2",
    names: ["Id", "CardId1", "CardId2", "Difference"],
    types: ["int", "int", "int", "int"],
    keys: ["Id"]
  },
  mainGameTopSkin: {
    name: "mainGameTopSkin",
    names: ["ID", "SkinKey", "Name", "GameTypes", "Desc", "NodeInfo", "SpriteInfo", "LabelInfo", "ButtonInfo", "I18NInfo", "OutlineInfo", "WidgetInfo", "SpineInfo"],
    types: ["int", "string", "string", "list", "string", "string", "string", "string", "string", "string", "string", "string", "string"],
    keys: ["ID"]
  },
  audio_config: {
    name: "audio_config",
    names: ["ID", "Url", "Bundle"],
    types: ["int", "string", "string"],
    keys: ["ID"]
  },
  VibrationLevel_Android: {
    name: "VibrationLevel_Android",
    names: ["ID", "Level"],
    types: ["string", "int"],
    keys: ["ID"]
  },
  HallTheme: {
    name: "HallTheme",
    names: ["ID", "SkinKey", "Name", "GameTypes", "Desc", "NodeInfo", "SpriteInfo", "LabelInfo", "ButtonInfo", "I18NInfo", "OutlineInfo", "WidgetInfo", "SpineInfo"],
    types: ["int", "string", "string", "list", "string", "string", "string", "string", "string", "string", "string", "string", "string"],
    keys: ["ID"]
  },
  reward_config: {
    name: "reward_config",
    names: ["ID", "Items", "Counts", "IsMultiple", "BoxType", "BoxSound", "RewardTitle"],
    types: ["int", "list", "list", "bool", "int", "string", "string"],
    keys: ["ID"]
  },
  SelectCardGroupConfig: {
    name: "SelectCardGroupConfig",
    names: ["Id", "SelectCardGroupId", "CardIdList", "SelectCount", "ExptId"],
    types: ["int", "int", "list", "int", "string"],
    keys: ["Id"]
  },
  BoardDye: {
    name: "BoardDye",
    names: ["id", "TurnDyeList", "SuitNum", "DyeType"],
    types: ["int", "list", "int", "int"],
    keys: ["id"]
  },
  TurnDye: {
    name: "TurnDye",
    names: ["id", "DyeOrder", "DifficultyRangeType", "DifficultyRangePara", "ConstrainType", "ConstrainPara", "PickType", "PickPara", "SuitPriority"],
    types: ["int", "int", "string", "string", "string", "string", "string", "string", "int"],
    keys: ["id"]
  },
  rank_col_reward: {
    name: "rank_col_reward",
    names: ["Rank", "Reward"],
    types: ["int", "int"],
    keys: ["Rank"]
  },
  headRingConfig: {
    name: "headRingConfig",
    names: ["ID", "Icon"],
    types: ["int", "string"],
    keys: ["ID"]
  },
  rank_win_streak_boost: {
    name: "rank_win_streak_boost",
    names: ["ID", "WinStreak1", "WinStreak2", "WinStreak3"],
    types: ["int", "int", "int", "int"],
    keys: ["ID"]
  },
  VibrationConfig_Android: {
    name: "VibrationConfig_Android",
    names: ["ID", "NewAndroidTime", "AndroidStrong1", "AndroidTime1", "AndroidStrong2", "AndroidTime2", "AndroidStrong3", "AndroidTime3", "OldAndroidStrong", "OldAndroidTime", "Priority"],
    types: ["int", "list", "list", "list", "list", "list", "list", "list", "list", "list", "int"],
    keys: ["ID"]
  },
  BoardParamRuleConfig: {
    name: "BoardParamRuleConfig",
    names: ["id", "logicId", "groupId", "executeOrder", "priority", "allowCoexist", "conditionExpr", "conditionParams", "bankParam"],
    types: ["int", "string", "string", "int", "int", "bool", "string", "string", "string"],
    keys: ["id"]
  },
  flower_star_config: {
    name: "flower_star_config",
    names: ["id", "name", "bundle", "isLocal"],
    types: ["int", "string", "string", "bool"],
    keys: ["id"]
  },
  flower_card_config: {
    name: "flower_card_config",
    names: ["id", "name", "bundle", "isLocal", "replace"],
    types: ["int", "string", "string", "bool", "int"],
    keys: ["id"]
  },
  Map1: {
    name: "Map1",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  Map2: {
    name: "Map2",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  Map3: {
    name: "Map3",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  Map4: {
    name: "Map4",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  Map5: {
    name: "Map5",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  Map6: {
    name: "Map6",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  Map7: {
    name: "Map7",
    names: ["level", "type", "pos", "reward", "playType"],
    types: ["int", "int", "list", "int", "list"],
    keys: ["level"]
  },
  playerRoleName: {
    name: "playerRoleName",
    names: ["Country", "Rolename"],
    types: ["string", "list"],
    keys: ["Country"]
  },
  headConfig: {
    name: "headConfig",
    names: ["ID", "Icon"],
    types: ["int", "string"],
    keys: ["ID"]
  },
  task: {
    name: "task",
    names: ["TaskKey", "TaskType", "TaskRange", "TaskValue1", "TaskValue2", "TaskPhase", "TaskQuest", "RandomFlag", "TaskDes"],
    types: ["int", "int", "list", "list", "int", "int", "int", "int", "string"],
    keys: ["TaskKey"]
  },
  daily_challenge: {
    name: "daily_challenge",
    names: ["ID", "Year", "Month", "RewardID"],
    types: ["int", "int", "int", "int"],
    keys: ["ID"]
  },
  card_config: {
    name: "card_config",
    names: ["id", "cardId", "resName"],
    types: ["int", "int", "string"],
    keys: ["id"]
  },
  card_config2: {
    name: "card_config2",
    names: ["id", "cardId", "resName"],
    types: ["int", "int", "string"],
    keys: ["id"]
  },
  i18n_config: {
    name: "i18n_config",
    names: ["Key", "Value"],
    types: ["string", "string"],
    keys: ["Key"]
  },
  MaterialConfig: {
    name: "MaterialConfig",
    names: ["ID", "Color", "ChangeClear"],
    types: ["int", "string", "int"],
    keys: ["ID"]
  },
  VibrationConfig_IOS: {
    name: "VibrationConfig_IOS",
    names: ["ID", "AppleMod", "AppleModGE13", "Priority", "VibrationContinued"],
    types: ["int", "list", "list", "int", "list"],
    keys: ["ID"]
  },
  rank_col_leader_board: {
    name: "rank_col_leader_board",
    names: ["Period", "Name", "TimeLimit", "CollectThing", "EntranceThing"],
    types: ["int", "string", "int", "string", "string"],
    keys: ["Period"]
  },
  Travel: {
    name: "Travel",
    names: ["session", "name", "hallTheme", "hallBtnRes", "openImg", "openDesc", "duration", "startTime", "endTime", "levelConfig", "yoga", "yogaAnim"],
    types: ["string", "string", "string", "string", "string", "string", "int", "int", "int", "int", "string", "string"],
    keys: ["session"]
  },
  TravelNavigation: {
    name: "TravelNavigation",
    names: ["id", "path", "atlas"],
    types: ["int", "string", "bool"],
    keys: ["id"]
  },
  item_config: {
    name: "item_config",
    names: ["ID", "Type", "Value", "Icon", "NameKey", "Def_Name", "Scale"],
    types: ["int", "int", "int", "string", "string", "string", "int"],
    keys: ["ID"]
  }
};
export var MapConfigMap = {
  Map1: ConfigType.Map1,
  Map2: ConfigType.Map2,
  Map3: ConfigType.Map3,
  Map4: ConfigType.Map4,
  Map5: ConfigType.Map5,
  Map6: ConfigType.Map6,
  Map7: ConfigType.Map7
};