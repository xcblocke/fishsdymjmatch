
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0129HvttFC5KCoaFmn5g3A', 'AgeSurveyController');
// subpackages/r_ageSurvey/Scripts/AgeSurveyController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var AgeSurveyView_1 = require("./AgeSurveyView");
var AgeSurveyModel_1 = require("./AgeSurveyModel");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var AgeSurveyController = /** @class */ (function (_super) {
    __extends(AgeSurveyController, _super);
    function AgeSurveyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AgeSurveyView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this.bundleName = "r_ageSurvey";
        return _this;
    }
    AgeSurveyController.prototype.getMessageListeners = function () {
        return {};
    };
    AgeSurveyController.prototype.getArgs = function () {
        return this.args;
    };
    AgeSurveyController.prototype.initDependRes = function () { };
    AgeSurveyController.prototype.viewDidLoad = function () {
        var e;
        _super.prototype.viewDidLoad.call(this);
        var r = this.getArgs(), o = false !== (null == r ? void 0 : r.shuffle), i = null !== (e = null == r ? void 0 : r.autoCloseTime) && void 0 !== e ? e : 0;
        this.viewDoAction("initData", (null == r ? void 0 : r.ageRanges) || [], o, null == r ? void 0 : r.descI18nId, i);
        this.reportShow();
    };
    AgeSurveyController.prototype.onAgeSelected = function (t) {
        var e, r = this.getArgs(), o = null !== (e = null == r ? void 0 : r.surveyIndex) && void 0 !== e ? e : 0, i = AgeSurveyModel_1.default.getInstance();
        i.setSelectedAge(o, t);
        i.setCompleted(o, true);
        this.reportAgeSelect(t);
        if (null == r ? void 0 : r.rewardConfig) {
            this.showRewardView();
        }
        else {
            this.closeAndCallback();
        }
    };
    AgeSurveyController.prototype.onCloseClick = function () {
        var t, e = this.getArgs(), r = null !== (t = null == e ? void 0 : e.surveyIndex) && void 0 !== t ? t : 0;
        AgeSurveyModel_1.default.getInstance().setClosed(r, true);
        this.reportClose();
        this.closeAndCallback();
    };
    AgeSurveyController.prototype.showRewardView = function () {
        var t, e = this.getArgs(), r = null == e ? void 0 : e.onClose;
        this.close();
        ControllerManager_1.default.getInstance().pushViewByController("AgeSurveyRewardController", {
            rewardConfig: null == e ? void 0 : e.rewardConfig,
            surveyIndex: null !== (t = null == e ? void 0 : e.surveyIndex) && void 0 !== t ? t : 0,
            onClose: r
        });
    };
    AgeSurveyController.prototype.closeAndCallback = function () {
        var t = this.getArgs(), e = null == t ? void 0 : t.onClose;
        this.close();
        null == e || e();
    };
    AgeSurveyController.prototype.reportShow = function () {
        var t, e, r = null !== (e = null === (t = this.getArgs()) || void 0 === t ? void 0 : t.surveyIndex) && void 0 !== e ? e : 0;
        DGameBtnClick_1.DotGameBtnClick.dotAgeSurveyShow(r);
        var o = 0 === r ? DGamePageShow_1.EPageShowType.AgeSurveyPage1 : DGamePageShow_1.EPageShowType.AgeSurveyPage2;
        DGamePageShow_1.DotGamePageShow.dot(o);
    };
    AgeSurveyController.prototype.reportAgeSelect = function (t) {
        var e, r, o = null !== (r = null === (e = this.getArgs()) || void 0 === e ? void 0 : e.surveyIndex) && void 0 !== r ? r : 0;
        DGameBtnClick_1.DotGameBtnClick.dotAgeSelect(o, t);
    };
    AgeSurveyController.prototype.reportClose = function () {
        var t, e, r = null !== (e = null === (t = this.getArgs()) || void 0 === t ? void 0 : t.surveyIndex) && void 0 !== e ? e : 0;
        DGameBtnClick_1.DotGameBtnClick.dotAgeSurveyClose(r);
    };
    __decorate([
        mj.traitEvent("AgeSurveyCtl_viewDidLoad")
    ], AgeSurveyController.prototype, "viewDidLoad", null);
    AgeSurveyController = __decorate([
        mj.class("AgeSurveyController")
    ], AgeSurveyController);
    return AgeSurveyController;
}(ViewController_1.default));
exports.default = AgeSurveyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUFnRztBQUNoRywwRkFBcUY7QUFDckYsaURBQTRDO0FBQzVDLG1EQUE4QztBQUM5QyxvRUFBcUU7QUFDckUsb0VBQW9GO0FBRXBGO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBZ0ZDO1FBL0VDLGVBQVMsR0FBRyx1QkFBYSxDQUFDO1FBQzFCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLGFBQWEsQ0FBQzs7SUE2RTdCLENBQUM7SUE1RUMsaURBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QscUNBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsMkNBQWEsR0FBYixjQUFpQixDQUFDO0lBRWxCLHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNwQixDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFDOUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYs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S0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEgsK0JBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCx5Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BILCtCQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQW5FRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7MERBU3pDO0lBcEJrQixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQWdGdkM7SUFBRCwwQkFBQztDQWhGRCxBQWdGQyxDQWhGZ0Qsd0JBQWMsR0FnRjlEO2tCQWhGb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgQWdlU3VydmV5VmlldyBmcm9tICcuL0FnZVN1cnZleVZpZXcnO1xuaW1wb3J0IEFnZVN1cnZleU1vZGVsIGZyb20gJy4vQWdlU3VydmV5TW9kZWwnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFUGFnZVNob3dUeXBlLCBEb3RHYW1lUGFnZVNob3cgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZVBhZ2VTaG93JztcbkBtai5jbGFzcyhcIkFnZVN1cnZleUNvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFnZVN1cnZleUNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IEFnZVN1cnZleVZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIGJ1bmRsZU5hbWUgPSBcInJfYWdlU3VydmV5XCI7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGdldEFyZ3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJncztcbiAgfVxuICBpbml0RGVwZW5kUmVzKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTdXJ2ZXlDdGxfdmlld0RpZExvYWRcIilcbiAgdmlld0RpZExvYWQoKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgciA9IHRoaXMuZ2V0QXJncygpLFxuICAgICAgbyA9IGZhbHNlICE9PSAobnVsbCA9PSByID8gdm9pZCAwIDogci5zaHVmZmxlKSxcbiAgICAgIGkgPSBudWxsICE9PSAoZSA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuYXV0b0Nsb3NlVGltZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDA7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJpbml0RGF0YVwiLCAobnVsbCA9PSByID8gdm9pZCAwIDogci5hZ2VSYW5nZXMpIHx8IFtdLCBvLCBudWxsID09IHIgPyB2b2lkIDAgOiByLmRlc2NJMThuSWQsIGkpO1xuICAgIHRoaXMucmVwb3J0U2hvdygpO1xuICB9XG4gIG9uQWdlU2VsZWN0ZWQodCkge1xuICAgIHZhciBlLFxuICAgICAgciA9IHRoaXMuZ2V0QXJncygpLFxuICAgICAgbyA9IG51bGwgIT09IChlID0gbnVsbCA9PSByID8gdm9pZCAwIDogci5zdXJ2ZXlJbmRleCkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDAsXG4gICAgICBpID0gQWdlU3VydmV5TW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgICBpLnNldFNlbGVjdGVkQWdlKG8sIHQpO1xuICAgIGkuc2V0Q29tcGxldGVkKG8sIHRydWUpO1xuICAgIHRoaXMucmVwb3J0QWdlU2VsZWN0KHQpO1xuICAgIGlmIChudWxsID09IHIgPyB2b2lkIDAgOiByLnJld2FyZENvbmZpZykge1xuICAgICAgdGhpcy5zaG93UmV3YXJkVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlQW5kQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbiAgb25DbG9zZUNsaWNrKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuZ2V0QXJncygpLFxuICAgICAgciA9IG51bGwgIT09ICh0ID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZS5zdXJ2ZXlJbmRleCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDA7XG4gICAgQWdlU3VydmV5TW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRDbG9zZWQociwgdHJ1ZSk7XG4gICAgdGhpcy5yZXBvcnRDbG9zZSgpO1xuICAgIHRoaXMuY2xvc2VBbmRDYWxsYmFjaygpO1xuICB9XG4gIHNob3dSZXdhcmRWaWV3KCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuZ2V0QXJncygpLFxuICAgICAgciA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUub25DbG9zZTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkFnZVN1cnZleVJld2FyZENvbnRyb2xsZXJcIiwge1xuICAgICAgcmV3YXJkQ29uZmlnOiBudWxsID09IGUgPyB2b2lkIDAgOiBlLnJld2FyZENvbmZpZyxcbiAgICAgIHN1cnZleUluZGV4OiBudWxsICE9PSAodCA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGUuc3VydmV5SW5kZXgpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwLFxuICAgICAgb25DbG9zZTogclxuICAgIH0pO1xuICB9XG4gIGNsb3NlQW5kQ2FsbGJhY2soKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEFyZ3MoKSxcbiAgICAgIGUgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0Lm9uQ2xvc2U7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbiAgcmVwb3J0U2hvdygpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICByID0gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuZ2V0QXJncygpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnN1cnZleUluZGV4KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMDtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90QWdlU3VydmV5U2hvdyhyKTtcbiAgICB2YXIgbyA9IDAgPT09IHIgPyBFUGFnZVNob3dUeXBlLkFnZVN1cnZleVBhZ2UxIDogRVBhZ2VTaG93VHlwZS5BZ2VTdXJ2ZXlQYWdlMjtcbiAgICBEb3RHYW1lUGFnZVNob3cuZG90KG8pO1xuICB9XG4gIHJlcG9ydEFnZVNlbGVjdCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgbyA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLmdldEFyZ3MoKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5zdXJ2ZXlJbmRleCkgJiYgdm9pZCAwICE9PSByID8gciA6IDA7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEFnZVNlbGVjdChvLCB0KTtcbiAgfVxuICByZXBvcnRDbG9zZSgpIHtcbiAgICB2YXIgdCxcbiAgICAgIGUsXG4gICAgICByID0gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuZ2V0QXJncygpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnN1cnZleUluZGV4KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMDtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90QWdlU3VydmV5Q2xvc2Uocik7XG4gIH1cbn0iXX0=