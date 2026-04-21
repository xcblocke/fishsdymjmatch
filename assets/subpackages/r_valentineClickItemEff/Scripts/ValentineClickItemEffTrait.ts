import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("ValentineClickItemEffTrait")
export default class ValentineClickItemEffTrait extends Trait {
  static traitKey = "ValentineClickItemEff";
  getAniCfg() {
    return {
      bundleName: "r_valentineClickItemEff",
      spinePath: "spine/gameplay_propBtn_light",
      animName: "in"
    };
  }
  onGameUI_onBtnShuffle(t, e) {
    e();
    this.isClickItemEffActive() && this.addClickItemEff(t.ins.btnShuffle);
  }
  onGameUI_onBtnHitTips(t, e) {
    e();
    this.isClickItemEffActive() && this.addClickItemEff(t.ins.btnHitTips);
  }
  addClickItemEff(t) {
    var e = BaseSpine.create(this.getAniCfg().spinePath, this.getAniCfg().animName, 1, null, true, this.getAniCfg().bundleName);
    e.node.parent = t;
    e.node.setPosition(0, 0);
  }
  isClickItemEffActive() {
    if (null != this._traitData.clickItemEff) return this._traitData.clickItemEff;
    var t = mj.getClassByName("ValentineModel");
    return null != t && t.getInstance().isEffectActive();
  }
}