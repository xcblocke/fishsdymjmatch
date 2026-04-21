"use strict";
cc._RF.push(module, '24739Luok5O/atIDLny13l4', 'RankCDLocalizationTrait');
// subpackages/l_rankCDLocalization/Scripts/RankCDLocalizationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var RankCDLocalizationTrait = /** @class */ (function (_super) {
    __extends(RankCDLocalizationTrait, _super);
    function RankCDLocalizationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankCDLocalizationTrait.prototype.formatFunc = function (t, o) {
        var n = function n(t) {
            return t.toString().padStart(2, "0");
        }, r = I18NStrings_1.default.get("Common_CountDown_Second", "{0}H {1}M");
        return I18NStrings_1.default.stringFormat(r, n(t), n(o));
    };
    RankCDLocalizationTrait.prototype.onRankIntroVw_show = function (t, o) {
        var n = t.ins.getCDComp();
        if (cc.isValid(n)) {
            this.addI18NComp(n.node);
            n.setFormatFunc(this.formatFunc);
        }
        o();
    };
    RankCDLocalizationTrait.prototype.onRankVw_show = function (t, o) {
        var n = t.ins.getCDComp();
        if (cc.isValid(n)) {
            this.addI18NComp(n.node);
            n.setFormatFunc(this.formatFunc);
        }
        o();
    };
    RankCDLocalizationTrait.prototype.onRankBonusVw_show = function (t, o) {
        var n = t.ins.getCDComp();
        if (cc.isValid(n)) {
            this.addI18NComp(n.node);
            n.setFormatFunc(this.formatFunc);
        }
        o();
    };
    RankCDLocalizationTrait.prototype.addI18NComp = function (t) {
        if (cc.isValid(t) && !t.getComponent(I18NComponent_1.default)) {
            t.addComponent(I18NComponent_1.default);
            I18NStrings_1.default.setText(t, "{0}H {1}M", "Common_CountDown_Second");
        }
    };
    RankCDLocalizationTrait.traitKey = "RankCDLocalization";
    RankCDLocalizationTrait = __decorate([
        mj.trait,
        mj.class("RankCDLocalizationTrait")
    ], RankCDLocalizationTrait);
    return RankCDLocalizationTrait;
}(Trait_1.default));
exports.default = RankCDLocalizationTrait;

cc._RF.pop();