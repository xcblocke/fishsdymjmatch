"use strict";
cc._RF.push(module, '3e8f3xu9pRHcqtFKeTVQNwj', 'DailyRewardController');
// subpackages/l_daily/Scripts/view/DailyRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../../Scripts/framework/controller/ViewController");
var DailyModel_1 = require("../DailyModel");
var DailyRewardView_1 = require("./DailyRewardView");
var DailyRewardController = /** @class */ (function (_super) {
    __extends(DailyRewardController, _super);
    function DailyRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._model = null;
        return _this;
    }
    DailyRewardController.prototype.getMessageListeners = function () {
        return {};
    };
    DailyRewardController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = DailyModel_1.default.getInstance();
    };
    DailyRewardController.prototype.viewDidShow = function () {
        _super.prototype.viewDidShow.call(this);
        this.refreshUI();
    };
    DailyRewardController.prototype.refreshUI = function () {
        var t, e, i = (null === (t = this.args) || void 0 === t ? void 0 : t.itemId) || 0;
        null === (e = this.args) || void 0 === e || e.isGetReward;
        this.viewDoAction("show", i);
    };
    DailyRewardController = __decorate([
        mj.class("DailyRewardController")
    ], DailyRewardController);
    return DailyRewardController;
}(ViewController_1.default));
exports.default = DailyRewardController;

cc._RF.pop();