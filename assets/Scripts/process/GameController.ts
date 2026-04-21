import {BaseCoreObject} from "../BaseCoreObject";
import {EBehaviorExecutionType} from "../simulator/constant/BehaviorsInterface";
import {EGameInputEnum} from "../simulator/constant/GameInputEnum";
import {GameTimeData} from "../data/GameTimeData";
import {EmptyEffect} from "../EmptyEffect";
import InputAddProp from "../input/InputAddProp";
import InputAutoMerge from "../InputAutoMerge";
import InputChooseLayout from "../input/InputChooseLayout";
import {InputCleanView} from "../input/InputCleanView";
import InputEnterAnimation from "../input/InputEnterAnimation";
import InputEnterAnimationFinish from "../input/InputEnterAnimationFinish";
import InputHitTips from "../input/InputHitTips";
import {InputInitCollectCard} from "../input/InputInitCollectCard";
import {InputInitEndStrategy} from "../input/InputInitEndStrategy";
import InputInitView from "../input/InputInitView";
import InputInitViewFinish from "../input/InputInitViewFinish";
import InputRemoveLockMask from "../input/InputRemoveLockMask";
import InputRestart from "../input/InputRestart";
import InputSetLevel from "../input/InputSetLevel";
import InputShuffle from "../input/InputShuffle";
import InputSkipAutoMerge from "../input/InputSkipAutoMerge";
import InputStartAutoMerge from "../input/InputStartAutoMerge";
import InputTimeoutBreakCombo from "../input/InputTimeoutBreakCombo";
import InputToggleCardLockDarken from "../input/InputToggleCardLockDarken";
import InputRefreshCardLockDarken from "../input/InputRefreshCardLockDarken";
import InputToggleShowLockMask from "../input/InputToggleShowLockMask";
import InputTouchCancel from "../input/InputTouchCancel";
import InputTouchEnd from "../InputTouchEnd";
import InputTouchMove from "../input/InputTouchMove";
import InputTouchStart from "../InputTouchStart";
import InputTravelEnd from "../input/InputTravelEnd";
import InputUserOperate from "../input/InputUserOperate";
import InputNoMatchFail from "../input/InputNoMatchFail";
import InputGameTime from "../inputbase/InputGameTime";
import {InputPauseSimulator} from "../inputbase/InputPauseSimulator";
import {InputResumeSimulator} from "../inputbase/InputResumeSimulator";
import InputStartInit from "../inputbase/InputStartInit";
import {InputStartSimulator} from "../inputbase/InputStartSimulator";
import {InputStopSimulator} from "../inputbase/InputStopSimulator";
import {TileMapObject} from "../objects/TileMapObject";
import {BehaviorExecutionBuilder} from "../out/BehaviorExecutionBuilder";
import {SimulatorLog} from "../util/SimulatorLog";
import InputDuoxiaoAuto from "../InputDuoxiaoAuto";
import InputSetLevelClassic from "../input/InputSetLevelClassic";
import InputChooseLayoutClassic from "../input/InputChooseLayoutClassic";
import InputAddLevelClassic from "../input/InputAddLevelClassic";
import InputClassicFail from "../input/InputClassicFail";
import InputOpenGenerateState from "../input/InputOpenGenerateState";
import InputDropClassic from "../input/InputDropClassic";
import InputAddPropOff3h from "../input/InputAddPropOff3h";
import InputTipsPropAutoMerge from "../InputTipsPropAutoMerge";
import InputGameActive from "../input/InputGameActive";
import InputTile2SetSlotBarCount from "../input/InputTile2SetSlotBarCount";
import InputTile2InitSlotBar from "../input/InputTile2InitSlotBar";
import InputTile2InitBottom from "../input/InputTile2InitBottom";
import InputTile2InitTop from "../input/InputTile2InitTop";
import InputTile2InitView from "../input/InputTile2InitView";
import InputTile2InitViewFinish from "../input/InputTile2InitViewFinish";
import InputTile2Shuffle from "../input/InputTile2Shuffle";
import InputTile2HitTips from "../input/InputTile2HitTips";
import InputTile2Revert from "../input/InputTile2Revert";
import InputTile2AddProp from "../input/InputTile2AddProp";
import {MjGameType} from "../core/simulator/constant/GameTypeEnums";
import InputTile2TouchStart from "../input/InputTile2TouchStart";
import InputTile2TouchMove from "../input/InputTile2TouchMove";
import InputTile2TouchCancel from "../input/InputTile2TouchCancel";
import InputTile2Revive from "../InputTile2Revive";
import InputTile2EnterAnimation from "../input/InputTile2EnterAnimation";
import InputTile2EnterAnimationFinish from "../input/InputTile2EnterAnimationFinish";
import InputTile2DuoxiaoAuto from "../InputTile2DuoxiaoAuto";
import InputTile2SetLevel from "../input/InputTile2SetLevel";
import InputTile2StartAutoMerge from "../input/InputTile2StartAutoMerge";
import InputTile2AutoMerge from "../InputTile2AutoMerge";
import InputTile2MagnetMerge from "../InputTile2MagnetMerge";
import InputTile2SetSlotType from "../input/InputTile2SetSlotType";

