import { BaseCoreObject } from '../../BaseCoreObject';
import { EBehaviorExecutionType } from './BehaviorsInterface';
import { EGameInputEnum } from './GameInputEnum';
import { EVT_MSG_KEY_SIMULATOR_DISPLAY_VIDEO, EVT_MSG_KEY_SIMULATOR_DISPLAY } from '../../core/simulator/events/SimulatorEvent';
export class GameDisplay extends BaseCoreObject {
  _gameSimulator = null;
  _gameContext = null;
  constructor(t) {
    super(t);
    this._gameSimulator = t.gameSimulator;
    this._gameContext = t;
  }
  getAllNames(e) {
    var t = this,
      o = [];
    switch (e.type) {
      case EBehaviorExecutionType.Single:
        var n = e.data;
        o.push(n.name);
        break;
      case EBehaviorExecutionType.Serial:
      case EBehaviorExecutionType.Parallel:
        e.data.forEach(function (e) {
          o.push.apply(o, [...t.getAllNames(e)]);
        });
    }
    return o;
  }
  display(e, t, o) {
    var n;
    n = this.getAllNames(t) || [];
    if (t) {
      if (e != EGameInputEnum.UpdateTime) {
        var i = {
          behaviorExecution: t,
          inputType: e,
          names: n,
          logIndex: o
        };
        if (this._gameContext.isVideo) {
          mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_DISPLAY_VIDEO, i);
        } else {
          mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_DISPLAY, i);
        }
      } else this._gameSimulator.onDisplayFinish(e, o);
    } else this._gameSimulator.onDisplayFinish(e, o);
  }
}