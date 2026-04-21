import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("FlowerBaseSkinTrait")
export default class FlowerBaseSkinTrait extends Trait {
  _enable = true;
  static traitKey = "FlowerBaseSkin";
  onLoad() {
    super.onLoad.call(this);
    this._enable = false !== this._traitData.enable;
  }
  onFlowerCS_enableBase(e, t) {
    t();
  }
}