import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ClickCoverLockTipBehavior } from './ClickCoverLockTipBehavior';
import { ClickCoverLockTipEffect } from './ClickCoverLockTipEffect';
@mj.trait
@mj.class("CoverLockTipTrait")
export default class CoverLockTipTrait extends Trait {
  _prefab = null;
  static traitKey = "CoverLockTip";
  onLoad() {
    super.onLoad.call(this);
    this.registerBehaviors();
  }
  registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.ClickCoverLockTip, ClickCoverLockTipBehavior);
  }
  onIptTchStart_pushCvr(t, e) {
    this.pushHasCoverEffects(t);
    e();
  }
  pushHasCoverEffects(t) {
    var e = new ClickCoverLockTipEffect({
      tileId: t.args[0],
      coverLockTipTrait: this
    });
    t.ins.pushEffect(e, EInsertType.Parallel);
  }
}