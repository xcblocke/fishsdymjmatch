"use strict";
cc._RF.push(module, 'aaa376CSmpKZ6OMxmULgcd+', 'TravelBoxController');
// Scripts/TravelBoxController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelBoxView_1 = require("./view/TravelBoxView");
var TravelBoxController = /** @class */ (function (_super) {
    __extends(TravelBoxController, _super);
    function TravelBoxController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelBoxView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelBoxController.prototype.initDependRes = function () { };
    TravelBoxController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelBoxController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", null != t ? t : this.args);
    };
    TravelBoxController = __decorate([
        mj.class("TravelBoxController")
    ], TravelBoxController);
    return TravelBoxController;
}(ViewController_1.default));
exports.default = TravelBoxController;

cc._RF.pop();