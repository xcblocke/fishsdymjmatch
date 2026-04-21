"use strict";
cc._RF.push(module, 'a2458HSk+NNhrEqf+LPESbu', 'Tile2DianZanEffect');
// Scripts/Tile2DianZanEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DianZanEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2DianZanEffect = /** @class */ (function (_super) {
    __extends(Tile2DianZanEffect, _super);
    function Tile2DianZanEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2DianZan;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2DianZanEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2DianZanEffect;
}(BaseEffect_1.default));
exports.Tile2DianZanEffect = Tile2DianZanEffect;

cc._RF.pop();