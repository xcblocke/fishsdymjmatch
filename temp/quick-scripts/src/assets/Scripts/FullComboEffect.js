"use strict";
cc._RF.push(module, 'ce9fdVzaa5DzYaVTqIBa+jw', 'FullComboEffect');
// Scripts/FullComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FullComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var FullComboEffect = /** @class */ (function (_super) {
    __extends(FullComboEffect, _super);
    function FullComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.FullCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(FullComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return FullComboEffect;
}(BaseEffect_1.default));
exports.FullComboEffect = FullComboEffect;

cc._RF.pop();