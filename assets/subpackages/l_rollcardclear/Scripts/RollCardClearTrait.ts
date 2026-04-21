import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RollCardClearTrait")
export default class RollCardClearTrait extends Trait {
  static traitKey = "RollCardClear";
  onLoad() {
    super.onLoad.call(this);
  }
  onRollCTNode_clearCelSel(t, r) {
    var e;
    null === (e = t.ins._tileFlipStateCtl) || void 0 === e || e.forceEnter();
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}