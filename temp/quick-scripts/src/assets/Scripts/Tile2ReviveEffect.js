"use strict";
cc._RF.push(module, '3b2f9ykUflBYZwPwj05YQKP', 'Tile2ReviveEffect');
// Scripts/Tile2ReviveEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ReviveEffect = /** @class */ (function (_super) {
    __extends(Tile2ReviveEffect, _super);
    function Tile2ReviveEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Revive;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ReviveEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ReviveEffect;
}(BaseEffect_1.default));
exports.Tile2ReviveEffect = Tile2ReviveEffect;

cc._RF.pop();