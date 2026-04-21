"use strict";
cc._RF.push(module, '498abEkC6ZAVI7320rjy4II', 'Tile2GameController');
// Scripts/Tile2GameController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2ExtractManager_1 = require("./Tile2ExtractManager");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var LowPriorityBundleLoader_1 = require("./gamePlay/base/ui/LowPriorityBundleLoader");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var Tile2GameView_1 = require("./view/Tile2GameView");
var Tile2GameController = /** @class */ (function (_super) {
    __extends(Tile2GameController, _super);
    function Tile2GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2GameView_1.default;
        _this._tile2SlotType = GameTypeEnums_1.ETile2SlotType.Slot3;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        _this._disPlayingCount = 0;
        return _this;
    }
    Tile2GameController.prototype.getTile2SlotType = function () {
        return this._tile2SlotType;
    };
    Tile2GameController.prototype.initDependRes = function () {
        _super.prototype.initDependRes.call(this);
        this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeSlotBar");
        this.addPreloadRes("Prefab", "prefabs/game/Tile2Slot4nodeSlotBar");
        this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeBottom");
        this.addPreloadRes("Prefab", "prefabs/game/Tile2nodeTop");
        this.addPreloadRes("Prefab", "prefabs/effects/Tile2ClearScoreNormal");
        this.addPreloadRes("Prefab", "prefabs/effects/Tile2ClearScoreCombo");
        this.addPreloadRes("Prefab", "prefabs/effects/Tile2EffectCombo");
    };
    Tile2GameController.prototype.getRestartLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = (e.getLevelData(), e.getOriginalLevelData());
        return {
            originalLevelStr: o,
            levelStr: e.getOriWithSpecialCards() || o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: true,
            gameType: this.gameType,
            levelId: t,
            tileTypes: e.getTileTypes(),
            tileStrategies: e.getTileStrategies(),
            slover: e.getSolvers(),
            isRestart: true
        };
    };
    Tile2GameController.prototype.getLocalLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = e.getLevelData();
        return {
            originalLevelStr: e.getOriginalLevelData(),
            levelStr: o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: false,
            gameType: this.gameType,
            levelId: t,
            tileTypes: e.getTileTypes(),
            slover: e.getSolvers(),
            isRestart: false
        };
    };
    Tile2GameController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = this.getTile2TileTypes(o), i = this.getTile2Strategies(o);
        Tile2ExtractManager_1.default.getInstance().getContentData(o).then(function (r) {
            o.setDieResult(1);
            r.isCapabilityExtract && o.incrementLevelGenIndex();
            var a = r.content;
            e({
                levelStr: a,
                originalLevelStr: o.getOriginalLevelData(),
                levelDifficulty: 0,
                isNewGame: true,
                isRestart: false,
                gameType: t.gameType,
                levelId: o.getLevelId(),
                levelIndex: r.index,
                levelName: r.libName,
                tileTypes: n,
                isExtractLevel: true,
                slover: r.slover,
                tileStrategies: i
            });
        });
    };
    Tile2GameController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    Tile2GameController.prototype.shouldReExtractOnRestart = function () {
        return false;
    };
    Tile2GameController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = this.getIsNewGame();
        Tile2ExtractManager_1.default.getInstance().initData().then(function () {
            if (e) {
                if (o.shouldReExtractOnRestart()) {
                    o.getNewLevelData(t);
                }
                else {
                    t(o.getRestartLevelData());
                }
            }
            else {
                if (n) {
                    o.getNewLevelData(t);
                }
                else {
                    t(o.getLocalLevelData());
                }
            }
        });
    };
    Tile2GameController.prototype.getTile2TileTypes = function () {
        return "";
    };
    Tile2GameController.prototype.getTile2Strategies = function () {
        return "";
    };
    Tile2GameController.prototype.getStartSlotBarCount = function () {
        return 4;
    };
    Tile2GameController.prototype.initInput = function (e, t) {
        var o = this.getStartSlotBarCount();
        e.slotBarCount = o;
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartSimulator,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartInit,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2SetSlotType,
            slotType: this.getTile2SlotType(),
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2SetLevel,
            levelData: e,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2SetSlotBarCount,
            slotBarCount: o,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.ChooseLayout,
            contentSize: t,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitView,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitViewFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitSlotBar,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitBottom,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2InitTop,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2EnterAnimation,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2EnterAnimationFinish,
            runType: GameInputEnum_1.InputRunType.Wait
        });
    };
    Tile2GameController.prototype.pushInput = function (e) {
        var t;
        if (this._gameSimulator && this.getGameTime()) {
            e.inputType === GameInputEnum_1.EGameInputEnum.UpdateTime && (e.time = this.getGameTime().deltaTime);
            null === (t = this._gameSimulator) || void 0 === t || t.input(e);
            e.inputType !== GameInputEnum_1.EGameInputEnum.Restart && this.tryOpenLowPriorityBundle(e);
        }
    };
    Tile2GameController.prototype.tryOpenLowPriorityBundle = function (e) {
        e.inputType === GameInputEnum_1.EGameInputEnum.DisplaySimulator && e.displayInputType === GameInputEnum_1.EGameInputEnum.Tile2EnterAnimationFinish && LowPriorityBundleLoader_1.default.getInstance().start(true);
    };
    Tile2GameController.prototype.addDisPlayingCount = function () {
        this._disPlayingCount++;
    };
    Tile2GameController.prototype.removeDisPlayingCount = function () {
        this._disPlayingCount--;
        this._disPlayingCount < 0 && (this._disPlayingCount = 0);
    };
    Tile2GameController.prototype.isDisplaying = function () {
        return this._disPlayingCount > 0;
    };
    Tile2GameController.prototype.resetDisPlayingCount = function () {
        this._disPlayingCount = 0;
    };
    Tile2GameController.nextLevelStr = "";
    __decorate([
        mj.traitEvent("T2GameCtrl_gT2SlotT")
    ], Tile2GameController.prototype, "getTile2SlotType", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_initRes")
    ], Tile2GameController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_getIsNewGame")
    ], Tile2GameController.prototype, "getIsNewGame", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_reExtOnRst")
    ], Tile2GameController.prototype, "shouldReExtractOnRestart", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_getTileTypes")
    ], Tile2GameController.prototype, "getTile2TileTypes", null);
    __decorate([
        mj.traitEvent("T2GameCtrl_gtStrates")
    ], Tile2GameController.prototype, "getTile2Strategies", null);
    Tile2GameController = __decorate([
        mj.class("Tile2GameController")
    ], Tile2GameController);
    return Tile2GameController;
}(MainGameController_1.default));
exports.default = Tile2GameController;

cc._RF.pop();