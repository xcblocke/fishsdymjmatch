import Trait from '../../../Scripts/framework/trait/Trait';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import I18NComponent from '../../../Scripts/component/I18NComponent';
@mj.trait
@mj.class("RankCDLocalizationTrait")
export default class RankCDLocalizationTrait extends Trait {
  static traitKey = "RankCDLocalization";
  formatFunc(t, o) {
    var n = function n(t) {
        return t.toString().padStart(2, "0");
      },
      r = I18NStrings.get("Common_CountDown_Second", "{0}H {1}M");
    return I18NStrings.stringFormat(r, n(t), n(o));
  }
  onRankIntroVw_show(t, o) {
    var n = t.ins.getCDComp();
    if (cc.isValid(n)) {
      this.addI18NComp(n.node);
      n.setFormatFunc(this.formatFunc);
    }
    o();
  }
  onRankVw_show(t, o) {
    var n = t.ins.getCDComp();
    if (cc.isValid(n)) {
      this.addI18NComp(n.node);
      n.setFormatFunc(this.formatFunc);
    }
    o();
  }
  onRankBonusVw_show(t, o) {
    var n = t.ins.getCDComp();
    if (cc.isValid(n)) {
      this.addI18NComp(n.node);
      n.setFormatFunc(this.formatFunc);
    }
    o();
  }
  addI18NComp(t) {
    if (cc.isValid(t) && !t.getComponent(I18NComponent)) {
      t.addComponent(I18NComponent);
      I18NStrings.setText(t, "{0}H {1}M", "Common_CountDown_Second");
    }
  }
}