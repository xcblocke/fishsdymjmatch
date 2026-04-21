"use strict";
cc._RF.push(module, '3a692SGN5lFTrC6b2WoMfyx', 'MotivationalWordsEffectEffect');
// Scripts/MotivationalWordsEffectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivationalWordsEffectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var MotivationalWordsEffectEffect = /** @class */ (function (_super) {
    __extends(MotivationalWordsEffectEffect, _super);
    function MotivationalWordsEffectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.MotivationalWordsEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(MotivationalWordsEffectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return MotivationalWordsEffectEffect;
}(BaseEffect_1.default));
exports.MotivationalWordsEffectEffect = MotivationalWordsEffectEffect;

cc._RF.pop();