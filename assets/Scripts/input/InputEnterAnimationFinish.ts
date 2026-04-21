import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameInputEnum, EShuffleFrom } from '../simulator/constant/GameInputEnum';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { InitCollectTargetEffect } from '../InitCollectTargetEffect';
import { EnterAnimationFinishEffect } from '../EnterAnimationFinishEffect';
import { InputBase } from '../inputbase/InputBase';
import { ClassicFailEffect } from '../ClassicFailEffect';
import { ClassicBeforeFailEffect } from '../ClassicBeforeFailEffect';
export default class InputEnterAnimationFinish extends InputBase {
  @mj.traitEvent("IptEnterAniFin_excute")
  excute() {
    this.pushEnterAnimationFinishEffect();
    this.gameContext.gameType === MjGameType.Travel && this.pushInitCollectTargetEffect();
    if (this.gameContext.gameType === MjGameType.Classic) {
      this.showFailView();
    } else {
      this.checkDeadlockAndShuffle();
    }
  }
  showFailView() {
    if (this.tileMapObject.checkIsDead([])) {
      this.gameContext.gameModifier.modifyClassicEnd();
      this.pushClassicBeforeFailEffect();
      this.pushFailEffect({
        skipInterAd: true
      });
    }
  }
  pushClassicBeforeFailEffect() {
    var e = new ClassicBeforeFailEffect({});
    this.pushEffect(e, EInsertType.Root);
  }
  pushFailEffect(e) {
    var t = new ClassicFailEffect({
      skipInterAd: null == e ? void 0 : e.skipInterAd
    });
    return this.pushEffect(t, EInsertType.Root);
  }
  pushEnterAnimationFinishEffect() {
    var e = new EnterAnimationFinishEffect({});
    this.pushEffect(e, EInsertType.Serial);
  }
  @mj.traitEvent("IptEnterAniFin_pushColTag")
  pushInitCollectTargetEffect() {
    var e,
      t,
      o = null === (t = null === (e = this.gameContext) || void 0 === e ? void 0 : e.getTileMapObject()) || void 0 === t ? void 0 : t.collectSystem;
    if (o) {
      var n = new InitCollectTargetEffect({
        collectDetails: o.getAllCollectDetails()
      });
      this.pushEffect(n, EInsertType.Parallel);
    }
  }
  checkDeadlockAndShuffle() {
    var e = this.gameContext.getIsNewGame(),
      t = this.gameContext.getIsRestart();
    if (!e && !t && this.tileMapObject.checkIsDead([])) {
      var o = {
        inputType: EGameInputEnum.Shuffle,
        from: EShuffleFrom.Free,
        isFree: true
      };
      this.gameSimulator.input(o);
    }
  }
}