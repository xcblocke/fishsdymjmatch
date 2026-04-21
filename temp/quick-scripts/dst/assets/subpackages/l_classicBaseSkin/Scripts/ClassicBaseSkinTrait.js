
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicBaseSkin/Scripts/ClassicBaseSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9855cXUSJCXKsbBT1EHvWn', 'ClassicBaseSkinTrait');
// subpackages/l_classicBaseSkin/Scripts/ClassicBaseSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FlowerStarConfigUtil_1 = require("../../../Scripts/gamePlay/base/data/FlowerStarConfigUtil");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var ClassicBaseSkinTrait = /** @class */ (function (_super) {
    __extends(ClassicBaseSkinTrait, _super);
    function ClassicBaseSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._flowerWaveInterval = 1;
        _this._tiaoWaveInterval = 2;
        _this._tongWaveInterval = 3;
        _this._currentGameType = GameTypeEnums_1.MjGameType.Normal;
        _this._cachedShouldApplyTheme = false;
        _this._currSkData = null;
        _this._flowerSeriesList = [{
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
                bundle: "r_flowerSeries03_01",
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
                bundle: "r_flowerSeries21_01",
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
                bundle: "r_flowerSeries27_01",
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
                bundle: "r_flowerSeries31_01",
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
                bundle: "r_flowerSeries39_01",
                isLocal: false
            }, {
                id: 41,
                name: "叶子&果实",
                bundle: "r_flowerSeries41",
                isLocal: false
            }, {
                id: 42,
                name: "现代东方",
                bundle: "r_flowerSeries42",
                isLocal: false
            }, {
                id: 44,
                name: "国家特色食物和事物",
                bundle: "r_flowerSeries44_01",
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
            }];
        return _this;
    }
    ClassicBaseSkinTrait_1 = ClassicBaseSkinTrait;
    Object.defineProperty(ClassicBaseSkinTrait.prototype, "_starThemesList", {
        get: function () {
            return FlowerStarConfigUtil_1.FlowerStarConfigUtil.getStarList();
        },
        enumerable: false,
        configurable: true
    });
    ClassicBaseSkinTrait.prototype.onLoad = function () {
        var a, r, t;
        _super.prototype.onLoad.call(this);
        "number" == typeof (null === (a = this._traitData) || void 0 === a ? void 0 : a.flowerWaveInterval) && (this._flowerWaveInterval = this._traitData.flowerWaveInterval);
        "number" == typeof (null === (r = this._traitData) || void 0 === r ? void 0 : r.tiaoWaveInterval) && (this._tiaoWaveInterval = this._traitData.tiaoWaveInterval);
        "number" == typeof (null === (t = this._traitData) || void 0 === t ? void 0 : t.tongWaveInterval) && (this._tongWaveInterval = this._traitData.tongWaveInterval);
        this.isLocalEmpty(this.localData.flowerTheme) && (this.localData.flowerTheme = null);
        this.isLocalEmpty(this.localData.lastFlowerThemeId) && (this.localData.lastFlowerThemeId = null);
        this.isLocalEmpty(this.localData.tiaoActive) && (this.localData.tiaoActive = false);
        !this.isLocalEmpty(this.localData.tiaoMapping) && Array.isArray(this.localData.tiaoMapping) || (this.localData.tiaoMapping = null);
        this.isLocalEmpty(this.localData.tongTheme) && (this.localData.tongTheme = null);
        this.isLocalEmpty(this.localData.lastTongThemeId) && (this.localData.lastTongThemeId = null);
        this.addRemoteBundlesToLoader();
    };
    ClassicBaseSkinTrait.prototype.addRemoteBundlesToLoader = function () {
        var e = LowPriorityBundleLoader_1.default.getInstance(), a = this._flowerSeriesList.filter(function (e) {
            return !e.isLocal;
        }).map(function (e) {
            return e.bundle;
        });
        Array.from(new Set(a)).forEach(function (a) {
            e.addTask(a, LowPriorityBundleLoader_1.ELowPriorityBundlePriority.DefaultCardXingyunHuaPai);
        });
    };
    ClassicBaseSkinTrait.prototype.onMainGameCtrl_initRes = function (e, a) {
        var r;
        this._currentGameType = null === (r = e.ins) || void 0 === r ? void 0 : r.gameType;
        this._cachedShouldApplyTheme = this._currentGameType === GameTypeEnums_1.MjGameType.Classic;
        if (this._cachedShouldApplyTheme) {
            this.addPreloadAtlas(e.ins);
            a();
        }
        else {
            this.localData.tiaoActive = false;
            this.localData.tongTheme = null;
            a();
        }
    };
    ClassicBaseSkinTrait.prototype.addPreloadAtlas = function (e) {
        if (e && "function" == typeof e.addPreloadRes) {
            if (this.localData.flowerTheme && this.localData.flowerTheme.bundle) {
                var a = this.localData.flowerTheme.bundle + ":atlas/flowerCardIcon";
                e.addPreloadRes("SpriteAtlas", a);
            }
            var t = ClassicBaseSkinTrait_1.LETTER_BUNDLE + ":" + ClassicBaseSkinTrait_1.LETTER_ATLAS_PATH;
            e.addPreloadRes("SpriteAtlas", t);
            if (this.localData.tongTheme && this.localData.tongTheme.bundle) {
                a = this.localData.tongTheme.bundle + ":atlas/flowerCardIcon";
                e.addPreloadRes("SpriteAtlas", a);
            }
        }
    };
    ClassicBaseSkinTrait.prototype.onChgBatchAnimBhv_start = function (e, a) {
        var r, t;
        if (this._currentGameType === GameTypeEnums_1.MjGameType.Classic) {
            var l = null === (r = e.args) || void 0 === r ? void 0 : r[0], i = null === (t = null == l ? void 0 : l.data) || void 0 === t ? void 0 : t.batchId;
            i > 0 && i % this._flowerWaveInterval == 0 && this.switchFlowerTheme();
            i > 0 && i % this._tiaoWaveInterval == 0 && this.switchTiaoTheme();
            i > 0 && i % this._tongWaveInterval == 0 && this.switchTongTheme();
            if (this.localData.flowerTheme || this.localData.tiaoActive || this.localData.tongTheme) {
                var o = e.ins;
                this.refreshExistingCards(null == o ? void 0 : o.context);
            }
            a();
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.onGsListener_onNewGame = function (e, a) {
        if (this._currentGameType === GameTypeEnums_1.MjGameType.Classic) {
            this.clearThemeData();
            a();
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.onGsListener_onReplayGame = function (e, a) {
        if (this._currentGameType === GameTypeEnums_1.MjGameType.Classic) {
            this.clearThemeData();
            a();
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.clearThemeData = function () {
        this.localData.flowerTheme = null;
        this.localData.tiaoActive = false;
        this.localData.tiaoMapping = null;
        this.localData.tongTheme = null;
    };
    ClassicBaseSkinTrait.prototype.switchTiaoTheme = function () {
        this.localData.tiaoActive = true;
        var e = this.shuffleArray(__spreadArrays(ClassicBaseSkinTrait_1.ALL_LETTER_NAMES)).slice(0, 9);
        this.localData.tiaoMapping = e;
        var a = ControllerManager_1.default.getInstance().getControByName("ClassicController");
        this.preloadLetterAtlas(a);
    };
    ClassicBaseSkinTrait.prototype.preloadLetterAtlas = function (e) {
        var a = e || ControllerManager_1.default.getInstance().getControByName("ClassicController");
        a && "function" == typeof a.loadRes && a.loadRes(ClassicBaseSkinTrait_1.LETTER_ATLAS_PATH, cc.SpriteAtlas, ClassicBaseSkinTrait_1.LETTER_BUNDLE).then(function () { }).catch(function () { });
    };
    ClassicBaseSkinTrait.prototype.shuffleArray = function (e) {
        for (var a, r = e.length - 1; r > 0; r--) {
            var t = Math.floor(Math.random() * (r + 1));
            a = __read([e[t], e[r]], 2), e[r] = a[0], e[t] = a[1];
        }
        return e;
    };
    ClassicBaseSkinTrait.prototype.switchTongTheme = function () {
        var e = this, a = this._starThemesList;
        if (a && 0 !== a.length) {
            var r = a.filter(function (a) {
                return a.id !== e.localData.lastTongThemeId;
            }), t = r.length > 0 ? r : a, l = t[Math.floor(Math.random() * t.length)];
            this.localData.lastTongThemeId = l.id;
            this.localData.tongTheme = l;
            var i = ControllerManager_1.default.getInstance().getControByName("ClassicController");
            this.preloadStarAtlas(l, i);
        }
    };
    ClassicBaseSkinTrait.prototype.isBundleReady = function (e) {
        return LowPriorityBundleLoader_1.default.getInstance().isBundlePreLoaded(e);
    };
    ClassicBaseSkinTrait.prototype.switchFlowerTheme = function () {
        var e = this, a = this._flowerSeriesList;
        if (a && 0 !== a.length) {
            var r = a.filter(function (a) {
                return 0 !== a.id && a.id !== e.localData.lastFlowerThemeId && (!!a.isLocal || e.isBundleReady(a.bundle));
            }), t = r[Math.floor(Math.random() * r.length)];
            this.localData.lastFlowerThemeId = t.id;
            this.localData.flowerTheme = t;
            var l = ControllerManager_1.default.getInstance().getControByName("ClassicController");
            this.preloadFlowerAtlas(t, l);
            this.loadFlowerSpine(t, l);
        }
    };
    ClassicBaseSkinTrait.prototype.preloadFlowerAtlas = function (e, a) {
        if (e && e.bundle) {
            var r = a || ControllerManager_1.default.getInstance().getControByName("ClassicController");
            r && "function" == typeof r.loadRes && r.loadRes("atlas/flowerCardIcon", cc.SpriteAtlas, e.bundle).then(function () { }).catch(function () { });
        }
    };
    ClassicBaseSkinTrait.prototype.isFlowerCard = function (e) {
        return ClassicBaseSkinTrait_1.FLOWER_CARD_NAMES.has(e);
    };
    ClassicBaseSkinTrait.prototype.onCardUtil_atlasPathBundle = function (e, a) {
        var t;
        if (this._cachedShouldApplyTheme) {
            var l = null === (t = e.args) || void 0 === t ? void 0 : t[0];
            if (l) {
                var i = l.replace(/\.png$/i, "");
                if (this.localData.flowerTheme && this.isFlowerCard(i))
                    a({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: {
                            path: "atlas/flowerCardIcon/" + i,
                            bundleName: this.localData.flowerTheme.bundle,
                            fromAtlas: true
                        }
                    });
                else {
                    if (this.localData.tiaoActive && this.localData.tiaoMapping && this.isTiaoCard(i)) {
                        var o = this.mapTiaoToLetterName(i);
                        if (o) {
                            a({
                                isBreak: true,
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: {
                                    path: ClassicBaseSkinTrait_1.LETTER_ATLAS_PATH + "/" + o,
                                    bundleName: ClassicBaseSkinTrait_1.LETTER_BUNDLE,
                                    fromAtlas: true
                                }
                            });
                            return;
                        }
                    }
                    if (this.localData.tongTheme && this.isTongCard(i)) {
                        var n = this.mapTongToFlowerName(i);
                        if (n) {
                            a({
                                isBreak: true,
                                returnType: TraitManager_1.TraitCallbackReturnType.return,
                                returnVal: {
                                    path: "atlas/flowerCardIcon/" + n,
                                    bundleName: this.localData.tongTheme.bundle,
                                    fromAtlas: true
                                }
                            });
                            return;
                        }
                    }
                    a();
                }
            }
            else
                a();
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.isTiaoCard = function (e) {
        return /^t[1-9]$/.test(e);
    };
    ClassicBaseSkinTrait.prototype.isTongCard = function (e) {
        return /^b[1-9]$/.test(e);
    };
    ClassicBaseSkinTrait.prototype.mapTiaoToLetterName = function (e) {
        var a = e.match(/^t([1-9])$/);
        if (!a)
            return null;
        var r = Number.parseInt(a[1], 10), t = this.localData.tiaoMapping;
        return !t || t.length < r ? null : t[r - 1];
    };
    ClassicBaseSkinTrait.prototype.mapTongToFlowerName = function (e) {
        var a = e.match(/^b([1-9])$/);
        if (!a)
            return null;
        var t = Number.parseInt(a[1], 10);
        return ClassicBaseSkinTrait_1.TONG_CARD_MAP[t] || null;
    };
    ClassicBaseSkinTrait.prototype.preloadStarAtlas = function (e, a) {
        if (e && e.bundle) {
            var r = a || ControllerManager_1.default.getInstance().getControByName("ClassicController");
            r && "function" == typeof r.loadRes && r.loadRes("atlas/flowerCardIcon", cc.SpriteAtlas, e.bundle).then(function () { }).catch(function () { });
        }
    };
    ClassicBaseSkinTrait.prototype.refreshExistingCards = function (e) {
        var a, r = this, t = null === (a = null == e ? void 0 : e.getTileNodeManager) || void 0 === a ? void 0 : a.call(e);
        if (t) {
            t.getTileNodes().forEach(function (e) {
                var a = e.tileObject;
                if (a && a.isValid) {
                    var t = a.resName;
                    if (t) {
                        var l = t.replace(/\.png$/i, "");
                        (r.isFlowerCard(l) || r.isTiaoCard(l) || r.isTongCard(l)) && e.updateImgCard();
                    }
                }
            });
        }
    };
    ClassicBaseSkinTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    ClassicBaseSkinTrait.prototype.loadFlowerSpine = function (e, a) {
        var r = this;
        if (e && !(e.id <= 0)) {
            var t = e.bundle, l = a || ControllerManager_1.default.getInstance().getControByName("ClassicController");
            if (l && "function" == typeof l.loadRes) {
                this._currSkData = null;
                l.loadRes("spine/gameplay_special_elimination", sp.SkeletonData, t).then(function (e) {
                    var a = Array.isArray(e) ? e[0] : e;
                    r._currSkData = a || null;
                }).catch(function () {
                    r._currSkData = null;
                });
            }
        }
    };
    ClassicBaseSkinTrait.prototype.onInitViewBhv_crtTls = function (e, a) {
        var r, t;
        if (this._cachedShouldApplyTheme) {
            if (this.localData.flowerTheme) {
                var l = null === (t = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === t ? void 0 : t.gameCtr;
                this.loadFlowerSpine(this.localData.flowerTheme, l);
            }
            a();
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.onClearEffBhv_isSpCard = function (e, a) {
        if (this._cachedShouldApplyTheme) {
            var r = e.args[0], t = e.args[1], l = false;
            this.localData.flowerTheme && this.localData.flowerTheme.id > 0 && (l = this.isFlowerCollision(e.ins, r, t));
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: l
            });
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.onClearEffBhv_changeSpSkd = function (e, a) {
        if (this._cachedShouldApplyTheme) {
            var r = e.args[0], t = this._currSkData;
            t && cc.isValid(t) && r && r.skeletonData !== t && (r.skeletonData = t);
            a();
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.onClearEffBhv_getSpAnimName = function (e, a) {
        if (this._cachedShouldApplyTheme) {
            var r = e.args[0] ? "in_1" : "in";
            a({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else
            a();
    };
    ClassicBaseSkinTrait.prototype.isFlowerCollision = function (e, a, r) {
        var t, l = null == e ? void 0 : e.context, i = null === (t = null == l ? void 0 : l.getTileMapObject) || void 0 === t ? void 0 : t.call(l);
        if (!i)
            return false;
        var o = a ? i.getTileObject(a) : null, n = r ? i.getTileObject(r) : null;
        return this.isFlowerCardId(null == o ? void 0 : o.cardId) || this.isFlowerCardId(null == n ? void 0 : n.cardId);
    };
    ClassicBaseSkinTrait.prototype.isFlowerCardId = function (e) {
        if (!e)
            return false;
        if (e >= 28 && e <= 34)
            return true;
        if (e == GameTypeEnums_1.MjCardId.emFlowCardId || e == GameTypeEnums_1.MjCardId.emSeasonCardId) {
            var a = {
                isFlower: true
            };
            mj.triggerInternalEvent("FlwCdSeries_isOldFlw", this, [e, a]);
            return a.isFlower;
        }
        return e >= GameTypeEnums_1.MjCardId.emFlowCardIdMei && e <= GameTypeEnums_1.MjCardId.emSeasonCardIdDong;
    };
    ClassicBaseSkinTrait.prototype.onDianZanTt_checkDZSpecial = function (e, a) {
        var r, t;
        if (this._cachedShouldApplyTheme) {
            if (!this.localData.flowerTheme || this.localData.flowerTheme.id <= 0)
                a();
            else {
                var l = e.args[0], i = null === (r = e.ins) || void 0 === r ? void 0 : r.context, o = null === (t = null == i ? void 0 : i.getTileMapObject) || void 0 === t ? void 0 : t.call(i), n = false;
                if (o) {
                    var s = l ? o.getTileObject(l) : null;
                    n = this.isFlowerCardId(null == s ? void 0 : s.cardId);
                }
                a({
                    returnType: TraitManager_1.TraitCallbackReturnType.jump,
                    returnVal: !n
                });
            }
        }
        else
            a();
    };
    var ClassicBaseSkinTrait_1;
    ClassicBaseSkinTrait.traitKey = "ClassicBaseSkin";
    ClassicBaseSkinTrait.FLOWER_CARD_NAMES = new Set(["Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"]);
    ClassicBaseSkinTrait.LETTER_BUNDLE = "mainRes";
    ClassicBaseSkinTrait.LETTER_ATLAS_PATH = "atlas/cardIconTile";
    ClassicBaseSkinTrait.ALL_LETTER_NAMES = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
    ClassicBaseSkinTrait.TONG_CARD_MAP = {
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
    ClassicBaseSkinTrait = ClassicBaseSkinTrait_1 = __decorate([
        mj.trait,
        mj.class("ClassicBaseSkinTrait")
    ], ClassicBaseSkinTrait);
    return ClassicBaseSkinTrait;
}(Trait_1.default));
exports.default = ClassicBaseSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNCYXNlU2tpbi9TY3JpcHRzL0NsYXNzaWNCYXNlU2tpblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBOEY7QUFDOUYsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixpR0FBZ0c7QUFDaEcsMEZBQXFGO0FBQ3JGLHFHQUFnSTtBQUdoSTtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQTJ2QkM7UUExdkJDLHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qix1QkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLDBCQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3JDLDZCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNoQyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix1QkFBaUIsR0FBRyxDQUFDO2dCQUNuQixFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixPQUFPLEVBQUUsSUFBSTthQUNkLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsT0FBTyxFQUFFLElBQUk7YUFDZCxFQUFFO2dCQUNELEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsRUFBRTtnQkFDRCxFQUFFLEVBQUUsRUFBRTtnQkFDTixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixPQUFPLEVBQUUsSUFBSTthQUNkLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsTUFBTSxFQUFFLGtC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LE1BQU07UUFDVCxDQUFDLEVBQUUsT0FBTztRQUNWLENBQUMsRUFBRSxTQUFTO1FBQ1osQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsT0FBTztRQUNWLENBQUMsRUFBRSxPQUFPO1FBQ1YsQ0FBQyxFQUFFLFFBQVE7S0FDWixDQUFDO0lBdmFpQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBMnZCeEM7SUFBRCwyQkFBQztDQTN2QkQsQUEydkJDLENBM3ZCaUQsZUFBSyxHQTJ2QnREO2tCQTN2Qm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUsIE1qQ2FyZElkIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgeyBGbG93ZXJTdGFyQ29uZmlnVXRpbCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS9kYXRhL0Zsb3dlclN0YXJDb25maWdVdGlsJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciwgeyBFTG93UHJpb3JpdHlCdW5kbGVQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNsYXNzaWNCYXNlU2tpblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljQmFzZVNraW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2Zsb3dlcldhdmVJbnRlcnZhbCA9IDE7XG4gIF90aWFvV2F2ZUludGVydmFsID0gMjtcbiAgX3RvbmdXYXZlSW50ZXJ2YWwgPSAzO1xuICBfY3VycmVudEdhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIF9jYWNoZWRTaG91bGRBcHBseVRoZW1lID0gZmFsc2U7XG4gIF9jdXJyU2tEYXRhID0gbnVsbDtcbiAgX2Zsb3dlclNlcmllc0xpc3QgPSBbe1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwi5LmQ5ZmoXCIsXG4gICAgYnVuZGxlOiBcImxfZmxvd2VyU2VyaWVzMDJcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIuW7uuetkVwiLFxuICAgIGJ1bmRsZTogXCJsX2Zsb3dlclNlcmllczA0XCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDE2LFxuICAgIG5hbWU6IFwi6aOf54mpXCIsXG4gICAgYnVuZGxlOiBcImxfZmxvd2VyU2VyaWVzMTZcIixcbiAgICBpc0xvY2FsOiB0cnVlXG4gIH0sIHtcbiAgICBpZDogMTksXG4gICAgbmFtZTogXCLlnKPor55cIixcbiAgICBidW5kbGU6IFwibF9mbG93ZXJTZXJpZXMxOVwiLFxuICAgIGlzTG9jYWw6IHRydWVcbiAgfSwge1xuICAgIGlkOiA0MyxcbiAgICBuYW1lOiBcIuS4reS4lue6queJqeS7tlwiLFxuICAgIGJ1bmRsZTogXCJsX2Zsb3dlclNlcmllczQzXCIsXG4gICAgaXNMb2NhbDogdHJ1ZVxuICB9LCB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCLmsLTmnpxcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIuWBh+aXpeaCoOmXslwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczAzXzAxXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6IFwi6L+Q5YqoXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMDZcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCLlhqzml6VcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwN1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIuaYpeiKglwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczA4XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6IFwi5Lqk6YCa5bel5YW3XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMDlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6IFwi6YOo6JC9XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDExLFxuICAgIG5hbWU6IFwi5Yqo54mpXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDEyLFxuICAgIG5hbWU6IFwi6JSs6I+cXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTJcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDEzLFxuICAgIG5hbWU6IFwi6Iqx5qSN54mpXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE0LFxuICAgIG5hbWU6IFwi54ix5Li95LidXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTRcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE1LFxuICAgIG5hbWU6IFwi5Zu96ZmF6LGh5qOLXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE3LFxuICAgIG5hbWU6IFwi5pif5bqnXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMTdcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDE4LFxuICAgIG5hbWU6IFwi6a2U5rOVXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMThcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDIwLFxuICAgIG5hbWU6IFwi57OW5p6cXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDIxLFxuICAgIG5hbWU6IFwi5YOP57SgXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjFfMDFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDIyLFxuICAgIG5hbWU6IFwi5rW35rSLXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjJcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDIzLFxuICAgIG5hbWU6IFwi5Y2B5LqM55Sf6IKWXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDI0LFxuICAgIG5hbWU6IFwi5aSp5rCUXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjRcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDI1LFxuICAgIG5hbWU6IFwi5Yeg5L2VXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDI3LFxuICAgIG5hbWU6IFwi5o6i6ZmpXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzMjdfMDFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDI5LFxuICAgIG5hbWU6IFwiZW1vamnooajmg4VcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyOVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzAsXG4gICAgbmFtZTogXCLppa7lk4FcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzMFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzEsXG4gICAgbmFtZTogXCLoiKrmtbdcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzMV8wMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzIsXG4gICAgbmFtZTogXCLniZvku5RcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzMlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzMsXG4gICAgbmFtZTogXCLpnaLljIXnlJzonJxcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzM1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzQsXG4gICAgbmFtZTogXCLln4Plj4pcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzNFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzUsXG4gICAgbmFtZTogXCLlrZfmr41cIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzNVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzYsXG4gICAgbmFtZTogXCLnvo7lpoZcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzNlwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzcsXG4gICAgbmFtZTogXCLmuLjkuZDlm61cIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzN1wiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzgsXG4gICAgbmFtZTogXCLlm73ml5dcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzOFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMzksXG4gICAgbmFtZTogXCLpn7PnrKZcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMzOV8wMVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNDEsXG4gICAgbmFtZTogXCLlj7blrZAm5p6c5a6eXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQyLFxuICAgIG5hbWU6IFwi546w5Luj5Lic5pa5XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDJcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQ0LFxuICAgIG5hbWU6IFwi5Zu95a6254m56Imy6aOf54mp5ZKM5LqL54mpXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDRfMDFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQ1LFxuICAgIG5hbWU6IFwi5pif55CDXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQ2LFxuICAgIG5hbWU6IFwi5aGU572XXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDZcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQ3LFxuICAgIG5hbWU6IFwi56ul6K+dXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDdcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQ5LFxuICAgIG5hbWU6IFwi6Iiq5aSp56eR5oqAXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDUwLFxuICAgIG5hbWU6IFwi6aSQ5YW3X+WOqOWFt1wiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczUwXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA1MixcbiAgICBuYW1lOiBcIueOqeWFt1wiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczUyXCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA1NCxcbiAgICBuYW1lOiBcIuS6pOmAmuWuieWFqFwiLFxuICAgIGJ1bmRsZTogXCJyX2Zsb3dlclNlcmllczU0XCIsXG4gICAgaXNMb2NhbDogZmFsc2VcbiAgfSwge1xuICAgIGlkOiA1NSxcbiAgICBuYW1lOiBcIumbtumjn1/lv6vppJBcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXM1NVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiBcIlHniYjlm73po45cIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMwNVwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogMjgsXG4gICAgbmFtZTogXCLpqazmiI/lm6JcIixcbiAgICBidW5kbGU6IFwicl9mbG93ZXJTZXJpZXMyOFwiLFxuICAgIGlzTG9jYWw6IGZhbHNlXG4gIH0sIHtcbiAgICBpZDogNDAsXG4gICAgbmFtZTogXCLlhpzlhbcm5Yqo54mpXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDQ4LFxuICAgIG5hbWU6IFwi54K86YeRXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNDhcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDUxLFxuICAgIG5hbWU6IFwi566x5YyFXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDUzLFxuICAgIG5hbWU6IFwi572Q5aS05p6c6YWxXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDU2LFxuICAgIG5hbWU6IFwi54uX5ZOB56eNXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTZcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDU3LFxuICAgIG5hbWU6IFwi5a625bGFXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTdcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDU4LFxuICAgIG5hbWU6IFwi55Sc5ZOBXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNThcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDU5LFxuICAgIG5hbWU6IFwi54Gr6ZSFXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNTlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDYwLFxuICAgIG5hbWU6IFwi55S15b2xXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDYxLFxuICAgIG5hbWU6IFwi55Sf5rS755So5ZOBXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDYyLFxuICAgIG5hbWU6IFwi5YGl6LqrXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjJcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDYzLFxuICAgIG5hbWU6IFwi5piG6JmrXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDY0LFxuICAgIG5hbWU6IFwi55m95aWz55Sf5rS754mp5Lu2XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjRcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDY1LFxuICAgIG5hbWU6IFwi6LWb6L2mXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDY2LFxuICAgIG5hbWU6IFwi5Yqo54mp5aS05YOPXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjZcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDY3LFxuICAgIG5hbWU6IFwi5oCq5YW9XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjdcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDY4LFxuICAgIG5hbWU6IFwi6Im65pyv5a625ZCN55S7XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjhcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDY5LFxuICAgIG5hbWU6IFwi6ZK755+z54+g5a6dXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNjlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDcwLFxuICAgIG5hbWU6IFwi5pWR5oqk55So5ZOBXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDcxLFxuICAgIG5hbWU6IFwi5rW35rupXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDcyLFxuICAgIG5hbWU6IFwi5Yqe5YWs5paH5YW3XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzJcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDczLFxuICAgIG5hbWU6IFwi5rW35rSL55Sf54mpXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzNcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDc0LFxuICAgIG5hbWU6IFwi5oiP5YmnXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzRcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDc1LFxuICAgIG5hbWU6IFwi5aKo6KW/5ZOl5Li76aKYXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzVcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDc2LFxuICAgIG5hbWU6IFwi5YGl6Lqr5Zmo5p2QXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzZcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDc3LFxuICAgIG5hbWU6IFwi5oOF5Lq66IqCXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzdcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDc4LFxuICAgIG5hbWU6IFwi6KW/5pa556We6K+dXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzhcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDc5LFxuICAgIG5hbWU6IFwi54On54OkXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzNzlcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDgwLFxuICAgIG5hbWU6IFwi5be06KW/54uC5qyi6IqCXCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzODBcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9LCB7XG4gICAgaWQ6IDgxLFxuICAgIG5hbWU6IFwi5bel5YW3XCIsXG4gICAgYnVuZGxlOiBcInJfZmxvd2VyU2VyaWVzODFcIixcbiAgICBpc0xvY2FsOiBmYWxzZVxuICB9XTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDbGFzc2ljQmFzZVNraW5cIjtcbiAgc3RhdGljIEZMT1dFUl9DQVJEX05BTUVTID0gbmV3IFNldChbXCJaX2RvbmdcIiwgXCJaX25hblwiLCBcIlpfeGlcIiwgXCJaX2JlaVwiLCBcIlpfYmFpXCIsIFwiWl9mYVwiLCBcIlpfemhvbmdcIiwgXCJIX21laVwiLCBcIkhfbGFuXCIsIFwiSF96aHVcIiwgXCJIX2p1XCIsIFwiSl9jaHVuXCIsIFwiSl94aWFcIiwgXCJKX3FpdVwiLCBcIkpfZG9uZ1wiXSk7XG4gIHN0YXRpYyBMRVRURVJfQlVORExFID0gXCJtYWluUmVzXCI7XG4gIHN0YXRpYyBMRVRURVJfQVRMQVNfUEFUSCA9IFwiYXRsYXMvY2FyZEljb25UaWxlXCI7XG4gIHN0YXRpYyBBTExfTEVUVEVSX05BTUVTID0gW1wiYjFcIiwgXCJiMlwiLCBcImIzXCIsIFwiYjRcIiwgXCJiNVwiLCBcImI2XCIsIFwiYjdcIiwgXCJiOFwiLCBcImI5XCIsIFwidDFcIiwgXCJ0MlwiLCBcInQzXCIsIFwidDRcIiwgXCJ0NVwiLCBcInQ2XCIsIFwidDdcIiwgXCJ0OFwiLCBcInQ5XCIsIFwiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIiwgXCJXNVwiLCBcIlc2XCIsIFwiVzdcIiwgXCJXOFwiXTtcbiAgc3RhdGljIFRPTkdfQ0FSRF9NQVAgPSB7XG4gICAgMTogXCJaX2RvbmdcIixcbiAgICAyOiBcIlpfbmFuXCIsXG4gICAgMzogXCJaX3hpXCIsXG4gICAgNDogXCJaX2JlaVwiLFxuICAgIDU6IFwiWl96aG9uZ1wiLFxuICAgIDY6IFwiWl9mYVwiLFxuICAgIDc6IFwiWl9iYWlcIixcbiAgICA4OiBcIkhfbWVpXCIsXG4gICAgOTogXCJKX2NodW5cIlxuICB9O1xuICBnZXQgX3N0YXJUaGVtZXNMaXN0KCkge1xuICAgIHJldHVybiBGbG93ZXJTdGFyQ29uZmlnVXRpbC5nZXRTdGFyTGlzdCgpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgYSwgciwgdDtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICBcIm51bWJlclwiID09IHR5cGVvZiAobnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuZmxvd2VyV2F2ZUludGVydmFsKSAmJiAodGhpcy5fZmxvd2VyV2F2ZUludGVydmFsID0gdGhpcy5fdHJhaXREYXRhLmZsb3dlcldhdmVJbnRlcnZhbCk7XG4gICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgKG51bGwgPT09IChyID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLnRpYW9XYXZlSW50ZXJ2YWwpICYmICh0aGlzLl90aWFvV2F2ZUludGVydmFsID0gdGhpcy5fdHJhaXREYXRhLnRpYW9XYXZlSW50ZXJ2YWwpO1xuICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC50b25nV2F2ZUludGVydmFsKSAmJiAodGhpcy5fdG9uZ1dhdmVJbnRlcnZhbCA9IHRoaXMuX3RyYWl0RGF0YS50b25nV2F2ZUludGVydmFsKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5mbG93ZXJUaGVtZSkgJiYgKHRoaXMubG9jYWxEYXRhLmZsb3dlclRoZW1lID0gbnVsbCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdEZsb3dlclRoZW1lSWQpICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0Rmxvd2VyVGhlbWVJZCA9IG51bGwpO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLnRpYW9BY3RpdmUpICYmICh0aGlzLmxvY2FsRGF0YS50aWFvQWN0aXZlID0gZmFsc2UpO1xuICAgICF0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS50aWFvTWFwcGluZykgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmxvY2FsRGF0YS50aWFvTWFwcGluZykgfHwgKHRoaXMubG9jYWxEYXRhLnRpYW9NYXBwaW5nID0gbnVsbCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lKSAmJiAodGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lID0gbnVsbCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEubGFzdFRvbmdUaGVtZUlkKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdFRvbmdUaGVtZUlkID0gbnVsbCk7XG4gICAgdGhpcy5hZGRSZW1vdGVCdW5kbGVzVG9Mb2FkZXIoKTtcbiAgfVxuICBhZGRSZW1vdGVCdW5kbGVzVG9Mb2FkZXIoKSB7XG4gICAgdmFyIGUgPSBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLFxuICAgICAgYSA9IHRoaXMuX2Zsb3dlclNlcmllc0xpc3QuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhZS5pc0xvY2FsO1xuICAgICAgfSkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmJ1bmRsZTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20obmV3IFNldChhKSkuZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgZS5hZGRUYXNrKGEsIEVMb3dQcmlvcml0eUJ1bmRsZVByaW9yaXR5LkRlZmF1bHRDYXJkWGluZ3l1bkh1YVBhaSk7XG4gICAgfSk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyhlLCBhKSB7XG4gICAgdmFyIHI7XG4gICAgdGhpcy5fY3VycmVudEdhbWVUeXBlID0gbnVsbCA9PT0gKHIgPSBlLmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lVHlwZTtcbiAgICB0aGlzLl9jYWNoZWRTaG91bGRBcHBseVRoZW1lID0gdGhpcy5fY3VycmVudEdhbWVUeXBlID09PSBNakdhbWVUeXBlLkNsYXNzaWM7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUpIHtcbiAgICAgIHRoaXMuYWRkUHJlbG9hZEF0bGFzKGUuaW5zKTtcbiAgICAgIGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2NhbERhdGEudGlhb0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lID0gbnVsbDtcbiAgICAgIGEoKTtcbiAgICB9XG4gIH1cbiAgYWRkUHJlbG9hZEF0bGFzKGUpIHtcbiAgICBpZiAoZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuYWRkUHJlbG9hZFJlcykge1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLmZsb3dlclRoZW1lICYmIHRoaXMubG9jYWxEYXRhLmZsb3dlclRoZW1lLmJ1bmRsZSkge1xuICAgICAgICB2YXIgYSA9IHRoaXMubG9jYWxEYXRhLmZsb3dlclRoZW1lLmJ1bmRsZSArIFwiOmF0bGFzL2Zsb3dlckNhcmRJY29uXCI7XG4gICAgICAgIGUuYWRkUHJlbG9hZFJlcyhcIlNwcml0ZUF0bGFzXCIsIGEpO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSBDbGFzc2ljQmFzZVNraW5UcmFpdC5MRVRURVJfQlVORExFICsgXCI6XCIgKyBDbGFzc2ljQmFzZVNraW5UcmFpdC5MRVRURVJfQVRMQVNfUEFUSDtcbiAgICAgIGUuYWRkUHJlbG9hZFJlcyhcIlNwcml0ZUF0bGFzXCIsIHQpO1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLnRvbmdUaGVtZSAmJiB0aGlzLmxvY2FsRGF0YS50b25nVGhlbWUuYnVuZGxlKSB7XG4gICAgICAgIGEgPSB0aGlzLmxvY2FsRGF0YS50b25nVGhlbWUuYnVuZGxlICsgXCI6YXRsYXMvZmxvd2VyQ2FyZEljb25cIjtcbiAgICAgICAgZS5hZGRQcmVsb2FkUmVzKFwiU3ByaXRlQXRsYXNcIiwgYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uQ2hnQmF0Y2hBbmltQmh2X3N0YXJ0KGUsIGEpIHtcbiAgICB2YXIgciwgdDtcbiAgICBpZiAodGhpcy5fY3VycmVudEdhbWVUeXBlID09PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHZhciBsID0gbnVsbCA9PT0gKHIgPSBlLmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMF0sXG4gICAgICAgIGkgPSBudWxsID09PSAodCA9IG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuZGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5iYXRjaElkO1xuICAgICAgaSA+IDAgJiYgaSAlIHRoaXMuX2Zsb3dlcldhdmVJbnRlcnZhbCA9PSAwICYmIHRoaXMuc3dpdGNoRmxvd2VyVGhlbWUoKTtcbiAgICAgIGkgPiAwICYmIGkgJSB0aGlzLl90aWFvV2F2ZUludGVydmFsID09IDAgJiYgdGhpcy5zd2l0Y2hUaWFvVGhlbWUoKTtcbiAgICAgIGkgPiAwICYmIGkgJSB0aGlzLl90b25nV2F2ZUludGVydmFsID09IDAgJiYgdGhpcy5zd2l0Y2hUb25nVGhlbWUoKTtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5mbG93ZXJUaGVtZSB8fCB0aGlzLmxvY2FsRGF0YS50aWFvQWN0aXZlIHx8IHRoaXMubG9jYWxEYXRhLnRvbmdUaGVtZSkge1xuICAgICAgICB2YXIgbyA9IGUuaW5zO1xuICAgICAgICB0aGlzLnJlZnJlc2hFeGlzdGluZ0NhcmRzKG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uY29udGV4dCk7XG4gICAgICB9XG4gICAgICBhKCk7XG4gICAgfSBlbHNlIGEoKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKGUsIGEpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudEdhbWVUeXBlID09PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMuY2xlYXJUaGVtZURhdGEoKTtcbiAgICAgIGEoKTtcbiAgICB9IGVsc2UgYSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUoZSwgYSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50R2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5jbGVhclRoZW1lRGF0YSgpO1xuICAgICAgYSgpO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgY2xlYXJUaGVtZURhdGEoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEuZmxvd2VyVGhlbWUgPSBudWxsO1xuICAgIHRoaXMubG9jYWxEYXRhLnRpYW9BY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmxvY2FsRGF0YS50aWFvTWFwcGluZyA9IG51bGw7XG4gICAgdGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lID0gbnVsbDtcbiAgfVxuICBzd2l0Y2hUaWFvVGhlbWUoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEudGlhb0FjdGl2ZSA9IHRydWU7XG4gICAgdmFyIGUgPSB0aGlzLnNodWZmbGVBcnJheShbLi4uQ2xhc3NpY0Jhc2VTa2luVHJhaXQuQUxMX0xFVFRFUl9OQU1FU10pLnNsaWNlKDAsIDkpO1xuICAgIHRoaXMubG9jYWxEYXRhLnRpYW9NYXBwaW5nID0gZTtcbiAgICB2YXIgYSA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q29udHJvQnlOYW1lKFwiQ2xhc3NpY0NvbnRyb2xsZXJcIik7XG4gICAgdGhpcy5wcmVsb2FkTGV0dGVyQXRsYXMoYSk7XG4gIH1cbiAgcHJlbG9hZExldHRlckF0bGFzKGUpIHtcbiAgICB2YXIgYSA9IGUgfHwgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJDbGFzc2ljQ29udHJvbGxlclwiKTtcbiAgICBhICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYS5sb2FkUmVzICYmIGEubG9hZFJlcyhDbGFzc2ljQmFzZVNraW5UcmFpdC5MRVRURVJfQVRMQVNfUEFUSCwgY2MuU3ByaXRlQXRsYXMsIENsYXNzaWNCYXNlU2tpblRyYWl0LkxFVFRFUl9CVU5ETEUpLnRoZW4oZnVuY3Rpb24gKCkge30pLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBzaHVmZmxlQXJyYXkoZSkge1xuICAgIGZvciAodmFyIGEsIHIgPSBlLmxlbmd0aCAtIDE7IHIgPiAwOyByLS0pIHtcbiAgICAgIHZhciB0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHIgKyAxKSk7XG4gICAgICBhID0gX19yZWFkKFtlW3RdLCBlW3JdXSwgMiksIGVbcl0gPSBhWzBdLCBlW3RdID0gYVsxXTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgc3dpdGNoVG9uZ1RoZW1lKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIGEgPSB0aGlzLl9zdGFyVGhlbWVzTGlzdDtcbiAgICBpZiAoYSAmJiAwICE9PSBhLmxlbmd0aCkge1xuICAgICAgdmFyIHIgPSBhLmZpbHRlcihmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiBhLmlkICE9PSBlLmxvY2FsRGF0YS5sYXN0VG9uZ1RoZW1lSWQ7XG4gICAgICAgIH0pLFxuICAgICAgICB0ID0gci5sZW5ndGggPiAwID8gciA6IGEsXG4gICAgICAgIGwgPSB0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHQubGVuZ3RoKV07XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VG9uZ1RoZW1lSWQgPSBsLmlkO1xuICAgICAgdGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lID0gbDtcbiAgICAgIHZhciBpID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJDbGFzc2ljQ29udHJvbGxlclwiKTtcbiAgICAgIHRoaXMucHJlbG9hZFN0YXJBdGxhcyhsLCBpKTtcbiAgICB9XG4gIH1cbiAgaXNCdW5kbGVSZWFkeShlKSB7XG4gICAgcmV0dXJuIExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyLmdldEluc3RhbmNlKCkuaXNCdW5kbGVQcmVMb2FkZWQoZSk7XG4gIH1cbiAgc3dpdGNoRmxvd2VyVGhlbWUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgYSA9IHRoaXMuX2Zsb3dlclNlcmllc0xpc3Q7XG4gICAgaWYgKGEgJiYgMCAhPT0gYS5sZW5ndGgpIHtcbiAgICAgIHZhciByID0gYS5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICByZXR1cm4gMCAhPT0gYS5pZCAmJiBhLmlkICE9PSBlLmxvY2FsRGF0YS5sYXN0Rmxvd2VyVGhlbWVJZCAmJiAoISFhLmlzTG9jYWwgfHwgZS5pc0J1bmRsZVJlYWR5KGEuYnVuZGxlKSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0ID0gcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByLmxlbmd0aCldO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEZsb3dlclRoZW1lSWQgPSB0LmlkO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZmxvd2VyVGhlbWUgPSB0O1xuICAgICAgdmFyIGwgPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENvbnRyb0J5TmFtZShcIkNsYXNzaWNDb250cm9sbGVyXCIpO1xuICAgICAgdGhpcy5wcmVsb2FkRmxvd2VyQXRsYXModCwgbCk7XG4gICAgICB0aGlzLmxvYWRGbG93ZXJTcGluZSh0LCBsKTtcbiAgICB9XG4gIH1cbiAgcHJlbG9hZEZsb3dlckF0bGFzKGUsIGEpIHtcbiAgICBpZiAoZSAmJiBlLmJ1bmRsZSkge1xuICAgICAgdmFyIHIgPSBhIHx8IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q29udHJvQnlOYW1lKFwiQ2xhc3NpY0NvbnRyb2xsZXJcIik7XG4gICAgICByICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygci5sb2FkUmVzICYmIHIubG9hZFJlcyhcImF0bGFzL2Zsb3dlckNhcmRJY29uXCIsIGNjLlNwcml0ZUF0bGFzLCBlLmJ1bmRsZSkudGhlbihmdW5jdGlvbiAoKSB7fSkuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgfVxuICBpc0Zsb3dlckNhcmQoZSkge1xuICAgIHJldHVybiBDbGFzc2ljQmFzZVNraW5UcmFpdC5GTE9XRVJfQ0FSRF9OQU1FUy5oYXMoZSk7XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUoZSwgYSkge1xuICAgIHZhciB0O1xuICAgIGlmICh0aGlzLl9jYWNoZWRTaG91bGRBcHBseVRoZW1lKSB7XG4gICAgICB2YXIgbCA9IG51bGwgPT09ICh0ID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0WzBdO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgdmFyIGkgPSBsLnJlcGxhY2UoL1xcLnBuZyQvaSwgXCJcIik7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5mbG93ZXJUaGVtZSAmJiB0aGlzLmlzRmxvd2VyQ2FyZChpKSkgYSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICBwYXRoOiBcImF0bGFzL2Zsb3dlckNhcmRJY29uL1wiICsgaSxcbiAgICAgICAgICAgIGJ1bmRsZU5hbWU6IHRoaXMubG9jYWxEYXRhLmZsb3dlclRoZW1lLmJ1bmRsZSxcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7ZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLnRpYW9BY3RpdmUgJiYgdGhpcy5sb2NhbERhdGEudGlhb01hcHBpbmcgJiYgdGhpcy5pc1RpYW9DYXJkKGkpKSB7XG4gICAgICAgICAgICB2YXIgbyA9IHRoaXMubWFwVGlhb1RvTGV0dGVyTmFtZShpKTtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgIGEoe1xuICAgICAgICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgICAgICAgcGF0aDogQ2xhc3NpY0Jhc2VTa2luVHJhaXQuTEVUVEVSX0FUTEFTX1BBVEggKyBcIi9cIiArIG8sXG4gICAgICAgICAgICAgICAgICBidW5kbGVOYW1lOiBDbGFzc2ljQmFzZVNraW5UcmFpdC5MRVRURVJfQlVORExFLFxuICAgICAgICAgICAgICAgICAgZnJvbUF0bGFzOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lICYmIHRoaXMuaXNUb25nQ2FyZChpKSkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm1hcFRvbmdUb0Zsb3dlck5hbWUoaSk7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICBhKHtcbiAgICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgICAgICAgIHBhdGg6IFwiYXRsYXMvZmxvd2VyQ2FyZEljb24vXCIgKyBuLFxuICAgICAgICAgICAgICAgICAgYnVuZGxlTmFtZTogdGhpcy5sb2NhbERhdGEudG9uZ1RoZW1lLmJ1bmRsZSxcbiAgICAgICAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgYSgpO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgaXNUaWFvQ2FyZChlKSB7XG4gICAgcmV0dXJuIC9edFsxLTldJC8udGVzdChlKTtcbiAgfVxuICBpc1RvbmdDYXJkKGUpIHtcbiAgICByZXR1cm4gL15iWzEtOV0kLy50ZXN0KGUpO1xuICB9XG4gIG1hcFRpYW9Ub0xldHRlck5hbWUoZSkge1xuICAgIHZhciBhID0gZS5tYXRjaCgvXnQoWzEtOV0pJC8pO1xuICAgIGlmICghYSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHIgPSBOdW1iZXIucGFyc2VJbnQoYVsxXSwgMTApLFxuICAgICAgdCA9IHRoaXMubG9jYWxEYXRhLnRpYW9NYXBwaW5nO1xuICAgIHJldHVybiAhdCB8fCB0Lmxlbmd0aCA8IHIgPyBudWxsIDogdFtyIC0gMV07XG4gIH1cbiAgbWFwVG9uZ1RvRmxvd2VyTmFtZShlKSB7XG4gICAgdmFyIGEgPSBlLm1hdGNoKC9eYihbMS05XSkkLyk7XG4gICAgaWYgKCFhKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdCA9IE51bWJlci5wYXJzZUludChhWzFdLCAxMCk7XG4gICAgcmV0dXJuIENsYXNzaWNCYXNlU2tpblRyYWl0LlRPTkdfQ0FSRF9NQVBbdF0gfHwgbnVsbDtcbiAgfVxuICBwcmVsb2FkU3RhckF0bGFzKGUsIGEpIHtcbiAgICBpZiAoZSAmJiBlLmJ1bmRsZSkge1xuICAgICAgdmFyIHIgPSBhIHx8IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q29udHJvQnlOYW1lKFwiQ2xhc3NpY0NvbnRyb2xsZXJcIik7XG4gICAgICByICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygci5sb2FkUmVzICYmIHIubG9hZFJlcyhcImF0bGFzL2Zsb3dlckNhcmRJY29uXCIsIGNjLlNwcml0ZUF0bGFzLCBlLmJ1bmRsZSkudGhlbihmdW5jdGlvbiAoKSB7fSkuY2F0Y2goZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgfVxuICByZWZyZXNoRXhpc3RpbmdDYXJkcyhlKSB7XG4gICAgdmFyIGEsXG4gICAgICByID0gdGhpcyxcbiAgICAgIHQgPSBudWxsID09PSAoYSA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuZ2V0VGlsZU5vZGVNYW5hZ2VyKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmNhbGwoZSk7XG4gICAgaWYgKHQpIHtcbiAgICAgIHQuZ2V0VGlsZU5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgYSA9IGUudGlsZU9iamVjdDtcbiAgICAgICAgaWYgKGEgJiYgYS5pc1ZhbGlkKSB7XG4gICAgICAgICAgdmFyIHQgPSBhLnJlc05hbWU7XG4gICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIHZhciBsID0gdC5yZXBsYWNlKC9cXC5wbmckL2ksIFwiXCIpO1xuICAgICAgICAgICAgKHIuaXNGbG93ZXJDYXJkKGwpIHx8IHIuaXNUaWFvQ2FyZChsKSB8fCByLmlzVG9uZ0NhcmQobCkpICYmIGUudXBkYXRlSW1nQ2FyZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGlzTG9jYWxFbXB0eShlKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gZSB8fCBcIlwiID09PSBlO1xuICB9XG4gIGxvYWRGbG93ZXJTcGluZShlLCBhKSB7XG4gICAgdmFyIHIgPSB0aGlzO1xuICAgIGlmIChlICYmICEoZS5pZCA8PSAwKSkge1xuICAgICAgdmFyIHQgPSBlLmJ1bmRsZSxcbiAgICAgICAgbCA9IGEgfHwgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRDb250cm9CeU5hbWUoXCJDbGFzc2ljQ29udHJvbGxlclwiKTtcbiAgICAgIGlmIChsICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgbC5sb2FkUmVzKSB7XG4gICAgICAgIHRoaXMuX2N1cnJTa0RhdGEgPSBudWxsO1xuICAgICAgICBsLmxvYWRSZXMoXCJzcGluZS9nYW1lcGxheV9zcGVjaWFsX2VsaW1pbmF0aW9uXCIsIHNwLlNrZWxldG9uRGF0YSwgdCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBhID0gQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlO1xuICAgICAgICAgIHIuX2N1cnJTa0RhdGEgPSBhIHx8IG51bGw7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByLl9jdXJyU2tEYXRhID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uSW5pdFZpZXdCaHZfY3J0VGxzKGUsIGEpIHtcbiAgICB2YXIgciwgdDtcbiAgICBpZiAodGhpcy5fY2FjaGVkU2hvdWxkQXBwbHlUaGVtZSkge1xuICAgICAgaWYgKHRoaXMubG9jYWxEYXRhLmZsb3dlclRoZW1lKSB7XG4gICAgICAgIHZhciBsID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAociA9IGUuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2FtZUN0cjtcbiAgICAgICAgdGhpcy5sb2FkRmxvd2VyU3BpbmUodGhpcy5sb2NhbERhdGEuZmxvd2VyVGhlbWUsIGwpO1xuICAgICAgfVxuICAgICAgYSgpO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgb25DbGVhckVmZkJodl9pc1NwQ2FyZChlLCBhKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUpIHtcbiAgICAgIHZhciByID0gZS5hcmdzWzBdLFxuICAgICAgICB0ID0gZS5hcmdzWzFdLFxuICAgICAgICBsID0gZmFsc2U7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5mbG93ZXJUaGVtZSAmJiB0aGlzLmxvY2FsRGF0YS5mbG93ZXJUaGVtZS5pZCA+IDAgJiYgKGwgPSB0aGlzLmlzRmxvd2VyQ29sbGlzaW9uKGUuaW5zLCByLCB0KSk7XG4gICAgICBhKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgICAgcmV0dXJuVmFsOiBsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgYSgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfY2hhbmdlU3BTa2QoZSwgYSkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRTaG91bGRBcHBseVRoZW1lKSB7XG4gICAgICB2YXIgciA9IGUuYXJnc1swXSxcbiAgICAgICAgdCA9IHRoaXMuX2N1cnJTa0RhdGE7XG4gICAgICB0ICYmIGNjLmlzVmFsaWQodCkgJiYgciAmJiByLnNrZWxldG9uRGF0YSAhPT0gdCAmJiAoci5za2VsZXRvbkRhdGEgPSB0KTtcbiAgICAgIGEoKTtcbiAgICB9IGVsc2UgYSgpO1xuICB9XG4gIG9uQ2xlYXJFZmZCaHZfZ2V0U3BBbmltTmFtZShlLCBhKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUpIHtcbiAgICAgIHZhciByID0gZS5hcmdzWzBdID8gXCJpbl8xXCIgOiBcImluXCI7XG4gICAgICBhKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBhKCk7XG4gIH1cbiAgaXNGbG93ZXJDb2xsaXNpb24oZSwgYSwgcikge1xuICAgIHZhciB0LFxuICAgICAgbCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuY29udGV4dCxcbiAgICAgIGkgPSBudWxsID09PSAodCA9IG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuZ2V0VGlsZU1hcE9iamVjdCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGwpO1xuICAgIGlmICghaSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBvID0gYSA/IGkuZ2V0VGlsZU9iamVjdChhKSA6IG51bGwsXG4gICAgICBuID0gciA/IGkuZ2V0VGlsZU9iamVjdChyKSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMuaXNGbG93ZXJDYXJkSWQobnVsbCA9PSBvID8gdm9pZCAwIDogby5jYXJkSWQpIHx8IHRoaXMuaXNGbG93ZXJDYXJkSWQobnVsbCA9PSBuID8gdm9pZCAwIDogbi5jYXJkSWQpO1xuICB9XG4gIGlzRmxvd2VyQ2FyZElkKGUpIHtcbiAgICBpZiAoIWUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZSA+PSAyOCAmJiBlIDw9IDM0KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZSA9PSBNakNhcmRJZC5lbUZsb3dDYXJkSWQgfHwgZSA9PSBNakNhcmRJZC5lbVNlYXNvbkNhcmRJZCkge1xuICAgICAgdmFyIGEgPSB7XG4gICAgICAgIGlzRmxvd2VyOiB0cnVlXG4gICAgICB9O1xuICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJGbHdDZFNlcmllc19pc09sZEZsd1wiLCB0aGlzLCBbZSwgYV0pO1xuICAgICAgcmV0dXJuIGEuaXNGbG93ZXI7XG4gICAgfVxuICAgIHJldHVybiBlID49IE1qQ2FyZElkLmVtRmxvd0NhcmRJZE1laSAmJiBlIDw9IE1qQ2FyZElkLmVtU2Vhc29uQ2FyZElkRG9uZztcbiAgfVxuICBvbkRpYW5aYW5UdF9jaGVja0RaU3BlY2lhbChlLCBhKSB7XG4gICAgdmFyIHIsIHQ7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFNob3VsZEFwcGx5VGhlbWUpIHtcbiAgICAgIGlmICghdGhpcy5sb2NhbERhdGEuZmxvd2VyVGhlbWUgfHwgdGhpcy5sb2NhbERhdGEuZmxvd2VyVGhlbWUuaWQgPD0gMCkgYSgpO2Vsc2Uge1xuICAgICAgICB2YXIgbCA9IGUuYXJnc1swXSxcbiAgICAgICAgICBpID0gbnVsbCA9PT0gKHIgPSBlLmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jb250ZXh0LFxuICAgICAgICAgIG8gPSBudWxsID09PSAodCA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZ2V0VGlsZU1hcE9iamVjdCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYWxsKGkpLFxuICAgICAgICAgIG4gPSBmYWxzZTtcbiAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICB2YXIgcyA9IGwgPyBvLmdldFRpbGVPYmplY3QobCkgOiBudWxsO1xuICAgICAgICAgIG4gPSB0aGlzLmlzRmxvd2VyQ2FyZElkKG51bGwgPT0gcyA/IHZvaWQgMCA6IHMuY2FyZElkKTtcbiAgICAgICAgfVxuICAgICAgICBhKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICAgIHJldHVyblZhbDogIW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGEoKTtcbiAgfVxufSJdfQ==