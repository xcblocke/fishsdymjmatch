"use strict";
cc._RF.push(module, '400f89aPwNEvJtqiRN4UXGA', 'Tile2ResetMoveEffect');
// Scripts/Tile2ResetMoveEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ResetMoveEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ResetMoveEffect = /** @class */ (function (_super) {
    __extends(Tile2ResetMoveEffect, _super);
    function Tile2ResetMoveEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ResetMove;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ResetMoveEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ResetMoveEffect;
}(BaseEffect_1.default));
exports.Tile2ResetMoveEffect = Tile2ResetMoveEffect;

cc._RF.pop();