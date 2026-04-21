"use strict";
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