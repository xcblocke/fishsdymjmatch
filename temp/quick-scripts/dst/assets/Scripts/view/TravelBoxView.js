
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/TravelBoxView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVHJhdmVsQm94Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQXFFO0FBQ3JFLDBFQUFzRjtBQUN0RixzRUFBcUU7QUFDckUsMkRBQTBEO0FBQzFELGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsK0RBQThEO0FBQzlELGlFQUFrRTtBQUNsRSxxREFBc0Q7QUFDdEQsMkRBQTBEO0FBQzFELHFFQUFzRTtBQUN0RSxzREFBK0U7QUFDL0UsK0NBQTJEO0FBQzNELDZEQUF3RDtBQUN4RCwyREFBc0Q7QUFDdEQsOERBQW9FO0FBRXBFO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBMmFDO1FBemFDLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsd0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxrQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixrQkFBWSxHQUFjLElBQUksQ0FBQzs7SUFtWmpDLENBQUM7SUFqWkMsc0JBQUksMENBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0Is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QztJQThERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7b0RBR3BDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzJEQWtCdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7MkRBbUJsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt3REFHbkM7SUFwWmtCLGFBQWE7UUFEakMsRUFBRSxDQUFDLEtBQUs7T0FDWSxhQUFhLENBMmFqQztJQUFELG9CQUFDO0NBM2FELEFBMmFDLENBM2EwQyxnQkFBTSxHQTJhaEQ7a0JBM2FvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFR2V0SXRlbVJlYXNvbklkLCBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgRG90QWRSZXdhcmRFbnRlciB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBEb3RBZFZpc2l0IH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RBZFZpc2l0JztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRVZpY3RvcnlDaGVzdENsaWNrVHlwZSB9IGZyb20gJy4uL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IEVJdGVtVHlwZSwgSXRlbVR5cGVLZXkgfSBmcm9tICcuLi91c2VyL0lVc2VyRGF0YSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBpc05ldHdvcmtBdmFpbGFibGUgfSBmcm9tICcuLi9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxCb3hWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLm5vZGUoXCJIaW50VmFsdWVcIilcbiAgaGludFZhbHVlOiBcIkhpbnRWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoVmFsdWVcIilcbiAgcmVmcmVzaFZhbHVlOiBcIlJlZnJlc2hWYWx1ZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJIaW50SWNvblwiKVxuICBoaW50SWNvbjogXCJIaW50SWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZWZyZXNoSWNvblwiKVxuICByZWZyZXNoSWNvbjogXCJSZWZyZXNoSWNvblwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJBZENsYWltQnRuXCIpXG4gIGFkQ2xhaW1CdG46IFwiQWRDbGFpbUJ0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJDbGFpbUJ0blwiKVxuICBjbGFpbUJ0bjogXCJDbGFpbUJ0blwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZXdhcmRzVGlwXCIpXG4gIHJld2FyZFRpcDogXCJSZXdhcmRzVGlwXCIgPSBudWxsO1xuICByZXdhcmRMZXZlbCA9IDE7XG4gIGNvbmZpZyA9IG51bGw7XG4gIHJld2FyZENvdW50ID0gMDtcbiAgdmlzaWJsZVJld2FyZE5vZGVzID0gW107XG4gIGNhbkNsaWNrQmcgPSBmYWxzZTtcbiAgY2xpY2tDb3VudCA9IDA7XG4gIGNlbnRlckJ0blBvcyA9IG5ldyBjYy5WZWMzKDAsIDAsIDApO1xuICBza2lwQ2xhaW1Eb3QgPSBmYWxzZTtcbiAgQG1qLmNvbXBvbmVudChcIkJveEFuaW1cIiwgc3AuU2tlbGV0b24pXG4gIGFuaW1Ta2VsZXRvbjogXCJCb3hBbmltXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2pvdXJuZXkvSm91cm5leUJveFwiO1xuICBnZXQgZ2V0QW5pbVNrZWxldG9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1Ta2VsZXRvbjtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG4gIH1cbiAgZ2V0UmV3YXJkTm9kZXMoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFSXRlbVR5cGUuSGludDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmhpbnRJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmhpbnRWYWx1ZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFSXRlbVR5cGUuU2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLnJlZnJlc2hJY29uLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnJlZnJlc2hWYWx1ZVxuICAgICAgICB9O1xuICAgIH1cbiAgfVxuICB2aWV3RGlkTG9hZChlKSB7XG4gICAgdmFyIHQgPSBudWxsID09IGUgPyB2b2lkIDAgOiBlLnJld2FyZDtcbiAgICB0aGlzLnJld2FyZExldmVsID0gdC5sdjtcbiAgICB2YXIgbyA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5yZXdhcmRfY29uZmlnLCB0LnJld2FyZCksXG4gICAgICBuID0gby5Jc011bHRpcGxlID8gMiA6IDE7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBpdGVtczogW10sXG4gICAgICBhZFNjYWxlOiBuXG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8uSXRlbXMubGVuZ3RoOyBpKyspIHRoaXMuY29uZmlnLml0ZW1zLnB1c2goe1xuICAgICAgaXRlbTogby5JdGVtc1tpXSxcbiAgICAgIGNvdW50OiBvLkNvdW50c1tpXVxuICAgIH0pO1xuICAgIHRoaXMucmV3YXJkQ291bnQgPSB0aGlzLmNvbmZpZy5pdGVtcy5sZW5ndGg7XG4gICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIHRoaXMucGxheU9wZW5BbmltKCk7XG4gICAgRG90QWRSZXdhcmRFbnRlci5kb3QodHJ1ZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RWaWN0b3J5Q2hlc3QoRVZpY3RvcnlDaGVzdENsaWNrVHlwZS5UcmF2ZWxEaWFsb2dEaXNwbGF5ZWQpO1xuICB9XG4gIHZpZXdEaWRTaG93KCkge1xuICAgIHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuY2xhaW1CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgfVxuICByZWdpc3RlckJ1dHRvbnMoKSB7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYWRDbGFpbUJ0biwgdGhpcy5vbkFkQ2xhaW1CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5jbGFpbUJ0biwgdGhpcy5vbkNsYWltQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwge1xuICAgICAgZnVuYzogdGhpcy5vbkJnQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgIGlnbm9yZUNsaWNrQXVkaW86IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbkJnQ2xpY2soKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuY2FuQ2xpY2tCZykge1xuICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICB0aGlzLmNsaWNrQ291bnQgPj0gMyAmJiAobnVsbCA9PT0gKGUgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5jbG9zZSgpKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEJveFZ3X2FkQnRuQ2xpY2tcIilcbiAgb25BZENsYWltQnRuQ2xpY2soKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNsYWltQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCB0cnVlKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFZpY3RvcnlDaGVzdChFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLlRyYXZlbENsYWltTXVsdGlwbGVSZXdhcmQsIHRoaXMuY29uZmlnLmFkU2NhbGUpO1xuICAgIGlmIChBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkpIHtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IHRydWU7XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkNoZXN0X0FkQ2xrU2hvd1wiLCB0aGlzLCBbXSkgfHwgKHRoaXMubm9kZS5wYXJlbnQub3BhY2l0eSA9IDApO1xuICAgIH1cbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUub25BZFN1Y2Nlc3MoKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZS5vbkFkRmFpbGVkKHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExCb3hWd19hZFN1Y2Nlc3NcIilcbiAgb25BZFN1Y2Nlc3MoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICBmb3IgKHZhciB0ID0gdGhpcy5jb25maWcuYWRTY2FsZSAtIDEsIG8gPSAwOyBvIDwgdGhpcy5jb25maWcuaXRlbXMubGVuZ3RoOyBvKyspIHtcbiAgICAgICAgdmFyIG4gPSB0aGlzLmNvbmZpZy5pdGVtc1tvXSxcbiAgICAgICAgICBpID0ge1xuICAgICAgICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5BZGRQcm9wLFxuICAgICAgICAgICAgcHJvcFR5cGU6IEl0ZW1UeXBlS2V5W24uaXRlbV0sXG4gICAgICAgICAgICBudW06IG4uY291bnQgKiB0LFxuICAgICAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuSm91cm5leUFkLFxuICAgICAgICAgICAgcmVhc29uSW5mbzogXCLml4XooYzmtLvliqjlpZblirFf55yL5bm/5ZGK57+75YCNX+WIsOi+vuesrFwiICsgdGhpcy5yZXdhcmRMZXZlbCArIFwi5YWzXCJcbiAgICAgICAgICB9O1xuICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoaSk7XG4gICAgICB9XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkNoZXN0X0FkQ2xvc2VcIiwgdGhpcywgW3tcbiAgICAgICAgcmVmcmVzaEljb246IHRoaXMucmVmcmVzaEljb24sXG4gICAgICAgIHJlZnJlc2hWYWx1ZTogdGhpcy5yZWZyZXNoVmFsdWUsXG4gICAgICAgIGhpbnRJY29uOiB0aGlzLmhpbnRJY29uLFxuICAgICAgICBoaW50VmFsdWU6IHRoaXMuaGludFZhbHVlLFxuICAgICAgICBhZENsYWltQnRuOiB0aGlzLmFkQ2xhaW1CdG4sXG4gICAgICAgIGNsYWltQnRuOiB0aGlzLmNsYWltQnRuLFxuICAgICAgICBhZFNjYWxlOiB0aGlzLmNvbmZpZy5hZFNjYWxlLFxuICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUuaGlkZUFuaW0oKTtcbiAgICAgICAgfVxuICAgICAgfV0pIHx8IHRoaXMuaGlkZUFuaW0oKTtcbiAgICB9XG4gIH1cbiAgc2hvd0FkUmV3YXJkcyhlID0gdHJ1ZSkge1xuICAgIHZhciB0LCBvLCBuLCBpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSkge1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlLnBhcmVudCkgJiYgKHRoaXMubm9kZS5wYXJlbnQub3BhY2l0eSA9IDI1NSk7XG4gICAgICB0aGlzLmNhbkNsaWNrQmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICB0aGlzLmNsYWltQnRuLnNldFBvc2l0aW9uKHRoaXMuY2VudGVyQnRuUG9zKTtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2tpcENsYWltRG90ID0gdHJ1ZTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciByID0gZnVuY3Rpb24gcihlLCB0KSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgICAgICAgIHZhciBvID0gY2MuaW5zdGFudGlhdGUoZSk7XG4gICAgICAgICAgICBvLnBhcmVudCA9IGUucGFyZW50O1xuICAgICAgICAgICAgby5zY2FsZSA9IGUuc2NhbGU7XG4gICAgICAgICAgICBvLmFuZ2xlID0gZS5hbmdsZTtcbiAgICAgICAgICAgIG8uc2V0UG9zaXRpb24oZS5wb3NpdGlvbik7XG4gICAgICAgICAgICBvLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RyaW5nKHQpO1xuICAgICAgICAgICAgby5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuMTY3LCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCAzMCwgMClcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIG8ucG9zaXRpb24gPSBjYy52MygwLCAtMzcsIDApO1xuICAgICAgICAgICAgdmFyIG4gPSBjYy50d2VlbigpLnRvKDAuMywge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCAzLCAwKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgICAgICAgICAgICB9KS50bygwLjEsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY2MudjMoMCwgMCwgMClcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJblxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgaSA9IGNjLnR3ZWVuKCkudG8oMC40LCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2MudHdlZW4obykucGFyYWxsZWwobiwgaSkuc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKHRoaXMuY29uZmlnLml0ZW1zKSwgcyA9IGwubmV4dCgpOyAhcy5kb25lOyBzID0gbC5uZXh0KCkpIHtcbiAgICAgICAgICAgIHZhciBjID0gcy52YWx1ZTtcbiAgICAgICAgICAgIHIodGhpcy5nZXRSZXdhcmROb2RlcyhjLml0ZW0pLnZhbHVlLCBjLmNvdW50ICogdGhpcy5jb25maWcuYWRTY2FsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdCA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcyAmJiAhcy5kb25lICYmIChvID0gbC5yZXR1cm4pICYmIG8uY2FsbChsKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKHRoaXMuY29uZmlnLml0ZW1zKSwgcCA9IHUubmV4dCgpOyAhcC5kb25lOyBwID0gdS5uZXh0KCkpIHtcbiAgICAgICAgICBjID0gcC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmdldFJld2FyZE5vZGVzKGMuaXRlbSkudmFsdWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoYy5jb3VudCAqIHRoaXMuY29uZmlnLmFkU2NhbGUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG4gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcCAmJiAhcC5kb25lICYmIChpID0gdS5yZXR1cm4pICYmIGkuY2FsbCh1KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobikgdGhyb3cgbi5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMQm94VndfYWRGYWlsZWRcIilcbiAgb25BZEZhaWxlZCgpIHtcbiAgICBpZiAodGhpcy5ub2RlICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSkge1xuICAgICAgdGhpcy5hZENsYWltQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmNsYWltQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZS5wYXJlbnQpICYmICh0aGlzLm5vZGUucGFyZW50Lm9wYWNpdHkgPSAyNTUpO1xuICAgICAgdGhpcy5jYW5DbGlja0JnID0gZmFsc2U7XG4gICAgICB0aGlzLmNsaWNrQ291bnQgPSAwO1xuICAgIH1cbiAgfVxuICBvbkNsYWltQnRuQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc2tpcENsYWltRG90KSB0aGlzLmhpZGVBbmltKCk7ZWxzZSB7XG4gICAgICBEb3RBZFZpc2l0LmRvdEFkVmlzaXRSZXdhcmRBRChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwgZmFsc2UpO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdFZpY3RvcnlDaGVzdChFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLlRyYXZlbENsYWltUmV3YXJkKTtcbiAgICAgIHRoaXMuaGlkZUFuaW0oKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEJveFZ3X3VwZGF0ZUxhYmVsXCIpXG4gIHVwZGF0ZUxhYmVsKCkge1xuICAgIHZhciBlLCB0LCBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoW0VJdGVtVHlwZS5IaW50LCBFSXRlbVR5cGUuU2h1ZmZsZV0pLCByID0gaS5uZXh0KCk7ICFyLmRvbmU7IHIgPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbCA9IHIudmFsdWUsXG4gICAgICAgICAgcyA9IHRoaXMuZ2V0UmV3YXJkTm9kZXMobCksXG4gICAgICAgICAgYyA9IHMuaWNvbjtcbiAgICAgICAgKHAgPSBzLnZhbHVlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICBjLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBwLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKHQgPSBpLnJldHVybikgJiYgdC5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmlzaWJsZVJld2FyZE5vZGVzID0gW107XG4gICAgZm9yICh2YXIgdSA9IDA7IHUgPCB0aGlzLmNvbmZpZy5pdGVtcy5sZW5ndGg7IHUrKykge1xuICAgICAgbCA9IHRoaXMuY29uZmlnLml0ZW1zW3VdO1xuICAgICAgdmFyIHAsXG4gICAgICAgIGYgPSB0aGlzLmdldFJld2FyZE5vZGVzKGwuaXRlbSk7XG4gICAgICBjID0gZi5pY29uO1xuICAgICAgKHAgPSBmLnZhbHVlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGwuY291bnQudG9TdHJpbmcoKTtcbiAgICAgIGMuYWN0aXZlID0gbC5jb3VudCA+IDA7XG4gICAgICBwLmFjdGl2ZSA9IGwuY291bnQgPiAwO1xuICAgICAgdGhpcy52aXNpYmxlUmV3YXJkTm9kZXMucHVzaChjLCBwKTtcbiAgICAgIHRoaXMuaG9va05vZGVzKGMsIHAsIHUgKyAxKTtcbiAgICB9XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dChudWxsID09PSAobyA9IHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ub2RlLCBcIkNsYWltIHhcIiArIHRoaXMuY29uZmlnLmFkU2NhbGUsIFwiQ29tbW9uX1Jld2FyZF9DbGFpbV9BZHNcIiwgW3RoaXMuY29uZmlnLmFkU2NhbGVdKTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KG51bGwgPT09IChuID0gdGhpcy5jbGFpbUJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5ub2RlLCBcIkNsYWltXCIsIFwiTGVhZGVyQm9hcmRfUmV3YXJkX0NsYWltXCIpO1xuICAgIHRoaXMudXBkYXRlVGlwTGFiZWwoKTtcbiAgfVxuICBob29rTm9kZXMoZSwgdCwgbykge1xuICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25fXCIgKyBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fXCIgKyBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMQm94VndfdXBkVGlwTGFiZWxcIilcbiAgdXBkYXRlVGlwTGFiZWwoKSB7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLnJld2FyZFRpcCwgXCJSZXdhcmRzXCIsIFwiQ29tbW9uX1Jld2FyZF9UaXRsZVwiKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMQm94VndfZ2V0QWRCdG5TY2FsZVwiKVxuICBnZXRBZEJ0blNjYWxlKCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVExCb3hWd19pbml0Q29tcG9uZW50c1wiKVxuICBpbml0Q29tcG9uZW50cygpIHtcbiAgICB0aGlzLmNlbnRlckJ0blBvcy5hZGRTZWxmKHRoaXMuYWRDbGFpbUJ0bi5wb3NpdGlvbik7XG4gICAgdGhpcy5jZW50ZXJCdG5Qb3MuYWRkU2VsZih0aGlzLmNsYWltQnRuLnBvc2l0aW9uKTtcbiAgICB0aGlzLmNlbnRlckJ0blBvcy5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmFuaW1Ta2VsZXRvbi5ub2RlKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaEljb24pICYmIGNjLmlzVmFsaWQodGhpcy5yZWZyZXNoVmFsdWUpICYmIGNjLmlzVmFsaWQodGhpcy5oaW50SWNvbikgJiYgY2MuaXNWYWxpZCh0aGlzLmhpbnRWYWx1ZSkgJiYgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLnJld2FyZFRpcCkpIHtcbiAgICAgIHRoaXMucmVmcmVzaEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZnJlc2hWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGludEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmhpbnRWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnJld2FyZFRpcC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcGxheU9wZW5BbmltKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pICYmIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pICYmIGNjLmlzVmFsaWQodGhpcy5yZXdhcmRUaXApKSB7XG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDAuMjUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5Cb3gpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIHRoaXMuYW5pbVNrZWxldG9uLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgXCJldmVudF9yZXdhcmRzXCIgPT09IG8uZGF0YS5uYW1lICYmIGUub25PcGVuQW5pbUZpbmlzaGVkKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluX1wiICsgdGhpcy5yZXdhcmRDb3VudCwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnBsYXlSZXdhcmRzQW5pbSgpO1xuICAgICAgfSk7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0QWRCdG5TY2FsZSgpO1xuICAgICAgdGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5zY2FsZSA9IDAuNiAqIHQ7XG4gICAgICB0aGlzLmNsYWltQnRuLnNjYWxlID0gMC42O1xuICAgICAgdmFyIG8gPSBjYy50d2VlbigpLnRvKDAuMiwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgIH0pLFxuICAgICAgICBuID0gY2MudHdlZW4oKS50bygwLjIsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNSAqIHRcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgfSkudG8oMC4xNywge1xuICAgICAgICAgIHNjYWxlOiB0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgICAgfSksXG4gICAgICAgIGkgPSAxLjkzO1xuICAgICAgaWYgKHRoaXMuaXNTaG93QWRCdG4oKSkgY2MudHdlZW4odGhpcy5hZENsYWltQnRuKS5zZXF1ZW5jZShjYy50d2VlbigpLmRlbGF5KDEuNzMpLCBjYy50d2Vlbih0aGlzLmFkQ2xhaW1CdG4pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBlLmFkQ2xhaW1CdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0pLCBuLmNsb25lKCkpLnN0YXJ0KCk7ZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhaW1CdG4uc2V0UG9zaXRpb24odGhpcy5hZENsYWltQnRuLnBvc2l0aW9uKTtcbiAgICAgICAgaSA9IDEuNzM7XG4gICAgICB9XG4gICAgICBjYy50d2Vlbih0aGlzLmNsYWltQnRuKS5zZXF1ZW5jZShjYy50d2VlbigpLmRlbGF5KGkpLCBjYy50d2Vlbih0aGlzLmNsYWltQnRuKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5jbGFpbUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSksIG8uY2xvbmUoKSkuc3RhcnQoKTtcbiAgICAgIHRoaXMucGxheVJld2FyZHNUaXBBbmltKHRoaXMucmV3YXJkVGlwKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEJveFZ3X2lzU2hvd0FkQnRuXCIpXG4gIGlzU2hvd0FkQnRuKCkge1xuICAgIHJldHVybiBpc05ldHdvcmtBdmFpbGFibGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMQm94VndfcGx5UndkVGlwQW5pbVwiKVxuICBwbGF5UmV3YXJkc1RpcEFuaW0oZSkge1xuICAgIGNjLnR3ZWVuKGUpLmRlbGF5KDAuOSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBlLnNjYWxlID0gMC4zO1xuICAgIH0pLnRvKDAuMiwge1xuICAgICAgc2NhbGU6IDEuM1xuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICB9KS50bygwLjE3LCB7XG4gICAgICBzY2FsZTogMC44XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLnRvKDAuMTMsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUTEJveFZ3X29uT3BlbkZpblwiKVxuICBvbk9wZW5BbmltRmluaXNoZWQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLnZpc2libGVSZXdhcmROb2RlcyksIG4gPSBvLm5leHQoKTsgIW4uZG9uZTsgbiA9IG8ubmV4dCgpKSB7XG4gICAgICAgIHZhciBpID0gbi52YWx1ZTtcbiAgICAgICAgY2MuaXNWYWxpZChpKSAmJiAoaS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbiAmJiAhbi5kb25lICYmICh0ID0gby5yZXR1cm4pICYmIHQuY2FsbChvKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRMQm94VndfcGx5UndkQW5pbVwiKVxuICBwbGF5UmV3YXJkc0FuaW0oKSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFuaW1Ta2VsZXRvbikgJiYgdGhpcy5hbmltUHJveHkuc2V0QW5pbWF0aW9uKFwiaW5pdF9cIiArIHRoaXMucmV3YXJkQ291bnQsIC0xKTtcbiAgfVxuICBoaWRlQW5pbSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgY2MuaXNWYWxpZCh0aGlzLm5vZGUpICYmIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4yLCB7XG4gICAgICBzY2FsZTogMSxcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICB9KS50bygwLjE3LCB7XG4gICAgICBzY2FsZTogMS4wNSxcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS50bygwLjEzLCB7XG4gICAgICBzY2FsZTogMC4zLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgbnVsbCA9PT0gKHQgPSBlLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbn0iXX0=