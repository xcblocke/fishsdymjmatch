"use strict";
cc._RF.push(module, '09936XSPI9I75ZZTvHIRxxi', 'ClearLayerEffect');
// subpackages/r_clearLayerWords/Scripts/ClearLayerEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearLayerEffect = void 0;
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var ClearLayerEffect = /** @class */ (function (_super) {
    __extends(ClearLayerEffect, _super);
    function ClearLayerEffect(r) {
        var _this = _super.call(this, r) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClearLayer;
        _this._data = null;
        _this._data = r;
        return _this;
    }
    Object.defineProperty(ClearLayerEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClearLayerEffect;
}(BaseEffect_1.default));
exports.ClearLayerEffect = ClearLayerEffect;

cc._RF.pop();