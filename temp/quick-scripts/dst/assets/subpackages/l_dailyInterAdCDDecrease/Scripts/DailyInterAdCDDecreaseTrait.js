
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dailyInterAdCDDecrease/Scripts/DailyInterAdCDDecreaseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb8797WJ4tIZ5wOrhAAgNa0', 'DailyInterAdCDDecreaseTrait');
// subpackages/l_dailyInterAdCDDecrease/Scripts/DailyInterAdCDDecreaseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DailyInterAdCDDecreaseTrait = /** @class */ (function (_super) {
    __extends(DailyInterAdCDDecreaseTrait, _super);
    function DailyInterAdCDDecreaseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cdTimeList = [90000, 75000, 60000];
        return _this;
    }
    DailyInterAdCDDecreaseTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        (null === (e = this._traitData) || void 0 === e ? void 0 : e.cdTimeList) && Array.isArray(this._traitData.cdTimeList) && (this._cdTimeList = this._traitData.cdTimeList.map(function (t) {
            return 1000 * t;
        }));
        if (!this.localData.date) {
            this.localData.date = "";
            this.localData.playCount = 0;
        }
        this.checkAndResetDaily();
    };
    DailyInterAdCDDecreaseTrait.prototype.checkAndResetDaily = function () {
        var t = this.getTodayDate();
        if (this.localData.date !== t) {
            this.localData.date = t;
            this.localData.playCount = 0;
            this.localData = this.localData;
        }
    };
    DailyInterAdCDDecreaseTrait.prototype.getTodayDate = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    DailyInterAdCDDecreaseTrait.prototype.getCurrentCDTime = function () {
        var t = this.localData.playCount || 0;
        return t >= this._cdTimeList.length ? this._cdTimeList[this._cdTimeList.length - 1] : this._cdTimeList[t];
    };
    DailyInterAdCDDecreaseTrait.prototype.onInterAdCD_getCDTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.checkAndResetDaily();
            e({
                returnVal: this.getCurrentCDTime(),
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    DailyInterAdCDDecreaseTrait.prototype.onAdMgr_interAdClose = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.localData.playCount = (this.localData.playCount || 0) + 1;
            this.getCurrentCDTime();
            e();
        }
        else
            e();
    };
    DailyInterAdCDDecreaseTrait.traitKey = "DailyInterAdCDDecrease";
    DailyInterAdCDDecreaseTrait = __decorate([
        mj.trait,
        mj.class("DailyInterAdCDDecreaseTrait")
    ], DailyInterAdCDDecreaseTrait);
    return DailyInterAdCDDecreaseTrait;
}(Trait_1.default));
exports.default = DailyInterAdCDDecreaseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5SW50ZXJBZENERGVjcmVhc2UvU2NyaXB0cy9EYWlseUludGVyQWRDRERlY3JlYXNlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUF5RCwrQ0FBSztJQUE5RDtRQUFBLHFFQWdEQztRQS9DQyxpQkFBVyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUErQ3RDLENBQUM7SUE3Q0MsNENBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNyTCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELHdEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFDRCxrREFBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4SCxDQUFDO0lBQ0Qsc0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFDRCwyREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2xDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELDBEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTdDTSxvQ0FBUSxHQUFHLHdCQUF3QixDQUFDO0lBRnhCLDJCQUEyQjtRQUYvQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUM7T0FDbkIsMkJBQTJCLENBZ0QvQztJQUFELGtDQUFDO0NBaERELEFBZ0RDLENBaER3RCxlQUFLLEdBZ0Q3RDtrQkFoRG9CLDJCQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRhaWx5SW50ZXJBZENERGVjcmVhc2VUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlJbnRlckFkQ0REZWNyZWFzZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY2RUaW1lTGlzdCA9IFs5MDAwMCwgNzUwMDAsIDYwMDAwXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYWlseUludGVyQWRDRERlY3JlYXNlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY2RUaW1lTGlzdCkgJiYgQXJyYXkuaXNBcnJheSh0aGlzLl90cmFpdERhdGEuY2RUaW1lTGlzdCkgJiYgKHRoaXMuX2NkVGltZUxpc3QgPSB0aGlzLl90cmFpdERhdGEuY2RUaW1lTGlzdC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiAxMDAwICogdDtcbiAgICB9KSk7XG4gICAgaWYgKCF0aGlzLmxvY2FsRGF0YS5kYXRlKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5kYXRlID0gXCJcIjtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnBsYXlDb3VudCA9IDA7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tBbmRSZXNldERhaWx5KCk7XG4gIH1cbiAgY2hlY2tBbmRSZXNldERhaWx5KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRUb2RheURhdGUoKTtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEuZGF0ZSAhPT0gdCkge1xuICAgICAgdGhpcy5sb2NhbERhdGEuZGF0ZSA9IHQ7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5wbGF5Q291bnQgPSAwO1xuICAgICAgdGhpcy5sb2NhbERhdGEgPSB0aGlzLmxvY2FsRGF0YTtcbiAgICB9XG4gIH1cbiAgZ2V0VG9kYXlEYXRlKCkge1xuICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBTdHJpbmcodC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpICsgXCItXCIgKyBTdHJpbmcodC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuICBnZXRDdXJyZW50Q0RUaW1lKCkge1xuICAgIHZhciB0ID0gdGhpcy5sb2NhbERhdGEucGxheUNvdW50IHx8IDA7XG4gICAgcmV0dXJuIHQgPj0gdGhpcy5fY2RUaW1lTGlzdC5sZW5ndGggPyB0aGlzLl9jZFRpbWVMaXN0W3RoaXMuX2NkVGltZUxpc3QubGVuZ3RoIC0gMV0gOiB0aGlzLl9jZFRpbWVMaXN0W3RdO1xuICB9XG4gIG9uSW50ZXJBZENEX2dldENEVGltZSh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHRoaXMuY2hlY2tBbmRSZXNldERhaWx5KCk7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldEN1cnJlbnRDRFRpbWUoKSxcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uQWRNZ3JfaW50ZXJBZENsb3NlKHQsIGUpIHtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkgIT09IE1qR2FtZVR5cGUuQ2xhc3NpYykge1xuICAgICAgdGhpcy5sb2NhbERhdGEucGxheUNvdW50ID0gKHRoaXMubG9jYWxEYXRhLnBsYXlDb3VudCB8fCAwKSArIDE7XG4gICAgICB0aGlzLmdldEN1cnJlbnRDRFRpbWUoKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19