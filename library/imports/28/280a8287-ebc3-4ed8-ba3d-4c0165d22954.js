"use strict";
cc._RF.push(module, '280a8KH68NO2Lo9TAFl0ilU', 'SkinPreferenceTrait');
// subpackages/l_skinPreference/Scripts/SkinPreferenceTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var TileMapSimulator_1 = require("../../../Scripts/objects/TileMapSimulator");
var u;
(function (u) {
    u[u["Tong"] = 0] = "Tong";
    u[u["Tiao"] = 1] = "Tiao";
    u[u["Wan"] = 2] = "Wan";
})(u || (u = {}));
var y = [27, 28, 29, 30, 31, 32, 33, 55, 59];
var m = [[0, 1, 2, 3, 4, 5, 6, 7, 8], [9, 10, 11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24, 25, 26]];
var SkinPreferenceTrait = /** @class */ (function (_super) {
    __extends(SkinPreferenceTrait, _super);
    function SkinPreferenceTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skinsMap = {};
        return _this;
    }
    SkinPreferenceTrait.prototype.isEmpty = function (e) {
        return null == e || "" === e;
    };
    SkinPreferenceTrait.prototype.getSkins = function () {
        var e, t;
        return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.skins) && void 0 !== t ? t : [1, 2, 3, 4, 5];
    };
    SkinPreferenceTrait.prototype.supportModes = function () {
        var e, t;
        return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.supportModes) && void 0 !== t ? t : [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge, GameTypeEnums_1.MjGameType.Classic, GameTypeEnums_1.MjGameType.Tile2Normal];
    };
    SkinPreferenceTrait.prototype.isSupportMode = function (e) {
        return this.supportModes().includes(e);
    };
    SkinPreferenceTrait.prototype.getForbidTraits = function () {
        var e, t;
        return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.forbidTraits) && void 0 !== t ? t : ["ChangeResIdTrait", "WinStreakBaseCardSkinTrait"];
    };
    SkinPreferenceTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this.isEmpty(this.localData.firstUses) && (this.localData.firstUses = {});
        this.isEmpty(this.localData.records) && (this.localData.records = []);
        var a = FlowerStarConfigUtil_1.FlowerStarConfigUtil.getFullList(), i = this.getSkins(), n = [];
        try {
            for (var s = __values(a), l = s.next(); !l.done; l = s.next()) {
                var u = l.value;
                if (i.includes(u.id)) {
                    this.skinsMap[u.id] = u;
                    u.isLocal || n.push(u.bundle);
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
                l && !l.done && (r = s.return) && r.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this.addRemoteBundlesToLoader(n);
    };
    SkinPreferenceTrait.prototype.addRemoteBundlesToLoader = function (e) {
        var t = LowPriorityBundleLoader_1.default.getInstance();
        e.forEach(function (e) {
            t.addTask(e, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    SkinPreferenceTrait.prototype.isSkinBundleReady = function (e) {
        return LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e);
    };
    SkinPreferenceTrait.prototype.setReplaceList = function (e, t) {
        this.isEmpty(this.localData[e]) && (this.localData[e] = []);
        this.localData[e] = t;
    };
    SkinPreferenceTrait.prototype.getReplaceList = function (e) {
        return this.isEmpty(this.localData[e]) ? [] : this.localData[e];
    };
    SkinPreferenceTrait.prototype.onIptSetLv_reGenFaces = function (e, t) {
        var r = e.ins.gameContext, a = e.args[0].levelData;
        if (this.isSupportMode(r.gameType)) {
            if (a.isRestart)
                t();
            else if (a.isNewGame) {
                this.replaceFaces(r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    SkinPreferenceTrait.prototype.onIptT2SetLv_reGenFaces = function (e, t) {
        var r = e.ins.gameContext, a = e.args[0].levelData;
        if (this.isSupportMode(r.gameType)) {
            if (a.isRestart)
                t();
            else if (a.isNewGame) {
                this.replaceFaces(r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    SkinPreferenceTrait.prototype.replaceFaces = function (e) {
        var t = e.getTileMapObject(), r = [], a = new Map(), i = [];
        this.replaceWanTiaoBing(e, r, i);
        this.replaceFirstMatch(e, r, a, i);
        this.setReplaceList(e.gameType, r);
        this.applyCardIdMappingToResId(t, a);
    };
    SkinPreferenceTrait.prototype.getBoardInfo = function (e) {
        var _t = {};
        _t[u.Wan] = 0;
        _t[u.Tiao] = 0;
        _t[u.Tong] = 0;
        var r = _t, a = e.getTileMapObject(), i = new Set(m[u.Wan]), n = new Set(m[u.Tiao]), o = new Set(m[u.Tong]);
        a.aliveTiles().forEach(function (e) {
            if (i.has(e.resId)) {
                r[u.Wan] = r[u.Wan] + 1;
            }
            else {
                if (n.has(e.resId)) {
                    r[u.Tiao] = r[u.Tiao] + 1;
                }
                else {
                    o.has(e.resId) && (r[u.Tong] = r[u.Tong] + 1);
                }
            }
        });
        return r;
    };
    SkinPreferenceTrait.prototype.replaceWanTiaoBing = function (e, t, r) {
        var a, i, n, o;
        if (!(NormalGameData_1.default.getInstance().getLevelId() < 21)) {
            var s = this.getMaxFirstUseSkin();
            if (-1 !== s) {
                var l = this.getBoardInfo(e), c = [];
                l[u.Tong] > 0 && c.push(u.Tong);
                l[u.Tiao] > 0 && c.push(u.Tiao);
                l[u.Wan] > 0 && c.push(u.Wan);
                if (0 !== c.length) {
                    for (var f = c[Math.floor(Math.random() * c.length)], p = m[f], d = p.length, h = e.getCardConfigMap(), g = 0; g < d; g++) {
                        var T = p[g], M = y[g], I = null !== (i = null === (a = h.get(T)) || void 0 === a ? void 0 : a.resName) && void 0 !== i ? i : "", S = null !== (o = null === (n = h.get(M)) || void 0 === n ? void 0 : n.resName) && void 0 !== o ? o : "";
                        t.push({
                            skinId: s,
                            oldImg: I,
                            newImg: S
                        });
                    }
                    r.push(s);
                }
            }
        }
    };
    SkinPreferenceTrait.prototype.replaceFirstMatch = function (e, t, r, a) {
        var i, n, o = e.gameType === GameTypeEnums_1.MjGameType.Tile2Normal ? this.findInitialMatchTile2(e) : this.findInitialMatch(e), s = o.size;
        if (!(s <= 0))
            for (var l = this.getCanUseSkins(a), u = Math.min(s, l.length, y.length), c = this.shuffle(Array.from(o)), p = this.shuffle(y), d = this.shuffle(l), h = e.getCardConfigMap(), v = 0; v < u; v++) {
                var g = c[v], m = p[v], T = d[v], M = null !== (n = null === (i = h.get(m)) || void 0 === i ? void 0 : i.resName) && void 0 !== n ? n : "";
                t.push({
                    skinId: T,
                    oldImg: M,
                    newImg: M
                });
                r.set(g, m);
            }
    };
    SkinPreferenceTrait.prototype.getTaskCardResName = function () {
        var e, t = mj.getClassByName("TaskModel");
        return null === (e = null == t ? void 0 : t.getInstance()) || void 0 === e ? void 0 : e.getTaskCardResName();
    };
    SkinPreferenceTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        var r = UserModel_1.default.getInstance().getCurrentGameType();
        if (r !== GameTypeEnums_1.MjGameType.None) {
            if (this.isSupportMode(r)) {
                var a = this.getReplaceList(r);
                if (0 !== a.length) {
                    var i = e.args[0];
                    if (i) {
                        var n = this.getTaskCardResName();
                        if (n && i === n)
                            t();
                        else {
                            var o = a.find(function (e) {
                                return e.oldImg === i;
                            });
                            if (o) {
                                var s = this.skinsMap[o.skinId];
                                if (s) {
                                    t({
                                        isBreak: true,
                                        returnType: TraitCallbackReturnType.return,
                                        returnVal: {
                                            path: "atlas/flowerCardIcon/" + o.newImg,
                                            bundleName: s.bundle,
                                            fromAtlas: true
                                        }
                                    });
                                }
                                else {
                                    t();
                                }
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
            }
            else
                t();
        }
        else
            t();
    };
    SkinPreferenceTrait.prototype.applyCardIdMappingToResId = function (e, t) {
        var r, a, i = e.aliveTiles();
        try {
            for (var n = __values(i), s = n.next(); !s.done; s = n.next()) {
                var l = s.value, u = l.cardId, c = t.get(u);
                void 0 !== c && c !== l.resId && e.changeTileResId(l.id, c);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (a = n.return) && a.call(n);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
    };
    SkinPreferenceTrait.prototype.shuffle = function (e) {
        for (var t, r = __spreadArrays(e), a = r.length - 1; a > 0; a--) {
            var i = Math.floor(Math.random() * (a + 1));
            t = __read([r[i], r[a]], 2), r[a] = t[0], r[i] = t[1];
        }
        return r;
    };
    SkinPreferenceTrait.prototype.getCanUseSkins = function (e) {
        var t, r, a, i, n, s = [], l = this.getSkins();
        try {
            for (var u = __values(l), c = u.next(); !c.done; c = u.next()) {
                var f = c.value;
                e.includes(f) || ((null === (a = this.skinsMap[f]) || void 0 === a ? void 0 : a.isLocal) || this.isSkinBundleReady(null !== (n = null === (i = this.skinsMap[f]) || void 0 === i ? void 0 : i.bundle) && void 0 !== n ? n : "")) && s.push(f);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (r = u.return) && r.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return s;
    };
    SkinPreferenceTrait.prototype.onIptBase_pushClrEff = function (e, t) {
        var r = __read(e.args, 1)[0], a = e.ins.gameContext, i = a.getGameData();
        if (this.isSupportMode(a.gameType)) {
            if (i.getClearTileCount() > 2)
                t();
            else {
                var n = this.getReplaceList(a.gameType);
                if (0 !== n.length) {
                    var o = a.getTileMapObject().getTileObject(r);
                    if (o) {
                        var l = n.find(function (e) {
                            return e.oldImg === o.resName;
                        });
                        if (l) {
                            var u = a.getGameData().getLevelId();
                            this.updateFirstUse(a.gameType, u, l.skinId);
                            t();
                        }
                        else
                            t();
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
    };
    SkinPreferenceTrait.prototype.onT2SlotBarMod_clearSlotBar = function (e, t) {
        var r = e.ins.context, a = r.getGameData();
        if (this.isSupportMode(r.gameType)) {
            var i = e.args[0], n = r.tile2SlotBarModifier.getClearTileList(i);
            if (n.length <= 0)
                t();
            else if (a.getClearTileCount() > 2)
                t();
            else {
                var o = this.getReplaceList(r.gameType);
                if (0 !== o.length) {
                    var s = n[0][0], l = r.getTileMapObject().getTileObject(s);
                    if (l) {
                        var u = o.find(function (e) {
                            return e.oldImg === l.resName;
                        });
                        if (u) {
                            var c = r.getGameData().getLevelId();
                            this.updateFirstUse(r.gameType, c, u.skinId);
                            t();
                        }
                        else
                            t();
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
    };
    SkinPreferenceTrait.prototype.updateFirstUse = function (e, t, r) {
        var a = e + "_" + t, i = this.localData.records;
        if (!i.includes(a)) {
            i.unshift(a);
            i = i.slice(0, 10);
            this.localData.records = i;
            var n = this.localData.firstUses;
            if (n[r]) {
                n[r]++;
            }
            else {
                n[r] = 1;
            }
            this.localData.firstUses = n;
        }
    };
    SkinPreferenceTrait.prototype.getMaxFirstUseSkin = function () {
        var e = this.localData.firstUses, t = [];
        for (var r in e)
            t.push([Number(r), e[r]]);
        t.sort(function (e, t) {
            return t[1] - e[1];
        });
        if (0 === t.length)
            return -1;
        var a = t.filter(function (e) {
            return e[1] === t[0][1];
        });
        return 0 === a.length ? -1 : a[Math.floor(Math.random() * a.length)][0];
    };
    SkinPreferenceTrait.prototype.findInitialMatchTile2 = function (e) {
        var t, r, a = new Set(), i = TileMapSimulator_1.TileMapSimulator.createSim(e), n = i.aliveTiles(), s = n.filter(function (e) {
            return !e.getIsInSlotBar() && 0 === i.isCardLock(e);
        });
        if (s.length <= 0)
            return a;
        var l = function l(e) {
            var t, r;
            if (a.has(e.cardId))
                return "continue";
            e.isValid = false;
            var s = n.filter(function (t) {
                return t.cardId === e.cardId && t.isValid && !t.getIsInSlotBar();
            });
            try {
                for (var l = (t = void 0, __values(s)), u = l.next(); !u.done; u = l.next()) {
                    var c = u.value;
                    if (0 === i.isCardLock(c)) {
                        a.add(e.cardId);
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
                    u && !u.done && (r = l.return) && r.call(l);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            e.isValid = true;
        };
        try {
            for (var u = __values(s), c = u.next(); !c.done; c = u.next())
                l(c.value);
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (r = u.return) && r.call(u);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return a;
    };
    SkinPreferenceTrait.prototype.findInitialMatch = function (e) {
        var t = TileMapSimulator_1.TileMapSimulator.createSim(e);
        t.updateCanMatchTiles();
        var r = t.getCanMatchTiles(), a = new Set();
        r.forEach(function (e, t) {
            e.length >= 2 && a.add(t);
        });
        return a;
    };
    SkinPreferenceTrait.traitKey = "SkinPreference";
    SkinPreferenceTrait = __decorate([
        mj.trait,
        mj.class("SkinPreferenceTrait")
    ], SkinPreferenceTrait);
    return SkinPreferenceTrait;
}(Trait_1.default));
exports.default = SkinPreferenceTrait;

cc._RF.pop();