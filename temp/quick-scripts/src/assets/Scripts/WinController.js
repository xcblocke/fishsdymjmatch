"use strict";
cc._RF.push(module, 'e135ek1vMJHPruuwJdJQbkd', 'WinController');
// Scripts/WinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var WinView_1 = require("./WinView");
var WinController = /** @class */ (function (_super) {
    __extends(WinController, _super);
    function WinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = WinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    WinController.prototype.initDependRes = function () { };
    WinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    WinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    WinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("WinCtrl_initRes")
    ], WinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("WinCtrl_viewShow")
    ], WinController.prototype, "viewDidShow", null);
    WinController = __decorate([
        mj.class("WinController")
    ], WinController);
    return WinController;
}(ViewController_1.default));
exports.default = WinController;

cc._RF.pop();