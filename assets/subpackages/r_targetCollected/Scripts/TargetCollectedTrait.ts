import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import { TargetCollectedBehavior, TargetCollectedEffect } from './TargetCollectedBehavior';
import { TargetCollectedUtils } from './TargetCollectedUtils';
@mj.trait
@mj.class("TargetCollectedTrait")
export default class TargetCollectedTrait extends Trait {
  static traitKey = "TargetCollected";
  onLoad() {
    super.onLoad.call(this);
    BehaviorFactory.registerBehavior(BehaviorsMapping.TargetCollected, TargetCollectedBehavior);
  }
  onClrTravelHlp_collTagEff(e, t) {
    this.pushTargetCollectedEffect(e.ins, e.args[0]);
    t();
  }
  pushTargetCollectedEffect(e, t) {
    var r = TravelGameModel.getInstance().getCurJourney(),
      o = TargetCollectedUtils.getTargetCollectedRes(r);
    if (o) {
      var a = __read(o, 2),
        i = a[0],
        l = a[1],
        s = new TargetCollectedEffect({
          spinePath: i,
          bundleName: l
        });
      e._baseInput.pushEffect(s, EInsertType.Parallel, t.newEffectId, false);
    }
  }
}