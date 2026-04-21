import { ResId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { RankCardType } from '../../../Scripts/tileTypes/RankCardType';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("OldGenRankCardTrait")
export default class OldGenRankCardTrait extends Trait {
  static traitKey = "OldGenRankCard";
  onLoad() {
    super.onLoad.call(this);
  }
  onRankCardType_modify(e, r) {
    var t,
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
      t = {
        error: e
      };
    } finally {
      try {
        f && !f.done && (n = p.return) && n.call(p);
      } finally {
        if (t) throw t.error;
      }
    }
    if (0 !== u.size) {
      var T = Array.from(u.values());
      T.sort(function (e, r) {
        return r.length - e.length;
      });
      var v = o.randomGenerator.randomIntInclusive(0, 99) > 80 ? 4 : 2;
      if (T[0].length < v) r({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });else {
        for (var _ = 0; _ < v; _++) {
          var h = T[0][_];
          h.resId;
          a.changeTileResId(h.id, ResId.emRankId);
          a.setTileType(h.id, ETileType.RankCard);
        }
        RankCardType.saveToGameData(o, v);
        r({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      }
    } else r({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
}