export class GameController extends BaseCoreObject {
    _inputMap = {};
    _gameSimulator = null;
    _gameContext = null;
    _tileMapObject = null;
    _gameTimeData = null;
    _gameBehaviorExecutionBuilder = null;

    get tileMapObject() {
        return this._tileMapObject;
    }

    get gameContext() {
        return this._gameContext;
    }

    get gameTimeData() {
        return this._gameTimeData;
    }

    constructor(t) {
        super(t);
        this._gameSimulator = t.gameSimulator;
        this._gameContext = t;
        this._tileMapObject = new TileMapObject(this._gameContext);
        this._gameContext.setTileMapObject(this._tileMapObject);
        this._gameTimeData = new GameTimeData(this._gameContext);
        this._gameContext._gameTimeData = this._gameTimeData;
        this._gameBehaviorExecutionBuilder = new BehaviorExecutionBuilder();
        this.initInputMap();
    }

    @mj.traitEvent("GameCtrl_initIptMap")
    initInputMap() {
        var _e = {};
        _e[EGameInputEnum.SetLevel] = new InputSetLevel(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TouchStart] = new InputTouchStart(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TouchEnd] = new InputTouchEnd(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TouchMove] = new InputTouchMove(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TouchCancel] = new InputTouchCancel(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.HitTips] = new InputHitTips(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.Shuffle] = new InputShuffle(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.AddProp] = new InputAddProp(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.Restart] = new InputRestart(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.StartAutoMerge] = new InputStartAutoMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.AutoMerge] = new InputAutoMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.SkipAutoMerge] = new InputSkipAutoMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.InitView] = new InputInitView(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.ChooseLayout] = new InputChooseLayout(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.ChooseLayoutClassic] = new InputChooseLayoutClassic(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.StartInit] = new InputStartInit(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.UpdateTime] = new InputGameTime(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.StartSimulator] = new InputStartSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.StopSimulator] = new InputStopSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.PauseSimulator] = new InputPauseSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.ResumeSimulator] = new InputResumeSimulator(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.EnterAnimationFinish] = new InputEnterAnimationFinish(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.InitViewFinish] = new InputInitViewFinish(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.EnterAnimation] = new InputEnterAnimation(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.ToggleCardLockDarken] = new InputToggleCardLockDarken(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.RefreshCardLockDarken] = new InputRefreshCardLockDarken(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.CleanView] = new InputCleanView(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.InitCollectCard] = new InputInitCollectCard(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.InitEndStrategy] = new InputInitEndStrategy(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TravelEnd] = new InputTravelEnd(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.ToggleShowLockMask] = new InputToggleShowLockMask(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.RemoveLockMask] = new InputRemoveLockMask(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TimeoutBreakCombo] = new InputTimeoutBreakCombo(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.UserOperate] = new InputUserOperate(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.DuoxiaoAutoMerge] = new InputDuoxiaoAuto(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.NoMatchFail] = new InputNoMatchFail(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.SetLevelClassic] = new InputSetLevelClassic(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.AddLevelClassic] = new InputAddLevelClassic(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.ClassicFail] = new InputClassicFail(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.DropClassic] = new InputDropClassic(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.OpenGenerateState] = new InputOpenGenerateState(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.AddPropOff3h] = new InputAddPropOff3h(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.TipsPropAutoMerge] = new InputTipsPropAutoMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        _e[EGameInputEnum.GameActive] = new InputGameActive(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        this._inputMap = _e;
        if (this.gameContext.gameType == MjGameType.Tile2Normal) {
            this._inputMap[EGameInputEnum.TouchStart] = new InputTile2TouchStart(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.TouchMove] = new InputTile2TouchMove(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.TouchCancel] = new InputTile2TouchCancel(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.TouchEnd] = new _e.default(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2SetSlotBarCount] = new InputTile2SetSlotBarCount(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2InitSlotBar] = new InputTile2InitSlotBar(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2InitBottom] = new InputTile2InitBottom(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2InitTop] = new InputTile2InitTop(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2InitView] = new InputTile2InitView(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2InitViewFinish] = new InputTile2InitViewFinish(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2Shuffle] = new InputTile2Shuffle(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2HitTips] = new InputTile2HitTips(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2Revert] = new InputTile2Revert(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2AddProp] = new InputTile2AddProp(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2Revive] = new InputTile2Revive(this._gameSimulator, this, this._gameBehaviorExecutionBuilder), this._inputMap[EGameInputEnum.Tile2EnterAnimation] = new InputTile2EnterAnimation(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2EnterAnimationFinish] = new InputTile2EnterAnimationFinish(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2DuoxiaoAutoMerge] = new InputTile2DuoxiaoAuto(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2SetLevel] = new InputTile2SetLevel(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2SetSlotType] = new InputTile2SetSlotType(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            var t = new InputTile2StartAutoMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder),
                o = new InputTile2AutoMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2StartAutoMerge] = t;
            this._inputMap[EGameInputEnum.Tile2AutoMerge] = o;
            var n = new InputTile2MagnetMerge(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
            this._inputMap[EGameInputEnum.Tile2MagnetMerge] = n;
        }
    }

    registerInput(e, t) {
        t && (this._inputMap[e] = t);
    }

    registerInputClass(e, t) {
        var o = new t(this._gameSimulator, this, this._gameBehaviorExecutionBuilder);
        this.registerInput(e, o);
    }

    createEmptyBehavior(e) {
        return {
            type: EBehaviorExecutionType.Single,
            data: new EmptyEffect({
                inputType: e.inputType,
                name: "GameController"
            })
        };
    }

    excute(e) {
        var t, o, n, i;
        try {
            if (!e || void 0 === e.inputType) throw new Error("输入参数无效");
            var r = this._inputMap[e.inputType];
            if (!r) {
                console.error.apply(console, [...SimulatorLog.error("🚨 输入类型不存在:", e.inputType)]);
                return this.createEmptyBehavior(e);
            }
            r.input = e;
            r.initRoot(e);
            r.excute(e);
            return r.parse(e) || this.createEmptyBehavior(e);
        } catch (r) {
            console.error.apply(console, [...SimulatorLog.error("执行输入异常:", e, r)]);
            var a = null === (t = this.context.getGameData()) || void 0 === t ? void 0 : t.getOriginalLevelData(),
                s = null === (o = this.context.getGameData()) || void 0 === o ? void 0 : o.getLevelIndex(),
                c = null === (n = this.context.getGameData()) || void 0 === n ? void 0 : n.getLevelName(),
                u = null === (i = this.context.getGameData()) || void 0 === i ? void 0 : i.getOriginalLevelDataWithCardId();
            console.error("[GameController] 执行输入异常:" + (null == r ? void 0 : r.message) + ",stack:" + (null == r ? void 0 : r.stack) + ",inputType:" + (null == e ? void 0 : e.inputType) + ",originalLevelData:" + a + ",originalLevelDataWithCardId:" + u + ",levelIndex:" + s + ",levelName:" + c);
            return this.createEmptyBehavior(e);
        }
    }
}