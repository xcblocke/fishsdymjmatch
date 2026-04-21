"use strict";
cc._RF.push(module, '939aab8HIxDpp+5lMTgCOtF', 'Tile2TouchStartEffect');
// Scripts/Tile2TouchStartEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2TouchStartEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2TouchStartEffect = /** @class */ (function (_super) {
    __extends(Tile2TouchStartEffect, _super);
    function Tile2TouchStartEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2TouchStart;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2TouchStartEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2TouchStartEffect;
}(BaseEffect_1.default));
exports.Tile2TouchStartEffect = Tile2TouchStartEffect;

cc._RF.pop();