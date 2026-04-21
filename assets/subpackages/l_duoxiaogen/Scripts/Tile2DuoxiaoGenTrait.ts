import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import DuoxiaoCardType from '../../../Scripts/tileTypes/DuoxiaoCardType';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2DuoxiaoGenTrait")
export default class Tile2DuoxiaoGenTrait extends Trait {
  static traitKey = "Tile2DuoxiaoGen";
  onLoad() {
    super.onLoad.call(this);
  }
  canGenDuoxiaoCard(t) {
    var e, r;
    return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t)) && ((null === (r = null === (e = UserModel.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameData()) || void 0 === r ? void 0 : r.getLevelId()) || 0) > this._traitData.level;
  }
  onT2GameCtrl_getTileTypes(t, e) {
    var r = t.ins;
    if (this.canGenDuoxiaoCard(r.gameType)) {
      var o = this.genTypes();
      o && o.length > 0 && (t.beforReturnVal = t.beforReturnVal ? t.beforReturnVal + "," + o : o);
      e({
        returnVal: t.beforReturnVal
      });
    } else e();
  }
  @mj.traitEvent("T2DuoxiaoGenTt_genTypes")
  genTypes() {
    return ETileType.DuoxiaoCard;
  }
  onDuoxiaoCt_genCountRange(t, e) {
    e({
      returnVal: this._traitData.genCountRange || [1, 3],
      isBreak: true
    });
  }
  onDuoxiaoCt_countRange(t, e) {
    e({
      returnVal: this._traitData.countRange || [4, 6],
      isBreak: true
    });
  }
  getNormalCardGroups(t) {
    var e,
      r,
      o,
      n,
      a,
      u,
      s = new Map(),
      p = t.getTileMapObject(),
      c = t.randomGenerator;
    try {
      for (var y = __values(p.aliveTiles()), f = y.next(); !f.done; f = y.next()) if ((_ = f.value).type === ETileType.Normal) {
        s.has(_.cardId) || s.set(_.cardId, {
          cardId: _.cardId,
          count: 0,
          layerSum: 0,
          tiles: []
        });
        s.get(_.cardId).count++;
        s.get(_.cardId).layerSum += _.pos.z;
        s.get(_.cardId).tiles.push(_);
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        f && !f.done && (r = y.return) && r.call(y);
      } finally {
        if (e) throw e.error;
      }
    }
    var d = [];
    try {
      for (var T = __values(s.values()), v = T.next(); !v.done; v = T.next()) {
        var h = v.value;
        try {
          for (var m = (a = void 0, __values(h.tiles)), g = m.next(); !g.done; g = m.next()) {
            var _ = g.value;
            d.push({
              tile: _,
              layerSum: h.layerSum,
              random: c.random()
            });
          }
        } catch (t) {
          a = {
            error: t
          };
        } finally {
          try {
            g && !g.done && (u = m.return) && u.call(m);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    } catch (t) {
      o = {
        error: t
      };
    } finally {
      try {
        v && !v.done && (n = T.return) && n.call(T);
      } finally {
        if (o) throw o.error;
      }
    }
    d.sort(function (t, e) {
      return t.layerSum !== e.layerSum ? t.layerSum - e.layerSum : t.tile.pos.z !== e.tile.pos.z ? t.tile.pos.z - e.tile.pos.z : t.random - e.random;
    });
    return d.map(function (t) {
      return t.tile;
    });
  }
  onDuoxiaoCt_modify(t, e) {
    var r, o;
    if (1 == this._traitData.genType) {
      var n = t.args[0],
        a = DuoxiaoCardType.getGenCountRange(),
        s = n.randomGenerator,
        p = s.randomInt(a[0], a[1]),
        c = this.getNormalCardGroups(n).slice(0, p),
        y = n.getTileMapObject();
      try {
        for (var f = __values(c), d = f.next(); !d.done; d = f.next()) {
          var T = d.value,
            v = DuoxiaoCardType.getCountRange(),
            h = s.randomInt(v[0], v[1]);
          y.setDuoxiaoCount(T.id, h);
          y.setTileType(T.id, ETileType.DuoxiaoCard);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          d && !d.done && (o = f.return) && o.call(f);
        } finally {
          if (r) throw r.error;
        }
      }
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else e();
  }
}