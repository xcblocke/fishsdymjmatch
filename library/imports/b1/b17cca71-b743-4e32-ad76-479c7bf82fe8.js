"use strict";
cc._RF.push(module, 'b17ccpxt0NOMq12R5x7+C/o', 'Tile2ScoreFlotEffect');
// Scripts/Tile2ScoreFlotEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScoreFlotEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ScoreFlotEffect = /** @class */ (function (_super) {
    __extends(Tile2ScoreFlotEffect, _super);
    function Tile2ScoreFlotEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ScoreFloat;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ScoreFlotEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ScoreFlotEffect;
}(BaseEffect_1.default));
exports.Tile2ScoreFlotEffect = Tile2ScoreFlotEffect;

cc._RF.pop();