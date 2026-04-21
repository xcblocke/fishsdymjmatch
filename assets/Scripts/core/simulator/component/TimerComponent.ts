class a {
  active = false;
  delay = 0;
  repeat = false;
  userFrame = false;
  exeTime = 0;
  method = null;
  target = null;
  args = null;
  clear() {
    this.active = false;
    this.method = void 0;
    this.target = void 0;
    this.args = void 0;
  }
  handle() {
    var e;
    this.method && (e = this.method).call.apply(e, [...[this.target], ...(this.args || [])]);
  }
}
export default class TimerComponent {
  _pool = [];
  _handlers = [];
  _currFrame = 0;
  _currentTime = 0;
  doOnce(e, t, o) {
    for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
    this.create(false, false, e, t, o, n);
  }
  doLoop(e, t, o) {
    for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
    this.create(false, true, e, t, o, n);
  }
  doFrameOnce(e, t, o) {
    for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
    this.create(true, false, e, t, o, n);
  }
  doFrameLoop(e, t, o) {
    for (var n = [], i = 3; i < arguments.length; i++) n[i - 3] = arguments[i];
    this.create(true, true, e, t, o, n);
  }
  clearTimer(e) {
    var t = this._handlers.find(function (t) {
      return t.method === e;
    });
    t && t.clear();
  }
  clearAllTimer() {
    var e, t;
    try {
      for (var o = __values(this._handlers), n = o.next(); !n.done; n = o.next()) n.value.clear();
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (t = o.return) && t.call(o);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  update(e) {
    this._currFrame++;
    this._currentTime += e;
    if (0 != this._handlers.length) {
      for (var t = 0; t < this._handlers.length; t++) {
        var o = (n = this._handlers[t]).userFrame ? this._currFrame : this._currentTime;
        if (n.active && o >= n.exeTime) if (n.repeat) for (; o >= n.exeTime;) {
          n.exeTime += n.delay;
          n.handle();
        } else {
          n.handle();
          n.active = false;
        }
      }
      for (t = this._handlers.length - 1; t >= 0; t--) {
        var n;
        if (!(n = this._handlers[t]).active) {
          n.clear();
          this._handlers.splice(t, 1);
          this._pool.push(n);
        }
      }
    }
  }
  create(e, t, o, n, r, l) {
    if (!n) return null;
    if (o < 0) {
      n.call.apply(n, [...[r], ...(l || [])]);
      return -1;
    }
    var s;
    (s = this._pool.length > 0 ? this._pool.pop() : new a()).active = true;
    s.userFrame = e;
    s.repeat = t;
    s.delay = o;
    s.method = n;
    s.target = r;
    s.args = l;
    s.exeTime = o + (e ? this._currFrame : this._currentTime);
    this._handlers.push(s);
    return n;
  }
}