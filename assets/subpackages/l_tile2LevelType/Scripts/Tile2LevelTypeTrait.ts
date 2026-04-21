import ExtractTrait from '../../../Scripts/ExtractTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
enum a {
  None = 0,
  Normal = 1,
  Medium = 2,
  Hard = 3,
  Expert = 4,
}
@mj.trait
@mj.class("Tile2LevelTypeTrait")
export default class Tile2LevelTypeTrait extends ExtractTrait {
  static traitKey = "Tile2LevelType";
  isSupportMode(e) {
    return e === MjGameType.Tile2Normal;
  }
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      levelTypePattern: this._traitData.levelTypePattern || []
    };
  }
  getLevelType(e) {
    var t = this._config.levelTypePattern;
    return t && 0 !== t.length && t[(e - 1) % t.length] || a.Normal;
  }
  onExtractTool_isHardUI(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        o = this.getLevelType(r) == a.Hard;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else t();
  }
  onExtractTool_isExpertUI(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        o = this.getLevelType(r) == a.Expert;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else t();
  }
  onT2HarStr_isHard(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        o = this.getLevelType(r),
        n = o == a.Hard || o == a.Expert;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else t();
  }
  onExtractTool_getLvType(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        o = this.getLevelType(r);
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else t();
  }
}