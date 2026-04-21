
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBb0c7QUFDcEcsK0RBQTBEO0FBQzFELGdFQUEyRDtBQUMzRCwrRUFBZ0Y7QUFDaEYsbUVBQW9FO0FBQ3BFLHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsb0VBQTZGO0FBQzdGLDZEQUF5RTtBQUN6RSwyRUFBc0U7QUFDdEUseUVBQW9FO0FBQ3BFLDRFQUFrRjtBQUNsRixvRkFBbUY7QUFDbkYsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUV2RTtJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQWtkQztRQWhkQyxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFDL0IsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGtCQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsa0JBQVksR0FBYyxJQUFJLENBQUM7O0lBMGJqQyxDQUFDO0lBeGJDLHNCQUFJLHlDQUFlO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FB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LENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO21EQUdwQztJQWhaa0IsWUFBWTtRQURoQyxFQUFFLENBQUMsS0FBSztPQUNZLFlBQVksQ0FrZGhDO0lBQUQsbUJBQUM7Q0FsZEQsQUFrZEMsQ0FsZHlDLGdCQUFNLEdBa2QvQztrQkFsZG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2V0SXRlbVJlYXNvbklkLCBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IHsgRG90QWRSZXdhcmRFbnRlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RBZFJld2FyZEVudGVyJztcbmltcG9ydCB7IERvdEFkVmlzaXQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRWaXNpdCc7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93U3RhZ2UnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFVmljdG9yeUNoZXN0Q2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFSXRlbVR5cGUsIEl0ZW1UeXBlS2V5IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy91c2VyL0lVc2VyRGF0YSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgaXNOZXR3b3JrQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbEJveFZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBAbWoubm9kZShcIkhpbnRWYWx1ZVwiKVxuICBoaW50VmFsdWU6IFwiSGludFZhbHVlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJlZnJlc2hWYWx1ZVwiKVxuICByZWZyZXNoVmFsdWU6IFwiUmVmcmVzaFZhbHVlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkhpbnRJY29uXCIpXG4gIGhpbnRJY29uOiBcIkhpbnRJY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJlZnJlc2hJY29uXCIpXG4gIHJlZnJlc2hJY29uOiBcIlJlZnJlc2hJY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkFkQ2xhaW1CdG5cIilcbiAgYWRDbGFpbUJ0bjogXCJBZENsYWltQnRuXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkNsYWltQnRuXCIpXG4gIGNsYWltQnRuOiBcIkNsYWltQnRuXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJld2FyZHNUaXBcIilcbiAgcmV3YXJkVGlwOiBcIlJld2FyZHNUaXBcIiA9IG51bGw7XG4gIHJld2FyZExldmVsID0gMTtcbiAgY29uZmlnID0gbnVsbDtcbiAgcmV3YXJkQ291bnQgPSAwO1xuICB2aXNpYmxlUmV3YXJkTm9kZXMgPSBbXTtcbiAgY2FuQ2xpY2tCZyA9IGZhbHNlO1xuICBjbGlja0NvdW50ID0gMDtcbiAgY2VudGVyQnRuUG9zID0gbmV3IGNjLlZlYzMoMCwgMCwgMCk7XG4gIHNraXBDbGFpbURvdCA9IGZhbHNlO1xuICBAbWouY29tcG9uZW50KFwiQm94QW5pbVwiLCBzcC5Ta2VsZXRvbilcbiAgYW5pbVNrZWxldG9uOiBcIkJveEFuaW1cIiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvbGV2ZWxCb3gvTGV2ZWxCb3hcIjtcbiAgZ2V0IGdldEFuaW1Ta2VsZXRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltU2tlbGV0b247XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9ucygpO1xuICB9XG4gIGdldFJld2FyZE5vZGVzKHQpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgRUl0ZW1UeXBlLkhpbnQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogdGhpcy5oaW50SWNvbixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5oaW50VmFsdWVcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgRUl0ZW1UeXBlLlNodWZmbGU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogdGhpcy5yZWZyZXNoSWNvbixcbiAgICAgICAgICB2YWx1ZTogdGhpcy5yZWZyZXNoVmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG4gIH1cbiAgdmlld0RpZExvYWQodCkge1xuICAgIHRoaXMuY29uZmlnID0gdC5yZXdhcmRzO1xuICAgIHRoaXMucmV3YXJkTGV2ZWwgPSB0LmxldmVsO1xuICAgIHRoaXMucmV3YXJkQ291bnQgPSB0aGlzLmNvbmZpZy5pdGVtcy5sZW5ndGg7XG4gICAgdGhpcy5pbml0UmV3YXJkVUkoKTtcbiAgICB0aGlzLnBsYXlPcGVuQW5pbSgpO1xuICAgIERvdEFkUmV3YXJkRW50ZXIuZG90KHRydWUsIEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90VmljdG9yeUNoZXN0KEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUuRGlhbG9nRGlzcGxheWVkKTtcbiAgfVxuICBpbml0UmV3YXJkVUkoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyhbRUl0ZW1UeXBlLkhpbnQsIEVJdGVtVHlwZS5TaHVmZmxlXSksIG8gPSBpLm5leHQoKTsgIW8uZG9uZTsgbyA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBuID0gby52YWx1ZSxcbiAgICAgICAgICByID0gdGhpcy5nZXRSZXdhcmROb2RlcyhuKSxcbiAgICAgICAgICBzID0gci5pY29uLFxuICAgICAgICAgIGwgPSByLnZhbHVlO1xuICAgICAgICBsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGwuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG8gJiYgIW8uZG9uZSAmJiAoZSA9IGkucmV0dXJuKSAmJiBlLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ob29rUmV3YXJkTm9kZXMoKTtcbiAgICB0aGlzLnVwZGF0ZVJld2FyZExhYmVsKGZhbHNlKTtcbiAgICB0aGlzLnVwZGF0ZUJ0bkxhYmVsKCk7XG4gICAgdGhpcy51cGRhdGVUaXBMYWJlbCgpO1xuICB9XG4gIHVwZGF0ZVJld2FyZExhYmVsKHQpIHtcbiAgICBmb3IgKHZhciBlID0gdCA/IHRoaXMuY29uZmlnLmFkU2NhbGUgOiAxLCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuY29uZmlnLml0ZW1zW2ldLFxuICAgICAgICBuID0gdGhpcy5nZXRSZXdhcmROb2RlcyhvLml0ZW0pLnZhbHVlLFxuICAgICAgICByID0gZSAqIG8uY291bnQ7XG4gICAgICBuLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gci50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuICBob29rTm9kZXModCwgZSwgaSkge1xuICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25fXCIgKyBpLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KTtcbiAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fXCIgKyBpLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgfVxuICBob29rUmV3YXJkTm9kZXMoKSB7XG4gICAgdGhpcy52aXNpYmxlUmV3YXJkTm9kZXMgPSBbXTtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoaXMuY29uZmlnLml0ZW1zLmxlbmd0aDsgdCsrKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29uZmlnLml0ZW1zW3RdLFxuICAgICAgICBpID0gdGhpcy5nZXRSZXdhcmROb2RlcyhlLml0ZW0pLFxuICAgICAgICBvID0gaS5pY29uLFxuICAgICAgICBuID0gaS52YWx1ZTtcbiAgICAgIHRoaXMuaG9va05vZGVzKG8sIG4sIHQgKyAxKTtcbiAgICAgIHRoaXMudmlzaWJsZVJld2FyZE5vZGVzLnB1c2gobywgbik7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUJ0bkxhYmVsKCkge1xuICAgIHZhciB0LCBlO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQobnVsbCA9PT0gKHQgPSB0aGlzLmFkQ2xhaW1CdG4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubm9kZSwgXCJDbGFpbSB4XCIgKyB0aGlzLmNvbmZpZy5hZFNjYWxlLCBcIkNvbW1vbl9SZXdhcmRfQ2xhaW1fQWRzXCIsIFt0aGlzLmNvbmZpZy5hZFNjYWxlXSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dChudWxsID09PSAoZSA9IHRoaXMuY2xhaW1CdG4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubm9kZSwgXCJDbGFpbVwiLCBcIkxlYWRlckJvYXJkX1Jld2FyZF9DbGFpbVwiKTtcbiAgfVxuICB1cGRhdGVUaXBMYWJlbCgpIHtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMucmV3YXJkVGlwLCBcIlJld2FyZHNcIiwgXCJDb21tb25fUmV3YXJkX1RpdGxlXCIpO1xuICB9XG4gIHZpZXdEaWRTaG93KCkge1xuICAgIHRoaXMuZW5hYmxlQnV0dG9ucygpO1xuICB9XG4gIHJlZ2lzdGVyQnV0dG9ucygpIHtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5hZENsYWltQnRuLCB0aGlzLm9uQWRDbGFpbUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmNsYWltQnRuLCB0aGlzLm9uQ2xhaW1CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uQmdDbGljay5iaW5kKHRoaXMpLFxuICAgICAgaWdub3JlQ2xpY2tBdWRpbzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uQmdDbGljaygpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5jYW5DbGlja0JnKSB7XG4gICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgIHRoaXMuY2xpY2tDb3VudCA+PSAzICYmIChudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCkpO1xuICAgIH1cbiAgfVxuICBkaXNhYmxlQnV0dG9ucygpIHtcbiAgICB0aGlzLmFkQ2xhaW1CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgfVxuICBlbmFibGVCdXR0b25zKCkge1xuICAgIHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuY2xhaW1CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkx2Qm94VndfYWRCdG5DbGlja1wiKVxuICBvbkFkQ2xhaW1CdG5DbGljaygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5kaXNhYmxlQnV0dG9ucygpO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCB0cnVlKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFZpY3RvcnlDaGVzdChFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLkNsYWltTXVsdGlwbGVSZXdhcmQsIHRoaXMuY29uZmlnLmFkU2NhbGUpO1xuICAgIGlmIChBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkpIHtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IHRydWU7XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkNoZXN0X0FkQ2xrU2hvd1wiLCB0aGlzLCBbXSkgfHwgKHRoaXMubm9kZS5wYXJlbnQub3BhY2l0eSA9IDApO1xuICAgIH1cbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25BZFN1Y2Nlc3MoKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdC5vbkFkRmFpbGVkKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTHZCb3hWd19hZFN1Y2Nlc3NcIilcbiAgb25BZFN1Y2Nlc3MoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gdGhpcztcbiAgICBpZiAodGhpcy5ub2RlICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdhbWVUeXBlLCBvID0gR2FtZVV0aWxzLmdldElucHV0QWRkUHJvcFR5cGUoaSksIG4gPSB0aGlzLmNvbmZpZy5hZFNjYWxlIC0gMSwgciA9IDA7IHIgPCB0aGlzLmNvbmZpZy5pdGVtcy5sZW5ndGg7IHIrKykge1xuICAgICAgICB2YXIgYSA9IHRoaXMuY29uZmlnLml0ZW1zW3JdLFxuICAgICAgICAgIGwgPSB7XG4gICAgICAgICAgICBpbnB1dFR5cGU6IG8sXG4gICAgICAgICAgICBwcm9wVHlwZTogSXRlbVR5cGVLZXlbYS5pdGVtXSxcbiAgICAgICAgICAgIG51bTogYS5jb3VudCAqIG4sXG4gICAgICAgICAgICByZWFzb25JZDogRUdldEl0ZW1SZWFzb25JZC5MZXZlbEJveEFkLFxuICAgICAgICAgICAgcmVhc29uSW5mbzogXCLkuLvlhbPljaHlrp3nrrHlpZblirFf55yL5bm/5ZGK57+75YCNX+WIsOi+vuesrFwiICsgdGhpcy5yZXdhcmRMZXZlbCArIFwi5YWzXCJcbiAgICAgICAgICB9O1xuICAgICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQobCk7XG4gICAgICB9XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkNoZXN0X0FkQ2xvc2VcIiwgdGhpcywgW3tcbiAgICAgICAgcmVmcmVzaEljb246IHRoaXMucmVmcmVzaEljb24sXG4gICAgICAgIHJlZnJlc2hWYWx1ZTogdGhpcy5yZWZyZXNoVmFsdWUsXG4gICAgICAgIGhpbnRJY29uOiB0aGlzLmhpbnRJY29uLFxuICAgICAgICBoaW50VmFsdWU6IHRoaXMuaGludFZhbHVlLFxuICAgICAgICBhZENsYWltQnRuOiB0aGlzLmFkQ2xhaW1CdG4sXG4gICAgICAgIGNsYWltQnRuOiB0aGlzLmNsYWltQnRuLFxuICAgICAgICBhZFNjYWxlOiBudWxsID09PSAodCA9IHRoaXMuY29uZmlnKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmFkU2NhbGUsXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZS5oaWRlQW5pbSgpO1xuICAgICAgICB9XG4gICAgICB9XSkgfHwgdGhpcy5oaWRlQW5pbSgpO1xuICAgIH1cbiAgfVxuICBzaG93QWRSZXdhcmRzKHQgPSB0cnVlKSB7XG4gICAgdmFyIGUsIGksIG8sIG47XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pKSB7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuY2xhaW1CdG4uc2V0UG9zaXRpb24odGhpcy5jZW50ZXJCdG5Qb3MpO1xuICAgICAgdGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5za2lwQ2xhaW1Eb3QgPSB0cnVlO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIHIgPSBmdW5jdGlvbiByKHQsIGUpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgIGkucGFyZW50ID0gdC5wYXJlbnQ7XG4gICAgICAgICAgICBpLnNjYWxlID0gdC5zY2FsZTtcbiAgICAgICAgICAgIGkuYW5nbGUgPSB0LmFuZ2xlO1xuICAgICAgICAgICAgaS5zZXRQb3NpdGlvbih0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICBpLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgY2MudHdlZW4odCkudG8oMC4xNjcsIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDMwLCAwKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgaS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zNywgMCk7XG4gICAgICAgICAgICB2YXIgbyA9IGNjLnR3ZWVuKCkudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDMsIDApXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICAgIH0pLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuID0gY2MudHdlZW4oKS50bygwLjQsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy50d2VlbihpKS5wYXJhbGxlbChvLCBuKS5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKHZhciBzID0gX192YWx1ZXModGhpcy5jb25maWcuaXRlbXMpLCBsID0gcy5uZXh0KCk7ICFsLmRvbmU7IGwgPSBzLm5leHQoKSkge1xuICAgICAgICAgICAgdmFyIGMgPSBsLnZhbHVlO1xuICAgICAgICAgICAgcih0aGlzLmdldFJld2FyZE5vZGVzKGMuaXRlbSkudmFsdWUsIGMuY291bnQgKiB0aGlzLmNvbmZpZy5hZFNjYWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsICYmICFsLmRvbmUgJiYgKGkgPSBzLnJldHVybikgJiYgaS5jYWxsKHMpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB0cnkge1xuICAgICAgICBmb3IgKHZhciBwID0gX192YWx1ZXModGhpcy5jb25maWcuaXRlbXMpLCBkID0gcC5uZXh0KCk7ICFkLmRvbmU7IGQgPSBwLm5leHQoKSkge1xuICAgICAgICAgIGMgPSBkLnZhbHVlO1xuICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkTm9kZXMoYy5pdGVtKS52YWx1ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyhjLmNvdW50ICogdGhpcy5jb25maWcuYWRTY2FsZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgbyA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkICYmICFkLmRvbmUgJiYgKG4gPSBwLnJldHVybikgJiYgbi5jYWxsKHApO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChvKSB0aHJvdyBvLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTHZCb3hWd19hZEZhaWxlZFwiKVxuICBvbkFkRmFpbGVkKCkge1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5ub2RlLnBhcmVudCkgJiYgKHRoaXMubm9kZS5wYXJlbnQub3BhY2l0eSA9IDI1NSk7XG4gICAgICB0aGlzLmNhbkNsaWNrQmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgfVxuICB9XG4gIG9uQ2xhaW1CdG5DbGljaygpIHtcbiAgICBpZiAodGhpcy5za2lwQ2xhaW1Eb3QpIHRoaXMuaGlkZUFuaW0oKTtlbHNlIHtcbiAgICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCBmYWxzZSk7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90VmljdG9yeUNoZXN0KEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUuQ2xhaW1SZXdhcmQpO1xuICAgICAgdGhpcy5oaWRlQW5pbSgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkx2Qm94VndfaW5pdENvbXBzXCIpXG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHRoaXMuY2VudGVyQnRuUG9zLmFkZFNlbGYodGhpcy5jbGFpbUJ0bi5wb3NpdGlvbik7XG4gICAgdGhpcy5jZW50ZXJCdG5Qb3MuYWRkU2VsZih0aGlzLmFkQ2xhaW1CdG4ucG9zaXRpb24pO1xuICAgIHRoaXMuY2VudGVyQnRuUG9zLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYW5pbVNrZWxldG9uLm5vZGUpO1xuICAgIHRoaXMuYW5pbVByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICB0aGlzLmhpZGVOb2RlcygpO1xuICB9XG4gIGhpZGVOb2RlcygpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLnJlZnJlc2hJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWZyZXNoVmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmhpbnRJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5oaW50VmFsdWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmFkQ2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXdhcmRUaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHBsYXlPcGVuQW5pbSgpIHtcbiAgICB0aGlzLmhpZGVOb2RlcygpO1xuICAgIHRoaXMucGxheUNoZXN0QXBwZWFyQW5pbSgpO1xuICAgIHRoaXMucGxheUJ0bkFuaW0oKTtcbiAgICB0aGlzLnBsYXlSZXdhcmRzVGlwQW5pbSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTHZCb3hWd19nZXRBZEJ0blNjYWxlXCIpXG4gIGdldEFkQnRuU2NhbGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcGxheU9wZW5lZEFuaW0oKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgdGhpcy5oaWRlQW5pbSgpO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYWRDbGFpbUJ0bik7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5jbGFpbUJ0bik7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5yZXdhcmRUaXApO1xuICAgICAgdmFyIHQgPSB0aGlzLmdldEFkQnRuU2NhbGUoKTtcbiAgICAgIGlmICh0aGlzLmlzU2hvd0FkQnRuKCkpIHtcbiAgICAgICAgdGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRDbGFpbUJ0bi5zY2FsZSA9IHQ7XG4gICAgICB9IGVsc2UgdGhpcy5jbGFpbUJ0bi5zZXRQb3NpdGlvbih0aGlzLmFkQ2xhaW1CdG4ucG9zaXRpb24pO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5zY2FsZSA9IDE7XG4gICAgICB0aGlzLnJld2FyZFRpcC5zY2FsZSA9IDE7XG4gICAgICB0aGlzLnBsYXlSZXdhcmRzQW5pbSgpO1xuICAgICAgdGhpcy5zaG93UmV3YXJkTm9kZXMoKTtcbiAgICAgIHRoaXMucmV3YXJkVGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnJld2FyZFRpcC5zY2FsZSA9IDE7XG4gICAgfVxuICB9XG4gIHBsYXlDaGVzdEFwcGVhckFuaW0oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQm94KTtcbiAgICAgIH0sIDAuMjUpO1xuICAgICAgdGhpcy5hbmltU2tlbGV0b24uc2V0RXZlbnRMaXN0ZW5lcihudWxsKTtcbiAgICAgIHRoaXMuYW5pbVNrZWxldG9uLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgXCJldmVudF9yZXdhcmRzXCIgPT09IGkuZGF0YS5uYW1lICYmIHQuc2hvd1Jld2FyZE5vZGVzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluX1wiICsgdGhpcy5yZXdhcmRDb3VudCwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnBsYXlSZXdhcmRzQW5pbSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHBsYXlCdG5BbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikpIHtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB2YXIgZSA9IHRoaXMuZ2V0QWRCdG5TY2FsZSgpO1xuICAgICAgdGhpcy5hZENsYWltQnRuLnNjYWxlID0gMC42ICogZTtcbiAgICAgIHRoaXMuY2xhaW1CdG4uc2NhbGUgPSAwLjY7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5hZENsYWltQnRuKTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmNsYWltQnRuKTtcbiAgICAgIHZhciBpID0gY2MudHdlZW4oKS50bygwLjIsIHtcbiAgICAgICAgICBzY2FsZTogMS4wNSAqIGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgfSkudG8oMC4xNywge1xuICAgICAgICAgIHNjYWxlOiBlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgICAgfSksXG4gICAgICAgIG8gPSBjYy50d2VlbigpLnRvKDAuMiwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgIH0pLFxuICAgICAgICBuID0gMS45MztcbiAgICAgIGlmICh0aGlzLmlzU2hvd0FkQnRuKCkpIGNjLnR3ZWVuKHRoaXMuYWRDbGFpbUJ0bikuc2VxdWVuY2UoY2MudHdlZW4oKS5kZWxheSgxLjczKSwgY2MudHdlZW4odGhpcy5hZENsYWltQnRuKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5hZENsYWltQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9KSwgaS5jbG9uZSgpKS5zdGFydCgpO2Vsc2Uge1xuICAgICAgICB0aGlzLmNsYWltQnRuLnNldFBvc2l0aW9uKHRoaXMuYWRDbGFpbUJ0bi5wb3NpdGlvbik7XG4gICAgICAgIG4gPSAxLjczO1xuICAgICAgfVxuICAgICAgY2MudHdlZW4odGhpcy5jbGFpbUJ0bikuc2VxdWVuY2UoY2MudHdlZW4oKS5kZWxheShuKSwgY2MudHdlZW4odGhpcy5jbGFpbUJ0bikuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuY2xhaW1CdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0pLCBvLmNsb25lKCkpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTHZCb3hWd19pc1Nob3dBZEJ0blwiKVxuICBpc1Nob3dBZEJ0bigpIHtcbiAgICByZXR1cm4gaXNOZXR3b3JrQXZhaWxhYmxlKCk7XG4gIH1cbiAgcGxheVJld2FyZHNUaXBBbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmV3YXJkVGlwKSAmJiBjYy50d2Vlbih0aGlzLnJld2FyZFRpcCkuZGVsYXkoMC45KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQucmV3YXJkVGlwKSkge1xuICAgICAgICB0LnJld2FyZFRpcC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0LnJld2FyZFRpcC5zY2FsZSA9IDAuMztcbiAgICAgIH1cbiAgICB9KS50bygwLjIsIHtcbiAgICAgIHNjYWxlOiAxLjNcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgfSkudG8oMC4xNywge1xuICAgICAgc2NhbGU6IDAuOFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS50bygwLjEzLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHNob3dSZXdhcmROb2RlcygpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBpZiAodGhpcy52aXNpYmxlUmV3YXJkTm9kZXMgJiYgISh0aGlzLnZpc2libGVSZXdhcmROb2Rlcy5sZW5ndGggPD0gMCkpIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModGhpcy52aXNpYmxlUmV3YXJkTm9kZXMpLCBvID0gaS5uZXh0KCk7ICFvLmRvbmU7IG8gPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbiA9IG8udmFsdWU7XG4gICAgICAgIGNjLmlzVmFsaWQobikgJiYgKG4uYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG8gJiYgIW8uZG9uZSAmJiAoZSA9IGkucmV0dXJuKSAmJiBlLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheVJld2FyZHNBbmltKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pICYmIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluaXRfXCIgKyB0aGlzLnJld2FyZENvdW50LCAtMSk7XG4gIH1cbiAgaGlkZUFuaW0oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMiwge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBvcGFjaXR5OiAyNTVcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgfSkudG8oMC4xNywge1xuICAgICAgc2NhbGU6IDEuMDUsXG4gICAgICBvcGFjaXR5OiAyNTVcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgfSkudG8oMC4xMywge1xuICAgICAgc2NhbGU6IDAuMyxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZTtcbiAgICAgIG51bGwgPT09IChlID0gdC5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG59Il19