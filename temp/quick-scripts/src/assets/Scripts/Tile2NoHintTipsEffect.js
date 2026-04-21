"use strict";
cc._RF.push(module, '7d943rg9thPD5gp3TWqYrrb', 'Tile2NoHintTipsEffect');
// Scripts/Tile2NoHintTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoHintTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Tile2NoHintTipsEffect = /** @class */ (function (_super) {
    __extends(Tile2NoHintTipsEffect, _super);
    function Tile2NoHintTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Tile2NoHintTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Tile2NoHintTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Tile2NoHintTipsEffect;
}(BaseEffect_1.default));
exports.Tile2NoHintTipsEffect = Tile2NoHintTipsEffect;

cc._RF.pop();