import { EInsertType } from '../constant/BehaviorsEnum';
import { TravelEndEffect } from '../TravelEndEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTravelEnd extends InputBase {
  excute() {
    var e,
      t,
      o,
      n,
      i = null !== (n = null === (o = null === (t = null === (e = this.gameContext) || void 0 === e ? void 0 : e.getTileMapObject()) || void 0 === t ? void 0 : t.collectSystem) || void 0 === o ? void 0 : o.getAllCollectDetails()) && void 0 !== n ? n : [],
      l = new TravelEndEffect({
        curLv: this.gameContext.getGameData().getLevelId(),
        collects: i
      });
    this.pushEffect(l, EInsertType.Root);
  }
}