"use strict";
cc._RF.push(module, '613f2fC2rdGPp//CnaiYr1V', 'ClassicReviveController');
// subpackages/l_classicRevive/Scripts/ClassicReviveController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicReviveView_1 = require("./ClassicReviveView");
var ClassicReviveController = /** @class */ (function (_super) {
    __extends(ClassicReviveController, _super);
    function ClassicReviveController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicReviveView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicRevive";
        return _this;
    }
    ClassicReviveController.prototype.viewDidShow = function (t) {
        t = null != t ? t : this.args;
        _super.prototype.viewDidShow.call(this, t);
    };
    ClassicReviveController.prototype.onUIDestroy = function () {
        _super.prototype.onUIDestroy.call(this);
    };
    ClassicReviveController = __decorate([
        mj.class("ClassicReviveController")
    ], ClassicReviveController);
    return ClassicReviveController;
}(ViewController_1.default));
exports.default = ClassicReviveController;

cc._RF.pop();