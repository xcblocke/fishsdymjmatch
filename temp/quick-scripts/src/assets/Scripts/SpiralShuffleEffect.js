"use strict";
cc._RF.push(module, '797fbtx63NCU5Nsi4dYTByU', 'SpiralShuffleEffect');
// Scripts/SpiralShuffleEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiralShuffleEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var SpiralShuffleEffect = /** @class */ (function (_super) {
    __extends(SpiralShuffleEffect, _super);
    function SpiralShuffleEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.SpiralShuffle;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(SpiralShuffleEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return SpiralShuffleEffect;
}(BaseEffect_1.default));
exports.SpiralShuffleEffect = SpiralShuffleEffect;

cc._RF.pop();