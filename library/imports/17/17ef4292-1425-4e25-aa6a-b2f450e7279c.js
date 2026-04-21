"use strict";
cc._RF.push(module, '17ef4KSFCVOJapqsvRQ5yec', 'RemoveLockMaskEffect');
// Scripts/RemoveLockMaskEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveLockMaskEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var RemoveLockMaskEffect = /** @class */ (function (_super) {
    __extends(RemoveLockMaskEffect, _super);
    function RemoveLockMaskEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.RemoveLockMask;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(RemoveLockMaskEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return RemoveLockMaskEffect;
}(BaseEffect_1.default));
exports.RemoveLockMaskEffect = RemoveLockMaskEffect;

cc._RF.pop();