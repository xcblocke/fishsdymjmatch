"use strict";
cc._RF.push(module, 'bc0aaHb9F1DPInMmOB7m2GU', 'Tile2RollCardEffect');
// Scripts/Tile2RollCardEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RollCardEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2RollCardEffect = /** @class */ (function (_super) {
    __extends(Tile2RollCardEffect, _super);
    function Tile2RollCardEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2RollCard;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2RollCardEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2RollCardEffect;
}(BaseEffect_1.default));
exports.Tile2RollCardEffect = Tile2RollCardEffect;

cc._RF.pop();