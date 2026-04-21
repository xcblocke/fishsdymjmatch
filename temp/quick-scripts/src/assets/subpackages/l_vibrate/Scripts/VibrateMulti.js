"use strict";
cc._RF.push(module, 'babbckv76RMfK18c/WsJJOj', 'VibrateMulti');
// subpackages/l_vibrate/Scripts/VibrateMulti.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.VibrateMulti = void 0;
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateMulti = /** @class */ (function () {
    function VibrateMulti() {
    }
    VibrateMulti.start = function (t) {
        this.cleanup();
        this.executeMultipleVibrate(t.predefinedParams);
    };
    VibrateMulti.executeMultipleVibrate = function (t) {
        var e, i, a = this, n = [], o = [], l = [];
        this._isFinished = false;
        if (t.length > 0)
            if (t[0] < 10) {
                o.push(true);
                this.triggerVibrate(t[0].toString());
                for (var c = 1; c < t.length; c++)
                    if (t[c] < 10) {
                        l.push(t[c]);
                        o.push(false);
                    }
                    else if (n.length > 0) {
                        n.push(t[c] + n[n.length - 1]);
                    }
                    else {
                        n.push(t[c]);
                    }
            }
            else
                try {
                    for (var s = __values(t), d = s.next(); !d.done; d = s.next()) {
                        var p = d.value;
                        if (p < 10) {
                            l.push(p);
                            o.push(false);
                        }
                        else {
                            var f = n.length;
                            if (f > 0) {
                                n.push(p + n[f - 1]);
                            }
                            else {
                                n.push(p);
                            }
                        }
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        d && !d.done && (i = s.return) && i.call(s);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
        for (var u = 0, h = function h(t) {
            for (; u < o.length && o[u];)
                u++;
            if (u >= l.length)
                return "break";
            var e = n[t], i = l[u], r = setTimeout(function () {
                if (!a._isFinished) {
                    a.triggerVibrate(i.toString());
                    var t = a._timers.indexOf(r);
                    -1 !== t && a._timers.splice(t, 1);
                    0 === a._timers.length && a._isFinished;
                }
            }, e);
            g._timers.push(r);
            o[u] = true;
            u++;
        }, g = this, b = 0; b < n.length && "break" !== h(b); b++)
            ;
    };
    VibrateMulti.triggerVibrate = function (t) {
        VibrateManager_1.default.getInstance().triggerVibrateAdvence(t);
    };
    VibrateMulti.cleanup = function () {
        if (VibrateMulti._timers.length > 0) {
            VibrateMulti._timers.forEach(function (t) {
                clearTimeout(t);
            });
            VibrateMulti._timers = [];
        }
        this._isFinished = true;
    };
    VibrateMulti._timers = [];
    VibrateMulti._isFinished = false;
    return VibrateMulti;
}());
exports.VibrateMulti = VibrateMulti;

cc._RF.pop();