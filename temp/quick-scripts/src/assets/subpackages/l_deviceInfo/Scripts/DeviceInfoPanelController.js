"use strict";
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