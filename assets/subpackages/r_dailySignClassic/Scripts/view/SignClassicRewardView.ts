import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EAudioID } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import EventTrackingManager from '../../../../Scripts/base/event/EventTrackingManager';
import { EventTrackingType } from '../../../../Scripts/base/event/EventData';
export var ERewardType = {
  Daily: "daily",
  Box: "box"
};
@mj.class
export default class SignClassicRewardView extends BaseUI {
  @mj.node("RefreshIcon")
  refreshIcon: "RefreshIcon" = null;
  @mj.node("RefreshValue")
  refreshValue: "RefreshValue" = null;
  @mj.node("HintIcon")
  hintIcon: "HintIcon" = null;
  @mj.node("HintValue")
  hintValue: "HintValue" = null;
  _bgMask = null;
  _dayIndex = 0;
  _baseReward = null;
  _rewardType = ERewardType.Daily;
  _boxIndex = 0;
  showRewardsNodes = [];
  _rewardCount = 0;
  onCloseCallback = null;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  @mj.component("BoxAnim2", sp.Skeleton)
  boxAnimSkeleton: "BoxAnim2" = null;
  static prefabUrl = "prefab/SignClassicReward";
  static bundleName = "r_dailySignClassic";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
  }
  initComponents() {
    var t = this;
    if (cc.isValid(this.animSkeleton)) {
      this.animProxy = BaseSpine.refreshWithNode(this.animSkeleton.node);
      this.animProxy.reset("");
      this.animProxy.markReady("");
      this.animSkeleton.setEventListener(function (e, i) {
        "event_rewards" === i.data.name && t.onOpenAnimFinished();
      });
    }
    if (cc.isValid(this.boxAnimSkeleton)) {
      this.boxAnimProxy = BaseSpine.refreshWithNode(this.boxAnimSkeleton.node);
      this.boxAnimProxy.reset("");
      this.boxAnimProxy.markReady("");
      this.boxAnimSkeleton.node.active = false;
    }
  }
  showReward(t, e, i = ERewardType.Daily, o?) {
    var n = this;
    this._dayIndex = t;
    this._baseReward = e;
    this._rewardType = i;
    this._boxIndex = void 0 !== o ? o : 0;
    this.resetNodes();
    this.initRewardConfig(e);
    if (i === ERewardType.Box) {
      this.showBgMask(90);
      this.playBoxAnim();
    } else {
      this.showBgMask(210);
      this.playDailyAnim();
    }
    var a = i === ERewardType.Box ? "每日签到_宝箱奖励展示" : "每日签到_奖励展示";
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.PageShow, {
      page_name: a,
      day_index: t,
      hint_count: e.hint,
      shuffle_count: e.shuffle,
      reward_type: i
    });
    this.scheduleOnce(function () {
      n.closePanel();
    }, i === ERewardType.Box ? 2.2 : 1);
  }
  initRewardConfig(t) {
    var e = this;
    this.hideAllRewardNodes();
    this.showRewardsNodes = [];
    var i = function i(t, i, o) {
        if (t && i) {
          e.animProxy.attachNode("hook_icon_" + o, function () {
            return t;
          });
          e.animProxy.attachNode("hook_num_" + o, function () {
            return i;
          });
        }
      },
      o = 1;
    if (t.hint > 0) {
      this.hintValue.getComponent(cc.Label).string = String(t.hint);
      this.showRewardsNodes.push(this.hintIcon, this.hintValue);
      i(this.hintIcon, this.hintValue, o);
      o++;
    }
    if (t.shuffle > 0) {
      this.refreshValue.getComponent(cc.Label).string = String(t.shuffle);
      this.showRewardsNodes.push(this.refreshIcon, this.refreshValue);
      i(this.refreshIcon, this.refreshValue, o);
      o++;
    }
    this._rewardCount = (t.hint > 0 ? 1 : 0) + (t.shuffle > 0 ? 1 : 0);
  }
  hideAllRewardNodes() {
    this.refreshIcon.active = false;
    this.refreshValue.active = false;
    this.hintIcon.active = false;
    this.hintValue.active = false;
  }
  playBoxAnim() {
    var t = this;
    if (cc.isValid(this.boxAnimSkeleton) && this.boxAnimProxy) {
      this.boxAnimSkeleton.node.active = true;
      this.animSkeleton.node.active = false;
      cc.tween(this.node).delay(0.25).call(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }).start();
      var e = "in_" + (this._boxIndex + 1);
      this.boxAnimProxy.setAnimation(e, 1, function () {
        t.boxAnimSkeleton.node.active = false;
      });
      this.scheduleOnce(function () {
        t.animSkeleton.node.active = true;
        t.showBgMask(190);
        t.playDailyAnim();
      }, 1);
    } else this.playDailyAnim();
  }
  playDailyAnim() {
    if (cc.isValid(this.animSkeleton) && this.animProxy) {
      this.animSkeleton.node.active = true;
      var t = "in_" + this._rewardCount;
      this._rewardType !== ERewardType.Box && cc.tween(this.node).delay(0.25).call(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }).start();
      this.animProxy.setAnimation(t, 1, function () {});
    }
  }
  onOpenAnimFinished() {
    var t, e;
    try {
      for (var i = __values(this.showRewardsNodes), o = i.next(); !o.done; o = i.next()) {
        var n = o.value;
        cc.isValid(n) && (n.active = true);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (e = i.return) && e.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  playIdleAnim() {
    if (cc.isValid(this.animSkeleton)) {
      var t = "idle_" + this._rewardCount;
      this.animProxy.setAnimation(t, -1);
    }
  }
  resetNodes() {
    [this.refreshIcon, this.refreshValue, this.hintIcon, this.hintValue].forEach(function (t) {
      cc.isValid(t) && (t.active = false);
    });
  }
  showBgMask(t) {
    this._bgMask = cc.find("bg_mask", this.node);
    if (cc.isValid(this._bgMask)) {
      this._bgMask.opacity = 0;
      cc.tween(this._bgMask).to(0.2, {
        opacity: t
      }).start();
    }
  }
  closePanel() {
    var t = this;
    cc.tween(this.node).to(0.05, {
      scale: 0.8,
      opacity: 0
    }).call(function () {
      t.onCloseCallback && t.onCloseCallback();
      cc.isValid(t.node) && t.node.destroy();
    }).start();
  }
}