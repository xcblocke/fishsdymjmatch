"use strict";
cc._RF.push(module, '80471xHAUxNpqs/Pk7V8ZC7', 'ToggleShowLockMaskEffect');
// Scripts/ToggleShowLockMaskEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleShowLockMaskEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ToggleShowLockMaskEffect = /** @class */ (function (_super) {
    __extends(ToggleShowLockMaskEffect, _super);
    function ToggleShowLockMaskEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.ToggleShowLockMask;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ToggleShowLockMaskEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ToggleShowLockMaskEffect;
}(BaseEffect_1.default));
exports.ToggleShowLockMaskEffect = ToggleShowLockMaskEffect;

cc._RF.pop();