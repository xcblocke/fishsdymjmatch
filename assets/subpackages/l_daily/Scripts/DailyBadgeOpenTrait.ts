import Trait from '../../../Scripts/framework/trait/Trait';
import { BadgeType } from '../../../Scripts/gamePlay/badge/mode/BadgeMode';
import DailyModel from './DailyModel';
import { DisplayType } from './DailyTypes';
@mj.trait
@mj.class("DailyBadgeOpenTrait")
export default class DailyBadgeOpenTrait extends Trait {
  static traitKey = "DailyBadgeOpen";
  onLoad() {
    super.onLoad.call(this);
  }
  onDailyCollCtrl_getOpType(t, e) {
    var i = t.args[0],
      o = DisplayType.Daily;
    i != BadgeType.Journey && i != DisplayType.Journey || (o = DisplayType.Journey);
    DailyModel.getInstance().isOpen() || (o = DisplayType.Journey);
    e({
      returnType: TraitCallbackReturnType.jump,
      returnVal: o
    });
  }
}