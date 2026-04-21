import { ResId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { RankCardType } from '../../../Scripts/tileTypes/RankCardType';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("GenRankCardTrait")
export default class GenRankCardTrait extends Trait {
  static traitKey = "GenRankCard";
  onLoad() {
    super.onLoad.call(this);
  }
  onRankCardType_modify(e, t) {
    var r,
      n,
      o = e.args[0],
      a = (e.ins, o.getTileMapObject()),
      u = new Map();
    try {
      for (var p = __values(a.aliveTiles()), f = p.next(); !f.done; f = p.next()) {
        var d = f.value;
        if (d.type === ETileType.Normal) {
          var y = d.cardId;
          u.has(y) || u.set(y, []);
          u.get(y).push(d);
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (n = p.return) && n.call(p);
      } finally {
        if (r) throw r.error;
      }
    }
    if (0 !== u.size) {
      var h = Array.from(u.values());
      h.sort(function (e, t) {
        return t.length - e.length;
      });
      for (var T = o.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2, v = [], m = 0; m < h.length; m++) if (h[m].length == T) {
        v = h[m];
        break;
      }
      0 == v.length && (v = h[o.randomGenerator.randomIntInclusive(0, h.length - 1)]);
      for (m = 0; m < v.length; m++) {
        var _ = v[m];
        _.resId;
        a.changeTileResId(_.id, ResId.emRankId);
        a.setTileType(_.id, ETileType.RankCard);
      }
      RankCardType.saveToGameData(o, v.length);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else t();
  }
}