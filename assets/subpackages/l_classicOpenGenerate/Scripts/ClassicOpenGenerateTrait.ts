import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ClassicOpenGenerateTrait")
export default class ClassicOpenGenerateTrait extends Trait {
  static traitKey = "ClassicOpenGenerate";
  onLoad() {
    super.onLoad.call(this);
  }
  onClcCtl_isOpenGenState(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: true
    });
  }
}