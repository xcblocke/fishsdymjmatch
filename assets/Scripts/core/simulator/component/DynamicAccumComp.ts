export class DynamicAccumHandler {
  elapsedTime = 0;
  currentValue = 0;
  id = null;
  fromValue = null;
  toValue = null;
  duration = null;
  progressCallback = null;
  finishedCallback = null;
  constructor(e, t, o, n, i = null, r = null) {
    this.id = e;
    this.fromValue = t;
    this.toValue = o;
    this.duration = n;
    this.progressCallback = i;
    this.finishedCallback = r;
  }
  tick(e) {
    this.elapsedTime += e;
    var t = Math.min(this.elapsedTime / this.duration, 1);
    this.currentValue = this.fromValue + t * (this.toValue - this.fromValue);
    null !== this.progressCallback && this.progressCallback(this.currentValue, t);
    if (this.isCompleted() && null !== this.finishedCallback) {
      this.finishedCallback(this.toValue);
      this.finishedCallback = null;
    }
  }
  isCompleted() {
    return this.elapsedTime >= this.duration;
  }
  updateTargetValue(e) {
    this.toValue = e;
    this.elapsedTime = 0;
    this.fromValue = this.currentValue;
  }
  getCurrentValue() {
    return this.currentValue;
  }
}
export default class DynamicAccumComp {
  handlers = [];
  static nextId = 1;
  create(t, o, i, r = null, a = null) {
    var l = DynamicAccumComp.nextId++,
      s = new DynamicAccumHandler(l, t, o, i, r, a);
    this.handlers.push(s);
    return s;
  }
  removeById(e) {
    var t = this.handlers.findIndex(function (t) {
      return t.id === e;
    });
    if (t > -1) {
      this.handlers.splice(t, 1);
      return true;
    }
    return false;
  }
  removeHandler(e) {
    return null !== e && this.removeById(e.id);
  }
  update(e) {
    if (0 !== this.handlers.length) for (var t = this.handlers.length - 1; t >= 0; t--) {
      var o = this.handlers[t];
      o.tick(e);
      o.isCompleted() && this.handlers.splice(t, 1);
    }
  }
  getActiveHandlerCount() {
    return this.handlers.length;
  }
  hasActiveHandlers() {
    return this.handlers.length > 0;
  }
  getHandlerById(e) {
    return this.handlers.find(function (t) {
      return t.id === e;
    }) || null;
  }
  clear() {
    this.handlers = [];
    DynamicAccumComp.nextId = 1;
  }
}