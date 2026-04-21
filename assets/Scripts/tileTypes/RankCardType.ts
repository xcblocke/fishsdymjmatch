import UserModel from '../gamePlay/user/UserModel';
import { ResId } from '../core/simulator/constant/GameTypeEnums';
import { ETileType } from '../simulator/constant/TileTypeEnum';
export class RankCardType {
  @mj.traitEvent("RankCardType_modify")
  static modify(t) {
    RankCardType.fixModify(t);
  }
  static saveToGameData(e, t) {
    e.gameType === UserModel.getInstance().getMainGameType() && e.getGameData().setRankCardCount(t);
  }
  static fixModify(t) {
    var o,
      n,
      r = t.getTileMapObject(),
      s = new Map();
    try {
      for (var c = __values(r.aliveTiles()), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        if (p.checkIsNormal()) {
          var f = p.cardId;
          s.has(f) || s.set(f, []);
          s.get(f).push(p);
        }
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (n = c.return) && n.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    if (0 !== s.size) {
      var d = Array.from(s.values());
      d.sort(function (e, t) {
        return t.length - e.length;
      });
      for (var h = t.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2, y = [], m = [], v = d.length - 1; v >= 0; v--) {
        var g = d[v];
        if (g.length === h) {
          y = g;
          break;
        }
        g.length >= h && (m = g);
      }
      0 === y.length && m.length > 0 && (y = m);
      0 === y.length && (h = (y = d[t.randomGenerator.randomIntInclusive(0, d.length - 1)]).length);
      var _ = Math.min(h, y.length);
      for (v = 0; v < _; v++) {
        var T = y[v];
        r.changeTileResId(T.id, ResId.emRankId);
        r.setTileType(T.id, ETileType.RankCard);
      }
      RankCardType.saveToGameData(t, _);
    }
  }
}