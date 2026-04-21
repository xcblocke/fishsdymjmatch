import { BaseCoreObject } from '../../BaseCoreObject';
export class TouchModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  modifyTouchStartLock(e) {
    this._context.touchData.setIsLock(e);
  }
  modifyTouchStartClear(e) {
    this._context.touchData.setIsClear(e);
  }
  modifyTouchStart(e, t) {
    var o = this._context.touchData;
    o.setIsValid(e);
    o.setPos(t);
    o.setStartPos(t);
    o.setIsMoving(false);
    o.setIsLock(false);
    o.setIsClear(false);
    o.setTileId(null);
  }
  modifyTouchMove(e) {
    var t = this._context.touchData;
    t.setPos(e);
    t.setIsMoving(true);
  }
  modifyTouchEnd() {
    this._context.touchData.clear();
  }
  modifyTouchCancel() {
    this._context.touchData.clear();
  }
}