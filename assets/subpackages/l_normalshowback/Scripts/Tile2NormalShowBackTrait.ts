import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType, ETileComponent } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2NormalShowBackTrait")
export default class Tile2NormalShowBackTrait extends Trait {
  static traitKey = "Tile2NormalShowBack";
  isSupportMode(e) {
    return e === MjGameType.Tile2Normal;
  }
  getExcludeTiles() {
    var e, t;
    return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.excludes) && void 0 !== t ? t : [ETileType.RollCard, ETileType.DaxiaoCard, ETileType.DuoxiaoCard, ETileType.RankCard, ETileType.Yoga];
  }
  isExcludeTile(e) {
    return this.getExcludeTiles().some(function (t) {
      return e.checkHasType(t);
    });
  }
  onT2NorBackMod_isEnable(e, t) {
    var o = e.ins.context;
    t({
      returnType: TraitCallbackReturnType.jump,
      returnVal: this.isSupportMode(o.gameType)
    });
  }
  onT2NorBackMod_getExcludes(e, t) {
    t({
      returnType: TraitCallbackReturnType.jump,
      returnVal: this.getExcludeTiles()
    });
  }
  onTile2NodeObj_getReqComKs(e, t) {
    var o,
      i = e.args[0],
      r = i.tileObject;
    if (r) {
      if (this.isSupportMode(null === (o = i.context) || void 0 === o ? void 0 : o.gameType)) {
        if (this.isExcludeTile(r)) t();else {
          var a = e.beforReturnVal;
          if (a.includes(ETileComponent.Tile2ComponentRollCard)) t();else {
            a.unshift(ETileComponent.Tile2ComponentRollCard);
            t({
              returnVal: a
            });
          }
        }
      } else t();
    } else t();
  }
  onT2ShuffleBhv_stayEnd(e, t) {
    var o,
      i,
      r = e.ins,
      a = null === (o = null == r ? void 0 : r.context) || void 0 === o ? void 0 : o.getTileNodeManager();
    if (this.isSupportMode(null === (i = null == r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameType)) {
      this.updateTileNodeStatus(a, true);
      t();
    } else t();
  }
  updateTileNodeStatus(e, t = false) {
    var o, i;
    if (e) {
      var r = e.getTileNodes();
      try {
        for (var a = __values(r), l = a.next(); !l.done; l = a.next()) {
          var p = l.value;
          if (p && p.info && p.info.tileObject) {
            var s = p.info.tileObject;
            s.getIsInSlotBar() || this.isExcludeTile(s) || (t ? s.getIsBack() ? p.tile2ShowBackImmediately() : p.tile2ShowFrontImmediately() : p.tile2RollCard());
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          l && !l.done && (i = a.return) && i.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
    }
  }
}