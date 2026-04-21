import { BaseCoreObject } from '../../BaseCoreObject';
import { ETile2SlotType } from '../../core/simulator/constant/GameTypeEnums';
export class Tile2PerfectChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  checkIsPerfect(e, t) {
    if (!e || 0 === e.length) return false;
    if (!t || 0 === t.length) return false;
    var o = this._context.getGameData().slotBarCount;
    this._context.getTile2SlotType() === ETile2SlotType.Slot3 && (o = Math.max(0, o - 1));
    if (o <= 0) return false;
    if (e.length !== o) return false;
    var n = e[e.length - 1],
      i = t[0];
    return i[0] === n || i[1] === n;
  }
}