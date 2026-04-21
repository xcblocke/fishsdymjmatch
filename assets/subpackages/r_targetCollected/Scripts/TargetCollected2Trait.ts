import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import { TargetCollectedBehavior, TargetCollectedEffect } from './TargetCollectedBehavior';
import { TargetCollectedUtils } from './TargetCollectedUtils';
@mj.trait
@mj.class("TargetCollected2Trait")
export default class TargetCollected2Trait extends Trait {
  static traitKey = "TargetCollected2";
  onLoad() {
    super.onLoad.call(this);
    BehaviorFactory.registerBehavior(BehaviorsMapping.TargetCollected, TargetCollectedBehavior);
  }
  onClrTravelHlp_collTagEff(e, t) {
    var r = e.beforReturnVal;
    r && this.pushTargetCollectedEffect(e.ins, r);
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