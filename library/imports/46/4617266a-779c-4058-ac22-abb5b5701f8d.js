"use strict";
cc._RF.push(module, '46172Zqd5xAWKwiq7W1cB+N', 'RankBoxController');
// subpackages/l_rank/Scripts/RankBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankBoxView_1 = require("./util/RankBoxView");
var RankBoxController = /** @class */ (function (_super) {
    __extends(RankBoxController, _super);
    function RankBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankBoxView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    RankBoxController.prototype.initDependRes = function () { };
    RankBoxController.prototype.getMessageListeners = function () {
        return {};
    };
    RankBoxController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    RankBoxController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    __decorate([
        mj.traitEvent("RankBoxCtrl_initRes")
    ], RankBoxController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("RankBoxCtrl_viewShow")
    ], RankBoxController.prototype, "viewDidShow", null);
    RankBoxController = __decorate([
        mj.class("RankBoxController")
    ], RankBoxController);
    return RankBoxController;
}(ViewController_1.default));
exports.default = RankBoxController;

cc._RF.pop();