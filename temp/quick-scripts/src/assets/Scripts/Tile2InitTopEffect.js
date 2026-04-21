"use strict";
cc._RF.push(module, '66800Z9utZI3b4Nij5X2Gxm', 'Tile2InitTopEffect');
// Scripts/Tile2InitTopEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitTopEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2InitTopEffect = /** @class */ (function (_super) {
    __extends(Tile2InitTopEffect, _super);
    function Tile2InitTopEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2InitTop;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2InitTopEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2InitTopEffect;
}(BaseEffect_1.default));
exports.Tile2InitTopEffect = Tile2InitTopEffect;

cc._RF.pop();