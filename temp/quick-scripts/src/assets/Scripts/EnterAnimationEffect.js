"use strict";
cc._RF.push(module, 'ef5c5HcVqdMDJJ5u5hDkMwF', 'EnterAnimationEffect');
// Scripts/EnterAnimationEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var EnterAnimationEffect = /** @class */ (function (_super) {
    __extends(EnterAnimationEffect, _super);
    function EnterAnimationEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.EnterAnimation;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(EnterAnimationEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return EnterAnimationEffect;
}(BaseEffect_1.default));
exports.EnterAnimationEffect = EnterAnimationEffect;

cc._RF.pop();