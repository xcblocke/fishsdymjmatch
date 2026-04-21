import Trait from '../../../Scripts/framework/trait/Trait';
import I18NComponent from '../../../Scripts/component/I18NComponent';
@mj.trait
@mj.class("FailTipRateByPropTrait")
export default class FailTipRateByPropTrait extends Trait {
  I18N_KEY = "Booster_Shuffle_text1";
  DEFAULT_TEXT = "{0}% of people used shuffle \nto pass this level";
  RANDOM_MIN = 10;
  RANDOM_MAX = 20;
  PROP_MAX_BONUS = 80;
  PROP_MULTIPLIER = 10;
  static traitKey = "FailTipRateByProp";
  onLoad() {
    super.onLoad.call(this);
  }
  onFailVw_show(t, e) {
    var o,
      r,
      n = t.ins,
      i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
    if (n && i) {
      try {
        var a = null !== (r = i.shuffleNum) && void 0 !== r ? r : 0,
          p = this.calculateRatio(a);
        this.updateDescText(n, p);
      } catch (t) {}
      e();
    } else e();
  }
  calculateRatio(t) {
    return this.getRandomInt(this.RANDOM_MIN, this.RANDOM_MAX) + Math.min(this.PROP_MAX_BONUS, t * this.PROP_MULTIPLIER);
  }
  getRandomInt(t, e) {
    return Math.floor(Math.random() * (e - t) * 10) / 10 + t;
  }
  updateDescText(t, e) {
    var o,
      r = null === (o = t.node) || void 0 === o ? void 0 : o.getChildByName("content_node");
    if (r) {
      var n = r.getChildByName("desc");
      if (n) {
        var i = n.getComponent(cc.Label);
        if (i) {
          i.fontSize;
          i.fontSize = 40;
          i.lineHeight = 60;
          var a = n.getComponent(I18NComponent);
          a || (a = n.addComponent(I18NComponent));
          a.setTranslateId(this.I18N_KEY, this.DEFAULT_TEXT, [e + "%"]);
        }
      }
    }
  }
}