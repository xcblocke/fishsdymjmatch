
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winStreakReward/Scripts/WinStreakRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6565csa3FlI6JLUJupVmmxA', 'WinStreakRewardView');
// subpackages/l_winStreakReward/Scripts/WinStreakRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var WinStreakRewardView = /** @class */ (function (_super) {
    __extends(WinStreakRewardView, _super);
    function WinStreakRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hintValue = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.refreshIcon = null;
        _this.adClaimBtn = null;
        _this.claimBtn = null;
        _this.rewardTip = null;
        _this.config = null;
        _this.closeCallback = null;
        _this.clickCount = 0;
        _this.isClosing = false;
        _this.animSkeleton = null;
        return _this;
    }
    WinStreakRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerButtons();
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    WinStreakRewardView.prototype.onDestroy = function () {
        cc.isValid(this.animSkeleton) && this.animSkeleton.setEventListener(null);
        cc.Tween.stopAllByTarget(this.node);
        cc.Tween.stopAllByTarget(this.claimBtn);
        cc.Tween.stopAllByTarget(this.rewardTip);
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
        _super.prototype.onDestroy.call(this);
    };
    WinStreakRewardView.prototype.showReward = function (t) {
        this.config = t.config;
        this.closeCallback = t.closeCallback;
        this.updateLabel();
        this.playOpenAnim();
    };
    WinStreakRewardView.prototype.initComponents = function () {
        var t = this;
        cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
        this.addBgNode();
        if (cc.isValid(this.animSkeleton)) {
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
        }
        this.reset();
    };
    WinStreakRewardView.prototype.addBgNode = function () {
        var t = new cc.Node("bg");
        BaseSprite_1.default.refreshWithNode(t, "texture/win/result_mask");
        t.setContentSize(1080, 1920);
        this.node.addChild(t);
        t.setSiblingIndex(0);
        t.addComponent(cc.Widget);
        var e = t.getComponent(cc.Widget);
        e.isAlignTop = true;
        e.isAlignBottom = true;
        e.isAlignLeft = true;
        e.isAlignRight = true;
        e.top = 0;
        e.bottom = 0;
        e.left = 0;
        e.right = 0;
        Adapter_1.default.ignoreSafeRect(t);
    };
    WinStreakRewardView.prototype.registerButtons = function () {
        this.OnButtonClick(this.claimBtn, this.onClaimBtnClick.bind(this));
        this.OnButtonClick(this.node, {
            func: this.onBgClick.bind(this),
            ignoreClickAudio: true
        });
    };
    WinStreakRewardView.prototype.onBgClick = function () {
        this.clickCount++;
        this.clickCount >= 3 && this.hideAnim();
    };
    WinStreakRewardView.prototype.onClaimBtnClick = function () {
        this.hideAnim();
    };
    WinStreakRewardView.prototype.updateLabel = function () {
        var t;
        if (this.config) {
            cc.isValid(this.hintValue) && (this.hintValue.getComponent(cc.Label).string = this.config.hint.toString());
            cc.isValid(this.refreshValue) && (this.refreshValue.getComponent(cc.Label).string = this.config.shuffle.toString());
            cc.isValid(this.claimBtn) && I18NStrings_1.default.setText(null === (t = this.claimBtn.getComponentInChildren(cc.Label)) || void 0 === t ? void 0 : t.node, "Claim", "LeaderBoard_Reward_Claim");
            cc.isValid(this.rewardTip) && I18NStrings_1.default.setText(this.rewardTip, "Winning Streak", "Winning_streak_Title");
        }
    };
    WinStreakRewardView.prototype.reset = function () {
        cc.isValid(this.refreshIcon) && (this.refreshIcon.active = false);
        cc.isValid(this.refreshValue) && (this.refreshValue.active = false);
        cc.isValid(this.hintIcon) && (this.hintIcon.active = false);
        cc.isValid(this.hintValue) && (this.hintValue.active = false);
        cc.isValid(this.adClaimBtn) && (this.adClaimBtn.active = false);
        cc.isValid(this.claimBtn) && (this.claimBtn.active = false);
        cc.isValid(this.rewardTip) && (this.rewardTip.active = false);
    };
    WinStreakRewardView.prototype.playOpenAnim = function () {
        var t = this;
        this.reset();
        if (cc.isValid(this.animSkeleton) && cc.isValid(this.claimBtn) && cc.isValid(this.rewardTip)) {
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animSkeleton.setEventListener(function (e, i) {
                "event_rewards" === i.data.name && t.onOpenAnimFinished();
            });
            this.animProxy.setAnimation("in", 1, function () {
                t.playRewardsAnim();
            });
            this.claimBtn.active = false;
            this.claimBtn.scale = 0.6;
            cc.isValid(this.adClaimBtn) && this.claimBtn.setPosition(this.adClaimBtn.position);
            var e = cc.tween().to(0.2, {
                scale: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.17, {
                scale: 1
            }, {
                easing: cc.easing.quadIn
            });
            cc.tween(this.claimBtn).delay(1.73).call(function () {
                t.claimBtn.active = true;
            }).then(e).start();
            this.playRewardsTipAnim();
        }
    };
    WinStreakRewardView.prototype.playRewardsTipAnim = function () {
        var t = this;
        cc.isValid(this.rewardTip) && cc.tween(this.rewardTip).delay(0.9).call(function () {
            t.rewardTip.active = true;
            t.rewardTip.scale = 0.3;
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
    WinStreakRewardView.prototype.onOpenAnimFinished = function () {
        cc.isValid(this.refreshIcon) && (this.refreshIcon.active = true);
        cc.isValid(this.refreshValue) && (this.refreshValue.active = true);
        cc.isValid(this.hintIcon) && (this.hintIcon.active = true);
        cc.isValid(this.hintValue) && (this.hintValue.active = true);
    };
    WinStreakRewardView.prototype.playRewardsAnim = function () {
        cc.isValid(this.animSkeleton) && this.animProxy.setAnimation("init", -1);
    };
    WinStreakRewardView.prototype.hideAnim = function () {
        var t = this;
        if (cc.isValid(this.node) && !this.isClosing) {
            this.isClosing = true;
            cc.tween(this.node).to(0.17, {
                scale: 1.05
            }, {
                easing: cc.easing.sineOut
            }).to(0.13, {
                scale: 0.3,
                opacity: 0
            }, {
                easing: cc.easing.sineOut
            }).call(function () {
                t.onClose();
            }).start();
        }
    };
    WinStreakRewardView.prototype.onClose = function () {
        var t, e;
        null === (t = this.closeCallback) || void 0 === t || t.call(this);
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    WinStreakRewardView.prefabUrl = "prefabs/boxReward/OpenAnim";
    __decorate([
        mj.node("HintValue")
    ], WinStreakRewardView.prototype, "hintValue", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], WinStreakRewardView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], WinStreakRewardView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("RefreshIcon")
    ], WinStreakRewardView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("AdClaimBtn")
    ], WinStreakRewardView.prototype, "adClaimBtn", void 0);
    __decorate([
        mj.node("ClaimBtn")
    ], WinStreakRewardView.prototype, "claimBtn", void 0);
    __decorate([
        mj.node("RewardsTip")
    ], WinStreakRewardView.prototype, "rewardTip", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], WinStreakRewardView.prototype, "animSkeleton", void 0);
    WinStreakRewardView = __decorate([
        mj.class
    ], WinStreakRewardView);
    return WinStreakRewardView;
}(UIView_1.default));
exports.default = WinStreakRewardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpblN0cmVha1Jld2FyZC9TY3JpcHRzL1dpblN0cmVha1Jld2FyZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFrRjtBQUNsRiwyRUFBc0U7QUFDdEUsK0RBQTBEO0FBQzFELHlFQUFvRTtBQUNwRSwyRUFBc0U7QUFDdEUsOERBQXlEO0FBRXpEO0lBQWlELHVDQUFNO0lBQXZEO1FBQUEscUVBcU1DO1FBbk1DLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFFaEMsY0FBUSxHQUFlLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGtCQUFZLEdBQWMsSUFBSSxDQUFDOztJQWlMakMsQ0FBQztJQS9LQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELHVDQUFTLEdBQVQ7UUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFF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SSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQS9LTSw2QkFBUyxHQUFHLDRCQUE0QixDQUFDO0lBbkJoRDtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzBEQUNTO0lBRTlCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7NkRBQ1k7SUFFcEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5REFDUTtJQUU1QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOzREQUNXO0lBRWxDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7MkRBQ1U7SUFFaEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5REFDUTtJQUU1QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOzBEQUNTO0lBTS9CO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs2REFDTjtJQXBCWixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUs7T0FDWSxtQkFBbUIsQ0FxTXZDO0lBQUQsMEJBQUM7Q0FyTUQsQUFxTUMsQ0FyTWdELGdCQUFNLEdBcU10RDtrQkFyTW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQWRhcHRlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9BZGFwdGVyJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luU3RyZWFrUmV3YXJkVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIEBtai5ub2RlKFwiSGludFZhbHVlXCIpXG4gIGhpbnRWYWx1ZTogXCJIaW50VmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaFZhbHVlXCIpXG4gIHJlZnJlc2hWYWx1ZTogXCJSZWZyZXNoVmFsdWVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiSGludEljb25cIilcbiAgaGludEljb246IFwiSGludEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmVmcmVzaEljb25cIilcbiAgcmVmcmVzaEljb246IFwiUmVmcmVzaEljb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQWRDbGFpbUJ0blwiKVxuICBhZENsYWltQnRuOiBcIkFkQ2xhaW1CdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQ2xhaW1CdG5cIilcbiAgY2xhaW1CdG46IFwiQ2xhaW1CdG5cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUmV3YXJkc1RpcFwiKVxuICByZXdhcmRUaXA6IFwiUmV3YXJkc1RpcFwiID0gbnVsbDtcbiAgY29uZmlnID0gbnVsbDtcbiAgY2xvc2VDYWxsYmFjayA9IG51bGw7XG4gIGNsaWNrQ291bnQgPSAwO1xuICBpc0Nsb3NpbmcgPSBmYWxzZTtcbiAgQG1qLmNvbXBvbmVudChcIkJveEFuaW1cIiwgc3AuU2tlbGV0b24pXG4gIGFuaW1Ta2VsZXRvbjogXCJCb3hBbmltXCIgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2JveFJld2FyZC9PcGVuQW5pbVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJCYW5uZXJBZF9OZWVkSGlkZUJhbm5lclwiLCB0aGlzLCBbXSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pICYmIHRoaXMuYW5pbVNrZWxldG9uLnNldEV2ZW50TGlzdGVuZXIobnVsbCk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY2xhaW1CdG4pO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJld2FyZFRpcCk7XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJCYW5uZXJBZF9OZWVkU2hvd0Jhbm5lclwiLCB0aGlzLCBbXSk7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgc2hvd1Jld2FyZCh0KSB7XG4gICAgdGhpcy5jb25maWcgPSB0LmNvbmZpZztcbiAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSB0LmNsb3NlQ2FsbGJhY2s7XG4gICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIHRoaXMucGxheU9wZW5BbmltKCk7XG4gIH1cbiAgaW5pdENvbXBvbmVudHMoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiAodGhpcy5hZENsYWltQnRuLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLmFkZEJnTm9kZSgpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYW5pbVNrZWxldG9uKSkge1xuICAgICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYW5pbVNrZWxldG9uLm5vZGUpO1xuICAgICAgdGhpcy5hbmltUHJveHkucmVzZXQoXCJcIik7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19pY29uXzFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5yZWZyZXNoSWNvbjtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltUHJveHkuYXR0YWNoTm9kZShcImhvb2tfbnVtXzFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5yZWZyZXNoVmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25fMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmhpbnRJY29uO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmhpbnRWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cbiAgYWRkQmdOb2RlKCkge1xuICAgIHZhciB0ID0gbmV3IGNjLk5vZGUoXCJiZ1wiKTtcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0LCBcInRleHR1cmUvd2luL3Jlc3VsdF9tYXNrXCIpO1xuICAgIHQuc2V0Q29udGVudFNpemUoMTA4MCwgMTkyMCk7XG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKHQpO1xuICAgIHQuc2V0U2libGluZ0luZGV4KDApO1xuICAgIHQuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgdmFyIGUgPSB0LmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgIGUuaXNBbGlnblRvcCA9IHRydWU7XG4gICAgZS5pc0FsaWduQm90dG9tID0gdHJ1ZTtcbiAgICBlLmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICBlLmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgZS50b3AgPSAwO1xuICAgIGUuYm90dG9tID0gMDtcbiAgICBlLmxlZnQgPSAwO1xuICAgIGUucmlnaHQgPSAwO1xuICAgIEFkYXB0ZXIuaWdub3JlU2FmZVJlY3QodCk7XG4gIH1cbiAgcmVnaXN0ZXJCdXR0b25zKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLmNsYWltQnRuLCB0aGlzLm9uQ2xhaW1CdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uQmdDbGljay5iaW5kKHRoaXMpLFxuICAgICAgaWdub3JlQ2xpY2tBdWRpbzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uQmdDbGljaygpIHtcbiAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICB0aGlzLmNsaWNrQ291bnQgPj0gMyAmJiB0aGlzLmhpZGVBbmltKCk7XG4gIH1cbiAgb25DbGFpbUJ0bkNsaWNrKCkge1xuICAgIHRoaXMuaGlkZUFuaW0oKTtcbiAgfVxuICB1cGRhdGVMYWJlbCgpIHtcbiAgICB2YXIgdDtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5oaW50VmFsdWUpICYmICh0aGlzLmhpbnRWYWx1ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuY29uZmlnLmhpbnQudG9TdHJpbmcoKSk7XG4gICAgICBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaFZhbHVlKSAmJiAodGhpcy5yZWZyZXNoVmFsdWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNvbmZpZy5zaHVmZmxlLnRvU3RyaW5nKCkpO1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLmNsYWltQnRuKSAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KG51bGwgPT09ICh0ID0gdGhpcy5jbGFpbUJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ub2RlLCBcIkNsYWltXCIsIFwiTGVhZGVyQm9hcmRfUmV3YXJkX0NsYWltXCIpO1xuICAgICAgY2MuaXNWYWxpZCh0aGlzLnJld2FyZFRpcCkgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLnJld2FyZFRpcCwgXCJXaW5uaW5nIFN0cmVha1wiLCBcIldpbm5pbmdfc3RyZWFrX1RpdGxlXCIpO1xuICAgIH1cbiAgfVxuICByZXNldCgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaEljb24pICYmICh0aGlzLnJlZnJlc2hJY29uLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMucmVmcmVzaFZhbHVlKSAmJiAodGhpcy5yZWZyZXNoVmFsdWUuYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaW50SWNvbikgJiYgKHRoaXMuaGludEljb24uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaW50VmFsdWUpICYmICh0aGlzLmhpbnRWYWx1ZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmFkQ2xhaW1CdG4pICYmICh0aGlzLmFkQ2xhaW1CdG4uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikgJiYgKHRoaXMuY2xhaW1CdG4uYWN0aXZlID0gZmFsc2UpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5yZXdhcmRUaXApICYmICh0aGlzLnJld2FyZFRpcC5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgcGxheU9wZW5BbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5hbmltU2tlbGV0b24pICYmIGNjLmlzVmFsaWQodGhpcy5jbGFpbUJ0bikgJiYgY2MuaXNWYWxpZCh0aGlzLnJld2FyZFRpcCkpIHtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC4yNSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkJveCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgdGhpcy5hbmltU2tlbGV0b24uc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBcImV2ZW50X3Jld2FyZHNcIiA9PT0gaS5kYXRhLm5hbWUgJiYgdC5vbk9wZW5BbmltRmluaXNoZWQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltUHJveHkuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0LnBsYXlSZXdhcmRzQW5pbSgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNsYWltQnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbGFpbUJ0bi5zY2FsZSA9IDAuNjtcbiAgICAgIGNjLmlzVmFsaWQodGhpcy5hZENsYWltQnRuKSAmJiB0aGlzLmNsYWltQnRuLnNldFBvc2l0aW9uKHRoaXMuYWRDbGFpbUJ0bi5wb3NpdGlvbik7XG4gICAgICB2YXIgZSA9IGNjLnR3ZWVuKCkudG8oMC4yLCB7XG4gICAgICAgIHNjYWxlOiAxLjA1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgIH0pLnRvKDAuMTcsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluXG4gICAgICB9KTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuY2xhaW1CdG4pLmRlbGF5KDEuNzMpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmNsYWltQnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9KS50aGVuKGUpLnN0YXJ0KCk7XG4gICAgICB0aGlzLnBsYXlSZXdhcmRzVGlwQW5pbSgpO1xuICAgIH1cbiAgfVxuICBwbGF5UmV3YXJkc1RpcEFuaW0oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy5yZXdhcmRUaXApICYmIGNjLnR3ZWVuKHRoaXMucmV3YXJkVGlwKS5kZWxheSgwLjkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdC5yZXdhcmRUaXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHQucmV3YXJkVGlwLnNjYWxlID0gMC4zO1xuICAgIH0pLnRvKDAuMiwge1xuICAgICAgc2NhbGU6IDEuM1xuICAgIH0sIHtcbiAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICB9KS50bygwLjE3LCB7XG4gICAgICBzY2FsZTogMC44XG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLnRvKDAuMTMsIHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgb25PcGVuQW5pbUZpbmlzaGVkKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5yZWZyZXNoSWNvbikgJiYgKHRoaXMucmVmcmVzaEljb24uYWN0aXZlID0gdHJ1ZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLnJlZnJlc2hWYWx1ZSkgJiYgKHRoaXMucmVmcmVzaFZhbHVlLmFjdGl2ZSA9IHRydWUpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5oaW50SWNvbikgJiYgKHRoaXMuaGludEljb24uYWN0aXZlID0gdHJ1ZSk7XG4gICAgY2MuaXNWYWxpZCh0aGlzLmhpbnRWYWx1ZSkgJiYgKHRoaXMuaGludFZhbHVlLmFjdGl2ZSA9IHRydWUpO1xuICB9XG4gIHBsYXlSZXdhcmRzQW5pbSgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuYW5pbVNrZWxldG9uKSAmJiB0aGlzLmFuaW1Qcm94eS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgfVxuICBoaWRlQW5pbSgpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiAhdGhpcy5pc0Nsb3NpbmcpIHtcbiAgICAgIHRoaXMuaXNDbG9zaW5nID0gdHJ1ZTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC4xNywge1xuICAgICAgICBzY2FsZTogMS4wNVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0XG4gICAgICB9KS50bygwLjEzLCB7XG4gICAgICAgIHNjYWxlOiAwLjMsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dFxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQub25DbG9zZSgpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuY2xvc2VDYWxsYmFjaykgfHwgdm9pZCAwID09PSB0IHx8IHQuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmNsb3NlKCk7XG4gIH1cbn0iXX0=