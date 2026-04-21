
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bannerLimit/Scripts/BannerLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b74fSiKNtFUa8RUpsU7jFR', 'BannerLimitTrait');
// subpackages/l_bannerLimit/Scripts/BannerLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BannerLimitTrait = /** @class */ (function (_super) {
    __extends(BannerLimitTrait, _super);
    function BannerLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannerLimitTrait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        this._config = {
            maxGameCount: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.maxGameCount) && void 0 !== r ? r : 15,
            resetHour: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetHour) && void 0 !== i ? i : 5
        };
        this.isLocalEmpty(this.localData.cycleStartTime) && (this.localData.cycleStartTime = 0);
        this.isLocalEmpty(this.localData.gameEndCount) && (this.localData.gameEndCount = 0);
        this.checkAndResetCycle();
    };
    BannerLimitTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    BannerLimitTrait.prototype.getLogicCycleStart = function (t) {
        var e = new Date(t);
        e.getHours() < this._config.resetHour && e.setDate(e.getDate() - 1);
        e.setHours(this._config.resetHour, 0, 0, 0);
        return e.getTime();
    };
    BannerLimitTrait.prototype.checkAndResetCycle = function () {
        var t = Date.now(), e = this.getLogicCycleStart(t);
        if (e !== this.localData.cycleStartTime) {
            this.localData.cycleStartTime = e;
            this.localData.gameEndCount = 0;
            return true;
        }
        return false;
    };
    BannerLimitTrait.prototype.isLimitReached = function () {
        return this.localData.gameEndCount >= this._config.maxGameCount;
    };
    BannerLimitTrait.prototype.onDGameEnd_adjust = function (t, e) {
        this.checkAndResetCycle();
        this.localData.gameEndCount += 1;
        this.localData.gameEndCount === this._config.maxGameCount && AdManager_1.default.getInstance().hideBanner();
        e();
    };
    BannerLimitTrait.prototype.onAdMgr_showBanner = function (t, e) {
        this.checkAndResetCycle();
        if (this.isLimitReached()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    BannerLimitTrait.traitKey = "BannerLimit";
    BannerLimitTrait = __decorate([
        mj.trait,
        mj.class("BannerLimitTrait")
    ], BannerLimitTrait);
    return BannerLimitTrait;
}(Trait_1.default));
exports.default = BannerLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Jhbm5lckxpbWl0L1NjcmlwdHMvQmFubmVyTGltaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFHM0Q7SUFBOEMsb0NBQUs7SUFBbkQ7O0lBb0RBLENBQUM7SUFsREMsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsWUFBWSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5SCxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hILENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsdUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNoQixDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELHlDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ2xFLENBQUM7SUFDRCw0Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEcsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFsRE0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBb0RwQztJQUFELHVCQUFDO0NBcERELEFBb0RDLENBcEQ2QyxlQUFLLEdBb0RsRDtrQkFwRG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQWRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvYmFzZS9hZC9BZE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJCYW5uZXJMaW1pdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYW5uZXJMaW1pdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkJhbm5lckxpbWl0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSwgciwgYSwgaTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBtYXhHYW1lQ291bnQ6IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubWF4R2FtZUNvdW50KSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTUsXG4gICAgICByZXNldEhvdXI6IG51bGwgIT09IChpID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEucmVzZXRIb3VyKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogNVxuICAgIH07XG4gICAgdGhpcy5pc0xvY2FsRW1wdHkodGhpcy5sb2NhbERhdGEuY3ljbGVTdGFydFRpbWUpICYmICh0aGlzLmxvY2FsRGF0YS5jeWNsZVN0YXJ0VGltZSA9IDApO1xuICAgIHRoaXMuaXNMb2NhbEVtcHR5KHRoaXMubG9jYWxEYXRhLmdhbWVFbmRDb3VudCkgJiYgKHRoaXMubG9jYWxEYXRhLmdhbWVFbmRDb3VudCA9IDApO1xuICAgIHRoaXMuY2hlY2tBbmRSZXNldEN5Y2xlKCk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgZ2V0TG9naWNDeWNsZVN0YXJ0KHQpIHtcbiAgICB2YXIgZSA9IG5ldyBEYXRlKHQpO1xuICAgIGUuZ2V0SG91cnMoKSA8IHRoaXMuX2NvbmZpZy5yZXNldEhvdXIgJiYgZS5zZXREYXRlKGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgZS5zZXRIb3Vycyh0aGlzLl9jb25maWcucmVzZXRIb3VyLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZS5nZXRUaW1lKCk7XG4gIH1cbiAgY2hlY2tBbmRSZXNldEN5Y2xlKCkge1xuICAgIHZhciB0ID0gRGF0ZS5ub3coKSxcbiAgICAgIGUgPSB0aGlzLmdldExvZ2ljQ3ljbGVTdGFydCh0KTtcbiAgICBpZiAoZSAhPT0gdGhpcy5sb2NhbERhdGEuY3ljbGVTdGFydFRpbWUpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmN5Y2xlU3RhcnRUaW1lID0gZTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmdhbWVFbmRDb3VudCA9IDA7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlzTGltaXRSZWFjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgPj0gdGhpcy5fY29uZmlnLm1heEdhbWVDb3VudDtcbiAgfVxuICBvbkRHYW1lRW5kX2FkanVzdCh0LCBlKSB7XG4gICAgdGhpcy5jaGVja0FuZFJlc2V0Q3ljbGUoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgKz0gMTtcbiAgICB0aGlzLmxvY2FsRGF0YS5nYW1lRW5kQ291bnQgPT09IHRoaXMuX2NvbmZpZy5tYXhHYW1lQ291bnQgJiYgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuaGlkZUJhbm5lcigpO1xuICAgIGUoKTtcbiAgfVxuICBvbkFkTWdyX3Nob3dCYW5uZXIodCwgZSkge1xuICAgIHRoaXMuY2hlY2tBbmRSZXNldEN5Y2xlKCk7XG4gICAgaWYgKHRoaXMuaXNMaW1pdFJlYWNoZWQoKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbn0iXX0=