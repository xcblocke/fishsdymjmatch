"use strict";
cc._RF.push(module, 'c073aISaDtIdoaF2p9CPy0i', 'Tile2WinController');
// Scripts/Tile2WinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var Tile2WinView_1 = require("./view/Tile2WinView");
var Tile2WinController = /** @class */ (function (_super) {
    __extends(Tile2WinController, _super);
    function Tile2WinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2WinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    Tile2WinController.prototype.initDependRes = function () { };
    Tile2WinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    Tile2WinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    Tile2WinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    Tile2WinController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    __decorate([
        mj.traitEvent("Tile2WinCtrl_initRes")
    ], Tile2WinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("Tile2WinCtrl_viewShow")
    ], Tile2WinController.prototype, "viewDidShow", null);
    Tile2WinController = __decorate([
        mj.class("Tile2WinController")
    ], Tile2WinController);
    return Tile2WinController;
}(ViewController_1.default));
exports.default = Tile2WinController;

cc._RF.pop();