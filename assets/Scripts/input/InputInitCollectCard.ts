import { InputBase } from '../inputbase/InputBase';
export class InputInitCollectCard extends InputBase {
  excute() {
    var e = this.gameContext.getTileMapObject().initCollectSystem();
    if (e) {
      var t = this.gameContext.getGameData().getTileTypes(),
        o = this.changeTileTypes(t);
      e.setCollectTargetTypes(o);
      var n = this.gameContext.getGameData().getCollectData();
      e.recordCollectTargetIds(n);
    }
  }
  @mj.traitEvent("IptInCollectCd_cTileTypes")
  changeTileTypes(e) {
    return e;
  }
}