
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskOpenTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fd8cDJlEJB2pcTNJQ708ek', 'TaskOpenTrait');
// subpackages/l_task/Scripts/TaskOpenTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskOpenTrait = /** @class */ (function (_super) {
    __extends(TaskOpenTrait, _super);
    function TaskOpenTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskOpenTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskOpenTrait.prototype.onTaskTrait_getOpenCond = function (t, e) {
        if (this._config.openCondition) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.openCondition
            });
        }
        else {
            e();
        }
    };
    TaskOpenTrait.traitKey = "TaskOpen";
    TaskOpenTrait = __decorate([
        mj.trait,
        mj.class("TaskOpenTrait")
    ], TaskOpenTrait);
    return TaskOpenTrait;
}(Trait_1.default));
exports.default = TaskOpenTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrT3BlblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQTJDLGlDQUFLO0lBQWhEO1FBQUEscUVBa0JDO1FBakJDLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBaUJmLENBQUM7SUFmQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFDRCwrQ0FBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUM5QixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7YUFDdEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBZk0sc0JBQVEsR0FBRyxVQUFVLENBQUM7SUFGVixhQUFhO1FBRmpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7T0FDTCxhQUFhLENBa0JqQztJQUFELG9CQUFDO0NBbEJELEFBa0JDLENBbEIwQyxlQUFLLEdBa0IvQztrQkFsQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrT3BlblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrT3BlblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0ge307XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGFza09wZW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgfVxuICBvblRhc2tUcmFpdF9nZXRPcGVuQ29uZCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5vcGVuQ29uZGl0aW9uKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2NvbmZpZy5vcGVuQ29uZGl0aW9uXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==