"use strict";
cc._RF.push(module, 'ddd3dR7OdJFJ4r4ew9HYESk', 'BoxOpenUI');
// subpackages/l_boxReward/Scripts/BoxOpenUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("../../../Scripts/core/simulator/events/SimulatorEvent");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BoxOpenUI = /** @class */ (function (_super) {
    __extends(BoxOpenUI, _super);
    function BoxOpenUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintValue = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.refreshIcon = null;
        _this.adClaimBtn = null;
        _this.claimBtn = null;
        _this.rewardTip = null;
        _this.config = null;
        _this.rewardLevel = 1;
        _this.showReward = false;
        _this.clickCount = 0;
        _this.canClickBg = false;
        _this.centerBtnPos = new cc.Vec3(0, 0, 0);
        _this.skipClaimDot = false;
        _this.animSkeleton = null;
        return _this;
    }
    Object.defineProperty(BoxOpenUI.prototype, "getAnimSkeleton", {
        get: function () {
            return this.animSkeleton;
        },
        enumerable: false,
        configurable: true
    });
    BoxOpenUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
    };
    BoxOpenUI.prototype.getRewardNodes = function () {
        return [{
                icon: this.refreshIcon,
                value: this.refreshValue
            }, {
                icon: this.hintIcon,
                value: this.hintValue
            }];
    };
    BoxOpenUI.prototype.showBoxOpenUI = function (t) {
        if (this.showReward) {
            if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
                this.adClaimBtn.getComponent(cc.Button).interactable = true;
                this.claimBtn.getComponent(cc.Button).interactable = true;
            }
        }
        else {
            this.showReward = true;
            var e = t.config, i = t.rewardLevel;
            this.config = e;
            this.rewardLevel = i;
            this.updateLabel();
            this.playOpenAnim();
            DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.OutGameMotivation);
            DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.DialogDisplayed);
        }
    };
    BoxOpenUI.prototype.registerButtons = function () {
        this.OnButtonClick(this.adClaimBtn, this.onAdClaimBtnClick.bind(this));
        this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        this.OnButtonClick(this.node, {
            func: this.onBgClick.bind(this),
            ignoreClickAudio: true
        });
    };
    BoxOpenUI.prototype.onBgClick = function () {
        var t;
        if (this.canClickBg) {
            this.clickCount++;
            this.clickCount >= 3 && (null === (t = this.delegate) || void 0 === t || t.close());
        }
    };
    BoxOpenUI.prototype.onAdClaimBtnClick = function () {
        var t = this;
        this.adClaimBtn.getComponent(cc.Button).interactable = false;
        this.claimBtn.getComponent(cc.Button).interactable = false;
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
    BoxOpenUI.prototype.onAdSuccess = function () {
        var t, e = this;
        if (this.node && cc.isValid(this.node)) {
            this.deliverTools();
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
    BoxOpenUI.prototype.deliverTools = function () {
        var t = this.config.refresh * (this.config.adScale - 1), e = this.config.hint * (this.config.adScale - 1), i = UserModel_1.default.getInstance().getMainGameData().gameType, o = GameUtils_1.default.getInputAddPropType(i), n = {
            inputType: o,
            propType: "shuffle",
            num: t,
            reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBoxAd,
            reasonInfo: "主关卡宝箱奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
        }, a = {
            inputType: o,
            propType: "hitTips",
            num: e,
            reasonId: GameTypeEnums_1.EGetItemReasonId.LevelBoxAd,
            reasonInfo: "主关卡宝箱奖励_看广告翻倍_到达第" + this.rewardLevel + "关"
        };
        GameInteraction_1.GameInteraction.input(n);
        GameInteraction_1.GameInteraction.input(a);
    };
    BoxOpenUI.prototype.getRewardEndCount = function () {
        return [this.config.refresh * this.config.adScale, this.config.hint * this.config.adScale];
    };
    BoxOpenUI.prototype.showAdRewards = function (t) {
        if (t === void 0) { t = true; }
        if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
            this.claimBtn.setPosition(this.centerBtnPos);
            this.adClaimBtn.active = false;
            this.claimBtn.getComponent(cc.Button).interactable = true;
            var e = __read(this.getRewardEndCount(), 2), i = e[0], o = e[1];
            this.skipClaimDot = true;
            if (t) {
                var n = function n(t, e) {
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
                n(this.refreshValue, i);
                n(this.hintValue, o);
            }
            else {
                this.refreshValue.getComponent(cc.Label).string = String(i);
                this.hintValue.getComponent(cc.Label).string = String(o);
            }
        }
    };
    BoxOpenUI.prototype.onAdFailed = function () {
        if (cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn)) {
            this.adClaimBtn.getComponent(cc.Button).interactable = true;
            this.claimBtn.getComponent(cc.Button).interactable = true;
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
        }
    };
    BoxOpenUI.prototype.onClaimBtnClick = function () {
        if (this.skipClaimDot)
            this.hideAnim();
        else {
            DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.OutGameMotivation, false);
            DGameBtnClick_1.DotGameBtnClick.dotVictoryChest(DGameBtnClick_1.EVictoryChestClickType.ClaimReward);
            this.hideAnim();
        }
    };
    BoxOpenUI.prototype.updateLabel = function () {
        var t, e;
        this.updateRewardCount();
        I18NStrings_1.default.setText(null === (t = this.adClaimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim x" + this.config.adScale, "Common_Reward_Claim_Ads", [this.config.adScale]);
        I18NStrings_1.default.setText(null === (e = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === e ? void 0 : e.node, "Claim", "LeaderBoard_Reward_Claim");
        this.updateTipLabel();
    };
    BoxOpenUI.prototype.updateRewardCount = function () {
        this.hintValue.getComponent(cc.Label).string = this.config.hint.toString();
        this.refreshValue.getComponent(cc.Label).string = this.config.refresh.toString();
    };
    BoxOpenUI.prototype.updateTipLabel = function () {
        I18NStrings_1.default.setText(this.rewardTip, "Rewards", "Common_Reward_Title");
    };
    BoxOpenUI.prototype.getAdBtnScale = function () {
        return 1;
    };
    BoxOpenUI.prototype.initComponents = function () {
        var t = this;
        this.centerBtnPos.addSelf(this.adClaimBtn.position);
        this.centerBtnPos.addSelf(this.claimBtn.position);
        this.centerBtnPos.multiplyScalar(0.5);
        this.addBgNode();
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
        this.reset();
    };
    BoxOpenUI.prototype.addBgNode = function () {
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
    BoxOpenUI.prototype.reset = function () {
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
    BoxOpenUI.prototype.playOpenAnim = function () {
        var t = this;
        this.reset();
        if (cc.isValid(this.animSkeleton) && cc.isValid(this.adClaimBtn) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animSkeleton.setEventListener(function (e, i) {
                "event_rewards" === i.data.name && t.onOpenAnimFinished();
            });
            this.animProxy.setAnimation("in", 1, function () {
                t.playRewardsAnim();
            });
            this.adClaimBtn.active = false;
            this.claimBtn.active = false;
            var e = this.getAdBtnScale();
            this.adClaimBtn.scale = 0.6 * e;
            this.claimBtn.scale = 0.6;
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
            this.playRewardsTipAnim(this.rewardTip);
        }
    };
    BoxOpenUI.prototype.isShowAdBtn = function () {
        return CommonUtils_1.isNetworkAvailable();
    };
    BoxOpenUI.prototype.playRewardsTipAnim = function (t) {
        cc.tween(t).delay(0.9).call(function () {
            t.active = true;
            t.scale = 0.3;
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
    BoxOpenUI.prototype.onOpenAnimFinished = function () {
        if (cc.isValid(this.refreshIcon) && cc.isValid(this.refreshValue) && cc.isValid(this.hintIcon) && cc.isValid(this.hintValue)) {
            this.refreshIcon.active = true;
            this.refreshValue.active = true;
            this.hintIcon.active = true;
            this.hintValue.active = true;
        }
    };
    BoxOpenUI.prototype.playRewardsAnim = function () {
        cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init", -1);
    };
    BoxOpenUI.prototype.hideAnim = function () {
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
            t.onNextLevel();
        }).start();
    };
    BoxOpenUI.prototype.onNextLevel = function () {
        var t, e, i = mj.getClassByName("NormalBoxTrait");
        if (i && true === i.getInstance().eventEnabled)
            null === (t = this.delegate) || void 0 === t || t.close();
        else {
            var o = ControllerManager_1.default.getInstance().getControByName("WinController");
            o && o.close();
            null === (e = this.delegate) || void 0 === e || e.close();
            mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
        }
    };
    BoxOpenUI.prefabUrl = "prefabs/boxReward/OpenAnim";
    __decorate([
        mj.node("HintValue")
    ], BoxOpenUI.prototype, "hintValue", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], BoxOpenUI.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], BoxOpenUI.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("RefreshIcon")
    ], BoxOpenUI.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], BoxOpenUI.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], BoxOpenUI.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], BoxOpenUI.prototype, "rewardTip", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], BoxOpenUI.prototype, "animSkeleton", void 0);
    __decorate([
        mj.traitEvent("BoxOpenUI_adBtnClick")
    ], BoxOpenUI.prototype, "onAdClaimBtnClick", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_adSuccess")
    ], BoxOpenUI.prototype, "onAdSuccess", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_deliverTools")
    ], BoxOpenUI.prototype, "deliverTools", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_getRwdEndCount")
    ], BoxOpenUI.prototype, "getRewardEndCount", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_adFailed")
    ], BoxOpenUI.prototype, "onAdFailed", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_updateLabel")
    ], BoxOpenUI.prototype, "updateLabel", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_updateRwdCount")
    ], BoxOpenUI.prototype, "updateRewardCount", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_updTipLabel")
    ], BoxOpenUI.prototype, "updateTipLabel", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_getAdBtnScale")
    ], BoxOpenUI.prototype, "getAdBtnScale", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_initComponents")
    ], BoxOpenUI.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_isShowAdBtn")
    ], BoxOpenUI.prototype, "isShowAdBtn", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_plyRwdTipAnim")
    ], BoxOpenUI.prototype, "playRewardsTipAnim", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_onOpenFin")
    ], BoxOpenUI.prototype, "onOpenAnimFinished", null);
    __decorate([
        mj.traitEvent("BoxOpenUI_plyRwdAnim")
    ], BoxOpenUI.prototype, "playRewardsAnim", null);
    BoxOpenUI = __decorate([
        mj.class
    ], BoxOpenUI);
    return BoxOpenUI;
}(UIView_1.default));
exports.default = BoxOpenUI;

cc._RF.pop();