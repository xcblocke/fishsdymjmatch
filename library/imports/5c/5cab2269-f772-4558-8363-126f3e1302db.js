"use strict";
cc._RF.push(module, '5cab2Jp93JFWINjEm8+EwLb', 'ShuffleEffect');
// Scripts/ShuffleEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var ShuffleEffect = /** @class */ (function (_super) {
    __extends(ShuffleEffect, _super);
    function ShuffleEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Shuffle;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(ShuffleEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return ShuffleEffect;
}(BaseEffect_1.default));
exports.ShuffleEffect = ShuffleEffect;

cc._RF.pop();