"use strict";
cc._RF.push(module, '67abfVMTodPQoJH8JTniQnd', 'Tile2NormalBackEffect');
// Scripts/Tile2NormalBackEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NormalBackEffect = void 0;
var BaseEffect_1 = require("./BaseEffect");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var Tile2NormalBackEffect = /** @class */ (function (_super) {
    __extends(Tile2NormalBackEffect, _super);
    function Tile2NormalBackEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2NormalBack;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2NormalBackEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2NormalBackEffect;
}(BaseEffect_1.default));
exports.Tile2NormalBackEffect = Tile2NormalBackEffect;

cc._RF.pop();