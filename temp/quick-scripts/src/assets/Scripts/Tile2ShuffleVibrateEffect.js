"use strict";
cc._RF.push(module, 'a84a2lFRrVIboEJ3lH+Rv/y', 'Tile2ShuffleVibrateEffect');
// Scripts/Tile2ShuffleVibrateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ShuffleVibrateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ShuffleVibrateEffect = /** @class */ (function (_super) {
    __extends(Tile2ShuffleVibrateEffect, _super);
    function Tile2ShuffleVibrateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ShuffleVibrate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ShuffleVibrateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ShuffleVibrateEffect;
}(BaseEffect_1.default));
exports.Tile2ShuffleVibrateEffect = Tile2ShuffleVibrateEffect;

cc._RF.pop();