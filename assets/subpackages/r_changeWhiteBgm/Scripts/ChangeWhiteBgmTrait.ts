import Trait from '../../../Scripts/framework/trait/Trait';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("ChangeWhiteBgmTrait")
export default class ChangeWhiteBgmTrait extends Trait {
  _audioId = 0;
  static traitKey = "ChangeWhiteBgm";
  onLoad() {
    super.onLoad.call(this);
    this._audioId = this.traitData.audioId || 88;
  }
  onAudioMgr_playBGM(t, e) {
    if (t.args && 0 !== t.args.length) {
      if (t.args[0] === EAudioID.Bgm) {
        t.args[0] = this._audioId;
        e();
      } else e();
    } else e();
  }
}