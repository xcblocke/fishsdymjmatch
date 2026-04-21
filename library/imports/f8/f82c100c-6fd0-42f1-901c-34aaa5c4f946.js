"use strict";
cc._RF.push(module, 'f82c1AMb9BC8ZAcNKqlxPlG', 'Tile2MagnetHideEffect');
// Scripts/Tile2MagnetHideEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetHideEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2MagnetHideEffect = /** @class */ (function (_super) {
    __extends(Tile2MagnetHideEffect, _super);
    function Tile2MagnetHideEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2MagnetHide;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2MagnetHideEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2MagnetHideEffect;
}(BaseEffect_1.default));
exports.Tile2MagnetHideEffect = Tile2MagnetHideEffect;

cc._RF.pop();