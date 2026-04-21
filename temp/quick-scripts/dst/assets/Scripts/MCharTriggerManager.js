
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MCharTriggerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa8b7gq0qFAcqzrerJO6rIG', 'MCharTriggerManager');
// Scripts/MCharTriggerManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MCharTriggerManager = void 0;
var MCharTriggerManager = /** @class */ (function () {
    function MCharTriggerManager(e) {
        this.graph = null;
        this.active = false;
        this.primaryResId = null;
        this.primaryPairData = null;
        this.pairedCoords = new Set();
        this.lockedCoords = new Set();
        this.lockedResIds = new Set();
        this.stage = -1;
        this.xyz = null;
        this.abc = null;
        this.xyzPartner = null;
        this.abcPartner = null;
        this.groups = [];
        this.graph = e;
    }
    MCharTriggerManager.prototype.reset = function () {
        this.active = false;
        this.primaryResId = null;
        this.primaryPairData = null;
        this.pairedCoords.clear();
        this.lockedCoords.clear();
        this.lockedResIds.clear();
        this.stage = -1;
        this.xyz = this.abc = this.xyzPartner = this.abcPartner = null;
        this.groups = [];
    };
    MCharTriggerManager.prototype.initSingleM = function (e, t) {
        var o, r, a, l, s, c, u = new Map();
        try {
            for (var p = __values(t), f = p.next(); !f.done; f = p.next()) {
                var d = (T = f.value)[0].resId;
                u.set(d, (u.get(d) || 0) + 2);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (r = p.return) && r.call(p);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var h = [];
        try {
            for (var y = __values(u), m = y.next(); !m.done; m = y.next()) {
                var v = __read(m.value, 2);
                d = v[0];
                4 === v[1] && h.push(d);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (l = y.return) && l.call(y);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        if (0 !== h.length) {
            this.primaryResId = h[Math.floor(Math.random() * h.length)];
            try {
                for (var g = __values(t), _ = g.next(); !_.done; _ = g.next()) {
                    var T;
                    if ((T = _.value)[0].resId === this.primaryResId) {
                        this.primaryPairData = T;
                        break;
                    }
                }
            }
            catch (e) {
                s = {
                    error: e
                };
            }
            finally {
                try {
                    _ && !_.done && (c = g.return) && c.call(g);
                }
                finally {
                    if (s)
                        throw s.error;
                }
            }
            var C = this.findPredPair(e), b = C.bestXyz, E = C.bestAbc;
            if (b) {
                this.xyz = b;
                this.abc = E;
                this.active = true;
                this.stage = 0;
                this.lockedCoords = new Set([this.xyz, this.abc]);
            }
        }
    };
    MCharTriggerManager.prototype.checkSingleMTrigger = function (e, t, o) {
        var n = this;
        if (!this.active || this.stage < 0)
            return null;
        var i = new Set(e.map(function (e) {
            return n.graph.tileToCoord(e);
        }));
        if (0 === this.stage && this.xyz && this.abc) {
            var a = t.get(this.xyz);
            if (!a || !o.has(a)) {
                this.cancelSingleM();
                return null;
            }
            if (!i.has(this.xyz))
                return null;
            var l = __spreadArrays(i).filter(function (e) {
                return e !== n.xyz && !n.lockedCoords.has(e);
            });
            if (0 === l.length) {
                this.cancelSingleM();
                return null;
            }
            this.xyzPartner = l[Math.floor(Math.random() * l.length)];
            var s = new Set(__spreadArrays(this.graph.getExpanded("pred", this.abc), this.graph.getExpanded("left", this.abc))), c = l.filter(function (e) {
                return e !== n.xyzPartner && !s.has(e) && !n.graph.getExpanded("pred", e).has(n.abc);
            });
            0 === c.length && (c = l.filter(function (e) {
                return e !== n.xyzPartner && !n.graph.getExpanded("pred", n.abc).has(e);
            }));
            if (0 === c.length) {
                this.cancelSingleM();
                return null;
            }
            this.abcPartner = c[Math.floor(Math.random() * c.length)];
            this.lockedCoords = new Set([this.abc, this.abcPartner]);
            this.stage = 1;
            this.pairedCoords.add(this.xyz);
            this.pairedCoords.add(this.xyzPartner);
            return [t.get(this.xyz), t.get(this.xyzPartner)];
        }
        if (1 === this.stage && this.abc && this.abcPartner && i.has(this.abc) && i.has(this.abcPartner)) {
            this.stage = 2;
            this.active = false;
            this.lockedCoords.clear();
            this.pairedCoords.add(this.abc);
            this.pairedCoords.add(this.abcPartner);
            return [t.get(this.abc), t.get(this.abcPartner)];
        }
        return null;
    };
    MCharTriggerManager.prototype.cancelSingleM = function () {
        this.active = false;
        this.stage = -1;
        this.lockedCoords.clear();
    };
    MCharTriggerManager.prototype.initDualM = function (e, t) {
        var o, a, l, s, c, u, p, f, d, h, y = this, m = new Map();
        try {
            for (var v = __values(t), g = v.next(); !g.done; g = v.next()) {
                var _ = g.value[0].resId;
                m.set(_, (m.get(_) || 0) + 2);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (a = v.return) && a.call(v);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var T = [], C = [];
        try {
            for (var b = __values(m), E = b.next(); !E.done; E = b.next()) {
                var S = __read(E.value, 2), I = (_ = S[0], S[1]);
                if (4 === I) {
                    T.push(_);
                }
                else {
                    I > 4 && C.push(_);
                }
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                E && !E.done && (s = b.return) && s.call(b);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        this.shuffleArray(T);
        this.shuffleArray(C);
        var w = __spreadArrays(T, C).slice(0, 2);
        if (0 !== w.length) {
            var B = new Map(e.map(function (e) {
                return [y.graph.tileToCoord(e), e];
            })), x = new Set(e.filter(function (e) {
                return e.isValid;
            })), M = new Set(this.graph.getSelectableTiles(x, B).map(function (e) {
                return y.graph.tileToCoord(e);
            })), O = [];
            try {
                for (var D = __values(e), P = D.next(); !P.done; P = D.next()) {
                    var A = P.value, R = this.graph.tileToCoord(A), N = this.graph.getExpanded("pred", R);
                    if (0 !== N.size)
                        try {
                            for (var j = (p = void 0, __values(N)), k = j.next(); !k.done; k = j.next()) {
                                var L = k.value;
                                if (L !== R) {
                                    var G = B.get(L);
                                    G && O.push({
                                        score: [M.has(L) ? 0 : 1, G.layer - A.layer >= 2 ? 1 : 0],
                                        xyz: L,
                                        abc: R
                                    });
                                }
                            }
                        }
                        catch (e) {
                            p = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                k && !k.done && (f = j.return) && f.call(j);
                            }
                            finally {
                                if (p)
                                    throw p.error;
                            }
                        }
                }
            }
            catch (e) {
                c = {
                    error: e
                };
            }
            finally {
                try {
                    P && !P.done && (u = D.return) && u.call(D);
                }
                finally {
                    if (c)
                        throw c.error;
                }
            }
            var F = new Set(), V = function V(e) {
                var o, i, r = O.filter(function (e) {
                    return !F.has(e.xyz) && !F.has(e.abc);
                });
                if (0 === r.length)
                    return "continue";
                r.sort(function (e, t) {
                    return e.score[0] !== t.score[0] ? t.score[0] - e.score[0] : t.score[1] - e.score[1];
                });
                var a = r[0].score, l = r.filter(function (e) {
                    return e.score[0] === a[0] && e.score[1] === a[1];
                }), s = l[Math.floor(Math.random() * l.length)];
                F.add(s.xyz);
                F.add(s.abc);
                var c = null;
                try {
                    for (var u = (o = void 0, __values(t)), p = u.next(); !p.done; p = u.next()) {
                        var f = p.value;
                        if (f[0].resId === e) {
                            c = f;
                            break;
                        }
                    }
                }
                catch (e) {
                    o = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (i = u.return) && i.call(u);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
                U.groups.push({
                    active: true,
                    resId: e,
                    stage: 0,
                    xyz: s.xyz,
                    abc: s.abc,
                    xyzPartner: null,
                    abcPartner: null,
                    pairData: c
                });
                U.lockedCoords.add(s.xyz);
                U.lockedCoords.add(s.abc);
                U.lockedResIds.add(e);
            }, U = this;
            try {
                for (var H = __values(w), W = H.next(); !W.done; W = H.next())
                    V(W.value);
            }
            catch (e) {
                d = {
                    error: e
                };
            }
            finally {
                try {
                    W && !W.done && (h = H.return) && h.call(H);
                }
                finally {
                    if (d)
                        throw d.error;
                }
            }
            this.active = this.groups.some(function (e) {
                return e.active;
            });
            this.groups.length > 0 && (this.primaryResId = this.groups[0].resId);
        }
    };
    MCharTriggerManager.prototype.checkDualMTrigger = function (e, t, o) {
        var i, a, l, s, c = this, u = new Set(e.map(function (e) {
            return c.graph.tileToCoord(e);
        }));
        try {
            for (var p = __values(this.groups), f = p.next(); !f.done; f = p.next())
                if ((_ = f.value).active && 1 === _.stage && _.abc && _.abcPartner) {
                    var d = t.get(_.abc), h = t.get(_.abcPartner);
                    if (d && h && o.has(d) && o.has(h)) {
                        if (u.has(_.abc) && u.has(_.abcPartner)) {
                            this.clearGroupLocks(_);
                            _.stage = 2;
                            _.active = false;
                            this.pairedCoords.add(_.abc);
                            this.pairedCoords.add(_.abcPartner);
                            this.active = this.groups.some(function (e) {
                                return e.active;
                            });
                            return [d, h];
                        }
                    }
                    else {
                        this.clearGroupLocks(_);
                        _.active = false;
                        _.stage = -1;
                    }
                }
        }
        catch (e) {
            i = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (a = p.return) && a.call(p);
            }
            finally {
                if (i)
                    throw i.error;
            }
        }
        var y = function y(e) {
            if (!e.active || 0 !== e.stage || !e.xyz || !e.abc)
                return "continue";
            var n = t.get(e.xyz);
            if (!n || !o.has(n)) {
                m.lockedCoords.delete(e.xyz);
                m.lockedCoords.delete(e.abc);
                e.active = false;
                e.stage = -1;
                return "continue";
            }
            if (!u.has(e.xyz))
                return "continue";
            var i = __spreadArrays(u).filter(function (t) {
                return t !== e.xyz && !c.lockedCoords.has(t);
            });
            if (0 === i.length) {
                e.active = false;
                e.stage = -1;
                m.lockedCoords.delete(e.xyz);
                m.lockedCoords.delete(e.abc);
                return "continue";
            }
            e.xyzPartner = i[Math.floor(Math.random() * i.length)];
            var a = new Set(__spreadArrays(m.graph.getExpanded("pred", e.abc), m.graph.getExpanded("left", e.abc))), l = i.filter(function (t) {
                return t !== e.xyzPartner && !a.has(t) && !c.graph.getExpanded("pred", t).has(e.abc);
            });
            0 === l.length && (l = i.filter(function (t) {
                return t !== e.xyzPartner && !c.graph.getExpanded("pred", e.abc).has(t);
            }));
            if (0 === l.length) {
                e.active = false;
                e.stage = -1;
                m.lockedCoords.delete(e.xyz);
                m.lockedCoords.delete(e.abc);
                return "continue";
            }
            e.abcPartner = l[Math.floor(Math.random() * l.length)];
            m.lockedCoords.delete(e.xyz);
            m.lockedCoords.delete(e.xyzPartner);
            m.lockedCoords.add(e.abc);
            m.lockedCoords.add(e.abcPartner);
            e.stage = 1;
            m.pairedCoords.add(e.xyz);
            m.pairedCoords.add(e.xyzPartner);
            return {
                value: [t.get(e.xyz), t.get(e.xyzPartner)]
            };
        }, m = this;
        try {
            for (var v = __values(this.groups), g = v.next(); !g.done; g = v.next()) {
                var _, T = y(_ = g.value);
                if ("object" == typeof T)
                    return T.value;
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                g && !g.done && (s = v.return) && s.call(v);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        return null;
    };
    MCharTriggerManager.prototype.findGroupForCoord = function (e, t) {
        var o, i;
        try {
            for (var r = __values(this.groups), a = r.next(); !a.done; a = r.next()) {
                var l = a.value;
                if ([l.xyz, l.abc, l.xyzPartner, l.abcPartner].includes(e) || [l.xyz, l.abc, l.xyzPartner, l.abcPartner].includes(t))
                    return l;
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (i = r.return) && i.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return null;
    };
    MCharTriggerManager.prototype.findPredPair = function (e) {
        var t, o, i, r, a = this, l = new Map(e.map(function (e) {
            return [a.graph.tileToCoord(e), e];
        })), s = new Set(e.filter(function (e) {
            return e.isValid;
        })), c = new Set(this.graph.getSelectableTiles(s, l).map(function (e) {
            return a.graph.tileToCoord(e);
        })), u = [];
        try {
            for (var p = __values(e), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = this.graph.tileToCoord(d), y = this.graph.getExpanded("pred", h);
                if (0 !== y.size)
                    try {
                        for (var m = (i = void 0, __values(y)), v = m.next(); !v.done; v = m.next()) {
                            var g = v.value;
                            if (g !== h) {
                                var _ = l.get(g);
                                _ && u.push({
                                    score: [c.has(g) ? 0 : 1, _.layer - d.layer >= 2 ? 1 : 0],
                                    xyz: g,
                                    abc: h
                                });
                            }
                        }
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            v && !v.done && (r = m.return) && r.call(m);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 === u.length)
            return {
                bestXyz: null,
                bestAbc: null
            };
        u.sort(function (e, t) {
            return e.score[0] !== t.score[0] ? t.score[0] - e.score[0] : t.score[1] - e.score[1];
        });
        var T = u[0].score, C = u.filter(function (e) {
            return e.score[0] === T[0] && e.score[1] === T[1];
        }), b = C[Math.floor(Math.random() * C.length)];
        return {
            bestXyz: b.xyz,
            bestAbc: b.abc
        };
    };
    MCharTriggerManager.prototype.clearGroupLocks = function (e) {
        e.abc && this.lockedCoords.delete(e.abc);
        e.abcPartner && this.lockedCoords.delete(e.abcPartner);
        e.xyz && this.lockedCoords.delete(e.xyz);
        e.xyzPartner && this.lockedCoords.delete(e.xyzPartner);
    };
    MCharTriggerManager.prototype.shuffleArray = function (e) {
        for (var t, o = e.length - 1; o > 0; o--) {
            var n = Math.floor(Math.random() * (o + 1));
            t = __read([e[n], e[o]], 2), e[o] = t[0], e[n] = t[1];
        }
    };
    return MCharTriggerManager;
}());
exports.MCharTriggerManager = MCharTriggerManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL01DaGFyVHJpZ2dlck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQWNFLDZCQUFZLENBQUM7UUFiYixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNYLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxRQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFVixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0QsbUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFB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LENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDTixJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUU7b0JBQzNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7NEJBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOzRCQUNaLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0NBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQzs0QkFDbEIsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDZjtxQkFDRjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDakIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDZDtpQkFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sVUFBVSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxPQUFPLFVBQVUsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxlQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsQixDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDakIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxVQUFVLENBQUM7YUFDbkI7WUFDRCxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsZ0JBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQzdGLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLFVBQVUsQ0FBQzthQUNuQjtZQUNELENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNaLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsT0FBTztnQkFDTCxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMzQyxDQUFDO1FBQ0osQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDO29CQUFFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUMxQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsK0NBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLENBQUMsQ0FBQzthQUNoSTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsMENBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDOUIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDN0QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQyxFQUNILENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFDYixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJO29CQUFFLElBQUk7d0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs0QkFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dDQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2pCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO29DQUNWLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUN6RCxHQUFHLEVBQUUsQ0FBQztvQ0FDTixHQUFHLEVBQUUsQ0FBQztpQ0FDUCxDQUFDLENBQUM7NkJBQ0o7eUJBQ0Y7cUJBQ0Y7b0JBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ1YsQ0FBQyxHQUFHOzRCQUNGLEtBQUssRUFBRSxDQUFDO3lCQUNULENBQUM7cUJBQ0g7NEJBQVM7d0JBQ1IsSUFBSTs0QkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM3QztnQ0FBUzs0QkFDUixJQUFJLENBQUM7Z0NBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO3lCQUN0QjtxQkFDRjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU87Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztRQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNuQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEIsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUc7WUFDZCxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUc7U0FDZixDQUFDO0lBQ0osQ0FBQztJQUNELDZDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBdGlCQSxBQXNpQkMsSUFBQTtBQXRpQlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1DaGFyVHJpZ2dlck1hbmFnZXIge1xuICBncmFwaCA9IG51bGw7XG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBwcmltYXJ5UmVzSWQgPSBudWxsO1xuICBwcmltYXJ5UGFpckRhdGEgPSBudWxsO1xuICBwYWlyZWRDb29yZHMgPSBuZXcgU2V0KCk7XG4gIGxvY2tlZENvb3JkcyA9IG5ldyBTZXQoKTtcbiAgbG9ja2VkUmVzSWRzID0gbmV3IFNldCgpO1xuICBzdGFnZSA9IC0xO1xuICB4eXogPSBudWxsO1xuICBhYmMgPSBudWxsO1xuICB4eXpQYXJ0bmVyID0gbnVsbDtcbiAgYWJjUGFydG5lciA9IG51bGw7XG4gIGdyb3VwcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgdGhpcy5ncmFwaCA9IGU7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnByaW1hcnlSZXNJZCA9IG51bGw7XG4gICAgdGhpcy5wcmltYXJ5UGFpckRhdGEgPSBudWxsO1xuICAgIHRoaXMucGFpcmVkQ29vcmRzLmNsZWFyKCk7XG4gICAgdGhpcy5sb2NrZWRDb29yZHMuY2xlYXIoKTtcbiAgICB0aGlzLmxvY2tlZFJlc0lkcy5jbGVhcigpO1xuICAgIHRoaXMuc3RhZ2UgPSAtMTtcbiAgICB0aGlzLnh5eiA9IHRoaXMuYWJjID0gdGhpcy54eXpQYXJ0bmVyID0gdGhpcy5hYmNQYXJ0bmVyID0gbnVsbDtcbiAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICB9XG4gIGluaXRTaW5nbGVNKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIHMsXG4gICAgICBjLFxuICAgICAgdSA9IG5ldyBNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKHQpLCBmID0gcC5uZXh0KCk7ICFmLmRvbmU7IGYgPSBwLm5leHQoKSkge1xuICAgICAgICB2YXIgZCA9IChUID0gZi52YWx1ZSlbMF0ucmVzSWQ7XG4gICAgICAgIHUuc2V0KGQsICh1LmdldChkKSB8fCAwKSArIDIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKHIgPSBwLnJldHVybikgJiYgci5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBoID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHkgPSBfX3ZhbHVlcyh1KSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHYgPSBfX3JlYWQobS52YWx1ZSwgMik7XG4gICAgICAgIGQgPSB2WzBdO1xuICAgICAgICA0ID09PSB2WzFdICYmIGgucHVzaChkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbSAmJiAhbS5kb25lICYmIChsID0geS5yZXR1cm4pICYmIGwuY2FsbCh5KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChhKSB0aHJvdyBhLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCAhPT0gaC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucHJpbWFyeVJlc0lkID0gaFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoLmxlbmd0aCldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZyA9IF9fdmFsdWVzKHQpLCBfID0gZy5uZXh0KCk7ICFfLmRvbmU7IF8gPSBnLm5leHQoKSkge1xuICAgICAgICAgIHZhciBUO1xuICAgICAgICAgIGlmICgoVCA9IF8udmFsdWUpWzBdLnJlc0lkID09PSB0aGlzLnByaW1hcnlSZXNJZCkge1xuICAgICAgICAgICAgdGhpcy5wcmltYXJ5UGFpckRhdGEgPSBUO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHMgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgXyAmJiAhXy5kb25lICYmIChjID0gZy5yZXR1cm4pICYmIGMuY2FsbChnKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAocykgdGhyb3cgcy5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIEMgPSB0aGlzLmZpbmRQcmVkUGFpcihlKSxcbiAgICAgICAgYiA9IEMuYmVzdFh5eixcbiAgICAgICAgRSA9IEMuYmVzdEFiYztcbiAgICAgIGlmIChiKSB7XG4gICAgICAgIHRoaXMueHl6ID0gYjtcbiAgICAgICAgdGhpcy5hYmMgPSBFO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhZ2UgPSAwO1xuICAgICAgICB0aGlzLmxvY2tlZENvb3JkcyA9IG5ldyBTZXQoW3RoaXMueHl6LCB0aGlzLmFiY10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjaGVja1NpbmdsZU1UcmlnZ2VyKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YWdlIDwgMCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGkgPSBuZXcgU2V0KGUubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gbi5ncmFwaC50aWxlVG9Db29yZChlKTtcbiAgICB9KSk7XG4gICAgaWYgKDAgPT09IHRoaXMuc3RhZ2UgJiYgdGhpcy54eXogJiYgdGhpcy5hYmMpIHtcbiAgICAgIHZhciBhID0gdC5nZXQodGhpcy54eXopO1xuICAgICAgaWYgKCFhIHx8ICFvLmhhcyhhKSkge1xuICAgICAgICB0aGlzLmNhbmNlbFNpbmdsZU0oKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoIWkuaGFzKHRoaXMueHl6KSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgbCA9IFsuLi5pXS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgIT09IG4ueHl6ICYmICFuLmxvY2tlZENvb3Jkcy5oYXMoZSk7XG4gICAgICB9KTtcbiAgICAgIGlmICgwID09PSBsLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNhbmNlbFNpbmdsZU0oKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnh5elBhcnRuZXIgPSBsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGwubGVuZ3RoKV07XG4gICAgICB2YXIgcyA9IG5ldyBTZXQoWy4uLnRoaXMuZ3JhcGguZ2V0RXhwYW5kZWQoXCJwcmVkXCIsIHRoaXMuYWJjKSwgLi4udGhpcy5ncmFwaC5nZXRFeHBhbmRlZChcImxlZnRcIiwgdGhpcy5hYmMpXSksXG4gICAgICAgIGMgPSBsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlICE9PSBuLnh5elBhcnRuZXIgJiYgIXMuaGFzKGUpICYmICFuLmdyYXBoLmdldEV4cGFuZGVkKFwicHJlZFwiLCBlKS5oYXMobi5hYmMpO1xuICAgICAgICB9KTtcbiAgICAgIDAgPT09IGMubGVuZ3RoICYmIChjID0gbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgIT09IG4ueHl6UGFydG5lciAmJiAhbi5ncmFwaC5nZXRFeHBhbmRlZChcInByZWRcIiwgbi5hYmMpLmhhcyhlKTtcbiAgICAgIH0pKTtcbiAgICAgIGlmICgwID09PSBjLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNhbmNlbFNpbmdsZU0oKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLmFiY1BhcnRuZXIgPSBjW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGMubGVuZ3RoKV07XG4gICAgICB0aGlzLmxvY2tlZENvb3JkcyA9IG5ldyBTZXQoW3RoaXMuYWJjLCB0aGlzLmFiY1BhcnRuZXJdKTtcbiAgICAgIHRoaXMuc3RhZ2UgPSAxO1xuICAgICAgdGhpcy5wYWlyZWRDb29yZHMuYWRkKHRoaXMueHl6KTtcbiAgICAgIHRoaXMucGFpcmVkQ29vcmRzLmFkZCh0aGlzLnh5elBhcnRuZXIpO1xuICAgICAgcmV0dXJuIFt0LmdldCh0aGlzLnh5eiksIHQuZ2V0KHRoaXMueHl6UGFydG5lcildO1xuICAgIH1cbiAgICBpZiAoMSA9PT0gdGhpcy5zdGFnZSAmJiB0aGlzLmFiYyAmJiB0aGlzLmFiY1BhcnRuZXIgJiYgaS5oYXModGhpcy5hYmMpICYmIGkuaGFzKHRoaXMuYWJjUGFydG5lcikpIHtcbiAgICAgIHRoaXMuc3RhZ2UgPSAyO1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9ja2VkQ29vcmRzLmNsZWFyKCk7XG4gICAgICB0aGlzLnBhaXJlZENvb3Jkcy5hZGQodGhpcy5hYmMpO1xuICAgICAgdGhpcy5wYWlyZWRDb29yZHMuYWRkKHRoaXMuYWJjUGFydG5lcik7XG4gICAgICByZXR1cm4gW3QuZ2V0KHRoaXMuYWJjKSwgdC5nZXQodGhpcy5hYmNQYXJ0bmVyKV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNhbmNlbFNpbmdsZU0oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnN0YWdlID0gLTE7XG4gICAgdGhpcy5sb2NrZWRDb29yZHMuY2xlYXIoKTtcbiAgfVxuICBpbml0RHVhbE0oZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyxcbiAgICAgIHUsXG4gICAgICBwLFxuICAgICAgZixcbiAgICAgIGQsXG4gICAgICBoLFxuICAgICAgeSA9IHRoaXMsXG4gICAgICBtID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciB2ID0gX192YWx1ZXModCksIGcgPSB2Lm5leHQoKTsgIWcuZG9uZTsgZyA9IHYubmV4dCgpKSB7XG4gICAgICAgIHZhciBfID0gZy52YWx1ZVswXS5yZXNJZDtcbiAgICAgICAgbS5zZXQoXywgKG0uZ2V0KF8pIHx8IDApICsgMik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGcgJiYgIWcuZG9uZSAmJiAoYSA9IHYucmV0dXJuKSAmJiBhLmNhbGwodik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFQgPSBbXSxcbiAgICAgIEMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYiA9IF9fdmFsdWVzKG0pLCBFID0gYi5uZXh0KCk7ICFFLmRvbmU7IEUgPSBiLm5leHQoKSkge1xuICAgICAgICB2YXIgUyA9IF9fcmVhZChFLnZhbHVlLCAyKSxcbiAgICAgICAgICBJID0gKF8gPSBTWzBdLCBTWzFdKTtcbiAgICAgICAgaWYgKDQgPT09IEkpIHtcbiAgICAgICAgICBULnB1c2goXyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgSSA+IDQgJiYgQy5wdXNoKF8pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEUgJiYgIUUuZG9uZSAmJiAocyA9IGIucmV0dXJuKSAmJiBzLmNhbGwoYik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zaHVmZmxlQXJyYXkoVCk7XG4gICAgdGhpcy5zaHVmZmxlQXJyYXkoQyk7XG4gICAgdmFyIHcgPSBbLi4uVCwgLi4uQ10uc2xpY2UoMCwgMik7XG4gICAgaWYgKDAgIT09IHcubGVuZ3RoKSB7XG4gICAgICB2YXIgQiA9IG5ldyBNYXAoZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gW3kuZ3JhcGgudGlsZVRvQ29vcmQoZSksIGVdO1xuICAgICAgICB9KSksXG4gICAgICAgIHggPSBuZXcgU2V0KGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGUuaXNWYWxpZDtcbiAgICAgICAgfSkpLFxuICAgICAgICBNID0gbmV3IFNldCh0aGlzLmdyYXBoLmdldFNlbGVjdGFibGVUaWxlcyh4LCBCKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4geS5ncmFwaC50aWxlVG9Db29yZChlKTtcbiAgICAgICAgfSkpLFxuICAgICAgICBPID0gW107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBEID0gX192YWx1ZXMoZSksIFAgPSBELm5leHQoKTsgIVAuZG9uZTsgUCA9IEQubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEEgPSBQLnZhbHVlLFxuICAgICAgICAgICAgUiA9IHRoaXMuZ3JhcGgudGlsZVRvQ29vcmQoQSksXG4gICAgICAgICAgICBOID0gdGhpcy5ncmFwaC5nZXRFeHBhbmRlZChcInByZWRcIiwgUik7XG4gICAgICAgICAgaWYgKDAgIT09IE4uc2l6ZSkgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAocCA9IHZvaWQgMCwgX192YWx1ZXMoTikpLCBrID0gai5uZXh0KCk7ICFrLmRvbmU7IGsgPSBqLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgTCA9IGsudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChMICE9PSBSKSB7XG4gICAgICAgICAgICAgICAgdmFyIEcgPSBCLmdldChMKTtcbiAgICAgICAgICAgICAgICBHICYmIE8ucHVzaCh7XG4gICAgICAgICAgICAgICAgICBzY29yZTogW00uaGFzKEwpID8gMCA6IDEsIEcubGF5ZXIgLSBBLmxheWVyID49IDIgPyAxIDogMF0sXG4gICAgICAgICAgICAgICAgICB4eXo6IEwsXG4gICAgICAgICAgICAgICAgICBhYmM6IFJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHAgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBrICYmICFrLmRvbmUgJiYgKGYgPSBqLnJldHVybikgJiYgZi5jYWxsKGopO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHApIHRocm93IHAuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGMgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUCAmJiAhUC5kb25lICYmICh1ID0gRC5yZXR1cm4pICYmIHUuY2FsbChEKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoYykgdGhyb3cgYy5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIEYgPSBuZXcgU2V0KCksXG4gICAgICAgIFYgPSBmdW5jdGlvbiBWKGUpIHtcbiAgICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByID0gTy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICFGLmhhcyhlLnh5eikgJiYgIUYuaGFzKGUuYWJjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICgwID09PSByLmxlbmd0aCkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICByLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlLnNjb3JlWzBdICE9PSB0LnNjb3JlWzBdID8gdC5zY29yZVswXSAtIGUuc2NvcmVbMF0gOiB0LnNjb3JlWzFdIC0gZS5zY29yZVsxXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgYSA9IHJbMF0uc2NvcmUsXG4gICAgICAgICAgICBsID0gci5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuc2NvcmVbMF0gPT09IGFbMF0gJiYgZS5zY29yZVsxXSA9PT0gYVsxXTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcyA9IGxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbC5sZW5ndGgpXTtcbiAgICAgICAgICBGLmFkZChzLnh5eik7XG4gICAgICAgICAgRi5hZGQocy5hYmMpO1xuICAgICAgICAgIHZhciBjID0gbnVsbDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgdSA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyh0KSksIHAgPSB1Lm5leHQoKTsgIXAuZG9uZTsgcCA9IHUubmV4dCgpKSB7XG4gICAgICAgICAgICAgIHZhciBmID0gcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGZbMF0ucmVzSWQgPT09IGUpIHtcbiAgICAgICAgICAgICAgICBjID0gZjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG8gPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKGkgPSB1LnJldHVybikgJiYgaS5jYWxsKHUpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFUuZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgcmVzSWQ6IGUsXG4gICAgICAgICAgICBzdGFnZTogMCxcbiAgICAgICAgICAgIHh5ejogcy54eXosXG4gICAgICAgICAgICBhYmM6IHMuYWJjLFxuICAgICAgICAgICAgeHl6UGFydG5lcjogbnVsbCxcbiAgICAgICAgICAgIGFiY1BhcnRuZXI6IG51bGwsXG4gICAgICAgICAgICBwYWlyRGF0YTogY1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIFUubG9ja2VkQ29vcmRzLmFkZChzLnh5eik7XG4gICAgICAgICAgVS5sb2NrZWRDb29yZHMuYWRkKHMuYWJjKTtcbiAgICAgICAgICBVLmxvY2tlZFJlc0lkcy5hZGQoZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFUgPSB0aGlzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgSCA9IF9fdmFsdWVzKHcpLCBXID0gSC5uZXh0KCk7ICFXLmRvbmU7IFcgPSBILm5leHQoKSkgVihXLnZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBXICYmICFXLmRvbmUgJiYgKGggPSBILnJldHVybikgJiYgaC5jYWxsKEgpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChkKSB0aHJvdyBkLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuZ3JvdXBzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuYWN0aXZlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmdyb3Vwcy5sZW5ndGggPiAwICYmICh0aGlzLnByaW1hcnlSZXNJZCA9IHRoaXMuZ3JvdXBzWzBdLnJlc0lkKTtcbiAgICB9XG4gIH1cbiAgY2hlY2tEdWFsTVRyaWdnZXIoZSwgdCwgbykge1xuICAgIHZhciBpLFxuICAgICAgYSxcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgYyA9IHRoaXMsXG4gICAgICB1ID0gbmV3IFNldChlLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gYy5ncmFwaC50aWxlVG9Db29yZChlKTtcbiAgICAgIH0pKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcCA9IF9fdmFsdWVzKHRoaXMuZ3JvdXBzKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIGlmICgoXyA9IGYudmFsdWUpLmFjdGl2ZSAmJiAxID09PSBfLnN0YWdlICYmIF8uYWJjICYmIF8uYWJjUGFydG5lcikge1xuICAgICAgICB2YXIgZCA9IHQuZ2V0KF8uYWJjKSxcbiAgICAgICAgICBoID0gdC5nZXQoXy5hYmNQYXJ0bmVyKTtcbiAgICAgICAgaWYgKGQgJiYgaCAmJiBvLmhhcyhkKSAmJiBvLmhhcyhoKSkge1xuICAgICAgICAgIGlmICh1LmhhcyhfLmFiYykgJiYgdS5oYXMoXy5hYmNQYXJ0bmVyKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckdyb3VwTG9ja3MoXyk7XG4gICAgICAgICAgICBfLnN0YWdlID0gMjtcbiAgICAgICAgICAgIF8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhaXJlZENvb3Jkcy5hZGQoXy5hYmMpO1xuICAgICAgICAgICAgdGhpcy5wYWlyZWRDb29yZHMuYWRkKF8uYWJjUGFydG5lcik7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuZ3JvdXBzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuYWN0aXZlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gW2QsIGhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyR3JvdXBMb2NrcyhfKTtcbiAgICAgICAgICBfLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIF8uc3RhZ2UgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGkgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBmICYmICFmLmRvbmUgJiYgKGEgPSBwLnJldHVybikgJiYgYS5jYWxsKHApO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGkpIHRocm93IGkuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB5ID0gZnVuY3Rpb24geShlKSB7XG4gICAgICAgIGlmICghZS5hY3RpdmUgfHwgMCAhPT0gZS5zdGFnZSB8fCAhZS54eXogfHwgIWUuYWJjKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICB2YXIgbiA9IHQuZ2V0KGUueHl6KTtcbiAgICAgICAgaWYgKCFuIHx8ICFvLmhhcyhuKSkge1xuICAgICAgICAgIG0ubG9ja2VkQ29vcmRzLmRlbGV0ZShlLnh5eik7XG4gICAgICAgICAgbS5sb2NrZWRDb29yZHMuZGVsZXRlKGUuYWJjKTtcbiAgICAgICAgICBlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIGUuc3RhZ2UgPSAtMTtcbiAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdS5oYXMoZS54eXopKSByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICB2YXIgaSA9IFsuLi51XS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdCAhPT0gZS54eXogJiYgIWMubG9ja2VkQ29vcmRzLmhhcyh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgwID09PSBpLmxlbmd0aCkge1xuICAgICAgICAgIGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgZS5zdGFnZSA9IC0xO1xuICAgICAgICAgIG0ubG9ja2VkQ29vcmRzLmRlbGV0ZShlLnh5eik7XG4gICAgICAgICAgbS5sb2NrZWRDb29yZHMuZGVsZXRlKGUuYWJjKTtcbiAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGUueHl6UGFydG5lciA9IGlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS5sZW5ndGgpXTtcbiAgICAgICAgdmFyIGEgPSBuZXcgU2V0KFsuLi5tLmdyYXBoLmdldEV4cGFuZGVkKFwicHJlZFwiLCBlLmFiYyksIC4uLm0uZ3JhcGguZ2V0RXhwYW5kZWQoXCJsZWZ0XCIsIGUuYWJjKV0pLFxuICAgICAgICAgIGwgPSBpLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQgIT09IGUueHl6UGFydG5lciAmJiAhYS5oYXModCkgJiYgIWMuZ3JhcGguZ2V0RXhwYW5kZWQoXCJwcmVkXCIsIHQpLmhhcyhlLmFiYyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIDAgPT09IGwubGVuZ3RoICYmIChsID0gaS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gdCAhPT0gZS54eXpQYXJ0bmVyICYmICFjLmdyYXBoLmdldEV4cGFuZGVkKFwicHJlZFwiLCBlLmFiYykuaGFzKHQpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmICgwID09PSBsLmxlbmd0aCkge1xuICAgICAgICAgIGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgZS5zdGFnZSA9IC0xO1xuICAgICAgICAgIG0ubG9ja2VkQ29vcmRzLmRlbGV0ZShlLnh5eik7XG4gICAgICAgICAgbS5sb2NrZWRDb29yZHMuZGVsZXRlKGUuYWJjKTtcbiAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICB9XG4gICAgICAgIGUuYWJjUGFydG5lciA9IGxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbC5sZW5ndGgpXTtcbiAgICAgICAgbS5sb2NrZWRDb29yZHMuZGVsZXRlKGUueHl6KTtcbiAgICAgICAgbS5sb2NrZWRDb29yZHMuZGVsZXRlKGUueHl6UGFydG5lcik7XG4gICAgICAgIG0ubG9ja2VkQ29vcmRzLmFkZChlLmFiYyk7XG4gICAgICAgIG0ubG9ja2VkQ29vcmRzLmFkZChlLmFiY1BhcnRuZXIpO1xuICAgICAgICBlLnN0YWdlID0gMTtcbiAgICAgICAgbS5wYWlyZWRDb29yZHMuYWRkKGUueHl6KTtcbiAgICAgICAgbS5wYWlyZWRDb29yZHMuYWRkKGUueHl6UGFydG5lcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IFt0LmdldChlLnh5eiksIHQuZ2V0KGUueHl6UGFydG5lcildXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgbSA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHYgPSBfX3ZhbHVlcyh0aGlzLmdyb3VwcyksIGcgPSB2Lm5leHQoKTsgIWcuZG9uZTsgZyA9IHYubmV4dCgpKSB7XG4gICAgICAgIHZhciBfLFxuICAgICAgICAgIFQgPSB5KF8gPSBnLnZhbHVlKTtcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIFQpIHJldHVybiBULnZhbHVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGwgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBnICYmICFnLmRvbmUgJiYgKHMgPSB2LnJldHVybikgJiYgcy5jYWxsKHYpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGwpIHRocm93IGwuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGZpbmRHcm91cEZvckNvb3JkKGUsIHQpIHtcbiAgICB2YXIgbywgaTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgciA9IF9fdmFsdWVzKHRoaXMuZ3JvdXBzKSwgYSA9IHIubmV4dCgpOyAhYS5kb25lOyBhID0gci5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGwgPSBhLnZhbHVlO1xuICAgICAgICBpZiAoW2wueHl6LCBsLmFiYywgbC54eXpQYXJ0bmVyLCBsLmFiY1BhcnRuZXJdLmluY2x1ZGVzKGUpIHx8IFtsLnh5eiwgbC5hYmMsIGwueHl6UGFydG5lciwgbC5hYmNQYXJ0bmVyXS5pbmNsdWRlcyh0KSkgcmV0dXJuIGw7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGEgJiYgIWEuZG9uZSAmJiAoaSA9IHIucmV0dXJuKSAmJiBpLmNhbGwocik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZmluZFByZWRQYWlyKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgcixcbiAgICAgIGEgPSB0aGlzLFxuICAgICAgbCA9IG5ldyBNYXAoZS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFthLmdyYXBoLnRpbGVUb0Nvb3JkKGUpLCBlXTtcbiAgICAgIH0pKSxcbiAgICAgIHMgPSBuZXcgU2V0KGUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlzVmFsaWQ7XG4gICAgICB9KSksXG4gICAgICBjID0gbmV3IFNldCh0aGlzLmdyYXBoLmdldFNlbGVjdGFibGVUaWxlcyhzLCBsKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ3JhcGgudGlsZVRvQ29vcmQoZSk7XG4gICAgICB9KSksXG4gICAgICB1ID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHAgPSBfX3ZhbHVlcyhlKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGQgPSBmLnZhbHVlLFxuICAgICAgICAgIGggPSB0aGlzLmdyYXBoLnRpbGVUb0Nvb3JkKGQpLFxuICAgICAgICAgIHkgPSB0aGlzLmdyYXBoLmdldEV4cGFuZGVkKFwicHJlZFwiLCBoKTtcbiAgICAgICAgaWYgKDAgIT09IHkuc2l6ZSkgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBtID0gKGkgPSB2b2lkIDAsIF9fdmFsdWVzKHkpKSwgdiA9IG0ubmV4dCgpOyAhdi5kb25lOyB2ID0gbS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBnID0gdi52YWx1ZTtcbiAgICAgICAgICAgIGlmIChnICE9PSBoKSB7XG4gICAgICAgICAgICAgIHZhciBfID0gbC5nZXQoZyk7XG4gICAgICAgICAgICAgIF8gJiYgdS5wdXNoKHtcbiAgICAgICAgICAgICAgICBzY29yZTogW2MuaGFzKGcpID8gMCA6IDEsIF8ubGF5ZXIgLSBkLmxheWVyID49IDIgPyAxIDogMF0sXG4gICAgICAgICAgICAgICAgeHl6OiBnLFxuICAgICAgICAgICAgICAgIGFiYzogaFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2ICYmICF2LmRvbmUgJiYgKHIgPSBtLnJldHVybikgJiYgci5jYWxsKG0pO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gcC5yZXR1cm4pICYmIG8uY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoMCA9PT0gdS5sZW5ndGgpIHJldHVybiB7XG4gICAgICBiZXN0WHl6OiBudWxsLFxuICAgICAgYmVzdEFiYzogbnVsbFxuICAgIH07XG4gICAgdS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZS5zY29yZVswXSAhPT0gdC5zY29yZVswXSA/IHQuc2NvcmVbMF0gLSBlLnNjb3JlWzBdIDogdC5zY29yZVsxXSAtIGUuc2NvcmVbMV07XG4gICAgfSk7XG4gICAgdmFyIFQgPSB1WzBdLnNjb3JlLFxuICAgICAgQyA9IHUuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnNjb3JlWzBdID09PSBUWzBdICYmIGUuc2NvcmVbMV0gPT09IFRbMV07XG4gICAgICB9KSxcbiAgICAgIGIgPSBDW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEMubGVuZ3RoKV07XG4gICAgcmV0dXJuIHtcbiAgICAgIGJlc3RYeXo6IGIueHl6LFxuICAgICAgYmVzdEFiYzogYi5hYmNcbiAgICB9O1xuICB9XG4gIGNsZWFyR3JvdXBMb2NrcyhlKSB7XG4gICAgZS5hYmMgJiYgdGhpcy5sb2NrZWRDb29yZHMuZGVsZXRlKGUuYWJjKTtcbiAgICBlLmFiY1BhcnRuZXIgJiYgdGhpcy5sb2NrZWRDb29yZHMuZGVsZXRlKGUuYWJjUGFydG5lcik7XG4gICAgZS54eXogJiYgdGhpcy5sb2NrZWRDb29yZHMuZGVsZXRlKGUueHl6KTtcbiAgICBlLnh5elBhcnRuZXIgJiYgdGhpcy5sb2NrZWRDb29yZHMuZGVsZXRlKGUueHl6UGFydG5lcik7XG4gIH1cbiAgc2h1ZmZsZUFycmF5KGUpIHtcbiAgICBmb3IgKHZhciB0LCBvID0gZS5sZW5ndGggLSAxOyBvID4gMDsgby0tKSB7XG4gICAgICB2YXIgbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChvICsgMSkpO1xuICAgICAgdCA9IF9fcmVhZChbZVtuXSwgZVtvXV0sIDIpLCBlW29dID0gdFswXSwgZVtuXSA9IHRbMV07XG4gICAgfVxuICB9XG59Il19