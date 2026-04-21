const {
  ccclass,
  property
} = cc._decorator;
@ccclass
export default class TimeoutCheckerComponent extends cc.Component {
  _checkCallback = null;
  _checkInterval = 0.5;
  _accumulatedTime = 0;
  init(t, e = 0.5) {
    this._checkCallback = t;
    this._checkInterval = e;
    this._accumulatedTime = 0;
  }
  update(t) {
    if (this._checkCallback) {
      this._accumulatedTime += t;
      if (this._accumulatedTime >= this._checkInterval) {
        this._checkCallback();
        this._accumulatedTime = 0;
      }
    }
  }
  onDestroy() {
    this._checkCallback = null;
  }
}