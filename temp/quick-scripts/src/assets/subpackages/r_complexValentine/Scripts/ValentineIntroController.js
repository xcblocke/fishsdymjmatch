"use strict";
cc._RF.push(module, '211eb2cU21FQof5SAlmh15d', 'ValentineIntroController');
// subpackages/r_complexValentine/Scripts/ValentineIntroController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ValentineIntroView_1 = require("./view/ValentineIntroView");
var ValentineIntroController = /** @class */ (function (_super) {
    __extends(ValentineIntroController, _super);
    function ValentineIntroController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ValentineIntroView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_complexValentine";
        return _this;
    }
    ValentineIntroController.prototype.getMessageListeners = function () {
        return {};
    };
    ValentineIntroController.prototype.initDependRes = function () { };
    ValentineIntroController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    ValentineIntroController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    __decorate([
        mj.traitEvent("VltnIntroCtl_initRes")
    ], ValentineIntroController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("VltnIntroCtl_viewDidLoad")
    ], ValentineIntroController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("VltnIntroCtl_viewDidShow")
    ], ValentineIntroController.prototype, "viewDidShow", null);
    ValentineIntroController = __decorate([
        mj.class("ValentineIntroController")
    ], ValentineIntroController);
    return ValentineIntroController;
}(ViewController_1.default));
exports.default = ValentineIntroController;

cc._RF.pop();