"use strict";
cc._RF.push(module, '12b809Xm5ZHsat7z/K71L3R', 'MainGameView');
// Scripts/game/view/MainGameView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../Config");
var GameEvent_1 = require("../../simulator/constant/GameEvent");
var DynamicAccumComp_1 = require("../../core/simulator/component/DynamicAccumComp");
var TimerComponent_1 = require("../../core/simulator/component/TimerComponent");
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("../../core/simulator/events/SimulatorEvent");
var GameBehaviorParser_1 = require("../../core/view/behaviors/base/GameBehaviorParser");
var BehaviorContext_1 = require("../../core/view/behaviors/context/BehaviorContext");
var GameUI_1 = require("../../core/view/component/GameUI");
var ScoreItem_1 = require("../../core/view/items/ScoreItem");
var UIView_1 = require("../../framework/ui/UIView");
var EffectLayerEnum_1 = require("../../constant/EffectLayerEnum");
var CommonUtils_1 = require("../../framework/utils/CommonUtils");
var UserModel_1 = require("../../gamePlay/user/UserModel");
this && this.__read;
this && this.__spread;
var MainGameView = /** @class */ (function (_super) {
    __extends(MainGameView, _super);
    function MainGameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "MainGameView";
        _this._timeScale = 1;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this._effectLayers = new Map();
        _this._isPauseUpdate = false;
        _this._isShowAd = false;
        _this._touchBlockNode = null;
        _this._screenTouchEndCallback = null;
        _this._screenTouchEndTarget = null;
        _this._count = 0;
        _this._offsetY = 0;
        _this._startSimulator = false;
        return _this;
    }
    Object.defineProperty(MainGameView.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "effectNode", {
        get: function () {
            return this._effectNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "nodeTopEffectRoot", {
        get: function () {
            return this._nodeTopEffectRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "nodeCardRoot", {
        get: function () {
            return this._nodeCardRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "nodeDragCardRoot", {
        get: function () {
            return this._nodeDragCardRoot;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "gameUI", {
        get: function () {
            return this._gameUI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "swallowEventNode", {
        get: function () {
            return this._swallowEventNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "guideRootNode", {
        get: function () {
            return this._guideRootNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "topRootNode", {
        get: function () {
            return this._topRootNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "bottomRootNode", {
        get: function () {
            return this._bottomRootNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "scoreRootNode", {
        get: function () {
            return this._scoreRootNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "scoreItemNode", {
        get: function () {
            return this._scoreItemNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "scoreItem", {
        get: function () {
            return this._scoreItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "gameNode", {
        get: function () {
            return this._gameNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "gameObjectPool", {
        get: function () {
            return this.delegate._gameObjectPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "timerComponent", {
        get: function () {
            return this._timerComponent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "dynamicAccumComp", {
        get: function () {
            return this._dynamicAccumComp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameView.prototype, "offsetY", {
        get: function () {
            return this._offsetY;
        },
        enumerable: false,
        configurable: true
    });
    MainGameView.getUrl = function () {
        return this.prefabUrl;
    };
    MainGameView.prototype.setTimeScale = function (e) {
        this._timeScale = e;
    };
    MainGameView.prototype.initLayers = function () {
        this.initEffectLayers();
        this._nodeCardRoot = this._gameNode.getChildByName("nodeCardRoot");
        this._nodeDragCardRoot = this._gameNode.getChildByName("nodeDragCardRoot");
        this._gameUI = this._gameNode.getComponent(GameUI_1.default);
        this._swallowEventNode = this._gameNode.getChildByName("nodeSwallowEvent");
        this._guideRootNode = this._gameNode.getChildByName("guideRoot");
        this._topRootNode = this._gameNode.getChildByName("nodeTop");
        this._bottomRootNode = this._gameNode.getChildByName("nodeBottom");
        this._scoreRootNode = this._topRootNode.getChildByName("nodeScore");
        this.initScoreItem();
    };
    MainGameView.prototype.initEffectLayers = function () {
        var e, t, o = this._gameNode.getChildByName("nodeTopEffectRoot");
        if (o) {
            o.zIndex = 200;
            this._effectLayers.set(EffectLayerEnum_1.EffectLayer.Default, o);
            this._effectNode = o;
            this._nodeTopEffectRoot = o;
            var n = [{
                    layer: EffectLayerEnum_1.EffectLayer.Middle,
                    name: "effectLayer_Middle",
                    zIndex: 300
                }, {
                    layer: EffectLayerEnum_1.EffectLayer.Top,
                    name: "effectLayer_Top",
                    zIndex: 500
                }];
            try {
                for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                    var a = r.value, s = new cc.Node(a.name);
                    s.setAnchorPoint(0.5, 0.5);
                    s.setContentSize(cc.view.getVisibleSize());
                    s.setPosition(0, 0);
                    this._gameNode.addChild(s, a.zIndex);
                    this._effectLayers.set(a.layer, s);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    r && !r.done && (t = i.return) && t.call(i);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
        }
    };
    MainGameView.prototype.initScoreItem = function () {
        this._scoreItemNode = this._scoreRootNode.getChildByName("scoreItem");
        this._scoreItem = this._scoreItemNode.addComponent(ScoreItem_1.default);
        this._scoreItem.setDynamicAccumComp(this._dynamicAccumComp);
    };
    MainGameView.prototype.initExpandNodes = function () { };
    MainGameView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._gameNode = this.node.getChildByName("GLMahjongGameView");
        this.initTimeScale();
        this.initAnimations();
        this.initLayers();
        this.initExpandNodes();
        this.initGm();
        this.openMultiTouch();
        this.initTheme();
    };
    MainGameView.prototype.initTimeScale = function () {
        this.setTimeScale(CommonUtils_1.AniTimeScale.get());
    };
    MainGameView.prototype.initCountBlockNode = function () {
        this._countBlockNode = new cc.Node("CountBlockNode");
        this._countBlockNode.setAnchorPoint(0.5, 1);
        this._countBlockNode.parent = this._gameNode;
        this._countBlockNode.zIndex = 9999;
        this._countBlockNode.addComponent(cc.BlockInputEvents);
        this._countBlockNode.setContentSize(9999, 9999);
        var e = this._gameNode.getChildByName("nodeTop");
        if (cc.isValid(e)) {
            var t = cc.v2(0, -e.height * e.anchorY), o = e.convertToWorldSpaceAR(t), n = this._gameNode.convertToNodeSpaceAR(o);
            this._countBlockNode.setPosition(n.x, n.y);
        }
        this.resetCountBlockNode();
    };
    MainGameView.prototype.increaseCountBlockNode = function () {
        if (cc.isValid(this._countBlockNode)) {
            this._count++;
            this._countBlockNode.active = true;
        }
    };
    MainGameView.prototype.decreaseCountBlockNode = function () {
        if (cc.isValid(this._countBlockNode)) {
            this._count--;
            this._count < 0 && (this._count = 0);
            this._countBlockNode.active = this._count > 0;
        }
    };
    MainGameView.prototype.resetCountBlockNode = function () {
        this._count = 0;
        this._countBlockNode.active = false;
    };
    MainGameView.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.openMultiTouch();
    };
    MainGameView.prototype.onDisable = function () {
        _super.prototype.onDisable.call(this);
        cc.macro.ENABLE_MULTI_TOUCH = false;
    };
    MainGameView.prototype.openMultiTouch = function () {
        mj.getClassByName("CloseMultiTouchTrait") || (cc.macro.ENABLE_MULTI_TOUCH = true);
    };
    MainGameView.prototype.onDestroy = function () {
        var t, o;
        _super.prototype.onDestroy.call(this);
        cc.macro.ENABLE_MULTI_TOUCH = false;
        this.clearBehaviorParser();
        null === (t = this._timerComponent) || void 0 === t || t.clearAllTimer();
        null === (o = this._dynamicAccumComp) || void 0 === o || o.clear();
        this.clearTileNodes();
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY);
    };
    MainGameView.prototype.clearTileNodes = function () {
        this._behaviorContext && this._behaviorContext.getTileNodeManager() && this._behaviorContext.getTileNodeManager().destroy();
    };
    MainGameView.prototype.getMessageListeners = function () {
        var _e = {};
        _e[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _e[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        _e[SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_DISPLAY] = this.onSimulatorDisplay.bind(this);
        _e[SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_INPUT] = this.onSimulatorInput.bind(this);
        _e[SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL] = this.onSimulatorNextLevel.bind(this);
        _e[Config_1.EVT_AD_SHOW_START] = this.onAdShowStart.bind(this);
        _e[Config_1.EVT_AD_SHOW_END] = this.onAdShowEnd.bind(this);
        _e[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        _e[Config_1.EVT_MSG_KEY_CHANGETHEME] = this.onChangeTheme.bind(this);
        _e[Config_1.EVT_MSG_KEY_RESETTHEME] = this.onResetToDefaultTheme.bind(this);
        _e[GameEvent_1.EGameEvent.View_RefreshBaseCards] = this._onRefreshBaseCards.bind(this);
        return _e;
    };
    MainGameView.prototype.onTopTouchStart = function () {
        cc.isValid(this.node, true) && this.node.activeInHierarchy && this.onSimulatorInput({
            inputType: GameInputEnum_1.EGameInputEnum.UserOperate
        });
    };
    MainGameView.prototype._onRefreshBaseCards = function (e) {
        var t, o, n, i, r, a, s, c, u, p = null === (i = null === (n = this._behaviorContext) || void 0 === n ? void 0 : n.getTileNodeManager) || void 0 === i ? void 0 : i.call(n);
        if (p) {
            var f = null === (r = p.getTileNodes) || void 0 === r ? void 0 : r.call(p);
            if (f && 0 !== f.length)
                try {
                    for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
                        var y = h.value;
                        if ((null === (a = null == y ? void 0 : y.tileObject) || void 0 === a ? void 0 : a.isValid) && e && -1 !== e.indexOf(y.tileObject.resName))
                            try {
                                null === (s = y.updateImgCardBg) || void 0 === s || s.call(y);
                                null === (c = y.updateImgCard) || void 0 === c || c.call(y);
                                y._imgSelectedCardBg && (null === (u = y.updateImgSelectedCardBg) || void 0 === u || u.call(y));
                            }
                            catch (e) { }
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        h && !h.done && (o = d.return) && o.call(d);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
        }
    };
    MainGameView.prototype.initSimulatorDisplay = function () {
        this._behaviorContext && this._behaviorContext.getTileNodeManager() && this._behaviorContext.getTileNodeManager().clearAllTileNodes();
        this.clearBehaviorParser();
        this.resetCountBlockNode();
        var e = new BehaviorContext_1.BehaviorContext();
        this._behaviorContext = e;
        e._gameView = this;
        e._gameType = this.gameType;
        this._gameBehaviorParser = new GameBehaviorParser_1.GameBehaviorParser(this.gameType, e);
    };
    MainGameView.prototype.onSimulatorDisplay = function (e) {
        var t, o = this, n = e.names, i = e.behaviorExecution, r = e.inputType;
        try {
            null === (t = this._gameBehaviorParser) || void 0 === t || t.parse(i, function (e) {
                o.onDisplayFinish(r, i, n, null == i ? void 0 : i.key);
                e.some(function (e) {
                    return !e.success;
                });
            });
        }
        catch (e) {
            this.resetCountBlockNode();
            console.error("[" + this._logName + "] 显示行为异常:" + e.message + ",inputType:" + r + ",names:" + n + ",msg:" + (null == e ? void 0 : e.message) + ",stack:" + (null == e ? void 0 : e.stack));
            this.onDisplayFinish(r, i, n, null == i ? void 0 : i.key);
        }
    };
    MainGameView.prototype.getEffectLayer = function (e) {
        if (e === void 0) { e = EffectLayerEnum_1.EffectLayer.Default; }
        return this._effectLayers.get(e) || this._effectLayers.get(EffectLayerEnum_1.EffectLayer.Default);
    };
    MainGameView.prototype.setNodeLayer = function (e, t, o) {
        if (o === void 0) { o = true; }
        if (cc.isValid(e)) {
            var n = this.getEffectLayer(t);
            if (e.parent !== n)
                if (o) {
                    var i = e.convertToWorldSpaceAR(cc.v2(0, 0)), r = n.convertToNodeSpaceAR(i);
                    e.parent = n;
                    e.position = cc.v3(r.x, r.y, 0);
                }
                else
                    e.parent = n;
        }
    };
    MainGameView.prototype.clearEffectLayer = function (e) {
        if (void 0 !== e) {
            var t = this.getEffectLayer(e);
            null == t || t.removeAllChildren();
        }
        else
            this._effectLayers.forEach(function (e) {
                null == e || e.removeAllChildren();
            });
    };
    MainGameView.prototype.getAllEffectLayers = function () {
        return this._effectLayers;
    };
    MainGameView.prototype.clearAllNode = function () {
        var e, t, o, n;
        null === (e = this._timerComponent) || void 0 === e || e.clearAllTimer();
        null === (t = this._dynamicAccumComp) || void 0 === t || t.clear();
        this.clearBehaviorParser();
        this.stopShake();
        this.clearEffectLayer();
        null === (o = this._guideRootNode) || void 0 === o || o.removeAllChildren();
        null === (n = this._scoreItem) || void 0 === n || n.resetForRestart();
    };
    MainGameView.prototype.onDisplayFinish = function (e, t, o, n) {
        this.delegate.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.DisplaySimulator,
            displayInputType: e,
            names: o,
            logIndex: n
        });
    };
    MainGameView.prototype.onGameShow = function () {
        this._isPauseUpdate = false;
        this.delegate && this.delegate._gameTime && this.delegate._gameTime.onGameShow();
    };
    MainGameView.prototype.onGameHide = function () {
        this._isPauseUpdate = true;
        this.delegate && this.delegate._gameTime && this.delegate._gameTime.onGameHide();
    };
    MainGameView.prototype.onAdShowStart = function () {
        this._isShowAd = true;
    };
    MainGameView.prototype.onAdShowEnd = function () {
        this._isShowAd = false;
    };
    MainGameView.prototype.update = function (e) {
        var t, o, n, i = e * this._timeScale;
        this._dynamicAccumComp.update(i);
        this._timerComponent.update(i);
        if (this._startSimulator) {
            null === (t = this.delegate._gameTime) || void 0 === t || t.update(e);
            null === (o = this.delegate) || void 0 === o || o.updateTime(e);
        }
        this._isPauseUpdate || this._isShowAd || null === (n = this._gameBehaviorParser) || void 0 === n || n.update(e);
    };
    MainGameView.prototype.setSwallowEventNodeActive = function (e) {
        this._swallowEventNode.active = e;
    };
    MainGameView.prototype.registerScreenTouchEnd = function (e, t, o) {
        var n = this;
        this._screenTouchEndCallback && this.unregisterScreenTouchEnd();
        var i = Object.assign({
            visualFeedback: false,
            opacity: 0,
            zIndex: 9999
        }, o);
        this._touchBlockNode = new cc.Node("TouchBlockNode");
        var a = cc.view.getVisibleSize();
        this._touchBlockNode.setContentSize(a);
        this._touchBlockNode.setPosition(0, 0);
        this._touchBlockNode.setAnchorPoint(0.5, 0.5);
        this._touchBlockNode.addComponent(cc.BlockInputEvents);
        if (i.visualFeedback) {
            var l = this._touchBlockNode.addComponent(cc.Graphics);
            l.fillColor = cc.Color.BLACK;
            l.rect(-a.width / 2, -a.height / 2, a.width, a.height);
            l.fill();
            this._touchBlockNode.opacity = i.opacity;
        }
        this.node.addChild(this._touchBlockNode, i.zIndex);
        var s = function s(o) {
            o.stopPropagation();
            e.call(t || n, o);
        };
        this._screenTouchEndCallback = s;
        this._screenTouchEndTarget = t;
        this._touchBlockNode.on(cc.Node.EventType.TOUCH_END, s, t || this);
    };
    MainGameView.prototype.unregisterScreenTouchEnd = function () {
        if (this._screenTouchEndCallback) {
            if (this._touchBlockNode && cc.isValid(this._touchBlockNode)) {
                this._touchBlockNode.destroy();
                this._touchBlockNode = null;
            }
            this._screenTouchEndCallback = null;
            this._screenTouchEndTarget = null;
        }
    };
    MainGameView.prototype.initAnimations = function () {
        this._timerComponent = new TimerComponent_1.default();
        this._dynamicAccumComp = new DynamicAccumComp_1.default();
    };
    MainGameView.prototype.calcRectGameAreaTransformSize = function (e) {
        var t = this._gameNode.getChildByName("rectGameArea").getContentSize(), o = this._gameNode.getChildByName("nodeTop"), n = this._gameNode.getChildByName("nodeBottom");
        o.getComponent(cc.Widget).updateAlignment();
        n.getComponent(cc.Widget).updateAlignment();
        var i = o.convertToWorldSpaceAR(cc.v2(0, -o.height * o.anchorY)), r = n.convertToWorldSpaceAR(cc.v2(0, n.height * (1 - n.anchorY))), a = o.parent.convertToNodeSpaceAR(i), l = o.parent.convertToNodeSpaceAR(r), s = (a = this.changeTopLocalBottom(a)).y - l.y, c = this.getFinalMiddleY(a, l);
        t.height = s;
        this._gameNode.getChildByName("rectGameArea").setContentSize(t);
        this._offsetY = c;
        e(t, c);
        return t;
    };
    MainGameView.prototype.changeTopLocalBottom = function (e) {
        return e;
    };
    MainGameView.prototype.getFinalMiddleY = function (e, t) {
        return (e.y + t.y) / 2;
    };
    MainGameView.prototype.onSimulatorInput = function (e) {
        this.delegate.pushInput(e);
    };
    MainGameView.prototype.clearBehaviorParser = function () {
        if (this._gameBehaviorParser) {
            this._gameBehaviorParser.abort();
            this._gameBehaviorParser.reset();
            this._gameBehaviorParser = null;
        }
    };
    MainGameView.prototype.onSimulatorNextLevel = function () {
        var e = this._gameNode.getChildByName("nodeBottom"), t = this._gameNode.getChildByName("nodeTop").getChildByName("btnSettings");
        e.active = true;
        cc.isValid(t) && (t.active = true);
        this.delegate.startNextLevel();
    };
    MainGameView.prototype.showBottomNode = function () {
        this._gameNode.getChildByName("nodeBottom").active = true;
    };
    MainGameView.prototype.startSimulator = function () {
        this._startSimulator = true;
    };
    MainGameView.prototype.initGm = function () { };
    MainGameView.prototype.stopShake = function () {
        if (this._shakeTween) {
            this._shakeTween.stop();
            this._shakeTween = void 0;
        }
        this._oriPos && (this.node.position = this._oriPos);
    };
    MainGameView.prototype.playShake = function () {
        this._shakeTween && this._shakeTween.stop();
        var e = this.node.position.x, t = this.node.position.y;
        this._oriPos = this.node.position.clone();
        this._shakeTween = cc.tween(this.node).to(0.033, {
            position: cc.v3(e + 10, t - 18, 0)
        }).to(0.033, {
            position: cc.v3(e - 3, t - 2, 0)
        }).to(0.033, {
            position: cc.v3(e + 5, t - 5, 0)
        }).to(0.033, {
            position: cc.v3(e, t, 0)
        }).to(0.033, {
            position: cc.v3(e - 10, t + 18, 0)
        }).to(0.033, {
            position: cc.v3(e - 5, t + 5, 0)
        }).to(0.033, {
            position: cc.v3(e + 10, t - 18, 0)
        }).to(0.033, {
            position: cc.v3(e - 3, t - 2, 0)
        }).to(0.033, {
            position: cc.v3(e + 5, t - 5, 0)
        }).to(0.033, {
            position: cc.v3(e, t, 0)
        }).start();
    };
    MainGameView.prototype.initTheme = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = null == e ? void 0 : e.getTheme();
        this.onChangeTheme(this.gameType, t, true);
    };
    MainGameView.prototype.onChangeTheme = function (e, t, o) {
        if (o === void 0) { o = false; }
        if (o || e == this.gameType) {
            t = this.beforeChangeTheme(e, t, o);
            var n = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType);
            n && n.setTheme(t);
            this.afterChangeTheme(e, t, o);
        }
    };
    MainGameView.prototype.beforeChangeTheme = function (e, t, o) {
        if (o === void 0) { o = false; }
        return t;
    };
    MainGameView.prototype.afterChangeTheme = function (e, t, o) {
        if (o === void 0) { o = false; }
    };
    MainGameView.prototype.onResetToDefaultTheme = function (e, t) {
        var o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType);
        o && o.setTheme(t);
    };
    MainGameView.prefabUrl = "prefabs/game/MainGame";
    MainGameView.defaultTheme = "defaultTheme";
    __decorate([
        mj.traitEvent("MainGmVw_initLayers")
    ], MainGameView.prototype, "initLayers", null);
    __decorate([
        mj.traitEvent("MainGmVw_initCntBlockNode")
    ], MainGameView.prototype, "initCountBlockNode", null);
    __decorate([
        mj.traitEvent("MainGmVw_calcAreaSz")
    ], MainGameView.prototype, "calcRectGameAreaTransformSize", null);
    __decorate([
        mj.traitEvent("MainGmVw_getMidY")
    ], MainGameView.prototype, "getFinalMiddleY", null);
    __decorate([
        mj.traitEvent("MainGmVw_beChangeTheme")
    ], MainGameView.prototype, "beforeChangeTheme", null);
    __decorate([
        mj.traitEvent("MainGmVw_afChangeTheme")
    ], MainGameView.prototype, "afterChangeTheme", null);
    __decorate([
        mj.traitEvent("MainGmVw_resetTheme")
    ], MainGameView.prototype, "onResetToDefaultTheme", null);
    __decorate([
        mj.traitEvent("MainGmVw_getUrl")
    ], MainGameView, "getUrl", null);
    MainGameView = __decorate([
        mj.class
    ], MainGameView);
    return MainGameView;
}(UIView_1.default));
exports.default = MainGameView;

cc._RF.pop();