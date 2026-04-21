
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/controller/MainGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWUvY29udHJvbGxlci9NYWluR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUNwRCxzRUFBaUU7QUFDakUsd0VBQXNGO0FBQ3RGLDZFQUFtRjtBQUNuRix3RUFBdUU7QUFDdkUsMERBQXlEO0FBQ3pELG1GQUFrRjtBQUNsRix5REFBd0Q7QUFDeEQsa0RBQThEO0FBQzlELHFFQUFvRTtBQUNwRSxzRUFBaUU7QUFDakUsNEVBQXFGO0FBQ3JGLCtFQUEwRTtBQUMxRSwwRkFBcUY7QUFDckYseURBQW1GO0FBQ25GLHlEQUFvRDtBQUNwRCwyREFBc0Q7QUFDdEQscURBQWdEO0FBRWhEO0lBQWdELHNDQUFjO0lBQTlEO1FBQUEscUVBb2FDO1FBbmFDLGVBQVMsR0FBRyxzQkFBWSxDQUFDO1FBQ3pCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQUcsMEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDOUIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUE2WmYsQ0FBQztJQTNaQyxzQkFBSSw4Q0FBYzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHdDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRCxnREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztR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QUM7b0VBMkJ4QztJQWlHRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7c0RBR3RDO0lBVUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzBEQUdyQztJQStCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7dURBR3ZDO0lBNEZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt5REFZcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7eURBR3BDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3lEQUduQztJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs0REFjcEM7SUF0WmtCLGtCQUFrQjtRQUR0QyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBb2F0QztJQUFELHlCQUFDO0NBcGFELEFBb2FDLENBcGErQyx3QkFBYyxHQW9hN0Q7a0JBcGFvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHluYW1pY0N1cnZlIGZyb20gJy4uLy4uL3R5cGVzL0R5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0sIElucHV0UnVuVHlwZSB9IGZyb20gJy4uLy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IE1qR2FtZVR5cGUsIEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnRleHQvR2FtZUNvbnRleHQnO1xuaW1wb3J0IHsgR2FtZVNpbXVsYXRvciB9IGZyb20gJy4uLy4uL3V0aWwvR2FtZVNpbXVsYXRvcic7XG5pbXBvcnQgeyBSYW5kb21HZW5lcmF0b3IgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9zdHJ1Y3R1cmVzL1JhbmRvbUdlbmVyYXRvcic7XG5pbXBvcnQgeyBCZWhhdmlvckZhY3RvcnkgfSBmcm9tICcuLi8uLi9CZWhhdmlvckZhY3RvcnknO1xuaW1wb3J0IHsgUHJlZmFiUGF0aCwgUG9vbE5hbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudC9lbnVtUmVzJztcbmltcG9ydCB7IEdhbWVUaW1lIH0gZnJvbSAnLi4vLi4vY29yZS92aWV3L0dhbWVJbnRlcmFjdGlvbi9HYW1lVGltZSc7XG5pbXBvcnQgR2FtZU9iamVjdFBvb2wgZnJvbSAnLi4vLi4vY29yZS92aWV3L3Bvb2wvR2FtZU9iamVjdFBvb2wnO1xuaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlciBmcm9tICcuLi8uLi9nYW1lUGxheS9iYXNlL3VpL0xvd1ByaW9yaXR5QnVuZGxlTG9hZGVyJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJnbU9jY3VwYXRpb25DbGlja1R5cGUgfSBmcm9tICcuLi8uLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBNYWluR2FtZVZpZXcgZnJvbSAnLi4vdmlldy9NYWluR2FtZVZpZXcnO1xuQG1qLmNsYXNzKFwiTWFpbkdhbWVDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IE1haW5HYW1lVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5TQ0VORTtcbiAgX2dhbWVPYmplY3RQb29sID0gbnVsbDtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5Ob3JtYWw7XG4gIF9nYW1lU2ltdWxhdG9yID0gbnVsbDtcbiAgX3NpemUgPSBuZXcgY2MuU2l6ZSgwLCAwKTtcbiAgX29mZnNldFkgPSAwO1xuICBzdGF0aWMgbmV4dExldmVsU3RyID0gXCJcIjtcbiAgZ2V0IGdhbWVPYmplY3RQb29sKCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lT2JqZWN0UG9vbDtcbiAgfVxuICBnZXQgZ2FtZVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVUeXBlO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdhbWVDdHJsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHtcbiAgICB2YXIgZSA9IENhcmRVdGlsLmdldEF0bGFzTmFtZSgpO1xuICAgIHRoaXMucHJlbG9hZFJlc01hcC5TcHJpdGVBdGxhcyA9IFtlXTtcbiAgICB2YXIgdCA9IHRoaXMuX2dhbWVUeXBlID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICAgIHRoaXMucHJlbG9hZFJlc01hcC5QcmVmYWIgPSB0ID8gW1ByZWZhYlBhdGguTG9ja1NpZGVdIDogW1ByZWZhYlBhdGguRWZmZWN0Q29tYm8sIFByZWZhYlBhdGguQ29sbGlzaW9uRWZmZWN0LCBQcmVmYWJQYXRoLlNjb3JlRmxvYXROb3JtYWwsIFByZWZhYlBhdGguU2NvcmVGbG9hdENvbWJvLCBQcmVmYWJQYXRoLk1vdGl2YXRpb25hbFdvcmRzLCBQcmVmYWJQYXRoLk1vdGl2YXRpb25hbFdvcmRzRWZmZWN0LCBQcmVmYWJQYXRoLkxvY2tTaWRlLCBQcmVmYWJQYXRoLlNjb3JlRmx5VHJhaWxdO1xuICAgIHRoaXMucHJlbG9hZFJlc01hcC5Kc29uQXNzZXQgPSBbXCJjb25maWcvY2FyZC9jYXJkX2xheW91dFwiXTtcbiAgICB0aGlzLnByZWxvYWRSZXNNYXAuU2tlbGV0b25EYXRhID0gW1wic3BpbmUvcm9sbGNhcmQvZ2FtZXBsYXlfZmxpcFwiXTtcbiAgfVxuICBpbml0T2JqZWN0UG9vbCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5fZ2FtZU9iamVjdFBvb2wgPSBuZXcgR2FtZU9iamVjdFBvb2woKTtcbiAgICAodGhpcy5fZ2FtZVR5cGUgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwgPyBbe1xuICAgICAgcG9vbDogUG9vbE5hbWUuTG9ja1NpZGUsXG4gICAgICBwYXRoOiBQcmVmYWJQYXRoLkxvY2tTaWRlLFxuICAgICAgc2l6ZTogMVxuICAgIH1dIDogW3tcbiAgICAgIHBvb2w6IFBvb2xOYW1lLkVmZmVjdENvbWJvLFxuICAgICAgcGF0aDogUHJlZmFiUGF0aC5FZmZlY3RDb21ibyxcbiAgICAgIHNpemU6IDFcbiAgICB9LCB7XG4gICAgICBwb29sOiBQb29sTmFtZS5Db2xsaXNpb25FZmZlY3QsXG4gICAgICBwYXRoOiBQcmVmYWJQYXRoLkNvbGxpc2lvbkVmZmVjdCxcbiAgICAgIHNpemU6IDFcbiAgICB9LCB7XG4gICAgICBwb29sOiBQb29sTmFtZS5Db2xsaXNpb25TcGVjaWFsRWZmZWN0LFxuICAgICAgcGF0aDogUHJlZmFiUGF0aC5Db2xsaXNpb25FZmZlY3QsXG4gICAgICBzaXplOiAxXG4gICAgfSwge1xuICAgICAgcG9vbDogUG9vbE5hbWUuU2NvcmVGbG9hdE5vcm1hbCxcbiAgICAgIHBhdGg6IFByZWZhYlBhdGguU2NvcmVGbG9hdE5vcm1hbCxcbiAgICAgIHNpemU6IDFcbiAgICB9LCB7XG4gICAgICBwb29sOiBQb29sTmFtZS5TY29yZUZsb2F0Q29tYm8sXG4gICAgICBwYXRoOiBQcmVmYWJQYXRoLlNjb3JlRmxvYXRDb21ibyxcbiAgICAgIHNpemU6IDFcbiAgICB9LCB7XG4gICAgICBwb29sOiBQb29sTmFtZS5Nb3RpdmF0aW9uYWxXb3JkcyxcbiAgICAgIHBhdGg6IFByZWZhYlBhdGguTW90aXZhdGlvbmFsV29yZHMsXG4gICAgICBzaXplOiAxXG4gICAgfSwge1xuICAgICAgcG9vbDogUG9vbE5hbWUuTW90aXZhdGlvbmFsV29yZHNFZmZlY3QsXG4gICAgICBwYXRoOiBQcmVmYWJQYXRoLk1vdGl2YXRpb25hbFdvcmRzRWZmZWN0LFxuICAgICAgc2l6ZTogMVxuICAgIH0sIHtcbiAgICAgIHBvb2w6IFBvb2xOYW1lLkxvY2tTaWRlLFxuICAgICAgcGF0aDogUHJlZmFiUGF0aC5Mb2NrU2lkZSxcbiAgICAgIHNpemU6IDFcbiAgICB9LCB7XG4gICAgICBwb29sOiBQb29sTmFtZS5TY29yZUZseVRyYWlsLFxuICAgICAgcGF0aDogUHJlZmFiUGF0aC5TY29yZUZseVRyYWlsLFxuICAgICAgc2l6ZTogMVxuICAgIH1dKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbyA9IHQucG9vbCxcbiAgICAgICAgbiA9IHQucGF0aCxcbiAgICAgICAgaSA9IHQuc2l6ZSxcbiAgICAgICAgciA9IGUuZ2V0UmVzKG4sIGNjLlByZWZhYik7XG4gICAgICBpZiAocikge1xuICAgICAgICBlLl9nYW1lT2JqZWN0UG9vbC5jcmVhdGVPYmplY3RQb29sKG8sIHIsIGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIumihOWKoOi9veeahCBQcmVmYWIg5LiN5a2Y5ZyoOiBcIiArIG4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2dhbWVPYmplY3RQb29sLmluaXRFbXB0eU5vZGUoKTtcbiAgfVxuICBjcmVhdGVDYXJkQ29uZmlnTWFwKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSBDYXJkVXRpbC5nZXRMaXN0KCksXG4gICAgICBuID0gbmV3IE1hcCgpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobyksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gci52YWx1ZTtcbiAgICAgICAgbi5zZXQobC5pZCwgbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHIgJiYgIXIuZG9uZSAmJiAodCA9IGkucmV0dXJuKSAmJiB0LmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNYWluR2FtZUN0cmxfY3J0Q2FyZEx5dFwiKVxuICBjcmVhdGVDYXJkTGF5b3V0Q29uZmlnKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRSZXMoXCJjb25maWcvY2FyZC9jYXJkX2xheW91dFwiLCBjYy5Kc29uQXNzZXQsIFwibWFpblJlc1wiKTtcbiAgICBpZiAoIWUgfHwgIWUuanNvbikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltNYWluR2FtZUNvbnRyb2xsZXJdIGNhcmRfbGF5b3V0Lmpzb24g5Yqg6L295aSx6LSl77yM5L2/55So6buY6K6k6YWN572uXCIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2FyZFNpemU6IFsxNTcsIDE5NV0sXG4gICAgICAgIGNhcmRTcGFjZTogWy03LCAtMTFdLFxuICAgICAgICBjYXJkU2l6ZVJpZ2h0OiAxNSxcbiAgICAgICAgY2FyZFNpemVCb3R0b206IDIxLFxuICAgICAgICBzZWxlY3RJbWdTaXplOiBbMjA3LCAyNDVdLFxuICAgICAgICBoaW50RWZmU2NhbGU6IDEsXG4gICAgICAgIHNoYWRvd1NpemU6IFsyMTMsIDI1MV0sXG4gICAgICAgIHNoYWRvd1NpemVVcDogWzIzMywgMjcxXVxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHQgPSBlLmpzb247XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRTaXplOiB0LmNhcmRTaXplLFxuICAgICAgY2FyZFNwYWNlOiB0LmNhcmRTcGFjZSxcbiAgICAgIGNhcmRTaXplUmlnaHQ6IHQuY2FyZFNpemVSaWdodCxcbiAgICAgIGNhcmRTaXplQm90dG9tOiB0LmNhcmRTaXplQm90dG9tLFxuICAgICAgc2VsZWN0SW1nU2l6ZTogdC5zZWxlY3RJbWdTaXplLFxuICAgICAgaGludEVmZlNjYWxlOiB0LmhpbnRFZmZTY2FsZSxcbiAgICAgIHNoYWRvd1NpemU6IHQuc2hhZG93U2l6ZSxcbiAgICAgIHNoYWRvd1NpemVVcDogdC5zaGFkb3dTaXplVXBcbiAgICB9O1xuICB9XG4gIGdldFJlc3RhcnRMZXZlbERhdGEoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbElkKCksXG4gICAgICBvID0gKGUuZ2V0TGV2ZWxEYXRhKCksIGUuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yaWdpbmFsTGV2ZWxTdHI6IG8sXG4gICAgICBsZXZlbFN0cjogZS5nZXRPcmlXaXRoU3BlY2lhbENhcmRzKCkgfHwgbyxcbiAgICAgIGxldmVsRGlmZmljdWx0eTogZS5nZXRMZXZlbERpZmZpY3VsdHkoKSxcbiAgICAgIGlzTmV3R2FtZTogdHJ1ZSxcbiAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlLFxuICAgICAgbGV2ZWxJZDogdCxcbiAgICAgIHRpbGVUeXBlczogZS5nZXRUaWxlVHlwZXMoKSxcbiAgICAgIGlzUmVzdGFydDogdHJ1ZVxuICAgIH07XG4gIH1cbiAgZ2V0TG9jYWxMZXZlbERhdGEoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbElkKCksXG4gICAgICBvID0gZS5nZXRMZXZlbERhdGEoKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3JpZ2luYWxMZXZlbFN0cjogZS5nZXRPcmlnaW5hbExldmVsRGF0YSgpLFxuICAgICAgbGV2ZWxTdHI6IG8sXG4gICAgICBsZXZlbERpZmZpY3VsdHk6IGUuZ2V0TGV2ZWxEaWZmaWN1bHR5KCksXG4gICAgICBpc05ld0dhbWU6IGZhbHNlLFxuICAgICAgZ2FtZVR5cGU6IHRoaXMuZ2FtZVR5cGUsXG4gICAgICBsZXZlbElkOiB0LFxuICAgICAgdGlsZVR5cGVzOiBlLmdldFRpbGVUeXBlcygpLFxuICAgICAgaXNSZXN0YXJ0OiBmYWxzZVxuICAgIH07XG4gIH1cbiAgZ2V0TmV3TGV2ZWxEYXRhKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpLFxuICAgICAgbiA9IG8uZ2V0TGV2ZWxJZCgpLFxuICAgICAgaSA9IG8uZ2V0T3JpZ2luYWxMZXZlbERhdGEoKSxcbiAgICAgIHIgPSB0aGlzLmdldFRpbGVUeXBlcyhvKTtcbiAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldENvbnRlbnREYXRhKHtcbiAgICAgIGxldmVsSW5kZXg6IG8uZ2V0TGV2ZWxHZW5JbmRleCgpLFxuICAgICAgbGV2ZWxJRDogbixcbiAgICAgIGRpZVJlc3VsdDogby5nZXREaWVSZXN1bHQoKSxcbiAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlXG4gICAgfSkudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgby5zZXREaWVSZXN1bHQoMSk7XG4gICAgICB2YXIgbCA9IGFbMF0sXG4gICAgICAgIGMgPSBhWzFdLFxuICAgICAgICB1ID0gYVsyXSxcbiAgICAgICAgcCA9IGFbM10sXG4gICAgICAgIGYgPSBhWzRdLFxuICAgICAgICBkID0gYVs1XTtcbiAgICAgIER5bmFtaWNDdXJ2ZS5pbnN0YW5jZS5zdXBwb3J0TW9kZSh0LmdhbWVUeXBlKSAmJiBEeW5hbWljQ3VydmUuaW5zdGFuY2UuZ2FtZVN0YXJ0KHtcbiAgICAgICAgZ2FtZVR5cGU6IHQuZ2FtZVR5cGUsXG4gICAgICAgIGxldmVsSWQ6IG4sXG4gICAgICAgIGZpbGVOYW1lOiBwLFxuICAgICAgICBsZXZlbFN0cjogbCxcbiAgICAgICAgbGV2ZWxJbmRleDogTnVtYmVyKHUpXG4gICAgICB9KTtcbiAgICAgIGQgJiYgby5pbmNyZW1lbnRMZXZlbEdlbkluZGV4KCk7XG4gICAgICBlKHtcbiAgICAgICAgbGV2ZWxTdHI6IGwsXG4gICAgICAgIGxldmVsRGlmZmljdWx0eTogYyxcbiAgICAgICAgb3JpZ2luYWxMZXZlbFN0cjogaSxcbiAgICAgICAgaXNOZXdHYW1lOiB0cnVlLFxuICAgICAgICBnYW1lVHlwZTogdC5nYW1lVHlwZSxcbiAgICAgICAgbGV2ZWxJZDogbixcbiAgICAgICAgdGlsZVR5cGVzOiByLFxuICAgICAgICBpc1Jlc3RhcnQ6IGZhbHNlLFxuICAgICAgICBsZXZlbEluZGV4OiB1LFxuICAgICAgICBsZXZlbE5hbWU6IHAsXG4gICAgICAgIGRpbWVuc2lvbk5hbWU6IGYsXG4gICAgICAgIGlzRXh0cmFjdExldmVsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXRJc05ld0dhbWUoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUodGhpcy5nYW1lVHlwZSksXG4gICAgICB0ID0gZS5nZXRMZXZlbERhdGEoKSxcbiAgICAgIG8gPSBlLmdldE9yaWdpbmFsTGV2ZWxEYXRhKCk7XG4gICAgcmV0dXJuICF0IHx8ICFvO1xuICB9XG4gIGdldExldmVsRGF0YShlID0gZmFsc2UsIHQ/KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHRoaXMuaXNBTUludHIoKSAmJiB0aGlzLmhhbmRsZUF1dG9NZXJnZUludGVycnVwdCgpO1xuICAgIHZhciBuID0gdGhpcy5nZXRJc05ld0dhbWUoKTtcbiAgICBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmluaXREYXRhKHRoaXMuZ2FtZVR5cGUpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIGkgPSBvLmdldFJlc3RhcnRMZXZlbERhdGEoKTtcbiAgICAgICAgdChpKTtcbiAgICAgIH0gZWxzZSBpZiAobikgby5nZXROZXdMZXZlbERhdGEoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdChlKTtcbiAgICAgIH0pO2Vsc2Uge1xuICAgICAgICBpID0gby5nZXRMb2NhbExldmVsRGF0YSgpO1xuICAgICAgICB0KGkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdhbWVDdHJsX2lzQU1JbnRyXCIpXG4gIGlzQU1JbnRyKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGhhbmRsZUF1dG9NZXJnZUludGVycnVwdCgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLm5vcm1hbERhdGEsXG4gICAgICB0ID0gZS5nZXRIYXNUcmlnZ2VyZWRGdWxsQ29tYm8oKSxcbiAgICAgIG8gPSBlLmdldEhhc1RyaWdnZXJlZFJld2FyZENvbWJvKCksXG4gICAgICBuID0gdCB8fCBvLFxuICAgICAgaSA9IGUuZ2V0T3JpZ2luYWxMZXZlbERhdGEoKTtcbiAgICBuICYmIGkgJiYgZS5zZXRJc0VuZCh0cnVlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1haW5HYW1lQ3RybF9nZXRUaWxlXCIpXG4gIGdldFRpbGVUeXBlcygpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBpbml0R2FtZVRpbWUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IG5ldyBHYW1lVGltZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUucHVzaElucHV0KHtcbiAgICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlVwZGF0ZVRpbWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9nYW1lVGltZSA9IHQ7XG4gIH1cbiAgZ2V0R2FtZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVUaW1lO1xuICB9XG4gIGluaXRHYW1lQ29udGV4dCgpIHtcbiAgICB2YXIgZSA9IG5ldyBHYW1lQ29udGV4dCgpO1xuICAgIGUuc2V0Q2FyZENvbmZpZ01hcCh0aGlzLmNyZWF0ZUNhcmRDb25maWdNYXAoKSk7XG4gICAgZS5zZXRDYXJkTGF5b3V0Q29uZmlnKHRoaXMuY3JlYXRlQ2FyZExheW91dENvbmZpZygpKTtcbiAgICBlLnNldEdhbWVUeXBlKHRoaXMuZ2FtZVR5cGUpO1xuICAgIGUuc2V0UmFuZG9tR2VuZXJhdG9yKG5ldyBSYW5kb21HZW5lcmF0b3IoKSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cbiAgaW5pdEdhbWVTaW11bGF0b3IoZSkge1xuICAgIHZhciB0ID0gbmV3IEdhbWVTaW11bGF0b3IoZSk7XG4gICAgdGhpcy5fZ2FtZVNpbXVsYXRvciA9IHQ7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgcGxheU11c2ljKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5QkdNKEVBdWRpb0lELkJnbSwgdHJ1ZSk7XG4gICAgdGhpcy5mYWRlQkdNSW4oKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1haW5HYW1lQ3RybF9mYWRlQkdNSW5cIilcbiAgZmFkZUJHTUluKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5mYWRlQkdNSW4oKTtcbiAgfVxuICBzdGFydFNpbXVsYXRvcihlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLmluaXRHYW1lQ29udGV4dCgpO1xuICAgIG4uc2V0T2Zmc2V0WShvKTtcbiAgICBCZWhhdmlvckZhY3RvcnkuaW5pdCgpO1xuICAgIHRoaXMuaW5pdEdhbWVTaW11bGF0b3Iobik7XG4gICAgdGhpcy5pbml0R2FtZVRpbWUoKTtcbiAgICB0aGlzLnBsYXlNdXNpYygpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RCZ21PY2N1cGF0aW9uKEVCZ21PY2N1cGF0aW9uQ2xpY2tUeXBlLkdhbWUpO1xuICAgIHRoaXMuaW5pdElucHV0KGUsIHQsIG8pO1xuICB9XG4gIGluaXRJbnB1dChlLCB0KSB7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydFNpbXVsYXRvcixcbiAgICAgIHJ1blR5cGU6IElucHV0UnVuVHlwZS5XYWl0XG4gICAgfSk7XG4gICAgdGhpcy5wdXNoSW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5TdGFydEluaXQsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU2V0TGV2ZWwsXG4gICAgICBsZXZlbERhdGE6IGUsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uQ2hvb3NlTGF5b3V0LFxuICAgICAgY29udGVudFNpemU6IHQsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uSW5pdFZpZXcsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uSW5pdFZpZXdGaW5pc2gsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uRW50ZXJBbmltYXRpb24sXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaElucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uRW50ZXJBbmltYXRpb25GaW5pc2gsXG4gICAgICBydW5UeXBlOiBJbnB1dFJ1blR5cGUuV2FpdFxuICAgIH0pO1xuICB9XG4gIHB1c2hJbnB1dChlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgaWYgKHRoaXMuX2dhbWVTaW11bGF0b3IgJiYgdGhpcy5fZ2FtZVRpbWUpIGlmIChlLmlucHV0VHlwZSAhPSBFR2FtZUlucHV0RW51bS5SZXN0YXJ0KSB7XG4gICAgICBlLmlucHV0VHlwZSA9PT0gRUdhbWVJbnB1dEVudW0uVXBkYXRlVGltZSAmJiAoZS50aW1lID0gdGhpcy5fZ2FtZVRpbWUuZGVsdGFUaW1lKTtcbiAgICAgIG51bGwgPT09IChvID0gdGhpcy5fZ2FtZVNpbXVsYXRvcikgfHwgdm9pZCAwID09PSBvIHx8IG8uaW5wdXQoZSk7XG4gICAgICB0aGlzLnRyeU9wZW5Mb3dQcmlvcml0eUJ1bmRsZShlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnVsbCA9PT0gKHQgPSB0aGlzLl9nYW1lU2ltdWxhdG9yKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5pbnB1dChlKTtcbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwiY2xlYXJBbGxOb2RlXCIpO1xuICAgICAgMCA9PSBlLmRpZVJlc3VsdCAmJiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKS5zZXREaWVSZXN1bHQoMCk7XG4gICAgICB0aGlzLnN0YXJ0TmV4dExldmVsKHRydWUpO1xuICAgIH1cbiAgfVxuICB0cnlPcGVuTG93UHJpb3JpdHlCdW5kbGUoZSkge1xuICAgIGUuaW5wdXRUeXBlID09PSBFR2FtZUlucHV0RW51bS5EaXNwbGF5U2ltdWxhdG9yICYmIGUuZGlzcGxheUlucHV0VHlwZSA9PT0gRUdhbWVJbnB1dEVudW0uRW50ZXJBbmltYXRpb25GaW5pc2ggJiYgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5zdGFydCh0cnVlKTtcbiAgfVxuICB0cnlDbG9zZU90aGVyR2FtZUNvbnRyb2xsZXIoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0LFxuICAgICAgbyA9IG5ldyBNYXAoKTtcbiAgICBvLnNldChNakdhbWVUeXBlLk5vcm1hbCwgXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgby5zZXQoTWpHYW1lVHlwZS5UcmF2ZWwsIFwiVHJhdmVsR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgby5zZXQoTWpHYW1lVHlwZS5EYWlseUNoYWxsZW5nZSwgXCJEYWlseUNoYWxsZW5nZUNvbnRyb2xsZXJcIik7XG4gICAgby5zZXQoTWpHYW1lVHlwZS5DbGFzc2ljLCBcIkNsYXNzaWNDb250cm9sbGVyXCIpO1xuICAgIG8uc2V0KE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwsIFwiVGlsZTJHYW1lQ29udHJvbGxlclwiKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKG8uZW50cmllcygpKSwgaSA9IG4ubmV4dCgpOyAhaS5kb25lOyBpID0gbi5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHIgPSBfX3JlYWQoaS52YWx1ZSwgMiksXG4gICAgICAgICAgcyA9IHJbMF0sXG4gICAgICAgICAgYyA9IHJbMV07XG4gICAgICAgIHMgIT09IHRoaXMuZ2FtZVR5cGUgJiYgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jbG9zZVZpZXdCeU5hbWUoYyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGkgJiYgIWkuZG9uZSAmJiAodCA9IG4ucmV0dXJuKSAmJiB0LmNhbGwobik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNYWluR2FtZUN0cmxfdndMb2FkXCIpXG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudHJ5Q2xvc2VPdGhlckdhbWVDb250cm9sbGVyKCk7XG4gICAgdGhpcy5pbml0T2JqZWN0UG9vbCgpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwiY2FsY1JlY3RHYW1lQXJlYVRyYW5zZm9ybVNpemVcIiwgZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgIHQuX3NpemUgPSBlO1xuICAgICAgdC5fb2Zmc2V0WSA9IG87XG4gICAgfSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJpbml0Q291bnRCbG9ja05vZGVcIik7XG4gICAgdGhpcy5zdGFydE5leHRMZXZlbCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdhbWVDdHJsX3Z3U2hvd1wiKVxuICB2aWV3RGlkU2hvdygpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpbkdhbWVDdHJsX3VpRGVzXCIpXG4gIG9uVUlEZXN0cm95KCkge1xuICAgIHRoaXMuX2dhbWVPYmplY3RQb29sLmNsZWFyQWxsUG9vbHMoKTtcbiAgfVxuICByZXNldEdhbWVUaW1lKCkge1xuICAgIHRoaXMuX2dhbWVUaW1lLnJlc2V0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNYWluR2FtZUN0cmxfbmV4dEx2XCIpXG4gIHN0YXJ0TmV4dExldmVsKGUgPSBmYWxzZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXM7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLl9nYW1lU2ltdWxhdG9yKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5kaXNwb3NlKCk7XG4gICAgdGhpcy5fZ2FtZVNpbXVsYXRvciA9IG51bGw7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJjbGVhckFsbE5vZGVcIik7XG4gICAgdGhpcy5nZXRMZXZlbERhdGEoZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIG8udmlld0RvQWN0aW9uKFwiY2xlYXJBbGxOb2RlXCIpO1xuICAgICAgby52aWV3RG9BY3Rpb24oXCJzaG93Qm90dG9tTm9kZVwiKTtcbiAgICAgIG8udmlld0RvQWN0aW9uKFwiaW5pdFNpbXVsYXRvckRpc3BsYXlcIik7XG4gICAgICBvLnN0YXJ0U2ltdWxhdG9yKGUsIG8uX3NpemUsIG8uX29mZnNldFkpO1xuICAgIH0pO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic3RhcnRTaW11bGF0b3JcIik7XG4gIH1cbiAgdXBkYXRlVGltZShlKSB7XG4gICAgdmFyIHQsIG8sIG4sIGk7XG4gICAgaWYgKHRoaXMuX2dhbWVTaW11bGF0b3IpIHtcbiAgICAgIG51bGwgPT09IChvID0gbnVsbCA9PT0gKHQgPSB0aGlzLl9nYW1lU2ltdWxhdG9yLmdhbWVDb250ZXh0KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldEdhbWVUcmFja2VyKCkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmFkdmFuY2VTdGVwVGltZShlKTtcbiAgICAgIG51bGwgPT09IChpID0gbnVsbCA9PT0gKG4gPSB0aGlzLl9nYW1lU2ltdWxhdG9yLmdhbWVDb250ZXh0KSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldEdhbWVEYXRhKCkpIHx8IHZvaWQgMCA9PT0gaSB8fCBpLmFkdmFuY2VQbGF5VGltZShlKTtcbiAgICB9XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdmFyIHQ7XG4gICAgc3VwZXIuY2xvc2UuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX2dhbWVTaW11bGF0b3IpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9nYW1lU2ltdWxhdG9yID0gbnVsbDtcbiAgfVxufSJdfQ==