"use strict";
cc._RF.push(module, '69463pAIUlJeIyzoViCwTtz', 'DaXiaoAvoidDeadTrait');
// subpackages/l_deathAnalyze/Scripts/DaXiaoAvoidDeadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var DaXiaoAvoidDeadTrait = /** @class */ (function (_super) {
    __extends(DaXiaoAvoidDeadTrait, _super);
    function DaXiaoAvoidDeadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaXiaoAvoidDeadTrait.prototype.onDaxiaoCkr_fixFinal = function (t, e) {
        var r, n, i = null === (r = t.ins) || void 0 === r ? void 0 : r.context;
        if (i) {
            var a = mj.getClassByName("DeathAnalyserTrait");
            if (a && a.getInstance() && a.getInstance().eventEnabled) {
                var l = DeathAnalyserMgr_1.default.instance.analyzeCardPair(null === (n = t.ins) || void 0 === n ? void 0 : n.gameContext);
                if (l.levelAllDeathPairs.length <= 0)
                    e();
                else {
                    var u = __read(t.args, 3), c = u[0], s = u[1], d = u[2];
                    this.fixFinalMatchInfos(i, c, s, l, d);
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    DaXiaoAvoidDeadTrait.prototype.fixFinalMatchInfos = function (t, e, r, n) {
        for (var i, a, u, c, f = t.getTileMapObject(), s = [], d = new Set(), y = 0; y < e.length; y++) {
            var h = e[y], p = f.getTileObject(h.tileId1), v = f.getTileObject(h.tileId2);
            if (p && v)
                if (this.isDeathGroup([p, v], n))
                    s.push(y);
                else {
                    d.add(h.tileId1);
                    d.add(h.tileId2);
                }
        }
        if (!(s.length <= 0)) {
            var D = [];
            try {
                for (var g = __values(r.entries()), _ = g.next(); !_.done; _ = g.next()) {
                    var m = __read(_.value, 2), b = (m[0], m[1]);
                    try {
                        for (var x = (u = void 0, __values(b)), T = x.next(); !T.done; T = x.next()) {
                            var A = T.value;
                            if (!d.has(A.id)) {
                                D.push(A);
                                d.add(A.id);
                            }
                        }
                    }
                    catch (t) {
                        u = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            T && !T.done && (c = x.return) && c.call(x);
                        }
                        finally {
                            if (u)
                                throw u.error;
                        }
                    }
                }
            }
            catch (t) {
                i = {
                    error: t
                };
            }
            finally {
                try {
                    _ && !_.done && (a = g.return) && a.call(g);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            var j = f.aliveTiles(), w = this.findMatchTile(f, s, j, d, D, n);
            if (w.length == s.length)
                for (y = 0; y < w.length; y++) {
                    var O = w[y];
                    h = e[s[y]];
                    e[s[y]] = {
                        tileId1: O[0].id,
                        tileId2: O[1].id,
                        isFix: false,
                        y: O[0].gridPosY
                    };
                }
        }
    };
    DaXiaoAvoidDeadTrait.prototype.isDeathGroup = function (t, e) {
        var r, n, i, a, u = __read(t, 2), c = u[0], f = u[1];
        try {
            for (var s = __values(e.levelAllDeathPairs), d = s.next(); !d.done; d = s.next()) {
                var y = d.value;
                try {
                    for (var h = (i = void 0, __values(y)), p = h.next(); !p.done; p = h.next())
                        if (p.value.isEqual({
                            tile1Id: c.id,
                            tile2Id: f.id
                        }))
                            return true;
                }
                catch (t) {
                    i = {
                        error: t
                    };
                }
                finally {
                    try {
                        p && !p.done && (a = h.return) && a.call(h);
                    }
                    finally {
                        if (i)
                            throw i.error;
                    }
                }
            }
        }
        catch (t) {
            r = {
                error: t
            };
        }
        finally {
            try {
                d && !d.done && (n = s.return) && n.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return false;
    };
    DaXiaoAvoidDeadTrait.prototype.findMatchTile = function (t, e, r, n, i, a) {
        for (var o = this, c = r.filter(function (t) {
            return !n.has(t.id) && t.type == TileTypeEnum_1.ETileType.Normal;
        }), f = e.length, s = [], d = function d(e) {
            var r, u, d, y, h, p, v = i[e], D = null, g = c.filter(function (t) {
                return t.cardId === v.cardId && !o.isDeathGroup([v, t], a);
            });
            try {
                for (var _ = (r = void 0, __values(g)), m = _.next(); !m.done; m = _.next()) {
                    var b = m.value;
                    if (!t.isCardLock(b)) {
                        D = b;
                        break;
                    }
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    m && !m.done && (u = _.return) && u.call(_);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            if (!D)
                try {
                    for (var x = (d = void 0, __values(g)), T = x.next(); !T.done; T = x.next()) {
                        b = T.value;
                        if (!t.isHasCover(b)) {
                            D = b;
                            break;
                        }
                    }
                }
                catch (t) {
                    d = {
                        error: t
                    };
                }
                finally {
                    try {
                        T && !T.done && (y = x.return) && y.call(x);
                    }
                    finally {
                        if (d)
                            throw d.error;
                    }
                }
            if (!D)
                try {
                    for (var A = (h = void 0, __values(g)), j = A.next(); !j.done; j = A.next()) {
                        b = j.value;
                        (!D || b.layer > D.layer) && (D = b);
                    }
                }
                catch (t) {
                    h = {
                        error: t
                    };
                }
                finally {
                    try {
                        j && !j.done && (p = A.return) && p.call(A);
                    }
                    finally {
                        if (h)
                            throw h.error;
                    }
                }
            if (D) {
                s.push([v, D]);
                n.add(D.id);
                c = c.filter(function (t) {
                    return t.id != D.id;
                });
            }
            if (s.length >= f)
                return "break";
        }, y = 0; y < i.length && "break" !== d(y); y++)
            ;
        return s;
    };
    DaXiaoAvoidDeadTrait.traitKey = "DaXiaoAvoidDead";
    DaXiaoAvoidDeadTrait = __decorate([
        mj.trait,
        mj.class("DaXiaoAvoidDeadTrait")
    ], DaXiaoAvoidDeadTrait);
    return DaXiaoAvoidDeadTrait;
}(Trait_1.default));
exports.default = DaXiaoAvoidDeadTrait;

cc._RF.pop();