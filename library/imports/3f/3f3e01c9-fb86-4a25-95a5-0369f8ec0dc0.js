"use strict";
cc._RF.push(module, '3f3e0HJ+4ZKJZWlA2n47A3A', 'AgeSurveyRewardView');
// subpackages/r_ageSurvey/Scripts/AgeSurveyRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var AgeSurveyModel_1 = require("./AgeSurveyModel");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var AgeSurveyRewardView = /** @class */ (function (_super) {
    __extends(AgeSurveyRewardView, _super);
    function AgeSurveyRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.claimBtn = null;
        _this.adClaimBtn = null;
        _this.refreshValue = null;
        _this.hintValue = null;
        _this.refreshIcon = null;
        _this.hintIcon = null;
        _this.animSkeleton = null;
        _this.rewardTip = null;
        _this.centerBtnPos = cc.v3(0, -350, 0);
        _this.claimBtnOriginalPos = null;
        _this.adClaimBtnOriginalPos = null;
        _this.animProxy = null;
        return _this;
    }
    AgeSurveyRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.saveOriginalPositions();
        this.registerButtons();
    };
    AgeSurveyRewardView.prototype.initComponents = function () {
        var t = this;
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
            this.animSkeleton.setEventListener(function (e, r) {
                "event_rewards" === r.data.name && t.onOpenAnimFinished();
            });
            this.resetNodes();
        }
    };
    AgeSurveyRewardView.prototype.resetNodes = function () {
        cc.isValid(this.refreshIcon) && (this.refreshIcon.active = false);
        cc.isValid(this.refreshValue) && (this.refreshValue.active = false);
        cc.isValid(this.hintIcon) && (this.hintIcon.active = false);
        cc.isValid(this.hintValue) && (this.hintValue.active = false);
        cc.isValid(this.claimBtn) && (this.claimBtn.active = false);
        cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
        cc.isValid(this.rewardTip) && (this.rewardTip.active = false);
    };
    AgeSurveyRewardView.prototype.onOpenAnimFinished = function () {
        cc.isValid(this.refreshIcon) && (this.refreshIcon.active = true);
        cc.isValid(this.refreshValue) && (this.refreshValue.active = true);
        cc.isValid(this.hintIcon) && (this.hintIcon.active = true);
        cc.isValid(this.hintValue) && (this.hintValue.active = true);
    };
    AgeSurveyRewardView.prototype.saveOriginalPositions = function () {
        cc.isValid(this.claimBtn) && (this.claimBtnOriginalPos = this.claimBtn.position.clone());
        cc.isValid(this.adClaimBtn) && (this.adClaimBtnOriginalPos = this.adClaimBtn.position.clone());
    };
    AgeSurveyRewardView.prototype.registerButtons = function () {
        cc.isValid(this.claimBtn) && this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        cc.isValid(this.adClaimBtn) && this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
    };
    AgeSurveyRewardView.prototype.initData = function (t) {
        this.updateRewardDisplay(t.rewardConfig);
        this.setupButtons(t.rewardConfig);
        this.playShowAnimation();
        DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.OutGameMotivation);
    };
    AgeSurveyRewardView.prototype.getArgs = function () {
        return this.delegate.args;
    };
    AgeSurveyRewardView.prototype.updateRewardDisplay = function (t) {
        cc.isValid(this.refreshValue) && (e = this.refreshValue.getComponent(cc.Label)) && (e.string = String(t.shuffleCount));
        if (cc.isValid(this.hintValue)) {
            var e;
            (e = this.hintValue.getComponent(cc.Label)) && (e.string = String(t.hintCount));
        }
    };
    AgeSurveyRewardView.prototype.setupButtons = function (t) {
        var e, r = t.adMultiplier || 1;
        cc.isValid(this.adClaimBtn) && I18NStrings_1.default.setText(null === (e = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim x" + r, "Common_Reward_Claim_Ads", [r]);
    };
    AgeSurveyRewardView.prototype.playShowAnimation = function () {
        var t = this;
        cc.tween(this.node).delay(0.25).call(function () {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
        }).start();
        cc.isValid(this.animProxy) && this.animProxy.setAnimation("in", 1, function () {
            t.playIdleAnim();
        });
        this.playClaimBtnPopAnimation();
        this.playRewardsTipAnim();
    };
    AgeSurveyRewardView.prototype.playIdleAnim = function () {
        cc.isValid(this.animProxy) && this.animProxy.setAnimation("init", -1);
    };
    AgeSurveyRewardView.prototype.getAdBtnScale = function () {
        return 1;
    };
    AgeSurveyRewardView.prototype.playClaimBtnPopAnimation = function () {
        var t = this, e = this.getAdBtnScale(), r = cc.tween().to(0.2, {
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
        }), i = CommonUtils_1.isNetworkAvailable(), n = this.getArgs().rewardConfig, a = (null == n ? void 0 : n.adMultiplier) || 1, s = 1.93;
        if (i && a > 1 && cc.isValid(this.adClaimBtn)) {
            this.adClaimBtn.active = false;
            this.adClaimBtn.scale = 0.6 * e;
            this.adClaimBtn.opacity = 0;
            cc.tween(this.adClaimBtn).delay(1.73).call(function () {
                cc.isValid(t.adClaimBtn) && (t.adClaimBtn.active = true);
            }).then(o.clone()).start();
        }
        else {
            cc.isValid(this.claimBtn) && this.claimBtn.setPosition(this.centerBtnPos);
            s = 1.73;
        }
        if (cc.isValid(this.claimBtn)) {
            this.claimBtn.active = false;
            this.claimBtn.scale = 0.6;
            this.claimBtn.opacity = 0;
            cc.tween(this.claimBtn).delay(s).call(function () {
                cc.isValid(t.claimBtn) && (t.claimBtn.active = true);
            }).then(r.clone()).start();
        }
    };
    AgeSurveyRewardView.prototype.playRewardsTipAnim = function () {
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
    AgeSurveyRewardView.prototype.onClaimBtnClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, false);
        this.giveRewards(1, false);
        this.hidePanel();
    };
    AgeSurveyRewardView.prototype.onAdClaimBtnClick = function () {
        var t = this;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, DGameAdShow_1.EAdPosition.OutGameMotivation);
        var e = this.getArgs();
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.OutGameMotivation, {
            onSuccess: function () {
                var r;
                t.giveRewards((null === (r = e.rewardConfig) || void 0 === r ? void 0 : r.adMultiplier) || 1, true);
                t.hidePanel();
            },
            onFailed: function () { }
        });
    };
    AgeSurveyRewardView.prototype.giveRewards = function (t, e) {
        var r = this.getArgs(), o = r.rewardConfig;
        o && AgeSurveyModel_1.default.getInstance().giveRewards(o, t, e, r.surveyIndex);
    };
    AgeSurveyRewardView.prototype.hidePanel = function () {
        var t = this;
        cc.tween(this.node).to(0.2, {
            scale: 1.05,
            opacity: 255
        }, {
            easing: "quadOut"
        }).to(0.13, {
            scale: 0.3,
            opacity: 0
        }, {
            easing: "sineOut"
        }).call(function () {
            t.delegate.closeAndCallback();
        }).start();
    };
    AgeSurveyRewardView.bundleName = "r_ageSurvey";
    AgeSurveyRewardView.prefabUrl = "prefabs/AgeSurveyReward";
    __decorate([
        mj.node("ClaimBtn")
    ], AgeSurveyRewardView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], AgeSurveyRewardView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], AgeSurveyRewardView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintValue")
    ], AgeSurveyRewardView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("RefreshIcon")
    ], AgeSurveyRewardView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("HintIcon")
    ], AgeSurveyRewardView.prototype, "hintIcon", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], AgeSurveyRewardView.prototype, "animSkeleton", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], AgeSurveyRewardView.prototype, "rewardTip", void 0);
    __decorate([
        mj.traitEvent("AgeRwdVw_getAdBtnScale")
    ], AgeSurveyRewardView.prototype, "getAdBtnScale", null);
    AgeSurveyRewardView = __decorate([
        mj.class
    ], AgeSurveyRewardView);
    return AgeSurveyRewardView;
}(UIView_1.default));
exports.default = AgeSurveyRewardView;

cc._RF.pop();