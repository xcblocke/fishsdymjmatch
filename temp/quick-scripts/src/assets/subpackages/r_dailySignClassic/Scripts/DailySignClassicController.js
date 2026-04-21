"use strict";
cc._RF.push(module, '49ca7D9dLxGOqpneL670w+/', 'DailySignClassicController');
// subpackages/r_dailySignClassic/Scripts/DailySignClassicController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var DailySignClassicView_1 = require("./view/DailySignClassicView");
var DailySignClassicController = /** @class */ (function (_super) {
    __extends(DailySignClassicController, _super);
    function DailySignClassicController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailySignClassicView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "r_dailySignClassic";
        return _this;
    }
    DailySignClassicController.prototype.initDependRes = function () { };
    DailySignClassicController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("viewDidLoad", this.args);
    };
    DailySignClassicController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("viewDidShow", null != e ? e : this.args);
    };
    DailySignClassicController = __decorate([
        mj.class("DailySignClassicController")
    ], DailySignClassicController);
    return DailySignClassicController;
}(ViewController_1.default));
exports.default = DailySignClassicController;

cc._RF.pop();