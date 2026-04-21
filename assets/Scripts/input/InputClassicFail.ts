import { EInsertType } from '../constant/BehaviorsEnum';
import { ClassicBeforeFailEffect } from '../ClassicBeforeFailEffect';
import { ClassicFailEffect } from '../ClassicFailEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputClassicFail extends InputBase {
  excute(e) {
    this.gameContext.gameModifier.modifyClassicEnd();
    (null == e ? void 0 : e.skipBeforeFailEffect) || this.pushClassicBeforeFailEffect();
    this.pushClassicFailEffect(e);
  }
  pushClassicBeforeFailEffect() {
    var e = new ClassicBeforeFailEffect({});
    this.pushEffect(e, EInsertType.Root);
  }
  pushClassicFailEffect(e) {
    var t = new ClassicFailEffect({
      isGM: null == e ? void 0 : e.isGM,
      skipInterAd: null == e ? void 0 : e.skipInterAd
    });
    this.pushEffect(t, EInsertType.Root);
  }
}