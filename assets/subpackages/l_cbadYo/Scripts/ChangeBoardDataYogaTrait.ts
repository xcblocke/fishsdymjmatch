import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { MjGameType, JourneyType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
import LowPriorityBundleLoader, { ELowPriorityBundlePriority } from '../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader';
@mj.trait
@mj.class("ChangeBoardDataYogaTrait")
export default class ChangeBoardDataYogaTrait extends Trait {
  _configConfigPath = null;
  _configOffsetPath = null;
  _configLevelDataPath = null;
  _configJsonPath = null;
  _localConfigPath = null;
  _localOffsetPath = null;
  _localLevelDataPath = null;
  _localJsonPath = null;
  bundleName = "";
  traitFolder = "";
  isRemoteBundle = false;
  _useConfigBundle = false;
  static traitKey = "ChangeBoardDataYoga";
  static LOCAL_FALLBACK_FOLDER = "travelYoGa";
  onLoad() {
    super.onLoad.call(this);
    this.bundleName = this._traitData.bundleName || "mainRes";
    this.traitFolder = this._traitData.traitFolder || "travelYoGa";
    this.isRemoteBundle = "mainRes" !== this.bundleName;
    this._configConfigPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
    this._configOffsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
    this._configLevelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
    this._configJsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
    var e = ChangeBoardDataYogaTrait.LOCAL_FALLBACK_FOLDER;
    this._localConfigPath = ["byteData/" + e + "/level_file_config", "mainRes"];
    this._localOffsetPath = ["byteData/" + e + "/level_data_offsets", "mainRes"];
    this._localLevelDataPath = ["byteData/" + e + "/level_data", "mainRes"];
    this._localJsonPath = ["config/boards/" + e + "/", "mainRes"];
    this.isRemoteBundle && LowPriorityBundleLoader.getInstance().addTask(this.bundleName, ELowPriorityBundlePriority.DefaultHightPriority);
  }
  isBundleReady() {
    return !this.isRemoteBundle || LowPriorityBundleLoader.getInstance().isBundlePreLoaded(this.bundleName);
  }
  resolveSource() {
    this._useConfigBundle = this.isBundleReady();
  }
  shouldUseYogaPath(t, e) {
    if (t && null != e) return t === MjGameType.Travel && e === JourneyType.Yoga;
    var a = ExtractTool.getCurrentGameType(),
      r = ExtractTool.getCurrentJourneyType();
    return a === MjGameType.Travel && r === JourneyType.Yoga;
  }
  onExtNormLv_getConfigPath(t, e) {
    var a,
      r,
      o = null === (a = t.args) || void 0 === a ? void 0 : a[0],
      i = null === (r = t.args) || void 0 === r ? void 0 : r[1];
    if (this.shouldUseYogaPath(o, i)) {
      this.resolveSource();
      var n = this._useConfigBundle ? this._configConfigPath : this._localConfigPath;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
  onExtNormLv_getOffsetPath(t, e) {
    var a,
      r,
      o = null === (a = t.args) || void 0 === a ? void 0 : a[0],
      i = null === (r = t.args) || void 0 === r ? void 0 : r[1];
    if (this.shouldUseYogaPath(o, i)) {
      this.resolveSource();
      var n = this._useConfigBundle ? this._configOffsetPath : this._localOffsetPath;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
  onExtNormLv_getLevDataPath(t, e) {
    var a,
      r,
      o = null === (a = t.args) || void 0 === a ? void 0 : a[0],
      i = null === (r = t.args) || void 0 === r ? void 0 : r[1];
    if (this.shouldUseYogaPath(o, i)) {
      this.resolveSource();
      var n = this._useConfigBundle ? this._configLevelDataPath : this._localLevelDataPath;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
  onExtNormLv_getJsonPath(t, e) {
    var a,
      r,
      o = null === (a = t.args) || void 0 === a ? void 0 : a[1],
      i = null === (r = t.args) || void 0 === r ? void 0 : r[2];
    if (this.shouldUseYogaPath(o, i)) {
      var n = this._useConfigBundle ? this._configJsonPath : this._localJsonPath;
      e({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: n
      });
    } else e();
  }
}