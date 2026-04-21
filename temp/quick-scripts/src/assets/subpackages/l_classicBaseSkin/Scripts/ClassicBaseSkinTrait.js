"use strict";
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