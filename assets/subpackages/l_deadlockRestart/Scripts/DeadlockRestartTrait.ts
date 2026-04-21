import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DeadlockRestartTrait")
export default class DeadlockRestartTrait extends Trait {
  static traitKey = "DeadlockRestart";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptTile2InitVw_pushEff(t, e) {
    var r,
      o = null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext;
    if (o) {
      if (o.tile2ResultChecker.checkIsDead()) {
        o.tile2SlotBarModifier.returnSlotBarToBoard();
        e();
      } else e();
    } else e();
  }
  onIptInitView_pushEff(t, e) {
    var r,
      o = null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext;
    if (o) {
      if (o.gameType !== MjGameType.Classic) {
        var i = o.getTileMapObject();
        if (i.checkIsDead([])) {
          o.shuffleModifier.shuffle();
          i.updateCanMatchTiles();
          o.gameModifier.modifyShuffle();
          e();
        } else e();
      } else e();
    } else e();
  }
}