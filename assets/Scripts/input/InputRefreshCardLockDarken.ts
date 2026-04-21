import { EInsertType } from '../constant/BehaviorsEnum';
import { CardLockDarkenEffect } from '../CardLockDarkenEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputRefreshCardLockDarken extends InputBase {
  excute(e) {
    var t = void 0 === e.isShowAni || e.isShowAni;
    this.pushRefreshCardLockDarkenEffect(t);
  }
  pushRefreshCardLockDarkenEffect(e) {
    var t = new CardLockDarkenEffect({
      isShowAni: e
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
}