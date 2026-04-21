
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyLockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52e88MPwmZP/rx0mMczWcwl', 'DailyLockTrait');
// subpackages/l_daily/Scripts/DailyLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DGameUnlock_1 = require("../../../Scripts/gamePlay/dot/DGameUnlock");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DailyModel_1 = require("./DailyModel");
var HallDailyBtn_1 = require("./HallDailyBtn");
var DailyLockTrait = /** @class */ (function (_super) {
    __extends(DailyLockTrait, _super);
    function DailyLockTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyLockTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyLockTrait.prototype.onDaily_checkHDBtn = function (t, e) {
        1 == this.traitData.isLock && (t.args[0] = true);
        e();
    };
    DailyLockTrait.prototype.onDaily_updateBtnShow = function (t, e) {
        if (1 == this.traitData.isLock) {
            var i = this.isOpenDaily(), o = t.args[0], n = null == o ? void 0 : o.getComponent(HallDailyBtn_1.default);
            if (n) {
                var a = DailyModel_1.default.getInstance().getEnterCnt();
                if (n) {
                    n.updateDay();
                    if (1 == this.traitData.isLock) {
                        n.updateLock(i, this.getLimitLevel());
                        n.updateRed(1 == this.traitData.isRed && i && a <= 0);
                    }
                }
            }
        }
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    DailyLockTrait.prototype.onHDailyBtn_onBClick = function (t, e) {
        if (this.isOpenDaily()) {
            mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_clearNotify, GameTypeEnums_1.ERedDotType.DailyChallenge);
            e();
        }
        else {
            t.args[0] = false;
            e();
        }
    };
    DailyLockTrait.prototype.onDaily_isOpenDaily = function (t, e) {
        var i = this.isOpenDaily();
        e({
            returnType: TraitCallbackReturnType.jump,
            returnVal: i
        });
    };
    DailyLockTrait.prototype.isOpenDaily = function () {
        var t = DailyModel_1.default.getInstance();
        if (this.isInstallDayValid() && this.isLevelValid()) {
            DGameUnlock_1.DotGameUnlock.dotByType(DGameUnlock_1.EFuncUnlockType.DailyChallenge);
            t.setOpen(true);
            return true;
        }
        t.setOpen(false);
        return false;
    };
    DailyLockTrait.prototype.getLimitLevel = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 20;
    };
    DailyLockTrait.prototype.isLevelValid = function () {
        var t = NormalGameData_1.default.getInstance().getLevelId(), e = UserModel_1.default.getInstance().getMainGameData();
        e && (t = e.getLevelId());
        return t >= this.getLimitLevel();
    };
    DailyLockTrait.prototype.isInstallDayValid = function () {
        UserModel_1.default.getInstance().getInstallTime();
        return UserModel_1.default.getInstance().getGameActiveDays() > this.traitData.installDay;
    };
    DailyLockTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var i = NormalGameData_1.default.getInstance().getLevelId(), o = UserModel_1.default.getInstance().getMainGameData();
        o && (i = o.getLevelId());
        i >= this.getLimitLevel() && 1 == this._traitData.isRed && DailyModel_1.default.getInstance().getEnterCnt() <= 0 && mj.EventManager.emit(GameEvent_1.EGameEvent.RedDot_addNotify, GameTypeEnums_1.ERedDotType.DailyChallenge);
        e();
    };
    DailyLockTrait.traitKey = "DailyLock";
    __decorate([
        mj.traitEvent("DailyLockTt_getLimitLv")
    ], DailyLockTrait.prototype, "getLimitLevel", null);
    __decorate([
        mj.traitEvent("DailyLockTt_isLvValid")
    ], DailyLockTrait.prototype, "isLevelValid", null);
    DailyLockTrait = __decorate([
        mj.trait,
        mj.class("DailyLockTrait")
    ], DailyLockTrait);
    return DailyLockTrait;
}(Trait_1.default));
exports.default = DailyLockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlMb2NrVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUEyRTtBQUMzRSx3RkFBcUY7QUFDckYsc0ZBQWlGO0FBQ2pGLGdFQUEyRDtBQUMzRCx5RUFBMkY7QUFDM0Ysc0VBQWlFO0FBQ2pFLDJDQUFzQztBQUN0QywrQ0FBMEM7QUFHMUM7SUFBNEMsa0NBQUs7SUFBakQ7O0lBOEVBLENBQUM7SUE1RUMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDJDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDhDQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FB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akYsQ0FBQztJQUNELDBDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUMvQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNoRCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRSwyQkFBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hMLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQTVFTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQXVEOUI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3VEQUl2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztzREFNdEM7SUFsRWtCLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQThFbEM7SUFBRCxxQkFBQztDQTlFRCxBQThFQyxDQTlFMkMsZUFBSyxHQThFaEQ7a0JBOUVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBFUmVkRG90VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL05vcm1hbEdhbWVEYXRhJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBEb3RHYW1lVW5sb2NrLCBFRnVuY1VubG9ja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVVubG9jayc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IERhaWx5TW9kZWwgZnJvbSAnLi9EYWlseU1vZGVsJztcbmltcG9ydCBIYWxsRGFpbHlCdG4gZnJvbSAnLi9IYWxsRGFpbHlCdG4nO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYWlseUxvY2tUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlMb2NrVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiRGFpbHlMb2NrXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkRhaWx5X2NoZWNrSERCdG4odCwgZSkge1xuICAgIDEgPT0gdGhpcy50cmFpdERhdGEuaXNMb2NrICYmICh0LmFyZ3NbMF0gPSB0cnVlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25EYWlseV91cGRhdGVCdG5TaG93KHQsIGUpIHtcbiAgICBpZiAoMSA9PSB0aGlzLnRyYWl0RGF0YS5pc0xvY2spIHtcbiAgICAgIHZhciBpID0gdGhpcy5pc09wZW5EYWlseSgpLFxuICAgICAgICBvID0gdC5hcmdzWzBdLFxuICAgICAgICBuID0gbnVsbCA9PSBvID8gdm9pZCAwIDogby5nZXRDb21wb25lbnQoSGFsbERhaWx5QnRuKTtcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIHZhciBhID0gRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEVudGVyQ250KCk7XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgbi51cGRhdGVEYXkoKTtcbiAgICAgICAgICBpZiAoMSA9PSB0aGlzLnRyYWl0RGF0YS5pc0xvY2spIHtcbiAgICAgICAgICAgIG4udXBkYXRlTG9jayhpLCB0aGlzLmdldExpbWl0TGV2ZWwoKSk7XG4gICAgICAgICAgICBuLnVwZGF0ZVJlZCgxID09IHRoaXMudHJhaXREYXRhLmlzUmVkICYmIGkgJiYgYSA8PSAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbiAgb25IRGFpbHlCdG5fb25CQ2xpY2sodCwgZSkge1xuICAgIGlmICh0aGlzLmlzT3BlbkRhaWx5KCkpIHtcbiAgICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuUmVkRG90X2NsZWFyTm90aWZ5LCBFUmVkRG90VHlwZS5EYWlseUNoYWxsZW5nZSk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQuYXJnc1swXSA9IGZhbHNlO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkRhaWx5X2lzT3BlbkRhaWx5KHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuaXNPcGVuRGFpbHkoKTtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICByZXR1cm5WYWw6IGlcbiAgICB9KTtcbiAgfVxuICBpc09wZW5EYWlseSgpIHtcbiAgICB2YXIgdCA9IERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAodGhpcy5pc0luc3RhbGxEYXlWYWxpZCgpICYmIHRoaXMuaXNMZXZlbFZhbGlkKCkpIHtcbiAgICAgIERvdEdhbWVVbmxvY2suZG90QnlUeXBlKEVGdW5jVW5sb2NrVHlwZS5EYWlseUNoYWxsZW5nZSk7XG4gICAgICB0LnNldE9wZW4odHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdC5zZXRPcGVuKGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYWlseUxvY2tUdF9nZXRMaW1pdEx2XCIpXG4gIGdldExpbWl0TGV2ZWwoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5sZXZlbExpbWl0KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMjA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYWlseUxvY2tUdF9pc0x2VmFsaWRcIilcbiAgaXNMZXZlbFZhbGlkKCkge1xuICAgIHZhciB0ID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCksXG4gICAgICBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCk7XG4gICAgZSAmJiAodCA9IGUuZ2V0TGV2ZWxJZCgpKTtcbiAgICByZXR1cm4gdCA+PSB0aGlzLmdldExpbWl0TGV2ZWwoKTtcbiAgfVxuICBpc0luc3RhbGxEYXlWYWxpZCgpIHtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRJbnN0YWxsVGltZSgpO1xuICAgIHJldHVybiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lQWN0aXZlRGF5cygpID4gdGhpcy50cmFpdERhdGEuaW5zdGFsbERheTtcbiAgfVxuICBvbldpblZ3X3Nob3dXaW5Wdyh0LCBlKSB7XG4gICAgdmFyIGkgPSBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldExldmVsSWQoKSxcbiAgICAgIG8gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKTtcbiAgICBvICYmIChpID0gby5nZXRMZXZlbElkKCkpO1xuICAgIGkgPj0gdGhpcy5nZXRMaW1pdExldmVsKCkgJiYgMSA9PSB0aGlzLl90cmFpdERhdGEuaXNSZWQgJiYgRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEVudGVyQ250KCkgPD0gMCAmJiBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LlJlZERvdF9hZGROb3RpZnksIEVSZWREb3RUeXBlLkRhaWx5Q2hhbGxlbmdlKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=