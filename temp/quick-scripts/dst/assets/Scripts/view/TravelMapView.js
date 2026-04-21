
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TravelMapView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42cbbDoQ0tNOIYz/1YqPU5Y', 'TravelMapView');
// Scripts/view/TravelMapView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var UIView_1 = require("../framework/ui/UIView");
var TravelMapInterface_1 = require("../TravelMapInterface");
var MapView_1 = require("../map/MapView");
var MapElementFactory_1 = require("../elements/MapElementFactory");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var TravelGameData_1 = require("../core/simulator/data/TravelGameData");
var BaseCell_1 = require("../base/ui/BaseCell");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var DataReader_1 = require("../framework/data/DataReader");
var ConfigType_1 = require("../gamePlay/base/data/ConfigType");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var TravelConfig_1 = require("../config/TravelConfig");
var BadgeMode_1 = require("../gamePlay/badge/mode/BadgeMode");
var Adapter_1 = require("../component/Adapter");
var DGamePageShow_1 = require("../dot/DGamePageShow");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var JumpManager_1 = require("../base/jump/JumpManager");
var TravelMapView = /** @class */ (function (_super) {
    __extends(TravelMapView, _super);
    function TravelMapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.backBtn = null;
        _this.enterBtn = null;
        _this.bottomNode = null;
        _this.levelBtnLabel = null;
        _this.mapScrollView = null;
        _this.leftNode = null;
        _this.topNode = null;
        _this.leftBtn = null;
        _this.leftBadgeNode = null;
        _this.leftIcon = null;
        _this.leftValue = null;
        _this.leftProgressBar = null;
        _this.leftProgressBar2 = null;
        _this.timerLabel = null;
        _this.titleLabel = null;
        _this.hardBgNode = null;
        _this.woodBgNode = null;
        _this.hardUpBgNode = null;
        _this.hardTipNode = null;
        _this.mapView = null;
        _this.mapConfig = null;
        _this.levelConfig = null;
        _this.curLevelId = 0;
        _this.stateConfig = null;
        _this.nextBadgeLevel = -1;
        _this.isCollecting = false;
        _this.lastPassLevel = 0;
        _this.journeyNameCN = "";
        return _this;
    }
    TravelMapView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        MapElementFactory_1.MapElementFactory.init();
        Adapter_1.default.ignoreSafeRect(this.bottomNode);
        var t = Adapter_1.default.getSafeY();
        this.mapScrollView.node.getComponent(cc.Widget).bottom = -t;
        this.OnButtonClick(this.backBtn, this.onBackBtnClick.bind(this));
        this.OnButtonClick(this.enterBtn, this.onEnterBtnClick.bind(this));
        this.OnButtonClick(this.leftBtn, {
            func: this.onLeftBtnClick.bind(this),
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
        this.OnButtonClick(this.leftBadgeNode, this.onLeftBadgeBtnClick.bind(this));
    };
    TravelMapView.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_COLLECT_BADGE] = this.onTravelGameCollectBadge.bind(this);
        return _e;
    };
    TravelMapView.prototype.onTravelGameCollectBadge = function () { };
    TravelMapView.prototype.playEnterBtnAnim = function () {
        this.enterBtn.scale = 0.95;
        cc.tween(this.enterBtn).to(0.2, {
            scale: 1.05
        }, {
            easing: cc.easing.sineIn
        }).to(0.266, {
            scale: 1
        }, {
            easing: cc.easing.sineOut
        }).start();
    };
    TravelMapView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.mapView) {
            this.mapView.clear();
            this.mapView = null;
        }
    };
    TravelMapView.prototype.onBackBtnClick = function () {
        JumpManager_1.default.getInstance().jumpToHall();
        DGameBtnClick_1.DotGameBtnClick.dotTravelMap(DGameBtnClick_1.ETravelMapClickType.Back, this.journeyNameCN);
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.TravelToMainPage);
    };
    TravelMapView.prototype.onLeftBadgeBtnClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.JourneyBtn);
        DGameBtnClick_1.DotGameBtnClick.dotTravelMap(DGameBtnClick_1.ETravelMapClickType.Badge, this.journeyNameCN);
        ControllerManager_1.default.getInstance().pushViewByController("DailyCollController", {
            isShowAction: false,
            type: BadgeMode_1.BadgeType.Journey,
            enterType: 2
        });
    };
    TravelMapView.prototype.onEnterBtnClick = function () {
        if (!(this.curLevelId > this.levelConfig.levelCount))
            if (TravelGameModel_1.default.getInstance().isSessionActive()) {
                DGameBtnClick_1.DotGameBtnClick.dotTravelMap(DGameBtnClick_1.ETravelMapClickType.Play, this.journeyNameCN, this.curLevelId);
                this.goToTravelGame();
            }
            else
                JumpManager_1.default.getInstance().jumpToHall();
    };
    TravelMapView.prototype.goToTravelGame = function () {
        var e = this;
        this.node && cc.isValid(this.node) && ControllerManager_1.default.getInstance().pushViewByController("TravelGameController", {}, function () {
            var t;
            null === (t = e.delegate) || void 0 === t || t.close();
        });
    };
    TravelMapView.prototype.clearRedDot = function () {
        var e = TravelGameModel_1.default.getInstance();
        e.setFirstOpen(true);
        if (e.getRedPointState() === TravelGameModel_1.ETravelRedPointState.Show) {
            e.setRedPointState(TravelGameModel_1.ETravelRedPointState.Hide);
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_clearNotify, "journey");
        }
    };
    TravelMapView.prototype.viewDidLoad = function (e) {
        var t = this, o = TravelGameModel_1.default.getInstance();
        this.curLevelId = TravelGameData_1.default.getInstance().getLevelId();
        var n = o.getCurJourney(), i = o.getLevelConfig(n), r = ConfigType_1.MapConfigMap[i.mapConfig];
        this.mapConfig = DataReader_1.DataReader.getList(r);
        this.levelConfig = i;
        this.clearRedDot();
        this.initTableView();
        this.lastPassLevel = o.getLastMapLevel();
        this.lastPassLevel = Math.max(this.lastPassLevel, 1);
        o.setLastMapLevel(this.curLevelId);
        this.isCollecting = false;
        if (null == e ? void 0 : e.badge) {
            this.isCollecting = true;
            ControllerManager_1.default.getInstance().pushViewByController("TravelRewardController", {
                levelId: this.curLevelId - 1,
                isShowAction: false
            });
        }
        this.updateView();
        this.scheduleOnce(function () {
            if (t.mapView) {
                t.mapView.resetViewSize();
                t.mapView.checkUpdateCell();
            }
        }, 0);
        this.schedule(this.updateTime.bind(this), 5);
    };
    TravelMapView.prototype.viewDidShow = function () { };
    TravelMapView.prototype.updateTime = function () {
        var e = TravelGameModel_1.default.getInstance().getRemainTime(), t = __read(GameUtils_1.default.getRemainTimeParts(e), 4), o = t[0], n = t[1], i = t[2], r = (t[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel.node, r(o) + "d" + r(n) + "h" + r(i) + "m", "Common_CountDown_Minute", [o, n, i]);
    };
    TravelMapView.prototype.updateBottom = function () {
        this.levelBtnLabel = this.enterBtn.getComponentInChildren(cc.Label);
        I18NStrings_1.default.setText(this.levelBtnLabel.node, "Level " + this.curLevelId, "MahjongTiles_MapPage_Level", [this.curLevelId]);
        this.bottomNode.active = this.curLevelId <= this.levelConfig.levelCount;
        var e = TravelGameModel_1.default.getInstance();
        this.hardBgNode.active = false;
        this.woodBgNode.active = true;
        this.hardUpBgNode.active = false;
        this.hardTipNode.active = false;
        if (e.isHardLevel(this.curLevelId)) {
            this.woodBgNode.active = false;
            this.hardBgNode.active = true;
            this.hardUpBgNode.active = true;
            this.hardTipNode.active = true;
            this.updateDiffBgWidth();
        }
        this.playEnterBtnAnim();
    };
    TravelMapView.prototype.updateDiffBgWidth = function () {
        var e = this;
        this.scheduleOnce(function () {
            cc.isValid(e.hardTipNode) && (e.hardUpBgNode.width = e.hardTipNode.width + 50);
        }, 0);
    };
    TravelMapView.prototype.updateLeft = function () {
        var e = this, t = TravelGameModel_1.default.getInstance(), o = t.getCurJourney(), n = t.getRewardInfo(o).find(function (t) {
            return t.type === TravelConfig_1.ETravelRewardType.EBadge && t.lv >= e.curLevelId && !t.gain;
        });
        if (n) {
            var i = t.getLevelById(n.lv, o), r = n.lv;
            this.leftNode.active = true;
            var l = (this.lastPassLevel - 1) / r, s = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.TravelNavigation, i.type);
            if (s && "" !== s.path) {
                var c = __read(s.path.split(":"), 2), u = c[0], p = c[1];
                BaseSprite_1.default.refreshWithNode(this.leftIcon.node, u, s.atlas, true, p);
            }
            this.nextBadgeLevel = n.lv;
            var f = (this.curLevelId - 1) / r;
            if (f === l) {
                this.leftProgressBar.progress = f;
                this.leftValue.string = this.curLevelId - 1 + "/" + r;
                this.leftProgressBar2.width = 150 * f;
                this.leftProgressBar2.opacity = 0;
            }
            else {
                this.leftProgressBar.progress = l;
                this.leftValue.string = this.curLevelId - 1 + "/" + r;
                cc.tween(this.leftProgressBar).to(0.333, {
                    progress: f
                }).start();
                this.leftProgressBar2.opacity = 255;
                this.leftProgressBar2.width = 150 * l;
                cc.tween(this.leftProgressBar2).to(0.333, {
                    width: 150 * f
                }).to(0.333, {
                    opacity: 0
                }).start();
                this.leftValue.node.scale = 1;
                cc.tween(this.leftValue.node).to(0.266, {
                    scale: 1.2
                }, {
                    easing: cc.easing.sineOut
                }).to(0.234, {
                    scale: 1
                }, {
                    easing: cc.easing.sineIn
                }).start();
            }
        }
        else {
            this.nextBadgeLevel = -1;
            this.leftNode.active = false;
        }
    };
    TravelMapView.prototype.updateMap = function () {
        this.updateMapElementsConfig();
        this.mapView.reloadData();
        var e = this.getCellPosById(this.curLevelId);
        e && this.mapView.setContentPosition(e, true);
    };
    TravelMapView.prototype.updateTitle = function () {
        var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, e);
        I18NStrings_1.default.setText(this.titleLabel.node, "Adventure", t.name);
        this.journeyNameCN = I18NStrings_1.default.getCN(t.name);
    };
    TravelMapView.prototype.updateView = function () {
        this.updateMap();
        this.updateLeft();
        this.updateTime();
        this.updateBottom();
        this.updateTitle();
    };
    TravelMapView.prototype.getCellPosById = function (e) {
        var t = this.stateConfig.elements.filter(function (e) {
            return e.level > 0;
        }), o = t.findIndex(function (t) {
            return t.level === e;
        });
        return o >= 0 ? t[o].pos : t.length > 0 ? t[t.length - 1].pos : null;
    };
    TravelMapView.prototype.updateMapElementsConfig = function () {
        var e, t, o = false;
        this.curLevelId > this.levelConfig.levelCount && (o = true);
        var n = o ? this.levelConfig.finishOffset : 0, i = cc.size(1080, this.levelConfig.height + n);
        i.height += n;
        this.stateConfig = {
            size: i,
            finishOffset: n,
            elements: [],
            map: this.levelConfig.mapRes,
            path: this.levelConfig.mapConfig
        };
        var r = Date.now(), a = this.curLevelId - this.lastPassLevel, s = Math.min(a, 10), c = this.curLevelId - s, p = TravelGameModel_1.default.getInstance().getCurJourney(), d = TravelGameModel_1.default.getInstance().getRewardInfo(p).filter(function (e) {
            return e.type === TravelConfig_1.ETravelRewardType.EBadge && e.gain;
        }).map(function (e) {
            return e.lv;
        });
        try {
            for (var h = __values(this.mapConfig), y = h.next(); !y.done; y = h.next()) {
                var m = y.value, g = TravelMapInterface_1.EJourneyMapState.Locked, _ = 0;
                if (this.curLevelId === m.level) {
                    g = TravelMapInterface_1.EJourneyMapState.Selected;
                    d.includes(m.level) && (g = TravelMapInterface_1.EJourneyMapState.SelectedUnlocked);
                }
                else if (this.curLevelId > m.level) {
                    g = TravelMapInterface_1.EJourneyMapState.Unlocked;
                    if (this.isCollecting && this.curLevelId - 1 === m.level)
                        g = TravelMapInterface_1.EJourneyMapState.Collecting;
                    else if (m.level > c) {
                        g = TravelMapInterface_1.EJourneyMapState.UnlockedPass;
                        _ = 0.1 * (m.level - c);
                    }
                }
                else
                    d.includes(m.level) && (g = TravelMapInterface_1.EJourneyMapState.Unlocked);
                TravelMapInterface_1.FinishLevelElement.includes(m.type) && !o || this.stateConfig.elements.push({
                    level: m.level,
                    type: m.type,
                    state: g,
                    pos: cc.v2(m.pos[0], m.pos[1] - n),
                    size: MapElementFactory_1.MapElementFactory.getSize(m.type),
                    endTime: r + 1000 * _
                });
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                y && !y.done && (t = h.return) && t.call(h);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    TravelMapView.prototype.scrollToCellById = function (e) {
        var t = this.stateConfig.elements.findIndex(function (t) {
            return t.level === e;
        });
        t >= 0 && this.scrollToIndex(t, 300);
    };
    TravelMapView.prototype.scrollToIndex = function (e, t, o) {
        if (t === void 0) { t = 50; }
        if (o === void 0) { o = 0.3; }
        if (!(e < 0 || e >= this.stateConfig.elements.length)) {
            var n = this.stateConfig.elements[e].pos, i = this.mapScrollView.node.height, r = i / 2 - t, a = this.mapScrollView.node.convertToWorldSpaceAR(cc.v2(0, r)), l = this.mapScrollView.content.convertToNodeSpaceAR(a).sub(n), s = this.mapScrollView.getScrollOffset().add(l);
            s.x = 0;
            var c = this.mapScrollView.content.height - i;
            s.y = Math.max(0, Math.min(c, s.y));
            this.mapScrollView.scrollToOffset(s, o);
        }
    };
    TravelMapView.prototype.onLeftBtnClick = function () {
        -1 !== this.nextBadgeLevel && this.scrollToCellById(this.nextBadgeLevel);
    };
    TravelMapView.prototype.initTableView = function () {
        this.mapView = new MapView_1.MapView({
            view: this.mapScrollView
        });
        this.mapView.viewContentSize = this.viewContentSize.bind(this);
        this.mapView.elementTypeAtIndex = this.elementTypeAtIndex.bind(this);
        this.mapView.elementSizeAtIndex = this.elementSizeAtIndex.bind(this);
        this.mapView.elementCount = this.elementCount.bind(this);
        this.mapView.elementAtIndex = this.elementAtIndex.bind(this);
        this.mapView.elementPosAtIndex = this.elementPosAtIndex.bind(this);
        this.mapView.elementWillHide = this.elementWillHide.bind(this);
        this.mapView.elementWillShow = this.elementWillShow.bind(this);
        this.mapView.elementWillMove = this.elementWillMove.bind(this);
    };
    TravelMapView.prototype.createMapElements = function (e, t) {
        var o = this.getElementData(t), n = MapElementFactory_1.MapElementFactory.createCell(o.type), i = n.getComponent(BaseCell_1.default);
        if (i) {
            i.delegate = this.delegate;
            i.updateCell(o);
        }
        n.setContentSize(o.size);
        return n;
    };
    TravelMapView.prototype.getElementData = function (e) {
        return this.stateConfig.elements[e];
    };
    TravelMapView.prototype.viewContentSize = function () {
        return cc.size(1080, this.levelConfig.height);
    };
    TravelMapView.prototype.elementTypeAtIndex = function (e, t) {
        var o = this.getElementData(t);
        return o ? o.type.toString() : "";
    };
    TravelMapView.prototype.elementSizeAtIndex = function (e, t) {
        return this.getElementData(t).size;
    };
    TravelMapView.prototype.elementCount = function () {
        var e, t;
        return (null === (t = null === (e = this.stateConfig) || void 0 === e ? void 0 : e.elements) || void 0 === t ? void 0 : t.length) || 0;
    };
    TravelMapView.prototype.elementAtIndex = function (e, t) {
        return this.createMapElements(e, t);
    };
    TravelMapView.prototype.elementPosAtIndex = function (e, t) {
        return this.getElementData(t).pos;
    };
    TravelMapView.prototype.elementWillHide = function () { };
    TravelMapView.prototype.elementWillShow = function (e, t, o) {
        var n = this.getElementData(t), i = o.getComponent(BaseCell_1.default);
        i && i.updateCell(n);
    };
    TravelMapView.prototype.elementWillMove = function () { };
    TravelMapView.prefabUrl = "prefabs/journeyMap/01/JourneyMap";
    __decorate([
        mj.node("Top/BackBtn")
    ], TravelMapView.prototype, "backBtn", void 0);
    __decorate([
        mj.node("Bottom/LevelBtn")
    ], TravelMapView.prototype, "enterBtn", void 0);
    __decorate([
        mj.node("Bottom")
    ], TravelMapView.prototype, "bottomNode", void 0);
    __decorate([
        mj.component("Bottom/LevelBtn/Value", cc.Label)
    ], TravelMapView.prototype, "levelBtnLabel", void 0);
    __decorate([
        mj.component("Map", cc.ScrollView)
    ], TravelMapView.prototype, "mapScrollView", void 0);
    __decorate([
        mj.node("Left")
    ], TravelMapView.prototype, "leftNode", void 0);
    __decorate([
        mj.node("Top")
    ], TravelMapView.prototype, "topNode", void 0);
    __decorate([
        mj.node("Left/Btn")
    ], TravelMapView.prototype, "leftBtn", void 0);
    __decorate([
        mj.node("Top/BadgeBtn")
    ], TravelMapView.prototype, "leftBadgeNode", void 0);
    __decorate([
        mj.component("Left/Btn/Icon", cc.Sprite)
    ], TravelMapView.prototype, "leftIcon", void 0);
    __decorate([
        mj.component("Left/Value", cc.Label)
    ], TravelMapView.prototype, "leftValue", void 0);
    __decorate([
        mj.component("Left/ProgressBar", cc.ProgressBar)
    ], TravelMapView.prototype, "leftProgressBar", void 0);
    __decorate([
        mj.node("Left/ProgressBar/Bar2")
    ], TravelMapView.prototype, "leftProgressBar2", void 0);
    __decorate([
        mj.component("Top/Timer/Layout/Label", cc.Label)
    ], TravelMapView.prototype, "timerLabel", void 0);
    __decorate([
        mj.component("Top/Title", cc.Label)
    ], TravelMapView.prototype, "titleLabel", void 0);
    __decorate([
        mj.node("Bottom/LevelBtn/BgHard")
    ], TravelMapView.prototype, "hardBgNode", void 0);
    __decorate([
        mj.node("Bottom/LevelBtn/BgWood")
    ], TravelMapView.prototype, "woodBgNode", void 0);
    __decorate([
        mj.node("Bottom/LevelBtn/BgHardUp")
    ], TravelMapView.prototype, "hardUpBgNode", void 0);
    __decorate([
        mj.node("Bottom/LevelBtn/HardTip")
    ], TravelMapView.prototype, "hardTipNode", void 0);
    __decorate([
        mj.traitEvent("TLMapVw_collectBadge")
    ], TravelMapView.prototype, "onTravelGameCollectBadge", null);
    __decorate([
        mj.traitEvent("TLMapVw_goTravelGm")
    ], TravelMapView.prototype, "goToTravelGame", null);
    __decorate([
        mj.traitEvent("TLMapVw_viewShow")
    ], TravelMapView.prototype, "viewDidShow", null);
    __decorate([
        mj.traitEvent("TLMapVw_updateMapEleCfg")
    ], TravelMapView.prototype, "updateMapElementsConfig", null);
    TravelMapView = __decorate([
        mj.class
    ], TravelMapView);
    return TravelMapView;
}(UIView_1.default));
exports.default = TravelMapView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVHJhdmVsTWFwVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLGlEQUE0QztBQUM1Qyw0REFBNkU7QUFDN0UsMENBQXlDO0FBQ3pDLG1FQUFrRTtBQUNsRSw2REFBd0Q7QUFDeEQsd0VBQW1FO0FBQ25FLGdEQUEyQztBQUMzQyw2REFBd0Q7QUFDeEQsNEVBQWlHO0FBQ2pHLDJEQUEwRDtBQUMxRCwrREFBNEU7QUFDNUUsOERBQXlEO0FBQ3pELHVEQUFzRjtBQUN0Riw4REFBNkQ7QUFDN0QsZ0RBQTJDO0FBQzNDLHNEQUFzRTtBQUN0RSxzREFBNkY7QUFDN0YsMEVBQW9FO0FBQ3BFLDZEQUE2RDtBQUM3RCx3REFBbUQ7QUFFbkQ7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFnYUM7UUE5WkMsYUFBTyxHQUFrQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFzQixJQUFJLENBQUM7UUFFbkMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBNEIsSUFBSSxDQUFDO1FBRTlDLG1CQUFhLEdBQVUsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFVLElBQUksQ0FBQztRQUV0QixhQUFPLEdBQWUsSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixxQkFBZSxHQUF1QixJQUFJLENBQUM7UUFFM0Msc0JBQWdCLEdBQTRCLElBQUksQ0FBQztRQUVqRCxnQkFBVSxHQUE2QixJQUFJLENBQUM7UUFFNUMsZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQTZCLElBQUksQ0FBQztRQUU1QyxnQkFBVSxHQUE2QixJQUFJLENBQUM7UUFFNUMsa0JBQVksR0FBK0IsSUFBSSxD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QUVqRDtRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTDtJQUU1QztRQURDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0w7SUFFL0I7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO3FEQUNVO0lBRTVDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztxREFDVTtJQUU1QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7dURBQ1k7SUFFaEQ7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDO3NEQUNXO0lBK0I5QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7aUVBQ1Q7SUF5QzdCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt1REFPbkM7SUF5Q0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO29EQUNsQjtJQXdIaEI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2dFQTZEeEM7SUFqVmtCLGFBQWE7UUFEakMsRUFBRSxDQUFDLEtBQUs7T0FDWSxhQUFhLENBZ2FqQztJQUFELG9CQUFDO0NBaGFELEFBZ2FDLENBaGEwQyxnQkFBTSxHQWdhaEQ7a0JBaGFvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgeyBFSm91cm5leU1hcFN0YXRlLCBGaW5pc2hMZXZlbEVsZW1lbnQgfSBmcm9tICcuLi9UcmF2ZWxNYXBJbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gJy4uL21hcC9NYXBWaWV3JztcbmltcG9ydCB7IE1hcEVsZW1lbnRGYWN0b3J5IH0gZnJvbSAnLi4vZWxlbWVudHMvTWFwRWxlbWVudEZhY3RvcnknO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBUcmF2ZWxHYW1lRGF0YSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9kYXRhL1RyYXZlbEdhbWVEYXRhJztcbmltcG9ydCBCYXNlQ2VsbCBmcm9tICcuLi9iYXNlL3VpL0Jhc2VDZWxsJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsLCB7IEVUcmF2ZWxSZWRQb2ludFN0YXRlIH0gZnJvbSAnLi4vZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBNYXBDb25maWdNYXAsIENvbmZpZ1R5cGUgfSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL2RhdGEvQ29uZmlnVHlwZSc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IFRSQVZFTF9HQU1FX0NPTExFQ1RfQkFER0UsIEVUcmF2ZWxSZXdhcmRUeXBlIH0gZnJvbSAnLi4vY29uZmlnL1RyYXZlbENvbmZpZyc7XG5pbXBvcnQgeyBCYWRnZVR5cGUgfSBmcm9tICcuLi9nYW1lUGxheS9iYWRnZS9tb2RlL0JhZGdlTW9kZSc7XG5pbXBvcnQgQWRhcHRlciBmcm9tICcuLi9jb21wb25lbnQvQWRhcHRlcic7XG5pbXBvcnQgeyBEb3RHYW1lUGFnZVNob3csIEVQYWdlU2hvd1R5cGUgfSBmcm9tICcuLi9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVUcmF2ZWxNYXBDbGlja1R5cGUsIEVCYWRnZUNsaWNrVHlwZSB9IGZyb20gJy4uL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi4vYmFzZS9qdW1wL0p1bXBNYW5hZ2VyJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsTWFwVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIEBtai5ub2RlKFwiVG9wL0JhY2tCdG5cIilcbiAgYmFja0J0bjogXCJUb3AvQmFja0J0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCb3R0b20vTGV2ZWxCdG5cIilcbiAgZW50ZXJCdG46IFwiQm90dG9tL0xldmVsQnRuXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJvdHRvbVwiKVxuICBib3R0b21Ob2RlOiBcIkJvdHRvbVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkJvdHRvbS9MZXZlbEJ0bi9WYWx1ZVwiLCBjYy5MYWJlbClcbiAgbGV2ZWxCdG5MYWJlbDogXCJCb3R0b20vTGV2ZWxCdG4vVmFsdWVcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJNYXBcIiwgY2MuU2Nyb2xsVmlldylcbiAgbWFwU2Nyb2xsVmlldzogXCJNYXBcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiTGVmdFwiKVxuICBsZWZ0Tm9kZTogXCJMZWZ0XCIgPSBudWxsO1xuICBAbWoubm9kZShcIlRvcFwiKVxuICB0b3BOb2RlOiBcIlRvcFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJMZWZ0L0J0blwiKVxuICBsZWZ0QnRuOiBcIkxlZnQvQnRuXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlRvcC9CYWRnZUJ0blwiKVxuICBsZWZ0QmFkZ2VOb2RlOiBcIlRvcC9CYWRnZUJ0blwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkxlZnQvQnRuL0ljb25cIiwgY2MuU3ByaXRlKVxuICBsZWZ0SWNvbjogXCJMZWZ0L0J0bi9JY29uXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiTGVmdC9WYWx1ZVwiLCBjYy5MYWJlbClcbiAgbGVmdFZhbHVlOiBcIkxlZnQvVmFsdWVcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJMZWZ0L1Byb2dyZXNzQmFyXCIsIGNjLlByb2dyZXNzQmFyKVxuICBsZWZ0UHJvZ3Jlc3NCYXI6IFwiTGVmdC9Qcm9ncmVzc0JhclwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJMZWZ0L1Byb2dyZXNzQmFyL0JhcjJcIilcbiAgbGVmdFByb2dyZXNzQmFyMjogXCJMZWZ0L1Byb2dyZXNzQmFyL0JhcjJcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJUb3AvVGltZXIvTGF5b3V0L0xhYmVsXCIsIGNjLkxhYmVsKVxuICB0aW1lckxhYmVsOiBcIlRvcC9UaW1lci9MYXlvdXQvTGFiZWxcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJUb3AvVGl0bGVcIiwgY2MuTGFiZWwpXG4gIHRpdGxlTGFiZWw6IFwiVG9wL1RpdGxlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJvdHRvbS9MZXZlbEJ0bi9CZ0hhcmRcIilcbiAgaGFyZEJnTm9kZTogXCJCb3R0b20vTGV2ZWxCdG4vQmdIYXJkXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJvdHRvbS9MZXZlbEJ0bi9CZ1dvb2RcIilcbiAgd29vZEJnTm9kZTogXCJCb3R0b20vTGV2ZWxCdG4vQmdXb29kXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJvdHRvbS9MZXZlbEJ0bi9CZ0hhcmRVcFwiKVxuICBoYXJkVXBCZ05vZGU6IFwiQm90dG9tL0xldmVsQnRuL0JnSGFyZFVwXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJvdHRvbS9MZXZlbEJ0bi9IYXJkVGlwXCIpXG4gIGhhcmRUaXBOb2RlOiBcIkJvdHRvbS9MZXZlbEJ0bi9IYXJkVGlwXCIgPSBudWxsO1xuICBtYXBWaWV3ID0gbnVsbDtcbiAgbWFwQ29uZmlnID0gbnVsbDtcbiAgbGV2ZWxDb25maWcgPSBudWxsO1xuICBjdXJMZXZlbElkID0gMDtcbiAgc3RhdGVDb25maWcgPSBudWxsO1xuICBuZXh0QmFkZ2VMZXZlbCA9IC0xO1xuICBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbiAgbGFzdFBhc3NMZXZlbCA9IDA7XG4gIGpvdXJuZXlOYW1lQ04gPSBcIlwiO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2pvdXJuZXlNYXAvMDEvSm91cm5leU1hcFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgTWFwRWxlbWVudEZhY3RvcnkuaW5pdCgpO1xuICAgIEFkYXB0ZXIuaWdub3JlU2FmZVJlY3QodGhpcy5ib3R0b21Ob2RlKTtcbiAgICB2YXIgdCA9IEFkYXB0ZXIuZ2V0U2FmZVkoKTtcbiAgICB0aGlzLm1hcFNjcm9sbFZpZXcubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5ib3R0b20gPSAtdDtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5iYWNrQnRuLCB0aGlzLm9uQmFja0J0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmVudGVyQnRuLCB0aGlzLm9uRW50ZXJCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5sZWZ0QnRuLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uTGVmdEJ0bkNsaWNrLmJpbmQodGhpcyksXG4gICAgICBjbGlja0F1ZGlvOiBFQXVkaW9JRC5UcmF2ZWxCdXR0b24xXG4gICAgfSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubGVmdEJhZGdlTm9kZSwgdGhpcy5vbkxlZnRCYWRnZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9lID0ge307XG4gICAgX2VbVFJBVkVMX0dBTUVfQ09MTEVDVF9CQURHRV0gPSB0aGlzLm9uVHJhdmVsR2FtZUNvbGxlY3RCYWRnZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMTWFwVndfY29sbGVjdEJhZGdlXCIpXG4gIG9uVHJhdmVsR2FtZUNvbGxlY3RCYWRnZSgpIHt9XG4gIHBsYXlFbnRlckJ0bkFuaW0oKSB7XG4gICAgdGhpcy5lbnRlckJ0bi5zY2FsZSA9IDAuOTU7XG4gICAgY2MudHdlZW4odGhpcy5lbnRlckJ0bikudG8oMC4yLCB7XG4gICAgICBzY2FsZTogMS4wNVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJblxuICAgIH0pLnRvKDAuMjY2LCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5tYXBWaWV3KSB7XG4gICAgICB0aGlzLm1hcFZpZXcuY2xlYXIoKTtcbiAgICAgIHRoaXMubWFwVmlldyA9IG51bGw7XG4gICAgfVxuICB9XG4gIG9uQmFja0J0bkNsaWNrKCkge1xuICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvSGFsbCgpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RUcmF2ZWxNYXAoRVRyYXZlbE1hcENsaWNrVHlwZS5CYWNrLCB0aGlzLmpvdXJuZXlOYW1lQ04pO1xuICAgIERvdEdhbWVQYWdlU2hvdy5kb3QoRVBhZ2VTaG93VHlwZS5UcmF2ZWxUb01haW5QYWdlKTtcbiAgfVxuICBvbkxlZnRCYWRnZUJ0bkNsaWNrKCkge1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RCYWRnZShFQmFkZ2VDbGlja1R5cGUuSm91cm5leUJ0bik7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFRyYXZlbE1hcChFVHJhdmVsTWFwQ2xpY2tUeXBlLkJhZGdlLCB0aGlzLmpvdXJuZXlOYW1lQ04pO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJEYWlseUNvbGxDb250cm9sbGVyXCIsIHtcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2UsXG4gICAgICB0eXBlOiBCYWRnZVR5cGUuSm91cm5leSxcbiAgICAgIGVudGVyVHlwZTogMlxuICAgIH0pO1xuICB9XG4gIG9uRW50ZXJCdG5DbGljaygpIHtcbiAgICBpZiAoISh0aGlzLmN1ckxldmVsSWQgPiB0aGlzLmxldmVsQ29uZmlnLmxldmVsQ291bnQpKSBpZiAoVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZXNzaW9uQWN0aXZlKCkpIHtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RUcmF2ZWxNYXAoRVRyYXZlbE1hcENsaWNrVHlwZS5QbGF5LCB0aGlzLmpvdXJuZXlOYW1lQ04sIHRoaXMuY3VyTGV2ZWxJZCk7XG4gICAgICB0aGlzLmdvVG9UcmF2ZWxHYW1lKCk7XG4gICAgfSBlbHNlIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvSGFsbCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExNYXBWd19nb1RyYXZlbEdtXCIpXG4gIGdvVG9UcmF2ZWxHYW1lKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUcmF2ZWxHYW1lQ29udHJvbGxlclwiLCB7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQ7XG4gICAgICBudWxsID09PSAodCA9IGUuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbiAgY2xlYXJSZWREb3QoKSB7XG4gICAgdmFyIGUgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBlLnNldEZpcnN0T3Blbih0cnVlKTtcbiAgICBpZiAoZS5nZXRSZWRQb2ludFN0YXRlKCkgPT09IEVUcmF2ZWxSZWRQb2ludFN0YXRlLlNob3cpIHtcbiAgICAgIGUuc2V0UmVkUG9pbnRTdGF0ZShFVHJhdmVsUmVkUG9pbnRTdGF0ZS5IaWRlKTtcbiAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuUmVkRG90X2NsZWFyTm90aWZ5LCBcImpvdXJuZXlcIik7XG4gICAgfVxuICB9XG4gIHZpZXdEaWRMb2FkKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5jdXJMZXZlbElkID0gVHJhdmVsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCk7XG4gICAgdmFyIG4gPSBvLmdldEN1ckpvdXJuZXkoKSxcbiAgICAgIGkgPSBvLmdldExldmVsQ29uZmlnKG4pLFxuICAgICAgciA9IE1hcENvbmZpZ01hcFtpLm1hcENvbmZpZ107XG4gICAgdGhpcy5tYXBDb25maWcgPSBEYXRhUmVhZGVyLmdldExpc3Qocik7XG4gICAgdGhpcy5sZXZlbENvbmZpZyA9IGk7XG4gICAgdGhpcy5jbGVhclJlZERvdCgpO1xuICAgIHRoaXMuaW5pdFRhYmxlVmlldygpO1xuICAgIHRoaXMubGFzdFBhc3NMZXZlbCA9IG8uZ2V0TGFzdE1hcExldmVsKCk7XG4gICAgdGhpcy5sYXN0UGFzc0xldmVsID0gTWF0aC5tYXgodGhpcy5sYXN0UGFzc0xldmVsLCAxKTtcbiAgICBvLnNldExhc3RNYXBMZXZlbCh0aGlzLmN1ckxldmVsSWQpO1xuICAgIHRoaXMuaXNDb2xsZWN0aW5nID0gZmFsc2U7XG4gICAgaWYgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuYmFkZ2UpIHtcbiAgICAgIHRoaXMuaXNDb2xsZWN0aW5nID0gdHJ1ZTtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUcmF2ZWxSZXdhcmRDb250cm9sbGVyXCIsIHtcbiAgICAgICAgbGV2ZWxJZDogdGhpcy5jdXJMZXZlbElkIC0gMSxcbiAgICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0Lm1hcFZpZXcpIHtcbiAgICAgICAgdC5tYXBWaWV3LnJlc2V0Vmlld1NpemUoKTtcbiAgICAgICAgdC5tYXBWaWV3LmNoZWNrVXBkYXRlQ2VsbCgpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyksIDUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExNYXBWd192aWV3U2hvd1wiKVxuICB2aWV3RGlkU2hvdygpIHt9XG4gIHVwZGF0ZVRpbWUoKSB7XG4gICAgdmFyIGUgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSZW1haW5UaW1lKCksXG4gICAgICB0ID0gX19yZWFkKEdhbWVVdGlscy5nZXRSZW1haW5UaW1lUGFydHMoZSksIDQpLFxuICAgICAgbyA9IHRbMF0sXG4gICAgICBuID0gdFsxXSxcbiAgICAgIGkgPSB0WzJdLFxuICAgICAgciA9ICh0WzNdLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIH0pO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy50aW1lckxhYmVsLm5vZGUsIHIobykgKyBcImRcIiArIHIobikgKyBcImhcIiArIHIoaSkgKyBcIm1cIiwgXCJDb21tb25fQ291bnREb3duX01pbnV0ZVwiLCBbbywgbiwgaV0pO1xuICB9XG4gIHVwZGF0ZUJvdHRvbSgpIHtcbiAgICB0aGlzLmxldmVsQnRuTGFiZWwgPSB0aGlzLmVudGVyQnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5sZXZlbEJ0bkxhYmVsLm5vZGUsIFwiTGV2ZWwgXCIgKyB0aGlzLmN1ckxldmVsSWQsIFwiTWFoam9uZ1RpbGVzX01hcFBhZ2VfTGV2ZWxcIiwgW3RoaXMuY3VyTGV2ZWxJZF0pO1xuICAgIHRoaXMuYm90dG9tTm9kZS5hY3RpdmUgPSB0aGlzLmN1ckxldmVsSWQgPD0gdGhpcy5sZXZlbENvbmZpZy5sZXZlbENvdW50O1xuICAgIHZhciBlID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5oYXJkQmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMud29vZEJnTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuaGFyZFVwQmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFyZFRpcE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGUuaXNIYXJkTGV2ZWwodGhpcy5jdXJMZXZlbElkKSkge1xuICAgICAgdGhpcy53b29kQmdOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5oYXJkQmdOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmhhcmRVcEJnTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5oYXJkVGlwTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVEaWZmQmdXaWR0aCgpO1xuICAgIH1cbiAgICB0aGlzLnBsYXlFbnRlckJ0bkFuaW0oKTtcbiAgfVxuICB1cGRhdGVEaWZmQmdXaWR0aCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChlLmhhcmRUaXBOb2RlKSAmJiAoZS5oYXJkVXBCZ05vZGUud2lkdGggPSBlLmhhcmRUaXBOb2RlLndpZHRoICsgNTApO1xuICAgIH0sIDApO1xuICB9XG4gIHVwZGF0ZUxlZnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgbyA9IHQuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgbiA9IHQuZ2V0UmV3YXJkSW5mbyhvKS5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnR5cGUgPT09IEVUcmF2ZWxSZXdhcmRUeXBlLkVCYWRnZSAmJiB0Lmx2ID49IGUuY3VyTGV2ZWxJZCAmJiAhdC5nYWluO1xuICAgICAgfSk7XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciBpID0gdC5nZXRMZXZlbEJ5SWQobi5sdiwgbyksXG4gICAgICAgIHIgPSBuLmx2O1xuICAgICAgdGhpcy5sZWZ0Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdmFyIGwgPSAodGhpcy5sYXN0UGFzc0xldmVsIC0gMSkgLyByLFxuICAgICAgICBzID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLlRyYXZlbE5hdmlnYXRpb24sIGkudHlwZSk7XG4gICAgICBpZiAocyAmJiBcIlwiICE9PSBzLnBhdGgpIHtcbiAgICAgICAgdmFyIGMgPSBfX3JlYWQocy5wYXRoLnNwbGl0KFwiOlwiKSwgMiksXG4gICAgICAgICAgdSA9IGNbMF0sXG4gICAgICAgICAgcCA9IGNbMV07XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMubGVmdEljb24ubm9kZSwgdSwgcy5hdGxhcywgdHJ1ZSwgcCk7XG4gICAgICB9XG4gICAgICB0aGlzLm5leHRCYWRnZUxldmVsID0gbi5sdjtcbiAgICAgIHZhciBmID0gKHRoaXMuY3VyTGV2ZWxJZCAtIDEpIC8gcjtcbiAgICAgIGlmIChmID09PSBsKSB7XG4gICAgICAgIHRoaXMubGVmdFByb2dyZXNzQmFyLnByb2dyZXNzID0gZjtcbiAgICAgICAgdGhpcy5sZWZ0VmFsdWUuc3RyaW5nID0gdGhpcy5jdXJMZXZlbElkIC0gMSArIFwiL1wiICsgcjtcbiAgICAgICAgdGhpcy5sZWZ0UHJvZ3Jlc3NCYXIyLndpZHRoID0gMTUwICogZjtcbiAgICAgICAgdGhpcy5sZWZ0UHJvZ3Jlc3NCYXIyLm9wYWNpdHkgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWZ0UHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBsO1xuICAgICAgICB0aGlzLmxlZnRWYWx1ZS5zdHJpbmcgPSB0aGlzLmN1ckxldmVsSWQgLSAxICsgXCIvXCIgKyByO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxlZnRQcm9ncmVzc0JhcikudG8oMC4zMzMsIHtcbiAgICAgICAgICBwcm9ncmVzczogZlxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLmxlZnRQcm9ncmVzc0JhcjIub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5sZWZ0UHJvZ3Jlc3NCYXIyLndpZHRoID0gMTUwICogbDtcbiAgICAgICAgY2MudHdlZW4odGhpcy5sZWZ0UHJvZ3Jlc3NCYXIyKS50bygwLjMzMywge1xuICAgICAgICAgIHdpZHRoOiAxNTAgKiBmXG4gICAgICAgIH0pLnRvKDAuMzMzLCB7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLmxlZnRWYWx1ZS5ub2RlLnNjYWxlID0gMTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5sZWZ0VmFsdWUubm9kZSkudG8oMC4yNjYsIHtcbiAgICAgICAgICBzY2FsZTogMS4yXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICAgIH0pLnRvKDAuMjM0LCB7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJblxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5leHRCYWRnZUxldmVsID0gLTE7XG4gICAgICB0aGlzLmxlZnROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICB1cGRhdGVNYXAoKSB7XG4gICAgdGhpcy51cGRhdGVNYXBFbGVtZW50c0NvbmZpZygpO1xuICAgIHRoaXMubWFwVmlldy5yZWxvYWREYXRhKCk7XG4gICAgdmFyIGUgPSB0aGlzLmdldENlbGxQb3NCeUlkKHRoaXMuY3VyTGV2ZWxJZCk7XG4gICAgZSAmJiB0aGlzLm1hcFZpZXcuc2V0Q29udGVudFBvc2l0aW9uKGUsIHRydWUpO1xuICB9XG4gIHVwZGF0ZVRpdGxlKCkge1xuICAgIHZhciBlID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgdCA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5UcmF2ZWwsIGUpO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy50aXRsZUxhYmVsLm5vZGUsIFwiQWR2ZW50dXJlXCIsIHQubmFtZSk7XG4gICAgdGhpcy5qb3VybmV5TmFtZUNOID0gSTE4TlN0cmluZ3MuZ2V0Q04odC5uYW1lKTtcbiAgfVxuICB1cGRhdGVWaWV3KCkge1xuICAgIHRoaXMudXBkYXRlTWFwKCk7XG4gICAgdGhpcy51cGRhdGVMZWZ0KCk7XG4gICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgdGhpcy51cGRhdGVCb3R0b20oKTtcbiAgICB0aGlzLnVwZGF0ZVRpdGxlKCk7XG4gIH1cbiAgZ2V0Q2VsbFBvc0J5SWQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5zdGF0ZUNvbmZpZy5lbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubGV2ZWwgPiAwO1xuICAgICAgfSksXG4gICAgICBvID0gdC5maW5kSW5kZXgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQubGV2ZWwgPT09IGU7XG4gICAgICB9KTtcbiAgICByZXR1cm4gbyA+PSAwID8gdFtvXS5wb3MgOiB0Lmxlbmd0aCA+IDAgPyB0W3QubGVuZ3RoIC0gMV0ucG9zIDogbnVsbDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMTWFwVndfdXBkYXRlTWFwRWxlQ2ZnXCIpXG4gIHVwZGF0ZU1hcEVsZW1lbnRzQ29uZmlnKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSBmYWxzZTtcbiAgICB0aGlzLmN1ckxldmVsSWQgPiB0aGlzLmxldmVsQ29uZmlnLmxldmVsQ291bnQgJiYgKG8gPSB0cnVlKTtcbiAgICB2YXIgbiA9IG8gPyB0aGlzLmxldmVsQ29uZmlnLmZpbmlzaE9mZnNldCA6IDAsXG4gICAgICBpID0gY2Muc2l6ZSgxMDgwLCB0aGlzLmxldmVsQ29uZmlnLmhlaWdodCArIG4pO1xuICAgIGkuaGVpZ2h0ICs9IG47XG4gICAgdGhpcy5zdGF0ZUNvbmZpZyA9IHtcbiAgICAgIHNpemU6IGksXG4gICAgICBmaW5pc2hPZmZzZXQ6IG4sXG4gICAgICBlbGVtZW50czogW10sXG4gICAgICBtYXA6IHRoaXMubGV2ZWxDb25maWcubWFwUmVzLFxuICAgICAgcGF0aDogdGhpcy5sZXZlbENvbmZpZy5tYXBDb25maWdcbiAgICB9O1xuICAgIHZhciByID0gRGF0ZS5ub3coKSxcbiAgICAgIGEgPSB0aGlzLmN1ckxldmVsSWQgLSB0aGlzLmxhc3RQYXNzTGV2ZWwsXG4gICAgICBzID0gTWF0aC5taW4oYSwgMTApLFxuICAgICAgYyA9IHRoaXMuY3VyTGV2ZWxJZCAtIHMsXG4gICAgICBwID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VySm91cm5leSgpLFxuICAgICAgZCA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJld2FyZEluZm8ocCkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnR5cGUgPT09IEVUcmF2ZWxSZXdhcmRUeXBlLkVCYWRnZSAmJiBlLmdhaW47XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubHY7XG4gICAgICB9KTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaCA9IF9fdmFsdWVzKHRoaXMubWFwQ29uZmlnKSwgeSA9IGgubmV4dCgpOyAheS5kb25lOyB5ID0gaC5uZXh0KCkpIHtcbiAgICAgICAgdmFyIG0gPSB5LnZhbHVlLFxuICAgICAgICAgIGcgPSBFSm91cm5leU1hcFN0YXRlLkxvY2tlZCxcbiAgICAgICAgICBfID0gMDtcbiAgICAgICAgaWYgKHRoaXMuY3VyTGV2ZWxJZCA9PT0gbS5sZXZlbCkge1xuICAgICAgICAgIGcgPSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkO1xuICAgICAgICAgIGQuaW5jbHVkZXMobS5sZXZlbCkgJiYgKGcgPSBFSm91cm5leU1hcFN0YXRlLlNlbGVjdGVkVW5sb2NrZWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VyTGV2ZWxJZCA+IG0ubGV2ZWwpIHtcbiAgICAgICAgICBnID0gRUpvdXJuZXlNYXBTdGF0ZS5VbmxvY2tlZDtcbiAgICAgICAgICBpZiAodGhpcy5pc0NvbGxlY3RpbmcgJiYgdGhpcy5jdXJMZXZlbElkIC0gMSA9PT0gbS5sZXZlbCkgZyA9IEVKb3VybmV5TWFwU3RhdGUuQ29sbGVjdGluZztlbHNlIGlmIChtLmxldmVsID4gYykge1xuICAgICAgICAgICAgZyA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWRQYXNzO1xuICAgICAgICAgICAgXyA9IDAuMSAqIChtLmxldmVsIC0gYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgZC5pbmNsdWRlcyhtLmxldmVsKSAmJiAoZyA9IEVKb3VybmV5TWFwU3RhdGUuVW5sb2NrZWQpO1xuICAgICAgICBGaW5pc2hMZXZlbEVsZW1lbnQuaW5jbHVkZXMobS50eXBlKSAmJiAhbyB8fCB0aGlzLnN0YXRlQ29uZmlnLmVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgIGxldmVsOiBtLmxldmVsLFxuICAgICAgICAgIHR5cGU6IG0udHlwZSxcbiAgICAgICAgICBzdGF0ZTogZyxcbiAgICAgICAgICBwb3M6IGNjLnYyKG0ucG9zWzBdLCBtLnBvc1sxXSAtIG4pLFxuICAgICAgICAgIHNpemU6IE1hcEVsZW1lbnRGYWN0b3J5LmdldFNpemUobS50eXBlKSxcbiAgICAgICAgICBlbmRUaW1lOiByICsgMTAwMCAqIF9cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHkgJiYgIXkuZG9uZSAmJiAodCA9IGgucmV0dXJuKSAmJiB0LmNhbGwoaCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2Nyb2xsVG9DZWxsQnlJZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLnN0YXRlQ29uZmlnLmVsZW1lbnRzLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQubGV2ZWwgPT09IGU7XG4gICAgfSk7XG4gICAgdCA+PSAwICYmIHRoaXMuc2Nyb2xsVG9JbmRleCh0LCAzMDApO1xuICB9XG4gIHNjcm9sbFRvSW5kZXgoZSwgdCA9IDUwLCBvID0gMC4zKSB7XG4gICAgaWYgKCEoZSA8IDAgfHwgZSA+PSB0aGlzLnN0YXRlQ29uZmlnLmVsZW1lbnRzLmxlbmd0aCkpIHtcbiAgICAgIHZhciBuID0gdGhpcy5zdGF0ZUNvbmZpZy5lbGVtZW50c1tlXS5wb3MsXG4gICAgICAgIGkgPSB0aGlzLm1hcFNjcm9sbFZpZXcubm9kZS5oZWlnaHQsXG4gICAgICAgIHIgPSBpIC8gMiAtIHQsXG4gICAgICAgIGEgPSB0aGlzLm1hcFNjcm9sbFZpZXcubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgcikpLFxuICAgICAgICBsID0gdGhpcy5tYXBTY3JvbGxWaWV3LmNvbnRlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoYSkuc3ViKG4pLFxuICAgICAgICBzID0gdGhpcy5tYXBTY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLmFkZChsKTtcbiAgICAgIHMueCA9IDA7XG4gICAgICB2YXIgYyA9IHRoaXMubWFwU2Nyb2xsVmlldy5jb250ZW50LmhlaWdodCAtIGk7XG4gICAgICBzLnkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjLCBzLnkpKTtcbiAgICAgIHRoaXMubWFwU2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldChzLCBvKTtcbiAgICB9XG4gIH1cbiAgb25MZWZ0QnRuQ2xpY2soKSB7XG4gICAgLTEgIT09IHRoaXMubmV4dEJhZGdlTGV2ZWwgJiYgdGhpcy5zY3JvbGxUb0NlbGxCeUlkKHRoaXMubmV4dEJhZGdlTGV2ZWwpO1xuICB9XG4gIGluaXRUYWJsZVZpZXcoKSB7XG4gICAgdGhpcy5tYXBWaWV3ID0gbmV3IE1hcFZpZXcoe1xuICAgICAgdmlldzogdGhpcy5tYXBTY3JvbGxWaWV3XG4gICAgfSk7XG4gICAgdGhpcy5tYXBWaWV3LnZpZXdDb250ZW50U2l6ZSA9IHRoaXMudmlld0NvbnRlbnRTaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tYXBWaWV3LmVsZW1lbnRUeXBlQXRJbmRleCA9IHRoaXMuZWxlbWVudFR5cGVBdEluZGV4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tYXBWaWV3LmVsZW1lbnRTaXplQXRJbmRleCA9IHRoaXMuZWxlbWVudFNpemVBdEluZGV4LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tYXBWaWV3LmVsZW1lbnRDb3VudCA9IHRoaXMuZWxlbWVudENvdW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5tYXBWaWV3LmVsZW1lbnRBdEluZGV4ID0gdGhpcy5lbGVtZW50QXRJbmRleC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWFwVmlldy5lbGVtZW50UG9zQXRJbmRleCA9IHRoaXMuZWxlbWVudFBvc0F0SW5kZXguYmluZCh0aGlzKTtcbiAgICB0aGlzLm1hcFZpZXcuZWxlbWVudFdpbGxIaWRlID0gdGhpcy5lbGVtZW50V2lsbEhpZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1hcFZpZXcuZWxlbWVudFdpbGxTaG93ID0gdGhpcy5lbGVtZW50V2lsbFNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1hcFZpZXcuZWxlbWVudFdpbGxNb3ZlID0gdGhpcy5lbGVtZW50V2lsbE1vdmUuYmluZCh0aGlzKTtcbiAgfVxuICBjcmVhdGVNYXBFbGVtZW50cyhlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLmdldEVsZW1lbnREYXRhKHQpLFxuICAgICAgbiA9IE1hcEVsZW1lbnRGYWN0b3J5LmNyZWF0ZUNlbGwoby50eXBlKSxcbiAgICAgIGkgPSBuLmdldENvbXBvbmVudChCYXNlQ2VsbCk7XG4gICAgaWYgKGkpIHtcbiAgICAgIGkuZGVsZWdhdGUgPSB0aGlzLmRlbGVnYXRlO1xuICAgICAgaS51cGRhdGVDZWxsKG8pO1xuICAgIH1cbiAgICBuLnNldENvbnRlbnRTaXplKG8uc2l6ZSk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgZ2V0RWxlbWVudERhdGEoZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlQ29uZmlnLmVsZW1lbnRzW2VdO1xuICB9XG4gIHZpZXdDb250ZW50U2l6ZSgpIHtcbiAgICByZXR1cm4gY2Muc2l6ZSgxMDgwLCB0aGlzLmxldmVsQ29uZmlnLmhlaWdodCk7XG4gIH1cbiAgZWxlbWVudFR5cGVBdEluZGV4KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0RWxlbWVudERhdGEodCk7XG4gICAgcmV0dXJuIG8gPyBvLnR5cGUudG9TdHJpbmcoKSA6IFwiXCI7XG4gIH1cbiAgZWxlbWVudFNpemVBdEluZGV4KGUsIHQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50RGF0YSh0KS5zaXplO1xuICB9XG4gIGVsZW1lbnRDb3VudCgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLnN0YXRlQ29uZmlnKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmVsZW1lbnRzKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lmxlbmd0aCkgfHwgMDtcbiAgfVxuICBlbGVtZW50QXRJbmRleChlLCB0KSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWFwRWxlbWVudHMoZSwgdCk7XG4gIH1cbiAgZWxlbWVudFBvc0F0SW5kZXgoZSwgdCkge1xuICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnREYXRhKHQpLnBvcztcbiAgfVxuICBlbGVtZW50V2lsbEhpZGUoKSB7fVxuICBlbGVtZW50V2lsbFNob3coZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcy5nZXRFbGVtZW50RGF0YSh0KSxcbiAgICAgIGkgPSBvLmdldENvbXBvbmVudChCYXNlQ2VsbCk7XG4gICAgaSAmJiBpLnVwZGF0ZUNlbGwobik7XG4gIH1cbiAgZWxlbWVudFdpbGxNb3ZlKCkge31cbn0iXX0=