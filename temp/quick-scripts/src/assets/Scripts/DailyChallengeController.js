"use strict";
cc._RF.push(module, '952c4Ju5ARPmrilX+gdl+GD', 'DailyChallengeController');
// Scripts/DailyChallengeController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("./types/DynamicCurve");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var DailyChallengeView_1 = require("./view/DailyChallengeView");
var DailyChallengeController = /** @class */ (function (_super) {
    __extends(DailyChallengeController, _super);
    function DailyChallengeController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyChallengeView_1.default;
        _this._gameType = GameTypeEnums_1.MjGameType.DailyChallenge;
        return _this;
    }
    DailyChallengeController.prototype.viewDidShow = function (t) {
        this.args = t || this.args;
        _super.prototype.viewDidShow.call(this);
    };
    DailyChallengeController.prototype.getRestartLevelData = function () {
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
    DailyChallengeController.prototype.getLocalLevelData = function () {
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
    DailyChallengeController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = this.getChallengeTileTypes(o), s = o.getDailyChallengeTimestamp();
        ExtractTool_1.default.getInstance().getContentData({
            levelIndex: o.getLevelGenIndex(),
            dieResult: o.getDieResult(),
            gameType: this.gameType,
            challengeDate: s
        }).then(function (l) {
            o.setDieResult(1);
            o.incrementLevelGenIndex();
            var s = l[0], c = l[1], u = l[2], p = l[3], f = l[4];
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
                gameType: t.gameType,
                levelId: n,
                fileName: p,
                levelStr: s,
                levelIndex: Number(u)
            });
            e({
                levelStr: s,
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
    DailyChallengeController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    DailyChallengeController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType);
        this.checkAndUpdateTimestamp(n);
        var i = this.getIsNewGame();
        ExtractTool_1.default.getInstance().initData(this.gameType).then(function () {
            if (e) {
                var n = o.getRestartLevelData();
                t(n);
            }
            else if (i)
                o.getNewLevelData(function (e) {
                    t(e);
                });
            else {
                n = o.getLocalLevelData();
                t(n);
            }
        });
    };
    DailyChallengeController.prototype.checkAndUpdateTimestamp = function (e) {
        var t, o = null === (t = this.args) || void 0 === t ? void 0 : t.timeStamp;
        if (o) {
            if (e.getDailyChallengeTimestamp() !== o) {
                e.resetGameData();
                e.setDailyChallengeTimestamp(o);
            }
        }
    };
    DailyChallengeController.prototype.getChallengeTileTypes = function () {
        return "";
    };
    DailyChallengeController.prototype.initInput = function (e, t) {
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
    __decorate([
        mj.traitEvent("DailyChCtrl_getTileTypes")
    ], DailyChallengeController.prototype, "getChallengeTileTypes", null);
    DailyChallengeController = __decorate([
        mj.class("DailyChallengeController")
    ], DailyChallengeController);
    return DailyChallengeController;
}(MainGameController_1.default));
exports.default = DailyChallengeController;

cc._RF.pop();