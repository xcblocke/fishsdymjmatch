"use strict";
cc._RF.push(module, 'a7db5MZqNJC5IqLA3yiQQFk', 'SwimlaneStrategy');
// Scripts/SwimlaneStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SwimlaneStrategy = void 0;
var IClassicExtractTypes_1 = require("./IClassicExtractTypes");
var SwimlaneStrategy = /** @class */ (function () {
    function SwimlaneStrategy() {
        this._config = IClassicExtractTypes_1.DEFAULT_SWIMLANE_CONFIG;
    }
    SwimlaneStrategy_1 = SwimlaneStrategy;
    SwimlaneStrategy.getInstance = function () {
        SwimlaneStrategy_1._instance || (SwimlaneStrategy_1._instance = new SwimlaneStrategy_1());
        return SwimlaneStrategy_1._instance;
    };
    SwimlaneStrategy.prototype.selectDifficultyType = function (e, t, o, n, r) {
        var a, l = this._config, s = false;
        if (o >= l.hardModeThresholdSeconds) {
            a = l.afterTimeDifficulty;
            l.hardModeThresholdSeconds, IClassicExtractTypes_1.EDifficultyType[a];
        }
        else {
            var c = t > 0 ? e / t : 0;
            if (c >= l.scoreThresholdPercent) {
                var u = l.afterThresholdRotation;
                a = u[r % u.length];
                (100 * c).toFixed(0), l.scoreThresholdPercent, IClassicExtractTypes_1.EDifficultyType[a];
                s = true;
            }
            else {
                a = this._selectRandomFromPool(l.beforeThresholdPool);
                (100 * c).toFixed(0), l.scoreThresholdPercent, IClassicExtractTypes_1.EDifficultyType[a];
            }
        }
        return {
            difficultyType: a,
            rotationUsed: s
        };
    };
    SwimlaneStrategy.prototype._selectRandomFromPool = function (e) {
        return 0 === e.length ? IClassicExtractTypes_1.EDifficultyType.Medium : e[Math.floor(Math.random() * e.length)];
    };
    var SwimlaneStrategy_1;
    SwimlaneStrategy = SwimlaneStrategy_1 = __decorate([
        mj.class("SwimlaneStrategy")
    ], SwimlaneStrategy);
    return SwimlaneStrategy;
}());
exports.SwimlaneStrategy = SwimlaneStrategy;

cc._RF.pop();