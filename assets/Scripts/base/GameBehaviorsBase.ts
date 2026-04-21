import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
export class GameBehaviorsBase {
  _behaviorId = "";
  _timeout = 8000;
  _context = null;
  _data = null;
  _cb = null;
  get context() {
    return this._context;
  }
  get behaviorId() {
    return this._behaviorId;
  }
  get effect() {
    return this._data;
  }
  getTimeout() {
    return this._timeout;
  }
  init(e, t) {
    this._context = e;
    t && (this._behaviorId = t);
  }
  execute(e, t) {
    this._data = e;
    this._cb = t;
    this.start(e);
  }
  finish(e = EBehaviorEnum.Success) {
    if (this._cb) {
      this._cb(e || EBehaviorEnum.Success);
      this._cb = null;
    }
  }
  fail(e) {
    if (this._cb) {
      this._cb(EBehaviorEnum.Fail, e);
      this._cb = null;
    }
  }
  dispose() {}
  onAbort() {
    this.finish(EBehaviorEnum.Abort);
  }
  forceCleanup() {
    this._cb = null;
    this._data = null;
  }
}