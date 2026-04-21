import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export default class ClearLayerBehavior extends GameBehaviorsBase {
  start() {
    this.showClearLayerWords();
    this.finish(EBehaviorEnum.Success);
  }
  showClearLayerWords() {
    var e = BaseSpine.create("spine/gameplay_layerClear", "layerClear", 1, null, true, "r_clearLayerWords");
    e.node.setPosition(0, 180, 0);
    this.context.gameView.nodeTopEffectRoot.addChild(e.node, 999);
  }
}