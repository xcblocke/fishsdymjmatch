import { EInsertType } from '../constant/BehaviorsEnum';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { InitViewEffect } from '../InitViewEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2InitView extends InputBase {
  excute() {
    this.pushInitViewEffect();
  }
  @mj.traitEvent("IptTile2InitVw_pushEff")
  pushInitViewEffect() {
    var e = new InitViewEffect({
      cardLayoutConfig: this.gameContext.getCardLayoutConfig(),
      cardConfigMap: this.gameContext.getCardConfigMap(),
      tilemapObject: this.gameContext.getTileMapObject(),
      layoutScale: this.gameContext.getLayoutScale()
    });
    this.gameContext.tile2NormalBackModifier.modifyStatus();
    this.pushEffect(e, EInsertType.Root);
    mj.EventManager.emit(EGameEvent.Effect_InitView, this);
  }
}