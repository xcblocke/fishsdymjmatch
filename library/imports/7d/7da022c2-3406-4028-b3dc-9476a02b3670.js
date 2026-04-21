"use strict";
cc._RF.push(module, '7da02LCNAZAKLPclHagKzZw', 'ClassicLoseController');
// subpackages/l_classicOver/Scripts/ClassicLoseController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicLoseView_1 = require("./ClassicLoseView");
var ClassicLoseController = /** @class */ (function (_super) {
    __extends(ClassicLoseController, _super);
    function ClassicLoseController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicLoseView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicOver";
        return _this;
    }
    ClassicLoseController.prototype.viewDidShow = function (t) {
        t = null != t ? t : this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showView", t.data);
    };
    ClassicLoseController = __decorate([
        mj.class("ClassicLoseController")
    ], ClassicLoseController);
    return ClassicLoseController;
}(ViewController_1.default));
exports.default = ClassicLoseController;

cc._RF.pop();