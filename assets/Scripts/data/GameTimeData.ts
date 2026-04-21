import { BaseCoreObject } from '../BaseCoreObject';
export class GameTimeData extends BaseCoreObject {
  _time = 0;
  _baseTime = 0;
  _isPause = true;
  get time() {
    return this._time;
  }
  set time(e) {
    if (!this._isPause) {
      this._time = this._time + e;
      this.context.getGameData().setCurrentRoundTime(this._time);
    }
  }
  initTime(e = 0) {
    this._baseTime = e;
    this._time = e;
    this._isPause = false;
  }
  reset() {
    this._time = 0;
    this._baseTime = 0;
    this._isPause = false;
  }
  stop() {
    this._isPause = true;
    this._time = 0;
    this._baseTime = 0;
  }
  restart() {
    this._time = 0;
    this._baseTime = 0;
    this._isPause = false;
  }
}