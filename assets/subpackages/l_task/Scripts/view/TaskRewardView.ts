import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import { TaskModel } from '../model/TaskModel';
import { isNetworkAvailable, createSingleColorScreenNode } from '../../../../Scripts/framework/utils/CommonUtils';
import BaseSpine from '../../../../Scripts/gamePlay/base/ui/BaseSpine';
import { DotGameBtnClick, EDailyTaskClickType } from '../../../../Scripts/dot/DGameBtnClick';
import Adapter from '../../../../Scripts/component/Adapter';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import { EAudioID } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EItemType } from '../../../../Scripts/user/IUserData';
import AdManager from '../../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotAdVisit } from '../../../../Scripts/gamePlay/dot/DAdVisit';
import { DotAdRewardEnter } from '../../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { DotGameAdShowStage } from '../../../../Scripts/gamePlay/dot/DGameAdShowStage';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
var w = {
  1: 3,
  2: 2,
  3: 4
};
var C = {
  1: 3,
  2: 2,
  3: 1
};
@mj.class
export default class TaskRewardView extends BaseUI {
  @mj.node("RefreshIcon")
  refreshIcon: "RefreshIcon" = null;
  @mj.node("RefreshValue")
  refreshValue: "RefreshValue" = null;
  @mj.node("HintIcon")
  hintIcon: "HintIcon" = null;
  @mj.node("HintValue")
  hintValue: "HintValue" = null;
  @mj.node("UndoIcon")
  undoIcon: "UndoIcon" = null;
  @mj.node("UndoValue")
  undoValue: "UndoValue" = null;
  @mj.node("RewardsTip")
  rewardsTip: "RewardsTip" = null;
  @mj.node("RewardsTip1")
  rewardsTip1: "RewardsTip1" = null;
  @mj.node("ClaimBtn")
  claimBtn: "ClaimBtn" = null;
  @mj.node("AdClaimBtn")
  adClaimBtn: "AdClaimBtn" = null;
  _bgMask = null;
  _stage = 1;
  showRewardsNodes = [];
  _rewardCount = 0;
  _adScale = 1;
  centerBtnPos = cc.v3(0, -410, 0);
  adClaimBtnOriginalPos = null;
  claimBtnOriginalPos = null;
  skipClaimDot = false;
  _rewardConfig = null;
  @mj.component("BoxAnim", sp.Skeleton)
  animSkeleton: "BoxAnim" = null;
  static prefabUrl = "prefabs/task/TaskReward";
  get getAnimSkeleton() {
    return this.animSkeleton;
  }
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.registerButtons();
  }
  showTaskReward(t) {
    this._stage = t;
    this.issueRewardAndAdvance();
    DotGameBtnClick.dotDailyTask(EDailyTaskClickType.Completed_DialogDisplayed, t);
    this.resetNodes();
    var e = TaskModel.getInstance().getStageBoxData(this._stage);
    e && this.initRewardConfig(e);
    this.showBgMask(150);
    this.playInAnim();
    this.playClaimBtnPopAnimation();
  }
  initComponents() {
    var t = this;
    if (cc.isValid(this.animSkeleton)) {
      cc.isValid(this.rewardsTip) && (this.rewardsTip.active = false);
      cc.isValid(this.rewardsTip1) && (this.rewardsTip1.active = false);
      cc.isValid(this.adClaimBtn) && (this.adClaimBtnOriginalPos = this.adClaimBtn.position.clone());
      cc.isValid(this.claimBtn) && (this.claimBtnOriginalPos = this.claimBtn.position.clone());
      this.animProxy = BaseSpine.refreshWithNode(this.animSkeleton.node);
      this.animProxy.reset("");
      this.animProxy.markReady("");
      this.animSkeleton.setEventListener(function (e, a) {
        "event_rewards" === a.data.name && t.onOpenAnimFinished();
      });
      this.addBgNode();
    }
  }
  initRewardConfig(t) {
    var e,
      a = this;
    this.hideAllRewardNodes();
    this._rewardConfig = t;
    this._adScale = t.IsMultiple ? 2 : 1;
    var o = function o(t, e, o) {
      if (t && e) {
        a.animProxy.attachNode("hook_icon_" + o, function () {
          return t;
        });
        a.animProxy.attachNode("hook_num_" + o, function () {
          return e;
        });
      }
    };
    this.showRewardsNodes = [];
    for (var i = 0; i < t.Items.length; i++) {
      var r = t.Items[i],
        n = t.Counts[i],
        s = this.getRewardNodes(r),
        l = s.icon,
        c = s.value;
      if (l && c) {
        c.getComponent(cc.Label).string = String(n);
        this.showRewardsNodes.push(l, c);
        o(l, c, i + 1);
      }
    }
    this._rewardCount = t.Items.length;
    if (cc.isValid(this.adClaimBtn)) {
      var p = this.getAdScale();
      I18NStrings.setText(null === (e = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim x" + p, "Common_Reward_Claim_Ads", [p]);
    }
  }
  @mj.traitEvent("TaskRwdVw_getAdScale")
  getAdScale() {
    return this._adScale;
  }
  @mj.traitEvent("TaskRwdVw_getAdBtnScale")
  getAdBtnScale() {
    return 1;
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
      case EItemType.Undo:
        return {
          icon: this.undoIcon,
          value: this.undoValue
        };
    }
    return {
      icon: null,
      value: null
    };
  }
  hideAllRewardNodes() {
    this.refreshIcon.active = false;
    this.refreshValue.active = false;
    this.hintIcon.active = false;
    this.hintValue.active = false;
    this.undoIcon.active = false;
    this.undoValue.active = false;
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
  resetNodes() {
    cc.isValid(this.rewardsTip) && (this.rewardsTip.opacity = 255);
    cc.isValid(this.rewardsTip1) && (this.rewardsTip1.opacity = 0);
    [this.refreshIcon, this.refreshValue, this.hintIcon, this.hintValue, this.undoIcon, this.undoValue, this.claimBtn, this.adClaimBtn, this.rewardsTip, this.rewardsTip1].forEach(function (t) {
      cc.isValid(t) && (t.active = false);
    });
    if (cc.isValid(this.claimBtn)) {
      this.claimBtn.scale = 0.6;
      this.claimBtn.opacity = 0;
      this.claimBtnOriginalPos && this.claimBtn.setPosition(this.claimBtnOriginalPos);
    }
    var t = this.getAdBtnScale();
    if (cc.isValid(this.adClaimBtn)) {
      this.adClaimBtn.scale = 0.6 * t;
      this.adClaimBtn.opacity = 0;
      this.adClaimBtnOriginalPos && this.adClaimBtn.setPosition(this.adClaimBtnOriginalPos);
    }
    this.skipClaimDot = false;
  }
  getInAnimName(t, e) {
    return "in_" + C[t] + "_" + w[e];
  }
  getIdleAnimName(t) {
    switch (t) {
      case 1:
        return "idle_2";
      case 2:
        return "idle_1";
      case 3:
        return "idle_3";
    }
    return "idle_1";
  }
  playInAnim() {
    var t = this;
    if (cc.isValid(this.animSkeleton)) {
      var e = this.getInAnimName(this._stage, this._rewardCount);
      cc.tween(this.node).delay(0.25).call(function () {
        mj.audioManager.playEffect(EAudioID.Box);
      }).start();
      this.animProxy.setAnimation(e, 1, function () {
        t.playIdleAnim();
      });
      cc.isValid(this.rewardsTip) && this.playTextAnim(this.rewardsTip);
      cc.isValid(this.rewardsTip1) && this.playTextFadeOut(this.rewardsTip1);
    }
  }
  onOpenAnimFinished() {
    var t, e;
    try {
      for (var a = __values(this.showRewardsNodes), o = a.next(); !o.done; o = a.next()) {
        var i = o.value;
        cc.isValid(i) && (i.active = true);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (e = a.return) && e.call(a);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  playIdleAnim() {
    if (cc.isValid(this.animSkeleton)) {
      var t = this.getIdleAnimName(this._rewardCount);
      this.animProxy.setAnimation(t, -1);
    }
  }
  registerButtons() {
    cc.isValid(this.claimBtn) && this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
    cc.isValid(this.adClaimBtn) && this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
  }
  playClaimBtnPopAnimation() {
    var t = this;
    if (cc.isValid(this.claimBtn)) {
      var e = this.getAdBtnScale(),
        a = cc.tween().to(0.2, {
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
        r = this.getAdScale() > 1,
        n = 1.93;
      if (i && r && cc.isValid(this.adClaimBtn)) {
        cc.Tween.stopAllByTarget(this.adClaimBtn);
        this.adClaimBtn.active = false;
        this.adClaimBtn.scale = 0.6 * e;
        this.adClaimBtn.opacity = 0;
        cc.tween(this.adClaimBtn).delay(1.73).call(function () {
          cc.isValid(t.adClaimBtn) && (t.adClaimBtn.active = true);
        }).then(o.clone()).start();
        DotAdRewardEnter.dot(true, EAdPosition.OutGameMotivation);
      } else {
        this.claimBtn.setPosition(this.centerBtnPos);
        n = 1.73;
      }
      cc.Tween.stopAllByTarget(this.claimBtn);
      this.claimBtn.active = false;
      this.claimBtn.scale = 0.6;
      this.claimBtn.opacity = 0;
      cc.tween(this.claimBtn).delay(n).call(function () {
        cc.isValid(t.claimBtn) && (t.claimBtn.active = true);
      }).then(a.clone()).start();
    }
  }
  onAdClaimBtnClick() {
    var t = this;
    DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, true);
    DotAdRewardEnter.dot(false, EAdPosition.OutGameMotivation);
    DotGameAdShowStage.dot(false, "clickAdLock");
    DotGameBtnClick.dotDailyTask(EDailyTaskClickType.Completed_ClaimRewardAd, this._stage, {
      adScale: this.getAdScale()
    });
    AdManager.getInstance().playVideoAd(EAdPosition.OutGameMotivation, {
      onSuccess: function () {
        t.onAdSuccess();
      },
      onFailed: function () {}
    });
  }
  onAdSuccess() {
    var t = this;
    if (this.node && cc.isValid(this.node)) {
      TaskModel.getInstance().triggerStageReward(this._stage, this.getAdScale());
      mj.triggerInternalEvent("Chest_AdClose", this, [{
        refreshIcon: this.refreshIcon,
        refreshValue: this.refreshValue,
        hintIcon: this.hintIcon,
        hintValue: this.hintValue,
        adClaimBtn: this.adClaimBtn,
        claimBtn: this.claimBtn,
        adScale: this.getAdScale(),
        onClose: function () {
          return t.hidePanel();
        }
      }]) || this.hidePanel();
    }
  }
  showAdRewards() {
    if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.claimBtn.setPosition(this.centerBtnPos);
      this.adClaimBtn.active = false;
      this.skipClaimDot = true;
      if (this._rewardConfig) for (var t = this.getAdScale(), e = 0; e < this._rewardConfig.Items.length; e++) {
        var a = this._rewardConfig.Items[e],
          o = this._rewardConfig.Counts[e],
          i = this.getRewardNodes(a).value;
        i && (i.getComponent(cc.Label).string = String(o * t));
      }
    }
  }
  onClaimBtnClick() {
    var t = this.claimBtn;
    if (cc.isValid(t)) if (this.skipClaimDot) this.hidePanel();else {
      DotAdVisit.dotAdVisitRewardAD(EAdPosition.OutGameMotivation, false);
      DotGameBtnClick.dotDailyTask(EDailyTaskClickType.Completed_ClaimReward, this._stage);
      this.hidePanel();
    }
  }
  issueRewardAndAdvance() {
    var t = TaskModel.getInstance();
    t.triggerStageReward(this._stage);
    t.nextStage(this._stage);
  }
  @mj.traitEvent("TaskReward_hidePanel")
  hidePanel() {
    var t,
      e = this;
    null === (t = this.delegate) || void 0 === t || t.viewDoAction("advanceToNextStage");
    if (cc.isValid(this.node)) {
      this.hideBgMask();
      cc.tween(this.node).to(0.2, {
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
        e.node.scale = 1;
        e.node.opacity = 255;
        e.node.active = false;
      }).start();
    } else this.node.active = false;
  }
  playTextAnim(t) {
    var e = t;
    if (cc.isValid(e)) {
      cc.Tween.stopAllByTarget(e);
      cc.tween(e).delay(0.5).call(function () {
        e.scale = 0.3;
        e.active = true;
      }).to(0.2, {
        scale: 1.3
      }, {
        easing: cc.easing.sineOut
      }).to(0.17, {
        scale: 0.9
      }, {
        easing: cc.easing.sineInOut
      }).to(0.13, {
        scale: 1
      }, {
        easing: cc.easing.sineInOut
      }).start();
    }
  }
  playTextFadeOut(t) {
    var e = t;
    if (cc.isValid(e)) {
      cc.Tween.stopAllByTarget(e);
      var a = cc.tween(e).delay(0.5).call(function () {
          e.opacity = 0;
          e.scale = 0.3;
          e.active = true;
        }).to(0.2, {
          scale: 1.3
        }, {
          easing: cc.easing.sineOut
        }).to(0.17, {
          opacity: 50,
          scale: 0.9
        }, {
          easing: cc.easing.sineInOut
        }).to(0.13, {
          scale: 1
        }, {
          easing: cc.easing.sineInOut
        }),
        o = cc.tween(e).delay(0.87).to(0.6, {
          opacity: 0
        }, {
          easing: cc.easing.sineInOut
        });
      a.start();
      o.start();
    }
  }
  showBgMask(t = 150) {
    var e = this.node;
    if (cc.isValid(e)) if (cc.isValid(this._bgMask)) {
      this._bgMask.active = true;
      this._bgMask.opacity = 0;
      cc.Tween.stopAllByTarget(this._bgMask);
      cc.tween(this._bgMask).to(0.2, {
        opacity: t
      }, {
        easing: cc.easing.sineOut
      }).start();
    } else {
      var a = createSingleColorScreenNode();
      a.name = "TaskRewardBgMask";
      a.opacity = 0;
      a.zIndex = -1;
      a.parent = e;
      a.addComponent(cc.BlockInputEvents);
      a.on(cc.Node.EventType.TOUCH_END, function (t) {
        t.stopPropagation();
      }, a, true);
      this._bgMask = a;
      cc.tween(a).to(0.2, {
        opacity: t
      }, {
        easing: cc.easing.sineOut
      }).start();
    }
  }
  hideBgMask() {
    var t = this._bgMask;
    if (cc.isValid(t)) {
      cc.Tween.stopAllByTarget(t);
      cc.tween(t).to(0.16, {
        opacity: 0
      }, {
        easing: cc.easing.sineOut
      }).call(function () {
        cc.isValid(t) && (t.active = false);
      }).start();
    }
  }
  onDestroy() {
    super.onDestroy.call(this);
    if (cc.isValid(this._bgMask)) {
      this._bgMask.removeFromParent();
      this._bgMask = null;
    }
  }
}