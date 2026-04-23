import DynamicCurve from '../../types/DynamicCurve';
import ExtractTool from '../../core/extractQuestion/ExtractTool';
import ExtractNormalLevels from '../../core/extractQuestion/ExtractNormalLevels';
import { EGameInputEnum, InputRunType } from '../../simulator/constant/GameInputEnum';
import { MjGameType, EAudioID } from '../../core/simulator/constant/GameTypeEnums';
import { GameContext } from '../../core/simulator/context/GameContext';
import { GameSimulator } from '../../util/GameSimulator';
import { RandomGenerator } from '../../core/simulator/structures/RandomGenerator';
import { BehaviorFactory } from '../../BehaviorFactory';
import { PrefabPath, PoolName } from '../../constant/enumRes';
import { GameTime } from '../../core/view/GameInteraction/GameTime';
import GameObjectPool from '../../core/view/pool/GameObjectPool';
import ViewController, { viewMode } from '../../framework/controller/ViewController';
import ControllerManager from '../../framework/manager/ControllerManager';
import { resManager } from '../../framework/manager/ResManager';
import LowPriorityBundleLoader from '../../gamePlay/base/ui/LowPriorityBundleLoader';
import { DotGameBtnClick, EBgmOccupationClickType } from '../../dot/DGameBtnClick';
import CardUtil from '../../gamePlay/user/CardUtil';
import UserModel from '../../gamePlay/user/UserModel';
import MainGameView from '../view/MainGameView';
@mj.class("MainGameController")
export default class MainGameController extends ViewController {
  viewClass = MainGameView;
  viewMode = viewMode.SCENE;
  _gameObjectPool = null;
  _gameType = MjGameType.Normal;
  _gameSimulator = null;
  _size = new cc.Size(0, 0);
  _offsetY = 0;
  _customDifficultyConfigPromise = null;
  _customBoardCache = new Map();
  _customBoardDifficultyCache = new Map();
  static nextLevelStr = "";
  get gameObjectPool() {
    return this._gameObjectPool;
  }
  get gameType() {
    return this._gameType;
  }
  getMessageListeners() {
    return {};
  }
  @mj.traitEvent("MainGameCtrl_initRes")
  initDependRes() {
    var e = CardUtil.getAtlasName();
    this.preloadResMap.SpriteAtlas = [e];
    var t = this._gameType === MjGameType.Tile2Normal;
    this.preloadResMap.Prefab = t ? [PrefabPath.LockSide] : [PrefabPath.EffectCombo, PrefabPath.CollisionEffect, PrefabPath.ScoreFloatNormal, PrefabPath.ScoreFloatCombo, PrefabPath.MotivationalWords, PrefabPath.MotivationalWordsEffect, PrefabPath.LockSide, PrefabPath.ScoreFlyTrail];
    this.preloadResMap.JsonAsset = ["config/card/card_layout"];
    this.preloadResMap.SkeletonData = ["spine/rollcard/gameplay_flip"];
  }
  initObjectPool() {
    var e = this;
    this._gameObjectPool = new GameObjectPool();
    (this._gameType === MjGameType.Tile2Normal ? [{
      pool: PoolName.LockSide,
      path: PrefabPath.LockSide,
      size: 1
    }] : [{
      pool: PoolName.EffectCombo,
      path: PrefabPath.EffectCombo,
      size: 1
    }, {
      pool: PoolName.CollisionEffect,
      path: PrefabPath.CollisionEffect,
      size: 1
    }, {
      pool: PoolName.CollisionSpecialEffect,
      path: PrefabPath.CollisionEffect,
      size: 1
    }, {
      pool: PoolName.ScoreFloatNormal,
      path: PrefabPath.ScoreFloatNormal,
      size: 1
    }, {
      pool: PoolName.ScoreFloatCombo,
      path: PrefabPath.ScoreFloatCombo,
      size: 1
    }, {
      pool: PoolName.MotivationalWords,
      path: PrefabPath.MotivationalWords,
      size: 1
    }, {
      pool: PoolName.MotivationalWordsEffect,
      path: PrefabPath.MotivationalWordsEffect,
      size: 1
    }, {
      pool: PoolName.LockSide,
      path: PrefabPath.LockSide,
      size: 1
    }, {
      pool: PoolName.ScoreFlyTrail,
      path: PrefabPath.ScoreFlyTrail,
      size: 1
    }]).forEach(function (t) {
      var o = t.pool,
        n = t.path,
        i = t.size,
        r = e.getRes(n, cc.Prefab);
      if (r) {
        e._gameObjectPool.createObjectPool(o, r, i);
      } else {
        console.error("预加载的 Prefab 不存在: " + n);
      }
    });
    this._gameObjectPool.initEmptyNode();
  }
  createCardConfigMap() {
    var e,
      t,
      o = CardUtil.getList(),
      n = new Map();
    try {
      for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
        var l = r.value;
        n.set(l.id, l);
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
    return n;
  }
  @mj.traitEvent("MainGameCtrl_crtCardLyt")
  createCardLayoutConfig() {
    var e = this.getRes("config/card/card_layout", cc.JsonAsset, "mainRes");
    if (!e || !e.json) {
      console.error("[MainGameController] card_layout.json 加载失败，使用默认配置");
      return {
        cardSize: [157, 195],
        cardSpace: [-7, -11],
        cardSizeRight: 15,
        cardSizeBottom: 21,
        selectImgSize: [207, 245],
        hintEffScale: 1,
        shadowSize: [213, 251],
        shadowSizeUp: [233, 271]
      };
    }
    var t = e.json;
    return {
      cardSize: t.cardSize,
      cardSpace: t.cardSpace,
      cardSizeRight: t.cardSizeRight,
      cardSizeBottom: t.cardSizeBottom,
      selectImgSize: t.selectImgSize,
      hintEffScale: t.hintEffScale,
      shadowSize: t.shadowSize,
      shadowSizeUp: t.shadowSizeUp
    };
  }
  getRestartLevelData() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelId(),
      o = (e.getLevelData(), e.getOriginalLevelData());
    return {
      originalLevelStr: o,
      levelStr: e.getOriWithSpecialCards() || o,
      levelDifficulty: e.getLevelDifficulty(),
      isNewGame: true,
      gameType: this.gameType,
      levelId: t,
      tileTypes: e.getTileTypes(),
      isRestart: true
    };
  }
  getLocalLevelData() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelId(),
      o = e.getLevelData();
    return {
      originalLevelStr: e.getOriginalLevelData(),
      levelStr: o,
      levelDifficulty: e.getLevelDifficulty(),
      isNewGame: false,
      gameType: this.gameType,
      levelId: t,
      tileTypes: e.getTileTypes(),
      isRestart: false
    };
  }
  getNewLevelData(e) {
    var t = this,
      o = UserModel.getInstance().getGameDataByGameType(this.gameType),
      n = o.getLevelId(),
      i = o.getOriginalLevelData(),
      r = this.getTileTypes(o);
    this.getCustomDifficultyContent(n, o).then(function (a) {
      if (a) {
        o.setDieResult(1);
        o.incrementLevelGenIndex();
        var l = a[0],
          c = a[1],
          u = a[2],
          p = a[3],
          f = a[4];
        console.log("[Difficulty] custom level=" + n + " difficulty=" + c + " levelName=" + p);
        e({
          levelStr: l,
          levelDifficulty: c,
          originalLevelStr: i,
          isNewGame: true,
          gameType: t.gameType,
          levelId: n,
          tileTypes: r,
          isRestart: false,
          levelIndex: u,
          levelName: p,
          dimensionName: f,
          isExtractLevel: true
        });
        return;
      }
      ExtractTool.getInstance().getContentData({
        levelIndex: o.getLevelGenIndex(),
        levelID: n,
        dieResult: o.getDieResult(),
        gameType: t.gameType
      }).then(function (a) {
        o.setDieResult(1);
        var l = a[0],
          c = a[1],
          u = a[2],
          p = a[3],
          f = a[4],
          d = a[5];
        console.log("[Difficulty] extract level=" + n + " difficulty=" + c + " levelName=" + p);
        DynamicCurve.instance.supportMode(t.gameType) && DynamicCurve.instance.gameStart({
          gameType: t.gameType,
          levelId: n,
          fileName: p,
          levelStr: l,
          levelIndex: Number(u)
        });
        d && o.incrementLevelGenIndex();
        e({
          levelStr: l,
          levelDifficulty: c,
          originalLevelStr: i,
          isNewGame: true,
          gameType: t.gameType,
          levelId: n,
          tileTypes: r,
          isRestart: false,
          levelIndex: u,
          levelName: p,
          dimensionName: f,
          isExtractLevel: true
        });
      });
    });
  }
  getCustomDifficultyMode(e) {
    var t = e.modeStorageKey || "__custom_difficulty_mode__",
      o = cc.sys.localStorage.getItem(t);
    return "easy" === o || "normal" === o || "hard" === o || "expert" === o ? o : e.defaultMode || "normal";
  }
  getCustomDifficultyConfig() {
    var e = this;
    if (this._customDifficultyConfigPromise) return this._customDifficultyConfigPromise;
    this._customDifficultyConfigPromise = resManager.loadRes("config/custom_level_difficulty", cc.JsonAsset, "mainRes").then(function (t) {
      if (!t || !t.json) return null;
      var o = t.json;
      t.decRef();
      return o;
    }).catch(function () {
      console.warn("[Difficulty] custom config load failed: config/custom_level_difficulty");
      e._customDifficultyConfigPromise = Promise.resolve(null);
      return null;
    });
    return this._customDifficultyConfigPromise;
  }
  getCustomDifficultyRule(e, t) {
    if (!e || !Array.isArray(e.rules)) return null;
    return e.rules.find(function (e) {
      return t >= Number(e.start) && t <= Number(e.end);
    }) || null;
  }
  getCustomBoardData(e) {
    var t = this;
    if (this._customBoardCache.has(e)) return Promise.resolve(this._customBoardCache.get(e));
    return resManager.loadRes("config/boards/" + e, cc.JsonAsset, "mainRes").then(function (o) {
      if (!o || !Array.isArray(o.json) || 0 === o.json.length) return null;
      t._customBoardCache.set(e, o.json);
      o.decRef();
      return o.json;
    }).catch(function () {
      return null;
    });
  }
  resolveCustomTableName(e, t) {
    var o = ExtractNormalLevels.getInstance().getAllNamesData() || [];
    if (o.includes(e)) return e;
    var n = e + "_",
      i = o.filter(function (e) {
        return "string" == typeof e && e.indexOf(n) === 0;
      });
    if (0 === i.length) return e;
    var r = (Math.abs(t) || 0) % i.length;
    return i[r];
  }
  getLegacyReferenceDifficulty(e, t) {
    if (!t) return Promise.resolve(null);
    return ExtractTool.getInstance().getContentData({
      levelIndex: t.getLevelGenIndex(),
      levelID: e,
      dieResult: t.getDieResult(),
      gameType: this.gameType
    }).then(function (e) {
      var t = Number(null == e ? void 0 : e[1]);
      return isNaN(t) ? null : t;
    }).catch(function () {
      return null;
    });
  }
  getCustomBoardDifficultyRows(e, t) {
    if (this._customBoardDifficultyCache.has(e)) return this._customBoardDifficultyCache.get(e);
    for (var o = ExtractNormalLevels.getInstance(), n = [], i = 0; i < t.length; i++) {
      var r = Number(t[i]),
        a = o.getByteDataByIndex(e, r),
        l = Number(null == a ? void 0 : a.difficulty);
      !isNaN(r) && !isNaN(l) && n.push({
        index: r,
        difficulty: l
      });
    }
    this._customBoardDifficultyCache.set(e, n);
    return n;
  }
  getCustomDifficultyContent(e, gameData?) {
    if (this.gameType !== MjGameType.Normal) {
      console.warn("[Difficulty] custom skip level=" + e + " reason=game_type gameType=" + this.gameType);
      return Promise.resolve(null);
    }
    if (1 === e) {
      console.log("[Difficulty] custom skip level=1 reason=tutorial_level");
      return Promise.resolve(null);
    }
    return this.getCustomDifficultyConfig().then(function (cfg) {
      if (!cfg) {
        console.warn("[Difficulty] custom skip level=" + e + " reason=no_config");
        return null;
      }
      if (false === cfg.enabled) {
        console.warn("[Difficulty] custom skip level=" + e + " reason=disabled");
        return null;
      }
      var o = this.getCustomDifficultyRule(cfg, e);
      if (!o) {
        console.warn("[Difficulty] custom skip level=" + e + " reason=no_rule");
        return null;
      }
      var n = this.getCustomDifficultyMode(cfg),
        i = o[n] || ("expert" === n ? o.hard : null);
      if (!i || !i.table) {
        console.warn("[Difficulty] custom skip level=" + e + " reason=no_mode_or_table mode=" + n);
        return null;
      }
      var r = Number(o.start),
        a = isNaN(Number(i.offset)) ? 1 : Number(i.offset),
        l = isNaN(Number(i.step)) ? 1 : Number(i.step),
        s = isNaN(Number(i.groupSize)) ? isNaN(Number(o.groupSize)) ? 1 : Number(o.groupSize) : Number(i.groupSize),
        c = a - 1 + Math.floor((e - r) / Math.max(1, s)) * l,
        u = this.resolveCustomTableName(i.table, c);
      if (u !== i.table) {
        console.log("[Difficulty] custom table remap level=" + e + " from=" + i.table + " to=" + u);
      }
      var p = ExtractNormalLevels.getInstance().getAllIndexesInTable(u);
      if (!p || 0 === p.length) {
        console.warn("[Difficulty] custom miss level=" + e + " table=" + u + " reason=no_index");
        return null;
      }
      var f = (c % p.length + p.length) % p.length,
        d = Number(p[f]),
        h = Number(o.legacyDifficultyBias || i.legacyDifficultyBias || 0);
      if (isNaN(d)) {
        console.warn("[Difficulty] custom miss level=" + e + " table=" + u + " reason=bad_index");
        return null;
      }
      var y = function (t) {
        return ExtractNormalLevels.getInstance().getContentByTableAndIndex(u, t).then(function (o) {
          if (!o) {
            console.warn("[Difficulty] custom miss level=" + e + " table=" + u + " index=" + t + " reason=no_content");
          }
          return o;
        });
      };
      if (!gameData || false === cfg.alignLegacyDifficulty) return y(d);
      return this.getLegacyReferenceDifficulty(e, gameData).then(function (o) {
        if (null != o) {
          var n = this.getCustomBoardDifficultyRows(u, p);
          if (n.length > 0) {
            for (var i = isNaN(Number(cfg.legacyDifficultyScale)) ? 1 : Number(cfg.legacyDifficultyScale), r = isNaN(Number(cfg.legacyDifficultyOffset)) ? 0 : Number(cfg.legacyDifficultyOffset), a = o * i + r + h, l = n[0], s = Math.abs(l.difficulty - a), c = 1; c < n.length; c++) {
              var f = Math.abs(n[c].difficulty - a);
              if (f < s) {
                s = f;
                l = n[c];
              }
            }
            d = l.index;
            console.log("[Difficulty] custom align level=" + e + " table=" + u + " target=" + a + " picked=" + l.difficulty + " index=" + d);
          }
        }
        return y(d);
      }.bind(this));
    }.bind(this));
  }
  getIsNewGame() {
    var e = UserModel.getInstance().getGameDataByGameType(this.gameType),
      t = e.getLevelData(),
      o = e.getOriginalLevelData();
    return !t || !o;
  }
  getLevelData(e = false, t?) {
    var o = this;
    this.isAMIntr() && this.handleAutoMergeInterrupt();
    var n = this.getIsNewGame();
    ExtractTool.getInstance().initData(this.gameType).then(function () {
      if (e) {
        var i = o.getRestartLevelData();
        t(i);
      } else if (n) o.getNewLevelData(function (e) {
        t(e);
      });else {
        i = o.getLocalLevelData();
        t(i);
      }
    });
  }
  @mj.traitEvent("MainGameCtrl_isAMIntr")
  isAMIntr() {
    return true;
  }
  handleAutoMergeInterrupt() {
    var e = UserModel.getInstance().normalData,
      t = e.getHasTriggeredFullCombo(),
      o = e.getHasTriggeredRewardCombo(),
      n = t || o,
      i = e.getOriginalLevelData();
    n && i && e.setIsEnd(true);
  }
  @mj.traitEvent("MainGameCtrl_getTile")
  getTileTypes() {
    return "";
  }
  initGameTime() {
    var e = this,
      t = new GameTime(function () {
        e.pushInput({
          inputType: EGameInputEnum.UpdateTime
        });
      });
    this._gameTime = t;
  }
  getGameTime() {
    return this._gameTime;
  }
  initGameContext() {
    var e = new GameContext();
    e.setCardConfigMap(this.createCardConfigMap());
    e.setCardLayoutConfig(this.createCardLayoutConfig());
    e.setGameType(this.gameType);
    e.setRandomGenerator(new RandomGenerator());
    return e;
  }
  initGameSimulator(e) {
    var t = new GameSimulator(e);
    this._gameSimulator = t;
    return t;
  }
  playMusic() {
    mj.audioManager.playBGM(EAudioID.Bgm, true);
    this.fadeBGMIn();
  }
  @mj.traitEvent("MainGameCtrl_fadeBGMIn")
  fadeBGMIn() {
    mj.audioManager.fadeBGMIn();
  }
  startSimulator(e, t, o) {
    var n = this.initGameContext();
    n.setOffsetY(o);
    BehaviorFactory.init();
    this.initGameSimulator(n);
    this.initGameTime();
    this.playMusic();
    DotGameBtnClick.dotBgmOccupation(EBgmOccupationClickType.Game);
    this.initInput(e, t, o);
  }
  initInput(e, t) {
    this.pushInput({
      inputType: EGameInputEnum.StartSimulator,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.StartInit,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.SetLevel,
      levelData: e,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.ChooseLayout,
      contentSize: t,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.InitView,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.InitViewFinish,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.EnterAnimation,
      runType: InputRunType.Wait
    });
    this.pushInput({
      inputType: EGameInputEnum.EnterAnimationFinish,
      runType: InputRunType.Wait
    });
  }
  pushInput(e) {
    var t, o;
    if (this._gameSimulator && this._gameTime) if (e.inputType != EGameInputEnum.Restart) {
      e.inputType === EGameInputEnum.UpdateTime && (e.time = this._gameTime.deltaTime);
      null === (o = this._gameSimulator) || void 0 === o || o.input(e);
      this.tryOpenLowPriorityBundle(e);
    } else {
      null === (t = this._gameSimulator) || void 0 === t || t.input(e);
      this.viewDoAction("clearAllNode");
      0 == e.dieResult && UserModel.getInstance().getCurrentGameData().setDieResult(0);
      this.startNextLevel(true);
    }
  }
  tryOpenLowPriorityBundle(e) {
    e.inputType === EGameInputEnum.DisplaySimulator && e.displayInputType === EGameInputEnum.EnterAnimationFinish && LowPriorityBundleLoader.getInstance().start(true);
  }
  tryCloseOtherGameController() {
    var e,
      t,
      o = new Map();
    o.set(MjGameType.Normal, "MainGameController");
    o.set(MjGameType.Travel, "TravelGameController");
    o.set(MjGameType.DailyChallenge, "DailyChallengeController");
    o.set(MjGameType.Classic, "ClassicController");
    o.set(MjGameType.Tile2Normal, "Tile2GameController");
    try {
      for (var n = __values(o.entries()), i = n.next(); !i.done; i = n.next()) {
        var r = __read(i.value, 2),
          s = r[0],
          c = r[1];
        s !== this.gameType && ControllerManager.getInstance().closeViewByName(c);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (t = n.return) && t.call(n);
      } finally {
        if (e) throw e.error;
      }
    }
  }
  @mj.traitEvent("MainGameCtrl_vwLoad")
  viewDidLoad() {
    var t = this;
    super.viewDidLoad.call(this);
    this.tryCloseOtherGameController();
    this.initObjectPool();
    this.viewDoAction("calcRectGameAreaTransformSize", function (e, o) {
      t._size = e;
      t._offsetY = o;
    });
    this.viewDoAction("initCountBlockNode");
    this.startNextLevel();
  }
  @mj.traitEvent("MainGameCtrl_vwShow")
  viewDidShow() {
    super.viewDidShow.call(this);
  }
  @mj.traitEvent("MainGameCtrl_uiDes")
  onUIDestroy() {
    this._gameObjectPool.clearAllPools();
  }
  resetGameTime() {
    this._gameTime.reset();
  }
  @mj.traitEvent("MainGameCtrl_nextLv")
  startNextLevel(e = false) {
    var t,
      o = this;
    null === (t = this._gameSimulator) || void 0 === t || t.dispose();
    this._gameSimulator = null;
    this.viewDoAction("clearAllNode");
    this.getLevelData(e, function (e) {
      o.viewDoAction("clearAllNode");
      o.viewDoAction("showBottomNode");
      o.viewDoAction("initSimulatorDisplay");
      o.startSimulator(e, o._size, o._offsetY);
    });
    this.viewDoAction("startSimulator");
  }
  updateTime(e) {
    var t, o, n, i;
    if (this._gameSimulator) {
      null === (o = null === (t = this._gameSimulator.gameContext) || void 0 === t ? void 0 : t.getGameTracker()) || void 0 === o || o.advanceStepTime(e);
      null === (i = null === (n = this._gameSimulator.gameContext) || void 0 === n ? void 0 : n.getGameData()) || void 0 === i || i.advancePlayTime(e);
    }
  }
  close() {
    var t;
    super.close.call(this);
    null === (t = this._gameSimulator) || void 0 === t || t.dispose();
    this._gameSimulator = null;
  }
}