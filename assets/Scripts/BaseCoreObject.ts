export class BaseCoreObject {
  _context = null;
  get context() {
    return this._context;
  }
  constructor(e) {
    this._context = e;
    this.init();
  }
  init() {}
  dispose() {}
}