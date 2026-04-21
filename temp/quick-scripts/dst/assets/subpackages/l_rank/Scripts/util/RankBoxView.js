
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/util/RankBoxView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy91dGlsL1JhbmtCb3hWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrRUFBMEU7QUFDMUUsOEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCwwQ0FBcUM7QUFDckMsNEVBQXVFO0FBQ3ZFLHVFQUF3RjtBQUN4RixtRUFBOEQ7QUFDOUQsNEVBQTJFO0FBQzNFLCtFQUFxRjtBQUNyRiwyRkFBNkY7QUFDN0YseUNBQTJDO0FBQzNDLGdFQUErRDtBQUUvRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQXNkQztRQXJkQyxhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxJQUFJ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QyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2tEQWtCcEM7SUEyRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2lEQVNuQztJQTZJRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7a0RBR3RDO0lBOWJrQixXQUFXO1FBRC9CLEVBQUUsQ0FBQyxLQUFLO09BQ1ksV0FBVyxDQXNkL0I7SUFBRCxrQkFBQztDQXRkRCxBQXNkQyxDQXRkd0MsZ0JBQU0sR0FzZDlDO2tCQXRkb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgUmFua01vZGVsIGZyb20gJy4uL1JhbmtNb2RlbCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFUmFua0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgaXNOZXR3b3JrQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IHsgRUdldEl0ZW1SZWFzb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFUmFua0F1ZGlvSUQgfSBmcm9tICcuL1JhbmtFbnVtcyc7XG5pbXBvcnQgeyBFSXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL3VzZXIvSVVzZXJEYXRhJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0JveFZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfYmdOb2RlID0gbnVsbDtcbiAgX2J0bkNvbnRpbnVlID0gbnVsbDtcbiAgX2xhYmVsQ29udGludWUgPSBudWxsO1xuICBfbGlnaHRTa2VsZXRvbiA9IG51bGw7XG4gIF9wYWdlMVRpdGxlTm9kZSA9IG51bGw7XG4gIF9kZXNjUmV3YXJkTm9kZSA9IG51bGw7XG4gIF9ib3hTcGluZSA9IG51bGw7XG4gIF9wYWdlMk5vZGUgPSBudWxsO1xuICBfcGFnZTJUaXRsZU5vZGUgPSBudWxsO1xuICBfY2xhaW1CdG5Ob2RlID0gbnVsbDtcbiAgX2NsYWltQWRCdG5Ob2RlID0gbnVsbDtcbiAgX2NsYWltTGFiZWxOb2RlID0gbnVsbDtcbiAgX2NsYWltQWRMYWJlbE5vZGUgPSBudWxsO1xuICBfcmVmcmVzaEljb25Ob2RlID0gbnVsbDtcbiAgX3JlZnJlc2hWYWx1ZU5vZGUgPSBudWxsO1xuICBfaGludEljb25Ob2RlID0gbnVsbDtcbiAgX2hpbnRWYWx1ZU5vZGUgPSBudWxsO1xuICBfdW5kb1RpcEljb25Ob2RlID0gbnVsbDtcbiAgX3VuZG9UaXBWYWx1ZU5vZGUgPSBudWxsO1xuICBjYW5DbGlja0JnID0gZmFsc2U7XG4gIGNsaWNrQ291bnQgPSAwO1xuICBjZW50ZXJCdG5Qb3MgPSBuZXcgY2MuVmVjMygwLCAwLCAwKTtcbiAgc2tpcENsYWltRG90ID0gZmFsc2U7XG4gIHNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgX2JveEluZGV4ID0gNDtcbiAgX215UmFuayA9IDA7XG4gIF9pc0dhbWluZyA9IGZhbHNlO1xuICBfaGFzQWRkZWRCYXNlUmV3YXJkID0gZmFsc2U7XG4gIF9yZXdhcmQgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3JhbmsvUmFua0JveFZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2JnTm9kZSA9IGNjLmZpbmQoXCJiZ1wiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2J0bkNvbnRpbnVlID0gY2MuZmluZChcImNvbnRlbnQvYnRuX2NvbnRpbnVlXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fbGFiZWxDb250aW51ZSA9IGNjLmZpbmQoXCJjb250ZW50L2xibF9sdlwiLCB0aGlzLl9idG5Db250aW51ZSk7XG4gICAgdGhpcy5fbGlnaHRTa2VsZXRvbiA9IGNjLmZpbmQoXCJsaWdodF9ub2RlL3NwaW5fbGlnaHRcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2JveFNwaW5lID0gY2MuZmluZChcImNvbnRlbnQvYm94QW5pXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICB0aGlzLl9wYWdlMVRpdGxlTm9kZSA9IGNjLmZpbmQoXCJwYWdlMV90aXRsZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2Rlc2NSZXdhcmROb2RlID0gY2MuZmluZChcImRlc19yZXdhcmRcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9wYWdlMk5vZGUgPSBjYy5maW5kKFwicGFnZTJcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9wYWdlMlRpdGxlTm9kZSA9IGNjLmZpbmQoXCJwYWdlMi9SZXdhcmRzVGlwXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fY2xhaW1CdG5Ob2RlID0gY2MuZmluZChcInBhZ2UyL0NsYWltQnRuXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fY2xhaW1MYWJlbE5vZGUgPSBjYy5maW5kKFwiYmcvQ2xhaW1cIiwgdGhpcy5fY2xhaW1CdG5Ob2RlKTtcbiAgICB0aGlzLl9jbGFpbUFkQnRuTm9kZSA9IGNjLmZpbmQoXCJwYWdlMi9idG5fYWRfY2xhaW1cIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9jbGFpbUFkTGFiZWxOb2RlID0gY2MuZmluZChcImJnL0NsYWltXCIsIHRoaXMuX2NsYWltQWRCdG5Ob2RlKTtcbiAgICB0aGlzLl9yZWZyZXNoSWNvbk5vZGUgPSBjYy5maW5kKFwicGFnZTIvUmVmcmVzaEljb25cIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9yZWZyZXNoVmFsdWVOb2RlID0gY2MuZmluZChcInBhZ2UyL1JlZnJlc2hWYWx1ZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2hpbnRJY29uTm9kZSA9IGNjLmZpbmQoXCJwYWdlMi9IaW50SWNvblwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2hpbnRWYWx1ZU5vZGUgPSBjYy5maW5kKFwicGFnZTIvSGludFZhbHVlXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fdW5kb1RpcEljb25Ob2RlID0gY2MuZmluZChcInBhZ2UyL1VuZG9JY29uXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5fdW5kb1RpcFZhbHVlTm9kZSA9IGNjLmZpbmQoXCJwYWdlMi9VbmRvVmFsdWVcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XG4gICAgdGhpcy5yZWdpc3RlckJ1dHRvbnMoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCb3hWd19nZXRBZEJ0blNjYWxlXCIpXG4gIGdldEFkQnRuU2NhbGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm94VndfaW5pdENvbXBzXCIpXG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHRoaXMuY2VudGVyQnRuUG9zLmFkZFNlbGYodGhpcy5fY2xhaW1CdG5Ob2RlLnBvc2l0aW9uKTtcbiAgICB0aGlzLmNlbnRlckJ0blBvcy5hZGRTZWxmKHRoaXMuX2NsYWltQWRCdG5Ob2RlLnBvc2l0aW9uKTtcbiAgICB0aGlzLmNlbnRlckJ0blBvcy5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIHRoaXMuYW5pbVByb3h5ID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9ib3hTcGluZS5ub2RlKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5yZXNldChcIlwiKTtcbiAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3JlZnJlc2hJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWZyZXNoVmFsdWVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2hpbnRJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9oaW50VmFsdWVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3VuZG9UaXBJY29uTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl91bmRvVGlwVmFsdWVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHNldEJnT3BhY2l0eSh0KSB7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9iZ05vZGUpICYmICh0aGlzLl9iZ05vZGUub3BhY2l0eSA9IHQpO1xuICB9XG4gIGdldFJld2FyZE5vZGVzKHQpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgRUl0ZW1UeXBlLkhpbnQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWNvbjogdGhpcy5faGludEljb25Ob2RlLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9oaW50VmFsdWVOb2RlXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVJdGVtVHlwZS5TaHVmZmxlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGljb246IHRoaXMuX3JlZnJlc2hJY29uTm9kZSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5fcmVmcmVzaFZhbHVlTm9kZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFSXRlbVR5cGUuVW5kbzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpY29uOiB0aGlzLl91bmRvVGlwSWNvbk5vZGUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMuX3VuZG9UaXBWYWx1ZU5vZGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IG51bGwsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH07XG4gIH1cbiAgaG9va1Jld2FyZE5vZGVzKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdmFyIGUgPSBmdW5jdGlvbiBlKGUsIG8sIG4pIHtcbiAgICAgIGlmIChlICYmIG8pIHtcbiAgICAgICAgdC5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfaWNvbl9cIiArIG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHQuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX251bV9cIiArIG4sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMgPSBbXTtcbiAgICB2YXIgbyA9IHRoaXMuX3Jld2FyZDtcbiAgICBpZiAobykgZm9yICh2YXIgbiA9IDA7IG4gPCBvLkl0ZW1zLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgYSA9IG8uSXRlbXNbbl0sXG4gICAgICAgIGkgPSBvLkNvdW50c1tuXSxcbiAgICAgICAgciA9IHRoaXMuZ2V0UmV3YXJkTm9kZXMoYSksXG4gICAgICAgIHMgPSByLmljb24sXG4gICAgICAgIGwgPSByLnZhbHVlO1xuICAgICAgaWYgKHMgJiYgbCkge1xuICAgICAgICBsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RyaW5nKGkpO1xuICAgICAgICB0aGlzLnNob3dSZXdhcmRzTm9kZXMucHVzaChzLCBsKTtcbiAgICAgICAgZShzLCBsLCBuICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldFJld2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV3YXJkO1xuICB9XG4gIGdldE15UmFuaygpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlSYW5rO1xuICB9XG4gIGluaXRSZXdhcmQoKSB7XG4gICAgdGhpcy5fcmV3YXJkID0gUmFua01vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmV3YXJkSWRCeVJhbmsodGhpcy5fbXlSYW5rKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCb3hWd19zaG93XCIpXG4gIHNob3codCkge1xuICAgIGlmICghdGhpcy5faGFzQWRkZWRCYXNlUmV3YXJkKSB7XG4gICAgICB0aGlzLl9oYXNBZGRlZEJhc2VSZXdhcmQgPSB0cnVlO1xuICAgICAgdGhpcy5fbXlSYW5rID0gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubXlSYW5rKSB8fCAxO1xuICAgICAgdGhpcy5faXNHYW1pbmcgPSAhIShudWxsID09IHQgPyB2b2lkIDAgOiB0LmlzR2FtaW5nKTtcbiAgICAgIHRoaXMuX2JveEluZGV4ID0gdGhpcy5fbXlSYW5rID49IDEgJiYgdGhpcy5fbXlSYW5rIDw9IDMgPyB0aGlzLl9teVJhbmsgOiB0aGlzLl9ib3hJbmRleDtcbiAgICAgIHRoaXMuaW5pdFJld2FyZCgpO1xuICAgICAgdGhpcy5kZWxpdmVyUmV3YXJkcyhmYWxzZSk7XG4gICAgICB0aGlzLmhvb2tSZXdhcmROb2RlcygpO1xuICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9wYWdlMVRpdGxlTm9kZSwgXCJDb25ncmF0dWxhdGlvbnNcIiwgXCJMZWFkZXJCb2FyZF9SZXdhcmRfVGl0bGVcIik7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2xhYmVsQ29udGludWUsIFwiQ2xhaW1cIiwgXCJMZWFkZXJCb2FyZF9SZXdhcmRfQ2xhaW1cIik7XG4gICAgICB0aGlzLl9wYWdlMlRpdGxlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fY2xhaW1MYWJlbE5vZGUsIFwiQ2xhaW1cIiwgXCJMZWFkZXJCb2FyZF9SZXdhcmRfQ2xhaW1cIik7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX2NsYWltQWRMYWJlbE5vZGUsIFwiQ2xhaW0geCAyXCIsIFwiTGVhZGVyQm9hcmRfcmV3YXJkXzFcIik7XG4gICAgICB2YXIgZSA9IEkxOE5TdHJpbmdzLmdldChcIkxlYWRlckJvYXJkX1Jld2FyZF9EZXNcIiwgXCI8Y29sb3I9I0IxNzI0MD5Zb3UndmUgY2xhaW1lZCA8Y29sb3I9I0QxNTMyNz57MH08L2M+IHBsYWNlITwvYz5cIikucmVwbGFjZShcInswfVwiLCBTdHJpbmcodGhpcy5fbXlSYW5rKSk7XG4gICAgICB0aGlzLl9kZXNjUmV3YXJkTm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpLnN0cmluZyA9IGU7XG4gICAgICB0aGlzLnNob3dQYWdlMSgpO1xuICAgIH1cbiAgfVxuICBwbGF5TGlnaHRTcGluZUFuaW1hdGlvbigpIHtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2xpZ2h0U2tlbGV0b24sIFwiaW5pdFwiLCB0cnVlKTtcbiAgfVxuICBwbGF5Qm94U3BpbmUodCwgZSA9IHRydWUsIG8/KSB7XG4gICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0aGlzLl9ib3hTcGluZSwgdCwgZSwgbyk7XG4gIH1cbiAgcmVnaXN0ZXJCdXR0b25zKCkge1xuICAgIHRoaXMuX2J0bkNvbnRpbnVlICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5Db250aW51ZSwgdGhpcy5vbkNvbnRpbnVlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fY2xhaW1CdG5Ob2RlICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9jbGFpbUJ0bk5vZGUsIHRoaXMub25DbGFpbUNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX2NsYWltQWRCdG5Ob2RlICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9jbGFpbUFkQnRuTm9kZSwgdGhpcy5vbkNsYWltQWRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uQmdDbGljay5iaW5kKHRoaXMpLFxuICAgICAgaWdub3JlQ2xpY2tBdWRpbzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uQmdDbGljaygpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5jYW5DbGlja0JnKSB7XG4gICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgIHRoaXMuY2xpY2tDb3VudCA+PSAzICYmIChudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCkpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCb3hWd19hZEJ0bkNsaWNrXCIpXG4gIG9uQ2xhaW1BZENsaWNrKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5DbGlja1JhbmtCb3hWaWV3UGFnZTJBZENsYWltLCAyKTtcbiAgICB0aGlzLl9jbGFpbUFkQnRuTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLl9jbGFpbUJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgaWYgKEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSkge1xuICAgICAgdGhpcy5jYW5DbGlja0JnID0gdHJ1ZTtcbiAgICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiQ2hlc3RfQWRDbGtTaG93XCIsIHRoaXMsIFtdKSB8fCAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMCk7XG4gICAgfVxuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlWaWRlb0FkKEVBZFBvc2l0aW9uLk91dEdhbWVNb3RpdmF0aW9uLCB7XG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5vbkFkU3VjY2VzcygpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0Lm9uQWRGYWlsZWQoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm94VndfYWRTdWNjZXNzXCIpXG4gIG9uQWRTdWNjZXNzKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJSZXdhcmRzKHRydWUpO1xuICAgICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJDaGVzdF9BZENsb3NlXCIsIHRoaXMsIFt7XG4gICAgICAgIHJlZnJlc2hJY29uOiB0aGlzLl9yZWZyZXNoSWNvbk5vZGUsXG4gICAgICAgIHJlZnJlc2hWYWx1ZTogdGhpcy5fcmVmcmVzaFZhbHVlTm9kZSxcbiAgICAgICAgaGludEljb246IHRoaXMuX2hpbnRJY29uTm9kZSxcbiAgICAgICAgaGludFZhbHVlOiB0aGlzLl9oaW50VmFsdWVOb2RlLFxuICAgICAgICBhZENsYWltQnRuOiB0aGlzLl9jbGFpbUFkQnRuTm9kZSxcbiAgICAgICAgY2xhaW1CdG46IHRoaXMuX2NsYWltQnRuTm9kZSxcbiAgICAgICAgYWRTY2FsZTogdGhpcy5nZXRBZFNjYWxlKCksXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdC5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XSkgfHwgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICBnZXRBZFNjYWxlKCkge1xuICAgIHJldHVybiAyO1xuICB9XG4gIHNob3dBZFJld2FyZHModCA9IHRydWUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9jbGFpbUFkQnRuTm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLl9jbGFpbUJ0bk5vZGUpKSB7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgIHRoaXMuX2NsYWltQnRuTm9kZS5zZXRQb3NpdGlvbih0aGlzLmNlbnRlckJ0blBvcyk7XG4gICAgICB0aGlzLl9jbGFpbUFkQnRuTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NsYWltQnRuTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5za2lwQ2xhaW1Eb3QgPSB0cnVlO1xuICAgICAgdmFyIGUgPSBmdW5jdGlvbiBlKHQsIGUpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSAmJiB0LmFjdGl2ZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBjYy5pbnN0YW50aWF0ZSh0KTtcbiAgICAgICAgICAgIG8ucGFyZW50ID0gdC5wYXJlbnQ7XG4gICAgICAgICAgICBvLnNjYWxlID0gdC5zY2FsZTtcbiAgICAgICAgICAgIG8uYW5nbGUgPSB0LmFuZ2xlO1xuICAgICAgICAgICAgby5zZXRQb3NpdGlvbih0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIG8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICBvLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgY2MudHdlZW4odCkudG8oMC4xNjcsIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDMwLCAwKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgby5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zNywgMCk7XG4gICAgICAgICAgICB2YXIgbiA9IGNjLnR3ZWVuKCkudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGNjLnYzKDAsIDMsIDApXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkT3V0XG4gICAgICAgICAgICAgIH0pLnRvKDAuMSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBhID0gY2MudHdlZW4oKS50bygwLjQsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy50d2VlbihvKS5wYXJhbGxlbChuLCBhKS5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbyA9IHRoaXMuX3Jld2FyZDtcbiAgICAgIGlmIChvKSBmb3IgKHZhciBuID0gMDsgbiA8IG8uSXRlbXMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdmFyIGEgPSBvLkl0ZW1zW25dLFxuICAgICAgICAgIGkgPSBvLkNvdW50c1tuXSxcbiAgICAgICAgICByID0gdGhpcy5nZXRSZXdhcmROb2RlcyhhKSxcbiAgICAgICAgICBzID0gci5pY29uLFxuICAgICAgICAgIGwgPSByLnZhbHVlO1xuICAgICAgICBzICYmIGwgJiYgKHQgPyBlKGwsIDIgKiBpKSA6IGwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBTdHJpbmcoMiAqIGkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVsaXZlclJld2FyZHModCkge1xuICAgIHZhciBlID0gdCA/IEVHZXRJdGVtUmVhc29uSWQuTGVhZGVyQm9hcmRBZCA6IEVHZXRJdGVtUmVhc29uSWQuTGVhZGVyQm9hcmQsXG4gICAgICBvID0gdCA/IFwi5o6S6KGM5qac5a6d566x5aWW5YqxX+eci+W5v+WRiue/u+WAjV/liLDovr7nrKxcIiArIHRoaXMuX215UmFuayArIFwi5ZCNXCIgOiBcIuaOkuihjOamnOWuneeuseWlluWKsV/liLDovr7nrKxcIiArIHRoaXMuX215UmFuayArIFwi5ZCNXCIsXG4gICAgICBuID0gdGhpcy5faXNHYW1pbmc7XG4gICAgaWYgKHRoaXMuX3Jld2FyZCkgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLl9yZXdhcmQuSXRlbXMubGVuZ3RoOyBhKyspIHtcbiAgICAgIHZhciBpID0gdGhpcy5fcmV3YXJkLkl0ZW1zW2FdLFxuICAgICAgICByID0gdGhpcy5fcmV3YXJkLkNvdW50c1thXTtcbiAgICAgIHIgPD0gMCB8fCBHYW1lVXRpbHMuZGVsaXZlclByb3Aoe1xuICAgICAgICBpc0luR2FtZTogbixcbiAgICAgICAgcmVhc29uSWQ6IGUsXG4gICAgICAgIHJlYXNvbkluZm86IG8sXG4gICAgICAgIGl0ZW1UeXBlOiBpLFxuICAgICAgICBpdGVtQ291bnQ6IHJcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtCb3hWd19hZEZhaWxlZFwiKVxuICBvbkFkRmFpbGVkKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2NsYWltQWRCdG5Ob2RlKSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2NsYWltQnRuTm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLl9jbGFpbUFkQnRuTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5fY2xhaW1CdG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUucGFyZW50KSAmJiAodGhpcy5ub2RlLnBhcmVudC5vcGFjaXR5ID0gMjU1KTtcbiAgICAgIHRoaXMuY2FuQ2xpY2tCZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICB9XG4gIH1cbiAgb25DbGFpbUNsaWNrKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVSYW5rQXVkaW9JRC5CdXR0b24xKTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgdGhpcy5za2lwQ2xhaW1Eb3QgfHwgRG90R2FtZUJ0bkNsaWNrLmRvdFJhbmsoRVJhbmtDbGlja1R5cGUuQ2xpY2tSYW5rQm94Vmlld1BhZ2UyQ2xhaW0pO1xuICB9XG4gIG9uQ29udGludWVDbGljaygpIHtcbiAgICB0aGlzLmNoYW5nZTJDbGFpbVBhZ2UoKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5DbGlja1JhbmtCb3hWaWV3UGFnZTFDbGFpbSk7XG4gIH1cbiAgc2hvd1BhZ2UxKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5BdXRvUmFua1Jlc3VsdFBhZ2UxKTtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFUmFua0F1ZGlvSUQuQm94M1Nob3cpO1xuICAgIHRoaXMuX2JveFNwaW5lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9wYWdlMVRpdGxlTm9kZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLl9wYWdlMVRpdGxlTm9kZS5zY2FsZSA9IDAuNztcbiAgICBjYy50d2Vlbih0aGlzLl9wYWdlMVRpdGxlTm9kZSkuZGVsYXkoMC4yNykudG8oMC4yLCB7XG4gICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICBzY2FsZTogMS4yXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkudG8oMC4xMywge1xuICAgICAgc2NhbGU6IDAuOTVcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICB9KS50bygwLjEsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkuc3RhcnQoKTtcbiAgICB0aGlzLl9kZXNjUmV3YXJkTm9kZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2Vlbih0aGlzLl9kZXNjUmV3YXJkTm9kZSkuZGVsYXkoMC42KS50bygwLjEsIHtcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnN0YXJ0KCk7XG4gICAgdGhpcy5fYnRuQ29udGludWUub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5fYnRuQ29udGludWUuc2NhbGUgPSAwLjY7XG4gICAgY2MudHdlZW4odGhpcy5fYnRuQ29udGludWUpLmRlbGF5KDAuNCkudG8oMC4xNywge1xuICAgICAgb3BhY2l0eTogMjU1LFxuICAgICAgc2NhbGU6IDEuMDVcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICB9KS50bygwLjEsIHtcbiAgICAgIG9wYWNpdHk6IDI1NSxcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkuc3RhcnQoKTtcbiAgICB0aGlzLnBsYXlMaWdodFNwaW5lQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5wbGF5Qm94U3BpbmUoXCJpbl9cIiArIHRoaXMuX2JveEluZGV4ICsgXCJfMVwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdC5wbGF5Qm94U3BpbmUoXCJpbml0X1wiICsgdC5fYm94SW5kZXgsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuICBjaGFuZ2UyQ2xhaW1QYWdlKCkge1xuICAgIHRoaXMuX2J0bkNvbnRpbnVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIGNjLnR3ZWVuKHRoaXMuX3BhZ2UxVGl0bGVOb2RlKS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5zdGFydCgpO1xuICAgIGNjLnR3ZWVuKHRoaXMuX2Rlc2NSZXdhcmROb2RlKS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5zdGFydCgpO1xuICAgIHRoaXMuc2hvd1BhZ2UyKCk7XG4gIH1cbiAgZ2V0SW5BbmltTmFtZSh0KSB7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBcImluX1wiICsgdGhpcy5fYm94SW5kZXggKyBcIl8zXCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcImluX1wiICsgdGhpcy5fYm94SW5kZXggKyBcIl8yXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcImluX1wiICsgdGhpcy5fYm94SW5kZXggKyBcIl80XCI7XG4gICAgfVxuICAgIHJldHVybiBcImluX1wiICsgdGhpcy5fYm94SW5kZXggKyBcIl8yXCI7XG4gIH1cbiAgZ2V0SWRsZUFuaW1OYW1lKHQpIHtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIFwiaWRsZV8yXCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcImlkbGVfMVwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gXCJpZGxlXzNcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiaWRsZV8xXCI7XG4gIH1cbiAgcGxheUJveEluQW5pbSgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gTWF0aC5mbG9vcih0aGlzLnNob3dSZXdhcmRzTm9kZXMubGVuZ3RoIC8gMik7XG4gICAgaWYgKGUgPiAwICYmIGUgPD0gMykge1xuICAgICAgdmFyIG8gPSB0aGlzLmdldEluQW5pbU5hbWUoZSksXG4gICAgICAgIG4gPSB0aGlzLmdldElkbGVBbmltTmFtZShlKTtcbiAgICAgIHRoaXMucGxheUJveFNwaW5lKG8sIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQucGxheUJveFNwaW5lKG4pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNob3dQYWdlMigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFJhbmsoRVJhbmtDbGlja1R5cGUuQXV0b1JhbmtSZXN1bHRQYWdlMik7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRVJhbmtBdWRpb0lELkJveDJPcGVuKTtcbiAgICB0aGlzLl9ib3hTcGluZS5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICBcImV2ZW50X3Jld2FyZHNcIiA9PT0gby5kYXRhLm5hbWUgJiYgdC5vbk9wZW5BbmltRmluaXNoZWQoKTtcbiAgICB9KTtcbiAgICB0aGlzLnBsYXlCb3hJbkFuaW0oKTtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0QWRCdG5TY2FsZSgpO1xuICAgIHRoaXMuaXNTaG93QWRCdG4oKSAmJiBjYy50d2Vlbih0aGlzLl9jbGFpbUFkQnRuTm9kZSkuZGVsYXkoMC45KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQuX2NsYWltQWRCdG5Ob2RlKSkge1xuICAgICAgICB0Ll9jbGFpbUFkQnRuTm9kZS5zZXRTY2FsZSgwLjYgKiBlKTtcbiAgICAgICAgdC5fY2xhaW1BZEJ0bk5vZGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG4gICAgfSkudG8oMC4xNywge1xuICAgICAgb3BhY2l0eTogMjU1LFxuICAgICAgc2NhbGU6IDEuMDUgKiBlXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgfSkudG8oMC4xLCB7XG4gICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICBzY2FsZTogZVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnN0YXJ0KCk7XG4gICAgY2MudHdlZW4odGhpcy5fY2xhaW1CdG5Ob2RlKS5kZWxheSgxKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQuX2NsYWltQnRuTm9kZSkpIHtcbiAgICAgICAgdC5fY2xhaW1CdG5Ob2RlLnNldFNjYWxlKDAuNik7XG4gICAgICAgIHQuX2NsYWltQnRuTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIH1cbiAgICB9KS50bygwLjE3LCB7XG4gICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICBzY2FsZTogMS4wNVxuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbk91dFxuICAgIH0pLnRvKDAuMSwge1xuICAgICAgb3BhY2l0eTogMjU1LFxuICAgICAgc2NhbGU6IDFcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW5PdXRcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0JveFZ3X2lzU2hvd0FkQnRuXCIpXG4gIGlzU2hvd0FkQnRuKCkge1xuICAgIHJldHVybiBpc05ldHdvcmtBdmFpbGFibGUoKTtcbiAgfVxuICBvbk9wZW5BbmltRmluaXNoZWQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG8gPSBfX3ZhbHVlcyh0aGlzLnNob3dSZXdhcmRzTm9kZXMpLCBuID0gby5uZXh0KCk7ICFuLmRvbmU7IG4gPSBvLm5leHQoKSkge1xuICAgICAgICB2YXIgYSA9IG4udmFsdWU7XG4gICAgICAgIGNjLmlzVmFsaWQoYSkgJiYgKGEuYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG4gJiYgIW4uZG9uZSAmJiAoZSA9IG8ucmV0dXJuKSAmJiBlLmNhbGwobyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJSYW5rQm94VndfZGVzdHJveVwiKTtcbiAgfVxufSJdfQ==