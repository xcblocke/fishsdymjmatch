"use strict";
cc._RF.push(module, '8ffbeydDjtHY5BHDzBxQBGc', 'Tile2ClearEffectEffect');
// Scripts/Tile2ClearEffectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearEffectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ClearEffectEffect = /** @class */ (function (_super) {
    __extends(Tile2ClearEffectEffect, _super);
    function Tile2ClearEffectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ClearEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ClearEffectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ClearEffectEffect;
}(BaseEffect_1.default));
exports.Tile2ClearEffectEffect = Tile2ClearEffectEffect;

cc._RF.pop();