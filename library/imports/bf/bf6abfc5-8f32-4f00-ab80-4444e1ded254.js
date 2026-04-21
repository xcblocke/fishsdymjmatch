"use strict";
cc._RF.push(module, 'bf6ab/FjzJPAKuARETh3tJU', 'IRuleTypes');
// Scripts/IRuleTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentType = exports.EConditionType = exports.ETile2ExtractType = void 0;
exports.ETile2ExtractType = {
    Fixed: "Tile2Fixed",
    FixedRandom: "Tile2FixedRandom",
    Hard: "Tile2Hard",
    StaticLvType: "Tile2StaticLvType",
    Dynamic: "Tile2Dynamic",
    Static: "Tile2Static"
};
var EConditionType;
(function (EConditionType) {
    EConditionType[EConditionType["LevelRange"] = 1] = "LevelRange";
    EConditionType[EConditionType["LevelCycle"] = 2] = "LevelCycle";
    EConditionType[EConditionType["TotalGames"] = 3] = "TotalGames";
    EConditionType[EConditionType["ActiveDays"] = 4] = "ActiveDays";
    EConditionType[EConditionType["StageType"] = 5] = "StageType";
    EConditionType[EConditionType["PlayerGroup"] = 6] = "PlayerGroup";
})(EConditionType = exports.EConditionType || (exports.EConditionType = {}));
var getParentType = function (e) {
    return "Fixed" === e ? exports.ETile2ExtractType.Fixed : "Hard" === e ? exports.ETile2ExtractType.Hard : e.startsWith("FixedRandom") ? exports.ETile2ExtractType.FixedRandom : e.startsWith("StaticLvType") ? exports.ETile2ExtractType.StaticLvType : e.startsWith("Dynamic") ? exports.ETile2ExtractType.Dynamic : e.startsWith("Static") ? exports.ETile2ExtractType.Static : null;
};
exports.getParentType = getParentType;

cc._RF.pop();