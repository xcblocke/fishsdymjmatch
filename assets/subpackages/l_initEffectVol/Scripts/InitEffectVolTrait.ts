import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("InitEffectVolTrait")
export default class InitEffectVolTrait extends Trait {
  _volume = 1;
  static traitKey = "InitEffectVol";
  onLoad() {
    var e;
    super.onLoad.call(this);
    this._volume = null !== (e = this.traitData.volume) && void 0 !== e ? e : 1;
  }
  onLoginM_showLoad(t, e) {
    e();
    cc.audioEngine.setEffectsVolume(this._volume);
  }
}