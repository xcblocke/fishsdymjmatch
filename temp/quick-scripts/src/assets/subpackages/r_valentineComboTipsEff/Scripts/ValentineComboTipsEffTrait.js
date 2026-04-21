"use strict";
cc._RF.push(module, '1474dPq3ElPU6Mb0S49DT5W', 'ValentineComboTipsEffTrait');
// subpackages/r_valentineComboTipsEff/Scripts/ValentineComboTipsEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineComboTipsEffTrait = /** @class */ (function (_super) {
    __extends(ValentineComboTipsEffTrait, _super);
    function ValentineComboTipsEffTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._comboTipsEff = null;
        _this._comboParent = null;
        return _this;
    }
    ValentineComboTipsEffTrait_1 = ValentineComboTipsEffTrait;
    ValentineComboTipsEffTrait.prototype.onScoreItem_playComboAni = function (t, e) {
        t.ins;
        e();
    };
    ValentineComboTipsEffTrait.prototype.onScoreItem_forceUpdScore = function (t, e) {
        this.setComboActive(false);
        e();
    };
    ValentineComboTipsEffTrait.prototype.onScoreItem_updScore = function (t, e) {
        var o, i = t.ins, n = null === (o = t.args) || void 0 === o ? void 0 : o[2];
        this._comboParent = i.node;
        if (this.isComboTipsEffActive()) {
            i._skeCombo.node.active = false;
            this.setComboActive(n);
        }
        else {
            i._skeCombo.node.active = n;
            this.setComboActive(false);
        }
        e();
    };
    ValentineComboTipsEffTrait.prototype.setComboActive = function (t) {
        if (cc.isValid(this._comboParent))
            if (cc.isValid(this._comboTipsEff))
                this._comboTipsEff.node.active = t;
            else {
                if (!t)
                    return;
                this._comboTipsEff = BaseSpine_1.default.create("spine/gameplay_comboTips", "init", -1, null, false, ValentineComboTipsEffTrait_1.BundleName);
                this._comboTipsEff.node.parent = this._comboParent;
                this._comboTipsEff.node.position = cc.v3(0, -10, 0);
                this._comboTipsEff.node.active = true;
                this._comboTipsEff.node.setSiblingIndex(0);
            }
    };
    ValentineComboTipsEffTrait.prototype.isComboTipsEffActive = function () {
        if (null != this._traitData.comboTipsEffect)
            return this._traitData.comboTipsEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineComboTipsEffTrait_1;
    ValentineComboTipsEffTrait.traitKey = "ValentineComboTipsEff";
    ValentineComboTipsEffTrait.BundleName = "r_valentineComboTipsEff";
    ValentineComboTipsEffTrait = ValentineComboTipsEffTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineComboTipsEffTrait")
    ], ValentineComboTipsEffTrait);
    return ValentineComboTipsEffTrait;
}(Trait_1.default));
exports.default = ValentineComboTipsEffTrait;

cc._RF.pop();