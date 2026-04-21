import UIView from '../../../Scripts/framework/ui/UIView';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import AgeSurveyModel from './AgeSurveyModel';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.class
export default class AgeSurveyRewardView extends UIView {
  @mj.node("ClaimBtn")
  claimBtn: "ClaimBtn" = null;
  @mj.node("AdClaimBtn")
  adClaimBtn: "AdClaimBtn" = null;
  @mj.node("RefreshValue")
  refreshValue: "RefreshValue" = null;
  @mj.node("HintValue")
  hintValue: "HintValue" = null;
  @mj.node("RefreshIcon")
  refreshIcon: "RefreshIcon" = null;
  @mj.node("HintIcon")
  hintIcon: "HintIcon" = null;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  @mj.node("RewardsTip")
  rewardTip: "RewardsTip" = null;
  centerBtnPos = cc.v3(0, -350, 0);
  claimBtnOriginalPos = null;
  adClaimBtnOriginalPos = null;
  animProxy = null;
  static bundleName = "r_ageSurvey";
  static prefabUrl = "prefabs/AgeSurveyReward";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.saveOriginalPositions();
    this.registerButtons();
  }
  initComponents() {
    var t = this;
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
      this.animSkeleton.setEventListener(function (e, r) {
        "event_rewards" === r.data.name && t.onOpenAnimFinished();
      });
      this.resetNodes();
    }
  }
  resetNodes() {
    cc.isValid(this.refreshIcon) && (this.refreshIcon.active = false);
    cc.isValid(this.refreshValue) && (this.refreshValue.active = false);
    cc.isValid(this.hintIcon) && (this.hintIcon.active = false);
    cc.isValid(this.hintValue) && (this.hintValue.active = false);
    cc.isValid(this.claimBtn) && (this.claimBtn.active = false);
    cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
    cc.isValid(this.rewardTip) && (this.rewardTip.active = false);
  }
  onOpenAnimFinished() {
    cc.isValid(this.refreshIcon) && (this.refreshIcon.active = true);
    cc.isValid(this.refreshValue) && (this.refreshValue.active = true);
    cc.isValid(this.hintIcon) && (this.hintIcon.active = true);
    cc.isValid(this.hintValue) && (this.hintValue.active = true);
  }
  saveOriginalPositions() {
    cc.isValid(this.claimBtn) && (this.claimBtnOriginalPos = this.claimBtn.position.clone());
    cc.isValid(this.adClaimBtn) && (this.adClaimBtnOriginalPos = this.adClaimBtn.position.clone());
  }
  registerButtons() {
    cc.isValid(this.claimBtn) && this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
    cc.isValid(this.adClaimBtn) && this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
  }
  initData(t) {
    this.updateRewardDisplay(t.rewardConfig);
    this.setupButtons(t.rewardConfig);
    this.playShowAnimation();
    DotAdRewardEnter.dot(true, EAdPosition.OutGameMotivation);
  }
  getArgs() {
    return this.delegate.args;
  }
  updateRewardDisplay(t) {
    cc.isValid(this.refreshValue) && (e = this.refreshValue.getComponent(cc.Label)) && (e.string = String(t.shuffleCount));
    if (cc.isValid(this.hintValue)) {
      var e;
      (e = this.hintValue.getComponent(cc.Label)) && (e.string = String(t.hintCount));
    }
  }
  setupButtons(t) {
    var e,
      r = t.adMultiplier || 1;
    cc.isValid(this.adClaimBtn) && I18NStrings.setText(null === (e = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim x" + r, "Common_Reward_Claim_Ads", [r]);
  }
  playShowAnimation() {
    var t = this;
    cc.tween(this.node).delay(0.25).call(function () {
      mj.audioManager.playEffect(EAudioID.Box);
    }).start();
    cc.isValid(this.animProxy) && this.animProxy.setAnimation("in", 1, function () {
      t.playIdleAnim();
    });
    this.playClaimBtnPopAnimation();
    this.playRewardsTipAnim();
  }
  playIdleAnim() {
    cc.isValid(this.animProxy) && this.animProxy.setAnimation("init", -1);
  }
  @mj.traitEvent("AgeRwdVw_getAdBtnScale")
  getAdBtnScale() {
    return 1;
  }
  playClaimBtnPopAnimation() {
    var t = this,
      e = this.getAdBtnScale(),
      r = cc.tween().to(0.2, {
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
      i = isNetworkAvailable(),
      n = this.getArgs().rewardConfig,
      a = (null == n ? void 0 : n.adMultiplier) || 1,
      s = 1.93;
    if (i && a > 1 && cc.isValid(this.adClaimBtn)) {
      this.adClaimBtn.active = false;
      this.adClaimBtn.scale = 0.6 * e;
      this.adClaimBtn.opacity = 0;
      cc.tween(this.adClaimBtn).delay(1.73).call(function () {
        cc.isValid(t.adClaimBtn) && (t.adClaimBtn.active = true);
      }).then(o.clone()).start();
    } else {
      cc.isValid(this.claimBtn) && this.claimBtn.setPosition(this.centerBtnPos);
      s = 1.73;
    }
    if (cc.isValid(this.claimBtn)) {
      this.claimBtn.active = false;
      this.claimBtn.scale = 0.6;
      this.claimBtn.opacity = 0;
      cc.tween(this.claimBtn).delay(s).call(function () {
        cc.isValid(t.claimBtn) && (t.claimBtn.active = true);
      }).then(r.clone()).start();
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
  onClaimBtnClick() {
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, false);
    this.giveRewards(1, false);
    this.hidePanel();
  }
  onAdClaimBtnClick() {
    var t = this;
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, true);
    DotAdRewardEnter.dot(false, EAdPosition.OutGameMotivation);
    var e = this.getArgs();
    AdManager.getInstance().playVideoAd(EAdPosition.OutGameMotivation, {
      onSuccess: function () {
        var r;
        t.giveRewards((null === (r = e.rewardConfig) || void 0 === r ? void 0 : r.adMultiplier) || 1, true);
        t.hidePanel();
      },
      onFailed: function () {}
    });
  }
  giveRewards(t, e) {
    var r = this.getArgs(),
      o = r.rewardConfig;
    o && AgeSurveyModel.getInstance().giveRewards(o, t, e, r.surveyIndex);
  }
  hidePanel() {
    var t = this;
    cc.tween(this.node).to(0.2, {
      scale: 1.05,
      opacity: 255
    }, {
      easing: "quadOut"
    }).to(0.13, {
      scale: 0.3,
      opacity: 0
    }, {
      easing: "sineOut"
    }).call(function () {
      t.delegate.closeAndCallback();
    }).start();
  }
}