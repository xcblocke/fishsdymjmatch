"use strict";
cc._RF.push(module, '3335cM6wKBC7LXrJBMJ8Bn8', 'StackShuffleEffect');
// Scripts/StackShuffleEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.StackShuffleEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var StackShuffleEffect = /** @class */ (function (_super) {
    __extends(StackShuffleEffect, _super);
    function StackShuffleEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.StackShuffle;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(StackShuffleEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return StackShuffleEffect;
}(BaseEffect_1.default));
exports.StackShuffleEffect = StackShuffleEffect;

cc._RF.pop();