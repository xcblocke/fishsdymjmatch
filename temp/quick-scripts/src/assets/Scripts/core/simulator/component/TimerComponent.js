"use strict";
cc._RF.push(module, 'b52deD/St1CAZuErFQUZu4c', 'TimerComponent');
// Scripts/core/simulator/component/TimerComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
var a = /** @class */ (function () {
    function a() {
        this.active = false;
        this.delay = 0;
        this.repeat = false;
        this.userFrame = false;
        this.exeTime = 0;
        this.method = null;
        this.target = null;
        this.args = null;
    }
    a.prototype.clear = function () {
        this.active = false;
        this.method = void 0;
        this.target = void 0;
        this.args = void 0;
    };
    a.prototype.handle = function () {
        var e;
        this.method && (e = this.method).call.apply(e, __spreadArrays([this.target], (this.args || [])));
    };
    return a;
}());
var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
        this._pool = [];
        this._handlers = [];
        this._currFrame = 0;
        this._currentTime = 0;
    }
    TimerComponent.prototype.doOnce = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(false, false, e, t, o, n);
    };
    TimerComponent.prototype.doLoop = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(false, true, e, t, o, n);
    };
    TimerComponent.prototype.doFrameOnce = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(true, false, e, t, o, n);
    };
    TimerComponent.prototype.doFrameLoop = function (e, t, o) {
        for (var n = [], i = 3; i < arguments.length; i++)
            n[i - 3] = arguments[i];
        this.create(true, true, e, t, o, n);
    };
    TimerComponent.prototype.clearTimer = function (e) {
        var t = this._handlers.find(function (t) {
            return t.method === e;
        });
        t && t.clear();
    };
    TimerComponent.prototype.clearAllTimer = function () {
        var e, t;
        try {
            for (var o = __values(this._handlers), n = o.next(); !n.done; n = o.next())
                n.value.clear();
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    TimerComponent.prototype.update = function (e) {
        this._currFrame++;
        this._currentTime += e;
        if (0 != this._handlers.length) {
            for (var t = 0; t < this._handlers.length; t++) {
                var o = (n = this._handlers[t]).userFrame ? this._currFrame : this._currentTime;
                if (n.active && o >= n.exeTime)
                    if (n.repeat)
                        for (; o >= n.exeTime;) {
                            n.exeTime += n.delay;
                            n.handle();
                        }
                    else {
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
    };
    TimerComponent.prototype.create = function (e, t, o, n, r, l) {
        if (!n)
            return null;
        if (o < 0) {
            n.call.apply(n, __spreadArrays([r], (l || [])));
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
    };
    return TimerComponent;
}());
exports.default = TimerComponent;

cc._RF.pop();