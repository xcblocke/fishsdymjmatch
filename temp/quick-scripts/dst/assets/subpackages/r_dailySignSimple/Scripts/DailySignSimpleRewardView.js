
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignSimple/Scripts/DailySignSimpleRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnblNpbXBsZS9TY3JpcHRzL0RhaWx5U2lnblNpbXBsZVJld2FyZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCw0RUFBa0Y7QUFDbEYseUVBQW9FO0FBQ3BFLGdFQUEyRDtBQUMzRCx5RUFBd0U7QUFDeEUsd0ZBQTZHO0FBQzdHLDJFQUFzRTtBQUN0RSxzRUFBaUU7QUFDakUseUZBQW9GO0FBQ3BGLG1FQUEwRTtBQUMxRSwyRUFBNEU7QUFFNUU7SUFBdUQsNkNBQU07SUFBN0Q7UUFBQSxxRUFrU0M7UUFoU0MsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixrQkFBWSxHQUFjLElBQUksQ0FBQzs7SUE0UWpDLENBQUM7SUF6UUMsMENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsa0RBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxH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QStCLENBQUM7SUFDNUMsb0NBQVUsR0FBRyxtQkFBbUIsQ0FBQztJQXRCeEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztrRUFDVztJQUVsQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO21FQUNZO0lBRXBDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7K0RBQ1E7SUFFNUI7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnRUFDUztJQUU5QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOytEQUNRO0lBRTVCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7aUVBQ1U7SUFVaEM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO21FQUNOO0lBd0cvQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7a0VBR3pDO0lBaElrQix5QkFBeUI7UUFEN0MsRUFBRSxDQUFDLEtBQUs7T0FDWSx5QkFBeUIsQ0FrUzdDO0lBQUQsZ0NBQUM7Q0FsU0QsQUFrU0MsQ0FsU3NELGdCQUFNLEdBa1M1RDtrQkFsU29CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IGlzTmV0d29ya0F2YWlsYWJsZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5pbXBvcnQgeyBFQXVkaW9JRCwgRUdldEl0ZW1SZWFzb25JZCwgRUl0ZW1JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5pbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IHsgRG90R2FtZUdldEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUdldEl0ZW0nO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVNpZ25TaW1wbGVSZXdhcmRWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoSWNvblwiKVxuICByZWZyZXNoSWNvbjogXCJSZWZyZXNoSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVmFsdWVcIilcbiAgcmVmcmVzaFZhbHVlOiBcIlJlZnJlc2hWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50SWNvblwiKVxuICBoaW50SWNvbjogXCJIaW50SWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VmFsdWVcIilcbiAgaGludFZhbHVlOiBcIkhpbnRWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJDbGFpbUJ0blwiKVxuICBjbGFpbUJ0bjogXCJDbGFpbUJ0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJBZENsYWltQnRuXCIpXG4gIGFkQ2xhaW1CdG46IFwiQWRDbGFpbUJ0blwiID0gbnVsbDtcbiAgX2JnTWFzayA9IG51bGw7XG4gIF9kYXlJbmRleCA9IDA7XG4gIF9iYXNlUmV3YXJkID0gbnVsbDtcbiAgX2FkU2NhbGUgPSAyO1xuICBfaGFzV2F0Y2hlZEFkID0gZmFsc2U7XG4gIHNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgX3Jld2FyZENvdW50ID0gMDtcbiAgb25DbG9zZUNhbGxiYWNrID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkJveEFuaW1cIiwgc3AuU2tlbGV0b24pXG4gIGFuaW1Ta2VsZXRvbjogXCJCb3hBbmltXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0RhaWx5U2lnblNpbXBsZVJld2FyZFwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9kYWlseVNpZ25TaW1wbGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9ucygpO1xuICB9XG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFuaW1Ta2VsZXRvbikpIHtcbiAgICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmFuaW1Ta2VsZXRvbi5ub2RlKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnJlc2V0KFwiXCIpO1xuICAgICAgdGhpcy5hbmltUHJveHkubWFya1JlYWR5KFwiXCIpO1xuICAgICAgdGhpcy5hbmltU2tlbGV0b24uc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBcImV2ZW50X3Jld2FyZHNcIiA9PT0gaS5kYXRhLm5hbWUgJiYgdC5vbk9wZW5BbmltRmluaXNoZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzaG93UmV3YXJkKHQsIGUpIHtcbiAgICB0aGlzLl9kYXlJbmRleCA9IHQ7XG4gICAgdGhpcy5fYmFzZVJld2FyZCA9IGU7XG4gICAgdGhpcy5faGFzV2F0Y2hlZEFkID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldE5vZGVzKCk7XG4gICAgdGhpcy5pbml0UmV3YXJkQ29uZmlnKGUpO1xuICAgIHRoaXMuc2hvd0JnTWFzaygxOTApO1xuICAgIHRoaXMucGxheUluQW5pbSgpO1xuICAgIHRoaXMucGxheUNsYWltQnRuUG9wQW5pbWF0aW9uKCk7XG4gIH1cbiAgaW5pdFJld2FyZENvbmZpZyh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpID0gdGhpcztcbiAgICB0aGlzLmhpZGVBbGxSZXdhcmROb2RlcygpO1xuICAgIHRoaXMuc2hvd1Jld2FyZHNOb2RlcyA9IFtdO1xuICAgIHZhciBvID0gZnVuY3Rpb24gbyh0LCBlLCBvKSB7XG4gICAgICAgIGlmICh0ICYmIGUpIHtcbiAgICAgICAgICBpLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uX1wiICsgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaS5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfbnVtX1wiICsgbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBuID0gMTtcbiAgICBpZiAodC5oaW50Q291bnQgPiAwKSB7XG4gICAgICB0aGlzLmhpbnRWYWx1ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0LmhpbnRDb3VudCk7XG4gICAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMucHVzaCh0aGlzLmhpbnRJY29uLCB0aGlzLmhpbnRWYWx1ZSk7XG4gICAgICBvKHRoaXMuaGludEljb24sIHRoaXMuaGludFZhbHVlLCBuKTtcbiAgICAgIG4rKztcbiAgICB9XG4gICAgaWYgKHQuc2h1ZmZsZUNvdW50ID4gMCkge1xuICAgICAgdGhpcy5yZWZyZXNoVmFsdWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcodC5zaHVmZmxlQ291bnQpO1xuICAgICAgdGhpcy5zaG93UmV3YXJkc05vZGVzLnB1c2godGhpcy5yZWZyZXNoSWNvbiwgdGhpcy5yZWZyZXNoVmFsdWUpO1xuICAgICAgbyh0aGlzLnJlZnJlc2hJY29uLCB0aGlzLnJlZnJlc2hWYWx1ZSwgbik7XG4gICAgICBuKys7XG4gICAgfVxuICAgIHRoaXMuX3Jld2FyZENvdW50ID0gKHQuaGludENvdW50ID4gMCA/IDEgOiAwKSArICh0LnNodWZmbGVDb3VudCA+IDAgPyAxIDogMCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSkge1xuICAgICAgdmFyIGEgPSBudWxsID09PSAoZSA9IHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5ub2RlO1xuICAgICAgYSAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KGEsIFwiQ2xhaW0geFwiICsgdGhpcy5fYWRTY2FsZSwgXCJDb21tb25fUmV3YXJkX0NsYWltX0Fkc1wiLCBbdGhpcy5fYWRTY2FsZV0pO1xuICAgIH1cbiAgfVxuICBoaWRlQWxsUmV3YXJkTm9kZXMoKSB7XG4gICAgdGhpcy5yZWZyZXNoSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlZnJlc2hWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpbnRJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGludFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHBsYXlJbkFuaW0oKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pKSB7XG4gICAgICB2YXIgdCA9IFwiaW5fXCIgKyB0aGlzLl9yZXdhcmRDb3VudDtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC4yNSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkJveCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdGhpcy5hbmltUHJveHkuc2V0QW5pbWF0aW9uKHQsIDEsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9XG4gIH1cbiAgb25PcGVuQW5pbUZpbmlzaGVkKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModGhpcy5zaG93UmV3YXJkc05vZGVzKSwgbyA9IGkubmV4dCgpOyAhby5kb25lOyBvID0gaS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIG4gPSBvLnZhbHVlO1xuICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIChuLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBvICYmICFvLmRvbmUgJiYgKGUgPSBpLnJldHVybikgJiYgZS5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlJZGxlQW5pbSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFuaW1Ta2VsZXRvbikpIHtcbiAgICAgIHZhciB0ID0gXCJpZGxlX1wiICsgdGhpcy5fcmV3YXJkQ291bnQ7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5zZXRBbmltYXRpb24odCwgLTEpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRTU2ltUndkVndfZ2V0QWRCdG5TY2FsZVwiKVxuICBnZXRBZEJ0blNjYWxlKCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJlc2V0Tm9kZXMoKSB7XG4gICAgW3RoaXMucmVmcmVzaEljb24sIHRoaXMucmVmcmVzaFZhbHVlLCB0aGlzLmhpbnRJY29uLCB0aGlzLmhpbnRWYWx1ZSwgdGhpcy5jbGFpbUJ0biwgdGhpcy5hZENsYWltQnRuXS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBjYy5pc1ZhbGlkKHQpICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9KTtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0QWRCdG5TY2FsZSgpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pKSB7XG4gICAgICB0aGlzLmNsYWltQnRuLnNjYWxlID0gMC42O1xuICAgICAgdGhpcy5jbGFpbUJ0bi5vcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSkge1xuICAgICAgdGhpcy5hZENsYWltQnRuLnNjYWxlID0gMC42ICogdDtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cbiAgc2hvd0JnTWFzayh0KSB7XG4gICAgdGhpcy5fYmdNYXNrID0gY2MuZmluZChcImJnX21hc2tcIiwgdGhpcy5ub2RlKTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9iZ01hc2spKSB7XG4gICAgICB0aGlzLl9iZ01hc2sub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2Vlbih0aGlzLl9iZ01hc2spLnRvKDAuMiwge1xuICAgICAgICBvcGFjaXR5OiB0XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5Q2xhaW1CdG5Qb3BBbmltYXRpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuZ2V0QWRCdG5TY2FsZSgpLFxuICAgICAgICBpID0gY2MudHdlZW4oKS50bygwLjIsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgfSkudG8oMC4xNywge1xuICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgIH0pLFxuICAgICAgICBvID0gY2MudHdlZW4oKS50bygwLjIsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNSAqIGUsXG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgICAgICBzY2FsZTogZSxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJblxuICAgICAgICB9KSxcbiAgICAgICAgbiA9IGlzTmV0d29ya0F2YWlsYWJsZSgpLFxuICAgICAgICBhID0gdGhpcy5fYWRTY2FsZSA+IDEsXG4gICAgICAgIHIgPSAwLjkyOTk5OTk5OTk5OTk5OTksXG4gICAgICAgIHMgPSBjYy52MygwLCAtNDEwLCAwKTtcbiAgICAgIGlmIChuICYmIGEgJiYgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmFkQ2xhaW1CdG4pO1xuICAgICAgICB0aGlzLmFkQ2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRDbGFpbUJ0bi5zY2FsZSA9IDAuNiAqIGU7XG4gICAgICAgIHRoaXMuYWRDbGFpbUJ0bi5vcGFjaXR5ID0gMDtcbiAgICAgICAgY2MudHdlZW4odGhpcy5hZENsYWltQnRuKS5kZWxheSgwLjczKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHQuYWRDbGFpbUJ0bikgJiYgKHQuYWRDbGFpbUJ0bi5hY3RpdmUgPSB0cnVlKTtcbiAgICAgICAgfSkudGhlbihvLmNsb25lKCkpLnN0YXJ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYWltQnRuLnNldFBvc2l0aW9uKHMpO1xuICAgICAgICByID0gMC43MztcbiAgICAgIH1cbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmNsYWltQnRuKTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNsYWltQnRuLnNjYWxlID0gMC42O1xuICAgICAgdGhpcy5jbGFpbUJ0bi5vcGFjaXR5ID0gMDtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuY2xhaW1CdG4pLmRlbGF5KHIpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHQuY2xhaW1CdG4pICYmICh0LmNsYWltQnRuLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgfSkudGhlbihpLmNsb25lKCkpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyQnV0dG9ucygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2soXCJDbGFpbUJ0blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0Lm9uQ2xhaW1DbGljayhmYWxzZSk7XG4gICAgfSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmIHRoaXMuT25CdXR0b25DbGljayhcIkFkQ2xhaW1CdG5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5vbkFkQ2xhaW1DbGljaygpO1xuICAgIH0pO1xuICB9XG4gIG9uQ2xhaW1DbGljayh0ID0gZmFsc2UpIHtcbiAgICB2YXIgZSA9IHQgPyB0aGlzLl9hZFNjYWxlIDogMTtcbiAgICB0IHx8IEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5CdG5DbGljaywge1xuICAgICAgYnV0dG9uX25hbWU6IFwi546p5a6254K55Ye75aWW5Yqx5oyJ6ZKuXCIsXG4gICAgICBkYXlfaW5kZXg6IHRoaXMuX2RheUluZGV4ICsgMSxcbiAgICAgIGhpbnRfY291bnQ6IHRoaXMuX2Jhc2VSZXdhcmQuaGludENvdW50LFxuICAgICAgc2h1ZmZsZV9jb3VudDogdGhpcy5fYmFzZVJld2FyZC5zaHVmZmxlQ291bnQsXG4gICAgICBpc19kb3VibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5ncmFudFJld2FyZChlKTtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuICBvbkFkQ2xhaW1DbGljaygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkJ0bkNsaWNrLCB7XG4gICAgICBidXR0b25fbmFtZTogXCLnjqnlrrbngrnlh7vlj4zlgI3lpZblirFcIixcbiAgICAgIGRheV9pbmRleDogdGhpcy5fZGF5SW5kZXggKyAxLFxuICAgICAgaGludF9jb3VudDogdGhpcy5fYmFzZVJld2FyZC5oaW50Q291bnQgKiB0aGlzLl9hZFNjYWxlLFxuICAgICAgc2h1ZmZsZV9jb3VudDogdGhpcy5fYmFzZVJld2FyZC5zaHVmZmxlQ291bnQgKiB0aGlzLl9hZFNjYWxlLFxuICAgICAgaXNfZG91YmxlOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKGlzTmV0d29ya0F2YWlsYWJsZSgpKSB7XG4gICAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwge1xuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0Ll9oYXNXYXRjaGVkQWQgPSB0cnVlO1xuICAgICAgICAgIHQub25DbGFpbUNsaWNrKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQub25DbGFpbUNsaWNrKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25DbGFpbUNsaWNrKGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgZ3JhbnRSZXdhcmQodCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCksXG4gICAgICBpID0gdCA+IDEsXG4gICAgICBvID0gdGhpcy5fZGF5SW5kZXggKyAxLFxuICAgICAgbiA9IEVHZXRJdGVtUmVhc29uSWQuRGFpbHlTaWduU2ltcGxlLFxuICAgICAgYSA9IGkgPyBcIueugOaYk+eJiOeZu+W9lV/mv4DlirHnv7vlgI1f56ysXCIgKyBvICsgXCLlpKlcIiA6IFwi566A5piT54mI55m75b2VX+esrFwiICsgbyArIFwi5aSpXCIsXG4gICAgICByID0gdGhpcy5fYmFzZVJld2FyZC5oaW50Q291bnQgKiB0O1xuICAgIGlmIChyID4gMCkge1xuICAgICAgZS5jaGFuZ2VIaXRUaXBzTnVtcyhyKTtcbiAgICAgIHZhciBzID0gZS51c2VyTW9kZWwubG9jYWxEYXRhLmhpdFRpcHMsXG4gICAgICAgIGwgPSB7XG4gICAgICAgICAgaXRlbUlkOiBFSXRlbUlkLkhpbnQsXG4gICAgICAgICAgbnVtYmVyOiByLFxuICAgICAgICAgIGFmdGVyTnVtOiBzLFxuICAgICAgICAgIHJlYXNvbklkOiBuLFxuICAgICAgICAgIHJlYXNvbkluZm86IGFcbiAgICAgICAgfTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdEdldEl0ZW0oZSwgbCk7XG4gICAgfVxuICAgIHZhciBjID0gdGhpcy5fYmFzZVJld2FyZC5zaHVmZmxlQ291bnQgKiB0O1xuICAgIGlmIChjID4gMCkge1xuICAgICAgZS5jaGFuZ2VTaHVmZmxlTnVtcyhjKTtcbiAgICAgIHZhciBkID0gZS51c2VyTW9kZWwubG9jYWxEYXRhLnNodWZmbGUsXG4gICAgICAgIGggPSB7XG4gICAgICAgICAgaXRlbUlkOiBFSXRlbUlkLlNodWZmbGUsXG4gICAgICAgICAgbnVtYmVyOiBjLFxuICAgICAgICAgIGFmdGVyTnVtOiBkLFxuICAgICAgICAgIHJlYXNvbklkOiBuLFxuICAgICAgICAgIHJlYXNvbkluZm86IGFcbiAgICAgICAgfTtcbiAgICAgIERvdEdhbWVHZXRJdGVtLmRvdEdldEl0ZW0oZSwgaCk7XG4gICAgfVxuICB9XG4gIGNsb3NlUGFuZWwoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCB7XG4gICAgICBzY2FsZTogMC44LFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5vbkNsb3NlQ2FsbGJhY2sgJiYgdC5vbkNsb3NlQ2FsbGJhY2soKTtcbiAgICAgIGNjLmlzVmFsaWQodC5ub2RlKSAmJiB0Lm5vZGUuZGVzdHJveSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbn0iXX0=