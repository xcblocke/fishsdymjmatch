
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_skinPreference/Scripts/SkinPreferenceTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NraW5QcmVmZXJlbmNlL1NjcmlwdHMvU2tpblByZWZlcmVuY2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFvRjtBQUNwRixpR0FBZ0c7QUFDaEcscUdBQWdJO0FBQ2hJLHNFQUFpRTtBQUNqRSxzRkFBaUY7QUFDakYsOEVBQTZFO0FBQzdFLElBQUssQ0FJSjtBQUpELFdBQUssQ0FBQztJQUNKLHlCQUFRLENBQUE7SUFDUix5QkFBUSxDQUFBO0lBQ1IsdUJBQU8sQ0FBQTtBQUNULENBQUMsRUFKSSxDQUFDLEtBQUQsQ0FBQyxRQUlMO0FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUdqSDtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQWdaQztRQS9ZQyxjQUFRLEdBQUcsRUFBRSxDQUFDOztJQStZaEIsQ0FBQztJQTdZQyxxQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLE9BQU8s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Q0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFDcEcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL00sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzNHLENBQUMsQ0FBQyxJ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QUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsNENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFDTixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FB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ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEZsb3dlclN0YXJDb25maWdVdGlsIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL2RhdGEvRmxvd2VyU3RhckNvbmZpZ1V0aWwnO1xuaW1wb3J0IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLCB7IEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL05vcm1hbEdhbWVEYXRhJztcbmltcG9ydCB7IFRpbGVNYXBTaW11bGF0b3IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL29iamVjdHMvVGlsZU1hcFNpbXVsYXRvcic7XG5lbnVtIHUge1xuICBUb25nID0gMCxcbiAgVGlhbyA9IDEsXG4gIFdhbiA9IDIsXG59XG52YXIgeSA9IFsyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgNTUsIDU5XTtcbnZhciBtID0gW1swLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSwgWzksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxN10sIFsxOCwgMTksIDIwLCAyMSwgMjIsIDIzLCAyNCwgMjUsIDI2XV07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNraW5QcmVmZXJlbmNlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraW5QcmVmZXJlbmNlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHNraW5zTWFwID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiU2tpblByZWZlcmVuY2VcIjtcbiAgaXNFbXB0eShlKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gZSB8fCBcIlwiID09PSBlO1xuICB9XG4gIGdldFNraW5zKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IG51bGwgPT09IChlID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc2tpbnMpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBbMSwgMiwgMywgNCwgNV07XG4gIH1cbiAgc3VwcG9ydE1vZGVzKCkge1xuICAgIHZhciBlLCB0O1xuICAgIHJldHVybiBudWxsICE9PSAodCA9IG51bGwgPT09IChlID0gdGhpcy50cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3VwcG9ydE1vZGVzKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogW01qR2FtZVR5cGUuTm9ybWFsLCBNakdhbWVUeXBlLlRyYXZlbCwgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSwgTWpHYW1lVHlwZS5DbGFzc2ljLCBNakdhbWVUeXBlLlRpbGUyTm9ybWFsXTtcbiAgfVxuICBpc1N1cHBvcnRNb2RlKGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3J0TW9kZXMoKS5pbmNsdWRlcyhlKTtcbiAgfVxuICBnZXRGb3JiaWRUcmFpdHMoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5mb3JiaWRUcmFpdHMpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBbXCJDaGFuZ2VSZXNJZFRyYWl0XCIsIFwiV2luU3RyZWFrQmFzZUNhcmRTa2luVHJhaXRcIl07XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YS5maXJzdFVzZXMpICYmICh0aGlzLmxvY2FsRGF0YS5maXJzdFVzZXMgPSB7fSk7XG4gICAgdGhpcy5pc0VtcHR5KHRoaXMubG9jYWxEYXRhLnJlY29yZHMpICYmICh0aGlzLmxvY2FsRGF0YS5yZWNvcmRzID0gW10pO1xuICAgIHZhciBhID0gRmxvd2VyU3RhckNvbmZpZ1V0aWwuZ2V0RnVsbExpc3QoKSxcbiAgICAgIGkgPSB0aGlzLmdldFNraW5zKCksXG4gICAgICBuID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhhKSwgbCA9IHMubmV4dCgpOyAhbC5kb25lOyBsID0gcy5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHUgPSBsLnZhbHVlO1xuICAgICAgICBpZiAoaS5pbmNsdWRlcyh1LmlkKSkge1xuICAgICAgICAgIHRoaXMuc2tpbnNNYXBbdS5pZF0gPSB1O1xuICAgICAgICAgIHUuaXNMb2NhbCB8fCBuLnB1c2godS5idW5kbGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGwgJiYgIWwuZG9uZSAmJiAociA9IHMucmV0dXJuKSAmJiByLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGRSZW1vdGVCdW5kbGVzVG9Mb2FkZXIobik7XG4gIH1cbiAgYWRkUmVtb3RlQnVuZGxlc1RvTG9hZGVyKGUpIHtcbiAgICB2YXIgdCA9IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB0LmFkZFRhc2soZSwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdENhcmRYaW5neXVuSHVhUGFpKTtcbiAgICB9KTtcbiAgfVxuICBpc1NraW5CdW5kbGVSZWFkeShlKSB7XG4gICAgcmV0dXJuIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQoZSk7XG4gIH1cbiAgc2V0UmVwbGFjZUxpc3QoZSwgdCkge1xuICAgIHRoaXMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YVtlXSkgJiYgKHRoaXMubG9jYWxEYXRhW2VdID0gW10pO1xuICAgIHRoaXMubG9jYWxEYXRhW2VdID0gdDtcbiAgfVxuICBnZXRSZXBsYWNlTGlzdChlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbXB0eSh0aGlzLmxvY2FsRGF0YVtlXSkgPyBbXSA6IHRoaXMubG9jYWxEYXRhW2VdO1xuICB9XG4gIG9uSXB0U2V0THZfcmVHZW5GYWNlcyhlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucy5nYW1lQ29udGV4dCxcbiAgICAgIGEgPSBlLmFyZ3NbMF0ubGV2ZWxEYXRhO1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydE1vZGUoci5nYW1lVHlwZSkpIHtcbiAgICAgIGlmIChhLmlzUmVzdGFydCkgdCgpO2Vsc2UgaWYgKGEuaXNOZXdHYW1lKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZUZhY2VzKHIpO1xuICAgICAgICB0KCk7XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25JcHRUMlNldEx2X3JlR2VuRmFjZXMoZSwgdCkge1xuICAgIHZhciByID0gZS5pbnMuZ2FtZUNvbnRleHQsXG4gICAgICBhID0gZS5hcmdzWzBdLmxldmVsRGF0YTtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRNb2RlKHIuZ2FtZVR5cGUpKSB7XG4gICAgICBpZiAoYS5pc1Jlc3RhcnQpIHQoKTtlbHNlIGlmIChhLmlzTmV3R2FtZSkge1xuICAgICAgICB0aGlzLnJlcGxhY2VGYWNlcyhyKTtcbiAgICAgICAgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIHJlcGxhY2VGYWNlcyhlKSB7XG4gICAgdmFyIHQgPSBlLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHIgPSBbXSxcbiAgICAgIGEgPSBuZXcgTWFwKCksXG4gICAgICBpID0gW107XG4gICAgdGhpcy5yZXBsYWNlV2FuVGlhb0JpbmcoZSwgciwgaSk7XG4gICAgdGhpcy5yZXBsYWNlRmlyc3RNYXRjaChlLCByLCBhLCBpKTtcbiAgICB0aGlzLnNldFJlcGxhY2VMaXN0KGUuZ2FtZVR5cGUsIHIpO1xuICAgIHRoaXMuYXBwbHlDYXJkSWRNYXBwaW5nVG9SZXNJZCh0LCBhKTtcbiAgfVxuICBnZXRCb2FyZEluZm8oZSkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W3UuV2FuXSA9IDA7XG4gICAgX3RbdS5UaWFvXSA9IDA7XG4gICAgX3RbdS5Ub25nXSA9IDA7XG4gICAgdmFyIHIgPSBfdCxcbiAgICAgIGEgPSBlLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGkgPSBuZXcgU2V0KG1bdS5XYW5dKSxcbiAgICAgIG4gPSBuZXcgU2V0KG1bdS5UaWFvXSksXG4gICAgICBvID0gbmV3IFNldChtW3UuVG9uZ10pO1xuICAgIGEuYWxpdmVUaWxlcygpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChpLmhhcyhlLnJlc0lkKSkge1xuICAgICAgICByW3UuV2FuXSA9IHJbdS5XYW5dICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuLmhhcyhlLnJlc0lkKSkge1xuICAgICAgICAgIHJbdS5UaWFvXSA9IHJbdS5UaWFvXSArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgby5oYXMoZS5yZXNJZCkgJiYgKHJbdS5Ub25nXSA9IHJbdS5Ub25nXSArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgcmVwbGFjZVdhblRpYW9CaW5nKGUsIHQsIHIpIHtcbiAgICB2YXIgYSwgaSwgbiwgbztcbiAgICBpZiAoIShOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldExldmVsSWQoKSA8IDIxKSkge1xuICAgICAgdmFyIHMgPSB0aGlzLmdldE1heEZpcnN0VXNlU2tpbigpO1xuICAgICAgaWYgKC0xICE9PSBzKSB7XG4gICAgICAgIHZhciBsID0gdGhpcy5nZXRCb2FyZEluZm8oZSksXG4gICAgICAgICAgYyA9IFtdO1xuICAgICAgICBsW3UuVG9uZ10gPiAwICYmIGMucHVzaCh1LlRvbmcpO1xuICAgICAgICBsW3UuVGlhb10gPiAwICYmIGMucHVzaCh1LlRpYW8pO1xuICAgICAgICBsW3UuV2FuXSA+IDAgJiYgYy5wdXNoKHUuV2FuKTtcbiAgICAgICAgaWYgKDAgIT09IGMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZiA9IGNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYy5sZW5ndGgpXSwgcCA9IG1bZl0sIGQgPSBwLmxlbmd0aCwgaCA9IGUuZ2V0Q2FyZENvbmZpZ01hcCgpLCBnID0gMDsgZyA8IGQ7IGcrKykge1xuICAgICAgICAgICAgdmFyIFQgPSBwW2ddLFxuICAgICAgICAgICAgICBNID0geVtnXSxcbiAgICAgICAgICAgICAgSSA9IG51bGwgIT09IChpID0gbnVsbCA9PT0gKGEgPSBoLmdldChUKSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5yZXNOYW1lKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogXCJcIixcbiAgICAgICAgICAgICAgUyA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKG4gPSBoLmdldChNKSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5yZXNOYW1lKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogXCJcIjtcbiAgICAgICAgICAgIHQucHVzaCh7XG4gICAgICAgICAgICAgIHNraW5JZDogcyxcbiAgICAgICAgICAgICAgb2xkSW1nOiBJLFxuICAgICAgICAgICAgICBuZXdJbWc6IFNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByLnB1c2gocyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVwbGFjZUZpcnN0TWF0Y2goZSwgdCwgciwgYSkge1xuICAgIHZhciBpLFxuICAgICAgbixcbiAgICAgIG8gPSBlLmdhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gdGhpcy5maW5kSW5pdGlhbE1hdGNoVGlsZTIoZSkgOiB0aGlzLmZpbmRJbml0aWFsTWF0Y2goZSksXG4gICAgICBzID0gby5zaXplO1xuICAgIGlmICghKHMgPD0gMCkpIGZvciAodmFyIGwgPSB0aGlzLmdldENhblVzZVNraW5zKGEpLCB1ID0gTWF0aC5taW4ocywgbC5sZW5ndGgsIHkubGVuZ3RoKSwgYyA9IHRoaXMuc2h1ZmZsZShBcnJheS5mcm9tKG8pKSwgcCA9IHRoaXMuc2h1ZmZsZSh5KSwgZCA9IHRoaXMuc2h1ZmZsZShsKSwgaCA9IGUuZ2V0Q2FyZENvbmZpZ01hcCgpLCB2ID0gMDsgdiA8IHU7IHYrKykge1xuICAgICAgdmFyIGcgPSBjW3ZdLFxuICAgICAgICBtID0gcFt2XSxcbiAgICAgICAgVCA9IGRbdl0sXG4gICAgICAgIE0gPSBudWxsICE9PSAobiA9IG51bGwgPT09IChpID0gaC5nZXQobSkpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkucmVzTmFtZSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IFwiXCI7XG4gICAgICB0LnB1c2goe1xuICAgICAgICBza2luSWQ6IFQsXG4gICAgICAgIG9sZEltZzogTSxcbiAgICAgICAgbmV3SW1nOiBNXG4gICAgICB9KTtcbiAgICAgIHIuc2V0KGcsIG0pO1xuICAgIH1cbiAgfVxuICBnZXRUYXNrQ2FyZFJlc05hbWUoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJUYXNrTW9kZWxcIik7XG4gICAgcmV0dXJuIG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRJbnN0YW5jZSgpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldFRhc2tDYXJkUmVzTmFtZSgpO1xuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKGUsIHQpIHtcbiAgICB2YXIgciA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGlmIChyICE9PSBNakdhbWVUeXBlLk5vbmUpIHtcbiAgICAgIGlmICh0aGlzLmlzU3VwcG9ydE1vZGUocikpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldFJlcGxhY2VMaXN0KHIpO1xuICAgICAgICBpZiAoMCAhPT0gYS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgaSA9IGUuYXJnc1swXTtcbiAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmdldFRhc2tDYXJkUmVzTmFtZSgpO1xuICAgICAgICAgICAgaWYgKG4gJiYgaSA9PT0gbikgdCgpO2Vsc2Uge1xuICAgICAgICAgICAgICB2YXIgbyA9IGEuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlLm9sZEltZyA9PT0gaTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnNraW5zTWFwW28uc2tpbklkXTtcbiAgICAgICAgICAgICAgICBpZiAocykge1xuICAgICAgICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogXCJhdGxhcy9mbG93ZXJDYXJkSWNvbi9cIiArIG8ubmV3SW1nLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1bmRsZU5hbWU6IHMuYnVuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGFwcGx5Q2FyZElkTWFwcGluZ1RvUmVzSWQoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIGkgPSBlLmFsaXZlVGlsZXMoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKGkpLCBzID0gbi5uZXh0KCk7ICFzLmRvbmU7IHMgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IHMudmFsdWUsXG4gICAgICAgICAgdSA9IGwuY2FyZElkLFxuICAgICAgICAgIGMgPSB0LmdldCh1KTtcbiAgICAgICAgdm9pZCAwICE9PSBjICYmIGMgIT09IGwucmVzSWQgJiYgZS5jaGFuZ2VUaWxlUmVzSWQobC5pZCwgYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAoYSA9IG4ucmV0dXJuKSAmJiBhLmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2h1ZmZsZShlKSB7XG4gICAgZm9yICh2YXIgdCwgciA9IFsuLi5lXSwgYSA9IHIubGVuZ3RoIC0gMTsgYSA+IDA7IGEtLSkge1xuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYSArIDEpKTtcbiAgICAgIHQgPSBfX3JlYWQoW3JbaV0sIHJbYV1dLCAyKSwgclthXSA9IHRbMF0sIHJbaV0gPSB0WzFdO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbiAgfVxuICBnZXRDYW5Vc2VTa2lucyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICByLFxuICAgICAgYSxcbiAgICAgIGksXG4gICAgICBuLFxuICAgICAgcyA9IFtdLFxuICAgICAgbCA9IHRoaXMuZ2V0U2tpbnMoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGwpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGMudmFsdWU7XG4gICAgICAgIGUuaW5jbHVkZXMoZikgfHwgKChudWxsID09PSAoYSA9IHRoaXMuc2tpbnNNYXBbZl0pIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuaXNMb2NhbCkgfHwgdGhpcy5pc1NraW5CdW5kbGVSZWFkeShudWxsICE9PSAobiA9IG51bGwgPT09IChpID0gdGhpcy5za2luc01hcFtmXSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5idW5kbGUpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiBcIlwiKSkgJiYgcy5wdXNoKGYpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKHIgPSB1LnJldHVybikgJiYgci5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG4gIG9uSXB0QmFzZV9wdXNoQ2xyRWZmKGUsIHQpIHtcbiAgICB2YXIgciA9IF9fcmVhZChlLmFyZ3MsIDEpWzBdLFxuICAgICAgYSA9IGUuaW5zLmdhbWVDb250ZXh0LFxuICAgICAgaSA9IGEuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRNb2RlKGEuZ2FtZVR5cGUpKSB7XG4gICAgICBpZiAoaS5nZXRDbGVhclRpbGVDb3VudCgpID4gMikgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0UmVwbGFjZUxpc3QoYS5nYW1lVHlwZSk7XG4gICAgICAgIGlmICgwICE9PSBuLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBvID0gYS5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChyKTtcbiAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgdmFyIGwgPSBuLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUub2xkSW1nID09PSBvLnJlc05hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gYS5nZXRHYW1lRGF0YSgpLmdldExldmVsSWQoKTtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaXJzdFVzZShhLmdhbWVUeXBlLCB1LCBsLnNraW5JZCk7XG4gICAgICAgICAgICAgIHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB0KCk7XG4gICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVDJTbG90QmFyTW9kX2NsZWFyU2xvdEJhcihlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmlucy5jb250ZXh0LFxuICAgICAgYSA9IHIuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRNb2RlKHIuZ2FtZVR5cGUpKSB7XG4gICAgICB2YXIgaSA9IGUuYXJnc1swXSxcbiAgICAgICAgbiA9IHIudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0Q2xlYXJUaWxlTGlzdChpKTtcbiAgICAgIGlmIChuLmxlbmd0aCA8PSAwKSB0KCk7ZWxzZSBpZiAoYS5nZXRDbGVhclRpbGVDb3VudCgpID4gMikgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgbyA9IHRoaXMuZ2V0UmVwbGFjZUxpc3Qoci5nYW1lVHlwZSk7XG4gICAgICAgIGlmICgwICE9PSBvLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBzID0gblswXVswXSxcbiAgICAgICAgICAgIGwgPSByLmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KHMpO1xuICAgICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgICB2YXIgdSA9IG8uZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZS5vbGRJbWcgPT09IGwucmVzTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgICAgdmFyIGMgPSByLmdldEdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpO1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpcnN0VXNlKHIuZ2FtZVR5cGUsIGMsIHUuc2tpbklkKTtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgdXBkYXRlRmlyc3RVc2UoZSwgdCwgcikge1xuICAgIHZhciBhID0gZSArIFwiX1wiICsgdCxcbiAgICAgIGkgPSB0aGlzLmxvY2FsRGF0YS5yZWNvcmRzO1xuICAgIGlmICghaS5pbmNsdWRlcyhhKSkge1xuICAgICAgaS51bnNoaWZ0KGEpO1xuICAgICAgaSA9IGkuc2xpY2UoMCwgMTApO1xuICAgICAgdGhpcy5sb2NhbERhdGEucmVjb3JkcyA9IGk7XG4gICAgICB2YXIgbiA9IHRoaXMubG9jYWxEYXRhLmZpcnN0VXNlcztcbiAgICAgIGlmIChuW3JdKSB7XG4gICAgICAgIG5bcl0rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5bcl0gPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbERhdGEuZmlyc3RVc2VzID0gbjtcbiAgICB9XG4gIH1cbiAgZ2V0TWF4Rmlyc3RVc2VTa2luKCkge1xuICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEuZmlyc3RVc2VzLFxuICAgICAgdCA9IFtdO1xuICAgIGZvciAodmFyIHIgaW4gZSkgdC5wdXNoKFtOdW1iZXIociksIGVbcl1dKTtcbiAgICB0LnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiB0WzFdIC0gZVsxXTtcbiAgICB9KTtcbiAgICBpZiAoMCA9PT0gdC5sZW5ndGgpIHJldHVybiAtMTtcbiAgICB2YXIgYSA9IHQuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZVsxXSA9PT0gdFswXVsxXTtcbiAgICB9KTtcbiAgICByZXR1cm4gMCA9PT0gYS5sZW5ndGggPyAtMSA6IGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYS5sZW5ndGgpXVswXTtcbiAgfVxuICBmaW5kSW5pdGlhbE1hdGNoVGlsZTIoZSkge1xuICAgIHZhciB0LFxuICAgICAgcixcbiAgICAgIGEgPSBuZXcgU2V0KCksXG4gICAgICBpID0gVGlsZU1hcFNpbXVsYXRvci5jcmVhdGVTaW0oZSksXG4gICAgICBuID0gaS5hbGl2ZVRpbGVzKCksXG4gICAgICBzID0gbi5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuICFlLmdldElzSW5TbG90QmFyKCkgJiYgMCA9PT0gaS5pc0NhcmRMb2NrKGUpO1xuICAgICAgfSk7XG4gICAgaWYgKHMubGVuZ3RoIDw9IDApIHJldHVybiBhO1xuICAgIHZhciBsID0gZnVuY3Rpb24gbChlKSB7XG4gICAgICB2YXIgdCwgcjtcbiAgICAgIGlmIChhLmhhcyhlLmNhcmRJZCkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICBlLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIHZhciBzID0gbi5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQuY2FyZElkID09PSBlLmNhcmRJZCAmJiB0LmlzVmFsaWQgJiYgIXQuZ2V0SXNJblNsb3RCYXIoKTtcbiAgICAgIH0pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbCA9ICh0ID0gdm9pZCAwLCBfX3ZhbHVlcyhzKSksIHUgPSBsLm5leHQoKTsgIXUuZG9uZTsgdSA9IGwubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGMgPSB1LnZhbHVlO1xuICAgICAgICAgIGlmICgwID09PSBpLmlzQ2FyZExvY2soYykpIHtcbiAgICAgICAgICAgIGEuYWRkKGUuY2FyZElkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHUgJiYgIXUuZG9uZSAmJiAociA9IGwucmV0dXJuKSAmJiByLmNhbGwobCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGUuaXNWYWxpZCA9IHRydWU7XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHMpLCBjID0gdS5uZXh0KCk7ICFjLmRvbmU7IGMgPSB1Lm5leHQoKSkgbChjLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYyAmJiAhYy5kb25lICYmIChyID0gdS5yZXR1cm4pICYmIHIuY2FsbCh1KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxuICBmaW5kSW5pdGlhbE1hdGNoKGUpIHtcbiAgICB2YXIgdCA9IFRpbGVNYXBTaW11bGF0b3IuY3JlYXRlU2ltKGUpO1xuICAgIHQudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHZhciByID0gdC5nZXRDYW5NYXRjaFRpbGVzKCksXG4gICAgICBhID0gbmV3IFNldCgpO1xuICAgIHIuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5sZW5ndGggPj0gMiAmJiBhLmFkZCh0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYTtcbiAgfVxufSJdfQ==