import Trait from '../../../Scripts/framework/trait/Trait';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
export enum EChangeBgmId {
  WhiteNoise = 55,
  OldBlock = 56,
}
export enum EChangeBgmType {
  WhiteNoise = 1,
  OldBlock = 2,
}
@mj.trait
@mj.class("ChangeBgmTrait")
export default class ChangeBgmTrait extends Trait {
  _type = 0;
  static traitKey = "ChangeBgm";
  onLoad() {
    super.onLoad.call(this);
    this._type = this.traitData.type;
  }
  onAudioMgr_playBGM(t, e) {
    if (t.args && 0 !== t.args.length) {
      var r = t.args[0];
      if (r === EAudioID.Bgm) {
        if (this._type === EChangeBgmType.WhiteNoise) {
          r = EChangeBgmId.WhiteNoise;
        } else {
          this._type === EChangeBgmType.OldBlock && (r = EChangeBgmId.OldBlock);
        }
        t.args[0] = r;
        e();
      } else e();
    } else e();
  }
}