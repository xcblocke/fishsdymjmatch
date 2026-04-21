"use strict";
cc._RF.push(module, '1ad8aTEj/FAW5f3juZWsrhw', 'MainGameController');
// Scripts/game/controller/MainGameController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("../../types/DynamicCurve");
var ExtractTool_1 = require("../../core/extractQuestion/ExtractTool");
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var GameContext_1 = require("../../core/simulator/context/GameContext");
var GameSimulator_1 = require("../../util/GameSimulator");
var RandomGenerator_1 = require("../../core/simulator/structures/RandomGenerator");
var BehaviorFactory_1 = require("../../BehaviorFactory");
var enumRes_1 = require("../../constant/enumRes");
var GameTime_1 = require("../../core/view/GameInteraction/GameTime");
var GameObjectPool_1 = require("../../core/view/pool/GameObjectPool");
var ViewController_1 = require("../../framework/controller/ViewController");
var ControllerManager_1 = require("../../framework/manager/ControllerManager");
var LowPriorityBundleLoader_1 = require("../../gamePlay/base/ui/LowPriorityBundleLoader");
var DGameBtnClick_1 = require("../../dot/DGameBtnClick");
var CardUtil_1 = require("../../gamePlay/user/CardUtil");
var UserModel_1 = require("../../gamePlay/user/UserModel");
var MainGameView_1 = require("../view/MainGameView");
var MainGameController = /** @class */ (function (_super) {
    __extends(MainGameController, _super);
    function MainGameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = MainGameView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this._gameObjectPool = null;
        _this._gameType = GameTypeEnums_1.MjGameType.Normal;
        _this._gameSimulator = null;
        _this._size = new cc.Size(0, 0);
        _this._offsetY = 0;
        return _this;
    }
    Object.defineProperty(MainGameController.prototype, "gameObjectPool", {
        get: function () {
            return this._gameObjectPool;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainGameController.prototype, "gameType", {
        get: function () {
            return this._gameType;
        },
        enumerable: false,
        configurable: true
    });
    MainGameController.prototype.getMessageListeners = function () {
        return {};
    };
    MainGameController.prototype.initDependRes = function () {
        var e = CardUtil_1.default.getAtlasName();
        this.preloadResMap.SpriteAtlas = [e];
        var t = this._gameType === GameTypeEnums_1.MjGameType.Tile2Normal;
        this.preloadResMap.Prefab = t ? [enumRes_1.PrefabPath.LockSide] : [enumRes_1.PrefabPath.EffectCombo, enumRes_1.PrefabPath.CollisionEffect, enumRes_1.PrefabPath.ScoreFloatNormal, enumRes_1.PrefabPath.ScoreFloatCombo, enumRes_1.PrefabPath.MotivationalWords, enumRes_1.PrefabPath.MotivationalWordsEffect, enumRes_1.PrefabPath.LockSide, enumRes_1.PrefabPath.ScoreFlyTrail];
        this.preloadResMap.JsonAsset = ["config/card/card_layout"];
        this.preloadResMap.SkeletonData = ["spine/rollcard/gameplay_flip"];
    };
    MainGameController.prototype.initObjectPool = function () {
        var e = this;
        this._gameObjectPool = new GameObjectPool_1.default();
        (this._gameType === GameTypeEnums_1.MjGameType.Tile2Normal ? [{
                pool: enumRes_1.PoolName.LockSide,
                path: enumRes_1.PrefabPath.LockSide,
                size: 1
            }] : [{
                pool: enumRes_1.PoolName.EffectCombo,
                path: enumRes_1.PrefabPath.EffectCombo,
                size: 1
            }, {
                pool: enumRes_1.PoolName.CollisionEffect,
                path: enumRes_1.PrefabPath.CollisionEffect,
                size: 1
            }, {
                pool: enumRes_1.PoolName.CollisionSpecialEffect,
                path: enumRes_1.PrefabPath.CollisionEffect,
                size: 1
            }, {
                pool: enumRes_1.PoolName.ScoreFloatNormal,
                path: enumRes_1.PrefabPath.ScoreFloatNormal,
                size: 1
            }, {
                pool: enumRes_1.PoolName.ScoreFloatCombo,
                path: enumRes_1.PrefabPath.ScoreFloatCombo,
                size: 1
            }, {
                pool: enumRes_1.PoolName.MotivationalWords,
                path: enumRes_1.PrefabPath.MotivationalWords,
                size: 1
            }, {
                pool: enumRes_1.PoolName.MotivationalWordsEffect,
                path: enumRes_1.PrefabPath.MotivationalWordsEffect,
                size: 1
            }, {
                pool: enumRes_1.PoolName.LockSide,
                path: enumRes_1.PrefabPath.LockSide,
                size: 1
            }, {
                pool: enumRes_1.PoolName.ScoreFlyTrail,
                path: enumRes_1.PrefabPath.ScoreFlyTrail,
                size: 1
            }]).forEach(function (t) {
            var o = t.pool, n = t.path, i = t.size, r = e.getRes(n, cc.Prefab);
            if (r) {
                e._gameObjectPool.createObjectPool(o, r, i);
            }
            else {
                console.error("预加载的 Prefab 不存在: " + n);
            }
        });
        this._gameObjectPool.initEmptyNode();
    };
    MainGameController.prototype.createCardConfigMap = function () {
        var e, t, o = CardUtil_1.default.getList(), n = new Map();
        try {
            for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                n.set(l.id, l);
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
        return n;
    };
    MainGameController.prototype.createCardLayoutConfig = function () {
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
    };
    MainGameController.prototype.getRestartLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = (e.getLevelData(), e.getOriginalLevelData());
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
    };
    MainGameController.prototype.getLocalLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = e.getLevelData();
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
    };
    MainGameController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = this.getTileTypes(o);
        ExtractTool_1.default.getInstance().getContentData({
            levelIndex: o.getLevelGenIndex(),
            levelID: n,
            dieResult: o.getDieResult(),
            gameType: this.gameType
        }).then(function (a) {
            o.setDieResult(1);
            var l = a[0], c = a[1], u = a[2], p = a[3], f = a[4], d = a[5];
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
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
    };
    MainGameController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    MainGameController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        this.isAMIntr() && this.handleAutoMergeInterrupt();
        var n = this.getIsNewGame();
        ExtractTool_1.default.getInstance().initData(this.gameType).then(function () {
            if (e) {
                var i = o.getRestartLevelData();
                t(i);
            }
            else if (n)
                o.getNewLevelData(function (e) {
                    t(e);
                });
            else {
                i = o.getLocalLevelData();
                t(i);
            }
        });
    };
    MainGameController.prototype.isAMIntr = function () {
        return true;
    };
    MainGameController.prototype.handleAutoMergeInterrupt = function () {
        var e = UserModel_1.default.getInstance().normalData, t = e.getHasTriggeredFullCombo(), o = e.getHasTriggeredRewardCombo(), n = t || o, i = e.getOriginalLevelData();
        n && i && e.setIsEnd(true);
    };
    MainGameController.prototype.getTileTypes = function () {
        return "";
    };
    MainGameController.prototype.initGameTime = function () {
        var e = this, t = new GameTime_1.GameTime(function () {
            e.pushInput({
                inputType: GameInputEnum_1.EGameInputEnum.UpdateTime
            });
        });
        this._gameTime = t;
    };
    MainGameController.prototype.getGameTime = function () {
        return this._gameTime;
    };
    MainGameController.prototype.initGameContext = function () {
        var e = new GameContext_1.GameContext();
        e.setCardConfigMap(this.createCardConfigMap());
        e.setCardLayoutConfig(this.createCardLayoutConfig());
        e.setGameType(this.gameType);
        e.setRandomGenerator(new RandomGenerator_1.RandomGenerator());
        return e;
    };
    MainGameController.prototype.initGameSimulator = function (e) {
        var t = new GameSimulator_1.GameSimulator(e);
        this._gameSimulator = t;
        return t;
    };
    MainGameController.prototype.playMusic = function () {
        mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
        this.fadeBGMIn();
    };
    MainGameController.prototype.fadeBGMIn = function () {
        mj.audioManager.fadeBGMIn();
    };
    MainGameController.prototype.startSimulator = function (e, t, o) {
        var n = this.initGameContext();
        n.setOffsetY(o);
        BehaviorFactory_1.BehaviorFactory.init();
        this.initGameSimulator(n);
        this.initGameTime();
        this.playMusic();
        DGameBtnClick_1.DotGameBtnClick.dotBgmOccupation(DGameBtnClick_1.EBgmOccupationClickType.Game);
        this.initInput(e, t, o);
    };
    MainGameController.prototype.initInput = function (e, t) {
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartSimulator,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartInit,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.SetLevel,
            levelData: e,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.ChooseLayout,
            contentSize: t,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitView,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitViewFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.EnterAnimation,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.EnterAnimationFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
    };
    MainGameController.prototype.pushInput = function (e) {
        var t, o;
        if (this._gameSimulator && this._gameTime)
            if (e.inputType != GameInputEnum_1.EGameInputEnum.Restart) {
                e.inputType === GameInputEnum_1.EGameInputEnum.UpdateTime && (e.time = this._gameTime.deltaTime);
                null === (o = this._gameSimulator) || void 0 === o || o.input(e);
                this.tryOpenLowPriorityBundle(e);
            }
            else {
                null === (t = this._gameSimulator) || void 0 === t || t.input(e);
                this.viewDoAction("clearAllNode");
                0 == e.dieResult && UserModel_1.default.getInstance().getCurrentGameData().setDieResult(0);
                this.startNextLevel(true);
            }
    };
    MainGameController.prototype.tryOpenLowPriorityBundle = function (e) {
        e.inputType === GameInputEnum_1.EGameInputEnum.DisplaySimulator && e.displayInputType === GameInputEnum_1.EGameInputEnum.EnterAnimationFinish && LowPriorityBundleLoader_1.default.getInstance().start(true);
    };
    MainGameController.prototype.tryCloseOtherGameController = function () {
        var e, t, o = new Map();
        o.set(GameTypeEnums_1.MjGameType.Normal, "MainGameController");
        o.set(GameTypeEnums_1.MjGameType.Travel, "TravelGameController");
        o.set(GameTypeEnums_1.MjGameType.DailyChallenge, "DailyChallengeController");
        o.set(GameTypeEnums_1.MjGameType.Classic, "ClassicController");
        o.set(GameTypeEnums_1.MjGameType.Tile2Normal, "Tile2GameController");
        try {
            for (var n = __values(o.entries()), i = n.next(); !i.done; i = n.next()) {
                var r = __read(i.value, 2), s = r[0], c = r[1];
                s !== this.gameType && ControllerManager_1.default.getInstance().closeViewByName(c);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    MainGameController.prototype.viewDidLoad = function () {
        var t = this;
        _super.prototype.viewDidLoad.call(this);
        this.tryCloseOtherGameController();
        this.initObjectPool();
        this.viewDoAction("calcRectGameAreaTransformSize", function (e, o) {
            t._size = e;
            t._offsetY = o;
        });
        this.viewDoAction("initCountBlockNode");
        this.startNextLevel();
    };
    MainGameController.prototype.viewDidShow = function () {
        _super.prototype.viewDidShow.call(this);
    };
    MainGameController.prototype.onUIDestroy = function () {
        this._gameObjectPool.clearAllPools();
    };
    MainGameController.prototype.resetGameTime = function () {
        this._gameTime.reset();
    };
    MainGameController.prototype.startNextLevel = function (e) {
        if (e === void 0) { e = false; }
        var t, o = this;
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
    };
    MainGameController.prototype.updateTime = function (e) {
        var t, o, n, i;
        if (this._gameSimulator) {
            null === (o = null === (t = this._gameSimulator.gameContext) || void 0 === t ? void 0 : t.getGameTracker()) || void 0 === o || o.advanceStepTime(e);
            null === (i = null === (n = this._gameSimulator.gameContext) || void 0 === n ? void 0 : n.getGameData()) || void 0 === i || i.advancePlayTime(e);
        }
    };
    MainGameController.prototype.close = function () {
        var t;
        _super.prototype.close.call(this);
        null === (t = this._gameSimulator) || void 0 === t || t.dispose();
        this._gameSimulator = null;
    };
    MainGameController.nextLevelStr = "";
    __decorate([
        mj.traitEvent("MainGameCtrl_initRes")
    ], MainGameController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_crtCardLyt")
    ], MainGameController.prototype, "createCardLayoutConfig", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_isAMIntr")
    ], MainGameController.prototype, "isAMIntr", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_getTile")
    ], MainGameController.prototype, "getTileTypes", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_fadeBGMIn")
    ], MainGameController.prototype, "fadeBGMIn", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_vwLoad")
    ], MainGameController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_vwShow")
    ], MainGameController.prototype, "viewDidShow", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_uiDes")
    ], MainGameController.prototype, "onUIDestroy", null);
    __decorate([
        mj.traitEvent("MainGameCtrl_nextLv")
    ], MainGameController.prototype, "startNextLevel", null);
    MainGameController = __decorate([
        mj.class("MainGameController")
    ], MainGameController);
    return MainGameController;
}(ViewController_1.default));
exports.default = MainGameController;

cc._RF.pop();