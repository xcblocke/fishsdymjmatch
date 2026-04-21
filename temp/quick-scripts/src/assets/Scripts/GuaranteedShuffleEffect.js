"use strict";
cc._RF.push(module, 'ba83apF0+BD17Bcbnuqr23t', 'GuaranteedShuffleEffect');
// Scripts/GuaranteedShuffleEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GuaranteedShuffleEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var GuaranteedShuffleEffect = /** @class */ (function (_super) {
    __extends(GuaranteedShuffleEffect, _super);
    function GuaranteedShuffleEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.GuaranteedShuffle;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(GuaranteedShuffleEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return GuaranteedShuffleEffect;
}(BaseEffect_1.default));
exports.GuaranteedShuffleEffect = GuaranteedShuffleEffect;

cc._RF.pop();