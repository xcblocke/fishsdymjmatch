import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankAudioOptTrait")
export default class RankAudioOptTrait extends Trait {
  static traitKey = "RankAudioOpt";
  static BUNDLE_NAME = "l_rankAudioOpt";
  onSelectBhv_rankCardAud(t, r) {
    t.ins.playNormalAudio();
    r({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onIptTchEnd_rankCardAud(t, r) {
    t.ins.playNormalAudio();
    r({
      returnType: TraitCallbackReturnType.jump
    });
  }
  onClearBhv_matchAud(t, r) {
    if (t.ins._type != ETileType.RankCard) r();else {
      mj.audioManager.playEffect(EAudioID.SpecialTouch);
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
}