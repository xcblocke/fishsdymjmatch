
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/simulator/constant/GameDisplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRGlzcGxheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCwyREFBOEQ7QUFDOUQsaURBQWlEO0FBQ2pELDZFQUFnSTtBQUNoSTtJQUFpQywrQkFBYztJQUc3QyxxQkFBWSxDQUFDO1FBQWIsWUFDRSxrQkFBTSxDQUFDLENBQUMsU0FHVDtRQU5ELG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBR2xCLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7SUFDeEIsQ0FBQztJQUNELGlDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDZCxLQUFLLDJDQUFzQixDQUFDLE1BQU07Z0JBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsTUFBTTtZQUNSLEtBQUssMkNBQXNCLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUssMkNBQXNCLENBQUMsUUFBUTtnQkFDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO29CQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDZCQUFPLEdBQVAsVUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQztRQUNOLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxJQUFJLDhCQUFjLENBQUMsVUFBVSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsR0FBRztvQkFDTixpQkFBaUIsRUFBRSxDQUFDO29CQUNwQixTQUFTLEVBQUUsQ0FBQztvQkFDWixLQUFLLEVBQUUsQ0FBQztvQkFDUixRQUFRLEVBQUUsQ0FBQztpQkFDWixDQUFDO2dCQUNGLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQzdCLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9EQUFtQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM5RDtxQkFBTTtvQkFDTCxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyw4Q0FBNkIsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7YUFDRjs7Z0JBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEOztZQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxDQTNDZ0MsK0JBQWMsR0EyQzlDO0FBM0NZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBFQmVoYXZpb3JFeGVjdXRpb25UeXBlIH0gZnJvbSAnLi9CZWhhdmlvcnNJbnRlcmZhY2UnO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuL0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfU0lNVUxBVE9SX0RJU1BMQVlfVklERU8sIEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ESVNQTEFZIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvZXZlbnRzL1NpbXVsYXRvckV2ZW50JztcbmV4cG9ydCBjbGFzcyBHYW1lRGlzcGxheSBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgX2dhbWVTaW11bGF0b3IgPSBudWxsO1xuICBfZ2FtZUNvbnRleHQgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gICAgdGhpcy5fZ2FtZVNpbXVsYXRvciA9IHQuZ2FtZVNpbXVsYXRvcjtcbiAgICB0aGlzLl9nYW1lQ29udGV4dCA9IHQ7XG4gIH1cbiAgZ2V0QWxsTmFtZXMoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBbXTtcbiAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgY2FzZSBFQmVoYXZpb3JFeGVjdXRpb25UeXBlLlNpbmdsZTpcbiAgICAgICAgdmFyIG4gPSBlLmRhdGE7XG4gICAgICAgIG8ucHVzaChuLm5hbWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUJlaGF2aW9yRXhlY3V0aW9uVHlwZS5TZXJpYWw6XG4gICAgICBjYXNlIEVCZWhhdmlvckV4ZWN1dGlvblR5cGUuUGFyYWxsZWw6XG4gICAgICAgIGUuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgby5wdXNoLmFwcGx5KG8sIFsuLi50LmdldEFsbE5hbWVzKGUpXSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbztcbiAgfVxuICBkaXNwbGF5KGUsIHQsIG8pIHtcbiAgICB2YXIgbjtcbiAgICBuID0gdGhpcy5nZXRBbGxOYW1lcyh0KSB8fCBbXTtcbiAgICBpZiAodCkge1xuICAgICAgaWYgKGUgIT0gRUdhbWVJbnB1dEVudW0uVXBkYXRlVGltZSkge1xuICAgICAgICB2YXIgaSA9IHtcbiAgICAgICAgICBiZWhhdmlvckV4ZWN1dGlvbjogdCxcbiAgICAgICAgICBpbnB1dFR5cGU6IGUsXG4gICAgICAgICAgbmFtZXM6IG4sXG4gICAgICAgICAgbG9nSW5kZXg6IG9cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVDb250ZXh0LmlzVmlkZW8pIHtcbiAgICAgICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9TSU1VTEFUT1JfRElTUExBWV9WSURFTywgaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRVZUX01TR19LRVlfU0lNVUxBVE9SX0RJU1BMQVksIGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdGhpcy5fZ2FtZVNpbXVsYXRvci5vbkRpc3BsYXlGaW5pc2goZSwgbyk7XG4gICAgfSBlbHNlIHRoaXMuX2dhbWVTaW11bGF0b3Iub25EaXNwbGF5RmluaXNoKGUsIG8pO1xuICB9XG59Il19