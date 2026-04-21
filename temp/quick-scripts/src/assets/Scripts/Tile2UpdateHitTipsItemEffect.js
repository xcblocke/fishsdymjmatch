"use strict";
cc._RF.push(module, 'c9d96nEYZFJZqsYwfBCt9bT', 'Tile2UpdateHitTipsItemEffect');
// Scripts/Tile2UpdateHitTipsItemEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateHitTipsItemEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2UpdateHitTipsItemEffect = /** @class */ (function (_super) {
    __extends(Tile2UpdateHitTipsItemEffect, _super);
    function Tile2UpdateHitTipsItemEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2UpdateHitTipsItem;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2UpdateHitTipsItemEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2UpdateHitTipsItemEffect;
}(BaseEffect_1.default));
exports.Tile2UpdateHitTipsItemEffect = Tile2UpdateHitTipsItemEffect;

cc._RF.pop();