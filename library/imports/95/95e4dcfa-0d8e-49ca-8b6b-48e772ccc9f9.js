"use strict";
cc._RF.push(module, '95e4dz6DY5JyotrSOdyzMn5', 'ValentineEndController');
// subpackages/r_complexValentine/Scripts/ValentineEndController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ValentineEndView_1 = require("./view/ValentineEndView");
var ValentineEndController = /** @class */ (function (_super) {
    __extends(ValentineEndController, _super);
    function ValentineEndController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ValentineEndView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_complexValentine";
        return _this;
    }
    ValentineEndController.prototype.getMessageListeners = function () {
        return {};
    };
    ValentineEndController.prototype.initDependRes = function () { };
    ValentineEndController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    ValentineEndController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    __decorate([
        mj.traitEvent("VltnEndCtl_initRes")
    ], ValentineEndController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("VltnEndCtl_viewDidLoad")
    ], ValentineEndController.prototype, "viewDidLoad", null);
    __decorate([
        mj.traitEvent("VltnEndCtl_viewDidShow")
    ], ValentineEndController.prototype, "viewDidShow", null);
    ValentineEndController = __decorate([
        mj.class("ValentineEndController")
    ], ValentineEndController);
    return ValentineEndController;
}(ViewController_1.default));
exports.default = ValentineEndController;

cc._RF.pop();