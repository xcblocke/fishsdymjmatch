import { EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY, EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE, EVT_AD_SHOW_START, EVT_AD_SHOW_END, EVT_MSG_KEY_EVENT_TOP_TOUCH_START, EVT_MSG_KEY_CHANGETHEME, EVT_MSG_KEY_RESETTHEME } from '../../Config';
import { EGameEvent } from '../../simulator/constant/GameEvent';
import DynamicAccumComp from '../../core/simulator/component/DynamicAccumComp';
import TimerComponent from '../../core/simulator/component/TimerComponent';
import { EGameInputEnum } from '../../simulator/constant/GameInputEnum';
import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
import { EVT_MSG_KEY_SIMULATOR_DISPLAY, EVT_MSG_KEY_SIMULATOR_INPUT, EVT_MSG_KEY_SIMULATOR_NEXTLEVEL } from '../../core/simulator/events/SimulatorEvent';
import { GameBehaviorParser } from '../../core/view/behaviors/base/GameBehaviorParser';
import { BehaviorContext } from '../../core/view/behaviors/context/BehaviorContext';
import GameUI from '../../core/view/component/GameUI';
import ScoreItem from '../../core/view/items/ScoreItem';
import UIView from '../../framework/ui/UIView';
import { EffectLayer } from '../../constant/EffectLayerEnum';
import { AniTimeScale } from '../../framework/utils/CommonUtils';
import UserModel from '../../gamePlay/user/UserModel';
import { Tile2BeforeEndEffect } from '../../Tile2BeforeEndEffect';
import { Tile2EndEffect } from '../../Tile2EndEffect';
this && this.__read;
this && this.__spread;
@mj.class
export default class MainGameView extends UIView {
  _logName = "MainGameView";
  _timeScale = 1;
  _gameType = MjGameType.Normal;
  _effectLayers = new Map();
  _isPauseUpdate = false;
  _isShowAd = false;
  _touchBlockNode = null;
  _screenTouchEndCallback = null;
  _screenTouchEndTarget = null;
  _count = 0;
  _offsetY = 0;
  _startSimulator = false;
  /** DEV: 非 null 时表示已注册键盘一键过关 */
  _devInstantWinOnKey = null;
  static prefabUrl = "prefabs/game/MainGame";
  static defaultTheme = "defaultTheme";
  get gameType() {
    return this._gameType;
  }
  get effectNode() {
    return this._effectNode;
  }
  get nodeTopEffectRoot() {
    return this._nodeTopEffectRoot;
  }
  get nodeCardRoot() {
    return this._nodeCardRoot;
  }
  get nodeDragCardRoot() {
    return this._nodeDragCardRoot;
  }
  get gameUI() {
    return this._gameUI;
  }
  get swallowEventNode() {
    return this._swallowEventNode;
  }
  get guideRootNode() {
    return this._guideRootNode;
  }
  get topRootNode() {
    return this._topRootNode;
  }
  get bottomRootNode() {
    return this._bottomRootNode;
  }
  get scoreRootNode() {
    return this._scoreRootNode;
  }
  get scoreItemNode() {
    return this._scoreItemNode;
  }
  get scoreItem() {
    return this._scoreItem;
  }
  get gameNode() {
    return this._gameNode;
  }
  get gameObjectPool() {
    return this.delegate._gameObjectPool;
  }
  get timerComponent() {
    return this._timerComponent;
  }
  get dynamicAccumComp() {
    return this._dynamicAccumComp;
  }
  get offsetY() {
    return this._offsetY;
  }
  @mj.traitEvent("MainGmVw_getUrl")
  static getUrl() {
    return this.prefabUrl;
  }
  setTimeScale(e) {
    this._timeScale = e;
  }
  @mj.traitEvent("MainGmVw_initLayers")
  initLayers() {
    this.initEffectLayers();
    this._nodeCardRoot = this._gameNode.getChildByName("nodeCardRoot");
    this._nodeDragCardRoot = this._gameNode.getChildByName("nodeDragCardRoot");
    this._gameUI = this._gameNode.getComponent(GameUI);
    this._swallowEventNode = this._gameNode.getChildByName("nodeSwallowEvent");
    this._guideRootNode = this._gameNode.getChildByName("guideRoot");
    this._topRootNode = this._gameNode.getChildByName("nodeTop");
    this._bottomRootNode = this._gameNode.getChildByName("nodeBottom");
    this._scoreRootNode = this._topRootNode.getChildByName("nodeScore");
    this.initScoreItem();
  }
  initEffectLayers() {
    var e,
      t,
      o = this._gameNode.getChildByName("nodeTopEffectRoot");
    if (o) {
      o.zIndex = 200;
      this._effectLayers.set(EffectLayer.Default, o);
      this._effectNode = o;
      this._nodeTopEffectRoot = o;
      var n = [{
        layer: EffectLayer.Middle,
        name: "effectLayer_Middle",
        zIndex: 300
      }, {
        layer: EffectLayer.Top,
        name: "effectLayer_Top",
        zIndex: 500
      }];
      try {
        for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
          var a = r.value,
            s = new cc.Node(a.name);
          s.setAnchorPoint(0.5, 0.5);
          s.setContentSize(cc.view.getVisibleSize());
          s.setPosition(0, 0);
          this._gameNode.addChild(s, a.zIndex);
          this._effectLayers.set(a.layer, s);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          r && !r.done && (t = i.return) && t.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
    }
  }
  initScoreItem() {
    this._scoreItemNode = this._scoreRootNode.getChildByName("scoreItem");
    this._scoreItem = this._scoreItemNode.addComponent(ScoreItem);
    this._scoreItem.setDynamicAccumComp(this._dynamicAccumComp);
  }
  initExpandNodes() {}
  onLoad() {
    super.onLoad.call(this);
    this._gameNode = this.node.getChildByName("GLMahjongGameView");
    this.initTimeScale();
    this.initAnimations();
    this.initLayers();
    this.initExpandNodes();
    this.initGm();
    this.openMultiTouch();
    this.initTheme();
  }
  initTimeScale() {
    this.setTimeScale(AniTimeScale.get());
  }
  @mj.traitEvent("MainGmVw_initCntBlockNode")
  initCountBlockNode() {
    this._countBlockNode = new cc.Node("CountBlockNode");
    this._countBlockNode.setAnchorPoint(0.5, 1);
    this._countBlockNode.parent = this._gameNode;
    this._countBlockNode.zIndex = 9999;
    this._countBlockNode.addComponent(cc.BlockInputEvents);
    this._countBlockNode.setContentSize(9999, 9999);
    var e = this._gameNode.getChildByName("nodeTop");
    if (cc.isValid(e)) {
      var t = cc.v2(0, -e.height * e.anchorY),
        o = e.convertToWorldSpaceAR(t),
        n = this._gameNode.convertToNodeSpaceAR(o);
      this._countBlockNode.setPosition(n.x, n.y);
    }
    this.resetCountBlockNode();
  }
  increaseCountBlockNode() {
    if (cc.isValid(this._countBlockNode)) {
      this._count++;
      this._countBlockNode.active = true;
    }
  }
  decreaseCountBlockNode() {
    if (cc.isValid(this._countBlockNode)) {
      this._count--;
      this._count < 0 && (this._count = 0);
      this._countBlockNode.active = this._count > 0;
    }
  }
  resetCountBlockNode() {
    this._count = 0;
    this._countBlockNode.active = false;
  }
  onEnable() {
    super.onEnable.call(this);
    this.openMultiTouch();
  }
  onDisable() {
    super.onDisable.call(this);
    cc.macro.ENABLE_MULTI_TOUCH = false;
  }
  openMultiTouch() {
    mj.getClassByName("CloseMultiTouchTrait") || (cc.macro.ENABLE_MULTI_TOUCH = true);
  }
  onDestroy() {
    var t, o;
    this._devInstantWinOnKey && (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this._devInstantWinOnKey, this), (this._devInstantWinOnKey = null));
    super.onDestroy.call(this);
    cc.macro.ENABLE_MULTI_TOUCH = false;
    this.clearBehaviorParser();
    null === (t = this._timerComponent) || void 0 === t || t.clearAllTimer();
    null === (o = this._dynamicAccumComp) || void 0 === o || o.clear();
    this.clearTileNodes();
    mj.EventManager.emit(EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY);
  }
  clearTileNodes() {
    this._behaviorContext && this._behaviorContext.getTileNodeManager() && this._behaviorContext.getTileNodeManager().destroy();
  }
  getMessageListeners() {
    var _e = {};
    _e[EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
    _e[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    _e[EVT_MSG_KEY_SIMULATOR_DISPLAY] = this.onSimulatorDisplay.bind(this);
    _e[EVT_MSG_KEY_SIMULATOR_INPUT] = this.onSimulatorInput.bind(this);
    _e[EVT_MSG_KEY_SIMULATOR_NEXTLEVEL] = this.onSimulatorNextLevel.bind(this);
    _e[EVT_AD_SHOW_START] = this.onAdShowStart.bind(this);
    _e[EVT_AD_SHOW_END] = this.onAdShowEnd.bind(this);
    _e[EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
    _e[EVT_MSG_KEY_CHANGETHEME] = this.onChangeTheme.bind(this);
    _e[EVT_MSG_KEY_RESETTHEME] = this.onResetToDefaultTheme.bind(this);
    _e[EGameEvent.View_RefreshBaseCards] = this._onRefreshBaseCards.bind(this);
    return _e;
  }
  onTopTouchStart() {
    cc.isValid(this.node, true) && this.node.activeInHierarchy && this.onSimulatorInput({
      inputType: EGameInputEnum.UserOperate
    });
  }
  _onRefreshBaseCards(e) {
    var t,
      o,
      n,
      i,
      r,
      a,
      s,
      c,
      u,
      p = null === (i = null === (n = this._behaviorContext) || void 0 === n ? void 0 : n.getTileNodeManager) || void 0 === i ? void 0 : i.call(n);
    if (p) {
      var f = null === (r = p.getTileNodes) || void 0 === r ? void 0 : r.call(p);
      if (f && 0 !== f.length) try {
        for (var d = __values(f), h = d.next(); !h.done; h = d.next()) {
          var y = h.value;
          if ((null === (a = null == y ? void 0 : y.tileObject) || void 0 === a ? void 0 : a.isValid) && e && -1 !== e.indexOf(y.tileObject.resName)) try {
            null === (s = y.updateImgCardBg) || void 0 === s || s.call(y);
            null === (c = y.updateImgCard) || void 0 === c || c.call(y);
            y._imgSelectedCardBg && (null === (u = y.updateImgSelectedCardBg) || void 0 === u || u.call(y));
          } catch (e) {}
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          h && !h.done && (o = d.return) && o.call(d);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
  initSimulatorDisplay() {
    this._behaviorContext && this._behaviorContext.getTileNodeManager() && this._behaviorContext.getTileNodeManager().clearAllTileNodes();
    this.clearBehaviorParser();
    this.resetCountBlockNode();
    var e = new BehaviorContext();
    this._behaviorContext = e;
    e._gameView = this;
    e._gameType = this.gameType;
    this._gameBehaviorParser = new GameBehaviorParser(this.gameType, e);
  }
  onSimulatorDisplay(e) {
    var t,
      o = this,
      n = e.names,
      i = e.behaviorExecution,
      r = e.inputType;
    try {
      null === (t = this._gameBehaviorParser) || void 0 === t || t.parse(i, function (e) {
        o.onDisplayFinish(r, i, n, null == i ? void 0 : i.key);
        e.some(function (e) {
          return !e.success;
        });
      });
    } catch (e) {
      this.resetCountBlockNode();
      console.error("[" + this._logName + "] 显示行为异常:" + e.message + ",inputType:" + r + ",names:" + n + ",msg:" + (null == e ? void 0 : e.message) + ",stack:" + (null == e ? void 0 : e.stack));
      this.onDisplayFinish(r, i, n, null == i ? void 0 : i.key);
    }
  }
  getEffectLayer(e = EffectLayer.Default) {
    return this._effectLayers.get(e) || this._effectLayers.get(EffectLayer.Default);
  }
  setNodeLayer(e, t, o = true) {
    if (cc.isValid(e)) {
      var n = this.getEffectLayer(t);
      if (e.parent !== n) if (o) {
        var i = e.convertToWorldSpaceAR(cc.v2(0, 0)),
          r = n.convertToNodeSpaceAR(i);
        e.parent = n;
        e.position = cc.v3(r.x, r.y, 0);
      } else e.parent = n;
    }
  }
  clearEffectLayer(e) {
    if (void 0 !== e) {
      var t = this.getEffectLayer(e);
      null == t || t.removeAllChildren();
    } else this._effectLayers.forEach(function (e) {
      null == e || e.removeAllChildren();
    });
  }
  getAllEffectLayers() {
    return this._effectLayers;
  }
  clearAllNode() {
    var e, t, o, n;
    null === (e = this._timerComponent) || void 0 === e || e.clearAllTimer();
    null === (t = this._dynamicAccumComp) || void 0 === t || t.clear();
    this.clearBehaviorParser();
    this.stopShake();
    this.clearEffectLayer();
    null === (o = this._guideRootNode) || void 0 === o || o.removeAllChildren();
    null === (n = this._scoreItem) || void 0 === n || n.resetForRestart();
  }
  onDisplayFinish(e, t, o, n) {
    this.delegate.pushInput({
      inputType: EGameInputEnum.DisplaySimulator,
      displayInputType: e,
      names: o,
      logIndex: n
    });
  }
  onGameShow() {
    this._isPauseUpdate = false;
    this.delegate && this.delegate._gameTime && this.delegate._gameTime.onGameShow();
  }
  onGameHide() {
    this._isPauseUpdate = true;
    this.delegate && this.delegate._gameTime && this.delegate._gameTime.onGameHide();
  }
  onAdShowStart() {
    this._isShowAd = true;
  }
  onAdShowEnd() {
    this._isShowAd = false;
  }
  update(e) {
    var t,
      o,
      n,
      i = e * this._timeScale;
    this._dynamicAccumComp.update(i);
    this._timerComponent.update(i);
    if (this._startSimulator) {
      null === (t = this.delegate._gameTime) || void 0 === t || t.update(e);
      null === (o = this.delegate) || void 0 === o || o.updateTime(e);
    }
    this._isPauseUpdate || this._isShowAd || null === (n = this._gameBehaviorParser) || void 0 === n || n.update(e);
  }
  setSwallowEventNodeActive(e) {
    this._swallowEventNode.active = e;
  }
  registerScreenTouchEnd(e, t, o) {
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
  }
  unregisterScreenTouchEnd() {
    if (this._screenTouchEndCallback) {
      if (this._touchBlockNode && cc.isValid(this._touchBlockNode)) {
        this._touchBlockNode.destroy();
        this._touchBlockNode = null;
      }
      this._screenTouchEndCallback = null;
      this._screenTouchEndTarget = null;
    }
  }
  initAnimations() {
    this._timerComponent = new TimerComponent();
    this._dynamicAccumComp = new DynamicAccumComp();
  }
  @mj.traitEvent("MainGmVw_calcAreaSz")
  calcRectGameAreaTransformSize(e) {
    var t = this._gameNode.getChildByName("rectGameArea").getContentSize(),
      o = this._gameNode.getChildByName("nodeTop"),
      n = this._gameNode.getChildByName("nodeBottom");
    o.getComponent(cc.Widget).updateAlignment();
    n.getComponent(cc.Widget).updateAlignment();
    var i = o.convertToWorldSpaceAR(cc.v2(0, -o.height * o.anchorY)),
      r = n.convertToWorldSpaceAR(cc.v2(0, n.height * (1 - n.anchorY))),
      a = o.parent.convertToNodeSpaceAR(i),
      l = o.parent.convertToNodeSpaceAR(r),
      s = (a = this.changeTopLocalBottom(a)).y - l.y,
      c = this.getFinalMiddleY(a, l);
    t.height = s;
    this._gameNode.getChildByName("rectGameArea").setContentSize(t);
    this._offsetY = c;
    e(t, c);
    return t;
  }
  changeTopLocalBottom(e) {
    return e;
  }
  @mj.traitEvent("MainGmVw_getMidY")
  getFinalMiddleY(e, t) {
    return (e.y + t.y) / 2;
  }
  onSimulatorInput(e) {
    this.delegate.pushInput(e);
  }
  /**
   * 仅改 modifyWin 不会排队结算动效；主线/旅行等走 SkipAutoMerge 与「跳过自动合并」相同；Tile2 单独排队 Tile2End。
   */
  devGmRequestInstantWin() {
    var e = this.delegate,
      t = null == e ? void 0 : e._gameSimulator,
      o = null == t ? void 0 : t.gameContext;
    if (!t || !o) return;
    if (o.gameType === MjGameType.Tile2Normal) {
      this._devGmDisplayTile2Win(t);
      return;
    }
    this.onSimulatorInput({
      inputType: EGameInputEnum.SkipAutoMerge,
      type: "devGm"
    });
  }
  _devGmDisplayTile2Win(e) {
    var t,
      o = e._gameController,
      n = null == o ? void 0 : o._inputMap,
      i = null == n ? void 0 : n[EGameInputEnum.UserOperate];
    if (!i) return;
    var r = {
        inputType: EGameInputEnum.UserOperate
      },
      a = e.gameContext;
    try {
      i.input = r;
      i.initRoot(r, "DevGmTile2Win");
      var l = a.gameTimeData.time;
      a.gameModifier.modifyWinForTile2();
      var s = a.getGameData(),
        c = new Tile2BeforeEndEffect({}),
        u = new Tile2EndEffect({
          score: s.getScore(),
          settlementScore: s.getSettlementScore(),
          perfectMaxScore: a.scoreModifier.getPerfectMaxScore(),
          curLv: s.getLevelId(),
          comboNum: s.getComboNum(),
          curMaxCombo: s.getCurMaxCombo(),
          gameDuration: l,
          prevScore: s.getLastWinScore(),
          prevComboNum: s.getLastWinComboNum(),
          prevGameDuration: s.getLastWinDuration(),
          maxComboNum: s.getCurLevelComboMaxLimit()
        }),
        p = i.addParallelParentNode(),
        f = i.addSerialParentNode(p);
      i.addSerialNode(f, c);
      i.addSerialNode(f, u);
      var d = i.parse(r);
      if (d) {
        e._logCount++;
        r.logIndex = e._logCount;
        e._disPlayCount++;
        null === (t = e._gameDisplay) || void 0 === t || t.display(EGameInputEnum.UserOperate, d, r.logIndex);
      } else {
        var h;
        null === (h = e._gameDisplay) || void 0 === h || h.display(EGameInputEnum.UserOperate, null, 0);
      }
    } catch (m) {
      cc.warn("[DEV GM] Tile2 instant win failed", m);
    }
  }
  clearBehaviorParser() {
    if (this._gameBehaviorParser) {
      this._gameBehaviorParser.abort();
      this._gameBehaviorParser.reset();
      this._gameBehaviorParser = null;
    }
  }
  onSimulatorNextLevel() {
    var e = this._gameNode.getChildByName("nodeBottom"),
      t = this._gameNode.getChildByName("nodeTop").getChildByName("btnSettings");
    e.active = true;
    cc.isValid(t) && (t.active = true);
    this.delegate.startNextLevel();
  }
  showBottomNode() {
    this._gameNode.getChildByName("nodeBottom").active = true;
  }
  startSimulator() {
    this._startSimulator = true;
  }
  initGm() {
    var DEV_GM_FORCE = false,
      g = typeof globalThis !== "undefined" ? globalThis : void 0,
      envGm = !!(g && (g["CC_DEBUG"] || g["CC_DEV"])),
      w = typeof window !== "undefined" ? window : void 0,
      hasGmQuery = false;
    try {
      if (w && w.location && typeof w.location.search === "string") {
        var search = w.location.search;
        if (search.indexOf("?", 1) !== -1) {
          search = "?" + search.slice(1).replace(/\?/g, "&");
        }
        var q = new URLSearchParams(search);
        hasGmQuery = q.get("gm") === "1" || q.get("debug") === "1";
      }
    } catch (e) {}
    if (!DEV_GM_FORCE && !envGm && !hasGmQuery) return;
    var t = this;
    this._devInstantWinOnKey = function (o) {
      var n = o.keyCode === 87 || o.keyCode === cc.macro.KEY.w;
      n && t.devGmRequestInstantWin();
    };
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._devInstantWinOnKey, this);
    cc.log("[DEV GM] MainGameView: 已注册，对局中按 W 一键胜利。Web：地址用 ?_t=xxx&gm=1（多个参数用 &，不要两个 ?），并先点击画布。");
  }
  stopShake() {
    if (this._shakeTween) {
      this._shakeTween.stop();
      this._shakeTween = void 0;
    }
    this._oriPos && (this.node.position = this._oriPos);
  }
  playShake() {
    this._shakeTween && this._shakeTween.stop();
    var e = this.node.position.x,
      t = this.node.position.y;
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
  }
  initTheme() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = null == e ? void 0 : e.getTheme();
    this.onChangeTheme(this.gameType, t, true);
  }
  onChangeTheme(e, t, o = false) {
    if (o || e == this.gameType) {
      t = this.beforeChangeTheme(e, t, o);
      var n = UserModel.getInstance().getGameDataByGameType(this.gameType);
      n && n.setTheme(t);
      this.afterChangeTheme(e, t, o);
    }
  }
  @mj.traitEvent("MainGmVw_beChangeTheme")
  beforeChangeTheme(e, t, o = false) {
    return t;
  }
  @mj.traitEvent("MainGmVw_afChangeTheme")
  afterChangeTheme(e, t, o = false) {}
  @mj.traitEvent("MainGmVw_resetTheme")
  onResetToDefaultTheme(e, t) {
    var o = UserModel.getInstance().getGameDataByGameType(this.gameType);
    o && o.setTheme(t);
  }
}