import { InputBase } from './inputbase/InputBase';
import ClearHelper from './ClearHelper';
export default class InputDuoxiaoAuto extends InputBase {
  excute(e) {
    if (!(this.gameContext.getDuoxiaoClearCount() <= 0)) {
      var t = this.gameContext.getTileMapObject(),
        o = t.getCanMatchTilesHint();
      if (0 == o.length) {
        t.updateCanMatchTiles();
        o = t.getCanMatchTilesHint();
      }
      if (o.length) {
        this.gameContext.duoxiaoModifier.decreaseDuoxiaoClearCount();
        var n = __read(this.findMatchTile(o), 2),
          i = n[0],
          r = n[1];
        if (i && r) {
          t.selcectTileId(i, true);
          t.selcectTileId(r, true);
          this.gameContext.clearChecker.checkCanClear2() && ClearHelper.runClear(this.gameContext, e, this);
        }
      } else this.gameContext.duoxiaoModifier.resetDuoxiaoClearCount();
    }
  }
  @mj.traitEvent("IptDuoxiaoAuto_findMatch")
  findMatchTile(e) {
    var t,
      o,
      n = e[0];
    return [null === (t = n[0]) || void 0 === t ? void 0 : t.id, null === (o = n[1]) || void 0 === o ? void 0 : o.id];
  }
}