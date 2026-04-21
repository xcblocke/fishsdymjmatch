import { SingletonFactory } from '../../../framework/utils/SingletonFactory';
import { DotGameBtnClick } from '../../../dot/DGameBtnClick';
import UserModel from '../../user/UserModel';
export enum EVibratePoint {
  OldTileSelect = 1,
  OldTileClear = 2,
  OldTileLock = 3,
  OldDragStart = 4,
  OldChestOpen = 5,
  OldShuffleBtn = 6,
  OldHintBtn = 7,
  Tile2TileSelect = 10,
  Tile2TileClear = 11,
  Tile2TileLock = 12,
  Tile2Win = 13,
  Tile2BeforeWin = 14,
  Tile2Flip = 15,
  Tile2Revive = 16,
  Tile2HitTips = 17,
  Tile2Revert = 18,
  Tile2ShuffleVibrate = 19,
  Tile2MagnetMerge = 20,
  Tile2Fail = 21,
  Tile2ShuffleDone = 22,
  Tile2WinViewBomb = 23,
  Tile2SlotAdvance = 24,
  Tile2ComboDelayVibrate = 25,
  Tile2ScreenEdge = 26,
  Tile2FullCombo = 27,
}
export enum EVibrateStrength {
  Disabled = -1,
  Light = 1000,
  Medium = 1001,
  Strong = 1002,
  StrongShort = 1003,
  Multiple = 1004,
  Long = 1005,
  RewardStrong = 1006,
  DoubleWeak = 1007,
  Shuffle = 1008,
  Lightning = 1009,
  LockCup = 1010,
  GameStart = 1011,
}
(VibratePointNames = {})[EVibratePoint.OldTileSelect] = "旧玩法-点击普通牌";
VibratePointNames[EVibratePoint.OldTileClear] = "旧玩法-消除碰撞";
VibratePointNames[EVibratePoint.OldTileLock] = "旧玩法-点击锁定牌";
VibratePointNames[EVibratePoint.OldDragStart] = "旧玩法-拖动开始";
VibratePointNames[EVibratePoint.OldChestOpen] = "旧玩法-宝箱开启";
VibratePointNames[EVibratePoint.OldShuffleBtn] = "旧玩法-洗牌按钮";
VibratePointNames[EVibratePoint.OldHintBtn] = "旧玩法-提示按钮";
VibratePointNames[EVibratePoint.Tile2TileSelect] = "Tile2-点击普通牌";
VibratePointNames[EVibratePoint.Tile2TileClear] = "Tile2-消除碰撞";
VibratePointNames[EVibratePoint.Tile2TileLock] = "Tile2-点击锁定牌";
VibratePointNames[EVibratePoint.Tile2Win] = "Tile2-胜利结算";
VibratePointNames[EVibratePoint.Tile2BeforeWin] = "Tile2-提前胜利";
VibratePointNames[EVibratePoint.Tile2Flip] = "Tile2-翻暗牌";
VibratePointNames[EVibratePoint.Tile2Revive] = "Tile2-复活震动";
VibratePointNames[EVibratePoint.Tile2HitTips] = "Tile2-提示震动";
VibratePointNames[EVibratePoint.Tile2Revert] = "Tile2-撤回震动";
VibratePointNames[EVibratePoint.Tile2ShuffleVibrate] = "Tile2-洗牌震动";
VibratePointNames[EVibratePoint.Tile2MagnetMerge] = "Tile2-磁铁消除震动";
VibratePointNames[EVibratePoint.Tile2Fail] = "Tile2-失败震动";
VibratePointNames[EVibratePoint.Tile2ShuffleDone] = "Tile2-洗牌完成震动";
VibratePointNames[EVibratePoint.Tile2WinViewBomb] = "Tile2-结算页面爆炸动画震动";
VibratePointNames[EVibratePoint.Tile2SlotAdvance] = "Tile2-框升级震动";
VibratePointNames[EVibratePoint.Tile2ComboDelayVibrate] = "Tile2-combo+5延迟震动（碎块下落）";
VibratePointNames[EVibratePoint.Tile2ScreenEdge] = "Tile2-combo屏幕边缘动画";
VibratePointNames[EVibratePoint.Tile2FullCombo] = "Tile2-全连击震动";
export var VibratePointNames = VibratePointNames;
export default class VibrateManager {
  static GM_VIBRATE_DEBUG_KEY = "__gmVibrateDebug__";
  static _delayVibrateTimers = [];
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  static getVibrateTrait() {
    var e = mj.getClassByName("VibrateAndroidNewTrait");
    return e && e.getInstance() && true === e.getInstance().eventEnabled ? e : (e = mj.getClassByName("VibrateIOSTrait")) && e.getInstance() && true === e.getInstance().eventEnabled ? e : null;
  }
  static executeVibrate(t) {
    var o = VibrateManager.getVibrateTrait();
    if (o) {
      o.getInstance().executeTriggerVibrate(t);
      return true;
    }
    return false;
  }
  static getGMVibrateStrength(t) {
    var o;
    try {
      var n = cc.sys.localStorage.getItem(VibrateManager.GM_VIBRATE_DEBUG_KEY);
      if (!n) return null;
      var i = JSON.parse(n);
      if (!i || !i.enabled) return null;
      var r = null === (o = i.pointStrengths) || void 0 === o ? void 0 : o[t];
      return null != r ? r : null;
    } catch (e) {
      return null;
    }
  }
  static getGMVibrateCustomParams(t) {
    var o, n, i;
    try {
      var r = cc.sys.localStorage.getItem(VibrateManager.GM_VIBRATE_DEBUG_KEY);
      if (!r) return null;
      var a = JSON.parse(r);
      if (!a || !a.enabled) return null;
      var l = null === (o = a.pointCustomParams) || void 0 === o ? void 0 : o[t];
      return l && (null === (n = l.timings) || void 0 === n ? void 0 : n.length) > 0 && (null === (i = l.amplitudes) || void 0 === i ? void 0 : i.length) > 0 ? {
        timings: l.timings,
        amplitudes: l.amplitudes
      } : null;
    } catch (e) {
      return null;
    }
  }
  static executeDelayedVibrateSequence(t, o, n) {
    if (o && 0 !== o.length) {
      VibrateManager.cleanupDelayVibrateTimers();
      for (var r = function r(r) {
          var a = o[r],
            l = setTimeout(function () {
              VibrateManager.executeVibrate(t, n);
              var o = VibrateManager._delayVibrateTimers.indexOf(l);
              -1 !== o && VibrateManager._delayVibrateTimers.splice(o, 1);
            }, a);
          VibrateManager._delayVibrateTimers.push(l);
        }, a = 0; a < o.length; a++) r(a);
    }
  }
  static cleanupDelayVibrateTimers() {
    if (VibrateManager._delayVibrateTimers.length > 0) {
      VibrateManager._delayVibrateTimers.forEach(function (e) {
        clearTimeout(e);
      });
      VibrateManager._delayVibrateTimers = [];
    }
  }
  triggerVibrateByType(e) {
    if (UserModel.getInstance().isVibrationEnabled()) {
      mj.sdk.shake(e);
      DotGameBtnClick.dotFirstVibration();
    }
  }
  triggerVibrateNormal(e) {
    if (UserModel.getInstance().isVibrationEnabled() && e && e.timings.length > 0 && e.amplitudes.length > 0) {
      mj.sdk.shakeRepeat(JSON.stringify(e));
      DotGameBtnClick.dotFirstVibration();
    }
  }
  triggerVibrateAdvence(e) {
    if (UserModel.getInstance().isVibrationEnabled() && ("0" == e || "1" == e || "2" == e || "5" == e)) {
      mj.sdk.shakeAdvence(e);
      DotGameBtnClick.dotFirstVibration();
    }
  }
  isSupportShakeAdvence() {
    return "1" == mj.sdk.isSupportShakeAdvence();
  }
}