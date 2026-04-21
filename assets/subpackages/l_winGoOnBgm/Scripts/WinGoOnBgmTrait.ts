import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("WinGoOnBgmTrait")
export default class WinGoOnBgmTrait extends Trait {
  static traitKey = "WinGoOnBgm";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinVw_bgMusic(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onTLWinVw_bgMusic(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onDCWinVw_bgMusic(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onMainGameCtrl_fadeBGMIn(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}