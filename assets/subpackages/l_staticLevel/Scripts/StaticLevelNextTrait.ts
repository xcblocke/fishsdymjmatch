import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("StaticLevelNextTrait")
export default class StaticLevelNextTrait extends Trait {
  static traitKey = "StaticLevelNext";
  onStaticLvTt_isNext(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: true
    });
  }
}