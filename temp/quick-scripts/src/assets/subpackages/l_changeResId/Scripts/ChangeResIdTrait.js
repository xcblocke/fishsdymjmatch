"use strict";
cc._RF.push(module, '4125afsNChBYLKtfV3MKuKc', 'ChangeResIdTrait');
// subpackages/l_changeResId/Scripts/ChangeResIdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var ChangeResDifferenceLookUp_1 = require("./ChangeResDifferenceLookUp");
var ChangeResUtil_1 = require("./ChangeResUtil");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var ChangeResIdTrait = /** @class */ (function (_super) {
    __extends(ChangeResIdTrait, _super);
    function ChangeResIdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._history = [];
        _this._differenceLookup = null;
        return _this;
    }
    ChangeResIdTrait.prototype.getExcludedCardIds = function () {
        return [];
    };
    ChangeResIdTrait.prototype.onLoad = function () {
        var t, r, i;
        _super.prototype.onLoad.call(this);
        this.localData.history || (this.localData.history = []);
        if (this._traitData.gameType) {
            Array.isArray(this._traitData.gameType) && (this._traitData.gameType.includes("Tile2Normal") || this._traitData.gameType.push("Tile2Normal"));
        }
        else {
            this._traitData.gameType = ["Normal", "Travel", "DailyChallenge", "Tile2Normal"];
        }
        var a = this._traitData.config || {};
        this._config = {
            C: a.C || 20,
            allowSimilar: a.allowSimilar || false,
            isRandom: a.isRandom || false,
            restartChange: null !== (t = a.restartChange) && void 0 !== t && t,
            isSimilarLow: null === (r = a.isSimilarLow) || void 0 === r || r,
            materialExperimentGameTypes: null !== (i = a.materialExperimentGameTypes) && void 0 !== i ? i : ["Normal", "Travel", "DailyChallenge", "Tile2Normal"]
        };
        this._differenceLookup = new ChangeResDifferenceLookUp_1.default();
        this.registerTile2Event();
    };
    ChangeResIdTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "IptT2SetLv_reGenFaces"
            }]);
    };
    ChangeResIdTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel] = this.onIptSetLevelAfterSetLevel.bind(this);
        return _e;
    };
    ChangeResIdTrait.prototype.onIptSetLevelAfterSetLevel = function (e) {
        var t, r;
        if (e && CardUtil_1.default.getCurrentConfigName() !== ConfigType_1.ConfigType.card_config2.name) {
            var i = e.inputSetLevel, a = null == i ? void 0 : i.tileMapObject;
            if (a) {
                var n = a.tileObjectMap();
                if (n) {
                    var l = {
                        35: 55,
                        36: 59
                    };
                    try {
                        for (var s = __values(n.values()), c = s.next(); !c.done; c = s.next()) {
                            var d = c.value, f = l[d.cardId];
                            void 0 !== f && a.changeTileResId(d.id, f);
                        }
                    }
                    catch (e) {
                        t = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            c && !c.done && (r = s.return) && r.call(s);
                        }
                        finally {
                            if (t)
                                throw t.error;
                        }
                    }
                }
            }
        }
    };
    ChangeResIdTrait.prototype.onLevelGenR_CardIdToResId = function (e, t) {
        this.checkGameMode(), t();
    };
    ChangeResIdTrait.prototype.onIptSetLv_reGenFaces = function (e, t) {
        if (this.checkGameMode()) {
            this.handleReGenFaces(e);
            t();
        }
        else
            t();
    };
    ChangeResIdTrait.prototype.onIptT2SetLv_reGenFaces = function (e, t) {
        if (this.checkGameMode()) {
            this.handleReGenFaces(e);
            t();
        }
        else
            t();
    };
    ChangeResIdTrait.prototype.handleReGenFaces = function (e) {
        var t = UserModel_1.default.getInstance().getCurrentGameType();
        if (this._config.materialExperimentGameTypes.includes(t)) {
            var r = e.ins, i = e.args[0].levelData;
            if (i.isNewGame && (!i.isRestart || this._config.restartChange)) {
                var a = i.levelId;
                ExtractTool_1.default.getInstance().isFixedLevel(a) && 1 == a || this.changeBoard(r.tileMapObject, r.gameContext, a);
            }
        }
    };
    ChangeResIdTrait.prototype.changeBoard = function (e, t, r) {
        var i, a, n = e.tileObjectMap();
        if (n && 0 !== n.size) {
            var l = ChangeResUtil_1.default.collectOriginalCardIds(n), s = l.size;
            if (!(s <= 0)) {
                var c = ChangeResUtil_1.default.buildCandidateCardIdSet(t, r, 0, this._differenceLookup);
                c.size < s && l.forEach(function (e) {
                    return c.add(e);
                });
                var d = this.getExcludedCardIds();
                if (d && d.length > 0)
                    try {
                        for (var f = __values(d), p = f.next(); !p.done; p = f.next()) {
                            var h = p.value;
                            c.delete(h);
                        }
                    }
                    catch (e) {
                        i = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            p && !p.done && (a = f.return) && a.call(f);
                        }
                        finally {
                            if (i)
                                throw i.error;
                        }
                    }
                var y, v = this.computeFamiliarity(c), g = ChangeResUtil_1.default.classifyFacesByCardId(n), m = this.countLayerCardsByCardId(g);
                y = this._config.isRandom ? this.pickRandomFaces(c, s) : this.pickFacesByStrategy(c, s, this._config.C, this._config.allowSimilar, v);
                this.applyLayeredFaceDistributionByCardId(e, t, n, y, g, m);
                this.printLevelDiffLog(y);
                this.updateRecentHistory(y);
            }
        }
    };
    ChangeResIdTrait.prototype.computeFamiliarity = function (e) {
        this._history = this.loadRecentHistory();
        var t = new Map();
        e.forEach(function (e) {
            return t.set(e, 0);
        });
        for (var r = function r(e) {
            var r = Math.pow(0.8, e);
            i._history[e].forEach(function (e) {
                t.has(e) && t.set(e, t.get(e) + r);
            });
        }, i = this, a = 0; a < this._history.length; a++)
            r(a);
        return t;
    };
    ChangeResIdTrait.prototype.loadRecentHistory = function () {
        var e = this.localData.history;
        return e && Array.isArray(e) ? e : [];
    };
    ChangeResIdTrait.prototype.updateRecentHistory = function (e) {
        var t = this._history;
        t.unshift(e);
        for (; t.length > 5;)
            t.pop();
        this.localData.history = t;
    };
    ChangeResIdTrait.prototype.countLayerCardsByCardId = function (e) {
        var t = new Map();
        e.forEach(function (e) {
            var r = e.cardId;
            t.has(r) || t.set(r, []);
            t.get(r).push(e.visibilityType);
        });
        var r = 0, i = 0, a = 0;
        t.forEach(function (e) {
            var t = e.includes(ChangeResUtil_1.EFaceVisibilityType.FullyVisible), n = e.includes(ChangeResUtil_1.EFaceVisibilityType.Selectable), o = e.includes(ChangeResUtil_1.EFaceVisibilityType.PartiallyVisible);
            if (t || n) {
                r++;
            }
            else {
                if (o) {
                    i++;
                }
                else {
                    a++;
                }
            }
        });
        return {
            N1: r,
            N2: i,
            N3: a
        };
    };
    ChangeResIdTrait.prototype.pickRandomFaces = function (e, t) {
        var r = Array.from(e);
        this.shuffle(r);
        return r.slice(0, t);
    };
    ChangeResIdTrait.prototype.pickFacesByStrategy = function (e, t, r, i, a) {
        var n = this, l = this.selectFirstCardByFamiliarity(a, e), s = [l], c = new Set(e);
        c.delete(l);
        for (var d = [], f = false, u = function u() {
            var e, a, l, u, h, y, v, g, m = -1, C = -Infinity;
            try {
                for (var I = (e = void 0, __values(c)), b = I.next(); !b.done; b = I.next()) {
                    var _ = b.value, T = 0;
                    try {
                        for (var M = (l = void 0, __values(s)), E = M.next(); !E.done; E = M.next()) {
                            var F = E.value;
                            T += p._differenceLookup.get(F, _);
                        }
                    }
                    catch (e) {
                        l = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            E && !E.done && (u = M.return) && u.call(M);
                        }
                        finally {
                            if (l)
                                throw l.error;
                        }
                    }
                    if (T > C) {
                        C = T;
                        m = _;
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
                    b && !b.done && (a = I.return) && a.call(I);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            if (!i && s.length < t && s.some(function (e) {
                return n._differenceLookup.get(e, m) <= r;
            })) {
                c.delete(m);
                d.push(m);
                return "continue";
            }
            if (i && s.length === t - 1) {
                for (var w = false, S = 0; S < s.length && !w; S++)
                    for (var R = S + 1; R < s.length && !w; R++)
                        w = p._differenceLookup.get(s[S], s[R]) <= r;
                if (!w) {
                    var L = -1, x = Infinity;
                    try {
                        for (var j = (h = void 0, __values(c)), N = j.next(); !N.done; N = j.next()) {
                            _ = N.value;
                            var V = Infinity;
                            try {
                                for (var D = (v = void 0, __values(s)), O = D.next(); !O.done; O = D.next()) {
                                    F = O.value;
                                    V = Math.min(V, p._differenceLookup.get(F, _));
                                }
                            }
                            catch (e) {
                                v = {
                                    error: e
                                };
                            }
                            finally {
                                try {
                                    O && !O.done && (g = D.return) && g.call(D);
                                }
                                finally {
                                    if (v)
                                        throw v.error;
                                }
                            }
                            if (V < x) {
                                x = V;
                                L = _;
                            }
                        }
                    }
                    catch (e) {
                        h = {
                            error: e
                        };
                    }
                    finally {
                        try {
                            N && !N.done && (y = j.return) && y.call(j);
                        }
                        finally {
                            if (h)
                                throw h.error;
                        }
                    }
                    m = L;
                    f = true;
                }
            }
            if (-1 === m) {
                var P = Array.from(c);
                m = P[Math.floor(Math.random() * P.length)];
            }
            s.push(m);
            c.delete(m);
        }, p = this; s.length < t && c.size > 0;)
            u();
        if (s.length < t && d.length > 0)
            for (var h = t - s.length, y = 0; y < h; y++) {
                var v = Math.floor(Math.random() * d.length), g = d[v];
                s.push(g);
                d.splice(v, 1);
            }
        if (f && s.length > 1) {
            var m = s[s.length - 1];
            s.pop();
            var C = Math.floor(Math.random() * (s.length + 1));
            s.splice(C, 0, m);
        }
        return s.length > t ? s.slice(0, t) : s;
    };
    ChangeResIdTrait.prototype.selectFirstCardByFamiliarity = function (e, t) {
        var r, i, a = this._config.isSimilarLow, n = a ? Infinity : -Infinity, l = [];
        try {
            for (var s = __values(t), c = s.next(); !c.done; c = s.next()) {
                var d = c.value, f = e.get(d) || 0;
                if (a) {
                    if (f < n) {
                        n = f;
                        l.length = 0;
                        l.push(d);
                    }
                    else
                        Math.abs(f - n) < 0.0001 && l.push(d);
                }
                else if (f > n) {
                    n = f;
                    l.length = 0;
                    l.push(d);
                }
                else
                    Math.abs(f - n) < 0.0001 && l.push(d);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (i = s.return) && i.call(s);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return 0 === l.length ? Array.from(t)[0] : l[Math.floor(Math.random() * l.length)];
    };
    ChangeResIdTrait.prototype.applyLayeredFaceDistributionByCardId = function (e, t, r, i, a, n) {
        var o = this.collectPrioritizedCardIds(a, n), l = this.buildOldToNewMapping(o, i, n);
        this.applyCardIdMappingToResId(e, t, r, l);
    };
    ChangeResIdTrait.prototype.collectPrioritizedCardIds = function (e) {
        var t = new Map();
        e.forEach(function (e) {
            var r = e.cardId;
            t.has(r) || t.set(r, []);
            t.get(r).push(e.visibilityType);
        });
        var r = [], i = [];
        t.forEach(function (e, t) {
            (e.includes(ChangeResUtil_1.EFaceVisibilityType.FullyVisible) || e.includes(ChangeResUtil_1.EFaceVisibilityType.Selectable)) && i.push(t);
        });
        r.push.apply(r, __spreadArrays(i));
        var a = [];
        t.forEach(function (e, t) {
            !e.includes(ChangeResUtil_1.EFaceVisibilityType.PartiallyVisible) || e.includes(ChangeResUtil_1.EFaceVisibilityType.Selectable) || e.includes(ChangeResUtil_1.EFaceVisibilityType.FullyVisible) || a.push(t);
        });
        r.push.apply(r, __spreadArrays(a));
        var n = [];
        t.forEach(function (e, t) {
            e.includes(ChangeResUtil_1.EFaceVisibilityType.FullyVisible) || e.includes(ChangeResUtil_1.EFaceVisibilityType.PartiallyVisible) || e.includes(ChangeResUtil_1.EFaceVisibilityType.Selectable) || n.push(t);
        });
        r.push.apply(r, __spreadArrays(n));
        return r;
    };
    ChangeResIdTrait.prototype.applyCardIdMappingToResId = function (e, t, r, i) {
        var a = t.getCardConfigMap(), n = new Map();
        a.forEach(function (e) {
            var t = e.cardId, r = e.id;
            n.has(t) || n.set(t, []);
            n.get(t).push(r);
        });
        r.forEach(function (t) {
            var r = t.cardId, a = i.get(r);
            if (void 0 !== a && a !== r) {
                var o = n.get(a);
                if (o && o.length > 0) {
                    var l = o[Math.floor(Math.random() * o.length)];
                    e.changeTileResId(t.id, l);
                }
            }
        });
    };
    ChangeResIdTrait.prototype.buildOldToNewMapping = function (e, t, r) {
        var i = new Map(), a = 0;
        if (r.N1 > 0 && a + r.N1 <= e.length) {
            var n = e.slice(a, a + r.N1), o = t.slice(a, a + r.N1);
            this.shuffle(n);
            this.shuffle(o);
            for (var l = 0; l < r.N1; l++)
                i.set(n[l], o[l]);
            a += r.N1;
        }
        if (r.N2 > 0 && a + r.N2 <= e.length) {
            var s = e.slice(a, a + r.N2), c = t.slice(a, a + r.N2);
            this.shuffle(s);
            this.shuffle(c);
            for (l = 0; l < r.N2; l++)
                i.set(s[l], c[l]);
            a += r.N2;
        }
        if (r.N3 > 0 && a + r.N3 <= e.length) {
            var d = e.slice(a, a + r.N3), f = t.slice(a, a + r.N3);
            this.shuffle(d);
            this.shuffle(f);
            for (l = 0; l < r.N3; l++)
                i.set(d[l], f[l]);
        }
        return i;
    };
    ChangeResIdTrait.prototype.printLevelDiffLog = function (e) {
        for (var t = Infinity, r = 0; r < e.length; r++)
            for (var i = r + 1; i < e.length; i++) {
                var a = this._differenceLookup.get(e[r], e[i]);
                t = Math.min(t, a);
            }
        Infinity === t && (t = 0);
    };
    ChangeResIdTrait.prototype.shuffle = function (e) {
        for (var t, r = e.length - 1; r > 0; r--) {
            var i = Math.floor(Math.random() * (r + 1));
            t = __read([e[i], e[r]], 2), e[r] = t[0], e[i] = t[1];
        }
    };
    ChangeResIdTrait.traitKey = "ChangeResId";
    __decorate([
        mj.traitEvent("ChgResId_getExcluded")
    ], ChangeResIdTrait.prototype, "getExcludedCardIds", null);
    ChangeResIdTrait = __decorate([
        mj.trait,
        mj.class("ChangeResIdTrait")
    ], ChangeResIdTrait);
    return ChangeResIdTrait;
}(ExtractTrait_1.default));
exports.default = ChangeResIdTrait;

cc._RF.pop();