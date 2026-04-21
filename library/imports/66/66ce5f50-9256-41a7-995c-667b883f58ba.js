"use strict";
cc._RF.push(module, '66ce59QklZBp5lcZnuIP1i6', 'TipsPropAutoClearTrait');
// subpackages/l_tipsPropClear/Scripts/TipsPropAutoClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var TipsPropAutoClearTrait = /** @class */ (function (_super) {
    __extends(TipsPropAutoClearTrait, _super);
    function TipsPropAutoClearTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pendingAutoMerge = null;
        return _this;
    }
    TipsPropAutoClearTrait.prototype.onIptHitTips_findHint = function (e, t) {
        var i, r, n, o, a, c, d, p, f, v, h, g, m = Date.now(), _ = Math.max(0, Number(null !== (c = null === (a = this._traitData) || void 0 === a ? void 0 : a.timeoutMs) && void 0 !== c ? c : 50)), y = e.ins, T = null == y ? void 0 : y.gameContext, M = null === (d = e.args) || void 0 === d ? void 0 : d[0];
        if (T && M && 0 !== M.length) {
            var b = null === (p = T.getTileMapObject) || void 0 === p ? void 0 : p.call(T);
            if (b) {
                var A = b.getCanMatchCardPairNum();
                if (A < 2)
                    t();
                else {
                    var j = 0, w = [], I = [];
                    try {
                        for (var O = __values(M), x = O.next(); !x.done; x = O.next()) {
                            var C = x.value;
                            if (C && !(C.length < 2)) {
                                var P = C[0], k = C[1], S = ((null === (f = b.getAdjacentLockCards(P)) || void 0 === f ? void 0 : f.length) || 0) + ((null === (v = b.getAdjacentLockCards(k)) || void 0 === v ? void 0 : v.length) || 0);
                                I.push({
                                    tile1: P,
                                    tile2: k,
                                    score: S
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
                            x && !x.done && (r = O.return) && r.call(O);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
                    if (0 !== I.length) {
                        I.sort(function (e, t) {
                            return t.score - e.score;
                        });
                        var G = Math.max(1, Number(null !== (g = null === (h = this._traitData) || void 0 === h ? void 0 : h.maxSimulate) && void 0 !== g ? g : 20)), E = I.slice(0, G);
                        try {
                            for (var N = __values(E), R = N.next(); !R.done; R = N.next()) {
                                var V = R.value;
                                if (Date.now() - m >= _)
                                    break;
                                var H = TileMapSimulator_1.TileMapSimulator.createSim(T), q = H.tileObjectMap().get(V.tile1.id), D = H.tileObjectMap().get(V.tile2.id);
                                if (q && D && q.isValid && D.isValid) {
                                    q.isValid = false;
                                    D.isValid = false;
                                    H.onClear([q, D]);
                                    H.updateCanMatchTiles();
                                    var B = H.getCanMatchCardPairNum();
                                    if (B > j) {
                                        j = B;
                                        w = [[V.tile1, V.tile2]];
                                    }
                                    else
                                        B === j && B > A && w.push([V.tile1, V.tile2]);
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
                                R && !R.done && (o = N.return) && o.call(N);
                            }
                            finally {
                                if (n)
                                    throw n.error;
                            }
                        }
                        if (0 !== w.length) {
                            var F = w[Math.floor(Math.random() * w.length)];
                            t({
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: F,
                                isBreak: true
                            });
                        }
                        else
                            t();
                    }
                    else
                        t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    TipsPropAutoClearTrait.prototype.onHitTipsBhv_trgHint = function (e, t) {
        var i, r, n, o, l = e.beforReturnVal || {}, a = l.tileNode1, u = l.tileNode2;
        if (a && u) {
            var c = null === (i = null == a ? void 0 : a.tileObject) || void 0 === i ? void 0 : i.id, s = null === (r = null == u ? void 0 : u.tileObject) || void 0 === r ? void 0 : r.id;
            if (c && s) {
                var d = e.ins, p = null == d ? void 0 : d.context;
                if (p) {
                    var f = null === (n = p.getTileMapObject) || void 0 === n ? void 0 : n.call(p), v = null === (o = p.getTileNodeManager) || void 0 === o ? void 0 : o.call(p);
                    if (f && v) {
                        var h = f.unselectAllTileIds();
                        h && h.length > 0 && h.forEach(function (e) {
                            var t = v.getTileNodeByTileId(e);
                            if (t) {
                                t.cancelSelected();
                                t.hidePropHint();
                                t.stopAllAnimation();
                            }
                        });
                    }
                }
                this._pendingAutoMerge = {
                    tileId1: c,
                    tileId2: s,
                    remain: 2
                };
                t();
            }
            else
                t();
        }
        else
            t();
    };
    TipsPropAutoClearTrait.prototype.onHintAnim_onEnd = function (e, t) {
        var i, r, n = null === (i = e.args) || void 0 === i ? void 0 : i[0], o = null === (r = null == n ? void 0 : n.tileObject) || void 0 === r ? void 0 : r.id;
        if (o && this._pendingAutoMerge) {
            if (o === this._pendingAutoMerge.tileId1 || o === this._pendingAutoMerge.tileId2) {
                this._pendingAutoMerge.remain -= 1;
                if (this._pendingAutoMerge.remain <= 0) {
                    var l = this._pendingAutoMerge, a = l.tileId1, u = l.tileId2;
                    this._pendingAutoMerge = null;
                    cc.isValid(n) && GameInteraction_1.GameInteraction.input({
                        inputType: GameInputEnum_1.EGameInputEnum.TipsPropAutoMerge,
                        tileId1: a,
                        tileId2: u
                    });
                }
                t();
            }
            else
                t();
        }
        else
            t();
    };
    TipsPropAutoClearTrait.traitKey = "TipsPropAutoClear";
    TipsPropAutoClearTrait = __decorate([
        mj.trait,
        mj.class("TipsPropAutoClearTrait")
    ], TipsPropAutoClearTrait);
    return TipsPropAutoClearTrait;
}(Trait_1.default));
exports.default = TipsPropAutoClearTrait;

cc._RF.pop();