"use strict";
cc._RF.push(module, '64d2c4z/EhKB6dJFyfJAA5Q', 'Tile2RevertEffect');
// Scripts/Tile2RevertEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RevertEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2RevertEffect = /** @class */ (function (_super) {
    __extends(Tile2RevertEffect, _super);
    function Tile2RevertEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Revert;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2RevertEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2RevertEffect;
}(BaseEffect_1.default));
exports.Tile2RevertEffect = Tile2RevertEffect;

cc._RF.pop();