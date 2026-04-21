import { ShuffleEffect } from '../../../Scripts/ShuffleEffect';
import { SpiralShuffleEffect } from '../../../Scripts/SpiralShuffleEffect';
import { StackShuffleEffect } from '../../../Scripts/StackShuffleEffect';
import { Tile2ShuffleEffect } from '../../../Scripts/Tile2ShuffleEffect';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("RandomShuffleAniTrait")
export default class RandomShuffleAniTrait extends Trait {
  static traitKey = "RandomShuffleAni";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "IptT2Shuffle_getEff"
    }]);
  }
  onIptShuffle_getEffect(e, t) {
    var r;
    switch (Math.floor(3 * Math.random())) {
      case 0:
        r = new ShuffleEffect({});
        break;
      case 1:
        r = new SpiralShuffleEffect({});
        break;
      case 2:
      default:
        r = new StackShuffleEffect({});
    }
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
  onIptT2Shuffle_getEff(e, t) {
    var r;
    switch (Math.floor(3 * Math.random())) {
      case 0:
        r = new Tile2ShuffleEffect({});
        break;
      case 1:
        r = new SpiralShuffleEffect({});
        break;
      case 2:
      default:
        r = new StackShuffleEffect({});
    }
    t({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
}