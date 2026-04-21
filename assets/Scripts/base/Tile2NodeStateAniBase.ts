export var EBehaviorState = {
  Enter: "enter",
  Exit: "exit"
};
export class Tile2NodeStateAniBase {
  _state = EBehaviorState.Exit;
  _dir = null;
  _node = null;
  _nodeAniState = null;
  _onEnteredCallBack = null;
  _onExitedCallBack = null;
  static CONST_SHOW_DEBUG_INFO = false;
  get node() {
    return this._node;
  }
  set node(e) {
    this._node = e;
  }
  get nodeAniState() {
    return this._nodeAniState;
  }
  get behaviorState() {
    return this._state;
  }
  get isEntering() {
    return "entering" === this._dir;
  }
  get isExiting() {
    return "exiting" === this._dir;
  }
  constructor(e, t) {
    this._node = e;
    this._nodeAniState = t;
  }
  onEnterStart(e) {
    this.onEnterEnd(e);
  }
  onExitStart(e) {
    this.onExitEnd(e);
  }
  onEnter() {}
  onExit() {}
  onEnterEnd() {
    if (this.isEntering) {
      this._dir = null;
      this._state = EBehaviorState.Enter;
      this._log("onEnterEnd → Enter");
      this._fireEnterCb();
    }
  }
  onExitEnd() {
    if (this.isExiting) {
      this._dir = null;
      this._state = EBehaviorState.Exit;
      this._log("onExitEnd → Exit");
      this._fireExitCb();
    }
  }
  _fireEnterCb() {
    var e = this._onEnteredCallBack;
    this._onEnteredCallBack = void 0;
    null == e || e();
  }
  _fireExitCb() {
    var e = this._onExitedCallBack;
    this._onExitedCallBack = void 0;
    null == e || e();
  }
  playAni(e, t) {
    if (this._state !== EBehaviorState.Enter || this.isExiting) {
      if (this.isEntering) {
        this._log("playAni: already entering, fire old cb, update new cb");
        this._fireEnterCb();
        this._onEnteredCallBack = t;
      } else {
        if (this.isExiting) {
          this._log("playAni: interrupt exiting");
          this._fireExitCb();
          this._dir = null;
          this.onExit(e);
          this._state = EBehaviorState.Exit;
        }
        this._log("playAni: start entering");
        this._onEnteredCallBack = t;
        this._dir = "entering";
        this.onEnterStart(e);
      }
    } else {
      this._log("playAni: already Enter, fire cb immediately");
      null == t || t();
    }
  }
  exitAni(e, t) {
    if (this._state !== EBehaviorState.Exit || this.isEntering) {
      if (this.isExiting) {
        this._log("exitAni: already exiting, fire old cb, update new cb");
        this._fireExitCb();
        this._onExitedCallBack = t;
      } else {
        if (this.isEntering) {
          this._log("exitAni: interrupt entering");
          this._fireEnterCb();
          this._dir = null;
          this.onEnter(e);
          this._state = EBehaviorState.Enter;
        }
        this._log("exitAni: start exiting");
        this._onExitedCallBack = t;
        this._dir = "exiting";
        this.onExitStart(e);
      }
    } else {
      this._log("exitAni: already Exit, fire cb immediately");
      null == t || t();
    }
  }
  forceEnter(e) {
    this._log("forceEnter");
    this._fireEnterCb();
    this._fireExitCb();
    this._dir = null;
    this._state = EBehaviorState.Enter;
    this.onEnter(e);
  }
  forceExit(e) {
    this._log("forceExit");
    this._fireEnterCb();
    this._fireExitCb();
    this._dir = null;
    this._state = EBehaviorState.Exit;
    this.onExit(e);
  }
  playAniForce(e, t) {
    this.forceExit(e);
    this.playAni(e, t);
  }
  exitAniForce(e, t) {
    this.forceEnter(e);
    this.exitAni(e, t);
  }
  forceEnterWithParam(e, t) {
    this._log("forceEnterWithParam");
    this._fireEnterCb();
    this._fireExitCb();
    this._onEnteredCallBack = t;
    this._state = EBehaviorState.Exit;
    this._dir = "entering";
    this.onEnterStart(e);
  }
  reset() {
    this._log("reset");
    this._fireEnterCb();
    this._fireExitCb();
    this._dir = null;
    this._state = EBehaviorState.Exit;
  }
  applyImmediate() {}
  _log() {
    Tile2NodeStateAniBase.CONST_SHOW_DEBUG_INFO;
  }
}