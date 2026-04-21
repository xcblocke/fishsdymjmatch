import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
enum n {
  Fixed = 0,
  LevelMultiply = 1,
}
@mj.trait
@mj.class("ClearScoreTrait")
export default class ClearScoreTrait extends Trait {
  static traitKey = "ClearScore";
  onLoad() {
    super.onLoad.call(this);
    var e = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
    this._config = {
      mode: 1 === e ? n.LevelMultiply : n.Fixed,
      value: void 0 !== this._traitData.value ? this._traitData.value : 30
    };
  }
  onScoreMod_baseScr(t, e) {
    var r;
    if (this._config.mode === n.LevelMultiply) {
      var o = t.ins.context.getGameData().getLevelId();
      r = this._config.value * o;
    } else r = this._config.value;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r
    });
  }
}