"use strict";
cc._RF.push(module, 'a4388XfuztOIr4Avum29QLK', 'TravelRewardController');
// Scripts/TravelRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TravelRewardView_1 = require("./view/TravelRewardView");
var TravelRewardController = /** @class */ (function (_super) {
    __extends(TravelRewardController, _super);
    function TravelRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TravelRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    TravelRewardController.prototype.initDependRes = function () { };
    TravelRewardController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    TravelRewardController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("viewDidShow", null != t ? t : this.args);
    };
    TravelRewardController = __decorate([
        mj.class("TravelRewardController")
    ], TravelRewardController);
    return TravelRewardController;
}(ViewController_1.default));
exports.default = TravelRewardController;

cc._RF.pop();