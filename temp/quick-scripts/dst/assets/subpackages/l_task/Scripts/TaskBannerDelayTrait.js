
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskBannerDelayTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e5c57uhNVBxa7Fy5m0frJ9', 'TaskBannerDelayTrait');
// subpackages/l_task/Scripts/TaskBannerDelayTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var TaskBannerDelayTrait = /** @class */ (function (_super) {
    __extends(TaskBannerDelayTrait, _super);
    function TaskBannerDelayTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DELAY_TIME = 1.7;
        _this.FORCE_BLOCK = true;
        _this.UNBLOCK_DELAY = 1;
        _this.BTN_NEXT_DELAY_TIME = 2;
        return _this;
    }
    TaskBannerDelayTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskBannerDelayTrait.prototype.onTaskTrait_showBanner = function (t, e) {
        var a, o, i, r = this, n = null !== (o = null === (a = t.args[0]) || void 0 === a ? void 0 : a.hasBoxReward) && void 0 !== o && o, s = null !== (i = t.args[3]) && void 0 !== i && i;
        if (n)
            e();
        else {
            var l = 1000 * this.DELAY_TIME;
            setTimeout(function () {
                e();
            }, l);
            if (!GameUtils_1.default.isRatingDialogReady() && !s) {
                var p = 1000 * this.UNBLOCK_DELAY + l;
                setTimeout(function () {
                    r.removeBlockLayer();
                }, p);
            }
        }
    };
    TaskBannerDelayTrait.prototype.removeBlockLayer = function () {
        var t;
        try {
            var e = ControllerManager_1.default.getInstance().getControByName("TaskBannerController");
            if (!e)
                return;
            (null === (t = e.rootView) || void 0 === t ? void 0 : t.getComponent(cc.BlockInputEvents)) && e.rootView.removeComponent(cc.BlockInputEvents);
        }
        catch (t) { }
    };
    TaskBannerDelayTrait.prototype.onTaskTrait_checkNeedBlock = function (t, e) {
        if (this.FORCE_BLOCK) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: true
            });
        }
        else {
            e();
        }
    };
    TaskBannerDelayTrait.prototype.onWinVw_btnNextDelay = function (t, e) {
        var a;
        if (t.args[0]) {
            (null !== (a = t.args[0].delayTime) && void 0 !== a ? a : 0) < this.BTN_NEXT_DELAY_TIME && (t.args[0].delayTime = this.BTN_NEXT_DELAY_TIME);
        }
        e();
    };
    TaskBannerDelayTrait.traitKey = "TaskBannerDelay";
    TaskBannerDelayTrait.nextTimeOut = -1;
    TaskBannerDelayTrait = __decorate([
        mj.trait,
        mj.class("TaskBannerDelayTrait")
    ], TaskBannerDelayTrait);
    return TaskBannerDelayTrait;
}(Trait_1.default));
exports.default = TaskBannerDelayTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQmFubmVyRGVsYXlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RiwwRkFBcUY7QUFDckYsNEVBQXVFO0FBR3ZFO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBd0RDO1FBdkRDLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHlCQUFtQixHQUFHLENBQUMsQ0FBQzs7SUFvRDFCLENBQUM7SUFqREMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUMxRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQztZQUFFLENBQUMsRUFBRSxDQUFDO2FBQUs7WUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMvQixVQUFVLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLENBQUM7WUFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsbUJBQVMsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQztvQkFDVCxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDRjtJQUNILENBQUM7SUFDRCwrQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQ2YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvSTtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDaEIsQ0FBQztJQUNELHlEQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM3STtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQWxETSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBQzdCLGdDQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFOTCxvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBd0R4QztJQUFELDJCQUFDO0NBeERELEFBd0RDLENBeERpRCxlQUFLLEdBd0R0RDtrQkF4RG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrQmFubmVyRGVsYXlUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0Jhbm5lckRlbGF5VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIERFTEFZX1RJTUUgPSAxLjc7XG4gIEZPUkNFX0JMT0NLID0gdHJ1ZTtcbiAgVU5CTE9DS19ERUxBWSA9IDE7XG4gIEJUTl9ORVhUX0RFTEFZX1RJTUUgPSAyO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRhc2tCYW5uZXJEZWxheVwiO1xuICBzdGF0aWMgbmV4dFRpbWVPdXQgPSAtMTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVGFza1RyYWl0X3Nob3dCYW5uZXIodCwgZSkge1xuICAgIHZhciBhLFxuICAgICAgbyxcbiAgICAgIGksXG4gICAgICByID0gdGhpcyxcbiAgICAgIG4gPSBudWxsICE9PSAobyA9IG51bGwgPT09IChhID0gdC5hcmdzWzBdKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmhhc0JveFJld2FyZCkgJiYgdm9pZCAwICE9PSBvICYmIG8sXG4gICAgICBzID0gbnVsbCAhPT0gKGkgPSB0LmFyZ3NbM10pICYmIHZvaWQgMCAhPT0gaSAmJiBpO1xuICAgIGlmIChuKSBlKCk7ZWxzZSB7XG4gICAgICB2YXIgbCA9IDEwMDAgKiB0aGlzLkRFTEFZX1RJTUU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZSgpO1xuICAgICAgfSwgbCk7XG4gICAgICBpZiAoIUdhbWVVdGlscy5pc1JhdGluZ0RpYWxvZ1JlYWR5KCkgJiYgIXMpIHtcbiAgICAgICAgdmFyIHAgPSAxMDAwICogdGhpcy5VTkJMT0NLX0RFTEFZICsgbDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgci5yZW1vdmVCbG9ja0xheWVyKCk7XG4gICAgICAgIH0sIHApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmVCbG9ja0xheWVyKCkge1xuICAgIHZhciB0O1xuICAgIHRyeSB7XG4gICAgICB2YXIgZSA9IENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0Q29udHJvQnlOYW1lKFwiVGFza0Jhbm5lckNvbnRyb2xsZXJcIik7XG4gICAgICBpZiAoIWUpIHJldHVybjtcbiAgICAgIChudWxsID09PSAodCA9IGUucm9vdFZpZXcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpKSAmJiBlLnJvb3RWaWV3LnJlbW92ZUNvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgICB9IGNhdGNoICh0KSB7fVxuICB9XG4gIG9uVGFza1RyYWl0X2NoZWNrTmVlZEJsb2NrKHQsIGUpIHtcbiAgICBpZiAodGhpcy5GT1JDRV9CTE9DSykge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbldpblZ3X2J0bk5leHREZWxheSh0LCBlKSB7XG4gICAgdmFyIGE7XG4gICAgaWYgKHQuYXJnc1swXSkge1xuICAgICAgKG51bGwgIT09IChhID0gdC5hcmdzWzBdLmRlbGF5VGltZSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDApIDwgdGhpcy5CVE5fTkVYVF9ERUxBWV9USU1FICYmICh0LmFyZ3NbMF0uZGVsYXlUaW1lID0gdGhpcy5CVE5fTkVYVF9ERUxBWV9USU1FKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19