import GameUtils from '../../../../Scripts/core/simulator/util/GameUtils';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import UIView from '../../../../Scripts/framework/ui/UIView';
import RankModel from '../RankModel';
import BaseSpine from '../../../../Scripts/gamePlay/base/ui/BaseSpine';
import { DotGameBtnClick, ERankClickType } from '../../../../Scripts/dot/DGameBtnClick';
import AdManager from '../../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../../Scripts/gamePlay/dot/DGameAdShow';
import { isNetworkAvailable } from '../../../../Scripts/framework/utils/CommonUtils';
import { EGetItemReasonId } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ERankAudioID } from './RankEnums';
import { EItemType } from '../../../../Scripts/user/IUserData';
@mj.class
export default class RankBoxView extends UIView {
  _bgNode = null;
  _btnContinue = null;
  _labelContinue = null;
  _lightSkeleton = null;
  _page1TitleNode = null;
  _descRewardNode = null;
  _boxSpine = null;
  _page2Node = null;
  _page2TitleNode = null;
  _claimBtnNode = null;
  _claimAdBtnNode = null;
  _claimLabelNode = null;
  _claimAdLabelNode = null;
  _refreshIconNode = null;
  _refreshValueNode = null;
  _hintIconNode = null;
  _hintValueNode = null;
  _undoTipIconNode = null;
  _undoTipValueNode = null;
  canClickBg = false;
  clickCount = 0;
  centerBtnPos = new cc.Vec3(0, 0, 0);
  skipClaimDot = false;
  showRewardsNodes = [];
  _boxIndex = 4;
  _myRank = 0;
  _isGaming = false;
  _hasAddedBaseReward = false;
  _reward = null;
  static prefabUrl = "prefabs/rank/RankBoxView";
  static bundleName = "mainRes";
  onLoad() {
    super.onLoad.call(this);
    this._bgNode = cc.find("bg", this.node);
    this._btnContinue = cc.find("content/btn_continue", this.node);
    this._labelContinue = cc.find("content/lbl_lv", this._btnContinue);
    this._lightSkeleton = cc.find("light_node/spin_light", this.node).getComponent(sp.Skeleton);
    this._boxSpine = cc.find("content/boxAni", this.node).getComponent(sp.Skeleton);
    this._page1TitleNode = cc.find("page1_title", this.node);
    this._descRewardNode = cc.find("des_reward", this.node);
    this._page2Node = cc.find("page2", this.node);
    this._page2TitleNode = cc.find("page2/RewardsTip", this.node);
    this._claimBtnNode = cc.find("page2/ClaimBtn", this.node);
    this._claimLabelNode = cc.find("bg/Claim", this._claimBtnNode);
    this._claimAdBtnNode = cc.find("page2/btn_ad_claim", this.node);
    this._claimAdLabelNode = cc.find("bg/Claim", this._claimAdBtnNode);
    this._refreshIconNode = cc.find("page2/RefreshIcon", this.node);
    this._refreshValueNode = cc.find("page2/RefreshValue", this.node);
    this._hintIconNode = cc.find("page2/HintIcon", this.node);
    this._hintValueNode = cc.find("page2/HintValue", this.node);
    this._undoTipIconNode = cc.find("page2/UndoIcon", this.node);
    this._undoTipValueNode = cc.find("page2/UndoValue", this.node);
    this.initComponents();
    this.registerButtons();
  }
  @mj.traitEvent("RankBoxVw_getAdBtnScale")
  getAdBtnScale() {
    return 1;
  }
  @mj.traitEvent("RankBoxVw_initComps")
  initComponents() {
    this.centerBtnPos.addSelf(this._claimBtnNode.position);
    this.centerBtnPos.addSelf(this._claimAdBtnNode.position);
    this.centerBtnPos.multiplyScalar(0.5);
    this.animProxy = BaseSpine.refreshWithNode(this._boxSpine.node);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.reset();
  }
  reset() {
    this._refreshIconNode.active = false;
    this._refreshValueNode.active = false;
    this._hintIconNode.active = false;
    this._hintValueNode.active = false;
    this._undoTipIconNode.active = false;
    this._undoTipValueNode.active = false;
  }
  setBgOpacity(t) {
    cc.isValid(this._bgNode) && (this._bgNode.opacity = t);
  }
  getRewardNodes(t) {
    switch (t) {
      case EItemType.Hint:
        return {
          icon: this._hintIconNode,
          value: this._hintValueNode
        };
      case EItemType.Shuffle:
        return {
          icon: this._refreshIconNode,
          value: this._refreshValueNode
        };
      case EItemType.Undo:
        return {
          icon: this._undoTipIconNode,
          value: this._undoTipValueNode
        };
    }
    return {
      icon: null,
      value: null
    };
  }
  hookRewardNodes() {
    var t = this;
    this.reset();
    var e = function e(e, o, n) {
      if (e && o) {
        t.animProxy.attachNode("hook_icon_" + n, function () {
          return e;
        });
        t.animProxy.attachNode("hook_num_" + n, function () {
          return o;
        });
      }
    };
    this.showRewardsNodes = [];
    var o = this._reward;
    if (o) for (var n = 0; n < o.Items.length; n++) {
      var a = o.Items[n],
        i = o.Counts[n],
        r = this.getRewardNodes(a),
        s = r.icon,
        l = r.value;
      if (s && l) {
        l.getComponent(cc.Label).string = String(i);
        this.showRewardsNodes.push(s, l);
        e(s, l, n + 1);
      }
    }
  }
  getReward() {
    return this._reward;
  }
  getMyRank() {
    return this._myRank;
  }
  initReward() {
    this._reward = RankModel.getInstance().getRewardIdByRank(this._myRank);
  }
  @mj.traitEvent("RankBoxVw_show")
  show(t) {
    if (!this._hasAddedBaseReward) {
      this._hasAddedBaseReward = true;
      this._myRank = (null == t ? void 0 : t.myRank) || 1;
      this._isGaming = !!(null == t ? void 0 : t.isGaming);
      this._boxIndex = this._myRank >= 1 && this._myRank <= 3 ? this._myRank : this._boxIndex;
      this.initReward();
      this.deliverRewards(false);
      this.hookRewardNodes();
      I18NStrings.setText(this._page1TitleNode, "Congratulations", "LeaderBoard_Reward_Title");
      I18NStrings.setText(this._labelContinue, "Claim", "LeaderBoard_Reward_Claim");
      this._page2TitleNode.active = false;
      I18NStrings.setText(this._claimLabelNode, "Claim", "LeaderBoard_Reward_Claim");
      I18NStrings.setText(this._claimAdLabelNode, "Claim x 2", "LeaderBoard_reward_1");
      var e = I18NStrings.get("LeaderBoard_Reward_Des", "<color=#B17240>You've claimed <color=#D15327>{0}</c> place!</c>").replace("{0}", String(this._myRank));
      this._descRewardNode.getComponent(cc.RichText).string = e;
      this.showPage1();
    }
  }
  playLightSpineAnimation() {
    GameUtils.playSpine(this._lightSkeleton, "init", true);
  }
  playBoxSpine(t, e = true, o?) {
    GameUtils.playSpine(this._boxSpine, t, e, o);
  }
  registerButtons() {
    this._btnContinue && this.OnButtonClick(this._btnContinue, this.onContinueClick.bind(this));
    this._claimBtnNode && this.OnButtonClick(this._claimBtnNode, this.onClaimClick.bind(this));
    this._claimAdBtnNode && this.OnButtonClick(this._claimAdBtnNode, this.onClaimAdClick.bind(this));
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
  @mj.traitEvent("RankBoxVw_adBtnClick")
  onClaimAdClick() {
    var t = this;
    DotGameBtnClick.dotRank(ERankClickType.ClickRankBoxViewPage2AdClaim, 2);
    this._claimAdBtnNode.getComponent(cc.Button).interactable = false;
    this._claimBtnNode.getComponent(cc.Button).interactable = false;
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
  @mj.traitEvent("RankBoxVw_adSuccess")
  onAdSuccess() {
    var t = this;
    if (cc.isValid(this.node)) {
      this.deliverRewards(true);
      mj.triggerInternalEvent("Chest_AdClose", this, [{
        refreshIcon: this._refreshIconNode,
        refreshValue: this._refreshValueNode,
        hintIcon: this._hintIconNode,
        hintValue: this._hintValueNode,
        adClaimBtn: this._claimAdBtnNode,
        claimBtn: this._claimBtnNode,
        adScale: this.getAdScale(),
        onClose: function () {
          return t.delegate.close();
        }
      }]) || this.delegate.close();
    }
  }
  getAdScale() {
    return 2;
  }
  showAdRewards(t = true) {
    if (cc.isValid(this._claimAdBtnNode) && cc.isValid(this._claimBtnNode)) {
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
      this._claimBtnNode.setPosition(this.centerBtnPos);
      this._claimAdBtnNode.active = false;
      this._claimBtnNode.getComponent(cc.Button).interactable = true;
      this.skipClaimDot = true;
      var e = function e(t, e) {
          if (cc.isValid(t) && t.active) {
            var o = cc.instantiate(t);
            o.parent = t.parent;
            o.scale = t.scale;
            o.angle = t.angle;
            o.setPosition(t.position);
            o.getComponent(cc.Label).string = String(e);
            o.opacity = 0;
            t.opacity = 255;
            cc.tween(t).to(0.167, {
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
              a = cc.tween().to(0.4, {
                opacity: 255
              }, {
                easing: cc.easing.quadOut
              });
            cc.tween(o).parallel(n, a).start();
          }
        },
        o = this._reward;
      if (o) for (var n = 0; n < o.Items.length; n++) {
        var a = o.Items[n],
          i = o.Counts[n],
          r = this.getRewardNodes(a),
          s = r.icon,
          l = r.value;
        s && l && (t ? e(l, 2 * i) : l.getComponent(cc.Label).string = String(2 * i));
      }
    }
  }
  deliverRewards(t) {
    var e = t ? EGetItemReasonId.LeaderBoardAd : EGetItemReasonId.LeaderBoard,
      o = t ? "排行榜宝箱奖励_看广告翻倍_到达第" + this._myRank + "名" : "排行榜宝箱奖励_到达第" + this._myRank + "名",
      n = this._isGaming;
    if (this._reward) for (var a = 0; a < this._reward.Items.length; a++) {
      var i = this._reward.Items[a],
        r = this._reward.Counts[a];
      r <= 0 || GameUtils.deliverProp({
        isInGame: n,
        reasonId: e,
        reasonInfo: o,
        itemType: i,
        itemCount: r
      });
    }
  }
  @mj.traitEvent("RankBoxVw_adFailed")
  onAdFailed() {
    if (cc.isValid(this._claimAdBtnNode) && cc.isValid(this._claimBtnNode) && cc.isValid(this.node)) {
      this._claimAdBtnNode.getComponent(cc.Button).interactable = true;
      this._claimBtnNode.getComponent(cc.Button).interactable = true;
      cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
      this.canClickBg = false;
      this.clickCount = 0;
    }
  }
  onClaimClick() {
    mj.audioManager.playEffect(ERankAudioID.Button1);
    this.delegate.close();
    this.skipClaimDot || DotGameBtnClick.dotRank(ERankClickType.ClickRankBoxViewPage2Claim);
  }
  onContinueClick() {
    this.change2ClaimPage();
    DotGameBtnClick.dotRank(ERankClickType.ClickRankBoxViewPage1Claim);
  }
  showPage1() {
    var t = this;
    DotGameBtnClick.dotRank(ERankClickType.AutoRankResultPage1);
    mj.audioManager.playEffect(ERankAudioID.Box3Show);
    this._boxSpine.node.active = true;
    this._page1TitleNode.opacity = 0;
    this._page1TitleNode.scale = 0.7;
    cc.tween(this._page1TitleNode).delay(0.27).to(0.2, {
      opacity: 255,
      scale: 1.2
    }, {
      easing: cc.easing.sineInOut
    }).to(0.13, {
      scale: 0.95
    }, {
      easing: cc.easing.sineInOut
    }).to(0.1, {
      scale: 1
    }, {
      easing: cc.easing.sineInOut
    }).start();
    this._descRewardNode.opacity = 0;
    cc.tween(this._descRewardNode).delay(0.6).to(0.1, {
      opacity: 255
    }, {
      easing: cc.easing.sineInOut
    }).start();
    this._btnContinue.opacity = 0;
    this._btnContinue.scale = 0.6;
    cc.tween(this._btnContinue).delay(0.4).to(0.17, {
      opacity: 255,
      scale: 1.05
    }, {
      easing: cc.easing.sineInOut
    }).to(0.1, {
      opacity: 255,
      scale: 1
    }, {
      easing: cc.easing.sineInOut
    }).start();
    this.playLightSpineAnimation();
    this.playBoxSpine("in_" + this._boxIndex + "_1", false, function () {
      t.playBoxSpine("init_" + t._boxIndex, false);
    });
  }
  change2ClaimPage() {
    this._btnContinue.active = false;
    cc.tween(this._page1TitleNode).to(0.2, {
      opacity: 0
    }).start();
    cc.tween(this._descRewardNode).to(0.2, {
      opacity: 0
    }).start();
    this.showPage2();
  }
  getInAnimName(t) {
    switch (t) {
      case 1:
        return "in_" + this._boxIndex + "_3";
      case 2:
        return "in_" + this._boxIndex + "_2";
      case 3:
        return "in_" + this._boxIndex + "_4";
    }
    return "in_" + this._boxIndex + "_2";
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
  playBoxInAnim() {
    var t = this,
      e = Math.floor(this.showRewardsNodes.length / 2);
    if (e > 0 && e <= 3) {
      var o = this.getInAnimName(e),
        n = this.getIdleAnimName(e);
      this.playBoxSpine(o, false, function () {
        t.playBoxSpine(n);
      });
    }
  }
  showPage2() {
    var t = this;
    DotGameBtnClick.dotRank(ERankClickType.AutoRankResultPage2);
    mj.audioManager.playEffect(ERankAudioID.Box2Open);
    this._boxSpine.setEventListener(function (e, o) {
      "event_rewards" === o.data.name && t.onOpenAnimFinished();
    });
    this.playBoxInAnim();
    var e = this.getAdBtnScale();
    this.isShowAdBtn() && cc.tween(this._claimAdBtnNode).delay(0.9).call(function () {
      if (cc.isValid(t._claimAdBtnNode)) {
        t._claimAdBtnNode.setScale(0.6 * e);
        t._claimAdBtnNode.opacity = 0;
      }
    }).to(0.17, {
      opacity: 255,
      scale: 1.05 * e
    }, {
      easing: cc.easing.sineInOut
    }).to(0.1, {
      opacity: 255,
      scale: e
    }, {
      easing: cc.easing.sineInOut
    }).start();
    cc.tween(this._claimBtnNode).delay(1).call(function () {
      if (cc.isValid(t._claimBtnNode)) {
        t._claimBtnNode.setScale(0.6);
        t._claimBtnNode.opacity = 0;
      }
    }).to(0.17, {
      opacity: 255,
      scale: 1.05
    }, {
      easing: cc.easing.sineInOut
    }).to(0.1, {
      opacity: 255,
      scale: 1
    }, {
      easing: cc.easing.sineInOut
    }).start();
  }
  @mj.traitEvent("RankBoxVw_isShowAdBtn")
  isShowAdBtn() {
    return isNetworkAvailable();
  }
  onOpenAnimFinished() {
    var t, e;
    try {
      for (var o = __values(this.showRewardsNodes), n = o.next(); !n.done; n = o.next()) {
        var a = n.value;
        cc.isValid(a) && (a.active = true);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        n && !n.done && (e = o.return) && e.call(o);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    this.dispatchEvent("RankBoxVw_destroy");
  }
}