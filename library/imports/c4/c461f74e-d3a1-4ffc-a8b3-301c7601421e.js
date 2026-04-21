"use strict";
cc._RF.push(module, 'c461fdO06FP/KizMBx2AUIe', 'BeforeDailyChallengeEndEffect');
// Scripts/BeforeDailyChallengeEndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeforeDailyChallengeEndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var BeforeDailyChallengeEndEffect = /** @class */ (function (_super) {
    __extends(BeforeDailyChallengeEndEffect, _super);
    function BeforeDailyChallengeEndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.BeforeDailyChallengeEnd;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(BeforeDailyChallengeEndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return BeforeDailyChallengeEndEffect;
}(BaseEffect_1.default));
exports.BeforeDailyChallengeEndEffect = BeforeDailyChallengeEndEffect;

cc._RF.pop();