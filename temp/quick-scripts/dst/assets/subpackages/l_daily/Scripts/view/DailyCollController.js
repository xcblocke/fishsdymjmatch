
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/view/DailyCollController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvdmlldy9EYWlseUNvbGxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRkFBbUc7QUFDbkcsK0VBQThFO0FBQzlFLHVFQUF5RjtBQUN6Rix1RUFBdUY7QUFDdkYsNENBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1Qyx3REFBbUQ7QUFFbkQ7SUFBaUQsdUNBQWM7SUFBL0Q7UUFBQSxxRUF3REM7UUF2REMsZUFBUyxHQUFHLDBCQUFnQixDQUFDO1FBQzdCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQXFEaEIsQ0FBQztJQXBEQyxpREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCx5Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLCtCQUFlLENBQUMsR0FBRyxDQUFDLDZCQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsR0FBRyx3QkFBVyxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDLElBQUkscUJBQVMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxDQUFDLElBQUksd0JBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDLElBQUksd0JBQVcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsd0JBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCx1Q0FBUyxHQUFUO1FBQ0UsK0JBQWUsQ0FBQyxRQUFRLENBQUMsK0JBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsOENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxrREFBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxLQUFLLHdCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDL0csQ0FBQztJQUNELDhDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFDRCxnREFBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsNENBQWMsR0FBZCxVQUFlLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCw0Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsdUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksK0JBQWUsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFwQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDOzBEQU94QztJQXpCa0IsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0F3RHZDO0lBQUQsMEJBQUM7Q0F4REQsQUF3REMsQ0F4RGdELHdCQUFjLEdBd0Q5RDtrQkF4RG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQmFkZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYWRnZS9tb2RlL0JhZGdlTW9kZSc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVEYWlseUNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgRGFpbHlNb2RlbCBmcm9tICcuLi9EYWlseU1vZGVsJztcbmltcG9ydCB7IERpc3BsYXlUeXBlIH0gZnJvbSAnLi4vRGFpbHlUeXBlcyc7XG5pbXBvcnQgRGFpbHlDb2xsZWN0VmlldyBmcm9tICcuLi9EYWlseUNvbGxlY3RWaWV3JztcbkBtai5jbGFzcyhcIkRhaWx5Q29sbENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5Q29sbENvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IERhaWx5Q29sbGVjdFZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuU0NFTkU7XG4gIF9tb2RlbCA9IG51bGw7XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbW9kZWwgPSBEYWlseU1vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgdmlld0RpZFNob3coKSB7XG4gICAgdmFyIGU7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzKTtcbiAgICB2YXIgaSA9IHRoaXMuZ2V0T3BlblR5cGUobnVsbCA9PT0gKGUgPSB0aGlzLmFyZ3MpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUudHlwZSk7XG4gICAgdGhpcy5zZXRDdXJyZW50VHlwZShpKTtcbiAgICBEb3RHYW1lUGFnZVNob3cuZG90KEVQYWdlU2hvd1R5cGUuRXhoaWJpdGlvbkhhbGxQYWdlKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRhaWx5Q29sbEN0cmxfZ2V0T3BUeXBlXCIpXG4gIGdldE9wZW5UeXBlKHQpIHtcbiAgICB2YXIgZSA9IERpc3BsYXlUeXBlLkRhaWx5O1xuICAgIHQgPT0gQmFkZ2VUeXBlLkpvdXJuZXkgJiYgKGUgPSBEaXNwbGF5VHlwZS5Kb3VybmV5KTtcbiAgICB0ID09IERpc3BsYXlUeXBlLkpvdXJuZXkgJiYgKGUgPSBEaXNwbGF5VHlwZS5Kb3VybmV5KTtcbiAgICB0ID09IERpc3BsYXlUeXBlLkRhaWx5ICYmIChlID0gRGlzcGxheVR5cGUuRGFpbHkpO1xuICAgIHJldHVybiBlO1xuICB9XG4gIHJlZnJlc2hVSSgpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90RGFpbHkoRURhaWx5Q2xpY2tUeXBlLkNvbGxlY3QpO1xuICAgIHRoaXMuY2hlY2tUYWJEYXRhTGlzdCgpO1xuICB9XG4gIGNoZWNrVGFiRGF0YUxpc3QoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmJ1aWxkRGFpbHlSZXdhcmREYXRhKCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJ1cGRhdGVUYWJCdXR0b25TdGF0ZVwiLCB0aGlzLl9tb2RlbC5jdXJyZW50VHlwZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93RGF0YUxpc3RcIiwgdCk7XG4gIH1cbiAgYnVpbGREYWlseVJld2FyZERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsLmN1cnJlbnRUeXBlID09PSBEaXNwbGF5VHlwZS5Kb3VybmV5ID8gdGhpcy5nZXRKb3VybmV5RGF0YUxpc3QoKSA6IHRoaXMuZ2V0RGFpbHlEYXRhTGlzdCgpO1xuICB9XG4gIGdldERhaWx5RGF0YUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsLmdldERhaWx5RGF0YUxpc3QoKTtcbiAgfVxuICBnZXRKb3VybmV5RGF0YUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21vZGVsLmdldEpvdXJuZXlEYXRhTGlzdCgpO1xuICB9XG4gIHNldEN1cnJlbnRUeXBlKHQpIHtcbiAgICB0aGlzLl9tb2RlbC5jdXJyZW50VHlwZSA9IHQ7XG4gICAgdGhpcy5yZWZyZXNoVUkoKTtcbiAgfVxuICBnZXRDdXJyZW50VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWwuY3VycmVudFR5cGU7XG4gIH1cbiAgY2xvc2VWaWV3KCkge1xuICAgIHZhciB0O1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICAzID09IChudWxsID09PSAodCA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5lbnRlclR5cGUpICYmIERvdEdhbWVQYWdlU2hvdy5kb3QoRVBhZ2VTaG93VHlwZS5FeGhpYml0aW9uSGFsbFRvTWFpblBhZ2UpO1xuICB9XG59Il19