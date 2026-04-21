import Trait from '../../../Scripts/framework/trait/Trait';
import { AniTimeScale } from '../../../Scripts/framework/utils/CommonUtils';
@mj.trait
@mj.class("MainGameAnimAccelTrait")
export default class MainGameAnimAccelTrait extends Trait {
  static traitKey = "MainGameAnimAccel";
  onMainGameCtrl_vwLoad(t, e) {
    var r;
    e();
    var i = t.ins;
    this.setAnimSpeedRate(i, null !== (r = this._traitData.animSpeed) && void 0 !== r ? r : 1);
  }
  onMainGameCtrl_uiDes(t, e) {
    e();
    var r = t.ins;
    this.setAnimSpeedRate(r, 1);
  }
  setAnimSpeedRate(t, e) {
    cc.director.getScheduler().setTimeScale(e);
    AniTimeScale.set(e);
    t.viewDoAction("setTimeScale", e);
  }
}