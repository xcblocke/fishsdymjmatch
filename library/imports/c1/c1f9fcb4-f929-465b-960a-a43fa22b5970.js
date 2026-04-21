"use strict";
cc._RF.push(module, 'c1f9fy0+SlGW5YKpD+iK1lw', 'HitTipsEffect');
// Scripts/HitTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var HitTipsEffect = /** @class */ (function (_super) {
    __extends(HitTipsEffect, _super);
    function HitTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.HitTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(HitTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return HitTipsEffect;
}(BaseEffect_1.default));
exports.HitTipsEffect = HitTipsEffect;

cc._RF.pop();