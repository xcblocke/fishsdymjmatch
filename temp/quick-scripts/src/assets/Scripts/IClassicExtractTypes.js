"use strict";
cc._RF.push(module, '24cf6UP3uBKF5YzOWAXtwAa', 'IClassicExtractTypes');
// Scripts/IClassicExtractTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.isResIdBlacklisted = exports.CLASSIC_RESID_BLACKLIST = exports.DEFAULT_SWIMLANE_CONFIG = exports.DIFFICULTY_LAYER_MAP = exports.EDifficultyType = void 0;
var EDifficultyType;
(function (EDifficultyType) {
    EDifficultyType[EDifficultyType["Simple"] = 1] = "Simple";
    EDifficultyType[EDifficultyType["Medium"] = 2] = "Medium";
    EDifficultyType[EDifficultyType["Difficult"] = 3] = "Difficult";
    EDifficultyType[EDifficultyType["Reward"] = 4] = "Reward";
})(EDifficultyType = exports.EDifficultyType || (exports.EDifficultyType = {}));
(exports.DIFFICULTY_LAYER_MAP = {})[EDifficultyType.Simple] = [1, 2];
exports.DIFFICULTY_LAYER_MAP[EDifficultyType.Medium] = [2];
exports.DIFFICULTY_LAYER_MAP[EDifficultyType.Difficult] = [5];
exports.DIFFICULTY_LAYER_MAP[EDifficultyType.Reward] = [1];
exports.DIFFICULTY_LAYER_MAP = exports.DIFFICULTY_LAYER_MAP;
exports.DEFAULT_SWIMLANE_CONFIG = {
    hardModeThresholdSeconds: 300,
    scoreThresholdPercent: 0.75,
    beforeThresholdPool: [EDifficultyType.Simple, EDifficultyType.Medium],
    afterThresholdRotation: [EDifficultyType.Difficult, EDifficultyType.Medium],
    afterTimeDifficulty: EDifficultyType.Difficult
};
exports.CLASSIC_RESID_BLACKLIST = new Set([34, 35, 36, 37, 38, 39, 40, 41, 50, 51, 52, 53, 54, 42, 43]);
var isResIdBlacklisted = function (e) {
    return exports.CLASSIC_RESID_BLACKLIST.has(e);
};
exports.isResIdBlacklisted = isResIdBlacklisted;

cc._RF.pop();