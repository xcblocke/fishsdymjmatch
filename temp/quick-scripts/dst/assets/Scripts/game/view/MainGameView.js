
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/view/MainGameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWUvdmlldy9NYWluR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFnUDtBQUNoUCxnRUFBZ0U7QUFDaEUsb0ZBQStFO0FBQy9FLGdGQUEyRTtBQUMzRSx3RUFBd0U7QUFDeEUsNkVBQXlFO0FBQ3pFLDZFQUF5SjtBQUN6Six3RkFBdUY7QUFDdkYscUZBQW9GO0FBQ3BGLDJEQUFzRDtBQUN0RCw2REFBd0Q7QUFDeEQsb0RBQStDO0FBQy9DLGtFQUE2RDtBQUM3RCxpRUFBaUU7QUFDakUsMkRBQXNEO0FBQ3RELElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3BCLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0FBRXRCO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBcWdCQztRQXBnQkMsY0FBUSxHQUFHLGNBQWMsQ0FBQztRQUMxQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVMsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUM5QixtQkFBYSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qiw2QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IscUJBQWUsR0FBRyxLQUFLLENBQUM7O0lBeWYxQixDQUFDO0lBdGZDLHNCQUFJLGtDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxvQ0FBVTthQUFkO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7OztP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QUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUF2Zk0sc0JBQVMsR0FBRyx1QkFBdUIsQ0FBQztJQUNwQyx5QkFBWSxHQUFHLGNBQWMsQ0FBQztJQStEckM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2tEQVlwQztJQStERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7MERBZ0IxQztJQW9QRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7cUVBa0JwQztJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt1REFHakM7SUF5RUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3lEQUd2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt3REFDSjtJQUVwQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7NkRBSXBDO0lBOWJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztvQ0FHaEM7SUF4RWtCLFlBQVk7UUFEaEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxZQUFZLENBcWdCaEM7SUFBRCxtQkFBQztDQXJnQkQsQUFxZ0JDLENBcmdCeUMsZ0JBQU0sR0FxZ0IvQztrQkFyZ0JvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfTUFJTl9HQU1FX1ZJRVdfREVTVFJPWSwgRVZUX01TR19LRVlfRVZFTlRfU0hPVywgRVZUX01TR19LRVlfRVZFTlRfSElERSwgRVZUX0FEX1NIT1dfU1RBUlQsIEVWVF9BRF9TSE9XX0VORCwgRVZUX01TR19LRVlfRVZFTlRfVE9QX1RPVUNIX1NUQVJULCBFVlRfTVNHX0tFWV9DSEFOR0VUSEVNRSwgRVZUX01TR19LRVlfUkVTRVRUSEVNRSB9IGZyb20gJy4uLy4uL0NvbmZpZyc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgRHluYW1pY0FjY3VtQ29tcCBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb21wb25lbnQvRHluYW1pY0FjY3VtQ29tcCc7XG5pbXBvcnQgVGltZXJDb21wb25lbnQgZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29tcG9uZW50L1RpbWVyQ29tcG9uZW50JztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfU0lNVUxBVE9SX0RJU1BMQVksIEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9JTlBVVCwgRVZUX01TR19LRVlfU0lNVUxBVE9SX05FWFRMRVZFTCB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2V2ZW50cy9TaW11bGF0b3JFdmVudCc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JQYXJzZXIgfSBmcm9tICcuLi8uLi9jb3JlL3ZpZXcvYmVoYXZpb3JzL2Jhc2UvR2FtZUJlaGF2aW9yUGFyc2VyJztcbmltcG9ydCB7IEJlaGF2aW9yQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvcmUvdmlldy9iZWhhdmlvcnMvY29udGV4dC9CZWhhdmlvckNvbnRleHQnO1xuaW1wb3J0IEdhbWVVSSBmcm9tICcuLi8uLi9jb3JlL3ZpZXcvY29tcG9uZW50L0dhbWVVSSc7XG5pbXBvcnQgU2NvcmVJdGVtIGZyb20gJy4uLy4uL2NvcmUvdmlldy9pdGVtcy9TY29yZUl0ZW0nO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IEVmZmVjdExheWVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvRWZmZWN0TGF5ZXJFbnVtJztcbmltcG9ydCB7IEFuaVRpbWVTY2FsZSB9IGZyb20gJy4uLy4uL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbnRoaXMgJiYgdGhpcy5fX3JlYWQ7XG50aGlzICYmIHRoaXMuX19zcHJlYWQ7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIF9sb2dOYW1lID0gXCJNYWluR2FtZVZpZXdcIjtcbiAgX3RpbWVTY2FsZSA9IDE7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuTm9ybWFsO1xuICBfZWZmZWN0TGF5ZXJzID0gbmV3IE1hcCgpO1xuICBfaXNQYXVzZVVwZGF0ZSA9IGZhbHNlO1xuICBfaXNTaG93QWQgPSBmYWxzZTtcbiAgX3RvdWNoQmxvY2tOb2RlID0gbnVsbDtcbiAgX3NjcmVlblRvdWNoRW5kQ2FsbGJhY2sgPSBudWxsO1xuICBfc2NyZWVuVG91Y2hFbmRUYXJnZXQgPSBudWxsO1xuICBfY291bnQgPSAwO1xuICBfb2Zmc2V0WSA9IDA7XG4gIF9zdGFydFNpbXVsYXRvciA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2dhbWUvTWFpbkdhbWVcIjtcbiAgc3RhdGljIGRlZmF1bHRUaGVtZSA9IFwiZGVmYXVsdFRoZW1lXCI7XG4gIGdldCBnYW1lVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZVR5cGU7XG4gIH1cbiAgZ2V0IGVmZmVjdE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdE5vZGU7XG4gIH1cbiAgZ2V0IG5vZGVUb3BFZmZlY3RSb290KCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlVG9wRWZmZWN0Um9vdDtcbiAgfVxuICBnZXQgbm9kZUNhcmRSb290KCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlQ2FyZFJvb3Q7XG4gIH1cbiAgZ2V0IG5vZGVEcmFnQ2FyZFJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVEcmFnQ2FyZFJvb3Q7XG4gIH1cbiAgZ2V0IGdhbWVVSSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZVVJO1xuICB9XG4gIGdldCBzd2FsbG93RXZlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9zd2FsbG93RXZlbnROb2RlO1xuICB9XG4gIGdldCBndWlkZVJvb3ROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ndWlkZVJvb3ROb2RlO1xuICB9XG4gIGdldCB0b3BSb290Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9wUm9vdE5vZGU7XG4gIH1cbiAgZ2V0IGJvdHRvbVJvb3ROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9ib3R0b21Sb290Tm9kZTtcbiAgfVxuICBnZXQgc2NvcmVSb290Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmVSb290Tm9kZTtcbiAgfVxuICBnZXQgc2NvcmVJdGVtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmVJdGVtTm9kZTtcbiAgfVxuICBnZXQgc2NvcmVJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zY29yZUl0ZW07XG4gIH1cbiAgZ2V0IGdhbWVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lTm9kZTtcbiAgfVxuICBnZXQgZ2FtZU9iamVjdFBvb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuX2dhbWVPYmplY3RQb29sO1xuICB9XG4gIGdldCB0aW1lckNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZXJDb21wb25lbnQ7XG4gIH1cbiAgZ2V0IGR5bmFtaWNBY2N1bUNvbXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R5bmFtaWNBY2N1bUNvbXA7XG4gIH1cbiAgZ2V0IG9mZnNldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNYWluR21Wd19nZXRVcmxcIilcbiAgc3RhdGljIGdldFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmYWJVcmw7XG4gIH1cbiAgc2V0VGltZVNjYWxlKGUpIHtcbiAgICB0aGlzLl90aW1lU2NhbGUgPSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdtVndfaW5pdExheWVyc1wiKVxuICBpbml0TGF5ZXJzKCkge1xuICAgIHRoaXMuaW5pdEVmZmVjdExheWVycygpO1xuICAgIHRoaXMuX25vZGVDYXJkUm9vdCA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUNhcmRSb290XCIpO1xuICAgIHRoaXMuX25vZGVEcmFnQ2FyZFJvb3QgPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVEcmFnQ2FyZFJvb3RcIik7XG4gICAgdGhpcy5fZ2FtZVVJID0gdGhpcy5fZ2FtZU5vZGUuZ2V0Q29tcG9uZW50KEdhbWVVSSk7XG4gICAgdGhpcy5fc3dhbGxvd0V2ZW50Tm9kZSA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVN3YWxsb3dFdmVudFwiKTtcbiAgICB0aGlzLl9ndWlkZVJvb3ROb2RlID0gdGhpcy5fZ2FtZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZVJvb3RcIik7XG4gICAgdGhpcy5fdG9wUm9vdE5vZGUgPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVUb3BcIik7XG4gICAgdGhpcy5fYm90dG9tUm9vdE5vZGUgPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIik7XG4gICAgdGhpcy5fc2NvcmVSb290Tm9kZSA9IHRoaXMuX3RvcFJvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVNjb3JlXCIpO1xuICAgIHRoaXMuaW5pdFNjb3JlSXRlbSgpO1xuICB9XG4gIGluaXRFZmZlY3RMYXllcnMoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcEVmZmVjdFJvb3RcIik7XG4gICAgaWYgKG8pIHtcbiAgICAgIG8uekluZGV4ID0gMjAwO1xuICAgICAgdGhpcy5fZWZmZWN0TGF5ZXJzLnNldChFZmZlY3RMYXllci5EZWZhdWx0LCBvKTtcbiAgICAgIHRoaXMuX2VmZmVjdE5vZGUgPSBvO1xuICAgICAgdGhpcy5fbm9kZVRvcEVmZmVjdFJvb3QgPSBvO1xuICAgICAgdmFyIG4gPSBbe1xuICAgICAgICBsYXllcjogRWZmZWN0TGF5ZXIuTWlkZGxlLFxuICAgICAgICBuYW1lOiBcImVmZmVjdExheWVyX01pZGRsZVwiLFxuICAgICAgICB6SW5kZXg6IDMwMFxuICAgICAgfSwge1xuICAgICAgICBsYXllcjogRWZmZWN0TGF5ZXIuVG9wLFxuICAgICAgICBuYW1lOiBcImVmZmVjdExheWVyX1RvcFwiLFxuICAgICAgICB6SW5kZXg6IDUwMFxuICAgICAgfV07XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIGEgPSByLnZhbHVlLFxuICAgICAgICAgICAgcyA9IG5ldyBjYy5Ob2RlKGEubmFtZSk7XG4gICAgICAgICAgcy5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgcy5zZXRDb250ZW50U2l6ZShjYy52aWV3LmdldFZpc2libGVTaXplKCkpO1xuICAgICAgICAgIHMuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgdGhpcy5fZ2FtZU5vZGUuYWRkQ2hpbGQocywgYS56SW5kZXgpO1xuICAgICAgICAgIHRoaXMuX2VmZmVjdExheWVycy5zZXQoYS5sYXllciwgcyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByICYmICFyLmRvbmUgJiYgKHQgPSBpLnJldHVybikgJiYgdC5jYWxsKGkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGluaXRTY29yZUl0ZW0oKSB7XG4gICAgdGhpcy5fc2NvcmVJdGVtTm9kZSA9IHRoaXMuX3Njb3JlUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY29yZUl0ZW1cIik7XG4gICAgdGhpcy5fc2NvcmVJdGVtID0gdGhpcy5fc2NvcmVJdGVtTm9kZS5hZGRDb21wb25lbnQoU2NvcmVJdGVtKTtcbiAgICB0aGlzLl9zY29yZUl0ZW0uc2V0RHluYW1pY0FjY3VtQ29tcCh0aGlzLl9keW5hbWljQWNjdW1Db21wKTtcbiAgfVxuICBpbml0RXhwYW5kTm9kZXMoKSB7fVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fZ2FtZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJHTE1haGpvbmdHYW1lVmlld1wiKTtcbiAgICB0aGlzLmluaXRUaW1lU2NhbGUoKTtcbiAgICB0aGlzLmluaXRBbmltYXRpb25zKCk7XG4gICAgdGhpcy5pbml0TGF5ZXJzKCk7XG4gICAgdGhpcy5pbml0RXhwYW5kTm9kZXMoKTtcbiAgICB0aGlzLmluaXRHbSgpO1xuICAgIHRoaXMub3Blbk11bHRpVG91Y2goKTtcbiAgICB0aGlzLmluaXRUaGVtZSgpO1xuICB9XG4gIGluaXRUaW1lU2NhbGUoKSB7XG4gICAgdGhpcy5zZXRUaW1lU2NhbGUoQW5pVGltZVNjYWxlLmdldCgpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1haW5HbVZ3X2luaXRDbnRCbG9ja05vZGVcIilcbiAgaW5pdENvdW50QmxvY2tOb2RlKCkge1xuICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlID0gbmV3IGNjLk5vZGUoXCJDb3VudEJsb2NrTm9kZVwiKTtcbiAgICB0aGlzLl9jb3VudEJsb2NrTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDEpO1xuICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlLnBhcmVudCA9IHRoaXMuX2dhbWVOb2RlO1xuICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlLnpJbmRleCA9IDk5OTk7XG4gICAgdGhpcy5fY291bnRCbG9ja05vZGUuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlLnNldENvbnRlbnRTaXplKDk5OTksIDk5OTkpO1xuICAgIHZhciBlID0gdGhpcy5fZ2FtZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgdCA9IGNjLnYyKDAsIC1lLmhlaWdodCAqIGUuYW5jaG9yWSksXG4gICAgICAgIG8gPSBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0KSxcbiAgICAgICAgbiA9IHRoaXMuX2dhbWVOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgdGhpcy5fY291bnRCbG9ja05vZGUuc2V0UG9zaXRpb24obi54LCBuLnkpO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0Q291bnRCbG9ja05vZGUoKTtcbiAgfVxuICBpbmNyZWFzZUNvdW50QmxvY2tOb2RlKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2NvdW50QmxvY2tOb2RlKSkge1xuICAgICAgdGhpcy5fY291bnQrKztcbiAgICAgIHRoaXMuX2NvdW50QmxvY2tOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGRlY3JlYXNlQ291bnRCbG9ja05vZGUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fY291bnRCbG9ja05vZGUpKSB7XG4gICAgICB0aGlzLl9jb3VudC0tO1xuICAgICAgdGhpcy5fY291bnQgPCAwICYmICh0aGlzLl9jb3VudCA9IDApO1xuICAgICAgdGhpcy5fY291bnRCbG9ja05vZGUuYWN0aXZlID0gdGhpcy5fY291bnQgPiAwO1xuICAgIH1cbiAgfVxuICByZXNldENvdW50QmxvY2tOb2RlKCkge1xuICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB0aGlzLl9jb3VudEJsb2NrTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBvbkVuYWJsZSgpIHtcbiAgICBzdXBlci5vbkVuYWJsZS5jYWxsKHRoaXMpO1xuICAgIHRoaXMub3Blbk11bHRpVG91Y2goKTtcbiAgfVxuICBvbkRpc2FibGUoKSB7XG4gICAgc3VwZXIub25EaXNhYmxlLmNhbGwodGhpcyk7XG4gICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gZmFsc2U7XG4gIH1cbiAgb3Blbk11bHRpVG91Y2goKSB7XG4gICAgbWouZ2V0Q2xhc3NCeU5hbWUoXCJDbG9zZU11bHRpVG91Y2hUcmFpdFwiKSB8fCAoY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gdHJ1ZSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciB0LCBvO1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIGNjLm1hY3JvLkVOQUJMRV9NVUxUSV9UT1VDSCA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJCZWhhdmlvclBhcnNlcigpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fdGltZXJDb21wb25lbnQpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsZWFyQWxsVGltZXIoKTtcbiAgICBudWxsID09PSAobyA9IHRoaXMuX2R5bmFtaWNBY2N1bUNvbXApIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNsZWFyKCk7XG4gICAgdGhpcy5jbGVhclRpbGVOb2RlcygpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX0VWRU5UX01BSU5fR0FNRV9WSUVXX0RFU1RST1kpO1xuICB9XG4gIGNsZWFyVGlsZU5vZGVzKCkge1xuICAgIHRoaXMuX2JlaGF2aW9yQ29udGV4dCAmJiB0aGlzLl9iZWhhdmlvckNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCkgJiYgdGhpcy5fYmVoYXZpb3JDb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLmRlc3Ryb3koKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfZSA9IHt9O1xuICAgIF9lW0VWVF9NU0dfS0VZX0VWRU5UX1NIT1ddID0gdGhpcy5vbkdhbWVTaG93LmJpbmQodGhpcyk7XG4gICAgX2VbRVZUX01TR19LRVlfRVZFTlRfSElERV0gPSB0aGlzLm9uR2FtZUhpZGUuYmluZCh0aGlzKTtcbiAgICBfZVtFVlRfTVNHX0tFWV9TSU1VTEFUT1JfRElTUExBWV0gPSB0aGlzLm9uU2ltdWxhdG9yRGlzcGxheS5iaW5kKHRoaXMpO1xuICAgIF9lW0VWVF9NU0dfS0VZX1NJTVVMQVRPUl9JTlBVVF0gPSB0aGlzLm9uU2ltdWxhdG9ySW5wdXQuYmluZCh0aGlzKTtcbiAgICBfZVtFVlRfTVNHX0tFWV9TSU1VTEFUT1JfTkVYVExFVkVMXSA9IHRoaXMub25TaW11bGF0b3JOZXh0TGV2ZWwuYmluZCh0aGlzKTtcbiAgICBfZVtFVlRfQURfU0hPV19TVEFSVF0gPSB0aGlzLm9uQWRTaG93U3RhcnQuYmluZCh0aGlzKTtcbiAgICBfZVtFVlRfQURfU0hPV19FTkRdID0gdGhpcy5vbkFkU2hvd0VuZC5iaW5kKHRoaXMpO1xuICAgIF9lW0VWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9TVEFSVF0gPSB0aGlzLm9uVG9wVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIF9lW0VWVF9NU0dfS0VZX0NIQU5HRVRIRU1FXSA9IHRoaXMub25DaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIF9lW0VWVF9NU0dfS0VZX1JFU0VUVEhFTUVdID0gdGhpcy5vblJlc2V0VG9EZWZhdWx0VGhlbWUuYmluZCh0aGlzKTtcbiAgICBfZVtFR2FtZUV2ZW50LlZpZXdfUmVmcmVzaEJhc2VDYXJkc10gPSB0aGlzLl9vblJlZnJlc2hCYXNlQ2FyZHMuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX2U7XG4gIH1cbiAgb25Ub3BUb3VjaFN0YXJ0KCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5ub2RlLCB0cnVlKSAmJiB0aGlzLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkgJiYgdGhpcy5vblNpbXVsYXRvcklucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVXNlck9wZXJhdGVcbiAgICB9KTtcbiAgfVxuICBfb25SZWZyZXNoQmFzZUNhcmRzKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHIsXG4gICAgICBhLFxuICAgICAgcyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCA9IG51bGwgPT09IChpID0gbnVsbCA9PT0gKG4gPSB0aGlzLl9iZWhhdmlvckNvbnRleHQpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uZ2V0VGlsZU5vZGVNYW5hZ2VyKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmNhbGwobik7XG4gICAgaWYgKHApIHtcbiAgICAgIHZhciBmID0gbnVsbCA9PT0gKHIgPSBwLmdldFRpbGVOb2RlcykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jYWxsKHApO1xuICAgICAgaWYgKGYgJiYgMCAhPT0gZi5sZW5ndGgpIHRyeSB7XG4gICAgICAgIGZvciAodmFyIGQgPSBfX3ZhbHVlcyhmKSwgaCA9IGQubmV4dCgpOyAhaC5kb25lOyBoID0gZC5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgeSA9IGgudmFsdWU7XG4gICAgICAgICAgaWYgKChudWxsID09PSAoYSA9IG51bGwgPT0geSA/IHZvaWQgMCA6IHkudGlsZU9iamVjdCkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pc1ZhbGlkKSAmJiBlICYmIC0xICE9PSBlLmluZGV4T2YoeS50aWxlT2JqZWN0LnJlc05hbWUpKSB0cnkge1xuICAgICAgICAgICAgbnVsbCA9PT0gKHMgPSB5LnVwZGF0ZUltZ0NhcmRCZykgfHwgdm9pZCAwID09PSBzIHx8IHMuY2FsbCh5KTtcbiAgICAgICAgICAgIG51bGwgPT09IChjID0geS51cGRhdGVJbWdDYXJkKSB8fCB2b2lkIDAgPT09IGMgfHwgYy5jYWxsKHkpO1xuICAgICAgICAgICAgeS5faW1nU2VsZWN0ZWRDYXJkQmcgJiYgKG51bGwgPT09ICh1ID0geS51cGRhdGVJbWdTZWxlY3RlZENhcmRCZykgfHwgdm9pZCAwID09PSB1IHx8IHUuY2FsbCh5KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGggJiYgIWguZG9uZSAmJiAobyA9IGQucmV0dXJuKSAmJiBvLmNhbGwoZCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW5pdFNpbXVsYXRvckRpc3BsYXkoKSB7XG4gICAgdGhpcy5fYmVoYXZpb3JDb250ZXh0ICYmIHRoaXMuX2JlaGF2aW9yQ29udGV4dC5nZXRUaWxlTm9kZU1hbmFnZXIoKSAmJiB0aGlzLl9iZWhhdmlvckNvbnRleHQuZ2V0VGlsZU5vZGVNYW5hZ2VyKCkuY2xlYXJBbGxUaWxlTm9kZXMoKTtcbiAgICB0aGlzLmNsZWFyQmVoYXZpb3JQYXJzZXIoKTtcbiAgICB0aGlzLnJlc2V0Q291bnRCbG9ja05vZGUoKTtcbiAgICB2YXIgZSA9IG5ldyBCZWhhdmlvckNvbnRleHQoKTtcbiAgICB0aGlzLl9iZWhhdmlvckNvbnRleHQgPSBlO1xuICAgIGUuX2dhbWVWaWV3ID0gdGhpcztcbiAgICBlLl9nYW1lVHlwZSA9IHRoaXMuZ2FtZVR5cGU7XG4gICAgdGhpcy5fZ2FtZUJlaGF2aW9yUGFyc2VyID0gbmV3IEdhbWVCZWhhdmlvclBhcnNlcih0aGlzLmdhbWVUeXBlLCBlKTtcbiAgfVxuICBvblNpbXVsYXRvckRpc3BsYXkoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXMsXG4gICAgICBuID0gZS5uYW1lcyxcbiAgICAgIGkgPSBlLmJlaGF2aW9yRXhlY3V0aW9uLFxuICAgICAgciA9IGUuaW5wdXRUeXBlO1xuICAgIHRyeSB7XG4gICAgICBudWxsID09PSAodCA9IHRoaXMuX2dhbWVCZWhhdmlvclBhcnNlcikgfHwgdm9pZCAwID09PSB0IHx8IHQucGFyc2UoaSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgby5vbkRpc3BsYXlGaW5pc2gociwgaSwgbiwgbnVsbCA9PSBpID8gdm9pZCAwIDogaS5rZXkpO1xuICAgICAgICBlLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICByZXR1cm4gIWUuc3VjY2VzcztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnJlc2V0Q291bnRCbG9ja05vZGUoKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyB0aGlzLl9sb2dOYW1lICsgXCJdIOaYvuekuuihjOS4uuW8guW4uDpcIiArIGUubWVzc2FnZSArIFwiLGlucHV0VHlwZTpcIiArIHIgKyBcIixuYW1lczpcIiArIG4gKyBcIixtc2c6XCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5tZXNzYWdlKSArIFwiLHN0YWNrOlwiICsgKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3RhY2spKTtcbiAgICAgIHRoaXMub25EaXNwbGF5RmluaXNoKHIsIGksIG4sIG51bGwgPT0gaSA/IHZvaWQgMCA6IGkua2V5KTtcbiAgICB9XG4gIH1cbiAgZ2V0RWZmZWN0TGF5ZXIoZSA9IEVmZmVjdExheWVyLkRlZmF1bHQpIHtcbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0TGF5ZXJzLmdldChlKSB8fCB0aGlzLl9lZmZlY3RMYXllcnMuZ2V0KEVmZmVjdExheWVyLkRlZmF1bHQpO1xuICB9XG4gIHNldE5vZGVMYXllcihlLCB0LCBvID0gdHJ1ZSkge1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2V0RWZmZWN0TGF5ZXIodCk7XG4gICAgICBpZiAoZS5wYXJlbnQgIT09IG4pIGlmIChvKSB7XG4gICAgICAgIHZhciBpID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxuICAgICAgICAgIHIgPSBuLmNvbnZlcnRUb05vZGVTcGFjZUFSKGkpO1xuICAgICAgICBlLnBhcmVudCA9IG47XG4gICAgICAgIGUucG9zaXRpb24gPSBjYy52MyhyLngsIHIueSwgMCk7XG4gICAgICB9IGVsc2UgZS5wYXJlbnQgPSBuO1xuICAgIH1cbiAgfVxuICBjbGVhckVmZmVjdExheWVyKGUpIHtcbiAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0RWZmZWN0TGF5ZXIoZSk7XG4gICAgICBudWxsID09IHQgfHwgdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH0gZWxzZSB0aGlzLl9lZmZlY3RMYXllcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgbnVsbCA9PSBlIHx8IGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9KTtcbiAgfVxuICBnZXRBbGxFZmZlY3RMYXllcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdExheWVycztcbiAgfVxuICBjbGVhckFsbE5vZGUoKSB7XG4gICAgdmFyIGUsIHQsIG8sIG47XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl90aW1lckNvbXBvbmVudCkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xlYXJBbGxUaW1lcigpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fZHluYW1pY0FjY3VtQ29tcCkgfHwgdm9pZCAwID09PSB0IHx8IHQuY2xlYXIoKTtcbiAgICB0aGlzLmNsZWFyQmVoYXZpb3JQYXJzZXIoKTtcbiAgICB0aGlzLnN0b3BTaGFrZSgpO1xuICAgIHRoaXMuY2xlYXJFZmZlY3RMYXllcigpO1xuICAgIG51bGwgPT09IChvID0gdGhpcy5fZ3VpZGVSb290Tm9kZSkgfHwgdm9pZCAwID09PSBvIHx8IG8ucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICBudWxsID09PSAobiA9IHRoaXMuX3Njb3JlSXRlbSkgfHwgdm9pZCAwID09PSBuIHx8IG4ucmVzZXRGb3JSZXN0YXJ0KCk7XG4gIH1cbiAgb25EaXNwbGF5RmluaXNoKGUsIHQsIG8sIG4pIHtcbiAgICB0aGlzLmRlbGVnYXRlLnB1c2hJbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkRpc3BsYXlTaW11bGF0b3IsXG4gICAgICBkaXNwbGF5SW5wdXRUeXBlOiBlLFxuICAgICAgbmFtZXM6IG8sXG4gICAgICBsb2dJbmRleDogblxuICAgIH0pO1xuICB9XG4gIG9uR2FtZVNob3coKSB7XG4gICAgdGhpcy5faXNQYXVzZVVwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGVsZWdhdGUgJiYgdGhpcy5kZWxlZ2F0ZS5fZ2FtZVRpbWUgJiYgdGhpcy5kZWxlZ2F0ZS5fZ2FtZVRpbWUub25HYW1lU2hvdygpO1xuICB9XG4gIG9uR2FtZUhpZGUoKSB7XG4gICAgdGhpcy5faXNQYXVzZVVwZGF0ZSA9IHRydWU7XG4gICAgdGhpcy5kZWxlZ2F0ZSAmJiB0aGlzLmRlbGVnYXRlLl9nYW1lVGltZSAmJiB0aGlzLmRlbGVnYXRlLl9nYW1lVGltZS5vbkdhbWVIaWRlKCk7XG4gIH1cbiAgb25BZFNob3dTdGFydCgpIHtcbiAgICB0aGlzLl9pc1Nob3dBZCA9IHRydWU7XG4gIH1cbiAgb25BZFNob3dFbmQoKSB7XG4gICAgdGhpcy5faXNTaG93QWQgPSBmYWxzZTtcbiAgfVxuICB1cGRhdGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpID0gZSAqIHRoaXMuX3RpbWVTY2FsZTtcbiAgICB0aGlzLl9keW5hbWljQWNjdW1Db21wLnVwZGF0ZShpKTtcbiAgICB0aGlzLl90aW1lckNvbXBvbmVudC51cGRhdGUoaSk7XG4gICAgaWYgKHRoaXMuX3N0YXJ0U2ltdWxhdG9yKSB7XG4gICAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUuX2dhbWVUaW1lKSB8fCB2b2lkIDAgPT09IHQgfHwgdC51cGRhdGUoZSk7XG4gICAgICBudWxsID09PSAobyA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLnVwZGF0ZVRpbWUoZSk7XG4gICAgfVxuICAgIHRoaXMuX2lzUGF1c2VVcGRhdGUgfHwgdGhpcy5faXNTaG93QWQgfHwgbnVsbCA9PT0gKG4gPSB0aGlzLl9nYW1lQmVoYXZpb3JQYXJzZXIpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLnVwZGF0ZShlKTtcbiAgfVxuICBzZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGUpIHtcbiAgICB0aGlzLl9zd2FsbG93RXZlbnROb2RlLmFjdGl2ZSA9IGU7XG4gIH1cbiAgcmVnaXN0ZXJTY3JlZW5Ub3VjaEVuZChlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIHRoaXMuX3NjcmVlblRvdWNoRW5kQ2FsbGJhY2sgJiYgdGhpcy51bnJlZ2lzdGVyU2NyZWVuVG91Y2hFbmQoKTtcbiAgICB2YXIgaSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdmlzdWFsRmVlZGJhY2s6IGZhbHNlLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHpJbmRleDogOTk5OVxuICAgIH0sIG8pO1xuICAgIHRoaXMuX3RvdWNoQmxvY2tOb2RlID0gbmV3IGNjLk5vZGUoXCJUb3VjaEJsb2NrTm9kZVwiKTtcbiAgICB2YXIgYSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcbiAgICB0aGlzLl90b3VjaEJsb2NrTm9kZS5zZXRDb250ZW50U2l6ZShhKTtcbiAgICB0aGlzLl90b3VjaEJsb2NrTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICB0aGlzLl90b3VjaEJsb2NrTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgdGhpcy5fdG91Y2hCbG9ja05vZGUuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgIGlmIChpLnZpc3VhbEZlZWRiYWNrKSB7XG4gICAgICB2YXIgbCA9IHRoaXMuX3RvdWNoQmxvY2tOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICBsLmZpbGxDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgbC5yZWN0KC1hLndpZHRoIC8gMiwgLWEuaGVpZ2h0IC8gMiwgYS53aWR0aCwgYS5oZWlnaHQpO1xuICAgICAgbC5maWxsKCk7XG4gICAgICB0aGlzLl90b3VjaEJsb2NrTm9kZS5vcGFjaXR5ID0gaS5vcGFjaXR5O1xuICAgIH1cbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5fdG91Y2hCbG9ja05vZGUsIGkuekluZGV4KTtcbiAgICB2YXIgcyA9IGZ1bmN0aW9uIHMobykge1xuICAgICAgby5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUuY2FsbCh0IHx8IG4sIG8pO1xuICAgIH07XG4gICAgdGhpcy5fc2NyZWVuVG91Y2hFbmRDYWxsYmFjayA9IHM7XG4gICAgdGhpcy5fc2NyZWVuVG91Y2hFbmRUYXJnZXQgPSB0O1xuICAgIHRoaXMuX3RvdWNoQmxvY2tOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgcywgdCB8fCB0aGlzKTtcbiAgfVxuICB1bnJlZ2lzdGVyU2NyZWVuVG91Y2hFbmQoKSB7XG4gICAgaWYgKHRoaXMuX3NjcmVlblRvdWNoRW5kQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0aGlzLl90b3VjaEJsb2NrTm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMuX3RvdWNoQmxvY2tOb2RlKSkge1xuICAgICAgICB0aGlzLl90b3VjaEJsb2NrTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuX3RvdWNoQmxvY2tOb2RlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NjcmVlblRvdWNoRW5kQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgdGhpcy5fc2NyZWVuVG91Y2hFbmRUYXJnZXQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBpbml0QW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLl90aW1lckNvbXBvbmVudCA9IG5ldyBUaW1lckNvbXBvbmVudCgpO1xuICAgIHRoaXMuX2R5bmFtaWNBY2N1bUNvbXAgPSBuZXcgRHluYW1pY0FjY3VtQ29tcCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdtVndfY2FsY0FyZWFTelwiKVxuICBjYWxjUmVjdEdhbWVBcmVhVHJhbnNmb3JtU2l6ZShlKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJlY3RHYW1lQXJlYVwiKS5nZXRDb250ZW50U2l6ZSgpLFxuICAgICAgbyA9IHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZVRvcFwiKSxcbiAgICAgIG4gPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIik7XG4gICAgby5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICBuLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIHZhciBpID0gby5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgLW8uaGVpZ2h0ICogby5hbmNob3JZKSksXG4gICAgICByID0gbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgbi5oZWlnaHQgKiAoMSAtIG4uYW5jaG9yWSkpKSxcbiAgICAgIGEgPSBvLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKSxcbiAgICAgIGwgPSBvLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKSxcbiAgICAgIHMgPSAoYSA9IHRoaXMuY2hhbmdlVG9wTG9jYWxCb3R0b20oYSkpLnkgLSBsLnksXG4gICAgICBjID0gdGhpcy5nZXRGaW5hbE1pZGRsZVkoYSwgbCk7XG4gICAgdC5oZWlnaHQgPSBzO1xuICAgIHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwicmVjdEdhbWVBcmVhXCIpLnNldENvbnRlbnRTaXplKHQpO1xuICAgIHRoaXMuX29mZnNldFkgPSBjO1xuICAgIGUodCwgYyk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgY2hhbmdlVG9wTG9jYWxCb3R0b20oZSkge1xuICAgIHJldHVybiBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdtVndfZ2V0TWlkWVwiKVxuICBnZXRGaW5hbE1pZGRsZVkoZSwgdCkge1xuICAgIHJldHVybiAoZS55ICsgdC55KSAvIDI7XG4gIH1cbiAgb25TaW11bGF0b3JJbnB1dChlKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5wdXNoSW5wdXQoZSk7XG4gIH1cbiAgY2xlYXJCZWhhdmlvclBhcnNlcigpIHtcbiAgICBpZiAodGhpcy5fZ2FtZUJlaGF2aW9yUGFyc2VyKSB7XG4gICAgICB0aGlzLl9nYW1lQmVoYXZpb3JQYXJzZXIuYWJvcnQoKTtcbiAgICAgIHRoaXMuX2dhbWVCZWhhdmlvclBhcnNlci5yZXNldCgpO1xuICAgICAgdGhpcy5fZ2FtZUJlaGF2aW9yUGFyc2VyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgb25TaW11bGF0b3JOZXh0TGV2ZWwoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9nYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVCb3R0b21cIiksXG4gICAgICB0ID0gdGhpcy5fZ2FtZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlVG9wXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuU2V0dGluZ3NcIik7XG4gICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgIGNjLmlzVmFsaWQodCkgJiYgKHQuYWN0aXZlID0gdHJ1ZSk7XG4gICAgdGhpcy5kZWxlZ2F0ZS5zdGFydE5leHRMZXZlbCgpO1xuICB9XG4gIHNob3dCb3R0b21Ob2RlKCkge1xuICAgIHRoaXMuX2dhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwibm9kZUJvdHRvbVwiKS5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIHN0YXJ0U2ltdWxhdG9yKCkge1xuICAgIHRoaXMuX3N0YXJ0U2ltdWxhdG9yID0gdHJ1ZTtcbiAgfVxuICBpbml0R20oKSB7fVxuICBzdG9wU2hha2UoKSB7XG4gICAgaWYgKHRoaXMuX3NoYWtlVHdlZW4pIHtcbiAgICAgIHRoaXMuX3NoYWtlVHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fc2hha2VUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gICAgdGhpcy5fb3JpUG9zICYmICh0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLl9vcmlQb3MpO1xuICB9XG4gIHBsYXlTaGFrZSgpIHtcbiAgICB0aGlzLl9zaGFrZVR3ZWVuICYmIHRoaXMuX3NoYWtlVHdlZW4uc3RvcCgpO1xuICAgIHZhciBlID0gdGhpcy5ub2RlLnBvc2l0aW9uLngsXG4gICAgICB0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnk7XG4gICAgdGhpcy5fb3JpUG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgdGhpcy5fc2hha2VUd2VlbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4wMzMsIHtcbiAgICAgIHBvc2l0aW9uOiBjYy52MyhlICsgMTAsIHQgLSAxOCwgMClcbiAgICB9KS50bygwLjAzMywge1xuICAgICAgcG9zaXRpb246IGNjLnYzKGUgLSAzLCB0IC0gMiwgMClcbiAgICB9KS50bygwLjAzMywge1xuICAgICAgcG9zaXRpb246IGNjLnYzKGUgKyA1LCB0IC0gNSwgMClcbiAgICB9KS50bygwLjAzMywge1xuICAgICAgcG9zaXRpb246IGNjLnYzKGUsIHQsIDApXG4gICAgfSkudG8oMC4wMzMsIHtcbiAgICAgIHBvc2l0aW9uOiBjYy52MyhlIC0gMTAsIHQgKyAxOCwgMClcbiAgICB9KS50bygwLjAzMywge1xuICAgICAgcG9zaXRpb246IGNjLnYzKGUgLSA1LCB0ICsgNSwgMClcbiAgICB9KS50bygwLjAzMywge1xuICAgICAgcG9zaXRpb246IGNjLnYzKGUgKyAxMCwgdCAtIDE4LCAwKVxuICAgIH0pLnRvKDAuMDMzLCB7XG4gICAgICBwb3NpdGlvbjogY2MudjMoZSAtIDMsIHQgLSAyLCAwKVxuICAgIH0pLnRvKDAuMDMzLCB7XG4gICAgICBwb3NpdGlvbjogY2MudjMoZSArIDUsIHQgLSA1LCAwKVxuICAgIH0pLnRvKDAuMDMzLCB7XG4gICAgICBwb3NpdGlvbjogY2MudjMoZSwgdCwgMClcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIGluaXRUaGVtZSgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKSxcbiAgICAgIHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLmdldFRoZW1lKCk7XG4gICAgdGhpcy5vbkNoYW5nZVRoZW1lKHRoaXMuZ2FtZVR5cGUsIHQsIHRydWUpO1xuICB9XG4gIG9uQ2hhbmdlVGhlbWUoZSwgdCwgbyA9IGZhbHNlKSB7XG4gICAgaWYgKG8gfHwgZSA9PSB0aGlzLmdhbWVUeXBlKSB7XG4gICAgICB0ID0gdGhpcy5iZWZvcmVDaGFuZ2VUaGVtZShlLCB0LCBvKTtcbiAgICAgIHZhciBuID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpO1xuICAgICAgbiAmJiBuLnNldFRoZW1lKHQpO1xuICAgICAgdGhpcy5hZnRlckNoYW5nZVRoZW1lKGUsIHQsIG8pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1haW5HbVZ3X2JlQ2hhbmdlVGhlbWVcIilcbiAgYmVmb3JlQ2hhbmdlVGhlbWUoZSwgdCwgbyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNYWluR21Wd19hZkNoYW5nZVRoZW1lXCIpXG4gIGFmdGVyQ2hhbmdlVGhlbWUoZSwgdCwgbyA9IGZhbHNlKSB7fVxuICBAbWoudHJhaXRFdmVudChcIk1haW5HbVZ3X3Jlc2V0VGhlbWVcIilcbiAgb25SZXNldFRvRGVmYXVsdFRoZW1lKGUsIHQpIHtcbiAgICB2YXIgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZSh0aGlzLmdhbWVUeXBlKTtcbiAgICBvICYmIG8uc2V0VGhlbWUodCk7XG4gIH1cbn0iXX0=