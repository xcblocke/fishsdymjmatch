import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EItemType } from '../../../Scripts/user/IUserData';
@mj.class
export default class BoxTips extends BaseUI {
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
  @mj.node("UndoTipIcon")
  undoTipIcon: "UndoTipIcon" = null;
  @mj.node("UndoTipValue")
  undoTipValue: "UndoTipValue" = null;
  animProxy = null;
  showRewardsNodes = [];
  static prefabUrl = "prefabs/rank/BoxTips";
  onLoad() {
    super.onLoad.call(this);
    this.initSpine();
    this.registerEvents();
  }
  registerEvents() {
    this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
  }
  onBlockBtnClick() {
    this.playOut();
  }
  hideRewardsNodes() {
    this.refreshTipIcon.active = false;
    this.refreshTipValue.active = false;
    this.hintTipIcon.active = false;
    this.hintTipValue.active = false;
    this.undoTipIcon.active = false;
    this.undoTipValue.active = false;
  }
  initBoxReward(t) {
    var e = this;
    this.hideRewardsNodes();
    var o = function o(t, o, n) {
      if (t && o) {
        e.animProxy.attachNode("hook_icon_" + n, function () {
          return t;
        });
        e.animProxy.attachNode("hook_num_" + n, function () {
          return o;
        });
      }
    };
    this.showRewardsNodes = [];
    for (var n = 0; n < t.Items.length; n++) {
      var a = t.Items[n],
        i = t.Counts[n],
        r = this.getRewardNodes(a),
        s = r.icon,
        l = r.value;
      if (s && l) {
        l.getComponent(cc.Label).string = String(i);
        this.showRewardsNodes.push(s, l);
        o(s, l, n + 1);
      }
    }
  }
  getRewardNodes(t) {
    switch (t) {
      case EItemType.Hint:
        return {
          icon: this.hintTipIcon,
          value: this.hintTipValue
        };
      case EItemType.Shuffle:
        return {
          icon: this.refreshTipIcon,
          value: this.refreshTipValue
        };
      case EItemType.Undo:
        return {
          icon: this.undoTipIcon,
          value: this.undoTipValue
        };
    }
    return {
      icon: null,
      value: null
    };
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
      o = Math.floor(this.showRewardsNodes.length / 2);
    if (o > 0 && o <= 3) {
      try {
        for (var n = __values(this.showRewardsNodes), a = n.next(); !a.done; a = n.next()) {
          var i = a.value;
          cc.isValid(i) && (i.active = true);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          a && !a.done && (e = n.return) && e.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      var l = this.boxAnim.getComponent(sp.Skeleton);
      GameUtils.playSpine(l, "click_" + o, false, function () {
        GameUtils.playSpine(l, "init_" + o, true);
      });
    }
  }
  playOut() {
    var t = this,
      e = Math.floor(this.showRewardsNodes.length / 2);
    if (e > 0 && e <= 3) {
      var o = this.boxAnim.getComponent(sp.Skeleton);
      GameUtils.playSpine(o, "out_" + e, false, function () {
        t.node.destroy();
      });
    }
  }
  stopAtFirstFrame(t) {
    cc.isValid(this.animProxy) && this.animProxy.stopAtFirstFrameOf(t);
  }
  onDestroy() {
    super.onDestroy.call(this);
    if (this.animProxy) {
      this.animProxy.clear();
      this.animProxy = null;
    }
  }
}