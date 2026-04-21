"use strict";
cc._RF.push(module, '7d2ccqKKcBI3rWGtBOE16Ce', 'DianZanEffect');
// subpackages/l_dianzan/Scripts/DianZanEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DianZanEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var DianZanEffect = /** @class */ (function (_super) {
    __extends(DianZanEffect, _super);
    function DianZanEffect(e) {
        var _this = _super.call(this, e) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ShowDianZan;
        _this._data = null;
        _this._data = e;
        return _this;
    }
    Object.defineProperty(DianZanEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return DianZanEffect;
}(BaseEffect_1.default));
exports.DianZanEffect = DianZanEffect;

cc._RF.pop();