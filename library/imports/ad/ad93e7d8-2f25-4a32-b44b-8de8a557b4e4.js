"use strict";
cc._RF.push(module, 'ad93efYLyVKMrRLjeilV7Tk', 'AdTracker');
// Scripts/gamePlay/base/ad/AdTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../../framework/utils/SingletonFactory");
var DGameAdShow_1 = require("../../dot/DGameAdShow");
var DGameBannerRevenue_1 = require("../../dot/DGameBannerRevenue");
var DGameAdRevenue_1 = require("../../dot/DGameAdRevenue");
var DGameAdShowStage_1 = require("../../dot/DGameAdShowStage");
var DAdVisit_1 = require("../../dot/DAdVisit");
var AdModel_1 = require("./AdModel");
var AdManager_1 = require("../../../base/ad/AdManager");
var AdTracker = /** @class */ (function () {
    function AdTracker() {
    }
    AdTracker.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    AdTracker.prototype.trackInterRequest = function (e) {
        AdModel_1.default.getInstance().updateRequestAdInter();
        DGameAdRevenue_1.DGameAdRevenue.dot(e);
    };
    AdTracker.prototype.trackRewardRequest = function (e) {
        AdModel_1.default.getInstance().updateRequestAdReward();
        DGameAdRevenue_1.DGameAdRevenue.dot(e);
    };
    AdTracker.prototype.trackInterClose = function (e, t) {
        if ("" !== e && null != e) {
            var o = Number(e);
            isNaN(o) || AdModel_1.default.getInstance().updateInterAdIncome(o / 1000);
        }
        AdModel_1.default.getInstance().updateAdInterSuccess(t);
    };
    AdTracker.prototype.trackRewardClose = function (e, t) {
        if ("" !== e && null != e) {
            var o = Number(e);
            isNaN(o) || AdModel_1.default.getInstance().updateRewardAdIncome(o / 1000);
        }
        AdModel_1.default.getInstance().updateAdRewardSuccess(t);
    };
    AdTracker.prototype.trackRewardShow = function (e, t, o, n, r) {
        DGameAdShow_1.DGameAdShow.dot({
            adType: AdManager_1.AdType.RewardVideo,
            callBackType: DGameAdShow_1.AdCallBackType.Close,
            sTime: t,
            adSceneId: o,
            extraData: n,
            dotTime: r,
            adPosition: e
        });
    };
    AdTracker.prototype.trackInterShow = function (e, t, o, n, r) {
        DGameAdShow_1.DGameAdShow.dot({
            adType: AdManager_1.AdType.Interstitial,
            sTime: t,
            callBackType: DGameAdShow_1.AdCallBackType.Close,
            adSceneId: o,
            extraData: n,
            isReward: true,
            adPosition: e,
            dotTime: r
        });
    };
    AdTracker.prototype.trackBannerRevenue = function () {
        DGameBannerRevenue_1.DGameBannerRevenue.dot();
    };
    AdTracker.prototype.trackAdStageStart = function (e) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(e, "start");
    };
    AdTracker.prototype.trackAdStageEnd = function (e, t, o, n) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(e, "end", t ? "true" : "false", o, n);
    };
    AdTracker.prototype.trackInterVisit = function (e) {
        DAdVisit_1.DotAdVisit.dotAdVisitInterAD(e);
    };
    return AdTracker;
}());
exports.default = AdTracker;

cc._RF.pop();