"use strict";
cc._RF.push(module, 'fa3229jzSdH76OsY4jX5UdG', 'Common');
// Scripts/types/Common.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomDataKey = exports.getPercentileKey = exports.EDCColor = exports.PrefixLevelLibrary = exports.PrefixLevelValue = exports.PrefixCapability = exports.LevelValueKey = void 0;
exports.LevelValueKey = "LevelValue";
exports.PrefixCapability = "#Capability#";
exports.PrefixLevelValue = "#LevelValue#";
exports.PrefixLevelLibrary = "#LevelLibrary#";
exports.EDCColor = {
    NORMAL: "color:#2E8B57",
    LAYER_CAPABILITY: "color:#8314BC",
    LAYER_LEVEL_VALUE: "color:#FF00FF",
    LAYER_MAPPING: "color:#C3BF0F",
    LAYER_DDA: "color:#0000FF",
    EXTRACT_MODEL: "color:#0099CC",
    LEVEL_MODEL: "color:#009933",
    ERROR: "color:#FF0000"
};
var getPercentileKey = function (e) {
    return "p#" + e;
};
exports.getPercentileKey = getPercentileKey;
var getCustomDataKey = function (e, t) {
    return e + "_" + t.join("_");
};
exports.getCustomDataKey = getCustomDataKey;

cc._RF.pop();