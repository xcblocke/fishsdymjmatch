import ExtractTrait from '../../../Scripts/ExtractTrait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2StaLvTHardTrait")
export default class Tile2StaLvTHardTrait extends ExtractTrait {
  static traitKey = "Tile2StaLvTHard";
  isSupportMode(t) {
    return t === MjGameType.Tile2Normal;
  }
  onLoad() {
    super.onLoad.call(this);
    this._fileName = this._traitData.fileName || "";
  }
  onT2StaLvT_hardFile(t, e) {
    if (this.checkGameMode() && this._fileName) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._fileName
      });
    } else {
      e();
    }
  }
}