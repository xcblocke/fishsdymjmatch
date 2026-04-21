
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/vibrate/VibrateManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUE2RTtBQUM3RSw0REFBNkQ7QUFDN0Qsa0RBQTZDO0FBQzdDLElBQVksYUEwQlg7QUExQkQsV0FBWSxhQUFhO0lBQ3ZCLG1FQUFpQixDQUFBO0lBQ2pCLGlFQUFnQixDQUFBO0lBQ2hCLCtEQUFlLENBQUE7SUFDZixpRUFBZ0IsQ0FBQTtJQUNoQixpRUFBZ0IsQ0FBQTtJQUNoQixtRUFBaUIsQ0FBQTtJQUNqQiw2REFBYyxDQUFBO0lBQ2Qsd0VBQW9CLENBQUE7SUFDcEIsc0VBQW1CLENBQUE7SUFDbkIsb0VBQWtCLENBQUE7SUFDbEIsMERBQWEsQ0FBQTtJQUNiLHNFQUFtQixDQUFBO0lBQ25CLDREQUFjLENBQUE7SUFDZCxnRUFBZ0IsQ0FBQTtJQUNoQixrRUFBaUIsQ0FBQTtJQUNqQixnRUFBZ0IsQ0FBQTtJQUNoQixnRkFBd0IsQ0FBQTtJQUN4QiwwRUFBcUIsQ0FBQTtJQUNyQiw0REFBYyxDQUFBO0lBQ2QsMEVBQXFCLENBQUE7SUFDckIsMEVBQXFCLENBQUE7SUFDckIsMEVBQXFCLENBQUE7SUFDckIsc0ZBQTJCLENBQUE7SUFDM0Isd0VBQW9CLENBQUE7SUFDcEIsc0VBQW1CLENBQUE7QUFDckIsQ0FBQyxFQTFCVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQTBCeEI7QUFDRCxJQUFZLGdCQWNYO0FBZEQsV0FBWSxnQkFBZ0I7SUFDMUIsZ0VBQWEsQ0FBQTtJQUNiLDREQUFZLENBQUE7SUFDWiw4REFBYSxDQUFBO0lBQ2IsOERBQWEsQ0FBQTtJQUNiLHdFQUFrQixDQUFBO0lBQ2xCLGtFQUFlLENBQUE7SUFDZiwwREFBVyxDQUFBO0lBQ1gsMEVBQW1CLENBQUE7SUFDbkIsc0VBQWlCLENBQUE7SUFDakIsZ0VBQWMsQ0FBQTtJQUNkLG9FQUFnQixDQUFB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QXJCO1FBQ0UsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUF4Rk0sbUNBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFDNUMsa0NBQW1CLEdBQUcsRUFBRSxDQUFDO0lBd0ZsQyxxQkFBQztDQTFGRCxBQTBGQyxJQUFBO2tCQTFGb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvdXRpbHMvU2luZ2xldG9uRmFjdG9yeSc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2sgfSBmcm9tICcuLi8uLi8uLi9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uL3VzZXIvVXNlck1vZGVsJztcbmV4cG9ydCBlbnVtIEVWaWJyYXRlUG9pbnQge1xuICBPbGRUaWxlU2VsZWN0ID0gMSxcbiAgT2xkVGlsZUNsZWFyID0gMixcbiAgT2xkVGlsZUxvY2sgPSAzLFxuICBPbGREcmFnU3RhcnQgPSA0LFxuICBPbGRDaGVzdE9wZW4gPSA1LFxuICBPbGRTaHVmZmxlQnRuID0gNixcbiAgT2xkSGludEJ0biA9IDcsXG4gIFRpbGUyVGlsZVNlbGVjdCA9IDEwLFxuICBUaWxlMlRpbGVDbGVhciA9IDExLFxuICBUaWxlMlRpbGVMb2NrID0gMTIsXG4gIFRpbGUyV2luID0gMTMsXG4gIFRpbGUyQmVmb3JlV2luID0gMTQsXG4gIFRpbGUyRmxpcCA9IDE1LFxuICBUaWxlMlJldml2ZSA9IDE2LFxuICBUaWxlMkhpdFRpcHMgPSAxNyxcbiAgVGlsZTJSZXZlcnQgPSAxOCxcbiAgVGlsZTJTaHVmZmxlVmlicmF0ZSA9IDE5LFxuICBUaWxlMk1hZ25ldE1lcmdlID0gMjAsXG4gIFRpbGUyRmFpbCA9IDIxLFxuICBUaWxlMlNodWZmbGVEb25lID0gMjIsXG4gIFRpbGUyV2luVmlld0JvbWIgPSAyMyxcbiAgVGlsZTJTbG90QWR2YW5jZSA9IDI0LFxuICBUaWxlMkNvbWJvRGVsYXlWaWJyYXRlID0gMjUsXG4gIFRpbGUyU2NyZWVuRWRnZSA9IDI2LFxuICBUaWxlMkZ1bGxDb21ibyA9IDI3LFxufVxuZXhwb3J0IGVudW0gRVZpYnJhdGVTdHJlbmd0aCB7XG4gIERpc2FibGVkID0gLTEsXG4gIExpZ2h0ID0gMTAwMCxcbiAgTWVkaXVtID0gMTAwMSxcbiAgU3Ryb25nID0gMTAwMixcbiAgU3Ryb25nU2hvcnQgPSAxMDAzLFxuICBNdWx0aXBsZSA9IDEwMDQsXG4gIExvbmcgPSAxMDA1LFxuICBSZXdhcmRTdHJvbmcgPSAxMDA2LFxuICBEb3VibGVXZWFrID0gMTAwNyxcbiAgU2h1ZmZsZSA9IDEwMDgsXG4gIExpZ2h0bmluZyA9IDEwMDksXG4gIExvY2tDdXAgPSAxMDEwLFxuICBHYW1lU3RhcnQgPSAxMDExLFxufVxuKFZpYnJhdGVQb2ludE5hbWVzID0ge30pW0VWaWJyYXRlUG9pbnQuT2xkVGlsZVNlbGVjdF0gPSBcIuaXp+eOqeazlS3ngrnlh7vmma7pgJrniYxcIjtcblZpYnJhdGVQb2ludE5hbWVzW0VWaWJyYXRlUG9pbnQuT2xkVGlsZUNsZWFyXSA9IFwi5pen546p5rOVLea2iOmZpOeisOaSnlwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5PbGRUaWxlTG9ja10gPSBcIuaXp+eOqeazlS3ngrnlh7vplIHlrprniYxcIjtcblZpYnJhdGVQb2ludE5hbWVzW0VWaWJyYXRlUG9pbnQuT2xkRHJhZ1N0YXJ0XSA9IFwi5pen546p5rOVLeaLluWKqOW8gOWni1wiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5PbGRDaGVzdE9wZW5dID0gXCLml6fnjqnms5Ut5a6d566x5byA5ZCvXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50Lk9sZFNodWZmbGVCdG5dID0gXCLml6fnjqnms5Ut5rSX54mM5oyJ6ZKuXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50Lk9sZEhpbnRCdG5dID0gXCLml6fnjqnms5Ut5o+Q56S65oyJ6ZKuXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50LlRpbGUyVGlsZVNlbGVjdF0gPSBcIlRpbGUyLeeCueWHu+aZrumAmueJjFwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMlRpbGVDbGVhcl0gPSBcIlRpbGUyLea2iOmZpOeisOaSnlwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMlRpbGVMb2NrXSA9IFwiVGlsZTIt54K55Ye76ZSB5a6a54mMXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50LlRpbGUyV2luXSA9IFwiVGlsZTIt6IOc5Yip57uT566XXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50LlRpbGUyQmVmb3JlV2luXSA9IFwiVGlsZTIt5o+Q5YmN6IOc5YipXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50LlRpbGUyRmxpcF0gPSBcIlRpbGUyLee/u+aal+eJjFwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMlJldml2ZV0gPSBcIlRpbGUyLeWkjea0u+mch+WKqFwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMkhpdFRpcHNdID0gXCJUaWxlMi3mj5DnpLrpnIfliqhcIjtcblZpYnJhdGVQb2ludE5hbWVzW0VWaWJyYXRlUG9pbnQuVGlsZTJSZXZlcnRdID0gXCJUaWxlMi3mkqTlm57pnIfliqhcIjtcblZpYnJhdGVQb2ludE5hbWVzW0VWaWJyYXRlUG9pbnQuVGlsZTJTaHVmZmxlVmlicmF0ZV0gPSBcIlRpbGUyLea0l+eJjOmch+WKqFwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMk1hZ25ldE1lcmdlXSA9IFwiVGlsZTIt56OB6ZOB5raI6Zmk6ZyH5YqoXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50LlRpbGUyRmFpbF0gPSBcIlRpbGUyLeWksei0pemch+WKqFwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMlNodWZmbGVEb25lXSA9IFwiVGlsZTIt5rSX54mM5a6M5oiQ6ZyH5YqoXCI7XG5WaWJyYXRlUG9pbnROYW1lc1tFVmlicmF0ZVBvaW50LlRpbGUyV2luVmlld0JvbWJdID0gXCJUaWxlMi3nu5PnrpfpobXpnaLniIbngrjliqjnlLvpnIfliqhcIjtcblZpYnJhdGVQb2ludE5hbWVzW0VWaWJyYXRlUG9pbnQuVGlsZTJTbG90QWR2YW5jZV0gPSBcIlRpbGUyLeahhuWNh+e6p+mch+WKqFwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMkNvbWJvRGVsYXlWaWJyYXRlXSA9IFwiVGlsZTItY29tYm8rNeW7tui/n+mch+WKqO+8iOeijuWdl+S4i+iQve+8iVwiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMlNjcmVlbkVkZ2VdID0gXCJUaWxlMi1jb21ib+Wxj+W5lei+uee8mOWKqOeUu1wiO1xuVmlicmF0ZVBvaW50TmFtZXNbRVZpYnJhdGVQb2ludC5UaWxlMkZ1bGxDb21ib10gPSBcIlRpbGUyLeWFqOi/nuWHu+mch+WKqFwiO1xuZXhwb3J0IHZhciBWaWJyYXRlUG9pbnROYW1lcyA9IFZpYnJhdGVQb2ludE5hbWVzO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlicmF0ZU1hbmFnZXIge1xuICBzdGF0aWMgR01fVklCUkFURV9ERUJVR19LRVkgPSBcIl9fZ21WaWJyYXRlRGVidWdfX1wiO1xuICBzdGF0aWMgX2RlbGF5VmlicmF0ZVRpbWVycyA9IFtdO1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIFNpbmdsZXRvbkZhY3RvcnkuZ2V0SW5zdGFuY2UodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldFZpYnJhdGVUcmFpdCgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmlicmF0ZUFuZHJvaWROZXdUcmFpdFwiKTtcbiAgICByZXR1cm4gZSAmJiBlLmdldEluc3RhbmNlKCkgJiYgdHJ1ZSA9PT0gZS5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCA/IGUgOiAoZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiVmlicmF0ZUlPU1RyYWl0XCIpKSAmJiBlLmdldEluc3RhbmNlKCkgJiYgdHJ1ZSA9PT0gZS5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCA/IGUgOiBudWxsO1xuICB9XG4gIHN0YXRpYyBleGVjdXRlVmlicmF0ZSh0KSB7XG4gICAgdmFyIG8gPSBWaWJyYXRlTWFuYWdlci5nZXRWaWJyYXRlVHJhaXQoKTtcbiAgICBpZiAobykge1xuICAgICAgby5nZXRJbnN0YW5jZSgpLmV4ZWN1dGVUcmlnZ2VyVmlicmF0ZSh0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhdGljIGdldEdNVmlicmF0ZVN0cmVuZ3RoKHQpIHtcbiAgICB2YXIgbztcbiAgICB0cnkge1xuICAgICAgdmFyIG4gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oVmlicmF0ZU1hbmFnZXIuR01fVklCUkFURV9ERUJVR19LRVkpO1xuICAgICAgaWYgKCFuKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBpID0gSlNPTi5wYXJzZShuKTtcbiAgICAgIGlmICghaSB8fCAhaS5lbmFibGVkKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciByID0gbnVsbCA9PT0gKG8gPSBpLnBvaW50U3RyZW5ndGhzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvW3RdO1xuICAgICAgcmV0dXJuIG51bGwgIT0gciA/IHIgOiBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZ2V0R01WaWJyYXRlQ3VzdG9tUGFyYW1zKHQpIHtcbiAgICB2YXIgbywgbiwgaTtcbiAgICB0cnkge1xuICAgICAgdmFyIHIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oVmlicmF0ZU1hbmFnZXIuR01fVklCUkFURV9ERUJVR19LRVkpO1xuICAgICAgaWYgKCFyKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBhID0gSlNPTi5wYXJzZShyKTtcbiAgICAgIGlmICghYSB8fCAhYS5lbmFibGVkKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBsID0gbnVsbCA9PT0gKG8gPSBhLnBvaW50Q3VzdG9tUGFyYW1zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvW3RdO1xuICAgICAgcmV0dXJuIGwgJiYgKG51bGwgPT09IChuID0gbC50aW1pbmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmxlbmd0aCkgPiAwICYmIChudWxsID09PSAoaSA9IGwuYW1wbGl0dWRlcykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5sZW5ndGgpID4gMCA/IHtcbiAgICAgICAgdGltaW5nczogbC50aW1pbmdzLFxuICAgICAgICBhbXBsaXR1ZGVzOiBsLmFtcGxpdHVkZXNcbiAgICAgIH0gOiBudWxsO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZXhlY3V0ZURlbGF5ZWRWaWJyYXRlU2VxdWVuY2UodCwgbywgbikge1xuICAgIGlmIChvICYmIDAgIT09IG8ubGVuZ3RoKSB7XG4gICAgICBWaWJyYXRlTWFuYWdlci5jbGVhbnVwRGVsYXlWaWJyYXRlVGltZXJzKCk7XG4gICAgICBmb3IgKHZhciByID0gZnVuY3Rpb24gcihyKSB7XG4gICAgICAgICAgdmFyIGEgPSBvW3JdLFxuICAgICAgICAgICAgbCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBWaWJyYXRlTWFuYWdlci5leGVjdXRlVmlicmF0ZSh0LCBuKTtcbiAgICAgICAgICAgICAgdmFyIG8gPSBWaWJyYXRlTWFuYWdlci5fZGVsYXlWaWJyYXRlVGltZXJzLmluZGV4T2YobCk7XG4gICAgICAgICAgICAgIC0xICE9PSBvICYmIFZpYnJhdGVNYW5hZ2VyLl9kZWxheVZpYnJhdGVUaW1lcnMuc3BsaWNlKG8sIDEpO1xuICAgICAgICAgICAgfSwgYSk7XG4gICAgICAgICAgVmlicmF0ZU1hbmFnZXIuX2RlbGF5VmlicmF0ZVRpbWVycy5wdXNoKGwpO1xuICAgICAgICB9LCBhID0gMDsgYSA8IG8ubGVuZ3RoOyBhKyspIHIoYSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBjbGVhbnVwRGVsYXlWaWJyYXRlVGltZXJzKCkge1xuICAgIGlmIChWaWJyYXRlTWFuYWdlci5fZGVsYXlWaWJyYXRlVGltZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIFZpYnJhdGVNYW5hZ2VyLl9kZWxheVZpYnJhdGVUaW1lcnMuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZSk7XG4gICAgICB9KTtcbiAgICAgIFZpYnJhdGVNYW5hZ2VyLl9kZWxheVZpYnJhdGVUaW1lcnMgPSBbXTtcbiAgICB9XG4gIH1cbiAgdHJpZ2dlclZpYnJhdGVCeVR5cGUoZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1ZpYnJhdGlvbkVuYWJsZWQoKSkge1xuICAgICAgbWouc2RrLnNoYWtlKGUpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEZpcnN0VmlicmF0aW9uKCk7XG4gICAgfVxuICB9XG4gIHRyaWdnZXJWaWJyYXRlTm9ybWFsKGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNWaWJyYXRpb25FbmFibGVkKCkgJiYgZSAmJiBlLnRpbWluZ3MubGVuZ3RoID4gMCAmJiBlLmFtcGxpdHVkZXMubGVuZ3RoID4gMCkge1xuICAgICAgbWouc2RrLnNoYWtlUmVwZWF0KEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RGaXJzdFZpYnJhdGlvbigpO1xuICAgIH1cbiAgfVxuICB0cmlnZ2VyVmlicmF0ZUFkdmVuY2UoZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1ZpYnJhdGlvbkVuYWJsZWQoKSAmJiAoXCIwXCIgPT0gZSB8fCBcIjFcIiA9PSBlIHx8IFwiMlwiID09IGUgfHwgXCI1XCIgPT0gZSkpIHtcbiAgICAgIG1qLnNkay5zaGFrZUFkdmVuY2UoZSk7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90Rmlyc3RWaWJyYXRpb24oKTtcbiAgICB9XG4gIH1cbiAgaXNTdXBwb3J0U2hha2VBZHZlbmNlKCkge1xuICAgIHJldHVybiBcIjFcIiA9PSBtai5zZGsuaXNTdXBwb3J0U2hha2VBZHZlbmNlKCk7XG4gIH1cbn0iXX0=