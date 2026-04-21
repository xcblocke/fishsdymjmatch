import { BaseCoreObject } from '../../BaseCoreObject';
import { ETileType } from '../../simulator/constant/TileTypeEnum';
export default class Tile2NormalBackModifier extends BaseCoreObject {
  @mj.traitEvent("T2NorBackMod_isEnable")
  isEnable() {
    return false;
  }
  @mj.traitEvent("T2NorBackMod_getExcludes")
  getExcludeTiles() {
    return [ETileType.RollCard, ETileType.DaxiaoCard, ETileType.DuoxiaoCard, ETileType.RankCard, ETileType.Yoga];
  }
  modifyStatus() {
    var e, t;
    if (!this.isEnable()) return [];
    var o = this.context.getTileMapObject().aliveTiles().filter(function (e) {
        return !e.getIsInSlotBar();
      }),
      n = this.getExcludeTiles(),
      i = [],
      r = function r(e) {
        if (n.some(function (t) {
          return e.checkHasType(t);
        })) return "continue";
        if (0 === e.isCardLock()) {
          if (e.getIsBack()) {
            e.setIsBack(false);
            i.push({
              tileId: e.id,
              isBack: false
            });
          }
        } else if (!e.getIsBack()) {
          e.setIsBack(true);
          i.push({
            tileId: e.id,
            isBack: true
          });
        }
      };
    try {
      for (var l = __values(o), s = l.next(); !s.done; s = l.next()) r(s.value);
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (t = l.return) && t.call(l);
      } finally {
        if (e) throw e.error;
      }
    }
    return i;
  }
}