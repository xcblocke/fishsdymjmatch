"use strict";
cc._RF.push(module, '2a95b5tpkFMJZluCPNG1GY6', 'Tile2LuckyEffect');
// Scripts/Tile2LuckyEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2LuckyEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2LuckyEffect = /** @class */ (function (_super) {
    __extends(Tile2LuckyEffect, _super);
    function Tile2LuckyEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Lucky;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2LuckyEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2LuckyEffect;
}(BaseEffect_1.default));
exports.Tile2LuckyEffect = Tile2LuckyEffect;

cc._RF.pop();