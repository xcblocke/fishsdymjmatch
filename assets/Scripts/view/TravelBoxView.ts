import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { EGetItemReasonId, EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { DataReader } from '../framework/data/DataReader';
import UIView from '../framework/ui/UIView';
import AdManager from '../base/ad/AdManager';
import { ConfigType } from '../gamePlay/base/data/ConfigType';
import { DotAdRewardEnter } from '../gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../gamePlay/dot/DAdVisit';
import { EAdPosition } from '../gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../gamePlay/dot/DGameAdShowStage';
import { DotGameBtnClick, EVictoryChestClickType } from '../dot/DGameBtnClick';
import { EItemType, ItemTypeKey } from '../user/IUserData';
import I18NStrings from '../framework/data/I18NStrings';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import { isNetworkAvailable } from '../framework/utils/CommonUtils';
@mj.class
export default class TravelBoxView extends UIView {
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
  static prefabUrl = "prefabs/journey/JourneyBox";
  get getAnimSkeleton() {
    return this.animSkeleton;
  }
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerButtons();
  }
  getRewardNodes(e) {
    switch (e) {
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
  viewDidLoad(e) {
    var t = null == e ? void 0 : e.reward;
    this.rewardLevel = t.lv;
    var o = DataReader.getByKey(ConfigType.reward_config, t.reward),
      n = o.IsMultiple ? 2 : 1;
    this.config = {
      items: [],
      adScale: n
    };
    for (var i = 0; i < o.Items.length; i++) this.config.items.push({
      item: o.Items[i],
      count: o.Counts[i]
    });
    this.rewardCount = this.config.items.length;
    this.updateLabel();
    this.playOpenAnim();
    DotAdRewardEnter.dot(true, EAdPosition.OutGameMotivation);
    DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.TravelDialogDisplayed);
  }
  viewDidShow() {
    this.adClaimBtn.getComponent(cc.Button).interactable = true;
    this.claimBtn.getComponent(cc.Button).interactable = true;
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
    var e;
    if (this.canClickBg) {
      this.clickCount++;
      this.clickCount >= 3 && (null === (e = this.delegate) || void 0 === e || e.close());
    }
  }
  @mj.traitEvent("TLBoxVw_adBtnClick")
  onAdClaimBtnClick() {
    var e = this;
    this.adClaimBtn.getComponent(cc.Button).interactable = false;
    this.claimBtn.getComponent(cc.Button).interactable = false;
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, true);
    DotAdRewardEnter.dot(false, EAdPosition.OutGameMotivation);
    DotGameAdShowStage.dot(false, "clickAdLock");
    DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.TravelClaimMultipleReward, this.config.adScale);
    if (AdManager.getInstance().checkVideoAdIsReady()) {
      this.canClickBg = true;
      mj.triggerInternalEvent("Chest_AdClkShow", this, []) || (this.node.parent.opacity = 0);
    }
    AdManager.getInstance().playVideoAd(EAdPosition.OutGameMotivation, {
      onSuccess: function () {
        e.onAdSuccess();
      },
      onFailed: function (t) {
        e.onAdFailed(t);
      }
    });
  }
  @mj.traitEvent("TLBoxVw_adSuccess")
  onAdSuccess() {
    var e = this;
    if (this.node && cc.isValid(this.node)) {
      for (var t = this.config.adScale - 1, o = 0; o < this.config.items.length; o++) {
        var n = this.config.items[o],
          i = {
            inputType: EGameInputEnum.AddProp,
            propType: ItemTypeKey[n.item],
            num: n.count * t,
            reasonId: EGetItemReasonId.JourneyAd,
            reasonInfo: "旅行活动奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
          };
        GameInteraction.input(i);
      }
      mj.triggerInternalEvent("Chest_AdClose", this, [{
        refreshIcon: this.refreshIcon,
        refreshValue: this.refreshValue,
        hintIcon: this.hintIcon,
        hintValue: this.hintValue,
        adClaimBtn: this.adClaimBtn,
        claimBtn: this.claimBtn,
        adScale: this.config.adScale,
        onClose: function () {
          return e.hideAnim();
        }
      }]) || this.hideAnim();
    }
  }
  showAdRewards(e = true) {
    var t, o, n, i;
    if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
      this.claimBtn.setPosition(this.centerBtnPos);
      this.adClaimBtn.active = false;
      this.claimBtn.getComponent(cc.Button).interactable = true;
      this.skipClaimDot = true;
      if (e) {
        var r = function r(e, t) {
          if (cc.isValid(e)) {
            var o = cc.instantiate(e);
            o.parent = e.parent;
            o.scale = e.scale;
            o.angle = e.angle;
            o.setPosition(e.position);
            o.getComponent(cc.Label).string = String(t);
            o.opacity = 0;
            e.opacity = 255;
            cc.tween(e).to(0.167, {
              opacity: 0,
              position: cc.v3(0, 30, 0)
            }, {
              easing: cc.easing.quadOut
            }).start();
            o.position = cc.v3(0, -37, 0);
            var n = cc.tween().to(0.3, {
                position: cc.v3(0, 3, 0)
              }, {
                easing: cc.easing.quadOut
              }).to(0.1, {
                position: cc.v3(0, 0, 0)
              }, {
                easing: cc.easing.quadIn
              }),
              i = cc.tween().to(0.4, {
                opacity: 255
              }, {
                easing: cc.easing.quadOut
              });
            cc.tween(o).parallel(n, i).start();
          }
        };
        try {
          for (var l = __values(this.config.items), s = l.next(); !s.done; s = l.next()) {
            var c = s.value;
            r(this.getRewardNodes(c.item).value, c.count * this.config.adScale);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (o = l.return) && o.call(l);
          } finally {
            if (t) throw t.error;
          }
        }
      } else try {
        for (var u = __values(this.config.items), p = u.next(); !p.done; p = u.next()) {
          c = p.value;
          this.getRewardNodes(c.item).value.getComponent(cc.Label).string = String(c.count * this.config.adScale);
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          p && !p.done && (i = u.return) && i.call(u);
        } finally {
          if (n) throw n.error;
        }
      }
    }
  }
  @mj.traitEvent("TLBoxVw_adFailed")
  onAdFailed() {
    if (this.node && cc.isValid(this.node) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      this.adClaimBtn.getComponent(cc.Button).interactable = true;
      this.claimBtn.getComponent(cc.Button).interactable = true;
      cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
    }
  }
  onClaimBtnClick() {
    if (this.skipClaimDot) this.hideAnim();else {
      DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, false);
      DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.TravelClaimReward);
      this.hideAnim();
    }
  }
  @mj.traitEvent("TLBoxVw_updateLabel")
  updateLabel() {
    var e, t, o, n;
    try {
      for (var i = __values([EItemType.Hint, EItemType.Shuffle]), r = i.next(); !r.done; r = i.next()) {
        var l = r.value,
          s = this.getRewardNodes(l),
          c = s.icon;
        (p = s.value).getComponent(cc.Label).string = "0";
        c.active = false;
        p.active = false;
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    this.visibleRewardNodes = [];
    for (var u = 0; u < this.config.items.length; u++) {
      l = this.config.items[u];
      var p,
        f = this.getRewardNodes(l.item);
      c = f.icon;
      (p = f.value).getComponent(cc.Label).string = l.count.toString();
      c.active = l.count > 0;
      p.active = l.count > 0;
      this.visibleRewardNodes.push(c, p);
      this.hookNodes(c, p, u + 1);
    }
    I18NStrings.setText(null === (o = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === o ? void 0 : o.node, "Claim x" + this.config.adScale, "Common_Reward_Claim_Ads", [this.config.adScale]);
    I18NStrings.setText(null === (n = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === n ? void 0 : n.node, "Claim", "LeaderBoard_Reward_Claim");
    this.updateTipLabel();
  }
  hookNodes(e, t, o) {
    this.animProxy.attachNode("hook_icon_" + o, function () {
      return e;
    });
    this.animProxy.attachNode("hook_num_" + o, function () {
      return t;
    });
  }
  @mj.traitEvent("TLBoxVw_updTipLabel")
  updateTipLabel() {
    I18NStrings.setText(this.rewardTip, "Rewards", "Common_Reward_Title");
  }
  @mj.traitEvent("TLBoxVw_getAdBtnScale")
  getAdBtnScale() {
    return 1;
  }
  @mj.traitEvent("TLBoxVw_initComponents")
  initComponents() {
    this.centerBtnPos.addSelf(this.adClaimBtn.position);
    this.centerBtnPos.addSelf(this.claimBtn.position);
    this.centerBtnPos.multiplyScalar(0.5);
    this.animProxy = BaseSpine.refreshWithNode(this.animSkeleton.node);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.reset();
  }
  reset() {
    if (cc.isValid(this.refreshIcon) && cc.isValid(this.refreshValue) && cc.isValid(this.hintIcon) && cc.isValid(this.hintValue) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
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
    var e = this;
    this.reset();
    if (cc.isValid(this.animSkeleton) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
      cc.tween(this.node).delay(0.25).call(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }).start();
      this.animSkeleton.setEventListener(function (t, o) {
        "event_rewards" === o.data.name && e.onOpenAnimFinished();
      });
      this.animProxy.setAnimation("in_" + this.rewardCount, 1, function () {
        e.playRewardsAnim();
      });
      var t = this.getAdBtnScale();
      this.adClaimBtn.active = false;
      this.claimBtn.active = false;
      this.adClaimBtn.scale = 0.6 * t;
      this.claimBtn.scale = 0.6;
      var o = cc.tween().to(0.2, {
          scale: 1.05
        }, {
          easing: cc.easing.quadOut
        }).to(0.17, {
          scale: 1
        }, {
          easing: cc.easing.quadIn
        }),
        n = cc.tween().to(0.2, {
          scale: 1.05 * t
        }, {
          easing: cc.easing.quadOut
        }).to(0.17, {
          scale: t
        }, {
          easing: cc.easing.quadIn
        }),
        i = 1.93;
      if (this.isShowAdBtn()) cc.tween(this.adClaimBtn).sequence(cc.tween().delay(1.73), cc.tween(this.adClaimBtn).call(function () {
        e.adClaimBtn.active = true;
      }), n.clone()).start();else {
        this.claimBtn.setPosition(this.adClaimBtn.position);
        i = 1.73;
      }
      cc.tween(this.claimBtn).sequence(cc.tween().delay(i), cc.tween(this.claimBtn).call(function () {
        e.claimBtn.active = true;
      }), o.clone()).start();
      this.playRewardsTipAnim(this.rewardTip);
    }
  }
  @mj.traitEvent("TLBoxVw_isShowAdBtn")
  isShowAdBtn() {
    return isNetworkAvailable();
  }
  @mj.traitEvent("TLBoxVw_plyRwdTipAnim")
  playRewardsTipAnim(e) {
    cc.tween(e).delay(0.9).call(function () {
      e.active = true;
      e.scale = 0.3;
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
  @mj.traitEvent("TLBoxVw_onOpenFin")
  onOpenAnimFinished() {
    var e, t;
    try {
      for (var o = __values(this.visibleRewardNodes), n = o.next(); !n.done; n = o.next()) {
        var i = n.value;
        cc.isValid(i) && (i.active = true);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  @mj.traitEvent("TLBoxVw_plyRwdAnim")
  playRewardsAnim() {
    cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init_" + this.rewardCount, -1);
  }
  hideAnim() {
    var e = this;
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
      var t;
      null === (t = e.delegate) || void 0 === t || t.close();
    }).start();
  }
}