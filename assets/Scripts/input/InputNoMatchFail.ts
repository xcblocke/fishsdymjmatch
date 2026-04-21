import { EInsertType } from '../constant/BehaviorsEnum';
import { FailEffect } from '../FailEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputNoMatchFail extends InputBase {
  @mj.traitEvent("IptNoMatch_getPreShf")
  getPreShuffleData() {
    return null;
  }
  excute(e) {
    var t,
      o,
      n,
      i = (null == e ? void 0 : e.tileIds) || [];
    if (null !== (n = null === (o = null === (t = this.gameContext.getTileMapObject()) || void 0 === t ? void 0 : t.checkIsDead) || void 0 === o ? void 0 : o.call(t, i)) && void 0 !== n && n) {
      var r = this.gameContext.getGameData(),
        s = new FailEffect({
          shuffleNum: r.getShuffleNums(),
          preShuffleData: this.getPreShuffleData()
        });
      this.pushEffect(s, EInsertType.Root);
    }
  }
}