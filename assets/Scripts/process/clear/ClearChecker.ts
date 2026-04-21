import { BaseCoreObject } from '../../BaseCoreObject';
export class ClearChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  checkCanClear2() {
    return this._context.getTileMapObject().canClear();
  }
  checkCanClear(e) {
    return this._context.getTileMapObject().canClear(e);
  }
}