"use strict";
cc._RF.push(module, 'a75d1vs8C1KtZAknJSe1/b6', 'RankBoxView');
// subpackages/l_rank/Scripts/util/RankBoxView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var RankModel_1 = require("../RankModel");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var AdManager_1 = require("../../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../../Scripts/gamePlay/dot/DGameAdShow");
var CommonUtils_1 = require("../../../../Scripts/framework/utils/CommonUtils");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var RankEnums_1 = require("./RankEnums");
var IUserData_1 = require("../../../../Scripts/user/IUserData");
var RankBoxView = /** @class */ (function (_super) {
    __extends(RankBoxView, _super);
    function RankBoxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bgNode = null;
        _this._btnContinue = null;
        _this._labelContinue = null;
        _this._lightSkeleton = null;
        _this._page1TitleNode = null;
        _this._descRewardNode = null;
        _this._boxSpine = null;
        _this._page2Node = null;
        _this._page2TitleNode = null;
        _this._claimBtnNode = null;
        _this._claimAdBtnNode = null;
        _this._claimLabelNode = null;
        _this._claimAdLabelNode = null;
        _this._refreshIconNode = null;
        _this._refreshValueNode = null;
        _this._hintIconNode = null;
        _this._hintValueNode = null;
        _this._undoTipIconNode = null;
        _this._undoTipValueNode = null;
        _this.canClickBg = false;
        _this.clickCount = 0;
        _this.centerBtnPos = new cc.Vec3(0, 0, 0);
        _this.skipClaimDot = false;
        _this.showRewardsNodes = [];
        _this._boxIndex = 4;
        _this._myRank = 0;
        _this._isGaming = false;
        _this._hasAddedBaseReward = false;
        _this._reward = null;
        return _this;
    }
    RankBoxView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._bgNode = cc.find("bg", this.node);
        this._btnContinue = cc.find("content/btn_continue", this.node);
        this._labelContinue = cc.find("content/lbl_lv", this._btnContinue);
        this._lightSkeleton = cc.find("light_node/spin_light", this.node).getComponent(sp.Skeleton);
        this._boxSpine = cc.find("content/boxAni", this.node).getComponent(sp.Skeleton);
        this._page1TitleNode = cc.find("page1_title", this.node);
        this._descRewardNode = cc.find("des_reward", this.node);
        this._page2Node = cc.find("page2", this.node);
        this._page2TitleNode = cc.find("page2/RewardsTip", this.node);
        this._claimBtnNode = cc.find("page2/ClaimBtn", this.node);
        this._claimLabelNode = cc.find("bg/Claim", this._claimBtnNode);
        this._claimAdBtnNode = cc.find("page2/btn_ad_claim", this.node);
        this._claimAdLabelNode = cc.find("bg/Claim", this._claimAdBtnNode);
        this._refreshIconNode = cc.find("page2/RefreshIcon", this.node);
        this._refreshValueNode = cc.find("page2/RefreshValue", this.node);
        this._hintIconNode = cc.find("page2/HintIcon", this.node);
        this._hintValueNode = cc.find("page2/HintValue", this.node);
        this._undoTipIconNode = cc.find("page2/UndoIcon", this.node);
        this._undoTipValueNode = cc.find("page2/UndoValue", this.node);
        this.initComponents();
        this.registerButtons();
    };
    RankBoxView.prototype.getAdBtnScale = function () {
        return 1;
    };
    RankBoxView.prototype.initComponents = function () {
        this.centerBtnPos.addSelf(this._claimBtnNode.position);
        this.centerBtnPos.addSelf(this._claimAdBtnNode.position);
        this.centerBtnPos.multiplyScalar(0.5);
        this.animProxy = BaseSpine_1.default.refreshWithNode(this._boxSpine.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.reset();
    };
    RankBoxView.prototype.reset = function () {
        this._refreshIconNode.active = false;
        this._refreshValueNode.active = false;
        this._hintIconNode.active = false;
        this._hintValueNode.active = false;
        this._undoTipIconNode.active = false;
        this._undoTipValueNode.active = false;
    };
    RankBoxView.prototype.setBgOpacity = function (t) {
        cc.isValid(this._bgNode) && (this._bgNode.opacity = t);
    };
    RankBoxView.prototype.getRewardNodes = function (t) {
        switch (t) {
            case IUserData_1.EItemType.Hint:
                return {
                    icon: this._hintIconNode,
                    value: this._hintValueNode
                };
            case IUserData_1.EItemType.Shuffle:
                return {
                    icon: this._refreshIconNode,
                    value: this._refreshValueNode
                };
            case IUserData_1.EItemType.Undo:
                return {
                    icon: this._undoTipIconNode,
                    value: this._undoTipValueNode
                };
        }
        return {
            icon: null,
            value: null
        };
    };
    RankBoxView.prototype.hookRewardNodes = function () {
        var t = this;
        this.reset();
        var e = function e(e, o, n) {
            if (e && o) {
                t.animProxy.attachNode("hook_icon_" + n, function () {
                    return e;
                });
                t.animProxy.attachNode("hook_num_" + n, function () {
                    return o;
                });
            }
        };
        this.showRewardsNodes = [];
        var o = this._reward;
        if (o)
            for (var n = 0; n < o.Items.length; n++) {
                var a = o.Items[n], i = o.Counts[n], r = this.getRewardNodes(a), s = r.icon, l = r.value;
                if (s && l) {
                    l.getComponent(cc.Label).string = String(i);
                    this.showRewardsNodes.push(s, l);
                    e(s, l, n + 1);
                }
            }
    };
    RankBoxView.prototype.getReward = function () {
        return this._reward;
    };
    RankBoxView.prototype.getMyRank = function () {
        return this._myRank;
    };
    RankBoxView.prototype.initReward = function () {
        this._reward = RankModel_1.default.getInstance().getRewardIdByRank(this._myRank);
    };
    RankBoxView.prototype.show = function (t) {
        if (!this._hasAddedBaseReward) {
            this._hasAddedBaseReward = true;
            this._myRank = (null == t ? void 0 : t.myRank) || 1;
            this._isGaming = !!(null == t ? void 0 : t.isGaming);
            this._boxIndex = this._myRank >= 1 && this._myRank <= 3 ? this._myRank : this._boxIndex;
            this.initReward();
            this.deliverRewards(false);
            this.hookRewardNodes();
            I18NStrings_1.default.setText(this._page1TitleNode, "Congratulations", "LeaderBoard_Reward_Title");
            I18NStrings_1.default.setText(this._labelContinue, "Claim", "LeaderBoard_Reward_Claim");
            this._page2TitleNode.active = false;
            I18NStrings_1.default.setText(this._claimLabelNode, "Claim", "LeaderBoard_Reward_Claim");
            I18NStrings_1.default.setText(this._claimAdLabelNode, "Claim x 2", "LeaderBoard_reward_1");
            var e = I18NStrings_1.default.get("LeaderBoard_Reward_Des", "<color=#B17240>You've claimed <color=#D15327>{0}</c> place!</c>").replace("{0}", String(this._myRank));
            this._descRewardNode.getComponent(cc.RichText).string = e;
            this.showPage1();
        }
    };
    RankBoxView.prototype.playLightSpineAnimation = function () {
        GameUtils_1.default.playSpine(this._lightSkeleton, "init", true);
    };
    RankBoxView.prototype.playBoxSpine = function (t, e, o) {
        if (e === void 0) { e = true; }
        GameUtils_1.default.playSpine(this._boxSpine, t, e, o);
    };
    RankBoxView.prototype.registerButtons = function () {
        this._btnContinue && this.OnButtonClick(this._btnContinue, this.onContinueClick.bind(this));
        this._claimBtnNode && this.OnButtonClick(this._claimBtnNode, this.onClaimClick.bind(this));
        this._claimAdBtnNode && this.OnButtonClick(this._claimAdBtnNode, this.onClaimAdClick.bind(this));
        this.OnButtonClick(this.node, {
            func: this.onBgClick.bind(this),
            ignoreClickAudio: true
        });
    };
    RankBoxView.prototype.onBgClick = function () {
        var t;
        if (this.canClickBg) {
            this.clickCount++;
            this.clickCount >= 3 && (null === (t = this.delegate) || void 0 === t || t.close());
        }
    };
    RankBoxView.prototype.onClaimAdClick = function () {
        var t = this;
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankBoxViewPage2AdClaim, 2);
        this._claimAdBtnNode.getComponent(cc.Button).interactable = false;
        this._claimBtnNode.getComponent(cc.Button).interactable = false;
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
    RankBoxView.prototype.onAdSuccess = function () {
        var t = this;
        if (cc.isValid(this.node)) {
            this.deliverRewards(true);
            mj.triggerInternalEvent("Chest_AdClose", this, [{
                    refreshIcon: this._refreshIconNode,
                    refreshValue: this._refreshValueNode,
                    hintIcon: this._hintIconNode,
                    hintValue: this._hintValueNode,
                    adClaimBtn: this._claimAdBtnNode,
                    claimBtn: this._claimBtnNode,
                    adScale: this.getAdScale(),
                    onClose: function () {
                        return t.delegate.close();
                    }
                }]) || this.delegate.close();
        }
    };
    RankBoxView.prototype.getAdScale = function () {
        return 2;
    };
    RankBoxView.prototype.showAdRewards = function (t) {
        if (t === void 0) { t = true; }
        if (cc.isValid(this._claimAdBtnNode) && cc.isValid(this._claimBtnNode)) {
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
            this._claimBtnNode.setPosition(this.centerBtnPos);
            this._claimAdBtnNode.active = false;
            this._claimBtnNode.getComponent(cc.Button).interactable = true;
            this.skipClaimDot = true;
            var e = function e(t, e) {
                if (cc.isValid(t) && t.active) {
                    var o = cc.instantiate(t);
                    o.parent = t.parent;
                    o.scale = t.scale;
                    o.angle = t.angle;
                    o.setPosition(t.position);
                    o.getComponent(cc.Label).string = String(e);
                    o.opacity = 0;
                    t.opacity = 255;
                    cc.tween(t).to(0.167, {
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
                    }), a = cc.tween().to(0.4, {
                        opacity: 255
                    }, {
                        easing: cc.easing.quadOut
                    });
                    cc.tween(o).parallel(n, a).start();
                }
            }, o = this._reward;
            if (o)
                for (var n = 0; n < o.Items.length; n++) {
                    var a = o.Items[n], i = o.Counts[n], r = this.getRewardNodes(a), s = r.icon, l = r.value;
                    s && l && (t ? e(l, 2 * i) : l.getComponent(cc.Label).string = String(2 * i));
                }
        }
    };
    RankBoxView.prototype.deliverRewards = function (t) {
        var e = t ? GameTypeEnums_1.EGetItemReasonId.LeaderBoardAd : GameTypeEnums_1.EGetItemReasonId.LeaderBoard, o = t ? "排行榜宝箱奖励_看广告翻倍_到达第" + this._myRank + "名" : "排行榜宝箱奖励_到达第" + this._myRank + "名", n = this._isGaming;
        if (this._reward)
            for (var a = 0; a < this._reward.Items.length; a++) {
                var i = this._reward.Items[a], r = this._reward.Counts[a];
                r <= 0 || GameUtils_1.default.deliverProp({
                    isInGame: n,
                    reasonId: e,
                    reasonInfo: o,
                    itemType: i,
                    itemCount: r
                });
            }
    };
    RankBoxView.prototype.onAdFailed = function () {
        if (cc.isValid(this._claimAdBtnNode) && cc.isValid(this._claimBtnNode) && cc.isValid(this.node)) {
            this._claimAdBtnNode.getComponent(cc.Button).interactable = true;
            this._claimBtnNode.getComponent(cc.Button).interactable = true;
            cc.isValid(this.node) && cc.isValid(this.node.parent) && (this.node.parent.opacity = 255);
            this.canClickBg = false;
            this.clickCount = 0;
        }
    };
    RankBoxView.prototype.onClaimClick = function () {
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Button1);
        this.delegate.close();
        this.skipClaimDot || DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankBoxViewPage2Claim);
    };
    RankBoxView.prototype.onContinueClick = function () {
        this.change2ClaimPage();
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankBoxViewPage1Claim);
    };
    RankBoxView.prototype.showPage1 = function () {
        var t = this;
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.AutoRankResultPage1);
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Box3Show);
        this._boxSpine.node.active = true;
        this._page1TitleNode.opacity = 0;
        this._page1TitleNode.scale = 0.7;
        cc.tween(this._page1TitleNode).delay(0.27).to(0.2, {
            opacity: 255,
            scale: 1.2
        }, {
            easing: cc.easing.sineInOut
        }).to(0.13, {
            scale: 0.95
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            scale: 1
        }, {
            easing: cc.easing.sineInOut
        }).start();
        this._descRewardNode.opacity = 0;
        cc.tween(this._descRewardNode).delay(0.6).to(0.1, {
            opacity: 255
        }, {
            easing: cc.easing.sineInOut
        }).start();
        this._btnContinue.opacity = 0;
        this._btnContinue.scale = 0.6;
        cc.tween(this._btnContinue).delay(0.4).to(0.17, {
            opacity: 255,
            scale: 1.05
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            opacity: 255,
            scale: 1
        }, {
            easing: cc.easing.sineInOut
        }).start();
        this.playLightSpineAnimation();
        this.playBoxSpine("in_" + this._boxIndex + "_1", false, function () {
            t.playBoxSpine("init_" + t._boxIndex, false);
        });
    };
    RankBoxView.prototype.change2ClaimPage = function () {
        this._btnContinue.active = false;
        cc.tween(this._page1TitleNode).to(0.2, {
            opacity: 0
        }).start();
        cc.tween(this._descRewardNode).to(0.2, {
            opacity: 0
        }).start();
        this.showPage2();
    };
    RankBoxView.prototype.getInAnimName = function (t) {
        switch (t) {
            case 1:
                return "in_" + this._boxIndex + "_3";
            case 2:
                return "in_" + this._boxIndex + "_2";
            case 3:
                return "in_" + this._boxIndex + "_4";
        }
        return "in_" + this._boxIndex + "_2";
    };
    RankBoxView.prototype.getIdleAnimName = function (t) {
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
    RankBoxView.prototype.playBoxInAnim = function () {
        var t = this, e = Math.floor(this.showRewardsNodes.length / 2);
        if (e > 0 && e <= 3) {
            var o = this.getInAnimName(e), n = this.getIdleAnimName(e);
            this.playBoxSpine(o, false, function () {
                t.playBoxSpine(n);
            });
        }
    };
    RankBoxView.prototype.showPage2 = function () {
        var t = this;
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.AutoRankResultPage2);
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Box2Open);
        this._boxSpine.setEventListener(function (e, o) {
            "event_rewards" === o.data.name && t.onOpenAnimFinished();
        });
        this.playBoxInAnim();
        var e = this.getAdBtnScale();
        this.isShowAdBtn() && cc.tween(this._claimAdBtnNode).delay(0.9).call(function () {
            if (cc.isValid(t._claimAdBtnNode)) {
                t._claimAdBtnNode.setScale(0.6 * e);
                t._claimAdBtnNode.opacity = 0;
            }
        }).to(0.17, {
            opacity: 255,
            scale: 1.05 * e
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            opacity: 255,
            scale: e
        }, {
            easing: cc.easing.sineInOut
        }).start();
        cc.tween(this._claimBtnNode).delay(1).call(function () {
            if (cc.isValid(t._claimBtnNode)) {
                t._claimBtnNode.setScale(0.6);
                t._claimBtnNode.opacity = 0;
            }
        }).to(0.17, {
            opacity: 255,
            scale: 1.05
        }, {
            easing: cc.easing.sineInOut
        }).to(0.1, {
            opacity: 255,
            scale: 1
        }, {
            easing: cc.easing.sineInOut
        }).start();
    };
    RankBoxView.prototype.isShowAdBtn = function () {
        return CommonUtils_1.isNetworkAvailable();
    };
    RankBoxView.prototype.onOpenAnimFinished = function () {
        var t, e;
        try {
            for (var o = __values(this.showRewardsNodes), n = o.next(); !n.done; n = o.next()) {
                var a = n.value;
                cc.isValid(a) && (a.active = true);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                n && !n.done && (e = o.return) && e.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    RankBoxView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        this.dispatchEvent("RankBoxVw_destroy");
    };
    RankBoxView.prefabUrl = "prefabs/rank/RankBoxView";
    RankBoxView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("RankBoxVw_getAdBtnScale")
    ], RankBoxView.prototype, "getAdBtnScale", null);
    __decorate([
        mj.traitEvent("RankBoxVw_initComps")
    ], RankBoxView.prototype, "initComponents", null);
    __decorate([
        mj.traitEvent("RankBoxVw_show")
    ], RankBoxView.prototype, "show", null);
    __decorate([
        mj.traitEvent("RankBoxVw_adBtnClick")
    ], RankBoxView.prototype, "onClaimAdClick", null);
    __decorate([
        mj.traitEvent("RankBoxVw_adSuccess")
    ], RankBoxView.prototype, "onAdSuccess", null);
    __decorate([
        mj.traitEvent("RankBoxVw_adFailed")
    ], RankBoxView.prototype, "onAdFailed", null);
    __decorate([
        mj.traitEvent("RankBoxVw_isShowAdBtn")
    ], RankBoxView.prototype, "isShowAdBtn", null);
    RankBoxView = __decorate([
        mj.class
    ], RankBoxView);
    return RankBoxView;
}(UIView_1.default));
exports.default = RankBoxView;

cc._RF.pop();