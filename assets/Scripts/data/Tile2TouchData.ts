export class Tile2TouchData {
  _toushStartTime = null;
  _lastTileId = null;
  _startPos = null;
  _tileId = null;
  _isLock = null;
  _isMoving = null;
  get lastTileId() {
    return this._lastTileId;
  }
  get startPos() {
    return this._startPos;
  }
  get tileId() {
    return this._tileId;
  }
  get isLock() {
    return this._isLock;
  }
  get isMoving() {
    return this._isMoving;
  }
  setToushStartTime() {
    var e = Date.now();
    this._toushStartTime = e;
  }
  getToushStartTime() {
    return this._toushStartTime;
  }
  setLastTileId(e) {
    this._lastTileId = e;
  }
  setStartPos(e) {
    this._startPos = e;
  }
  setTileId(e) {
    this._tileId = e;
  }
  setIsLock(e) {
    this._isLock = e;
  }
  setIsMoving(e) {
    this._isMoving = e;
  }
  clear() {
    this._tileId = null;
    this._isLock = false;
    this._isMoving = false;
    this._startPos = null;
    this._toushStartTime = 0;
  }
}