import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("LowLoadUnLoadedTrait")
export default class LowLoadUnLoadedTrait extends Trait {
  static traitKey = "LowLoadUnLoaded";
  onLoad() {
    super.onLoad.call(this);
  }
  onLowPriLoader_addLoadCnt(t, r) {
    var e;
    if (1 != (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
      r();
    } else {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump
      });
    }
  }
}