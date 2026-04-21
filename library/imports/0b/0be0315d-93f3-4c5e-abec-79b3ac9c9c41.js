"use strict";
cc._RF.push(module, '0be03Fdk/NMXqvsebOsnJxB', 'WinStreakRewardController');
// subpackages/l_winStreakReward/Scripts/WinStreakRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var WinStreakRewardView_1 = require("./WinStreakRewardView");
var WinStreakRewardController = /** @class */ (function (_super) {
    __extends(WinStreakRewardController, _super);
    function WinStreakRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = WinStreakRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "mainRes";
        return _this;
    }
    WinStreakRewardController.prototype.initDependRes = function () { };
    WinStreakRewardController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("showReward", null != e ? e : this.args);
    };
    WinStreakRewardController = __decorate([
        mj.class("WinStreakRewardController")
    ], WinStreakRewardController);
    return WinStreakRewardController;
}(ViewController_1.default));
exports.default = WinStreakRewardController;

cc._RF.pop();