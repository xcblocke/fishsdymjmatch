import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { InitViewEffect } from '../InitViewEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputInitView extends InputBase {
  @mj.traitEvent("IptInitView_exec")
  excute() {
    this.pushInitViewEffect();
  }
  @mj.traitEvent("IptInitView_pushEff")
  pushInitViewEffect() {
    var e = new InitViewEffect({
      cardLayoutConfig: this.gameContext.getCardLayoutConfig(),
      cardConfigMap: this.gameContext.getCardConfigMap(),
      tilemapObject: this.gameContext.getTileMapObject(),
      layoutScale: this.gameContext.getLayoutScale()
    });
    this.pushEffect(e, EInsertType.Root);
    mj.EventManager.emit(EGameEvent.Effect_InitView, this);
  }
}