import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EItemType } from '../../../../Scripts/user/IUserData';
@mj.class
export default class TaskBoxTipView extends BaseUI {
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
  static prefabUrl = "prefabs/task/TaskBoxTip";
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
    var a = function a(t, a, o) {
      if (t && a) {
        e.animProxy.attachNode("hook_icon_" + o, function () {
          return t;
        });
        e.animProxy.attachNode("hook_num_" + o, function () {
          return a;
        });
      }
    };
    this.showRewardsNodes = [];
    for (var o = 0; o < t.Items.length; o++) {
      var i = t.Items[o],
        r = t.Counts[o],
        n = this.getRewardNodes(i),
        s = n.icon,
        l = n.value;
      if (s && l) {
        l.getComponent(cc.Label).string = String(r);
        this.showRewardsNodes.push(s, l);
        a(s, l, o + 1);
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
      a = Math.floor(this.showRewardsNodes.length / 2);
    if (a > 0 && a <= 3) {
      try {
        for (var o = __values(this.showRewardsNodes), i = o.next(); !i.done; i = o.next()) {
          var r = i.value;
          cc.isValid(r) && (r.active = true);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          i && !i.done && (e = o.return) && e.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      var l = this.boxAnim.getComponent(sp.Skeleton);
      GameUtils.playSpine(l, "click_" + a, false, function () {
        GameUtils.playSpine(l, "init_" + a, true);
      });
    }
  }
  playOut() {
    var t = this,
      e = Math.floor(this.showRewardsNodes.length / 2);
    if (e > 0 && e < 3) {
      var a = this.boxAnim.getComponent(sp.Skeleton);
      GameUtils.playSpine(a, "out_" + e, false, function () {
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