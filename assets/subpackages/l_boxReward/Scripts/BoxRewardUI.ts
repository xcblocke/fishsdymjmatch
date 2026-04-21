import { EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BoxBarItem, { EBoxBarPos, EBoxBarItemState } from './BoxBarItem';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { DDebugInfo } from '../../../Scripts/gamePlay/dot/DDebugInfo';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import Adapter from '../../../Scripts/component/Adapter';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
export enum EBoxRewardState {
  None = 0,
  Hide = 1,
  Entered = 2,
  CanClick = 3,
  Clicked = 4,
  Completed = 5,
}
@mj.class
export default class BoxRewardUI extends BaseUI {
  @mj.node("HintTipValue")
  hintTipValue: "HintTipValue" = null;
  @mj.node("RefreshTipValue")
  refreshTipValue: "RefreshTipValue" = null;
  @mj.node("HintTipIcon")
  hintTipIcon: "HintTipIcon" = null;
  @mj.node("RefreshTipIcon")
  refreshTipIcon: "RefreshTipIcon" = null;
  @mj.node("BarLayout")
  barLayout: "BarLayout" = null;
  @mj.node("BarLayout/BarContainer")
  barContainer: "BarLayout/BarContainer" = null;
  @mj.node("BoxBtn")
  boxBtn: "BoxBtn" = null;
  @mj.node("BoxBtn/BoxAnim")
  boxAnim: "BoxBtn/BoxAnim" = null;
  @mj.node("LevelTip")
  levelTip: "LevelTip" = null;
  currentState = EBoxRewardState.None;
  currentBarItem = null;
  currentPassLevel = 1;
  config = null;
  hideBoxBtn = null;
  showReward = false;
  nextCallback = null;
  isLoaded = false;
  dataReady = false;
  static prefabUrl = "prefabs/boxReward/RewardUI";
  @mj.traitEvent("BoxRwdUI_showBoxRewardUI")
  showBoxRewardUI(t, e, i) {
    this.nextCallback = i;
    this.config = e;
    this.currentPassLevel = t > 0 ? t - 1 : 1;
    this.dataReady = true;
    this.playAction();
  }
  reportDebugInfo() {
    var t = this.dumpTopScene();
    if (this.node.activeInHierarchy) DDebugInfo.dot("关卡宝箱进度条UI已激活节点但未执行onload, 当前场景控制器: " + t);else {
      var e = function e(t, i = []) {
          if (cc.isValid(t)) {
            i.push(t.name);
            if (t.active) return e(t.parent, i);
          }
        },
        i = [];
      e(this.node, i);
      if (i.length > 0) {
        DDebugInfo.dot("关卡宝箱进度条UI点未激活: " + i.join("->") + ", 当前场景控制器: " + t);
      } else {
        DDebugInfo.dot("关卡宝箱进度条UI没有找到未激活的节点, 当前场景控制器: " + t);
      }
    }
  }
  dumpTopScene() {
    var t = [],
      e = ControllerManager.getInstance().getTopSceneController();
    if (e && e.subControllers && e.subControllers.length > 0) for (var i = e.subControllers.length - 1; i >= 0; i--) {
      var o = e.subControllers[i];
      o && o.constructor && t.push("" + mj.getClassName(o.constructor));
    }
    return t.join("->");
  }
  playAction() {
    var t,
      e,
      i = this;
    if (!this.showReward) if (this.isLoaded) {
      this.node.opacity = 255;
      this.showReward = true;
      this.updateLabel();
      this.createBars();
      null === (t = this.delegate) || void 0 === t || t.viewDoAction("disableBtnNext");
      this.setState(EBoxRewardState.Entered);
      var o = 2,
        n = false,
        a = mj.getClassByName("NormalBoxTrait");
      a && true === a.getInstance().eventEnabled && (n = true);
      if (this.canGainBoxReward()) {
        if (!n) {
          var l = this.getRewardLevel(),
            d = UserModel.getInstance().getMainGameData().gameType,
            p = GameUtils.getInputAddPropType(d),
            u = {
              inputType: p,
              propType: "shuffle",
              num: this.config.refresh,
              reasonId: EGetItemReasonId.LevelBox,
              reasonInfo: "主关卡宝箱奖励_到达第" + l + "关"
            },
            h = {
              inputType: p,
              propType: "hitTips",
              num: this.config.hint,
              reasonId: EGetItemReasonId.LevelBox,
              reasonInfo: "主关卡宝箱奖励_到达第" + l + "关"
            };
          GameInteraction.input(u);
          GameInteraction.input(h);
        }
        o = 5;
      } else {
        var f = {
          delayTime: o
        };
        mj.triggerInternalEvent("WinVw_btnNextDelay", this, [f]);
        o = f.delayTime;
        null === (e = this.nextCallback) || void 0 === e || e.call(this, false);
        this.nextCallback = null;
      }
      cc.tween(this.node).delay(o).call(function () {
        var t;
        null === (t = i.delegate) || void 0 === t || t.viewDoAction("enableBtnNext");
      }).start();
    } else this.reportDebugInfo();
  }
  onLoad() {
    var e;
    super.onLoad.call(this);
    if (this.checkNodes()) {
      this.initComponents();
      this.OnButtonClick(this.boxBtn, this.onBoxBtnClick.bind(this));
      this.OnButtonClick(this.hideBoxBtn, this.onHideBoxBtnClick.bind(this));
      null === (e = this.delegate) || void 0 === e || e.viewDoAction("moveSubTitleToBtnNextBottom");
      this.isLoaded = true;
      this.dataReady && this.playAction();
    } else this.node.active = false;
  }
  checkNodes() {
    return !!(cc.isValid(this.refreshTipIcon) && cc.isValid(this.refreshTipValue) && cc.isValid(this.hintTipIcon) && cc.isValid(this.hintTipValue) && cc.isValid(this.levelTip) && cc.isValid(this.barLayout) && cc.isValid(this.boxAnim) && cc.isValid(this.boxBtn));
  }
  @mj.traitEvent("BoxRwdUI_initCpts")
  initComponents() {
    this.initBoxAnim();
    this.hideBoxBtn = new cc.Node();
    this.hideBoxBtn.addComponent(cc.Button);
    this.node.addChild(this.hideBoxBtn);
    this.hideBoxBtn.active = false;
    var t = this.hideBoxBtn.addComponent(cc.Widget);
    t.isAlignTop = true;
    t.isAlignBottom = true;
    t.isAlignLeft = true;
    t.isAlignRight = true;
    t.top = 0;
    t.bottom = 0;
    t.left = 0;
    t.right = 0;
    Adapter.adaptBgSize(this.hideBoxBtn);
    Adapter.ignoreSafeRect(this.hideBoxBtn);
    this.setState(EBoxRewardState.Hide);
  }
  setState(t) {
    if (this.currentState !== t) {
      this.currentState = t;
      switch (t) {
        case EBoxRewardState.Hide:
          this.reset();
          break;
        case EBoxRewardState.Entered:
          this.playEnterAnim();
          break;
        case EBoxRewardState.CanClick:
          this.setBoxCanClickState();
          break;
        case EBoxRewardState.Clicked:
          this.playBoxClickAnim();
          break;
        case EBoxRewardState.Completed:
          this.setBoxCanClickState();
          this.playCompletedAnim();
          break;
        case EBoxRewardState.None:
      }
    }
  }
  getRewardLevel() {
    return (Math.floor((this.currentPassLevel - 1) / this.config.level) + 1) * this.config.level;
  }
  getRewardNodes() {
    return [{
      icon: this.refreshTipIcon,
      value: this.refreshTipValue
    }, {
      icon: this.hintTipIcon,
      value: this.hintTipValue
    }];
  }
  @mj.traitEvent("BoxRwdUI_updateLabel")
  updateLabel() {
    this.updateRewardCount();
    I18NStrings.setText(this.levelTip, "Lv." + this.getRewardLevel(), "MahjongTiles_MainPage_TargetLevel", [this.getRewardLevel()]);
    this.levelTip.active = true;
  }
  @mj.traitEvent("BoxRwdUI_updateRwdCount")
  updateRewardCount() {
    this.refreshTipValue.getComponent(cc.Label).string = this.config.refresh.toString();
    this.hintTipValue.getComponent(cc.Label).string = this.config.hint.toString();
  }
  createBars() {
    this.currentBarItem = null;
    var t = this.config.level,
      e = (this.currentPassLevel - 1) % t;
    this.barContainer.removeAllChildren();
    this.barLayout.active = true;
    for (var i = 0; i < this.config.level; i++) {
      var o = this.createUISync(BoxBarItem);
      if (cc.isValid(o)) {
        var n = o.getComponent(BoxBarItem);
        n.setPathIndex(0 === i ? EBoxBarPos.First : i === this.config.level - 1 ? EBoxBarPos.Last : EBoxBarPos.Middle);
        this.barContainer.addChild(o);
        var a = i < e ? EBoxBarItemState.Completed : EBoxBarItemState.Normal;
        n.setState(a);
        i === e && (this.currentBarItem = n);
      }
    }
    this.barContainer.getComponent(cc.Layout).updateLayout();
    this.barLayout.active = false;
  }
  @mj.traitEvent("BoxRwdUI_initBoxAnim")
  initBoxAnim() {
    this.animProxy = BaseSpine.refreshWithNode(this.boxAnim);
    this.animProxy.reset("");
    this.animProxy.markReady("");
    this.attachNode("hook_icon_1", this.refreshTipIcon, 1);
    this.attachNode("hook_num_1", this.refreshTipValue, 1);
    this.attachNode("hook_icon_2", this.hintTipIcon, 1);
    this.attachNode("hook_num_2", this.hintTipValue, 1);
    this.attachNode("hook_num", this.levelTip, 1);
  }
  attachNode(t, e, i = 1) {
    if (cc.isValid(this.animProxy) && cc.isValid(e)) {
      this.animProxy.attachNode(t, function () {
        return e;
      });
      e.setPosition(0, 0);
    }
  }
  @mj.traitEvent("BoxRwdUI_reset")
  reset() {
    if (cc.isValid(this.refreshTipIcon) && cc.isValid(this.refreshTipValue) && cc.isValid(this.hintTipIcon) && cc.isValid(this.hintTipValue) && cc.isValid(this.levelTip) && cc.isValid(this.barLayout) && cc.isValid(this.boxBtn)) {
      this.refreshTipIcon.active = false;
      this.refreshTipValue.active = false;
      this.hintTipIcon.active = false;
      this.hintTipValue.active = false;
      this.barLayout.active = false;
      cc.Tween.stopAllByTarget(this.boxBtn);
      cc.Tween.stopAllByTarget(this.barLayout);
      cc.Tween.stopAllByTarget(this.levelTip);
      this.boxBtn.active = true;
      this.animProxy.stopAtFirstFrameOf("in");
      this.boxBtn.active = false;
      this.changeBoxBtnCanClick(false);
    }
  }
  changeBoxBtnCanClick(t) {
    cc.isValid(this.boxBtn) && (this.boxBtn.getComponent(cc.Button).interactable = t);
  }
  setBoxCanClickState() {
    this.hideBoxBtn.active = false;
    this.hintTipValue.active = false;
    this.hintTipIcon.active = false;
    this.refreshTipValue.active = false;
    this.refreshTipIcon.active = false;
    this.changeBoxBtnCanClick(true);
  }
  @mj.traitEvent("BoxRwdUI_playEnterAni")
  playEnterAnim() {
    var t = this;
    if (cc.isValid(this.currentBarItem) && cc.isValid(this.levelTip)) {
      this.playBarBoxEnter();
      var e = {
        delayTime: 0
      };
      mj.triggerInternalEvent("LevelBox_pbDelay", this, [e]);
      cc.tween(this.currentBarItem.node).delay(1.9 + e.delayTime).call(function () {
        if (cc.isValid(t.currentBarItem)) {
          t.currentBarItem.setState(EBoxBarItemState.HighLight);
          cc.isValid(t.boxAnim) && t.animProxy.setAnimation("in", 1, function () {
            t.enterCompletedAnim();
          });
        }
      }).start();
      cc.tween(this.levelTip).delay(2.2 + e.delayTime).call(function () {
        cc.isValid(t.levelTip);
      }).start();
    }
  }
  @mj.traitEvent("BoxRwdUI_barBoxEnter")
  playBarBoxEnter() {
    if (cc.isValid(this.barLayout) && cc.isValid(this.boxBtn)) {
      this.barLayout.active = true;
      this.barLayout.opacity = 0;
      this.barLayout.scale = 0.7;
      this.boxBtn.active = true;
      this.boxBtn.scale = 0.7;
      this.boxBtn.opacity = 0;
      cc.Tween.stopAllByTarget(this.barLayout);
      cc.Tween.stopAllByTarget(this.boxBtn);
      var t = cc.tween().delay(1.13).to(0.2, {
        opacity: 255,
        scale: 1.05
      }, {
        easing: cc.easing.quadOut
      }).to(0.14, {
        scale: 1
      }, {
        easing: cc.easing.quadIn
      });
      t.clone(this.barLayout).start();
      t.clone(this.boxBtn).start();
    }
  }
  canGainBoxReward() {
    var t = this.config.rewardLevels,
      e = (this.currentPassLevel - 1) % this.config.level;
    return t.includes(e + 1);
  }
  enterCompletedAnim() {
    var t;
    if (this.canGainBoxReward()) this.setState(EBoxRewardState.Completed);else {
      this.setState(EBoxRewardState.CanClick);
      null === (t = this.delegate) || void 0 === t || t.viewDoAction("enableBtnNext");
    }
  }
  onBoxBtnClick() {
    cc.isValid(this.boxBtn) && this.setState(EBoxRewardState.Clicked);
  }
  onHideBoxBtnClick() {
    if (cc.isValid(this.boxAnim)) {
      this.animProxy.stopAtFirstFrameOf("click");
      this.hideBoxBtn.active = false;
      this.hintTipValue.active = false;
      this.hintTipIcon.active = false;
      this.refreshTipValue.active = false;
      this.refreshTipIcon.active = false;
      this.setState(EBoxRewardState.CanClick);
    }
  }
  playBoxClickAnim() {
    var t,
      e = this;
    if (cc.isValid(this.boxAnim)) {
      this.changeBoxBtnCanClick(false);
      this.boxAnim.active = true;
      null === (t = this.animProxy.getSkeleton()) || void 0 === t || t.setEventListener(function (t, i) {
        if ("event_rewards" === i.data.name) {
          if (!(cc.isValid(e.hintTipValue) && cc.isValid(e.hintTipIcon) && cc.isValid(e.refreshTipValue) && cc.isValid(e.refreshTipIcon))) return;
          e.hintTipValue.active = true;
          e.hintTipIcon.active = true;
          e.refreshTipValue.active = true;
          e.refreshTipIcon.active = true;
          e.hideBoxBtn.active = true;
        }
      });
      this.animProxy.setAnimation("click", 1, function () {
        e.animProxy.setAnimation("init", -1);
      });
    }
  }
  playCompletedAnim() {
    var t,
      e = this;
    if (cc.isValid(this.node.parent) && cc.isValid(this.node.parent.parent)) {
      var i = mj.getClassByName("NormalBoxTrait");
      i && i.getInstance().eventEnabled || null === (t = this.delegate) || void 0 === t || t.viewDoAction("hideContent");
      ControllerManager.getInstance().pushViewByController("NormalBoxController", {
        config: this.config,
        rewardLevel: this.getRewardLevel()
      }, function (t) {
        var i, o;
        if (cc.isValid(t)) {
          var n = t.onUIDestroy.bind(t);
          t.onUIDestroy = function () {
            var i;
            n(t);
            null === (i = e.nextCallback) || void 0 === i || i.call(e, true);
            e.nextCallback = null;
          };
        } else {
          null === (i = e.nextCallback) || void 0 === i || i.call(e, true);
          e.nextCallback = null;
        }
        null === (o = e.delegate) || void 0 === o || o.viewDoAction("enableBtnNext");
      });
    }
  }
}