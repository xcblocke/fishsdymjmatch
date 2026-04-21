
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyRewardController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe295KYMCJChp48Bl3LVoVB', 'AgeSurveyRewardController');
// subpackages/r_ageSurvey/Scripts/AgeSurveyRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AgeSurveyRewardView_1 = require("./AgeSurveyRewardView");
var AgeSurveyRewardController = /** @class */ (function (_super) {
    __extends(AgeSurveyRewardController, _super);
    function AgeSurveyRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AgeSurveyRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_ageSurvey";
        return _this;
    }
    AgeSurveyRewardController.prototype.getMessageListeners = function () {
        return {};
    };
    AgeSurveyRewardController.prototype.initDependRes = function () { };
    AgeSurveyRewardController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        var e = this.args;
        this.viewDoAction("initData", e);
    };
    AgeSurveyRewardController.prototype.closeAndCallback = function () {
        var t = this.args, e = null == t ? void 0 : t.onClose;
        this.close();
        null == e || e();
    };
    AgeSurveyRewardController = __decorate([
        mj.class("AgeSurveyRewardController")
    ], AgeSurveyRewardController);
    return AgeSurveyRewardController;
}(ViewController_1.default));
exports.default = AgeSurveyRewardController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleVJld2FyZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyw2REFBd0Q7QUFFeEQ7SUFBdUQsNkNBQWM7SUFBckU7UUFBQSxxRUFtQkM7UUFsQkMsZUFBUyxHQUFHLDZCQUFtQixDQUFDO1FBQ2hDLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLGFBQWEsQ0FBQzs7SUFnQjdCLENBQUM7SUFmQyx1REFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxpREFBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsK0NBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Qsb0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFDZixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBbEJrQix5QkFBeUI7UUFEN0MsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0FtQjdDO0lBQUQsZ0NBQUM7Q0FuQkQsQUFtQkMsQ0FuQnNELHdCQUFjLEdBbUJwRTtrQkFuQm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEFnZVN1cnZleVJld2FyZFZpZXcgZnJvbSAnLi9BZ2VTdXJ2ZXlSZXdhcmRWaWV3JztcbkBtai5jbGFzcyhcIkFnZVN1cnZleVJld2FyZENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFnZVN1cnZleVJld2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IEFnZVN1cnZleVJld2FyZFZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIGJ1bmRsZU5hbWUgPSBcInJfYWdlU3VydmV5XCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBlID0gdGhpcy5hcmdzO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwiaW5pdERhdGFcIiwgZSk7XG4gIH1cbiAgY2xvc2VBbmRDYWxsYmFjaygpIHtcbiAgICB2YXIgdCA9IHRoaXMuYXJncyxcbiAgICAgIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0Lm9uQ2xvc2U7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbn0iXX0=