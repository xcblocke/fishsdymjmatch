
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelValentine/Scripts/TravelValentineController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e718TuPEpOcI+BwN0IbkCd', 'TravelValentineController');
// subpackages/l_travelValentine/Scripts/TravelValentineController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var TravelValentineView_1 = require("./TravelValentineView");
var TravelValentineController = /** @class */ (function (_super) {
    __extends(TravelValentineController, _super);
    function TravelValentineController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelValentineView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_travelValentine";
        return _this;
    }
    TravelValentineController.prototype.viewDidShow = function (t) {
        t = null != t ? t : this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("updateData", t);
    };
    TravelValentineController = __decorate([
        mj.class("TravelValentineController")
    ], TravelValentineController);
    return TravelValentineController;
}(ViewController_1.default));
exports.default = TravelValentineController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbFZhbGVudGluZS9TY3JpcHRzL1RyYXZlbFZhbGVudGluZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRyw2REFBd0Q7QUFFeEQ7SUFBdUQsNkNBQWM7SUFBckU7UUFBQSxxRUFTQztRQVJDLGVBQVMsR0FBRyw2QkFBbUIsQ0FBQztRQUNoQyxjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxtQkFBbUIsQ0FBQzs7SUFNbkMsQ0FBQztJQUxDLCtDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM5QixpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBUmtCLHlCQUF5QjtRQUQ3QyxFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQVM3QztJQUFELGdDQUFDO0NBVEQsQUFTQyxDQVRzRCx3QkFBYyxHQVNwRTtrQkFUb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVHJhdmVsVmFsZW50aW5lVmlldyBmcm9tICcuL1RyYXZlbFZhbGVudGluZVZpZXcnO1xuQG1qLmNsYXNzKFwiVHJhdmVsVmFsZW50aW5lQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsVmFsZW50aW5lQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVHJhdmVsVmFsZW50aW5lVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5QQU5FTDtcbiAgYnVuZGxlTmFtZSA9IFwibF90cmF2ZWxWYWxlbnRpbmVcIjtcbiAgdmlld0RpZFNob3codCkge1xuICAgIHQgPSBudWxsICE9IHQgPyB0IDogdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJ1cGRhdGVEYXRhXCIsIHQpO1xuICB9XG59Il19