import { ETileType } from '../simulator/constant/TileTypeEnum';
export default class DuoxiaoCardType {
  @mj.traitEvent("DuoxiaoCt_modify")
  static modify(e) {
    var t,
      o,
      n = e.getTileMapObject(),
      a = n.maxLayerIndex,
      l = n.aliveTiles().filter(function (e) {
        return !(!e.checkIsNormal() || a - e.layer > 1);
      }),
      s = e.randomGenerator,
      c = this.getGenCountRange(),
      u = s.randomInt(c[0], c[1]),
      p = s.randomElements(l, u);
    if (p.length > 0) try {
      for (var f = __values(p), d = f.next(); !d.done; d = f.next()) {
        var h = d.value,
          y = this.getCountRange(),
          m = s.randomInt(y[0], y[1]);
        n.setDuoxiaoCount(h.id, m);
        n.setTileType(h.id, ETileType.DuoxiaoCard);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (o = f.return) && o.call(f);
      } finally {
        if (t) throw t.error;
      }
    }
  }
  @mj.traitEvent("DuoxiaoCt_genCountRange")
  static getGenCountRange() {
    return [1, 3];
  }
  @mj.traitEvent("DuoxiaoCt_countRange")
  static getCountRange() {
    return [4, 6];
  }
}