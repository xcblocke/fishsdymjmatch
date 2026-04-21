import Trait from '../../../Scripts/framework/trait/Trait';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
@mj.trait
@mj.class("AdUnavailablePatchTrait")
export default class AdUnavailablePatchTrait extends Trait {
  retryTime = 9;
  static traitKey = "AdUnavailablePatch";
  onLoad() {
    super.onLoad.call(this);
    this.retryTime = this._traitData.retryTime;
  }
  onAdMgr_videoFailed(t, e) {
    if (t.ins) {
      var o = t.ins._videoAdPosition;
      if (![EAdPosition.InGameMotivation_Reshuffle, EAdPosition.InGameMotivation_Hint, EAdPosition.InGameMotivation_Revive].includes(o)) {
        e({
          isBreak: true
        });
        return;
      }
    }
    e();
  }
}