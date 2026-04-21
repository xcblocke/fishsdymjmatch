"use strict";
cc._RF.push(module, '07b79wFo0tN0L9d+nqJc/Rp', 'HardLevelTipsEffect');
// subpackages/l_hardLevelTips/Scripts/HardLevelTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HardLevelTipsEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var HardLevelTipsEffect = /** @class */ (function (_super) {
    __extends(HardLevelTipsEffect, _super);
    function HardLevelTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.HardLevelTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(HardLevelTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return HardLevelTipsEffect;
}(BaseEffect_1.default));
exports.HardLevelTipsEffect = HardLevelTipsEffect;

cc._RF.pop();