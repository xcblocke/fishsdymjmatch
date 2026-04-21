import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { InputBase } from '../../../Scripts/inputbase/InputBase';
import { GuideEffect } from './GuideEffect';
export default class InputGuide extends InputBase {
  excute(t) {
    var e,
      i,
      n = this.gameController.tileMapObject.getCanMatchTilesHint();
    if (0 == n.length) {
      this.gameController.tileMapObject.updateCanMatchTiles();
      n = this.gameController.tileMapObject.getCanMatchTilesHint();
    }
    if (n.length) {
      var o = n[0],
        a = null === (e = o[0]) || void 0 === e ? void 0 : e.id,
        s = null === (i = o[1]) || void 0 === i ? void 0 : i.id;
      if (a && s) {
        var p = this.gameController.tileMapObject.getTileObject(a),
          u = this.gameController.tileMapObject.getTileObject(s);
        this.pushEffectData(p, u, a, s, t);
      }
    } else {
      var l = new GuideEffect({
        tileId: null,
        showHand: t.showHand
      });
      this.pushEffect(l, EInsertType.Root);
    }
  }
  @mj.traitEvent("InputGuide_pushEfData")
  pushEffectData(t, e, i, n, o) {
    var a = t.isSelect ? n : i,
      s = new GuideEffect({
        tileId: a,
        showHand: o.showHand,
        finishGuide: o.finishGuide
      });
    this.pushEffect(s, EInsertType.Root);
  }
}