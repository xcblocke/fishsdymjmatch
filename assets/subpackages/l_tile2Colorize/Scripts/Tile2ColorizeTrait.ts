import Trait from '../../../Scripts/framework/trait/Trait';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { LevelUtil } from '../../../Scripts/core/simulator/config/LevelUtil';
import { SolverUtils } from '../../../Scripts/SolverUtils';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
var v = new Set([37, 38, 50]);
@mj.trait
@mj.class("Tile2ColorizeTrait")
export default class Tile2ColorizeTrait extends Trait {
  EXCLUDED_TILE_TYPES = new Set([ETileType.RankCard, ETileType.Yoga, ETileType.Bomb]);
  static traitKey = "Tile2Colorize";
  onIptT2SetLv_genFcsAfter(e, t) {
    var r = e.ins,
      i = e.args[0].levelData;
    if (this.shouldProcess(i)) {
      var o = i.slover;
      if (o) {
        this.solverColorize(r.tileMapObject, r.gameContext, o);
        t();
      } else t();
    } else t();
  }
  shouldProcess(e) {
    return CardUtil.getCurrentConfigName() === ConfigType.card_config2.name && !!e.isNewGame && !ExtractTool.getInstance().isFixedLevel(e.levelId);
  }
  solverColorize(e, t, r) {
    var i,
      o,
      n = this,
      a = LevelUtil.parseStepSolver(r);
    if (0 !== a.length) {
      var s = e.tileObjectMap();
      if (s && 0 !== s.size) {
        var c = SolverUtils.parsePairings(a, s, function (e) {
            return v.has(e.cardId) || n.EXCLUDED_TILE_TYPES.has(e.type);
          }),
          p = c.pairs,
          d = c.unpaired,
          y = this.buildValidResIdPool(t);
        if (0 !== y.length) {
          var h = 0;
          try {
            for (var g = __values(p), T = g.next(); !T.done; T = g.next()) {
              var _ = T.value,
                m = y[h % y.length];
              e.changeTileResId(_.paving.tile.id, m);
              e.changeTileResId(_.elim.tile.id, m);
              h++;
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              T && !T.done && (o = g.return) && o.call(g);
            } finally {
              if (i) throw i.error;
            }
          }
          if (d.length >= 2) for (var b = 0; b < d.length - 1; b += 2) {
            m = y[h % y.length];
            e.changeTileResId(d[b].tile.id, m);
            e.changeTileResId(d[b + 1].tile.id, m);
            h++;
          }
        }
      }
    }
  }
  buildValidResIdPool(e) {
    var t = e.getCardConfigMap(),
      r = [],
      i = 0;
    t.forEach(function (e, t) {
      t > i && (i = t);
    });
    for (var o = 1; o <= i; o++) {
      var n = t.get(o);
      n && !v.has(n.cardId) && r.push(o);
    }
    return r;
  }
}