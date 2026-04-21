import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export class HardLevelTipsBehavior extends GameBehaviorsBase {
  @mj.traitEvent("HLTipsBhv_onStart")
  start(e) {
    var t = this;
    this.context.gameView.setSwallowEventNodeActive(true);
    BaseSpine.create("spine/hardLevelTips/gameplay_hardTips", e.data.aniName, 1, function () {
      t.context.gameView.setSwallowEventNodeActive(false);
      t.finish();
    }, true, "mainRes").node.parent = this.context.gameView.nodeTopEffectRoot;
  }
}