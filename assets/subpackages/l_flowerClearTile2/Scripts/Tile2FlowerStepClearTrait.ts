import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2FlowerStepClearTrait")
export default class Tile2FlowerStepClearTrait extends Trait {
  static traitKey = "Tile2FlowerStepClear";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2FlowerClr_clearCon(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: {
        stepCount: this.traitData.stepCount || 0
      }
    });
  }
}