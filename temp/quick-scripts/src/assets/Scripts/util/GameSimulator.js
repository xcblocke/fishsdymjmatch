"use strict";
cc._RF.push(module, '1a6e97v3e9NPJfA66l3+WnY', 'GameSimulator');
// Scripts/util/GameSimulator.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSimulator = void 0;
var BaseCoreObject_1 = require("../BaseCoreObject");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameRecorder_1 = require("../GameRecorder");
var GameInputHandler_1 = require("../simulator/constant/GameInputHandler");
var GameDisplay_1 = require("../simulator/constant/GameDisplay");
var GameOutputHandler_1 = require("../simulator/constant/GameOutputHandler");
var GameController_1 = require("../process/GameController");
var SimulatorLog_1 = require("./SimulatorLog");
var l = {
    Invalid: "invalid",
    Running: "running",
    Paused: "paused",
    Waiting: "waiting",
    Stopped: "stopped"
};
var GameSimulator = /** @class */ (function (_super) {
    __extends(GameSimulator, _super);
    function GameSimulator(t) {
        var _this = _super.call(this, t) || this;
        _this._inputSequence = [];
        _this._isRunning = false;
        _this._isDisplaying = false;
        _this._isWaitingDisplay = false;
        _this._disPlayCount = 0;
        _this._state = l.Invalid;
        _this._logCount = 0;
        _this._gameContext = null;
        _this._gameInputHandler = null;
        _this._gameController = null;
        _this._gameOutputHandler = null;
        _this._gameDisplay = null;
        _this._gameContext = t;
        _this._gameContext._gameSimulator = _this;
        _this._gameInputHandler = new GameInputHandler_1.GameInputHandler(_this.context);
        _this._gameController = new GameController_1.GameController(_this.context);
        _this._gameOutputHandler = new GameOutputHandler_1.GameOutputHandler(_this.context);
        _this._gameDisplay = new GameDisplay_1.GameDisplay(_this.context);
        GameRecorder_1.default.getInstance().clear();
        return _this;
    }
    Object.defineProperty(GameSimulator.prototype, "gameContext", {
        get: function () {
            return this._gameContext;
        },
        enumerable: false,
        configurable: true
    });
    GameSimulator.prototype.input = function (e) {
        e.inputType != GameInputEnum_1.EGameInputEnum.UpdateTime && GameSimulator.CONST_SHOW_DEBUG_INFO;
        this._gameContext.isVideo;
        if (e.inputType !== GameInputEnum_1.EGameInputEnum.DisplaySimulator) {
            e.inputType === GameInputEnum_1.EGameInputEnum.StopSimulator && this.setState(l.Stopped);
            e.inputType === GameInputEnum_1.EGameInputEnum.ResumeSimulator && this.setState(l.Running);
            if (this.getState() !== l.Paused) {
                e.inputType === GameInputEnum_1.EGameInputEnum.PauseSimulator && this.setState(l.Paused);
                if (!(e && e.runType === GameInputEnum_1.InputRunType.RunInIdle && this._disPlayCount > 0)) {
                    this._inputSequence.push(e);
                    this.runInputSequence();
                }
            }
        }
        else {
            var o = e;
            this.onDisplayFinish(o.displayInputType, e.logIndex);
        }
    };
    GameSimulator.prototype.handleInput = function (e) {
        (e.runType || GameInputEnum_1.InputRunType.Normal) === GameInputEnum_1.InputRunType.Wait && (this._isWaitingDisplay = true);
        this._isRunning = true;
        this._isDisplaying = true;
        try {
            if (!e || !e.inputType)
                throw new Error("无效的输入参数");
            var o = this._gameInputHandler.parseInput(e);
            o.key = this._logCount;
            var n = this._gameController.excute(o);
            if (n) {
                if (e.inputType != GameInputEnum_1.EGameInputEnum.UpdateTime) {
                    this._logCount++;
                    e.logIndex = this._logCount;
                    GameSimulator.CONST_SHOW_DEBUG_INFO;
                }
                this._disPlayCount++;
                this._gameDisplay.display(e.inputType, n, e.logIndex);
            }
        }
        catch (t) {
            console.error.apply(console, __spreadArrays(SimulatorLog_1.SimulatorLog.error("处理输入异常:", e, t)));
            console.error("[GameSimulator] 处理输入异常:" + (null == t ? void 0 : t.message) + ",stack:" + (null == t ? void 0 : t.stack) + ",inputType:" + (null == e ? void 0 : e.inputType));
            this.onInputError(e, t);
        }
        finally {
            this._isRunning = false;
        }
    };
    GameSimulator.prototype.onInputError = function () { };
    GameSimulator.prototype.runInputSequence = function () {
        if (!this._isRunning && !this._isWaitingDisplay && this._inputSequence.length > 0) {
            var e = this._inputSequence[0];
            if (this.getState() !== l.Running && e.inputType !== GameInputEnum_1.EGameInputEnum.StartSimulator)
                return;
            if ((e.runType || GameInputEnum_1.InputRunType.Normal) === GameInputEnum_1.InputRunType.Wait && this._isDisplaying)
                return;
            this.handleInput(this._inputSequence.shift());
            this.runInputSequence();
        }
    };
    GameSimulator.prototype.hasInputInsequence = function () {
        return this._inputSequence.length > 0;
    };
    GameSimulator.prototype.setState = function (e) {
        this._state = e;
    };
    GameSimulator.prototype.getState = function () {
        return this._state;
    };
    GameSimulator.prototype.onDisplayFinish = function (e) {
        this._disPlayCount--;
        this._isDisplaying = false;
        this._isWaitingDisplay && (this._isWaitingDisplay = false);
        e != GameInputEnum_1.EGameInputEnum.UpdateTime && GameSimulator.CONST_SHOW_DEBUG_INFO;
        e === GameInputEnum_1.EGameInputEnum.StartSimulator && this.setState(l.Running);
        if (this.getState() === l.Stopped && !this.hasInputInsequence()) {
            this.setState(l.Invalid);
            this.dispose();
        }
        this.runInputSequence();
    };
    GameSimulator.prototype.dispose = function () {
        if (!this._gameContext.isVideo) {
            var e = GameRecorder_1.default.getInstance();
            e && e.clear && "function" == typeof e.clear && e.clear();
        }
        this._gameInputHandler.dispose();
        this._gameController.dispose();
        this._gameOutputHandler.dispose();
        this._gameDisplay.dispose();
        this._gameContext.dispose();
    };
    GameSimulator.CONST_SHOW_DEBUG_INFO = false;
    return GameSimulator;
}(BaseCoreObject_1.BaseCoreObject));
exports.GameSimulator = GameSimulator;

cc._RF.pop();