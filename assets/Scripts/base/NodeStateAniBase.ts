export var EBehaviorState = {
  Idle: "idle",
  Entering: "entering",
  Entered: "entered",
  Exiting: "exiting",
  Exited: "exited"
};
export class NodeStateAniBase {
  _behaviorState = EBehaviorState.Idle;
  _node = null;
  _nodeAniState = null;
  behaviorState = EBehaviorState.Idle;
  _onEnteredCallBack = null;
  _onExitedCallBack = null;
  static CONST_SHOW_DEBUG_INFO = false;
  get node() {
    return this._node;
  }
  set node(e) {
    this._node !== e && (this._node = e);
  }
  get nodeAniState() {
    return this._nodeAniState;
  }
  get behaviorState() {
    return this._behaviorState;
  }
  set behaviorState(t) {
    if (this._behaviorState !== t) {
      NodeStateAniBase.CONST_SHOW_DEBUG_INFO;
      this._behaviorState = t;
    }
  }
  constructor(e, t) {
    this._node = e;
    this._nodeAniState = t;
  }
  onEnterStart() {
    this.behaviorState = EBehaviorState.Entering;
  }
  onEnterEnd() {
    var e;
    this.behaviorState = EBehaviorState.Entered;
    null === (e = this._onEnteredCallBack) || void 0 === e || e.call(this);
  }
  onExitStart() {
    this.behaviorState = EBehaviorState.Exiting;
  }
  onExit() {
    this.behaviorState = EBehaviorState.Exited;
    this.behaviorState = EBehaviorState.Idle;
  }
  onExitEnd() {
    var e;
    this.behaviorState = EBehaviorState.Exited;
    null === (e = this._onExitedCallBack) || void 0 === e || e.call(this);
    this.behaviorState = EBehaviorState.Idle;
  }
  onEnter() {
    this.behaviorState = EBehaviorState.Entered;
  }
  reset() {
    this.behaviorState = EBehaviorState.Idle;
  }
  playAni(e, t) {
    this._onEnteredCallBack = t;
    switch (this.behaviorState) {
      case EBehaviorState.Idle:
        break;
      case EBehaviorState.Entered:
      case EBehaviorState.Entering:
        return;
      case EBehaviorState.Exiting:
        this.exit(e);
    }
    this.enterStart(e);
  }
  exitAni(e, t) {
    this._onExitedCallBack = t;
    switch (this.behaviorState) {
      case EBehaviorState.Idle:
      case EBehaviorState.Exiting:
      case EBehaviorState.Exited:
        return;
      case EBehaviorState.Entering:
        this.enter(e);
        break;
      case EBehaviorState.Entered:
    }
    this.exitStart(e);
  }
  forceEnter(e) {
    switch (this.behaviorState) {
      case EBehaviorState.Idle:
      case EBehaviorState.Entering:
      case EBehaviorState.Entered:
        this.enter(e);
        break;
      case EBehaviorState.Exiting:
        this.exit(e);
        this.enter(e);
    }
  }
  forceExit(e) {
    switch (this.behaviorState) {
      case EBehaviorState.Idle:
        this.exit();
        break;
      case EBehaviorState.Entering:
        this.enter(e);
        this.exit(e);
        break;
      case EBehaviorState.Exiting:
      case EBehaviorState.Entered:
        this.exit(e);
    }
  }
  playAniForce(e, t) {
    this._onEnteredCallBack = t;
    this.forceExit(e);
    this.playAni(e, t);
  }
  exitAniForce(e, t) {
    this._onExitedCallBack = t;
    this.forceEnter(e);
    this.exitAni(e, t);
  }
  forceEnterWithParam(e, t) {
    this._onEnteredCallBack = t;
    this.enterStart(e);
  }
  enter(e) {
    this.onEnter(e);
  }
  exit(e) {
    this.onExit(e);
  }
  enterStart(e) {
    this.onEnterStart(e);
  }
  exitStart(e) {
    this.onExitStart(e);
  }
  applyImmediate() {}
}