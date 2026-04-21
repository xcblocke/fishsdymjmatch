import { BaseCoreObject } from '../../BaseCoreObject';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
export default class DuoxiaoChecker extends BaseCoreObject {
  isInDuoxiaoCombo() {
    return this._context.getDuoxiaoClearCount() > 0;
  }
  isHasDuoxiaoCard(e) {
    var t = e[0],
      o = e[1],
      n = this._context.getTileMapObject().getTileObject(t),
      i = this._context.getTileMapObject().getTileObject(o);
    return !(!n.checkHasType(ETileType.DuoxiaoCard) && !i.checkHasType(ETileType.DuoxiaoCard));
  }
  canShowDuoxiaoCombo(e) {
    var t = e[0],
      o = e[1],
      n = this._context.getTileMapObject().getTileObject(t),
      i = this._context.getTileMapObject().getTileObject(o);
    return !(!n.checkHasType(ETileType.DuoxiaoCard) && !i.checkHasType(ETileType.DuoxiaoCard)) || this._context.getDuoxiaoClearCount() > 0;
  }
  getCanClearDuoxiaoCardInfos(e) {
    var t = e[0],
      o = e[1],
      n = this._context.getTileMapObject().getTileObject(t),
      i = this._context.getTileMapObject().getTileObject(o);
    if (n.checkHasType(ETileType.DuoxiaoCard) || i.checkHasType(ETileType.DuoxiaoCard)) {
      var r = 0,
        l = 0;
      n.checkHasType(ETileType.DuoxiaoCard) && (r = n.getDuoxiaoCount());
      i.checkHasType(ETileType.DuoxiaoCard) && (l = i.getDuoxiaoCount());
      return {
        tileId1: t,
        tileId2: o,
        count1: r,
        count2: l,
        count: r + l
      };
    }
  }
}