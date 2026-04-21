import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("ValentineComboTipsEffTrait")
export default class ValentineComboTipsEffTrait extends Trait {
  _comboTipsEff = null;
  _comboParent = null;
  static traitKey = "ValentineComboTipsEff";
  static BundleName = "r_valentineComboTipsEff";
  onScoreItem_playComboAni(t, e) {
    t.ins;
    e();
  }
  onScoreItem_forceUpdScore(t, e) {
    this.setComboActive(false);
    e();
  }
  onScoreItem_updScore(t, e) {
    var o,
      i = t.ins,
      n = null === (o = t.args) || void 0 === o ? void 0 : o[2];
    this._comboParent = i.node;
    if (this.isComboTipsEffActive()) {
      i._skeCombo.node.active = false;
      this.setComboActive(n);
    } else {
      i._skeCombo.node.active = n;
      this.setComboActive(false);
    }
    e();
  }
  setComboActive(t) {
    if (cc.isValid(this._comboParent)) if (cc.isValid(this._comboTipsEff)) this._comboTipsEff.node.active = t;else {
      if (!t) return;
      this._comboTipsEff = BaseSpine.create("spine/gameplay_comboTips", "init", -1, null, false, ValentineComboTipsEffTrait.BundleName);
      this._comboTipsEff.node.parent = this._comboParent;
      this._comboTipsEff.node.position = cc.v3(0, -10, 0);
      this._comboTipsEff.node.active = true;
      this._comboTipsEff.node.setSiblingIndex(0);
    }
  }
  isComboTipsEffActive() {
    if (null != this._traitData.comboTipsEffect) return this._traitData.comboTipsEffect;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}