import Trait from '../../../Scripts/framework/trait/Trait';
import VibrateManager, { EVibrateStrength } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("VibrateTraitAndroid")
export default class VibrateTraitAndroid extends Trait {
  _androidConfigMap = new Map();
  static traitKey = "VibrateAndroid";
  onLoad() {
    super.onLoad.call(this);
    this.initAndroidConfigs();
  }
  initAndroidConfigs() {
    this._config = {
      btnClick: this._traitData.btnClickAndroid || EVibrateStrength.Light,
      tileSelectSuccess: this._traitData.tileSelectSuccessAndroid || EVibrateStrength.Medium,
      tileDragStart: this._traitData.tileDragStartAndroid || EVibrateStrength.Medium,
      tileClear: this._traitData.tileClearAndroid || EVibrateStrength.Strong,
      chestOpen: this._traitData.chestOpenAndroid || EVibrateStrength.StrongShort,
      travelCollect: this._traitData.travelCollectAndroid || EVibrateStrength.StrongShort,
      dailyChallengeCollect: this._traitData.dailyChallengeCollectAndroid || EVibrateStrength.StrongShort,
      tileSelectFail: this._traitData.tileSelectFailAndroid || EVibrateStrength.Multiple
    };
    this._androidConfigMap.set(EVibrateStrength.Light, "1");
    this._androidConfigMap.set(EVibrateStrength.Medium, "2");
    this._androidConfigMap.set(EVibrateStrength.Strong, "3");
    this._androidConfigMap.set(EVibrateStrength.StrongShort, "4");
    this._androidConfigMap.set(EVibrateStrength.Multiple, "5");
  }
  getAndroidConfig(t) {
    return this._androidConfigMap.get(t) || "1";
  }
  triggerVibrate(t) {
    VibrateManager.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
  }
  onBaseUI_btnClick(t, e) {
    this._traitData.btnClickEnabled && this.triggerVibrate(this._config.btnClick);
    e();
  }
  onIptTchEnd_Success(t, e) {
    var i, r, a;
    this._traitData.tileSelectSuccessEnabled && ((null === (a = null === (r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r._data) || void 0 === a ? void 0 : a.isCancel) || this.triggerVibrate(this._config.tileSelectSuccess));
    e();
  }
  onIptBase_pushClrEff(t, e) {
    this._traitData.tileSelectSuccessEnabled && this.triggerVibrate(this._config.tileSelectSuccess);
    e();
  }
  onIptTchMove_startMove(t, e) {
    this._traitData.tileDragStartEnabled && this.triggerVibrate(this._config.tileDragStart);
    e();
  }
  onClearBhv_collision(t, e) {
    this._traitData.tileClearEnabled && this.triggerVibrate(this._config.tileClear);
    e();
  }
  onBoxOpenUI_onOpenFin(t, e) {
    this._traitData.chestOpenEnabled && this.triggerVibrate(this._config.chestOpen);
    e();
  }
  triggerTravelCollectVibrate() {
    this._traitData.travelCollectEnabled && this.triggerVibrate(this._config.travelCollect);
  }
  triggerDailyChallengeCollectVibrate() {
    this._traitData.dailyChallengeCollectEnabled && this.triggerVibrate(this._config.dailyChallengeCollect);
  }
  onIptTchStart_Lock(t, e) {
    this._traitData.tileSelectFailEnabled && this.triggerVibrate(this._config.tileSelectFail);
    e();
  }
}