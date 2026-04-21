
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleVJld2FyZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxnRUFBMkQ7QUFDM0QseUVBQXdFO0FBQ3hFLCtFQUFnRjtBQUNoRixtRUFBb0U7QUFDcEUsNEVBQWtGO0FBQ2xGLDJFQUFzRTtBQUN0RSxtREFBOEM7QUFDOUMseUVBQW9FO0FBQ3BFLHdGQUFrRjtBQUVsRjtJQUFpRCx1Q0FBTTtJQUF2RDtRQUFBLHFFQStOQztRQTdOQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0Isa0JBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyx5QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBMk1uQixDQUFDO0lBeE1DLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELDRDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFD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QyxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNWO1FBQ0QsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxDQUFD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Q0EvTkQsQUErTkMsQ0EvTmdELGdCQUFNLEdBK050RDtrQkEvTm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEFkUmV3YXJkRW50ZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBEb3RBZFZpc2l0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREFkVmlzaXQnO1xuaW1wb3J0IHsgaXNOZXR3b3JrQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IEFnZVN1cnZleU1vZGVsIGZyb20gJy4vQWdlU3VydmV5TW9kZWwnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlU3VydmV5UmV3YXJkVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIEBtai5ub2RlKFwiQ2xhaW1CdG5cIilcbiAgY2xhaW1CdG46IFwiQ2xhaW1CdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQWRDbGFpbUJ0blwiKVxuICBhZENsYWltQnRuOiBcIkFkQ2xhaW1CdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFZhbHVlXCIpXG4gIHJlZnJlc2hWYWx1ZTogXCJSZWZyZXNoVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludFZhbHVlXCIpXG4gIGhpbnRWYWx1ZTogXCJIaW50VmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaEljb25cIilcbiAgcmVmcmVzaEljb246IFwiUmVmcmVzaEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludEljb25cIilcbiAgaGludEljb246IFwiSGludEljb25cIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJCb3hBbmltXCIsIHNwLlNrZWxldG9uKVxuICBhbmltU2tlbGV0b246IFwiQm94QW5pbVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZXdhcmRzVGlwXCIpXG4gIHJld2FyZFRpcDogXCJSZXdhcmRzVGlwXCIgPSBudWxsO1xuICBjZW50ZXJCdG5Qb3MgPSBjYy52MygwLCAtMzUwLCAwKTtcbiAgY2xhaW1CdG5PcmlnaW5hbFBvcyA9IG51bGw7XG4gIGFkQ2xhaW1CdG5PcmlnaW5hbFBvcyA9IG51bGw7XG4gIGFuaW1Qcm94eSA9IG51bGw7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX2FnZVN1cnZleVwiO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0FnZVN1cnZleVJld2FyZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMuc2F2ZU9yaWdpbmFsUG9zaXRpb25zKCk7XG4gICAgdGhpcy5yZWdpc3RlckJ1dHRvbnMoKTtcbiAgfVxuICBpbml0Q29tcG9uZW50cygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pKSB7XG4gICAgICB0aGlzLmFuaW1Qcm94eSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5hbmltU2tlbGV0b24ubm9kZSk7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25fMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LnJlZnJlc2hJY29uO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LnJlZnJlc2hWYWx1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfaWNvbl8yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHQuaGludEljb247XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX251bV8yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHQuaGludFZhbHVlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1Ta2VsZXRvbi5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgIFwiZXZlbnRfcmV3YXJkc1wiID09PSByLmRhdGEubmFtZSAmJiB0Lm9uT3BlbkFuaW1GaW5pc2hlZCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlc2V0Tm9kZXMoKTtcbiAgICB9XG4gIH1cbiAgcmVzZXROb2RlcygpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaEljb24pICYmICh0aGlzLnJlZnJlc2hJY29uLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaFZhbHVlKSAmJiAodGhpcy5yZWZyZXNoVmFsdWUuYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaW50SWNvbikgJiYgKHRoaXMuaGludEljb24uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaW50VmFsdWUpICYmICh0aGlzLmhpbnRWYWx1ZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSAmJiAodGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmICh0aGlzLmFkQ2xhaW1CdG4uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5yZXdhcmRUaXApICYmICh0aGlzLnJld2FyZFRpcC5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgb25PcGVuQW5pbUZpbmlzaGVkKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5yZWZyZXNoSWNvbikgJiYgKHRoaXMucmVmcmVzaEljb24uYWN0aXZlID0gdHJ1ZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnJlZnJlc2hWYWx1ZSkgJiYgKHRoaXMucmVmcmVzaFZhbHVlLmFjdGl2ZSA9IHRydWUpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaW50SWNvbikgJiYgKHRoaXMuaGludEljb24uYWN0aXZlID0gdHJ1ZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmhpbnRWYWx1ZSkgJiYgKHRoaXMuaGludFZhbHVlLmFjdGl2ZSA9IHRydWUpO1xuICB9XG4gIHNhdmVPcmlnaW5hbFBvc2l0aW9ucygpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pICYmICh0aGlzLmNsYWltQnRuT3JpZ2luYWxQb3MgPSB0aGlzLmNsYWltQnRuLnBvc2l0aW9uLmNsb25lKCkpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiAodGhpcy5hZENsYWltQnRuT3JpZ2luYWxQb3MgPSB0aGlzLmFkQ2xhaW1CdG4ucG9zaXRpb24uY2xvbmUoKSk7XG4gIH1cbiAgcmVnaXN0ZXJCdXR0b25zKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuY2xhaW1CdG4sIHRoaXMub25DbGFpbUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5hZENsYWltQnRuLCB0aGlzLm9uQWRDbGFpbUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIGluaXREYXRhKHQpIHtcbiAgICB0aGlzLnVwZGF0ZVJld2FyZERpc3BsYXkodC5yZXdhcmRDb25maWcpO1xuICAgIHRoaXMuc2V0dXBCdXR0b25zKHQucmV3YXJkQ29uZmlnKTtcbiAgICB0aGlzLnBsYXlTaG93QW5pbWF0aW9uKCk7XG4gICAgRG90QWRSZXdhcmRFbnRlci5kb3QodHJ1ZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICB9XG4gIGdldEFyZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuYXJncztcbiAgfVxuICB1cGRhdGVSZXdhcmREaXNwbGF5KHQpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaFZhbHVlKSAmJiAoZSA9IHRoaXMucmVmcmVzaFZhbHVlLmdldENvbXBvbmVudChjYy5MYWJlbCkpICYmIChlLnN0cmluZyA9IFN0cmluZyh0LnNodWZmbGVDb3VudCkpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuaGludFZhbHVlKSkge1xuICAgICAgdmFyIGU7XG4gICAgICAoZSA9IHRoaXMuaGludFZhbHVlLmdldENvbXBvbmVudChjYy5MYWJlbCkpICYmIChlLnN0cmluZyA9IFN0cmluZyh0LmhpbnRDb3VudCkpO1xuICAgIH1cbiAgfVxuICBzZXR1cEJ1dHRvbnModCkge1xuICAgIHZhciBlLFxuICAgICAgciA9IHQuYWRNdWx0aXBsaWVyIHx8IDE7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmIEkxOE5TdHJpbmdzLnNldFRleHQobnVsbCA9PT0gKGUgPSB0aGlzLmFkQ2xhaW1CdG4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubm9kZSwgXCJDbGFpbSB4XCIgKyByLCBcIkNvbW1vbl9SZXdhcmRfQ2xhaW1fQWRzXCIsIFtyXSk7XG4gIH1cbiAgcGxheVNob3dBbmltYXRpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC4yNSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5Cb3gpO1xuICAgIH0pLnN0YXJ0KCk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFuaW1Qcm94eSkgJiYgdGhpcy5hbmltUHJveHkuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5wbGF5SWRsZUFuaW0oKTtcbiAgICB9KTtcbiAgICB0aGlzLnBsYXlDbGFpbUJ0blBvcEFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheVJld2FyZHNUaXBBbmltKCk7XG4gIH1cbiAgcGxheUlkbGVBbmltKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5hbmltUHJveHkpICYmIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWdlUndkVndfZ2V0QWRCdG5TY2FsZVwiKVxuICBnZXRBZEJ0blNjYWxlKCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHBsYXlDbGFpbUJ0blBvcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gdGhpcy5nZXRBZEJ0blNjYWxlKCksXG4gICAgICByID0gY2MudHdlZW4oKS50bygwLjIsIHtcbiAgICAgICAgc2NhbGU6IDEuMDUsXG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICB9KS50bygwLjE3LCB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICB9KSxcbiAgICAgIG8gPSBjYy50d2VlbigpLnRvKDAuMiwge1xuICAgICAgICBzY2FsZTogMS4wNSAqIGUsXG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICB9KS50bygwLjE3LCB7XG4gICAgICAgIHNjYWxlOiBlLFxuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICB9KSxcbiAgICAgIGkgPSBpc05ldHdvcmtBdmFpbGFibGUoKSxcbiAgICAgIG4gPSB0aGlzLmdldEFyZ3MoKS5yZXdhcmRDb25maWcsXG4gICAgICBhID0gKG51bGwgPT0gbiA/IHZvaWQgMCA6IG4uYWRNdWx0aXBsaWVyKSB8fCAxLFxuICAgICAgcyA9IDEuOTM7XG4gICAgaWYgKGkgJiYgYSA+IDEgJiYgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pKSB7XG4gICAgICB0aGlzLmFkQ2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmFkQ2xhaW1CdG4uc2NhbGUgPSAwLjYgKiBlO1xuICAgICAgdGhpcy5hZENsYWltQnRuLm9wYWNpdHkgPSAwO1xuICAgICAgY2MudHdlZW4odGhpcy5hZENsYWltQnRuKS5kZWxheSgxLjczKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2MuaXNWYWxpZCh0LmFkQ2xhaW1CdG4pICYmICh0LmFkQ2xhaW1CdG4uYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9KS50aGVuKG8uY2xvbmUoKSkuc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSAmJiB0aGlzLmNsYWltQnRuLnNldFBvc2l0aW9uKHRoaXMuY2VudGVyQnRuUG9zKTtcbiAgICAgIHMgPSAxLjczO1xuICAgIH1cbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSkge1xuICAgICAgdGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uc2NhbGUgPSAwLjY7XG4gICAgICB0aGlzLmNsYWltQnRuLm9wYWNpdHkgPSAwO1xuICAgICAgY2MudHdlZW4odGhpcy5jbGFpbUJ0bikuZGVsYXkocykuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodC5jbGFpbUJ0bikgJiYgKHQuY2xhaW1CdG4uYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9KS50aGVuKHIuY2xvbmUoKSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVJld2FyZHNUaXBBbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmV3YXJkVGlwKSAmJiBjYy50d2Vlbih0aGlzLnJld2FyZFRpcCkuZGVsYXkoMC45KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQucmV3YXJkVGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0LnJld2FyZFRpcC5zY2FsZSA9IDAuMztcbiAgICB9KS50bygwLjIsIHtcbiAgICAgIHNjYWxlOiAxLjNcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgfSkudG8oMC4xNywge1xuICAgICAgc2NhbGU6IDAuOFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS50bygwLjEzLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIG9uQ2xhaW1CdG5DbGljaygpIHtcbiAgICBEb3RBZFZpc2l0LmRvdEFkVmlzaXRSZXdhcmRBRChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwgZmFsc2UpO1xuICAgIHRoaXMuZ2l2ZVJld2FyZHMoMSwgZmFsc2UpO1xuICAgIHRoaXMuaGlkZVBhbmVsKCk7XG4gIH1cbiAgb25BZENsYWltQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCB0cnVlKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgIHZhciBlID0gdGhpcy5nZXRBcmdzKCk7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheVZpZGVvQWQoRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24sIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcjtcbiAgICAgICAgdC5naXZlUmV3YXJkcygobnVsbCA9PT0gKHIgPSBlLnJld2FyZENvbmZpZykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5hZE11bHRpcGxpZXIpIHx8IDEsIHRydWUpO1xuICAgICAgICB0LmhpZGVQYW5lbCgpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoKSB7fVxuICAgIH0pO1xuICB9XG4gIGdpdmVSZXdhcmRzKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuZ2V0QXJncygpLFxuICAgICAgbyA9IHIucmV3YXJkQ29uZmlnO1xuICAgIG8gJiYgQWdlU3VydmV5TW9kZWwuZ2V0SW5zdGFuY2UoKS5naXZlUmV3YXJkcyhvLCB0LCBlLCByLnN1cnZleUluZGV4KTtcbiAgfVxuICBoaWRlUGFuZWwoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCB7XG4gICAgICBzY2FsZTogMS4wNSxcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJxdWFkT3V0XCJcbiAgICB9KS50bygwLjEzLCB7XG4gICAgICBzY2FsZTogMC4zLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogXCJzaW5lT3V0XCJcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuZGVsZWdhdGUuY2xvc2VBbmRDYWxsYmFjaygpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbn0iXX0=