"use strict";
cc._RF.push(module, '311a8GgsLZL77ABCd8DLeiE', 'Tile2RemoveHitTipsEffect');
// Scripts/Tile2RemoveHitTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RemoveHitTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2RemoveHitTipsEffect = /** @class */ (function (_super) {
    __extends(Tile2RemoveHitTipsEffect, _super);
    function Tile2RemoveHitTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2RemoveHitTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2RemoveHitTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2RemoveHitTipsEffect;
}(BaseEffect_1.default));
exports.Tile2RemoveHitTipsEffect = Tile2RemoveHitTipsEffect;

cc._RF.pop();