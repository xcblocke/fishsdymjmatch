
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_winStreakReward/Scripts/WinStreakRewardController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0be03Fdk/NMXqvsebOsnJxB', 'WinStreakRewardController');
// subpackages/l_winStreakReward/Scripts/WinStreakRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var WinStreakRewardView_1 = require("./WinStreakRewardView");
var WinStreakRewardController = /** @class */ (function (_super) {
    __extends(WinStreakRewardController, _super);
    function WinStreakRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = WinStreakRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "mainRes";
        return _this;
    }
    WinStreakRewardController.prototype.initDependRes = function () { };
    WinStreakRewardController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("showReward", null != e ? e : this.args);
    };
    WinStreakRewardController = __decorate([
        mj.class("WinStreakRewardController")
    ], WinStreakRewardController);
    return WinStreakRewardController;
}(ViewController_1.default));
exports.default = WinStreakRewardController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dpblN0cmVha1Jld2FyZC9TY3JpcHRzL1dpblN0cmVha1Jld2FyZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyw2REFBd0Q7QUFFeEQ7SUFBdUQsNkNBQWM7SUFBckU7UUFBQSxxRUFTQztRQVJDLGVBQVMsR0FBRyw2QkFBbUIsQ0FBQztRQUNoQyxjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxTQUFTLENBQUM7O0lBTXpCLENBQUM7SUFMQyxpREFBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsK0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBUmtCLHlCQUF5QjtRQUQ3QyxFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQVM3QztJQUFELGdDQUFDO0NBVEQsQUFTQyxDQVRzRCx3QkFBYyxHQVNwRTtrQkFUb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgV2luU3RyZWFrUmV3YXJkVmlldyBmcm9tICcuL1dpblN0cmVha1Jld2FyZFZpZXcnO1xuQG1qLmNsYXNzKFwiV2luU3RyZWFrUmV3YXJkQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luU3RyZWFrUmV3YXJkQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gV2luU3RyZWFrUmV3YXJkVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBpbml0RGVwZW5kUmVzKCkge31cbiAgdmlld0RpZFNob3coZSkge1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93UmV3YXJkXCIsIG51bGwgIT0gZSA/IGUgOiB0aGlzLmFyZ3MpO1xuICB9XG59Il19