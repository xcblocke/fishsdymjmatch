"use strict";
cc._RF.push(module, '89965WkSuZLU6Ug4xFu2twi', 'AdReadyTravelTrait');
// subpackages/l_adBtnVisible/Scripts/AdReadyTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var AdReadyTravelTrait = /** @class */ (function (_super) {
    __extends(AdReadyTravelTrait, _super);
    function AdReadyTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdReadyTravelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdReadyTravelTrait.prototype.getExperimentId = function () {
        return this.traitData.experimentId || 1;
    };
    AdReadyTravelTrait.prototype.isNeedReadShowAd = function () {
        return this.traitData.isNeedReadyShowAd || false;
    };
    AdReadyTravelTrait.prototype.isCoolStartClaimed = function () {
        return this.traitData.isCoolStartClaimed || false;
    };
    AdReadyTravelTrait.prototype.isReadyAd = function () {
        return AdManager_1.default.getInstance().checkVideoAdIsReady();
    };
    AdReadyTravelTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyTravelTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyTravelTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyTravelTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchReward(false);
        e();
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_isShowAdBtn = function (t, e) {
        if (this.isNeedReadShowAd()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this.isReadyAd()
            });
        }
        else {
            e();
        }
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_adBtnClick = function (t, e) {
        var o, r;
        if (this.isCoolStartClaimed()) {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
            if (i) {
                var a = {
                    adScale: i.adScale || 1,
                    items: i.items || [],
                    rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
                };
                this.saveRewardConfig(a);
            }
        }
        e();
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyTravelTrait.prototype.saveRewardConfig = function (t) {
        this.localData.rewardConfig = t;
    };
    AdReadyTravelTrait.prototype.clearRewardConfig = function () {
        this.localData.rewardConfig && (this.localData.rewardConfig = null);
    };
    AdReadyTravelTrait.prototype.dispatchReward = function (t) {
        if (this.isCoolStartClaimed()) {
            var e = this.localData.rewardConfig;
            if (e && e.items && 0 !== e.items.length) {
                for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
                    var i = e.items[r], a = i.count * o;
                    if (!(a <= 0)) {
                        var d = GameTypeEnums_1.EGetItemReasonId.JourneyAd, c = "冷启动_旅行活动奖励_看广告翻倍_到达第" + e.rewardLevel + "关";
                        GameUtils_1.default.deliverProp({
                            isInGame: t,
                            reasonId: d,
                            reasonInfo: c,
                            itemType: i.item,
                            itemCount: a
                        });
                    }
                }
                this.clearRewardConfig();
            }
        }
    };
    AdReadyTravelTrait.traitKey = "AdReadyTravel";
    AdReadyTravelTrait = __decorate([
        mj.trait,
        mj.class("AdReadyTravelTrait")
    ], AdReadyTravelTrait);
    return AdReadyTravelTrait;
}(Trait_1.default));
exports.default = AdReadyTravelTrait;

cc._RF.pop();