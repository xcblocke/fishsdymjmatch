
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deviceInfo/Scripts/DeviceInfoPanelController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a2faZnTVRNqpN7y1kjfgqY', 'DeviceInfoPanelController');
// subpackages/l_deviceInfo/Scripts/DeviceInfoPanelController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var DeviceInfoPanelView_1 = require("./DeviceInfoPanelView");
var DeviceInfoPanelController = /** @class */ (function (_super) {
    __extends(DeviceInfoPanelController, _super);
    function DeviceInfoPanelController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DeviceInfoPanelView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "l_deviceInfo";
        return _this;
    }
    DeviceInfoPanelController.prototype.initDependRes = function () { };
    DeviceInfoPanelController.prototype.getMessageListeners = function () {
        return {};
    };
    DeviceInfoPanelController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    DeviceInfoPanelController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
    };
    DeviceInfoPanelController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    DeviceInfoPanelController = __decorate([
        mj.class("DeviceInfoPanelController")
    ], DeviceInfoPanelController);
    return DeviceInfoPanelController;
}(ViewController_1.default));
exports.default = DeviceInfoPanelController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RldmljZUluZm8vU2NyaXB0cy9EZXZpY2VJbmZvUGFuZWxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsNkRBQXdEO0FBRXhEO0lBQXVELDZDQUFjO0lBQXJFO1FBQUEscUVBaUJDO1FBaEJDLGVBQVMsR0FBRyw2QkFBbUIsQ0FBQztRQUNoQyxjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxjQUFjLENBQUM7O0lBYzlCLENBQUM7SUFiQyxpREFBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsdURBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsK0NBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELCtDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELCtDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFoQmtCLHlCQUF5QjtRQUQ3QyxFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQWlCN0M7SUFBRCxnQ0FBQztDQWpCRCxBQWlCQyxDQWpCc0Qsd0JBQWMsR0FpQnBFO2tCQWpCb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgRGV2aWNlSW5mb1BhbmVsVmlldyBmcm9tICcuL0RldmljZUluZm9QYW5lbFZpZXcnO1xuQG1qLmNsYXNzKFwiRGV2aWNlSW5mb1BhbmVsQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlSW5mb1BhbmVsQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gRGV2aWNlSW5mb1BhbmVsVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgYnVuZGxlTmFtZSA9IFwibF9kZXZpY2VJbmZvXCI7XG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIHQpO1xuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=