import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2MagnetMatchesTrait")
export default class Tile2MagnetMatchesTrait extends Trait {
  static traitKey = "Tile2MagnetMatches";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2MagnetChk_magnetCnt(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.traitData.matchPair || 1
    });
  }
}