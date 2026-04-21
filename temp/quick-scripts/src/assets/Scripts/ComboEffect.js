"use strict";
cc._RF.push(module, '7b2f1b0FUtIf4ntkegwrMKg', 'ComboEffect');
// Scripts/ComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ComboEffect = /** @class */ (function (_super) {
    __extends(ComboEffect, _super);
    function ComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ComboEffect;
}(BaseEffect_1.default));
exports.ComboEffect = ComboEffect;

cc._RF.pop();