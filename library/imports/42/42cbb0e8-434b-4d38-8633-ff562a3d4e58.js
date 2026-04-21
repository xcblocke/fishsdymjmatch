"use strict";
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