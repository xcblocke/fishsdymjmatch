import { EBehaviorEnum } from './simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './base/GameBehaviorsBase';
import BaseSpine from './gamePlay/base/ui/BaseSpine';
export class AddPropOff3hBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data,
      o = t.action,
      n = t.buttonName,
      i = t.delayTime,
      a = t.timeoutButton;
    switch (o) {
      case "startTimer":
      case "resetTimer":
        this.handleStartTimer(null != i ? i : 15, a);
        break;
      case "start":
        n && this.handleDelayedStart(n);
        break;
      case "stop":
        n && this.stopSpineEffect(n);
        break;
      case "stopAll":
        this.handleStopAll();
    }
    this.finish(EBehaviorEnum.Success);
  }
  getBottomRoot() {
    var e = this.context.gameView;
    return (null == e ? void 0 : e.bottomRootNode) || null;
  }
  handleDelayedStart(e) {
    var t,
      o = this,
      n = this.getBottomRoot();
    if (n && cc.isValid(n)) {
      var i = n.getChildByName(e);
      i && cc.isValid(i) && this.setButtonNumVisible(i, false);
    }
    var r = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.timerComponent;
    if (r) {
      r.doOnce(0.1, function () {
        o.playSpineEffect(e);
      }, this.context.gameView);
    } else {
      this.playSpineEffect(e);
    }
  }
  handleStartTimer(e, t) {
    var o,
      n = this;
    this.clearTimer();
    var i = null === (o = this.context.gameView) || void 0 === o ? void 0 : o.timerComponent,
      r = this.getBottomRoot();
    if (i && r) {
      var a = function a() {
        r.__addPropOff3hTimerCb__ = null;
        if (t) {
          n.playSpineEffect(t);
          mj.triggerInternalEvent("AddPropOff3h_timeout", null, [t]);
        }
      };
      r.__addPropOff3hTimerCb__ = a;
      i.doOnce(e, a, r);
    }
  }
  clearTimer() {
    var e,
      t = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.timerComponent,
      o = this.getBottomRoot();
    if (t && o) {
      var n = o.__addPropOff3hTimerCb__;
      if (n) {
        t.clearTimer(n);
        o.__addPropOff3hTimerCb__ = null;
      }
    }
  }
  handleStopAll() {
    this.clearTimer();
    this.stopSpineEffect("btnPropHint");
    this.stopSpineEffect("btnShuffle");
  }
  playSpineEffect(e) {
    var t = this.getBottomRoot();
    if (t && cc.isValid(t)) {
      var o = t.getChildByName(e);
      if (o && cc.isValid(o)) {
        this.setButtonNumVisible(o, false);
        var n = o.getChildByName("__propGuideSpine__");
        if (n && cc.isValid(n)) n.active = true;else {
          var i = new cc.Node("__propGuideSpine__");
          i.parent = o;
          i.setPosition(0, 0);
          var r = BaseSpine.refreshWithNode(i, "spine/gameplay_propGuide", "r_addPropOfft3hTrait");
          r.queueAnimation("in", 1);
          r.queueAnimation("init", -1);
        }
      }
    }
  }
  stopSpineEffect(e) {
    var t = this.getBottomRoot();
    if (t && cc.isValid(t)) {
      var o = t.getChildByName(e);
      if (o && cc.isValid(o)) {
        this.setButtonNumVisible(o, true);
        var n = o.getChildByName("__propGuideSpine__");
        if (n && cc.isValid(n)) {
          var i = n.getComponent(BaseSpine);
          if (i) {
            i.clearQueue();
            i.clear(true);
          }
          n.destroy();
        }
      }
    }
  }
  setButtonNumVisible(e, t) {
    var o = e.getChildByName("propCornerItem");
    o && cc.isValid(o) && (o.active = t);
  }
}