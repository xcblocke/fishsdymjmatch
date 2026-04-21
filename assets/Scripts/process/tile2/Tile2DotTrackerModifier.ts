import { BaseCoreObject } from '../../BaseCoreObject';
import { EErrorClickType } from '../../dotTracker/Tile2DotTracker';
export class Tile2DotTrackerModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  recordErrorFlip(e) {
    var t;
    null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, EErrorClickType.Flip);
  }
  recordErrorDrag(e) {
    var t;
    null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, EErrorClickType.Drag);
  }
  recordErrorLock(e) {
    var t;
    null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, EErrorClickType.Lock);
  }
  recordUseShuffle(e) {
    var t;
    e || null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordShuffle(this.context);
  }
  recordUseRevert() {
    var e;
    null === (e = this.context.getTile2DotTracker()) || void 0 === e || e.recordRevert(this.context);
  }
  recordUseHint(e) {
    var t;
    null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordHint(this.context, e);
  }
  recordUseMagnet(e) {
    var t;
    null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordMagnet(this.context, e);
  }
  recordUseRevive() {}
  addSlotBar(e) {
    var t,
      o = this.context.getTileMapObject().getTileObject(e);
    if (o) {
      var n = this.context.getGameData().slotBarIds;
      o.getIsInSlotBar() || n.includes(o.saveKey()) || null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordAddSlot(this.context, e);
    }
  }
}