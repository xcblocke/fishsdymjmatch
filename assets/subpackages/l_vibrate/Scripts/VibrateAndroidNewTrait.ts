import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { BadgeType } from '../../../Scripts/gamePlay/badge/mode/BadgeMode';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../../../Scripts/gamePlay/base/vibrate/VibrateManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import { VibrateMulti } from './VibrateMulti';
@mj.trait
@mj.class("VibrateAndroidNewTrait")
export default class VibrateAndroidNewTrait extends Trait {
  _androidConfigMap = new Map();
  _apiLevel = 0;
  static traitKey = "VibrateAndroidNew";
  onLoad() {
    super.onLoad.call(this);
    this.initAndroidConfigs();
    this.preloadAndroidConfigs();
  }
  onUISetDlg_HideVbBtn(t, e) {
    this._apiLevel < 26 && (t.args[0] = true);
    e();
  }
  initAndroidConfigs() {
    this._apiLevel = parseInt(mj.sdk.getApiLevel());
    this._apiLevel || cc.sys.isNative && console.error("[" + VibrateAndroidNewTrait.traitKey + "] 获取APILevel失败");
    this._config = {
      btnClick: this._traitData.btnClickAndroid || EVibrateStrength.Light,
      tileSelectSuccess: this._traitData.tileSelectSuccessAndroid || EVibrateStrength.Medium,
      tileDragStart: this._traitData.tileDragStartAndroid || EVibrateStrength.Medium,
      tileClear: this._traitData.tileClearAndroid || EVibrateStrength.Strong,
      chestOpen: this._traitData.chestOpenAndroid || EVibrateStrength.StrongShort,
      travelCollect: this._traitData.travelCollectAndroid || EVibrateStrength.StrongShort,
      dailyChallengeCollect: this._traitData.dailyChallengeCollectAndroid || EVibrateStrength.StrongShort,
      tileSelectFail: this._traitData.tileSelectFailAndroid || EVibrateStrength.Multiple,
      shuffleBtn: this._traitData.shuffleBtnAndroid || EVibrateStrength.Light,
      hintBtn: this._traitData.hintBtnAndroid || EVibrateStrength.Light,
      vibrationBtn: this._traitData.vibrationBtnAndroid || EVibrateStrength.Light
    };
    this._androidConfigMap.set(EVibrateStrength.Light, "1");
    this._androidConfigMap.set(EVibrateStrength.Medium, "2");
    this._androidConfigMap.set(EVibrateStrength.Strong, "3");
    this._androidConfigMap.set(EVibrateStrength.StrongShort, "4");
    this._androidConfigMap.set(EVibrateStrength.Multiple, "5");
  }
  getAndroidConfig(t) {
    return this._androidConfigMap.get(t) || null;
  }
  triggerVibrate(t) {
    this.triggerVibrateNew(t);
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
  onIptBase_pushClrEff(t, e) {
    this._traitData.tileSelectSuccessEnabled && VibrateManager.executeVibrate(this._config.tileSelectSuccess, EVibratePoint.OldTileSelect);
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
  preloadAndroidConfigs() {
    DataReader.getList("VibrationLevel_Android");
    DataReader.getList("VibrationConfig_Android");
  }
  triggerVibrateNew(t) {
    if (!(this._apiLevel < 26)) {
      var e = DataReader.getList("VibrationLevel_Android"),
        i = DataReader.getList("VibrationConfig_Android");
      if (e && i) {
        var r = (LoginModel.getInstance().deviceModel || "").split(" "),
          a = 2 == r.length ? r[1] : "",
          n = e.find(function (t) {
            return t.ID === a;
          }),
          l = i.find(function (e) {
            return e.ID === t;
          });
        if (!l) {
          VibrateManager.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
          return;
        }
        if (this.isSupportBestInterfaceCondition()) {
          VibrateMulti.start({
            predefinedParams: l.NewAndroidTime
          });
          return;
        }
        var c = null,
          s = null;
        if (this._apiLevel >= 29) {
          var u = 3;
          n && (u = n.Level);
          switch (u) {
            case 1:
              c = l.AndroidTime1;
              s = l.AndroidStrong1;
              break;
            case 2:
              c = l.AndroidTime2;
              s = l.AndroidStrong2;
              break;
            case 3:
            default:
              c = l.AndroidTime3;
              s = l.AndroidStrong3;
          }
        } else {
          c = l.OldAndroidTime;
          s = l.OldAndroidStrong;
        }
        VibrateManager.getInstance().triggerVibrateNormal({
          timings: c,
          amplitudes: s
        });
      } else VibrateManager.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
    }
  }
  isSupportBestInterface() {
    return "true" == mj.sdk.isSupportShakeAdvence();
  }
  isSupportBestInterfaceCondition() {
    return this._apiLevel >= 31 && this.isSupportBestInterface();
  }
}