import { InputBase } from './InputBase';
export default class InputGameTime extends InputBase {
  _ignoreLog = true;
  @mj.traitEvent("IptGameTime_exec")
  excute(e) {
    this.gameController.gameTimeData.time = e.time;
  }
}