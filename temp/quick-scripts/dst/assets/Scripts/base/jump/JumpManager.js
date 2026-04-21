
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/jump/JumpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvanVtcC9KdW1wTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQTBFO0FBQzFFLCtFQUEwRTtBQUMxRSw2RUFBeUU7QUFDekUseURBQXlFO0FBQ3pFLCtFQUEwRTtBQUMxRSx1Q0FBMkM7QUFDM0M7SUFBQTtJQXFFQSxDQUFDO0lBcEVRLHVCQUFXLEdBQWxCO1FBQ0UsT0FBTyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDBCQUFJLEdBQUosY0FBUSxDQUFDO0lBRVQsc0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ25FLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMENBQW9CLEdBQXBCLFVBQXFCLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUU7WUFDckUsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0s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QUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztxREFPbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7Z0RBR2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO3NEQUdwQztJQUNILGtCQUFDO0NBckVELEFBcUVDLElBQUE7a0JBckVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25GYWN0b3J5JztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBEb3RHYW1lUGFnZVNob3csIEVQYWdlU2hvd1R5cGUgfSBmcm9tICcuLi8uLi9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgVHJhdmVsR2FtZU1vZGVsIGZyb20gJy4uLy4uL2dhbWVQbGF5L3RyYXZlbC9tb2RlbC9UcmF2ZWxHYW1lTW9kZWwnO1xuaW1wb3J0IHsgSElERUxPQURJTkcgfSBmcm9tICcuLi8uLi9Db25maWcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVtcE1hbmFnZXIge1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIFNpbmdsZXRvbkZhY3RvcnkuZ2V0SW5zdGFuY2UodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKdW1wTWdyX2luaXRcIilcbiAgaW5pdCgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiSnVtcE1ncl9qdW1wVHJhdmVsR21cIilcbiAganVtcFRvVHJhdmVsR2FtZShlLCB0KSB7XG4gICAgaWYgKCFUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc1Nlc3Npb25BY3RpdmUoKSkgcmV0dXJuIGZhbHNlO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUcmF2ZWxHYW1lQ29udHJvbGxlclwiLCBlIHx8IHt9LCB0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkp1bXBNZ3JfanVtcERhaWx5XCIpXG4gIGp1bXBUb0RhaWx5Q2hhbGxlbmdlKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkhhbGxDb250cm9sbGVyXCIsIHtcbiAgICAgIGlzUmVwbGFjZTogdHJ1ZSxcbiAgICAgIGlzUmV1c2U6IHRydWVcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChISURFTE9BRElORywgdCk7XG4gICAgICB2YXIgbyA9IChudWxsID09IGUgPyB2b2lkIDAgOiBlLnRpbWVTdGFtcCkgfHwgbmV3IERhdGUoKS5mb3JtYXQoXCJZWVlZLW1tLWRkXCIpO1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5Q29udHJvbGxlclwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZSxcbiAgICAgICAgaXNSZXVzZTogZmFsc2UsXG4gICAgICAgIHRpbWVTdGFtcDogb1xuICAgICAgfSwgZSkpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSnVtcE1ncl9qdW1wSGFsbFwiKVxuICBqdW1wVG9IYWxsKGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiSGFsbENvbnRyb2xsZXJcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBpc1JlcGxhY2U6IHRydWUsXG4gICAgICBpc1JldXNlOiB0cnVlXG4gICAgfSwgZSkpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSnVtcE1ncl9qdW1wR2FtZVwiKVxuICBqdW1wVG9HYW1lKGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiTWFpbkdhbWVDb250cm9sbGVyXCIsIGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSnVtcE1ncl9qdW1wVHJhdmVsXCIpXG4gIGp1bXBUb1RyYXZlbE1hcChlKSB7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRyYXZlbE1hcENvbnRyb2xsZXJcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBpc1JlcGxhY2U6IHRydWVcbiAgICB9LCBlKSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKdW1wTWdyX3BvcFZpZXdcIilcbiAgcG9wVmlldygpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBvcFZpZXcoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkp1bXBNZ3JfcG9wVG9cIilcbiAgcG9wVG9Db250cm9sbGVyKGUsIHQpIHtcbiAgICByZXR1cm4gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wb3BUb1RhcmdldFZpZXdCeU5hbWUoZSwgdCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJKdW1wTWdyX2JhY2tCeVR5cGVcIilcbiAgYmFja0J5R2FtZVR5cGUoZSkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0VG9wU2NlbmVDb250cm9sbGVyKCk7XG4gICAgaWYgKGUgPT09IE1qR2FtZVR5cGUuVHJhdmVsKSB0aGlzLmp1bXBUb1RyYXZlbE1hcCgpO2Vsc2UgaWYgKGUgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UpIHRoaXMuanVtcFRvRGFpbHlDaGFsbGVuZ2UoKTtlbHNlIHtcbiAgICAgIHRoaXMuanVtcFRvSGFsbCgpO1xuICAgICAgZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwgJiYgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkxldmVsVG9NYWluUGFnZSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSnVtcE1ncl9jbG9zZVZpZXdcIilcbiAgY2xvc2VWaWV3KGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlVmlldyhlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkp1bXBNZ3JfY2xvc2VCeU5hbWVcIilcbiAgY2xvc2VWaWV3QnlOYW1lKGUpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNsb3NlVmlld0J5TmFtZShlKTtcbiAgfVxufSJdfQ==