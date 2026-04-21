export class BaseContext {
  _isVideo = false;
  get isVideo() {
    return this._isVideo;
  }
  dispose() {}
}