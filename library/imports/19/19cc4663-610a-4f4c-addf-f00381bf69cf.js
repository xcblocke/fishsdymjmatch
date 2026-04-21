"use strict";
cc._RF.push(module, '19cc4ZjYQpPTK3f8AOBv2nP', 'AutoShuffleTipsController');
// subpackages/r_dieAutoShuffle/Scripts/AutoShuffleTipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AutoShuffleTipsView_1 = require("./AutoShuffleTipsView");
var AutoShuffleTipsController = /** @class */ (function (_super) {
    __extends(AutoShuffleTipsController, _super);
    function AutoShuffleTipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AutoShuffleTipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    AutoShuffleTipsController.prototype.getMessageListeners = function () {
        return {};
    };
    AutoShuffleTipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("show");
    };
    AutoShuffleTipsController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        this.viewDoAction("show");
    };
    AutoShuffleTipsController = __decorate([
        mj.class("AutoShuffleTipsController")
    ], AutoShuffleTipsController);
    return AutoShuffleTipsController;
}(ViewController_1.default));
exports.default = AutoShuffleTipsController;

cc._RF.pop();