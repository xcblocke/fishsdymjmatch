import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("LevelValueTrait")
export default class LevelValueTrait extends Trait {
  static traitKey = "LevelValue";
  get strategy() {
    return this.traitData.strategy;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onDCMgr_setLvSgy(e, t) {
    if (this.strategy) {
      e.args[0] = this.strategy;
      t({
        isBreak: true
      });
    } else t();
  }
}