"use strict";
cc._RF.push(module, 'd3b58uJbt5EYJe/ZZZtjCF7', 'Tile2SlotCardNumChangeEffect');
// Scripts/Tile2SlotCardNumChangeEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2SlotCardNumChangeEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2SlotCardNumChangeEffect = /** @class */ (function (_super) {
    __extends(Tile2SlotCardNumChangeEffect, _super);
    function Tile2SlotCardNumChangeEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2SlotCardNumChange;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2SlotCardNumChangeEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2SlotCardNumChangeEffect;
}(BaseEffect_1.default));
exports.Tile2SlotCardNumChangeEffect = Tile2SlotCardNumChangeEffect;

cc._RF.pop();