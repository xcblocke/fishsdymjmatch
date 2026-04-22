import { EGetItemReasonId, EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EVT_MSG_KEY_SIMULATOR_NEXTLEVEL } from '../../../Scripts/core/simulator/events/SimulatorEvent';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import UIView from '../../../Scripts/framework/ui/UIView';
import AdManager from '../../../Scripts/base/ad/AdManager';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { DotAdVisit } from '../../../Scripts/gamePlay/dot/DAdVisit';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { DotGameBtnClick, EVictoryChestClickType } from '../../../Scripts/dot/DGameBtnClick';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import Adapter from '../../../Scripts/component/Adapter';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.class
export default class BoxOpenUI extends UIView {
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
  rewardLevel = 1;
  showReward = false;
  clickCount = 0;
  canClickBg = false;
  centerBtnPos = new cc.Vec3(0, 0, 0);
  skipClaimDot = false;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  static prefabUrl = "prefabs/boxReward/OpenAnim";
  get getAnimSkeleton() {
    return this.animSkeleton;
  }
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerButtons();
  }
  getRewardNodes() {
    return [{
      icon: this.refreshIcon,
      value: this.refreshValue
    }, {
      icon: this.hintIcon,
      value: this.hintValue
    }];
  }
  showBoxOpenUI(t) {
    if (this.showReward) {
      if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
        this.adClaimBtn.getComponent(cc.Button).interactable = true;
        this.claimBtn.getComponent(cc.Button).interactable = true;
      }
    } else {
      this.showReward = true;
      var e = t.config,
        i = t.rewardLevel;
      this.config = e;
      this.rewardLevel = i;
      this.updateLabel();
      this.playOpenAnim();
      DotAdRewardEnter.dot(true, EAdPosition.OutGameMotivation);
      DotGameBtnClick.dotVictoryChest(EVictoryChestClickType.DialogDisplayed);
    }
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
  @mj.traitEvent("BoxOpenUI_adBtnClick")
  onAdClaimBtnClick() {
    var t = this;
    this.adClaimBtn.getComponent(cc.Button).interactable = false;
    this.claimBtn.getComponent(cc.Button).interactable = false;
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
  @mj.traitEvent("BoxOpenUI_adSuccess")
  onAdSuccess() {
    var t,
      e = this;
    if (this.node && cc.isValid(this.node)) {
      this.deliverTools();
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
  @mj.traitEvent("BoxOpenUI_deliverTools")
  deliverTools() {
    var t = this.config.refresh * (this.config.adScale - 1),
      e = this.config.hint * (this.config.adScale - 1),
      i = UserModel.getInstance().getMainGameData().gameType,
      o = GameUtils.getInputAddPropType(i),
      n = {
        inputType: o,
        propType: "shuffle",
        num: t,
        reasonId: EGetItemReasonId.LevelBoxAd,
        reasonInfo: "主关卡宝箱奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
      },
      a = {
        inputType: o,
        propType: "hitTips",
        num: e,
        reasonId: EGetItemReasonId.LevelBoxAd,
        reasonInfo: "主关卡宝箱奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
      };
    GameInteraction.input(n);
    GameInteraction.input(a);
  }
  @mj.traitEvent("BoxOpenUI_getRwdEndCount")
  getRewardEndCount() {
    return [this.config.refresh * this.config.adScale, this.config.hint * this.config.adScale];
  }
  showAdRewards(t = true) {
    if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
      this.claimBtn.setPosition(this.centerBtnPos);
      this.adClaimBtn.active = false;
      this.claimBtn.getComponent(cc.Button).interactable = true;
      var e = __read(this.getRewardEndCount(), 2),
        i = e[0],
        o = e[1];
      this.skipClaimDot = true;
      if (t) {
        var n = function n(t, e) {
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
        n(this.refreshValue, i);
        n(this.hintValue, o);
      } else {
        this.refreshValue.getComponent(cc.Label).string = String(i);
        this.hintValue.getComponent(cc.Label).string = String(o);
      }
    }
  }
  @mj.traitEvent("BoxOpenUI_adFailed")
  onAdFailed() {
    if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      this.adClaimBtn.getComponent(cc.Button).interactable = true;
      this.claimBtn.getComponent(cc.Button).interactable = true;
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
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
  @mj.traitEvent("BoxOpenUI_updateLabel")
  updateLabel() {
    var t, e;
    this.updateRewardCount();
    I18NStrings.setText(null === (t = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim x" + this.config.adScale, "Common_Reward_Claim_Ads", [this.config.adScale]);
    I18NStrings.setText(null === (e = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim", "LeaderBoard_Reward_Claim");
    this.updateTipLabel();
  }
  @mj.traitEvent("BoxOpenUI_updateRwdCount")
  updateRewardCount() {
    this.hintValue.getComponent(cc.Label).string = this.config.hint.toString();
    this.refreshValue.getComponent(cc.Label).string = this.config.refresh.toString();
  }
  @mj.traitEvent("BoxOpenUI_updTipLabel")
  updateTipLabel() {
    I18NStrings.setText(this.rewardTip, "Rewards", "Common_Reward_Title");
  }
  @mj.traitEvent("BoxOpenUI_getAdBtnScale")
  getAdBtnScale() {
    return 1;
  }
  @mj.traitEvent("BoxOpenUI_initComponents")
  initComponents() {
    var t = this;
    this.centerBtnPos.addSelf(this.adClaimBtn.position);
    this.centerBtnPos.addSelf(this.claimBtn.position);
    this.centerBtnPos.multiplyScalar(0.5);
    this.addBgNode();
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
    this.reset();
  }
  addBgNode() {
    var t = new cc.Node("bg");
    BaseSprite.refreshWithNode(t, "texture/win/result_mask");
    t.setContentSize(1080, 1920);
    this.node.addChild(t);
    t.setSiblingIndex(0);
    t.addComponent(cc.Widget);
    t.getComponent(cc.Widget).isAlignTop = true;
    t.getComponent(cc.Widget).isAlignBottom = true;
    t.getComponent(cc.Widget).isAlignLeft = true;
    t.getComponent(cc.Widget).isAlignRight = true;
    t.getComponent(cc.Widget).top = 0;
    t.getComponent(cc.Widget).bottom = 0;
    t.getComponent(cc.Widget).left = 0;
    t.getComponent(cc.Widget).right = 0;
    Adapter.ignoreSafeRect(t);
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
    var t = this;
    this.reset();
    if (cc.isValid(this.animSkeleton) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
      cc.tween(this.node).delay(0.25).call(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }).start();
      this.animSkeleton.setEventListener(function (e, i) {
        "event_rewards" === i.data.name && t.onOpenAnimFinished();
      });
      this.animProxy.setAnimation("in", 1, function () {
        t.playRewardsAnim();
      });
      this.adClaimBtn.active = false;
      this.claimBtn.active = false;
      var e = this.getAdBtnScale();
      this.adClaimBtn.scale = 0.6 * e;
      this.claimBtn.scale = 0.6;
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
      this.playRewardsTipAnim(this.rewardTip);
    }
  }
  @mj.traitEvent("BoxOpenUI_isShowAdBtn")
  isShowAdBtn() {
    // return isNetworkAvailable();
    return false;
  }
  @mj.traitEvent("BoxOpenUI_plyRwdTipAnim")
  playRewardsTipAnim(t) {
    cc.tween(t).delay(0.9).call(function () {
      t.active = true;
      t.scale = 0.3;
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
  @mj.traitEvent("BoxOpenUI_onOpenFin")
  onOpenAnimFinished() {
    if (cc.isValid(this.refreshIcon) && cc.isValid(this.refreshValue) && cc.isValid(this.hintIcon) && cc.isValid(this.hintValue)) {
      this.refreshIcon.active = true;
      this.refreshValue.active = true;
      this.hintIcon.active = true;
      this.hintValue.active = true;
    }
  }
  @mj.traitEvent("BoxOpenUI_plyRwdAnim")
  playRewardsAnim() {
    cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init", -1);
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
      t.onNextLevel();
    }).start();
  }
  onNextLevel() {
    var t,
      e,
      i = mj.getClassByName("NormalBoxTrait");
    if (i && true === i.getInstance().eventEnabled) null === (t = this.delegate) || void 0 === t || t.close();else {
      var o = ControllerManager.getInstance().getControByName("WinController");
      o && o.close();
      null === (e = this.delegate) || void 0 === e || e.close();
      mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
    }
  }
}