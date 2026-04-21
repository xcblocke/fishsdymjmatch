"use strict";
cc._RF.push(module, '11d79AQucRN9JiBrxcmxdNc', 'DuoxiaoComboEffect');
// Scripts/DuoxiaoComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DuoxiaoComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var DuoxiaoComboEffect = /** @class */ (function (_super) {
    __extends(DuoxiaoComboEffect, _super);
    function DuoxiaoComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.DuoxiaoCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(DuoxiaoComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DuoxiaoComboEffect;
}(BaseEffect_1.default));
exports.DuoxiaoComboEffect = DuoxiaoComboEffect;

cc._RF.pop();