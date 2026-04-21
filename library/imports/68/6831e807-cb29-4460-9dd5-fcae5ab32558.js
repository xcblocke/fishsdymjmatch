"use strict";
cc._RF.push(module, '6831egHyylEYJ3V/K5asyVY', 'DailyChallengeDateEffect');
// Scripts/DailyChallengeDateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeDateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DailyChallengeDateEffect = /** @class */ (function (_super) {
    __extends(DailyChallengeDateEffect, _super);
    function DailyChallengeDateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DailyChallengeDate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DailyChallengeDateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DailyChallengeDateEffect;
}(BaseEffect_1.default));
exports.DailyChallengeDateEffect = DailyChallengeDateEffect;

cc._RF.pop();