"use strict";
cc._RF.push(module, '38330aptAZNWZiwdHg4/ak/', 'ValentineActivateController');
// subpackages/r_complexValentine/Scripts/ValentineActivateController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ValentineModel_1 = require("./model/ValentineModel");
var ValentineActivateView_1 = require("./view/ValentineActivateView");
var ValentineActivateController = /** @class */ (function (_super) {
    __extends(ValentineActivateController, _super);
    function ValentineActivateController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ValentineActivateView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_complexValentine";
        return _this;
    }
    ValentineActivateController.prototype.getMessageListeners = function () {
        return {};
    };
    ValentineActivateController.prototype.initDependRes = function () { };
    ValentineActivateController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    ValentineActivateController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    ValentineActivateController.prototype.close = function () {
        _super.prototype.close.call(this);
        this.dispatchEvent(ValentineModel_1.ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW);
    };
    __decorate([
        mj.traitEvent("VltnActCtl_initRes")
    ], ValentineActivateController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("VltnActCtl_viewDidLoad")
    ], ValentineActivateController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("VltnActCtl_viewDidShow")
    ], ValentineActivateController.prototype, "viewDidShow", null);
    ValentineActivateController = __decorate([
        mj.class("ValentineActivateController")
    ], ValentineActivateController);
    return ValentineActivateController;
}(ViewController_1.default));
exports.default = ValentineActivateController;

cc._RF.pop();