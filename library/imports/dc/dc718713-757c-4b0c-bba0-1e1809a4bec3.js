"use strict";
cc._RF.push(module, 'dc718cTdXxLDLugHhgJpL7D', 'LevelStrategyBase');
// Scripts/LevelStrategyBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelStrategyBase = void 0;
var Common_1 = require("./types/Common");
var LevelStrategyBase = /** @class */ (function () {
    function LevelStrategyBase() {
        this.param = {};
    }
    LevelStrategyBase.prototype.fillLevelValue = function (e) {
        var t = this.getPValueKey(), o = e.levelModel.getCachedData(t, []);
        if (o.length !== e.levels.length) {
            o = this.calculateLevelValue(e);
            e.levelModel.cacheData(t, o);
        }
        for (var i = 0; i < e.levels.length; i++)
            e.levels[i][Common_1.LevelValueKey] = o[i];
        return e.levels;
    };
    LevelStrategyBase.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LAYER_LEVEL_VALUE; }
    };
    LevelStrategyBase.prototype.getPValueKey = function () {
        var e = this, t = Object.keys(this.param);
        t.sort();
        var o = t.map(function (t) {
            return t + "=" + e.param[t];
        }).join("_");
        return Common_1.PrefixLevelValue + "_" + this.name + "_[" + o + "]";
    };
    LevelStrategyBase.prototype.setStrategyParam = function (e) {
        this.param = e;
    };
    LevelStrategyBase.prototype.getStrategyParam = function () {
        return this.param;
    };
    return LevelStrategyBase;
}());
exports.LevelStrategyBase = LevelStrategyBase;

cc._RF.pop();