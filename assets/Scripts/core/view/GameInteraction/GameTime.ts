export class GameTime {
  _accumulatedTime = 0;
  _isRunning = true;
  _lastUpdateTime = 0;
  _lastFrameTime = 0;
  _pushEvent = null;
  get deltaTime() {
    var e = this._lastFrameTime,
      t = e - this._lastUpdateTime;
    this._lastUpdateTime = e;
    return t;
  }
  get currentTime() {
    return this._lastFrameTime;
  }
  get accumulatedTime() {
    return this._accumulatedTime;
  }
  constructor(e) {
    this._pushEvent = e;
  }
  update(e) {
    if (this._isRunning) {
      if (e > 0 && e < 5) {
        this._accumulatedTime += e;
        this._lastFrameTime += e;
      }
      if (this._accumulatedTime >= 3) {
        this.pushEvent();
        this._accumulatedTime = 0;
      }
    }
  }
  onGameShow() {
    this._isRunning = true;
  }
  onGameHide() {
    this._isRunning = false;
  }
  pushEvent() {
    this._pushEvent();
  }
  reset() {
    this._accumulatedTime = 0;
    this._lastFrameTime = 0;
    this._lastUpdateTime = 0;
    this._isRunning = true;
  }
}