import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ChangeBoardDataTrait")
export default class ChangeBoardDataTrait extends ExtractTrait {
  configPath = null;
  offsetPath = null;
  levelDataPath = null;
  jsonPath = null;
  bundleName = "";
  traitFolder = "";
  _pathExistsCache = new Map();
  static traitKey = "ChangeBoardData";
  onLoad() {
    super.onLoad.call(this);
    this.bundleName = this._traitData.bundleName || "mainRes";
    this.traitFolder = this._traitData.traitFolder || "trait1";
    this.configPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
    this.offsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
    this.levelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
    this.jsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
  }
  onExtNormLv_getConfigPath(t, e) {
    if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_file_config")) {
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
    if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_data_offsets")) {
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
    if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_data")) {
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
    var r;
    if (this.checkGameMode()) {
      var a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
      if (a) {
        var i = "config/boards/" + this.traitFolder + "/" + a;
        if (!this.getIsExists(i)) {
          e();
          return;
        }
      }
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this.jsonPath
      });
    } else e();
  }
  getIsExists(t) {
    this._pathExistsCache.has(t) || this._pathExistsCache.set(t, this.checkFileExists(t));
    return this._pathExistsCache.get(t);
  }
  checkFileExists(t) {
    var e = cc.assetManager.getBundle(this.bundleName);
    return !(!e || !e.getInfoWithPath(t));
  }
}