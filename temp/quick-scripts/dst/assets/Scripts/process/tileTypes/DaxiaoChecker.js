
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tileTypes/DaxiaoChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '139edv4/+1APaZrVXIVDe7j', 'DaxiaoChecker');
// Scripts/process/tileTypes/DaxiaoChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameConstant_1 = require("../../core/simulator/constant/GameConstant");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var DaxiaoChecker = /** @class */ (function (_super) {
    __extends(DaxiaoChecker, _super);
    function DaxiaoChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoChecker.prototype.getDaxiaoMaxCount = function () {
        return GameConstant_1.default.MaxTileCountY;
    };
    DaxiaoChecker.prototype.getCanClearDaxiaoCardInfos = function (e) {
        var t, o, n, i, r, s, c, u, f, d, h, y, m, v;
        if (e && 2 == e.length) {
            var g = e[0], _ = e[1], T = this._context.getTileMapObject().getTileObject(g), C = this._context.getTileMapObject().getTileObject(_);
            if (T && C && (T.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) || C.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard))) {
                var b = T.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) ? T : C, E = this._context.getTileMapObject().aliveTiles(), S = new Map();
                try {
                    for (var I = __values(E), w = I.next(); !w.done; w = I.next())
                        if ((j = w.value).id != T.id && j.id != C.id && j.checkIsNormal() && Math.abs(j.gridPosX - b.gridPosX) <= 1 && !this.context.getTileMapObject().isHasCoverWithOutTiles(j, e)) {
                            S.has(j.cardId) || S.set(j.cardId, []);
                            S.get(j.cardId).push(j);
                        }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        w && !w.done && (o = I.return) && o.call(I);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                var B = [], x = new Set();
                try {
                    for (var M = __values(S.entries()), O = M.next(); !O.done; O = M.next())
                        for (var D = __read(O.value, 2), P = (D[0], D[1]); P.length >= 2;) {
                            var A = P.splice(0, 2);
                            B.push(A);
                            try {
                                for (var R = (r = void 0, __values(A)), N = R.next(); !N.done; N = R.next()) {
                                    var j = N.value;
                                    x.add(j.id);
                                }
                            }
                            catch (e) {
                                r = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    N && !N.done && (s = R.return) && s.call(R);
                                }
                                finally {
                                    if (r)
                                        throw r.error;
                                }
                            }
                        }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        O && !O.done && (i = M.return) && i.call(M);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                var k = this.getDaxiaoMaxCount(), L = [];
                if (B.length > k)
                    B = this.context.randomGenerator.randomElements(B, k);
                else {
                    var G = k - B.length;
                    if (G > 0) {
                        try {
                            for (var F = __values(S.entries()), V = F.next(); !V.done; V = F.next()) {
                                var U = __read(V.value, 2);
                                U[0];
                                (P = U[1]).length > 0 && L.push(P[0]);
                            }
                        }
                        catch (e) {
                            c = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                V && !V.done && (u = F.return) && u.call(F);
                            }
                            finally {
                                if (c)
                                    throw c.error;
                            }
                        }
                        L = this.context.randomGenerator.randomElements(L, G);
                        try {
                            for (var H = __values(L), W = H.next(); !W.done; W = H.next()) {
                                j = W.value;
                                x.add(j.id);
                            }
                        }
                        catch (e) {
                            f = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                W && !W.done && (d = H.return) && d.call(H);
                            }
                            finally {
                                if (f)
                                    throw f.error;
                            }
                        }
                    }
                }
                x.add(T.id);
                x.add(C.id);
                for (var z = E.filter(function (e) {
                    return !x.has(e.id) && e.checkIsNormal();
                }), Y = this.context.getTileMapObject(), K = [], J = function J(e) {
                    var t, o, n, i, r, l, s = L[e], c = null, u = z.filter(function (e) {
                        return e.cardId === s.cardId;
                    });
                    try {
                        for (var p = (t = void 0, __values(u)), f = p.next(); !f.done; f = p.next()) {
                            var d = f.value;
                            if (!Y.isCardLock(d)) {
                                c = d;
                                break;
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
                    if (!c)
                        try {
                            for (var h = (n = void 0, __values(u)), y = h.next(); !y.done; y = h.next()) {
                                d = y.value;
                                if (!Y.isHasCover(d)) {
                                    c = d;
                                    break;
                                }
                            }
                        }
                        catch (e) {
                            n = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                y && !y.done && (i = h.return) && i.call(h);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
                        }
                    if (!c)
                        try {
                            for (var m = (r = void 0, __values(u)), v = m.next(); !v.done; v = m.next()) {
                                d = v.value;
                                (!c || d.layer > c.layer) && (c = d);
                            }
                        }
                        catch (e) {
                            r = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                v && !v.done && (l = m.return) && l.call(m);
                            }
                            finally {
                                if (r)
                                    throw r.error;
                            }
                        }
                    if (c) {
                        K.push([s, c]);
                        x.add(c.id);
                        z = z.filter(function (e) {
                            return e.id != c.id;
                        });
                    }
                }, Z = 0; Z < L.length; Z++)
                    J(Z);
                var X = [];
                try {
                    for (var q = __values(K), Q = q.next(); !Q.done; Q = q.next()) {
                        var $ = Q.value;
                        X.push({
                            tileId1: $[0].id,
                            tileId2: $[1].id,
                            y: $[0].gridPosY,
                            isFix: false
                        });
                    }
                }
                catch (e) {
                    h = {
                        error: e
                    };
                }
                finally {
                    try {
                        Q && !Q.done && (y = q.return) && y.call(q);
                    }
                    finally {
                        if (h)
                            throw h.error;
                    }
                }
                try {
                    for (var ee = __values(B), te = ee.next(); !te.done; te = ee.next()) {
                        var oe = te.value;
                        X.push({
                            tileId1: oe[0].id,
                            tileId2: oe[1].id,
                            isFix: true,
                            y: oe[0].gridPosY
                        });
                    }
                }
                catch (e) {
                    m = {
                        error: e
                    };
                }
                finally {
                    try {
                        te && !te.done && (v = ee.return) && v.call(ee);
                    }
                    finally {
                        if (m)
                            throw m.error;
                    }
                }
                X.sort(function (e, t) {
                    return (e.y || 0) - (t.y || 0);
                });
                this.fixFinalMatchInfos(X, S, e);
                return X;
            }
        }
    };
    DaxiaoChecker.prototype.getCanClearDaxiaoCardInfos_tile2 = function (e) {
        var t, o, n, i, r, c, u, f, d, h, y, m, v = this;
        if (e && 2 == e.length) {
            var g = e[0], _ = e[1], T = this._context.getTileMapObject().getTileObject(g), C = this._context.getTileMapObject().getTileObject(_), b = this._context.getTileMapObject();
            if (T && C && (T.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) || C.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard))) {
                var E = T.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) ? T : C, S = this._context.getTileMapObject().aliveTiles(), I = new Map();
                try {
                    for (var w = __values(S), B = w.next(); !B.done; B = w.next())
                        if ((k = B.value).id != T.id && k.id != C.id && k.checkIsNormal())
                            if (k.getIsInSlotBar()) {
                                I.has(k.cardId) || I.set(k.cardId, []);
                                I.get(k.cardId).push(k);
                            }
                            else if (Math.abs(k.gridPosX - E.gridPosX) <= 1 && !this.context.getTileMapObject().isHasCoverWithOutTiles_tile2(k, e)) {
                                I.has(k.cardId) || I.set(k.cardId, []);
                                I.get(k.cardId).push(k);
                            }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        B && !B.done && (o = w.return) && o.call(w);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
                var x = [], M = new Set();
                M.add(T.id);
                M.add(C.id);
                try {
                    for (var O = __values(I.entries()), D = O.next(); !D.done; D = O.next())
                        for (var P = __read(D.value, 2), A = (P[0], P[1]); A.length >= 2;) {
                            var R = A.splice(0, 2);
                            x.push({
                                tileId1: R[0].id,
                                tileId2: R[1].id,
                                isFix: true,
                                y: R[0].gridPosY,
                                isInSlotBar: R[0].getIsInSlotBar() || R[1].getIsInSlotBar()
                            });
                            try {
                                for (var N = (r = void 0, __values(R)), j = N.next(); !j.done; j = N.next()) {
                                    var k = j.value;
                                    M.add(k.id);
                                }
                            }
                            catch (e) {
                                r = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    j && !j.done && (c = N.return) && c.call(N);
                                }
                                finally {
                                    if (r)
                                        throw r.error;
                                }
                            }
                        }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        D && !D.done && (i = O.return) && i.call(O);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
                var L = this.getDaxiaoMaxCount();
                try {
                    for (var G = __values(I.entries()), F = G.next(); !F.done; F = G.next()) {
                        var V = __read(F.value, 2);
                        V[0];
                        (A = V[1]).length > 0 && x.push({
                            tileId1: A[0].id,
                            tileId2: "",
                            isFix: false,
                            y: A[0].gridPosY,
                            isInSlotBar: A[0].getIsInSlotBar()
                        });
                    }
                }
                catch (e) {
                    u = {
                        error: e
                    };
                }
                finally {
                    try {
                        F && !F.done && (f = G.return) && f.call(G);
                    }
                    finally {
                        if (u)
                            throw u.error;
                    }
                }
                var U = [];
                if (x.length > L) {
                    var H = x.filter(function (e) {
                        return !e.isInSlotBar;
                    }), W = x.filter(function (e) {
                        return e.isInSlotBar;
                    }), z = L - W.length;
                    z > 0 && (H = this.context.randomGenerator.randomElements(H, z));
                    U.push.apply(U, __spreadArrays(H));
                    U.push.apply(U, __spreadArrays(W));
                }
                else
                    U.push.apply(U, __spreadArrays(x));
                try {
                    for (var Y = __values(U), K = Y.next(); !K.done; K = Y.next())
                        (q = K.value).isFix || M.add(q.tileId1);
                }
                catch (e) {
                    d = {
                        error: e
                    };
                }
                finally {
                    try {
                        K && !K.done && (h = Y.return) && h.call(Y);
                    }
                    finally {
                        if (d)
                            throw d.error;
                    }
                }
                var J = function J(e) {
                    var t, o, n, i = v._context.getTileMapObject().getTileObject(e), r = [];
                    try {
                        for (var l = __values(S), s = l.next(); !s.done; s = l.next()) {
                            var c = s.value;
                            !M.has(c.id) && c.checkIsNormal() && c.cardId == i.cardId && (b.isCardLock(c) ? b.isHasCover(c) ? c.layer > i.layer ? r.push({
                                tile: c,
                                sortNum: c.layer
                            }) : r.push({
                                tile: c,
                                sortNum: 0
                            }) : r.push({
                                tile: c,
                                sortNum: 998
                            }) : r.push({
                                tile: c,
                                sortNum: 999
                            }));
                        }
                    }
                    catch (e) {
                        t = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            s && !s.done && (o = l.return) && o.call(l);
                        }
                        finally {
                            if (t)
                                throw t.error;
                        }
                    }
                    r.sort(function (e, t) {
                        return t.sortNum - e.sortNum;
                    });
                    r[0] && M.add(r[0].tile.id);
                    return null === (n = r[0]) || void 0 === n ? void 0 : n.tile;
                };
                try {
                    for (var Z = __values(U), X = Z.next(); !X.done; X = Z.next()) {
                        var q;
                        if (!(q = X.value).isFix) {
                            var Q = J(q.tileId1);
                            Q && (q.tileId2 = Q.id);
                        }
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
                (U = U.filter(function (e) {
                    return e.isFix || "" != e.tileId2;
                })).sort(function (e, t) {
                    return (e.y || 0) - (t.y || 0);
                });
                this.fixFinalMatchInfos(U, I, e);
                return U;
            }
        }
    };
    DaxiaoChecker.prototype.fixFinalMatchInfos = function () { };
    __decorate([
        mj.traitEvent("DaxiaoCkr_fixFinal")
    ], DaxiaoChecker.prototype, "fixFinalMatchInfos", null);
    return DaxiaoChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = DaxiaoChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZVR5cGVzL0RheGlhb0NoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCwyRUFBc0U7QUFDdEUsc0VBQWtFO0FBQ2xFO0lBQTJDLGlDQUFjO0lBQXpEOztJQXliQSxDQUFDO0lBeGJDLHlDQUFpQixHQUFqQjtRQUNFLE9BQU8sc0JBQVksQ0FBQyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUNELGtEQUEwQixHQUExQixVQUEyQixDQUFDO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx3QkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO2dCQUM1RixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHdCQUFTLENBQUMsVUFBVSxD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QUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLENBQUM7YUFDVjtTQUNGO0lBQ0gsQ0FBQztJQUVELDBDQUFrQixHQUFsQixjQUFzQixDQUFDO0lBQXZCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzsyREFDYjtJQUN6QixvQkFBQztDQXpiRCxBQXliQyxDQXpiMEMsK0JBQWMsR0F5YnhEO2tCQXpib0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IEdhbWVDb25zdGFudCBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lQ29uc3RhbnQnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXhpYW9DaGVja2VyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBnZXREYXhpYW9NYXhDb3VudCgpIHtcbiAgICByZXR1cm4gR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFk7XG4gIH1cbiAgZ2V0Q2FuQ2xlYXJEYXhpYW9DYXJkSW5mb3MoZSkge1xuICAgIHZhciB0LCBvLCBuLCBpLCByLCBzLCBjLCB1LCBmLCBkLCBoLCB5LCBtLCB2O1xuICAgIGlmIChlICYmIDIgPT0gZS5sZW5ndGgpIHtcbiAgICAgIHZhciBnID0gZVswXSxcbiAgICAgICAgXyA9IGVbMV0sXG4gICAgICAgIFQgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGcpLFxuICAgICAgICBDID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChfKTtcbiAgICAgIGlmIChUICYmIEMgJiYgKFQuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5EYXhpYW9DYXJkKSB8fCBDLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRGF4aWFvQ2FyZCkpKSB7XG4gICAgICAgIHZhciBiID0gVC5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkRheGlhb0NhcmQpID8gVCA6IEMsXG4gICAgICAgICAgRSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmFsaXZlVGlsZXMoKSxcbiAgICAgICAgICBTID0gbmV3IE1hcCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEkgPSBfX3ZhbHVlcyhFKSwgdyA9IEkubmV4dCgpOyAhdy5kb25lOyB3ID0gSS5uZXh0KCkpIGlmICgoaiA9IHcudmFsdWUpLmlkICE9IFQuaWQgJiYgai5pZCAhPSBDLmlkICYmIGouY2hlY2tJc05vcm1hbCgpICYmIE1hdGguYWJzKGouZ3JpZFBvc1ggLSBiLmdyaWRQb3NYKSA8PSAxICYmICF0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmlzSGFzQ292ZXJXaXRoT3V0VGlsZXMoaiwgZSkpIHtcbiAgICAgICAgICAgIFMuaGFzKGouY2FyZElkKSB8fCBTLnNldChqLmNhcmRJZCwgW10pO1xuICAgICAgICAgICAgUy5nZXQoai5jYXJkSWQpLnB1c2goaik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdyAmJiAhdy5kb25lICYmIChvID0gSS5yZXR1cm4pICYmIG8uY2FsbChJKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBCID0gW10sXG4gICAgICAgICAgeCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBNID0gX192YWx1ZXMoUy5lbnRyaWVzKCkpLCBPID0gTS5uZXh0KCk7ICFPLmRvbmU7IE8gPSBNLm5leHQoKSkgZm9yICh2YXIgRCA9IF9fcmVhZChPLnZhbHVlLCAyKSwgUCA9IChEWzBdLCBEWzFdKTsgUC5sZW5ndGggPj0gMjspIHtcbiAgICAgICAgICAgIHZhciBBID0gUC5zcGxpY2UoMCwgMik7XG4gICAgICAgICAgICBCLnB1c2goQSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBSID0gKHIgPSB2b2lkIDAsIF9fdmFsdWVzKEEpKSwgTiA9IFIubmV4dCgpOyAhTi5kb25lOyBOID0gUi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaiA9IE4udmFsdWU7XG4gICAgICAgICAgICAgICAgeC5hZGQoai5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBOICYmICFOLmRvbmUgJiYgKHMgPSBSLnJldHVybikgJiYgcy5jYWxsKFIpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgTyAmJiAhTy5kb25lICYmIChpID0gTS5yZXR1cm4pICYmIGkuY2FsbChNKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBrID0gdGhpcy5nZXREYXhpYW9NYXhDb3VudCgpLFxuICAgICAgICAgIEwgPSBbXTtcbiAgICAgICAgaWYgKEIubGVuZ3RoID4gaykgQiA9IHRoaXMuY29udGV4dC5yYW5kb21HZW5lcmF0b3IucmFuZG9tRWxlbWVudHMoQiwgayk7ZWxzZSB7XG4gICAgICAgICAgdmFyIEcgPSBrIC0gQi5sZW5ndGg7XG4gICAgICAgICAgaWYgKEcgPiAwKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBGID0gX192YWx1ZXMoUy5lbnRyaWVzKCkpLCBWID0gRi5uZXh0KCk7ICFWLmRvbmU7IFYgPSBGLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBVID0gX19yZWFkKFYudmFsdWUsIDIpO1xuICAgICAgICAgICAgICAgIFVbMF07XG4gICAgICAgICAgICAgICAgKFAgPSBVWzFdKS5sZW5ndGggPiAwICYmIEwucHVzaChQWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIFYgJiYgIVYuZG9uZSAmJiAodSA9IEYucmV0dXJuKSAmJiB1LmNhbGwoRik7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGMuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEwgPSB0aGlzLmNvbnRleHQucmFuZG9tR2VuZXJhdG9yLnJhbmRvbUVsZW1lbnRzKEwsIEcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgSCA9IF9fdmFsdWVzKEwpLCBXID0gSC5uZXh0KCk7ICFXLmRvbmU7IFcgPSBILm5leHQoKSkge1xuICAgICAgICAgICAgICAgIGogPSBXLnZhbHVlO1xuICAgICAgICAgICAgICAgIHguYWRkKGouaWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGYgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgVyAmJiAhVy5kb25lICYmIChkID0gSC5yZXR1cm4pICYmIGQuY2FsbChIKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoZikgdGhyb3cgZi5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4LmFkZChULmlkKTtcbiAgICAgICAgeC5hZGQoQy5pZCk7XG4gICAgICAgIGZvciAodmFyIHogPSBFLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICF4LmhhcyhlLmlkKSAmJiBlLmNoZWNrSXNOb3JtYWwoKTtcbiAgICAgICAgICB9KSwgWSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksIEsgPSBbXSwgSiA9IGZ1bmN0aW9uIEooZSkge1xuICAgICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIHIsXG4gICAgICAgICAgICAgIGwsXG4gICAgICAgICAgICAgIHMgPSBMW2VdLFxuICAgICAgICAgICAgICBjID0gbnVsbCxcbiAgICAgICAgICAgICAgdSA9IHouZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuY2FyZElkID09PSBzLmNhcmRJZDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBwID0gKHQgPSB2b2lkIDAsIF9fdmFsdWVzKHUpKSwgZiA9IHAubmV4dCgpOyAhZi5kb25lOyBmID0gcC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGYudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCFZLmlzQ2FyZExvY2soZCkpIHtcbiAgICAgICAgICAgICAgICAgIGMgPSBkO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gcC5yZXR1cm4pICYmIG8uY2FsbChwKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFjKSB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBoID0gKG4gPSB2b2lkIDAsIF9fdmFsdWVzKHUpKSwgeSA9IGgubmV4dCgpOyAheS5kb25lOyB5ID0gaC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBkID0geS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIVkuaXNIYXNDb3ZlcihkKSkge1xuICAgICAgICAgICAgICAgICAgYyA9IGQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB5ICYmICF5LmRvbmUgJiYgKGkgPSBoLnJldHVybikgJiYgaS5jYWxsKGgpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWMpIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG0gPSAociA9IHZvaWQgMCwgX192YWx1ZXModSkpLCB2ID0gbS5uZXh0KCk7ICF2LmRvbmU7IHYgPSBtLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIGQgPSB2LnZhbHVlO1xuICAgICAgICAgICAgICAgICghYyB8fCBkLmxheWVyID4gYy5sYXllcikgJiYgKGMgPSBkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHYgJiYgIXYuZG9uZSAmJiAobCA9IG0ucmV0dXJuKSAmJiBsLmNhbGwobSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICAgIEsucHVzaChbcywgY10pO1xuICAgICAgICAgICAgICB4LmFkZChjLmlkKTtcbiAgICAgICAgICAgICAgeiA9IHouZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuaWQgIT0gYy5pZDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgWiA9IDA7IFogPCBMLmxlbmd0aDsgWisrKSBKKFopO1xuICAgICAgICB2YXIgWCA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIHEgPSBfX3ZhbHVlcyhLKSwgUSA9IHEubmV4dCgpOyAhUS5kb25lOyBRID0gcS5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciAkID0gUS52YWx1ZTtcbiAgICAgICAgICAgIFgucHVzaCh7XG4gICAgICAgICAgICAgIHRpbGVJZDE6ICRbMF0uaWQsXG4gICAgICAgICAgICAgIHRpbGVJZDI6ICRbMV0uaWQsXG4gICAgICAgICAgICAgIHk6ICRbMF0uZ3JpZFBvc1ksXG4gICAgICAgICAgICAgIGlzRml4OiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgUSAmJiAhUS5kb25lICYmICh5ID0gcS5yZXR1cm4pICYmIHkuY2FsbChxKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKGgpIHRocm93IGguZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgZWUgPSBfX3ZhbHVlcyhCKSwgdGUgPSBlZS5uZXh0KCk7ICF0ZS5kb25lOyB0ZSA9IGVlLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIG9lID0gdGUudmFsdWU7XG4gICAgICAgICAgICBYLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlSWQxOiBvZVswXS5pZCxcbiAgICAgICAgICAgICAgdGlsZUlkMjogb2VbMV0uaWQsXG4gICAgICAgICAgICAgIGlzRml4OiB0cnVlLFxuICAgICAgICAgICAgICB5OiBvZVswXS5ncmlkUG9zWVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGUgJiYgIXRlLmRvbmUgJiYgKHYgPSBlZS5yZXR1cm4pICYmIHYuY2FsbChlZSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChtKSB0aHJvdyBtLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBYLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gKGUueSB8fCAwKSAtICh0LnkgfHwgMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpeEZpbmFsTWF0Y2hJbmZvcyhYLCBTLCBlKTtcbiAgICAgICAgcmV0dXJuIFg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldENhbkNsZWFyRGF4aWFvQ2FyZEluZm9zX3RpbGUyKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBjLFxuICAgICAgdSxcbiAgICAgIGYsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHksXG4gICAgICBtLFxuICAgICAgdiA9IHRoaXM7XG4gICAgaWYgKGUgJiYgMiA9PSBlLmxlbmd0aCkge1xuICAgICAgdmFyIGcgPSBlWzBdLFxuICAgICAgICBfID0gZVsxXSxcbiAgICAgICAgVCA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZyksXG4gICAgICAgIEMgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KF8pLFxuICAgICAgICBiID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgICBpZiAoVCAmJiBDICYmIChULmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRGF4aWFvQ2FyZCkgfHwgQy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkRheGlhb0NhcmQpKSkge1xuICAgICAgICB2YXIgRSA9IFQuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5EYXhpYW9DYXJkKSA/IFQgOiBDLFxuICAgICAgICAgIFMgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5hbGl2ZVRpbGVzKCksXG4gICAgICAgICAgSSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciB3ID0gX192YWx1ZXMoUyksIEIgPSB3Lm5leHQoKTsgIUIuZG9uZTsgQiA9IHcubmV4dCgpKSBpZiAoKGsgPSBCLnZhbHVlKS5pZCAhPSBULmlkICYmIGsuaWQgIT0gQy5pZCAmJiBrLmNoZWNrSXNOb3JtYWwoKSkgaWYgKGsuZ2V0SXNJblNsb3RCYXIoKSkge1xuICAgICAgICAgICAgSS5oYXMoay5jYXJkSWQpIHx8IEkuc2V0KGsuY2FyZElkLCBbXSk7XG4gICAgICAgICAgICBJLmdldChrLmNhcmRJZCkucHVzaChrKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGsuZ3JpZFBvc1ggLSBFLmdyaWRQb3NYKSA8PSAxICYmICF0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmlzSGFzQ292ZXJXaXRoT3V0VGlsZXNfdGlsZTIoaywgZSkpIHtcbiAgICAgICAgICAgIEkuaGFzKGsuY2FyZElkKSB8fCBJLnNldChrLmNhcmRJZCwgW10pO1xuICAgICAgICAgICAgSS5nZXQoay5jYXJkSWQpLnB1c2goayk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgQiAmJiAhQi5kb25lICYmIChvID0gdy5yZXR1cm4pICYmIG8uY2FsbCh3KTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gW10sXG4gICAgICAgICAgTSA9IG5ldyBTZXQoKTtcbiAgICAgICAgTS5hZGQoVC5pZCk7XG4gICAgICAgIE0uYWRkKEMuaWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIE8gPSBfX3ZhbHVlcyhJLmVudHJpZXMoKSksIEQgPSBPLm5leHQoKTsgIUQuZG9uZTsgRCA9IE8ubmV4dCgpKSBmb3IgKHZhciBQID0gX19yZWFkKEQudmFsdWUsIDIpLCBBID0gKFBbMF0sIFBbMV0pOyBBLmxlbmd0aCA+PSAyOykge1xuICAgICAgICAgICAgdmFyIFIgPSBBLnNwbGljZSgwLCAyKTtcbiAgICAgICAgICAgIHgucHVzaCh7XG4gICAgICAgICAgICAgIHRpbGVJZDE6IFJbMF0uaWQsXG4gICAgICAgICAgICAgIHRpbGVJZDI6IFJbMV0uaWQsXG4gICAgICAgICAgICAgIGlzRml4OiB0cnVlLFxuICAgICAgICAgICAgICB5OiBSWzBdLmdyaWRQb3NZLFxuICAgICAgICAgICAgICBpc0luU2xvdEJhcjogUlswXS5nZXRJc0luU2xvdEJhcigpIHx8IFJbMV0uZ2V0SXNJblNsb3RCYXIoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBOID0gKHIgPSB2b2lkIDAsIF9fdmFsdWVzKFIpKSwgaiA9IE4ubmV4dCgpOyAhai5kb25lOyBqID0gTi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IGoudmFsdWU7XG4gICAgICAgICAgICAgICAgTS5hZGQoay5pZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBqICYmICFqLmRvbmUgJiYgKGMgPSBOLnJldHVybikgJiYgYy5jYWxsKE4pO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChyKSB0aHJvdyByLmVycm9yO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgRCAmJiAhRC5kb25lICYmIChpID0gTy5yZXR1cm4pICYmIGkuY2FsbChPKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBMID0gdGhpcy5nZXREYXhpYW9NYXhDb3VudCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEcgPSBfX3ZhbHVlcyhJLmVudHJpZXMoKSksIEYgPSBHLm5leHQoKTsgIUYuZG9uZTsgRiA9IEcubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgViA9IF9fcmVhZChGLnZhbHVlLCAyKTtcbiAgICAgICAgICAgIFZbMF07XG4gICAgICAgICAgICAoQSA9IFZbMV0pLmxlbmd0aCA+IDAgJiYgeC5wdXNoKHtcbiAgICAgICAgICAgICAgdGlsZUlkMTogQVswXS5pZCxcbiAgICAgICAgICAgICAgdGlsZUlkMjogXCJcIixcbiAgICAgICAgICAgICAgaXNGaXg6IGZhbHNlLFxuICAgICAgICAgICAgICB5OiBBWzBdLmdyaWRQb3NZLFxuICAgICAgICAgICAgICBpc0luU2xvdEJhcjogQVswXS5nZXRJc0luU2xvdEJhcigpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB1ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBGICYmICFGLmRvbmUgJiYgKGYgPSBHLnJldHVybikgJiYgZi5jYWxsKEcpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAodSkgdGhyb3cgdS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFUgPSBbXTtcbiAgICAgICAgaWYgKHgubGVuZ3RoID4gTCkge1xuICAgICAgICAgIHZhciBIID0geC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICFlLmlzSW5TbG90QmFyO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBXID0geC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuaXNJblNsb3RCYXI7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHogPSBMIC0gVy5sZW5ndGg7XG4gICAgICAgICAgeiA+IDAgJiYgKEggPSB0aGlzLmNvbnRleHQucmFuZG9tR2VuZXJhdG9yLnJhbmRvbUVsZW1lbnRzKEgsIHopKTtcbiAgICAgICAgICBVLnB1c2guYXBwbHkoVSwgWy4uLkhdKTtcbiAgICAgICAgICBVLnB1c2guYXBwbHkoVSwgWy4uLlddKTtcbiAgICAgICAgfSBlbHNlIFUucHVzaC5hcHBseShVLCBbLi4ueF0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIFkgPSBfX3ZhbHVlcyhVKSwgSyA9IFkubmV4dCgpOyAhSy5kb25lOyBLID0gWS5uZXh0KCkpIChxID0gSy52YWx1ZSkuaXNGaXggfHwgTS5hZGQocS50aWxlSWQxKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGQgPSB7XG4gICAgICAgICAgICBlcnJvcjogZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEsgJiYgIUsuZG9uZSAmJiAoaCA9IFkucmV0dXJuKSAmJiBoLmNhbGwoWSk7XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChkKSB0aHJvdyBkLmVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgSiA9IGZ1bmN0aW9uIEooZSkge1xuICAgICAgICAgIHZhciB0LFxuICAgICAgICAgICAgbyxcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICBpID0gdi5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKSxcbiAgICAgICAgICAgIHIgPSBbXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKFMpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgICAgICAgICFNLmhhcyhjLmlkKSAmJiBjLmNoZWNrSXNOb3JtYWwoKSAmJiBjLmNhcmRJZCA9PSBpLmNhcmRJZCAmJiAoYi5pc0NhcmRMb2NrKGMpID8gYi5pc0hhc0NvdmVyKGMpID8gYy5sYXllciA+IGkubGF5ZXIgPyByLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpbGU6IGMsXG4gICAgICAgICAgICAgICAgc29ydE51bTogYy5sYXllclxuICAgICAgICAgICAgICB9KSA6IHIucHVzaCh7XG4gICAgICAgICAgICAgICAgdGlsZTogYyxcbiAgICAgICAgICAgICAgICBzb3J0TnVtOiAwXG4gICAgICAgICAgICAgIH0pIDogci5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aWxlOiBjLFxuICAgICAgICAgICAgICAgIHNvcnROdW06IDk5OFxuICAgICAgICAgICAgICB9KSA6IHIucHVzaCh7XG4gICAgICAgICAgICAgICAgdGlsZTogYyxcbiAgICAgICAgICAgICAgICBzb3J0TnVtOiA5OTlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHIuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuc29ydE51bSAtIGUuc29ydE51bTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByWzBdICYmIE0uYWRkKHJbMF0udGlsZS5pZCk7XG4gICAgICAgICAgcmV0dXJuIG51bGwgPT09IChuID0gclswXSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi50aWxlO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIFogPSBfX3ZhbHVlcyhVKSwgWCA9IFoubmV4dCgpOyAhWC5kb25lOyBYID0gWi5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBxO1xuICAgICAgICAgICAgaWYgKCEocSA9IFgudmFsdWUpLmlzRml4KSB7XG4gICAgICAgICAgICAgIHZhciBRID0gSihxLnRpbGVJZDEpO1xuICAgICAgICAgICAgICBRICYmIChxLnRpbGVJZDIgPSBRLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB5ID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBYICYmICFYLmRvbmUgJiYgKG0gPSBaLnJldHVybikgJiYgbS5jYWxsKFopO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoeSkgdGhyb3cgeS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKFUgPSBVLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlLmlzRml4IHx8IFwiXCIgIT0gZS50aWxlSWQyO1xuICAgICAgICB9KSkuc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiAoZS55IHx8IDApIC0gKHQueSB8fCAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZml4RmluYWxNYXRjaEluZm9zKFUsIEksIGUpO1xuICAgICAgICByZXR1cm4gVTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYXhpYW9Da3JfZml4RmluYWxcIilcbiAgZml4RmluYWxNYXRjaEluZm9zKCkge31cbn0iXX0=