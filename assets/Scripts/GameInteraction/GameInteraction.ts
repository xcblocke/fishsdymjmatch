import { EVT_MSG_KEY_SIMULATOR_INPUT } from '../core/simulator/events/SimulatorEvent';
export class GameInteraction {
  static input(e) {
    mj.EventManager.emit(EVT_MSG_KEY_SIMULATOR_INPUT, e);
  }
}