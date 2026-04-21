"use strict";
cc._RF.push(module, 'd493eiObaZMI5UzvtqlF1dY', 'TopMaskEnterStrategy');
// Scripts/strategy/TopMaskEnterStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TopMaskEnterStrategy = void 0;
var TopMaskEnterStrategy = /** @class */ (function () {
    function TopMaskEnterStrategy() {
        this.ANIM_DURATION = 0.5;
        this.ROW_INTERVAL = 0.03;
        this.RANDOM_DELAY_RANGE = 0.03;
        this.DROP_OFFSET_Y = 200;
        this.totalDuration = 0;
    }
    TopMaskEnterStrategy.prototype.getName = function () {
        return "TopMaskEnter";
    };
    TopMaskEnterStrategy.prototype.generateAnimationConfigs = function (e) {
        var t, o, n, a, l, s, c, u, p, f, d, h, y = [], m = e.tileNodeMap, v = new Map(), g = -Infinity, _ = Infinity;
        try {
            for (var T = __values(m), C = T.next(); !C.done; C = T.next()) {
                var b = __read(C.value, 2)[1];
                if (cc.isValid(b.cardNode) && cc.isValid(b.shadowNode)) {
                    var E = b.info.layerIndex || 0, S = (null === (d = b.info.tileObject) || void 0 === d ? void 0 : d.gridPosY) || 0, I = (null === (h = b.info.tileObject) || void 0 === h ? void 0 : h.gridPosX) || 0, w = b.cardNode.position.y;
                    g = Math.max(g, w);
                    _ = Math.min(_, w);
                    v.has(E) || v.set(E, new Map());
                    (j = v.get(E)).has(S) || j.set(S, []);
                    j.get(S).push({
                        cardNode: b.cardNode,
                        shadowNode: b.shadowNode,
                        layer: E,
                        row: S,
                        col: I
                    });
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
                C && !C.done && (o = T.return) && o.call(T);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        if (0 === v.size)
            return y;
        var B = g + this.DROP_OFFSET_Y, x = g - _ + this.DROP_OFFSET_Y;
        try {
            for (var M = __values(m), O = M.next(); !O.done; O = M.next()) {
                b = __read(O.value, 2)[1];
                cc.isValid(b.cardNode) && (b.cardNode.opacity = 0);
                cc.isValid(b.shadowNode) && (b.shadowNode.opacity = 0);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                O && !O.done && (a = M.return) && a.call(M);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var D = 0, P = 0, A = Array.from(v.keys()).sort(function (e, t) {
            return e - t;
        });
        try {
            for (var R = __values(A), N = R.next(); !N.done; N = R.next()) {
                E = N.value;
                var j = v.get(E), k = Array.from(j.keys()).sort(function (e, t) {
                    return t - e;
                });
                try {
                    for (var L = (c = void 0, __values(k)), G = L.next(); !G.done; G = L.next()) {
                        S = G.value;
                        var F = j.get(S);
                        try {
                            for (var V = (p = void 0, __values(F)), U = V.next(); !U.done; U = V.next()) {
                                var H = U.value, W = (2 * Math.random() - 1) * this.RANDOM_DELAY_RANGE, z = Math.max(0, P + W);
                                D = Math.max(D, z);
                                var Y = H.cardNode.position;
                                y.push({
                                    node: H.cardNode,
                                    startOffset: cc.v2(0, x),
                                    endPosition: Y.clone(),
                                    delay: z,
                                    duration: this.ANIM_DURATION,
                                    animationType: "move",
                                    easing: "backOut",
                                    metadata: {
                                        layer: H.layer,
                                        row: H.row,
                                        col: H.col,
                                        isLeft: false
                                    },
                                    extraParams: {
                                        maskTopY: B,
                                        fadeIn: true
                                    }
                                });
                                if (cc.isValid(H.shadowNode)) {
                                    var K = H.shadowNode.position;
                                    y.push({
                                        node: H.shadowNode,
                                        startOffset: cc.v2(0, x),
                                        endPosition: K.clone(),
                                        delay: z,
                                        duration: this.ANIM_DURATION,
                                        animationType: "move",
                                        easing: "backOut",
                                        metadata: {
                                            layer: H.layer,
                                            row: H.row,
                                            col: H.col,
                                            isLeft: false
                                        },
                                        extraParams: {
                                            maskTopY: B,
                                            fadeIn: true
                                        }
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
                                U && !U.done && (f = V.return) && f.call(V);
                            }
                            finally {
                                if (p)
                                    throw p.error;
                            }
                        }
                        P += this.ROW_INTERVAL;
                    }
                }
                catch (e) {
                    c = {
                        error: e
                    };
                }
                finally {
                    try {
                        G && !G.done && (u = L.return) && u.call(L);
                    }
                    finally {
                        if (c)
                            throw c.error;
                    }
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
                N && !N.done && (s = R.return) && s.call(R);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        this.totalDuration = D + this.ANIM_DURATION;
        return y;
    };
    TopMaskEnterStrategy.prototype.getTotalDuration = function () {
        return this.totalDuration;
    };
    __decorate([
        mj.traitEvent("TopMaskStgy_genCfgs")
    ], TopMaskEnterStrategy.prototype, "generateAnimationConfigs", null);
    return TopMaskEnterStrategy;
}());
exports.TopMaskEnterStrategy = TopMaskEnterStrategy;

cc._RF.pop();