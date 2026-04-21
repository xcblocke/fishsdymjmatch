"use strict";
cc._RF.push(module, 'e4bb3J5VhtMqqDV9MESGu6F', 'CreateRollCardBySolverTrait');
// subpackages/l_creatRollCardBySolver/Scripts/CreateRollCardBySolverTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DependencyGraph_1 = require("../../../Scripts/DependencyGraph");
var LevelUtil_1 = require("../../../Scripts/core/simulator/config/LevelUtil");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var SolverUtils_1 = require("../../../Scripts/SolverUtils");
var u = [0.75, 0.5, 0.25];
var f = [1, 0.25];
var CreateRollCardBySolverTrait = /** @class */ (function (_super) {
    __extends(CreateRollCardBySolverTrait, _super);
    function CreateRollCardBySolverTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cachedSlover = "";
        return _this;
    }
    CreateRollCardBySolverTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CreateRollCardBySolverTrait.prototype.onIptT2SetLv_reGenFaces = function (r, e) {
        if (this.checkGameMode()) {
            var t = r.args[0];
            if (t.levelData.isNewGame && !t.levelData.isRestart) {
                this._cachedSlover = t.levelData.slover || "";
            }
            else {
                this._cachedSlover = "";
            }
            e();
        }
        else {
            this._cachedSlover = "";
            e();
        }
    };
    CreateRollCardBySolverTrait.prototype.onRollCardType_getPCount = function (r, e) {
        if (this.checkGameMode() && this._cachedSlover) {
            e({
                returnVal: 0
            });
        }
        else {
            e();
        }
    };
    CreateRollCardBySolverTrait.prototype.onRollCardType_modify = function (r, e) {
        if (this.checkGameMode() && this._cachedSlover) {
            try {
                var t = r.args[0];
                this._generateRollCards(t);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true
                });
                return;
            }
            catch (r) {
                console.error("[CreateRollCardBySolverTrait] 暗牌生成失败: " + ((null == r ? void 0 : r.message) || "未知错误"));
            }
            e();
        }
        else
            e();
    };
    CreateRollCardBySolverTrait.prototype._generateRollCards = function (r) {
        var e, t, o, a, i, d, v, y, h, _, S, m, T, b, g, x, w, C, R, E = LevelUtil_1.LevelUtil.parseStepSolver(this._cachedSlover);
        if (0 !== E.length) {
            var M = r.getTileMapObject(), j = [];
            M.tileObjectMap().forEach(function (r) {
                r.isValid && j.push(r);
            });
            var O = new DependencyGraph_1.DependencyGraph();
            O.init(j, M);
            var G = new Map(), P = new Set(j);
            try {
                for (var D = __values(j), k = D.next(); !k.done; k = D.next()) {
                    var B = k.value;
                    G.set(O.tileToCoord(B), B);
                }
            }
            catch (r) {
                e = {
                    error: r
                };
            }
            finally {
                try {
                    k && !k.done && (t = D.return) && t.call(D);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            var L = new Set();
            try {
                for (var U = __values(j), q = U.next(); !q.done; q = U.next()) {
                    B = q.value;
                    var N = O.tileToCoord(B);
                    0 === O.getLazyPredecessors(N).length && L.add(B.id);
                    O.isTileSelectable(B, P, G) && L.add(B.id);
                }
            }
            catch (r) {
                o = {
                    error: r
                };
            }
            finally {
                try {
                    q && !q.done && (a = U.return) && a.call(U);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            var F = SolverUtils_1.SolverUtils.parsePairings(E, M.tileObjectMap()).pairs, I = this._traitData || {}, Q = I.mode || 1, A = null !== (h = I.maxPosDiff) && void 0 !== h ? h : 3, H = false !== I.isDepend, V = [null !== (S = null === (_ = I.probMode1) || void 0 === _ ? void 0 : _[0]) && void 0 !== S ? S : u[0], null !== (T = null === (m = I.probMode1) || void 0 === m ? void 0 : m[1]) && void 0 !== T ? T : u[1], null !== (g = null === (b = I.probMode1) || void 0 === b ? void 0 : b[2]) && void 0 !== g ? g : u[2]], z = [null !== (w = null === (x = I.probMode2) || void 0 === x ? void 0 : x[0]) && void 0 !== w ? w : f[0], null !== (R = null === (C = I.probMode2) || void 0 === C ? void 0 : C[1]) && void 0 !== R ? R : f[1]], K = [];
            try {
                for (var J = __values(F), W = J.next(); !W.done; W = J.next()) {
                    var X = W.value, Y = X.paving, Z = X.elim, $ = Z.pos - Y.pos;
                    if (!($ > A)) {
                        if (H) {
                            var rr = O.getExpanded("pred", Z.coord), er = O.getExpanded("left", Z.coord), tr = O.getExpanded("right", Z.coord);
                            if (!(rr.has(Y.coord) || er.has(Y.coord) || tr.has(Y.coord)))
                                continue;
                        }
                        var or = 1 === Q ? Z.tile : Y.tile;
                        if (!L.has(or.id) && or.type === TileTypeEnum_1.ETileType.Normal) {
                            var ar = this._calcProbability($, Q, V, z);
                            r.randomGenerator.randomIntInclusive(0, 99) < Math.round(100 * ar) && K.push({
                                tile: or,
                                intervalStart: Y.pos,
                                intervalEnd: Z.pos
                            });
                        }
                    }
                }
            }
            catch (r) {
                i = {
                    error: r
                };
            }
            finally {
                try {
                    W && !W.done && (d = J.return) && d.call(J);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            var ir = this._filterNonOverlapping(K, Q);
            try {
                for (var nr = __values(ir), lr = nr.next(); !lr.done; lr = nr.next()) {
                    var cr = lr.value;
                    M.setTileType(cr.tile.id, TileTypeEnum_1.ETileType.RollCard);
                }
            }
            catch (r) {
                v = {
                    error: r
                };
            }
            finally {
                try {
                    lr && !lr.done && (y = nr.return) && y.call(nr);
                }
                finally {
                    if (v)
                        throw v.error;
                }
            }
        }
    };
    CreateRollCardBySolverTrait.prototype._calcProbability = function (r, e, t, o) {
        var a;
        return a = 1 === e ? r <= 1 ? t[0] : 2 === r ? t[1] : t[2] : r <= 1 ? o[0] : o[1], Math.min(1, Math.max(0, a));
    };
    CreateRollCardBySolverTrait.prototype._filterNonOverlapping = function (r, e) {
        var t, o, a, i;
        if (1 === e) {
            r.sort(function (r, e) {
                return r.intervalEnd - e.intervalEnd;
            });
        }
        else {
            r.sort(function (r, e) {
                return r.intervalStart - e.intervalStart;
            });
        }
        var l = [];
        try {
            for (var c = __values(r), s = c.next(); !s.done; s = c.next()) {
                var d = s.value, v = false;
                try {
                    for (var p = (a = void 0, __values(l)), u = p.next(); !u.done; u = p.next()) {
                        var f = u.value, y = d.intervalStart >= f.intervalStart && d.intervalStart <= f.intervalEnd, h = f.intervalStart >= d.intervalStart && f.intervalStart <= d.intervalEnd;
                        if (y || h) {
                            v = true;
                            break;
                        }
                    }
                }
                catch (r) {
                    a = {
                        error: r
                    };
                }
                finally {
                    try {
                        u && !u.done && (i = p.return) && i.call(p);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                v || l.push(d);
            }
        }
        catch (r) {
            t = {
                error: r
            };
        }
        finally {
            try {
                s && !s.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return l;
    };
    CreateRollCardBySolverTrait.traitKey = "CreateRollCardBySolver";
    CreateRollCardBySolverTrait = __decorate([
        mj.trait,
        mj.class("CreateRollCardBySolverTrait")
    ], CreateRollCardBySolverTrait);
    return CreateRollCardBySolverTrait;
}(ExtractTrait_1.default));
exports.default = CreateRollCardBySolverTrait;

cc._RF.pop();