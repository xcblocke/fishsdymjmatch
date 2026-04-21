import { EBehaviorEnum, EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import FullComboItem from '../items/FullComboItem';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class FullComboBehavior extends GameBehaviorsBase {
  _timeout = 12000;
  async start() {
    var e,
      t,
      o,
      n = this;
    if (this.shouldSkip()) {
      this.finish(EBehaviorEnum.Success);
      return;
    }
    e = this.context.gameView.effectNode;
    if (!(t = await FullComboItem.createUI())) {
      this.finish(EBehaviorEnum.Success);
      return;
    }
    t.setParent(e);
    t.position = cc.v3(0, 0, 0);
    if (!(o = t.getComponent(FullComboItem))) {
      t.destroy();
      this.finish(EBehaviorEnum.Success);
      return;
    }
    this.playAudio();
    this.context.gameView.setSwallowEventNodeActive(true);
    o.startPlayAni(t, function () {
      n.shouldSkipAutoMerge() || n.autoMerger();
    }, function () {
      n.finish(EBehaviorEnum.Success);
    });
    return;
  }
  autoMerger() {
    GameInteraction.input({
      inputType: EGameInputEnum.StartAutoMerge,
      type: "fullCombo"
    });
  }
  @mj.traitEvent("FullComboBhv_playAudio")
  playAudio() {
    mj.audioManager.playEffect(EAudioID.FullCombo);
  }
  @mj.traitEvent("FullComboBhv_shouldSkip")
  shouldSkip() {
    return false;
  }
  @mj.traitEvent("FullComboBhv_skipMerge")
  shouldSkipAutoMerge() {
    return false;
  }
}