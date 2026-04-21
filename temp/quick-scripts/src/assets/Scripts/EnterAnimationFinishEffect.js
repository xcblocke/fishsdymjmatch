"use strict";
cc._RF.push(module, '5cca6M1VHBG9YtM5LYbrwDo', 'EnterAnimationFinishEffect');
// Scripts/EnterAnimationFinishEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationFinishEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var EnterAnimationFinishEffect = /** @class */ (function (_super) {
    __extends(EnterAnimationFinishEffect, _super);
    function EnterAnimationFinishEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.EnterAnimationFinish;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(EnterAnimationFinishEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return EnterAnimationFinishEffect;
}(BaseEffect_1.default));
exports.EnterAnimationFinishEffect = EnterAnimationFinishEffect;

cc._RF.pop();