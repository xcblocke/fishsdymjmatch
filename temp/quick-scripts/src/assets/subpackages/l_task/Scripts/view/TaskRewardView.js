"use strict";
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