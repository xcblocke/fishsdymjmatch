import Trait from '../../../Scripts/framework/trait/Trait';
import { EVT_MSG_KEY_EVENT_TOP_TOUCH_START } from '../../../Scripts/Config';
@mj.trait
@mj.class("RankBoxTipsTrait")
export default class RankBoxTipsTrait extends Trait {
  static traitKey = "RankBoxTips";
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
    return _t;
  }
  @mj.traitEvent("RankBoxTips_touchStart")
  onTopTouchStart() {
    "function" == typeof this.dispatchEvent && this.dispatchEvent("msg_removeRankBoxTips");
  }
  onRankBoxBtn_boxClk(t, e) {
    var o,
      n = t.ins,
      r = n.getConfigReward(),
      i = [cc.v2(0, 80), cc.v2(0, 56), cc.v2(0, 56)][n.getRankNum() - 1];
    (null === (o = null == r ? void 0 : r.Items) || void 0 === o ? void 0 : o.length) > 0 && i && this.dispatchEvent("msg_addRankBoxTips", n.node, r, i);
    e();
  }
  onRankItem_btnTips(t, e) {
    var o,
      n = t.ins,
      r = n.getConfigReward();
    (null === (o = null == r ? void 0 : r.Items) || void 0 === o ? void 0 : o.length) > 0 && this.dispatchEvent("msg_addRankBoxTips", n.getBoxBtnNode(), r);
    e();
  }
}