const {
  ccclass,
  property,
  requireComponent
} = cc._decorator;
@mj.class
@requireComponent(cc.Label)
export default class CountdownComponent extends cc.Component {
  _label = null;
  _remainingTime = -1;
  _accumulatedTime = 0;
  _finishCallback = null;
  _customFormatFunc = null;
  onLoad() {
    this._label = this.node.getComponent(cc.Label);
    this._label;
  }
  setRemainTime(t, e = null) {
    t < 0 && (t = 0);
    this._remainingTime = 1000 * t;
    this._accumulatedTime = 0;
    this.updateLabel();
    this._finishCallback = e;
  }
  stop() {
    this._remainingTime = -1;
    this._accumulatedTime = 0;
  }
  setFormatFunc(t) {
    this._customFormatFunc = t;
    this._remainingTime >= 0 && this.updateLabel();
  }
  update(t) {
    var e;
    if (!(this._remainingTime < 0) && this._label) {
      this._accumulatedTime += 1000 * t;
      if (this._accumulatedTime >= 1000) {
        this._remainingTime -= Math.floor(this._accumulatedTime);
        this._accumulatedTime = this._accumulatedTime % 1000;
        this._remainingTime <= 0 && (this._remainingTime = 0);
        this.updateLabel();
        if (this._remainingTime <= 0) {
          this._remainingTime = -1;
          null === (e = this._finishCallback) || void 0 === e || e.call(this);
        }
      }
    }
  }
  updateLabel() {
    this._label && (this._label.string = this.formatCountdown(this._remainingTime));
  }
  formatCountdown(t) {
    if (t <= 0) return this.getFormatString(0, 0, 0);
    var e = Math.floor(t / 1000),
      o = Math.floor(e / 3600),
      n = Math.floor(e % 3600 / 60),
      a = e % 60;
    return this.getFormatString(o, n, a);
  }
  getFormatString(t, e, o) {
    if (this._customFormatFunc) return this._customFormatFunc(t, e, o);
    var n = function n(t) {
      return t.toString().padStart(2, "0");
    };
    return n(t) + ":" + n(e) + ":" + n(o);
  }
  onDestroy() {
    this.stop();
  }
}