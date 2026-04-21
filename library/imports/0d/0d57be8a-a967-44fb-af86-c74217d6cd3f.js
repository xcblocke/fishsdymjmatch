"use strict";
cc._RF.push(module, '0d57b6KqWdE+6+Gx0IX1s0/', 'NormalBoxController');
// subpackages/l_boxReward/Scripts/NormalBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var BoxOpenUI_1 = require("./BoxOpenUI");
var NormalBoxController = /** @class */ (function (_super) {
    __extends(NormalBoxController, _super);
    function NormalBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = BoxOpenUI_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "mainRes";
        return _this;
    }
    NormalBoxController.prototype.initDependRes = function () { };
    NormalBoxController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("showBoxOpenUI", null != e ? e : this.args);
    };
    NormalBoxController = __decorate([
        mj.class("NormalBoxController")
    ], NormalBoxController);
    return NormalBoxController;
}(ViewController_1.default));
exports.default = NormalBoxController;

cc._RF.pop();