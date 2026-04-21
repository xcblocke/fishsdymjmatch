import { BaseCoreObject } from '../../BaseCoreObject';
export class TileChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  checkIsLock(e) {
    var t = this.context.getTileMapObject(),
      o = this.context.getTileMapObject().getTileObject(e);
    return !!o && 0 != t.isCardLock(o);
  }
}