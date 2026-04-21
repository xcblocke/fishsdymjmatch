"use strict";
cc._RF.push(module, '201f3vlW1VBEZ/ShQHGw2dv', 'Tile2FailEffect');
// Scripts/Tile2FailEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2FailEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2FailEffect = /** @class */ (function (_super) {
    __extends(Tile2FailEffect, _super);
    function Tile2FailEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Fail;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2FailEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2FailEffect;
}(BaseEffect_1.default));
exports.Tile2FailEffect = Tile2FailEffect;

cc._RF.pop();