"use strict";
cc._RF.push(module, '79a831AL0BEebZbh3Houmgc', 'Tile2RevertVibrateEffect');
// Scripts/Tile2RevertVibrateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RevertVibrateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2RevertVibrateEffect = /** @class */ (function (_super) {
    __extends(Tile2RevertVibrateEffect, _super);
    function Tile2RevertVibrateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2RevertVibrate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2RevertVibrateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2RevertVibrateEffect;
}(BaseEffect_1.default));
exports.Tile2RevertVibrateEffect = Tile2RevertVibrateEffect;

cc._RF.pop();