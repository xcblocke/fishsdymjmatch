import Trait from '../../../Scripts/framework/trait/Trait';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { ResId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
var c = [ETileType.Bomb, ETileType.DuoxiaoCard, ETileType.DaxiaoCard];
@mj.trait
@mj.class("ShuffleFixRollTrait")
export default class ShuffleFixRollTrait extends Trait {
  static traitKey = "ShuffleFixRoll";
  onLoad() {
    super.onLoad.call(this);
  }
  isSpecialPair(e) {
    var t = [ResId.emBombCardId, ResId.emRankId];
    return !!(t.includes(e[0].resId) || t.includes(e[1].resId) || c.includes(e[0].type) || c.includes(e[1].type));
  }
  onShuffleMod_assignResIds(e, t) {
    var r,
      o,
      i = e.args[0],
      n = e.args[1],
      u = e.ins._context,
      p = [],
      c = [];
    try {
      for (var y = __values(n), d = y.next(); !d.done; d = y.next()) {
        var h = d.value;
        if (this.isSpecialPair(h)) {
          c.push(h);
        } else {
          p.push(h);
        }
      }
    } catch (e) {
      r = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (o = y.return) && o.call(y);
      } finally {
        if (r) throw r.error;
      }
    }
    var T = [...p, ...c];
    this.randomShuffleList(T);
    for (var v = [], _ = 0; 2 * _ + 1 < i.length; _++) v.push([i[2 * _], i[2 * _ + 1]]);
    v.sort(function (e, t) {
      var r = e[0].type === ETileType.RollCard || e[1].type === ETileType.RollCard,
        o = t[0].type === ETileType.RollCard || t[1].type === ETileType.RollCard;
      return r && !o ? -1 : !r && o ? 1 : 0;
    });
    for (var m = 0, R = 0, g = 0, x = Date.now(); T.length > 0 && m < v.length && g < 10000;) {
      g++;
      if (Date.now() - x > 3000) break;
      var E = __read(v[m], 2),
        b = E[0],
        C = E[1],
        w = T[0],
        S = __read(w, 2),
        I = S[0],
        j = S[1],
        O = b.type === ETileType.RollCard || C.type === ETileType.RollCard,
        F = this.isSpecialPair(w);
      if (O && F) {
        R++;
        var D = T.shift();
        T.push(D);
        if (R > T.length) {
          T.shift();
          m++;
          R = 0;
          continue;
        }
      } else {
        R = 0;
        if (b.type === ETileType.RollCard) b.changeResId(I.resId);else {
          var P = I.type === ETileType.RollCard ? ETileType.Normal : I.type;
          u.getTileMapObject().setTileType(b.id, P);
          b.changeResId(I.resId);
          b.setDuoxiaoCount(I.duoxiaoCount || 0);
        }
        if (C.type === ETileType.RollCard) C.changeResId(j.resId);else {
          var k = j.type === ETileType.RollCard ? ETileType.Normal : j.type;
          u.getTileMapObject().setTileType(C.id, k);
          C.changeResId(j.resId);
          C.setDuoxiaoCount(j.duoxiaoCount || 0);
        }
        T.shift();
        m++;
      }
    }
    if (T.length > 0) if (g >= 10000) {
      var M = "洗牌失败：达到最大迭代次数10000，剩余" + T.length + "对未处理";
      console.error("[ShuffleFixRoll] " + M);
    } else Date.now();
    v.length;
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  randomShuffleList(e) {
    for (var t, r = e.length; r > 1;) {
      var o = Math.floor(Math.random() * r--);
      t = __read([e[o], e[r]], 2), e[r] = t[0], e[o] = t[1];
    }
  }
}