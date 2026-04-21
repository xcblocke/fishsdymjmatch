"use strict";
cc._RF.push(module, '1cc4bk7dRVPBZRuBs5oaSd+', 'ValentineClickItemEffTrait');
// subpackages/r_valentineClickItemEff/Scripts/ValentineClickItemEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineClickItemEffTrait = /** @class */ (function (_super) {
    __extends(ValentineClickItemEffTrait, _super);
    function ValentineClickItemEffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineClickItemEffTrait.prototype.getAniCfg = function () {
        return {
            bundleName: "r_valentineClickItemEff",
            spinePath: "spine/gameplay_propBtn_light",
            animName: "in"
        };
    };
    ValentineClickItemEffTrait.prototype.onGameUI_onBtnShuffle = function (t, e) {
        e();
        this.isClickItemEffActive() && this.addClickItemEff(t.ins.btnShuffle);
    };
    ValentineClickItemEffTrait.prototype.onGameUI_onBtnHitTips = function (t, e) {
        e();
        this.isClickItemEffActive() && this.addClickItemEff(t.ins.btnHitTips);
    };
    ValentineClickItemEffTrait.prototype.addClickItemEff = function (t) {
        var e = BaseSpine_1.default.create(this.getAniCfg().spinePath, this.getAniCfg().animName, 1, null, true, this.getAniCfg().bundleName);
        e.node.parent = t;
        e.node.setPosition(0, 0);
    };
    ValentineClickItemEffTrait.prototype.isClickItemEffActive = function () {
        if (null != this._traitData.clickItemEff)
            return this._traitData.clickItemEff;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    ValentineClickItemEffTrait.traitKey = "ValentineClickItemEff";
    ValentineClickItemEffTrait = __decorate([
        mj.trait,
        mj.class("ValentineClickItemEffTrait")
    ], ValentineClickItemEffTrait);
    return ValentineClickItemEffTrait;
}(Trait_1.default));
exports.default = ValentineClickItemEffTrait;

cc._RF.pop();