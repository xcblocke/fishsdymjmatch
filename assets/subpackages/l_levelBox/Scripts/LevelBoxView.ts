import { EGetItemReasonId, EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UIView from '../../../Scripts/framework/ui/UIView';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { DotGameBtnClick, EVictoryChestClickType } from '../../../Scripts/dot/DGameBtnClick';
import { EItemType, ItemTypeKey } from '../../../Scripts/user/IUserData';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { isNetworkAvailable } from '../../../Scripts/framework/utils/CommonUtils';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.class
export default class LevelBoxView extends UIView {
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
  rewardLevel = 1;
  config = null;
  rewardCount = 0;
  visibleRewardNodes = [];
  canClickBg = false;
  clickCount = 0;
  centerBtnPos = new cc.Vec3(0, 0, 0);
  skipClaimDot = false;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  static prefabUrl = "prefabs/levelBox/LevelBox";
  get getAnimSkeleton() {
    return this.animSkeleton;
  }
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerButtons();
  }
  getRewardNodes(t) {
    switch (t) {
      case EItemType.Hint:
        return {
          icon: this.hintIcon,
          value: this.hintValue
        };
      case EItemType.Shuffle:
        return {
          icon: this.refreshIcon,
          value: this.refreshValue
        };
    }
  }
  viewDidLoad(t) {
    this.config = t.rewards;
    this.rewardLevel = t.level;
    this.rewardCount = this.config.items.length;
    this.initRewardUI();
    this.playOpenAnim();
    DotAdRewardEnter.dot(true, EAdPosition.OutGameMotivation);
    DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.DialogDisplayed);
  }
  initRewardUI() {
    var t, e;
    try {
      for (var i = __values([EItemType.Hint, EItemType.Shuffle]), o = i.next(); !o.done; o = i.next()) {
        var n = o.value,
          r = this.getRewardNodes(n),
          s = r.icon,
          l = r.value;
        l.getComponent(cc.Label).string = "0";
        s.active = false;
        l.active = false;
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
    this.hookRewardNodes();
    this.updateRewardLabel(false);
    this.updateBtnLabel();
    this.updateTipLabel();
  }
  updateRewardLabel(t) {
    for (var e = t ? this.config.adScale : 1, i = 0; i < this.config.items.length; i++) {
      var o = this.config.items[i],
        n = this.getRewardNodes(o.item).value,
        r = e * o.count;
      n.getComponent(cc.Label).string = r.toString();
    }
  }
  hookNodes(t, e, i) {
    this.animProxy.attachNode("hook_icon_" + i, function () {
      return t;
    });
    this.animProxy.attachNode("hook_num_" + i, function () {
      return e;
    });
  }
  hookRewardNodes() {
    this.visibleRewardNodes = [];
    for (var t = 0; t < this.config.items.length; t++) {
      var e = this.config.items[t],
        i = this.getRewardNodes(e.item),
        o = i.icon,
        n = i.value;
      this.hookNodes(o, n, t + 1);
      this.visibleRewardNodes.push(o, n);
    }
  }
  updateBtnLabel() {
    var t, e;
    I18NStrings.setText(null === (t = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim x" + this.config.adScale, "Common_Reward_Claim_Ads", [this.config.adScale]);
    I18NStrings.setText(null === (e = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim", "LeaderBoard_Reward_Claim");
  }
  updateTipLabel() {
    I18NStrings.setText(this.rewardTip, "Rewards", "Common_Reward_Title");
  }
  viewDidShow() {
    this.enableButtons();
  }
  registerButtons() {
    this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
    this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
    this.OnButtonClick(this.node, {
      func: this.onBgClick.bind(this),
      ignoreClickAudio: true
    });
  }
  onBgClick() {
    var t;
    if (this.canClickBg) {
      this.clickCount++;
      this.clickCount >= 3 && (null === (t = this.delegate) || void 0 === t || t.close());
    }
  }
  disableButtons() {
    this.adClaimBtn.getComponent(cc.Button).interactable = false;
    this.claimBtn.getComponent(cc.Button).interactable = false;
  }
  enableButtons() {
    this.adClaimBtn.getComponent(cc.Button).interactable = true;
    this.claimBtn.getComponent(cc.Button).interactable = true;
  }
  @mj.traitEvent("LvBoxVw_adBtnClick")
  onAdClaimBtnClick() {
    var t = this;
    this.disableButtons();
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, true);
    DotAdRewardEnter.dot(false, EAdPosition.OutGameMotivation);
    DotGameAdShowStage.dot(false, "clickAdLock");
    DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.ClaimMultipleReward, this.config.adScale);
    if (AdManager.getInstance().checkVideoAdIsReady()) {
      this.canClickBg = true;
      mj.triggerInternalEvent("Chest_AdClkShow", this, []) || (this.node.parent.opacity = 0);
    }
    AdManager.getInstance().playVideoAd(EAdPosition.OutGameMotivation, {
      onSuccess: function () {
        t.onAdSuccess();
      },
      onFailed: function (e) {
        t.onAdFailed(e);
      }
    });
  }
  @mj.traitEvent("LvBoxVw_adSuccess")
  onAdSuccess() {
    var t,
      e = this;
    if (this.node && cc.isValid(this.node)) {
      for (var i = UserModel.getInstance().getMainGameData().gameType, o = GameUtils.getInputAddPropType(i), n = this.config.adScale - 1, r = 0; r < this.config.items.length; r++) {
        var a = this.config.items[r],
          l = {
            inputType: o,
            propType: ItemTypeKey[a.item],
            num: a.count * n,
            reasonId: EGetItemReasonId.LevelBoxAd,
            reasonInfo: "主关卡宝箱奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
          };
        GameInteraction.input(l);
      }
      mj.triggerInternalEvent("Chest_AdClose", this, [{
        refreshIcon: this.refreshIcon,
        refreshValue: this.refreshValue,
        hintIcon: this.hintIcon,
        hintValue: this.hintValue,
        adClaimBtn: this.adClaimBtn,
        claimBtn: this.claimBtn,
        adScale: null === (t = this.config) || void 0 === t ? void 0 : t.adScale,
        onClose: function () {
          return e.hideAnim();
        }
      }]) || this.hideAnim();
    }
  }
  showAdRewards(t = true) {
    var e, i, o, n;
    if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
      this.claimBtn.setPosition(this.centerBtnPos);
      this.adClaimBtn.active = false;
      this.claimBtn.getComponent(cc.Button).interactable = true;
      this.skipClaimDot = true;
      if (t) {
        var r = function r(t, e) {
          if (cc.isValid(t)) {
            var i = cc.instantiate(t);
            i.parent = t.parent;
            i.scale = t.scale;
            i.angle = t.angle;
            i.setPosition(t.position);
            i.getComponent(cc.Label).string = String(e);
            i.opacity = 0;
            t.opacity = 255;
            cc.tween(t).to(0.167, {
              opacity: 0,
              position: cc.v3(0, 30, 0)
            }, {
              easing: cc.easing.quadOut
            }).start();
            i.position = cc.v3(0, -37, 0);
            var o = cc.tween().to(0.3, {
                position: cc.v3(0, 3, 0)
              }, {
                easing: cc.easing.quadOut
              }).to(0.1, {
                position: cc.v3(0, 0, 0)
              }, {
                easing: cc.easing.quadIn
              }),
              n = cc.tween().to(0.4, {
                opacity: 255
              }, {
                easing: cc.easing.quadOut
              });
            cc.tween(i).parallel(o, n).start();
          }
        };
        try {
          for (var s = __values(this.config.items), l = s.next(); !l.done; l = s.next()) {
            var c = l.value;
            r(this.getRewardNodes(c.item).value, c.count * this.config.adScale);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            l && !l.done && (i = s.return) && i.call(s);
          } finally {
            if (e) throw e.error;
          }
        }
      } else try {
        for (var p = __values(this.config.items), d = p.next(); !d.done; d = p.next()) {
          c = d.value;
          this.getRewardNodes(c.item).value.getComponent(cc.Label).string = String(c.count * this.config.adScale);
        }
      } catch (t) {
        o = {
          error: t
        };
      } finally {
        try {
          d && !d.done && (n = p.return) && n.call(p);
        } finally {
          if (o) throw o.error;
        }
      }
    }
  }
  @mj.traitEvent("LvBoxVw_adFailed")
  onAdFailed() {
    if (this.node && cc.isValid(this.node)) {
      this.enableButtons();
      cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
    }
  }
  onClaimBtnClick() {
    if (this.skipClaimDot) this.hideAnim();else {
      DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, false);
      DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.ClaimReward);
      this.hideAnim();
    }
  }
  @mj.traitEvent("LvBoxVw_initComps")
  initComponents() {
    this.centerBtnPos.addSelf(this.claimBtn.position);
    this.centerBtnPos.addSelf(this.adClaimBtn.position);
    this.centerBtnPos.multiplyScalar(0.5);
    this.animProxy = BaseSpine.refreshWithNode(this.animSkeleton.node);
    this.animProxy.markReady("");
    this.hideNodes();
  }
  hideNodes() {
    if (cc.isValid(this.node)) {
      this.refreshIcon.active = false;
      this.refreshValue.active = false;
      this.hintIcon.active = false;
      this.hintValue.active = false;
      this.adClaimBtn.active = false;
      this.claimBtn.active = false;
      this.rewardTip.active = false;
    }
  }
  playOpenAnim() {
    this.hideNodes();
    this.playChestAppearAnim();
    this.playBtnAnim();
    this.playRewardsTipAnim();
  }
  @mj.traitEvent("LvBoxVw_getAdBtnScale")
  getAdBtnScale() {
    return 1;
  }
  playOpenedAnim() {
    if (cc.isValid(this.node)) {
      this.hideAnim();
      cc.Tween.stopAllByTarget(this.adClaimBtn);
      cc.Tween.stopAllByTarget(this.claimBtn);
      cc.Tween.stopAllByTarget(this.rewardTip);
      var t = this.getAdBtnScale();
      if (this.isShowAdBtn()) {
        this.adClaimBtn.active = true;
        this.adClaimBtn.scale = t;
      } else this.claimBtn.setPosition(this.adClaimBtn.position);
      this.claimBtn.active = true;
      this.claimBtn.scale = 1;
      this.rewardTip.scale = 1;
      this.playRewardsAnim();
      this.showRewardNodes();
      this.rewardTip.active = true;
      this.rewardTip.scale = 1;
    }
  }
  playChestAppearAnim() {
    var t = this;
    if (cc.isValid(this.node)) {
      this.scheduleOnce(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }, 0.25);
      this.animSkeleton.setEventListener(null);
      this.animSkeleton.setEventListener(function (e, i) {
        "event_rewards" === i.data.name && t.showRewardNodes();
      });
      this.animProxy.setAnimation("in_" + this.rewardCount, 1, function () {
        t.playRewardsAnim();
      });
    }
  }
  playBtnAnim() {
    var t = this;
    if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      this.adClaimBtn.active = false;
      this.claimBtn.active = false;
      var e = this.getAdBtnScale();
      this.adClaimBtn.scale = 0.6 * e;
      this.claimBtn.scale = 0.6;
      cc.Tween.stopAllByTarget(this.adClaimBtn);
      cc.Tween.stopAllByTarget(this.claimBtn);
      var i = cc.tween().to(0.2, {
          scale: 1.05 * e
        }, {
          easing: cc.easing.quadOut
        }).to(0.17, {
          scale: e
        }, {
          easing: cc.easing.quadIn
        }),
        o = cc.tween().to(0.2, {
          scale: 1.05
        }, {
          easing: cc.easing.quadOut
        }).to(0.17, {
          scale: 1
        }, {
          easing: cc.easing.quadIn
        }),
        n = 1.93;
      if (this.isShowAdBtn()) cc.tween(this.adClaimBtn).sequence(cc.tween().delay(1.73), cc.tween(this.adClaimBtn).call(function () {
        t.adClaimBtn.active = true;
      }), i.clone()).start();else {
        this.claimBtn.setPosition(this.adClaimBtn.position);
        n = 1.73;
      }
      cc.tween(this.claimBtn).sequence(cc.tween().delay(n), cc.tween(this.claimBtn).call(function () {
        t.claimBtn.active = true;
      }), o.clone()).start();
    }
  }
  @mj.traitEvent("LvBoxVw_isShowAdBtn")
  isShowAdBtn() {
    return false;
    // return isNetworkAvailable();
  }
  playRewardsTipAnim() {
    var t = this;
    cc.isValid(this.rewardTip) && cc.tween(this.rewardTip).delay(0.9).call(function () {
      if (cc.isValid(t.rewardTip)) {
        t.rewardTip.active = true;
        t.rewardTip.scale = 0.3;
      }
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
  showRewardNodes() {
    var t, e;
    if (this.visibleRewardNodes && !(this.visibleRewardNodes.length <= 0)) try {
      for (var i = __values(this.visibleRewardNodes), o = i.next(); !o.done; o = i.next()) {
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
  playRewardsAnim() {
    cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init_" + this.rewardCount, -1);
  }
  hideAnim() {
    var t = this;
    cc.isValid(this.node) && cc.tween(this.node).to(0.2, {
      scale: 1,
      opacity: 255
    }, {
      easing: cc.easing.quadOut
    }).to(0.17, {
      scale: 1.05,
      opacity: 255
    }, {
      easing: cc.easing.sineOut
    }).to(0.13, {
      scale: 0.3,
      opacity: 0
    }, {
      easing: cc.easing.sineOut
    }).call(function () {
      var e;
      null === (e = t.delegate) || void 0 === e || e.close();
    }).start();
  }
}