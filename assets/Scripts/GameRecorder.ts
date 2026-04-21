export default class GameRecorder {
  _list = [];
  _videoList = [];
  static _instance = null;
  static getInstance() {
    this._instance || (this._instance = new GameRecorder());
    return this._instance;
  }
  push(e) {
    this._list.push(e);
  }
  getList() {
    return this._videoList;
  }
  clear() {
    this._list.length > 0 && (this._videoList = this._list.slice());
    this._list = [];
  }
}