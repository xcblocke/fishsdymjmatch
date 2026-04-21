"use strict";
cc._RF.push(module, '7cc6fRt1b9IX4xQxieXN2ut', 'NormalNewRecordEffect');
// subpackages/r_normalNewRecord/Scripts/NormalNewRecordEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalNewRecordEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var NormalNewRecordEffect = /** @class */ (function (_super) {
    __extends(NormalNewRecordEffect, _super);
    function NormalNewRecordEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.NormalNewRecord;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(NormalNewRecordEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return NormalNewRecordEffect;
}(BaseEffect_1.default));
exports.NormalNewRecordEffect = NormalNewRecordEffect;

cc._RF.pop();