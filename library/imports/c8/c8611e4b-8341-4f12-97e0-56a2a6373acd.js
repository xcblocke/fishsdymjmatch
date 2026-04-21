"use strict";
cc._RF.push(module, 'c86115Lg0FPEpfgVqKmNzrN', 'ChainAvoidCharSel');
// Scripts/ChainAvoidCharSel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainAvoidCharSel = void 0;
var ChainAvoidCharSel = /** @class */ (function () {
    function ChainAvoidCharSel() {
    }
    ChainAvoidCharSel.prototype.selectCharacterPair = function (e, t, o, a) {
        var l, s, c, u, p, f, d, h, y, m, v, g, _ = a.tileToCoord(e), T = a.tileToCoord(t), C = a.getExpanded("pred", _), b = a.getExpanded("pred", T), E = new Set(), S = new Set();
        try {
            for (var I = __values(C), w = I.next(); !w.done; w = I.next()) {
                var B = w.value;
                void 0 !== (A = a.assignedChars.get(B)) && E.add(A);
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                w && !w.done && (s = I.return) && s.call(I);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        try {
            for (var x = __values(b), M = x.next(); !M.done; M = x.next()) {
                B = M.value;
                void 0 !== (A = a.assignedChars.get(B)) && S.add(A);
            }
        }
        catch (e) {
            c = {
                error: e
            };
        }
        finally {
            try {
                M && !M.done && (u = x.return) && u.call(x);
            }
            finally {
                if (c)
                    throw c.error;
            }
        }
        for (var O = [], D = [], P = 0; P < o.length; P++) {
            var A = o[P][0].resId, R = E.has(A), N = S.has(A);
            if (R && N) {
                O.push(P);
            }
            else {
                R || N || D.push(P);
            }
        }
        var j = __spreadArrays(O, D);
        0 === j.length && (j = o.map(function (e, t) {
            return t;
        }));
        var k = new Set(__spreadArrays(C, b)), L = new Set();
        try {
            for (var G = __values(a.pairingHistory), F = G.next(); !F.done; F = G.next()) {
                var V = __read(F.value, 2), U = V[0], H = V[1];
                if (k.has(U) && !k.has(H)) {
                    L.add(H);
                }
                else {
                    k.has(H) && !k.has(U) && L.add(U);
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
                F && !F.done && (f = G.return) && f.call(G);
            }
            finally {
                if (p)
                    throw p.error;
            }
        }
        var W = new Set();
        try {
            for (var z = __values(L), Y = z.next(); !Y.done; Y = z.next()) {
                var K = Y.value;
                a.getExpanded("pred", K).forEach(function (e) {
                    return W.add(e);
                });
            }
        }
        catch (e) {
            d = {
                error: e
            };
        }
        finally {
            try {
                Y && !Y.done && (h = z.return) && h.call(z);
            }
            finally {
                if (d)
                    throw d.error;
            }
        }
        var J = new Set();
        try {
            for (var Z = __values(W), X = Z.next(); !X.done; X = Z.next()) {
                B = X.value;
                void 0 !== (A = a.assignedChars.get(B)) && J.add(A);
            }
        }
        catch (e) {
            y = {
                error: e
            };
        }
        finally {
            try {
                X && !X.done && (m = Z.return) && m.call(Z);
            }
            finally {
                if (y)
                    throw y.error;
            }
        }
        var q = new Map();
        try {
            for (var Q = __values(o), $ = Q.next(); !$.done; $ = Q.next()) {
                A = $.value[0].resId;
                q.set(A, (q.get(A) || 0) + 1);
            }
        }
        catch (e) {
            v = {
                error: e
            };
        }
        finally {
            try {
                $ && !$.done && (g = Q.return) && g.call(Q);
            }
            finally {
                if (v)
                    throw v.error;
            }
        }
        var ee, te = j.filter(function (e) {
            return !J.has(o[e][0].resId);
        });
        if (te.length > 0) {
            if (0 === J.size) {
                (re = te.map(function (e) {
                    return {
                        index: e,
                        count: q.get(o[e][0].resId) || 0
                    };
                })).sort(function (e, t) {
                    return e.count - t.count;
                });
                var oe = re[0].count, ne = re.filter(function (e) {
                    return e.count === oe;
                }).map(function (e) {
                    return e.index;
                });
                ee = ne[Math.floor(Math.random() * ne.length)];
            }
            else
                ee = te[Math.floor(Math.random() * te.length)];
        }
        else if (J.size > 0) {
            var ie = j.filter(function (e) {
                return J.has(o[e][0].resId);
            });
            if (ie.length > 0) {
                var re;
                (re = ie.map(function (e) {
                    return {
                        index: e,
                        count: q.get(o[e][0].resId) || 0
                    };
                })).sort(function (e, t) {
                    return t.count - e.count;
                });
                var ae = re[0].count, le = re.filter(function (e) {
                    return e.count === ae;
                }).map(function (e) {
                    return e.index;
                });
                ee = le[Math.floor(Math.random() * le.length)];
            }
            else
                ee = j[Math.floor(Math.random() * j.length)];
        }
        else
            ee = j[Math.floor(Math.random() * j.length)];
        return ee;
    };
    return ChainAvoidCharSel;
}());
exports.ChainAvoidCharSel = ChainAvoidCharSel;

cc._RF.pop();