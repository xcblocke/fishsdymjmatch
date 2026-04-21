"use strict";
cc._RF.push(module, 'b0d05zVnfVLTbq9GUqF4Q+C', 'FailTipRateByPropTrait');
// subpackages/l_failTipRateByProp/Scripts/FailTipRateByPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var FailTipRateByPropTrait = /** @class */ (function (_super) {
    __extends(FailTipRateByPropTrait, _super);
    function FailTipRateByPropTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.I18N_KEY = "Booster_Shuffle_text1";
        _this.DEFAULT_TEXT = "{0}% of people used shuffle \nto pass this level";
        _this.RANDOM_MIN = 10;
        _this.RANDOM_MAX = 20;
        _this.PROP_MAX_BONUS = 80;
        _this.PROP_MULTIPLIER = 10;
        return _this;
    }
    FailTipRateByPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailTipRateByPropTrait.prototype.onFailVw_show = function (t, e) {
        var o, r, n = t.ins, i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
        if (n && i) {
            try {
                var a = null !== (r = i.shuffleNum) && void 0 !== r ? r : 0, p = this.calculateRatio(a);
                this.updateDescText(n, p);
            }
            catch (t) { }
            e();
        }
        else
            e();
    };
    FailTipRateByPropTrait.prototype.calculateRatio = function (t) {
        return this.getRandomInt(this.RANDOM_MIN, this.RANDOM_MAX) + Math.min(this.PROP_MAX_BONUS, t * this.PROP_MULTIPLIER);
    };
    FailTipRateByPropTrait.prototype.getRandomInt = function (t, e) {
        return Math.floor(Math.random() * (e - t) * 10) / 10 + t;
    };
    FailTipRateByPropTrait.prototype.updateDescText = function (t, e) {
        var o, r = null === (o = t.node) || void 0 === o ? void 0 : o.getChildByName("content_node");
        if (r) {
            var n = r.getChildByName("desc");
            if (n) {
                var i = n.getComponent(cc.Label);
                if (i) {
                    i.fontSize;
                    i.fontSize = 40;
                    i.lineHeight = 60;
                    var a = n.getComponent(I18NComponent_1.default);
                    a || (a = n.addComponent(I18NComponent_1.default));
                    a.setTranslateId(this.I18N_KEY, this.DEFAULT_TEXT, [e + "%"]);
                }
            }
        }
    };
    FailTipRateByPropTrait.traitKey = "FailTipRateByProp";
    FailTipRateByPropTrait = __decorate([
        mj.trait,
        mj.class("FailTipRateByPropTrait")
    ], FailTipRateByPropTrait);
    return FailTipRateByPropTrait;
}(Trait_1.default));
exports.default = FailTipRateByPropTrait;

cc._RF.pop();