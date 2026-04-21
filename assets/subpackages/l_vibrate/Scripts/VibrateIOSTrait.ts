import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { BadgeType } from '../../../Scripts/gamePlay/badge/mode/BadgeMode';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
@mj.trait
@mj.class("VibrateIOSTrait")
export default class VibrateIOSTrait extends Trait {
  _iosConfigMap = new Map();
  static traitKey = "VibrateIOS";
  onLoad() {
    super.onLoad.call(this);
    this.initIOSConfigs();
  }
  initIOSConfigs() {
    this._config = {
      btnClick: this._traitData.btnClickIOS || EVibrateStrength.Light,
      tileSelectSuccess: this._traitData.tileSelectSuccessIOS || EVibrateStrength.Medium,
      tileDragStart: this._traitData.tileDragStartIOS || EVibrateStrength.Medium,
      tileClear: this._traitData.tileClearIOS || EVibrateStrength.Strong,
      chestOpen: this._traitData.chestOpenIOS || EVibrateStrength.StrongShort,
      travelCollect: this._traitData.travelCollectIOS || EVibrateStrength.StrongShort,
      dailyChallengeCollect: this._traitData.dailyChallengeCollectIOS || EVibrateStrength.StrongShort,
      tileSelectFail: this._traitData.tileSelectFailIOS || EVibrateStrength.Multiple,
      shuffleBtn: this._traitData.shuffleBtnIOS || EVibrateStrength.Light,
      hintBtn: this._traitData.hintBtnIOS || EVibrateStrength.Light,
      vibrationBtn: this._traitData.vibrationBtnIOS || EVibrateStrength.Light
    };
    this._iosConfigMap.set(EVibrateStrength.Light, "1");
    this._iosConfigMap.set(EVibrateStrength.Medium, "2");
    this._iosConfigMap.set(EVibrateStrength.Strong, "3");
    this._iosConfigMap.set(EVibrateStrength.StrongShort, "4");
    this._iosConfigMap.set(EVibrateStrength.Multiple, "5");
  }
  triggerVibrate(t) {
    var e = this._iosConfigMap.get(t) || "1";
    VibrateManager.getInstance().triggerVibrateByType(e);
  }
  executeTriggerVibrate(t) {
    this.triggerVibrate(t);
  }
  onBaseUI_btnClick(t, e) {
    var i,
      r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0];
    if (!(null == r ? void 0 : r.ignoreClickAudio)) {
      var a = null == r ? void 0 : r.vibrateLevel;
      "function" == typeof a && (a = a());
      if (void 0 === a) {
        this._traitData.btnClickEnabled && VibrateManager.executeVibrate(this._config.btnClick);
      } else {
        -1 !== a && VibrateManager.executeVibrate(a);
      }
    }
    e();
  }
  onIptTchEnd_Success(t, e) {
    var i, r, a;
    this._traitData.tileSelectSuccessEnabled && ((null === (a = null === (r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r._data) || void 0 === a ? void 0 : a.isCancel) || VibrateManager.executeVibrate(this._config.tileSelectSuccess, EVibratePoint.OldTileSelect));
    e();
  }
  onIptTchMove_startMove(t, e) {
    var i;
    if (null !== (i = t.extra) && void 0 !== i && i.skipDragStartVibrate) e();else {
      this._traitData.tileDragStartEnabled && VibrateManager.executeVibrate(this._config.tileDragStart, EVibratePoint.OldDragStart);
      e();
    }
  }
  onClearBhv_collision(t, e) {
    this._traitData.tileClearEnabled && VibrateManager.executeVibrate(this._config.tileClear, EVibratePoint.OldTileClear);
    e();
  }
  onBoxOpenUI_onOpenFin(t, e) {
    this._traitData.chestOpenEnabled && VibrateManager.executeVibrate(this._config.chestOpen, EVibratePoint.OldChestOpen);
    e();
  }
  triggerTravelCollectVibrate() {
    this._traitData.travelCollectEnabled && VibrateManager.executeVibrate(this._config.travelCollect);
  }
  triggerDailyChallengeCollectVibrate() {
    this._traitData.dailyChallengeCollectEnabled && VibrateManager.executeVibrate(this._config.dailyChallengeCollect);
  }
  onIptTchStart_Lock(t, e) {
    this._traitData.tileSelectFailEnabled && VibrateManager.executeVibrate(this._config.tileSelectFail, EVibratePoint.OldTileLock);
    e();
  }
  onIptBase_pushClrEff(t, e) {
    this._traitData.tileSelectSuccessEnabled && VibrateManager.executeVibrate(this._config.tileSelectSuccess, EVibratePoint.OldTileSelect);
    e();
  }
  onGameUI_onBtnShuffle(t, e) {
    this._traitData.shuffleBtnEnabled && VibrateManager.executeVibrate(this._config.shuffleBtn, EVibratePoint.OldShuffleBtn);
    e();
  }
  onGameUI_onBtnHitTips(t, e) {
    this._traitData.hintBtnEnabled && VibrateManager.executeVibrate(this._config.hintBtn, EVibratePoint.OldHintBtn);
    e();
  }
  onUISetDlg_onVibClick(t, e) {
    this._traitData.vibrationBtnEnabled && VibrateManager.executeVibrate(this._config.vibrationBtn);
    e();
  }
  onUISetHome_onVibClick(t, e) {
    this._traitData.vibrationBtnEnabled && VibrateManager.executeVibrate(this._config.vibrationBtn);
    e();
  }
  onBadgeMode_addBadge(t, e) {
    var i = t.args[0];
    if (i) {
      var r = DataReader.getByKey(ConfigType.item_config, i),
        a = r ? r.Type : 0;
      if (a === BadgeType.Journey) {
        this.triggerTravelCollectVibrate();
      } else {
        a === BadgeType.Daily && this.triggerDailyChallengeCollectVibrate();
      }
      e();
    } else e();
  }
}