import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileVisible, ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("RollCardVisTrait")
export default class RollCardVisTrait extends Trait {
  _minLayer = -1;
  static traitKey = "RollCardVis";
  onLoad() {
    var t, r;
    super.onLoad.call(this);
    this._minLayer = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.minLayer) && void 0 !== r ? r : -1;
  }
  onRollCardType_modify(e, t) {
    var r, o;
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal) {
      var i = e.args[0];
      if (i) {
        var n = i.getTileMapObject();
        try {
          for (var c = __values(n.aliveTiles()), p = c.next(); !p.done; p = c.next()) {
            var f = p.value;
            f.layer >= this._minLayer && n.isHasVisible(f, true) === ETileVisible.None && n.setTileType(f.id, ETileType.RollCard);
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            p && !p.done && (o = c.return) && o.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else t();
    } else t();
  }
}