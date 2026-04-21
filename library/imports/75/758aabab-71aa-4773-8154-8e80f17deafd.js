"use strict";
cc._RF.push(module, '758aaurcapHc4FUjoDxfer9', 'ClassicWinController');
// subpackages/l_classicOver/Scripts/ClassicWinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicWinView_1 = require("./ClassicWinView");
var ClassicWinController = /** @class */ (function (_super) {
    __extends(ClassicWinController, _super);
    function ClassicWinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicWinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicOver";
        return _this;
    }
    ClassicWinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showView", t.data);
    };
    ClassicWinController = __decorate([
        mj.class("ClassicWinController")
    ], ClassicWinController);
    return ClassicWinController;
}(ViewController_1.default));
exports.default = ClassicWinController;

cc._RF.pop();