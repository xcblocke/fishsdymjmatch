"use strict";
cc._RF.push(module, 'e38cceTUbtHF5EZjOKul/rB', 'GameDisplay');
// Scripts/simulator/constant/GameDisplay.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDisplay = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var BehaviorsInterface_1 = require("./BehaviorsInterface");
var GameInputEnum_1 = require("./GameInputEnum");
var SimulatorEvent_1 = require("../../core/simulator/events/SimulatorEvent");
var GameDisplay = /** @class */ (function (_super) {
    __extends(GameDisplay, _super);
    function GameDisplay(t) {
        var _this = _super.call(this, t) || this;
        _this._gameSimulator = null;
        _this._gameContext = null;
        _this._gameSimulator = t.gameSimulator;
        _this._gameContext = t;
        return _this;
    }
    GameDisplay.prototype.getAllNames = function (e) {
        var t = this, o = [];
        switch (e.type) {
            case BehaviorsInterface_1.EBehaviorExecutionType.Single:
                var n = e.data;
                o.push(n.name);
                break;
            case BehaviorsInterface_1.EBehaviorExecutionType.Serial:
            case BehaviorsInterface_1.EBehaviorExecutionType.Parallel:
                e.data.forEach(function (e) {
                    o.push.apply(o, __spreadArrays(t.getAllNames(e)));
                });
        }
        return o;
    };
    GameDisplay.prototype.display = function (e, t, o) {
        var n;
        n = this.getAllNames(t) || [];
        if (t) {
            if (e != GameInputEnum_1.EGameInputEnum.UpdateTime) {
                var i = {
                    behaviorExecution: t,
                    inputType: e,
                    names: n,
                    logIndex: o
                };
                if (this._gameContext.isVideo) {
                    mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_DISPLAY_VIDEO, i);
                }
                else {
                    mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_DISPLAY, i);
                }
            }
            else
                this._gameSimulator.onDisplayFinish(e, o);
        }
        else
            this._gameSimulator.onDisplayFinish(e, o);
    };
    return GameDisplay;
}(BaseCoreObject_1.BaseCoreObject));
exports.GameDisplay = GameDisplay;

cc._RF.pop();