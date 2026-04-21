"use strict";
cc._RF.push(module, '3b108a9j6dNApPe4te7XrNf', 'JumpManager');
// Scripts/base/jump/JumpManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../framework/utils/SingletonFactory");
var ControllerManager_1 = require("../../framework/manager/ControllerManager");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var DGamePageShow_1 = require("../../dot/DGamePageShow");
var TravelGameModel_1 = require("../../gamePlay/travel/model/TravelGameModel");
var Config_1 = require("../../Config");
var JumpManager = /** @class */ (function () {
    function JumpManager() {
    }
    JumpManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    JumpManager.prototype.init = function () { };
    JumpManager.prototype.jumpToTravelGame = function (e, t) {
        if (!TravelGameModel_1.default.getInstance().isSessionActive())
            return false;
        ControllerManager_1.default.getInstance().pushViewByController("TravelGameController", e || {}, t);
        return true;
    };
    JumpManager.prototype.jumpToDailyChallenge = function (e) {
        var t = this;
        ControllerManager_1.default.getInstance().pushViewByController("HallController", {
            isReplace: true,
            isReuse: true
        }, function () {
            mj.EventManager.emit(Config_1.HIDELOADING, t);
            var o = (null == e ? void 0 : e.timeStamp) || new Date().format("YYYY-mm-dd");
            ControllerManager_1.default.getInstance().pushViewByController("DailyController", Object.assign({
                isShowAction: false,
                isReuse: false,
                timeStamp: o
            }, e));
        });
    };
    JumpManager.prototype.jumpToHall = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("HallController", Object.assign({
            isReplace: true,
            isReuse: true
        }, e));
    };
    JumpManager.prototype.jumpToGame = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("MainGameController", e);
    };
    JumpManager.prototype.jumpToTravelMap = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", Object.assign({
            isReplace: true
        }, e));
    };
    JumpManager.prototype.popView = function () {
        ControllerManager_1.default.getInstance().popView();
    };
    JumpManager.prototype.popToController = function (e, t) {
        return ControllerManager_1.default.getInstance().popToTargetViewByName(e, t);
    };
    JumpManager.prototype.backByGameType = function (e) {
        ControllerManager_1.default.getInstance().getTopSceneController();
        if (e === GameTypeEnums_1.MjGameType.Travel)
            this.jumpToTravelMap();
        else if (e === GameTypeEnums_1.MjGameType.DailyChallenge)
            this.jumpToDailyChallenge();
        else {
            this.jumpToHall();
            e === GameTypeEnums_1.MjGameType.Normal && DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LevelToMainPage);
        }
    };
    JumpManager.prototype.closeView = function (e) {
        ControllerManager_1.default.getInstance().closeView(e);
    };
    JumpManager.prototype.closeViewByName = function (e) {
        ControllerManager_1.default.getInstance().closeViewByName(e);
    };
    __decorate([
        mj.traitEvent("JumpMgr_init")
    ], JumpManager.prototype, "init", null);
    __decorate([
        mj.traitEvent("JumpMgr_jumpTravelGm")
    ], JumpManager.prototype, "jumpToTravelGame", null);
    __decorate([
        mj.traitEvent("JumpMgr_jumpDaily")
    ], JumpManager.prototype, "jumpToDailyChallenge", null);
    __decorate([
        mj.traitEvent("JumpMgr_jumpHall")
    ], JumpManager.prototype, "jumpToHall", null);
    __decorate([
        mj.traitEvent("JumpMgr_jumpGame")
    ], JumpManager.prototype, "jumpToGame", null);
    __decorate([
        mj.traitEvent("JumpMgr_jumpTravel")
    ], JumpManager.prototype, "jumpToTravelMap", null);
    __decorate([
        mj.traitEvent("JumpMgr_popView")
    ], JumpManager.prototype, "popView", null);
    __decorate([
        mj.traitEvent("JumpMgr_popTo")
    ], JumpManager.prototype, "popToController", null);
    __decorate([
        mj.traitEvent("JumpMgr_backByType")
    ], JumpManager.prototype, "backByGameType", null);
    __decorate([
        mj.traitEvent("JumpMgr_closeView")
    ], JumpManager.prototype, "closeView", null);
    __decorate([
        mj.traitEvent("JumpMgr_closeByName")
    ], JumpManager.prototype, "closeViewByName", null);
    return JumpManager;
}());
exports.default = JumpManager;

cc._RF.pop();