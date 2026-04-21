import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
@mj.trait
@mj.class("BattleHideBannerTrait")
export default class BattleHideBannerTrait extends Trait {
  _isInBattle = false;
  static traitKey = "BattleHideBanner";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGameCtrl_vwLoad(t, e) {
    this._isInBattle = true;
    AdManager.getInstance().hideBanner();
    e();
  }
  onMainGameCtrl_uiDes(t, e) {
    this._isInBattle = false;
    AdManager.getInstance().showBanner();
    e();
  }
  onAdMgr_showBanner(t, e) {
    if (this._isInBattle) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
}