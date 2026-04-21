import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RollCardOnceOpenTrait")
export default class RollCardOnceOpenTrait extends Trait {
  static traitKey = "RollCardOnceOpen";
  onLoad() {
    super.onLoad.call(this);
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
  }
  onTileNodeObj_BeginSelected(e, t) {
    var o,
      a,
      r,
      l,
      p,
      c = e.ins,
      u = null == c ? void 0 : c.tileObject;
    if (u && u.type === ETileType.RollCard) {
      var d = UserModel.getInstance().getCurrentGameType(),
        y = null === (o = u.tileMapObject) || void 0 === o ? void 0 : o.gameContext,
        f = null !== (p = null === (l = null === (r = null === (a = null == y ? void 0 : y.getGameData) || void 0 === a ? void 0 : a.call(y)) || void 0 === r ? void 0 : r.getLevelId) || void 0 === l ? void 0 : l.call(r)) && void 0 !== p ? p : 0,
        v = u.id;
      if (d === MjGameType.Tile2Normal) {
        t();
        return;
      }
      this.markOpened(d, f, v);
    }
    t();
  }
  onRollCTNode_keepOpen(e, t) {
    var o,
      a,
      r,
      l,
      p,
      u = e.ins,
      d = null == u ? void 0 : u.tileObject;
    if (d && d.type === ETileType.RollCard) {
      var y = UserModel.getInstance().getCurrentGameType(),
        f = null === (o = d.tileMapObject) || void 0 === o ? void 0 : o.gameContext,
        v = null !== (p = null === (l = null === (r = null === (a = null == f ? void 0 : f.getGameData) || void 0 === a ? void 0 : a.call(f)) || void 0 === r ? void 0 : r.getLevelId) || void 0 === l ? void 0 : l.call(r)) && void 0 !== p ? p : 0,
        T = d.id;
      if (this.isOpened(y, v, T) && y !== MjGameType.Tile2Normal) {
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: true
        });
      } else {
        t();
      }
    } else t();
  }
  onIptSetLv_newGComp(e, t) {
    var o,
      a,
      r = e.ins,
      l = null === (o = null == r ? void 0 : r.input) || void 0 === o ? void 0 : o.levelData,
      i = UserModel.getInstance().getCurrentGameType(),
      n = null !== (a = null == l ? void 0 : l.levelId) && void 0 !== a ? a : 0;
    this.localData.byGameType[i] = {
      levelId: n,
      openedTileIds: []
    };
    this.localData.byGameType = this.localData.byGameType;
    t();
  }
  getStore(e, t) {
    this.localData.byGameType && "object" == typeof this.localData.byGameType || (this.localData.byGameType = {});
    var o = this.localData.byGameType[e];
    if (!o || "object" != typeof o || o.levelId !== t || !Array.isArray(o.openedTileIds)) {
      var a = {
        levelId: t,
        openedTileIds: []
      };
      this.localData.byGameType[e] = a;
      this.localData.byGameType = this.localData.byGameType;
      return a;
    }
    return o;
  }
  @mj.traitEvent("RollOnceOpen_isOpened")
  isOpened(e, t, o) {
    return !!o && this.getStore(e, t).openedTileIds.includes(o);
  }
  markOpened(e, t, o) {
    if (o) {
      var a = this.getStore(e, t);
      if (!a.openedTileIds.includes(o)) {
        a.openedTileIds.push(o);
        this.localData.byGameType = this.localData.byGameType;
      }
    }
  }
}