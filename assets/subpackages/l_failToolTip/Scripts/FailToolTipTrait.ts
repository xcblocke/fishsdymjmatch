import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FailToolTipTrait")
export default class FailToolTipTrait extends Trait {
  static traitKey = "FailToolTip";
  get randomRange() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.randomRange) && void 0 !== e ? e : [10, 49];
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onFailVw_show(t, e) {
    var r = t.ins;
    if (cc.isValid(r) && cc.isValid(r.node)) {
      var o = cc.find("content_node/desc", r.node);
      if (cc.isValid(o)) {
        o.getComponent(cc.Label).lineHeight = 60;
        o.width = 720;
        var i = I18NStrings.get("keyXiPai_Tips_01", "{0}% of people used shuffle to pass this level"),
          n = [this.getPercent()],
          a = I18NStrings.stringFormat(i, n);
        I18NStrings.setText(o, a, "keyXiPai_Tips_01", n);
        e();
      } else e();
    } else e();
  }
  getPercent() {
    var t = __read(this.randomRange, 2),
      e = t[0],
      r = t[1],
      o = GameUtils.randomFloat(e, r),
      i = UserModel.getInstance().getCurrentGameData(),
      n = i.getTotalTileCount();
    return (o + 50 * i.getClearTileCount() / n).toFixed(1);
  }
}