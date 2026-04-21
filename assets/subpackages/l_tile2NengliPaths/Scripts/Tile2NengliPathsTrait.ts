import Tile2CapabilityExtractRegistry from '../../../Scripts/Tile2CapabilityExtractRegistry';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Tile2NengliPathsTrait")
export default class Tile2NengliPathsTrait extends Trait {
  bundleName = "mainRes";
  traitFolder = "trait4";
  static traitKey = "Tile2NengliPaths";
  onLoad() {
    super.onLoad.call(this);
    this.bundleName = this._traitData.bundleName || "mainRes";
    this.traitFolder = this._traitData.traitFolder || "trait4";
    var e = this.traitFolder,
      r = this.bundleName;
    this.configPath = ["byteData/" + e + "/level_file_config", r];
    this.offsetPath = ["byteData/" + e + "/level_data_offsets", r];
    this.levelDataPath = ["byteData/" + e + "/level_data", r];
    this.jsonPath = ["config/boards/" + e + "/", r];
    Tile2CapabilityExtractRegistry.setFromConfig({
      enabled: true,
      bundle: r,
      offsetPath: this.offsetPath[0],
      levelDataPath: this.levelDataPath[0],
      levelFileConfigPath: this.configPath[0],
      jsonPathPrefix: this.jsonPath[0]
    });
  }
  isTile2CapabilityMode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal && Tile2CapabilityExtractRegistry.isEnabled();
  }
  onExtNormLv_getConfigPath(t, e) {
    if (this.isTile2CapabilityMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.configPath
      });
    } else {
      e();
    }
  }
  onExtNormLv_getOffsetPath(t, e) {
    if (this.isTile2CapabilityMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.offsetPath
      });
    } else {
      e();
    }
  }
  onExtNormLv_getLevDataPath(t, e) {
    if (this.isTile2CapabilityMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.levelDataPath
      });
    } else {
      e();
    }
  }
  onExtNormLv_getJsonPath(t, e) {
    if (this.isTile2CapabilityMode()) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.jsonPath
      });
    } else {
      e();
    }
  }
}