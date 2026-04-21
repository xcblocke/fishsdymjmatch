"use strict";
cc._RF.push(module, 'f8437IgeatCL48i7NvBPAuc', 'Tile2FailController');
// Scripts/Tile2FailController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var Tile2FailView_1 = require("./view/Tile2FailView");
var Tile2FailController = /** @class */ (function (_super) {
    __extends(Tile2FailController, _super);
    function Tile2FailController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2FailView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    Tile2FailController.prototype.getMessageListeners = function () {
        return {};
    };
    Tile2FailController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("show", this.args);
    };
    Tile2FailController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        this.viewDoAction("show", t);
    };
    Tile2FailController = __decorate([
        mj.class("Tile2FailController")
    ], Tile2FailController);
    return Tile2FailController;
}(ViewController_1.default));
exports.default = Tile2FailController;

cc._RF.pop();