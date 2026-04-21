"use strict";
cc._RF.push(module, 'fdb71DF+IxBMLnB8n3L6ygj', 'AdReadyNormalTrait');
// subpackages/l_adBtnVisible/Scripts/AdReadyNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var AdReadyNormalTrait = /** @class */ (function (_super) {
    __extends(AdReadyNormalTrait, _super);
    function AdReadyNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdReadyNormalTrait.prototype.getExperimentId = function () {
        return this.traitData.experimentId || 1;
    };
    AdReadyNormalTrait.prototype.isNeedReadShowAd = function () {
        return this.traitData.isNeedReadyShowAd || false;
    };
    AdReadyNormalTrait.prototype.isCoolStartClaimed = function () {
        return this.traitData.isCoolStartClaimed || false;
    };
    AdReadyNormalTrait.prototype.isReadyAd = function () {
        return AdManager_1.default.getInstance().checkVideoAdIsReady();
    };
    AdReadyNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdReadyNormalTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyNormalTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyNormalTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyNormalTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchReward(false);
        e();
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_isShowAdBtn = function (t, e) {
        if (this.isNeedReadShowAd()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.isReadyAd()
            });
        }
        else {
            e();
        }
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_isShowAdBtn = function (t, e) {
        if (this.isNeedReadShowAd()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.isReadyAd()
            });
        }
        else {
            e();
        }
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_adBtnClick = function (t, e) {
        var o, r;
        if (this.isCoolStartClaimed()) {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
            if (i) {
                var a = {
                    adScale: i.adScale,
                    items: i.items,
                    rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
                };
                this.saveRewardConfig(a);
            }
        }
        e();
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_adBtnClick = function (t, e) {
        var o, r;
        if (this.isCoolStartClaimed()) {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
            if (i) {
                var a = {
                    adScale: i.adScale,
                    items: i.rewards,
                    rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
                };
                this.saveRewardConfig(a);
            }
        }
        e();
    };
    AdReadyNormalTrait.prototype.saveRewardConfig = function (t) {
        this.localData.rewardConfig = t;
    };
    AdReadyNormalTrait.prototype.clearRewardConfig = function () {
        this.localData.rewardConfig && (this.localData.rewardConfig = null);
    };
    AdReadyNormalTrait.prototype.dispatchReward = function (t) {
        if (this.isCoolStartClaimed()) {
            var e = this.localData.rewardConfig;
            if (e && e.items && 0 !== e.items.length) {
                for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
                    var i = e.items[r], a = i.count * o;
                    if (!(a <= 0)) {
                        var d = GameTypeEnums_1.EGetItemReasonId.LevelBoxAd, c = "冷启动_主关卡宝箱奖励_看广告翻倍_到达第" + e.rewardLevel + "关";
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
    AdReadyNormalTrait.traitKey = "AdReadyNormal";
    AdReadyNormalTrait = __decorate([
        mj.trait,
        mj.class("AdReadyNormalTrait")
    ], AdReadyNormalTrait);
    return AdReadyNormalTrait;
}(Trait_1.default));
exports.default = AdReadyNormalTrait;

cc._RF.pop();