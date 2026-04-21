import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("NoMatchTipsTrait")
export default class NoMatchTipsTrait extends Trait {
  _config = {
    checkTime: NoMatchTipsTrait.DEFAULT_CHECK_MS,
    moveTime: NoMatchTipsTrait.DRAG_MAX_MS
  };
  _pending = null;
  _timer = null;
  _lastClickMs = 0;
  _lastDragStartMs = 0;
  _isDragging = false;
  _mode = "idle";
  _waitTimerCb = null;
  _dragTimerCb = null;
  _countdownStarted = false;
  _gameCtr = null;
  _hasPreloadedFailView = false;
  static traitKey = "NoMatchTips";
  static DRAG_MAX_MS = 10000;
  static DEFAULT_CHECK_MS = 50;
  onLoad() {
    var i, r, n, o;
    super.onLoad.call(this);
    this._config = {
      checkTime: Math.max(0, Number(null !== (r = null === (i = this._traitData) || void 0 === i ? void 0 : i.checkTime) && void 0 !== r ? r : NoMatchTipsTrait.DEFAULT_CHECK_MS)),
      moveTime: null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.moveTime) && void 0 !== o ? o : NoMatchTipsTrait.DRAG_MAX_MS
    };
  }
  onInitViewBhv_crtTls(t, i) {
    var e,
      r,
      n,
      o,
      a,
      l = null === (n = null === (r = null === (e = t.ins) || void 0 === e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameView) || void 0 === n ? void 0 : n.timerComponent;
    this._timer = l || null;
    this._gameCtr = (null === (a = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameCtr) || null;
    this._hasPreloadedFailView = false;
    this.resetState("initView");
    this.preloadFailView();
    i();
  }
  onClrNormHlp_tryExcFail(t, i) {
    if (this.tryExcFail(t)) {
      i({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      i();
    }
  }
  onClrDailyHlp_tryExcFail(t, i) {
    if (this.tryExcFail(t)) {
      i({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      i();
    }
  }
  onClrTravelHlp_tryExcFail(t, i) {
    if (this.tryExcFail(t)) {
      i({
        returnType: TraitCallbackReturnType.jump
      });
    } else {
      i();
    }
  }
  onIptTchMove_startMove(t, i) {
    this._pending && "dragging" !== this._mode && this.enterDragging();
    if (!this._isDragging) {
      this._isDragging = true;
      this._lastDragStartMs = Date.now();
    }
    i();
  }
  onIptBTchEnd_moveEnd(t, i) {
    this._pending && "dragging" === this._mode && this.tryShowFailNow("dragEnd");
    this._isDragging = false;
    i();
  }
  onIptTchEnd_Success(t, i) {
    this._lastClickMs = Date.now();
    this._pending && "dragging" !== this._mode && this.enterClicking();
    i();
  }
  onClearEffBhv_playCollision(t, i) {
    if (this._pending) {
      this._countdownStarted || (this._countdownStarted = true);
      "waiting" !== this._mode && "clicking" !== this._mode || this.scheduleWaitTimer();
      i();
    } else i();
  }
  preloadFailView() {
    if (!this._hasPreloadedFailView) {
      var t = this._gameCtr;
      if (t && "function" == typeof t.loadRes) {
        this._hasPreloadedFailView = true;
        t.loadRes("prefabs/ui/FailView", cc.Prefab, "mainRes").catch(function () {});
      }
    }
  }
  getCheckTime() {
    var t,
      i,
      r = Math.max(0, Number(null !== (i = null === (t = this._config) || void 0 === t ? void 0 : t.checkTime) && void 0 !== i ? i : NoMatchTipsTrait.DEFAULT_CHECK_MS));
    return Math.max(NoMatchTipsTrait.DEFAULT_CHECK_MS, r);
  }
  startPending(t) {
    this.resetState("startPending");
    this._pending = {
      tileIds: t
    };
    this._mode = "waiting";
  }
  enterClicking() {
    this._mode = "clicking";
    this._countdownStarted && this.scheduleWaitTimer();
  }
  enterDragging() {
    var t,
      i = this;
    if ("dragging" !== this._mode) {
      this._mode = "dragging";
      this.clearWaitTimer();
      this.clearDragTimer();
      var e = this._config.moveTime / 1000,
        r = function r() {
          return i.tryShowFailNow("dragTimeout");
        };
      this._dragTimerCb = r;
      null === (t = this._timer) || void 0 === t || t.doOnce(e, r, this);
    }
  }
  scheduleWaitTimer() {
    var t,
      i = this;
    this.clearWaitTimer();
    var e = this.getCheckTime() / 1000,
      r = function r() {
        return i.tryShowFailNow("clicking" === i._mode ? "clickTimeout" : "waitTimeout");
      };
    this._waitTimerCb = r;
    null === (t = this._timer) || void 0 === t || t.doOnce(e, r, this);
  }
  tryShowFailNow(t) {
    if (this._pending) {
      this.executeNoMatchFailInput(this._pending.tileIds, t);
    } else {
      this.resetState(t);
    }
  }
  executeNoMatchFailInput(t, i) {
    GameInteraction.input({
      inputType: EGameInputEnum.NoMatchFail,
      tileIds: t
    });
    this.resetState("noMatchFailInput:" + i);
  }
  tryExcFail(t) {
    var i,
      e,
      r,
      n,
      o,
      a = t.ins,
      l = null == a ? void 0 : a._baseInput,
      s = null == a ? void 0 : a._gameContext,
      c = (null === (i = null == a ? void 0 : a._options) || void 0 === i ? void 0 : i.tileIds) || [];
    if (!l) return false;
    if (this.getCheckTime() <= 0) return false;
    if (!(null !== (o = null === (n = null === (r = null === (e = null == s ? void 0 : s.getTileMapObject) || void 0 === e ? void 0 : e.call(s)) || void 0 === r ? void 0 : r.checkIsDead) || void 0 === n ? void 0 : n.call(r, c)) && void 0 !== o && o)) return false;
    this.startPending(c);
    return true;
  }
  clearWaitTimer() {
    var t;
    if (this._waitTimerCb) {
      null === (t = this._timer) || void 0 === t || t.clearTimer(this._waitTimerCb);
      this._waitTimerCb = null;
    }
  }
  clearDragTimer() {
    var t;
    if (this._dragTimerCb) {
      null === (t = this._timer) || void 0 === t || t.clearTimer(this._dragTimerCb);
      this._dragTimerCb = null;
    }
  }
  resetState() {
    this.clearWaitTimer();
    this.clearDragTimer();
    this._pending = null;
    this._mode = "idle";
    this._countdownStarted = false;
  }
}