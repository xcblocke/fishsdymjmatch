"use strict";
cc._RF.push(module, '7e4b5M0N6tDUqLwLyilayea', 'Tile2MagnetEffect');
// Scripts/Tile2MagnetEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2MagnetEffect = /** @class */ (function (_super) {
    __extends(Tile2MagnetEffect, _super);
    function Tile2MagnetEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Magnet;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2MagnetEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2MagnetEffect;
}(BaseEffect_1.default));
exports.Tile2MagnetEffect = Tile2MagnetEffect;

cc._RF.pop();