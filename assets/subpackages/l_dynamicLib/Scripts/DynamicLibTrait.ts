import { LevelModel } from '../../../Scripts/core/dynamicCurve/LevelModel';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DynamicLibTrait")
export default class DynamicLibTrait extends Trait {
  _jsonName = "sample";
  _remoteBundleName = "r_board1";
  static traitKey = "DynamicLib";
  onLoad() {
    super.onLoad.call(this);
    this.checkChange();
    this._jsonName = this._traitData.jsonName || "sample";
    this._remoteBundleName = this._traitData.remoteBundleName || "r_board1";
  }
  checkChange() {
    var t = JSON.stringify(this.traitData),
      e = CryptoJS.MD5(t).toString().toUpperCase();
    if (this.localData.libraryHash !== e) {
      this.localData.libraryHash = e;
      LevelModel.getInstance().clearLevelValues();
    }
  }
  onDCMgr_getLvPath(t, e) {
    var r = t.args[0],
      o = this.getLevelPath(r);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: o
    });
  }
  getLevelPath() {
    return [["config/boards/dynamic/" + this._jsonName, "mainRes"], [this._jsonName, this._remoteBundleName]];
  }
}