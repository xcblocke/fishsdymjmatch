
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adBtnVisible/Scripts/AdReadyRankTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef430+k2ZJDR44ZtT85Cc0U', 'AdReadyRankTrait');
// subpackages/l_adBtnVisible/Scripts/AdReadyRankTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var AdReadyRankTrait = /** @class */ (function (_super) {
    __extends(AdReadyRankTrait, _super);
    function AdReadyRankTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdReadyRankTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdReadyRankTrait.prototype.getExperimentId = function () {
        return this.traitData.experimentId || 1;
    };
    AdReadyRankTrait.prototype.isNeedReadShowAd = function () {
        return this.traitData.isNeedReadyShowAd || false;
    };
    AdReadyRankTrait.prototype.isCoolStartClaimed = function () {
        return this.traitData.isCoolStartClaimed || false;
    };
    AdReadyRankTrait.prototype.isReadyAd = function () {
        return AdManager_1.default.getInstance().checkVideoAdIsReady();
    };
    AdReadyRankTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyRankTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyRankTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyRankTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchReward(false);
        e();
    };
    AdReadyRankTrait.prototype.onRankBoxVw_isShowAdBtn = function (t, e) {
        if (this.isNeedReadShowAd()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this.isReadyAd()
            });
        }
        else {
            e();
        }
    };
    AdReadyRankTrait.prototype.onRankBoxVw_adBtnClick = function (t, e) {
        var o, r, i;
        if (this.isCoolStartClaimed()) {
            var a = null === (o = t.ins) || void 0 === o ? void 0 : o.getReward();
            if (a) {
                for (var n = {
                    adScale: (null === (r = t.ins) || void 0 === r ? void 0 : r.getAdScale()) || 1,
                    items: [],
                    rank: (null === (i = t.ins) || void 0 === i ? void 0 : i.getMyRank()) || 1
                }, s = 0; s < a.Items.length; s++) {
                    var d = a.Items[s], c = a.Counts[s];
                    c <= 0 || n.items.push({
                        item: d,
                        count: c
                    });
                }
                this.saveRewardConfig(n);
            }
        }
        e();
    };
    AdReadyRankTrait.prototype.onRankBoxVw_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyRankTrait.prototype.onRankBoxVw_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyRankTrait.prototype.saveRewardConfig = function (t) {
        this.localData.rewardConfig = t;
    };
    AdReadyRankTrait.prototype.clearRewardConfig = function () {
        this.localData.rewardConfig && (this.localData.rewardConfig = null);
    };
    AdReadyRankTrait.prototype.dispatchReward = function (t) {
        if (this.isCoolStartClaimed()) {
            var e = this.localData.rewardConfig;
            if (e && e.items && 0 !== e.items.length) {
                for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
                    var i = e.items[r], a = i.count * o;
                    if (!(a <= 0)) {
                        var d = GameTypeEnums_1.EGetItemReasonId.LeaderBoardAd, c = "冷启动_排行榜宝箱奖励_看广告翻倍_到达第" + e.rank + "名";
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
    AdReadyRankTrait.traitKey = "AdReadyRank";
    AdReadyRankTrait = __decorate([
        mj.trait,
        mj.class("AdReadyRankTrait")
    ], AdReadyRankTrait);
    return AdReadyRankTrait;
}(Trait_1.default));
exports.default = AdReadyRankTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkQnRuVmlzaWJsZS9TY3JpcHRzL0FkUmVhZHlSYW5rVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUEwRjtBQUMxRiw0RUFBdUU7QUFDdkUsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFHM0Q7SUFBOEMsb0NBQUs7SUFBbkQ7O0lBd0dBLENBQUM7SUF0R0MsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQztJQUNuRCxDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQztJQUNwRCxDQUFDO0lBQ0Qsb0NBQVMsR0FBVDtRQUNFLE9BQU8sbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFDRCxpREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxvREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNB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SSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO3dCQUNiLElBQUksQ0FBQyxHQUFHLGdDQUFnQixDQUFDLGFBQWEsRUFDcEMsQ0FBQyxHQUFHLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3dCQUM3QyxtQkFBUyxDQUFDLFdBQVcsQ0FBQzs0QkFDcEIsUUFBUSxFQUFFLENBQUM7NEJBQ1gsUUFBUSxFQUFFLENBQUM7NEJBQ1gsVUFBVSxFQUFFLENBQUM7NEJBQ2IsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJOzRCQUNoQixTQUFTLEVBQUUsQ0FBQzt5QkFDYixDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7SUF0R00seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBd0dwQztJQUFELHVCQUFDO0NBeEdELEFBd0dDLENBeEc2QyxlQUFLLEdBd0dsRDtrQkF4R29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHZXRJdGVtUmVhc29uSWQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJBZFJlYWR5UmFua1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZFJlYWR5UmFua1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFkUmVhZHlSYW5rXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRFeHBlcmltZW50SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLmV4cGVyaW1lbnRJZCB8fCAxO1xuICB9XG4gIGlzTmVlZFJlYWRTaG93QWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhaXREYXRhLmlzTmVlZFJlYWR5U2hvd0FkIHx8IGZhbHNlO1xuICB9XG4gIGlzQ29vbFN0YXJ0Q2xhaW1lZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuaXNDb29sU3RhcnRDbGFpbWVkIHx8IGZhbHNlO1xuICB9XG4gIGlzUmVhZHlBZCgpIHtcbiAgICByZXR1cm4gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vbk5ld0dhbWUodCwgZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hSZXdhcmQodHJ1ZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblJlcGxheUdhbWUodCwgZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hSZXdhcmQodHJ1ZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uR3NMaXN0ZW5lcl9vblN1cnZpdmFsR2FtZSh0LCBlKSB7XG4gICAgdGhpcy5kaXNwYXRjaFJld2FyZCh0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsVndfdXBkYXRlVUkodCwgZSkge1xuICAgIHRoaXMuZGlzcGF0Y2hSZXdhcmQoZmFsc2UpO1xuICAgIGUoKTtcbiAgfVxuICBvblJhbmtCb3hWd19pc1Nob3dBZEJ0bih0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNOZWVkUmVhZFNob3dBZCgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuaXNSZWFkeUFkKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uUmFua0JveFZ3X2FkQnRuQ2xpY2sodCwgZSkge1xuICAgIHZhciBvLCByLCBpO1xuICAgIGlmICh0aGlzLmlzQ29vbFN0YXJ0Q2xhaW1lZCgpKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0UmV3YXJkKCk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICBmb3IgKHZhciBuID0ge1xuICAgICAgICAgICAgYWRTY2FsZTogKG51bGwgPT09IChyID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0QWRTY2FsZSgpKSB8fCAxLFxuICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgcmFuazogKG51bGwgPT09IChpID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0TXlSYW5rKCkpIHx8IDFcbiAgICAgICAgICB9LCBzID0gMDsgcyA8IGEuSXRlbXMubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICB2YXIgZCA9IGEuSXRlbXNbc10sXG4gICAgICAgICAgICBjID0gYS5Db3VudHNbc107XG4gICAgICAgICAgYyA8PSAwIHx8IG4uaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpdGVtOiBkLFxuICAgICAgICAgICAgY291bnQ6IGNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVSZXdhcmRDb25maWcobik7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvblJhbmtCb3hWd19hZFN1Y2Nlc3ModCwgZSkge1xuICAgIHZhciBvLCByO1xuICAgIHRoaXMuaXNDb29sU3RhcnRDbGFpbWVkKCkgJiYgKG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZSkgJiYgY2MuaXNWYWxpZChudWxsID09PSAociA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLm5vZGUpICYmIHRoaXMuY2xlYXJSZXdhcmRDb25maWcoKTtcbiAgICBlKCk7XG4gIH1cbiAgb25SYW5rQm94VndfYWRGYWlsZWQodCwgZSkge1xuICAgIHRoaXMuaXNDb29sU3RhcnRDbGFpbWVkKCkgJiYgdGhpcy5jbGVhclJld2FyZENvbmZpZygpO1xuICAgIGUoKTtcbiAgfVxuICBzYXZlUmV3YXJkQ29uZmlnKHQpIHtcbiAgICB0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb25maWcgPSB0O1xuICB9XG4gIGNsZWFyUmV3YXJkQ29uZmlnKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnJld2FyZENvbmZpZyAmJiAodGhpcy5sb2NhbERhdGEucmV3YXJkQ29uZmlnID0gbnVsbCk7XG4gIH1cbiAgZGlzcGF0Y2hSZXdhcmQodCkge1xuICAgIGlmICh0aGlzLmlzQ29vbFN0YXJ0Q2xhaW1lZCgpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMubG9jYWxEYXRhLnJld2FyZENvbmZpZztcbiAgICAgIGlmIChlICYmIGUuaXRlbXMgJiYgMCAhPT0gZS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgbyA9IGUuYWRTY2FsZSAtIDEsIHIgPSAwOyByIDwgZS5pdGVtcy5sZW5ndGg7IHIrKykge1xuICAgICAgICAgIHZhciBpID0gZS5pdGVtc1tyXSxcbiAgICAgICAgICAgIGEgPSBpLmNvdW50ICogbztcbiAgICAgICAgICBpZiAoIShhIDw9IDApKSB7XG4gICAgICAgICAgICB2YXIgZCA9IEVHZXRJdGVtUmVhc29uSWQuTGVhZGVyQm9hcmRBZCxcbiAgICAgICAgICAgICAgYyA9IFwi5Ya35ZCv5YqoX+aOkuihjOamnOWuneeuseWlluWKsV/nnIvlub/lkYrnv7vlgI1f5Yiw6L6+56ysXCIgKyBlLnJhbmsgKyBcIuWQjVwiO1xuICAgICAgICAgICAgR2FtZVV0aWxzLmRlbGl2ZXJQcm9wKHtcbiAgICAgICAgICAgICAgaXNJbkdhbWU6IHQsXG4gICAgICAgICAgICAgIHJlYXNvbklkOiBkLFxuICAgICAgICAgICAgICByZWFzb25JbmZvOiBjLFxuICAgICAgICAgICAgICBpdGVtVHlwZTogaS5pdGVtLFxuICAgICAgICAgICAgICBpdGVtQ291bnQ6IGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyUmV3YXJkQ29uZmlnKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19