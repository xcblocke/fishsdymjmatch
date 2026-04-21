"use strict";
cc._RF.push(module, '2e89fJ3pUFEgJ6KiC8wn6Ny', 'Tile2NotEnoughItemsEffect');
// Scripts/Tile2NotEnoughItemsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NotEnoughItemsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2NotEnoughItemsEffect = /** @class */ (function (_super) {
    __extends(Tile2NotEnoughItemsEffect, _super);
    function Tile2NotEnoughItemsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2NotEnoughItems;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2NotEnoughItemsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2NotEnoughItemsEffect;
}(BaseEffect_1.default));
exports.Tile2NotEnoughItemsEffect = Tile2NotEnoughItemsEffect;

cc._RF.pop();