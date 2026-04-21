import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import ExtractTrait from '../../../Scripts/ExtractTrait';
import ExtractStatic from '../../../Scripts/core/extractQuestion/ExtractStatic';
@mj.trait
@mj.class("ReplaceStaticLevelTrait")
export default class ReplaceStaticLevelTrait extends ExtractTrait {
  _levelData = null;
  static traitKey = "ReplaceStaticLevel";
  onLoad() {
    var e,
      a,
      r = this;
    super.onLoad.call(this);
    this._config = {
      dataPath: (null === (e = this._traitData) || void 0 === e ? void 0 : e.dataPath) || "byteData/static/static20",
      bundleName: (null === (a = this._traitData) || void 0 === a ? void 0 : a.dataBundle) || "mainRes"
    };
    if (this.localData.dataPath !== this._config.dataPath) {
      this.localData.dataPath = this._config.dataPath;
      this.localData.currentIndex = -1;
      this.localData.levelID = -1;
    }
    ExtractStatic.getInstance().loadStaticDataByPath(this._config.dataPath, this._config.bundleName, function (t) {
      r._levelData = t;
    }, function () {
      r.eventEnabled = false;
    });
  }
  isDataLoaded() {
    return null !== this._levelData && this._levelData.length > 0;
  }
  isNextExtract() {
    return !!this.isDataLoaded() && this.localData.currentIndex + 1 < this._levelData.length;
  }
  getDataLength() {
    return this.isDataLoaded() ? this._levelData.length : 0;
  }
  getContentByIndex(t) {
    return this.isDataLoaded() ? t < 0 || t >= this._levelData.length ? null : this._levelData[t] : null;
  }
  onExtractTool_isStaticLv(t, e) {
    if (this.checkGameMode()) {
      if (t.args[0] !== this.localData.levelID) {
        if (this.isNextExtract()) {
          e({
            returnType: TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: true
          });
        } else {
          e();
        }
      } else {
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: true
        });
      }
    } else {
      e();
    }
  }
  onExtractStatic_getContent(t, e) {
    if (this.checkGameMode() && this.isNextExtract()) {
      var a = t.args[0];
      this.localData.currentIndex++;
      var r = this.localData.currentIndex,
        i = this.getContentByIndex(r);
      if (i) {
        this.getDataLength();
        this.localData.levelID = a;
        e({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: [i, 0, r.toString(), this._config.dataPath, "00", false]
        });
      } else e();
    } else e();
  }
  onIptSetLv_reGenFaces(t, e) {
    var a,
      r = t.args[0],
      i = null === (a = null == r ? void 0 : r.levelData) || void 0 === a ? void 0 : a.levelId;
    if (this.checkGameMode() && i === this.localData.levelID) {
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else {
      e();
    }
  }
}