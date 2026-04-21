"use strict";
cc._RF.push(module, '04352Dm1AxL6oAG2bN4aw9+', 'TravelGameController');
// Scripts/TravelGameController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("./types/DynamicCurve");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var RandomGenerator_1 = require("./core/simulator/structures/RandomGenerator");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelGameView_1 = require("./view/TravelGameView");
var TravelGameController = /** @class */ (function (_super) {
    __extends(TravelGameController, _super);
    function TravelGameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelGameView_1.default;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    TravelGameController.prototype.getRestartLevelData = function () {
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
    TravelGameController.prototype.getLocalLevelData = function () {
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
    TravelGameController.prototype.getJourneyTypeConfig = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType).getLevelId(), t = TravelGameModel_1.default.getInstance().getPlayType(e);
        return new RandomGenerator_1.RandomGenerator().randomElement(t);
    };
    TravelGameController.prototype.getJourneyType = function () {
        var e = this.getJourneyTypeConfig();
        UserModel_1.default.getInstance().getGameDataByGameType(this.gameType).setJourneyType(e);
        return e;
    };
    TravelGameController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = o.getJourneyType(), s = this.getTravelTileTypes(o, r);
        ExtractTool_1.default.getInstance().getContentData({
            levelID: n,
            levelIndex: o.getLevelGenIndex(),
            dieResult: o.getDieResult(),
            gameType: this.gameType,
            journeyType: r
        }).then(function (r) {
            o.setDieResult(1);
            o.incrementLevelGenIndex();
            var l = r[0], c = r[1], u = r[2], p = r[3], f = r[4];
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
                gameType: t.gameType,
                levelId: n,
                fileName: p,
                levelStr: l,
                levelIndex: Number(u)
            });
            e({
                levelStr: l,
                levelDifficulty: c,
                originalLevelStr: i,
                isNewGame: true,
                gameType: t.gameType,
                levelId: n,
                tileTypes: s,
                isRestart: false,
                levelIndex: u,
                levelName: p,
                dimensionName: f,
                isExtractLevel: true
            });
        });
    };
    TravelGameController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    TravelGameController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = this.getIsNewGame(), i = this.getJourneyType();
        ExtractTool_1.default.getInstance().initData(this.gameType, i).then(function () {
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
    TravelGameController.prototype.initInput = function (e, t) {
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
            inputType: GameInputEnum_1.EGameInputEnum.InitCollectCard,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.InitEndStrategy,
            endStrategy: GameTypeEnums_1.LevelTargetType.KillCollectCard,
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
    TravelGameController.prototype.getTileTypesByJourneyType = function (e) {
        switch (e) {
            case GameTypeEnums_1.JourneyType.Yoga:
                return TileTypeEnum_1.ETileType.Yoga;
            case GameTypeEnums_1.JourneyType.Flip:
                return TileTypeEnum_1.ETileType.RollCard;
            case GameTypeEnums_1.JourneyType.Color:
                return TileTypeEnum_1.ETileType.ColorCard;
        }
    };
    TravelGameController.prototype.getTravelTileTypes = function (e, t) {
        return this.getTileTypesByJourneyType(t);
    };
    __decorate([
        mj.traitEvent("TravelGaCtl_gTileTypes")
    ], TravelGameController.prototype, "getTravelTileTypes", null);
    TravelGameController = __decorate([
        mj.class("TravelGameController")
    ], TravelGameController);
    return TravelGameController;
}(MainGameController_1.default));
exports.default = TravelGameController;

cc._RF.pop();