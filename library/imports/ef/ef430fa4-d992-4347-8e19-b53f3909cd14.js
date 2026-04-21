"use strict";
cc._RF.push(module, 'ef430+k2ZJDR44ZtT85Cc0U', 'AdReadyRankTrait');
// subpackages/l_adBtnVisible/Scripts/AdReadyRankTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var AdReadyRankTrait = /** @class */ (function (_super) {
    __extends(AdReadyRankTrait, _super);
    function AdReadyRankTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdReadyRankTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdReadyRankTrait.prototype.getExperimentId = function () {
        return this.traitData.experimentId || 1;
    };
    AdReadyRankTrait.prototype.isNeedReadShowAd = function () {
        return this.traitData.isNeedReadyShowAd || false;
    };
    AdReadyRankTrait.prototype.isCoolStartClaimed = function () {
        return this.traitData.isCoolStartClaimed || false;
    };
    AdReadyRankTrait.prototype.isReadyAd = function () {
        return AdManager_1.default.getInstance().checkVideoAdIsReady();
    };
    AdReadyRankTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyRankTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyRankTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyRankTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchReward(false);
        e();
    };
    AdReadyRankTrait.prototype.onRankBoxVw_isShowAdBtn = function (t, e) {
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
    AdReadyRankTrait.prototype.onRankBoxVw_adBtnClick = function (t, e) {
        var o, r, i;
        if (this.isCoolStartClaimed()) {
            var a = null === (o = t.ins) || void 0 === o ? void 0 : o.getReward();
            if (a) {
                for (var n = {
                    adScale: (null === (r = t.ins) || void 0 === r ? void 0 : r.getAdScale()) || 1,
                    items: [],
                    rank: (null === (i = t.ins) || void 0 === i ? void 0 : i.getMyRank()) || 1
                }, s = 0; s < a.Items.length; s++) {
                    var d = a.Items[s], c = a.Counts[s];
                    c <= 0 || n.items.push({
                        item: d,
                        count: c
                    });
                }
                this.saveRewardConfig(n);
            }
        }
        e();
    };
    AdReadyRankTrait.prototype.onRankBoxVw_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyRankTrait.prototype.onRankBoxVw_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyRankTrait.prototype.saveRewardConfig = function (t) {
        this.localData.rewardConfig = t;
    };
    AdReadyRankTrait.prototype.clearRewardConfig = function () {
        this.localData.rewardConfig && (this.localData.rewardConfig = null);
    };
    AdReadyRankTrait.prototype.dispatchReward = function (t) {
        if (this.isCoolStartClaimed()) {
            var e = this.localData.rewardConfig;
            if (e && e.items && 0 !== e.items.length) {
                for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
                    var i = e.items[r], a = i.count * o;
                    if (!(a <= 0)) {
                        var d = GameTypeEnums_1.EGetItemReasonId.LeaderBoardAd, c = "冷启动_排行榜宝箱奖励_看广告翻倍_到达第" + e.rank + "名";
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
    AdReadyRankTrait.traitKey = "AdReadyRank";
    AdReadyRankTrait = __decorate([
        mj.trait,
        mj.class("AdReadyRankTrait")
    ], AdReadyRankTrait);
    return AdReadyRankTrait;
}(Trait_1.default));
exports.default = AdReadyRankTrait;

cc._RF.pop();