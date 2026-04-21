export var ETile2ExtractType = {
  Fixed: "Tile2Fixed",
  FixedRandom: "Tile2FixedRandom",
  Hard: "Tile2Hard",
  StaticLvType: "Tile2StaticLvType",
  Dynamic: "Tile2Dynamic",
  Static: "Tile2Static"
};
export enum EConditionType {
  LevelRange = 1,
  LevelCycle = 2,
  TotalGames = 3,
  ActiveDays = 4,
  StageType = 5,
  PlayerGroup = 6,
}
export var getParentType = function (e) {
  return "Fixed" === e ? ETile2ExtractType.Fixed : "Hard" === e ? ETile2ExtractType.Hard : e.startsWith("FixedRandom") ? ETile2ExtractType.FixedRandom : e.startsWith("StaticLvType") ? ETile2ExtractType.StaticLvType : e.startsWith("Dynamic") ? ETile2ExtractType.Dynamic : e.startsWith("Static") ? ETile2ExtractType.Static : null;
};