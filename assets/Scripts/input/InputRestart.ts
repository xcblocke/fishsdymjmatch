import { EInsertType } from '../constant/BehaviorsEnum';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { Tile2RestartEffect } from '../Tile2RestartEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputRestart extends InputBase {
  @mj.traitEvent("IptRestart_excute")
  excute(e) {
    var t = this.gameContext.getGameData();
    if ("setting" === e.callFrom) {
      this.gameContext.gameModifier.settingRelay();
    } else {
      this.gameContext.gameModifier.failRelay();
    }
    if (this.gameContext.gameType === MjGameType.Tile2Normal) {
      0 == e.dieResult && t.setDieResult(0);
      var o = this.pushNewRootEffect(e, "Tile2RestartEffect"),
        n = new Tile2RestartEffect({});
      this.pushEffect(n, EInsertType.Parallel, o.newEffectId, false);
    }
  }
}