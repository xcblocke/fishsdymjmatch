import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ThemeEnableLevelTrait")
export default class ThemeEnableLevelTrait extends Trait {
  _minLevel = 30;
  static traitKey = "ThemeEnableLevel";
  onLoad() {
    var t;
    super.onLoad.call(this);
    var r = null === (t = this._traitData) || void 0 === t ? void 0 : t.minLevel;
    "number" == typeof r && !Number.isNaN(r) && r > 0 && (this._minLevel = r);
  }
  onFlowerCS_getMinLvEnable(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: this._minLevel,
      isBreak: true
    });
  }
  onBaseCardSkin_getStartLv(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      returnVal: this._minLevel,
      isBreak: true
    });
  }
}