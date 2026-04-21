
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageSelectorController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlU2VsZWN0b3JDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsMkRBQTBEO0FBRTFEO0lBQTBELGdEQUFjO0lBQXhFO1FBQUEscUVBVUM7UUFUQyxlQUFTLEdBQUcsdUNBQWtCLENBQUM7UUFDL0IsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQVE1QixDQUFDO0lBUEMsa0RBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGtEQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFGRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7bUVBR3hDO0lBVGtCLDRCQUE0QjtRQURoRCxFQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO09BQ3BCLDRCQUE0QixDQVVoRDtJQUFELG1DQUFDO0NBVkQsQUFVQyxDQVZ5RCx3QkFBYyxHQVV2RTtrQkFWb0IsNEJBQTRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgeyBVSUxhbmd1YWdlU2VsZWN0b3IgfSBmcm9tICcuL1VJTGFuZ3VhZ2VTZWxlY3Rvcic7XG5AbWouY2xhc3MoXCJVSUxhbmd1YWdlU2VsZWN0b3JDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUxhbmd1YWdlU2VsZWN0b3JDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBVSUxhbmd1YWdlU2VsZWN0b3I7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJVSUxhbmdTZWxDdHJsX1VJRGVzdHJveVwiKVxuICBvblVJRGVzdHJveSgpIHtcbiAgICBzdXBlci5vblVJRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19