"use strict";
cc._RF.push(module, '92c9euu/jlPOajeajqplwsM', 'SignClassicRewardView');
// subpackages/r_dailySignClassic/Scripts/view/SignClassicRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERewardType = void 0;
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var EventTrackingManager_1 = require("../../../../Scripts/base/event/EventTrackingManager");
var EventData_1 = require("../../../../Scripts/base/event/EventData");
exports.ERewardType = {
    Daily: "daily",
    Box: "box"
};
var SignClassicRewardView = /** @class */ (function (_super) {
    __extends(SignClassicRewardView, _super);
    function SignClassicRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refreshIcon = null;
        _this.refreshValue = null;
        _this.hintIcon = null;
        _this.hintValue = null;
        _this._bgMask = null;
        _this._dayIndex = 0;
        _this._baseReward = null;
        _this._rewardType = exports.ERewardType.Daily;
        _this._boxIndex = 0;
        _this.showRewardsNodes = [];
        _this._rewardCount = 0;
        _this.onCloseCallback = null;
        _this.animSkeleton = null;
        _this.boxAnimSkeleton = null;
        return _this;
    }
    SignClassicRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
    };
    SignClassicRewardView.prototype.initComponents = function () {
        var t = this;
        if (cc.isValid(this.animSkeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.animSkeleton.node);
            this.animProxy.reset("");
            this.animProxy.markReady("");
            this.animSkeleton.setEventListener(function (e, i) {
                "event_rewards" === i.data.name && t.onOpenAnimFinished();
            });
        }
        if (cc.isValid(this.boxAnimSkeleton)) {
            this.boxAnimProxy = BaseSpine_1.default.refreshWithNode(this.boxAnimSkeleton.node);
            this.boxAnimProxy.reset("");
            this.boxAnimProxy.markReady("");
            this.boxAnimSkeleton.node.active = false;
        }
    };
    SignClassicRewardView.prototype.showReward = function (t, e, i, o) {
        if (i === void 0) { i = exports.ERewardType.Daily; }
        var n = this;
        this._dayIndex = t;
        this._baseReward = e;
        this._rewardType = i;
        this._boxIndex = void 0 !== o ? o : 0;
        this.resetNodes();
        this.initRewardConfig(e);
        if (i === exports.ERewardType.Box) {
            this.showBgMask(90);
            this.playBoxAnim();
        }
        else {
            this.showBgMask(210);
            this.playDailyAnim();
        }
        var a = i === exports.ERewardType.Box ? "每日签到_宝箱奖励展示" : "每日签到_奖励展示";
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.PageShow, {
            page_name: a,
            day_index: t,
            hint_count: e.hint,
            shuffle_count: e.shuffle,
            reward_type: i
        });
        this.scheduleOnce(function () {
            n.closePanel();
        }, i === exports.ERewardType.Box ? 2.2 : 1);
    };
    SignClassicRewardView.prototype.initRewardConfig = function (t) {
        var e = this;
        this.hideAllRewardNodes();
        this.showRewardsNodes = [];
        var i = function i(t, i, o) {
            if (t && i) {
                e.animProxy.attachNode("hook_icon_" + o, function () {
                    return t;
                });
                e.animProxy.attachNode("hook_num_" + o, function () {
                    return i;
                });
            }
        }, o = 1;
        if (t.hint > 0) {
            this.hintValue.getComponent(cc.Label).string = String(t.hint);
            this.showRewardsNodes.push(this.hintIcon, this.hintValue);
            i(this.hintIcon, this.hintValue, o);
            o++;
        }
        if (t.shuffle > 0) {
            this.refreshValue.getComponent(cc.Label).string = String(t.shuffle);
            this.showRewardsNodes.push(this.refreshIcon, this.refreshValue);
            i(this.refreshIcon, this.refreshValue, o);
            o++;
        }
        this._rewardCount = (t.hint > 0 ? 1 : 0) + (t.shuffle > 0 ? 1 : 0);
    };
    SignClassicRewardView.prototype.hideAllRewardNodes = function () {
        this.refreshIcon.active = false;
        this.refreshValue.active = false;
        this.hintIcon.active = false;
        this.hintValue.active = false;
    };
    SignClassicRewardView.prototype.playBoxAnim = function () {
        var t = this;
        if (cc.isValid(this.boxAnimSkeleton) && this.boxAnimProxy) {
            this.boxAnimSkeleton.node.active = true;
            this.animSkeleton.node.active = false;
            cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            var e = "in_" + (this._boxIndex + 1);
            this.boxAnimProxy.setAnimation(e, 1, function () {
                t.boxAnimSkeleton.node.active = false;
            });
            this.scheduleOnce(function () {
                t.animSkeleton.node.active = true;
                t.showBgMask(190);
                t.playDailyAnim();
            }, 1);
        }
        else
            this.playDailyAnim();
    };
    SignClassicRewardView.prototype.playDailyAnim = function () {
        if (cc.isValid(this.animSkeleton) && this.animProxy) {
            this.animSkeleton.node.active = true;
            var t = "in_" + this._rewardCount;
            this._rewardType !== exports.ERewardType.Box && cc.tween(this.node).delay(0.25).call(function () {
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Box);
            }).start();
            this.animProxy.setAnimation(t, 1, function () { });
        }
    };
    SignClassicRewardView.prototype.onOpenAnimFinished = function () {
        var t, e;
        try {
            for (var i = __values(this.showRewardsNodes), o = i.next(); !o.done; o = i.next()) {
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
    SignClassicRewardView.prototype.playIdleAnim = function () {
        if (cc.isValid(this.animSkeleton)) {
            var t = "idle_" + this._rewardCount;
            this.animProxy.setAnimation(t, -1);
        }
    };
    SignClassicRewardView.prototype.resetNodes = function () {
        [this.refreshIcon, this.refreshValue, this.hintIcon, this.hintValue].forEach(function (t) {
            cc.isValid(t) && (t.active = false);
        });
    };
    SignClassicRewardView.prototype.showBgMask = function (t) {
        this._bgMask = cc.find("bg_mask", this.node);
        if (cc.isValid(this._bgMask)) {
            this._bgMask.opacity = 0;
            cc.tween(this._bgMask).to(0.2, {
                opacity: t
            }).start();
        }
    };
    SignClassicRewardView.prototype.closePanel = function () {
        var t = this;
        cc.tween(this.node).to(0.05, {
            scale: 0.8,
            opacity: 0
        }).call(function () {
            t.onCloseCallback && t.onCloseCallback();
            cc.isValid(t.node) && t.node.destroy();
        }).start();
    };
    SignClassicRewardView.prefabUrl = "prefab/SignClassicReward";
    SignClassicRewardView.bundleName = "r_dailySignClassic";
    __decorate([
        mj.node("RefreshIcon")
    ], SignClassicRewardView.prototype, "refreshIcon", void 0);
    __decorate([
        mj.node("RefreshValue")
    ], SignClassicRewardView.prototype, "refreshValue", void 0);
    __decorate([
        mj.node("HintIcon")
    ], SignClassicRewardView.prototype, "hintIcon", void 0);
    __decorate([
        mj.node("HintValue")
    ], SignClassicRewardView.prototype, "hintValue", void 0);
    __decorate([
        mj.component("BoxAnim", sp.Skeleton)
    ], SignClassicRewardView.prototype, "animSkeleton", void 0);
    __decorate([
        mj.component("BoxAnim2", sp.Skeleton)
    ], SignClassicRewardView.prototype, "boxAnimSkeleton", void 0);
    SignClassicRewardView = __decorate([
        mj.class
    ], SignClassicRewardView);
    return SignClassicRewardView;
}(BaseUI_1.default));
exports.default = SignClassicRewardView;

cc._RF.pop();