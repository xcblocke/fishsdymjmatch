
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskBannerAutoNextTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae4c8yfD1tFmJFlEgM0Bl8v', 'TaskBannerAutoNextTrait');
// subpackages/l_task/Scripts/TaskBannerAutoNextTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskBannerAutoNextTrait = /** @class */ (function (_super) {
    __extends(TaskBannerAutoNextTrait, _super);
    function TaskBannerAutoNextTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delayTime = 1.2;
        return _this;
    }
    TaskBannerAutoNextTrait.prototype.onLoad = function () {
        var e, a;
        _super.prototype.onLoad.call(this);
        this.delayTime = null !== (a = null === (e = this._traitData) || void 0 === e ? void 0 : e.delayTime) && void 0 !== a ? a : 1.2;
    };
    TaskBannerAutoNextTrait.prototype.onTaskTrait_showBanner = function (t, e) {
        t.args[0] = t.args[0] || {};
        t.args[0].immediateNext = true;
        var a = t.args[1], o = t.args[2], i = t.args[3], r = t.ins;
        this.pushController("TaskBannerController", {
            data: o,
            isShowAction: false,
            noBlock: !r.checkNeedBlock(),
            bgStyle: {
                blackOpacity: 0
            }
        });
        var n = 1000 * this.delayTime;
        setTimeout(function () {
            if (i) {
                r.showTask(a, true);
            }
            else {
                a();
            }
        }, n);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    TaskBannerAutoNextTrait.traitKey = "TaskBannerAutoNext";
    TaskBannerAutoNextTrait = __decorate([
        mj.trait,
        mj.class("TaskBannerAutoNextTrait")
    ], TaskBannerAutoNextTrait);
    return TaskBannerAutoNextTrait;
}(Trait_1.default));
exports.default = TaskBannerAutoNextTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrQmFubmVyQXV0b05leHRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFxRCwyQ0FBSztJQUExRDtRQUFBLHFFQW9DQztRQW5DQyxlQUFTLEdBQUcsR0FBRyxDQUFDOztJQW1DbEIsQ0FBQztJQWpDQyx3Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2xJLENBQUM7SUFDRCx3REFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEVBQUU7WUFDMUMsSUFBSSxFQUFFLENBQUM7WUFDUCxZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO1lBQzVCLE9BQU8sRUFBRTtnQkFDUCxZQUFZLEVBQUUsQ0FBQzthQUNoQjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlCLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7UUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ00sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUZwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBb0MzQztJQUFELDhCQUFDO0NBcENELEFBb0NDLENBcENvRCxlQUFLLEdBb0N6RDtrQkFwQ29CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRhc2tCYW5uZXJBdXRvTmV4dFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQmFubmVyQXV0b05leHRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgZGVsYXlUaW1lID0gMS4yO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRhc2tCYW5uZXJBdXRvTmV4dFwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIGE7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5kZWxheVRpbWUgPSBudWxsICE9PSAoYSA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmRlbGF5VGltZSkgJiYgdm9pZCAwICE9PSBhID8gYSA6IDEuMjtcbiAgfVxuICBvblRhc2tUcmFpdF9zaG93QmFubmVyKHQsIGUpIHtcbiAgICB0LmFyZ3NbMF0gPSB0LmFyZ3NbMF0gfHwge307XG4gICAgdC5hcmdzWzBdLmltbWVkaWF0ZU5leHQgPSB0cnVlO1xuICAgIHZhciBhID0gdC5hcmdzWzFdLFxuICAgICAgbyA9IHQuYXJnc1syXSxcbiAgICAgIGkgPSB0LmFyZ3NbM10sXG4gICAgICByID0gdC5pbnM7XG4gICAgdGhpcy5wdXNoQ29udHJvbGxlcihcIlRhc2tCYW5uZXJDb250cm9sbGVyXCIsIHtcbiAgICAgIGRhdGE6IG8sXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlLFxuICAgICAgbm9CbG9jazogIXIuY2hlY2tOZWVkQmxvY2soKSxcbiAgICAgIGJnU3R5bGU6IHtcbiAgICAgICAgYmxhY2tPcGFjaXR5OiAwXG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIG4gPSAxMDAwICogdGhpcy5kZWxheVRpbWU7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaSkge1xuICAgICAgICByLnNob3dUYXNrKGEsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYSgpO1xuICAgICAgfVxuICAgIH0sIG4pO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG59Il19