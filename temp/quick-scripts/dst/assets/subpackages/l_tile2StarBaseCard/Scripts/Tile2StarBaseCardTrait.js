
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StarBaseCard/Scripts/Tile2StarBaseCardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76c8cRr2w1CPalRlUsaOlyT', 'Tile2StarBaseCardTrait');
// subpackages/l_tile2StarBaseCard/Scripts/Tile2StarBaseCardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var v = ["W", "b", "t"];
var y = {
    1: "Z_dong",
    2: "Z_nan",
    3: "Z_xi",
    4: "Z_bei",
    5: "Z_zhong",
    6: "Z_fa",
    7: "Z_bai",
    8: "H_mei",
    9: "J_chun"
};
var Tile2StarBaseCardTrait = /** @class */ (function (_super) {
    __extends(Tile2StarBaseCardTrait, _super);
    function Tile2StarBaseCardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currentGameType = GameTypeEnums_1.MjGameType.Normal;
        _this._cachedIsFeatureEnabled = false;
        _this._startLevel = 2;
        return _this;
    }
    Tile2StarBaseCardTrait_1 = Tile2StarBaseCardTrait;
    Object.defineProperty(Tile2StarBaseCardTrait.prototype, "_suitGroupCount", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.suitGroupCount) && void 0 !== t ? t : 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tile2StarBaseCardTrait.prototype, "_starThemesList", {
        get: function () {
            return FlowerStarConfigUtil_1.FlowerStarConfigUtil.getStarList();
        },
        enumerable: false,
        configurable: true
    });
    Tile2StarBaseCardTrait.prototype.getStartLevel = function () {
        return this._startLevel;
    };
    Tile2StarBaseCardTrait.prototype.getSuitGroupCount = function () {
        return this._suitGroupCount;
    };
    Tile2StarBaseCardTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.startLevel) && void 0 !== r ? r : 2;
        this.ensureLocalDataDefaults();
        this.addRemoteBundlesToLoader();
    };
    Tile2StarBaseCardTrait.prototype.ensureLocalDataDefaults = function () {
        this.localData.currentEntries || (this.localData.currentEntries = []);
        this.localData.handledLevelId || (this.localData.handledLevelId = 0);
        this.localData.recentDraws || (this.localData.recentDraws = []);
        this.localData.preparedNext || (this.localData.preparedNext = null);
        this.localData.preparedAfterNext || (this.localData.preparedAfterNext = null);
        this.saveLocalData();
    };
    Tile2StarBaseCardTrait.prototype.addRemoteBundlesToLoader = function () {
        var e = LowPriorityBundleLoader_1.default.getInstance(), t = this._starThemesList.filter(function (e) {
            return !e.isLocal;
        }).map(function (e) {
            return e.bundle;
        });
        Array.from(new Set(t)).forEach(function (t) {
            return e.addTask(t, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    Tile2StarBaseCardTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        try {
            var a = e.ins;
            this._currentGameType = a.gameType;
            var n = UserModel_1.default.getInstance(), o = n.getMainGameType();
            if (this._currentGameType !== o || this._currentGameType !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                this._cachedIsFeatureEnabled = false;
                t();
                return;
            }
            var l = n.getMainGameData(), i = (null == l ? void 0 : l.getLevelId()) || 0, s = (null == l ? void 0 : l.getReplayCount()) || 0;
            if (i < this.getStartLevel()) {
                this._cachedIsFeatureEnabled = false;
                t();
                return;
            }
            this._cachedIsFeatureEnabled = true;
            0 === s && this.handleNewLevel(i);
            this.doPreloadForInitRes(a, i);
        }
        catch (e) {
            console.error("[" + Tile2StarBaseCardTrait_1.traitKey + "] initRes error: " + e);
        }
        t();
    };
    Tile2StarBaseCardTrait.prototype.handleNewLevel = function (e) {
        if (this.localData.handledLevelId !== e) {
            var t = this.localData.preparedNext;
            if ((null == t ? void 0 : t.forLevelId) === e) {
                this.localData.currentEntries = t.entries;
                this.pushRecentDraws(e, t.themeIds);
                var r = this.localData.preparedAfterNext;
                if ((null == r ? void 0 : r.forLevelId) === e + 1) {
                    this.localData.preparedNext = r;
                }
                else {
                    this.localData.preparedNext = this.drawForLevel(e + 1);
                }
                this.localData.preparedAfterNext = this.drawForLevel(e + 2);
            }
            else {
                var a = this.drawForLevel(e);
                this.localData.currentEntries = a.entries;
                this.pushRecentDraws(e, a.themeIds);
                this.localData.preparedNext = this.drawForLevel(e + 1);
                this.localData.preparedAfterNext = this.drawForLevel(e + 2);
            }
            this.localData.handledLevelId = e;
            this.saveLocalData();
        }
    };
    Tile2StarBaseCardTrait.prototype.doPreloadForInitRes = function (e, t) {
        var r, a, n, o;
        if (e && "function" == typeof e.addPreloadRes) {
            var i = new Set();
            try {
                for (var s = __values(this.localData.currentEntries), u = s.next(); !u.done; u = s.next()) {
                    var c = u.value;
                    i.add(c.bundle);
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    u && !u.done && (a = s.return) && a.call(s);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            var d = this.localData.preparedNext;
            if ((null == d ? void 0 : d.forLevelId) === t + 1)
                try {
                    for (var h = __values(d.entries), f = h.next(); !f.done; f = h.next()) {
                        c = f.value;
                        i.add(c.bundle);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        f && !f.done && (o = h.return) && o.call(h);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
            i.forEach(function (t) {
                e.addPreloadRes("SpriteAtlas", t + ":atlas/flowerCardIcon");
            });
        }
    };
    Tile2StarBaseCardTrait.prototype.onTile2BfWinBhv_start = function (e, t) {
        var r, a;
        try {
            var n = UserModel_1.default.getInstance(), o = n.getMainGameType();
            if (this._currentGameType !== o) {
                t();
                return;
            }
            var l = n.getMainGameData(), i = (null == l ? void 0 : l.getLevelId()) || 0;
            if (i < this.getStartLevel()) {
                t();
                return;
            }
            var s = null === (a = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === a ? void 0 : a.gameCtr;
            if (!s || "function" != typeof (null == s ? void 0 : s.loadRes)) {
                t();
                return;
            }
            this.prepareNextLevelAndLoad(s, i);
            this._cachedIsFeatureEnabled = true;
        }
        catch (e) { }
        t();
    };
    Tile2StarBaseCardTrait.prototype.prepareNextLevelAndLoad = function (e, t) {
        var r, a, n, o, i;
        if ((null === (i = this.localData.preparedNext) || void 0 === i ? void 0 : i.forLevelId) !== t) {
            this.localData.preparedNext = this.drawForLevel(t);
            this.saveLocalData();
        }
        this.handleNewLevel(t);
        var s = new Set();
        try {
            for (var u = __values(this.localData.currentEntries), c = u.next(); !c.done; c = u.next()) {
                var d = c.value;
                s.add(d.bundle);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                c && !c.done && (a = u.return) && a.call(u);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var h = this.localData.preparedAfterNext;
        if (h)
            try {
                for (var f = __values(h.entries), p = f.next(); !p.done; p = f.next()) {
                    d = p.value;
                    s.add(d.bundle);
                }
            }
            catch (e) {
                n = {
                    error: e
                };
            }
            finally {
                try {
                    p && !p.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (n)
                        throw n.error;
                }
            }
        s.forEach(function (t) {
            e.loadRes("atlas/flowerCardIcon", cc.SpriteAtlas, t).catch(function () { });
        });
    };
    Tile2StarBaseCardTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        if (this._cachedIsFeatureEnabled && 0 !== this.localData.currentEntries.length) {
            var r = e.args[0];
            if (r) {
                var a = this.findEntryForResName(r);
                if (a) {
                    var n = this.mapToFlowerCardName(r);
                    if (n) {
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            returnVal: {
                                path: "atlas/flowerCardIcon/" + n,
                                bundleName: a.bundle,
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
            else
                t();
        }
        else
            t();
    };
    Tile2StarBaseCardTrait.prototype.findEntryForResName = function (e) {
        var t = e.charAt(0);
        return v.includes(t) && this.localData.currentEntries.find(function (e) {
            return e.suit === t;
        }) || null;
    };
    Tile2StarBaseCardTrait.prototype.mapToFlowerCardName = function (e) {
        var t = /[Wbt](\d)/.exec(e);
        if (!t)
            return null;
        var r = Number.parseInt(t[1]);
        return y[r] || null;
    };
    Tile2StarBaseCardTrait.prototype.drawForLevel = function (e) {
        var t, a, n = this.collectExcludeThemeIds(), o = this._suitGroupCount, i = this.drawRandomSuits(o), u = [], c = [];
        try {
            for (var d = __values(i), h = d.next(); !h.done; h = d.next()) {
                var f = h.value, p = this.drawRandomTheme(__spreadArrays(n, c));
                if (p) {
                    u.push({
                        suit: f,
                        themeId: p.name,
                        bundle: p.bundle
                    });
                    c.push(p.name);
                }
                else {
                    console.error("[" + Tile2StarBaseCardTrait_1.traitKey + "] 可选主题不足 (targetLevel=" + e + ")");
                    var v = this.drawRandomThemeFallback(c);
                    if (v) {
                        u.push({
                            suit: f,
                            themeId: v.name,
                            bundle: v.bundle
                        });
                        c.push(v.name);
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
                h && !h.done && (a = d.return) && a.call(d);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            forLevelId: e,
            entries: u,
            themeIds: c
        };
    };
    Tile2StarBaseCardTrait.prototype.collectExcludeThemeIds = function () {
        var e, t, r, a, n = [];
        try {
            for (var o = __values(this.localData.recentDraws), i = o.next(); !i.done; i = o.next()) {
                var u = i.value;
                n.push.apply(n, __spreadArrays(u.themeIds));
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        try {
            for (var c = __values(this.localData.currentEntries), d = c.next(); !d.done; d = c.next()) {
                var h = d.value;
                n.push(h.themeId);
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (a = c.return) && a.call(c);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var f = this.localData.preparedNext;
        f && n.push.apply(n, __spreadArrays(f.themeIds));
        var p = this.localData.preparedAfterNext;
        p && n.push.apply(n, __spreadArrays(p.themeIds));
        return Array.from(new Set(n));
    };
    Tile2StarBaseCardTrait.prototype.drawRandomSuits = function (e) {
        for (var t = __spreadArrays(v), r = [], a = 0; a < e && t.length > 0; a++) {
            var n = Math.floor(Math.random() * t.length);
            r.push(t[n]);
            t.splice(n, 1);
        }
        return r;
    };
    Tile2StarBaseCardTrait.prototype.drawRandomTheme = function (e) {
        var t = new Set(e), r = this._starThemesList.filter(function (e) {
            return !t.has(e.name) && (!!e.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e.bundle));
        });
        return 0 === r.length ? null : r[Math.floor(Math.random() * r.length)];
    };
    Tile2StarBaseCardTrait.prototype.drawRandomThemeFallback = function (e) {
        var t = new Set(e), r = this._starThemesList.filter(function (e) {
            return !t.has(e.name) && (!!e.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e.bundle));
        });
        if (0 === r.length) {
            var a = this._starThemesList.filter(function (e) {
                return !!e.isLocal || LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e.bundle);
            });
            return 0 === a.length ? null : a[Math.floor(Math.random() * a.length)];
        }
        return r[Math.floor(Math.random() * r.length)];
    };
    Tile2StarBaseCardTrait.prototype.pushRecentDraws = function (e, t) {
        this.localData.recentDraws.push({
            levelId: e,
            themeIds: t
        });
        for (; this.localData.recentDraws.length > 5;)
            this.localData.recentDraws.shift();
    };
    Tile2StarBaseCardTrait.prototype.saveLocalData = function () {
        this.localData.currentEntries = this.localData.currentEntries;
        this.localData.handledLevelId = this.localData.handledLevelId;
        this.localData.recentDraws = this.localData.recentDraws;
        this.localData.preparedNext = this.localData.preparedNext;
        this.localData.preparedAfterNext = this.localData.preparedAfterNext;
    };
    var Tile2StarBaseCardTrait_1;
    Tile2StarBaseCardTrait.traitKey = "Tile2StarBaseCard";
    __decorate([
        mj.traitEvent("Tile2Star_drawLevel")
    ], Tile2StarBaseCardTrait.prototype, "drawForLevel", null);
    Tile2StarBaseCardTrait = Tile2StarBaseCardTrait_1 = __decorate([
        mj.trait,
        mj.class("Tile2StarBaseCardTrait")
    ], Tile2StarBaseCardTrait);
    return Tile2StarBaseCardTrait;
}(Trait_1.default));
exports.default = Tile2StarBaseCardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhckJhc2VDYXJkL1NjcmlwdHMvVGlsZTJTdGFyQmFzZUNhcmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLHFHQUFnSTtBQUNoSSxpR0FBZ0c7QUFDaEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLElBQUksQ0FBQyxHQUFHO0lBQ04sQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsT0FBTztJQUNWLENBQUMsRUFBRSxNQUFNO0lBQ1QsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsU0FBUztJQUNaLENBQUMsRUFBRSxNQUFNO0lBQ1QsQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsT0FBTztJQUNWLENBQUMsRUFBRSxRQUFRO0NBQ1osQ0FBQztBQUdGO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBMlhDO1FBMVhDLHNCQUFnQixHQUFHLDBCQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3JDLDZCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNoQyxpQkFBVyxHQUFHLENBQUMsQ0FBQzs7SUF3WGxCLENBQUM7K0JBM1hvQixzQkFBc0I7SUFLekMsc0JBQUksbURBQWU7YUFBbkI7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxD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V0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BGLENBQUM7SUFDRCw4Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RFLENBQUM7O0lBdFhNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFnUHRDO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs4REFpRHBDO0lBcFNrQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBMlgxQztJQUFELDZCQUFDO0NBM1hELEFBMlhDLENBM1htRCxlQUFLLEdBMlh4RDtrQkEzWG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIsIHsgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvTG93UHJpb3JpdHlCdW5kbGVMb2FkZXInO1xuaW1wb3J0IHsgRmxvd2VyU3RhckNvbmZpZ1V0aWwgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9GbG93ZXJTdGFyQ29uZmlnVXRpbCc7XG52YXIgdiA9IFtcIldcIiwgXCJiXCIsIFwidFwiXTtcbnZhciB5ID0ge1xuICAxOiBcIlpfZG9uZ1wiLFxuICAyOiBcIlpfbmFuXCIsXG4gIDM6IFwiWl94aVwiLFxuICA0OiBcIlpfYmVpXCIsXG4gIDU6IFwiWl96aG9uZ1wiLFxuICA2OiBcIlpfZmFcIixcbiAgNzogXCJaX2JhaVwiLFxuICA4OiBcIkhfbWVpXCIsXG4gIDk6IFwiSl9jaHVuXCJcbn07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyU3RhckJhc2VDYXJkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyU3RhckJhc2VDYXJkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jdXJyZW50R2FtZVR5cGUgPSBNakdhbWVUeXBlLk5vcm1hbDtcbiAgX2NhY2hlZElzRmVhdHVyZUVuYWJsZWQgPSBmYWxzZTtcbiAgX3N0YXJ0TGV2ZWwgPSAyO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyU3RhckJhc2VDYXJkXCI7XG4gIGdldCBfc3VpdEdyb3VwQ291bnQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc3VpdEdyb3VwQ291bnQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAxO1xuICB9XG4gIGdldCBfc3RhclRoZW1lc0xpc3QoKSB7XG4gICAgcmV0dXJuIEZsb3dlclN0YXJDb25maWdVdGlsLmdldFN0YXJMaXN0KCk7XG4gIH1cbiAgZ2V0U3RhcnRMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRMZXZlbDtcbiAgfVxuICBnZXRTdWl0R3JvdXBDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VpdEdyb3VwQ291bnQ7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3N0YXJ0TGV2ZWwgPSBudWxsICE9PSAociA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnN0YXJ0TGV2ZWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAyO1xuICAgIHRoaXMuZW5zdXJlTG9jYWxEYXRhRGVmYXVsdHMoKTtcbiAgICB0aGlzLmFkZFJlbW90ZUJ1bmRsZXNUb0xvYWRlcigpO1xuICB9XG4gIGVuc3VyZUxvY2FsRGF0YURlZmF1bHRzKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRFbnRyaWVzIHx8ICh0aGlzLmxvY2FsRGF0YS5jdXJyZW50RW50cmllcyA9IFtdKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5oYW5kbGVkTGV2ZWxJZCB8fCAodGhpcy5sb2NhbERhdGEuaGFuZGxlZExldmVsSWQgPSAwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZWNlbnREcmF3cyB8fCAodGhpcy5sb2NhbERhdGEucmVjZW50RHJhd3MgPSBbXSk7XG4gICAgdGhpcy5sb2NhbERhdGEucHJlcGFyZWROZXh0IHx8ICh0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZE5leHQgPSBudWxsKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZEFmdGVyTmV4dCB8fCAodGhpcy5sb2NhbERhdGEucHJlcGFyZWRBZnRlck5leHQgPSBudWxsKTtcbiAgICB0aGlzLnNhdmVMb2NhbERhdGEoKTtcbiAgfVxuICBhZGRSZW1vdGVCdW5kbGVzVG9Mb2FkZXIoKSB7XG4gICAgdmFyIGUgPSBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLFxuICAgICAgdCA9IHRoaXMuX3N0YXJUaGVtZXNMaXN0LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIWUuaXNMb2NhbDtcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5idW5kbGU7XG4gICAgICB9KTtcbiAgICBBcnJheS5mcm9tKG5ldyBTZXQodCkpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBlLmFkZFRhc2sodCwgRUxvd1ByaW9yaXR5QnVuZGxlUHJpb3JpdHkuRGVmYXVsdENhcmRYaW5neXVuSHVhUGFpKTtcbiAgICB9KTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9pbml0UmVzKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGEgPSBlLmlucztcbiAgICAgIHRoaXMuX2N1cnJlbnRHYW1lVHlwZSA9IGEuZ2FtZVR5cGU7XG4gICAgICB2YXIgbiA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBvID0gbi5nZXRNYWluR2FtZVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50R2FtZVR5cGUgIT09IG8gfHwgdGhpcy5fY3VycmVudEdhbWVUeXBlICE9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlZElzRmVhdHVyZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbCA9IG4uZ2V0TWFpbkdhbWVEYXRhKCksXG4gICAgICAgIGkgPSAobnVsbCA9PSBsID8gdm9pZCAwIDogbC5nZXRMZXZlbElkKCkpIHx8IDAsXG4gICAgICAgIHMgPSAobnVsbCA9PSBsID8gdm9pZCAwIDogbC5nZXRSZXBsYXlDb3VudCgpKSB8fCAwO1xuICAgICAgaWYgKGkgPCB0aGlzLmdldFN0YXJ0TGV2ZWwoKSkge1xuICAgICAgICB0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2FjaGVkSXNGZWF0dXJlRW5hYmxlZCA9IHRydWU7XG4gICAgICAwID09PSBzICYmIHRoaXMuaGFuZGxlTmV3TGV2ZWwoaSk7XG4gICAgICB0aGlzLmRvUHJlbG9hZEZvckluaXRSZXMoYSwgaSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRpbGUyU3RhckJhc2VDYXJkVHJhaXQudHJhaXRLZXkgKyBcIl0gaW5pdFJlcyBlcnJvcjogXCIgKyBlKTtcbiAgICB9XG4gICAgdCgpO1xuICB9XG4gIGhhbmRsZU5ld0xldmVsKGUpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuaGFuZGxlZExldmVsSWQgIT09IGUpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEucHJlcGFyZWROZXh0O1xuICAgICAgaWYgKChudWxsID09IHQgPyB2b2lkIDAgOiB0LmZvckxldmVsSWQpID09PSBlKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1cnJlbnRFbnRyaWVzID0gdC5lbnRyaWVzO1xuICAgICAgICB0aGlzLnB1c2hSZWNlbnREcmF3cyhlLCB0LnRoZW1lSWRzKTtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZEFmdGVyTmV4dDtcbiAgICAgICAgaWYgKChudWxsID09IHIgPyB2b2lkIDAgOiByLmZvckxldmVsSWQpID09PSBlICsgMSkge1xuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLnByZXBhcmVkTmV4dCA9IHI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sb2NhbERhdGEucHJlcGFyZWROZXh0ID0gdGhpcy5kcmF3Rm9yTGV2ZWwoZSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnByZXBhcmVkQWZ0ZXJOZXh0ID0gdGhpcy5kcmF3Rm9yTGV2ZWwoZSArIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmRyYXdGb3JMZXZlbChlKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEuY3VycmVudEVudHJpZXMgPSBhLmVudHJpZXM7XG4gICAgICAgIHRoaXMucHVzaFJlY2VudERyYXdzKGUsIGEudGhlbWVJZHMpO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZE5leHQgPSB0aGlzLmRyYXdGb3JMZXZlbChlICsgMSk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnByZXBhcmVkQWZ0ZXJOZXh0ID0gdGhpcy5kcmF3Rm9yTGV2ZWwoZSArIDIpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbERhdGEuaGFuZGxlZExldmVsSWQgPSBlO1xuICAgICAgdGhpcy5zYXZlTG9jYWxEYXRhKCk7XG4gICAgfVxuICB9XG4gIGRvUHJlbG9hZEZvckluaXRSZXMoZSwgdCkge1xuICAgIHZhciByLCBhLCBuLCBvO1xuICAgIGlmIChlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5hZGRQcmVsb2FkUmVzKSB7XG4gICAgICB2YXIgaSA9IG5ldyBTZXQoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyh0aGlzLmxvY2FsRGF0YS5jdXJyZW50RW50cmllcyksIHUgPSBzLm5leHQoKTsgIXUuZG9uZTsgdSA9IHMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGMgPSB1LnZhbHVlO1xuICAgICAgICAgIGkuYWRkKGMuYnVuZGxlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHUgJiYgIXUuZG9uZSAmJiAoYSA9IHMucmV0dXJuKSAmJiBhLmNhbGwocyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBkID0gdGhpcy5sb2NhbERhdGEucHJlcGFyZWROZXh0O1xuICAgICAgaWYgKChudWxsID09IGQgPyB2b2lkIDAgOiBkLmZvckxldmVsSWQpID09PSB0ICsgMSkgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKGQuZW50cmllcyksIGYgPSBoLm5leHQoKTsgIWYuZG9uZTsgZiA9IGgubmV4dCgpKSB7XG4gICAgICAgICAgYyA9IGYudmFsdWU7XG4gICAgICAgICAgaS5hZGQoYy5idW5kbGUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG4gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gaC5yZXR1cm4pICYmIG8uY2FsbChoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUuYWRkUHJlbG9hZFJlcyhcIlNwcml0ZUF0bGFzXCIsIHQgKyBcIjphdGxhcy9mbG93ZXJDYXJkSWNvblwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBvblRpbGUyQmZXaW5CaHZfc3RhcnQoZSwgdCkge1xuICAgIHZhciByLCBhO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgICBvID0gbi5nZXRNYWluR2FtZVR5cGUoKTtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50R2FtZVR5cGUgIT09IG8pIHtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbCA9IG4uZ2V0TWFpbkdhbWVEYXRhKCksXG4gICAgICAgIGkgPSAobnVsbCA9PSBsID8gdm9pZCAwIDogbC5nZXRMZXZlbElkKCkpIHx8IDA7XG4gICAgICBpZiAoaSA8IHRoaXMuZ2V0U3RhcnRMZXZlbCgpKSB7XG4gICAgICAgIHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHMgPSBudWxsID09PSAoYSA9IG51bGwgPT09IChyID0gZS5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY29udGV4dCkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nYW1lQ3RyO1xuICAgICAgaWYgKCFzIHx8IFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgKG51bGwgPT0gcyA/IHZvaWQgMCA6IHMubG9hZFJlcykpIHtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBhcmVOZXh0TGV2ZWxBbmRMb2FkKHMsIGkpO1xuICAgICAgdGhpcy5fY2FjaGVkSXNGZWF0dXJlRW5hYmxlZCA9IHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0KCk7XG4gIH1cbiAgcHJlcGFyZU5leHRMZXZlbEFuZExvYWQoZSwgdCkge1xuICAgIHZhciByLCBhLCBuLCBvLCBpO1xuICAgIGlmICgobnVsbCA9PT0gKGkgPSB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZE5leHQpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZm9yTGV2ZWxJZCkgIT09IHQpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnByZXBhcmVkTmV4dCA9IHRoaXMuZHJhd0ZvckxldmVsKHQpO1xuICAgICAgdGhpcy5zYXZlTG9jYWxEYXRhKCk7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlTmV3TGV2ZWwodCk7XG4gICAgdmFyIHMgPSBuZXcgU2V0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIHUgPSBfX3ZhbHVlcyh0aGlzLmxvY2FsRGF0YS5jdXJyZW50RW50cmllcyksIGMgPSB1Lm5leHQoKTsgIWMuZG9uZTsgYyA9IHUubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gYy52YWx1ZTtcbiAgICAgICAgcy5hZGQoZC5idW5kbGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHIgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBjICYmICFjLmRvbmUgJiYgKGEgPSB1LnJldHVybikgJiYgYS5jYWxsKHUpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBoID0gdGhpcy5sb2NhbERhdGEucHJlcGFyZWRBZnRlck5leHQ7XG4gICAgaWYgKGgpIHRyeSB7XG4gICAgICBmb3IgKHZhciBmID0gX192YWx1ZXMoaC5lbnRyaWVzKSwgcCA9IGYubmV4dCgpOyAhcC5kb25lOyBwID0gZi5uZXh0KCkpIHtcbiAgICAgICAgZCA9IHAudmFsdWU7XG4gICAgICAgIHMuYWRkKGQuYnVuZGxlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gZi5yZXR1cm4pICYmIG8uY2FsbChmKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICBzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGUubG9hZFJlcyhcImF0bGFzL2Zsb3dlckNhcmRJY29uXCIsIGNjLlNwcml0ZUF0bGFzLCB0KS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUoZSwgdCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkICYmIDAgIT09IHRoaXMubG9jYWxEYXRhLmN1cnJlbnRFbnRyaWVzLmxlbmd0aCkge1xuICAgICAgdmFyIHIgPSBlLmFyZ3NbMF07XG4gICAgICBpZiAocikge1xuICAgICAgICB2YXIgYSA9IHRoaXMuZmluZEVudHJ5Rm9yUmVzTmFtZShyKTtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMubWFwVG9GbG93ZXJDYXJkTmFtZShyKTtcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgdCh7XG4gICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICAgICAgcGF0aDogXCJhdGxhcy9mbG93ZXJDYXJkSWNvbi9cIiArIG4sXG4gICAgICAgICAgICAgICAgYnVuZGxlTmFtZTogYS5idW5kbGUsXG4gICAgICAgICAgICAgICAgZnJvbUF0bGFzOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGZpbmRFbnRyeUZvclJlc05hbWUoZSkge1xuICAgIHZhciB0ID0gZS5jaGFyQXQoMCk7XG4gICAgcmV0dXJuIHYuaW5jbHVkZXModCkgJiYgdGhpcy5sb2NhbERhdGEuY3VycmVudEVudHJpZXMuZmluZChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuc3VpdCA9PT0gdDtcbiAgICB9KSB8fCBudWxsO1xuICB9XG4gIG1hcFRvRmxvd2VyQ2FyZE5hbWUoZSkge1xuICAgIHZhciB0ID0gL1tXYnRdKFxcZCkvLmV4ZWMoZSk7XG4gICAgaWYgKCF0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgciA9IE51bWJlci5wYXJzZUludCh0WzFdKTtcbiAgICByZXR1cm4geVtyXSB8fCBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJTdGFyX2RyYXdMZXZlbFwiKVxuICBkcmF3Rm9yTGV2ZWwoZSkge1xuICAgIHZhciB0LFxuICAgICAgYSxcbiAgICAgIG4gPSB0aGlzLmNvbGxlY3RFeGNsdWRlVGhlbWVJZHMoKSxcbiAgICAgIG8gPSB0aGlzLl9zdWl0R3JvdXBDb3VudCxcbiAgICAgIGkgPSB0aGlzLmRyYXdSYW5kb21TdWl0cyhvKSxcbiAgICAgIHUgPSBbXSxcbiAgICAgIGMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKGkpLCBoID0gZC5uZXh0KCk7ICFoLmRvbmU7IGggPSBkLm5leHQoKSkge1xuICAgICAgICB2YXIgZiA9IGgudmFsdWUsXG4gICAgICAgICAgcCA9IHRoaXMuZHJhd1JhbmRvbVRoZW1lKFsuLi5uLCAuLi5jXSk7XG4gICAgICAgIGlmIChwKSB7XG4gICAgICAgICAgdS5wdXNoKHtcbiAgICAgICAgICAgIHN1aXQ6IGYsXG4gICAgICAgICAgICB0aGVtZUlkOiBwLm5hbWUsXG4gICAgICAgICAgICBidW5kbGU6IHAuYnVuZGxlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYy5wdXNoKHAubmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFRpbGUyU3RhckJhc2VDYXJkVHJhaXQudHJhaXRLZXkgKyBcIl0g5Y+v6YCJ5Li76aKY5LiN6LazICh0YXJnZXRMZXZlbD1cIiArIGUgKyBcIilcIik7XG4gICAgICAgICAgdmFyIHYgPSB0aGlzLmRyYXdSYW5kb21UaGVtZUZhbGxiYWNrKGMpO1xuICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICB1LnB1c2goe1xuICAgICAgICAgICAgICBzdWl0OiBmLFxuICAgICAgICAgICAgICB0aGVtZUlkOiB2Lm5hbWUsXG4gICAgICAgICAgICAgIGJ1bmRsZTogdi5idW5kbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYy5wdXNoKHYubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGggJiYgIWguZG9uZSAmJiAoYSA9IGQucmV0dXJuKSAmJiBhLmNhbGwoZCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvckxldmVsSWQ6IGUsXG4gICAgICBlbnRyaWVzOiB1LFxuICAgICAgdGhlbWVJZHM6IGNcbiAgICB9O1xuICB9XG4gIGNvbGxlY3RFeGNsdWRlVGhlbWVJZHMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgcixcbiAgICAgIGEsXG4gICAgICBuID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLmxvY2FsRGF0YS5yZWNlbnREcmF3cyksIGkgPSBvLm5leHQoKTsgIWkuZG9uZTsgaSA9IG8ubmV4dCgpKSB7XG4gICAgICAgIHZhciB1ID0gaS52YWx1ZTtcbiAgICAgICAgbi5wdXNoLmFwcGx5KG4sIFsuLi51LnRoZW1lSWRzXSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgJiYgIWkuZG9uZSAmJiAodCA9IG8ucmV0dXJuKSAmJiB0LmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyh0aGlzLmxvY2FsRGF0YS5jdXJyZW50RW50cmllcyksIGQgPSBjLm5leHQoKTsgIWQuZG9uZTsgZCA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBoID0gZC52YWx1ZTtcbiAgICAgICAgbi5wdXNoKGgudGhlbWVJZCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgciA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGQgJiYgIWQuZG9uZSAmJiAoYSA9IGMucmV0dXJuKSAmJiBhLmNhbGwoYyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAocikgdGhyb3cgci5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGYgPSB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZE5leHQ7XG4gICAgZiAmJiBuLnB1c2guYXBwbHkobiwgWy4uLmYudGhlbWVJZHNdKTtcbiAgICB2YXIgcCA9IHRoaXMubG9jYWxEYXRhLnByZXBhcmVkQWZ0ZXJOZXh0O1xuICAgIHAgJiYgbi5wdXNoLmFwcGx5KG4sIFsuLi5wLnRoZW1lSWRzXSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChuKSk7XG4gIH1cbiAgZHJhd1JhbmRvbVN1aXRzKGUpIHtcbiAgICBmb3IgKHZhciB0ID0gWy4uLnZdLCByID0gW10sIGEgPSAwOyBhIDwgZSAmJiB0Lmxlbmd0aCA+IDA7IGErKykge1xuICAgICAgdmFyIG4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0Lmxlbmd0aCk7XG4gICAgICByLnB1c2godFtuXSk7XG4gICAgICB0LnNwbGljZShuLCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZHJhd1JhbmRvbVRoZW1lKGUpIHtcbiAgICB2YXIgdCA9IG5ldyBTZXQoZSksXG4gICAgICByID0gdGhpcy5fc3RhclRoZW1lc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhdC5oYXMoZS5uYW1lKSAmJiAoISFlLmlzTG9jYWwgfHwgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5pc0J1bmRsZVByZUxvYWRlZChlLmJ1bmRsZSkpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIDAgPT09IHIubGVuZ3RoID8gbnVsbCA6IHJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogci5sZW5ndGgpXTtcbiAgfVxuICBkcmF3UmFuZG9tVGhlbWVGYWxsYmFjayhlKSB7XG4gICAgdmFyIHQgPSBuZXcgU2V0KGUpLFxuICAgICAgciA9IHRoaXMuX3N0YXJUaGVtZXNMaXN0LmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gIXQuaGFzKGUubmFtZSkgJiYgKCEhZS5pc0xvY2FsIHx8IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQoZS5idW5kbGUpKTtcbiAgICAgIH0pO1xuICAgIGlmICgwID09PSByLmxlbmd0aCkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9zdGFyVGhlbWVzTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuICEhZS5pc0xvY2FsIHx8IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQoZS5idW5kbGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gMCA9PT0gYS5sZW5ndGggPyBudWxsIDogYVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByLmxlbmd0aCldO1xuICB9XG4gIHB1c2hSZWNlbnREcmF3cyhlLCB0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmVjZW50RHJhd3MucHVzaCh7XG4gICAgICBsZXZlbElkOiBlLFxuICAgICAgdGhlbWVJZHM6IHRcbiAgICB9KTtcbiAgICBmb3IgKDsgdGhpcy5sb2NhbERhdGEucmVjZW50RHJhd3MubGVuZ3RoID4gNTspIHRoaXMubG9jYWxEYXRhLnJlY2VudERyYXdzLnNoaWZ0KCk7XG4gIH1cbiAgc2F2ZUxvY2FsRGF0YSgpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5jdXJyZW50RW50cmllcyA9IHRoaXMubG9jYWxEYXRhLmN1cnJlbnRFbnRyaWVzO1xuICAgIHRoaXMubG9jYWxEYXRhLmhhbmRsZWRMZXZlbElkID0gdGhpcy5sb2NhbERhdGEuaGFuZGxlZExldmVsSWQ7XG4gICAgdGhpcy5sb2NhbERhdGEucmVjZW50RHJhd3MgPSB0aGlzLmxvY2FsRGF0YS5yZWNlbnREcmF3cztcbiAgICB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZE5leHQgPSB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZE5leHQ7XG4gICAgdGhpcy5sb2NhbERhdGEucHJlcGFyZWRBZnRlck5leHQgPSB0aGlzLmxvY2FsRGF0YS5wcmVwYXJlZEFmdGVyTmV4dDtcbiAgfVxufSJdfQ==