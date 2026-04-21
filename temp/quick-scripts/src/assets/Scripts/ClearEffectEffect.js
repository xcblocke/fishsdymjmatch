"use strict";
cc._RF.push(module, '9be02PKVFRDlqW6bP1UwBqa', 'ClearEffectEffect');
// Scripts/ClearEffectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearEffectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ClearEffectEffect = /** @class */ (function (_super) {
    __extends(ClearEffectEffect, _super);
    function ClearEffectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClearEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ClearEffectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClearEffectEffect;
}(BaseEffect_1.default));
exports.ClearEffectEffect = ClearEffectEffect;

cc._RF.pop();