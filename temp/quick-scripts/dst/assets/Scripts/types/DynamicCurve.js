
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/types/DynamicCurve.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e75c2MWlthJnbLP0SiPleHN', 'DynamicCurve');
// Scripts/types/DynamicCurve.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var SingletonFactory_1 = require("../framework/utils/SingletonFactory");
var Common_1 = require("./Common");
var LevelModel_1 = require("../core/dynamicCurve/LevelModel");
var ResManager_1 = require("../framework/manager/ResManager");
var ExtractNormal_1 = require("../core/dynamicCurve/models/ExtractNormal");
var ExtractDaily_1 = require("../core/dynamicCurve/models/ExtractDaily");
var ExtractTravel_1 = require("../core/dynamicCurve/models/ExtractTravel");
var LayerCapability_1 = require("../core/dynamicCurve/LayerCapability");
var LayerLevelValue_1 = require("../core/dynamicCurve/LayerLevelValue");
var LayerMapping_1 = require("../core/dynamicCurve/LayerMapping");
var LayerDDA_1 = require("../core/dynamicCurve/LayerDDA");
var DynamicCurve = /** @class */ (function () {
    function DynamicCurve() {
        this.initialized = false;
        this.dataCache = new Map();
        this.curLevelData = null;
        this.levelDataCache = new Map();
    }
    Object.defineProperty(DynamicCurve, "instance", {
        get: function () {
            return SingletonFactory_1.SingletonFactory.getInstance(this);
        },
        enumerable: false,
        configurable: true
    });
    DynamicCurve.prototype.isEnabled = function () {
        return false;
    };
    DynamicCurve.prototype.isModeSupport = function (e) {
        return [GameTypeEnums_1.MjGameType.Normal].includes(e);
    };
    DynamicCurve.prototype.supportMode = function (e) {
        return this.isEnabled() && this.isModeSupport(e);
    };
    DynamicCurve.prototype.setCurLevelData = function (e) {
        this.curLevelData = Object.assign({}, e);
    };
    DynamicCurve.prototype.init = function () {
        if (this.isEnabled() && !this.initialized) {
            this.levelModel = LevelModel_1.LevelModel.getInstance();
            this.capabilityLayer = new LayerCapability_1.LayerCapability();
            this.levelValueLayer = new LayerLevelValue_1.LayerLevelValue();
            this.mappingLayer = new LayerMapping_1.LayerMapping();
            this.ddaLayer = new LayerDDA_1.LayerDDA();
            this.setCapabilityStrategy({
                name: "Capability1",
                param: {
                    x: -0.166
                }
            });
            this.setLevelValueStrategy({
                name: "Level1",
                param: {
                    x: "predictTime"
                }
            });
            this.setMappingStrategy([{
                    name: "Mapping1"
                }]);
            this.setDDAStrategy();
            this.initialized = true;
        }
    };
    DynamicCurve.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.NORMAL; }
    };
    DynamicCurve.prototype.setCapabilityStrategy = function (e) {
        this.capabilityLayer.setStrategy(e);
    };
    DynamicCurve.prototype.setLevelValueStrategy = function (e) {
        this.levelValueLayer.setStrategy(e);
    };
    DynamicCurve.prototype.setMappingStrategy = function (e) {
        this.mappingLayer.setStrategies(e);
    };
    DynamicCurve.prototype.setDDAStrategy = function () {
        this.ddaLayer.addStrategy({
            name: "DDA0",
            param: {
                x: 100
            }
        });
    };
    DynamicCurve.prototype.updateCapability = function (e) {
        if (this.initialized) {
            var t = this.getExtractModel(e.gameType);
            if (t) {
                this.recordGameEnd(t, e);
                this.capabilityLayer.updateCapability(Object.assign(Object.assign({}, e), {
                    defaultCapability: this.getDefaultCapability(e.gameType),
                    extractModel: t
                }));
                e.win || t.gameReplay();
            }
        }
    };
    DynamicCurve.prototype.gameStart = function (e) {
        if (this.initialized) {
            var t = this.getExtractModel(e.gameType);
            if (t) {
                var o = null, n = true;
                if ("dynamic" !== e.fileName) {
                    o = {
                        index: isNaN(e.levelIndex) ? -1 : e.levelIndex,
                        content: e.levelStr,
                        rateSuccess: 1,
                        tileNum: 0,
                        predictTime: 0
                    };
                    n = false;
                }
                else
                    o = this.curLevelData;
                o && this.recordGameStart(t, {
                    levelId: e.levelId,
                    gameType: e.gameType,
                    levelData: o,
                    isDynamic: n
                });
            }
        }
    };
    DynamicCurve.prototype.resetCapabilityCache = function () {
        var e, t, o = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge];
        try {
            for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
                var a = i.value, s = this.getExtractModel(a);
                if (s) {
                    var c = this.getDefaultCapability(a);
                    s.resetCapabilityData(c);
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
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    DynamicCurve.prototype.useShuffle = function (e) {
        if (this.supportMode(e)) {
            var t = this.getExtractModel(e);
            t && t.useShuffle();
        }
    };
    DynamicCurve.prototype.getExtractInfo = function (e) {
        var t, o, n, i, r, a, l, s, u = this.getExtractModel(e);
        if (!u)
            return {
                ok: false,
                capability: 0,
                predictTime: 0,
                levelValue: 0,
                rateSuccess: 0,
                levelIndex: -1
            };
        var p = this.getDefaultCapability(e), f = this.capabilityLayer.getCapability({
            gameType: e,
            extractModel: u,
            defaultCapability: p
        }), d = u.getLastLevelRecord(), h = 0, y = 0, m = 0, v = -1;
        if (d.length > 0 && d[0].isDynamic) {
            h = null !== (o = null === (t = d[0].levelData) || void 0 === t ? void 0 : t.predictTime) && void 0 !== o ? o : 0;
            y = null !== (i = null === (n = d[0].levelData) || void 0 === n ? void 0 : n[Common_1.LevelValueKey]) && void 0 !== i ? i : 0;
            m = null !== (a = null === (r = d[0].levelData) || void 0 === r ? void 0 : r.rateSuccess) && void 0 !== a ? a : 0;
            v = null !== (s = null === (l = d[0].levelData) || void 0 === l ? void 0 : l.index) && void 0 !== s ? s : -1;
        }
        return {
            ok: d.length > 0 && d[0].isDynamic,
            capability: f,
            predictTime: h,
            levelValue: y,
            rateSuccess: m,
            levelIndex: v
        };
    };
    DynamicCurve.prototype.recordGameEnd = function (e, t) {
        e.gameEnd(t);
    };
    DynamicCurve.prototype.recordGameStart = function (e, t) {
        e.gameStart(t);
    };
    DynamicCurve.prototype.getContentData = function (e) {
        var t = this;
        return new Promise(function (o) {
            var n = e.gameType || GameTypeEnums_1.MjGameType.Normal, i = t.getLevelId(e);
            t.extractLevel(n, i, function (e) {
                if (e) {
                    t.setCurLevelData(e);
                    var n = t.capabilityLayer.getStrategyName();
                    o([e.content, e[Common_1.LevelValueKey], e.index.toString(), "dynamic", n, true]);
                }
                else
                    o([null, 0, null, "dynamic", null, true]);
            });
        });
    };
    DynamicCurve.prototype.getRandomContent = function (e) {
        var t = this;
        return new Promise(function (o) {
            t.getLevelData(e, function (e) {
                if (e && 0 !== e.length) {
                    var n = e[Math.floor(Math.random() * e.length)];
                    t.setCurLevelData(n);
                    o([n.content, n[Common_1.LevelValueKey], n.index.toString(), "dynamic", "random", false]);
                }
                else
                    o(null);
            });
        });
    };
    DynamicCurve.prototype.getLevelId = function (e) {
        switch (e.gameType) {
            case GameTypeEnums_1.MjGameType.Normal:
                return e.levelID || 1;
            case GameTypeEnums_1.MjGameType.Travel:
                return e.levelIndex || 1;
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return e.challengeDate || 1;
        }
        return 1;
    };
    DynamicCurve.prototype.extractLevel = function (e, t, o) {
        var n = this;
        this.getLevelData(e, function (i) {
            if (i.length <= 0)
                o(null);
            else {
                var r, l = n.getExtractModel(e), s = n.capabilityLayer.getCapability({
                    gameType: e,
                    extractModel: l,
                    defaultCapability: n.getDefaultCapability(e)
                }), c = {
                    gameType: e,
                    extractModel: l,
                    levels: i,
                    capability: s
                }, u = __read(n.ddaLayer.filter(c), 2), p = u[0], f = u[1], d = c.levels;
                r = p ? f : n.mappingLayer.mapping({
                    levelId: t,
                    levels: d,
                    gameType: e,
                    extractModel: l,
                    capability: s
                });
                o(r || null);
            }
        });
    };
    DynamicCurve.prototype.getDefaultCapability = function () {
        return 0.5;
    };
    DynamicCurve.prototype.getLevelPath = function () {
        return [["config/boards/dynamic/sample", "mainRes"], ["sample", "r_board1"]];
    };
    DynamicCurve.prototype.preLoadLevelLibrary = function () {
        var e, t, o, n, i = this, s = [GameTypeEnums_1.MjGameType.Normal, GameTypeEnums_1.MjGameType.Travel, GameTypeEnums_1.MjGameType.DailyChallenge], c = new Set(), u = [];
        try {
            for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = this.getLevelPath(d);
                try {
                    for (var y = (o = void 0, __values(h)), m = y.next(); !m.done; m = y.next()) {
                        var v = __read(m.value, 2), g = v[0], _ = v[1];
                        if (g && !c.has(g + "_" + _)) {
                            c.add(g + "_" + _);
                            u.push([g, _]);
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
                        m && !m.done && (n = y.return) && n.call(y);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
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
                f && !f.done && (t = p.return) && t.call(p);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return Promise.all(u.map(function (e) {
            var t = __read(e, 2), o = t[0], n = t[1];
            return i.preLoadLevelLibraryByPath(o, n);
        }));
    };
    DynamicCurve.prototype.getDirPath = function (e) {
        var t = e.lastIndexOf("/");
        return -1 === t ? "" : e.substring(0, t);
    };
    DynamicCurve.prototype.preLoadLevelLibraryByPath = function (e, t) {
        var o = this;
        return new Promise(function (n) {
            var i = o.getDirPath(e);
            ResManager_1.resManager.preDownLoadByDir(i, function () { }, function (e, t) {
                n(!t);
            }, t);
        });
    };
    DynamicCurve.prototype.getLevelData = function (e, t) {
        var o = this;
        if (this.dataCache.has(e)) {
            t(this.dataCache.get(e));
        }
        else {
            this.loadLevelLibrary(e).then(function (n) {
                var i = n.every(function (e) {
                    return e.length > 0;
                }), r = n.reduce(function (e, t) {
                    return e.concat(t);
                }, []);
                o.overridePercentile(r, i);
                o.fillLevelValue(r, e);
                i && o.dataCache.set(e, r);
                t(r);
            }).catch(function () {
                t([]);
            });
        }
    };
    DynamicCurve.prototype.overridePercentile = function () { };
    DynamicCurve.prototype.getLevelDataCacheKey = function (e, t) {
        var o = CryptoJS.MD5(e + "_" + t).toString().toUpperCase();
        return Common_1.PrefixLevelLibrary + "_" + o;
    };
    DynamicCurve.prototype.loadLevelLibrary = function (e) {
        var t = this, o = this.getLevelPath(e);
        return Promise.all(o.map(function (o) {
            var n = __read(o, 2), i = n[0], r = n[1];
            return t.loadLevelLibraryByPath(e, i, r);
        }));
    };
    DynamicCurve.prototype.loadLevelLibraryByPath = function (e, t, o) {
        var n = this;
        return new Promise(function (e) {
            var i = n.getLevelDataCacheKey(t, o), r = n.levelDataCache.get(i) || [], a = false, l = function l(t) {
                if (!a) {
                    a = true;
                    e(t);
                }
            };
            if (r.length > 0)
                l(r);
            else {
                var s = setTimeout(function () {
                    clearTimeout(s);
                    s = -1;
                    l([]);
                }, 100);
                ResManager_1.resManager.loadRes(t, cc.JsonAsset, o).then(function (e) {
                    if (-1 !== s) {
                        clearTimeout(s);
                        s = -1;
                    }
                    if (e) {
                        if (e instanceof cc.JsonAsset) {
                            r = n.parseLevelData(e.json);
                            n.levelDataCache.set(i, r);
                            e.decRef();
                            l(r);
                        }
                        else
                            l([]);
                    }
                    else
                        l([]);
                }).catch(function () {
                    l([]);
                });
            }
        });
    };
    DynamicCurve.prototype.parseLevelData = function (e) {
        var t, o, n = e.header, i = e.rows, a = [];
        try {
            for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
                for (var c = s.value, u = {}, p = 0; p < n.length; p++)
                    u[n[p]] = c[p];
                a.push(u);
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
        return a;
    };
    DynamicCurve.prototype.fillLevelValue = function (e, t) {
        this.levelValueLayer.fillLevelValue({
            levels: e,
            gameType: t,
            levelModel: this.levelModel,
            extractModel: this.getExtractModel(t)
        });
    };
    DynamicCurve.prototype.getExtractModel = function (e) {
        switch (e) {
            case GameTypeEnums_1.MjGameType.Normal:
                return ExtractNormal_1.ExtractNormal.getInstance();
            case GameTypeEnums_1.MjGameType.Travel:
                return ExtractTravel_1.ExtractTravel.getInstance();
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return ExtractDaily_1.ExtractDaily.getInstance();
        }
        return null;
    };
    DynamicCurve.prototype.calculatePercentile = function (e, t) {
        var o = t.length, n = Array.from({
            length: o
        }, function (e, t) {
            return t;
        });
        n.sort(function (o, n) {
            return t[o][e] - t[n][e];
        });
        for (var i = new Map(), r = 0; r < o; r++) {
            var a = t[n[r]][e];
            i.has(a) || i.set(a, r);
        }
        var l = Common_1.getPercentileKey(e);
        for (r = 0; r < o; r++) {
            var s = i.has(t[r][e]) ? i.get(t[r][e]) : 0;
            t[r][l] = s / o;
        }
    };
    __decorate([
        mj.traitEvent("DCMgr_isEnabled")
    ], DynamicCurve.prototype, "isEnabled", null);
    __decorate([
        mj.traitEvent("DCMgr_isModeSupport")
    ], DynamicCurve.prototype, "isModeSupport", null);
    __decorate([
        mj.traitEvent("DCMgr_setCurLvData")
    ], DynamicCurve.prototype, "setCurLevelData", null);
    __decorate([
        mj.traitEvent("DCMgr_setCapSgy")
    ], DynamicCurve.prototype, "setCapabilityStrategy", null);
    __decorate([
        mj.traitEvent("DCMgr_setLvSgy")
    ], DynamicCurve.prototype, "setLevelValueStrategy", null);
    __decorate([
        mj.traitEvent("DCMgr_setMapSgy")
    ], DynamicCurve.prototype, "setMappingStrategy", null);
    __decorate([
        mj.traitEvent("DCMgr_setDDASgy")
    ], DynamicCurve.prototype, "setDDAStrategy", null);
    __decorate([
        mj.traitEvent("DCMgr_updateCap")
    ], DynamicCurve.prototype, "updateCapability", null);
    __decorate([
        mj.traitEvent("DCMgr_recordGameEnd")
    ], DynamicCurve.prototype, "recordGameEnd", null);
    __decorate([
        mj.traitEvent("DCMgr_recordGameStart")
    ], DynamicCurve.prototype, "recordGameStart", null);
    __decorate([
        mj.traitEvent("DCMgr_getCont")
    ], DynamicCurve.prototype, "getContentData", null);
    __decorate([
        mj.traitEvent("DCMgr_getLvPath")
    ], DynamicCurve.prototype, "getLevelPath", null);
    __decorate([
        mj.traitEvent("DCMgr_parseLvData")
    ], DynamicCurve.prototype, "parseLevelData", null);
    DynamicCurve = __decorate([
        mj.class("DynamicCurve")
    ], DynamicCurve);
    return DynamicCurve;
}());
exports.default = DynamicCurve;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3R5cGVzL0R5bmFtaWNDdXJ2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXNFO0FBQ3RFLHdFQUF1RTtBQUN2RSxtQ0FBeUY7QUFDekYsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCwyRUFBMEU7QUFDMUUseUVBQXdFO0FBQ3hFLDJFQUEwRTtBQUMxRSx3RUFBdUU7QUFDdkUsd0VBQXVFO0FBQ3ZFLGtFQUFpRTtBQUNqRSwwREFBeUQ7QUFFekQ7SUFBQTtRQUNFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQXFkN0IsQ0FBQztJQXBkQyxzQkFBVyx3QkFBUTthQUFuQjtZQUNFLE9BQU8sbUNBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsZ0NBQVMsR0FBVDtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsT0FBTyxDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCxrQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELDJCQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFT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QyxVQUFVLENBQUMsbUJBQW1CLENBQUM7c0RBd0JsQztJQWpia0IsWUFBWTtRQURoQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztPQUNKLFlBQVksQ0F5ZGhDO0lBQUQsbUJBQUM7Q0F6ZEQsQUF5ZEMsSUFBQTtrQkF6ZG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBTaW5nbGV0b25GYWN0b3J5IH0gZnJvbSAnLi4vZnJhbWV3b3JrL3V0aWxzL1NpbmdsZXRvbkZhY3RvcnknO1xuaW1wb3J0IHsgRURDQ29sb3IsIExldmVsVmFsdWVLZXksIFByZWZpeExldmVsTGlicmFyeSwgZ2V0UGVyY2VudGlsZUtleSB9IGZyb20gJy4vQ29tbW9uJztcbmltcG9ydCB7IExldmVsTW9kZWwgfSBmcm9tICcuLi9jb3JlL2R5bmFtaWNDdXJ2ZS9MZXZlbE1vZGVsJztcbmltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuLi9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbmltcG9ydCB7IEV4dHJhY3ROb3JtYWwgfSBmcm9tICcuLi9jb3JlL2R5bmFtaWNDdXJ2ZS9tb2RlbHMvRXh0cmFjdE5vcm1hbCc7XG5pbXBvcnQgeyBFeHRyYWN0RGFpbHkgfSBmcm9tICcuLi9jb3JlL2R5bmFtaWNDdXJ2ZS9tb2RlbHMvRXh0cmFjdERhaWx5JztcbmltcG9ydCB7IEV4dHJhY3RUcmF2ZWwgfSBmcm9tICcuLi9jb3JlL2R5bmFtaWNDdXJ2ZS9tb2RlbHMvRXh0cmFjdFRyYXZlbCc7XG5pbXBvcnQgeyBMYXllckNhcGFiaWxpdHkgfSBmcm9tICcuLi9jb3JlL2R5bmFtaWNDdXJ2ZS9MYXllckNhcGFiaWxpdHknO1xuaW1wb3J0IHsgTGF5ZXJMZXZlbFZhbHVlIH0gZnJvbSAnLi4vY29yZS9keW5hbWljQ3VydmUvTGF5ZXJMZXZlbFZhbHVlJztcbmltcG9ydCB7IExheWVyTWFwcGluZyB9IGZyb20gJy4uL2NvcmUvZHluYW1pY0N1cnZlL0xheWVyTWFwcGluZyc7XG5pbXBvcnQgeyBMYXllckREQSB9IGZyb20gJy4uL2NvcmUvZHluYW1pY0N1cnZlL0xheWVyRERBJztcbkBtai5jbGFzcyhcIkR5bmFtaWNDdXJ2ZVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0N1cnZlIHtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgZGF0YUNhY2hlID0gbmV3IE1hcCgpO1xuICBjdXJMZXZlbERhdGEgPSBudWxsO1xuICBsZXZlbERhdGFDYWNoZSA9IG5ldyBNYXAoKTtcbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gU2luZ2xldG9uRmFjdG9yeS5nZXRJbnN0YW5jZSh0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDTWdyX2lzRW5hYmxlZFwiKVxuICBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENNZ3JfaXNNb2RlU3VwcG9ydFwiKVxuICBpc01vZGVTdXBwb3J0KGUpIHtcbiAgICByZXR1cm4gW01qR2FtZVR5cGUuTm9ybWFsXS5pbmNsdWRlcyhlKTtcbiAgfVxuICBzdXBwb3J0TW9kZShlKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFbmFibGVkKCkgJiYgdGhpcy5pc01vZGVTdXBwb3J0KGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENNZ3Jfc2V0Q3VyTHZEYXRhXCIpXG4gIHNldEN1ckxldmVsRGF0YShlKSB7XG4gICAgdGhpcy5jdXJMZXZlbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBlKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmxldmVsTW9kZWwgPSBMZXZlbE1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgICB0aGlzLmNhcGFiaWxpdHlMYXllciA9IG5ldyBMYXllckNhcGFiaWxpdHkoKTtcbiAgICAgIHRoaXMubGV2ZWxWYWx1ZUxheWVyID0gbmV3IExheWVyTGV2ZWxWYWx1ZSgpO1xuICAgICAgdGhpcy5tYXBwaW5nTGF5ZXIgPSBuZXcgTGF5ZXJNYXBwaW5nKCk7XG4gICAgICB0aGlzLmRkYUxheWVyID0gbmV3IExheWVyRERBKCk7XG4gICAgICB0aGlzLnNldENhcGFiaWxpdHlTdHJhdGVneSh7XG4gICAgICAgIG5hbWU6IFwiQ2FwYWJpbGl0eTFcIixcbiAgICAgICAgcGFyYW06IHtcbiAgICAgICAgICB4OiAtMC4xNjZcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldExldmVsVmFsdWVTdHJhdGVneSh7XG4gICAgICAgIG5hbWU6IFwiTGV2ZWwxXCIsXG4gICAgICAgIHBhcmFtOiB7XG4gICAgICAgICAgeDogXCJwcmVkaWN0VGltZVwiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRNYXBwaW5nU3RyYXRlZ3koW3tcbiAgICAgICAgbmFtZTogXCJNYXBwaW5nMVwiXG4gICAgICB9XSk7XG4gICAgICB0aGlzLnNldEREQVN0cmF0ZWd5KCk7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgbG9nSW5mbyhlLCB0ID0gRURDQ29sb3IuTk9STUFMKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkRDTWdyX3NldENhcFNneVwiKVxuICBzZXRDYXBhYmlsaXR5U3RyYXRlZ3koZSkge1xuICAgIHRoaXMuY2FwYWJpbGl0eUxheWVyLnNldFN0cmF0ZWd5KGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENNZ3Jfc2V0THZTZ3lcIilcbiAgc2V0TGV2ZWxWYWx1ZVN0cmF0ZWd5KGUpIHtcbiAgICB0aGlzLmxldmVsVmFsdWVMYXllci5zZXRTdHJhdGVneShlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDTWdyX3NldE1hcFNneVwiKVxuICBzZXRNYXBwaW5nU3RyYXRlZ3koZSkge1xuICAgIHRoaXMubWFwcGluZ0xheWVyLnNldFN0cmF0ZWdpZXMoZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ01ncl9zZXREREFTZ3lcIilcbiAgc2V0RERBU3RyYXRlZ3koKSB7XG4gICAgdGhpcy5kZGFMYXllci5hZGRTdHJhdGVneSh7XG4gICAgICBuYW1lOiBcIkREQTBcIixcbiAgICAgIHBhcmFtOiB7XG4gICAgICAgIHg6IDEwMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENNZ3JfdXBkYXRlQ2FwXCIpXG4gIHVwZGF0ZUNhcGFiaWxpdHkoZSkge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0RXh0cmFjdE1vZGVsKGUuZ2FtZVR5cGUpO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRHYW1lRW5kKHQsIGUpO1xuICAgICAgICB0aGlzLmNhcGFiaWxpdHlMYXllci51cGRhdGVDYXBhYmlsaXR5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZSksIHtcbiAgICAgICAgICBkZWZhdWx0Q2FwYWJpbGl0eTogdGhpcy5nZXREZWZhdWx0Q2FwYWJpbGl0eShlLmdhbWVUeXBlKSxcbiAgICAgICAgICBleHRyYWN0TW9kZWw6IHRcbiAgICAgICAgfSkpO1xuICAgICAgICBlLndpbiB8fCB0LmdhbWVSZXBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2FtZVN0YXJ0KGUpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdmFyIHQgPSB0aGlzLmdldEV4dHJhY3RNb2RlbChlLmdhbWVUeXBlKTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHZhciBvID0gbnVsbCxcbiAgICAgICAgICBuID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwiZHluYW1pY1wiICE9PSBlLmZpbGVOYW1lKSB7XG4gICAgICAgICAgbyA9IHtcbiAgICAgICAgICAgIGluZGV4OiBpc05hTihlLmxldmVsSW5kZXgpID8gLTEgOiBlLmxldmVsSW5kZXgsXG4gICAgICAgICAgICBjb250ZW50OiBlLmxldmVsU3RyLFxuICAgICAgICAgICAgcmF0ZVN1Y2Nlc3M6IDEsXG4gICAgICAgICAgICB0aWxlTnVtOiAwLFxuICAgICAgICAgICAgcHJlZGljdFRpbWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIG4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIG8gPSB0aGlzLmN1ckxldmVsRGF0YTtcbiAgICAgICAgbyAmJiB0aGlzLnJlY29yZEdhbWVTdGFydCh0LCB7XG4gICAgICAgICAgbGV2ZWxJZDogZS5sZXZlbElkLFxuICAgICAgICAgIGdhbWVUeXBlOiBlLmdhbWVUeXBlLFxuICAgICAgICAgIGxldmVsRGF0YTogbyxcbiAgICAgICAgICBpc0R5bmFtaWM6IG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlc2V0Q2FwYWJpbGl0eUNhY2hlKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSBbTWpHYW1lVHlwZS5Ob3JtYWwsIE1qR2FtZVR5cGUuVHJhdmVsLCBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKG8pLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IGkudmFsdWUsXG4gICAgICAgICAgcyA9IHRoaXMuZ2V0RXh0cmFjdE1vZGVsKGEpO1xuICAgICAgICBpZiAocykge1xuICAgICAgICAgIHZhciBjID0gdGhpcy5nZXREZWZhdWx0Q2FwYWJpbGl0eShhKTtcbiAgICAgICAgICBzLnJlc2V0Q2FwYWJpbGl0eURhdGEoYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaSAmJiAhaS5kb25lICYmICh0ID0gbi5yZXR1cm4pICYmIHQuY2FsbChuKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1c2VTaHVmZmxlKGUpIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0TW9kZShlKSkge1xuICAgICAgdmFyIHQgPSB0aGlzLmdldEV4dHJhY3RNb2RlbChlKTtcbiAgICAgIHQgJiYgdC51c2VTaHVmZmxlKCk7XG4gICAgfVxuICB9XG4gIGdldEV4dHJhY3RJbmZvKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgbCxcbiAgICAgIHMsXG4gICAgICB1ID0gdGhpcy5nZXRFeHRyYWN0TW9kZWwoZSk7XG4gICAgaWYgKCF1KSByZXR1cm4ge1xuICAgICAgb2s6IGZhbHNlLFxuICAgICAgY2FwYWJpbGl0eTogMCxcbiAgICAgIHByZWRpY3RUaW1lOiAwLFxuICAgICAgbGV2ZWxWYWx1ZTogMCxcbiAgICAgIHJhdGVTdWNjZXNzOiAwLFxuICAgICAgbGV2ZWxJbmRleDogLTFcbiAgICB9O1xuICAgIHZhciBwID0gdGhpcy5nZXREZWZhdWx0Q2FwYWJpbGl0eShlKSxcbiAgICAgIGYgPSB0aGlzLmNhcGFiaWxpdHlMYXllci5nZXRDYXBhYmlsaXR5KHtcbiAgICAgICAgZ2FtZVR5cGU6IGUsXG4gICAgICAgIGV4dHJhY3RNb2RlbDogdSxcbiAgICAgICAgZGVmYXVsdENhcGFiaWxpdHk6IHBcbiAgICAgIH0pLFxuICAgICAgZCA9IHUuZ2V0TGFzdExldmVsUmVjb3JkKCksXG4gICAgICBoID0gMCxcbiAgICAgIHkgPSAwLFxuICAgICAgbSA9IDAsXG4gICAgICB2ID0gLTE7XG4gICAgaWYgKGQubGVuZ3RoID4gMCAmJiBkWzBdLmlzRHluYW1pYykge1xuICAgICAgaCA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKHQgPSBkWzBdLmxldmVsRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5wcmVkaWN0VGltZSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDA7XG4gICAgICB5ID0gbnVsbCAhPT0gKGkgPSBudWxsID09PSAobiA9IGRbMF0ubGV2ZWxEYXRhKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuW0xldmVsVmFsdWVLZXldKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMDtcbiAgICAgIG0gPSBudWxsICE9PSAoYSA9IG51bGwgPT09IChyID0gZFswXS5sZXZlbERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucmF0ZVN1Y2Nlc3MpICYmIHZvaWQgMCAhPT0gYSA/IGEgOiAwO1xuICAgICAgdiA9IG51bGwgIT09IChzID0gbnVsbCA9PT0gKGwgPSBkWzBdLmxldmVsRGF0YSkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5pbmRleCkgJiYgdm9pZCAwICE9PSBzID8gcyA6IC0xO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgb2s6IGQubGVuZ3RoID4gMCAmJiBkWzBdLmlzRHluYW1pYyxcbiAgICAgIGNhcGFiaWxpdHk6IGYsXG4gICAgICBwcmVkaWN0VGltZTogaCxcbiAgICAgIGxldmVsVmFsdWU6IHksXG4gICAgICByYXRlU3VjY2VzczogbSxcbiAgICAgIGxldmVsSW5kZXg6IHZcbiAgICB9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRENNZ3JfcmVjb3JkR2FtZUVuZFwiKVxuICByZWNvcmRHYW1lRW5kKGUsIHQpIHtcbiAgICBlLmdhbWVFbmQodCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ01ncl9yZWNvcmRHYW1lU3RhcnRcIilcbiAgcmVjb3JkR2FtZVN0YXJ0KGUsIHQpIHtcbiAgICBlLmdhbWVTdGFydCh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRDTWdyX2dldENvbnRcIilcbiAgZ2V0Q29udGVudERhdGEoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBuID0gZS5nYW1lVHlwZSB8fCBNakdhbWVUeXBlLk5vcm1hbCxcbiAgICAgICAgaSA9IHQuZ2V0TGV2ZWxJZChlKTtcbiAgICAgIHQuZXh0cmFjdExldmVsKG4sIGksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgdC5zZXRDdXJMZXZlbERhdGEoZSk7XG4gICAgICAgICAgdmFyIG4gPSB0LmNhcGFiaWxpdHlMYXllci5nZXRTdHJhdGVneU5hbWUoKTtcbiAgICAgICAgICBvKFtlLmNvbnRlbnQsIGVbTGV2ZWxWYWx1ZUtleV0sIGUuaW5kZXgudG9TdHJpbmcoKSwgXCJkeW5hbWljXCIsIG4sIHRydWVdKTtcbiAgICAgICAgfSBlbHNlIG8oW251bGwsIDAsIG51bGwsIFwiZHluYW1pY1wiLCBudWxsLCB0cnVlXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXRSYW5kb21Db250ZW50KGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChvKSB7XG4gICAgICB0LmdldExldmVsRGF0YShlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZSAmJiAwICE9PSBlLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBuID0gZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlLmxlbmd0aCldO1xuICAgICAgICAgIHQuc2V0Q3VyTGV2ZWxEYXRhKG4pO1xuICAgICAgICAgIG8oW24uY29udGVudCwgbltMZXZlbFZhbHVlS2V5XSwgbi5pbmRleC50b1N0cmluZygpLCBcImR5bmFtaWNcIiwgXCJyYW5kb21cIiwgZmFsc2VdKTtcbiAgICAgICAgfSBlbHNlIG8obnVsbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXRMZXZlbElkKGUpIHtcbiAgICBzd2l0Y2ggKGUuZ2FtZVR5cGUpIHtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5Ob3JtYWw6XG4gICAgICAgIHJldHVybiBlLmxldmVsSUQgfHwgMTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5UcmF2ZWw6XG4gICAgICAgIHJldHVybiBlLmxldmVsSW5kZXggfHwgMTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTpcbiAgICAgICAgcmV0dXJuIGUuY2hhbGxlbmdlRGF0ZSB8fCAxO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfVxuICBleHRyYWN0TGV2ZWwoZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICB0aGlzLmdldExldmVsRGF0YShlLCBmdW5jdGlvbiAoaSkge1xuICAgICAgaWYgKGkubGVuZ3RoIDw9IDApIG8obnVsbCk7ZWxzZSB7XG4gICAgICAgIHZhciByLFxuICAgICAgICAgIGwgPSBuLmdldEV4dHJhY3RNb2RlbChlKSxcbiAgICAgICAgICBzID0gbi5jYXBhYmlsaXR5TGF5ZXIuZ2V0Q2FwYWJpbGl0eSh7XG4gICAgICAgICAgICBnYW1lVHlwZTogZSxcbiAgICAgICAgICAgIGV4dHJhY3RNb2RlbDogbCxcbiAgICAgICAgICAgIGRlZmF1bHRDYXBhYmlsaXR5OiBuLmdldERlZmF1bHRDYXBhYmlsaXR5KGUpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYyA9IHtcbiAgICAgICAgICAgIGdhbWVUeXBlOiBlLFxuICAgICAgICAgICAgZXh0cmFjdE1vZGVsOiBsLFxuICAgICAgICAgICAgbGV2ZWxzOiBpLFxuICAgICAgICAgICAgY2FwYWJpbGl0eTogc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdSA9IF9fcmVhZChuLmRkYUxheWVyLmZpbHRlcihjKSwgMiksXG4gICAgICAgICAgcCA9IHVbMF0sXG4gICAgICAgICAgZiA9IHVbMV0sXG4gICAgICAgICAgZCA9IGMubGV2ZWxzO1xuICAgICAgICByID0gcCA/IGYgOiBuLm1hcHBpbmdMYXllci5tYXBwaW5nKHtcbiAgICAgICAgICBsZXZlbElkOiB0LFxuICAgICAgICAgIGxldmVsczogZCxcbiAgICAgICAgICBnYW1lVHlwZTogZSxcbiAgICAgICAgICBleHRyYWN0TW9kZWw6IGwsXG4gICAgICAgICAgY2FwYWJpbGl0eTogc1xuICAgICAgICB9KTtcbiAgICAgICAgbyhyIHx8IG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldERlZmF1bHRDYXBhYmlsaXR5KCkge1xuICAgIHJldHVybiAwLjU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ01ncl9nZXRMdlBhdGhcIilcbiAgZ2V0TGV2ZWxQYXRoKCkge1xuICAgIHJldHVybiBbW1wiY29uZmlnL2JvYXJkcy9keW5hbWljL3NhbXBsZVwiLCBcIm1haW5SZXNcIl0sIFtcInNhbXBsZVwiLCBcInJfYm9hcmQxXCJdXTtcbiAgfVxuICBwcmVMb2FkTGV2ZWxMaWJyYXJ5KCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSA9IHRoaXMsXG4gICAgICBzID0gW01qR2FtZVR5cGUuTm9ybWFsLCBNakdhbWVUeXBlLlRyYXZlbCwgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZV0sXG4gICAgICBjID0gbmV3IFNldCgpLFxuICAgICAgdSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMocyksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gZi52YWx1ZSxcbiAgICAgICAgICBoID0gdGhpcy5nZXRMZXZlbFBhdGgoZCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgeSA9IChvID0gdm9pZCAwLCBfX3ZhbHVlcyhoKSksIG0gPSB5Lm5leHQoKTsgIW0uZG9uZTsgbSA9IHkubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgdiA9IF9fcmVhZChtLnZhbHVlLCAyKSxcbiAgICAgICAgICAgICAgZyA9IHZbMF0sXG4gICAgICAgICAgICAgIF8gPSB2WzFdO1xuICAgICAgICAgICAgaWYgKGcgJiYgIWMuaGFzKGcgKyBcIl9cIiArIF8pKSB7XG4gICAgICAgICAgICAgIGMuYWRkKGcgKyBcIl9cIiArIF8pO1xuICAgICAgICAgICAgICB1LnB1c2goW2csIF9dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBvID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICYmICFtLmRvbmUgJiYgKG4gPSB5LnJldHVybikgJiYgbi5jYWxsKHkpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmICh0ID0gcC5yZXR1cm4pICYmIHQuY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gX19yZWFkKGUsIDIpLFxuICAgICAgICBvID0gdFswXSxcbiAgICAgICAgbiA9IHRbMV07XG4gICAgICByZXR1cm4gaS5wcmVMb2FkTGV2ZWxMaWJyYXJ5QnlQYXRoKG8sIG4pO1xuICAgIH0pKTtcbiAgfVxuICBnZXREaXJQYXRoKGUpIHtcbiAgICB2YXIgdCA9IGUubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgIHJldHVybiAtMSA9PT0gdCA/IFwiXCIgOiBlLnN1YnN0cmluZygwLCB0KTtcbiAgfVxuICBwcmVMb2FkTGV2ZWxMaWJyYXJ5QnlQYXRoKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChuKSB7XG4gICAgICB2YXIgaSA9IG8uZ2V0RGlyUGF0aChlKTtcbiAgICAgIHJlc01hbmFnZXIucHJlRG93bkxvYWRCeURpcihpLCBmdW5jdGlvbiAoKSB7fSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgbighdCk7XG4gICAgICB9LCB0KTtcbiAgICB9KTtcbiAgfVxuICBnZXRMZXZlbERhdGEoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcztcbiAgICBpZiAodGhpcy5kYXRhQ2FjaGUuaGFzKGUpKSB7XG4gICAgICB0KHRoaXMuZGF0YUNhY2hlLmdldChlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZExldmVsTGlicmFyeShlKS50aGVuKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciBpID0gbi5ldmVyeShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUubGVuZ3RoID4gMDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICByID0gbi5yZWR1Y2UoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmNvbmNhdCh0KTtcbiAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIG8ub3ZlcnJpZGVQZXJjZW50aWxlKHIsIGkpO1xuICAgICAgICBvLmZpbGxMZXZlbFZhbHVlKHIsIGUpO1xuICAgICAgICBpICYmIG8uZGF0YUNhY2hlLnNldChlLCByKTtcbiAgICAgICAgdChyKTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdChbXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb3ZlcnJpZGVQZXJjZW50aWxlKCkge31cbiAgZ2V0TGV2ZWxEYXRhQ2FjaGVLZXkoZSwgdCkge1xuICAgIHZhciBvID0gQ3J5cHRvSlMuTUQ1KGUgKyBcIl9cIiArIHQpLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gUHJlZml4TGV2ZWxMaWJyYXJ5ICsgXCJfXCIgKyBvO1xuICB9XG4gIGxvYWRMZXZlbExpYnJhcnkoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSB0aGlzLmdldExldmVsUGF0aChlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoby5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgIHZhciBuID0gX19yZWFkKG8sIDIpLFxuICAgICAgICBpID0gblswXSxcbiAgICAgICAgciA9IG5bMV07XG4gICAgICByZXR1cm4gdC5sb2FkTGV2ZWxMaWJyYXJ5QnlQYXRoKGUsIGksIHIpO1xuICAgIH0pKTtcbiAgfVxuICBsb2FkTGV2ZWxMaWJyYXJ5QnlQYXRoKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgaSA9IG4uZ2V0TGV2ZWxEYXRhQ2FjaGVLZXkodCwgbyksXG4gICAgICAgIHIgPSBuLmxldmVsRGF0YUNhY2hlLmdldChpKSB8fCBbXSxcbiAgICAgICAgYSA9IGZhbHNlLFxuICAgICAgICBsID0gZnVuY3Rpb24gbCh0KSB7XG4gICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICBhID0gdHJ1ZTtcbiAgICAgICAgICAgIGUodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgaWYgKHIubGVuZ3RoID4gMCkgbChyKTtlbHNlIHtcbiAgICAgICAgdmFyIHMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQocyk7XG4gICAgICAgICAgcyA9IC0xO1xuICAgICAgICAgIGwoW10pO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICByZXNNYW5hZ2VyLmxvYWRSZXModCwgY2MuSnNvbkFzc2V0LCBvKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKC0xICE9PSBzKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocyk7XG4gICAgICAgICAgICBzID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIGNjLkpzb25Bc3NldCkge1xuICAgICAgICAgICAgICByID0gbi5wYXJzZUxldmVsRGF0YShlLmpzb24pO1xuICAgICAgICAgICAgICBuLmxldmVsRGF0YUNhY2hlLnNldChpLCByKTtcbiAgICAgICAgICAgICAgZS5kZWNSZWYoKTtcbiAgICAgICAgICAgICAgbChyKTtcbiAgICAgICAgICAgIH0gZWxzZSBsKFtdKTtcbiAgICAgICAgICB9IGVsc2UgbChbXSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBsKFtdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ01ncl9wYXJzZUx2RGF0YVwiKVxuICBwYXJzZUxldmVsRGF0YShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IGUuaGVhZGVyLFxuICAgICAgaSA9IGUucm93cyxcbiAgICAgIGEgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKGkpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICBmb3IgKHZhciBjID0gcy52YWx1ZSwgdSA9IHt9LCBwID0gMDsgcCA8IG4ubGVuZ3RoOyBwKyspIHVbbltwXV0gPSBjW3BdO1xuICAgICAgICBhLnB1c2godSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHMgJiYgIXMuZG9uZSAmJiAobyA9IGwucmV0dXJuKSAmJiBvLmNhbGwobCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbiAgZmlsbExldmVsVmFsdWUoZSwgdCkge1xuICAgIHRoaXMubGV2ZWxWYWx1ZUxheWVyLmZpbGxMZXZlbFZhbHVlKHtcbiAgICAgIGxldmVsczogZSxcbiAgICAgIGdhbWVUeXBlOiB0LFxuICAgICAgbGV2ZWxNb2RlbDogdGhpcy5sZXZlbE1vZGVsLFxuICAgICAgZXh0cmFjdE1vZGVsOiB0aGlzLmdldEV4dHJhY3RNb2RlbCh0KVxuICAgIH0pO1xuICB9XG4gIGdldEV4dHJhY3RNb2RlbChlKSB7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuTm9ybWFsOlxuICAgICAgICByZXR1cm4gRXh0cmFjdE5vcm1hbC5nZXRJbnN0YW5jZSgpO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLlRyYXZlbDpcbiAgICAgICAgcmV0dXJuIEV4dHJhY3RUcmF2ZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTpcbiAgICAgICAgcmV0dXJuIEV4dHJhY3REYWlseS5nZXRJbnN0YW5jZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjYWxjdWxhdGVQZXJjZW50aWxlKGUsIHQpIHtcbiAgICB2YXIgbyA9IHQubGVuZ3RoLFxuICAgICAgbiA9IEFycmF5LmZyb20oe1xuICAgICAgICBsZW5ndGg6IG9cbiAgICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSk7XG4gICAgbi5zb3J0KGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgICByZXR1cm4gdFtvXVtlXSAtIHRbbl1bZV07XG4gICAgfSk7XG4gICAgZm9yICh2YXIgaSA9IG5ldyBNYXAoKSwgciA9IDA7IHIgPCBvOyByKyspIHtcbiAgICAgIHZhciBhID0gdFtuW3JdXVtlXTtcbiAgICAgIGkuaGFzKGEpIHx8IGkuc2V0KGEsIHIpO1xuICAgIH1cbiAgICB2YXIgbCA9IGdldFBlcmNlbnRpbGVLZXkoZSk7XG4gICAgZm9yIChyID0gMDsgciA8IG87IHIrKykge1xuICAgICAgdmFyIHMgPSBpLmhhcyh0W3JdW2VdKSA/IGkuZ2V0KHRbcl1bZV0pIDogMDtcbiAgICAgIHRbcl1bbF0gPSBzIC8gbztcbiAgICB9XG4gIH1cbn0iXX0=