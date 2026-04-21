import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
enum n {
  Fixed = 0,
  LevelMultiply = 1,
}
@mj.trait
@mj.class("ComboScoreTrait")
export default class ComboScoreTrait extends Trait {
  static traitKey = "ComboScore";
  onLoad() {
    super.onLoad.call(this);
    var r = void 0 !== this._traitData.mode ? this._traitData.mode : 0;
    this._config = {
      mode: 1 === r ? n.LevelMultiply : n.Fixed,
      value: void 0 !== this._traitData.value ? this._traitData.value : 10,
      upperLimit: void 0 !== this._traitData.upperLimit ? this._traitData.upperLimit : Number.MAX_SAFE_INTEGER
    };
  }
  onScoreMod_baseComboScr(t, r) {
    var e;
    if (this._config.mode === n.LevelMultiply) {
      var o = t.ins.context.getGameData().getLevelId();
      e = this._config.value * o;
    } else e = this._config.value;
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: e
    });
  }
  onScoreMod_maxComboScr(t, r) {
    r({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this._config.upperLimit > 0 ? this._config.upperLimit : -1
    });
  }
}