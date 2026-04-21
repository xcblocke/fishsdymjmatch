"use strict";
cc._RF.push(module, 'e6367TacrNFrr1bul+1Qk5S', 'LevelBoxView');
// subpackages/l_levelBox/Scripts/LevelBoxView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var LevelBoxView = /** @class */ (function (_super) {
    __extends(LevelBoxView, _super);
    function LevelBoxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintValue = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.refreshIcon = null;
        _this.adClaimBtn = null;
        _this.claimBtn = null;
        _this.rewardTip = null;
        _this.rewardLevel = 1;
        _this.config = null;
        _this.rewardCount = 0;
        _this.visibleRewardNodes = [];
        _this.canClickBg = false;
        _this.clickCount = 0;
        _this.centerBtnPos = new cc.Vec3(0, 0, 0);
        _this.skipClaimDot = false;
        _this.animSkeleton = null;
        return _this;
    }
    Object.defineProperty(LevelBoxView.prototype, "getAnimSkeleton", {
        get: function () {
            return this.animSkeleton;
        },
        enumerable: false,
        configurable: true
    });
    LevelBoxView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
    };
    LevelBoxView.prototype.getRewardNodes = function (t) {
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
        }
    };
    LevelBoxView.prototype.viewDidLoad = function (t) {
        this.config = t.rewards;
        this.rewardLevel = t.level;
        this.rewardCount = this.config.items.length;
        this.initRewardUI();
        this.playOpenAnim();
        DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.OutGameMotivation);
        DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.DialogDisplayed);
    };
    LevelBoxView.prototype.initRewardUI = function () {
        var t, e;
        try {
            for (var i = __values([IUserData_1.EItemType.Hint, IUserData_1.EItemType.Shuffle]), o = i.next(); !o.done; o = i.next()) {
                var n = o.value, r = this.getRewardNodes(n), s = r.icon, l = r.value;
                l.getComponent(cc.Label).string = "0";
                s.active = false;
                l.active = false;
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
        this.hookRewardNodes();
        this.updateRewardLabel(false);
        this.updateBtnLabel();
        this.updateTipLabel();
    };
    LevelBoxView.prototype.updateRewardLabel = function (t) {
        for (var e = t ? this.config.adScale : 1, i = 0; i < this.config.items.length; i++) {
            var o = this.config.items[i], n = this.getRewardNodes(o.item).value, r = e * o.count;
            n.getComponent(cc.Label).string = r.toString();
        }
    };
    LevelBoxView.prototype.hookNodes = function (t, e, i) {
        this.animProxy.attachNode("hook_icon_" + i, function () {
            return t;
        });
        this.animProxy.attachNode("hook_num_" + i, function () {
            return e;
        });
    };
    LevelBoxView.prototype.hookRewardNodes = function () {
        this.visibleRewardNodes = [];
        for (var t = 0; t < this.config.items.length; t++) {
            var e = this.config.items[t], i = this.getRewardNodes(e.item), o = i.icon, n = i.value;
            this.hookNodes(o, n, t + 1);
            this.visibleRewardNodes.push(o, n);
        }
    };
    LevelBoxView.prototype.updateBtnLabel = function () {
        var t, e;
        I18NStrings_1.default.setText(null === (t = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim x" + this.config.adScale, "Common_Reward_Claim_Ads", [this.config.adScale]);
        I18NStrings_1.default.setText(null === (e = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim", "LeaderBoard_Reward_Claim");
    };
    LevelBoxView.prototype.updateTipLabel = function () {
        I18NStrings_1.default.setText(this.rewardTip, "Rewards", "Common_Reward_Title");
    };
    LevelBoxView.prototype.viewDidShow = function () {
        this.enableButtons();
    };
    LevelBoxView.prototype.registerButtons = function () {
        this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
        this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        this.OnButtonClick(this.node, {
            func: this.onBgClick.bind(this),
            ignoreClickAudio: true
        });
    };
    LevelBoxView.prototype.onBgClick = function () {
        var t;
        if (this.canClickBg) {
            this.clickCount++;
            this.clickCount >= 3 && (null === (t = this.delegate) || void 0 === t || t.close());
        }
    };
    LevelBoxView.prototype.disableButtons = function () {
        this.adClaimBtn.getComponent(cc.Button).interactable = false;
        this.claimBtn.getComponent(cc.Button).interactable = false;
    };
    LevelBoxView.prototype.enableButtons = function () {
        this.adClaimBtn.getComponent(cc.Button).interactable = true;
        this.claimBtn.getComponent(cc.Button).interactable = true;
    };
    LevelBoxView.prototype.onAdClaimBtnClick = function () {
        var t = this;
        this.disableButtons();
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, DGameAdShow_1.EAdPosition.OutGameMotivation);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.ClaimMultipleReward, this.config.adScale);
        if (AdManager_1.default.getInstance().checkVideoAdIsReady()) {
            this.canClickBg = true;
            mj.triggerInternalEvent("Chest_AdClkShow", this, []) || (this.node.parent.opacity = 0);
        }
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.OutGameMotivation, {
            onSuccess: function () {
                t.onAdSuccess();
            },
            onFailed: function (e) {
                t.onAdFailed(e);
            }
        });
    };
    LevelBoxView.prototype.onAdSuccess = function () {
        var t, e = this;
        if (this.node && cc.isValid(this.node)) {
            for (var i = UserModel_1.default.getInstance().getMainGameData().gameType, o = GameUtils_1.default.getInputAddPropType(i), n = this.config.adScale - 1, r = 0; r < this.config.items.length; r++) {
                var a = this.config.items[r], l = {
                    inputType: o,
                    propType: IUserData_1.ItemTypeKey[a.item],
                    num: a.count * n,
                    reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBoxAd,
                    reasonInfo: "主关卡宝箱奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
                };
                GameInteraction_1.GameInteraction.input(l);
            }
            mj.triggerInternalEvent("Chest_AdClose", this, [{
                    refreshIcon: this.refreshIcon,
                    refreshValue: this.refreshValue,
                    hintIcon: this.hintIcon,
                    hintValue: this.hintValue,
                    adClaimBtn: this.adClaimBtn,
                    claimBtn: this.claimBtn,
                    adScale: null === (t = this.config) || void 0 === t ? void 0 : t.adScale,
                    onClose: function () {
                        return e.hideAnim();
                    }
                }]) || this.hideAnim();
        }
    };
    LevelBoxView.prototype.showAdRewards = function (t) {
        if (t === void 0) { t = true; }
        var e, i, o, n;
        if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
            this.claimBtn.setPosition(this.centerBtnPos);
            this.adClaimBtn.active = false;
            this.claimBtn.getComponent(cc.Button).interactable = true;
            this.skipClaimDot = true;
            if (t) {
                var r = function r(t, e) {
                    if (cc.isValid(t)) {
                        var i = cc.instantiate(t);
                        i.parent = t.parent;
                        i.scale = t.scale;
                        i.angle = t.angle;
                        i.setPosition(t.position);
                        i.getComponent(cc.Label).string = String(e);
                        i.opacity = 0;
                        t.opacity = 255;
                        cc.tween(t).to(0.167, {
                            opacity: 0,
                            position: cc.v3(0, 30, 0)
                        }, {
                            easing: cc.easing.quadOut
                        }).start();
                        i.position = cc.v3(0, -37, 0);
                        var o = cc.tween().to(0.3, {
                            position: cc.v3(0, 3, 0)
                        }, {
                            easing: cc.easing.quadOut
                        }).to(0.1, {
                            position: cc.v3(0, 0, 0)
                        }, {
                            easing: cc.easing.quadIn
                        }), n = cc.tween().to(0.4, {
                            opacity: 255
                        }, {
                            easing: cc.easing.quadOut
                        });
                        cc.tween(i).parallel(o, n).start();
                    }
                };
                try {
                    for (var s = __values(this.config.items), l = s.next(); !l.done; l = s.next()) {
                        var c = l.value;
                        r(this.getRewardNodes(c.item).value, c.count * this.config.adScale);
                    }
                }
                catch (t) {
                    e = {
                        error: t
                    };
                }
                finally {
                    try {
                        l && !l.done && (i = s.return) && i.call(s);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
            }
            else
                try {
                    for (var p = __values(this.config.items), d = p.next(); !d.done; d = p.next()) {
                        c = d.value;
                        this.getRewardNodes(c.item).value.getComponent(cc.Label).string = String(c.count * this.config.adScale);
                    }
                }
                catch (t) {
                    o = {
                        error: t
                    };
                }
                finally {
                    try {
                        d && !d.done && (n = p.return) && n.call(p);
                    }
                    finally {
                        if (o)
                            throw o.error;
                    }
                }
        }
    };
    LevelBoxView.prototype.onAdFailed = function () {
        if (this.node && cc.isValid(this.node)) {
            this.enableButtons();
            cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
        }
    };
    LevelBoxView.prototype.onClaimBtnClick = function () {
        if (this.skipClaimDot)
            this.hideAnim();
        else {
            DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, false);
            DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.ClaimReward);
            this.hideAnim();
        }
    };
    LevelBoxView.prototype.initComponents = function () {
        this.centerBtnPos.addSelf(this.claimBtn.position);
        this.centerBtnPos.addSelf(this.adClaimBtn.position);
        this.centerBtnPos.multiplyScalar(0.5);
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.animSkeleton.node);
        this.animProxy.markReady("");
        this.hideNodes();
    };
    LevelBoxView.prototype.hideNodes = function () {
        if (cc.isValid(this.node)) {
            this.refreshIcon.active = false;
            this.refreshValue.active = false;
            this.hintIcon.active = false;
            this.hintValue.active = false;
            this.adClaimBtn.active = false;
            this.claimBtn.active = false;
            this.rewardTip.active = false;
        }
    };
    LevelBoxView.prototype.playOpenAnim = function () {
        this.hideNodes();
        this.playChestAppearAnim();
        this.playBtnAnim();
        this.playRewardsTipAnim();
    };
    LevelBoxView.prototype.getAdBtnScale = function () {
        return 1;
    };
    LevelBoxView.prototype.playOpenedAnim = function () {
        if (cc.isValid(this.node)) {
            this.hideAnim();
            cc.Tween.stopAllByTarget(this.adClaimBtn);
            cc.Tween.stopAllByTarget(this.claimBtn);
            cc.Tween.stopAllByTarget(this.rewardTip);
            var t = this.getAdBtnScale();
            if (this.isShowAdBtn()) {
                this.adClaimBtn.active = true;
                this.adClaimBtn.scale = t;
            }
            else
                this.claimBtn.setPosition(this.adClaimBtn.position);
            this.claimBtn.active = true;
            this.claimBtn.scale = 1;
            this.rewardTip.scale = 1;
            this.playRewardsAnim();
            this.showRewardNodes();
            this.rewardTip.active = true;
            this.rewardTip.scale = 1;
        }
    };
    LevelBoxView.prototype.playChestAppearAnim = function () {
        var t = this;
        if (cc.isValid(this.node)) {
            this.scheduleOnce(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }, 0.25);
            this.animSkeleton.setEventListener(null);
            this.animSkeleton.setEventListener(function (e, i) {
                "event_rewards" === i.data.name && t.showRewardNodes();
            });
            this.animProxy.setAnimation("in_" + this.rewardCount, 1, function () {
                t.playRewardsAnim();
            });
        }
    };
    LevelBoxView.prototype.playBtnAnim = function () {
        var t = this;
        if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            this.adClaimBtn.active = false;
            this.claimBtn.active = false;
            var e = this.getAdBtnScale();
            this.adClaimBtn.scale = 0.6 * e;
            this.claimBtn.scale = 0.6;
            cc.Tween.stopAllByTarget(this.adClaimBtn);
            cc.Tween.stopAllByTarget(this.claimBtn);
            var i = cc.tween().to(0.2, {
                scale: 1.05 * e
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: e
            }, {
                easing: cc.easing.quadIn
            }), o = cc.tween().to(0.2, {
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            }), n = 1.93;
            if (this.isShowAdBtn())
                cc.tween(this.adClaimBtn).sequence(cc.tween().delay(1.73), cc.tween(this.adClaimBtn).call(function () {
                    t.adClaimBtn.active = true;
                }), i.clone()).start();
            else {
                this.claimBtn.setPosition(this.adClaimBtn.position);
                n = 1.73;
            }
            cc.tween(this.claimBtn).sequence(cc.tween().delay(n), cc.tween(this.claimBtn).call(function () {
                t.claimBtn.active = true;
            }), o.clone()).start();
        }
    };
    LevelBoxView.prototype.isShowAdBtn = function () {
        return CommonUtils_1.isNetworkAvailable();
    };
    LevelBoxView.prototype.playRewardsTipAnim = function () {
        var t = this;
        cc.isValid(this.rewardTip) && cc.tween(this.rewardTip).delay(0.9).call(function () {
            if (cc.isValid(t.rewardTip)) {
                t.rewardTip.active = true;
                t.rewardTip.scale = 0.3;
            }
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
    LevelBoxView.prototype.showRewardNodes = function () {
        var t, e;
        if (this.visibleRewardNodes && !(this.visibleRewardNodes.length <= 0))
            try {
                for (var i = __values(this.visibleRewardNodes), o = i.next(); !o.done; o = i.next()) {
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
    LevelBoxView.prototype.playRewardsAnim = function () {
        cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init_" + this.rewardCount, -1);
    };
    LevelBoxView.prototype.hideAnim = function () {
        var t = this;
        cc.isValid(this.node) && cc.tween(this.node).to(0.2, {
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
            var e;
            null === (e = t.delegate) || void 0 === e || e.close();
        }).start();
    };
    LevelBoxView.prefabUrl = "prefabs/levelBox/LevelBox";
    __decorate([
        mj.node("HintValue")
    ], LevelBoxView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], LevelBoxView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], LevelBoxView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("RefreshIcon")
    ], LevelBoxView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], LevelBoxView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], LevelBoxView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], LevelBoxView.prototype, "rewardTip", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], LevelBoxView.prototype, "animSkeleton", void 0);
    __decorate([
        mj.traitEvent("LvBoxVw_adBtnClick")
    ], LevelBoxView.prototype, "onAdClaimBtnClick", null);
    __decorate([
        mj.traitEvent("LvBoxVw_adSuccess")
    ], LevelBoxView.prototype, "onAdSuccess", null);
    __decorate([
        mj.traitEvent("LvBoxVw_adFailed")
    ], LevelBoxView.prototype, "onAdFailed", null);
    __decorate([
        mj.traitEvent("LvBoxVw_initComps")
    ], LevelBoxView.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("LvBoxVw_getAdBtnScale")
    ], LevelBoxView.prototype, "getAdBtnScale", null);
    __decorate([
        mj.traitEvent("LvBoxVw_isShowAdBtn")
    ], LevelBoxView.prototype, "isShowAdBtn", null);
    LevelBoxView = __decorate([
        mj.class
    ], LevelBoxView);
    return LevelBoxView;
}(UIView_1.default));
exports.default = LevelBoxView;

cc._RF.pop();