"use strict";
cc._RF.push(module, 'e4890f8OGBPEqOld7Pgkfk1', 'Tile2PerfectEffect');
// Scripts/Tile2PerfectEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2PerfectEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2PerfectEffect = /** @class */ (function (_super) {
    __extends(Tile2PerfectEffect, _super);
    function Tile2PerfectEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Perfect;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2PerfectEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2PerfectEffect;
}(BaseEffect_1.default));
exports.Tile2PerfectEffect = Tile2PerfectEffect;

cc._RF.pop();