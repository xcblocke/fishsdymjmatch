"use strict";
cc._RF.push(module, 'cb9bfT2FHFAO4pRAI5ZVGoq', 'AddLevelUnlockEffect');
// Scripts/AddLevelUnlockEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelUnlockEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var AddLevelUnlockEffect = /** @class */ (function (_super) {
    __extends(AddLevelUnlockEffect, _super);
    function AddLevelUnlockEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.AddLevelUnlock;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(AddLevelUnlockEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return AddLevelUnlockEffect;
}(BaseEffect_1.default));
exports.AddLevelUnlockEffect = AddLevelUnlockEffect;

cc._RF.pop();