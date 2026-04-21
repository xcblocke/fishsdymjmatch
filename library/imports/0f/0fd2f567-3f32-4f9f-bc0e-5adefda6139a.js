"use strict";
cc._RF.push(module, '0fd2fVnPzJPn7wOWt79phOa', 'DailyCollController');
// subpackages/l_daily/Scripts/view/DailyCollController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../../Scripts/framework/controller/ViewController");
var BadgeMode_1 = require("../../../../Scripts/gamePlay/badge/mode/BadgeMode");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../../Scripts/dot/DGamePageShow");
var DailyModel_1 = require("../DailyModel");
var DailyTypes_1 = require("../DailyTypes");
var DailyCollectView_1 = require("../DailyCollectView");
var DailyCollController = /** @class */ (function (_super) {
    __extends(DailyCollController, _super);
    function DailyCollController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyCollectView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this._model = null;
        return _this;
    }
    DailyCollController.prototype.getMessageListeners = function () {
        return {};
    };
    DailyCollController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = DailyModel_1.default.getInstance();
    };
    DailyCollController.prototype.viewDidShow = function () {
        var e;
        _super.prototype.viewDidShow.call(this);
        var i = this.getOpenType(null === (e = this.args) || void 0 === e ? void 0 : e.type);
        this.setCurrentType(i);
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.ExhibitionHallPage);
    };
    DailyCollController.prototype.getOpenType = function (t) {
        var e = DailyTypes_1.DisplayType.Daily;
        t == BadgeMode_1.BadgeType.Journey && (e = DailyTypes_1.DisplayType.Journey);
        t == DailyTypes_1.DisplayType.Journey && (e = DailyTypes_1.DisplayType.Journey);
        t == DailyTypes_1.DisplayType.Daily && (e = DailyTypes_1.DisplayType.Daily);
        return e;
    };
    DailyCollController.prototype.refreshUI = function () {
        DGameBtnClick_1.DotGameBtnClick.dotDaily(DGameBtnClick_1.EDailyClickType.Collect);
        this.checkTabDataList();
    };
    DailyCollController.prototype.checkTabDataList = function () {
        var t = this.buildDailyRewardData();
        this.viewDoAction("updateTabButtonState", this._model.currentType);
        this.viewDoAction("showDataList", t);
    };
    DailyCollController.prototype.buildDailyRewardData = function () {
        return this._model.currentType === DailyTypes_1.DisplayType.Journey ? this.getJourneyDataList() : this.getDailyDataList();
    };
    DailyCollController.prototype.getDailyDataList = function () {
        return this._model.getDailyDataList();
    };
    DailyCollController.prototype.getJourneyDataList = function () {
        return this._model.getJourneyDataList();
    };
    DailyCollController.prototype.setCurrentType = function (t) {
        this._model.currentType = t;
        this.refreshUI();
    };
    DailyCollController.prototype.getCurrentType = function () {
        return this._model.currentType;
    };
    DailyCollController.prototype.closeView = function () {
        var t;
        this.close();
        3 == (null === (t = this.args) || void 0 === t ? void 0 : t.enterType) && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.ExhibitionHallToMainPage);
    };
    __decorate([
        mj.traitEvent("DailyCollCtrl_getOpType")
    ], DailyCollController.prototype, "getOpenType", null);
    DailyCollController = __decorate([
        mj.class("DailyCollController")
    ], DailyCollController);
    return DailyCollController;
}(ViewController_1.default));
exports.default = DailyCollController;

cc._RF.pop();