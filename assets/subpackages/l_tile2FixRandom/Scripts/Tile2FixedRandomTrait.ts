import ExtractTrait from '../../../Scripts/ExtractTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitEventPositionType, TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2FixedRandomTrait")
export default class Tile2FixedRandomTrait extends ExtractTrait {
  _minLevel = 2;
  _maxLevel = 10;
  _loadedLevelKeys = null;
  static traitKey = "Tile2FixedRandom";
  isSupportMode(t) {
    return t === MjGameType.Tile2Normal;
  }
  onLoad() {
    super.onLoad.call(this);
    this._minLevel = this._traitData.strategyMinLevel || 2;
    this._maxLevel = this._traitData.strategyMaxLevel || 10;
    this.registerEvent([{
      event: "ExtractTool_isFixedLevel",
      priority: 0,
      type: TraitEventPositionType.befor
    }]);
  }
  onT2FxRnd_priority(t, e) {
    var r;
    if (this.checkGameMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: null !== (r = this._traitData.priority) && void 0 !== r ? r : 90
      });
    } else {
      e();
    }
  }
  onT2FxRnd_config(t, e) {
    if (this.checkGameMode()) {
      var r = this._traitData.strategy;
      if (r) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            strategy: r,
            minLevel: this._minLevel,
            maxLevel: this._maxLevel,
            path: this._traitData.strategyPath || "tile2LevelData/fixLevelStrategy/" + r + "/",
            bundle: this._traitData.strategyBundle
          }
        });
      } else {
        e();
      }
    } else e();
  }
  onT2FxRnd_onLoaded(t, e) {
    if (this.checkGameMode()) {
      var r = t.args[0];
      this._loadedLevelKeys = new Set(r);
      e();
    } else e();
  }
  onExtractTool_isFixedLevel(t, e) {
    var r;
    if (this.checkGameMode()) {
      var i = t.args[0].toString().padStart(2, "0");
      if (null !== (r = this._loadedLevelKeys) && void 0 !== r && r.has(i)) {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
      } else {
        e();
      }
    } else e();
  }
}