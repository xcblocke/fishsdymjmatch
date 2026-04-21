"use strict";
cc._RF.push(module, '3f915D7HFBLzrFKVNLfZSzz', 'ShowLockMaskEffect');
// Scripts/ShowLockMaskEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowLockMaskEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ShowLockMaskEffect = /** @class */ (function (_super) {
    __extends(ShowLockMaskEffect, _super);
    function ShowLockMaskEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ShowLockMask;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ShowLockMaskEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ShowLockMaskEffect;
}(BaseEffect_1.default));
exports.ShowLockMaskEffect = ShowLockMaskEffect;

cc._RF.pop();