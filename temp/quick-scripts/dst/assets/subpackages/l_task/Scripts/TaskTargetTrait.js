
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskTargetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a9c3aEV+WxJl6JdwFqUhP0/', 'TaskTargetTrait');
// subpackages/l_task/Scripts/TaskTargetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TaskTargetTrait = /** @class */ (function (_super) {
    __extends(TaskTargetTrait, _super);
    function TaskTargetTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskTargetTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskTargetTrait.prototype.onTaskModel_randomTask = function (t, e) {
        var a = t.beforReturnVal;
        if (a && 0 !== a.size && this.adjustTaskInfoMap(a)) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: a
            });
        }
        else {
            e();
        }
    };
    TaskTargetTrait.prototype.adjustTaskInfoMap = function (t) {
        var e = this;
        if (!this._config.targetValue)
            return false;
        var a = 0;
        t.forEach(function (t, o) {
            var i = o.toString(), r = e._config.targetValue[i];
            if (!r)
                return false;
            if (!Array.isArray(r) || 3 !== r.length)
                return false;
            __spreadArrays(t.taskMax);
            t.taskMax = __spreadArrays(r);
            t.taskMin = [0, r[0], r[1]];
            a++;
        });
        return a > 0;
    };
    TaskTargetTrait.traitKey = "TaskTarget";
    TaskTargetTrait = __decorate([
        mj.trait,
        mj.class("TaskTargetTrait")
    ], TaskTargetTrait);
    return TaskTargetTrait;
}(Trait_1.default));
exports.default = TaskTargetTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrVGFyZ2V0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUE2QyxtQ0FBSztJQUFsRDtRQUFBLHFFQW1DQztRQWxDQyxhQUFPLEdBQUcsRUFBRSxDQUFDOztJQWtDZixDQUFDO0lBaENDLGdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELGdEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDdEQsZUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2YsQ0FBQyxDQUFDLE9BQU8sa0JBQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFFLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFoQ00sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFGWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FtQ25DO0lBQUQsc0JBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQzRDLGVBQUssR0FtQ2pEO2tCQW5Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRhc2tUYXJnZXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1RhcmdldFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza1RhcmdldFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fdHJhaXREYXRhIHx8IHt9O1xuICB9XG4gIG9uVGFza01vZGVsX3JhbmRvbVRhc2sodCwgZSkge1xuICAgIHZhciBhID0gdC5iZWZvclJldHVyblZhbDtcbiAgICBpZiAoYSAmJiAwICE9PSBhLnNpemUgJiYgdGhpcy5hZGp1c3RUYXNrSW5mb01hcChhKSkge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBhXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBhZGp1c3RUYXNrSW5mb01hcCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fY29uZmlnLnRhcmdldFZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGEgPSAwO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAodCwgbykge1xuICAgICAgdmFyIGkgPSBvLnRvU3RyaW5nKCksXG4gICAgICAgIHIgPSBlLl9jb25maWcudGFyZ2V0VmFsdWVbaV07XG4gICAgICBpZiAoIXIpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyKSB8fCAzICE9PSByLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgWy4uLnQudGFza01heF07XG4gICAgICB0LnRhc2tNYXggPSBbLi4ucl07XG4gICAgICB0LnRhc2tNaW4gPSBbMCwgclswXSwgclsxXV07XG4gICAgICBhKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIGEgPiAwO1xuICB9XG59Il19