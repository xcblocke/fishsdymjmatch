"use strict";
cc._RF.push(module, '72fb9/mqJRFEo+LlP512Kld', 'FlowerCardSeriesTrait');
// subpackages/l_flowerCardSeries/Scripts/FlowerCardSeriesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EFlowerDrawMode = void 0;
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ResManager_1 = require("../../../Scripts/framework/manager/ResManager");
exports.EFlowerDrawMode = {
    Random: "random",
    Sequence: "sequence"
};
var FlowerCardSeriesTrait = /** @class */ (function (_super) {
    __extends(FlowerCardSeriesTrait, _super);
    function FlowerCardSeriesTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._enableBaseSkin = false;
        _this._drawMode = exports.EFlowerDrawMode.Random;
        _this._bundlesReady = new Set();
        _this._remoteDownloadQueue = [];
        _this._isDownloading = false;
        _this._currentGameType = GameTypeEnums_1.MjGameType.Normal;
        _this._hasStartedDownload = false;
        _this._isEndGameDownloadMode = false;
        _this._isPrepareNextGame = false;
        _this._enableForNormal = true;
        _this._minLevelToEnable = 2;
        _this._gameContent = null;
        _this._cachedIsFeatureEnabled = false;
        _this._cachedShouldApplyTheme = false;
        _this._flowerSeriesList = [{
                id: 0,
                name: "木质",
                bundle: "mainRes",
                isLocal: true
            }, {
                id: 2,
                name: "乐器",
                bundle: "l_flowerSeries02",
                isLocal: true
            }, {
                id: 4,
                name: "建筑",
                bundle: "l_flowerSeries04",
                isLocal: true
            }, {
                id: 16,
                name: "食物",
                bundle: "l_flowerSeries16",
                isLocal: true
            }, {
                id: 19,
                name: "圣诞",
                bundle: "l_flowerSeries19",
                isLocal: true
            }, {
                id: 43,
                name: "中世纪物件",
                bundle: "l_flowerSeries43",
                isLocal: true
            }, {
                id: 1,
                name: "水果",
                bundle: "r_flowerSeries01",
                isLocal: false
            }, {
                id: 3,
                name: "假日悠闲",
                bundle: "r_flowerSeries03",
                isLocal: false
            }, {
                id: 6,
                name: "运动",
                bundle: "r_flowerSeries06",
                isLocal: false
            }, {
                id: 7,
                name: "冬日",
                bundle: "r_flowerSeries07",
                isLocal: false
            }, {
                id: 8,
                name: "春节",
                bundle: "r_flowerSeries08",
                isLocal: false
            }, {
                id: 9,
                name: "交通工具",
                bundle: "r_flowerSeries09",
                isLocal: false
            }, {
                id: 10,
                name: "部落",
                bundle: "r_flowerSeries10",
                isLocal: false
            }, {
                id: 11,
                name: "动物",
                bundle: "r_flowerSeries11",
                isLocal: false
            }, {
                id: 12,
                name: "蔬菜",
                bundle: "r_flowerSeries12",
                isLocal: false
            }, {
                id: 13,
                name: "花植物",
                bundle: "r_flowerSeries13",
                isLocal: false
            }, {
                id: 14,
                name: "爱丽丝",
                bundle: "r_flowerSeries14",
                isLocal: false
            }, {
                id: 15,
                name: "国际象棋",
                bundle: "r_flowerSeries15",
                isLocal: false
            }, {
                id: 17,
                name: "星座",
                bundle: "r_flowerSeries17",
                isLocal: false
            }, {
                id: 18,
                name: "魔法",
                bundle: "r_flowerSeries18",
                isLocal: false
            }, {
                id: 20,
                name: "糖果",
                bundle: "r_flowerSeries20",
                isLocal: false
            }, {
                id: 21,
                name: "像素",
                bundle: "r_flowerSeries21",
                isLocal: false
            }, {
                id: 22,
                name: "海洋",
                bundle: "r_flowerSeries22",
                isLocal: false
            }, {
                id: 23,
                name: "十二生肖",
                bundle: "r_flowerSeries23",
                isLocal: false
            }, {
                id: 24,
                name: "天气",
                bundle: "r_flowerSeries24",
                isLocal: false
            }, {
                id: 25,
                name: "几何",
                bundle: "r_flowerSeries25",
                isLocal: false
            }, {
                id: 27,
                name: "探险",
                bundle: "r_flowerSeries27",
                isLocal: false
            }, {
                id: 29,
                name: "emoji表情",
                bundle: "r_flowerSeries29",
                isLocal: false
            }, {
                id: 30,
                name: "饮品",
                bundle: "r_flowerSeries30",
                isLocal: false
            }, {
                id: 31,
                name: "航海",
                bundle: "r_flowerSeries31",
                isLocal: false
            }, {
                id: 32,
                name: "牛仔",
                bundle: "r_flowerSeries32",
                isLocal: false
            }, {
                id: 33,
                name: "面包甜蜜",
                bundle: "r_flowerSeries33",
                isLocal: false
            }, {
                id: 34,
                name: "埃及",
                bundle: "r_flowerSeries34",
                isLocal: false
            }, {
                id: 35,
                name: "字母",
                bundle: "r_flowerSeries35",
                isLocal: false
            }, {
                id: 36,
                name: "美妆",
                bundle: "r_flowerSeries36",
                isLocal: false
            }, {
                id: 37,
                name: "游乐园",
                bundle: "r_flowerSeries37",
                isLocal: false
            }, {
                id: 38,
                name: "国旗",
                bundle: "r_flowerSeries38",
                isLocal: false
            }, {
                id: 39,
                name: "音符",
                bundle: "r_flowerSeries39",
                isLocal: false
            }, {
                id: 41,
                name: "叶子&果实",
                bundle: "r_flowerSeries41",
                isLocal: false
            }, {
                id: 42,
                name: "现代东方(节日与传统)",
                bundle: "r_flowerSeries42",
                isLocal: false
            }, {
                id: 44,
                name: "国家特色食物和事物",
                bundle: "r_flowerSeries44",
                isLocal: false
            }, {
                id: 45,
                name: "星球",
                bundle: "r_flowerSeries45",
                isLocal: false
            }, {
                id: 46,
                name: "塔罗",
                bundle: "r_flowerSeries46",
                isLocal: false
            }, {
                id: 47,
                name: "童话",
                bundle: "r_flowerSeries47",
                isLocal: false
            }, {
                id: 49,
                name: "航天科技",
                bundle: "r_flowerSeries49",
                isLocal: false
            }, {
                id: 50,
                name: "餐具_厨具",
                bundle: "r_flowerSeries50",
                isLocal: false
            }, {
                id: 52,
                name: "玩具",
                bundle: "r_flowerSeries52",
                isLocal: false
            }, {
                id: 54,
                name: "交通安全",
                bundle: "r_flowerSeries54",
                isLocal: false
            }, {
                id: 55,
                name: "零食_快餐",
                bundle: "r_flowerSeries55",
                isLocal: false
            }];
        _this._baseSeriesList = [{
                id: "base_wood",
                name: "木质",
                bundle: "mainRes",
                isLocal: true
            }];
        _this._themePeriod = 1;
        _this._diffFlowerSeriesList = {
            2: [{
                    id: 3,
                    name: "假日悠闲",
                    bundle: "r_flowerSeries03_01",
                    isLocal: false
                }, {
                    id: 21,
                    name: "像素",
                    bundle: "r_flowerSeries21_01",
                    isLocal: false
                }, {
                    id: 27,
                    name: "探险",
                    bundle: "r_flowerSeries27_01",
                    isLocal: false
                }, {
                    id: 31,
                    name: "航海",
                    bundle: "r_flowerSeries31_01",
                    isLocal: false
                }, {
                    id: 39,
                    name: "音符",
                    bundle: "r_flowerSeries39_01",
                    isLocal: false
                }, {
                    id: 44,
                    name: "国家特色食物和事物",
                    bundle: "r_flowerSeries44_01",
                    isLocal: false
                }, {
                    id: 5,
                    name: "Q版国风",
                    bundle: "r_flowerSeries05",
                    isLocal: false
                }, {
                    id: 28,
                    name: "马戏团",
                    bundle: "r_flowerSeries28",
                    isLocal: false
                }, {
                    id: 40,
                    name: "农具&动物",
                    bundle: "r_flowerSeries40",
                    isLocal: false
                }, {
                    id: 48,
                    name: "炼金",
                    bundle: "r_flowerSeries48",
                    isLocal: false
                }, {
                    id: 51,
                    name: "箱包",
                    bundle: "r_flowerSeries51",
                    isLocal: false
                }, {
                    id: 53,
                    name: "罐头果酱",
                    bundle: "r_flowerSeries53",
                    isLocal: false
                }, {
                    id: 56,
                    name: "狗品种",
                    bundle: "r_flowerSeries56",
                    isLocal: false
                }, {
                    id: 57,
                    name: "家居",
                    bundle: "r_flowerSeries57",
                    isLocal: false
                }, {
                    id: 58,
                    name: "甜品",
                    bundle: "r_flowerSeries58",
                    isLocal: false
                }, {
                    id: 59,
                    name: "火锅",
                    bundle: "r_flowerSeries59",
                    isLocal: false
                }, {
                    id: 60,
                    name: "电影",
                    bundle: "r_flowerSeries60",
                    isLocal: false
                }, {
                    id: 61,
                    name: "生活用品",
                    bundle: "r_flowerSeries61",
                    isLocal: false
                }, {
                    id: 62,
                    name: "健身",
                    bundle: "r_flowerSeries62",
                    isLocal: false
                }, {
                    id: 63,
                    name: "昆虫",
                    bundle: "r_flowerSeries63",
                    isLocal: false
                }, {
                    id: 64,
                    name: "白女生活物件",
                    bundle: "r_flowerSeries64",
                    isLocal: false
                }, {
                    id: 65,
                    name: "赛车",
                    bundle: "r_flowerSeries65",
                    isLocal: false
                }, {
                    id: 66,
                    name: "动物头像",
                    bundle: "r_flowerSeries66",
                    isLocal: false
                }, {
                    id: 67,
                    name: "怪兽",
                    bundle: "r_flowerSeries67",
                    isLocal: false
                }, {
                    id: 68,
                    name: "艺术家名画",
                    bundle: "r_flowerSeries68",
                    isLocal: false
                }, {
                    id: 69,
                    name: "钻石珠宝",
                    bundle: "r_flowerSeries69",
                    isLocal: false
                }, {
                    id: 70,
                    name: "救护用品",
                    bundle: "r_flowerSeries70",
                    isLocal: false
                }, {
                    id: 71,
                    name: "海滩",
                    bundle: "r_flowerSeries71",
                    isLocal: false
                }, {
                    id: 72,
                    name: "办公文具",
                    bundle: "r_flowerSeries72",
                    isLocal: false
                }, {
                    id: 73,
                    name: "海洋生物",
                    bundle: "r_flowerSeries73",
                    isLocal: false
                }, {
                    id: 74,
                    name: "戏剧",
                    bundle: "r_flowerSeries74",
                    isLocal: false
                }, {
                    id: 75,
                    name: "墨西哥主题",
                    bundle: "r_flowerSeries75",
                    isLocal: false
                }, {
                    id: 76,
                    name: "健身器材",
                    bundle: "r_flowerSeries76",
                    isLocal: false
                }, {
                    id: 77,
                    name: "情人节",
                    bundle: "r_flowerSeries77",
                    isLocal: false
                }, {
                    id: 78,
                    name: "西方神话",
                    bundle: "r_flowerSeries78",
                    isLocal: false
                }, {
                    id: 79,
                    name: "烧烤",
                    bundle: "r_flowerSeries79",
                    isLocal: false
                }, {
                    id: 80,
                    name: "巴西狂欢节",
                    bundle: "r_flowerSeries80",
                    isLocal: false
                }, {
                    id: 81,
                    name: "工具",
                    bundle: "r_flowerSeries81",
                    isLocal: false
                }]
        };
        _this._currSkData = null;
        return _this;
    }
    FlowerCardSeriesTrait_1 = FlowerCardSeriesTrait;
    FlowerCardSeriesTrait.prototype.getFlowerSeries = function () {
        return this._flowerSeriesList;
    };
    FlowerCardSeriesTrait.prototype.getLastSeriesId = function () {
        return this.localData.lastSeriesId;
    };
    FlowerCardSeriesTrait.prototype.setLastSeriesId = function (e) {
        this.localData.lastSeriesId = e;
    };
    FlowerCardSeriesTrait.prototype.getSequenceSeriesId = function () {
        return this.localData.sequenceSeriesId;
    };
    FlowerCardSeriesTrait.prototype.setSequenceSeriesId = function (e) {
        this.localData.sequenceSeriesId = e;
    };
    FlowerCardSeriesTrait.prototype.getBaseSeriesList = function () {
        return this._baseSeriesList;
    };
    FlowerCardSeriesTrait.prototype.getDiffFlowerSeries = function () {
        return this._diffFlowerSeriesList;
    };
    FlowerCardSeriesTrait.prototype.getThemePeriod = function () {
        return this._themePeriod;
    };
    FlowerCardSeriesTrait.prototype.isBundleReady = function (e) {
        return this._bundlesReady.has(e);
    };
    FlowerCardSeriesTrait.prototype.setCurrentSeriesById = function () { };
    FlowerCardSeriesTrait.prototype.onLoad = function () {
        var t = this, r = (this._traitData.events || []).find(function (e) {
            return "MainGameCtrl_initRes" === e.event;
        });
        r && void 0 === r.type && (r.type = 2);
        _super.prototype.onLoad.call(this);
        "number" == typeof this._traitData.themePeriod && (this._themePeriod = this._traitData.themePeriod);
        "boolean" == typeof this._traitData.enableForNormal && (this._enableForNormal = this._traitData.enableForNormal);
        "number" == typeof this._traitData.minLevelToEnable && (this._minLevelToEnable = this._traitData.minLevelToEnable);
        this.localData.lastSeriesId || (this.localData.lastSeriesId = null);
        this.localData.sequenceSeriesId || (this.localData.sequenceSeriesId = null);
        this.localData.Normal || (this.localData.Normal = {
            currentSeries: null,
            currentBase: null
        });
        this.localData.Travel || (this.localData.Travel = {
            currentSeries: null,
            currentBase: null
        });
        this.localData.DailyChallenge || (this.localData.DailyChallenge = {
            currentSeries: null,
            currentBase: null
        });
        this.localData.Tile2Normal || (this.localData.Tile2Normal = {
            currentSeries: null,
            currentBase: null
        });
        this.localData.downloadedBundles || (this.localData.downloadedBundles = []);
        Promise.resolve().then(function () {
            t.getThemePeriod() >= 2 && t.registerEvent([{
                    event: "DGameStart_adjust"
                }, {
                    event: "DGameEnd_adjust"
                }]);
            t.registerEvent([{
                    event: "DotUtil_getFlowerTheme"
                }, {
                    event: "Tile2WinCtrl_viewShow"
                }, {
                    event: "T2ClearEffBhv_getAniCfg",
                    priority: 100
                }]);
            t._flowerSeriesList.sort(function (e, t) {
                return e.id - t.id;
            });
            t.mergeDiffFlowerSeries();
            t.getAllModeData();
            t.isPreloadCurrentSeriesBundle() && t.preloadCurrentSeriesBundle();
            t.preloadAllRemoteBundles();
            if (!t.shouldKeepData()) {
                t.localData.Normal = {
                    currentSeries: null,
                    currentBase: null
                };
                t.localData.Tile2Normal = {
                    currentSeries: null,
                    currentBase: null
                };
            }
        });
    };
    FlowerCardSeriesTrait.prototype.mergeDiffFlowerSeries = function () {
        var e = this, t = this.getThemePeriod(), r = this.getDiffFlowerSeries()[t];
        if (r && Array.isArray(r) && 0 !== r.length) {
            var a = [], o = [];
            r.forEach(function (t) {
                if (t && "number" == typeof t.id && t.bundle && t.name) {
                    var r = e._flowerSeriesList.findIndex(function (e) {
                        return e.id === t.id;
                    });
                    if (-1 !== r) {
                        var i = e._flowerSeriesList[r];
                        e._flowerSeriesList[r] = {
                            id: t.id,
                            name: t.name,
                            bundle: t.bundle,
                            isLocal: void 0 !== t.isLocal ? t.isLocal : i.isLocal
                        };
                        a.push(t.id);
                    }
                    else {
                        var n = {
                            id: t.id,
                            name: t.name,
                            bundle: t.bundle,
                            isLocal: void 0 === t.isLocal || t.isLocal
                        };
                        e._flowerSeriesList.push(n);
                        o.push(t.id);
                    }
                }
            });
        }
    };
    FlowerCardSeriesTrait.prototype.getCurrentModeData = function () {
        switch (this._currentGameType) {
            case GameTypeEnums_1.MjGameType.Normal:
                return this.localData.Normal;
            case GameTypeEnums_1.MjGameType.Tile2Normal:
                return this.localData.Tile2Normal;
            case GameTypeEnums_1.MjGameType.Travel:
                return this.localData.Travel;
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return this.localData.DailyChallenge;
            default:
                return null;
        }
    };
    FlowerCardSeriesTrait.prototype.getAllModeData = function () {
        return [UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? this.localData.Tile2Normal : this.localData.Normal, this.localData.Travel, this.localData.DailyChallenge];
    };
    FlowerCardSeriesTrait.prototype.getRemoteDownloadQueue = function () {
        return this._remoteDownloadQueue;
    };
    FlowerCardSeriesTrait.prototype.saveModeData = function (e) {
        var t = this.getCurrentModeData();
        if (t) {
            void 0 !== e.currentSeries && (t.currentSeries = e.currentSeries);
            void 0 !== e.currentBase && (t.currentBase = e.currentBase);
            switch (this._currentGameType) {
                case GameTypeEnums_1.MjGameType.Normal:
                    this.localData.Normal = this.localData.Normal;
                    break;
                case GameTypeEnums_1.MjGameType.Tile2Normal:
                    this.localData.Tile2Normal = this.localData.Tile2Normal;
                    break;
                case GameTypeEnums_1.MjGameType.Travel:
                    this.localData.Travel = this.localData.Travel;
                    break;
                case GameTypeEnums_1.MjGameType.DailyChallenge:
                    this.localData.DailyChallenge = this.localData.DailyChallenge;
            }
        }
    };
    FlowerCardSeriesTrait.prototype.shouldKeepData = function () {
        return true;
    };
    FlowerCardSeriesTrait.prototype.clearAllModeData = function () {
        this.localData.Normal = {
            currentSeries: null,
            currentBase: null
        };
        this.localData.Tile2Normal = {
            currentSeries: null,
            currentBase: null
        };
        this.localData.Travel = {
            currentSeries: null,
            currentBase: null
        };
        this.localData.DailyChallenge = {
            currentSeries: null,
            currentBase: null
        };
    };
    FlowerCardSeriesTrait.prototype.onMainGameCtrl_initRes = function (e, t) {
        try {
            this._currentGameType = e.ins.gameType;
            this._cachedIsFeatureEnabled = this.isFeatureEnabled();
            this._cachedShouldApplyTheme = this._cachedIsFeatureEnabled && this.shouldApplyTheme();
            if (!this._cachedIsFeatureEnabled) {
                this.clearAllModeData();
                t();
                return;
            }
            if (!this._cachedShouldApplyTheme) {
                this.saveModeData({
                    currentSeries: null,
                    currentBase: null
                });
                t();
                return;
            }
            var r = this.getCurrentModeData(), a = false;
            r.currentSeries && (r.currentSeries.isLocal || this.isBundleReady(r.currentSeries.bundle)) || (a = true);
            if (a) {
                this.onNewGameDetected(true);
                this.preloadAllRemoteBundles();
                this.drawFlowerSeries(), this.drawBase();
            }
            this.addPreloadAtlas(e.ins);
        }
        catch (e) { }
        t();
    };
    FlowerCardSeriesTrait.prototype.removePreloadRes = function (e, t, r) {
        if (e && e.preloadResMap) {
            var a = e.preloadResMap[t];
            if (a)
                if ("string" == typeof a)
                    (a === r || a.endsWith(":" + r)) && delete e.preloadResMap[t];
                else if (Array.isArray(a)) {
                    a.length;
                    e.preloadResMap[t] = a.filter(function (e) {
                        return e !== r && !e.endsWith(":" + r);
                    });
                    e.preloadResMap[t].length;
                    0 === e.preloadResMap[t].length && delete e.preloadResMap[t];
                }
        }
    };
    FlowerCardSeriesTrait.prototype.addPreloadAtlas = function (e) {
        var t = e || this.getGameControllerByType(this._currentGameType);
        if (t && "function" == typeof t.addPreloadRes) {
            var a = this.getCurrentModeData().currentSeries, o = this.getCurrentModeData().currentBase;
            if (a && 0 !== a.id && !this.tryAddPreloadAtlas(t, a.bundle, a.isLocal, "atlas/flowerCardIcon", "花牌图集")) {
                console.error("[" + FlowerCardSeriesTrait_1.traitKey + "] 错误：花牌Bundle未就绪（" + a.bundle + "），但已通过就绪检查，逻辑异常！");
                this.saveModeData({
                    currentSeries: null
                });
            }
            if (o && "mainRes" !== o.bundle) {
                this.removePreloadRes(t, "SpriteAtlas", "atlas/cardIcon");
                if (!this.tryAddPreloadAtlas(t, o.bundle, o.isLocal, "atlas/cardIcon", "Base图集")) {
                    console.error("[" + FlowerCardSeriesTrait_1.traitKey + "] 错误：Base Bundle未就绪（" + o.bundle + "），但已通过就绪检查，逻辑异常！");
                    this.saveModeData({
                        currentBase: null
                    });
                    t.addPreloadRes("SpriteAtlas", "atlas/cardIcon");
                }
            }
        }
    };
    FlowerCardSeriesTrait.prototype.tryAddPreloadAtlas = function (e, t, r, a) {
        if (r || this.isBundleReady(t)) {
            var o = t + ":" + a;
            e.addPreloadRes("SpriteAtlas", o);
            return true;
        }
        return false;
    };
    FlowerCardSeriesTrait.prototype.preloadAllRemoteBundles = function () {
        var e = this;
        if (!this._hasStartedDownload) {
            this._hasStartedDownload = true;
            var t = new Set();
            this.getFlowerSeries().forEach(function (r) {
                r.isLocal || "mainRes" === r.bundle || e.isBundleReady(r.bundle) || t.add(r.bundle);
            });
            this.getBaseSeriesList().forEach(function (r) {
                r.isLocal || "mainRes" === r.bundle || e.isBundleReady(r.bundle) || t.add(r.bundle);
            });
            if (0 !== t.size) {
                this._remoteDownloadQueue = Array.from(t);
                this.sortDownloadQueue();
                this.downloadNextBundle();
            }
            else
                this.onDownloadOk();
        }
    };
    FlowerCardSeriesTrait.prototype.sortDownloadQueue = function () {
        if (!(this._remoteDownloadQueue.length <= 1)) {
            var e = new Set();
            [{
                    name: "MainLine",
                    data: UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? this.localData.Tile2Normal : this.localData.Normal
                }, {
                    name: "Travel",
                    data: this.localData.Travel
                }, {
                    name: "DailyChallenge",
                    data: this.localData.DailyChallenge
                }].forEach(function (t) {
                var r, a = null === (r = t.data) || void 0 === r ? void 0 : r.currentSeries;
                a && a.id > 0 && !a.isLocal && e.add(a.bundle);
            });
            var t = new Set(this.localData.downloadedBundles || []), r = [], a = [], o = [];
            this._remoteDownloadQueue.forEach(function (i) {
                if (e.has(i)) {
                    r.push(i);
                }
                else {
                    if (t.has(i)) {
                        a.push(i);
                    }
                    else {
                        o.push(i);
                    }
                }
            });
            this._remoteDownloadQueue = __spreadArrays(r, a);
        }
    };
    FlowerCardSeriesTrait.prototype.downloadNextBundle = function () {
        if (!this._isDownloading)
            if (0 !== this._remoteDownloadQueue.length) {
                var e = this._remoteDownloadQueue.shift();
                this.preloadRemoteBundle(e);
            }
            else
                this.onDownloadOk();
    };
    FlowerCardSeriesTrait.prototype.onDownloadOk = function () { };
    FlowerCardSeriesTrait.prototype.onNewGameDetected = function () { };
    FlowerCardSeriesTrait.prototype.preloadRemoteBundle = function (e) {
        var t = this;
        if (this.isBundleReady(e))
            this.downloadNextBundle();
        else if (ResManager_1.resManager.isRemoteBundle(e)) {
            this._isDownloading = true;
            var r = Date.now();
            this._tm.preloadAllRes(e, function (a, o) {
                t._isDownloading = false;
                ((Date.now() - r) / 1000).toFixed(2);
                if (o)
                    ;
                else {
                    t._bundlesReady.add(e);
                    t.saveDownloadedBundle(e);
                }
                t.downloadNextBundle();
            }, function () { });
        }
        else {
            this._bundlesReady.add(e);
            this.downloadNextBundle();
        }
    };
    FlowerCardSeriesTrait.prototype.getResName = function (e) {
        return e;
    };
    FlowerCardSeriesTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        if (this._cachedShouldApplyTheme) {
            var a = this.getResName(e.args[0]);
            if (a) {
                var o = this.getCurrentModeData();
                if (o && o.currentSeries) {
                    var i = a.replace(/\.png$/i, "");
                    if (FlowerCardSeriesTrait_1.FLOWER_CARD_NAMES.has(i)) {
                        var n = o.currentSeries;
                        if (0 === n.id) {
                            t();
                            return;
                        }
                        var l = n.bundle;
                        if (!n.isLocal && !this.isBundleReady(l)) {
                            this.saveModeData({
                                currentSeries: null
                            });
                            t();
                            return;
                        }
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            returnVal: {
                                path: "atlas/flowerCardIcon/" + a,
                                bundleName: l,
                                fromAtlas: true
                            }
                        });
                    }
                    else if (o.currentBase) {
                        var s = o.currentBase;
                        l = s.bundle;
                        if (!s.isLocal && !this._bundlesReady.has(l)) {
                            this.saveModeData({
                                currentBase: null
                            });
                            t();
                            return;
                        }
                        if ("mainRes" === l) {
                            t();
                            return;
                        }
                        t({
                            isBreak: true,
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            returnVal: {
                                path: "atlas/cardIcon/" + a,
                                bundleName: l,
                                fromAtlas: true
                            }
                        });
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
    FlowerCardSeriesTrait.prototype.getEnableBaseSkin = function () {
        return this._enableBaseSkin;
    };
    FlowerCardSeriesTrait.prototype.getDrawMode = function () {
        return this._drawMode;
    };
    FlowerCardSeriesTrait.prototype.getCurrentModeSeriesId = function () {
        if (!this._cachedShouldApplyTheme)
            return -1;
        var e = this.getCurrentModeData();
        return e && e.currentSeries ? e.currentSeries.id : -1;
    };
    FlowerCardSeriesTrait.prototype.getCurrentSeriesId = function () {
        var e = this.getCurrentModeData();
        if (!e || !e.currentSeries)
            return "0";
        var t = e.currentSeries;
        return t.bundle.includes("flowerStar") ? t.name : t.id.toString();
    };
    FlowerCardSeriesTrait.prototype.getNormalLevelId = function () {
        var e = UserModel_1.default.getInstance().getMainGameData();
        return (null == e ? void 0 : e.getLevelId()) || 0;
    };
    FlowerCardSeriesTrait.prototype.getMinLevelToEnable = function () {
        return this._minLevelToEnable;
    };
    FlowerCardSeriesTrait.prototype.isFeatureEnabled = function () {
        var e = this.getNormalLevelId(), t = this.getMinLevelToEnable();
        return e >= (null != t ? t : this._minLevelToEnable);
    };
    FlowerCardSeriesTrait.prototype.shouldApplyTheme = function () {
        return this._currentGameType !== GameTypeEnums_1.MjGameType.Classic && !!(this._currentGameType !== GameTypeEnums_1.MjGameType.Normal && this._currentGameType !== GameTypeEnums_1.MjGameType.Tile2Normal || this._enableForNormal);
    };
    FlowerCardSeriesTrait.prototype.drawFlowerSeries = function () {
        var e = true;
        this._isPrepareNextGame && (e = this.shouldLimitBundlePool());
        this._isEndGameDownloadMode = !e;
        var t = this.getDrawMode() === exports.EFlowerDrawMode.Sequence ? this.drawSequence() : this.drawRandom();
        this._isEndGameDownloadMode = false;
        this.saveModeData({
            currentSeries: t
        });
        this.setLastSeriesId(t.id);
        return t;
    };
    FlowerCardSeriesTrait.prototype.shouldLimitBundlePool = function () {
        return true;
    };
    FlowerCardSeriesTrait.prototype.drawSequence = function () {
        var e, t = this.getSequenceSeriesId(), r = this.getFlowerSeries();
        if (null === t)
            e = r[0].id;
        else {
            var a = r.find(function (e) {
                return e.id > t;
            });
            e = a ? a.id : r[0].id;
        }
        this.setSequenceSeriesId(e);
        var o = r.find(function (t) {
            return t.id === e;
        });
        return o ? this._isEndGameDownloadMode ? o : o.isLocal || this.isBundleReady(o.bundle) ? o : this.drawRandom() : this.drawRandom();
    };
    FlowerCardSeriesTrait.prototype.getNextSeriesId = function (e) {
        var t = this.getFlowerSeries(), r = t.find(function (t) {
            return t.id > e;
        });
        return r ? r.id : t[0].id;
    };
    FlowerCardSeriesTrait.prototype.drawRandom = function () {
        var e = this, t = this.getFlowerSeries();
        if (this._isEndGameDownloadMode) {
            var r = t.filter(function (t) {
                return t.id !== e.getLastSeriesId();
            });
            return this.randomPick(r);
        }
        var a = t.filter(function (t) {
            return t.id !== e.getLastSeriesId() && (!!t.isLocal || e.isBundleReady(t.bundle));
        });
        return this.randomPick(a);
    };
    FlowerCardSeriesTrait.prototype.drawBase = function () {
        if (!this.getEnableBaseSkin()) {
            this.saveModeData({
                currentBase: null
            });
            return null;
        }
        var e = this.randomPick(this.getBaseSeriesList());
        this.saveModeData({
            currentBase: e
        });
        return e;
    };
    FlowerCardSeriesTrait.prototype.randomPick = function (e) {
        return e[Math.floor(Math.random() * e.length)];
    };
    FlowerCardSeriesTrait.prototype.onWinCtrl_viewShow = function (e, t) {
        var r, a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
        this.prepareNextGame(a);
        t();
    };
    FlowerCardSeriesTrait.prototype.onTLWinCtrl_viewShow = function (e, t) {
        var r, a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
        this.prepareNextGame(a);
        t();
    };
    FlowerCardSeriesTrait.prototype.onDCWinCtrl_viewShow = function (e, t) {
        var r, a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
        this.prepareNextGame(a);
        t();
    };
    FlowerCardSeriesTrait.prototype.onTile2WinCtrl_viewShow = function (e, t) {
        var r, a = null === (r = e.ins) || void 0 === r ? void 0 : r.parentController;
        this.prepareNextGame(a);
        t();
    };
    FlowerCardSeriesTrait.prototype.prepareNextGame = function (e) {
        var t = this;
        try {
            this._cachedIsFeatureEnabled = this.isFeatureEnabled();
            this._cachedShouldApplyTheme = this._cachedIsFeatureEnabled && this.shouldApplyTheme();
            if (!this._cachedShouldApplyTheme)
                return;
            this.onNewGameDetected(true);
            this.preloadAllRemoteBundles();
            this._isPrepareNextGame = true;
            var a = this.drawFlowerSeries(), o = this.drawBase();
            this._isPrepareNextGame = false;
            var i = function i() {
                0 !== a.id && t.preloadAtlas("atlas/flowerCardIcon", a.bundle, a.isLocal, e);
                o && "mainRes" !== o.bundle && t.preloadAtlas("atlas/cardIcon", o.bundle, o.isLocal, e);
            };
            if (this.shouldLimitBundlePool())
                i();
            else {
                var n = [];
                0 === a.id || a.isLocal || this.isBundleReady(a.bundle) || n.push(a.bundle);
                !o || "mainRes" === o.bundle || o.isLocal || this.isBundleReady(o.bundle) || n.push(o.bundle);
                if (n.length > 0) {
                    this.downloadBundlesSequentially(n).then(function () {
                        var e = t.getCurrentModeData();
                        (null == e ? void 0 : e.currentSeries) && i();
                    });
                }
                else {
                    i();
                }
            }
        }
        catch (e) {
            console.error("[" + FlowerCardSeriesTrait_1.traitKey + "] 准备下一局失败: " + e.message);
        }
    };
    FlowerCardSeriesTrait.prototype.preloadAtlas = function (e, t, r, a) {
        if (r || this.isBundleReady(t)) {
            var o = a;
            o || (o = this.getGameControllerByType(this._currentGameType));
            o && "function" == typeof o.loadRes && o.loadRes(e, cc.SpriteAtlas, t).then(function () { }).catch(function () { });
        }
    };
    FlowerCardSeriesTrait.prototype.getGameControllerByType = function (e) {
        var t = ControllerManager_1.default.getInstance();
        switch (e) {
            case GameTypeEnums_1.MjGameType.Normal:
                return t.getControByName("MainGameController");
            case GameTypeEnums_1.MjGameType.Tile2Normal:
                return t.getControByName("Tile2GameController");
            case GameTypeEnums_1.MjGameType.Travel:
                return t.getControByName("TravelGameController");
            case GameTypeEnums_1.MjGameType.DailyChallenge:
                return t.getControByName("DailyChallengeController");
            case GameTypeEnums_1.MjGameType.Classic:
                return t.getControByName("ClassicController");
            default:
                return t.getControByName("MainGameController");
        }
    };
    FlowerCardSeriesTrait.prototype.onIptSetLv_setData = function (e, t) {
        var r;
        this._gameContent = null === (r = e.ins) || void 0 === r ? void 0 : r.gameContext;
        t();
    };
    FlowerCardSeriesTrait.prototype.loadSpine = function (e, t) {
        var r = this;
        if (e && !(e.id <= 0) && this.isOpenClearEffect()) {
            var a = e.bundle, o = t || this.getGameControllerByType(this._currentGameType);
            if (o && "function" == typeof o.loadRes) {
                this._currSkData = null;
                o.loadRes("spine/gameplay_special_elimination", sp.SkeletonData, a).then(function (e) {
                    var t = Array.isArray(e) ? e[0] : e;
                    r._currSkData = t || null;
                }).catch(function () {
                    r._currSkData = null;
                });
            }
        }
    };
    FlowerCardSeriesTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var r, a;
        if (this._cachedShouldApplyTheme) {
            var o = this.getCurrentModeData();
            if (null == o ? void 0 : o.currentSeries) {
                var i = null === (a = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === a ? void 0 : a.gameCtr;
                this.loadSpine(o.currentSeries, i);
            }
            t();
        }
        else
            t();
    };
    FlowerCardSeriesTrait.prototype.onClearEffBhv_isSpCard = function (e, t) {
        if (this._cachedShouldApplyTheme) {
            var r = e.args[0], a = e.args[1], o = false, i = this.getCurrentModeData().currentSeries;
            (i ? i.id : 0) > 0 && this.isOpenClearEffect() && (o = this.isFlowerCollision(e.ins, r, a));
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: o
            });
        }
        else
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
    };
    FlowerCardSeriesTrait.prototype.onClearEffBhv_changeSpSkd = function (e, t) {
        if (this._cachedShouldApplyTheme) {
            var r = e.args[0], a = this._currSkData;
            a && cc.isValid(a) && r && r.skeletonData !== a && (r.skeletonData = a);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
    };
    FlowerCardSeriesTrait.prototype.onT2ClearEffBhv_getAniCfg = function (e, t) {
        var r, a, o, i, n, l, s, u = this;
        if (this._cachedShouldApplyTheme && this._currSkData) {
            var d = null === (r = this.getCurrentModeData()) || void 0 === r ? void 0 : r.currentSeries;
            if (!d || d.id <= 0 || !this.isOpenClearEffect())
                t();
            else {
                var c = null === (a = e.args) || void 0 === a ? void 0 : a[0];
                if (this.checkFlowerEffect(c)) {
                    var h = null === (o = null == c ? void 0 : c.data) || void 0 === o ? void 0 : o.cardIds;
                    if (!h || 0 === h.length) {
                        var f = null === (i = null == c ? void 0 : c.data) || void 0 === i ? void 0 : i.tileIds, m = null === (s = null === (l = null === (n = e.ins) || void 0 === n ? void 0 : n.context) || void 0 === l ? void 0 : l.getTileMapObject) || void 0 === s ? void 0 : s.call(l);
                        Array.isArray(f) && m && (h = f.map(function (e) {
                            var t, r;
                            return null === (r = null === (t = m.getTileObject) || void 0 === t ? void 0 : t.call(m, e)) || void 0 === r ? void 0 : r.cardId;
                        }).filter(function (e) {
                            return null != e;
                        }));
                    }
                    if (h && h.some(function (e) {
                        return u.isFlowerCardId(e);
                    })) {
                        var y = d.bundle;
                        t({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true,
                            returnVal: {
                                path: "spine/gameplay_special_elimination",
                                bundle: y,
                                animName: "in"
                            }
                        });
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
    FlowerCardSeriesTrait.prototype.checkFlowerEffect = function () {
        return true;
    };
    FlowerCardSeriesTrait.prototype.isOpenClearEffect = function () {
        return false;
    };
    FlowerCardSeriesTrait.prototype.isFlowerCollision = function (e, t, r) {
        var a, o = null == e ? void 0 : e.context, i = null === (a = null == o ? void 0 : o.getTileMapObject) || void 0 === a ? void 0 : a.call(o);
        if (!i)
            return false;
        var n = t ? i.getTileObject(t) : null, l = r ? i.getTileObject(r) : null;
        return this.isFlowerCardId(null == n ? void 0 : n.cardId) || this.isFlowerCardId(null == l ? void 0 : l.cardId);
    };
    FlowerCardSeriesTrait.prototype.isFlowerCardId = function (e) {
        if (!e)
            return false;
        if (e >= 28 && e <= 34)
            return true;
        if (e == GameTypeEnums_1.MjCardId.emFlowCardId || e == GameTypeEnums_1.MjCardId.emSeasonCardId) {
            var t = {
                isFlower: true
            };
            mj.triggerInternalEvent("FlwCdSeries_isOldFlw", this, [e, t]);
            return t.isFlower;
        }
        return e >= GameTypeEnums_1.MjCardId.emFlowCardIdMei && e <= GameTypeEnums_1.MjCardId.emSeasonCardIdDong;
    };
    FlowerCardSeriesTrait.prototype.onClearEffBhv_getSpAnimName = function (e, t) {
        var r = e.args[0] ? "in_1" : "in";
        t({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: r
        });
    };
    FlowerCardSeriesTrait.prototype.onDianZanTt_checkDZSpecial = function (e, t) {
        var r, a;
        if (this._cachedShouldApplyTheme) {
            var o = this.getCurrentModeData().currentSeries;
            if (!o || o.id <= 0)
                t();
            else {
                var i = e.args[0], n = null === (a = null === (r = this._gameContent) || void 0 === r ? void 0 : r.getTileMapObject) || void 0 === a ? void 0 : a.call(r);
                if (1 != this._traitData.dianzan && this.isOpenClearEffect()) {
                    var l = false;
                    if (n) {
                        var s = i ? n.getTileObject(i) : null;
                        l = this.isFlowerCardId(null == s ? void 0 : s.cardId);
                    }
                    t({
                        returnType: TraitManager_1.TraitCallbackReturnType.jump,
                        returnVal: !l
                    });
                }
                else
                    t();
            }
        }
        else
            t();
    };
    FlowerCardSeriesTrait.prototype.onDGameStart_adjust = function (e, t) {
        var r = e.args[0];
        r && (r.card_suit = this.getCurrentSeriesId());
        t();
    };
    FlowerCardSeriesTrait.prototype.onDGameEnd_adjust = function (e, t) {
        var r = e.args[0];
        r && (r.card_suit = this.getCurrentSeriesId());
        t();
    };
    FlowerCardSeriesTrait.prototype.isPreloadCurrentSeriesBundle = function () {
        return false;
    };
    FlowerCardSeriesTrait.prototype.preloadCurrentSeriesBundle = function () {
        var e = this.collectCurrentSeriesBundles();
        return 0 === e.length ? Promise.resolve() : this.downloadBundlesSequentially(e).then(function () { });
    };
    FlowerCardSeriesTrait.prototype.collectCurrentSeriesBundles = function () {
        var e = this, t = [];
        [UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal ? this.localData.Tile2Normal : this.localData.Normal, this.localData.Travel, this.localData.DailyChallenge].forEach(function (r) {
            if (r) {
                var a = r.currentSeries;
                a && !a.isLocal && "mainRes" !== a.bundle && (e.isBundleReady(a.bundle) || t.includes(a.bundle) || t.push(a.bundle));
                var o = r.currentBase;
                o && !o.isLocal && "mainRes" !== o.bundle && (e.isBundleReady(o.bundle) || t.includes(o.bundle) || t.push(o.bundle));
            }
        });
        this.localData.downloadedBundles && this.localData.downloadedBundles.length > 0 && this.localData.downloadedBundles.forEach(function (r) {
            e.isBundleReady(r) || t.includes(r) || t.push(r);
        });
        return t;
    };
    FlowerCardSeriesTrait.prototype.downloadBundlesSequentially = function (e) {
        var t = this;
        return e.reduce(function (e, r) {
            return e.then(function () {
                return t.downloadSingleBundle(r);
            });
        }, Promise.resolve());
    };
    FlowerCardSeriesTrait.prototype.downloadSingleBundle = function (e) {
        var t = this;
        return new Promise(function (r) {
            if (t.isBundleReady(e))
                r();
            else {
                var a = Date.now();
                if (ResManager_1.resManager.isRemoteBundle(e))
                    t._tm.preloadAllRes(e, function (o, i) {
                        ((Date.now() - a) / 1000).toFixed(2);
                        if (i)
                            ;
                        else {
                            t._bundlesReady.add(e);
                            t.saveDownloadedBundle(e);
                        }
                        r();
                    }, function () { });
                else {
                    t._bundlesReady.add(e);
                    r();
                }
            }
        });
    };
    FlowerCardSeriesTrait.prototype.saveDownloadedBundle = function (e) {
        if (!this.localData.downloadedBundles.includes(e)) {
            this.localData.downloadedBundles.push(e);
            this.localData.downloadedBundles = this.localData.downloadedBundles;
        }
    };
    FlowerCardSeriesTrait.prototype.onDotUtil_getFlowerTheme = function (e, t) {
        try {
            var r = this.getCurrentSeriesId();
            if ("0" === r) {
                t();
                return;
            }
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    active: 1,
                    id: r
                }
            });
        }
        catch (e) {
            t();
            return;
        }
    };
    var FlowerCardSeriesTrait_1;
    FlowerCardSeriesTrait.traitKey = "FlowerCardSeries";
    FlowerCardSeriesTrait.FLOWER_CARD_NAMES = new Set(["Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"]);
    __decorate([
        mj.traitEvent("FlowerCS_getFlowerSeries")
    ], FlowerCardSeriesTrait.prototype, "getFlowerSeries", null);
    __decorate([
        mj.traitEvent("FlowerCS_getLastSeriesId")
    ], FlowerCardSeriesTrait.prototype, "getLastSeriesId", null);
    __decorate([
        mj.traitEvent("FlowerCS_setLastSeriesId")
    ], FlowerCardSeriesTrait.prototype, "setLastSeriesId", null);
    __decorate([
        mj.traitEvent("FlowerCS_getSeqId")
    ], FlowerCardSeriesTrait.prototype, "getSequenceSeriesId", null);
    __decorate([
        mj.traitEvent("FlowerCS_setSeqId")
    ], FlowerCardSeriesTrait.prototype, "setSequenceSeriesId", null);
    __decorate([
        mj.traitEvent("FlowerCS_getBaseSeries")
    ], FlowerCardSeriesTrait.prototype, "getBaseSeriesList", null);
    __decorate([
        mj.traitEvent("FlowerCS_getDiffFlower")
    ], FlowerCardSeriesTrait.prototype, "getDiffFlowerSeries", null);
    __decorate([
        mj.traitEvent("FlowerCS_getThemePeriod")
    ], FlowerCardSeriesTrait.prototype, "getThemePeriod", null);
    __decorate([
        mj.traitEvent("FlowerCS_isBundleReady")
    ], FlowerCardSeriesTrait.prototype, "isBundleReady", null);
    __decorate([
        mj.traitEvent("FlowerCS_getAllModeData")
    ], FlowerCardSeriesTrait.prototype, "getAllModeData", null);
    __decorate([
        mj.traitEvent("FlowerCS_shouldKeep")
    ], FlowerCardSeriesTrait.prototype, "shouldKeepData", null);
    __decorate([
        mj.traitEvent("FlowerCS_preloadAll")
    ], FlowerCardSeriesTrait.prototype, "preloadAllRemoteBundles", null);
    __decorate([
        mj.traitEvent("FlowerCS_sortQueue")
    ], FlowerCardSeriesTrait.prototype, "sortDownloadQueue", null);
    __decorate([
        mj.traitEvent("FlowerCS_downloadNext")
    ], FlowerCardSeriesTrait.prototype, "downloadNextBundle", null);
    __decorate([
        mj.traitEvent("FlowerCS_downloadOk")
    ], FlowerCardSeriesTrait.prototype, "onDownloadOk", null);
    __decorate([
        mj.traitEvent("FlowerCS_newGameDetected")
    ], FlowerCardSeriesTrait.prototype, "onNewGameDetected", null);
    __decorate([
        mj.traitEvent("FlowerCS_getResName")
    ], FlowerCardSeriesTrait.prototype, "getResName", null);
    __decorate([
        mj.traitEvent("FlowerCS_enableBase")
    ], FlowerCardSeriesTrait.prototype, "getEnableBaseSkin", null);
    __decorate([
        mj.traitEvent("FlowerCS_drawMode")
    ], FlowerCardSeriesTrait.prototype, "getDrawMode", null);
    __decorate([
        mj.traitEvent("FlowerCS_getMinLvEnable")
    ], FlowerCardSeriesTrait.prototype, "getMinLevelToEnable", null);
    __decorate([
        mj.traitEvent("FlowerCS_drawFlower")
    ], FlowerCardSeriesTrait.prototype, "drawFlowerSeries", null);
    __decorate([
        mj.traitEvent("FlowerCS_shouldLimit")
    ], FlowerCardSeriesTrait.prototype, "shouldLimitBundlePool", null);
    __decorate([
        mj.traitEvent("FlowerCS_chkFlowerEff")
    ], FlowerCardSeriesTrait.prototype, "checkFlowerEffect", null);
    __decorate([
        mj.traitEvent("FlowerCS_isOpenCEff")
    ], FlowerCardSeriesTrait.prototype, "isOpenClearEffect", null);
    __decorate([
        mj.traitEvent("FlowerCS_isPreloadCur")
    ], FlowerCardSeriesTrait.prototype, "isPreloadCurrentSeriesBundle", null);
    __decorate([
        mj.traitEvent("FlowerCS_preloadCur")
    ], FlowerCardSeriesTrait.prototype, "preloadCurrentSeriesBundle", null);
    FlowerCardSeriesTrait = FlowerCardSeriesTrait_1 = __decorate([
        mj.trait,
        mj.class("FlowerCardSeriesTrait")
    ], FlowerCardSeriesTrait);
    return FlowerCardSeriesTrait;
}(Trait_1.default));
exports.default = FlowerCardSeriesTrait;

cc._RF.pop();