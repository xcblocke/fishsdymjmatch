
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DotUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '842c3WEyKpACInpZZaefk8Z', 'DotUtil');
// Scripts/gamePlay/dot/DotUtil.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotUtil = exports.ECardReplaceType = void 0;
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../simulator/constant/TileTypeEnum");
var DailyChallengeGameData_1 = require("../../core/simulator/data/DailyChallengeGameData");
var TravelGameModel_1 = require("../travel/model/TravelGameModel");
var I18NStrings_1 = require("../../framework/data/I18NStrings");
var LevelGenRule_1 = require("../../core/simulator/config/LevelGenRule");
var LevelUtil_1 = require("../../core/simulator/config/LevelUtil");
var a;
(function (a) {
    a[a["Operable"] = 0] = "Operable";
    a[a["FullVisible"] = 1] = "FullVisible";
    a[a["PartialVisible"] = 2] = "PartialVisible";
    a[a["Invisible"] = 3] = "Invisible";
})(a || (a = {}));
exports.ECardReplaceType = {
    Wan: "wan",
    Tiao: "tiao",
    Bing: "bing"
};
var DotUtil = /** @class */ (function () {
    function DotUtil() {
    }
    DotUtil.getInterAdPoint = function () {
        return cc.sys.os === cc.sys.OS_ANDROID ? "interAd" : cc.sys.os === cc.sys.OS_IOS ? "INTER" : "interAd";
    };
    DotUtil.getRewardAdPoint = function () {
        return cc.sys.os === cc.sys.OS_ANDROID ? "rewardAd" : cc.sys.os === cc.sys.OS_IOS ? "REWARDED" : "rewardAd";
    };
    DotUtil.getDt = function () {
        return Number(new Date().format("YYYYmmdd"));
    };
    DotUtil.getGameId = function (e) {
        var t = 0;
        if (e == GameTypeEnums_1.MjGameType.Normal) {
            t = 0;
        }
        else {
            if (e == GameTypeEnums_1.MjGameType.Travel) {
                t = 1;
            }
            else {
                if (e == GameTypeEnums_1.MjGameType.DailyChallenge) {
                    t = 2;
                }
                else {
                    if (e == GameTypeEnums_1.MjGameType.Classic) {
                        t = 10;
                    }
                    else {
                        e == GameTypeEnums_1.MjGameType.Tile2Normal && (t = 20);
                    }
                }
            }
        }
        return t;
    };
    DotUtil.getGamePlayMethod = function () {
        return GameTypeEnums_1.MjGameType.Tile2Normal, 0;
    };
    DotUtil.isTile2Game = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    DotUtil.isClassicGame = function (e) {
        return e === GameTypeEnums_1.MjGameType.Classic;
    };
    DotUtil.getActivityId = function (e) {
        return e == GameTypeEnums_1.MjGameType.Normal ? "-1" : e == GameTypeEnums_1.MjGameType.Travel ? TravelGameModel_1.default.getInstance().getCurJourney() : e == GameTypeEnums_1.MjGameType.DailyChallenge ? DailyChallengeGameData_1.default.getInstance().getDailyChallengeTimestamp().split("-").join("") : e == GameTypeEnums_1.MjGameType.Classic ? "-2" : "unknown";
    };
    DotUtil.getGameModeName = function (e) {
        var t = "";
        if (e == GameTypeEnums_1.MjGameType.Normal)
            t = "麻将2合-关卡内-主线玩法";
        else if (e == GameTypeEnums_1.MjGameType.Travel) {
            var o = TravelGameModel_1.default.getInstance().getCurJourney(), n = TravelGameModel_1.default.getInstance().getConfig(o);
            t = "旅行";
            n && (t = I18NStrings_1.default.getCN(n.name));
        }
        else if (e == GameTypeEnums_1.MjGameType.DailyChallenge) {
            t = "每日挑战";
            t += ":" + DailyChallengeGameData_1.default.getInstance().getDailyChallengeTimestamp();
        }
        else
            e == GameTypeEnums_1.MjGameType.Classic && (t = "无尽模式");
        return t;
    };
    DotUtil.getInitialBoardDimension = function (e) {
        var t, o, n, r, a = 0, l = 0, s = e.getTileMapObject().mapLayers();
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                try {
                    for (var f = (n = void 0, __values(p.allCards)), d = f.next(); !d.done; d = f.next()) {
                        var h = d.value;
                        a = Math.max(a, h.gridPosX);
                        l = Math.max(l, h.gridPosY);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        d && !d.done && (r = f.return) && r.call(f);
                    }
                    finally {
                        if (n)
                            throw n.error;
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
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return [a + 2, l + 2, s.length];
    };
    DotUtil.getSelfDistanceArray = function (e, t) {
        var o, n, a, l, c = function c(e) {
            return t ? e.getPosition() : cc.v2(e.gridPosX, e.gridPosY);
        }, u = {}, p = e.getTileMapObject().tileObjectMap();
        try {
            for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
                var h = __read(d.value, 2), y = h[0];
                u[(N = h[1]).cardId] || (u[N.cardId] = []);
                u[N.cardId].push(N);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (n = f.return) && n.call(f);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        var m = {};
        for (var v in u) {
            var g = u[v];
            if (!(g.length < 2)) {
                var _ = Number.MAX_VALUE, T = {};
                try {
                    for (var C = (a = void 0, __values(g)), b = C.next(); !b.done; b = C.next()) {
                        var E = b.value;
                        T[E.layer] || (T[E.layer] = []);
                        T[E.layer].push(E);
                    }
                }
                catch (e) {
                    a = {
                        error: e
                    };
                }
                finally {
                    try {
                        b && !b.done && (l = C.return) && l.call(C);
                    }
                    finally {
                        if (a)
                            throw a.error;
                    }
                }
                var S = false;
                for (var I in T) {
                    var w = T[I];
                    if (w.length >= 2)
                        for (var B = 0; B < w.length; B++)
                            for (var x = B + 1; x < w.length; x++) {
                                var M = w[B], O = w[x], D = c(M), P = c(O), A = Math.sqrt(Math.pow(P.x - D.x, 2) + Math.pow(P.y - D.y, 2));
                                _ = Math.min(_, A);
                                S = true;
                            }
                }
                if (!S)
                    for (B = 0; B < g.length; B++)
                        for (x = B + 1; x < g.length; x++) {
                            M = g[B], O = g[x], D = c(M), P = c(O), A = Math.sqrt(Math.pow(P.x - D.x, 2) + Math.pow(P.y - D.y, 2));
                            _ = Math.min(_, A);
                        }
                _ !== Number.MAX_VALUE && (m[v] = Number(_.toFixed(2)));
            }
        }
        var R = [];
        var _s = {};
        _s[y] = N;
        for (var y in m) {
            var N = m[y];
            R.push(_s);
        }
        return R;
    };
    DotUtil.getSpecialReplaceCardIds = function (e) {
        var t, o, n = e.getTileMapObject().tileObjectMap(), a = {};
        try {
            for (var l = __values(n), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = c[0], p = c[1];
                if (p.originalCardId !== p.cardId) {
                    a[p.type] || (a[p.type] = new Set());
                    a[p.type].add(p.originalCardId);
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
                s && !s.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var f = [];
        for (var u in a)
            f.push(u + ":" + Array.from(a[u]).join(","));
        return f;
    };
    DotUtil.getFlipCardPos = function (e) {
        var t, o, n = [], a = e.getTileMapObject().tileObjectMap();
        try {
            for (var l = __values(a), c = l.next(); !c.done; c = l.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]);
                p.checkHasType(TileTypeEnum_1.ETileType.RollCard) && n.push(cc.v3(p.gridPosX, p.gridPosY, p.layer));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (o = l.return) && o.call(l);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return n.map(function (e) {
            return e.x + "," + e.y + "," + e.z;
        });
    };
    DotUtil.getMahjongMatchCntArray = function (e) {
        var t, o, n = {}, a = e.getTileMapObject().tileObjectMap();
        try {
            for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
                var c = __read(s.value, 2), u = (c[0], c[1]);
                n[u.cardId] || (n[u.cardId] = 0);
                n[u.cardId]++;
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
        return n;
    };
    DotUtil.getExposedPairInfo = function (e) {
        var t, o, n, a, l, c, u, p, f, d, h, y, m, v, g = {}, _ = e.getTileMapObject(), T = _.tileObjectMap();
        try {
            for (var C = __values(T), b = C.next(); !b.done; b = C.next()) {
                var E = __read(b.value, 2), S = (E[0], E[1]);
                g[S.cardId] || (g[S.cardId] = {
                    moveAble: [],
                    nonMoveAble: []
                });
                S.isValid && (0 === S.isCardLock() ? g[S.cardId].moveAble.push(S) : g[S.cardId].nonMoveAble.push(S));
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                b && !b.done && (o = C.return) && o.call(C);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var I = [];
        for (var w in g) {
            var B = g[w].moveAble, x = g[w].nonMoveAble;
            if (1 === B.length)
                try {
                    for (var M = (n = void 0, __values(x)), O = M.next(); !O.done; O = M.next()) {
                        var D = O.value;
                        I.push(D);
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
        }
        var P = [];
        try {
            for (var A = __values(I), R = A.next(); !R.done; R = A.next()) {
                D = R.value;
                _.isHasVisible(D) !== TileTypeEnum_1.ETileVisible.None && P.push(D);
            }
        }
        catch (e) {
            l = {
                error: e
            };
        }
        finally {
            try {
                R && !R.done && (c = A.return) && c.call(A);
            }
            finally {
                if (l)
                    throw l.error;
            }
        }
        var N = [];
        try {
            for (var j = __values(P), k = j.next(); !k.done; k = j.next()) {
                D = k.value;
                _.isHasCover(D) && N.push(D);
            }
        }
        catch (e) {
            u = {
                error: e
            };
        }
        finally {
            try {
                k && !k.done && (p = j.return) && p.call(j);
            }
            finally {
                if (u)
                    throw u.error;
            }
        }
        var L = {};
        try {
            for (var G = __values(I), F = G.next(); !F.done; F = G.next()) {
                D = F.value;
                L[JSON.stringify([D.gridPosX, D.gridPosY, D.layer])] = D.cardId;
            }
        }
        catch (e) {
            f = {
                error: e
            };
        }
        finally {
            try {
                F && !F.done && (d = G.return) && d.call(G);
            }
            finally {
                if (f)
                    throw f.error;
            }
        }
        var V = {};
        try {
            for (var U = __values(P), H = U.next(); !H.done; H = U.next()) {
                D = H.value;
                V[JSON.stringify([D.gridPosX, D.gridPosY, D.layer])] = D.cardId;
            }
        }
        catch (e) {
            h = {
                error: e
            };
        }
        finally {
            try {
                H && !H.done && (y = U.return) && y.call(U);
            }
            finally {
                if (h)
                    throw h.error;
            }
        }
        var W = {};
        try {
            for (var z = __values(N), Y = z.next(); !Y.done; Y = z.next()) {
                D = Y.value;
                W[JSON.stringify([D.gridPosX, D.gridPosY, D.layer])] = D.cardId;
            }
        }
        catch (e) {
            m = {
                error: e
            };
        }
        finally {
            try {
                Y && !Y.done && (v = z.return) && v.call(z);
            }
            finally {
                if (m)
                    throw m.error;
            }
        }
        return {
            exposedPairInfo: L,
            exposedPairCnt: I.length,
            halfExposedPairInfo: V,
            halfExposedPairCnt: P.length,
            blockingTileInfo: W,
            blockingTileCnt: N.length
        };
    };
    DotUtil.getLeftRightCnt = function (e) {
        var t, o, n = 0, a = 0, l = 0, s = e.getTileMapObject().tileObjectMap();
        try {
            for (var c = __values(s), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = (p[0], p[1]);
                if (f.isValid && 0 === f.isCardLock()) {
                    var d = f.isHasLeft(), h = f.isHasRight();
                    if (d && !h) {
                        n++;
                    }
                    else {
                        if (!d && h) {
                            a++;
                        }
                        else {
                            d || h || l++;
                        }
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
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            leftFreeRightCnt: n,
            rightFreeLeftCnt: a,
            bothSidesFreeCnt: l
        };
    };
    DotUtil.getLevelDataAsCardId = function (e, t) {
        if (t === void 0) { t = true; }
        var o = [];
        e.tileObjectMap().forEach(function (e) {
            var n = e.pos, i = t ? e.isValid && !e.getIsInSlotBar() : e.isValid;
            o.push({
                id: e.cardId,
                pos: {
                    x: n.x,
                    y: n.y,
                    z: n.z
                },
                isAlive: i
            });
        });
        o.sort(function (e, t) {
            return e.pos.z !== t.pos.z ? e.pos.z - t.pos.z : e.pos.y !== t.pos.y ? e.pos.y - t.pos.y : e.pos.x - t.pos.x;
        });
        return LevelGenRule_1.default.serializeTilesToInlineString(o);
    };
    DotUtil.getLevelDataAsResId = function (e, t) {
        if (t === void 0) { t = true; }
        var o = [];
        e.tileObjectMap().forEach(function (e) {
            var n = e.pos, i = t ? e.isValid && !e.getIsInSlotBar() : e.isValid;
            o.push({
                id: e.resId,
                pos: {
                    x: n.x,
                    y: n.y,
                    z: n.z
                },
                isAlive: i
            });
        });
        o.sort(function (e, t) {
            return e.pos.z !== t.pos.z ? e.pos.z - t.pos.z : e.pos.y !== t.pos.y ? e.pos.y - t.pos.y : e.pos.x - t.pos.x;
        });
        return LevelGenRule_1.default.serializeTilesToInlineString(o);
    };
    DotUtil.getSpecialTiles = function (e, t) {
        if (t === void 0) { t = true; }
        var o, n;
        var r = [], a = e.aliveTiles();
        try {
            for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (c.isValid && !(t && c.getIsInSlotBar() || c.checkIsNormal())) {
                    var u = this.getVitaPos(c);
                    r.push(u + ":" + this.getTileType(c));
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
                s && !s.done && (n = l.return) && n.call(l);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return r.join(",");
    };
    DotUtil.getTileType = function (e) {
        var t, o, n = Object.values(TileTypeEnum_1.ETileType), r = [];
        try {
            for (var a = __values(n), l = a.next(); !l.done; l = a.next()) {
                var c = l.value;
                c !== TileTypeEnum_1.ETileType.Normal && e.checkHasType(c) && r.push(c);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return r.join("|");
    };
    DotUtil.getBlockStatusPositionList = function (e, t) {
        if (t === void 0) { t = true; }
        var o, n;
        var l = e.tileObjectMap(), s = [];
        try {
            for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
                var p = __read(u.value, 2), f = (p[0], p[1]);
                f.isValid && (t && f.getIsInSlotBar() || 0 === f.isCardLock() && s.push({
                    suit: f.cardId,
                    status: a.Operable,
                    position: this.getVitaPos(f)
                }));
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (n = c.return) && n.call(c);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        return s;
    };
    DotUtil.getVitaPos = function (e) {
        return e ? [e.gridPosX, e.gridPosY, e.layer].map(function (e) {
            return LevelUtil_1.LevelUtil.translatePosToChar(e);
        }).join("") : "";
    };
    DotUtil.getPreOpPairs = function (e, t) {
        var o, n, r, a, l = e.aliveTiles().filter(function (e) {
            return !e.getIsInSlotBar();
        }), s = {}, c = 0, u = 0, p = 0;
        try {
            for (var f = __values(l), d = f.next(); !d.done; d = f.next()) {
                var h = d.value;
                if (0 === h.isCardLock()) {
                    s[h.cardId] || (s[h.cardId] = 0);
                    s[h.cardId]++;
                    c++;
                    h.cardId === t.cardId && p++;
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
                d && !d.done && (n = f.return) && n.call(f);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
        try {
            for (var y = __values(Object.keys(s)), m = y.next(); !m.done; m = y.next()) {
                var v = s[m.value];
                v >= 2 && (u += Math.floor(v / 2));
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (a = y.return) && a.call(y);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        return {
            preOpPairs: p,
            preOpBlocks: c,
            preOpCrush: u
        };
    };
    DotUtil.getOperateCardIdList = function (e) {
        var t, o, n = e.aliveTiles().filter(function (e) {
            return !e.getIsInSlotBar();
        }), r = new Set();
        try {
            for (var a = __values(n), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                0 === s.isCardLock() && r.add(s.cardId);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (o = a.return) && o.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return Array.from(r);
    };
    DotUtil.getReleaseCardId = function (e, t) {
        var o = e.aliveTiles().filter(function (e) {
            return !e.getIsInSlotBar();
        }).filter(function (e) {
            return 0 !== e.isCardLock();
        });
        t.isValid = false;
        var n = o.filter(function (e) {
            return 0 === e.isCardLock();
        });
        t.isValid = true;
        return Array.from(new Set(n.map(function (e) {
            return e.cardId;
        })));
    };
    DotUtil.getGameUseNum = function (e, t) {
        switch (t) {
            case GameTypeEnums_1.EItemId.Shuffle:
                return e.getUsedShuffle();
            case GameTypeEnums_1.EItemId.Hint:
                return e.getUsedHitTips();
            case GameTypeEnums_1.EItemId.Revert:
                return e.getUsedRevert();
            case GameTypeEnums_1.EItemId.Revive:
                return e.getUsedRevive();
            case GameTypeEnums_1.EItemId.Magnet:
                return e.getUsedMagnet();
        }
        return 0;
    };
    DotUtil.getGameGotNum = function (e, t) {
        switch (t) {
            case GameTypeEnums_1.EItemId.Shuffle:
                return e.getGotShuffle();
            case GameTypeEnums_1.EItemId.Hint:
                return e.getGotHitTips();
            case GameTypeEnums_1.EItemId.Revert:
                return e.getGotRevert();
            case GameTypeEnums_1.EItemId.Revive:
                return e.getGotRevive();
            case GameTypeEnums_1.EItemId.Magnet:
                return e.getGotMagnet();
        }
        return 0;
    };
    DotUtil.getFlowerTheme = function () {
        return {
            active: 0,
            id: "0"
        };
    };
    DotUtil.getBaseTheme = function () {
        return {
            active: 0,
            map: [],
            id: "0"
        };
    };
    __decorate([
        mj.traitEvent("DotUtil_getFlowerTheme")
    ], DotUtil, "getFlowerTheme", null);
    __decorate([
        mj.traitEvent("DotUtil_getBaseTheme")
    ], DotUtil, "getBaseTheme", null);
    return DotUtil;
}());
exports.DotUtil = DotUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9Eb3RVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQWtGO0FBQ2xGLHNFQUFnRjtBQUNoRiwyRkFBc0Y7QUFDdEYsbUVBQThEO0FBQzlELGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFDcEUsbUVBQWtFO0FBQ2xFLElBQUssQ0FLSjtBQUxELFdBQUssQ0FBQztJQUNKLGlDQUFZLENBQUE7SUFDWix1Q0FBZSxDQUFBO0lBQ2YsNkNBQWtCLENBQUE7SUFDbEIsbUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFMSSxDQUFDLEtBQUQsQ0FBQyxRQUtMO0FBQ1UsUUFBQSxnQkFBZ0IsR0FBRztJQUM1QixHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSSxFQUFFLE1BQU07Q0FDYixDQUFDO0FBQ0Y7SUFBQTtJQTJzQkEsQ0FBQztJQTFzQlEsdUJBQWUsR0FBdEI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN6RyxDQUFDO0lBQ00sd0JBQWdCLEdBQXZCO1FBQ0UsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDOUcsQ0FBQztJQUNNLGFBQUssR0FBWjtRQUNFLE9BQU8sTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNNLGlCQUFTLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLElBQUksMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSwwQkFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNQO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLDBCQUFVLENBQUMsY0FBYyxFQUFFO29CQUNsQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNQO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLDBCQUFVLENBQUMsT0FBTyxFQUFFO3dCQUMzQixDQUFDLEdBQUcsRUFBRSxDQUFDO3FCQUNSO3lCQUFNO3dCQUNMLENBQUMsSUFBSSwwQkFBVSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00seUJBQWlCLEdBQXhCO1FBQ0UsT0FBTywwQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNNLG1CQUFXLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNNLHFCQUFhLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxPQUFPLENBQUM7SUFDbEMsQ0FBQztJQUNNLHFCQUFhLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsT0FBTyxDQUFDLElBQUksMEJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksMEJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGdDQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDBCQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0UixDQUFDO0lBQ00sdUJBQWUsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsSUFBSSwwQkFBVSxDQUFDLE1BQU07WUFBRSxDQUFDLEdBQUcsZUFBZSxDQUFDO2FBQUssSUFBSSxDQUFDLElBQUksMEJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDL0UsSUFBSSxDQUFDLEdBQUcseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDbkQsQ0FBQyxHQUFHLHlCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsR0FBRyxJQUFJLENBQUM7WUFDVCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcscUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEM7YUFBTSxJQUFJLENBQUMsSUFBSSwwQkFBVSxDQUFDLGNBQWMsRUFBRTtZQUN6QyxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBQ1gsQ0FBQyxJQUFJLEdBQUcsR0FBRyxnQ0FBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQzlFOztZQUFNLENBQUMsSUFBSSwwQkFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSxnQ0FBd0IsR0FBL0IsVUFBZ0MsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJO29CQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ2hCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzdCO2lCQUNGO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLENBQUMsR0FBRzt3QkFDRixLQUFLLEVBQUUsQ0FBQztxQkFDVCxDQUFDO2lCQUNIO3dCQUFTO29CQUNSLElBQUk7d0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0M7NEJBQVM7d0JBQ1IsSUFBSSxDQUFDOzRCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0Y7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLDRCQUFvQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNDLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUN0QixDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNULElBQUk7b0JBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNGO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLENBQUMsR0FBRzt3QkFDRixLQUFLLEVBQUUsQ0FBQztxQkFDVCxDQUFDO2lCQUNIO3dCQUFTO29CQUNSLElBQUk7d0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0M7NEJBQVM7d0JBQ1IsSUFBSSxDQUFDOzRCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNkLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQzt3QkFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dDQUMzRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDakUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDOzZCQUNWO2lCQUNGO2dCQUNELElBQUksQ0FBQyxDQUFDO29CQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDeEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN2RyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ3BCO2dCQUNELENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6RDtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sZ0NBQXdCLEdBQS9CLFVBQWdDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDeEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxDQUFDLGNBQWMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDakM7YUFDRjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sc0JBQWMsR0FBckIsVUFBc0IsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsd0JBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3RGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSwrQkFBdUIsR0FBOUIsVUFBK0IsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0MsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDZjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sMEJBQWtCLEdBQXpCLFVBQTBCLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN4QixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRztvQkFDNUIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osV0FBVyxFQUFFLEVBQUU7aUJBQ2hCLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtnQkFBRSxJQUFJO29CQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ1g7aUJBQ0Y7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsQ0FBQyxHQUFHO3dCQUNGLEtBQUssRUFBRSxDQUFDO3FCQUNULENBQUM7aUJBQ0g7d0JBQVM7b0JBQ1IsSUFBSTt3QkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3Qzs0QkFBUzt3QkFDUixJQUFJLENBQUM7NEJBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO3FCQUN0QjtpQkFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssMkJBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNqRTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNqRTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUNqRTtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTztZQUNMLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDLENBQUMsTUFBTTtZQUN4QixtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQzVCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBQ00sdUJBQWUsR0FBdEIsVUFBdUIsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNDLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDWCxDQUFDLEVBQUUsQ0FBQztxQkFDTDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDWCxDQUFDLEVBQUUsQ0FBQzt5QkFDTDs2QkFBTTs0QkFDTCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO3lCQUNmO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQztTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUNNLDRCQUFvQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBUTtRQUFSLGtCQUFBLEVBQUEsUUFBUTtRQUNyQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTCxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ1osR0FBRyxFQUFFO29CQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNQO2dCQUNELE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLHNCQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLDJCQUFtQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBUTtRQUFSLGtCQUFBLEVBQUEsUUFBUTtRQUNwQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1gsR0FBRyxFQUFFO29CQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNQO2dCQUNELE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLHNCQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLHVCQUFlLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFRO1FBQVIsa0JBQUEsRUFBQSxRQUFRO1FBQ2hDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7b0JBQ2hFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ00sbUJBQVcsR0FBbEIsVUFBbUIsQ0FBQztRQUNsQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQVMsQ0FBQyxFQUM1QixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLENBQUMsS0FBSyx3QkFBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ00sa0NBQTBCLEdBQWpDLFVBQWtDLENBQUMsRUFBRSxDQUFRO1FBQVIsa0JBQUEsRUFBQSxRQUFRO1FBQzNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFDdkIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3RFLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTTtvQkFDZCxNQUFNLEVBQUUsQ0FBQyxDQUFDLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztpQkFDN0IsQ0FBQyxDQUFDLENBQUM7YUFDTDtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFDUixJQUFJO2dCQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0M7b0JBQVM7Z0JBQ1IsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ00sa0JBQVUsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDMUQsT0FBTyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDTSxxQkFBYSxHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsRUFDRixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztvQkFDZCxDQUFDLEVBQUUsQ0FBQztvQkFDSixDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLENBQUM7WUFDYixXQUFXLEVBQUUsQ0FBQztZQUNkLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFDTSw0QkFBb0IsR0FBM0IsVUFBNEIsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ00sd0JBQWdCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDekMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTSxxQkFBYSxHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssdUJBQU8sQ0FBQyxPQUFPO2dCQUNsQixPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QixLQUFLLHVCQUFPLENBQUMsSUFBSTtnQkFDZixPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QixLQUFLLHVCQUFPLENBQUMsTUFBTTtnQkFDakIsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsS0FBSyx1QkFBTyxDQUFDLE1BQU07Z0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLEtBQUssdUJBQU8sQ0FBQyxNQUFNO2dCQUNqQixPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUM1QjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLHFCQUFhLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSyx1QkFBTyxDQUFDLE9BQU87Z0JBQ2xCLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLEtBQUssdUJBQU8sQ0FBQyxJQUFJO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLEtBQUssdUJBQU8sQ0FBQyxNQUFNO2dCQUNqQixPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixLQUFLLHVCQUFPLENBQUMsTUFBTTtnQkFDakIsT0FBTyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUIsS0FBSyx1QkFBTyxDQUFDLE1BQU07Z0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sc0JBQWMsR0FBckI7UUFDRSxPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUM7WUFDVCxFQUFFLEVBQUUsR0FBRztTQUNSLENBQUM7SUFDSixDQUFDO0lBRU0sb0JBQVksR0FBbkI7UUFDRSxPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHO1NBQ1IsQ0FBQztJQUNKLENBQUM7SUFiRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7dUNBTXZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3FDQU9yQztJQUNILGNBQUM7Q0Ezc0JELEFBMnNCQyxJQUFBO0FBM3NCWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUsIEVJdGVtSWQgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSwgRVRpbGVWaXNpYmxlIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgRGFpbHlDaGFsbGVuZ2VHYW1lRGF0YSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9kYXRhL0RhaWx5Q2hhbGxlbmdlR2FtZURhdGEnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgTGV2ZWxHZW5SdWxlIGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbmZpZy9MZXZlbEdlblJ1bGUnO1xuaW1wb3J0IHsgTGV2ZWxVdGlsIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uZmlnL0xldmVsVXRpbCc7XG5lbnVtIGEge1xuICBPcGVyYWJsZSA9IDAsXG4gIEZ1bGxWaXNpYmxlID0gMSxcbiAgUGFydGlhbFZpc2libGUgPSAyLFxuICBJbnZpc2libGUgPSAzLFxufVxuZXhwb3J0IHZhciBFQ2FyZFJlcGxhY2VUeXBlID0ge1xuICBXYW46IFwid2FuXCIsXG4gIFRpYW86IFwidGlhb1wiLFxuICBCaW5nOiBcImJpbmdcIlxufTtcbmV4cG9ydCBjbGFzcyBEb3RVdGlsIHtcbiAgc3RhdGljIGdldEludGVyQWRQb2ludCgpIHtcbiAgICByZXR1cm4gY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfQU5EUk9JRCA/IFwiaW50ZXJBZFwiIDogY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TID8gXCJJTlRFUlwiIDogXCJpbnRlckFkXCI7XG4gIH1cbiAgc3RhdGljIGdldFJld2FyZEFkUG9pbnQoKSB7XG4gICAgcmV0dXJuIGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQgPyBcInJld2FyZEFkXCIgOiBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MgPyBcIlJFV0FSREVEXCIgOiBcInJld2FyZEFkXCI7XG4gIH1cbiAgc3RhdGljIGdldER0KCkge1xuICAgIHJldHVybiBOdW1iZXIobmV3IERhdGUoKS5mb3JtYXQoXCJZWVlZbW1kZFwiKSk7XG4gIH1cbiAgc3RhdGljIGdldEdhbWVJZChlKSB7XG4gICAgdmFyIHQgPSAwO1xuICAgIGlmIChlID09IE1qR2FtZVR5cGUuTm9ybWFsKSB7XG4gICAgICB0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUgPT0gTWpHYW1lVHlwZS5UcmF2ZWwpIHtcbiAgICAgICAgdCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZSA9PSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlKSB7XG4gICAgICAgICAgdCA9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGUgPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICAgICAgICB0ID0gMTA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUgPT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiAodCA9IDIwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgc3RhdGljIGdldEdhbWVQbGF5TWV0aG9kKCkge1xuICAgIHJldHVybiBNakdhbWVUeXBlLlRpbGUyTm9ybWFsLCAwO1xuICB9XG4gIHN0YXRpYyBpc1RpbGUyR2FtZShlKSB7XG4gICAgcmV0dXJuIGUgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgc3RhdGljIGlzQ2xhc3NpY0dhbWUoZSkge1xuICAgIHJldHVybiBlID09PSBNakdhbWVUeXBlLkNsYXNzaWM7XG4gIH1cbiAgc3RhdGljIGdldEFjdGl2aXR5SWQoZSkge1xuICAgIHJldHVybiBlID09IE1qR2FtZVR5cGUuTm9ybWFsID8gXCItMVwiIDogZSA9PSBNakdhbWVUeXBlLlRyYXZlbCA/IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckpvdXJuZXkoKSA6IGUgPT0gTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSA/IERhaWx5Q2hhbGxlbmdlR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXREYWlseUNoYWxsZW5nZVRpbWVzdGFtcCgpLnNwbGl0KFwiLVwiKS5qb2luKFwiXCIpIDogZSA9PSBNakdhbWVUeXBlLkNsYXNzaWMgPyBcIi0yXCIgOiBcInVua25vd25cIjtcbiAgfVxuICBzdGF0aWMgZ2V0R2FtZU1vZGVOYW1lKGUpIHtcbiAgICB2YXIgdCA9IFwiXCI7XG4gICAgaWYgKGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHQgPSBcIum6u+WwhjLlkIgt5YWz5Y2h5YaFLeS4u+e6v+eOqeazlVwiO2Vsc2UgaWYgKGUgPT0gTWpHYW1lVHlwZS5UcmF2ZWwpIHtcbiAgICAgIHZhciBvID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgICBuID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q29uZmlnKG8pO1xuICAgICAgdCA9IFwi5peF6KGMXCI7XG4gICAgICBuICYmICh0ID0gSTE4TlN0cmluZ3MuZ2V0Q04obi5uYW1lKSk7XG4gICAgfSBlbHNlIGlmIChlID09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHtcbiAgICAgIHQgPSBcIuavj+aXpeaMkeaImFwiO1xuICAgICAgdCArPSBcIjpcIiArIERhaWx5Q2hhbGxlbmdlR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXREYWlseUNoYWxsZW5nZVRpbWVzdGFtcCgpO1xuICAgIH0gZWxzZSBlID09IE1qR2FtZVR5cGUuQ2xhc3NpYyAmJiAodCA9IFwi5peg5bC95qih5byPXCIpO1xuICAgIHJldHVybiB0O1xuICB9XG4gIHN0YXRpYyBnZXRJbml0aWFsQm9hcmREaW1lbnNpb24oZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgYSA9IDAsXG4gICAgICBsID0gMCxcbiAgICAgIHMgPSBlLmdldFRpbGVNYXBPYmplY3QoKS5tYXBMYXllcnMoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKHMpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IHUudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgZiA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyhwLmFsbENhcmRzKSksIGQgPSBmLm5leHQoKTsgIWQuZG9uZTsgZCA9IGYubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgICAgICBhID0gTWF0aC5tYXgoYSwgaC5ncmlkUG9zWCk7XG4gICAgICAgICAgICBsID0gTWF0aC5tYXgobCwgaC5ncmlkUG9zWSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgbiA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZCAmJiAhZC5kb25lICYmIChyID0gZi5yZXR1cm4pICYmIHIuY2FsbChmKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHUgJiYgIXUuZG9uZSAmJiAobyA9IGMucmV0dXJuKSAmJiBvLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFthICsgMiwgbCArIDIsIHMubGVuZ3RoXTtcbiAgfVxuICBzdGF0aWMgZ2V0U2VsZkRpc3RhbmNlQXJyYXkoZSwgdCkge1xuICAgIHZhciBvLFxuICAgICAgbixcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgYyA9IGZ1bmN0aW9uIGMoZSkge1xuICAgICAgICByZXR1cm4gdCA/IGUuZ2V0UG9zaXRpb24oKSA6IGNjLnYyKGUuZ3JpZFBvc1gsIGUuZ3JpZFBvc1kpO1xuICAgICAgfSxcbiAgICAgIHUgPSB7fSxcbiAgICAgIHAgPSBlLmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGYgPSBfX3ZhbHVlcyhwKSwgZCA9IGYubmV4dCgpOyAhZC5kb25lOyBkID0gZi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGggPSBfX3JlYWQoZC52YWx1ZSwgMiksXG4gICAgICAgICAgeSA9IGhbMF07XG4gICAgICAgIHVbKE4gPSBoWzFdKS5jYXJkSWRdIHx8ICh1W04uY2FyZElkXSA9IFtdKTtcbiAgICAgICAgdVtOLmNhcmRJZF0ucHVzaChOKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChuID0gZi5yZXR1cm4pICYmIG4uY2FsbChmKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbSA9IHt9O1xuICAgIGZvciAodmFyIHYgaW4gdSkge1xuICAgICAgdmFyIGcgPSB1W3ZdO1xuICAgICAgaWYgKCEoZy5sZW5ndGggPCAyKSkge1xuICAgICAgICB2YXIgXyA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgVCA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIEMgPSAoYSA9IHZvaWQgMCwgX192YWx1ZXMoZykpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIEUgPSBiLnZhbHVlO1xuICAgICAgICAgICAgVFtFLmxheWVyXSB8fCAoVFtFLmxheWVyXSA9IFtdKTtcbiAgICAgICAgICAgIFRbRS5sYXllcl0ucHVzaChFKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBhID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBiICYmICFiLmRvbmUgJiYgKGwgPSBDLnJldHVybikgJiYgbC5jYWxsKEMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgSSBpbiBUKSB7XG4gICAgICAgICAgdmFyIHcgPSBUW0ldO1xuICAgICAgICAgIGlmICh3Lmxlbmd0aCA+PSAyKSBmb3IgKHZhciBCID0gMDsgQiA8IHcubGVuZ3RoOyBCKyspIGZvciAodmFyIHggPSBCICsgMTsgeCA8IHcubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIHZhciBNID0gd1tCXSxcbiAgICAgICAgICAgICAgTyA9IHdbeF0sXG4gICAgICAgICAgICAgIEQgPSBjKE0pLFxuICAgICAgICAgICAgICBQID0gYyhPKSxcbiAgICAgICAgICAgICAgQSA9IE1hdGguc3FydChNYXRoLnBvdyhQLnggLSBELngsIDIpICsgTWF0aC5wb3coUC55IC0gRC55LCAyKSk7XG4gICAgICAgICAgICBfID0gTWF0aC5taW4oXywgQSk7XG4gICAgICAgICAgICBTID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFTKSBmb3IgKEIgPSAwOyBCIDwgZy5sZW5ndGg7IEIrKykgZm9yICh4ID0gQiArIDE7IHggPCBnLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgTSA9IGdbQl0sIE8gPSBnW3hdLCBEID0gYyhNKSwgUCA9IGMoTyksIEEgPSBNYXRoLnNxcnQoTWF0aC5wb3coUC54IC0gRC54LCAyKSArIE1hdGgucG93KFAueSAtIEQueSwgMikpO1xuICAgICAgICAgIF8gPSBNYXRoLm1pbihfLCBBKTtcbiAgICAgICAgfVxuICAgICAgICBfICE9PSBOdW1iZXIuTUFYX1ZBTFVFICYmIChtW3ZdID0gTnVtYmVyKF8udG9GaXhlZCgyKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgUiA9IFtdO1xuICAgIHZhciBfcyA9IHt9O1xuICAgIF9zW3ldID0gTjtcbiAgICBmb3IgKHZhciB5IGluIG0pIHtcbiAgICAgIHZhciBOID0gbVt5XTtcbiAgICAgIFIucHVzaChfcyk7XG4gICAgfVxuICAgIHJldHVybiBSO1xuICB9XG4gIHN0YXRpYyBnZXRTcGVjaWFsUmVwbGFjZUNhcmRJZHMoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBlLmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCksXG4gICAgICBhID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhuKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBfX3JlYWQocy52YWx1ZSwgMiksXG4gICAgICAgICAgdSA9IGNbMF0sXG4gICAgICAgICAgcCA9IGNbMV07XG4gICAgICAgIGlmIChwLm9yaWdpbmFsQ2FyZElkICE9PSBwLmNhcmRJZCkge1xuICAgICAgICAgIGFbcC50eXBlXSB8fCAoYVtwLnR5cGVdID0gbmV3IFNldCgpKTtcbiAgICAgICAgICBhW3AudHlwZV0uYWRkKHAub3JpZ2luYWxDYXJkSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobyA9IGwucmV0dXJuKSAmJiBvLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGYgPSBbXTtcbiAgICBmb3IgKHZhciB1IGluIGEpIGYucHVzaCh1ICsgXCI6XCIgKyBBcnJheS5mcm9tKGFbdV0pLmpvaW4oXCIsXCIpKTtcbiAgICByZXR1cm4gZjtcbiAgfVxuICBzdGF0aWMgZ2V0RmxpcENhcmRQb3MoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBbXSxcbiAgICAgIGEgPSBlLmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhhKSwgYyA9IGwubmV4dCgpOyAhYy5kb25lOyBjID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBfX3JlYWQoYy52YWx1ZSwgMiksXG4gICAgICAgICAgcCA9ICh1WzBdLCB1WzFdKTtcbiAgICAgICAgcC5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJvbGxDYXJkKSAmJiBuLnB1c2goY2MudjMocC5ncmlkUG9zWCwgcC5ncmlkUG9zWSwgcC5sYXllcikpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUueCArIFwiLFwiICsgZS55ICsgXCIsXCIgKyBlLno7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGdldE1haGpvbmdNYXRjaENudEFycmF5KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0ge30sXG4gICAgICBhID0gZS5nZXRUaWxlTWFwT2JqZWN0KCkudGlsZU9iamVjdE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBsID0gX192YWx1ZXMoYSksIHMgPSBsLm5leHQoKTsgIXMuZG9uZTsgcyA9IGwubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gX19yZWFkKHMudmFsdWUsIDIpLFxuICAgICAgICAgIHUgPSAoY1swXSwgY1sxXSk7XG4gICAgICAgIG5bdS5jYXJkSWRdIHx8IChuW3UuY2FyZElkXSA9IDApO1xuICAgICAgICBuW3UuY2FyZElkXSsrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSBsLnJldHVybikgJiYgby5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9XG4gIHN0YXRpYyBnZXRFeHBvc2VkUGFpckluZm8oZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGYsXG4gICAgICBkLFxuICAgICAgaCxcbiAgICAgIHksXG4gICAgICBtLFxuICAgICAgdixcbiAgICAgIGcgPSB7fSxcbiAgICAgIF8gPSBlLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIFQgPSBfLnRpbGVPYmplY3RNYXAoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgQyA9IF9fdmFsdWVzKFQpLCBiID0gQy5uZXh0KCk7ICFiLmRvbmU7IGIgPSBDLm5leHQoKSkge1xuICAgICAgICB2YXIgRSA9IF9fcmVhZChiLnZhbHVlLCAyKSxcbiAgICAgICAgICBTID0gKEVbMF0sIEVbMV0pO1xuICAgICAgICBnW1MuY2FyZElkXSB8fCAoZ1tTLmNhcmRJZF0gPSB7XG4gICAgICAgICAgbW92ZUFibGU6IFtdLFxuICAgICAgICAgIG5vbk1vdmVBYmxlOiBbXVxuICAgICAgICB9KTtcbiAgICAgICAgUy5pc1ZhbGlkICYmICgwID09PSBTLmlzQ2FyZExvY2soKSA/IGdbUy5jYXJkSWRdLm1vdmVBYmxlLnB1c2goUykgOiBnW1MuY2FyZElkXS5ub25Nb3ZlQWJsZS5wdXNoKFMpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYiAmJiAhYi5kb25lICYmIChvID0gQy5yZXR1cm4pICYmIG8uY2FsbChDKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgSSA9IFtdO1xuICAgIGZvciAodmFyIHcgaW4gZykge1xuICAgICAgdmFyIEIgPSBnW3ddLm1vdmVBYmxlLFxuICAgICAgICB4ID0gZ1t3XS5ub25Nb3ZlQWJsZTtcbiAgICAgIGlmICgxID09PSBCLmxlbmd0aCkgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgTSA9IChuID0gdm9pZCAwLCBfX3ZhbHVlcyh4KSksIE8gPSBNLm5leHQoKTsgIU8uZG9uZTsgTyA9IE0ubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIEQgPSBPLnZhbHVlO1xuICAgICAgICAgIEkucHVzaChEKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBuID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIE8gJiYgIU8uZG9uZSAmJiAoYSA9IE0ucmV0dXJuKSAmJiBhLmNhbGwoTSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFAgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgQSA9IF9fdmFsdWVzKEkpLCBSID0gQS5uZXh0KCk7ICFSLmRvbmU7IFIgPSBBLm5leHQoKSkge1xuICAgICAgICBEID0gUi52YWx1ZTtcbiAgICAgICAgXy5pc0hhc1Zpc2libGUoRCkgIT09IEVUaWxlVmlzaWJsZS5Ob25lICYmIFAucHVzaChEKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgUiAmJiAhUi5kb25lICYmIChjID0gQS5yZXR1cm4pICYmIGMuY2FsbChBKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChsKSB0aHJvdyBsLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgTiA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBqID0gX192YWx1ZXMoUCksIGsgPSBqLm5leHQoKTsgIWsuZG9uZTsgayA9IGoubmV4dCgpKSB7XG4gICAgICAgIEQgPSBrLnZhbHVlO1xuICAgICAgICBfLmlzSGFzQ292ZXIoRCkgJiYgTi5wdXNoKEQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHUgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBrICYmICFrLmRvbmUgJiYgKHAgPSBqLnJldHVybikgJiYgcC5jYWxsKGopO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHUpIHRocm93IHUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBMID0ge307XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIEcgPSBfX3ZhbHVlcyhJKSwgRiA9IEcubmV4dCgpOyAhRi5kb25lOyBGID0gRy5uZXh0KCkpIHtcbiAgICAgICAgRCA9IEYudmFsdWU7XG4gICAgICAgIExbSlNPTi5zdHJpbmdpZnkoW0QuZ3JpZFBvc1gsIEQuZ3JpZFBvc1ksIEQubGF5ZXJdKV0gPSBELmNhcmRJZDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBmID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgRiAmJiAhRi5kb25lICYmIChkID0gRy5yZXR1cm4pICYmIGQuY2FsbChHKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBmLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgViA9IHt9O1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBVID0gX192YWx1ZXMoUCksIEggPSBVLm5leHQoKTsgIUguZG9uZTsgSCA9IFUubmV4dCgpKSB7XG4gICAgICAgIEQgPSBILnZhbHVlO1xuICAgICAgICBWW0pTT04uc3RyaW5naWZ5KFtELmdyaWRQb3NYLCBELmdyaWRQb3NZLCBELmxheWVyXSldID0gRC5jYXJkSWQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIEggJiYgIUguZG9uZSAmJiAoeSA9IFUucmV0dXJuKSAmJiB5LmNhbGwoVSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoaCkgdGhyb3cgaC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFcgPSB7fTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeiA9IF9fdmFsdWVzKE4pLCBZID0gei5uZXh0KCk7ICFZLmRvbmU7IFkgPSB6Lm5leHQoKSkge1xuICAgICAgICBEID0gWS52YWx1ZTtcbiAgICAgICAgV1tKU09OLnN0cmluZ2lmeShbRC5ncmlkUG9zWCwgRC5ncmlkUG9zWSwgRC5sYXllcl0pXSA9IEQuY2FyZElkO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG0gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBZICYmICFZLmRvbmUgJiYgKHYgPSB6LnJldHVybikgJiYgdi5jYWxsKHopO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG0pIHRocm93IG0uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBleHBvc2VkUGFpckluZm86IEwsXG4gICAgICBleHBvc2VkUGFpckNudDogSS5sZW5ndGgsXG4gICAgICBoYWxmRXhwb3NlZFBhaXJJbmZvOiBWLFxuICAgICAgaGFsZkV4cG9zZWRQYWlyQ250OiBQLmxlbmd0aCxcbiAgICAgIGJsb2NraW5nVGlsZUluZm86IFcsXG4gICAgICBibG9ja2luZ1RpbGVDbnQ6IE4ubGVuZ3RoXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0TGVmdFJpZ2h0Q250KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gMCxcbiAgICAgIGEgPSAwLFxuICAgICAgbCA9IDAsXG4gICAgICBzID0gZS5nZXRUaWxlTWFwT2JqZWN0KCkudGlsZU9iamVjdE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBjID0gX192YWx1ZXMocyksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gX19yZWFkKHUudmFsdWUsIDIpLFxuICAgICAgICAgIGYgPSAocFswXSwgcFsxXSk7XG4gICAgICAgIGlmIChmLmlzVmFsaWQgJiYgMCA9PT0gZi5pc0NhcmRMb2NrKCkpIHtcbiAgICAgICAgICB2YXIgZCA9IGYuaXNIYXNMZWZ0KCksXG4gICAgICAgICAgICBoID0gZi5pc0hhc1JpZ2h0KCk7XG4gICAgICAgICAgaWYgKGQgJiYgIWgpIHtcbiAgICAgICAgICAgIG4rKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFkICYmIGgpIHtcbiAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZCB8fCBoIHx8IGwrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbGVmdEZyZWVSaWdodENudDogbixcbiAgICAgIHJpZ2h0RnJlZUxlZnRDbnQ6IGEsXG4gICAgICBib3RoU2lkZXNGcmVlQ250OiBsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0TGV2ZWxEYXRhQXNDYXJkSWQoZSwgdCA9IHRydWUpIHtcbiAgICB2YXIgbyA9IFtdO1xuICAgIGUudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBuID0gZS5wb3MsXG4gICAgICAgIGkgPSB0ID8gZS5pc1ZhbGlkICYmICFlLmdldElzSW5TbG90QmFyKCkgOiBlLmlzVmFsaWQ7XG4gICAgICBvLnB1c2goe1xuICAgICAgICBpZDogZS5jYXJkSWQsXG4gICAgICAgIHBvczoge1xuICAgICAgICAgIHg6IG4ueCxcbiAgICAgICAgICB5OiBuLnksXG4gICAgICAgICAgejogbi56XG4gICAgICAgIH0sXG4gICAgICAgIGlzQWxpdmU6IGlcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIG8uc29ydChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIGUucG9zLnogIT09IHQucG9zLnogPyBlLnBvcy56IC0gdC5wb3MueiA6IGUucG9zLnkgIT09IHQucG9zLnkgPyBlLnBvcy55IC0gdC5wb3MueSA6IGUucG9zLnggLSB0LnBvcy54O1xuICAgIH0pO1xuICAgIHJldHVybiBMZXZlbEdlblJ1bGUuc2VyaWFsaXplVGlsZXNUb0lubGluZVN0cmluZyhvKTtcbiAgfVxuICBzdGF0aWMgZ2V0TGV2ZWxEYXRhQXNSZXNJZChlLCB0ID0gdHJ1ZSkge1xuICAgIHZhciBvID0gW107XG4gICAgZS50aWxlT2JqZWN0TWFwKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG4gPSBlLnBvcyxcbiAgICAgICAgaSA9IHQgPyBlLmlzVmFsaWQgJiYgIWUuZ2V0SXNJblNsb3RCYXIoKSA6IGUuaXNWYWxpZDtcbiAgICAgIG8ucHVzaCh7XG4gICAgICAgIGlkOiBlLnJlc0lkLFxuICAgICAgICBwb3M6IHtcbiAgICAgICAgICB4OiBuLngsXG4gICAgICAgICAgeTogbi55LFxuICAgICAgICAgIHo6IG4uelxuICAgICAgICB9LFxuICAgICAgICBpc0FsaXZlOiBpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBvLnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlLnBvcy56ICE9PSB0LnBvcy56ID8gZS5wb3MueiAtIHQucG9zLnogOiBlLnBvcy55ICE9PSB0LnBvcy55ID8gZS5wb3MueSAtIHQucG9zLnkgOiBlLnBvcy54IC0gdC5wb3MueDtcbiAgICB9KTtcbiAgICByZXR1cm4gTGV2ZWxHZW5SdWxlLnNlcmlhbGl6ZVRpbGVzVG9JbmxpbmVTdHJpbmcobyk7XG4gIH1cbiAgc3RhdGljIGdldFNwZWNpYWxUaWxlcyhlLCB0ID0gdHJ1ZSkge1xuICAgIHZhciBvLCBuO1xuICAgIHZhciByID0gW10sXG4gICAgICBhID0gZS5hbGl2ZVRpbGVzKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyhhKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGMgPSBzLnZhbHVlO1xuICAgICAgICBpZiAoYy5pc1ZhbGlkICYmICEodCAmJiBjLmdldElzSW5TbG90QmFyKCkgfHwgYy5jaGVja0lzTm9ybWFsKCkpKSB7XG4gICAgICAgICAgdmFyIHUgPSB0aGlzLmdldFZpdGFQb3MoYyk7XG4gICAgICAgICAgci5wdXNoKHUgKyBcIjpcIiArIHRoaXMuZ2V0VGlsZVR5cGUoYykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbyA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobiA9IGwucmV0dXJuKSAmJiBuLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHIuam9pbihcIixcIik7XG4gIH1cbiAgc3RhdGljIGdldFRpbGVUeXBlKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gT2JqZWN0LnZhbHVlcyhFVGlsZVR5cGUpLFxuICAgICAgciA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXMobiksIGwgPSBhLm5leHQoKTsgIWwuZG9uZTsgbCA9IGEubmV4dCgpKSB7XG4gICAgICAgIHZhciBjID0gbC52YWx1ZTtcbiAgICAgICAgYyAhPT0gRVRpbGVUeXBlLk5vcm1hbCAmJiBlLmNoZWNrSGFzVHlwZShjKSAmJiByLnB1c2goYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobyA9IGEucmV0dXJuKSAmJiBvLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHIuam9pbihcInxcIik7XG4gIH1cbiAgc3RhdGljIGdldEJsb2NrU3RhdHVzUG9zaXRpb25MaXN0KGUsIHQgPSB0cnVlKSB7XG4gICAgdmFyIG8sIG47XG4gICAgdmFyIGwgPSBlLnRpbGVPYmplY3RNYXAoKSxcbiAgICAgIHMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKGwpLCB1ID0gYy5uZXh0KCk7ICF1LmRvbmU7IHUgPSBjLm5leHQoKSkge1xuICAgICAgICB2YXIgcCA9IF9fcmVhZCh1LnZhbHVlLCAyKSxcbiAgICAgICAgICBmID0gKHBbMF0sIHBbMV0pO1xuICAgICAgICBmLmlzVmFsaWQgJiYgKHQgJiYgZi5nZXRJc0luU2xvdEJhcigpIHx8IDAgPT09IGYuaXNDYXJkTG9jaygpICYmIHMucHVzaCh7XG4gICAgICAgICAgc3VpdDogZi5jYXJkSWQsXG4gICAgICAgICAgc3RhdHVzOiBhLk9wZXJhYmxlLFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmdldFZpdGFQb3MoZilcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICB1ICYmICF1LmRvbmUgJiYgKG4gPSBjLnJldHVybikgJiYgbi5jYWxsKGMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG4gIHN0YXRpYyBnZXRWaXRhUG9zKGUpIHtcbiAgICByZXR1cm4gZSA/IFtlLmdyaWRQb3NYLCBlLmdyaWRQb3NZLCBlLmxheWVyXS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBMZXZlbFV0aWwudHJhbnNsYXRlUG9zVG9DaGFyKGUpO1xuICAgIH0pLmpvaW4oXCJcIikgOiBcIlwiO1xuICB9XG4gIHN0YXRpYyBnZXRQcmVPcFBhaXJzKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIGwgPSBlLmFsaXZlVGlsZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuICFlLmdldElzSW5TbG90QmFyKCk7XG4gICAgICB9KSxcbiAgICAgIHMgPSB7fSxcbiAgICAgIGMgPSAwLFxuICAgICAgdSA9IDAsXG4gICAgICBwID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZiA9IF9fdmFsdWVzKGwpLCBkID0gZi5uZXh0KCk7ICFkLmRvbmU7IGQgPSBmLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgIGlmICgwID09PSBoLmlzQ2FyZExvY2soKSkge1xuICAgICAgICAgIHNbaC5jYXJkSWRdIHx8IChzW2guY2FyZElkXSA9IDApO1xuICAgICAgICAgIHNbaC5jYXJkSWRdKys7XG4gICAgICAgICAgYysrO1xuICAgICAgICAgIGguY2FyZElkID09PSB0LmNhcmRJZCAmJiBwKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZCAmJiAhZC5kb25lICYmIChuID0gZi5yZXR1cm4pICYmIG4uY2FsbChmKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKHMpKSwgbSA9IHkubmV4dCgpOyAhbS5kb25lOyBtID0geS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHYgPSBzW20udmFsdWVdO1xuICAgICAgICB2ID49IDIgJiYgKHUgKz0gTWF0aC5mbG9vcih2IC8gMikpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBtICYmICFtLmRvbmUgJiYgKGEgPSB5LnJldHVybikgJiYgYS5jYWxsKHkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwcmVPcFBhaXJzOiBwLFxuICAgICAgcHJlT3BCbG9ja3M6IGMsXG4gICAgICBwcmVPcENydXNoOiB1XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0T3BlcmF0ZUNhcmRJZExpc3QoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBlLmFsaXZlVGlsZXMoKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuICFlLmdldElzSW5TbG90QmFyKCk7XG4gICAgICB9KSxcbiAgICAgIHIgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyhuKSwgbCA9IGEubmV4dCgpOyAhbC5kb25lOyBsID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICAwID09PSBzLmlzQ2FyZExvY2soKSAmJiByLmFkZChzLmNhcmRJZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAobyA9IGEucmV0dXJuKSAmJiBvLmNhbGwoYSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocik7XG4gIH1cbiAgc3RhdGljIGdldFJlbGVhc2VDYXJkSWQoZSwgdCkge1xuICAgIHZhciBvID0gZS5hbGl2ZVRpbGVzKCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gIWUuZ2V0SXNJblNsb3RCYXIoKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiAwICE9PSBlLmlzQ2FyZExvY2soKTtcbiAgICB9KTtcbiAgICB0LmlzVmFsaWQgPSBmYWxzZTtcbiAgICB2YXIgbiA9IG8uZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gMCA9PT0gZS5pc0NhcmRMb2NrKCk7XG4gICAgfSk7XG4gICAgdC5pc1ZhbGlkID0gdHJ1ZTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KG4ubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5jYXJkSWQ7XG4gICAgfSkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0R2FtZVVzZU51bShlLCB0KSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIEVJdGVtSWQuU2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIGUuZ2V0VXNlZFNodWZmbGUoKTtcbiAgICAgIGNhc2UgRUl0ZW1JZC5IaW50OlxuICAgICAgICByZXR1cm4gZS5nZXRVc2VkSGl0VGlwcygpO1xuICAgICAgY2FzZSBFSXRlbUlkLlJldmVydDpcbiAgICAgICAgcmV0dXJuIGUuZ2V0VXNlZFJldmVydCgpO1xuICAgICAgY2FzZSBFSXRlbUlkLlJldml2ZTpcbiAgICAgICAgcmV0dXJuIGUuZ2V0VXNlZFJldml2ZSgpO1xuICAgICAgY2FzZSBFSXRlbUlkLk1hZ25ldDpcbiAgICAgICAgcmV0dXJuIGUuZ2V0VXNlZE1hZ25ldCgpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuICBzdGF0aWMgZ2V0R2FtZUdvdE51bShlLCB0KSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIEVJdGVtSWQuU2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIGUuZ2V0R290U2h1ZmZsZSgpO1xuICAgICAgY2FzZSBFSXRlbUlkLkhpbnQ6XG4gICAgICAgIHJldHVybiBlLmdldEdvdEhpdFRpcHMoKTtcbiAgICAgIGNhc2UgRUl0ZW1JZC5SZXZlcnQ6XG4gICAgICAgIHJldHVybiBlLmdldEdvdFJldmVydCgpO1xuICAgICAgY2FzZSBFSXRlbUlkLlJldml2ZTpcbiAgICAgICAgcmV0dXJuIGUuZ2V0R290UmV2aXZlKCk7XG4gICAgICBjYXNlIEVJdGVtSWQuTWFnbmV0OlxuICAgICAgICByZXR1cm4gZS5nZXRHb3RNYWduZXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEb3RVdGlsX2dldEZsb3dlclRoZW1lXCIpXG4gIHN0YXRpYyBnZXRGbG93ZXJUaGVtZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiAwLFxuICAgICAgaWQ6IFwiMFwiXG4gICAgfTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRvdFV0aWxfZ2V0QmFzZVRoZW1lXCIpXG4gIHN0YXRpYyBnZXRCYXNlVGhlbWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZTogMCxcbiAgICAgIG1hcDogW10sXG4gICAgICBpZDogXCIwXCJcbiAgICB9O1xuICB9XG59Il19