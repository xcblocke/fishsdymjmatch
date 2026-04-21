"use strict";
cc._RF.push(module, '6565csa3FlI6JLUJupVmmxA', 'WinStreakRewardView');
// subpackages/l_winStreakReward/Scripts/WinStreakRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var WinStreakRewardView = /** @class */ (function (_super) {
    __extends(WinStreakRewardView, _super);
    function WinStreakRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintValue = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.refreshIcon = null;
        _this.adClaimBtn = null;
        _this.claimBtn = null;
        _this.rewardTip = null;
        _this.config = null;
        _this.closeCallback = null;
        _this.clickCount = 0;
        _this.isClosing = false;
        _this.animSkeleton = null;
        return _this;
    }
    WinStreakRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    WinStreakRewardView.prototype.onDestroy = function () {
        cc.isValid(this.animSkeleton) && this.animSkeleton.setEventListener(null);
        cc.Tween.stopAllByTarget(this.node);
        cc.Tween.stopAllByTarget(this.claimBtn);
        cc.Tween.stopAllByTarget(this.rewardTip);
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
        _super.prototype.onDestroy.call(this);
    };
    WinStreakRewardView.prototype.showReward = function (t) {
        this.config = t.config;
        this.closeCallback = t.closeCallback;
        this.updateLabel();
        this.playOpenAnim();
    };
    WinStreakRewardView.prototype.initComponents = function () {
        var t = this;
        cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
        this.addBgNode();
        if (cc.isValid(this.animSkeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.animSkeleton.node);
            this.animProxy.reset("");
            this.animProxy.markReady("");
            this.animProxy.attachNode("hook_icon_1", function () {
                return t.refreshIcon;
            });
            this.animProxy.attachNode("hook_num_1", function () {
                return t.refreshValue;
            });
            this.animProxy.attachNode("hook_icon_2", function () {
                return t.hintIcon;
            });
            this.animProxy.attachNode("hook_num_2", function () {
                return t.hintValue;
            });
        }
        this.reset();
    };
    WinStreakRewardView.prototype.addBgNode = function () {
        var t = new cc.Node("bg");
        BaseSprite_1.default.refreshWithNode(t, "texture/win/result_mask");
        t.setContentSize(1080, 1920);
        this.node.addChild(t);
        t.setSiblingIndex(0);
        t.addComponent(cc.Widget);
        var e = t.getComponent(cc.Widget);
        e.isAlignTop = true;
        e.isAlignBottom = true;
        e.isAlignLeft = true;
        e.isAlignRight = true;
        e.top = 0;
        e.bottom = 0;
        e.left = 0;
        e.right = 0;
        Adapter_1.default.ignoreSafeRect(t);
    };
    WinStreakRewardView.prototype.registerButtons = function () {
        this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        this.OnButtonClick(this.node, {
            func: this.onBgClick.bind(this),
            ignoreClickAudio: true
        });
    };
    WinStreakRewardView.prototype.onBgClick = function () {
        this.clickCount++;
        this.clickCount >= 3 && this.hideAnim();
    };
    WinStreakRewardView.prototype.onClaimBtnClick = function () {
        this.hideAnim();
    };
    WinStreakRewardView.prototype.updateLabel = function () {
        var t;
        if (this.config) {
            cc.isValid(this.hintValue) && (this.hintValue.getComponent(cc.Label).string = this.config.hint.toString());
            cc.isValid(this.refreshValue) && (this.refreshValue.getComponent(cc.Label).string = this.config.shuffle.toString());
            cc.isValid(this.claimBtn) && I18NStrings_1.default.setText(null === (t = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim", "LeaderBoard_Reward_Claim");
            cc.isValid(this.rewardTip) && I18NStrings_1.default.setText(this.rewardTip, "Winning Streak", "Winning_streak_Title");
        }
    };
    WinStreakRewardView.prototype.reset = function () {
        cc.isValid(this.refreshIcon) && (this.refreshIcon.active = false);
        cc.isValid(this.refreshValue) && (this.refreshValue.active = false);
        cc.isValid(this.hintIcon) && (this.hintIcon.active = false);
        cc.isValid(this.hintValue) && (this.hintValue.active = false);
        cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
        cc.isValid(this.claimBtn) && (this.claimBtn.active = false);
        cc.isValid(this.rewardTip) && (this.rewardTip.active = false);
    };
    WinStreakRewardView.prototype.playOpenAnim = function () {
        var t = this;
        this.reset();
        if (cc.isValid(this.animSkeleton) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animSkeleton.setEventListener(function (e, i) {
                "event_rewards" === i.data.name && t.onOpenAnimFinished();
            });
            this.animProxy.setAnimation("in", 1, function () {
                t.playRewardsAnim();
            });
            this.claimBtn.active = false;
            this.claimBtn.scale = 0.6;
            cc.isValid(this.adClaimBtn) && this.claimBtn.setPosition(this.adClaimBtn.position);
            var e = cc.tween().to(0.2, {
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            });
            cc.tween(this.claimBtn).delay(1.73).call(function () {
                t.claimBtn.active = true;
            }).then(e).start();
            this.playRewardsTipAnim();
        }
    };
    WinStreakRewardView.prototype.playRewardsTipAnim = function () {
        var t = this;
        cc.isValid(this.rewardTip) && cc.tween(this.rewardTip).delay(0.9).call(function () {
            t.rewardTip.active = true;
            t.rewardTip.scale = 0.3;
        }).to(0.2, {
            scale: 1.3
        }, {
            easing: cc.easing.quadOut
        }).to(0.17, {
            scale: 0.8
        }, {
            easing: cc.easing.sineOut
        }).to(0.13, {
            scale: 1
        }, {
            easing: cc.easing.sineOut
        }).start();
    };
    WinStreakRewardView.prototype.onOpenAnimFinished = function () {
        cc.isValid(this.refreshIcon) && (this.refreshIcon.active = true);
        cc.isValid(this.refreshValue) && (this.refreshValue.active = true);
        cc.isValid(this.hintIcon) && (this.hintIcon.active = true);
        cc.isValid(this.hintValue) && (this.hintValue.active = true);
    };
    WinStreakRewardView.prototype.playRewardsAnim = function () {
        cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init", -1);
    };
    WinStreakRewardView.prototype.hideAnim = function () {
        var t = this;
        if (cc.isValid(this.node) && !this.isClosing) {
            this.isClosing = true;
            cc.tween(this.node).to(0.17, {
                scale: 1.05
            }, {
                easing: cc.easing.sineOut
            }).to(0.13, {
                scale: 0.3,
                opacity: 0
            }, {
                easing: cc.easing.sineOut
            }).call(function () {
                t.onClose();
            }).start();
        }
    };
    WinStreakRewardView.prototype.onClose = function () {
        var t, e;
        null === (t = this.closeCallback) || void 0 === t || t.call(this);
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    WinStreakRewardView.prefabUrl = "prefabs/boxReward/OpenAnim";
    __decorate([
        mj.node("HintValue")
    ], WinStreakRewardView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], WinStreakRewardView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], WinStreakRewardView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("RefreshIcon")
    ], WinStreakRewardView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], WinStreakRewardView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], WinStreakRewardView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], WinStreakRewardView.prototype, "rewardTip", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], WinStreakRewardView.prototype, "animSkeleton", void 0);
    WinStreakRewardView = __decorate([
        mj.class
    ], WinStreakRewardView);
    return WinStreakRewardView;
}(UIView_1.default));
exports.default = WinStreakRewardView;

cc._RF.pop();