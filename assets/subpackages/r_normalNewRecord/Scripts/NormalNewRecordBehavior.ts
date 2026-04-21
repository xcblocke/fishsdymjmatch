import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export default class NormalNewRecordBehavior extends GameBehaviorsBase {
  start() {
    this.showClearLayerWords();
    this.finish(EBehaviorEnum.Success);
  }
  showClearLayerWords() {
    mj.audioManager.playEffect(EAudioID.ClassicBreakRecord);
    var e = BaseSpine.create("spine/gameplay_newRecord", "in", 1, null, true, "r_normalNewRecord");
    e.node.setPosition(0, 180, 0);
    this.context.gameView.nodeTopEffectRoot.addChild(e.node, 999);
  }
}