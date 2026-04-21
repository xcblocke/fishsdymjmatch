export class Tile2AniActionBase {
  _isPlaying = false;
  _cb = null;
  static CONST_SHOW_DEBUG_INFO = false;
  get isPlaying() {
    return this._isPlaying;
  }
  _fireCb() {
    var e = this._cb;
    this._cb = void 0;
    null == e || e();
  }
  play(e, t) {
    if (this._isPlaying) {
      this._log("play: interrupt current, fire old cb");
      this._isPlaying = false;
      this.onCancel();
      this._fireCb();
      if (this._isPlaying) {
        this._log("play: preempted by re-entrant call, fire cb immediately");
        null == t || t();
        return;
      }
    }
    this._log("play: start");
    this._cb = t;
    this._isPlaying = true;
    this.onPlay(e);
  }
  cancel() {
    if (this._isPlaying) {
      this._log("cancel");
      this._isPlaying = false;
      this.onCancel();
      this._fireCb();
    }
  }
  interrupt() {
    if (this._isPlaying) {
      this._log("interrupt");
      this._isPlaying = false;
      this.onInterrupt();
      this._fireCb();
    }
  }
  finish() {
    if (this._isPlaying) {
      this._log("finish");
      this._isPlaying = false;
      this._fireCb();
    }
  }
  onInterrupt() {
    this.onCancel();
  }
  _log() {
    Tile2AniActionBase.CONST_SHOW_DEBUG_INFO;
  }
  _reparent(e, t) {
    if (cc.isValid(e) && cc.isValid(t) && e.parent !== t) {
      var o = e.convertToWorldSpaceAR(cc.v2(0, 0)),
        n = t.convertToNodeSpaceAR(o);
      e.parent = t;
      e.setPosition(n.x, n.y);
    }
  }
}