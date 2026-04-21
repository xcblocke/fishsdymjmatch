"use strict";
cc._RF.push(module, 'c2f73fdxP5Lipw3VqGcPLLl', 'Match1PropTipsEffect');
// Scripts/Match1PropTipsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Match1PropTipsEffect = void 0;
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var Match1PropTipsEffect = /** @class */ (function (_super) {
    __extends(Match1PropTipsEffect, _super);
    function Match1PropTipsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.Match1PropTips;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(Match1PropTipsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return Match1PropTipsEffect;
}(BaseEffect_1.default));
exports.Match1PropTipsEffect = Match1PropTipsEffect;

cc._RF.pop();