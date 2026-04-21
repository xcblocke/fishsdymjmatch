"use strict";
cc._RF.push(module, '017adIpuJ9I+aBwpZGMynrv', 'TravelBoxView');
// Scripts/view/TravelBoxView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var DataReader_1 = require("../framework/data/DataReader");
var UIView_1 = require("../framework/ui/UIView");
var AdManager_1 = require("../base/ad/AdManager");
var ConfigType_1 = require("../gamePlay/base/data/ConfigType");
var DAdRewardEnter_1 = require("../gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../gamePlay/dot/DGameAdShowStage");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var IUserData_1 = require("../user/IUserData");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var TravelBoxView = /** @class */ (function (_super) {
    __extends(TravelBoxView, _super);
    function TravelBoxView() {
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
    Object.defineProperty(TravelBoxView.prototype, "getAnimSkeleton", {
        get: function () {
            return this.animSkeleton;
        },
        enumerable: false,
        configurable: true
    });
    TravelBoxView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
    };
    TravelBoxView.prototype.getRewardNodes = function (e) {
        switch (e) {
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
    TravelBoxView.prototype.viewDidLoad = function (e) {
        var t = null == e ? void 0 : e.reward;
        this.rewardLevel = t.lv;
        var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.reward_config, t.reward), n = o.IsMultiple ? 2 : 1;
        this.config = {
            items: [],
            adScale: n
        };
        for (var i = 0; i < o.Items.length; i++)
            this.config.items.push({
                item: o.Items[i],
                count: o.Counts[i]
            });
        this.rewardCount = this.config.items.length;
        this.updateLabel();
        this.playOpenAnim();
        DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.OutGameMotivation);
        DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.TravelDialogDisplayed);
    };
    TravelBoxView.prototype.viewDidShow = function () {
        this.adClaimBtn.getComponent(cc.Button).interactable = true;
        this.claimBtn.getComponent(cc.Button).interactable = true;
    };
    TravelBoxView.prototype.registerButtons = function () {
        this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
        this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        this.OnButtonClick(this.node, {
            func: this.onBgClick.bind(this),
            ignoreClickAudio: true
        });
    };
    TravelBoxView.prototype.onBgClick = function () {
        var e;
        if (this.canClickBg) {
            this.clickCount++;
            this.clickCount >= 3 && (null === (e = this.delegate) || void 0 === e || e.close());
        }
    };
    TravelBoxView.prototype.onAdClaimBtnClick = function () {
        var e = this;
        this.adClaimBtn.getComponent(cc.Button).interactable = false;
        this.claimBtn.getComponent(cc.Button).interactable = false;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, DGameAdShow_1.EAdPosition.OutGameMotivation);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.TravelClaimMultipleReward, this.config.adScale);
        if (AdManager_1.default.getInstance().checkVideoAdIsReady()) {
            this.canClickBg = true;
            mj.triggerInternalEvent("Chest_AdClkShow", this, []) || (this.node.parent.opacity = 0);
        }
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.OutGameMotivation, {
            onSuccess: function () {
                e.onAdSuccess();
            },
            onFailed: function (t) {
                e.onAdFailed(t);
            }
        });
    };
    TravelBoxView.prototype.onAdSuccess = function () {
        var e = this;
        if (this.node && cc.isValid(this.node)) {
            for (var t = this.config.adScale - 1, o = 0; o < this.config.items.length; o++) {
                var n = this.config.items[o], i = {
                    inputType: GameInputEnum_1.EGameInputEnum.AddProp,
                    propType: IUserData_1.ItemTypeKey[n.item],
                    num: n.count * t,
                    reasonId: GameTypeEnums_1.EGetItemReasonId.JourneyAd,
                    reasonInfo: "旅行活动奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
                };
                GameInteraction_1.GameInteraction.input(i);
            }
            mj.triggerInternalEvent("Chest_AdClose", this, [{
                    refreshIcon: this.refreshIcon,
                    refreshValue: this.refreshValue,
                    hintIcon: this.hintIcon,
                    hintValue: this.hintValue,
                    adClaimBtn: this.adClaimBtn,
                    claimBtn: this.claimBtn,
                    adScale: this.config.adScale,
                    onClose: function () {
                        return e.hideAnim();
                    }
                }]) || this.hideAnim();
        }
    };
    TravelBoxView.prototype.showAdRewards = function (e) {
        if (e === void 0) { e = true; }
        var t, o, n, i;
        if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
            this.claimBtn.setPosition(this.centerBtnPos);
            this.adClaimBtn.active = false;
            this.claimBtn.getComponent(cc.Button).interactable = true;
            this.skipClaimDot = true;
            if (e) {
                var r = function r(e, t) {
                    if (cc.isValid(e)) {
                        var o = cc.instantiate(e);
                        o.parent = e.parent;
                        o.scale = e.scale;
                        o.angle = e.angle;
                        o.setPosition(e.position);
                        o.getComponent(cc.Label).string = String(t);
                        o.opacity = 0;
                        e.opacity = 255;
                        cc.tween(e).to(0.167, {
                            opacity: 0,
                            position: cc.v3(0, 30, 0)
                        }, {
                            easing: cc.easing.quadOut
                        }).start();
                        o.position = cc.v3(0, -37, 0);
                        var n = cc.tween().to(0.3, {
                            position: cc.v3(0, 3, 0)
                        }, {
                            easing: cc.easing.quadOut
                        }).to(0.1, {
                            position: cc.v3(0, 0, 0)
                        }, {
                            easing: cc.easing.quadIn
                        }), i = cc.tween().to(0.4, {
                            opacity: 255
                        }, {
                            easing: cc.easing.quadOut
                        });
                        cc.tween(o).parallel(n, i).start();
                    }
                };
                try {
                    for (var l = __values(this.config.items), s = l.next(); !s.done; s = l.next()) {
                        var c = s.value;
                        r(this.getRewardNodes(c.item).value, c.count * this.config.adScale);
                    }
                }
                catch (e) {
                    t = {
                        error: e
                    };
                }
                finally {
                    try {
                        s && !s.done && (o = l.return) && o.call(l);
                    }
                    finally {
                        if (t)
                            throw t.error;
                    }
                }
            }
            else
                try {
                    for (var u = __values(this.config.items), p = u.next(); !p.done; p = u.next()) {
                        c = p.value;
                        this.getRewardNodes(c.item).value.getComponent(cc.Label).string = String(c.count * this.config.adScale);
                    }
                }
                catch (e) {
                    n = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (i = u.return) && i.call(u);
                    }
                    finally {
                        if (n)
                            throw n.error;
                    }
                }
        }
    };
    TravelBoxView.prototype.onAdFailed = function () {
        if (this.node && cc.isValid(this.node) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            this.adClaimBtn.getComponent(cc.Button).interactable = true;
            this.claimBtn.getComponent(cc.Button).interactable = true;
            cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
        }
    };
    TravelBoxView.prototype.onClaimBtnClick = function () {
        if (this.skipClaimDot)
            this.hideAnim();
        else {
            DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, false);
            DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.TravelClaimReward);
            this.hideAnim();
        }
    };
    TravelBoxView.prototype.updateLabel = function () {
        var e, t, o, n;
        try {
            for (var i = __values([IUserData_1.EItemType.Hint, IUserData_1.EItemType.Shuffle]), r = i.next(); !r.done; r = i.next()) {
                var l = r.value, s = this.getRewardNodes(l), c = s.icon;
                (p = s.value).getComponent(cc.Label).string = "0";
                c.active = false;
                p.active = false;
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.visibleRewardNodes = [];
        for (var u = 0; u < this.config.items.length; u++) {
            l = this.config.items[u];
            var p, f = this.getRewardNodes(l.item);
            c = f.icon;
            (p = f.value).getComponent(cc.Label).string = l.count.toString();
            c.active = l.count > 0;
            p.active = l.count > 0;
            this.visibleRewardNodes.push(c, p);
            this.hookNodes(c, p, u + 1);
        }
        I18NStrings_1.default.setText(null === (o = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === o ? void 0 : o.node, "Claim x" + this.config.adScale, "Common_Reward_Claim_Ads", [this.config.adScale]);
        I18NStrings_1.default.setText(null === (n = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === n ? void 0 : n.node, "Claim", "LeaderBoard_Reward_Claim");
        this.updateTipLabel();
    };
    TravelBoxView.prototype.hookNodes = function (e, t, o) {
        this.animProxy.attachNode("hook_icon_" + o, function () {
            return e;
        });
        this.animProxy.attachNode("hook_num_" + o, function () {
            return t;
        });
    };
    TravelBoxView.prototype.updateTipLabel = function () {
        I18NStrings_1.default.setText(this.rewardTip, "Rewards", "Common_Reward_Title");
    };
    TravelBoxView.prototype.getAdBtnScale = function () {
        return 1;
    };
    TravelBoxView.prototype.initComponents = function () {
        this.centerBtnPos.addSelf(this.adClaimBtn.position);
        this.centerBtnPos.addSelf(this.claimBtn.position);
        this.centerBtnPos.multiplyScalar(0.5);
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.animSkeleton.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.reset();
    };
    TravelBoxView.prototype.reset = function () {
        if (cc.isValid(this.refreshIcon) && cc.isValid(this.refreshValue) && cc.isValid(this.hintIcon) && cc.isValid(this.hintValue) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
            this.refreshIcon.active = false;
            this.refreshValue.active = false;
            this.hintIcon.active = false;
            this.hintValue.active = false;
            this.adClaimBtn.active = false;
            this.claimBtn.active = false;
            this.rewardTip.active = false;
        }
    };
    TravelBoxView.prototype.playOpenAnim = function () {
        var e = this;
        this.reset();
        if (cc.isValid(this.animSkeleton) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animSkeleton.setEventListener(function (t, o) {
                "event_rewards" === o.data.name && e.onOpenAnimFinished();
            });
            this.animProxy.setAnimation("in_" + this.rewardCount, 1, function () {
                e.playRewardsAnim();
            });
            var t = this.getAdBtnScale();
            this.adClaimBtn.active = false;
            this.claimBtn.active = false;
            this.adClaimBtn.scale = 0.6 * t;
            this.claimBtn.scale = 0.6;
            var o = cc.tween().to(0.2, {
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            }), n = cc.tween().to(0.2, {
                scale: 1.05 * t
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: t
            }, {
                easing: cc.easing.quadIn
            }), i = 1.93;
            if (this.isShowAdBtn())
                cc.tween(this.adClaimBtn).sequence(cc.tween().delay(1.73), cc.tween(this.adClaimBtn).call(function () {
                    e.adClaimBtn.active = true;
                }), n.clone()).start();
            else {
                this.claimBtn.setPosition(this.adClaimBtn.position);
                i = 1.73;
            }
            cc.tween(this.claimBtn).sequence(cc.tween().delay(i), cc.tween(this.claimBtn).call(function () {
                e.claimBtn.active = true;
            }), o.clone()).start();
            this.playRewardsTipAnim(this.rewardTip);
        }
    };
    TravelBoxView.prototype.isShowAdBtn = function () {
        return CommonUtils_1.isNetworkAvailable();
    };
    TravelBoxView.prototype.playRewardsTipAnim = function (e) {
        cc.tween(e).delay(0.9).call(function () {
            e.active = true;
            e.scale = 0.3;
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
    TravelBoxView.prototype.onOpenAnimFinished = function () {
        var e, t;
        try {
            for (var o = __values(this.visibleRewardNodes), n = o.next(); !n.done; n = o.next()) {
                var i = n.value;
                cc.isValid(i) && (i.active = true);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                n && !n.done && (t = o.return) && t.call(o);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    TravelBoxView.prototype.playRewardsAnim = function () {
        cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init_" + this.rewardCount, -1);
    };
    TravelBoxView.prototype.hideAnim = function () {
        var e = this;
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
            var t;
            null === (t = e.delegate) || void 0 === t || t.close();
        }).start();
    };
    TravelBoxView.prefabUrl = "prefabs/journey/JourneyBox";
    __decorate([
        mj.node("HintValue")
    ], TravelBoxView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], TravelBoxView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], TravelBoxView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("RefreshIcon")
    ], TravelBoxView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], TravelBoxView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], TravelBoxView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], TravelBoxView.prototype, "rewardTip", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], TravelBoxView.prototype, "animSkeleton", void 0);
    __decorate([
        mj.traitEvent("TLBoxVw_adBtnClick")
    ], TravelBoxView.prototype, "onAdClaimBtnClick", null);
    __decorate([
        mj.traitEvent("TLBoxVw_adSuccess")
    ], TravelBoxView.prototype, "onAdSuccess", null);
    __decorate([
        mj.traitEvent("TLBoxVw_adFailed")
    ], TravelBoxView.prototype, "onAdFailed", null);
    __decorate([
        mj.traitEvent("TLBoxVw_updateLabel")
    ], TravelBoxView.prototype, "updateLabel", null);
    __decorate([
        mj.traitEvent("TLBoxVw_updTipLabel")
    ], TravelBoxView.prototype, "updateTipLabel", null);
    __decorate([
        mj.traitEvent("TLBoxVw_getAdBtnScale")
    ], TravelBoxView.prototype, "getAdBtnScale", null);
    __decorate([
        mj.traitEvent("TLBoxVw_initComponents")
    ], TravelBoxView.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("TLBoxVw_isShowAdBtn")
    ], TravelBoxView.prototype, "isShowAdBtn", null);
    __decorate([
        mj.traitEvent("TLBoxVw_plyRwdTipAnim")
    ], TravelBoxView.prototype, "playRewardsTipAnim", null);
    __decorate([
        mj.traitEvent("TLBoxVw_onOpenFin")
    ], TravelBoxView.prototype, "onOpenAnimFinished", null);
    __decorate([
        mj.traitEvent("TLBoxVw_plyRwdAnim")
    ], TravelBoxView.prototype, "playRewardsAnim", null);
    TravelBoxView = __decorate([
        mj.class
    ], TravelBoxView);
    return TravelBoxView;
}(UIView_1.default));
exports.default = TravelBoxView;

cc._RF.pop();