import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("MoveScaleTimeTrait")
export default class MoveScaleTimeTrait extends Trait {
  static traitKey = "MoveScaleTime";
  onLoad() {
    super.onLoad.call(this);
  }
  onMoveStateAni_duration(t, e) {
    e({
      returnVal: this._traitData.duration || 0.05,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onScaleStateAni_duration(t, e) {
    e({
      returnVal: this._traitData.duration || 0.05,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
}