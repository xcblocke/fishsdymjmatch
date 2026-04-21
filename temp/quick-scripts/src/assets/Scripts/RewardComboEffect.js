"use strict";
cc._RF.push(module, 'ed1a0hcihtCQqfqY6NqLZqX', 'RewardComboEffect');
// Scripts/RewardComboEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardComboEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var RewardComboEffect = /** @class */ (function (_super) {
    __extends(RewardComboEffect, _super);
    function RewardComboEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.RewardCombo;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(RewardComboEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return RewardComboEffect;
}(BaseEffect_1.default));
exports.RewardComboEffect = RewardComboEffect;

cc._RF.pop();