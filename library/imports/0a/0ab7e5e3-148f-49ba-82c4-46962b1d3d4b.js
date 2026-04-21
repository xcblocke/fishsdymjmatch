"use strict";
cc._RF.push(module, '0ab7eXjFI9JuoLERpYrHT1L', 'TravelActiveController');
// Scripts/TravelActiveController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelActiveView_1 = require("./view/TravelActiveView");
var TravelActiveController = /** @class */ (function (_super) {
    __extends(TravelActiveController, _super);
    function TravelActiveController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelActiveView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelActiveController.prototype.initDependRes = function () { };
    TravelActiveController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelActiveController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", null != t ? t : this.args);
    };
    TravelActiveController = __decorate([
        mj.class("TravelActiveController")
    ], TravelActiveController);
    return TravelActiveController;
}(ViewController_1.default));
exports.default = TravelActiveController;

cc._RF.pop();