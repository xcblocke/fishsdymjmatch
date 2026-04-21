
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lifeFirst10NoInterAd/Scripts/LifeFirst10NoInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7d313nYK9IfZNxcg+VQpGd', 'LifeFirst10NoInterAdTrait');
// subpackages/l_lifeFirst10NoInterAd/Scripts/LifeFirst10NoInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LifeFirst10NoInterAdTrait = /** @class */ (function (_super) {
    __extends(LifeFirst10NoInterAdTrait, _super);
    function LifeFirst10NoInterAdTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._freeInterAdCountLimit = LifeFirst10NoInterAdTrait_1.DEFAULT_FREE_INTER_AD_COUNT_LIMIT;
        return _this;
    }
    LifeFirst10NoInterAdTrait_1 = LifeFirst10NoInterAdTrait;
    LifeFirst10NoInterAdTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var r = Number(null === (e = this._traitData) || void 0 === e ? void 0 : e.freeInterAdCountLimit);
        !Number.isNaN(r) && r >= 0 && (this._freeInterAdCountLimit = Math.floor(r));
        void 0 === this.localData.skipCount && (this.localData.skipCount = 0);
    };
    LifeFirst10NoInterAdTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        this.addEffectiveGameCount("replay");
        e();
    };
    LifeFirst10NoInterAdTrait.prototype.onGsListener_onNewGame = function (t, e) {
        this.addEffectiveGameCount("newGame");
        e();
    };
    LifeFirst10NoInterAdTrait.prototype.onInterAdStart_isSkip = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            e({
                returnVal: true,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    LifeFirst10NoInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && this.shouldSkipInterAd()) {
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    LifeFirst10NoInterAdTrait.prototype.addEffectiveGameCount = function () {
        if (!(this._freeInterAdCountLimit <= 0)) {
            var t = this.getEffectiveGameCount();
            if (!(t >= this._freeInterAdCountLimit)) {
                var e = t + 1;
                this.localData.skipCount = e;
            }
        }
    };
    LifeFirst10NoInterAdTrait.prototype.getEffectiveGameCount = function () {
        var t = Number(this.localData.skipCount);
        return Number.isNaN(t) || t < 0 ? 0 : Math.floor(t);
    };
    LifeFirst10NoInterAdTrait.prototype.shouldSkipInterAd = function () {
        return !(this._freeInterAdCountLimit <= 0) && this.getEffectiveGameCount() < this._freeInterAdCountLimit;
    };
    var LifeFirst10NoInterAdTrait_1;
    LifeFirst10NoInterAdTrait.traitKey = "LifeFirst10NoInterAd";
    LifeFirst10NoInterAdTrait.DEFAULT_FREE_INTER_AD_COUNT_LIMIT = 10;
    LifeFirst10NoInterAdTrait = LifeFirst10NoInterAdTrait_1 = __decorate([
        mj.trait,
        mj.class("LifeFirst10NoInterAdTrait")
    ], LifeFirst10NoInterAdTrait);
    return LifeFirst10NoInterAdTrait;
}(Trait_1.default));
exports.default = LifeFirst10NoInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xpZmVGaXJzdDEwTm9JbnRlckFkL1NjcmlwdHMvTGlmZUZpcnN0MTBOb0ludGVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQXVELDZDQUFLO0lBQTVEO1FBQUEscUVBeURDO1FBeERDLDRCQUFzQixHQUFHLDJCQUF5QixDQUFDLGlDQUFpQyxDQUFDOztJQXdEdkYsQ0FBQztrQ0F6RG9CLHlCQUF5QjtJQUk1QywwQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2xHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCw2REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QseURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsV0FBVyxFQUFFO1lBQzNFLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxzREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDdkcsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx5REFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUM5QjtTQUNGO0lBQ0gsQ0FBQztJQUNELHlEQUFxQixHQUFyQjtRQUNFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELHFEQUFpQixHQUFqQjtRQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDM0csQ0FBQzs7SUF0RE0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUNsQywyREFBaUMsR0FBRyxFQUFFLENBQUM7SUFIM0IseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0F5RDdDO0lBQUQsZ0NBQUM7Q0F6REQsQUF5REMsQ0F6RHNELGVBQUssR0F5RDNEO2tCQXpEb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTGlmZUZpcnN0MTBOb0ludGVyQWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZUZpcnN0MTBOb0ludGVyQWRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2ZyZWVJbnRlckFkQ291bnRMaW1pdCA9IExpZmVGaXJzdDEwTm9JbnRlckFkVHJhaXQuREVGQVVMVF9GUkVFX0lOVEVSX0FEX0NPVU5UX0xJTUlUO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxpZmVGaXJzdDEwTm9JbnRlckFkXCI7XG4gIHN0YXRpYyBERUZBVUxUX0ZSRUVfSU5URVJfQURfQ09VTlRfTElNSVQgPSAxMDtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciByID0gTnVtYmVyKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmZyZWVJbnRlckFkQ291bnRMaW1pdCk7XG4gICAgIU51bWJlci5pc05hTihyKSAmJiByID49IDAgJiYgKHRoaXMuX2ZyZWVJbnRlckFkQ291bnRMaW1pdCA9IE1hdGguZmxvb3IocikpO1xuICAgIHZvaWQgMCA9PT0gdGhpcy5sb2NhbERhdGEuc2tpcENvdW50ICYmICh0aGlzLmxvY2FsRGF0YS5za2lwQ291bnQgPSAwKTtcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25SZXBsYXlHYW1lKHQsIGUpIHtcbiAgICB0aGlzLmFkZEVmZmVjdGl2ZUdhbWVDb3VudChcInJlcGxheVwiKTtcbiAgICBlKCk7XG4gIH1cbiAgb25Hc0xpc3RlbmVyX29uTmV3R2FtZSh0LCBlKSB7XG4gICAgdGhpcy5hZGRFZmZlY3RpdmVHYW1lQ291bnQoXCJuZXdHYW1lXCIpO1xuICAgIGUoKTtcbiAgfVxuICBvbkludGVyQWRTdGFydF9pc1NraXAodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkFkTWdyX2Noa0ludGVyQWQodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCAmJiB0aGlzLnNob3VsZFNraXBJbnRlckFkKCkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIGFkZEVmZmVjdGl2ZUdhbWVDb3VudCgpIHtcbiAgICBpZiAoISh0aGlzLl9mcmVlSW50ZXJBZENvdW50TGltaXQgPD0gMCkpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5nZXRFZmZlY3RpdmVHYW1lQ291bnQoKTtcbiAgICAgIGlmICghKHQgPj0gdGhpcy5fZnJlZUludGVyQWRDb3VudExpbWl0KSkge1xuICAgICAgICB2YXIgZSA9IHQgKyAxO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5za2lwQ291bnQgPSBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBnZXRFZmZlY3RpdmVHYW1lQ291bnQoKSB7XG4gICAgdmFyIHQgPSBOdW1iZXIodGhpcy5sb2NhbERhdGEuc2tpcENvdW50KTtcbiAgICByZXR1cm4gTnVtYmVyLmlzTmFOKHQpIHx8IHQgPCAwID8gMCA6IE1hdGguZmxvb3IodCk7XG4gIH1cbiAgc2hvdWxkU2tpcEludGVyQWQoKSB7XG4gICAgcmV0dXJuICEodGhpcy5fZnJlZUludGVyQWRDb3VudExpbWl0IDw9IDApICYmIHRoaXMuZ2V0RWZmZWN0aXZlR2FtZUNvdW50KCkgPCB0aGlzLl9mcmVlSW50ZXJBZENvdW50TGltaXQ7XG4gIH1cbn0iXX0=