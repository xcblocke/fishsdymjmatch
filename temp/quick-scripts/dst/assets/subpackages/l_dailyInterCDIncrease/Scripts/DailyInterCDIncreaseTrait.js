
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dailyInterCDIncrease/Scripts/DailyInterCDIncreaseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20e75TAUOtPB5+NU8H0VOqE', 'DailyInterCDIncreaseTrait');
// subpackages/l_dailyInterCDIncrease/Scripts/DailyInterCDIncreaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var DailyInterCDIncreaseTrait = /** @class */ (function (_super) {
    __extends(DailyInterCDIncreaseTrait, _super);
    function DailyInterCDIncreaseTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyInterCDIncreaseTrait.prototype.onLoad = function () {
        var e, r, i, o, a, n;
        _super.prototype.onLoad.call(this);
        this._config = {
            threshold: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.threshold) && void 0 !== r ? r : 15,
            baseCDTime: null !== (o = null === (i = this._traitData) || void 0 === i ? void 0 : i.baseCDTime) && void 0 !== o ? o : 180,
            resetHour: null !== (n = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetHour) && void 0 !== n ? n : 5
        };
        this.isLocalEmpty(this.localData.cycleStartTime) && (this.localData.cycleStartTime = 0);
        this.isLocalEmpty(this.localData.gameEndCount) && (this.localData.gameEndCount = 0);
        this.checkAndResetCycle();
    };
    DailyInterCDIncreaseTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    DailyInterCDIncreaseTrait.prototype.getLogicCycleStart = function (t) {
        var e = new Date(t);
        e.getHours() < this._config.resetHour && e.setDate(e.getDate() - 1);
        e.setHours(this._config.resetHour, 0, 0, 0);
        return e.getTime();
    };
    DailyInterCDIncreaseTrait.prototype.checkAndResetCycle = function () {
        var t = Date.now(), e = this.getLogicCycleStart(t);
        if (e !== this.localData.cycleStartTime) {
            this.localData.cycleStartTime = e;
            this.localData.gameEndCount = 0;
            return true;
        }
        return false;
    };
    DailyInterCDIncreaseTrait.prototype.isThresholdReached = function () {
        return this.localData.gameEndCount >= this._config.threshold;
    };
    DailyInterCDIncreaseTrait.prototype.getCurrentCDTime = function () {
        return 1000 * (this._config.baseCDTime + this.localData.gameEndCount);
    };
    DailyInterCDIncreaseTrait.prototype.onDGameEnd_adjust = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.checkAndResetCycle();
            this.localData.gameEndCount += 1;
            this.isThresholdReached() && this.getCurrentCDTime();
            e();
        }
        else
            e();
    };
    DailyInterCDIncreaseTrait.prototype.onInterAdCD_getCDTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.checkAndResetCycle();
            if (this.isThresholdReached()) {
                e({
                    returnVal: this.getCurrentCDTime(),
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else
                e();
        }
        else
            e();
    };
    DailyInterCDIncreaseTrait.traitKey = "DailyInterCDIncrease";
    DailyInterCDIncreaseTrait = __decorate([
        mj.trait,
        mj.class("DailyInterCDIncreaseTrait")
    ], DailyInterCDIncreaseTrait);
    return DailyInterCDIncreaseTrait;
}(Trait_1.default));
exports.default = DailyInterCDIncreaseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5SW50ZXJDREluY3JlYXNlL1NjcmlwdHMvRGFpbHlJbnRlckNESW5jcmVhc2VUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQXVELDZDQUFLO0lBQTVEOztJQTJEQSxDQUFDO0lBekRDLDBDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEgsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUMzSCxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxH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V0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO2dCQUM3QixDQUFDLENBQUM7b0JBQ0EsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDbEMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07aUJBQzNDLENBQUMsQ0FBQzthQUNKOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXpETSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBRHRCLHlCQUF5QjtRQUY3QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7T0FDakIseUJBQXlCLENBMkQ3QztJQUFELGdDQUFDO0NBM0RELEFBMkRDLENBM0RzRCxlQUFLLEdBMkQzRDtrQkEzRG9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhaWx5SW50ZXJDREluY3JlYXNlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5SW50ZXJDREluY3JlYXNlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGFpbHlJbnRlckNESW5jcmVhc2VcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBpLCBvLCBhLCBuO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIHRocmVzaG9sZDogbnVsbCAhPT0gKHIgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50aHJlc2hvbGQpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxNSxcbiAgICAgIGJhc2VDRFRpbWU6IG51bGwgIT09IChvID0gbnVsbCA9PT0gKGkgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuYmFzZUNEVGltZSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDE4MCxcbiAgICAgIHJlc2V0SG91cjogbnVsbCAhPT0gKG4gPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5yZXNldEhvdXIpICYmIHZvaWQgMCAhPT0gbiA/IG4gOiA1XG4gICAgfTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5jeWNsZVN0YXJ0VGltZSkgJiYgKHRoaXMubG9jYWxEYXRhLmN5Y2xlU3RhcnRUaW1lID0gMCk7XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuZ2FtZUVuZENvdW50KSAmJiAodGhpcy5sb2NhbERhdGEuZ2FtZUVuZENvdW50ID0gMCk7XG4gICAgdGhpcy5jaGVja0FuZFJlc2V0Q3ljbGUoKTtcbiAgfVxuICBpc0xvY2FsRW1wdHkodCkge1xuICAgIHJldHVybiBudWxsID09IHQgfHwgXCJcIiA9PT0gdDtcbiAgfVxuICBnZXRMb2dpY0N5Y2xlU3RhcnQodCkge1xuICAgIHZhciBlID0gbmV3IERhdGUodCk7XG4gICAgZS5nZXRIb3VycygpIDwgdGhpcy5fY29uZmlnLnJlc2V0SG91ciAmJiBlLnNldERhdGUoZS5nZXREYXRlKCkgLSAxKTtcbiAgICBlLnNldEhvdXJzKHRoaXMuX2NvbmZpZy5yZXNldEhvdXIsIDAsIDAsIDApO1xuICAgIHJldHVybiBlLmdldFRpbWUoKTtcbiAgfVxuICBjaGVja0FuZFJlc2V0Q3ljbGUoKSB7XG4gICAgdmFyIHQgPSBEYXRlLm5vdygpLFxuICAgICAgZSA9IHRoaXMuZ2V0TG9naWNDeWNsZVN0YXJ0KHQpO1xuICAgIGlmIChlICE9PSB0aGlzLmxvY2FsRGF0YS5jeWNsZVN0YXJ0VGltZSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuY3ljbGVTdGFydFRpbWUgPSBlO1xuICAgICAgdGhpcy5sb2NhbERhdGEuZ2FtZUVuZENvdW50ID0gMDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaXNUaHJlc2hvbGRSZWFjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgPj0gdGhpcy5fY29uZmlnLnRocmVzaG9sZDtcbiAgfVxuICBnZXRDdXJyZW50Q0RUaW1lKCkge1xuICAgIHJldHVybiAxMDAwICogKHRoaXMuX2NvbmZpZy5iYXNlQ0RUaW1lICsgdGhpcy5sb2NhbERhdGEuZ2FtZUVuZENvdW50KTtcbiAgfVxuICBvbkRHYW1lRW5kX2FkanVzdCh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMuY2hlY2tBbmRSZXNldEN5Y2xlKCk7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgKz0gMTtcbiAgICAgIHRoaXMuaXNUaHJlc2hvbGRSZWFjaGVkKCkgJiYgdGhpcy5nZXRDdXJyZW50Q0RUaW1lKCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkludGVyQWRDRF9nZXRDRFRpbWUodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0aGlzLmNoZWNrQW5kUmVzZXRDeWNsZSgpO1xuICAgICAgaWYgKHRoaXMuaXNUaHJlc2hvbGRSZWFjaGVkKCkpIHtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldEN1cnJlbnRDRFRpbWUoKSxcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==