
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dailySignClassic/Scripts/view/SignClassicRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RhaWx5U2lnbkNsYXNzaWMvU2NyaXB0cy92aWV3L1NpZ25DbGFzc2ljUmV3YXJkVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCw0RUFBdUU7QUFDdkUsMkZBQXFGO0FBQ3JGLDRGQUF1RjtBQUN2RixzRUFBNkU7QUFDbEUsUUFBQSxXQUFXLEdBQUc7SUFDdkIsS0FBSyxFQUFFLE9BQU87SUFDZCxHQUFHLEVBQUUsS0FBSztDQUNYLENBQUM7QUFFRjtJQUFtRCx5Q0FBTTtJQUF6RDtRQUFBLHFFQXdMQztRQXRMQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFDOUIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBVyxHQUFHLG1CQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2hDLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFL0IscUJBQWUsR0FBZSxJQUFJLENBQUM7O0lBb0tyQyxDQUFDO0lBaktDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsOENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsZUFBZSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUNELDBDQUFVLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQXFCLEVBQUUsQ0FBRTtRQUF6QixrQkFBQSxFQUFBLElBQUksbUJBQVcsQ0FBQyxLQUFLO1FBQ3BDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLG1CQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLFFBQVEsRUFBRTtZQUN4RSxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxDQUFDO1lBQ1osVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJO1lBQ2xCLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTztZQUN4QixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxDQUFDLEtBQUssbUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGdEQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO29CQUN2QyxPQUFPLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQztnQkFDSCxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO29CQUN0QyxPQUFPLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUUsQ0FBQztTQUNMO1FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQOztZQUFNLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0QsNkNBQWEsR0FBYjtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEtBQUssbUJBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBYSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFDRCxrREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDakYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDcEM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDRCw0Q0FBWSxHQUFaO1FBQ0UsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFDRCwwQ0FBVSxHQUFWO1FBQ0UsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUN0RixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCwwQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDO2FBQ1gsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBQ0QsMENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7WUFDM0IsS0FBSyxFQUFFLEdBQUc7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixDQUFDLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWxLTSwrQkFBUyxHQUFHLDBCQUEwQixDQUFDO0lBQ3ZDLGdDQUFVLEdBQUcsb0JBQW9CLENBQUM7SUFwQnpDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7OERBQ1c7SUFFbEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzsrREFDWTtJQUVwQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOzJEQUNRO0lBRTVCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7NERBQ1M7SUFVOUI7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDOytEQUNOO0lBRS9CO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQztrRUFDSDtJQXBCaEIscUJBQXFCO1FBRHpDLEVBQUUsQ0FBQyxLQUFLO09BQ1kscUJBQXFCLENBd0x6QztJQUFELDRCQUFDO0NBeExELEFBd0xDLENBeExrRCxnQkFBTSxHQXdMeEQ7a0JBeExvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5pbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9ldmVudC9FdmVudERhdGEnO1xuZXhwb3J0IHZhciBFUmV3YXJkVHlwZSA9IHtcbiAgRGFpbHk6IFwiZGFpbHlcIixcbiAgQm94OiBcImJveFwiXG59O1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduQ2xhc3NpY1Jld2FyZFZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBAbWoubm9kZShcIlJlZnJlc2hJY29uXCIpXG4gIHJlZnJlc2hJY29uOiBcIlJlZnJlc2hJY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJlZnJlc2hWYWx1ZVwiKVxuICByZWZyZXNoVmFsdWU6IFwiUmVmcmVzaFZhbHVlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkhpbnRJY29uXCIpXG4gIGhpbnRJY29uOiBcIkhpbnRJY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkhpbnRWYWx1ZVwiKVxuICBoaW50VmFsdWU6IFwiSGludFZhbHVlXCIgPSBudWxsO1xuICBfYmdNYXNrID0gbnVsbDtcbiAgX2RheUluZGV4ID0gMDtcbiAgX2Jhc2VSZXdhcmQgPSBudWxsO1xuICBfcmV3YXJkVHlwZSA9IEVSZXdhcmRUeXBlLkRhaWx5O1xuICBfYm94SW5kZXggPSAwO1xuICBzaG93UmV3YXJkc05vZGVzID0gW107XG4gIF9yZXdhcmRDb3VudCA9IDA7XG4gIG9uQ2xvc2VDYWxsYmFjayA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJCb3hBbmltXCIsIHNwLlNrZWxldG9uKVxuICBhbmltU2tlbGV0b246IFwiQm94QW5pbVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIkJveEFuaW0yXCIsIHNwLlNrZWxldG9uKVxuICBib3hBbmltU2tlbGV0b246IFwiQm94QW5pbTJcIiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYi9TaWduQ2xhc3NpY1Jld2FyZFwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9kYWlseVNpZ25DbGFzc2ljXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XG4gIH1cbiAgaW5pdENvbXBvbmVudHMoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYW5pbVNrZWxldG9uKSkge1xuICAgICAgdGhpcy5hbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYW5pbVNrZWxldG9uLm5vZGUpO1xuICAgICAgdGhpcy5hbmltUHJveHkucmVzZXQoXCJcIik7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLmFuaW1Ta2VsZXRvbi5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgIFwiZXZlbnRfcmV3YXJkc1wiID09PSBpLmRhdGEubmFtZSAmJiB0Lm9uT3BlbkFuaW1GaW5pc2hlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYm94QW5pbVNrZWxldG9uKSkge1xuICAgICAgdGhpcy5ib3hBbmltUHJveHkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuYm94QW5pbVNrZWxldG9uLm5vZGUpO1xuICAgICAgdGhpcy5ib3hBbmltUHJveHkucmVzZXQoXCJcIik7XG4gICAgICB0aGlzLmJveEFuaW1Qcm94eS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLmJveEFuaW1Ta2VsZXRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzaG93UmV3YXJkKHQsIGUsIGkgPSBFUmV3YXJkVHlwZS5EYWlseSwgbz8pIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgdGhpcy5fZGF5SW5kZXggPSB0O1xuICAgIHRoaXMuX2Jhc2VSZXdhcmQgPSBlO1xuICAgIHRoaXMuX3Jld2FyZFR5cGUgPSBpO1xuICAgIHRoaXMuX2JveEluZGV4ID0gdm9pZCAwICE9PSBvID8gbyA6IDA7XG4gICAgdGhpcy5yZXNldE5vZGVzKCk7XG4gICAgdGhpcy5pbml0UmV3YXJkQ29uZmlnKGUpO1xuICAgIGlmIChpID09PSBFUmV3YXJkVHlwZS5Cb3gpIHtcbiAgICAgIHRoaXMuc2hvd0JnTWFzayg5MCk7XG4gICAgICB0aGlzLnBsYXlCb3hBbmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0JnTWFzaygyMTApO1xuICAgICAgdGhpcy5wbGF5RGFpbHlBbmltKCk7XG4gICAgfVxuICAgIHZhciBhID0gaSA9PT0gRVJld2FyZFR5cGUuQm94ID8gXCLmr4/ml6Xnrb7liLBf5a6d566x5aWW5Yqx5bGV56S6XCIgOiBcIuavj+aXpeetvuWIsF/lpZblirHlsZXnpLpcIjtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuUGFnZVNob3csIHtcbiAgICAgIHBhZ2VfbmFtZTogYSxcbiAgICAgIGRheV9pbmRleDogdCxcbiAgICAgIGhpbnRfY291bnQ6IGUuaGludCxcbiAgICAgIHNodWZmbGVfY291bnQ6IGUuc2h1ZmZsZSxcbiAgICAgIHJld2FyZF90eXBlOiBpXG4gICAgfSk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgbi5jbG9zZVBhbmVsKCk7XG4gICAgfSwgaSA9PT0gRVJld2FyZFR5cGUuQm94ID8gMi4yIDogMSk7XG4gIH1cbiAgaW5pdFJld2FyZENvbmZpZyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuaGlkZUFsbFJld2FyZE5vZGVzKCk7XG4gICAgdGhpcy5zaG93UmV3YXJkc05vZGVzID0gW107XG4gICAgdmFyIGkgPSBmdW5jdGlvbiBpKHQsIGksIG8pIHtcbiAgICAgICAgaWYgKHQgJiYgaSkge1xuICAgICAgICAgIGUuYW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX2ljb25fXCIgKyBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLmFuaW1Qcm94eS5hdHRhY2hOb2RlKFwiaG9va19udW1fXCIgKyBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG8gPSAxO1xuICAgIGlmICh0LmhpbnQgPiAwKSB7XG4gICAgICB0aGlzLmhpbnRWYWx1ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0LmhpbnQpO1xuICAgICAgdGhpcy5zaG93UmV3YXJkc05vZGVzLnB1c2godGhpcy5oaW50SWNvbiwgdGhpcy5oaW50VmFsdWUpO1xuICAgICAgaSh0aGlzLmhpbnRJY29uLCB0aGlzLmhpbnRWYWx1ZSwgbyk7XG4gICAgICBvKys7XG4gICAgfVxuICAgIGlmICh0LnNodWZmbGUgPiAwKSB7XG4gICAgICB0aGlzLnJlZnJlc2hWYWx1ZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyh0LnNodWZmbGUpO1xuICAgICAgdGhpcy5zaG93UmV3YXJkc05vZGVzLnB1c2godGhpcy5yZWZyZXNoSWNvbiwgdGhpcy5yZWZyZXNoVmFsdWUpO1xuICAgICAgaSh0aGlzLnJlZnJlc2hJY29uLCB0aGlzLnJlZnJlc2hWYWx1ZSwgbyk7XG4gICAgICBvKys7XG4gICAgfVxuICAgIHRoaXMuX3Jld2FyZENvdW50ID0gKHQuaGludCA+IDAgPyAxIDogMCkgKyAodC5zaHVmZmxlID4gMCA/IDEgOiAwKTtcbiAgfVxuICBoaWRlQWxsUmV3YXJkTm9kZXMoKSB7XG4gICAgdGhpcy5yZWZyZXNoSWNvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlZnJlc2hWYWx1ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhpbnRJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGludFZhbHVlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG4gIHBsYXlCb3hBbmltKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJveEFuaW1Ta2VsZXRvbikgJiYgdGhpcy5ib3hBbmltUHJveHkpIHtcbiAgICAgIHRoaXMuYm94QW5pbVNrZWxldG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbVNrZWxldG9uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDAuMjUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5Cb3gpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIHZhciBlID0gXCJpbl9cIiArICh0aGlzLl9ib3hJbmRleCArIDEpO1xuICAgICAgdGhpcy5ib3hBbmltUHJveHkuc2V0QW5pbWF0aW9uKGUsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5ib3hBbmltU2tlbGV0b24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmFuaW1Ta2VsZXRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHQuc2hvd0JnTWFzaygxOTApO1xuICAgICAgICB0LnBsYXlEYWlseUFuaW0oKTtcbiAgICAgIH0sIDEpO1xuICAgIH0gZWxzZSB0aGlzLnBsYXlEYWlseUFuaW0oKTtcbiAgfVxuICBwbGF5RGFpbHlBbmltKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYW5pbVNrZWxldG9uKSAmJiB0aGlzLmFuaW1Qcm94eSkge1xuICAgICAgdGhpcy5hbmltU2tlbGV0b24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdmFyIHQgPSBcImluX1wiICsgdGhpcy5fcmV3YXJkQ291bnQ7XG4gICAgICB0aGlzLl9yZXdhcmRUeXBlICE9PSBFUmV3YXJkVHlwZS5Cb3ggJiYgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgwLjI1KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQm94KTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB0aGlzLmFuaW1Qcm94eS5zZXRBbmltYXRpb24odCwgMSwgZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgfVxuICBvbk9wZW5BbmltRmluaXNoZWQoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGkgPSBfX3ZhbHVlcyh0aGlzLnNob3dSZXdhcmRzTm9kZXMpLCBvID0gaS5uZXh0KCk7ICFvLmRvbmU7IG8gPSBpLm5leHQoKSkge1xuICAgICAgICB2YXIgbiA9IG8udmFsdWU7XG4gICAgICAgIGNjLmlzVmFsaWQobikgJiYgKG4uYWN0aXZlID0gdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG8gJiYgIW8uZG9uZSAmJiAoZSA9IGkucmV0dXJuKSAmJiBlLmNhbGwoaSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGxheUlkbGVBbmltKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYW5pbVNrZWxldG9uKSkge1xuICAgICAgdmFyIHQgPSBcImlkbGVfXCIgKyB0aGlzLl9yZXdhcmRDb3VudDtcbiAgICAgIHRoaXMuYW5pbVByb3h5LnNldEFuaW1hdGlvbih0LCAtMSk7XG4gICAgfVxuICB9XG4gIHJlc2V0Tm9kZXMoKSB7XG4gICAgW3RoaXMucmVmcmVzaEljb24sIHRoaXMucmVmcmVzaFZhbHVlLCB0aGlzLmhpbnRJY29uLCB0aGlzLmhpbnRWYWx1ZV0uZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgY2MuaXNWYWxpZCh0KSAmJiAodC5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbiAgc2hvd0JnTWFzayh0KSB7XG4gICAgdGhpcy5fYmdNYXNrID0gY2MuZmluZChcImJnX21hc2tcIiwgdGhpcy5ub2RlKTtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9iZ01hc2spKSB7XG4gICAgICB0aGlzLl9iZ01hc2sub3BhY2l0eSA9IDA7XG4gICAgICBjYy50d2Vlbih0aGlzLl9iZ01hc2spLnRvKDAuMiwge1xuICAgICAgICBvcGFjaXR5OiB0XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBjbG9zZVBhbmVsKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMDUsIHtcbiAgICAgIHNjYWxlOiAwLjgsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB0Lm9uQ2xvc2VDYWxsYmFjayAmJiB0Lm9uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgY2MuaXNWYWxpZCh0Lm5vZGUpICYmIHQubm9kZS5kZXN0cm95KCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==