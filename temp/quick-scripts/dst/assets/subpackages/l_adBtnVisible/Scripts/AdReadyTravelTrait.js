
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adBtnVisible/Scripts/AdReadyTravelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89965WkSuZLU6Ug4xFu2twi', 'AdReadyTravelTrait');
// subpackages/l_adBtnVisible/Scripts/AdReadyTravelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var AdReadyTravelTrait = /** @class */ (function (_super) {
    __extends(AdReadyTravelTrait, _super);
    function AdReadyTravelTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdReadyTravelTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AdReadyTravelTrait.prototype.getExperimentId = function () {
        return this.traitData.experimentId || 1;
    };
    AdReadyTravelTrait.prototype.isNeedReadShowAd = function () {
        return this.traitData.isNeedReadyShowAd || false;
    };
    AdReadyTravelTrait.prototype.isCoolStartClaimed = function () {
        return this.traitData.isCoolStartClaimed || false;
    };
    AdReadyTravelTrait.prototype.isReadyAd = function () {
        return AdManager_1.default.getInstance().checkVideoAdIsReady();
    };
    AdReadyTravelTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyTravelTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyTravelTrait.prototype.onGsListener_onSurvivalGame = function (t, e) {
        this.dispatchReward(true);
        e();
    };
    AdReadyTravelTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.dispatchReward(false);
        e();
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_isShowAdBtn = function (t, e) {
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
    AdReadyTravelTrait.prototype.onTLBoxVw_adBtnClick = function (t, e) {
        var o, r;
        if (this.isCoolStartClaimed()) {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.config;
            if (i) {
                var a = {
                    adScale: i.adScale || 1,
                    items: i.items || [],
                    rewardLevel: (null === (r = t.ins) || void 0 === r ? void 0 : r.rewardLevel) || 1
                };
                this.saveRewardConfig(a);
            }
        }
        e();
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_adSuccess = function (t, e) {
        var o, r;
        this.isCoolStartClaimed() && (null === (o = t.ins) || void 0 === o ? void 0 : o.node) && cc.isValid(null === (r = t.ins) || void 0 === r ? void 0 : r.node) && this.clearRewardConfig();
        e();
    };
    AdReadyTravelTrait.prototype.onTLBoxVw_adFailed = function (t, e) {
        this.isCoolStartClaimed() && this.clearRewardConfig();
        e();
    };
    AdReadyTravelTrait.prototype.saveRewardConfig = function (t) {
        this.localData.rewardConfig = t;
    };
    AdReadyTravelTrait.prototype.clearRewardConfig = function () {
        this.localData.rewardConfig && (this.localData.rewardConfig = null);
    };
    AdReadyTravelTrait.prototype.dispatchReward = function (t) {
        if (this.isCoolStartClaimed()) {
            var e = this.localData.rewardConfig;
            if (e && e.items && 0 !== e.items.length) {
                for (var o = e.adScale - 1, r = 0; r < e.items.length; r++) {
                    var i = e.items[r], a = i.count * o;
                    if (!(a <= 0)) {
                        var d = GameTypeEnums_1.EGetItemReasonId.JourneyAd, c = "冷启动_旅行活动奖励_看广告翻倍_到达第" + e.rewardLevel + "关";
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
    AdReadyTravelTrait.traitKey = "AdReadyTravel";
    AdReadyTravelTrait = __decorate([
        mj.trait,
        mj.class("AdReadyTravelTrait")
    ], AdReadyTravelTrait);
    return AdReadyTravelTrait;
}(Trait_1.default));
exports.default = AdReadyTravelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkQnRuVmlzaWJsZS9TY3JpcHRzL0FkUmVhZHlUcmF2ZWxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQTBGO0FBQzFGLDRFQUF1RTtBQUN2RSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFpR0EsQ0FBQztJQS9GQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNENBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLElBQUksS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFDRCwrQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLElBQUksS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFDRCxzQ0FBUyxHQUFUO1FBQ0UsT0FBTyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNELG1EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHdEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDhDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQzNCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7YUFDNUIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsaURBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHO29CQUNOLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUM7b0JBQ3ZCLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7b0JBQ3BCLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7aUJBQ2xGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hMLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELCtDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELDhDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELDJDQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7d0JBQ2IsSUFBSSxDQUFDLEdBQUcsZ0NBQWdCLENBQUMsU0FBUyxFQUNoQyxDQUFDLEdBQUcsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7d0JBQ25ELG1CQUFTLENBQUMsV0FBVyxDQUFDOzRCQUNwQixRQUFRLEVBQUUsQ0FBQzs0QkFDWCxRQUFRLEVBQUUsQ0FBQzs0QkFDWCxVQUFVLEVBQUUsQ0FBQzs0QkFDYixRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUk7NEJBQ2hCLFNBQVMsRUFBRSxDQUFDO3lCQUNiLENBQUMsQ0FBQztxQkFDSjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQztJQS9GTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FpR3RDO0lBQUQseUJBQUM7Q0FqR0QsQUFpR0MsQ0FqRytDLGVBQUssR0FpR3BEO2tCQWpHb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdldEl0ZW1SZWFzb25JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2FkL0FkTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFkUmVhZHlUcmF2ZWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRSZWFkeVRyYXZlbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFkUmVhZHlUcmF2ZWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGdldEV4cGVyaW1lbnRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuZXhwZXJpbWVudElkIHx8IDE7XG4gIH1cbiAgaXNOZWVkUmVhZFNob3dBZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuaXNOZWVkUmVhZHlTaG93QWQgfHwgZmFsc2U7XG4gIH1cbiAgaXNDb29sU3RhcnRDbGFpbWVkKCkge1xuICAgIHJldHVybiB0aGlzLnRyYWl0RGF0YS5pc0Nvb2xTdGFydENsYWltZWQgfHwgZmFsc2U7XG4gIH1cbiAgaXNSZWFkeUFkKCkge1xuICAgIHJldHVybiBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5jaGVja1ZpZGVvQWRJc1JlYWR5KCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdGhpcy5kaXNwYXRjaFJld2FyZCh0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uUmVwbGF5R2FtZSh0LCBlKSB7XG4gICAgdGhpcy5kaXNwYXRjaFJld2FyZCh0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uU3Vydml2YWxHYW1lKHQsIGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoUmV3YXJkKHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd191cGRhdGVVSSh0LCBlKSB7XG4gICAgdGhpcy5kaXNwYXRjaFJld2FyZChmYWxzZSk7XG4gICAgZSgpO1xuICB9XG4gIG9uVExCb3hWd19pc1Nob3dBZEJ0bih0LCBlKSB7XG4gICAgaWYgKHRoaXMuaXNOZWVkUmVhZFNob3dBZCgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuaXNSZWFkeUFkKClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVExCb3hWd19hZEJ0bkNsaWNrKHQsIGUpIHtcbiAgICB2YXIgbywgcjtcbiAgICBpZiAodGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSkge1xuICAgICAgdmFyIGkgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNvbmZpZztcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciBhID0ge1xuICAgICAgICAgIGFkU2NhbGU6IGkuYWRTY2FsZSB8fCAxLFxuICAgICAgICAgIGl0ZW1zOiBpLml0ZW1zIHx8IFtdLFxuICAgICAgICAgIHJld2FyZExldmVsOiAobnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5yZXdhcmRMZXZlbCkgfHwgMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNhdmVSZXdhcmRDb25maWcoYSk7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxuICBvblRMQm94VndfYWRTdWNjZXNzKHQsIGUpIHtcbiAgICB2YXIgbywgcjtcbiAgICB0aGlzLmlzQ29vbFN0YXJ0Q2xhaW1lZCgpICYmIChudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLm5vZGUpICYmIGNjLmlzVmFsaWQobnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5ub2RlKSAmJiB0aGlzLmNsZWFyUmV3YXJkQ29uZmlnKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uVExCb3hWd19hZEZhaWxlZCh0LCBlKSB7XG4gICAgdGhpcy5pc0Nvb2xTdGFydENsYWltZWQoKSAmJiB0aGlzLmNsZWFyUmV3YXJkQ29uZmlnKCk7XG4gICAgZSgpO1xuICB9XG4gIHNhdmVSZXdhcmRDb25maWcodCkge1xuICAgIHRoaXMubG9jYWxEYXRhLnJld2FyZENvbmZpZyA9IHQ7XG4gIH1cbiAgY2xlYXJSZXdhcmRDb25maWcoKSB7XG4gICAgdGhpcy5sb2NhbERhdGEucmV3YXJkQ29uZmlnICYmICh0aGlzLmxvY2FsRGF0YS5yZXdhcmRDb25maWcgPSBudWxsKTtcbiAgfVxuICBkaXNwYXRjaFJld2FyZCh0KSB7XG4gICAgaWYgKHRoaXMuaXNDb29sU3RhcnRDbGFpbWVkKCkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5sb2NhbERhdGEucmV3YXJkQ29uZmlnO1xuICAgICAgaWYgKGUgJiYgZS5pdGVtcyAmJiAwICE9PSBlLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBvID0gZS5hZFNjYWxlIC0gMSwgciA9IDA7IHIgPCBlLml0ZW1zLmxlbmd0aDsgcisrKSB7XG4gICAgICAgICAgdmFyIGkgPSBlLml0ZW1zW3JdLFxuICAgICAgICAgICAgYSA9IGkuY291bnQgKiBvO1xuICAgICAgICAgIGlmICghKGEgPD0gMCkpIHtcbiAgICAgICAgICAgIHZhciBkID0gRUdldEl0ZW1SZWFzb25JZC5Kb3VybmV5QWQsXG4gICAgICAgICAgICAgIGMgPSBcIuWGt+WQr+WKqF/ml4XooYzmtLvliqjlpZblirFf55yL5bm/5ZGK57+75YCNX+WIsOi+vuesrFwiICsgZS5yZXdhcmRMZXZlbCArIFwi5YWzXCI7XG4gICAgICAgICAgICBHYW1lVXRpbHMuZGVsaXZlclByb3Aoe1xuICAgICAgICAgICAgICBpc0luR2FtZTogdCxcbiAgICAgICAgICAgICAgcmVhc29uSWQ6IGQsXG4gICAgICAgICAgICAgIHJlYXNvbkluZm86IGMsXG4gICAgICAgICAgICAgIGl0ZW1UeXBlOiBpLml0ZW0sXG4gICAgICAgICAgICAgIGl0ZW1Db3VudDogYVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJSZXdhcmRDb25maWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=