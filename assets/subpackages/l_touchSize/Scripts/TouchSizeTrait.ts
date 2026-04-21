import GameConstant from '../../../Scripts/core/simulator/constant/GameConstant';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("TouchSizeTrait")
export default class TouchSizeTrait extends Trait {
  static traitKey = "TouchSizeTrait";
  onLoad() {
    super.onLoad.call(this);
  }
  getCardByLayer(r, t, e, i, o, a) {
    if (i < 0 || i >= GameConstant.MaxTileCountX || o < 0 || o >= GameConstant.MaxTileCountY) return null;
    for (var n = null; e >= 0;) {
      if (n = r.getAliveCardByPos(o, i, e)) {
        i = n.gridPosY;
        o = n.gridPosX;
        var d = false,
          y = false;
        if (a) {
          d = 2 === Math.abs(t.gridPosY - i);
          y = Math.abs(t.gridPosX - o) <= 2;
        } else {
          d = Math.abs(t.gridPosY - i) <= 1;
          y = 2 === Math.abs(t.gridPosX - o);
        }
        return !r.isCardLock(n) && d && y ? n : null;
      }
      e--;
    }
  }
  getTouchSizeOffsets(r, t) {
    var e = this._traitData.offset || 20,
      i = [0, 0, 0, 0];
    if (r.isCardLock(t)) return i;
    var o = this.getCardByLayer(r, t, t.layer, t.gridPosY - 1, t.gridPosX - 2, false),
      a = this.getCardByLayer(r, t, t.layer, t.gridPosY, t.gridPosX - 2, false),
      s = this.getCardByLayer(r, t, t.layer, t.gridPosY + 1, t.gridPosX - 2, false),
      n = this.getCardByLayer(r, t, t.layer, t.gridPosY - 1, t.gridPosX + 2, false),
      d = this.getCardByLayer(r, t, t.layer, t.gridPosY, t.gridPosX + 2, false),
      y = this.getCardByLayer(r, t, t.layer, t.gridPosY + 1, t.gridPosX + 2, false);
    o || a || s || (i[0] = e);
    n || d || y || (i[1] = e);
    var u = this.getCardByLayer(r, t, t.layer, t.gridPosY - 2, t.gridPosX - 2, true),
      c = this.getCardByLayer(r, t, t.layer, t.gridPosY - 2, t.gridPosX - 1, true),
      g = this.getCardByLayer(r, t, t.layer, t.gridPosY - 2, t.gridPosX, true),
      f = this.getCardByLayer(r, t, t.layer, t.gridPosY - 2, t.gridPosX + 1, true),
      l = this.getCardByLayer(r, t, t.layer, t.gridPosY - 2, t.gridPosX + 2, true),
      p = this.getCardByLayer(r, t, t.layer, t.gridPosY + 2, t.gridPosX - 2, true),
      h = this.getCardByLayer(r, t, t.layer, t.gridPosY + 2, t.gridPosX - 1, true),
      P = this.getCardByLayer(r, t, t.layer, t.gridPosY + 2, t.gridPosX, true),
      _ = this.getCardByLayer(r, t, t.layer, t.gridPosY + 2, t.gridPosX + 1, true),
      C = this.getCardByLayer(r, t, t.layer, t.gridPosY + 2, t.gridPosX + 2, true);
    u || c || g || f || l || (i[2] = e);
    p || h || P || _ || C || (i[3] = e);
    return i;
  }
  onTileMapObj_updTchSz(r, t) {
    var e = r.ins,
      i = r.args[0],
      o = this.getTouchSizeOffsets(e, i);
    i.updateTouchSizeOffsets(o);
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump
    });
  }
}