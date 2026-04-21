import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2MagnetReviveTrait")
export default class Tile2MagnetReviveTrait extends Trait {
  static traitKey = "Tile2MagnetRevive";
  onLoad() {
    super.onLoad.call(this);
  }
  getMatchPair() {
    return this.traitData.matchPair || 2;
  }
  onT2Revive_magnetRevive(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
  onT2Revive_magnetCnt(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getMatchPair()
    });
  }
}