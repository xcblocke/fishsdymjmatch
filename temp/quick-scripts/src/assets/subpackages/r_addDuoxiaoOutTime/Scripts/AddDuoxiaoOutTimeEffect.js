"use strict";
cc._RF.push(module, '3f21aUIT3JEIboHJxxlmGgw', 'AddDuoxiaoOutTimeEffect');
// subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDuoxiaoOutTimeEffect = exports.ADD_DUOXIAO_OUT_TIME_BEHAVIOR = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
exports.ADD_DUOXIAO_OUT_TIME_BEHAVIOR = "addDuoxiaoOutTime";
var AddDuoxiaoOutTimeEffect = /** @class */ (function (_super) {
    __extends(AddDuoxiaoOutTimeEffect, _super);
    function AddDuoxiaoOutTimeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = exports.ADD_DUOXIAO_OUT_TIME_BEHAVIOR;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddDuoxiaoOutTimeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddDuoxiaoOutTimeEffect;
}(BaseEffect_1.default));
exports.AddDuoxiaoOutTimeEffect = AddDuoxiaoOutTimeEffect;

cc._RF.pop();