"use strict";
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