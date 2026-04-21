import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { GuaranteedShuffleEffect } from '../../../Scripts/GuaranteedShuffleEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import Trait from '../../../Scripts/framework/trait/Trait';
import { GuaranteedShuffleBehavior } from '../../../Scripts/base/GuaranteedShuffleBehavior';
import { GuaranteedShuffleModifier } from './GuaranteedShuffleModifier';
@mj.trait
@mj.class("GuaranteedShuffleTrait")
export default class GuaranteedShuffleTrait extends Trait {
  _isGuaranteedShuffle = false;
  static traitKey = "GuaranteedShuffle";
  onLoad() {
    super.onLoad.call(this);
    this._registerBehaviors();
  }
  _registerBehaviors() {
    BehaviorFactory.registerBehavior(BehaviorsMapping.GuaranteedShuffle, GuaranteedShuffleBehavior);
  }
  onShuffleMod_verifySolu(e, t) {
    var r = e.ins,
      o = e.beforReturnVal;
    this._isGuaranteedShuffle = false;
    if (1 != o) {
      this._isGuaranteedShuffle = true;
      this._guaranteedShuffleModifier = new GuaranteedShuffleModifier(r._context);
      this._guaranteedShuffleModifier.shuffleToFixedArea();
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else t();
  }
  onIptShuffle_pushEffect(e, t) {
    var r = this._isGuaranteedShuffle;
    this._isGuaranteedShuffle = false;
    if (r) {
      var o = e.ins,
        i = new GuaranteedShuffleEffect({
          originalPositions: this._guaranteedShuffleModifier.getShuffleOriginalPositions()
        });
      o.pushEffect(i);
      mj.EventManager.emit(EGameEvent.Effect_Shuffle, o);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else t();
  }
}