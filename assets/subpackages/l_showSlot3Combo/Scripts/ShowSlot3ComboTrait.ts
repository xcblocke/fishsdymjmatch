import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ShowSlot3ComboTrait")
export default class ShowSlot3ComboTrait extends Trait {
  COMBO_STAGE_MAP = {
    5: 1,
    10: 1,
    15: 2,
    20: 2,
    25: 2,
    30: 3
  };
  static traitKey = "ShowSlot3Combo";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2CmbChk_showTopEff(t, r) {
    r({
      returnVal: false,
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onT2ScreenEdgeBhv_isSlot4(t, r) {
    r({
      returnVal: false,
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onT2SlotAdvBhv_isShow4(t, r) {
    r({
      returnVal: false,
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onIptT2InitSlotBar_isSlot3(t, r) {
    r({
      returnVal: true,
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onT2ScreenEdgeBhv_getStage(t, r) {
    var e = t.args[0] || 0;
    if (e % 5 != 0) r();else {
      var o = this.COMBO_STAGE_MAP[e];
      e > 30 && (o = 4);
      r({
        returnVal: o,
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onT2ScreenEEffIt_getSpPh(t, r) {
    r({
      returnVal: "spine/motivationalWords/gameplay_combo10",
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}