"use strict";
cc._RF.push(module, 'fa2f595Q1lEgIG/Ui2JUyhh', 'VibrateManager');
// Scripts/gamePlay/base/vibrate/VibrateManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.VibratePointNames = exports.EVibrateStrength = exports.EVibratePoint = void 0;
var SingletonFactory_1 = require("../../../framework/utils/SingletonFactory");
var DGameBtnClick_1 = require("../../../dot/DGameBtnClick");
var UserModel_1 = require("../../user/UserModel");
var EVibratePoint;
(function (EVibratePoint) {
    EVibratePoint[EVibratePoint["OldTileSelect"] = 1] = "OldTileSelect";
    EVibratePoint[EVibratePoint["OldTileClear"] = 2] = "OldTileClear";
    EVibratePoint[EVibratePoint["OldTileLock"] = 3] = "OldTileLock";
    EVibratePoint[EVibratePoint["OldDragStart"] = 4] = "OldDragStart";
    EVibratePoint[EVibratePoint["OldChestOpen"] = 5] = "OldChestOpen";
    EVibratePoint[EVibratePoint["OldShuffleBtn"] = 6] = "OldShuffleBtn";
    EVibratePoint[EVibratePoint["OldHintBtn"] = 7] = "OldHintBtn";
    EVibratePoint[EVibratePoint["Tile2TileSelect"] = 10] = "Tile2TileSelect";
    EVibratePoint[EVibratePoint["Tile2TileClear"] = 11] = "Tile2TileClear";
    EVibratePoint[EVibratePoint["Tile2TileLock"] = 12] = "Tile2TileLock";
    EVibratePoint[EVibratePoint["Tile2Win"] = 13] = "Tile2Win";
    EVibratePoint[EVibratePoint["Tile2BeforeWin"] = 14] = "Tile2BeforeWin";
    EVibratePoint[EVibratePoint["Tile2Flip"] = 15] = "Tile2Flip";
    EVibratePoint[EVibratePoint["Tile2Revive"] = 16] = "Tile2Revive";
    EVibratePoint[EVibratePoint["Tile2HitTips"] = 17] = "Tile2HitTips";
    EVibratePoint[EVibratePoint["Tile2Revert"] = 18] = "Tile2Revert";
    EVibratePoint[EVibratePoint["Tile2ShuffleVibrate"] = 19] = "Tile2ShuffleVibrate";
    EVibratePoint[EVibratePoint["Tile2MagnetMerge"] = 20] = "Tile2MagnetMerge";
    EVibratePoint[EVibratePoint["Tile2Fail"] = 21] = "Tile2Fail";
    EVibratePoint[EVibratePoint["Tile2ShuffleDone"] = 22] = "Tile2ShuffleDone";
    EVibratePoint[EVibratePoint["Tile2WinViewBomb"] = 23] = "Tile2WinViewBomb";
    EVibratePoint[EVibratePoint["Tile2SlotAdvance"] = 24] = "Tile2SlotAdvance";
    EVibratePoint[EVibratePoint["Tile2ComboDelayVibrate"] = 25] = "Tile2ComboDelayVibrate";
    EVibratePoint[EVibratePoint["Tile2ScreenEdge"] = 26] = "Tile2ScreenEdge";
    EVibratePoint[EVibratePoint["Tile2FullCombo"] = 27] = "Tile2FullCombo";
})(EVibratePoint = exports.EVibratePoint || (exports.EVibratePoint = {}));
var EVibrateStrength;
(function (EVibrateStrength) {
    EVibrateStrength[EVibrateStrength["Disabled"] = -1] = "Disabled";
    EVibrateStrength[EVibrateStrength["Light"] = 1000] = "Light";
    EVibrateStrength[EVibrateStrength["Medium"] = 1001] = "Medium";
    EVibrateStrength[EVibrateStrength["Strong"] = 1002] = "Strong";
    EVibrateStrength[EVibrateStrength["StrongShort"] = 1003] = "StrongShort";
    EVibrateStrength[EVibrateStrength["Multiple"] = 1004] = "Multiple";
    EVibrateStrength[EVibrateStrength["Long"] = 1005] = "Long";
    EVibrateStrength[EVibrateStrength["RewardStrong"] = 1006] = "RewardStrong";
    EVibrateStrength[EVibrateStrength["DoubleWeak"] = 1007] = "DoubleWeak";
    EVibrateStrength[EVibrateStrength["Shuffle"] = 1008] = "Shuffle";
    EVibrateStrength[EVibrateStrength["Lightning"] = 1009] = "Lightning";
    EVibrateStrength[EVibrateStrength["LockCup"] = 1010] = "LockCup";
    EVibrateStrength[EVibrateStrength["GameStart"] = 1011] = "GameStart";
})(EVibrateStrength = exports.EVibrateStrength || (exports.EVibrateStrength = {}));
(exports.VibratePointNames = {})[EVibratePoint.OldTileSelect] = "旧玩法-点击普通牌";
exports.VibratePointNames[EVibratePoint.OldTileClear] = "旧玩法-消除碰撞";
exports.VibratePointNames[EVibratePoint.OldTileLock] = "旧玩法-点击锁定牌";
exports.VibratePointNames[EVibratePoint.OldDragStart] = "旧玩法-拖动开始";
exports.VibratePointNames[EVibratePoint.OldChestOpen] = "旧玩法-宝箱开启";
exports.VibratePointNames[EVibratePoint.OldShuffleBtn] = "旧玩法-洗牌按钮";
exports.VibratePointNames[EVibratePoint.OldHintBtn] = "旧玩法-提示按钮";
exports.VibratePointNames[EVibratePoint.Tile2TileSelect] = "Tile2-点击普通牌";
exports.VibratePointNames[EVibratePoint.Tile2TileClear] = "Tile2-消除碰撞";
exports.VibratePointNames[EVibratePoint.Tile2TileLock] = "Tile2-点击锁定牌";
exports.VibratePointNames[EVibratePoint.Tile2Win] = "Tile2-胜利结算";
exports.VibratePointNames[EVibratePoint.Tile2BeforeWin] = "Tile2-提前胜利";
exports.VibratePointNames[EVibratePoint.Tile2Flip] = "Tile2-翻暗牌";
exports.VibratePointNames[EVibratePoint.Tile2Revive] = "Tile2-复活震动";
exports.VibratePointNames[EVibratePoint.Tile2HitTips] = "Tile2-提示震动";
exports.VibratePointNames[EVibratePoint.Tile2Revert] = "Tile2-撤回震动";
exports.VibratePointNames[EVibratePoint.Tile2ShuffleVibrate] = "Tile2-洗牌震动";
exports.VibratePointNames[EVibratePoint.Tile2MagnetMerge] = "Tile2-磁铁消除震动";
exports.VibratePointNames[EVibratePoint.Tile2Fail] = "Tile2-失败震动";
exports.VibratePointNames[EVibratePoint.Tile2ShuffleDone] = "Tile2-洗牌完成震动";
exports.VibratePointNames[EVibratePoint.Tile2WinViewBomb] = "Tile2-结算页面爆炸动画震动";
exports.VibratePointNames[EVibratePoint.Tile2SlotAdvance] = "Tile2-框升级震动";
exports.VibratePointNames[EVibratePoint.Tile2ComboDelayVibrate] = "Tile2-combo+5延迟震动（碎块下落）";
exports.VibratePointNames[EVibratePoint.Tile2ScreenEdge] = "Tile2-combo屏幕边缘动画";
exports.VibratePointNames[EVibratePoint.Tile2FullCombo] = "Tile2-全连击震动";
exports.VibratePointNames = exports.VibratePointNames;
var VibrateManager = /** @class */ (function () {
    function VibrateManager() {
    }
    VibrateManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    VibrateManager.getVibrateTrait = function () {
        var e = mj.getClassByName("VibrateAndroidNewTrait");
        return e && e.getInstance() && true === e.getInstance().eventEnabled ? e : (e = mj.getClassByName("VibrateIOSTrait")) && e.getInstance() && true === e.getInstance().eventEnabled ? e : null;
    };
    VibrateManager.executeVibrate = function (t) {
        var o = VibrateManager.getVibrateTrait();
        if (o) {
            o.getInstance().executeTriggerVibrate(t);
            return true;
        }
        return false;
    };
    VibrateManager.getGMVibrateStrength = function (t) {
        var o;
        try {
            var n = cc.sys.localStorage.getItem(VibrateManager.GM_VIBRATE_DEBUG_KEY);
            if (!n)
                return null;
            var i = JSON.parse(n);
            if (!i || !i.enabled)
                return null;
            var r = null === (o = i.pointStrengths) || void 0 === o ? void 0 : o[t];
            return null != r ? r : null;
        }
        catch (e) {
            return null;
        }
    };
    VibrateManager.getGMVibrateCustomParams = function (t) {
        var o, n, i;
        try {
            var r = cc.sys.localStorage.getItem(VibrateManager.GM_VIBRATE_DEBUG_KEY);
            if (!r)
                return null;
            var a = JSON.parse(r);
            if (!a || !a.enabled)
                return null;
            var l = null === (o = a.pointCustomParams) || void 0 === o ? void 0 : o[t];
            return l && (null === (n = l.timings) || void 0 === n ? void 0 : n.length) > 0 && (null === (i = l.amplitudes) || void 0 === i ? void 0 : i.length) > 0 ? {
                timings: l.timings,
                amplitudes: l.amplitudes
            } : null;
        }
        catch (e) {
            return null;
        }
    };
    VibrateManager.executeDelayedVibrateSequence = function (t, o, n) {
        if (o && 0 !== o.length) {
            VibrateManager.cleanupDelayVibrateTimers();
            for (var r = function r(r) {
                var a = o[r], l = setTimeout(function () {
                    VibrateManager.executeVibrate(t, n);
                    var o = VibrateManager._delayVibrateTimers.indexOf(l);
                    -1 !== o && VibrateManager._delayVibrateTimers.splice(o, 1);
                }, a);
                VibrateManager._delayVibrateTimers.push(l);
            }, a = 0; a < o.length; a++)
                r(a);
        }
    };
    VibrateManager.cleanupDelayVibrateTimers = function () {
        if (VibrateManager._delayVibrateTimers.length > 0) {
            VibrateManager._delayVibrateTimers.forEach(function (e) {
                clearTimeout(e);
            });
            VibrateManager._delayVibrateTimers = [];
        }
    };
    VibrateManager.prototype.triggerVibrateByType = function (e) {
        if (UserModel_1.default.getInstance().isVibrationEnabled()) {
            mj.sdk.shake(e);
            DGameBtnClick_1.DotGameBtnClick.dotFirstVibration();
        }
    };
    VibrateManager.prototype.triggerVibrateNormal = function (e) {
        if (UserModel_1.default.getInstance().isVibrationEnabled() && e && e.timings.length > 0 && e.amplitudes.length > 0) {
            mj.sdk.shakeRepeat(JSON.stringify(e));
            DGameBtnClick_1.DotGameBtnClick.dotFirstVibration();
        }
    };
    VibrateManager.prototype.triggerVibrateAdvence = function (e) {
        if (UserModel_1.default.getInstance().isVibrationEnabled() && ("0" == e || "1" == e || "2" == e || "5" == e)) {
            mj.sdk.shakeAdvence(e);
            DGameBtnClick_1.DotGameBtnClick.dotFirstVibration();
        }
    };
    VibrateManager.prototype.isSupportShakeAdvence = function () {
        return "1" == mj.sdk.isSupportShakeAdvence();
    };
    VibrateManager.GM_VIBRATE_DEBUG_KEY = "__gmVibrateDebug__";
    VibrateManager._delayVibrateTimers = [];
    return VibrateManager;
}());
exports.default = VibrateManager;

cc._RF.pop();