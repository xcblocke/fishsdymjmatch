"use strict";
cc._RF.push(module, 'ce9a0Oo28pA7ryJtTWGEZok', 'Tile2InitSlotBarEffect');
// Scripts/Tile2InitSlotBarEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitSlotBarEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2InitSlotBarEffect = /** @class */ (function (_super) {
    __extends(Tile2InitSlotBarEffect, _super);
    function Tile2InitSlotBarEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2InitSlotBar;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2InitSlotBarEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2InitSlotBarEffect;
}(BaseEffect_1.default));
exports.Tile2InitSlotBarEffect = Tile2InitSlotBarEffect;

cc._RF.pop();