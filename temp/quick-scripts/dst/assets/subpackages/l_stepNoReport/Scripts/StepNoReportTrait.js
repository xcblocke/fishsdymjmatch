
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_stepNoReport/Scripts/StepNoReportTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a052UqZ1pL74+6b7uTfevB', 'StepNoReportTrait');
// subpackages/l_stepNoReport/Scripts/StepNoReportTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var StepNoReportTrait = /** @class */ (function (_super) {
    __extends(StepNoReportTrait, _super);
    function StepNoReportTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepNoReportTrait.prototype.onTrackerUtils_dotGmStep = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    StepNoReportTrait.traitKey = "StepNoReport";
    StepNoReportTrait = __decorate([
        mj.trait,
        mj.class("StepNoReportTrait")
    ], StepNoReportTrait);
    return StepNoReportTrait;
}(Trait_1.default));
exports.default = StepNoReportTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N0ZXBOb1JlcG9ydC9TY3JpcHRzL1N0ZXBOb1JlcG9ydFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBK0MscUNBQUs7SUFBcEQ7O0lBT0EsQ0FBQztJQUxDLG9EQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBTE0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFEZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBT3JDO0lBQUQsd0JBQUM7Q0FQRCxBQU9DLENBUDhDLGVBQUssR0FPbkQ7a0JBUG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlN0ZXBOb1JlcG9ydFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGVwTm9SZXBvcnRUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdGVwTm9SZXBvcnRcIjtcbiAgb25UcmFja2VyVXRpbHNfZG90R21TdGVwKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxufSJdfQ==