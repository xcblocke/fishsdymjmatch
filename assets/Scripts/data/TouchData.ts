export class TouchData {
  _tileId = null;
  _isClear = null;
  _isValid = null;
  _isLock = null;
  _isMoving = null;
  _pos = null;
  _startPos = null;
  get tileId() {
    return this._tileId;
  }
  get isClear() {
    return this._isClear;
  }
  get isValid() {
    return this._isValid;
  }
  get isLock() {
    return this._isLock;
  }
  get isMoving() {
    return this._isMoving;
  }
  get startPos() {
    return this._startPos;
  }
  setTileId(e) {
    this._tileId = e;
  }
  setIsClear(e) {
    this._isClear = e;
  }
  setIsValid(e) {
    this._isValid = e;
  }
  setIsLock(e) {
    this._isLock = e;
  }
  setIsMoving(e) {
    this._isMoving = e;
  }
  setPos(e) {
    this._pos = e;
  }
  getPos() {
    return this._pos;
  }
  setStartPos(e) {
    this._startPos = e;
  }
  clear() {
    this._tileId = null;
    this._isValid = false;
    this._isLock = false;
    this._isClear = false;
    this._isMoving = false;
    this._pos = null;
    this._startPos = null;
  }
}