"use strict";
cc._RF.push(module, 'e331eGfN4tFkqAPNGQXSZtf', 'ClickCoverLockTipEffect');
// subpackages/l_coverTip/Scripts/ClickCoverLockTipEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickCoverLockTipEffect = void 0;
var BaseEffect_1 = require("../../../Scripts/BaseEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var ClickCoverLockTipEffect = /** @class */ (function (_super) {
    __extends(ClickCoverLockTipEffect, _super);
    function ClickCoverLockTipEffect(e) {
        var _this = _super.call(this, e) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ClickCoverLockTip;
        _this._data = null;
        _this._data = e;
        return _this;
    }
    Object.defineProperty(ClickCoverLockTipEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ClickCoverLockTipEffect;
}(BaseEffect_1.default));
exports.ClickCoverLockTipEffect = ClickCoverLockTipEffect;

cc._RF.pop();