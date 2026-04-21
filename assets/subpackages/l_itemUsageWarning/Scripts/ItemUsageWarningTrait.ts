import { EVT_MSG_KEY_EVENT_TOP_TOUCH_START } from '../../../Scripts/Config';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ItemUsageWarningTrait")
export default class ItemUsageWarningTrait extends Trait {
  countdownTimeout = -1;
  isCurRoundCleared = false;
  shuffleNode = null;
  tipsNode = null;
  static traitKey = "ItemUsageWarning";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "T2NodeBtmVw_onLoad"
    }, {
      event: "ClearT2Hlp_newClrEffEff"
    }, {
      event: "ClearT4Hlp_newClrEffEff"
    }]);
  }
  onMainGameCtrl_initRes(t, e) {
    e();
    t.ins.addPreloadRes("SkeletonData", ["l_itemUsageWarning:spine/gameplay_icon_prop"]);
    this.isCurRoundCleared = false;
  }
  onMainGameCtrl_nextLv(t, e) {
    e();
    this.stopCountdown();
    this.isCurRoundCleared = false;
  }
  onMainGameCtrl_uiDes(t, e) {
    e();
    this.stopCountdown();
    this.shuffleNode = null;
    this.tipsNode = null;
    this.isCurRoundCleared = false;
  }
  onMainGmVw_initLayers(t, e) {
    var o, n, i, r;
    e();
    var s = t.ins;
    this.shuffleNode = null === (n = null === (o = s.bottomRootNode) || void 0 === o ? void 0 : o.getChildByName("btnShuffle")) || void 0 === n ? void 0 : n.getChildByName("Background");
    this.tipsNode = null === (r = null === (i = s.bottomRootNode) || void 0 === i ? void 0 : i.getChildByName("btnPropHint")) || void 0 === r ? void 0 : r.getChildByName("Background");
  }
  onT2NodeBtmVw_onLoad(t, e) {
    var o, n;
    e();
    var i = t.ins;
    this.shuffleNode = null === (o = i.node.getChildByName("btnShuffle")) || void 0 === o ? void 0 : o.getChildByName("Background");
    this.tipsNode = null === (n = i.node.getChildByName("btnPropHint")) || void 0 === n ? void 0 : n.getChildByName("Background");
  }
  onIptBase_pushClrEff(t, e) {
    e();
    this.startCountdown();
    this.isCurRoundCleared = true;
  }
  onClearT2Hlp_newClrEffEff(t, e) {
    e();
    this.startCountdown();
    this.isCurRoundCleared = true;
  }
  onClearT4Hlp_newClrEffEff(t, e) {
    e();
    this.startCountdown();
    this.isCurRoundCleared = true;
  }
  stopCountdown() {
    if (this.countdownTimeout > 0) {
      clearTimeout(this.countdownTimeout);
      this.countdownTimeout = -1;
    }
  }
  @mj.traitEvent("ItemWarning_check")
  checkCondition() {
    return true;
  }
  startCountdown() {
    var t = this;
    if (this.checkCondition()) {
      this.stopCountdown();
      this.countdownTimeout = setTimeout(function () {
        t.countdownTimeout = -1;
        t.showWarningEffect();
      }, 1000 * this.getDelayTime());
    }
  }
  @mj.traitEvent("ItemWarning_delayTime")
  getDelayTime() {
    return null == this._traitData.delayTime ? 15 : this._traitData.delayTime;
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
    return _t;
  }
  onTopTouchStart() {
    this.isCurRoundCleared && this.startCountdown();
  }
  showWarningEffect() {
    if (MjGameType.Classic != UserModel.getInstance().getCurrentGameType()) {
      var t = this._traitData.effType,
        e = "",
        o = null;
      if (1 == t) {
        e = "refresh";
        o = this.shuffleNode;
      } else if (2 == t) {
        e = "hint";
        o = this.tipsNode;
      } else {
        var n = Math.random();
        e = n > 0.5 ? "refresh" : "hint";
        o = n > 0.5 ? this.shuffleNode : this.tipsNode;
      }
      this.showEffectByParent(o, e);
    }
  }
  showEffectByParent(t, e) {
    cc.isValid(t) && (BaseSpine.create("spine/gameplay_icon_prop", e, 1, this.onEffectComplete.bind(this), true, "l_itemUsageWarning").node.parent = t);
  }
  onEffectComplete() {
    this.isCurRoundCleared && this.startCountdown();
  }
}