import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.class
export default class DailySignTipView extends BaseUI {
  @mj.node("BoxAnim")
  boxAnim: "BoxAnim" = null;
  @mj.node("blockBtn")
  blockBtn: "blockBtn" = null;
  @mj.node("HintTipIcon")
  hintTipIcon: "HintTipIcon" = null;
  @mj.node("RefreshTipIcon")
  refreshTipIcon: "RefreshTipIcon" = null;
  @mj.node("HintTipValue")
  hintTipValue: "HintTipValue" = null;
  @mj.node("RefreshTipValue")
  refreshTipValue: "RefreshTipValue" = null;
  animProxy = null;
  showRewardsNodes = [];
  onClickCallback = null;
  static prefabUrl = "prefabs/DailySignTip";
  static bundleName = "r_dailySignSimple";
  onLoad() {
    super.onLoad.call(this);
    this.initSpine();
    this.registerEvents();
  }
  registerEvents() {
    this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
  }
  onBlockBtnClick() {
    this.onClickCallback && this.onClickCallback();
  }
  hideRewardsNodes() {
    this.refreshTipIcon.active = false;
    this.refreshTipValue.active = false;
    this.hintTipIcon.active = false;
    this.hintTipValue.active = false;
  }
  initReward(t) {
    var e = this;
    this.hideRewardsNodes();
    this.showRewardsNodes = [];
    if (t.shuffleCount > 0) {
      this.refreshTipIcon.active = true;
      this.refreshTipValue.active = true;
      this.refreshTipValue.getComponent(cc.Label).string = String(t.shuffleCount);
      this.showRewardsNodes.push(this.refreshTipIcon, this.refreshTipValue);
      if (this.animProxy) {
        var i = this.showRewardsNodes.length / 2;
        this.animProxy.attachNode("hook_icon_" + i, function () {
          return e.refreshTipIcon;
        });
        this.animProxy.attachNode("hook_num_" + i, function () {
          return e.refreshTipValue;
        });
      }
    }
    if (t.hintCount > 0) {
      this.hintTipIcon.active = true;
      this.hintTipValue.active = true;
      this.hintTipValue.getComponent(cc.Label).string = String(t.hintCount);
      this.showRewardsNodes.push(this.hintTipIcon, this.hintTipValue);
      if (this.animProxy) {
        i = this.showRewardsNodes.length / 2;
        this.animProxy.attachNode("hook_icon_" + i, function () {
          return e.hintTipIcon;
        });
        this.animProxy.attachNode("hook_num_" + i, function () {
          return e.hintTipValue;
        });
      }
    }
  }
  initSpine() {
    if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
      this.animProxy = BaseSpine.refreshWithNode(this.boxAnim);
      this.animProxy.reset("");
      this.animProxy.markReady("");
    }
  }
  playIn() {
    var t,
      e,
      i = Math.floor(this.showRewardsNodes.length / 2);
    if (i > 0 && i < 3) {
      try {
        for (var o = __values(this.showRewardsNodes), n = o.next(); !n.done; n = o.next()) {
          var a = n.value;
          cc.isValid(a) && (a.active = true);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          n && !n.done && (e = o.return) && e.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      var l = this.boxAnim.getComponent(sp.Skeleton);
      GameUtils.playSpine(l, "click_" + i, false, function () {
        GameUtils.playSpine(l, "init_" + i, true);
      });
      l.node.scale = 0.9;
    }
  }
  playOut(t) {
    var e = this,
      i = Math.floor(this.showRewardsNodes.length / 2);
    if (i > 0 && i < 3) {
      var o = this.boxAnim.getComponent(sp.Skeleton);
      GameUtils.playSpine(o, "out_" + i, false, function () {
        t && t();
        e.node.destroy();
      });
    }
  }
  onDestroy() {
    super.onDestroy.call(this);
    if (this.animProxy) {
      this.animProxy.clear();
      this.animProxy = null;
    }
  }
}