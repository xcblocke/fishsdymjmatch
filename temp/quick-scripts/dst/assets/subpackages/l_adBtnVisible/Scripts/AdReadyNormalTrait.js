
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adBtnVisible/Scripts/AdReadyNormalTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fdb71DF+IxBMLnB8n3L6ygj', 'AdReadyNormalTrait');
// subpackages/l_adBtnVisible/Scripts/AdReadyNormalTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var AdReadyNormalTrait = /** @class */ (function (_super) {
    __extends(AdReadyNormalTrait, _super);
    function AdReadyNormalTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdReadyNormalTrait.prototype.getExperimentId = function () {
        return this.traitData.experimentId || 1;
    };
    AdReadyNormalTrait.prototype.isNeedReadShowAd = function () {
        return this.traitData.isNeedReadyShowAd || false;
    };
    AdReadyNormalTrait.prototype.isCoolStartClaimed = function () {
        return this.traitData.isCoolStartClaimed || false;
    };
    AdReadyNormalTrait.prototype.isReadyAd = function () {
        return AdManager_1.default.getInstance().checkVideoAdIsReady();
    };
    AdReadyNormalTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdReadyNormalTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyNormalTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyNormalTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyNormalTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchReward(false);
        e();
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_isShowAdBtn = function (t, e) {
        if (this.isNeedReadShowAd()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.isReadyAd()
            });
        }
        else {
            e();
        }
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_isShowAdBtn = function (t, e) {
        if (this.isNeedReadShowAd()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.isReadyAd()
            });
        }
        else {
            e();
        }
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyNormalTrait.prototype.onLvBoxVw_adBtnClick = function (t, e) {
        var o, r;
        if (this.isCoolStartClaimed()) {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
            if (i) {
                var a = {
                    adScale: i.adScale,
                    items: i.items,
                    rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
                };
                this.saveRewardConfig(a);
            }
        }
        e();
    };
    AdReadyNormalTrait.prototype.onBoxOpenUI_adBtnClick = function (t, e) {
        var o, r;
        if (this.isCoolStartClaimed()) {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
            if (i) {
                var a = {
                    adScale: i.adScale,
                    items: i.rewards,
                    rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
                };
                this.saveRewardConfig(a);
            }
        }
        e();
    };
    AdReadyNormalTrait.prototype.saveRewardConfig = function (t) {
        this.localData.rewardConfig = t;
    };
    AdReadyNormalTrait.prototype.clearRewardConfig = function () {
        this.localData.rewardConfig && (this.localData.rewardConfig = null);
    };
    AdReadyNormalTrait.prototype.dispatchReward = function (t) {
        if (this.isCoolStartClaimed()) {
            var e = this.localData.rewardConfig;
            if (e && e.items && 0 !== e.items.length) {
                for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
                    var i = e.items[r], a = i.count * o;
                    if (!(a <= 0)) {
                        var d = GameTypeEnums_1.EGetItemReasonId.LevelBoxAd, c = "冷启动_主关卡宝箱奖励_看广告翻倍_到达第" + e.rewardLevel + "关";
                        GameUtils_1.default.deliverProp({
                            isInGame: t,
                            reasonId: d,
                            reasonInfo: c,
                            itemType: i.item,
                            itemCount: a
                        });
                    }
                }
                this.clearRewardConfig();
            }
        }
    };
    AdReadyNormalTrait.traitKey = "AdReadyNormal";
    AdReadyNormalTrait = __decorate([
        mj.trait,
        mj.class("AdReadyNormalTrait")
    ], AdReadyNormalTrait);
    return AdReadyNormalTrait;
}(Trait_1.default));
exports.default = AdReadyNormalTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkQnRuVmlzaWJsZS9TY3JpcHRzL0FkUmVhZHlOb3JtYWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTBGO0FBQzFGLDRFQUF1RTtBQUN2RSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFvSUEsQ0FBQztJQWxJQyw0Q0FBZSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELDZDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsSUFBSSxLQUFLLENBQUM7SUFDbkQsQ0FBQztJQUNELCtDQUFrQixHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUNELHNDQUFTLEdBQVQ7UUFDRSxPQUFPLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG1EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHdEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMs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RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDYixJQUFJLENBQUMsR0FBRyxnQ0FBZ0IsQ0FBQyxVQUFVLEVBQ2pDLENBQUMsR0FBRyx1QkFBdUIsR0FBRyxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQzt3QkFDcEQsbUJBQVMsQ0FBQyxXQUFXLENBQUM7NEJBQ3BCLFFBQVEsRUFBRSxDQUFDOzRCQUNYLFFBQVEsRUFBRSxDQUFDOzRCQUNYLFVBQVUsRUFBRSxDQUFDOzRCQUNiLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSTs0QkFDaEIsU0FBUyxFQUFFLENBQUM7eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKO2lCQUNGO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO1NBQ0Y7SUFDSCxDQUFDO0lBbElNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQW9JdEM7SUFBRCx5QkFBQztDQXBJRCxBQW9JQyxDQXBJK0MsZUFBSyxHQW9JcEQ7a0JBcElvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2V0SXRlbVJlYXNvbklkIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQWRSZWFkeU5vcm1hbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZFJlYWR5Tm9ybWFsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQWRSZWFkeU5vcm1hbFwiO1xuICBnZXRFeHBlcmltZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLmV4cGVyaW1lbnRJZCB8fCAxO1xuICB9XG4gIGlzTmVlZFJlYWRTaG93QWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLmlzTmVlZFJlYWR5U2hvd0FkIHx8IGZhbHNlO1xuICB9XG4gIGlzQ29vbFN0YXJ0Q2xhaW1lZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuaXNDb29sU3RhcnRDbGFpbWVkIHx8IGZhbHNlO1xuICB9XG4gIGlzUmVhZHlBZCgpIHtcbiAgICByZXR1cm4gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoUmV3YXJkKHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25SZXBsYXlHYW1lKHQsIGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoUmV3YXJkKHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25TdXJ2aXZhbEdhbWUodCwgZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hSZXdhcmQodHJ1ZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uSGFsbFZ3X3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoUmV3YXJkKGZhbHNlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25MdkJveFZ3X2lzU2hvd0FkQnRuKHQsIGUpIHtcbiAgICBpZiAodGhpcy5pc05lZWRSZWFkU2hvd0FkKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogdGhpcy5pc1JlYWR5QWQoKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25MdkJveFZ3X2FkRmFpbGVkKHQsIGUpIHtcbiAgICB0aGlzLmlzQ29vbFN0YXJ0Q2xhaW1lZCgpICYmIHRoaXMuY2xlYXJSZXdhcmRDb25maWcoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25MdkJveFZ3X2FkU3VjY2Vzcyh0LCBlKSB7XG4gICAgdmFyIG8sIHI7XG4gICAgdGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSAmJiAobnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ub2RlKSAmJiBjYy5pc1ZhbGlkKG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubm9kZSkgJiYgdGhpcy5jbGVhclJld2FyZENvbmZpZygpO1xuICAgIGUoKTtcbiAgfVxuICBvbkJveE9wZW5VSV9pc1Nob3dBZEJ0bih0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNOZWVkUmVhZFNob3dBZCgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuaXNSZWFkeUFkKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uQm94T3BlblVJX2FkU3VjY2Vzcyh0LCBlKSB7XG4gICAgdmFyIG8sIHI7XG4gICAgdGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSAmJiAobnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5ub2RlKSAmJiBjYy5pc1ZhbGlkKG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubm9kZSkgJiYgdGhpcy5jbGVhclJld2FyZENvbmZpZygpO1xuICAgIGUoKTtcbiAgfVxuICBvbkJveE9wZW5VSV9hZEZhaWxlZCh0LCBlKSB7XG4gICAgdGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSAmJiB0aGlzLmNsZWFyUmV3YXJkQ29uZmlnKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uTHZCb3hWd19hZEJ0bkNsaWNrKHQsIGUpIHtcbiAgICB2YXIgbywgcjtcbiAgICBpZiAodGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNvbmZpZztcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciBhID0ge1xuICAgICAgICAgIGFkU2NhbGU6IGkuYWRTY2FsZSxcbiAgICAgICAgICBpdGVtczogaS5pdGVtcyxcbiAgICAgICAgICByZXdhcmRMZXZlbDogKG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucmV3YXJkTGV2ZWwpIHx8IDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zYXZlUmV3YXJkQ29uZmlnKGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25Cb3hPcGVuVUlfYWRCdG5DbGljayh0LCBlKSB7XG4gICAgdmFyIG8sIHI7XG4gICAgaWYgKHRoaXMuaXNDb29sU3RhcnRDbGFpbWVkKCkpIHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5jb25maWc7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB2YXIgYSA9IHtcbiAgICAgICAgICBhZFNjYWxlOiBpLmFkU2NhbGUsXG4gICAgICAgICAgaXRlbXM6IGkucmV3YXJkcyxcbiAgICAgICAgICByZXdhcmRMZXZlbDogKG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucmV3YXJkTGV2ZWwpIHx8IDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zYXZlUmV3YXJkQ29uZmlnKGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgc2F2ZVJld2FyZENvbmZpZyh0KSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmV3YXJkQ29uZmlnID0gdDtcbiAgfVxuICBjbGVhclJld2FyZENvbmZpZygpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb25maWcgJiYgKHRoaXMubG9jYWxEYXRhLnJld2FyZENvbmZpZyA9IG51bGwpO1xuICB9XG4gIGRpc3BhdGNoUmV3YXJkKHQpIHtcbiAgICBpZiAodGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb25maWc7XG4gICAgICBpZiAoZSAmJiBlLml0ZW1zICYmIDAgIT09IGUuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIG8gPSBlLmFkU2NhbGUgLSAxLCByID0gMDsgciA8IGUuaXRlbXMubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICB2YXIgaSA9IGUuaXRlbXNbcl0sXG4gICAgICAgICAgICBhID0gaS5jb3VudCAqIG87XG4gICAgICAgICAgaWYgKCEoYSA8PSAwKSkge1xuICAgICAgICAgICAgdmFyIGQgPSBFR2V0SXRlbVJlYXNvbklkLkxldmVsQm94QWQsXG4gICAgICAgICAgICAgIGMgPSBcIuWGt+WQr+WKqF/kuLvlhbPljaHlrp3nrrHlpZblirFf55yL5bm/5ZGK57+75YCNX+WIsOi+vuesrFwiICsgZS5yZXdhcmRMZXZlbCArIFwi5YWzXCI7XG4gICAgICAgICAgICBHYW1lVXRpbHMuZGVsaXZlclByb3Aoe1xuICAgICAgICAgICAgICBpc0luR2FtZTogdCxcbiAgICAgICAgICAgICAgcmVhc29uSWQ6IGQsXG4gICAgICAgICAgICAgIHJlYXNvbkluZm86IGMsXG4gICAgICAgICAgICAgIGl0ZW1UeXBlOiBpLml0ZW0sXG4gICAgICAgICAgICAgIGl0ZW1Db3VudDogYVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJSZXdhcmRDb25maWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=