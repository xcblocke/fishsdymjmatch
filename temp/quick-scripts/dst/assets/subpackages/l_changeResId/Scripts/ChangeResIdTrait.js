
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeResId/Scripts/ChangeResIdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZVJlc0lkL1NjcmlwdHMvQ2hhbmdlUmVzSWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELGlGQUE0RTtBQUM1RSx5RUFBb0U7QUFDcEUsaURBQXFFO0FBQ3JFLHNFQUFpRTtBQUNqRSwyRUFBMkU7QUFDM0Usb0VBQStEO0FBQy9ELDZFQUE0RTtBQUc1RTtJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWtjQztRQWpjQyxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsdUJBQWlCLEdBQUcsSUFBSSxDQUFDOztJQWdjM0IsQ0FBQztJQTdiQyw2Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUMvSTthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2xGO1FBQ0Qs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QVksR0FrY3pEO2tCQWxjb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgQ2hhbmdlUmVzRGlmZmVyZW5jZUxvb2tVcCBmcm9tICcuL0NoYW5nZVJlc0RpZmZlcmVuY2VMb29rVXAnO1xuaW1wb3J0IENoYW5nZVJlc1V0aWwsIHsgRUZhY2VWaXNpYmlsaXR5VHlwZSB9IGZyb20gJy4vQ2hhbmdlUmVzVXRpbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlUmVzSWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlUmVzSWRUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9oaXN0b3J5ID0gW107XG4gIF9kaWZmZXJlbmNlTG9va3VwID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VSZXNJZFwiO1xuICBAbWoudHJhaXRFdmVudChcIkNoZ1Jlc0lkX2dldEV4Y2x1ZGVkXCIpXG4gIGdldEV4Y2x1ZGVkQ2FyZElkcygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubG9jYWxEYXRhLmhpc3RvcnkgfHwgKHRoaXMubG9jYWxEYXRhLmhpc3RvcnkgPSBbXSk7XG4gICAgaWYgKHRoaXMuX3RyYWl0RGF0YS5nYW1lVHlwZSkge1xuICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLl90cmFpdERhdGEuZ2FtZVR5cGUpICYmICh0aGlzLl90cmFpdERhdGEuZ2FtZVR5cGUuaW5jbHVkZXMoXCJUaWxlMk5vcm1hbFwiKSB8fCB0aGlzLl90cmFpdERhdGEuZ2FtZVR5cGUucHVzaChcIlRpbGUyTm9ybWFsXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJhaXREYXRhLmdhbWVUeXBlID0gW1wiTm9ybWFsXCIsIFwiVHJhdmVsXCIsIFwiRGFpbHlDaGFsbGVuZ2VcIiwgXCJUaWxlMk5vcm1hbFwiXTtcbiAgICB9XG4gICAgdmFyIGEgPSB0aGlzLl90cmFpdERhdGEuY29uZmlnIHx8IHt9O1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIEM6IGEuQyB8fCAyMCxcbiAgICAgIGFsbG93U2ltaWxhcjogYS5hbGxvd1NpbWlsYXIgfHwgZmFsc2UsXG4gICAgICBpc1JhbmRvbTogYS5pc1JhbmRvbSB8fCBmYWxzZSxcbiAgICAgIHJlc3RhcnRDaGFuZ2U6IG51bGwgIT09ICh0ID0gYS5yZXN0YXJ0Q2hhbmdlKSAmJiB2b2lkIDAgIT09IHQgJiYgdCxcbiAgICAgIGlzU2ltaWxhckxvdzogbnVsbCA9PT0gKHIgPSBhLmlzU2ltaWxhckxvdykgfHwgdm9pZCAwID09PSByIHx8IHIsXG4gICAgICBtYXRlcmlhbEV4cGVyaW1lbnRHYW1lVHlwZXM6IG51bGwgIT09IChpID0gYS5tYXRlcmlhbEV4cGVyaW1lbnRHYW1lVHlwZXMpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiBbXCJOb3JtYWxcIiwgXCJUcmF2ZWxcIiwgXCJEYWlseUNoYWxsZW5nZVwiLCBcIlRpbGUyTm9ybWFsXCJdXG4gICAgfTtcbiAgICB0aGlzLl9kaWZmZXJlbmNlTG9va3VwID0gbmV3IENoYW5nZVJlc0RpZmZlcmVuY2VMb29rVXAoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVGlsZTJFdmVudCgpO1xuICB9XG4gIHJlZ2lzdGVyVGlsZTJFdmVudCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIklwdFQyU2V0THZfcmVHZW5GYWNlc1wiXG4gICAgfV0pO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9lID0ge307XG4gICAgX2VbRUdhbWVFdmVudC5JcHRTZXRMZXZlbF9BZnRlclNldExldmVsXSA9IHRoaXMub25JcHRTZXRMZXZlbEFmdGVyU2V0TGV2ZWwuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX2U7XG4gIH1cbiAgb25JcHRTZXRMZXZlbEFmdGVyU2V0TGV2ZWwoZSkge1xuICAgIHZhciB0LCByO1xuICAgIGlmIChlICYmIENhcmRVdGlsLmdldEN1cnJlbnRDb25maWdOYW1lKCkgIT09IENvbmZpZ1R5cGUuY2FyZF9jb25maWcyLm5hbWUpIHtcbiAgICAgIHZhciBpID0gZS5pbnB1dFNldExldmVsLFxuICAgICAgICBhID0gbnVsbCA9PSBpID8gdm9pZCAwIDogaS50aWxlTWFwT2JqZWN0O1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgdmFyIG4gPSBhLnRpbGVPYmplY3RNYXAoKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICB2YXIgbCA9IHtcbiAgICAgICAgICAgIDM1OiA1NSxcbiAgICAgICAgICAgIDM2OiA1OVxuICAgICAgICAgIH07XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhuLnZhbHVlcygpKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIGQgPSBjLnZhbHVlLFxuICAgICAgICAgICAgICAgIGYgPSBsW2QuY2FyZElkXTtcbiAgICAgICAgICAgICAgdm9pZCAwICE9PSBmICYmIGEuY2hhbmdlVGlsZVJlc0lkKGQuaWQsIGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSBzLnJldHVybikgJiYgci5jYWxsKHMpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTGV2ZWxHZW5SX0NhcmRJZFRvUmVzSWQoZSwgdCkge1xuICAgIHRoaXMuY2hlY2tHYW1lTW9kZSgpLCB0KCk7XG4gIH1cbiAgb25JcHRTZXRMdl9yZUdlbkZhY2VzKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVHZW5GYWNlcyhlKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0VDJTZXRMdl9yZUdlbkZhY2VzKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVHZW5GYWNlcyhlKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGhhbmRsZVJlR2VuRmFjZXMoZSkge1xuICAgIHZhciB0ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5tYXRlcmlhbEV4cGVyaW1lbnRHYW1lVHlwZXMuaW5jbHVkZXModCkpIHtcbiAgICAgIHZhciByID0gZS5pbnMsXG4gICAgICAgIGkgPSBlLmFyZ3NbMF0ubGV2ZWxEYXRhO1xuICAgICAgaWYgKGkuaXNOZXdHYW1lICYmICghaS5pc1Jlc3RhcnQgfHwgdGhpcy5fY29uZmlnLnJlc3RhcnRDaGFuZ2UpKSB7XG4gICAgICAgIHZhciBhID0gaS5sZXZlbElkO1xuICAgICAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzRml4ZWRMZXZlbChhKSAmJiAxID09IGEgfHwgdGhpcy5jaGFuZ2VCb2FyZChyLnRpbGVNYXBPYmplY3QsIHIuZ2FtZUNvbnRleHQsIGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjaGFuZ2VCb2FyZChlLCB0LCByKSB7XG4gICAgdmFyIGksXG4gICAgICBhLFxuICAgICAgbiA9IGUudGlsZU9iamVjdE1hcCgpO1xuICAgIGlmIChuICYmIDAgIT09IG4uc2l6ZSkge1xuICAgICAgdmFyIGwgPSBDaGFuZ2VSZXNVdGlsLmNvbGxlY3RPcmlnaW5hbENhcmRJZHMobiksXG4gICAgICAgIHMgPSBsLnNpemU7XG4gICAgICBpZiAoIShzIDw9IDApKSB7XG4gICAgICAgIHZhciBjID0gQ2hhbmdlUmVzVXRpbC5idWlsZENhbmRpZGF0ZUNhcmRJZFNldCh0LCByLCAwLCB0aGlzLl9kaWZmZXJlbmNlTG9va3VwKTtcbiAgICAgICAgYy5zaXplIDwgcyAmJiBsLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gYy5hZGQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZCA9IHRoaXMuZ2V0RXhjbHVkZWRDYXJkSWRzKCk7XG4gICAgICAgIGlmIChkICYmIGQubGVuZ3RoID4gMCkgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoZCksIHAgPSBmLm5leHQoKTsgIXAuZG9uZTsgcCA9IGYubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgaCA9IHAudmFsdWU7XG4gICAgICAgICAgICBjLmRlbGV0ZShoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwICYmICFwLmRvbmUgJiYgKGEgPSBmLnJldHVybikgJiYgYS5jYWxsKGYpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoaSkgdGhyb3cgaS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHksXG4gICAgICAgICAgdiA9IHRoaXMuY29tcHV0ZUZhbWlsaWFyaXR5KGMpLFxuICAgICAgICAgIGcgPSBDaGFuZ2VSZXNVdGlsLmNsYXNzaWZ5RmFjZXNCeUNhcmRJZChuKSxcbiAgICAgICAgICBtID0gdGhpcy5jb3VudExheWVyQ2FyZHNCeUNhcmRJZChnKTtcbiAgICAgICAgeSA9IHRoaXMuX2NvbmZpZy5pc1JhbmRvbSA/IHRoaXMucGlja1JhbmRvbUZhY2VzKGMsIHMpIDogdGhpcy5waWNrRmFjZXNCeVN0cmF0ZWd5KGMsIHMsIHRoaXMuX2NvbmZpZy5DLCB0aGlzLl9jb25maWcuYWxsb3dTaW1pbGFyLCB2KTtcbiAgICAgICAgdGhpcy5hcHBseUxheWVyZWRGYWNlRGlzdHJpYnV0aW9uQnlDYXJkSWQoZSwgdCwgbiwgeSwgZywgbSk7XG4gICAgICAgIHRoaXMucHJpbnRMZXZlbERpZmZMb2coeSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVjZW50SGlzdG9yeSh5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcHV0ZUZhbWlsaWFyaXR5KGUpIHtcbiAgICB0aGlzLl9oaXN0b3J5ID0gdGhpcy5sb2FkUmVjZW50SGlzdG9yeSgpO1xuICAgIHZhciB0ID0gbmV3IE1hcCgpO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHQuc2V0KGUsIDApO1xuICAgIH0pO1xuICAgIGZvciAodmFyIHIgPSBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgdmFyIHIgPSBNYXRoLnBvdygwLjgsIGUpO1xuICAgICAgICBpLl9oaXN0b3J5W2VdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0LmhhcyhlKSAmJiB0LnNldChlLCB0LmdldChlKSArIHIpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIGkgPSB0aGlzLCBhID0gMDsgYSA8IHRoaXMuX2hpc3RvcnkubGVuZ3RoOyBhKyspIHIoYSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgbG9hZFJlY2VudEhpc3RvcnkoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5oaXN0b3J5O1xuICAgIHJldHVybiBlICYmIEFycmF5LmlzQXJyYXkoZSkgPyBlIDogW107XG4gIH1cbiAgdXBkYXRlUmVjZW50SGlzdG9yeShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9oaXN0b3J5O1xuICAgIHQudW5zaGlmdChlKTtcbiAgICBmb3IgKDsgdC5sZW5ndGggPiA1OykgdC5wb3AoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5oaXN0b3J5ID0gdDtcbiAgfVxuICBjb3VudExheWVyQ2FyZHNCeUNhcmRJZChlKSB7XG4gICAgdmFyIHQgPSBuZXcgTWFwKCk7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgciA9IGUuY2FyZElkO1xuICAgICAgdC5oYXMocikgfHwgdC5zZXQociwgW10pO1xuICAgICAgdC5nZXQocikucHVzaChlLnZpc2liaWxpdHlUeXBlKTtcbiAgICB9KTtcbiAgICB2YXIgciA9IDAsXG4gICAgICBpID0gMCxcbiAgICAgIGEgPSAwO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlLmluY2x1ZGVzKEVGYWNlVmlzaWJpbGl0eVR5cGUuRnVsbHlWaXNpYmxlKSxcbiAgICAgICAgbiA9IGUuaW5jbHVkZXMoRUZhY2VWaXNpYmlsaXR5VHlwZS5TZWxlY3RhYmxlKSxcbiAgICAgICAgbyA9IGUuaW5jbHVkZXMoRUZhY2VWaXNpYmlsaXR5VHlwZS5QYXJ0aWFsbHlWaXNpYmxlKTtcbiAgICAgIGlmICh0IHx8IG4pIHtcbiAgICAgICAgcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE4xOiByLFxuICAgICAgTjI6IGksXG4gICAgICBOMzogYVxuICAgIH07XG4gIH1cbiAgcGlja1JhbmRvbUZhY2VzKGUsIHQpIHtcbiAgICB2YXIgciA9IEFycmF5LmZyb20oZSk7XG4gICAgdGhpcy5zaHVmZmxlKHIpO1xuICAgIHJldHVybiByLnNsaWNlKDAsIHQpO1xuICB9XG4gIHBpY2tGYWNlc0J5U3RyYXRlZ3koZSwgdCwgciwgaSwgYSkge1xuICAgIHZhciBuID0gdGhpcyxcbiAgICAgIGwgPSB0aGlzLnNlbGVjdEZpcnN0Q2FyZEJ5RmFtaWxpYXJpdHkoYSwgZSksXG4gICAgICBzID0gW2xdLFxuICAgICAgYyA9IG5ldyBTZXQoZSk7XG4gICAgYy5kZWxldGUobCk7XG4gICAgZm9yICh2YXIgZCA9IFtdLCBmID0gZmFsc2UsIHUgPSBmdW5jdGlvbiB1KCkge1xuICAgICAgICB2YXIgZSxcbiAgICAgICAgICBhLFxuICAgICAgICAgIGwsXG4gICAgICAgICAgdSxcbiAgICAgICAgICBoLFxuICAgICAgICAgIHksXG4gICAgICAgICAgdixcbiAgICAgICAgICBnLFxuICAgICAgICAgIG0gPSAtMSxcbiAgICAgICAgICBDID0gLUluZmluaXR5O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEkgPSAoZSA9IHZvaWQgMCwgX192YWx1ZXMoYykpLCBiID0gSS5uZXh0KCk7ICFiLmRvbmU7IGIgPSBJLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIF8gPSBiLnZhbHVlLFxuICAgICAgICAgICAgICBUID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIE0gPSAobCA9IHZvaWQgMCwgX192YWx1ZXMocykpLCBFID0gTS5uZXh0KCk7ICFFLmRvbmU7IEUgPSBNLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBGID0gRS52YWx1ZTtcbiAgICAgICAgICAgICAgICBUICs9IHAuX2RpZmZlcmVuY2VMb29rdXAuZ2V0KEYsIF8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGwgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgRSAmJiAhRS5kb25lICYmICh1ID0gTS5yZXR1cm4pICYmIHUuY2FsbChNKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAobCkgdGhyb3cgbC5lcnJvcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFQgPiBDKSB7XG4gICAgICAgICAgICAgIEMgPSBUO1xuICAgICAgICAgICAgICBtID0gXztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBiICYmICFiLmRvbmUgJiYgKGEgPSBJLnJldHVybikgJiYgYS5jYWxsKEkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpICYmIHMubGVuZ3RoIDwgdCAmJiBzLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gbi5fZGlmZmVyZW5jZUxvb2t1cC5nZXQoZSwgbSkgPD0gcjtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBjLmRlbGV0ZShtKTtcbiAgICAgICAgICBkLnB1c2gobSk7XG4gICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAmJiBzLmxlbmd0aCA9PT0gdCAtIDEpIHtcbiAgICAgICAgICBmb3IgKHZhciB3ID0gZmFsc2UsIFMgPSAwOyBTIDwgcy5sZW5ndGggJiYgIXc7IFMrKykgZm9yICh2YXIgUiA9IFMgKyAxOyBSIDwgcy5sZW5ndGggJiYgIXc7IFIrKykgdyA9IHAuX2RpZmZlcmVuY2VMb29rdXAuZ2V0KHNbU10sIHNbUl0pIDw9IHI7XG4gICAgICAgICAgaWYgKCF3KSB7XG4gICAgICAgICAgICB2YXIgTCA9IC0xLFxuICAgICAgICAgICAgICB4ID0gSW5maW5pdHk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqID0gKGggPSB2b2lkIDAsIF9fdmFsdWVzKGMpKSwgTiA9IGoubmV4dCgpOyAhTi5kb25lOyBOID0gai5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBfID0gTi52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgViA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBEID0gKHYgPSB2b2lkIDAsIF9fdmFsdWVzKHMpKSwgTyA9IEQubmV4dCgpOyAhTy5kb25lOyBPID0gRC5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgRiA9IE8udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIFYgPSBNYXRoLm1pbihWLCBwLl9kaWZmZXJlbmNlTG9va3VwLmdldChGLCBfKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgdiA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIE8gJiYgIU8uZG9uZSAmJiAoZyA9IEQucmV0dXJuKSAmJiBnLmNhbGwoRCk7XG4gICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodikgdGhyb3cgdi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFYgPCB4KSB7XG4gICAgICAgICAgICAgICAgICB4ID0gVjtcbiAgICAgICAgICAgICAgICAgIEwgPSBfO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBoID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIE4gJiYgIU4uZG9uZSAmJiAoeSA9IGoucmV0dXJuKSAmJiB5LmNhbGwoaik7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKGgpIHRocm93IGguZXJyb3I7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG0gPSBMO1xuICAgICAgICAgICAgZiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgtMSA9PT0gbSkge1xuICAgICAgICAgIHZhciBQID0gQXJyYXkuZnJvbShjKTtcbiAgICAgICAgICBtID0gUFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBQLmxlbmd0aCldO1xuICAgICAgICB9XG4gICAgICAgIHMucHVzaChtKTtcbiAgICAgICAgYy5kZWxldGUobSk7XG4gICAgICB9LCBwID0gdGhpczsgcy5sZW5ndGggPCB0ICYmIGMuc2l6ZSA+IDA7KSB1KCk7XG4gICAgaWYgKHMubGVuZ3RoIDwgdCAmJiBkLmxlbmd0aCA+IDApIGZvciAodmFyIGggPSB0IC0gcy5sZW5ndGgsIHkgPSAwOyB5IDwgaDsgeSsrKSB7XG4gICAgICB2YXIgdiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGQubGVuZ3RoKSxcbiAgICAgICAgZyA9IGRbdl07XG4gICAgICBzLnB1c2goZyk7XG4gICAgICBkLnNwbGljZSh2LCAxKTtcbiAgICB9XG4gICAgaWYgKGYgJiYgcy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgbSA9IHNbcy5sZW5ndGggLSAxXTtcbiAgICAgIHMucG9wKCk7XG4gICAgICB2YXIgQyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChzLmxlbmd0aCArIDEpKTtcbiAgICAgIHMuc3BsaWNlKEMsIDAsIG0pO1xuICAgIH1cbiAgICByZXR1cm4gcy5sZW5ndGggPiB0ID8gcy5zbGljZSgwLCB0KSA6IHM7XG4gIH1cbiAgc2VsZWN0Rmlyc3RDYXJkQnlGYW1pbGlhcml0eShlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBpLFxuICAgICAgYSA9IHRoaXMuX2NvbmZpZy5pc1NpbWlsYXJMb3csXG4gICAgICBuID0gYSA/IEluZmluaXR5IDogLUluZmluaXR5LFxuICAgICAgbCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBzID0gX192YWx1ZXModCksIGMgPSBzLm5leHQoKTsgIWMuZG9uZTsgYyA9IHMubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gYy52YWx1ZSxcbiAgICAgICAgICBmID0gZS5nZXQoZCkgfHwgMDtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICBpZiAoZiA8IG4pIHtcbiAgICAgICAgICAgIG4gPSBmO1xuICAgICAgICAgICAgbC5sZW5ndGggPSAwO1xuICAgICAgICAgICAgbC5wdXNoKGQpO1xuICAgICAgICAgIH0gZWxzZSBNYXRoLmFicyhmIC0gbikgPCAwLjAwMDEgJiYgbC5wdXNoKGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGYgPiBuKSB7XG4gICAgICAgICAgbiA9IGY7XG4gICAgICAgICAgbC5sZW5ndGggPSAwO1xuICAgICAgICAgIGwucHVzaChkKTtcbiAgICAgICAgfSBlbHNlIE1hdGguYWJzKGYgLSBuKSA8IDAuMDAwMSAmJiBsLnB1c2goZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGMgJiYgIWMuZG9uZSAmJiAoaSA9IHMucmV0dXJuKSAmJiBpLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDAgPT09IGwubGVuZ3RoID8gQXJyYXkuZnJvbSh0KVswXSA6IGxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbC5sZW5ndGgpXTtcbiAgfVxuICBhcHBseUxheWVyZWRGYWNlRGlzdHJpYnV0aW9uQnlDYXJkSWQoZSwgdCwgciwgaSwgYSwgbikge1xuICAgIHZhciBvID0gdGhpcy5jb2xsZWN0UHJpb3JpdGl6ZWRDYXJkSWRzKGEsIG4pLFxuICAgICAgbCA9IHRoaXMuYnVpbGRPbGRUb05ld01hcHBpbmcobywgaSwgbik7XG4gICAgdGhpcy5hcHBseUNhcmRJZE1hcHBpbmdUb1Jlc0lkKGUsIHQsIHIsIGwpO1xuICB9XG4gIGNvbGxlY3RQcmlvcml0aXplZENhcmRJZHMoZSkge1xuICAgIHZhciB0ID0gbmV3IE1hcCgpO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHIgPSBlLmNhcmRJZDtcbiAgICAgIHQuaGFzKHIpIHx8IHQuc2V0KHIsIFtdKTtcbiAgICAgIHQuZ2V0KHIpLnB1c2goZS52aXNpYmlsaXR5VHlwZSk7XG4gICAgfSk7XG4gICAgdmFyIHIgPSBbXSxcbiAgICAgIGkgPSBbXTtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIChlLmluY2x1ZGVzKEVGYWNlVmlzaWJpbGl0eVR5cGUuRnVsbHlWaXNpYmxlKSB8fCBlLmluY2x1ZGVzKEVGYWNlVmlzaWJpbGl0eVR5cGUuU2VsZWN0YWJsZSkpICYmIGkucHVzaCh0KTtcbiAgICB9KTtcbiAgICByLnB1c2guYXBwbHkociwgWy4uLmldKTtcbiAgICB2YXIgYSA9IFtdO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgIWUuaW5jbHVkZXMoRUZhY2VWaXNpYmlsaXR5VHlwZS5QYXJ0aWFsbHlWaXNpYmxlKSB8fCBlLmluY2x1ZGVzKEVGYWNlVmlzaWJpbGl0eVR5cGUuU2VsZWN0YWJsZSkgfHwgZS5pbmNsdWRlcyhFRmFjZVZpc2liaWxpdHlUeXBlLkZ1bGx5VmlzaWJsZSkgfHwgYS5wdXNoKHQpO1xuICAgIH0pO1xuICAgIHIucHVzaC5hcHBseShyLCBbLi4uYV0pO1xuICAgIHZhciBuID0gW107XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmluY2x1ZGVzKEVGYWNlVmlzaWJpbGl0eVR5cGUuRnVsbHlWaXNpYmxlKSB8fCBlLmluY2x1ZGVzKEVGYWNlVmlzaWJpbGl0eVR5cGUuUGFydGlhbGx5VmlzaWJsZSkgfHwgZS5pbmNsdWRlcyhFRmFjZVZpc2liaWxpdHlUeXBlLlNlbGVjdGFibGUpIHx8IG4ucHVzaCh0KTtcbiAgICB9KTtcbiAgICByLnB1c2guYXBwbHkociwgWy4uLm5dKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBhcHBseUNhcmRJZE1hcHBpbmdUb1Jlc0lkKGUsIHQsIHIsIGkpIHtcbiAgICB2YXIgYSA9IHQuZ2V0Q2FyZENvbmZpZ01hcCgpLFxuICAgICAgbiA9IG5ldyBNYXAoKTtcbiAgICBhLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZS5jYXJkSWQsXG4gICAgICAgIHIgPSBlLmlkO1xuICAgICAgbi5oYXModCkgfHwgbi5zZXQodCwgW10pO1xuICAgICAgbi5nZXQodCkucHVzaChyKTtcbiAgICB9KTtcbiAgICByLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHZhciByID0gdC5jYXJkSWQsXG4gICAgICAgIGEgPSBpLmdldChyKTtcbiAgICAgIGlmICh2b2lkIDAgIT09IGEgJiYgYSAhPT0gcikge1xuICAgICAgICB2YXIgbyA9IG4uZ2V0KGEpO1xuICAgICAgICBpZiAobyAmJiBvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbCA9IG9bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogby5sZW5ndGgpXTtcbiAgICAgICAgICBlLmNoYW5nZVRpbGVSZXNJZCh0LmlkLCBsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGJ1aWxkT2xkVG9OZXdNYXBwaW5nKGUsIHQsIHIpIHtcbiAgICB2YXIgaSA9IG5ldyBNYXAoKSxcbiAgICAgIGEgPSAwO1xuICAgIGlmIChyLk4xID4gMCAmJiBhICsgci5OMSA8PSBlLmxlbmd0aCkge1xuICAgICAgdmFyIG4gPSBlLnNsaWNlKGEsIGEgKyByLk4xKSxcbiAgICAgICAgbyA9IHQuc2xpY2UoYSwgYSArIHIuTjEpO1xuICAgICAgdGhpcy5zaHVmZmxlKG4pO1xuICAgICAgdGhpcy5zaHVmZmxlKG8pO1xuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCByLk4xOyBsKyspIGkuc2V0KG5bbF0sIG9bbF0pO1xuICAgICAgYSArPSByLk4xO1xuICAgIH1cbiAgICBpZiAoci5OMiA+IDAgJiYgYSArIHIuTjIgPD0gZS5sZW5ndGgpIHtcbiAgICAgIHZhciBzID0gZS5zbGljZShhLCBhICsgci5OMiksXG4gICAgICAgIGMgPSB0LnNsaWNlKGEsIGEgKyByLk4yKTtcbiAgICAgIHRoaXMuc2h1ZmZsZShzKTtcbiAgICAgIHRoaXMuc2h1ZmZsZShjKTtcbiAgICAgIGZvciAobCA9IDA7IGwgPCByLk4yOyBsKyspIGkuc2V0KHNbbF0sIGNbbF0pO1xuICAgICAgYSArPSByLk4yO1xuICAgIH1cbiAgICBpZiAoci5OMyA+IDAgJiYgYSArIHIuTjMgPD0gZS5sZW5ndGgpIHtcbiAgICAgIHZhciBkID0gZS5zbGljZShhLCBhICsgci5OMyksXG4gICAgICAgIGYgPSB0LnNsaWNlKGEsIGEgKyByLk4zKTtcbiAgICAgIHRoaXMuc2h1ZmZsZShkKTtcbiAgICAgIHRoaXMuc2h1ZmZsZShmKTtcbiAgICAgIGZvciAobCA9IDA7IGwgPCByLk4zOyBsKyspIGkuc2V0KGRbbF0sIGZbbF0pO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfVxuICBwcmludExldmVsRGlmZkxvZyhlKSB7XG4gICAgZm9yICh2YXIgdCA9IEluZmluaXR5LCByID0gMDsgciA8IGUubGVuZ3RoOyByKyspIGZvciAodmFyIGkgPSByICsgMTsgaSA8IGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhID0gdGhpcy5fZGlmZmVyZW5jZUxvb2t1cC5nZXQoZVtyXSwgZVtpXSk7XG4gICAgICB0ID0gTWF0aC5taW4odCwgYSk7XG4gICAgfVxuICAgIEluZmluaXR5ID09PSB0ICYmICh0ID0gMCk7XG4gIH1cbiAgc2h1ZmZsZShlKSB7XG4gICAgZm9yICh2YXIgdCwgciA9IGUubGVuZ3RoIC0gMTsgciA+IDA7IHItLSkge1xuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAociArIDEpKTtcbiAgICAgIHQgPSBfX3JlYWQoW2VbaV0sIGVbcl1dLCAyKSwgZVtyXSA9IHRbMF0sIGVbaV0gPSB0WzFdO1xuICAgIH1cbiAgfVxufSJdfQ==