"use strict";
cc._RF.push(module, '5c0f60K2a5L1q7k3DvZcbZv', 'Tile2HitTipsEffect');
// Scripts/Tile2HitTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2HitTipsEffect = /** @class */ (function (_super) {
    __extends(Tile2HitTipsEffect, _super);
    function Tile2HitTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2HitTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2HitTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2HitTipsEffect;
}(BaseEffect_1.default));
exports.Tile2HitTipsEffect = Tile2HitTipsEffect;

cc._RF.pop();