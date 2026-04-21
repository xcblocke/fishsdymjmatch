import ExtractTrait from '../../../Scripts/ExtractTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitEventPositionType, TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2FixedLevelTrait")
export default class Tile2FixedLevelTrait extends ExtractTrait {
  _levels = [];
  static traitKey = "Tile2FixedLevel";
  isSupportMode(e) {
    return e === MjGameType.Tile2Normal;
  }
  onLoad() {
    var t;
    super.onLoad.call(this);
    this._priority = null !== (t = this._traitData.priority) && void 0 !== t ? t : 100;
    this._levels = this._traitData.levels || [];
    this.registerEvent([{
      event: "ExtractTool_isFixedLevel",
      priority: 0,
      type: TraitEventPositionType.befor
    }]);
  }
  onT2FixStr_priority(e, t) {
    if (this.checkGameMode()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._priority
      });
    } else {
      t();
    }
  }
  onT2FixStr_isFixed(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0];
      if (this._levels[r - 1]) {
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
      } else {
        t();
      }
    } else t();
  }
  onT2FixStr_getFixed(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0],
        i = this._levels[r - 1];
      if (i) {
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: i
        });
      } else {
        t();
      }
    } else t();
  }
  onExtractTool_isFixedLevel(e, t) {
    if (this.checkGameMode()) {
      var r = e.args[0];
      if (this._levels[r - 1]) {
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
      } else {
        t();
      }
    } else t();
  }
}