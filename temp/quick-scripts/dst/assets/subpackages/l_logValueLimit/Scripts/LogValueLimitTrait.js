
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_logValueLimit/Scripts/LogValueLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc11fMg6N5N7LvXCNgluql5', 'LogValueLimitTrait');
// subpackages/l_logValueLimit/Scripts/LogValueLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LogValueLimitTrait = /** @class */ (function (_super) {
    __extends(LogValueLimitTrait, _super);
    function LogValueLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogValueLimitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LogValueLimitTrait.prototype.onExtDimension_getLogLimit = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._traitData.logLimit;
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else
            e();
    };
    LogValueLimitTrait.traitKey = "LogValueLimit";
    LogValueLimitTrait = __decorate([
        mj.trait,
        mj.class("LogValueLimitTrait")
    ], LogValueLimitTrait);
    return LogValueLimitTrait;
}(ExtractTrait_1.default));
exports.default = LogValueLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvZ1ZhbHVlTGltaXQvU2NyaXB0cy9Mb2dWYWx1ZUxpbWl0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCw4RUFBd0Y7QUFHeEY7SUFBZ0Qsc0NBQVk7SUFBNUQ7O0lBZUEsQ0FBQztJQWJDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx1REFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWJNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQWV0QztJQUFELHlCQUFDO0NBZkQsQUFlQyxDQWYrQyxzQkFBWSxHQWUzRDtrQkFmb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxvZ1ZhbHVlTGltaXRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nVmFsdWVMaW1pdFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJMb2dWYWx1ZUxpbWl0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkV4dERpbWVuc2lvbl9nZXRMb2dMaW1pdCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IHRoaXMuX3RyYWl0RGF0YS5sb2dMaW1pdDtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogclxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==