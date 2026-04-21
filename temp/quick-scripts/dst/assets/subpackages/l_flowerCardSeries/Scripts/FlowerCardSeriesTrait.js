
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerCardSeries/Scripts/FlowerCardSeriesTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNhcmRTZXJpZXMvU2NyaXB0cy9GbG93ZXJDYXJkU2VyaWVzVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRkFBcUY7QUFDckYsd0ZBQThGO0FBQzlGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLDRFQUEyRTtBQUNoRSxRQUFBLGVBQWUsR0FBRztJQUMzQixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtDQUNyQixDQUFDO0FBR0Y7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFveUNDO1FBbnlDQyxxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFTLEdBQUcsdUJBQWUsQ0FBQyxNQUFNLENBQUM7UUFDbkMsbUJBQWEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzFCLDBCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMxQixvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixzQkFBZ0IsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUNyQyx5QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFDNUIsNEJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLHdCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLDZCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNoQyw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsdUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUs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QyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzJFQUlwQztJQTl0Q2tCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FveUN6QztJQUFELDRCQUFDO0NBcHlDRCxBQW95Q0MsQ0FweUNrRCxlQUFLLEdBb3lDdkQ7a0JBcHlDb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgTWpDYXJkSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9SZXNNYW5hZ2VyJztcbmV4cG9ydCB2YXIgRUZsb3dlckRyYXdNb2RlID0ge1xuICBSYW5kb206IFwicmFuZG9tXCIsXG4gIFNlcXVlbmNlOiBcInNlcXVlbmNlXCJcbn07XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZsb3dlckNhcmRTZXJpZXNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvd2VyQ2FyZFNlcmllc1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZW5hYmxlQmFzZVNraW4gPSBmYWxzZTtcbiAgX2RyYXdNb2RlID0gRUZsb3dlckRyYXdNb2RlLlJhbmRvbTtcbiAgX2J1bmRsZXNSZWFkeSA9IG5ldyBTZXQoKTtcbiAgX3JlbW90ZURvd25sb2FkUXVldWUgPSBbXTtcbiAgX2lzRG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgX2N1cnJlbnRHYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9ybWFsO1xuICBfaGFzU3RhcnRlZERvd25sb2FkID0gZmFsc2U7XG4gIF9pc0VuZEdhbWVEb3dubG9hZE1vZGUgPSBmYWxzZTtcbiAgX2lzUHJlcGFyZU5leHRHYW1lID0gZmFsc2U7XG4gIF9lbmFibGVGb3JOb3JtYWwgPSB0cnVlO1xuICBfbWluTGV2ZWxUb0VuYWJsZSA9IDI7XG4gIF9nYW1lQ29udGVudCA9IG51bGw7XG4gIF9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkID0gZmFsc2U7XG4gIF9jYWNoZWRTaG91bGRBcHBseVRoZW1lID0gZmFsc2U7XG4gIF9mbG93ZXJTZXJpZXNMaXN0ID0gW3tcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIuacqOi0qFwiLFxuICAgIGJ1bmRsZTogXCJtYWluUmVzXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCLkuZDlmahcIixcbiAgICBidW5kbGU6IFwibF9mbG93ZXJTZXJpZXMwMlwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwi5bu6562RXCIsXG4gICAgYnVuZGxlOiBcImxfZmxvd2VyU2VyaWVzMDRcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMTYsXG4gICAgbmFtZTogXCLpo5/nialcIixcbiAgICBidW5kbGU6IFwibF9mbG93ZXJTZXJpZXMxNlwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiAxOSxcbiAgICBuYW1lOiBcIuWco+ivnlwiLFxuICAgIGJ1bmRsZTogXCJsX2Zsb3dlclNlcmllczE5XCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDQzLFxuICAgIG5hbWU6IFwi5Lit5LiW57qq54mp5Lu2XCIsXG4gICAgYnVuZGxlOiBcImxfZmxvd2VyU2VyaWVzNDNcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIuawtOaenFwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczAxXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwi5YGH5pel5oKg6ZeyXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMDNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCLov5DliqhcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwNlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIuWGrOaXpVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczA3XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwi5pil6IqCXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMDhcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDksXG4gICAgbmFtZTogXCLkuqTpgJrlt6XlhbdcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwOVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTAsXG4gICAgbmFtZTogXCLpg6jokL1cIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxMFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCLliqjnialcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTIsXG4gICAgbmFtZTogXCLolKzoj5xcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxMlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTMsXG4gICAgbmFtZTogXCLoirHmpI3nialcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxM1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTQsXG4gICAgbmFtZTogXCLniLHkuL3kuJ1cIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxNFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTUsXG4gICAgbmFtZTogXCLlm73pmYXosaHmo4tcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxNVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTcsXG4gICAgbmFtZTogXCLmmJ/luqdcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxN1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMTgsXG4gICAgbmFtZTogXCLprZTms5VcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMxOFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjAsXG4gICAgbmFtZTogXCLns5bmnpxcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyMFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjEsXG4gICAgbmFtZTogXCLlg4/ntKBcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjIsXG4gICAgbmFtZTogXCLmtbfmtItcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyMlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjMsXG4gICAgbmFtZTogXCLljYHkuoznlJ/ogpZcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyM1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjQsXG4gICAgbmFtZTogXCLlpKnmsJRcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyNFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjUsXG4gICAgbmFtZTogXCLlh6DkvZVcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyNVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjcsXG4gICAgbmFtZTogXCLmjqLpmalcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyN1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjksXG4gICAgbmFtZTogXCJlbW9qaeihqOaDhVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczI5XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzMCxcbiAgICBuYW1lOiBcIumlruWTgVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczMwXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzMSxcbiAgICBuYW1lOiBcIuiIqua1t1wiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczMxXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzMixcbiAgICBuYW1lOiBcIueJm+S7lFwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczMyXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzMyxcbiAgICBuYW1lOiBcIumdouWMheeUnOicnFwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczMzXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzNCxcbiAgICBuYW1lOiBcIuWfg+WPilwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczM0XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzNSxcbiAgICBuYW1lOiBcIuWtl+avjVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczM1XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzNixcbiAgICBuYW1lOiBcIue+juWmhlwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczM2XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzNyxcbiAgICBuYW1lOiBcIua4uOS5kOWbrVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczM3XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzOCxcbiAgICBuYW1lOiBcIuWbveaXl1wiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczM4XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiAzOSxcbiAgICBuYW1lOiBcIumfs+esplwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczM5XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA0MSxcbiAgICBuYW1lOiBcIuWPtuWtkCbmnpzlrp5cIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM0MVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNDIsXG4gICAgbmFtZTogXCLnjrDku6PkuJzmlrko6IqC5pel5LiO5Lyg57ufKVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQyXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA0NCxcbiAgICBuYW1lOiBcIuWbveWutueJueiJsumjn+eJqeWSjOS6i+eJqVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQ0XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA0NSxcbiAgICBuYW1lOiBcIuaYn+eQg1wiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQ1XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA0NixcbiAgICBuYW1lOiBcIuWhlOe9l1wiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQ2XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA0NyxcbiAgICBuYW1lOiBcIuerpeivnVwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQ3XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA0OSxcbiAgICBuYW1lOiBcIuiIquWkqeenkeaKgFwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQ5XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA1MCxcbiAgICBuYW1lOiBcIumkkOWFt1/ljqjlhbdcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM1MFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNTIsXG4gICAgbmFtZTogXCLnjqnlhbdcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM1MlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNTQsXG4gICAgbmFtZTogXCLkuqTpgJrlronlhahcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM1NFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNTUsXG4gICAgbmFtZTogXCLpm7bpo59f5b+r6aSQXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9XTtcbiAgX2Jhc2VTZXJpZXNMaXN0ID0gW3tcbiAgICBpZDogXCJiYXNlX3dvb2RcIixcbiAgICBuYW1lOiBcIuacqOi0qFwiLFxuICAgIGJ1bmRsZTogXCJtYWluUmVzXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9XTtcbiAgX3RoZW1lUGVyaW9kID0gMTtcbiAgX2RpZmZGbG93ZXJTZXJpZXNMaXN0ID0ge1xuICAgIDI6IFt7XG4gICAgICBpZDogMyxcbiAgICAgIG5hbWU6IFwi5YGH5pel5oKg6ZeyXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwM18wMVwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogMjEsXG4gICAgICBuYW1lOiBcIuWDj+e0oFwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjFfMDFcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDI3LFxuICAgICAgbmFtZTogXCLmjqLpmalcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczI3XzAxXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiAzMSxcbiAgICAgIG5hbWU6IFwi6Iiq5rW3XCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzMV8wMVwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogMzksXG4gICAgICBuYW1lOiBcIumfs+esplwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMzlfMDFcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDQ0LFxuICAgICAgbmFtZTogXCLlm73lrrbnibnoibLpo5/nianlkozkuovnialcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczQ0XzAxXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA1LFxuICAgICAgbmFtZTogXCJR54mI5Zu96aOOXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwNVwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogMjgsXG4gICAgICBuYW1lOiBcIumprOaIj+WbolwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjhcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDQwLFxuICAgICAgbmFtZTogXCLlhpzlhbcm5Yqo54mpXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM0MFwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNDgsXG4gICAgICBuYW1lOiBcIueCvOmHkVwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDhcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDUxLFxuICAgICAgbmFtZTogXCLnrrHljIVcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczUxXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA1MyxcbiAgICAgIG5hbWU6IFwi572Q5aS05p6c6YWxXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM1M1wiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNTYsXG4gICAgICBuYW1lOiBcIueLl+WTgeenjVwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTZcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDU3LFxuICAgICAgbmFtZTogXCLlrrblsYVcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczU3XCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA1OCxcbiAgICAgIG5hbWU6IFwi55Sc5ZOBXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM1OFwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNTksXG4gICAgICBuYW1lOiBcIueBq+mUhVwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTlcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDYwLFxuICAgICAgbmFtZTogXCLnlLXlvbFcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczYwXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA2MSxcbiAgICAgIG5hbWU6IFwi55Sf5rS755So5ZOBXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM2MVwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNjIsXG4gICAgICBuYW1lOiBcIuWBpei6q1wiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjJcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDYzLFxuICAgICAgbmFtZTogXCLmmIbomatcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczYzXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA2NCxcbiAgICAgIG5hbWU6IFwi55m95aWz55Sf5rS754mp5Lu2XCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM2NFwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNjUsXG4gICAgICBuYW1lOiBcIui1m+i9plwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjVcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDY2LFxuICAgICAgbmFtZTogXCLliqjnianlpLTlg49cIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczY2XCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA2NyxcbiAgICAgIG5hbWU6IFwi5oCq5YW9XCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM2N1wiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNjgsXG4gICAgICBuYW1lOiBcIuiJuuacr+WutuWQjeeUu1wiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjhcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDY5LFxuICAgICAgbmFtZTogXCLpkrvnn7Pnj6Dlrp1cIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczY5XCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA3MCxcbiAgICAgIG5hbWU6IFwi5pWR5oqk55So5ZOBXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM3MFwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNzEsXG4gICAgICBuYW1lOiBcIua1t+a7qVwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzFcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDcyLFxuICAgICAgbmFtZTogXCLlip7lhazmloflhbdcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczcyXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA3MyxcbiAgICAgIG5hbWU6IFwi5rW35rSL55Sf54mpXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM3M1wiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNzQsXG4gICAgICBuYW1lOiBcIuaIj+WJp1wiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzRcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDc1LFxuICAgICAgbmFtZTogXCLloqjopb/lk6XkuLvpophcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczc1XCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA3NixcbiAgICAgIG5hbWU6IFwi5YGl6Lqr5Zmo5p2QXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM3NlwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogNzcsXG4gICAgICBuYW1lOiBcIuaDheS6uuiKglwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzdcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDc4LFxuICAgICAgbmFtZTogXCLopb/mlrnnpZ7or51cIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczc4XCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGlkOiA3OSxcbiAgICAgIG5hbWU6IFwi54On54OkXCIsXG4gICAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM3OVwiLFxuICAgICAgaXNMb2NhbDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBpZDogODAsXG4gICAgICBuYW1lOiBcIuW3tOilv+eLguasouiKglwiLFxuICAgICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzODBcIixcbiAgICAgIGlzTG9jYWw6IGZhbHNlXG4gICAgfSwge1xuICAgICAgaWQ6IDgxLFxuICAgICAgbmFtZTogXCLlt6XlhbdcIixcbiAgICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczgxXCIsXG4gICAgICBpc0xvY2FsOiBmYWxzZVxuICAgIH1dXG4gIH07XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93ZXJDYXJkU2VyaWVzXCI7XG4gIHN0YXRpYyBGTE9XRVJfQ0FSRF9OQU1FUyA9IG5ldyBTZXQoW1wiWl9kb25nXCIsIFwiWl9uYW5cIiwgXCJaX3hpXCIsIFwiWl9iZWlcIiwgXCJaX2JhaVwiLCBcIlpfZmFcIiwgXCJaX3pob25nXCIsIFwiSF9tZWlcIiwgXCJIX2xhblwiLCBcIkhfemh1XCIsIFwiSF9qdVwiLCBcIkpfY2h1blwiLCBcIkpfeGlhXCIsIFwiSl9xaXVcIiwgXCJKX2RvbmdcIl0pO1xuICBAbWoudHJhaXRFdmVudChcIkZsb3dlckNTX2dldEZsb3dlclNlcmllc1wiKVxuICBnZXRGbG93ZXJTZXJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Zsb3dlclNlcmllc0xpc3Q7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19nZXRMYXN0U2VyaWVzSWRcIilcbiAgZ2V0TGFzdFNlcmllc0lkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5sYXN0U2VyaWVzSWQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19zZXRMYXN0U2VyaWVzSWRcIilcbiAgc2V0TGFzdFNlcmllc0lkKGUpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2VyaWVzSWQgPSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfZ2V0U2VxSWRcIilcbiAgZ2V0U2VxdWVuY2VTZXJpZXNJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbERhdGEuc2VxdWVuY2VTZXJpZXNJZDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZsb3dlckNTX3NldFNlcUlkXCIpXG4gIHNldFNlcXVlbmNlU2VyaWVzSWQoZSkge1xuICAgIHRoaXMubG9jYWxEYXRhLnNlcXVlbmNlU2VyaWVzSWQgPSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfZ2V0QmFzZVNlcmllc1wiKVxuICBnZXRCYXNlU2VyaWVzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVNlcmllc0xpc3Q7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19nZXREaWZmRmxvd2VyXCIpXG4gIGdldERpZmZGbG93ZXJTZXJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpZmZGbG93ZXJTZXJpZXNMaXN0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfZ2V0VGhlbWVQZXJpb2RcIilcbiAgZ2V0VGhlbWVQZXJpb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lUGVyaW9kO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfaXNCdW5kbGVSZWFkeVwiKVxuICBpc0J1bmRsZVJlYWR5KGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVuZGxlc1JlYWR5LmhhcyhlKTtcbiAgfVxuICBzZXRDdXJyZW50U2VyaWVzQnlJZCgpIHt9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICByID0gKHRoaXMuX3RyYWl0RGF0YS5ldmVudHMgfHwgW10pLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiTWFpbkdhbWVDdHJsX2luaXRSZXNcIiA9PT0gZS5ldmVudDtcbiAgICAgIH0pO1xuICAgIHIgJiYgdm9pZCAwID09PSByLnR5cGUgJiYgKHIudHlwZSA9IDIpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIHRoaXMuX3RyYWl0RGF0YS50aGVtZVBlcmlvZCAmJiAodGhpcy5fdGhlbWVQZXJpb2QgPSB0aGlzLl90cmFpdERhdGEudGhlbWVQZXJpb2QpO1xuICAgIFwiYm9vbGVhblwiID09IHR5cGVvZiB0aGlzLl90cmFpdERhdGEuZW5hYmxlRm9yTm9ybWFsICYmICh0aGlzLl9lbmFibGVGb3JOb3JtYWwgPSB0aGlzLl90cmFpdERhdGEuZW5hYmxlRm9yTm9ybWFsKTtcbiAgICBcIm51bWJlclwiID09IHR5cGVvZiB0aGlzLl90cmFpdERhdGEubWluTGV2ZWxUb0VuYWJsZSAmJiAodGhpcy5fbWluTGV2ZWxUb0VuYWJsZSA9IHRoaXMuX3RyYWl0RGF0YS5taW5MZXZlbFRvRW5hYmxlKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2VyaWVzSWQgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RTZXJpZXNJZCA9IG51bGwpO1xuICAgIHRoaXMubG9jYWxEYXRhLnNlcXVlbmNlU2VyaWVzSWQgfHwgKHRoaXMubG9jYWxEYXRhLnNlcXVlbmNlU2VyaWVzSWQgPSBudWxsKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5Ob3JtYWwgfHwgKHRoaXMubG9jYWxEYXRhLk5vcm1hbCA9IHtcbiAgICAgIGN1cnJlbnRTZXJpZXM6IG51bGwsXG4gICAgICBjdXJyZW50QmFzZTogbnVsbFxuICAgIH0pO1xuICAgIHRoaXMubG9jYWxEYXRhLlRyYXZlbCB8fCAodGhpcy5sb2NhbERhdGEuVHJhdmVsID0ge1xuICAgICAgY3VycmVudFNlcmllczogbnVsbCxcbiAgICAgIGN1cnJlbnRCYXNlOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2UgfHwgKHRoaXMubG9jYWxEYXRhLkRhaWx5Q2hhbGxlbmdlID0ge1xuICAgICAgY3VycmVudFNlcmllczogbnVsbCxcbiAgICAgIGN1cnJlbnRCYXNlOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbERhdGEuVGlsZTJOb3JtYWwgfHwgKHRoaXMubG9jYWxEYXRhLlRpbGUyTm9ybWFsID0ge1xuICAgICAgY3VycmVudFNlcmllczogbnVsbCxcbiAgICAgIGN1cnJlbnRCYXNlOiBudWxsXG4gICAgfSk7XG4gICAgdGhpcy5sb2NhbERhdGEuZG93bmxvYWRlZEJ1bmRsZXMgfHwgKHRoaXMubG9jYWxEYXRhLmRvd25sb2FkZWRCdW5kbGVzID0gW10pO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdC5nZXRUaGVtZVBlcmlvZCgpID49IDIgJiYgdC5yZWdpc3RlckV2ZW50KFt7XG4gICAgICAgIGV2ZW50OiBcIkRHYW1lU3RhcnRfYWRqdXN0XCJcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiREdhbWVFbmRfYWRqdXN0XCJcbiAgICAgIH1dKTtcbiAgICAgIHQucmVnaXN0ZXJFdmVudChbe1xuICAgICAgICBldmVudDogXCJEb3RVdGlsX2dldEZsb3dlclRoZW1lXCJcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiVGlsZTJXaW5DdHJsX3ZpZXdTaG93XCJcbiAgICAgIH0sIHtcbiAgICAgICAgZXZlbnQ6IFwiVDJDbGVhckVmZkJodl9nZXRBbmlDZmdcIixcbiAgICAgICAgcHJpb3JpdHk6IDEwMFxuICAgICAgfV0pO1xuICAgICAgdC5fZmxvd2VyU2VyaWVzTGlzdC5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHJldHVybiBlLmlkIC0gdC5pZDtcbiAgICAgIH0pO1xuICAgICAgdC5tZXJnZURpZmZGbG93ZXJTZXJpZXMoKTtcbiAgICAgIHQuZ2V0QWxsTW9kZURhdGEoKTtcbiAgICAgIHQuaXNQcmVsb2FkQ3VycmVudFNlcmllc0J1bmRsZSgpICYmIHQucHJlbG9hZEN1cnJlbnRTZXJpZXNCdW5kbGUoKTtcbiAgICAgIHQucHJlbG9hZEFsbFJlbW90ZUJ1bmRsZXMoKTtcbiAgICAgIGlmICghdC5zaG91bGRLZWVwRGF0YSgpKSB7XG4gICAgICAgIHQubG9jYWxEYXRhLk5vcm1hbCA9IHtcbiAgICAgICAgICBjdXJyZW50U2VyaWVzOiBudWxsLFxuICAgICAgICAgIGN1cnJlbnRCYXNlOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIHQubG9jYWxEYXRhLlRpbGUyTm9ybWFsID0ge1xuICAgICAgICAgIGN1cnJlbnRTZXJpZXM6IG51bGwsXG4gICAgICAgICAgY3VycmVudEJhc2U6IG51bGxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXJnZURpZmZGbG93ZXJTZXJpZXMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IHRoaXMuZ2V0VGhlbWVQZXJpb2QoKSxcbiAgICAgIHIgPSB0aGlzLmdldERpZmZGbG93ZXJTZXJpZXMoKVt0XTtcbiAgICBpZiAociAmJiBBcnJheS5pc0FycmF5KHIpICYmIDAgIT09IHIubGVuZ3RoKSB7XG4gICAgICB2YXIgYSA9IFtdLFxuICAgICAgICBvID0gW107XG4gICAgICByLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgdC5pZCAmJiB0LmJ1bmRsZSAmJiB0Lm5hbWUpIHtcbiAgICAgICAgICB2YXIgciA9IGUuX2Zsb3dlclNlcmllc0xpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5pZCA9PT0gdC5pZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoLTEgIT09IHIpIHtcbiAgICAgICAgICAgIHZhciBpID0gZS5fZmxvd2VyU2VyaWVzTGlzdFtyXTtcbiAgICAgICAgICAgIGUuX2Zsb3dlclNlcmllc0xpc3Rbcl0gPSB7XG4gICAgICAgICAgICAgIGlkOiB0LmlkLFxuICAgICAgICAgICAgICBuYW1lOiB0Lm5hbWUsXG4gICAgICAgICAgICAgIGJ1bmRsZTogdC5idW5kbGUsXG4gICAgICAgICAgICAgIGlzTG9jYWw6IHZvaWQgMCAhPT0gdC5pc0xvY2FsID8gdC5pc0xvY2FsIDogaS5pc0xvY2FsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYS5wdXNoKHQuaWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbiA9IHtcbiAgICAgICAgICAgICAgaWQ6IHQuaWQsXG4gICAgICAgICAgICAgIG5hbWU6IHQubmFtZSxcbiAgICAgICAgICAgICAgYnVuZGxlOiB0LmJ1bmRsZSxcbiAgICAgICAgICAgICAgaXNMb2NhbDogdm9pZCAwID09PSB0LmlzTG9jYWwgfHwgdC5pc0xvY2FsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZS5fZmxvd2VyU2VyaWVzTGlzdC5wdXNoKG4pO1xuICAgICAgICAgICAgby5wdXNoKHQuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldEN1cnJlbnRNb2RlRGF0YSgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX2N1cnJlbnRHYW1lVHlwZSkge1xuICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLk5vcm1hbDtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLlRpbGUyTm9ybWFsO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLlRyYXZlbDpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLlRyYXZlbDtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTpcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhLkRhaWx5Q2hhbGxlbmdlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfZ2V0QWxsTW9kZURhdGFcIilcbiAgZ2V0QWxsTW9kZURhdGEoKSB7XG4gICAgcmV0dXJuIFtVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA/IHRoaXMubG9jYWxEYXRhLlRpbGUyTm9ybWFsIDogdGhpcy5sb2NhbERhdGEuTm9ybWFsLCB0aGlzLmxvY2FsRGF0YS5UcmF2ZWwsIHRoaXMubG9jYWxEYXRhLkRhaWx5Q2hhbGxlbmdlXTtcbiAgfVxuICBnZXRSZW1vdGVEb3dubG9hZFF1ZXVlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdGVEb3dubG9hZFF1ZXVlO1xuICB9XG4gIHNhdmVNb2RlRGF0YShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1cnJlbnRNb2RlRGF0YSgpO1xuICAgIGlmICh0KSB7XG4gICAgICB2b2lkIDAgIT09IGUuY3VycmVudFNlcmllcyAmJiAodC5jdXJyZW50U2VyaWVzID0gZS5jdXJyZW50U2VyaWVzKTtcbiAgICAgIHZvaWQgMCAhPT0gZS5jdXJyZW50QmFzZSAmJiAodC5jdXJyZW50QmFzZSA9IGUuY3VycmVudEJhc2UpO1xuICAgICAgc3dpdGNoICh0aGlzLl9jdXJyZW50R2FtZVR5cGUpIHtcbiAgICAgICAgY2FzZSBNakdhbWVUeXBlLk5vcm1hbDpcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5Ob3JtYWwgPSB0aGlzLmxvY2FsRGF0YS5Ob3JtYWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDpcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5UaWxlMk5vcm1hbCA9IHRoaXMubG9jYWxEYXRhLlRpbGUyTm9ybWFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1qR2FtZVR5cGUuVHJhdmVsOlxuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLlRyYXZlbCA9IHRoaXMubG9jYWxEYXRhLlRyYXZlbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBNakdhbWVUeXBlLkRhaWx5Q2hhbGxlbmdlOlxuICAgICAgICAgIHRoaXMubG9jYWxEYXRhLkRhaWx5Q2hhbGxlbmdlID0gdGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1Nfc2hvdWxkS2VlcFwiKVxuICBzaG91bGRLZWVwRGF0YSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjbGVhckFsbE1vZGVEYXRhKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLk5vcm1hbCA9IHtcbiAgICAgIGN1cnJlbnRTZXJpZXM6IG51bGwsXG4gICAgICBjdXJyZW50QmFzZTogbnVsbFxuICAgIH07XG4gICAgdGhpcy5sb2NhbERhdGEuVGlsZTJOb3JtYWwgPSB7XG4gICAgICBjdXJyZW50U2VyaWVzOiBudWxsLFxuICAgICAgY3VycmVudEJhc2U6IG51bGxcbiAgICB9O1xuICAgIHRoaXMubG9jYWxEYXRhLlRyYXZlbCA9IHtcbiAgICAgIGN1cnJlbnRTZXJpZXM6IG51bGwsXG4gICAgICBjdXJyZW50QmFzZTogbnVsbFxuICAgIH07XG4gICAgdGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2UgPSB7XG4gICAgICBjdXJyZW50U2VyaWVzOiBudWxsLFxuICAgICAgY3VycmVudEJhc2U6IG51bGxcbiAgICB9O1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXMoZSwgdCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jdXJyZW50R2FtZVR5cGUgPSBlLmlucy5nYW1lVHlwZTtcbiAgICAgIHRoaXMuX2NhY2hlZElzRmVhdHVyZUVuYWJsZWQgPSB0aGlzLmlzRmVhdHVyZUVuYWJsZWQoKTtcbiAgICAgIHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUgPSB0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkICYmIHRoaXMuc2hvdWxkQXBwbHlUaGVtZSgpO1xuICAgICAgaWYgKCF0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJBbGxNb2RlRGF0YSgpO1xuICAgICAgICB0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fY2FjaGVkU2hvdWxkQXBwbHlUaGVtZSkge1xuICAgICAgICB0aGlzLnNhdmVNb2RlRGF0YSh7XG4gICAgICAgICAgY3VycmVudFNlcmllczogbnVsbCxcbiAgICAgICAgICBjdXJyZW50QmFzZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgciA9IHRoaXMuZ2V0Q3VycmVudE1vZGVEYXRhKCksXG4gICAgICAgIGEgPSBmYWxzZTtcbiAgICAgIHIuY3VycmVudFNlcmllcyAmJiAoci5jdXJyZW50U2VyaWVzLmlzTG9jYWwgfHwgdGhpcy5pc0J1bmRsZVJlYWR5KHIuY3VycmVudFNlcmllcy5idW5kbGUpKSB8fCAoYSA9IHRydWUpO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgdGhpcy5vbk5ld0dhbWVEZXRlY3RlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkQWxsUmVtb3RlQnVuZGxlcygpO1xuICAgICAgICB0aGlzLmRyYXdGbG93ZXJTZXJpZXMoKSwgdGhpcy5kcmF3QmFzZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGRQcmVsb2FkQXRsYXMoZS5pbnMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdCgpO1xuICB9XG4gIHJlbW92ZVByZWxvYWRSZXMoZSwgdCwgcikge1xuICAgIGlmIChlICYmIGUucHJlbG9hZFJlc01hcCkge1xuICAgICAgdmFyIGEgPSBlLnByZWxvYWRSZXNNYXBbdF07XG4gICAgICBpZiAoYSkgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGEpIChhID09PSByIHx8IGEuZW5kc1dpdGgoXCI6XCIgKyByKSkgJiYgZGVsZXRlIGUucHJlbG9hZFJlc01hcFt0XTtlbHNlIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIGEubGVuZ3RoO1xuICAgICAgICBlLnByZWxvYWRSZXNNYXBbdF0gPSBhLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBlICE9PSByICYmICFlLmVuZHNXaXRoKFwiOlwiICsgcik7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnByZWxvYWRSZXNNYXBbdF0ubGVuZ3RoO1xuICAgICAgICAwID09PSBlLnByZWxvYWRSZXNNYXBbdF0ubGVuZ3RoICYmIGRlbGV0ZSBlLnByZWxvYWRSZXNNYXBbdF07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFkZFByZWxvYWRBdGxhcyhlKSB7XG4gICAgdmFyIHQgPSBlIHx8IHRoaXMuZ2V0R2FtZUNvbnRyb2xsZXJCeVR5cGUodGhpcy5fY3VycmVudEdhbWVUeXBlKTtcbiAgICBpZiAodCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQuYWRkUHJlbG9hZFJlcykge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldEN1cnJlbnRNb2RlRGF0YSgpLmN1cnJlbnRTZXJpZXMsXG4gICAgICAgIG8gPSB0aGlzLmdldEN1cnJlbnRNb2RlRGF0YSgpLmN1cnJlbnRCYXNlO1xuICAgICAgaWYgKGEgJiYgMCAhPT0gYS5pZCAmJiAhdGhpcy50cnlBZGRQcmVsb2FkQXRsYXModCwgYS5idW5kbGUsIGEuaXNMb2NhbCwgXCJhdGxhcy9mbG93ZXJDYXJkSWNvblwiLCBcIuiKseeJjOWbvumbhlwiKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgRmxvd2VyQ2FyZFNlcmllc1RyYWl0LnRyYWl0S2V5ICsgXCJdIOmUmeivr++8muiKseeJjEJ1bmRsZeacquWwsee7qu+8iFwiICsgYS5idW5kbGUgKyBcIu+8ie+8jOS9huW3sumAmui/h+Wwsee7quajgOafpe+8jOmAu+i+keW8guW4uO+8gVwiKTtcbiAgICAgICAgdGhpcy5zYXZlTW9kZURhdGEoe1xuICAgICAgICAgIGN1cnJlbnRTZXJpZXM6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobyAmJiBcIm1haW5SZXNcIiAhPT0gby5idW5kbGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVQcmVsb2FkUmVzKHQsIFwiU3ByaXRlQXRsYXNcIiwgXCJhdGxhcy9jYXJkSWNvblwiKTtcbiAgICAgICAgaWYgKCF0aGlzLnRyeUFkZFByZWxvYWRBdGxhcyh0LCBvLmJ1bmRsZSwgby5pc0xvY2FsLCBcImF0bGFzL2NhcmRJY29uXCIsIFwiQmFzZeWbvumbhlwiKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBGbG93ZXJDYXJkU2VyaWVzVHJhaXQudHJhaXRLZXkgKyBcIl0g6ZSZ6K+v77yaQmFzZSBCdW5kbGXmnKrlsLHnu6rvvIhcIiArIG8uYnVuZGxlICsgXCLvvInvvIzkvYblt7LpgJrov4flsLHnu6rmo4Dmn6XvvIzpgLvovpHlvILluLjvvIFcIik7XG4gICAgICAgICAgdGhpcy5zYXZlTW9kZURhdGEoe1xuICAgICAgICAgICAgY3VycmVudEJhc2U6IG51bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0LmFkZFByZWxvYWRSZXMoXCJTcHJpdGVBdGxhc1wiLCBcImF0bGFzL2NhcmRJY29uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRyeUFkZFByZWxvYWRBdGxhcyhlLCB0LCByLCBhKSB7XG4gICAgaWYgKHIgfHwgdGhpcy5pc0J1bmRsZVJlYWR5KHQpKSB7XG4gICAgICB2YXIgbyA9IHQgKyBcIjpcIiArIGE7XG4gICAgICBlLmFkZFByZWxvYWRSZXMoXCJTcHJpdGVBdGxhc1wiLCBvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19wcmVsb2FkQWxsXCIpXG4gIHByZWxvYWRBbGxSZW1vdGVCdW5kbGVzKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX2hhc1N0YXJ0ZWREb3dubG9hZCkge1xuICAgICAgdGhpcy5faGFzU3RhcnRlZERvd25sb2FkID0gdHJ1ZTtcbiAgICAgIHZhciB0ID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5nZXRGbG93ZXJTZXJpZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHIuaXNMb2NhbCB8fCBcIm1haW5SZXNcIiA9PT0gci5idW5kbGUgfHwgZS5pc0J1bmRsZVJlYWR5KHIuYnVuZGxlKSB8fCB0LmFkZChyLmJ1bmRsZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0QmFzZVNlcmllc0xpc3QoKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHIuaXNMb2NhbCB8fCBcIm1haW5SZXNcIiA9PT0gci5idW5kbGUgfHwgZS5pc0J1bmRsZVJlYWR5KHIuYnVuZGxlKSB8fCB0LmFkZChyLmJ1bmRsZSk7XG4gICAgICB9KTtcbiAgICAgIGlmICgwICE9PSB0LnNpemUpIHtcbiAgICAgICAgdGhpcy5fcmVtb3RlRG93bmxvYWRRdWV1ZSA9IEFycmF5LmZyb20odCk7XG4gICAgICAgIHRoaXMuc29ydERvd25sb2FkUXVldWUoKTtcbiAgICAgICAgdGhpcy5kb3dubG9hZE5leHRCdW5kbGUoKTtcbiAgICAgIH0gZWxzZSB0aGlzLm9uRG93bmxvYWRPaygpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZsb3dlckNTX3NvcnRRdWV1ZVwiKVxuICBzb3J0RG93bmxvYWRRdWV1ZSgpIHtcbiAgICBpZiAoISh0aGlzLl9yZW1vdGVEb3dubG9hZFF1ZXVlLmxlbmd0aCA8PSAxKSkge1xuICAgICAgdmFyIGUgPSBuZXcgU2V0KCk7XG4gICAgICBbe1xuICAgICAgICBuYW1lOiBcIk1haW5MaW5lXCIsXG4gICAgICAgIGRhdGE6IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gdGhpcy5sb2NhbERhdGEuVGlsZTJOb3JtYWwgOiB0aGlzLmxvY2FsRGF0YS5Ob3JtYWxcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJUcmF2ZWxcIixcbiAgICAgICAgZGF0YTogdGhpcy5sb2NhbERhdGEuVHJhdmVsXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiRGFpbHlDaGFsbGVuZ2VcIixcbiAgICAgICAgZGF0YTogdGhpcy5sb2NhbERhdGEuRGFpbHlDaGFsbGVuZ2VcbiAgICAgIH1dLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIHIsXG4gICAgICAgICAgYSA9IG51bGwgPT09IChyID0gdC5kYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmN1cnJlbnRTZXJpZXM7XG4gICAgICAgIGEgJiYgYS5pZCA+IDAgJiYgIWEuaXNMb2NhbCAmJiBlLmFkZChhLmJ1bmRsZSk7XG4gICAgICB9KTtcbiAgICAgIHZhciB0ID0gbmV3IFNldCh0aGlzLmxvY2FsRGF0YS5kb3dubG9hZGVkQnVuZGxlcyB8fCBbXSksXG4gICAgICAgIHIgPSBbXSxcbiAgICAgICAgYSA9IFtdLFxuICAgICAgICBvID0gW107XG4gICAgICB0aGlzLl9yZW1vdGVEb3dubG9hZFF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaWYgKGUuaGFzKGkpKSB7XG4gICAgICAgICAgci5wdXNoKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0LmhhcyhpKSkge1xuICAgICAgICAgICAgYS5wdXNoKGkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvLnB1c2goaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3JlbW90ZURvd25sb2FkUXVldWUgPSBbLi4uciwgLi4uYV07XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfZG93bmxvYWROZXh0XCIpXG4gIGRvd25sb2FkTmV4dEJ1bmRsZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRG93bmxvYWRpbmcpIGlmICgwICE9PSB0aGlzLl9yZW1vdGVEb3dubG9hZFF1ZXVlLmxlbmd0aCkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9yZW1vdGVEb3dubG9hZFF1ZXVlLnNoaWZ0KCk7XG4gICAgICB0aGlzLnByZWxvYWRSZW1vdGVCdW5kbGUoZSk7XG4gICAgfSBlbHNlIHRoaXMub25Eb3dubG9hZE9rKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19kb3dubG9hZE9rXCIpXG4gIG9uRG93bmxvYWRPaygpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfbmV3R2FtZURldGVjdGVkXCIpXG4gIG9uTmV3R2FtZURldGVjdGVkKCkge31cbiAgcHJlbG9hZFJlbW90ZUJ1bmRsZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmlzQnVuZGxlUmVhZHkoZSkpIHRoaXMuZG93bmxvYWROZXh0QnVuZGxlKCk7ZWxzZSBpZiAocmVzTWFuYWdlci5pc1JlbW90ZUJ1bmRsZShlKSkge1xuICAgICAgdGhpcy5faXNEb3dubG9hZGluZyA9IHRydWU7XG4gICAgICB2YXIgciA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLl90bS5wcmVsb2FkQWxsUmVzKGUsIGZ1bmN0aW9uIChhLCBvKSB7XG4gICAgICAgIHQuX2lzRG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgKChEYXRlLm5vdygpIC0gcikgLyAxMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAobykgO2Vsc2Uge1xuICAgICAgICAgIHQuX2J1bmRsZXNSZWFkeS5hZGQoZSk7XG4gICAgICAgICAgdC5zYXZlRG93bmxvYWRlZEJ1bmRsZShlKTtcbiAgICAgICAgfVxuICAgICAgICB0LmRvd25sb2FkTmV4dEJ1bmRsZSgpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idW5kbGVzUmVhZHkuYWRkKGUpO1xuICAgICAgdGhpcy5kb3dubG9hZE5leHRCdW5kbGUoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19nZXRSZXNOYW1lXCIpXG4gIGdldFJlc05hbWUoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKGUsIHQpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkU2hvdWxkQXBwbHlUaGVtZSkge1xuICAgICAgdmFyIGEgPSB0aGlzLmdldFJlc05hbWUoZS5hcmdzWzBdKTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy5nZXRDdXJyZW50TW9kZURhdGEoKTtcbiAgICAgICAgaWYgKG8gJiYgby5jdXJyZW50U2VyaWVzKSB7XG4gICAgICAgICAgdmFyIGkgPSBhLnJlcGxhY2UoL1xcLnBuZyQvaSwgXCJcIik7XG4gICAgICAgICAgaWYgKEZsb3dlckNhcmRTZXJpZXNUcmFpdC5GTE9XRVJfQ0FSRF9OQU1FUy5oYXMoaSkpIHtcbiAgICAgICAgICAgIHZhciBuID0gby5jdXJyZW50U2VyaWVzO1xuICAgICAgICAgICAgaWYgKDAgPT09IG4uaWQpIHtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbCA9IG4uYnVuZGxlO1xuICAgICAgICAgICAgaWYgKCFuLmlzTG9jYWwgJiYgIXRoaXMuaXNCdW5kbGVSZWFkeShsKSkge1xuICAgICAgICAgICAgICB0aGlzLnNhdmVNb2RlRGF0YSh7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlcmllczogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImF0bGFzL2Zsb3dlckNhcmRJY29uL1wiICsgYSxcbiAgICAgICAgICAgICAgICBidW5kbGVOYW1lOiBsLFxuICAgICAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG8uY3VycmVudEJhc2UpIHtcbiAgICAgICAgICAgIHZhciBzID0gby5jdXJyZW50QmFzZTtcbiAgICAgICAgICAgIGwgPSBzLmJ1bmRsZTtcbiAgICAgICAgICAgIGlmICghcy5pc0xvY2FsICYmICF0aGlzLl9idW5kbGVzUmVhZHkuaGFzKGwpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2F2ZU1vZGVEYXRhKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50QmFzZTogbnVsbFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXCJtYWluUmVzXCIgPT09IGwpIHtcbiAgICAgICAgICAgICAgdCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcImF0bGFzL2NhcmRJY29uL1wiICsgYSxcbiAgICAgICAgICAgICAgICBidW5kbGVOYW1lOiBsLFxuICAgICAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfZW5hYmxlQmFzZVwiKVxuICBnZXRFbmFibGVCYXNlU2tpbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlQmFzZVNraW47XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19kcmF3TW9kZVwiKVxuICBnZXREcmF3TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhd01vZGU7XG4gIH1cbiAgZ2V0Q3VycmVudE1vZGVTZXJpZXNJZCgpIHtcbiAgICBpZiAoIXRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUpIHJldHVybiAtMTtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0Q3VycmVudE1vZGVEYXRhKCk7XG4gICAgcmV0dXJuIGUgJiYgZS5jdXJyZW50U2VyaWVzID8gZS5jdXJyZW50U2VyaWVzLmlkIDogLTE7XG4gIH1cbiAgZ2V0Q3VycmVudFNlcmllc0lkKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRDdXJyZW50TW9kZURhdGEoKTtcbiAgICBpZiAoIWUgfHwgIWUuY3VycmVudFNlcmllcykgcmV0dXJuIFwiMFwiO1xuICAgIHZhciB0ID0gZS5jdXJyZW50U2VyaWVzO1xuICAgIHJldHVybiB0LmJ1bmRsZS5pbmNsdWRlcyhcImZsb3dlclN0YXJcIikgPyB0Lm5hbWUgOiB0LmlkLnRvU3RyaW5nKCk7XG4gIH1cbiAgZ2V0Tm9ybWFsTGV2ZWxJZCgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpO1xuICAgIHJldHVybiAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5nZXRMZXZlbElkKCkpIHx8IDA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19nZXRNaW5MdkVuYWJsZVwiKVxuICBnZXRNaW5MZXZlbFRvRW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9taW5MZXZlbFRvRW5hYmxlO1xuICB9XG4gIGlzRmVhdHVyZUVuYWJsZWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldE5vcm1hbExldmVsSWQoKSxcbiAgICAgIHQgPSB0aGlzLmdldE1pbkxldmVsVG9FbmFibGUoKTtcbiAgICByZXR1cm4gZSA+PSAobnVsbCAhPSB0ID8gdCA6IHRoaXMuX21pbkxldmVsVG9FbmFibGUpO1xuICB9XG4gIHNob3VsZEFwcGx5VGhlbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRHYW1lVHlwZSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljICYmICEhKHRoaXMuX2N1cnJlbnRHYW1lVHlwZSAhPT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgdGhpcy5fY3VycmVudEdhbWVUeXBlICE9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsIHx8IHRoaXMuX2VuYWJsZUZvck5vcm1hbCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19kcmF3Rmxvd2VyXCIpXG4gIGRyYXdGbG93ZXJTZXJpZXMoKSB7XG4gICAgdmFyIGUgPSB0cnVlO1xuICAgIHRoaXMuX2lzUHJlcGFyZU5leHRHYW1lICYmIChlID0gdGhpcy5zaG91bGRMaW1pdEJ1bmRsZVBvb2woKSk7XG4gICAgdGhpcy5faXNFbmRHYW1lRG93bmxvYWRNb2RlID0gIWU7XG4gICAgdmFyIHQgPSB0aGlzLmdldERyYXdNb2RlKCkgPT09IEVGbG93ZXJEcmF3TW9kZS5TZXF1ZW5jZSA/IHRoaXMuZHJhd1NlcXVlbmNlKCkgOiB0aGlzLmRyYXdSYW5kb20oKTtcbiAgICB0aGlzLl9pc0VuZEdhbWVEb3dubG9hZE1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLnNhdmVNb2RlRGF0YSh7XG4gICAgICBjdXJyZW50U2VyaWVzOiB0XG4gICAgfSk7XG4gICAgdGhpcy5zZXRMYXN0U2VyaWVzSWQodC5pZCk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19zaG91bGRMaW1pdFwiKVxuICBzaG91bGRMaW1pdEJ1bmRsZVBvb2woKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZHJhd1NlcXVlbmNlKCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IHRoaXMuZ2V0U2VxdWVuY2VTZXJpZXNJZCgpLFxuICAgICAgciA9IHRoaXMuZ2V0Rmxvd2VyU2VyaWVzKCk7XG4gICAgaWYgKG51bGwgPT09IHQpIGUgPSByWzBdLmlkO2Vsc2Uge1xuICAgICAgdmFyIGEgPSByLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQgPiB0O1xuICAgICAgfSk7XG4gICAgICBlID0gYSA/IGEuaWQgOiByWzBdLmlkO1xuICAgIH1cbiAgICB0aGlzLnNldFNlcXVlbmNlU2VyaWVzSWQoZSk7XG4gICAgdmFyIG8gPSByLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmlkID09PSBlO1xuICAgIH0pO1xuICAgIHJldHVybiBvID8gdGhpcy5faXNFbmRHYW1lRG93bmxvYWRNb2RlID8gbyA6IG8uaXNMb2NhbCB8fCB0aGlzLmlzQnVuZGxlUmVhZHkoby5idW5kbGUpID8gbyA6IHRoaXMuZHJhd1JhbmRvbSgpIDogdGhpcy5kcmF3UmFuZG9tKCk7XG4gIH1cbiAgZ2V0TmV4dFNlcmllc0lkKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Rmxvd2VyU2VyaWVzKCksXG4gICAgICByID0gdC5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LmlkID4gZTtcbiAgICAgIH0pO1xuICAgIHJldHVybiByID8gci5pZCA6IHRbMF0uaWQ7XG4gIH1cbiAgZHJhd1JhbmRvbSgpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICB0ID0gdGhpcy5nZXRGbG93ZXJTZXJpZXMoKTtcbiAgICBpZiAodGhpcy5faXNFbmRHYW1lRG93bmxvYWRNb2RlKSB7XG4gICAgICB2YXIgciA9IHQuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LmlkICE9PSBlLmdldExhc3RTZXJpZXNJZCgpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb21QaWNrKHIpO1xuICAgIH1cbiAgICB2YXIgYSA9IHQuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5pZCAhPT0gZS5nZXRMYXN0U2VyaWVzSWQoKSAmJiAoISF0LmlzTG9jYWwgfHwgZS5pc0J1bmRsZVJlYWR5KHQuYnVuZGxlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmFuZG9tUGljayhhKTtcbiAgfVxuICBkcmF3QmFzZSgpIHtcbiAgICBpZiAoIXRoaXMuZ2V0RW5hYmxlQmFzZVNraW4oKSkge1xuICAgICAgdGhpcy5zYXZlTW9kZURhdGEoe1xuICAgICAgICBjdXJyZW50QmFzZTogbnVsbFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGUgPSB0aGlzLnJhbmRvbVBpY2sodGhpcy5nZXRCYXNlU2VyaWVzTGlzdCgpKTtcbiAgICB0aGlzLnNhdmVNb2RlRGF0YSh7XG4gICAgICBjdXJyZW50QmFzZTogZVxuICAgIH0pO1xuICAgIHJldHVybiBlO1xuICB9XG4gIHJhbmRvbVBpY2soZSkge1xuICAgIHJldHVybiBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGUubGVuZ3RoKV07XG4gIH1cbiAgb25XaW5DdHJsX3ZpZXdTaG93KGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnBhcmVudENvbnRyb2xsZXI7XG4gICAgdGhpcy5wcmVwYXJlTmV4dEdhbWUoYSk7XG4gICAgdCgpO1xuICB9XG4gIG9uVExXaW5DdHJsX3ZpZXdTaG93KGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnBhcmVudENvbnRyb2xsZXI7XG4gICAgdGhpcy5wcmVwYXJlTmV4dEdhbWUoYSk7XG4gICAgdCgpO1xuICB9XG4gIG9uRENXaW5DdHJsX3ZpZXdTaG93KGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnBhcmVudENvbnRyb2xsZXI7XG4gICAgdGhpcy5wcmVwYXJlTmV4dEdhbWUoYSk7XG4gICAgdCgpO1xuICB9XG4gIG9uVGlsZTJXaW5DdHJsX3ZpZXdTaG93KGUsIHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnBhcmVudENvbnRyb2xsZXI7XG4gICAgdGhpcy5wcmVwYXJlTmV4dEdhbWUoYSk7XG4gICAgdCgpO1xuICB9XG4gIHByZXBhcmVOZXh0R2FtZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jYWNoZWRJc0ZlYXR1cmVFbmFibGVkID0gdGhpcy5pc0ZlYXR1cmVFbmFibGVkKCk7XG4gICAgICB0aGlzLl9jYWNoZWRTaG91bGRBcHBseVRoZW1lID0gdGhpcy5fY2FjaGVkSXNGZWF0dXJlRW5hYmxlZCAmJiB0aGlzLnNob3VsZEFwcGx5VGhlbWUoKTtcbiAgICAgIGlmICghdGhpcy5fY2FjaGVkU2hvdWxkQXBwbHlUaGVtZSkgcmV0dXJuO1xuICAgICAgdGhpcy5vbk5ld0dhbWVEZXRlY3RlZCh0cnVlKTtcbiAgICAgIHRoaXMucHJlbG9hZEFsbFJlbW90ZUJ1bmRsZXMoKTtcbiAgICAgIHRoaXMuX2lzUHJlcGFyZU5leHRHYW1lID0gdHJ1ZTtcbiAgICAgIHZhciBhID0gdGhpcy5kcmF3Rmxvd2VyU2VyaWVzKCksXG4gICAgICAgIG8gPSB0aGlzLmRyYXdCYXNlKCk7XG4gICAgICB0aGlzLl9pc1ByZXBhcmVOZXh0R2FtZSA9IGZhbHNlO1xuICAgICAgdmFyIGkgPSBmdW5jdGlvbiBpKCkge1xuICAgICAgICAwICE9PSBhLmlkICYmIHQucHJlbG9hZEF0bGFzKFwiYXRsYXMvZmxvd2VyQ2FyZEljb25cIiwgYS5idW5kbGUsIGEuaXNMb2NhbCwgZSk7XG4gICAgICAgIG8gJiYgXCJtYWluUmVzXCIgIT09IG8uYnVuZGxlICYmIHQucHJlbG9hZEF0bGFzKFwiYXRsYXMvY2FyZEljb25cIiwgby5idW5kbGUsIG8uaXNMb2NhbCwgZSk7XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuc2hvdWxkTGltaXRCdW5kbGVQb29sKCkpIGkoKTtlbHNlIHtcbiAgICAgICAgdmFyIG4gPSBbXTtcbiAgICAgICAgMCA9PT0gYS5pZCB8fCBhLmlzTG9jYWwgfHwgdGhpcy5pc0J1bmRsZVJlYWR5KGEuYnVuZGxlKSB8fCBuLnB1c2goYS5idW5kbGUpO1xuICAgICAgICAhbyB8fCBcIm1haW5SZXNcIiA9PT0gby5idW5kbGUgfHwgby5pc0xvY2FsIHx8IHRoaXMuaXNCdW5kbGVSZWFkeShvLmJ1bmRsZSkgfHwgbi5wdXNoKG8uYnVuZGxlKTtcbiAgICAgICAgaWYgKG4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZG93bmxvYWRCdW5kbGVzU2VxdWVudGlhbGx5KG4pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGUgPSB0LmdldEN1cnJlbnRNb2RlRGF0YSgpO1xuICAgICAgICAgICAgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuY3VycmVudFNlcmllcykgJiYgaSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBGbG93ZXJDYXJkU2VyaWVzVHJhaXQudHJhaXRLZXkgKyBcIl0g5YeG5aSH5LiL5LiA5bGA5aSx6LSlOiBcIiArIGUubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIHByZWxvYWRBdGxhcyhlLCB0LCByLCBhKSB7XG4gICAgaWYgKHIgfHwgdGhpcy5pc0J1bmRsZVJlYWR5KHQpKSB7XG4gICAgICB2YXIgbyA9IGE7XG4gICAgICBvIHx8IChvID0gdGhpcy5nZXRHYW1lQ29udHJvbGxlckJ5VHlwZSh0aGlzLl9jdXJyZW50R2FtZVR5cGUpKTtcbiAgICAgIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBvLmxvYWRSZXMgJiYgby5sb2FkUmVzKGUsIGNjLlNwcml0ZUF0bGFzLCB0KS50aGVuKGZ1bmN0aW9uICgpIHt9KS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgfVxuICB9XG4gIGdldEdhbWVDb250cm9sbGVyQnlUeXBlKGUpIHtcbiAgICB2YXIgdCA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuTm9ybWFsOlxuICAgICAgICByZXR1cm4gdC5nZXRDb250cm9CeU5hbWUoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw6XG4gICAgICAgIHJldHVybiB0LmdldENvbnRyb0J5TmFtZShcIlRpbGUyR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgICBjYXNlIE1qR2FtZVR5cGUuVHJhdmVsOlxuICAgICAgICByZXR1cm4gdC5nZXRDb250cm9CeU5hbWUoXCJUcmF2ZWxHYW1lQ29udHJvbGxlclwiKTtcbiAgICAgIGNhc2UgTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZTpcbiAgICAgICAgcmV0dXJuIHQuZ2V0Q29udHJvQnlOYW1lKFwiRGFpbHlDaGFsbGVuZ2VDb250cm9sbGVyXCIpO1xuICAgICAgY2FzZSBNakdhbWVUeXBlLkNsYXNzaWM6XG4gICAgICAgIHJldHVybiB0LmdldENvbnRyb0J5TmFtZShcIkNsYXNzaWNDb250cm9sbGVyXCIpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHQuZ2V0Q29udHJvQnlOYW1lKFwiTWFpbkdhbWVDb250cm9sbGVyXCIpO1xuICAgIH1cbiAgfVxuICBvbklwdFNldEx2X3NldERhdGEoZSwgdCkge1xuICAgIHZhciByO1xuICAgIHRoaXMuX2dhbWVDb250ZW50ID0gbnVsbCA9PT0gKHIgPSBlLmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lQ29udGV4dDtcbiAgICB0KCk7XG4gIH1cbiAgbG9hZFNwaW5lKGUsIHQpIHtcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgaWYgKGUgJiYgIShlLmlkIDw9IDApICYmIHRoaXMuaXNPcGVuQ2xlYXJFZmZlY3QoKSkge1xuICAgICAgdmFyIGEgPSBlLmJ1bmRsZSxcbiAgICAgICAgbyA9IHQgfHwgdGhpcy5nZXRHYW1lQ29udHJvbGxlckJ5VHlwZSh0aGlzLl9jdXJyZW50R2FtZVR5cGUpO1xuICAgICAgaWYgKG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBvLmxvYWRSZXMpIHtcbiAgICAgICAgdGhpcy5fY3VyclNrRGF0YSA9IG51bGw7XG4gICAgICAgIG8ubG9hZFJlcyhcInNwaW5lL2dhbWVwbGF5X3NwZWNpYWxfZWxpbWluYXRpb25cIiwgc3AuU2tlbGV0b25EYXRhLCBhKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBBcnJheS5pc0FycmF5KGUpID8gZVswXSA6IGU7XG4gICAgICAgICAgci5fY3VyclNrRGF0YSA9IHQgfHwgbnVsbDtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHIuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Jbml0Vmlld0Jodl9jcnRUbHMoZSwgdCkge1xuICAgIHZhciByLCBhO1xuICAgIGlmICh0aGlzLl9jYWNoZWRTaG91bGRBcHBseVRoZW1lKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuZ2V0Q3VycmVudE1vZGVEYXRhKCk7XG4gICAgICBpZiAobnVsbCA9PSBvID8gdm9pZCAwIDogby5jdXJyZW50U2VyaWVzKSB7XG4gICAgICAgIHZhciBpID0gbnVsbCA9PT0gKGEgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZ2FtZUN0cjtcbiAgICAgICAgdGhpcy5sb2FkU3BpbmUoby5jdXJyZW50U2VyaWVzLCBpKTtcbiAgICAgIH1cbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfaXNTcENhcmQoZSwgdCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRTaG91bGRBcHBseVRoZW1lKSB7XG4gICAgICB2YXIgciA9IGUuYXJnc1swXSxcbiAgICAgICAgYSA9IGUuYXJnc1sxXSxcbiAgICAgICAgbyA9IGZhbHNlLFxuICAgICAgICBpID0gdGhpcy5nZXRDdXJyZW50TW9kZURhdGEoKS5jdXJyZW50U2VyaWVzO1xuICAgICAgKGkgPyBpLmlkIDogMCkgPiAwICYmIHRoaXMuaXNPcGVuQ2xlYXJFZmZlY3QoKSAmJiAobyA9IHRoaXMuaXNGbG93ZXJDb2xsaXNpb24oZS5pbnMsIHIsIGEpKTtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxuICBvbkNsZWFyRWZmQmh2X2NoYW5nZVNwU2tkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkU2hvdWxkQXBwbHlUaGVtZSkge1xuICAgICAgdmFyIHIgPSBlLmFyZ3NbMF0sXG4gICAgICAgIGEgPSB0aGlzLl9jdXJyU2tEYXRhO1xuICAgICAgYSAmJiBjYy5pc1ZhbGlkKGEpICYmIHIgJiYgci5za2VsZXRvbkRhdGEgIT09IGEgJiYgKHIuc2tlbGV0b25EYXRhID0gYSk7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG4gIG9uVDJDbGVhckVmZkJodl9nZXRBbmlDZmcoZSwgdCkge1xuICAgIHZhciByLFxuICAgICAgYSxcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbixcbiAgICAgIGwsXG4gICAgICBzLFxuICAgICAgdSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUgJiYgdGhpcy5fY3VyclNrRGF0YSkge1xuICAgICAgdmFyIGQgPSBudWxsID09PSAociA9IHRoaXMuZ2V0Q3VycmVudE1vZGVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY3VycmVudFNlcmllcztcbiAgICAgIGlmICghZCB8fCBkLmlkIDw9IDAgfHwgIXRoaXMuaXNPcGVuQ2xlYXJFZmZlY3QoKSkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgYyA9IG51bGwgPT09IChhID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdO1xuICAgICAgICBpZiAodGhpcy5jaGVja0Zsb3dlckVmZmVjdChjKSkge1xuICAgICAgICAgIHZhciBoID0gbnVsbCA9PT0gKG8gPSBudWxsID09IGMgPyB2b2lkIDAgOiBjLmRhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY2FyZElkcztcbiAgICAgICAgICBpZiAoIWggfHwgMCA9PT0gaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBmID0gbnVsbCA9PT0gKGkgPSBudWxsID09IGMgPyB2b2lkIDAgOiBjLmRhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkudGlsZUlkcyxcbiAgICAgICAgICAgICAgbSA9IG51bGwgPT09IChzID0gbnVsbCA9PT0gKGwgPSBudWxsID09PSAobiA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gbCA/IHZvaWQgMCA6IGwuZ2V0VGlsZU1hcE9iamVjdCkgfHwgdm9pZCAwID09PSBzID8gdm9pZCAwIDogcy5jYWxsKGwpO1xuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShmKSAmJiBtICYmIChoID0gZi5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIHI7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsID09PSAociA9IG51bGwgPT09ICh0ID0gbS5nZXRUaWxlT2JqZWN0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNhbGwobSwgZSkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY2FyZElkO1xuICAgICAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsICE9IGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoICYmIGguc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHUuaXNGbG93ZXJDYXJkSWQoZSk7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIHZhciB5ID0gZC5idW5kbGU7XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcInNwaW5lL2dhbWVwbGF5X3NwZWNpYWxfZWxpbWluYXRpb25cIixcbiAgICAgICAgICAgICAgICBidW5kbGU6IHksXG4gICAgICAgICAgICAgICAgYW5pbU5hbWU6IFwiaW5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19jaGtGbG93ZXJFZmZcIilcbiAgY2hlY2tGbG93ZXJFZmZlY3QoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGbG93ZXJDU19pc09wZW5DRWZmXCIpXG4gIGlzT3BlbkNsZWFyRWZmZWN0KCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpc0Zsb3dlckNvbGxpc2lvbihlLCB0LCByKSB7XG4gICAgdmFyIGEsXG4gICAgICBvID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5jb250ZXh0LFxuICAgICAgaSA9IG51bGwgPT09IChhID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nZXRUaWxlTWFwT2JqZWN0KSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmNhbGwobyk7XG4gICAgaWYgKCFpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG4gPSB0ID8gaS5nZXRUaWxlT2JqZWN0KHQpIDogbnVsbCxcbiAgICAgIGwgPSByID8gaS5nZXRUaWxlT2JqZWN0KHIpIDogbnVsbDtcbiAgICByZXR1cm4gdGhpcy5pc0Zsb3dlckNhcmRJZChudWxsID09IG4gPyB2b2lkIDAgOiBuLmNhcmRJZCkgfHwgdGhpcy5pc0Zsb3dlckNhcmRJZChudWxsID09IGwgPyB2b2lkIDAgOiBsLmNhcmRJZCk7XG4gIH1cbiAgaXNGbG93ZXJDYXJkSWQoZSkge1xuICAgIGlmICghZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlID49IDI4ICYmIGUgPD0gMzQpIHJldHVybiB0cnVlO1xuICAgIGlmIChlID09IE1qQ2FyZElkLmVtRmxvd0NhcmRJZCB8fCBlID09IE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkKSB7XG4gICAgICB2YXIgdCA9IHtcbiAgICAgICAgaXNGbG93ZXI6IHRydWVcbiAgICAgIH07XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkZsd0NkU2VyaWVzX2lzT2xkRmx3XCIsIHRoaXMsIFtlLCB0XSk7XG4gICAgICByZXR1cm4gdC5pc0Zsb3dlcjtcbiAgICB9XG4gICAgcmV0dXJuIGUgPj0gTWpDYXJkSWQuZW1GbG93Q2FyZElkTWVpICYmIGUgPD0gTWpDYXJkSWQuZW1TZWFzb25DYXJkSWREb25nO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfZ2V0U3BBbmltTmFtZShlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF0gPyBcImluXzFcIiA6IFwiaW5cIjtcbiAgICB0KHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IHJcbiAgICB9KTtcbiAgfVxuICBvbkRpYW5aYW5UdF9jaGVja0RaU3BlY2lhbChlLCB0KSB7XG4gICAgdmFyIHIsIGE7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUpIHtcbiAgICAgIHZhciBvID0gdGhpcy5nZXRDdXJyZW50TW9kZURhdGEoKS5jdXJyZW50U2VyaWVzO1xuICAgICAgaWYgKCFvIHx8IG8uaWQgPD0gMCkgdCgpO2Vsc2Uge1xuICAgICAgICB2YXIgaSA9IGUuYXJnc1swXSxcbiAgICAgICAgICBuID0gbnVsbCA9PT0gKGEgPSBudWxsID09PSAociA9IHRoaXMuX2dhbWVDb250ZW50KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmdldFRpbGVNYXBPYmplY3QpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuY2FsbChyKTtcbiAgICAgICAgaWYgKDEgIT0gdGhpcy5fdHJhaXREYXRhLmRpYW56YW4gJiYgdGhpcy5pc09wZW5DbGVhckVmZmVjdCgpKSB7XG4gICAgICAgICAgdmFyIGwgPSBmYWxzZTtcbiAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgdmFyIHMgPSBpID8gbi5nZXRUaWxlT2JqZWN0KGkpIDogbnVsbDtcbiAgICAgICAgICAgIGwgPSB0aGlzLmlzRmxvd2VyQ2FyZElkKG51bGwgPT0gcyA/IHZvaWQgMCA6IHMuY2FyZElkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiAhbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25ER2FtZVN0YXJ0X2FkanVzdChlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF07XG4gICAgciAmJiAoci5jYXJkX3N1aXQgPSB0aGlzLmdldEN1cnJlbnRTZXJpZXNJZCgpKTtcbiAgICB0KCk7XG4gIH1cbiAgb25ER2FtZUVuZF9hZGp1c3QoZSwgdCkge1xuICAgIHZhciByID0gZS5hcmdzWzBdO1xuICAgIHIgJiYgKHIuY2FyZF9zdWl0ID0gdGhpcy5nZXRDdXJyZW50U2VyaWVzSWQoKSk7XG4gICAgdCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfaXNQcmVsb2FkQ3VyXCIpXG4gIGlzUHJlbG9hZEN1cnJlbnRTZXJpZXNCdW5kbGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmxvd2VyQ1NfcHJlbG9hZEN1clwiKVxuICBwcmVsb2FkQ3VycmVudFNlcmllc0J1bmRsZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29sbGVjdEN1cnJlbnRTZXJpZXNCdW5kbGVzKCk7XG4gICAgcmV0dXJuIDAgPT09IGUubGVuZ3RoID8gUHJvbWlzZS5yZXNvbHZlKCkgOiB0aGlzLmRvd25sb2FkQnVuZGxlc1NlcXVlbnRpYWxseShlKS50aGVuKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBjb2xsZWN0Q3VycmVudFNlcmllc0J1bmRsZXMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IFtdO1xuICAgIFtVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCA/IHRoaXMubG9jYWxEYXRhLlRpbGUyTm9ybWFsIDogdGhpcy5sb2NhbERhdGEuTm9ybWFsLCB0aGlzLmxvY2FsRGF0YS5UcmF2ZWwsIHRoaXMubG9jYWxEYXRhLkRhaWx5Q2hhbGxlbmdlXS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBpZiAocikge1xuICAgICAgICB2YXIgYSA9IHIuY3VycmVudFNlcmllcztcbiAgICAgICAgYSAmJiAhYS5pc0xvY2FsICYmIFwibWFpblJlc1wiICE9PSBhLmJ1bmRsZSAmJiAoZS5pc0J1bmRsZVJlYWR5KGEuYnVuZGxlKSB8fCB0LmluY2x1ZGVzKGEuYnVuZGxlKSB8fCB0LnB1c2goYS5idW5kbGUpKTtcbiAgICAgICAgdmFyIG8gPSByLmN1cnJlbnRCYXNlO1xuICAgICAgICBvICYmICFvLmlzTG9jYWwgJiYgXCJtYWluUmVzXCIgIT09IG8uYnVuZGxlICYmIChlLmlzQnVuZGxlUmVhZHkoby5idW5kbGUpIHx8IHQuaW5jbHVkZXMoby5idW5kbGUpIHx8IHQucHVzaChvLmJ1bmRsZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubG9jYWxEYXRhLmRvd25sb2FkZWRCdW5kbGVzICYmIHRoaXMubG9jYWxEYXRhLmRvd25sb2FkZWRCdW5kbGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5sb2NhbERhdGEuZG93bmxvYWRlZEJ1bmRsZXMuZm9yRWFjaChmdW5jdGlvbiAocikge1xuICAgICAgZS5pc0J1bmRsZVJlYWR5KHIpIHx8IHQuaW5jbHVkZXMocikgfHwgdC5wdXNoKHIpO1xuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIGRvd25sb2FkQnVuZGxlc1NlcXVlbnRpYWxseShlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBlLnJlZHVjZShmdW5jdGlvbiAoZSwgcikge1xuICAgICAgcmV0dXJuIGUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmRvd25sb2FkU2luZ2xlQnVuZGxlKHIpO1xuICAgICAgfSk7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICB9XG4gIGRvd25sb2FkU2luZ2xlQnVuZGxlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyKSB7XG4gICAgICBpZiAodC5pc0J1bmRsZVJlYWR5KGUpKSByKCk7ZWxzZSB7XG4gICAgICAgIHZhciBhID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHJlc01hbmFnZXIuaXNSZW1vdGVCdW5kbGUoZSkpIHQuX3RtLnByZWxvYWRBbGxSZXMoZSwgZnVuY3Rpb24gKG8sIGkpIHtcbiAgICAgICAgICAoKERhdGUubm93KCkgLSBhKSAvIDEwMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKGkpIDtlbHNlIHtcbiAgICAgICAgICAgIHQuX2J1bmRsZXNSZWFkeS5hZGQoZSk7XG4gICAgICAgICAgICB0LnNhdmVEb3dubG9hZGVkQnVuZGxlKGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByKCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHt9KTtlbHNlIHtcbiAgICAgICAgICB0Ll9idW5kbGVzUmVhZHkuYWRkKGUpO1xuICAgICAgICAgIHIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHNhdmVEb3dubG9hZGVkQnVuZGxlKGUpIHtcbiAgICBpZiAoIXRoaXMubG9jYWxEYXRhLmRvd25sb2FkZWRCdW5kbGVzLmluY2x1ZGVzKGUpKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kb3dubG9hZGVkQnVuZGxlcy5wdXNoKGUpO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZG93bmxvYWRlZEJ1bmRsZXMgPSB0aGlzLmxvY2FsRGF0YS5kb3dubG9hZGVkQnVuZGxlcztcbiAgICB9XG4gIH1cbiAgb25Eb3RVdGlsX2dldEZsb3dlclRoZW1lKGUsIHQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSB0aGlzLmdldEN1cnJlbnRTZXJpZXNJZCgpO1xuICAgICAgaWYgKFwiMFwiID09PSByKSB7XG4gICAgICAgIHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgYWN0aXZlOiAxLFxuICAgICAgICAgIGlkOiByXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn0iXX0=