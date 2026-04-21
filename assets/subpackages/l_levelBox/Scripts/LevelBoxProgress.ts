import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { EItemType } from '../../../Scripts/user/IUserData';
import { LevelBoxConditionKey } from './LevelBoxTypes';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import LevelBoxBarItem, { ELevelBoxBarPos, ELevelBoxBarState } from './LevelBoxBarItem';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { DDebugInfo } from '../../../Scripts/gamePlay/dot/DDebugInfo';
import Adapter from '../../../Scripts/component/Adapter';
@mj.class
export default class LevelBoxProgress extends BaseUI {
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
  @mj.node("BoxBtn/BoxTipAnim")
  boxTipAnim: "BoxBtn/BoxTipAnim" = null;
  @mj.node("BarLayout/Condition")
  conditionTip: "BarLayout/Condition" = null;
  @mj.node("BoxBtn/Chest")
  chestIcon: "BoxBtn/Chest" = null;
  currentBarItem = null;
  hideBoxBtn = null;
  showReward = false;
  nextCallback = null;
  levelBox = null;
  showRewardsNodes = [];
  boxTipProxy = null;
  isLoaded = false;
  dataReady = false;
  static prefabUrl = "prefabs/levelBox/BoxProgress";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
    this.OnButtonClick(this.boxBtn, this.onBoxBtnClick.bind(this));
    this.OnButtonClick(this.hideBoxBtn, this.onHideBoxBtnClick.bind(this));
    this.isLoaded = true;
    this.dataReady && this.playAction();
  }
  @mj.traitEvent("LvBoxPrgs_initCpts")
  initComponents() {
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
    this.boxTipProxy = BaseSpine.refreshWithNode(this.boxTipAnim);
    this.boxTipProxy.markReady("");
  }
  getRewardNodes(t) {
    switch (t) {
      case EItemType.Hint:
        return {
          icon: this.hintTipIcon,
          value: this.hintTipValue
        };
      case EItemType.Shuffle:
        return {
          icon: this.refreshTipIcon,
          value: this.refreshTipValue
        };
    }
    return {
      icon: null,
      value: null
    };
  }
  showBoxRewardUI(t, e) {
    this.levelBox = t;
    this.nextCallback = e;
    this.dataReady = true;
    this.playAction();
  }
  reportDebugInfo() {
    var t = this.dumpTopScene();
    if (this.node.activeInHierarchy) DDebugInfo.dot("5454进度条UI已激活但未执行onload, 当前场景控制器: " + t);else {
      var e = function e(t, i = []) {
          if (cc.isValid(t)) {
            i.push(t.name);
            if (t.active) return e(t.parent, i);
          }
        },
        i = [];
      e(this.node, i);
      if (i.length > 0) {
        DDebugInfo.dot("5454进度条UI未激活节点或父节点未激活: " + i.join("->") + ", 当前场景控制器: " + t);
      } else {
        DDebugInfo.dot("5454进度条UI没有找到未激活的节点, 当前场景控制器: " + t);
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
    var t, e;
    if (!this.showReward) if (this.isLoaded) {
      this.node.opacity = 255;
      null === (t = this.delegate) || void 0 === t || t.viewDoAction("moveSubTitleToBtnNextBottom");
      this.showReward = true;
      this.hideRewardsNodes();
      this.updateProgressBars(this.levelBox);
      this.updateProgressLabel(this.levelBox);
      this.updateBoxReward(this.levelBox);
      this.disableBtnNext();
      this.playProgressAnim();
      if (!this.levelBox.progress.isGain) {
        null === (e = this.nextCallback) || void 0 === e || e.call(this);
        this.nextCallback = null;
      }
    } else this.reportDebugInfo();
  }
  hideRewardsNodes() {
    this.refreshTipIcon.active = false;
    this.refreshTipValue.active = false;
    this.hintTipIcon.active = false;
    this.hintTipValue.active = false;
  }
  @mj.traitEvent("LvBoxPrgs_upBoxReward")
  updateBoxReward(t) {
    var e = this,
      i = t.rewards,
      o = function o(t, i, o) {
        if (t && i) {
          e.boxTipProxy.attachNode("hook_icon_" + o, function () {
            return t;
          });
          e.boxTipProxy.attachNode("hook_num_" + o, function () {
            return i;
          });
        }
      };
    this.boxTipAnim.active = true;
    this.showRewardsNodes = [];
    for (var n = 0; n < i.items.length; n++) {
      var r = i.items[n],
        a = this.getRewardNodes(r.item),
        s = a.icon,
        l = a.value;
      if (s && l) {
        l.getComponent(cc.Label).string = r.count.toString();
        this.showRewardsNodes.push(s, l);
        o(s, l, n + 1);
      }
    }
    this.boxTipAnim.active = false;
    var c = this.barContainer.children.length;
    if (c > 0) {
      var p = this.barContainer.children[c - 1],
        d = p.convertToWorldSpaceAR(cc.v2(0, 0)),
        h = this.boxBtn.parent.convertToNodeSpaceAR(d),
        u = p.width + this.boxBtn.width / 2 - 50;
      this.boxBtn.setPosition(h.x + u, h.y);
    }
  }
  getItemWidth(t) {
    return t >= 10 ? 76 : t > 4 ? 133 : 154;
  }
  @mj.traitEvent("LvBoxPrgs_upProgBars")
  updateProgressBars(t) {
    var e = t.progress;
    this.currentBarItem = null;
    var i = e.current,
      o = e.total,
      n = e.change;
    this.barContainer.destroyAllChildren();
    this.barLayout.active = true;
    for (var r = this.getItemWidth(o), a = 0; a < o; a++) {
      var s = this.createUISync(LevelBoxBarItem);
      if (cc.isValid(s)) {
        var l = s.getComponent(LevelBoxBarItem);
        l.setPathIndex(0 === a ? ELevelBoxBarPos.First : a === o - 1 ? ELevelBoxBarPos.Last : ELevelBoxBarPos.Middle);
        l.setItemSize(r);
        this.barContainer.addChild(s);
        var c = a < i - 1 ? ELevelBoxBarState.Completed : ELevelBoxBarState.Normal;
        a !== i - 1 || n || (c = ELevelBoxBarState.Completed);
        l.setState(c);
        a === i - 1 && (this.currentBarItem = l);
      }
    }
    this.barContainer.getComponent(cc.Layout).updateLayout();
    this.barLayout.active = false;
  }
  @mj.traitEvent("LvBoxPrgs_upProgLabel")
  updateProgressLabel(t) {
    var e = LevelBoxConditionKey[t.progress.condType],
      i = t.progress.condValue,
      o = I18NStrings.stringFormat.apply(I18NStrings, [...[I18NStrings.get(e)], ...i]);
    I18NStrings.setText(this.conditionTip, o, e, i);
  }
  disableBtnNext() {
    var t,
      e = this,
      i = 1;
    if (this.levelBox.progress.isGain) i = 5;else {
      var o = {
        delayTime: i
      };
      mj.triggerInternalEvent("WinVw_btnNextDelay", this, [o]);
      i = o.delayTime;
    }
    null === (t = this.delegate) || void 0 === t || t.viewDoAction("disableBtnNext");
    cc.tween(this.node).delay(i).call(function () {
      var t;
      null === (t = e.delegate) || void 0 === t || t.viewDoAction("enableBtnNext");
    }).start();
  }
  playProgressAnim() {
    this.playBarBoxEnterAnim();
    if (this.levelBox.progress.change) {
      this.playHighLightAnim();
    } else {
      this.animCompleted();
    }
  }
  @mj.traitEvent("LvBoxProg_barBoxEnter")
  playBarBoxEnterAnim() {
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
  playHighLightAnim() {
    var t = this;
    if (cc.isValid(this.currentBarItem)) {
      var e = {
        delayTime: 0
      };
      mj.triggerInternalEvent("LevelBox_pbDelay", this, [e]);
      var i = this.getCompleteDelay();
      cc.tween(this.currentBarItem.node).delay(1.9 + e.delayTime).call(function () {
        t.playCurBarHighLightAnim();
      }).delay(i).call(function () {
        t.animCompleted();
      }).start();
    }
  }
  @mj.traitEvent("LvBoxPrgs_getCompDelay")
  getCompleteDelay() {
    return 0.3;
  }
  @mj.traitEvent("LvBoxPrgs_playCurBarHigh")
  playCurBarHighLightAnim() {
    cc.isValid(this.currentBarItem) && this.currentBarItem.setState(ELevelBoxBarState.HighLight);
  }
  animCompleted() {
    var t,
      e = this;
    if (this.levelBox.progress.isGain) {
      null === (t = this.nextCallback) || void 0 === t || t.call(this);
      this.nextCallback = null;
      this.scheduleOnce(function () {
        e.showNextBox();
      }, 1);
    }
  }
  onHideBoxBtnClick() {
    var t, e;
    cc.isValid(this.boxTipAnim) && (this.boxTipAnim.active = false);
    cc.isValid(this.hideBoxBtn) && (this.hideBoxBtn.active = false);
    if (this.showRewardsNodes.length > 0) try {
      for (var i = __values(this.showRewardsNodes), o = i.next(); !o.done; o = i.next()) {
        var n = o.value;
        cc.isValid(n) && (n.active = false);
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
  @mj.traitEvent("LvBoxProg_showNextBox")
  showNextBox() {
    if (this.levelBox.nextBox) {
      this.hideRewardsNodes();
      this.updateProgressBars(this.levelBox.nextBox);
      this.barLayout.active = true;
      this.updateBoxReward(this.levelBox.nextBox);
      this.updateProgressLabel(this.levelBox.nextBox);
    }
  }
  onBoxBtnClick() {
    var t,
      e,
      i = Math.floor(this.showRewardsNodes.length / 2),
      o = this.boxTipAnim.getComponent(sp.Skeleton);
    this.boxTipAnim.active = true;
    if (i > 0 && i < 3) {
      try {
        for (var n = __values(this.showRewardsNodes), r = n.next(); !r.done; r = n.next()) {
          var a = r.value;
          cc.isValid(a) && (a.active = true);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (e = n.return) && e.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      GameUtils.playSpine(o, "click_" + i, false, function () {
        GameUtils.playSpine(o, "init_" + i, true);
      });
      this.hideBoxBtn.active = true;
    }
  }
}