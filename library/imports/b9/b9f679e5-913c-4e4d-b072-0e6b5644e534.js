"use strict";
cc._RF.push(module, 'b9f67nlkTxOTbByDmtWROU0', 'Tile2RestartEffect');
// Scripts/Tile2RestartEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RestartEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2RestartEffect = /** @class */ (function (_super) {
    __extends(Tile2RestartEffect, _super);
    function Tile2RestartEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2Restart;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2RestartEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2RestartEffect;
}(BaseEffect_1.default));
exports.Tile2RestartEffect = Tile2RestartEffect;

cc._RF.pop();