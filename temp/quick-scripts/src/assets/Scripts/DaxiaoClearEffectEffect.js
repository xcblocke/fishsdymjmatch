"use strict";
cc._RF.push(module, 'deaddTOEphOGa+C3BT7cgPU', 'DaxiaoClearEffectEffect');
// Scripts/DaxiaoClearEffectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearEffectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DaxiaoClearEffectEffect = /** @class */ (function (_super) {
    __extends(DaxiaoClearEffectEffect, _super);
    function DaxiaoClearEffectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DaxiaoClearEffectEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DaxiaoClearEffectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DaxiaoClearEffectEffect;
}(BaseEffect_1.default));
exports.DaxiaoClearEffectEffect = DaxiaoClearEffectEffect;

cc._RF.pop();