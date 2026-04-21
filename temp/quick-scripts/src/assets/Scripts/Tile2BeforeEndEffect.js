"use strict";
cc._RF.push(module, 'b87f5hHiqhAE7oUYOY29Q+C', 'Tile2BeforeEndEffect');
// Scripts/Tile2BeforeEndEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeEndEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2BeforeEndEffect = /** @class */ (function (_super) {
    __extends(Tile2BeforeEndEffect, _super);
    function Tile2BeforeEndEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2BeforeEnd;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2BeforeEndEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2BeforeEndEffect;
}(BaseEffect_1.default));
exports.Tile2BeforeEndEffect = Tile2BeforeEndEffect;

cc._RF.pop();