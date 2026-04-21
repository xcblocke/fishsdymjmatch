"use strict";
cc._RF.push(module, '5f439QDDttOeKiYk9jPjL9V', 'Tile2ClearEffect');
// Scripts/Tile2ClearEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ClearEffect = /** @class */ (function (_super) {
    __extends(Tile2ClearEffect, _super);
    function Tile2ClearEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Clear;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ClearEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ClearEffect;
}(BaseEffect_1.default));
exports.Tile2ClearEffect = Tile2ClearEffect;

cc._RF.pop();