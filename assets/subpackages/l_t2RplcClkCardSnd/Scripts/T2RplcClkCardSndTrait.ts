import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("T2RplcClkCardSndTrait")
export default class T2RplcClkCardSndTrait extends Trait {
  static traitKey = "T2RplcClkCardSnd";
  onLoad() {
    super.onLoad.call(this);
    this.registerOldGameplayEvents();
  }
  registerOldGameplayEvents() {
    this.registerEvent([{
      event: "SelectBhv_playNmlAud"
    }, {
      event: "SelectBhv_rollCardAud"
    }]);
  }
  onT2UpSlotBarBhv_playTchAud(t, e) {
    mj.audioManager.playEffect(EAudioID.Tile2Touch2);
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onT2RollCardBhv_playRvlAud(t, e) {
    mj.audioManager.playEffect(EAudioID.Check1);
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onSelectBhv_playNmlAud(t, e) {
    mj.audioManager.playEffect(EAudioID.Tile2Touch2);
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onSelectBhv_rollCardAud(t, e) {
    mj.audioManager.playEffect(EAudioID.Check1);
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
}