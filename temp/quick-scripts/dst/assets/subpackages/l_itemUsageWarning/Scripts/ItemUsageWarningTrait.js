
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_itemUsageWarning/Scripts/ItemUsageWarningTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8ac9hhIn5P+bl4iNjUSooL', 'ItemUsageWarningTrait');
// subpackages/l_itemUsageWarning/Scripts/ItemUsageWarningTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ItemUsageWarningTrait = /** @class */ (function (_super) {
    __extends(ItemUsageWarningTrait, _super);
    function ItemUsageWarningTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countdownTimeout = -1;
        _this.isCurRoundCleared = false;
        _this.shuffleNode = null;
        _this.tipsNode = null;
        return _this;
    }
    ItemUsageWarningTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvent([{
                event: "T2NodeBtmVw_onLoad"
            }, {
                event: "ClearT2Hlp_newClrEffEff"
            }, {
                event: "ClearT4Hlp_newClrEffEff"
            }]);
    };
    ItemUsageWarningTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("SkeletonData", ["l_itemUsageWarning:spine/gameplay_icon_prop"]);
        this.isCurRoundCleared = false;
    };
    ItemUsageWarningTrait.prototype.onMainGameCtrl_nextLv = function (t, e) {
        e();
        this.stopCountdown();
        this.isCurRoundCleared = false;
    };
    ItemUsageWarningTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        e();
        this.stopCountdown();
        this.shuffleNode = null;
        this.tipsNode = null;
        this.isCurRoundCleared = false;
    };
    ItemUsageWarningTrait.prototype.onMainGmVw_initLayers = function (t, e) {
        var o, n, i, r;
        e();
        var s = t.ins;
        this.shuffleNode = null === (n = null === (o = s.bottomRootNode) || void 0 === o ? void 0 : o.getChildByName("btnShuffle")) || void 0 === n ? void 0 : n.getChildByName("Background");
        this.tipsNode = null === (r = null === (i = s.bottomRootNode) || void 0 === i ? void 0 : i.getChildByName("btnPropHint")) || void 0 === r ? void 0 : r.getChildByName("Background");
    };
    ItemUsageWarningTrait.prototype.onT2NodeBtmVw_onLoad = function (t, e) {
        var o, n;
        e();
        var i = t.ins;
        this.shuffleNode = null === (o = i.node.getChildByName("btnShuffle")) || void 0 === o ? void 0 : o.getChildByName("Background");
        this.tipsNode = null === (n = i.node.getChildByName("btnPropHint")) || void 0 === n ? void 0 : n.getChildByName("Background");
    };
    ItemUsageWarningTrait.prototype.onIptBase_pushClrEff = function (t, e) {
        e();
        this.startCountdown();
        this.isCurRoundCleared = true;
    };
    ItemUsageWarningTrait.prototype.onClearT2Hlp_newClrEffEff = function (t, e) {
        e();
        this.startCountdown();
        this.isCurRoundCleared = true;
    };
    ItemUsageWarningTrait.prototype.onClearT4Hlp_newClrEffEff = function (t, e) {
        e();
        this.startCountdown();
        this.isCurRoundCleared = true;
    };
    ItemUsageWarningTrait.prototype.stopCountdown = function () {
        if (this.countdownTimeout > 0) {
            clearTimeout(this.countdownTimeout);
            this.countdownTimeout = -1;
        }
    };
    ItemUsageWarningTrait.prototype.checkCondition = function () {
        return true;
    };
    ItemUsageWarningTrait.prototype.startCountdown = function () {
        var t = this;
        if (this.checkCondition()) {
            this.stopCountdown();
            this.countdownTimeout = setTimeout(function () {
                t.countdownTimeout = -1;
                t.showWarningEffect();
            }, 1000 * this.getDelayTime());
        }
    };
    ItemUsageWarningTrait.prototype.getDelayTime = function () {
        return null == this._traitData.delayTime ? 15 : this._traitData.delayTime;
    };
    ItemUsageWarningTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    ItemUsageWarningTrait.prototype.onTopTouchStart = function () {
        this.isCurRoundCleared && this.startCountdown();
    };
    ItemUsageWarningTrait.prototype.showWarningEffect = function () {
        if (GameTypeEnums_1.MjGameType.Classic != UserModel_1.default.getInstance().getCurrentGameType()) {
            var t = this._traitData.effType, e = "", o = null;
            if (1 == t) {
                e = "refresh";
                o = this.shuffleNode;
            }
            else if (2 == t) {
                e = "hint";
                o = this.tipsNode;
            }
            else {
                var n = Math.random();
                e = n > 0.5 ? "refresh" : "hint";
                o = n > 0.5 ? this.shuffleNode : this.tipsNode;
            }
            this.showEffectByParent(o, e);
        }
    };
    ItemUsageWarningTrait.prototype.showEffectByParent = function (t, e) {
        cc.isValid(t) && (BaseSpine_1.default.create("spine/gameplay_icon_prop", e, 1, this.onEffectComplete.bind(this), true, "l_itemUsageWarning").node.parent = t);
    };
    ItemUsageWarningTrait.prototype.onEffectComplete = function () {
        this.isCurRoundCleared && this.startCountdown();
    };
    ItemUsageWarningTrait.traitKey = "ItemUsageWarning";
    __decorate([
        mj.traitEvent("ItemWarning_check")
    ], ItemUsageWarningTrait.prototype, "checkCondition", null);
    __decorate([
        mj.traitEvent("ItemWarning_delayTime")
    ], ItemUsageWarningTrait.prototype, "getDelayTime", null);
    ItemUsageWarningTrait = __decorate([
        mj.trait,
        mj.class("ItemUsageWarningTrait")
    ], ItemUsageWarningTrait);
    return ItemUsageWarningTrait;
}(Trait_1.default));
exports.default = ItemUsageWarningTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2l0ZW1Vc2FnZVdhcm5pbmcvU2NyaXB0cy9JdGVtVXNhZ2VXYXJuaW5nVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE0RTtBQUM1RSx3RkFBb0Y7QUFDcEYsZ0VBQTJEO0FBQzNELHlFQUFvRTtBQUNwRSxzRUFBaUU7QUFHakU7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUF1SEM7UUF0SEMsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEIsdUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBbUhsQixDQUFDO0lBakhDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLG9CQUFvQjthQUM1QixFQUFFO2dCQUNELEtBQUssRUFBRSx5QkFBeUI7YUFDakMsRUFBRTtnQkFDRCxLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNELHNEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxxREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFD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LENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEosQ0FBQztJQUNELGdEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQWpITSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBZ0VyQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7K0RBR2xDO0lBWUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzZEQUd0QztJQXJGa0IscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXVIekM7SUFBRCw0QkFBQztDQXZIRCxBQXVIQyxDQXZIa0QsZUFBSyxHQXVIdkQ7a0JBdkhvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVlRfTVNHX0tFWV9FVkVOVF9UT1BfVE9VQ0hfU1RBUlQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSXRlbVVzYWdlV2FybmluZ1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtVXNhZ2VXYXJuaW5nVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGNvdW50ZG93blRpbWVvdXQgPSAtMTtcbiAgaXNDdXJSb3VuZENsZWFyZWQgPSBmYWxzZTtcbiAgc2h1ZmZsZU5vZGUgPSBudWxsO1xuICB0aXBzTm9kZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSXRlbVVzYWdlV2FybmluZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJUMk5vZGVCdG1Wd19vbkxvYWRcIlxuICAgIH0sIHtcbiAgICAgIGV2ZW50OiBcIkNsZWFyVDJIbHBfbmV3Q2xyRWZmRWZmXCJcbiAgICB9LCB7XG4gICAgICBldmVudDogXCJDbGVhclQ0SGxwX25ld0NsckVmZkVmZlwiXG4gICAgfV0pO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXModCwgZSkge1xuICAgIGUoKTtcbiAgICB0Lmlucy5hZGRQcmVsb2FkUmVzKFwiU2tlbGV0b25EYXRhXCIsIFtcImxfaXRlbVVzYWdlV2FybmluZzpzcGluZS9nYW1lcGxheV9pY29uX3Byb3BcIl0pO1xuICAgIHRoaXMuaXNDdXJSb3VuZENsZWFyZWQgPSBmYWxzZTtcbiAgfVxuICBvbk1haW5HYW1lQ3RybF9uZXh0THYodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLnN0b3BDb3VudGRvd24oKTtcbiAgICB0aGlzLmlzQ3VyUm91bmRDbGVhcmVkID0gZmFsc2U7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdWlEZXModCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLnN0b3BDb3VudGRvd24oKTtcbiAgICB0aGlzLnNodWZmbGVOb2RlID0gbnVsbDtcbiAgICB0aGlzLnRpcHNOb2RlID0gbnVsbDtcbiAgICB0aGlzLmlzQ3VyUm91bmRDbGVhcmVkID0gZmFsc2U7XG4gIH1cbiAgb25NYWluR21Wd19pbml0TGF5ZXJzKHQsIGUpIHtcbiAgICB2YXIgbywgbiwgaSwgcjtcbiAgICBlKCk7XG4gICAgdmFyIHMgPSB0LmlucztcbiAgICB0aGlzLnNodWZmbGVOb2RlID0gbnVsbCA9PT0gKG4gPSBudWxsID09PSAobyA9IHMuYm90dG9tUm9vdE5vZGUpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5TaHVmZmxlXCIpKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcbiAgICB0aGlzLnRpcHNOb2RlID0gbnVsbCA9PT0gKHIgPSBudWxsID09PSAoaSA9IHMuYm90dG9tUm9vdE5vZGUpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q2hpbGRCeU5hbWUoXCJidG5Qcm9wSGludFwiKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIik7XG4gIH1cbiAgb25UMk5vZGVCdG1Wd19vbkxvYWQodCwgZSkge1xuICAgIHZhciBvLCBuO1xuICAgIGUoKTtcbiAgICB2YXIgaSA9IHQuaW5zO1xuICAgIHRoaXMuc2h1ZmZsZU5vZGUgPSBudWxsID09PSAobyA9IGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blNodWZmbGVcIikpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpO1xuICAgIHRoaXMudGlwc05vZGUgPSBudWxsID09PSAobiA9IGkubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blByb3BIaW50XCIpKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcbiAgfVxuICBvbklwdEJhc2VfcHVzaENsckVmZih0LCBlKSB7XG4gICAgZSgpO1xuICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgICB0aGlzLmlzQ3VyUm91bmRDbGVhcmVkID0gdHJ1ZTtcbiAgfVxuICBvbkNsZWFyVDJIbHBfbmV3Q2xyRWZmRWZmKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5zdGFydENvdW50ZG93bigpO1xuICAgIHRoaXMuaXNDdXJSb3VuZENsZWFyZWQgPSB0cnVlO1xuICB9XG4gIG9uQ2xlYXJUNEhscF9uZXdDbHJFZmZFZmYodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XG4gICAgdGhpcy5pc0N1clJvdW5kQ2xlYXJlZCA9IHRydWU7XG4gIH1cbiAgc3RvcENvdW50ZG93bigpIHtcbiAgICBpZiAodGhpcy5jb3VudGRvd25UaW1lb3V0ID4gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY291bnRkb3duVGltZW91dCk7XG4gICAgICB0aGlzLmNvdW50ZG93blRpbWVvdXQgPSAtMTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJdGVtV2FybmluZ19jaGVja1wiKVxuICBjaGVja0NvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBzdGFydENvdW50ZG93bigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuY2hlY2tDb25kaXRpb24oKSkge1xuICAgICAgdGhpcy5zdG9wQ291bnRkb3duKCk7XG4gICAgICB0aGlzLmNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5jb3VudGRvd25UaW1lb3V0ID0gLTE7XG4gICAgICAgIHQuc2hvd1dhcm5pbmdFZmZlY3QoKTtcbiAgICAgIH0sIDEwMDAgKiB0aGlzLmdldERlbGF5VGltZSgpKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJdGVtV2FybmluZ19kZWxheVRpbWVcIilcbiAgZ2V0RGVsYXlUaW1lKCkge1xuICAgIHJldHVybiBudWxsID09IHRoaXMuX3RyYWl0RGF0YS5kZWxheVRpbWUgPyAxNSA6IHRoaXMuX3RyYWl0RGF0YS5kZWxheVRpbWU7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtFVlRfTVNHX0tFWV9FVkVOVF9UT1BfVE9VQ0hfU1RBUlRdID0gdGhpcy5vblRvcFRvdWNoU3RhcnQuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25Ub3BUb3VjaFN0YXJ0KCkge1xuICAgIHRoaXMuaXNDdXJSb3VuZENsZWFyZWQgJiYgdGhpcy5zdGFydENvdW50ZG93bigpO1xuICB9XG4gIHNob3dXYXJuaW5nRWZmZWN0KCkge1xuICAgIGlmIChNakdhbWVUeXBlLkNsYXNzaWMgIT0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fdHJhaXREYXRhLmVmZlR5cGUsXG4gICAgICAgIGUgPSBcIlwiLFxuICAgICAgICBvID0gbnVsbDtcbiAgICAgIGlmICgxID09IHQpIHtcbiAgICAgICAgZSA9IFwicmVmcmVzaFwiO1xuICAgICAgICBvID0gdGhpcy5zaHVmZmxlTm9kZTtcbiAgICAgIH0gZWxzZSBpZiAoMiA9PSB0KSB7XG4gICAgICAgIGUgPSBcImhpbnRcIjtcbiAgICAgICAgbyA9IHRoaXMudGlwc05vZGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbiA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGUgPSBuID4gMC41ID8gXCJyZWZyZXNoXCIgOiBcImhpbnRcIjtcbiAgICAgICAgbyA9IG4gPiAwLjUgPyB0aGlzLnNodWZmbGVOb2RlIDogdGhpcy50aXBzTm9kZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd0VmZmVjdEJ5UGFyZW50KG8sIGUpO1xuICAgIH1cbiAgfVxuICBzaG93RWZmZWN0QnlQYXJlbnQodCwgZSkge1xuICAgIGNjLmlzVmFsaWQodCkgJiYgKEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9nYW1lcGxheV9pY29uX3Byb3BcIiwgZSwgMSwgdGhpcy5vbkVmZmVjdENvbXBsZXRlLmJpbmQodGhpcyksIHRydWUsIFwibF9pdGVtVXNhZ2VXYXJuaW5nXCIpLm5vZGUucGFyZW50ID0gdCk7XG4gIH1cbiAgb25FZmZlY3RDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmlzQ3VyUm91bmRDbGVhcmVkICYmIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgfVxufSJdfQ==