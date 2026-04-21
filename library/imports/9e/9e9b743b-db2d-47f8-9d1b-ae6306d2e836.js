"use strict";
cc._RF.push(module, '9e9b7Q72y1H+J0brmMG0ug2', 'Tile2UpdateItemEffect');
// Scripts/Tile2UpdateItemEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateItemEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2UpdateItemEffect = /** @class */ (function (_super) {
    __extends(Tile2UpdateItemEffect, _super);
    function Tile2UpdateItemEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2UpdateItem;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2UpdateItemEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2UpdateItemEffect;
}(BaseEffect_1.default));
exports.Tile2UpdateItemEffect = Tile2UpdateItemEffect;

cc._RF.pop();