"use strict";
cc._RF.push(module, 'e1ee0jTZHVJoKXOXRRWv5hO', 'ClassicController');
// Scripts/ClassicController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("./types/DynamicCurve");
var ExtractTool_1 = require("./core/extractQuestion/ExtractTool");
var ClassicExtractTool_1 = require("./ClassicExtractTool");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var MainGameController_1 = require("./game/controller/MainGameController");
var UserModel_1 = require("./gamePlay/user/UserModel");
var ClassicView_1 = require("./view/ClassicView");
var ClassicController = /** @class */ (function (_super) {
    __extends(ClassicController, _super);
    function ClassicController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicView_1.default;
        _this._gameType = GameTypeEnums_1.MjGameType.Classic;
        return _this;
    }
    ClassicController.prototype.viewDidShow = function (t) {
        this.args = t || this.args;
        ClassicExtractTool_1.ClassicExtractTool.getInstance().init();
        _super.prototype.viewDidShow.call(this);
    };
    ClassicController.prototype.initDependRes = function () {
        var t, o;
        _super.prototype.initDependRes.call(this);
        this.preloadResMap.Prefab || (this.preloadResMap.Prefab = []);
        "string" == typeof this.preloadResMap.Prefab && (this.preloadResMap.Prefab = [this.preloadResMap.Prefab]);
        var n = this.preloadResMap.Prefab;
        try {
            for (var i = __values(["l_classic:prefabs/HighestScoreItem", "l_classic:prefabs/StageRightItem"]), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                n.includes(l) || n.push(l);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    ClassicController.prototype.initGameTime = function () {
        _super.prototype.initGameTime.call(this);
        UserModel_1.default.getInstance().getGameDataByGameType(this.gameType).resetSwimlaneTime();
    };
    ClassicController.prototype.getRestartLevelData = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelId(), o = (e.getLevelData(), e.getOriginalLevelData()), n = e.getOriWithSpecialCards(), i = this.getClassicTileTypes(e);
        return {
            originalLevelStr: o,
            levelStr: n || o,
            levelDifficulty: e.getLevelDifficulty(),
            isNewGame: true,
            gameType: this.gameType,
            levelId: t,
            tileTypes: i,
            isRestart: true
        };
    };
    ClassicController.prototype.getLocalLevelData = function () {
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
    ClassicController.prototype.getNewLevelData = function (e) {
        var t = this, o = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), n = o.getLevelId(), i = o.getOriginalLevelData(), r = this.getClassicTileTypes(o);
        ClassicExtractTool_1.ClassicExtractTool.getInstance().extractInitial().then(function (o) {
            var a = o.levelStr, s = o.index, c = o.libName;
            DynamicCurve_1.default.instance.supportMode(t.gameType) && DynamicCurve_1.default.instance.gameStart({
                gameType: t.gameType,
                levelId: n,
                fileName: c,
                levelStr: a,
                levelIndex: Number(s)
            });
            e({
                levelStr: a,
                levelDifficulty: 0,
                originalLevelStr: i,
                isNewGame: true,
                gameType: t.gameType,
                levelId: n,
                tileTypes: r,
                isRestart: false,
                levelIndex: s,
                levelName: c,
                isExtractLevel: true,
                difficultyType: o.difficultyType
            });
        });
    };
    ClassicController.prototype.getIsNewGame = function () {
        var e = UserModel_1.default.getInstance().getGameDataByGameType(this.gameType), t = e.getLevelData(), o = e.getOriginalLevelData();
        return !t || !o;
    };
    ClassicController.prototype.getLevelData = function (e, t) {
        if (e === void 0) { e = false; }
        var o = this;
        var n = this.getIsNewGame();
        ExtractTool_1.default.getInstance().initData(this.gameType).then(function () {
            if (e) {
                if (o.isRestartExtractLevel())
                    o.getExtractRestartLevelData(function (e) {
                        t(e);
                    });
                else {
                    var i = o.getRestartLevelData();
                    t(i);
                }
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
    ClassicController.prototype.isRestartExtractLevel = function () {
        return true;
    };
    ClassicController.prototype.getExtractRestartLevelData = function (e) {
        this.getNewLevelData(function (t) {
            t.isRestart = true;
            e(t);
        });
    };
    ClassicController.prototype.getClassicTileTypes = function () {
        return "";
    };
    ClassicController.prototype.isOpenGenerateState = function () {
        return false;
    };
    ClassicController.prototype.initInput = function (e, t, o) {
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartSimulator,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.StartInit,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.OpenGenerateState,
            runType: GameInputEnum_1.InputRunType.Wait,
            openGenerateState: this.isOpenGenerateState()
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.SetLevelClassic,
            levelData: e,
            runType: GameInputEnum_1.InputRunType.Wait
        });
        this.pushInput({
            inputType: GameInputEnum_1.EGameInputEnum.ChooseLayoutClassic,
            offsetY: o,
            contentSize: t,
            maxRow: 7,
            maxCol: 5,
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
        mj.traitEvent("ClcCtl_isRestartExtLv")
    ], ClassicController.prototype, "isRestartExtractLevel", null);
    __decorate([
        mj.traitEvent("ClcCtl_isOpenGenState")
    ], ClassicController.prototype, "isOpenGenerateState", null);
    ClassicController = __decorate([
        mj.class("ClassicController")
    ], ClassicController);
    return ClassicController;
}(MainGameController_1.default));
exports.default = ClassicController;

cc._RF.pop();