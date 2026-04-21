import { BaseCoreObject } from '../BaseCoreObject';
import { EGameInputEnum, InputRunType } from '../simulator/constant/GameInputEnum';
import GameRecorder from '../GameRecorder';
import { GameInputHandler } from '../simulator/constant/GameInputHandler';
import { GameDisplay } from '../simulator/constant/GameDisplay';
import { GameOutputHandler } from '../simulator/constant/GameOutputHandler';
import { GameController } from '../process/GameController';
import { SimulatorLog } from './SimulatorLog';
var l = {
  Invalid: "invalid",
  Running: "running",
  Paused: "paused",
  Waiting: "waiting",
  Stopped: "stopped"
};
export class GameSimulator extends BaseCoreObject {
  _inputSequence = [];
  _isRunning = false;
  _isDisplaying = false;
  _isWaitingDisplay = false;
  _disPlayCount = 0;
  _state = l.Invalid;
  _logCount = 0;
  _gameContext = null;
  _gameInputHandler = null;
  _gameController = null;
  _gameOutputHandler = null;
  _gameDisplay =null;
  static CONST_SHOW_DEBUG_INFO = false;
  get gameContext() {
    return this._gameContext;
  }
  constructor(t) {
    super(t);
    this._gameContext = t;
    this._gameContext._gameSimulator = this;
    this._gameInputHandler = new GameInputHandler(this.context);
    this. _gameController = new GameController(this.context);
    this._gameOutputHandler = new GameOutputHandler(this.context);
    this._gameDisplay = new GameDisplay(this.context);
    GameRecorder.getInstance().clear();
  }
  input(e) {
    e.inputType != EGameInputEnum.UpdateTime && GameSimulator.CONST_SHOW_DEBUG_INFO;
    this._gameContext.isVideo;
    if (e.inputType !== EGameInputEnum.DisplaySimulator) {
      e.inputType === EGameInputEnum.StopSimulator && this.setState(l.Stopped);
      e.inputType === EGameInputEnum.ResumeSimulator && this.setState(l.Running);
      if (this.getState() !== l.Paused) {
        e.inputType === EGameInputEnum.PauseSimulator && this.setState(l.Paused);
        if (!(e && e.runType === InputRunType.RunInIdle && this._disPlayCount > 0)) {
          this._inputSequence.push(e);
          this.runInputSequence();
        }
      }
    } else {
      var o = e;
      this.onDisplayFinish(o.displayInputType, e.logIndex);
    }
  }
  handleInput(e) {
    (e.runType || InputRunType.Normal) === InputRunType.Wait && (this._isWaitingDisplay = true);
    this._isRunning = true;
    this._isDisplaying = true;
    try {
      if (!e || !e.inputType) throw new Error("无效的输入参数");
      var o = this._gameInputHandler.parseInput(e);
      o.key = this._logCount;
      var n = this._gameController.excute(o);
      if (n) {
        if (e.inputType != EGameInputEnum.UpdateTime) {
          this._logCount++;
          e.logIndex = this._logCount;
          GameSimulator.CONST_SHOW_DEBUG_INFO;
        }
        this._disPlayCount++;
        this._gameDisplay.display(e.inputType, n, e.logIndex);
      }
    } catch (t) {
      console.error.apply(console, [...SimulatorLog.error("处理输入异常:", e, t)]);
      console.error("[GameSimulator] 处理输入异常:" + (null == t ? void 0 : t.message) + ",stack:" + (null == t ? void 0 : t.stack) + ",inputType:" + (null == e ? void 0 : e.inputType));
      this.onInputError(e, t);
    } finally {
      this._isRunning = false;
    }
  }
  onInputError() {}
  runInputSequence() {
    if (!this._isRunning && !this._isWaitingDisplay && this._inputSequence.length > 0) {
      var e = this._inputSequence[0];
      if (this.getState() !== l.Running && e.inputType !== EGameInputEnum.StartSimulator) return;
      if ((e.runType || InputRunType.Normal) === InputRunType.Wait && this._isDisplaying) return;
      this.handleInput(this._inputSequence.shift());
      this.runInputSequence();
    }
  }
  hasInputInsequence() {
    return this._inputSequence.length > 0;
  }
  setState(e) {
    this._state = e;
  }
  getState() {
    return this._state;
  }
  onDisplayFinish(e) {
    this._disPlayCount--;
    this._isDisplaying = false;
    this._isWaitingDisplay && (this._isWaitingDisplay = false);
    e != EGameInputEnum.UpdateTime && GameSimulator.CONST_SHOW_DEBUG_INFO;
    e === EGameInputEnum.StartSimulator && this.setState(l.Running);
    if (this.getState() === l.Stopped && !this.hasInputInsequence()) {
      this.setState(l.Invalid);
      this.dispose();
    }
    this.runInputSequence();
  }
  dispose() {
    if (!this._gameContext.isVideo) {
      var e = GameRecorder.getInstance();
      e && e.clear && "function" == typeof e.clear && e.clear();
    }
    this._gameInputHandler.dispose();
    this._gameController.dispose();
    this._gameOutputHandler.dispose();
    this._gameDisplay.dispose();
    this._gameContext.dispose();
  }
}