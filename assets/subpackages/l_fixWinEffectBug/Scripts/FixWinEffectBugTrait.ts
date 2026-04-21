import Trait from '../../../Scripts/framework/trait/Trait';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("FixWinEffectBugTrait")
export default class FixWinEffectBugTrait extends Trait {
  static traitKey = "FixWinEffectBug";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinVw_playWiEff(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onWinVw_showWinVw(t, e) {
    mj.audioManager.playEffect(EAudioID.Win);
    e();
  }
}