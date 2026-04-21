"use strict";
cc._RF.push(module, '94045chYA1CBJqHIZqCT+3Q', 'UpdateHitTipsPropEffect');
// Scripts/UpdateHitTipsPropEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHitTipsPropEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var UpdateHitTipsPropEffect = /** @class */ (function (_super) {
    __extends(UpdateHitTipsPropEffect, _super);
    function UpdateHitTipsPropEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.UpdateHitTipsProp;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(UpdateHitTipsPropEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return UpdateHitTipsPropEffect;
}(BaseEffect_1.default));
exports.UpdateHitTipsPropEffect = UpdateHitTipsPropEffect;

cc._RF.pop();