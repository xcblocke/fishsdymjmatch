
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/BoxOpenUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL0JveE9wZW5VSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9HO0FBQ3BHLHdGQUF3RztBQUN4RyxvRkFBbUY7QUFDbkYsMkVBQXNFO0FBQ3RFLCtEQUEwRDtBQUMxRCw0RUFBa0Y7QUFDbEYsZ0VBQTJEO0FBQzNELHlFQUFvRTtBQUNwRSwrRUFBZ0Y7QUFDaEYsbUVBQW9FO0FBQ3BFLHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsb0VBQTZGO0FBQzdGLDBGQUFxRjtBQUNyRiw4REFBeUQ7QUFDekQsMkVBQXNFO0FBQ3RFLHNFQUFpRTtBQUNqRSw0RUFBdUU7QUFFdkU7SUFBdUMsNkJBQU07SUFBN0M7UUFBQSxxRUFzWkM7UUFwWkMsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsa0JBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsa0JBQVksR0FBYyxJQUFJLENBQUM7O0lBK1hqQyxDQUFDO0lBN1hDLHNCQUFJLHNDQUFlO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFB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d0IsQ0FBQztpREFzQnZDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3NEQUd6QztJQXlERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7K0NBU25DO0lBU0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO2dEQU90QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztzREFJekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7bURBR3RDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2tEQUd4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzttREF1QnpDO0lBK0VEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztnREFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7dURBa0J4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt1REFRcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7b0RBR3JDO0lBclhrQixTQUFTO1FBRDdCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksU0FBUyxDQXNaN0I7SUFBRCxnQkFBQztDQXRaRCxBQXNaQyxDQXRac0MsZ0JBQU0sR0FzWjVDO2tCQXRab0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHZXRJdGVtUmVhc29uSWQsIEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2V2ZW50cy9TaW11bGF0b3JFdmVudCc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IHsgaXNOZXR3b3JrQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBEb3RBZFJld2FyZEVudGVyIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREFkUmV3YXJkRW50ZXInO1xuaW1wb3J0IHsgRG90QWRWaXNpdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RBZFZpc2l0JztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3dTdGFnZSc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBBZGFwdGVyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0FkYXB0ZXInO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveE9wZW5VSSBleHRlbmRzIFVJVmlldyB7XG4gIEBtai5ub2RlKFwiSGludFZhbHVlXCIpXG4gIGhpbnRWYWx1ZTogXCJIaW50VmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFZhbHVlXCIpXG4gIHJlZnJlc2hWYWx1ZTogXCJSZWZyZXNoVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludEljb25cIilcbiAgaGludEljb246IFwiSGludEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaEljb25cIilcbiAgcmVmcmVzaEljb246IFwiUmVmcmVzaEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQWRDbGFpbUJ0blwiKVxuICBhZENsYWltQnRuOiBcIkFkQ2xhaW1CdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQ2xhaW1CdG5cIilcbiAgY2xhaW1CdG46IFwiQ2xhaW1CdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmV3YXJkc1RpcFwiKVxuICByZXdhcmRUaXA6IFwiUmV3YXJkc1RpcFwiID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgcmV3YXJkTGV2ZWwgPSAxO1xuICBzaG93UmV3YXJkID0gZmFsc2U7XG4gIGNsaWNrQ291bnQgPSAwO1xuICBjYW5DbGlja0JnID0gZmFsc2U7XG4gIGNlbnRlckJ0blBvcyA9IG5ldyBjYy5WZWMzKDAsIDAsIDApO1xuICBza2lwQ2xhaW1Eb3QgPSBmYWxzZTtcbiAgQG1qLmNvbXBvbmVudChcIkJveEFuaW1cIiwgc3AuU2tlbGV0b24pXG4gIGFuaW1Ta2VsZXRvbjogXCJCb3hBbmltXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2JveFJld2FyZC9PcGVuQW5pbVwiO1xuICBnZXQgZ2V0QW5pbVNrZWxldG9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1Ta2VsZXRvbjtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG4gIH1cbiAgZ2V0UmV3YXJkTm9kZXMoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBpY29uOiB0aGlzLnJlZnJlc2hJY29uLFxuICAgICAgdmFsdWU6IHRoaXMucmVmcmVzaFZhbHVlXG4gICAgfSwge1xuICAgICAgaWNvbjogdGhpcy5oaW50SWNvbixcbiAgICAgIHZhbHVlOiB0aGlzLmhpbnRWYWx1ZVxuICAgIH1dO1xuICB9XG4gIHNob3dCb3hPcGVuVUkodCkge1xuICAgIGlmICh0aGlzLnNob3dSZXdhcmQpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSkge1xuICAgICAgICB0aGlzLmFkQ2xhaW1CdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dSZXdhcmQgPSB0cnVlO1xuICAgICAgdmFyIGUgPSB0LmNvbmZpZyxcbiAgICAgICAgaSA9IHQucmV3YXJkTGV2ZWw7XG4gICAgICB0aGlzLmNvbmZpZyA9IGU7XG4gICAgICB0aGlzLnJld2FyZExldmVsID0gaTtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWwoKTtcbiAgICAgIHRoaXMucGxheU9wZW5BbmltKCk7XG4gICAgICBEb3RBZFJld2FyZEVudGVyLmRvdCh0cnVlLCBFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbik7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90VmljdG9yeUNoZXN0KEVWaWN0b3J5Q2hlc3RDbGlja1R5cGUuRGlhbG9nRGlzcGxheWVkKTtcbiAgICB9XG4gIH1cbiAgcmVnaXN0ZXJCdXR0b25zKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmFkQ2xhaW1CdG4sIHRoaXMub25BZENsYWltQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuY2xhaW1CdG4sIHRoaXMub25DbGFpbUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5vZGUsIHtcbiAgICAgIGZ1bmM6IHRoaXMub25CZ0NsaWNrLmJpbmQodGhpcyksXG4gICAgICBpZ25vcmVDbGlja0F1ZGlvOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25CZ0NsaWNrKCkge1xuICAgIHZhciB0O1xuICAgIGlmICh0aGlzLmNhbkNsaWNrQmcpIHtcbiAgICAgIHRoaXMuY2xpY2tDb3VudCsrO1xuICAgICAgdGhpcy5jbGlja0NvdW50ID49IDMgJiYgKG51bGwgPT09ICh0ID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQuY2xvc2UoKSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX2FkQnRuQ2xpY2tcIilcbiAgb25BZENsYWltQnRuQ2xpY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYWRDbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNsYWltQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCB0cnVlKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24pO1xuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFZpY3RvcnlDaGVzdChFVmljdG9yeUNoZXN0Q2xpY2tUeXBlLkNsYWltTXVsdGlwbGVSZXdhcmQsIHRoaXMuY29uZmlnLmFkU2NhbGUpO1xuICAgIGlmIChBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCkpIHtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IHRydWU7XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkNoZXN0X0FkQ2xrU2hvd1wiLCB0aGlzLCBbXSkgfHwgKHRoaXMubm9kZS5wYXJlbnQub3BhY2l0eSA9IDApO1xuICAgIH1cbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wbGF5VmlkZW9BZChFQWRQb3NpdGlvbi5PdXRHYW1lTW90aXZhdGlvbiwge1xuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25BZFN1Y2Nlc3MoKTtcbiAgICAgIH0sXG4gICAgICBvbkZhaWxlZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdC5vbkFkRmFpbGVkKGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX2FkU3VjY2Vzc1wiKVxuICBvbkFkU3VjY2VzcygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJUb29scygpO1xuICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJDaGVzdF9BZENsb3NlXCIsIHRoaXMsIFt7XG4gICAgICAgIHJlZnJlc2hJY29uOiB0aGlzLnJlZnJlc2hJY29uLFxuICAgICAgICByZWZyZXNoVmFsdWU6IHRoaXMucmVmcmVzaFZhbHVlLFxuICAgICAgICBoaW50SWNvbjogdGhpcy5oaW50SWNvbixcbiAgICAgICAgaGludFZhbHVlOiB0aGlzLmhpbnRWYWx1ZSxcbiAgICAgICAgYWRDbGFpbUJ0bjogdGhpcy5hZENsYWltQnRuLFxuICAgICAgICBjbGFpbUJ0bjogdGhpcy5jbGFpbUJ0bixcbiAgICAgICAgYWRTY2FsZTogbnVsbCA9PT0gKHQgPSB0aGlzLmNvbmZpZykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5hZFNjYWxlLFxuICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGUuaGlkZUFuaW0oKTtcbiAgICAgICAgfVxuICAgICAgfV0pIHx8IHRoaXMuaGlkZUFuaW0oKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb3hPcGVuVUlfZGVsaXZlclRvb2xzXCIpXG4gIGRlbGl2ZXJUb29scygpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29uZmlnLnJlZnJlc2ggKiAodGhpcy5jb25maWcuYWRTY2FsZSAtIDEpLFxuICAgICAgZSA9IHRoaXMuY29uZmlnLmhpbnQgKiAodGhpcy5jb25maWcuYWRTY2FsZSAtIDEpLFxuICAgICAgaSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lRGF0YSgpLmdhbWVUeXBlLFxuICAgICAgbyA9IEdhbWVVdGlscy5nZXRJbnB1dEFkZFByb3BUeXBlKGkpLFxuICAgICAgbiA9IHtcbiAgICAgICAgaW5wdXRUeXBlOiBvLFxuICAgICAgICBwcm9wVHlwZTogXCJzaHVmZmxlXCIsXG4gICAgICAgIG51bTogdCxcbiAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuTGV2ZWxCb3hBZCxcbiAgICAgICAgcmVhc29uSW5mbzogXCLkuLvlhbPljaHlrp3nrrHlpZblirFf55yL5bm/5ZGK57+75YCNX+WIsOi+vuesrFwiICsgdGhpcy5yZXdhcmRMZXZlbCArIFwi5YWzXCJcbiAgICAgIH0sXG4gICAgICBhID0ge1xuICAgICAgICBpbnB1dFR5cGU6IG8sXG4gICAgICAgIHByb3BUeXBlOiBcImhpdFRpcHNcIixcbiAgICAgICAgbnVtOiBlLFxuICAgICAgICByZWFzb25JZDogRUdldEl0ZW1SZWFzb25JZC5MZXZlbEJveEFkLFxuICAgICAgICByZWFzb25JbmZvOiBcIuS4u+WFs+WNoeWuneeuseWlluWKsV/nnIvlub/lkYrnv7vlgI1f5Yiw6L6+56ysXCIgKyB0aGlzLnJld2FyZExldmVsICsgXCLlhbNcIlxuICAgICAgfTtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQobik7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KGEpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX2dldFJ3ZEVuZENvdW50XCIpXG4gIGdldFJld2FyZEVuZENvdW50KCkge1xuICAgIHJldHVybiBbdGhpcy5jb25maWcucmVmcmVzaCAqIHRoaXMuY29uZmlnLmFkU2NhbGUsIHRoaXMuY29uZmlnLmhpbnQgKiB0aGlzLmNvbmZpZy5hZFNjYWxlXTtcbiAgfVxuICBzaG93QWRSZXdhcmRzKHQgPSB0cnVlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiBjYy5pc1ZhbGlkKHRoaXMuY2xhaW1CdG4pKSB7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuY2xhaW1CdG4uc2V0UG9zaXRpb24odGhpcy5jZW50ZXJCdG5Qb3MpO1xuICAgICAgdGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgdmFyIGUgPSBfX3JlYWQodGhpcy5nZXRSZXdhcmRFbmRDb3VudCgpLCAyKSxcbiAgICAgICAgaSA9IGVbMF0sXG4gICAgICAgIG8gPSBlWzFdO1xuICAgICAgdGhpcy5za2lwQ2xhaW1Eb3QgPSB0cnVlO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdmFyIG4gPSBmdW5jdGlvbiBuKHQsIGUpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICAgICAgdmFyIGkgPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgIGkucGFyZW50ID0gdC5wYXJlbnQ7XG4gICAgICAgICAgICBpLnNjYWxlID0gdC5zY2FsZTtcbiAgICAgICAgICAgIGkuYW5nbGUgPSB0LmFuZ2xlO1xuICAgICAgICAgICAgaS5zZXRQb3NpdGlvbih0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICBpLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgY2MudHdlZW4odCkudG8oMC4xNjcsIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDMwLCAwKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgaS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zNywgMCk7XG4gICAgICAgICAgICB2YXIgbyA9IGNjLnR3ZWVuKCkudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDMsIDApXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICAgIH0pLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuID0gY2MudHdlZW4oKS50bygwLjQsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy50d2VlbihpKS5wYXJhbGxlbChvLCBuKS5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbih0aGlzLnJlZnJlc2hWYWx1ZSwgaSk7XG4gICAgICAgIG4odGhpcy5oaW50VmFsdWUsIG8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoVmFsdWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoaSk7XG4gICAgICAgIHRoaXMuaGludFZhbHVlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RyaW5nKG8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJveE9wZW5VSV9hZEZhaWxlZFwiKVxuICBvbkFkRmFpbGVkKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSkge1xuICAgICAgdGhpcy5hZENsYWltQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmNsYWltQnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICB9XG4gIH1cbiAgb25DbGFpbUJ0bkNsaWNrKCkge1xuICAgIGlmICh0aGlzLnNraXBDbGFpbURvdCkgdGhpcy5oaWRlQW5pbSgpO2Vsc2Uge1xuICAgICAgRG90QWRWaXNpdC5kb3RBZFZpc2l0UmV3YXJkQUQoRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb24sIGZhbHNlKTtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RWaWN0b3J5Q2hlc3QoRVZpY3RvcnlDaGVzdENsaWNrVHlwZS5DbGFpbVJld2FyZCk7XG4gICAgICB0aGlzLmhpZGVBbmltKCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX3VwZGF0ZUxhYmVsXCIpXG4gIHVwZGF0ZUxhYmVsKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHRoaXMudXBkYXRlUmV3YXJkQ291bnQoKTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KG51bGwgPT09ICh0ID0gdGhpcy5hZENsYWltQnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm5vZGUsIFwiQ2xhaW0geFwiICsgdGhpcy5jb25maWcuYWRTY2FsZSwgXCJDb21tb25fUmV3YXJkX0NsYWltX0Fkc1wiLCBbdGhpcy5jb25maWcuYWRTY2FsZV0pO1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQobnVsbCA9PT0gKGUgPSB0aGlzLmNsYWltQnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGUsIFwiQ2xhaW1cIiwgXCJMZWFkZXJCb2FyZF9SZXdhcmRfQ2xhaW1cIik7XG4gICAgdGhpcy51cGRhdGVUaXBMYWJlbCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX3VwZGF0ZVJ3ZENvdW50XCIpXG4gIHVwZGF0ZVJld2FyZENvdW50KCkge1xuICAgIHRoaXMuaGludFZhbHVlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb25maWcuaGludC50b1N0cmluZygpO1xuICAgIHRoaXMucmVmcmVzaFZhbHVlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5jb25maWcucmVmcmVzaC50b1N0cmluZygpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX3VwZFRpcExhYmVsXCIpXG4gIHVwZGF0ZVRpcExhYmVsKCkge1xuICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5yZXdhcmRUaXAsIFwiUmV3YXJkc1wiLCBcIkNvbW1vbl9SZXdhcmRfVGl0bGVcIik7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb3hPcGVuVUlfZ2V0QWRCdG5TY2FsZVwiKVxuICBnZXRBZEJ0blNjYWxlKCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX2luaXRDb21wb25lbnRzXCIpXG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLmNlbnRlckJ0blBvcy5hZGRTZWxmKHRoaXMuYWRDbGFpbUJ0bi5wb3NpdGlvbik7XG4gICAgdGhpcy5jZW50ZXJCdG5Qb3MuYWRkU2VsZih0aGlzLmNsYWltQnRuLnBvc2l0aW9uKTtcbiAgICB0aGlzLmNlbnRlckJ0blBvcy5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIHRoaXMuYWRkQmdOb2RlKCk7XG4gICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYW5pbVNrZWxldG9uLm5vZGUpO1xuICAgIHRoaXMuYW5pbVByb3h5LnJlc2V0KFwiXCIpO1xuICAgIHRoaXMuYW5pbVByb3h5Lm1hcmtSZWFkeShcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uXzFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucmVmcmVzaEljb247XG4gICAgfSk7XG4gICAgdGhpcy5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfbnVtXzFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQucmVmcmVzaFZhbHVlO1xuICAgIH0pO1xuICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25fMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5oaW50SWNvbjtcbiAgICB9KTtcbiAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdC5oaW50VmFsdWU7XG4gICAgfSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG4gIGFkZEJnTm9kZSgpIHtcbiAgICB2YXIgdCA9IG5ldyBjYy5Ob2RlKFwiYmdcIik7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodCwgXCJ0ZXh0dXJlL3dpbi9yZXN1bHRfbWFza1wiKTtcbiAgICB0LnNldENvbnRlbnRTaXplKDEwODAsIDE5MjApO1xuICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0KTtcbiAgICB0LnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICB0LmFkZENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblRvcCA9IHRydWU7XG4gICAgdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduQm90dG9tID0gdHJ1ZTtcbiAgICB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS50b3AgPSAwO1xuICAgIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuYm90dG9tID0gMDtcbiAgICB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpLmxlZnQgPSAwO1xuICAgIHQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkucmlnaHQgPSAwO1xuICAgIEFkYXB0ZXIuaWdub3JlU2FmZVJlY3QodCk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5yZWZyZXNoSWNvbikgJiYgY2MuaXNWYWxpZCh0aGlzLnJlZnJlc2hWYWx1ZSkgJiYgY2MuaXNWYWxpZCh0aGlzLmhpbnRJY29uKSAmJiBjYy5pc1ZhbGlkKHRoaXMuaGludFZhbHVlKSAmJiBjYy5pc1ZhbGlkKHRoaXMuYWRDbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSAmJiBjYy5pc1ZhbGlkKHRoaXMucmV3YXJkVGlwKSkge1xuICAgICAgdGhpcy5yZWZyZXNoSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmcmVzaFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5oaW50SWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGludFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmV3YXJkVGlwLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBwbGF5T3BlbkFuaW0oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmFuaW1Ta2VsZXRvbikgJiYgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLnJld2FyZFRpcCkpIHtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC4yNSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkJveCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdGhpcy5hbmltU2tlbGV0b24uc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBcImV2ZW50X3Jld2FyZHNcIiA9PT0gaS5kYXRhLm5hbWUgJiYgdC5vbk9wZW5BbmltRmluaXNoZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltUHJveHkuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnBsYXlSZXdhcmRzQW5pbSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFkQ2xhaW1CdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIGUgPSB0aGlzLmdldEFkQnRuU2NhbGUoKTtcbiAgICAgIHRoaXMuYWRDbGFpbUJ0bi5zY2FsZSA9IDAuNiAqIGU7XG4gICAgICB0aGlzLmNsYWltQnRuLnNjYWxlID0gMC42O1xuICAgICAgdmFyIGkgPSBjYy50d2VlbigpLnRvKDAuMiwge1xuICAgICAgICAgIHNjYWxlOiAxLjA1ICogZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgICAgICB9KS50bygwLjE3LCB7XG4gICAgICAgICAgc2NhbGU6IGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJblxuICAgICAgICB9KSxcbiAgICAgICAgbyA9IGNjLnR3ZWVuKCkudG8oMC4yLCB7XG4gICAgICAgICAgc2NhbGU6IDEuMDVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgfSkudG8oMC4xNywge1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICAgICAgfSksXG4gICAgICAgIG4gPSAxLjkzO1xuICAgICAgaWYgKHRoaXMuaXNTaG93QWRCdG4oKSkgY2MudHdlZW4odGhpcy5hZENsYWltQnRuKS5zZXF1ZW5jZShjYy50d2VlbigpLmRlbGF5KDEuNzMpLCBjYy50d2Vlbih0aGlzLmFkQ2xhaW1CdG4pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmFkQ2xhaW1CdG4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH0pLCBpLmNsb25lKCkpLnN0YXJ0KCk7ZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhaW1CdG4uc2V0UG9zaXRpb24odGhpcy5hZENsYWltQnRuLnBvc2l0aW9uKTtcbiAgICAgICAgbiA9IDEuNzM7XG4gICAgICB9XG4gICAgICBjYy50d2Vlbih0aGlzLmNsYWltQnRuKS5zZXF1ZW5jZShjYy50d2VlbigpLmRlbGF5KG4pLCBjYy50d2Vlbih0aGlzLmNsYWltQnRuKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5jbGFpbUJ0bi5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSksIG8uY2xvbmUoKSkuc3RhcnQoKTtcbiAgICAgIHRoaXMucGxheVJld2FyZHNUaXBBbmltKHRoaXMucmV3YXJkVGlwKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb3hPcGVuVUlfaXNTaG93QWRCdG5cIilcbiAgaXNTaG93QWRCdG4oKSB7XG4gICAgcmV0dXJuIGlzTmV0d29ya0F2YWlsYWJsZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX3BseVJ3ZFRpcEFuaW1cIilcbiAgcGxheVJld2FyZHNUaXBBbmltKHQpIHtcbiAgICBjYy50d2Vlbih0KS5kZWxheSgwLjkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdC5zY2FsZSA9IDAuMztcbiAgICB9KS50bygwLjIsIHtcbiAgICAgIHNjYWxlOiAxLjNcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgfSkudG8oMC4xNywge1xuICAgICAgc2NhbGU6IDAuOFxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS50bygwLjEzLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXRcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX29uT3BlbkZpblwiKVxuICBvbk9wZW5BbmltRmluaXNoZWQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5yZWZyZXNoSWNvbikgJiYgY2MuaXNWYWxpZCh0aGlzLnJlZnJlc2hWYWx1ZSkgJiYgY2MuaXNWYWxpZCh0aGlzLmhpbnRJY29uKSAmJiBjYy5pc1ZhbGlkKHRoaXMuaGludFZhbHVlKSkge1xuICAgICAgdGhpcy5yZWZyZXNoSWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5yZWZyZXNoVmFsdWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGludEljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGludFZhbHVlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQm94T3BlblVJX3BseVJ3ZEFuaW1cIilcbiAgcGxheVJld2FyZHNBbmltKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pICYmIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICB9XG4gIGhpZGVBbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjIsIHtcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgb3BhY2l0eTogMjU1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgIHNjYWxlOiAxLjA1LFxuICAgICAgb3BhY2l0eTogMjU1XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLnRvKDAuMTMsIHtcbiAgICAgIHNjYWxlOiAwLjMsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5vbk5leHRMZXZlbCgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgb25OZXh0TGV2ZWwoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSA9IG1qLmdldENsYXNzQnlOYW1lKFwiTm9ybWFsQm94VHJhaXRcIik7XG4gICAgaWYgKGkgJiYgdHJ1ZSA9PT0gaS5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCkgbnVsbCA9PT0gKHQgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO2Vsc2Uge1xuICAgICAgdmFyIG8gPSBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldENvbnRyb0J5TmFtZShcIldpbkNvbnRyb2xsZXJcIik7XG4gICAgICBvICYmIG8uY2xvc2UoKTtcbiAgICAgIG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwpO1xuICAgIH1cbiAgfVxufSJdfQ==