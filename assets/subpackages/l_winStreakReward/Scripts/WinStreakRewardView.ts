import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import UIView from '../../../Scripts/framework/ui/UIView';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import Adapter from '../../../Scripts/component/Adapter';
@mj.class
export default class WinStreakRewardView extends UIView {
  @mj.node("HintValue")
  hintValue: "HintValue" = null;
  @mj.node("RefreshValue")
  refreshValue: "RefreshValue" = null;
  @mj.node("HintIcon")
  hintIcon: "HintIcon" = null;
  @mj.node("RefreshIcon")
  refreshIcon: "RefreshIcon" = null;
  @mj.node("AdClaimBtn")
  adClaimBtn: "AdClaimBtn" = null;
  @mj.node("ClaimBtn")
  claimBtn: "ClaimBtn" = null;
  @mj.node("RewardsTip")
  rewardTip: "RewardsTip" = null;
  config = null;
  closeCallback = null;
  clickCount = 0;
  isClosing = false;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  static prefabUrl = "prefabs/boxReward/OpenAnim";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerButtons();
    mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
  }
  onDestroy() {
    cc.isValid(this.animSkeleton) && this.animSkeleton.setEventListener(null);
    cc.Tween.stopAllByTarget(this.node);
    cc.Tween.stopAllByTarget(this.claimBtn);
    cc.Tween.stopAllByTarget(this.rewardTip);
    mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    super.onDestroy.call(this);
  }
  showReward(t) {
    this.config = t.config;
    this.closeCallback = t.closeCallback;
    this.updateLabel();
    this.playOpenAnim();
  }
  initComponents() {
    var t = this;
    cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
    this.addBgNode();
    if (cc.isValid(this.animSkeleton)) {
      this.animProxy = BaseSpine.refreshWithNode(this.animSkeleton.node);
      this.animProxy.reset("");
      this.animProxy.markReady("");
      this.animProxy.attachNode("hook_icon_1", function () {
        return t.refreshIcon;
      });
      this.animProxy.attachNode("hook_num_1", function () {
        return t.refreshValue;
      });
      this.animProxy.attachNode("hook_icon_2", function () {
        return t.hintIcon;
      });
      this.animProxy.attachNode("hook_num_2", function () {
        return t.hintValue;
      });
    }
    this.reset();
  }
  addBgNode() {
    var t = new cc.Node("bg");
    BaseSprite.refreshWithNode(t, "texture/win/result_mask");
    t.setContentSize(1080, 1920);
    this.node.addChild(t);
    t.setSiblingIndex(0);
    t.addComponent(cc.Widget);
    var e = t.getComponent(cc.Widget);
    e.isAlignTop = true;
    e.isAlignBottom = true;
    e.isAlignLeft = true;
    e.isAlignRight = true;
    e.top = 0;
    e.bottom = 0;
    e.left = 0;
    e.right = 0;
    Adapter.ignoreSafeRect(t);
  }
  registerButtons() {
    this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
    this.OnButtonClick(this.node, {
      func: this.onBgClick.bind(this),
      ignoreClickAudio: true
    });
  }
  onBgClick() {
    this.clickCount++;
    this.clickCount >= 3 && this.hideAnim();
  }
  onClaimBtnClick() {
    this.hideAnim();
  }
  updateLabel() {
    var t;
    if (this.config) {
      cc.isValid(this.hintValue) && (this.hintValue.getComponent(cc.Label).string = this.config.hint.toString());
      cc.isValid(this.refreshValue) && (this.refreshValue.getComponent(cc.Label).string = this.config.shuffle.toString());
      cc.isValid(this.claimBtn) && I18NStrings.setText(null === (t = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim", "LeaderBoard_Reward_Claim");
      cc.isValid(this.rewardTip) && I18NStrings.setText(this.rewardTip, "Winning Streak", "Winning_streak_Title");
    }
  }
  reset() {
    cc.isValid(this.refreshIcon) && (this.refreshIcon.active = false);
    cc.isValid(this.refreshValue) && (this.refreshValue.active = false);
    cc.isValid(this.hintIcon) && (this.hintIcon.active = false);
    cc.isValid(this.hintValue) && (this.hintValue.active = false);
    cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
    cc.isValid(this.claimBtn) && (this.claimBtn.active = false);
    cc.isValid(this.rewardTip) && (this.rewardTip.active = false);
  }
  playOpenAnim() {
    var t = this;
    this.reset();
    if (cc.isValid(this.animSkeleton) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
      cc.tween(this.node).delay(0.25).call(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }).start();
      this.animSkeleton.setEventListener(function (e, i) {
        "event_rewards" === i.data.name && t.onOpenAnimFinished();
      });
      this.animProxy.setAnimation("in", 1, function () {
        t.playRewardsAnim();
      });
      this.claimBtn.active = false;
      this.claimBtn.scale = 0.6;
      cc.isValid(this.adClaimBtn) && this.claimBtn.setPosition(this.adClaimBtn.position);
      var e = cc.tween().to(0.2, {
        scale: 1.05
      }, {
        easing: cc.easing.quadOut
      }).to(0.17, {
        scale: 1
      }, {
        easing: cc.easing.quadIn
      });
      cc.tween(this.claimBtn).delay(1.73).call(function () {
        t.claimBtn.active = true;
      }).then(e).start();
      this.playRewardsTipAnim();
    }
  }
  playRewardsTipAnim() {
    var t = this;
    cc.isValid(this.rewardTip) && cc.tween(this.rewardTip).delay(0.9).call(function () {
      t.rewardTip.active = true;
      t.rewardTip.scale = 0.3;
    }).to(0.2, {
      scale: 1.3
    }, {
      easing: cc.easing.quadOut
    }).to(0.17, {
      scale: 0.8
    }, {
      easing: cc.easing.sineOut
    }).to(0.13, {
      scale: 1
    }, {
      easing: cc.easing.sineOut
    }).start();
  }
  onOpenAnimFinished() {
    cc.isValid(this.refreshIcon) && (this.refreshIcon.active = true);
    cc.isValid(this.refreshValue) && (this.refreshValue.active = true);
    cc.isValid(this.hintIcon) && (this.hintIcon.active = true);
    cc.isValid(this.hintValue) && (this.hintValue.active = true);
  }
  playRewardsAnim() {
    cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init", -1);
  }
  hideAnim() {
    var t = this;
    if (cc.isValid(this.node) && !this.isClosing) {
      this.isClosing = true;
      cc.tween(this.node).to(0.17, {
        scale: 1.05
      }, {
        easing: cc.easing.sineOut
      }).to(0.13, {
        scale: 0.3,
        opacity: 0
      }, {
        easing: cc.easing.sineOut
      }).call(function () {
        t.onClose();
      }).start();
    }
  }
  onClose() {
    var t, e;
    null === (t = this.closeCallback) || void 0 === t || t.call(this);
    null === (e = this.delegate) || void 0 === e || e.close();
  }
}