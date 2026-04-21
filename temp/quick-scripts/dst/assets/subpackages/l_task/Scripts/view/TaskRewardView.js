
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/view/TaskRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fdeafhEc2NBO5kaQjM/Qj4V', 'TaskRewardView');
// subpackages/l_task/Scripts/view/TaskRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var TaskModel_1 = require("../model/TaskModel");
var CommonUtils_1 = require("../../../../Scripts/framework/utils/CommonUtils");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var Adapter_1 = require("../../../../Scripts/component/Adapter");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var IUserData_1 = require("../../../../Scripts/user/IUserData");
var AdManager_1 = require("../../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../../Scripts/gamePlay/dot/DGameAdShow");
var DAdVisit_1 = require("../../../../Scripts/gamePlay/dot/DAdVisit");
var DAdRewardEnter_1 = require("../../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DGameAdShowStage_1 = require("../../../../Scripts/gamePlay/dot/DGameAdShowStage");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var w = {
    1: 3,
    2: 2,
    3: 4
};
var C = {
    1: 3,
    2: 2,
    3: 1
};
var TaskRewardView = /** @class */ (function (_super) {
    __extends(TaskRewardView, _super);
    function TaskRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refreshIcon = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.hintValue = null;
        _this.undoIcon = null;
        _this.undoValue = null;
        _this.rewardsTip = null;
        _this.rewardsTip1 = null;
        _this.claimBtn = null;
        _this.adClaimBtn = null;
        _this._bgMask = null;
        _this._stage = 1;
        _this.showRewardsNodes = [];
        _this._rewardCount = 0;
        _this._adScale = 1;
        _this.centerBtnPos = cc.v3(0, -410, 0);
        _this.adClaimBtnOriginalPos = null;
        _this.claimBtnOriginalPos = null;
        _this.skipClaimDot = false;
        _this._rewardConfig = null;
        _this.animSkeleton = null;
        return _this;
    }
    Object.defineProperty(TaskRewardView.prototype, "getAnimSkeleton", {
        get: function () {
            return this.animSkeleton;
        },
        enumerable: false,
        configurable: true
    });
    TaskRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
    };
    TaskRewardView.prototype.showTaskReward = function (t) {
        this._stage = t;
        this.issueRewardAndAdvance();
        DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.Completed_DialogDisplayed, t);
        this.resetNodes();
        var e = TaskModel_1.TaskModel.getInstance().getStageBoxData(this._stage);
        e && this.initRewardConfig(e);
        this.showBgMask(150);
        this.playInAnim();
        this.playClaimBtnPopAnimation();
    };
    TaskRewardView.prototype.initComponents = function () {
        var t = this;
        if (cc.isValid(this.animSkeleton)) {
            cc.isValid(this.rewardsTip) && (this.rewardsTip.active = false);
            cc.isValid(this.rewardsTip1) && (this.rewardsTip1.active = false);
            cc.isValid(this.adClaimBtn) && (this.adClaimBtnOriginalPos = this.adClaimBtn.position.clone());
            cc.isValid(this.claimBtn) && (this.claimBtnOriginalPos = this.claimBtn.position.clone());
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.animSkeleton.node);
            this.animProxy.reset("");
            this.animProxy.markReady("");
            this.animSkeleton.setEventListener(function (e, a) {
                "event_rewards" === a.data.name && t.onOpenAnimFinished();
            });
            this.addBgNode();
        }
    };
    TaskRewardView.prototype.initRewardConfig = function (t) {
        var e, a = this;
        this.hideAllRewardNodes();
        this._rewardConfig = t;
        this._adScale = t.IsMultiple ? 2 : 1;
        var o = function o(t, e, o) {
            if (t && e) {
                a.animProxy.attachNode("hook_icon_" + o, function () {
                    return t;
                });
                a.animProxy.attachNode("hook_num_" + o, function () {
                    return e;
                });
            }
        };
        this.showRewardsNodes = [];
        for (var i = 0; i < t.Items.length; i++) {
            var r = t.Items[i], n = t.Counts[i], s = this.getRewardNodes(r), l = s.icon, c = s.value;
            if (l && c) {
                c.getComponent(cc.Label).string = String(n);
                this.showRewardsNodes.push(l, c);
                o(l, c, i + 1);
            }
        }
        this._rewardCount = t.Items.length;
        if (cc.isValid(this.adClaimBtn)) {
            var p = this.getAdScale();
            I18NStrings_1.default.setText(null === (e = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim x" + p, "Common_Reward_Claim_Ads", [p]);
        }
    };
    TaskRewardView.prototype.getAdScale = function () {
        return this._adScale;
    };
    TaskRewardView.prototype.getAdBtnScale = function () {
        return 1;
    };
    TaskRewardView.prototype.getRewardNodes = function (t) {
        switch (t) {
            case IUserData_1.EItemType.Hint:
                return {
                    icon: this.hintIcon,
                    value: this.hintValue
                };
            case IUserData_1.EItemType.Shuffle:
                return {
                    icon: this.refreshIcon,
                    value: this.refreshValue
                };
            case IUserData_1.EItemType.Undo:
                return {
                    icon: this.undoIcon,
                    value: this.undoValue
                };
        }
        return {
            icon: null,
            value: null
        };
    };
    TaskRewardView.prototype.hideAllRewardNodes = function () {
        this.refreshIcon.active = false;
        this.refreshValue.active = false;
        this.hintIcon.active = false;
        this.hintValue.active = false;
        this.undoIcon.active = false;
        this.undoValue.active = false;
    };
    TaskRewardView.prototype.addBgNode = function () {
        var t = new cc.Node("bg");
        BaseSprite_1.default.refreshWithNode(t, "texture/win/result_mask");
        t.setContentSize(1080, 1920);
        this.node.addChild(t);
        t.setSiblingIndex(0);
        t.addComponent(cc.Widget);
        t.getComponent(cc.Widget).isAlignTop = true;
        t.getComponent(cc.Widget).isAlignBottom = true;
        t.getComponent(cc.Widget).isAlignLeft = true;
        t.getComponent(cc.Widget).isAlignRight = true;
        t.getComponent(cc.Widget).top = 0;
        t.getComponent(cc.Widget).bottom = 0;
        t.getComponent(cc.Widget).left = 0;
        t.getComponent(cc.Widget).right = 0;
        Adapter_1.default.ignoreSafeRect(t);
    };
    TaskRewardView.prototype.resetNodes = function () {
        cc.isValid(this.rewardsTip) && (this.rewardsTip.opacity = 255);
        cc.isValid(this.rewardsTip1) && (this.rewardsTip1.opacity = 0);
        [this.refreshIcon, this.refreshValue, this.hintIcon, this.hintValue, this.undoIcon, this.undoValue, this.claimBtn, this.adClaimBtn, this.rewardsTip, this.rewardsTip1].forEach(function (t) {
            cc.isValid(t) && (t.active = false);
        });
        if (cc.isValid(this.claimBtn)) {
            this.claimBtn.scale = 0.6;
            this.claimBtn.opacity = 0;
            this.claimBtnOriginalPos && this.claimBtn.setPosition(this.claimBtnOriginalPos);
        }
        var t = this.getAdBtnScale();
        if (cc.isValid(this.adClaimBtn)) {
            this.adClaimBtn.scale = 0.6 * t;
            this.adClaimBtn.opacity = 0;
            this.adClaimBtnOriginalPos && this.adClaimBtn.setPosition(this.adClaimBtnOriginalPos);
        }
        this.skipClaimDot = false;
    };
    TaskRewardView.prototype.getInAnimName = function (t, e) {
        return "in_" + C[t] + "_" + w[e];
    };
    TaskRewardView.prototype.getIdleAnimName = function (t) {
        switch (t) {
            case 1:
                return "idle_2";
            case 2:
                return "idle_1";
            case 3:
                return "idle_3";
        }
        return "idle_1";
    };
    TaskRewardView.prototype.playInAnim = function () {
        var t = this;
        if (cc.isValid(this.animSkeleton)) {
            var e = this.getInAnimName(this._stage, this._rewardCount);
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animProxy.setAnimation(e, 1, function () {
                t.playIdleAnim();
            });
            cc.isValid(this.rewardsTip) && this.playTextAnim(this.rewardsTip);
            cc.isValid(this.rewardsTip1) && this.playTextFadeOut(this.rewardsTip1);
        }
    };
    TaskRewardView.prototype.onOpenAnimFinished = function () {
        var t, e;
        try {
            for (var a = __values(this.showRewardsNodes), o = a.next(); !o.done; o = a.next()) {
                var i = o.value;
                cc.isValid(i) && (i.active = true);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                o && !o.done && (e = a.return) && e.call(a);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    TaskRewardView.prototype.playIdleAnim = function () {
        if (cc.isValid(this.animSkeleton)) {
            var t = this.getIdleAnimName(this._rewardCount);
            this.animProxy.setAnimation(t, -1);
        }
    };
    TaskRewardView.prototype.registerButtons = function () {
        cc.isValid(this.claimBtn) && this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        cc.isValid(this.adClaimBtn) && this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
    };
    TaskRewardView.prototype.playClaimBtnPopAnimation = function () {
        var t = this;
        if (cc.isValid(this.claimBtn)) {
            var e = this.getAdBtnScale(), a = cc.tween().to(0.2, {
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
            }), i = CommonUtils_1.isNetworkAvailable(), r = this.getAdScale() > 1, n = 1.93;
            if (i && r && cc.isValid(this.adClaimBtn)) {
                cc.Tween.stopAllByTarget(this.adClaimBtn);
                this.adClaimBtn.active = false;
                this.adClaimBtn.scale = 0.6 * e;
                this.adClaimBtn.opacity = 0;
                cc.tween(this.adClaimBtn).delay(1.73).call(function () {
                    cc.isValid(t.adClaimBtn) && (t.adClaimBtn.active = true);
                }).then(o.clone()).start();
                DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.OutGameMotivation);
            }
            else {
                this.claimBtn.setPosition(this.centerBtnPos);
                n = 1.73;
            }
            cc.Tween.stopAllByTarget(this.claimBtn);
            this.claimBtn.active = false;
            this.claimBtn.scale = 0.6;
            this.claimBtn.opacity = 0;
            cc.tween(this.claimBtn).delay(n).call(function () {
                cc.isValid(t.claimBtn) && (t.claimBtn.active = true);
            }).then(a.clone()).start();
        }
    };
    TaskRewardView.prototype.onAdClaimBtnClick = function () {
        var t = this;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, DGameAdShow_1.EAdPosition.OutGameMotivation);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.Completed_ClaimRewardAd, this._stage, {
            adScale: this.getAdScale()
        });
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.OutGameMotivation, {
            onSuccess: function () {
                t.onAdSuccess();
            },
            onFailed: function () { }
        });
    };
    TaskRewardView.prototype.onAdSuccess = function () {
        var t = this;
        if (this.node && cc.isValid(this.node)) {
            TaskModel_1.TaskModel.getInstance().triggerStageReward(this._stage, this.getAdScale());
            mj.triggerInternalEvent("Chest_AdClose", this, [{
                    refreshIcon: this.refreshIcon,
                    refreshValue: this.refreshValue,
                    hintIcon: this.hintIcon,
                    hintValue: this.hintValue,
                    adClaimBtn: this.adClaimBtn,
                    claimBtn: this.claimBtn,
                    adScale: this.getAdScale(),
                    onClose: function () {
                        return t.hidePanel();
                    }
                }]) || this.hidePanel();
        }
    };
    TaskRewardView.prototype.showAdRewards = function () {
        if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.claimBtn.setPosition(this.centerBtnPos);
            this.adClaimBtn.active = false;
            this.skipClaimDot = true;
            if (this._rewardConfig)
                for (var t = this.getAdScale(), e = 0; e < this._rewardConfig.Items.length; e++) {
                    var a = this._rewardConfig.Items[e], o = this._rewardConfig.Counts[e], i = this.getRewardNodes(a).value;
                    i && (i.getComponent(cc.Label).string = String(o * t));
                }
        }
    };
    TaskRewardView.prototype.onClaimBtnClick = function () {
        var t = this.claimBtn;
        if (cc.isValid(t))
            if (this.skipClaimDot)
                this.hidePanel();
            else {
                DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, false);
                DGameBtnClick_1.DotGameBtnClick.dotDailyTask(DGameBtnClick_1.EDailyTaskClickType.Completed_ClaimReward, this._stage);
                this.hidePanel();
            }
    };
    TaskRewardView.prototype.issueRewardAndAdvance = function () {
        var t = TaskModel_1.TaskModel.getInstance();
        t.triggerStageReward(this._stage);
        t.nextStage(this._stage);
    };
    TaskRewardView.prototype.hidePanel = function () {
        var t, e = this;
        null === (t = this.delegate) || void 0 === t || t.viewDoAction("advanceToNextStage");
        if (cc.isValid(this.node)) {
            this.hideBgMask();
            cc.tween(this.node).to(0.2, {
                scale: 1,
                opacity: 255
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: 1.05,
                opacity: 255
            }, {
                easing: cc.easing.sineOut
            }).to(0.13, {
                scale: 0.3,
                opacity: 0
            }, {
                easing: cc.easing.sineOut
            }).call(function () {
                e.node.scale = 1;
                e.node.opacity = 255;
                e.node.active = false;
            }).start();
        }
        else
            this.node.active = false;
    };
    TaskRewardView.prototype.playTextAnim = function (t) {
        var e = t;
        if (cc.isValid(e)) {
            cc.Tween.stopAllByTarget(e);
            cc.tween(e).delay(0.5).call(function () {
                e.scale = 0.3;
                e.active = true;
            }).to(0.2, {
                scale: 1.3
            }, {
                easing: cc.easing.sineOut
            }).to(0.17, {
                scale: 0.9
            }, {
                easing: cc.easing.sineInOut
            }).to(0.13, {
                scale: 1
            }, {
                easing: cc.easing.sineInOut
            }).start();
        }
    };
    TaskRewardView.prototype.playTextFadeOut = function (t) {
        var e = t;
        if (cc.isValid(e)) {
            cc.Tween.stopAllByTarget(e);
            var a = cc.tween(e).delay(0.5).call(function () {
                e.opacity = 0;
                e.scale = 0.3;
                e.active = true;
            }).to(0.2, {
                scale: 1.3
            }, {
                easing: cc.easing.sineOut
            }).to(0.17, {
                opacity: 50,
                scale: 0.9
            }, {
                easing: cc.easing.sineInOut
            }).to(0.13, {
                scale: 1
            }, {
                easing: cc.easing.sineInOut
            }), o = cc.tween(e).delay(0.87).to(0.6, {
                opacity: 0
            }, {
                easing: cc.easing.sineInOut
            });
            a.start();
            o.start();
        }
    };
    TaskRewardView.prototype.showBgMask = function (t) {
        if (t === void 0) { t = 150; }
        var e = this.node;
        if (cc.isValid(e))
            if (cc.isValid(this._bgMask)) {
                this._bgMask.active = true;
                this._bgMask.opacity = 0;
                cc.Tween.stopAllByTarget(this._bgMask);
                cc.tween(this._bgMask).to(0.2, {
                    opacity: t
                }, {
                    easing: cc.easing.sineOut
                }).start();
            }
            else {
                var a = CommonUtils_1.createSingleColorScreenNode();
                a.name = "TaskRewardBgMask";
                a.opacity = 0;
                a.zIndex = -1;
                a.parent = e;
                a.addComponent(cc.BlockInputEvents);
                a.on(cc.Node.EventType.TOUCH_END, function (t) {
                    t.stopPropagation();
                }, a, true);
                this._bgMask = a;
                cc.tween(a).to(0.2, {
                    opacity: t
                }, {
                    easing: cc.easing.sineOut
                }).start();
            }
    };
    TaskRewardView.prototype.hideBgMask = function () {
        var t = this._bgMask;
        if (cc.isValid(t)) {
            cc.Tween.stopAllByTarget(t);
            cc.tween(t).to(0.16, {
                opacity: 0
            }, {
                easing: cc.easing.sineOut
            }).call(function () {
                cc.isValid(t) && (t.active = false);
            }).start();
        }
    };
    TaskRewardView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (cc.isValid(this._bgMask)) {
            this._bgMask.removeFromParent();
            this._bgMask = null;
        }
    };
    TaskRewardView.prefabUrl = "prefabs/task/TaskReward";
    __decorate([
        mj.node("RefreshIcon")
    ], TaskRewardView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], TaskRewardView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], TaskRewardView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("HintValue")
    ], TaskRewardView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("UndoIcon")
    ], TaskRewardView.prototype, "undoIcon", void 0);
    __decorate([
        mj.node("UndoValue")
    ], TaskRewardView.prototype, "undoValue", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], TaskRewardView.prototype, "rewardsTip", void 0);
    __decorate([
        mj.node("RewardsTip1")
    ], TaskRewardView.prototype, "rewardsTip1", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], TaskRewardView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], TaskRewardView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], TaskRewardView.prototype, "animSkeleton", void 0);
    __decorate([
        mj.traitEvent("TaskRwdVw_getAdScale")
    ], TaskRewardView.prototype, "getAdScale", null);
    __decorate([
        mj.traitEvent("TaskRwdVw_getAdBtnScale")
    ], TaskRewardView.prototype, "getAdBtnScale", null);
    __decorate([
        mj.traitEvent("TaskReward_hidePanel")
    ], TaskRewardView.prototype, "hidePanel", null);
    TaskRewardView = __decorate([
        mj.class
    ], TaskRewardView);
    return TaskRewardView;
}(BaseUI_1.default));
exports.default = TaskRewardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy92aWV3L1Rhc2tSZXdhcmRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsZ0RBQStDO0FBQy9DLCtFQUFrSDtBQUNsSCw0RUFBdUU7QUFDdkUsdUVBQTZGO0FBQzdGLGlFQUE0RDtBQUM1RCw4RUFBeUU7QUFDekUsMkZBQXFGO0FBQ3JGLGdFQUErRDtBQUMvRCxtRUFBOEQ7QUFDOUQsNEVBQTJFO0FBQzNFLHNFQUF1RTtBQUN2RSxrRkFBbUY7QUFDbkYsc0ZBQXVGO0FBQ3ZGLDhFQUF5RTtBQUN6RSxJQUFJLENBQUMsR0FBRztJQUNOLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztDQUNMLENBQUM7QUFDRixJQUFJLENBQUMsR0FBRztJQUNOLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztDQUNMLENBQUM7QUFFRjtJQUE0QyxrQ0FBTTtJQUFsRDtRQUFBLHFFQThkQztRQTVkQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ2hDLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsc0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcs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O0lBRTVCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7c0RBQ1U7SUFZaEM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO3dEQUNOO0lBeUUvQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7b0RBR3JDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3VEQUd4QztJQTZPRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7bURBNEJyQztJQXZYa0IsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSztPQUNZLGNBQWMsQ0E4ZGxDO0lBQUQscUJBQUM7Q0E5ZEQsQUE4ZEMsQ0E5ZDJDLGdCQUFNLEdBOGRqRDtrQkE5ZG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9UYXNrTW9kZWwnO1xuaW1wb3J0IHsgaXNOZXR3b3JrQXZhaWxhYmxlLCBjcmVhdGVTaW5nbGVDb2xvclNjcmVlbk5vZGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFRGFpbHlUYXNrQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgQWRhcHRlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9BZGFwdGVyJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVJdGVtVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvdXNlci9JVXNlckRhdGEnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90QWRWaXNpdCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RBZFZpc2l0JztcbmltcG9ydCB7IERvdEFkUmV3YXJkRW50ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBEb3RHYW1lQWRTaG93U3RhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbnZhciB3ID0ge1xuICAxOiAzLFxuICAyOiAyLFxuICAzOiA0XG59O1xudmFyIEMgPSB7XG4gIDE6IDMsXG4gIDI6IDIsXG4gIDM6IDFcbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tSZXdhcmRWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoSWNvblwiKVxuICByZWZyZXNoSWNvbjogXCJSZWZyZXNoSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVmFsdWVcIilcbiAgcmVmcmVzaFZhbHVlOiBcIlJlZnJlc2hWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50SWNvblwiKVxuICBoaW50SWNvbjogXCJIaW50SWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50VmFsdWVcIilcbiAgaGludFZhbHVlOiBcIkhpbnRWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJVbmRvSWNvblwiKVxuICB1bmRvSWNvbjogXCJVbmRvSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJVbmRvVmFsdWVcIilcbiAgdW5kb1ZhbHVlOiBcIlVuZG9WYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZXdhcmRzVGlwXCIpXG4gIHJld2FyZHNUaXA6IFwiUmV3YXJkc1RpcFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZXdhcmRzVGlwMVwiKVxuICByZXdhcmRzVGlwMTogXCJSZXdhcmRzVGlwMVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJDbGFpbUJ0blwiKVxuICBjbGFpbUJ0bjogXCJDbGFpbUJ0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJBZENsYWltQnRuXCIpXG4gIGFkQ2xhaW1CdG46IFwiQWRDbGFpbUJ0blwiID0gbnVsbDtcbiAgX2JnTWFzayA9IG51bGw7XG4gIF9zdGFnZSA9IDE7XG4gIHNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgX3Jld2FyZENvdW50ID0gMDtcbiAgX2FkU2NhbGUgPSAxO1xuICBjZW50ZXJCdG5Qb3MgPSBjYy52MygwLCAtNDEwLCAwKTtcbiAgYWRDbGFpbUJ0bk9yaWdpbmFsUG9zID0gbnVsbDtcbiAgY2xhaW1CdG5PcmlnaW5hbFBvcyA9IG51bGw7XG4gIHNraXBDbGFpbURvdCA9IGZhbHNlO1xuICBfcmV3YXJkQ29uZmlnID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkJveEFuaW1cIiwgc3AuU2tlbGV0b24pXG4gIGFuaW1Ta2VsZXRvbjogXCJCb3hBbmltXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3Rhc2svVGFza1Jld2FyZFwiO1xuICBnZXQgZ2V0QW5pbVNrZWxldG9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1Ta2VsZXRvbjtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG4gIH1cbiAgc2hvd1Rhc2tSZXdhcmQodCkge1xuICAgIHRoaXMuX3N0YWdlID0gdDtcbiAgICB0aGlzLmlzc3VlUmV3YXJkQW5kQWR2YW5jZSgpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3REYWlseVRhc2soRURhaWx5VGFza0NsaWNrVHlwZS5Db21wbGV0ZWRfRGlhbG9nRGlzcGxheWVkLCB0KTtcbiAgICB0aGlzLnJlc2V0Tm9kZXMoKTtcbiAgICB2YXIgZSA9IFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFN0YWdlQm94RGF0YSh0aGlzLl9zdGFnZSk7XG4gICAgZSAmJiB0aGlzLmluaXRSZXdhcmRDb25maWcoZSk7XG4gICAgdGhpcy5zaG93QmdNYXNrKDE1MCk7XG4gICAgdGhpcy5wbGF5SW5BbmltKCk7XG4gICAgdGhpcy5wbGF5Q2xhaW1CdG5Qb3BBbmltYXRpb24oKTtcbiAgfVxuICBpbml0Q29tcG9uZW50cygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pKSB7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMucmV3YXJkc1RpcCkgJiYgKHRoaXMucmV3YXJkc1RpcC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMucmV3YXJkc1RpcDEpICYmICh0aGlzLnJld2FyZHNUaXAxLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiAodGhpcy5hZENsYWltQnRuT3JpZ2luYWxQb3MgPSB0aGlzLmFkQ2xhaW1CdG4ucG9zaXRpb24uY2xvbmUoKSk7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pICYmICh0aGlzLmNsYWltQnRuT3JpZ2luYWxQb3MgPSB0aGlzLmNsYWltQnRuLnBvc2l0aW9uLmNsb25lKCkpO1xuICAgICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYW5pbVNrZWxldG9uLm5vZGUpO1xuICAgICAgdGhpcy5hbmltUHJveHkucmVzZXQoXCJcIik7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLmFuaW1Ta2VsZXRvbi5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChlLCBhKSB7XG4gICAgICAgIFwiZXZlbnRfcmV3YXJkc1wiID09PSBhLmRhdGEubmFtZSAmJiB0Lm9uT3BlbkFuaW1GaW5pc2hlZCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFkZEJnTm9kZSgpO1xuICAgIH1cbiAgfVxuICBpbml0UmV3YXJkQ29uZmlnKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIGEgPSB0aGlzO1xuICAgIHRoaXMuaGlkZUFsbFJld2FyZE5vZGVzKCk7XG4gICAgdGhpcy5fcmV3YXJkQ29uZmlnID0gdDtcbiAgICB0aGlzLl9hZFNjYWxlID0gdC5Jc011bHRpcGxlID8gMiA6IDE7XG4gICAgdmFyIG8gPSBmdW5jdGlvbiBvKHQsIGUsIG8pIHtcbiAgICAgIGlmICh0ICYmIGUpIHtcbiAgICAgICAgYS5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfaWNvbl9cIiArIG8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGEuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX251bV9cIiArIG8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQuSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByID0gdC5JdGVtc1tpXSxcbiAgICAgICAgbiA9IHQuQ291bnRzW2ldLFxuICAgICAgICBzID0gdGhpcy5nZXRSZXdhcmROb2RlcyhyKSxcbiAgICAgICAgbCA9IHMuaWNvbixcbiAgICAgICAgYyA9IHMudmFsdWU7XG4gICAgICBpZiAobCAmJiBjKSB7XG4gICAgICAgIGMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcobik7XG4gICAgICAgIHRoaXMuc2hvd1Jld2FyZHNOb2Rlcy5wdXNoKGwsIGMpO1xuICAgICAgICBvKGwsIGMsIGkgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcmV3YXJkQ291bnQgPSB0Lkl0ZW1zLmxlbmd0aDtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pKSB7XG4gICAgICB2YXIgcCA9IHRoaXMuZ2V0QWRTY2FsZSgpO1xuICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dChudWxsID09PSAoZSA9IHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5ub2RlLCBcIkNsYWltIHhcIiArIHAsIFwiQ29tbW9uX1Jld2FyZF9DbGFpbV9BZHNcIiwgW3BdKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrUndkVndfZ2V0QWRTY2FsZVwiKVxuICBnZXRBZFNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9hZFNjYWxlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGFza1J3ZFZ3X2dldEFkQnRuU2NhbGVcIilcbiAgZ2V0QWRCdG5TY2FsZSgpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBnZXRSZXdhcmROb2Rlcyh0KSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIEVJdGVtVHlwZS5IaW50OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMuaGludEljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaGludFZhbHVlXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVJdGVtVHlwZS5TaHVmZmxlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMucmVmcmVzaEljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMucmVmcmVzaFZhbHVlXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVJdGVtVHlwZS5VbmRvOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMudW5kb0ljb24sXG4gICAgICAgICAgdmFsdWU6IHRoaXMudW5kb1ZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpY29uOiBudWxsLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9O1xuICB9XG4gIGhpZGVBbGxSZXdhcmROb2RlcygpIHtcbiAgICB0aGlzLnJlZnJlc2hJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVmcmVzaFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGludEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oaW50VmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy51bmRvSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnVuZG9WYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBhZGRCZ05vZGUoKSB7XG4gICAgdmFyIHQgPSBuZXcgY2MuTm9kZShcImJnXCIpO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQsIFwidGV4dHVyZS93aW4vcmVzdWx0X21hc2tcIik7XG4gICAgdC5zZXRDb250ZW50U2l6ZSgxMDgwLCAxOTIwKTtcbiAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodCk7XG4gICAgdC5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgdC5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduUmlnaHQgPSB0cnVlO1xuICAgIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudG9wID0gMDtcbiAgICB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmJvdHRvbSA9IDA7XG4gICAgdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5sZWZ0ID0gMDtcbiAgICB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLnJpZ2h0ID0gMDtcbiAgICBBZGFwdGVyLmlnbm9yZVNhZmVSZWN0KHQpO1xuICB9XG4gIHJlc2V0Tm9kZXMoKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnJld2FyZHNUaXApICYmICh0aGlzLnJld2FyZHNUaXAub3BhY2l0eSA9IDI1NSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnJld2FyZHNUaXAxKSAmJiAodGhpcy5yZXdhcmRzVGlwMS5vcGFjaXR5ID0gMCk7XG4gICAgW3RoaXMucmVmcmVzaEljb24sIHRoaXMucmVmcmVzaFZhbHVlLCB0aGlzLmhpbnRJY29uLCB0aGlzLmhpbnRWYWx1ZSwgdGhpcy51bmRvSWNvbiwgdGhpcy51bmRvVmFsdWUsIHRoaXMuY2xhaW1CdG4sIHRoaXMuYWRDbGFpbUJ0biwgdGhpcy5yZXdhcmRzVGlwLCB0aGlzLnJld2FyZHNUaXAxXS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBjYy5pc1ZhbGlkKHQpICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB9KTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSkge1xuICAgICAgdGhpcy5jbGFpbUJ0bi5zY2FsZSA9IDAuNjtcbiAgICAgIHRoaXMuY2xhaW1CdG4ub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmNsYWltQnRuT3JpZ2luYWxQb3MgJiYgdGhpcy5jbGFpbUJ0bi5zZXRQb3NpdGlvbih0aGlzLmNsYWltQnRuT3JpZ2luYWxQb3MpO1xuICAgIH1cbiAgICB2YXIgdCA9IHRoaXMuZ2V0QWRCdG5TY2FsZSgpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikpIHtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5zY2FsZSA9IDAuNiAqIHQ7XG4gICAgICB0aGlzLmFkQ2xhaW1CdG4ub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmFkQ2xhaW1CdG5PcmlnaW5hbFBvcyAmJiB0aGlzLmFkQ2xhaW1CdG4uc2V0UG9zaXRpb24odGhpcy5hZENsYWltQnRuT3JpZ2luYWxQb3MpO1xuICAgIH1cbiAgICB0aGlzLnNraXBDbGFpbURvdCA9IGZhbHNlO1xuICB9XG4gIGdldEluQW5pbU5hbWUodCwgZSkge1xuICAgIHJldHVybiBcImluX1wiICsgQ1t0XSArIFwiX1wiICsgd1tlXTtcbiAgfVxuICBnZXRJZGxlQW5pbU5hbWUodCkge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gXCJpZGxlXzJcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIFwiaWRsZV8xXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcImlkbGVfM1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCJpZGxlXzFcIjtcbiAgfVxuICBwbGF5SW5BbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFuaW1Ta2VsZXRvbikpIHtcbiAgICAgIHZhciBlID0gdGhpcy5nZXRJbkFuaW1OYW1lKHRoaXMuX3N0YWdlLCB0aGlzLl9yZXdhcmRDb3VudCk7XG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDAuMjUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5Cb3gpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihlLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucGxheUlkbGVBbmltKCk7XG4gICAgICB9KTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5yZXdhcmRzVGlwKSAmJiB0aGlzLnBsYXlUZXh0QW5pbSh0aGlzLnJld2FyZHNUaXApO1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLnJld2FyZHNUaXAxKSAmJiB0aGlzLnBsYXlUZXh0RmFkZU91dCh0aGlzLnJld2FyZHNUaXAxKTtcbiAgICB9XG4gIH1cbiAgb25PcGVuQW5pbUZpbmlzaGVkKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBhID0gX192YWx1ZXModGhpcy5zaG93UmV3YXJkc05vZGVzKSwgbyA9IGEubmV4dCgpOyAhby5kb25lOyBvID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIGkgPSBvLnZhbHVlO1xuICAgICAgICBjYy5pc1ZhbGlkKGkpICYmIChpLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBvICYmICFvLmRvbmUgJiYgKGUgPSBhLnJldHVybikgJiYgZS5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXlJZGxlQW5pbSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFuaW1Ta2VsZXRvbikpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nZXRJZGxlQW5pbU5hbWUodGhpcy5fcmV3YXJkQ291bnQpO1xuICAgICAgdGhpcy5hbmltUHJveHkuc2V0QW5pbWF0aW9uKHQsIC0xKTtcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJCdXR0b25zKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuY2xhaW1CdG4sIHRoaXMub25DbGFpbUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5hZENsYWltQnRuLCB0aGlzLm9uQWRDbGFpbUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIHBsYXlDbGFpbUJ0blBvcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikpIHtcbiAgICAgIHZhciBlID0gdGhpcy5nZXRBZEJ0blNjYWxlKCksXG4gICAgICAgIGEgPSBjYy50d2VlbigpLnRvKDAuMiwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1LFxuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgICAgICB9KS50bygwLjE3LCB7XG4gICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgICAgfSksXG4gICAgICAgIG8gPSBjYy50d2VlbigpLnRvKDAuMiwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1ICogZSxcbiAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgfSkudG8oMC4xNywge1xuICAgICAgICAgIHNjYWxlOiBlLFxuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgIH0pLFxuICAgICAgICBpID0gaXNOZXR3b3JrQXZhaWxhYmxlKCksXG4gICAgICAgIHIgPSB0aGlzLmdldEFkU2NhbGUoKSA+IDEsXG4gICAgICAgIG4gPSAxLjkzO1xuICAgICAgaWYgKGkgJiYgciAmJiBjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYWRDbGFpbUJ0bik7XG4gICAgICAgIHRoaXMuYWRDbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZENsYWltQnRuLnNjYWxlID0gMC42ICogZTtcbiAgICAgICAgdGhpcy5hZENsYWltQnRuLm9wYWNpdHkgPSAwO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmFkQ2xhaW1CdG4pLmRlbGF5KDEuNzMpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNjLmlzVmFsaWQodC5hZENsYWltQnRuKSAmJiAodC5hZENsYWltQnRuLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgICB9KS50aGVuKG8uY2xvbmUoKSkuc3RhcnQoKTtcbiAgICAgICAgRG90QWRSZXdhcmRFbnRlci5kb3QodHJ1ZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFpbUJ0bi5zZXRQb3NpdGlvbih0aGlzLmNlbnRlckJ0blBvcyk7XG4gICAgICAgIG4gPSAxLjczO1xuICAgICAgfVxuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY2xhaW1CdG4pO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uc2NhbGUgPSAwLjY7XG4gICAgICB0aGlzLmNsYWltQnRuLm9wYWNpdHkgPSAwO1xuICAgICAgY2MudHdlZW4odGhpcy5jbGFpbUJ0bikuZGVsYXkobikuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodC5jbGFpbUJ0bikgJiYgKHQuY2xhaW1CdG4uYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9KS50aGVuKGEuY2xvbmUoKSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgb25BZENsYWltQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCB0cnVlKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdERhaWx5VGFzayhFRGFpbHlUYXNrQ2xpY2tUeXBlLkNvbXBsZXRlZF9DbGFpbVJld2FyZEFkLCB0aGlzLl9zdGFnZSwge1xuICAgICAgYWRTY2FsZTogdGhpcy5nZXRBZFNjYWxlKClcbiAgICB9KTtcbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25BZFN1Y2Nlc3MoKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKCkge31cbiAgICB9KTtcbiAgfVxuICBvbkFkU3VjY2VzcygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMubm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIFRhc2tNb2RlbC5nZXRJbnN0YW5jZSgpLnRyaWdnZXJTdGFnZVJld2FyZCh0aGlzLl9zdGFnZSwgdGhpcy5nZXRBZFNjYWxlKCkpO1xuICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJDaGVzdF9BZENsb3NlXCIsIHRoaXMsIFt7XG4gICAgICAgIHJlZnJlc2hJY29uOiB0aGlzLnJlZnJlc2hJY29uLFxuICAgICAgICByZWZyZXNoVmFsdWU6IHRoaXMucmVmcmVzaFZhbHVlLFxuICAgICAgICBoaW50SWNvbjogdGhpcy5oaW50SWNvbixcbiAgICAgICAgaGludFZhbHVlOiB0aGlzLmhpbnRWYWx1ZSxcbiAgICAgICAgYWRDbGFpbUJ0bjogdGhpcy5hZENsYWltQnRuLFxuICAgICAgICBjbGFpbUJ0bjogdGhpcy5jbGFpbUJ0bixcbiAgICAgICAgYWRTY2FsZTogdGhpcy5nZXRBZFNjYWxlKCksXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdC5oaWRlUGFuZWwoKTtcbiAgICAgICAgfVxuICAgICAgfV0pIHx8IHRoaXMuaGlkZVBhbmVsKCk7XG4gICAgfVxuICB9XG4gIHNob3dBZFJld2FyZHMoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pKSB7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uc2V0UG9zaXRpb24odGhpcy5jZW50ZXJCdG5Qb3MpO1xuICAgICAgdGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5za2lwQ2xhaW1Eb3QgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuX3Jld2FyZENvbmZpZykgZm9yICh2YXIgdCA9IHRoaXMuZ2V0QWRTY2FsZSgpLCBlID0gMDsgZSA8IHRoaXMuX3Jld2FyZENvbmZpZy5JdGVtcy5sZW5ndGg7IGUrKykge1xuICAgICAgICB2YXIgYSA9IHRoaXMuX3Jld2FyZENvbmZpZy5JdGVtc1tlXSxcbiAgICAgICAgICBvID0gdGhpcy5fcmV3YXJkQ29uZmlnLkNvdW50c1tlXSxcbiAgICAgICAgICBpID0gdGhpcy5nZXRSZXdhcmROb2RlcyhhKS52YWx1ZTtcbiAgICAgICAgaSAmJiAoaS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyhvICogdCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkNsYWltQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNsYWltQnRuO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSBpZiAodGhpcy5za2lwQ2xhaW1Eb3QpIHRoaXMuaGlkZVBhbmVsKCk7ZWxzZSB7XG4gICAgICBEb3RBZFZpc2l0LmRvdEFkVmlzaXRSZXdhcmRBRChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwgZmFsc2UpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdERhaWx5VGFzayhFRGFpbHlUYXNrQ2xpY2tUeXBlLkNvbXBsZXRlZF9DbGFpbVJld2FyZCwgdGhpcy5fc3RhZ2UpO1xuICAgICAgdGhpcy5oaWRlUGFuZWwoKTtcbiAgICB9XG4gIH1cbiAgaXNzdWVSZXdhcmRBbmRBZHZhbmNlKCkge1xuICAgIHZhciB0ID0gVGFza01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgdC50cmlnZ2VyU3RhZ2VSZXdhcmQodGhpcy5fc3RhZ2UpO1xuICAgIHQubmV4dFN0YWdlKHRoaXMuX3N0YWdlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRhc2tSZXdhcmRfaGlkZVBhbmVsXCIpXG4gIGhpZGVQYW5lbCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB0aGlzO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQudmlld0RvQWN0aW9uKFwiYWR2YW5jZVRvTmV4dFN0YWdlXCIpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIHRoaXMuaGlkZUJnTWFzaygpO1xuICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsIHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICB9KS50bygwLjE3LCB7XG4gICAgICAgIHNjYWxlOiAxLjA1LFxuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICBzY2FsZTogMC4zLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICBlLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2UgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHBsYXlUZXh0QW5pbSh0KSB7XG4gICAgdmFyIGUgPSB0O1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoZSk7XG4gICAgICBjYy50d2VlbihlKS5kZWxheSgwLjUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnNjYWxlID0gMC4zO1xuICAgICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9KS50bygwLjIsIHtcbiAgICAgICAgc2NhbGU6IDEuM1xuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICB9KS50bygwLjE3LCB7XG4gICAgICAgIHNjYWxlOiAwLjlcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgICB9KS50bygwLjEzLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheVRleHRGYWRlT3V0KHQpIHtcbiAgICB2YXIgZSA9IHQ7XG4gICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICAgIHZhciBhID0gY2MudHdlZW4oZSkuZGVsYXkoMC41KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgIGUuc2NhbGUgPSAwLjM7XG4gICAgICAgICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KS50bygwLjIsIHtcbiAgICAgICAgICBzY2FsZTogMS4zXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgICAgICBvcGFjaXR5OiA1MCxcbiAgICAgICAgICBzY2FsZTogMC45XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICAgICAgfSksXG4gICAgICAgIG8gPSBjYy50d2VlbihlKS5kZWxheSgwLjg3KS50bygwLjYsIHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICAgICAgfSk7XG4gICAgICBhLnN0YXJ0KCk7XG4gICAgICBvLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIHNob3dCZ01hc2sodCA9IDE1MCkge1xuICAgIHZhciBlID0gdGhpcy5ub2RlO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSBpZiAoY2MuaXNWYWxpZCh0aGlzLl9iZ01hc2spKSB7XG4gICAgICB0aGlzLl9iZ01hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JnTWFzay5vcGFjaXR5ID0gMDtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9iZ01hc2spO1xuICAgICAgY2MudHdlZW4odGhpcy5fYmdNYXNrKS50bygwLjIsIHtcbiAgICAgICAgb3BhY2l0eTogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYSA9IGNyZWF0ZVNpbmdsZUNvbG9yU2NyZWVuTm9kZSgpO1xuICAgICAgYS5uYW1lID0gXCJUYXNrUmV3YXJkQmdNYXNrXCI7XG4gICAgICBhLm9wYWNpdHkgPSAwO1xuICAgICAgYS56SW5kZXggPSAtMTtcbiAgICAgIGEucGFyZW50ID0gZTtcbiAgICAgIGEuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICAgICAgYS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LCBhLCB0cnVlKTtcbiAgICAgIHRoaXMuX2JnTWFzayA9IGE7XG4gICAgICBjYy50d2VlbihhKS50bygwLjIsIHtcbiAgICAgICAgb3BhY2l0eTogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBoaWRlQmdNYXNrKCkge1xuICAgIHZhciB0ID0gdGhpcy5fYmdNYXNrO1xuICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodCk7XG4gICAgICBjYy50d2Vlbih0KS50bygwLjE2LCB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQodCkgJiYgKHQuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2JnTWFzaykpIHtcbiAgICAgIHRoaXMuX2JnTWFzay5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICB0aGlzLl9iZ01hc2sgPSBudWxsO1xuICAgIH1cbiAgfVxufSJdfQ==