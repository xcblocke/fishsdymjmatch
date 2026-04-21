"use strict";
cc._RF.push(module, '69ffaBOi7NIVKLsSUo/ibXC', 'GameController');
// Scripts/process/GameController.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var BehaviorsInterface_1 = require("../simulator/constant/BehaviorsInterface");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTimeData_1 = require("../data/GameTimeData");
var EmptyEffect_1 = require("../EmptyEffect");
var InputAddProp_1 = require("../input/InputAddProp");
var InputAutoMerge_1 = require("../InputAutoMerge");
var InputChooseLayout_1 = require("../input/InputChooseLayout");
var InputCleanView_1 = require("../input/InputCleanView");
var InputEnterAnimation_1 = require("../input/InputEnterAnimation");
var InputEnterAnimationFinish_1 = require("../input/InputEnterAnimationFinish");
var InputHitTips_1 = require("../input/InputHitTips");
var InputInitCollectCard_1 = require("../input/InputInitCollectCard");
var InputInitEndStrategy_1 = require("../input/InputInitEndStrategy");
var InputInitView_1 = require("../input/InputInitView");
var InputInitViewFinish_1 = require("../input/InputInitViewFinish");
var InputRemoveLockMask_1 = require("../input/InputRemoveLockMask");
var InputRestart_1 = require("../input/InputRestart");
var InputSetLevel_1 = require("../input/InputSetLevel");
var InputShuffle_1 = require("../input/InputShuffle");
var InputSkipAutoMerge_1 = require("../input/InputSkipAutoMerge");
var InputStartAutoMerge_1 = require("../input/InputStartAutoMerge");
var InputTimeoutBreakCombo_1 = require("../input/InputTimeoutBreakCombo");
var InputToggleCardLockDarken_1 = require("../input/InputToggleCardLockDarken");
var InputRefreshCardLockDarken_1 = require("../input/InputRefreshCardLockDarken");
var InputToggleShowLockMask_1 = require("../input/InputToggleShowLockMask");
var InputTouchCancel_1 = require("../input/InputTouchCancel");
var InputTouchEnd_1 = require("../InputTouchEnd");
var InputTouchMove_1 = require("../input/InputTouchMove");
var InputTouchStart_1 = require("../InputTouchStart");
var InputTravelEnd_1 = require("../input/InputTravelEnd");
var InputUserOperate_1 = require("../input/InputUserOperate");
var InputNoMatchFail_1 = require("../input/InputNoMatchFail");
var InputGameTime_1 = require("../inputbase/InputGameTime");
var InputPauseSimulator_1 = require("../inputbase/InputPauseSimulator");
var InputResumeSimulator_1 = require("../inputbase/InputResumeSimulator");
var InputStartInit_1 = require("../inputbase/InputStartInit");
var InputStartSimulator_1 = require("../inputbase/InputStartSimulator");
var InputStopSimulator_1 = require("../inputbase/InputStopSimulator");
var TileMapObject_1 = require("../objects/TileMapObject");
var BehaviorExecutionBuilder_1 = require("../out/BehaviorExecutionBuilder");
var SimulatorLog_1 = require("../util/SimulatorLog");
var InputDuoxiaoAuto_1 = require("../InputDuoxiaoAuto");
var InputSetLevelClassic_1 = require("../input/InputSetLevelClassic");
var InputChooseLayoutClassic_1 = require("../input/InputChooseLayoutClassic");
var InputAddLevelClassic_1 = require("../input/InputAddLevelClassic");
var InputClassicFail_1 = require("../input/InputClassicFail");
var InputOpenGenerateState_1 = require("../input/InputOpenGenerateState");
var InputDropClassic_1 = require("../input/InputDropClassic");
var InputAddPropOff3h_1 = require("../input/InputAddPropOff3h");
var InputTipsPropAutoMerge_1 = require("../InputTipsPropAutoMerge");
var InputGameActive_1 = require("../input/InputGameActive");
var InputTile2SetSlotBarCount_1 = require("../input/InputTile2SetSlotBarCount");
var InputTile2InitSlotBar_1 = require("../input/InputTile2InitSlotBar");
var InputTile2InitBottom_1 = require("../input/InputTile2InitBottom");
var InputTile2InitTop_1 = require("../input/InputTile2InitTop");
var InputTile2InitView_1 = require("../input/InputTile2InitView");
var InputTile2InitViewFinish_1 = require("../input/InputTile2InitViewFinish");
var InputTile2Shuffle_1 = require("../input/InputTile2Shuffle");
var InputTile2HitTips_1 = require("../input/InputTile2HitTips");
var InputTile2Revert_1 = require("../input/InputTile2Revert");
var InputTile2AddProp_1 = require("../input/InputTile2AddProp");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var InputTile2TouchStart_1 = require("../input/InputTile2TouchStart");
var InputTile2TouchMove_1 = require("../input/InputTile2TouchMove");
var InputTile2TouchCancel_1 = require("../input/InputTile2TouchCancel");
var InputTile2Revive_1 = require("../InputTile2Revive");
var InputTile2EnterAnimation_1 = require("../input/InputTile2EnterAnimation");
var InputTile2EnterAnimationFinish_1 = require("../input/InputTile2EnterAnimationFinish");
var InputTile2DuoxiaoAuto_1 = require("../InputTile2DuoxiaoAuto");
var InputTile2SetLevel_1 = require("../input/InputTile2SetLevel");
var InputTile2StartAutoMerge_1 = require("../input/InputTile2StartAutoMerge");
var InputTile2AutoMerge_1 = require("../InputTile2AutoMerge");
var InputTile2MagnetMerge_1 = require("../InputTile2MagnetMerge");
var InputTile2SetSlotType_1 = require("../input/InputTile2SetSlotType");
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController(t) {
        var _this = _super.call(this, t) || this;
        _this._inputMap = {};
        _this._gameSimulator = null;
        _this._gameContext = null;
        _this._tileMapObject = null;
        _this._gameTimeData = null;
        _this._gameBehaviorExecutionBuilder = null;
        _this._gameSimulator = t.gameSimulator;
        _this._gameContext = t;
        _this._tileMapObject = new TileMapObject_1.TileMapObject(_this._gameContext);
        _this._gameContext.setTileMapObject(_this._tileMapObject);
        _this._gameTimeData = new GameTimeData_1.GameTimeData(_this._gameContext);
        _this._gameContext._gameTimeData = _this._gameTimeData;
        _this._gameBehaviorExecutionBuilder = new BehaviorExecutionBuilder_1.BehaviorExecutionBuilder();
        _this.initInputMap();
        return _this;
    }
    Object.defineProperty(GameController.prototype, "tileMapObject", {
        get: function () {
            return this._tileMapObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameController.prototype, "gameContext", {
        get: function () {
            return this._gameContext;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameController.prototype, "gameTimeData", {
        get: function () {
            return this._gameTimeData;
        },
        enumerable: false,
        configurable: true
    });
    GameController.prototype.initInputMap = function () {
        var _e = {};
        _e[GameInputEnum_1.EGameInputEnum.SetLevel] = new InputSetLevel_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TouchStart] = new InputTouchStart_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TouchEnd] = new InputTouchEnd_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TouchMove] = new InputTouchMove_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TouchCancel] = new InputTouchCancel_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.HitTips] = new InputHitTips_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.Shuffle] = new InputShuffle_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.AddProp] = new InputAddProp_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.Restart] = new InputRestart_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.StartAutoMerge] = new InputStartAutoMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.AutoMerge] = new InputAutoMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.SkipAutoMerge] = new InputSkipAutoMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.InitView] = new InputInitView_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.ChooseLayout] = new InputChooseLayout_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.ChooseLayoutClassic] = new InputChooseLayoutClassic_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.StartInit] = new InputStartInit_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.UpdateTime] = new InputGameTime_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.StartSimulator] = new InputStartSimulator_1.InputStartSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.StopSimulator] = new InputStopSimulator_1.InputStopSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.PauseSimulator] = new InputPauseSimulator_1.InputPauseSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.ResumeSimulator] = new InputResumeSimulator_1.InputResumeSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.EnterAnimationFinish] = new InputEnterAnimationFinish_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.InitViewFinish] = new InputInitViewFinish_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.EnterAnimation] = new InputEnterAnimation_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.ToggleCardLockDarken] = new InputToggleCardLockDarken_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken] = new InputRefreshCardLockDarken_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.CleanView] = new InputCleanView_1.InputCleanView(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.InitCollectCard] = new InputInitCollectCard_1.InputInitCollectCard(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.InitEndStrategy] = new InputInitEndStrategy_1.InputInitEndStrategy(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TravelEnd] = new InputTravelEnd_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.ToggleShowLockMask] = new InputToggleShowLockMask_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.RemoveLockMask] = new InputRemoveLockMask_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TimeoutBreakCombo] = new InputTimeoutBreakCombo_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.UserOperate] = new InputUserOperate_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.DuoxiaoAutoMerge] = new InputDuoxiaoAuto_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.NoMatchFail] = new InputNoMatchFail_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.SetLevelClassic] = new InputSetLevelClassic_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.AddLevelClassic] = new InputAddLevelClassic_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.ClassicFail] = new InputClassicFail_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.DropClassic] = new InputDropClassic_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.OpenGenerateState] = new InputOpenGenerateState_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.AddPropOff3h] = new InputAddPropOff3h_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.TipsPropAutoMerge] = new InputTipsPropAutoMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[GameInputEnum_1.EGameInputEnum.GameActive] = new InputGameActive_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        this._inputMap = _e;
        if (this.gameContext.gameType == GameTypeEnums_1.MjGameType.Tile2Normal) {
            this._inputMap[GameInputEnum_1.EGameInputEnum.TouchStart] = new InputTile2TouchStart_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.TouchMove] = new InputTile2TouchMove_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.TouchCancel] = new InputTile2TouchCancel_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.TouchEnd] = new _e.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2SetSlotBarCount] = new InputTile2SetSlotBarCount_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2InitSlotBar] = new InputTile2InitSlotBar_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2InitBottom] = new InputTile2InitBottom_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2InitTop] = new InputTile2InitTop_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2InitView] = new InputTile2InitView_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2InitViewFinish] = new InputTile2InitViewFinish_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2Shuffle] = new InputTile2Shuffle_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2HitTips] = new InputTile2HitTips_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2Revert] = new InputTile2Revert_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2AddProp] = new InputTile2AddProp_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2Revive] = new InputTile2Revive_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder), this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2EnterAnimation] = new InputTile2EnterAnimation_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2EnterAnimationFinish] = new InputTile2EnterAnimationFinish_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2DuoxiaoAutoMerge] = new InputTile2DuoxiaoAuto_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2SetLevel] = new InputTile2SetLevel_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2SetSlotType] = new InputTile2SetSlotType_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            var t = new InputTile2StartAutoMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder), o = new InputTile2AutoMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2StartAutoMerge] = t;
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2AutoMerge] = o;
            var n = new InputTile2MagnetMerge_1.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[GameInputEnum_1.EGameInputEnum.Tile2MagnetMerge] = n;
        }
    };
    GameController.prototype.registerInput = function (e, t) {
        t && (this._inputMap[e] = t);
    };
    GameController.prototype.registerInputClass = function (e, t) {
        var o = new t(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        this.registerInput(e, o);
    };
    GameController.prototype.createEmptyBehavior = function (e) {
        return {
            type: BehaviorsInterface_1.EBehaviorExecutionType.Single,
            data: new EmptyEffect_1.EmptyEffect({
                inputType: e.inputType,
                name: "GameController"
            })
        };
    };
    GameController.prototype.excute = function (e) {
        var t, o, n, i;
        try {
            if (!e || void 0 === e.inputType)
                throw new Error("输入参数无效");
            var r = this._inputMap[e.inputType];
            if (!r) {
                console.error.apply(console, __spreadArrays(SimulatorLog_1.SimulatorLog.error("🚨 输入类型不存在:", e.inputType)));
                return this.createEmptyBehavior(e);
            }
            r.input = e;
            r.initRoot(e);
            r.excute(e);
            return r.parse(e) || this.createEmptyBehavior(e);
        }
        catch (r) {
            console.error.apply(console, __spreadArrays(SimulatorLog_1.SimulatorLog.error("执行输入异常:", e, r)));
            var a = null === (t = this.context.getGameData()) || void 0 === t ? void 0 : t.getOriginalLevelData(), s = null === (o = this.context.getGameData()) || void 0 === o ? void 0 : o.getLevelIndex(), c = null === (n = this.context.getGameData()) || void 0 === n ? void 0 : n.getLevelName(), u = null === (i = this.context.getGameData()) || void 0 === i ? void 0 : i.getOriginalLevelDataWithCardId();
            console.error("[GameController] 执行输入异常:" + (null == r ? void 0 : r.message) + ",stack:" + (null == r ? void 0 : r.stack) + ",inputType:" + (null == e ? void 0 : e.inputType) + ",originalLevelData:" + a + ",originalLevelDataWithCardId:" + u + ",levelIndex:" + s + ",levelName:" + c);
            return this.createEmptyBehavior(e);
        }
    };
    __decorate([
        mj.traitEvent("GameCtrl_initIptMap")
    ], GameController.prototype, "initInputMap", null);
    return GameController;
}(BaseCoreObject_1.BaseCoreObject));
exports.GameController = GameController;

cc._RF.pop();