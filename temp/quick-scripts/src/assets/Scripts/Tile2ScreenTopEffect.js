"use strict";
cc._RF.push(module, '9103bBEhZdNu4+VXqxZylUI', 'Tile2ScreenTopEffect');
// Scripts/Tile2ScreenTopEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScreenTopEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2ScreenTopEffect = /** @class */ (function (_super) {
    __extends(Tile2ScreenTopEffect, _super);
    function Tile2ScreenTopEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2ScreenTopEffect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2ScreenTopEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2ScreenTopEffect;
}(BaseEffect_1.default));
exports.Tile2ScreenTopEffect = Tile2ScreenTopEffect;

cc._RF.pop();