"use strict";
cc._RF.push(module, '57808WOq0tBQrVBmvDmsgwT', 'Tile2HitTipsVibrateEffect');
// Scripts/Tile2HitTipsVibrateEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsVibrateEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2HitTipsVibrateEffect = /** @class */ (function (_super) {
    __extends(Tile2HitTipsVibrateEffect, _super);
    function Tile2HitTipsVibrateEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2HitTipsVibrate;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2HitTipsVibrateEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2HitTipsVibrateEffect;
}(BaseEffect_1.default));
exports.Tile2HitTipsVibrateEffect = Tile2HitTipsVibrateEffect;

cc._RF.pop();