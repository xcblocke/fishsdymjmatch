
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/util/GameSimulator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3V0aWwvR2FtZVNpbXVsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxxRUFBbUY7QUFDbkYsZ0RBQTJDO0FBQzNDLDJFQUEwRTtBQUMxRSxpRUFBZ0U7QUFDaEUsNkVBQTRFO0FBQzVFLDREQUEyRDtBQUMzRCwrQ0FBOEM7QUFDOUMsSUFBSSxDQUFDLEdBQUc7SUFDTixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixNQUFNLEVBQUUsUUFBUTtJQUNoQixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUUsU0FBUztDQUNuQixDQUFDO0FBQ0Y7SUFBbUMsaUNBQWM7SUFpQi9DLHVCQUFZLENBQUM7UUFBYixZQUNFLGtCQUFNLENBQUMsQ0FBQyxTQVFUO1FBekJELG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixZQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuQixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixrQkFBWSxHQUFFLElBQUksQ0FBQztRQU9qQixLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUM7UUFDeEMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksbUNBQWdCLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELEtBQUksQ0FBRSxlQUFlLEdBQUcsSUFBSSwrQkFBYyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7O0lBQ3JDLENBQUM7SUFaRCxzQkFBSSxzQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBV0QsNkJBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxDQUFDLENBQUMsU0FBUyxJQUFJLDhCQUFjLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQyxTQUFTLEtBQUssOEJBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxDQUFDLENBQUMsU0FBUyxLQUFLLDhCQUFjLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxTQUFTLEtBQUssOEJBQWMsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDaEMsQ0FBQyxDQUFDLFNBQVMsS0FBSyw4QkFBYyxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssNEJBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUN6QjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFDRCxtQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLDRCQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUk7WUFDRixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksOEJBQWMsQ0FBQyxVQUFVLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUM1QixhQUFhLENBQUMscUJBQXFCLENBQUM7aUJBQ3JDO2dCQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8saUJBQU0sMkJBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO2dCQUFTO1lBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQ0Qsb0NBQVksR0FBWixjQUFnQixDQUFDO0lBQ2pCLHdDQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyw4QkFBYyxDQUFDLGNBQWM7Z0JBQUUsT0FBTztZQUMzRixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSw0QkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLDRCQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhO2dCQUFFLE9BQU87WUFDM0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQ0QsMENBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNELHVDQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxJQUFJLDhCQUFjLENBQUMsVUFBVSxJQUFJLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUN0RSxDQUFDLEtBQUssOEJBQWMsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCwrQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLHNCQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0Q7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFuR00sbUNBQXFCLEdBQUcsS0FBSyxDQUFDO0lBb0d2QyxvQkFBQztDQWpIRCxBQWlIQyxDQWpIa0MsK0JBQWMsR0FpSGhEO0FBakhZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgSW5wdXRSdW5UeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IEdhbWVSZWNvcmRlciBmcm9tICcuLi9HYW1lUmVjb3JkZXInO1xuaW1wb3J0IHsgR2FtZUlucHV0SGFuZGxlciB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRIYW5kbGVyJztcbmltcG9ydCB7IEdhbWVEaXNwbGF5IH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVEaXNwbGF5JztcbmltcG9ydCB7IEdhbWVPdXRwdXRIYW5kbGVyIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVPdXRwdXRIYW5kbGVyJztcbmltcG9ydCB7IEdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi4vcHJvY2Vzcy9HYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgeyBTaW11bGF0b3JMb2cgfSBmcm9tICcuL1NpbXVsYXRvckxvZyc7XG52YXIgbCA9IHtcbiAgSW52YWxpZDogXCJpbnZhbGlkXCIsXG4gIFJ1bm5pbmc6IFwicnVubmluZ1wiLFxuICBQYXVzZWQ6IFwicGF1c2VkXCIsXG4gIFdhaXRpbmc6IFwid2FpdGluZ1wiLFxuICBTdG9wcGVkOiBcInN0b3BwZWRcIlxufTtcbmV4cG9ydCBjbGFzcyBHYW1lU2ltdWxhdG9yIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBfaW5wdXRTZXF1ZW5jZSA9IFtdO1xuICBfaXNSdW5uaW5nID0gZmFsc2U7XG4gIF9pc0Rpc3BsYXlpbmcgPSBmYWxzZTtcbiAgX2lzV2FpdGluZ0Rpc3BsYXkgPSBmYWxzZTtcbiAgX2Rpc1BsYXlDb3VudCA9IDA7XG4gIF9zdGF0ZSA9IGwuSW52YWxpZDtcbiAgX2xvZ0NvdW50ID0gMDtcbiAgX2dhbWVDb250ZXh0ID0gbnVsbDtcbiAgX2dhbWVJbnB1dEhhbmRsZXIgPSBudWxsO1xuICBfZ2FtZUNvbnRyb2xsZXIgPSBudWxsO1xuICBfZ2FtZU91dHB1dEhhbmRsZXIgPSBudWxsO1xuICBfZ2FtZURpc3BsYXkgPW51bGw7XG4gIHN0YXRpYyBDT05TVF9TSE9XX0RFQlVHX0lORk8gPSBmYWxzZTtcbiAgZ2V0IGdhbWVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl9nYW1lQ29udGV4dDtcbiAgfVxuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gICAgdGhpcy5fZ2FtZUNvbnRleHQgPSB0O1xuICAgIHRoaXMuX2dhbWVDb250ZXh0Ll9nYW1lU2ltdWxhdG9yID0gdGhpcztcbiAgICB0aGlzLl9nYW1lSW5wdXRIYW5kbGVyID0gbmV3IEdhbWVJbnB1dEhhbmRsZXIodGhpcy5jb250ZXh0KTtcbiAgICB0aGlzLiBfZ2FtZUNvbnRyb2xsZXIgPSBuZXcgR2FtZUNvbnRyb2xsZXIodGhpcy5jb250ZXh0KTtcbiAgICB0aGlzLl9nYW1lT3V0cHV0SGFuZGxlciA9IG5ldyBHYW1lT3V0cHV0SGFuZGxlcih0aGlzLmNvbnRleHQpO1xuICAgIHRoaXMuX2dhbWVEaXNwbGF5ID0gbmV3IEdhbWVEaXNwbGF5KHRoaXMuY29udGV4dCk7XG4gICAgR2FtZVJlY29yZGVyLmdldEluc3RhbmNlKCkuY2xlYXIoKTtcbiAgfVxuICBpbnB1dChlKSB7XG4gICAgZS5pbnB1dFR5cGUgIT0gRUdhbWVJbnB1dEVudW0uVXBkYXRlVGltZSAmJiBHYW1lU2ltdWxhdG9yLkNPTlNUX1NIT1dfREVCVUdfSU5GTztcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5pc1ZpZGVvO1xuICAgIGlmIChlLmlucHV0VHlwZSAhPT0gRUdhbWVJbnB1dEVudW0uRGlzcGxheVNpbXVsYXRvcikge1xuICAgICAgZS5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLlN0b3BTaW11bGF0b3IgJiYgdGhpcy5zZXRTdGF0ZShsLlN0b3BwZWQpO1xuICAgICAgZS5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLlJlc3VtZVNpbXVsYXRvciAmJiB0aGlzLnNldFN0YXRlKGwuUnVubmluZyk7XG4gICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpICE9PSBsLlBhdXNlZCkge1xuICAgICAgICBlLmlucHV0VHlwZSA9PT0gRUdhbWVJbnB1dEVudW0uUGF1c2VTaW11bGF0b3IgJiYgdGhpcy5zZXRTdGF0ZShsLlBhdXNlZCk7XG4gICAgICAgIGlmICghKGUgJiYgZS5ydW5UeXBlID09PSBJbnB1dFJ1blR5cGUuUnVuSW5JZGxlICYmIHRoaXMuX2Rpc1BsYXlDb3VudCA+IDApKSB7XG4gICAgICAgICAgdGhpcy5faW5wdXRTZXF1ZW5jZS5wdXNoKGUpO1xuICAgICAgICAgIHRoaXMucnVuSW5wdXRTZXF1ZW5jZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvID0gZTtcbiAgICAgIHRoaXMub25EaXNwbGF5RmluaXNoKG8uZGlzcGxheUlucHV0VHlwZSwgZS5sb2dJbmRleCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUlucHV0KGUpIHtcbiAgICAoZS5ydW5UeXBlIHx8IElucHV0UnVuVHlwZS5Ob3JtYWwpID09PSBJbnB1dFJ1blR5cGUuV2FpdCAmJiAodGhpcy5faXNXYWl0aW5nRGlzcGxheSA9IHRydWUpO1xuICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5faXNEaXNwbGF5aW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKCFlIHx8ICFlLmlucHV0VHlwZSkgdGhyb3cgbmV3IEVycm9yKFwi5peg5pWI55qE6L6T5YWl5Y+C5pWwXCIpO1xuICAgICAgdmFyIG8gPSB0aGlzLl9nYW1lSW5wdXRIYW5kbGVyLnBhcnNlSW5wdXQoZSk7XG4gICAgICBvLmtleSA9IHRoaXMuX2xvZ0NvdW50O1xuICAgICAgdmFyIG4gPSB0aGlzLl9nYW1lQ29udHJvbGxlci5leGN1dGUobyk7XG4gICAgICBpZiAobikge1xuICAgICAgICBpZiAoZS5pbnB1dFR5cGUgIT0gRUdhbWVJbnB1dEVudW0uVXBkYXRlVGltZSkge1xuICAgICAgICAgIHRoaXMuX2xvZ0NvdW50Kys7XG4gICAgICAgICAgZS5sb2dJbmRleCA9IHRoaXMuX2xvZ0NvdW50O1xuICAgICAgICAgIEdhbWVTaW11bGF0b3IuQ09OU1RfU0hPV19ERUJVR19JTkZPO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Rpc1BsYXlDb3VudCsrO1xuICAgICAgICB0aGlzLl9nYW1lRGlzcGxheS5kaXNwbGF5KGUuaW5wdXRUeXBlLCBuLCBlLmxvZ0luZGV4KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIFsuLi5TaW11bGF0b3JMb2cuZXJyb3IoXCLlpITnkIbovpPlhaXlvILluLg6XCIsIGUsIHQpXSk7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW0dhbWVTaW11bGF0b3JdIOWkhOeQhui+k+WFpeW8guW4uDpcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpICsgXCIsc3RhY2s6XCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5zdGFjaykgKyBcIixpbnB1dFR5cGU6XCIgKyAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5pbnB1dFR5cGUpKTtcbiAgICAgIHRoaXMub25JbnB1dEVycm9yKGUsIHQpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgb25JbnB1dEVycm9yKCkge31cbiAgcnVuSW5wdXRTZXF1ZW5jZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzUnVubmluZyAmJiAhdGhpcy5faXNXYWl0aW5nRGlzcGxheSAmJiB0aGlzLl9pbnB1dFNlcXVlbmNlLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBlID0gdGhpcy5faW5wdXRTZXF1ZW5jZVswXTtcbiAgICAgIGlmICh0aGlzLmdldFN0YXRlKCkgIT09IGwuUnVubmluZyAmJiBlLmlucHV0VHlwZSAhPT0gRUdhbWVJbnB1dEVudW0uU3RhcnRTaW11bGF0b3IpIHJldHVybjtcbiAgICAgIGlmICgoZS5ydW5UeXBlIHx8IElucHV0UnVuVHlwZS5Ob3JtYWwpID09PSBJbnB1dFJ1blR5cGUuV2FpdCAmJiB0aGlzLl9pc0Rpc3BsYXlpbmcpIHJldHVybjtcbiAgICAgIHRoaXMuaGFuZGxlSW5wdXQodGhpcy5faW5wdXRTZXF1ZW5jZS5zaGlmdCgpKTtcbiAgICAgIHRoaXMucnVuSW5wdXRTZXF1ZW5jZSgpO1xuICAgIH1cbiAgfVxuICBoYXNJbnB1dEluc2VxdWVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0U2VxdWVuY2UubGVuZ3RoID4gMDtcbiAgfVxuICBzZXRTdGF0ZShlKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBlO1xuICB9XG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuICBvbkRpc3BsYXlGaW5pc2goZSkge1xuICAgIHRoaXMuX2Rpc1BsYXlDb3VudC0tO1xuICAgIHRoaXMuX2lzRGlzcGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzV2FpdGluZ0Rpc3BsYXkgJiYgKHRoaXMuX2lzV2FpdGluZ0Rpc3BsYXkgPSBmYWxzZSk7XG4gICAgZSAhPSBFR2FtZUlucHV0RW51bS5VcGRhdGVUaW1lICYmIEdhbWVTaW11bGF0b3IuQ09OU1RfU0hPV19ERUJVR19JTkZPO1xuICAgIGUgPT09IEVHYW1lSW5wdXRFbnVtLlN0YXJ0U2ltdWxhdG9yICYmIHRoaXMuc2V0U3RhdGUobC5SdW5uaW5nKTtcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgpID09PSBsLlN0b3BwZWQgJiYgIXRoaXMuaGFzSW5wdXRJbnNlcXVlbmNlKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUobC5JbnZhbGlkKTtcbiAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgIH1cbiAgICB0aGlzLnJ1bklucHV0U2VxdWVuY2UoKTtcbiAgfVxuICBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5fZ2FtZUNvbnRleHQuaXNWaWRlbykge1xuICAgICAgdmFyIGUgPSBHYW1lUmVjb3JkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGUgJiYgZS5jbGVhciAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuY2xlYXIgJiYgZS5jbGVhcigpO1xuICAgIH1cbiAgICB0aGlzLl9nYW1lSW5wdXRIYW5kbGVyLmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9nYW1lQ29udHJvbGxlci5kaXNwb3NlKCk7XG4gICAgdGhpcy5fZ2FtZU91dHB1dEhhbmRsZXIuZGlzcG9zZSgpO1xuICAgIHRoaXMuX2dhbWVEaXNwbGF5LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9nYW1lQ29udGV4dC5kaXNwb3NlKCk7XG4gIH1cbn0iXX0=