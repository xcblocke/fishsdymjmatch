import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2StaticTrait")
export default class Tile2StaticTrait extends Trait {
  static traitKey = "Tile2Static";
  onLoad() {
    var r;
    super.onLoad.call(this);
    this._priority = null !== (r = this._traitData.priority) && void 0 !== r ? r : 20;
    var e = this._traitData.libName || "tile2_static1";
    this._dataPath = "tile2LevelData/static/" + e;
    this._bundleName = this._traitData.bundleName || "mainRes";
  }
  onT2StaStr_priority(t, r) {
    r({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: this._priority
    });
  }
  onT2StaStr_dataPath(t, r) {
    r({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: [this._dataPath, this._bundleName]
    });
  }
}