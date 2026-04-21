"use strict";
cc._RF.push(module, '4b0b4sIHCBAMLgBzzkyHnJZ', 'UILanguageSelectorController');
// subpackages/l_languageSelector/Scripts/UILanguageSelectorController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var UILanguageSelector_1 = require("./UILanguageSelector");
var UILanguageSelectorController = /** @class */ (function (_super) {
    __extends(UILanguageSelectorController, _super);
    function UILanguageSelectorController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = UILanguageSelector_1.UILanguageSelector;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    UILanguageSelectorController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    UILanguageSelectorController.prototype.onUIDestroy = function () {
        _super.prototype.onUIDestroy.call(this);
    };
    __decorate([
        mj.traitEvent("UILangSelCtrl_UIDestroy")
    ], UILanguageSelectorController.prototype, "onUIDestroy", null);
    UILanguageSelectorController = __decorate([
        mj.class("UILanguageSelectorController")
    ], UILanguageSelectorController);
    return UILanguageSelectorController;
}(ViewController_1.default));
exports.default = UILanguageSelectorController;

cc._RF.pop();