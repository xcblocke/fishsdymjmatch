"use strict";
cc._RF.push(module, '1f423l1bA1N1bAJpN2DYMHO', 'DailySignSimpleRewardView');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var EventTrackingManager_1 = require("../../../Scripts/base/event/EventTrackingManager");
var EventData_1 = require("../../../Scripts/base/event/EventData");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var DailySignSimpleRewardView = /** @class */ (function (_super) {
    __extends(DailySignSimpleRewardView, _super);
    function DailySignSimpleRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refreshIcon = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.hintValue = null;
        _this.claimBtn = null;
        _this.adClaimBtn = null;
        _this._bgMask = null;
        _this._dayIndex = 0;
        _this._baseReward = null;
        _this._adScale = 2;
        _this._hasWatchedAd = false;
        _this.showRewardsNodes = [];
        _this._rewardCount = 0;
        _this.onCloseCallback = null;
        _this.animSkeleton = null;
        return _this;
    }
    DailySignSimpleRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
    };
    DailySignSimpleRewardView.prototype.initComponents = function () {
        var t = this;
        if (cc.isValid(this.animSkeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.animSkeleton.node);
            this.animProxy.reset("");
            this.animProxy.markReady("");
            this.animSkeleton.setEventListener(function (e, i) {
                "event_rewards" === i.data.name && t.onOpenAnimFinished();
            });
        }
    };
    DailySignSimpleRewardView.prototype.showReward = function (t, e) {
        this._dayIndex = t;
        this._baseReward = e;
        this._hasWatchedAd = false;
        this.resetNodes();
        this.initRewardConfig(e);
        this.showBgMask(190);
        this.playInAnim();
        this.playClaimBtnPopAnimation();
    };
    DailySignSimpleRewardView.prototype.initRewardConfig = function (t) {
        var e, i = this;
        this.hideAllRewardNodes();
        this.showRewardsNodes = [];
        var o = function o(t, e, o) {
            if (t && e) {
                i.animProxy.attachNode("hook_icon_" + o, function () {
                    return t;
                });
                i.animProxy.attachNode("hook_num_" + o, function () {
                    return e;
                });
            }
        }, n = 1;
        if (t.hintCount > 0) {
            this.hintValue.getComponent(cc.Label).string = String(t.hintCount);
            this.showRewardsNodes.push(this.hintIcon, this.hintValue);
            o(this.hintIcon, this.hintValue, n);
            n++;
        }
        if (t.shuffleCount > 0) {
            this.refreshValue.getComponent(cc.Label).string = String(t.shuffleCount);
            this.showRewardsNodes.push(this.refreshIcon, this.refreshValue);
            o(this.refreshIcon, this.refreshValue, n);
            n++;
        }
        this._rewardCount = (t.hintCount > 0 ? 1 : 0) + (t.shuffleCount > 0 ? 1 : 0);
        if (cc.isValid(this.adClaimBtn)) {
            var a = null === (e = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node;
            a && I18NStrings_1.default.setText(a, "Claim x" + this._adScale, "Common_Reward_Claim_Ads", [this._adScale]);
        }
    };
    DailySignSimpleRewardView.prototype.hideAllRewardNodes = function () {
        this.refreshIcon.active = false;
        this.refreshValue.active = false;
        this.hintIcon.active = false;
        this.hintValue.active = false;
    };
    DailySignSimpleRewardView.prototype.playInAnim = function () {
        if (cc.isValid(this.animSkeleton)) {
            var t = "in_" + this._rewardCount;
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animProxy.setAnimation(t, 1, function () { });
        }
    };
    DailySignSimpleRewardView.prototype.onOpenAnimFinished = function () {
        var t, e;
        try {
            for (var i = __values(this.showRewardsNodes), o = i.next(); !o.done; o = i.next()) {
                var n = o.value;
                cc.isValid(n) && (n.active = true);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (e = i.return) && e.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    DailySignSimpleRewardView.prototype.playIdleAnim = function () {
        if (cc.isValid(this.animSkeleton)) {
            var t = "idle_" + this._rewardCount;
            this.animProxy.setAnimation(t, -1);
        }
    };
    DailySignSimpleRewardView.prototype.getAdBtnScale = function () {
        return 1;
    };
    DailySignSimpleRewardView.prototype.resetNodes = function () {
        [this.refreshIcon, this.refreshValue, this.hintIcon, this.hintValue, this.claimBtn, this.adClaimBtn].forEach(function (t) {
            cc.isValid(t) && (t.active = false);
        });
        var t = this.getAdBtnScale();
        if (cc.isValid(this.claimBtn)) {
            this.claimBtn.scale = 0.6;
            this.claimBtn.opacity = 0;
        }
        if (cc.isValid(this.adClaimBtn)) {
            this.adClaimBtn.scale = 0.6 * t;
            this.adClaimBtn.opacity = 0;
        }
    };
    DailySignSimpleRewardView.prototype.showBgMask = function (t) {
        this._bgMask = cc.find("bg_mask", this.node);
        if (cc.isValid(this._bgMask)) {
            this._bgMask.opacity = 0;
            cc.tween(this._bgMask).to(0.2, {
                opacity: t
            }).start();
        }
    };
    DailySignSimpleRewardView.prototype.playClaimBtnPopAnimation = function () {
        var t = this;
        if (cc.isValid(this.claimBtn)) {
            var e = this.getAdBtnScale(), i = cc.tween().to(0.2, {
                scale: 1.05,
                opacity: 255
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: 1,
                opacity: 255
            }, {
                easing: cc.easing.quadIn
            }), o = cc.tween().to(0.2, {
                scale: 1.05 * e,
                opacity: 255
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: e,
                opacity: 255
            }, {
                easing: cc.easing.quadIn
            }), n = CommonUtils_1.isNetworkAvailable(), a = this._adScale > 1, r = 0.9299999999999999, s = cc.v3(0, -410, 0);
            if (n && a && cc.isValid(this.adClaimBtn)) {
                cc.Tween.stopAllByTarget(this.adClaimBtn);
                this.adClaimBtn.active = false;
                this.adClaimBtn.scale = 0.6 * e;
                this.adClaimBtn.opacity = 0;
                cc.tween(this.adClaimBtn).delay(0.73).call(function () {
                    cc.isValid(t.adClaimBtn) && (t.adClaimBtn.active = true);
                }).then(o.clone()).start();
            }
            else {
                this.claimBtn.setPosition(s);
                r = 0.73;
            }
            cc.Tween.stopAllByTarget(this.claimBtn);
            this.claimBtn.active = false;
            this.claimBtn.scale = 0.6;
            this.claimBtn.opacity = 0;
            cc.tween(this.claimBtn).delay(r).call(function () {
                cc.isValid(t.claimBtn) && (t.claimBtn.active = true);
            }).then(i.clone()).start();
        }
    };
    DailySignSimpleRewardView.prototype.registerButtons = function () {
        var t = this;
        cc.isValid(this.claimBtn) && this.OnButtonClick("ClaimBtn", function () {
            t.onClaimClick(false);
        });
        cc.isValid(this.adClaimBtn) && this.OnButtonClick("AdClaimBtn", function () {
            t.onAdClaimClick();
        });
    };
    DailySignSimpleRewardView.prototype.onClaimClick = function (t) {
        if (t === void 0) { t = false; }
        var e = t ? this._adScale : 1;
        t || EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.BtnClick, {
            button_name: "玩家点击奖励按钮",
            day_index: this._dayIndex + 1,
            hint_count: this._baseReward.hintCount,
            shuffle_count: this._baseReward.shuffleCount,
            is_double: false
        });
        this.grantReward(e);
        this.closePanel();
    };
    DailySignSimpleRewardView.prototype.onAdClaimClick = function () {
        var t = this;
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.BtnClick, {
            button_name: "玩家点击双倍奖励",
            day_index: this._dayIndex + 1,
            hint_count: this._baseReward.hintCount * this._adScale,
            shuffle_count: this._baseReward.shuffleCount * this._adScale,
            is_double: true
        });
        if (CommonUtils_1.isNetworkAvailable()) {
            AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.OutGameMotivation, {
                onSuccess: function () {
                    t._hasWatchedAd = true;
                    t.onClaimClick(true);
                },
                onFailed: function () {
                    t.onClaimClick(false);
                }
            });
        }
        else {
            this.onClaimClick(false);
        }
    };
    DailySignSimpleRewardView.prototype.grantReward = function (t) {
        var e = UserModel_1.default.getInstance().getCurrentGameData(), i = t > 1, o = this._dayIndex + 1, n = GameTypeEnums_1.EGetItemReasonId.DailySignSimple, a = i ? "简易版登录_激励翻倍_第" + o + "天" : "简易版登录_第" + o + "天", r = this._baseReward.hintCount * t;
        if (r > 0) {
            e.changeHitTipsNums(r);
            var s = e.userModel.localData.hitTips, l = {
                itemId: GameTypeEnums_1.EItemId.Hint,
                number: r,
                afterNum: s,
                reasonId: n,
                reasonInfo: a
            };
            DGameGetItem_1.DotGameGetItem.dotGetItem(e, l);
        }
        var c = this._baseReward.shuffleCount * t;
        if (c > 0) {
            e.changeShuffleNums(c);
            var d = e.userModel.localData.shuffle, h = {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                number: c,
                afterNum: d,
                reasonId: n,
                reasonInfo: a
            };
            DGameGetItem_1.DotGameGetItem.dotGetItem(e, h);
        }
    };
    DailySignSimpleRewardView.prototype.closePanel = function () {
        var t = this;
        cc.tween(this.node).to(0.2, {
            scale: 0.8,
            opacity: 0
        }).call(function () {
            t.onCloseCallback && t.onCloseCallback();
            cc.isValid(t.node) && t.node.destroy();
        }).start();
    };
    DailySignSimpleRewardView.prefabUrl = "prefabs/DailySignSimpleReward";
    DailySignSimpleRewardView.bundleName = "r_dailySignSimple";
    __decorate([
        mj.node("RefreshIcon")
    ], DailySignSimpleRewardView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], DailySignSimpleRewardView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], DailySignSimpleRewardView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("HintValue")
    ], DailySignSimpleRewardView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], DailySignSimpleRewardView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], DailySignSimpleRewardView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], DailySignSimpleRewardView.prototype, "animSkeleton", void 0);
    __decorate([
        mj.traitEvent("DSSimRwdVw_getAdBtnScale")
    ], DailySignSimpleRewardView.prototype, "getAdBtnScale", null);
    DailySignSimpleRewardView = __decorate([
        mj.class
    ], DailySignSimpleRewardView);
    return DailySignSimpleRewardView;
}(BaseUI_1.default));
exports.default = DailySignSimpleRewardView;

cc._RF.pop();