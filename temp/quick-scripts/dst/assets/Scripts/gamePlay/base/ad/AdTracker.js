
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/ad/AdTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad93efYLyVKMrRLjeilV7Tk', 'AdTracker');
// Scripts/gamePlay/base/ad/AdTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../../framework/utils/SingletonFactory");
var DGameAdShow_1 = require("../../dot/DGameAdShow");
var DGameBannerRevenue_1 = require("../../dot/DGameBannerRevenue");
var DGameAdRevenue_1 = require("../../dot/DGameAdRevenue");
var DGameAdShowStage_1 = require("../../dot/DGameAdShowStage");
var DAdVisit_1 = require("../../dot/DAdVisit");
var AdModel_1 = require("./AdModel");
var AdManager_1 = require("../../../base/ad/AdManager");
var AdTracker = /** @class */ (function () {
    function AdTracker() {
    }
    AdTracker.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    AdTracker.prototype.trackInterRequest = function (e) {
        AdModel_1.default.getInstance().updateRequestAdInter();
        DGameAdRevenue_1.DGameAdRevenue.dot(e);
    };
    AdTracker.prototype.trackRewardRequest = function (e) {
        AdModel_1.default.getInstance().updateRequestAdReward();
        DGameAdRevenue_1.DGameAdRevenue.dot(e);
    };
    AdTracker.prototype.trackInterClose = function (e, t) {
        if ("" !== e && null != e) {
            var o = Number(e);
            isNaN(o) || AdModel_1.default.getInstance().updateInterAdIncome(o / 1000);
        }
        AdModel_1.default.getInstance().updateAdInterSuccess(t);
    };
    AdTracker.prototype.trackRewardClose = function (e, t) {
        if ("" !== e && null != e) {
            var o = Number(e);
            isNaN(o) || AdModel_1.default.getInstance().updateRewardAdIncome(o / 1000);
        }
        AdModel_1.default.getInstance().updateAdRewardSuccess(t);
    };
    AdTracker.prototype.trackRewardShow = function (e, t, o, n, r) {
        DGameAdShow_1.DGameAdShow.dot({
            adType: AdManager_1.AdType.RewardVideo,
            callBackType: DGameAdShow_1.AdCallBackType.Close,
            sTime: t,
            adSceneId: o,
            extraData: n,
            dotTime: r,
            adPosition: e
        });
    };
    AdTracker.prototype.trackInterShow = function (e, t, o, n, r) {
        DGameAdShow_1.DGameAdShow.dot({
            adType: AdManager_1.AdType.Interstitial,
            sTime: t,
            callBackType: DGameAdShow_1.AdCallBackType.Close,
            adSceneId: o,
            extraData: n,
            isReward: true,
            adPosition: e,
            dotTime: r
        });
    };
    AdTracker.prototype.trackBannerRevenue = function () {
        DGameBannerRevenue_1.DGameBannerRevenue.dot();
    };
    AdTracker.prototype.trackAdStageStart = function (e) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(e, "start");
    };
    AdTracker.prototype.trackAdStageEnd = function (e, t, o, n) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(e, "end", t ? "true" : "false", o, n);
    };
    AdTracker.prototype.trackInterVisit = function (e) {
        DAdVisit_1.DotAdVisit.dotAdVisitInterAD(e);
    };
    return AdTracker;
}());
exports.default = AdTracker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvYWQvQWRUcmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBNkU7QUFDN0UscURBQW9FO0FBQ3BFLG1FQUFrRTtBQUNsRSwyREFBMEQ7QUFDMUQsK0RBQWdFO0FBQ2hFLCtDQUFnRDtBQUNoRCxxQ0FBZ0M7QUFDaEMsd0RBQW9EO0FBQ3BEO0lBQUE7SUE2REEsQ0FBQztJQTVEUSxxQkFBVyxHQUFsQjtRQUNFLE9BQU8sbUNBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxxQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQztRQUNqQixpQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0MsK0JBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELHNDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLGlCQUFPLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM5QywrQkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsbUNBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsaUJBQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsb0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbEU7UUFDRCxpQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxtQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzNCLHlCQUFXLENBQUMsR0FBRyxDQUFDO1lBQ2QsTUFBTSxFQUFFLGtCQUFNLENBQUMsV0FBVztZQUMxQixZQUFZLEVBQUUsNEJBQWMsQ0FBQyxLQUFLO1lBQ2xDLEtBQUssRUFBRSxDQUFDO1lBQ1IsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0NBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzFCLHlCQUFXLENBQUMsR0FBRyxDQUFDO1lBQ2QsTUFBTSxFQUFFLGtCQUFNLENBQUMsWUFBWTtZQUMzQixLQUFLLEVBQUUsQ0FBQztZQUNSLFlBQVksRUFBRSw0QkFBYyxDQUFDLEtBQUs7WUFDbEMsU0FBUyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLENBQUM7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQ0FBa0IsR0FBbEI7UUFDRSx1Q0FBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QscUNBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIscUNBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsbUNBQWUsR0FBZixVQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3hCLHFDQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxtQ0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixxQkFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCxnQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW5nbGV0b25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL1NpbmdsZXRvbkZhY3RvcnknO1xuaW1wb3J0IHsgREdhbWVBZFNob3csIEFkQ2FsbEJhY2tUeXBlIH0gZnJvbSAnLi4vLi4vZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERHYW1lQmFubmVyUmV2ZW51ZSB9IGZyb20gJy4uLy4uL2RvdC9ER2FtZUJhbm5lclJldmVudWUnO1xuaW1wb3J0IHsgREdhbWVBZFJldmVudWUgfSBmcm9tICcuLi8uLi9kb3QvREdhbWVBZFJldmVudWUnO1xuaW1wb3J0IHsgRG90R2FtZUFkU2hvd1N0YWdlIH0gZnJvbSAnLi4vLi4vZG90L0RHYW1lQWRTaG93U3RhZ2UnO1xuaW1wb3J0IHsgRG90QWRWaXNpdCB9IGZyb20gJy4uLy4uL2RvdC9EQWRWaXNpdCc7XG5pbXBvcnQgQWRNb2RlbCBmcm9tICcuL0FkTW9kZWwnO1xuaW1wb3J0IHsgQWRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9hZC9BZE1hbmFnZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRUcmFja2VyIHtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBTaW5nbGV0b25GYWN0b3J5LmdldEluc3RhbmNlKHRoaXMpO1xuICB9XG4gIHRyYWNrSW50ZXJSZXF1ZXN0KGUpIHtcbiAgICBBZE1vZGVsLmdldEluc3RhbmNlKCkudXBkYXRlUmVxdWVzdEFkSW50ZXIoKTtcbiAgICBER2FtZUFkUmV2ZW51ZS5kb3QoZSk7XG4gIH1cbiAgdHJhY2tSZXdhcmRSZXF1ZXN0KGUpIHtcbiAgICBBZE1vZGVsLmdldEluc3RhbmNlKCkudXBkYXRlUmVxdWVzdEFkUmV3YXJkKCk7XG4gICAgREdhbWVBZFJldmVudWUuZG90KGUpO1xuICB9XG4gIHRyYWNrSW50ZXJDbG9zZShlLCB0KSB7XG4gICAgaWYgKFwiXCIgIT09IGUgJiYgbnVsbCAhPSBlKSB7XG4gICAgICB2YXIgbyA9IE51bWJlcihlKTtcbiAgICAgIGlzTmFOKG8pIHx8IEFkTW9kZWwuZ2V0SW5zdGFuY2UoKS51cGRhdGVJbnRlckFkSW5jb21lKG8gLyAxMDAwKTtcbiAgICB9XG4gICAgQWRNb2RlbC5nZXRJbnN0YW5jZSgpLnVwZGF0ZUFkSW50ZXJTdWNjZXNzKHQpO1xuICB9XG4gIHRyYWNrUmV3YXJkQ2xvc2UoZSwgdCkge1xuICAgIGlmIChcIlwiICE9PSBlICYmIG51bGwgIT0gZSkge1xuICAgICAgdmFyIG8gPSBOdW1iZXIoZSk7XG4gICAgICBpc05hTihvKSB8fCBBZE1vZGVsLmdldEluc3RhbmNlKCkudXBkYXRlUmV3YXJkQWRJbmNvbWUobyAvIDEwMDApO1xuICAgIH1cbiAgICBBZE1vZGVsLmdldEluc3RhbmNlKCkudXBkYXRlQWRSZXdhcmRTdWNjZXNzKHQpO1xuICB9XG4gIHRyYWNrUmV3YXJkU2hvdyhlLCB0LCBvLCBuLCByKSB7XG4gICAgREdhbWVBZFNob3cuZG90KHtcbiAgICAgIGFkVHlwZTogQWRUeXBlLlJld2FyZFZpZGVvLFxuICAgICAgY2FsbEJhY2tUeXBlOiBBZENhbGxCYWNrVHlwZS5DbG9zZSxcbiAgICAgIHNUaW1lOiB0LFxuICAgICAgYWRTY2VuZUlkOiBvLFxuICAgICAgZXh0cmFEYXRhOiBuLFxuICAgICAgZG90VGltZTogcixcbiAgICAgIGFkUG9zaXRpb246IGVcbiAgICB9KTtcbiAgfVxuICB0cmFja0ludGVyU2hvdyhlLCB0LCBvLCBuLCByKSB7XG4gICAgREdhbWVBZFNob3cuZG90KHtcbiAgICAgIGFkVHlwZTogQWRUeXBlLkludGVyc3RpdGlhbCxcbiAgICAgIHNUaW1lOiB0LFxuICAgICAgY2FsbEJhY2tUeXBlOiBBZENhbGxCYWNrVHlwZS5DbG9zZSxcbiAgICAgIGFkU2NlbmVJZDogbyxcbiAgICAgIGV4dHJhRGF0YTogbixcbiAgICAgIGlzUmV3YXJkOiB0cnVlLFxuICAgICAgYWRQb3NpdGlvbjogZSxcbiAgICAgIGRvdFRpbWU6IHJcbiAgICB9KTtcbiAgfVxuICB0cmFja0Jhbm5lclJldmVudWUoKSB7XG4gICAgREdhbWVCYW5uZXJSZXZlbnVlLmRvdCgpO1xuICB9XG4gIHRyYWNrQWRTdGFnZVN0YXJ0KGUpIHtcbiAgICBEb3RHYW1lQWRTaG93U3RhZ2UuZG90KGUsIFwic3RhcnRcIik7XG4gIH1cbiAgdHJhY2tBZFN0YWdlRW5kKGUsIHQsIG8sIG4pIHtcbiAgICBEb3RHYW1lQWRTaG93U3RhZ2UuZG90KGUsIFwiZW5kXCIsIHQgPyBcInRydWVcIiA6IFwiZmFsc2VcIiwgbywgbik7XG4gIH1cbiAgdHJhY2tJbnRlclZpc2l0KGUpIHtcbiAgICBEb3RBZFZpc2l0LmRvdEFkVmlzaXRJbnRlckFEKGUpO1xuICB9XG59Il19