import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2FlowerNotRightClearTrait")
export default class Tile2FlowerNotRightClearTrait extends Trait {
  static traitKey = "Tile2FlowerNotRightClear";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2FlowerClr_clearCon(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: {
        notRightClearEnable: this.traitData.notRightClearEnable || false
      }
    });
  }
}