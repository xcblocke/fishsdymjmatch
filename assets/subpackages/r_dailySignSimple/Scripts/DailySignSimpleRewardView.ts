import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { EAudioID, EGetItemReasonId, EItemId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import EventTrackingManager from '../../../Scripts/base/event/EventTrackingManager';
import { EventTrackingType } from '../../../Scripts/base/event/EventData';
import { DotGameGetItem } from '../../../Scripts/gamePlay/dot/DGameGetItem';
@mj.class
export default class DailySignSimpleRewardView extends BaseUI {
  @mj.node("RefreshIcon")
  refreshIcon: "RefreshIcon" = null;
  @mj.node("RefreshValue")
  refreshValue: "RefreshValue" = null;
  @mj.node("HintIcon")
  hintIcon: "HintIcon" = null;
  @mj.node("HintValue")
  hintValue: "HintValue" = null;
  @mj.node("ClaimBtn")
  claimBtn: "ClaimBtn" = null;
  @mj.node("AdClaimBtn")
  adClaimBtn: "AdClaimBtn" = null;
  _bgMask = null;
  _dayIndex = 0;
  _baseReward = null;
  _adScale = 2;
  _hasWatchedAd = false;
  showRewardsNodes = [];
  _rewardCount = 0;
  onCloseCallback = null;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  static prefabUrl = "prefabs/DailySignSimpleReward";
  static bundleName = "r_dailySignSimple";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerButtons();
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
  }
  showReward(t, e) {
    this._dayIndex = t;
    this._baseReward = e;
    this._hasWatchedAd = false;
    this.resetNodes();
    this.initRewardConfig(e);
    this.showBgMask(190);
    this.playInAnim();
    this.playClaimBtnPopAnimation();
  }
  initRewardConfig(t) {
    var e,
      i = this;
    this.hideAllRewardNodes();
    this.showRewardsNodes = [];
    var o = function o(t, e, o) {
        if (t && e) {
          i.animProxy.attachNode("hook_icon_" + o, function () {
            return t;
          });
          i.animProxy.attachNode("hook_num_" + o, function () {
            return e;
          });
        }
      },
      n = 1;
    if (t.hintCount > 0) {
      this.hintValue.getComponent(cc.Label).string = String(t.hintCount);
      this.showRewardsNodes.push(this.hintIcon, this.hintValue);
      o(this.hintIcon, this.hintValue, n);
      n++;
    }
    if (t.shuffleCount > 0) {
      this.refreshValue.getComponent(cc.Label).string = String(t.shuffleCount);
      this.showRewardsNodes.push(this.refreshIcon, this.refreshValue);
      o(this.refreshIcon, this.refreshValue, n);
      n++;
    }
    this._rewardCount = (t.hintCount > 0 ? 1 : 0) + (t.shuffleCount > 0 ? 1 : 0);
    if (cc.isValid(this.adClaimBtn)) {
      var a = null === (e = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node;
      a && I18NStrings.setText(a, "Claim x" + this._adScale, "Common_Reward_Claim_Ads", [this._adScale]);
    }
  }
  hideAllRewardNodes() {
    this.refreshIcon.active = false;
    this.refreshValue.active = false;
    this.hintIcon.active = false;
    this.hintValue.active = false;
  }
  playInAnim() {
    if (cc.isValid(this.animSkeleton)) {
      var t = "in_" + this._rewardCount;
      cc.tween(this.node).delay(0.25).call(function () {
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
  @mj.traitEvent("DSSimRwdVw_getAdBtnScale")
  getAdBtnScale() {
    return 1;
  }
  resetNodes() {
    [this.refreshIcon, this.refreshValue, this.hintIcon, this.hintValue, this.claimBtn, this.adClaimBtn].forEach(function (t) {
      cc.isValid(t) && (t.active = false);
    });
    var t = this.getAdBtnScale();
    if (cc.isValid(this.claimBtn)) {
      this.claimBtn.scale = 0.6;
      this.claimBtn.opacity = 0;
    }
    if (cc.isValid(this.adClaimBtn)) {
      this.adClaimBtn.scale = 0.6 * t;
      this.adClaimBtn.opacity = 0;
    }
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
  playClaimBtnPopAnimation() {
    var t = this;
    if (cc.isValid(this.claimBtn)) {
      var e = this.getAdBtnScale(),
        i = cc.tween().to(0.2, {
          scale: 1.05,
          opacity: 255
        }, {
          easing: cc.easing.quadOut
        }).to(0.17, {
          scale: 1,
          opacity: 255
        }, {
          easing: cc.easing.quadIn
        }),
        o = cc.tween().to(0.2, {
          scale: 1.05 * e,
          opacity: 255
        }, {
          easing: cc.easing.quadOut
        }).to(0.17, {
          scale: e,
          opacity: 255
        }, {
          easing: cc.easing.quadIn
        }),
        n = isNetworkAvailable(),
        a = this._adScale > 1,
        r = 0.9299999999999999,
        s = cc.v3(0, -410, 0);
      if (n && a && cc.isValid(this.adClaimBtn)) {
        cc.Tween.stopAllByTarget(this.adClaimBtn);
        this.adClaimBtn.active = false;
        this.adClaimBtn.scale = 0.6 * e;
        this.adClaimBtn.opacity = 0;
        cc.tween(this.adClaimBtn).delay(0.73).call(function () {
          cc.isValid(t.adClaimBtn) && (t.adClaimBtn.active = true);
        }).then(o.clone()).start();
      } else {
        this.claimBtn.setPosition(s);
        r = 0.73;
      }
      cc.Tween.stopAllByTarget(this.claimBtn);
      this.claimBtn.active = false;
      this.claimBtn.scale = 0.6;
      this.claimBtn.opacity = 0;
      cc.tween(this.claimBtn).delay(r).call(function () {
        cc.isValid(t.claimBtn) && (t.claimBtn.active = true);
      }).then(i.clone()).start();
    }
  }
  registerButtons() {
    var t = this;
    cc.isValid(this.claimBtn) && this.OnButtonClick("ClaimBtn", function () {
      t.onClaimClick(false);
    });
    cc.isValid(this.adClaimBtn) && this.OnButtonClick("AdClaimBtn", function () {
      t.onAdClaimClick();
    });
  }
  onClaimClick(t = false) {
    var e = t ? this._adScale : 1;
    t || EventTrackingManager.getInstance().trackEvent(EventTrackingType.BtnClick, {
      button_name: "玩家点击奖励按钮",
      day_index: this._dayIndex + 1,
      hint_count: this._baseReward.hintCount,
      shuffle_count: this._baseReward.shuffleCount,
      is_double: false
    });
    this.grantReward(e);
    this.closePanel();
  }
  onAdClaimClick() {
    var t = this;
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.BtnClick, {
      button_name: "玩家点击双倍奖励",
      day_index: this._dayIndex + 1,
      hint_count: this._baseReward.hintCount * this._adScale,
      shuffle_count: this._baseReward.shuffleCount * this._adScale,
      is_double: true
    });
    if (isNetworkAvailable()) {
      AdManager.getInstance().playVideoAd(EAdPosition.OutGameMotivation, {
        onSuccess: function () {
          t._hasWatchedAd = true;
          t.onClaimClick(true);
        },
        onFailed: function () {
          t.onClaimClick(false);
        }
      });
    } else {
      this.onClaimClick(false);
    }
  }
  grantReward(t) {
    var e = UserModel.getInstance().getCurrentGameData(),
      i = t > 1,
      o = this._dayIndex + 1,
      n = EGetItemReasonId.DailySignSimple,
      a = i ? "简易版登录_激励翻倍_第" + o + "天" : "简易版登录_第" + o + "天",
      r = this._baseReward.hintCount * t;
    if (r > 0) {
      e.changeHitTipsNums(r);
      var s = e.userModel.localData.hitTips,
        l = {
          itemId: EItemId.Hint,
          number: r,
          afterNum: s,
          reasonId: n,
          reasonInfo: a
        };
      DotGameGetItem.dotGetItem(e, l);
    }
    var c = this._baseReward.shuffleCount * t;
    if (c > 0) {
      e.changeShuffleNums(c);
      var d = e.userModel.localData.shuffle,
        h = {
          itemId: EItemId.Shuffle,
          number: c,
          afterNum: d,
          reasonId: n,
          reasonInfo: a
        };
      DotGameGetItem.dotGetItem(e, h);
    }
  }
  closePanel() {
    var t = this;
    cc.tween(this.node).to(0.2, {
      scale: 0.8,
      opacity: 0
    }).call(function () {
      t.onCloseCallback && t.onCloseCallback();
      cc.isValid(t.node) && t.node.destroy();
    }).start();
  }
}