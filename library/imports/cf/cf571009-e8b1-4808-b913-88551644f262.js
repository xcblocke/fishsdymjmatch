"use strict";
cc._RF.push(module, 'cf571AJ6LFICLkTiFUWRPJi', 'DailyChallengeEndEffect');
// Scripts/DailyChallengeEndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyChallengeEndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DailyChallengeEndEffect = /** @class */ (function (_super) {
    __extends(DailyChallengeEndEffect, _super);
    function DailyChallengeEndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DailyChallengeEnd;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DailyChallengeEndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DailyChallengeEndEffect;
}(BaseEffect_1.default));
exports.DailyChallengeEndEffect = DailyChallengeEndEffect;

cc._RF.pop();