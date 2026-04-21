
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_journeyWinOpt/Scripts/JourneyWinOptTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb07drRYOVE8IRswlkHlvQ8', 'JourneyWinOptTrait');
// subpackages/r_journeyWinOpt/Scripts/JourneyWinOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JourneyWinOptView_1 = require("./JourneyWinOptView");
var JourneyWinOptTrait = /** @class */ (function (_super) {
    __extends(JourneyWinOptTrait, _super);
    function JourneyWinOptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_journeyWinOpt:prefabs/JourneyWinOpt"];
        return _this;
    }
    JourneyWinOptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyWinOptTrait.prototype.onTLWinCtrl_initRes = function (t, e) {
        var r = t.ins;
        null == r || r.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    JourneyWinOptTrait.prototype.onTLWinVw_showTLWinVw = function (t, e) {
        var r, i = t.ins;
        t.args[0];
        if (cc.isValid(i)) {
            var o = i.getContentNode();
            if (cc.isValid(o)) {
                var n = o.getChildByName("JourneyWinOpt");
                if (!cc.isValid(n)) {
                    n = i.createUISync(JourneyWinOptView_1.default);
                    cc.isValid(n) && o.addChild(n);
                }
                cc.isValid(n) && (null === (r = n.getComponent(JourneyWinOptView_1.default)) || void 0 === r || r.showUI(o));
            }
        }
        e();
    };
    JourneyWinOptTrait.traitKey = "JourneyWinOpt";
    JourneyWinOptTrait = __decorate([
        mj.trait,
        mj.class("JourneyWinOptTrait")
    ], JourneyWinOptTrait);
    return JourneyWinOptTrait;
}(Trait_1.default));
exports.default = JourneyWinOptTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2pvdXJuZXlXaW5PcHQvU2NyaXB0cy9Kb3VybmV5V2luT3B0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx5REFBb0Q7QUFHcEQ7SUFBZ0Qsc0NBQUs7SUFBckQ7UUFBQSxxRUE0QkM7UUEzQkMsZ0JBQVUsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7O0lBMkJ6RCxDQUFDO0lBekJDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLDJCQUFpQixDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEM7Z0JBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLDJCQUFpQixDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BHO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUF6Qk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFGZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBNEJ0QztJQUFELHlCQUFDO0NBNUJELEFBNEJDLENBNUIrQyxlQUFLLEdBNEJwRDtrQkE1Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSm91cm5leVdpbk9wdFZpZXcgZnJvbSAnLi9Kb3VybmV5V2luT3B0Vmlldyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkpvdXJuZXlXaW5PcHRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm91cm5leVdpbk9wdFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICByZXF1aXJlUmVzID0gW1wicl9qb3VybmV5V2luT3B0OnByZWZhYnMvSm91cm5leVdpbk9wdFwiXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJKb3VybmV5V2luT3B0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRMV2luQ3RybF9pbml0UmVzKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIG51bGwgPT0gciB8fCByLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgdGhpcy5yZXF1aXJlUmVzKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UTFdpblZ3X3Nob3dUTFdpblZ3KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIGkgPSB0LmlucztcbiAgICB0LmFyZ3NbMF07XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHZhciBvID0gaS5nZXRDb250ZW50Tm9kZSgpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwiSm91cm5leVdpbk9wdFwiKTtcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgICAgbiA9IGkuY3JlYXRlVUlTeW5jKEpvdXJuZXlXaW5PcHRWaWV3KTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKG4pICYmIG8uYWRkQ2hpbGQobik7XG4gICAgICAgIH1cbiAgICAgICAgY2MuaXNWYWxpZChuKSAmJiAobnVsbCA9PT0gKHIgPSBuLmdldENvbXBvbmVudChKb3VybmV5V2luT3B0VmlldykpIHx8IHZvaWQgMCA9PT0gciB8fCByLnNob3dVSShvKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGUoKTtcbiAgfVxufSJdfQ==