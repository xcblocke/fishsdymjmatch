"use strict";
cc._RF.push(module, 'db12c7dINVN8KCHuu4gDcQ5', 'NodeAnimator');
// Scripts/animator/NodeAnimator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeAnimator = void 0;
var NodeAnimator = /** @class */ (function () {
    function NodeAnimator() {
    }
    NodeAnimator.init = function () {
        if (!this.initialized) {
            this.registerExecutor("default", this.defaultExecutor);
            this.registerExecutor("move", this.moveExecutor);
            this.registerExecutor("spiralToCenter", this.spiralToCenterExecutor);
            this.registerExecutor("spiralFromCenter", this.spiralFromCenterExecutor);
            this.registerExecutor("stackMove", this.stackMoveExecutor);
            this.registerExecutor("stackPile", this.stackPileExecutor);
            this.registerExecutor("stackWave", this.stackWaveExecutor);
            this.registerExecutor("stackExpand", this.stackExpandExecutor);
            this.registerExecutor("topMaskMove", this.topMaskMoveExecutor);
            this.registerCustomEasings();
            this.initialized = true;
        }
    };
    NodeAnimator.registerCustomEasings = function () {
        cc.easing.customBackOut = function (e) {
            return 1 + 1.6 * Math.pow(e - 1, 3) + 0.6 * Math.pow(e - 1, 2);
        };
    };
    NodeAnimator.registerExecutor = function (e, t) {
        this.executors.has(e);
        this.executors.set(e, t);
    };
    NodeAnimator.setDefaultAnimationType = function (e) {
        this.executors.has(e) && (this.defaultAnimationType = e);
    };
    NodeAnimator.getDefaultAnimationType = function () {
        return this.defaultAnimationType;
    };
    NodeAnimator.execute = function (e) {
        this.initialized || this.init();
        this.animatingNodes.add(e.node);
        if (e.customExecutor)
            return e.customExecutor(e.node, e);
        var t = e.animationType || this.defaultAnimationType, o = this.executors.get(t);
        return o ? o(e.node, e) : this.defaultExecutor(e.node, e);
    };
    NodeAnimator.stopAllAnimations = function () {
        var e, t;
        try {
            for (var o = __values(this.animatingNodes), i = o.next(); !i.done; i = o.next()) {
                var r = i.value;
                cc.isValid(r) && cc.Tween.stopAllByTarget(r);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.animatingNodes.clear();
    };
    NodeAnimator.clearAnimatingNodes = function () {
        this.animatingNodes.clear();
    };
    NodeAnimator.defaultExecutor = function (e, t) {
        var o = t.startOffset, n = t.endPosition, i = t.delay, r = t.duration, a = t.easing, l = n.clone(), s = l.clone().add(cc.v3(o.x, o.y, 0));
        e.setPosition(s);
        var c = cc.tween(e).delay(i);
        return (c = a ? c.to(r, {
            position: l
        }, {
            easing: a
        }) : c.to(r, {
            position: l
        })).start();
    };
    NodeAnimator.moveExecutor = function (e, t) {
        var o = t.startOffset, n = t.endPosition, i = t.delay, r = t.duration, a = t.easing, l = t.extraParams, s = n.clone(), c = s.clone().add(cc.v3(o.x, o.y, 0));
        e.setPosition(c);
        var u = cc.tween(e).delay(i);
        (null == l ? void 0 : l.fadeIn) && (u = u.call(function () {
            e.opacity = 255;
        }));
        return (u = a ? u.to(r, {
            position: s
        }, {
            easing: a
        }) : u.to(r, {
            position: s
        })).start();
    };
    NodeAnimator.spiralToCenterExecutor = function (e, t) {
        var o = t.delay, n = t.duration, i = t.easing, r = t.extraParams;
        if (r && r.centerPos) {
            var a = r.centerPos, l = r.rounds || 1, s = false !== r.clockwise, c = r.fadeOut || false, u = e.position.clone(), p = u.clone().subtract(a).mag(), f = u.clone().subtract(a), d = Math.atan2(f.y, f.x), h = 2 * l * Math.PI * (s ? -1 : 1), y = e.opacity, m = i ? cc.easing[i] : null;
            return cc.tween({
                value: 0
            }).delay(o).to(n, {
                value: 1
            }, {
                easing: i || "linear",
                progress: function (t, o, n, i) {
                    if (!cc.isValid(e))
                        return i;
                    var r = m ? m(i) : i, l = p * (1 - r), s = d + h * r, f = a.x + Math.cos(s) * l, v = a.y + Math.sin(s) * l;
                    e.setPosition(f, v, u.z);
                    c && (e.opacity = y * (1 - r));
                    return t + (o - t) * i;
                }
            }).start();
        }
        console.error("[NodeAnimator] spiralToCenter 需要 extraParams.centerPos 参数");
    };
    NodeAnimator.spiralFromCenterExecutor = function (e, t) {
        var o = t.endPosition, n = t.delay, i = t.duration, r = t.easing, a = t.extraParams;
        if (a && a.centerPos) {
            var l = a.centerPos, s = a.rounds || 1, c = false !== a.clockwise, u = a.fadeIn || false;
            e.setPosition(l);
            var p = o.clone().subtract(l), f = p.mag(), d = Math.atan2(p.y, p.x), h = 2 * s * Math.PI * (c ? -1 : 1), y = d - h, m = u ? 0 : e.opacity;
            u && (e.opacity = 0);
            var v = u ? 255 : m, g = r ? cc.easing[r] : null;
            return cc.tween({
                value: 0
            }).delay(n).to(i, {
                value: 1
            }, {
                easing: r || "linear",
                progress: function (t, n, i, r) {
                    if (!cc.isValid(e))
                        return r;
                    var a = g ? g(r) : r, s = f * a, c = y + h * a, p = l.x + Math.cos(c) * s, d = l.y + Math.sin(c) * s;
                    e.setPosition(p, d, o.z);
                    u && (e.opacity = v * a);
                    return t + (n - t) * r;
                }
            }).start();
        }
        console.error("[NodeAnimator] spiralFromCenter 需要 extraParams.centerPos 参数");
    };
    NodeAnimator.stackMoveExecutor = function (e, t) {
        var o = t.endPosition, n = t.delay, i = t.duration, r = t.easing, a = t.extraParams, l = cc.tween(e).delay(n);
        return (l = (null == a ? void 0 : a.fadeOut) ? r ? l.to(i, {
            position: o,
            opacity: 0
        }, {
            easing: r
        }) : l.to(i, {
            position: o,
            opacity: 0
        }) : r ? l.to(i, {
            position: o
        }, {
            easing: r
        }) : l.to(i, {
            position: o
        })).start();
    };
    NodeAnimator.stackPileExecutor = function (e, t) {
        var o = t.endPosition, n = t.delay, i = t.duration, r = t.easing, a = t.extraParams;
        if (null == a ? void 0 : a.isBottom)
            return cc.tween(e).delay(n).start();
        var l = cc.tween(e).delay(n);
        return (l = r ? l.to(i, {
            position: o
        }, {
            easing: r
        }) : l.to(i, {
            position: o
        })).start();
    };
    NodeAnimator.stackWaveExecutor = function (e, t) {
        var o = t.endPosition, n = t.delay, i = t.extraParams;
        if (!(i && i.waveHeight && i.upDuration && i.downDuration)) {
            console.error("[NodeAnimator] stackWave 需要 extraParams.waveHeight, upDuration, downDuration 参数");
            return cc.tween(e).start();
        }
        var r = i.waveHeight, a = i.upDuration, l = i.downDuration, s = i.upEasing || "circOut", c = i.downEasing || "sineInOut", u = e.position.clone(), p = o || u, f = u.clone().add(cc.v3(0, r, 0));
        return cc.tween(e).delay(n).to(a, {
            position: f
        }, {
            easing: s
        }).to(l, {
            position: p
        }, {
            easing: c
        }).start();
    };
    NodeAnimator.stackExpandExecutor = function (e, t) {
        var o = t.endPosition, n = t.delay, i = t.duration, r = t.easing, a = t.extraParams, l = cc.tween(e).delay(n);
        if (null == a ? void 0 : a.fadeIn) {
            e.opacity = 0;
            l = r ? l.to(i, {
                position: o,
                opacity: 255
            }, {
                easing: r
            }) : l.to(i, {
                position: o,
                opacity: 255
            });
        }
        else
            l = r ? l.to(i, {
                position: o
            }, {
                easing: r
            }) : l.to(i, {
                position: o
            });
        return l.start();
    };
    NodeAnimator.topMaskMoveExecutor = function (e, t) {
        var o = t.startOffset, n = t.endPosition, i = t.delay, r = t.duration, a = t.easing, l = t.extraParams, s = n.clone(), c = s.clone().add(cc.v3(o.x, o.y, 0));
        e.setPosition(c);
        e.opacity = 0;
        var u = (null == l ? void 0 : l.maskTopY) || s.y + o.y, p = o.y, f = u - 40, d = (Math.max(0, (c.y - f) / p), a ? cc.easing[a] : cc.easing.quadOut);
        return cc.tween({
            value: 0
        }).delay(i).to(r, {
            value: 1
        }, {
            easing: "linear",
            progress: function (t, o, n, i) {
                if (!cc.isValid(e))
                    return i;
                var r = d ? d(i) : i, a = c.x + (s.x - c.x) * r, l = c.y + (s.y - c.y) * r;
                e.setPosition(a, l, c.z);
                if (l > f)
                    e.opacity = 0;
                else {
                    var u = f - s.y, p = (f - l) / u, h = Math.min(1, Math.max(0, p)), y = Math.min(1, h / 0.3);
                    e.opacity = Math.floor(255 * y);
                }
                return t + (o - t) * i;
            }
        }).start();
    };
    NodeAnimator.executors = new Map();
    NodeAnimator.defaultAnimationType = "default";
    NodeAnimator.initialized = false;
    NodeAnimator.animatingNodes = new Set();
    return NodeAnimator;
}());
exports.NodeAnimator = NodeAnimator;

cc._RF.pop();