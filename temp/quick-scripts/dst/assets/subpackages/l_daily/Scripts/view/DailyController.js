
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/view/DailyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3b75S3XNpGIIaGGPv1d+Yz', 'DailyController');
// subpackages/l_daily/Scripts/view/DailyController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var ViewController_1 = require("../../../../Scripts/framework/controller/ViewController");
var DataReader_1 = require("../../../../Scripts/framework/data/DataReader");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var ConfigType_1 = require("../../../../Scripts/gamePlay/base/data/ConfigType");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../../Scripts/dot/DGamePageShow");
var DailyModel_1 = require("../DailyModel");
var DailyTypes_1 = require("../DailyTypes");
var DailyView_1 = require("../DailyView");
var DailyController = /** @class */ (function (_super) {
    __extends(DailyController, _super);
    function DailyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this._model = null;
        _this._currentDailyId = 0;
        _this._miniId = 1;
        _this._maxId = 1;
        _this._selectedDay = null;
        return _this;
    }
    DailyController.prototype.getMessageListeners = function () {
        var _t = {};
        _t[DailyTypes_1.DailyEvents.DAILY_DAY_ITEM_CLICK] = this.onDailyDayItemClickCB.bind(this);
        _t[DailyTypes_1.DailyEvents.DAILY_SHOW_REWARD_ITEM] = this.onDailyDayItemShowReward.bind(this);
        return _t;
    };
    DailyController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = DailyModel_1.default.getInstance();
    };
    DailyController.prototype.viewDidShow = function (e) {
        _super.prototype.viewDidShow.call(this, e);
        var i = this.args || {};
        this.initializeDate(i);
        this.refreshUI();
        if (i.success) {
            mj.audioManager.playBGM(GameTypeEnums_1.EAudioID.Bgm, true);
            mj.audioManager.fadeBGMIn();
        }
    };
    DailyController.prototype.initializeDate = function (t) {
        new Date();
        if (t.specifiedDate && t.id) {
            this._currentDailyId = t.id;
            var e = this._model.getMonthData(t.id);
            this._selectedDay = e.find(function (e) {
                return 1 === e.day && e.id === t.id;
            }) || e[0];
        }
        else {
            var i = this._model.getCurrentDay();
            if (i && !this._model.isFirstGame()) {
                this._selectedDay = i;
                this._currentDailyId = i.id;
            }
            else {
                var o = this._model.getToday();
                this._currentDailyId = o.id;
                e = this._model.getMonthData(o.id);
                this._selectedDay = e.find(function (t) {
                    return t.day === o.day && t.id === o.id;
                }) || e[0];
            }
        }
        var n = this._model.getLastAvailableDay(this._currentDailyId);
        n && (this._model.isFirstGame() || t.showReward) && (this._selectedDay = n);
        this._model.setCurrentDay(this._selectedDay);
        this._model.setIsFirstGame(false);
        var a = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge);
        this._miniId = a[0].ID;
        this._maxId = a[a.length - 1].ID;
    };
    DailyController.prototype.refreshUI = function () {
        var t = this.buildAllMonthsData();
        this._maxId = t[t.length - 1].id;
        this.viewDoAction("showView");
        this.viewDoAction("showMonthList", t);
        this.viewDoAction("scrollToMonth", this._currentDailyId, false);
        this.updateRewardIcon();
        this.updateButtonState();
        this.updateMonthNavButtons();
    };
    DailyController.prototype.buildAllMonthsData = function () {
        var t, e, i = [], o = DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge), n = new Date(), a = n.getFullYear(), r = n.getMonth() + 1;
        try {
            for (var s = __values(o), d = s.next(); !d.done; d = s.next()) {
                var h = d.value;
                if (!(h.Year > a || h.Year === a && h.Month > r)) {
                    var y = this.buildMonthCellData(h.ID);
                    i.push(y);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                d && !d.done && (e = s.return) && e.call(s);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return i;
    };
    DailyController.prototype.buildMonthCellData = function (t) {
        var e = this, i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, t);
        if (!i)
            return null;
        for (var o = this._model.getMonthData(i.ID), n = this._model.getMonthStartBlankDays(i.Year, i.Month), a = [], l = 0; l < n; l++)
            a.push({
                id: 0,
                day: 0,
                status: DailyTypes_1.DailyStatus.Unopened,
                selected: false,
                timestamp: 0
            });
        o.forEach(function (t) {
            var i;
            a.push({
                id: t.id,
                day: t.day,
                status: t.status,
                selected: (null === (i = e._selectedDay) || void 0 === i ? void 0 : i.day) === t.day,
                timestamp: t.timestamp
            });
        });
        return {
            id: t,
            days: a
        };
    };
    DailyController.prototype.updateRewardIcon = function () {
        var t = this._model.isMonthCompleted(this._currentDailyId), e = this._model.getMonthRewardItemId(this._currentDailyId);
        this.viewDoAction("updateReward", {
            rewardId: e,
            completed: t
        });
    };
    DailyController.prototype.getRewardIconData = function (t) {
        var e = this._model.isMonthCompleted(t);
        return {
            rewardId: this._model.getMonthRewardItemId(t),
            completed: e
        };
    };
    DailyController.prototype.updateRewardForMonth = function (t) {
        this._currentDailyId = t;
        this.updateRewardIcon();
        this.updateMonthNavButtons();
    };
    DailyController.prototype.updateButtonState = function () {
        var t, e;
        if (this._selectedDay) {
            var i = I18NStrings_1.default.get("DailyChallenge_Play", "Play"), o = true, n = this._model.getSelectedData(), a = this._selectedDay.status;
            a || (a = this._model.getDayStatus(this._selectedDay.id, this._selectedDay.day));
            switch (a) {
                case DailyTypes_1.DailyStatus.Completed:
                    i = I18NStrings_1.default.get("DailyChallenge_Replay", "Replay");
                    break;
                case DailyTypes_1.DailyStatus.Unlocked:
                    n && n.id == (null === (t = this._selectedDay) || void 0 === t ? void 0 : t.id) && n.day == (null === (e = this._selectedDay) || void 0 === e ? void 0 : e.day) && (i = I18NStrings_1.default.get("DailyChallenge_Continue", "Continue"));
                    break;
                default:
                    o = false;
            }
            this.viewDoAction("updatePlayButton", {
                text: i,
                enabled: o
            });
            if (DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, this._selectedDay.id)) {
                var l = this._model.getMonthRewardItemId(this._selectedDay.id), r = this._model.isMonthCompleted(this._selectedDay.id);
                this.viewDoAction("updateMonth", this._selectedDay.id, l, r, this._selectedDay.day);
            }
        }
    };
    DailyController.prototype.updateMonthNavButtons = function () {
        DataReader_1.DataReader.getList(ConfigType_1.ConfigType.daily_challenge);
        var t = this._currentDailyId > this._miniId, e = this._currentDailyId < this._maxId;
        this.viewDoAction("updateNavButtons", {
            leftEnabled: t,
            rightEnabled: e
        });
    };
    DailyController.prototype.handleMoreClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.DailyBtn);
        ControllerManager_1.default.getInstance().pushViewByController("DailyCollController", {
            isShowAction: false,
            enterType: 1
        });
    };
    DailyController.prototype.handleChangeMonth = function (t) {
        if (t) {
            this._currentDailyId--;
        }
        else {
            this._currentDailyId++;
        }
        DailyModel_1.default.getInstance().isSelectedDay = false;
        this._currentDailyId = Math.max(this._currentDailyId, this._miniId);
        this._currentDailyId = Math.min(this._currentDailyId, this._maxId);
        var e = this._model.getLastAvailableDay(this._currentDailyId);
        e && (this._selectedDay = e);
        this._model.setCurrentDay(this._selectedDay);
        var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, this._currentDailyId);
        i && DGameBtnClick_1.DotGameBtnClick.dotDaily(DGameBtnClick_1.EDailyClickType.MonthChange, i.Year + "年" + i.Month + "月");
        this.updateCurrentMonth();
    };
    DailyController.prototype.updateCurrentMonth = function () {
        this.viewDoAction("scrollToMonth", this._currentDailyId, true);
        this.updateRewardIcon();
        this.updateMonthNavButtons();
        var t = this.buildMonthCellData(this._currentDailyId);
        this.viewDoAction("refreshMonth", this._currentDailyId, t);
        this.updateButtonState();
    };
    DailyController.prototype.handleDaySelect = function (t, e) {
        var i = this._model.getMonthData(t).find(function (t) {
            return t.day === e;
        });
        if (i) {
            this._selectedDay = i;
            this._model.setCurrentDay(i);
            this.updateButtonState();
            var o = this.buildMonthCellData(t);
            this.viewDoAction("refreshMonth", t, o);
        }
    };
    DailyController.prototype.handlePlayClick = function () {
        if (this._selectedDay) {
            this._model.setPlayed(this._selectedDay.id, this._selectedDay.day, this._selectedDay.status);
            var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, this._selectedDay.id);
            if (t) {
                DGameBtnClick_1.DotGameBtnClick.dotDaily(DGameBtnClick_1.EDailyClickType.Play, t.Year + "年" + t.Month + "月" + this._selectedDay.day + "日");
                ControllerManager_1.default.getInstance().pushViewByController("DailyChallengeController", {
                    timeStamp: new Date(this._selectedDay.timestamp).format("YYYY-mm-dd"),
                    isReplace: true
                });
            }
        }
    };
    DailyController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        var i = e || {};
        this.initializeDate(i);
        this.refreshUI();
    };
    DailyController.prototype.onDailyDayItemClickCB = function (t) {
        this._selectedDay = t;
        this.updateButtonState();
    };
    DailyController.prototype.onDailyDayItemShowReward = function () {
        this._model.resetShowDoneDay();
    };
    DailyController.prototype.closeView = function () {
        DGameBtnClick_1.DotGameBtnClick.dotDaily(DGameBtnClick_1.EDailyClickType.Closed);
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.DailyChallengeToMainPage);
        this.close();
    };
    __decorate([
        mj.traitEvent("DailyCtrl_closeView")
    ], DailyController.prototype, "closeView", null);
    DailyController = __decorate([
        mj.class("DailyController")
    ], DailyController);
    return DailyController;
}(ViewController_1.default));
exports.default = DailyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvdmlldy9EYWlseUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJGQUFxRjtBQUNyRiwwRkFBbUc7QUFDbkcsNEVBQTJFO0FBQzNFLDhFQUF5RTtBQUN6RSw2RkFBd0Y7QUFDeEYsZ0ZBQStFO0FBQy9FLHVFQUEwRztBQUMxRyx1RUFBdUY7QUFDdkYsNENBQXVDO0FBQ3ZDLDRDQUF5RDtBQUN6RCwwQ0FBcUM7QUFFckM7SUFBNkMsbUNBQWM7SUFBM0Q7UUFBQSxxRUFnUUM7UUEvUEMsZUFBUyxHQUFHLG1CQUFTLENBQUM7UUFDdEIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQXlQdEIsQ0FBQztJQXhQQyw2Q0FBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsd0JBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0UsRUFBRSxDQUFDLHdCQUFXLENBQUMsc0JBQXNCLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qs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QUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgeyBEYXRhUmVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9EYXRhUmVhZGVyJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJhZGdlQ2xpY2tUeXBlLCBFRGFpbHlDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCB7IERvdEdhbWVQYWdlU2hvdywgRVBhZ2VTaG93VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lUGFnZVNob3cnO1xuaW1wb3J0IERhaWx5TW9kZWwgZnJvbSAnLi4vRGFpbHlNb2RlbCc7XG5pbXBvcnQgeyBEYWlseUV2ZW50cywgRGFpbHlTdGF0dXMgfSBmcm9tICcuLi9EYWlseVR5cGVzJztcbmltcG9ydCBEYWlseVZpZXcgZnJvbSAnLi4vRGFpbHlWaWV3JztcbkBtai5jbGFzcyhcIkRhaWx5Q29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBEYWlseVZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuU0NFTkU7XG4gIF9tb2RlbCA9IG51bGw7XG4gIF9jdXJyZW50RGFpbHlJZCA9IDA7XG4gIF9taW5pSWQgPSAxO1xuICBfbWF4SWQgPSAxO1xuICBfc2VsZWN0ZWREYXkgPSBudWxsO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0RhaWx5RXZlbnRzLkRBSUxZX0RBWV9JVEVNX0NMSUNLXSA9IHRoaXMub25EYWlseURheUl0ZW1DbGlja0NCLmJpbmQodGhpcyk7XG4gICAgX3RbRGFpbHlFdmVudHMuREFJTFlfU0hPV19SRVdBUkRfSVRFTV0gPSB0aGlzLm9uRGFpbHlEYXlJdGVtU2hvd1Jld2FyZC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX21vZGVsID0gRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIGUpO1xuICAgIHZhciBpID0gdGhpcy5hcmdzIHx8IHt9O1xuICAgIHRoaXMuaW5pdGlhbGl6ZURhdGUoaSk7XG4gICAgdGhpcy5yZWZyZXNoVUkoKTtcbiAgICBpZiAoaS5zdWNjZXNzKSB7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUJHTShFQXVkaW9JRC5CZ20sIHRydWUpO1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLmZhZGVCR01JbigpO1xuICAgIH1cbiAgfVxuICBpbml0aWFsaXplRGF0ZSh0KSB7XG4gICAgbmV3IERhdGUoKTtcbiAgICBpZiAodC5zcGVjaWZpZWREYXRlICYmIHQuaWQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnREYWlseUlkID0gdC5pZDtcbiAgICAgIHZhciBlID0gdGhpcy5fbW9kZWwuZ2V0TW9udGhEYXRhKHQuaWQpO1xuICAgICAgdGhpcy5fc2VsZWN0ZWREYXkgPSBlLmZpbmQoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIDEgPT09IGUuZGF5ICYmIGUuaWQgPT09IHQuaWQ7XG4gICAgICB9KSB8fCBlWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaSA9IHRoaXMuX21vZGVsLmdldEN1cnJlbnREYXkoKTtcbiAgICAgIGlmIChpICYmICF0aGlzLl9tb2RlbC5pc0ZpcnN0R2FtZSgpKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF5ID0gaTtcbiAgICAgICAgdGhpcy5fY3VycmVudERhaWx5SWQgPSBpLmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLl9tb2RlbC5nZXRUb2RheSgpO1xuICAgICAgICB0aGlzLl9jdXJyZW50RGFpbHlJZCA9IG8uaWQ7XG4gICAgICAgIGUgPSB0aGlzLl9tb2RlbC5nZXRNb250aERhdGEoby5pZCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF5ID0gZS5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuZGF5ID09PSBvLmRheSAmJiB0LmlkID09PSBvLmlkO1xuICAgICAgICB9KSB8fCBlWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgbiA9IHRoaXMuX21vZGVsLmdldExhc3RBdmFpbGFibGVEYXkodGhpcy5fY3VycmVudERhaWx5SWQpO1xuICAgIG4gJiYgKHRoaXMuX21vZGVsLmlzRmlyc3RHYW1lKCkgfHwgdC5zaG93UmV3YXJkKSAmJiAodGhpcy5fc2VsZWN0ZWREYXkgPSBuKTtcbiAgICB0aGlzLl9tb2RlbC5zZXRDdXJyZW50RGF5KHRoaXMuX3NlbGVjdGVkRGF5KTtcbiAgICB0aGlzLl9tb2RlbC5zZXRJc0ZpcnN0R2FtZShmYWxzZSk7XG4gICAgdmFyIGEgPSBEYXRhUmVhZGVyLmdldExpc3QoQ29uZmlnVHlwZS5kYWlseV9jaGFsbGVuZ2UpO1xuICAgIHRoaXMuX21pbmlJZCA9IGFbMF0uSUQ7XG4gICAgdGhpcy5fbWF4SWQgPSBhW2EubGVuZ3RoIC0gMV0uSUQ7XG4gIH1cbiAgcmVmcmVzaFVJKCkge1xuICAgIHZhciB0ID0gdGhpcy5idWlsZEFsbE1vbnRoc0RhdGEoKTtcbiAgICB0aGlzLl9tYXhJZCA9IHRbdC5sZW5ndGggLSAxXS5pZDtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dWaWV3XCIpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd01vbnRoTGlzdFwiLCB0KTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNjcm9sbFRvTW9udGhcIiwgdGhpcy5fY3VycmVudERhaWx5SWQsIGZhbHNlKTtcbiAgICB0aGlzLnVwZGF0ZVJld2FyZEljb24oKTtcbiAgICB0aGlzLnVwZGF0ZUJ1dHRvblN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVNb250aE5hdkJ1dHRvbnMoKTtcbiAgfVxuICBidWlsZEFsbE1vbnRoc0RhdGEoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgaSA9IFtdLFxuICAgICAgbyA9IERhdGFSZWFkZXIuZ2V0TGlzdChDb25maWdUeXBlLmRhaWx5X2NoYWxsZW5nZSksXG4gICAgICBuID0gbmV3IERhdGUoKSxcbiAgICAgIGEgPSBuLmdldEZ1bGxZZWFyKCksXG4gICAgICByID0gbi5nZXRNb250aCgpICsgMTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgcyA9IF9fdmFsdWVzKG8pLCBkID0gcy5uZXh0KCk7ICFkLmRvbmU7IGQgPSBzLm5leHQoKSkge1xuICAgICAgICB2YXIgaCA9IGQudmFsdWU7XG4gICAgICAgIGlmICghKGguWWVhciA+IGEgfHwgaC5ZZWFyID09PSBhICYmIGguTW9udGggPiByKSkge1xuICAgICAgICAgIHZhciB5ID0gdGhpcy5idWlsZE1vbnRoQ2VsbERhdGEoaC5JRCk7XG4gICAgICAgICAgaS5wdXNoKHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdCA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGQgJiYgIWQuZG9uZSAmJiAoZSA9IHMucmV0dXJuKSAmJiBlLmNhbGwocyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGk7XG4gIH1cbiAgYnVpbGRNb250aENlbGxEYXRhKHQpIHtcbiAgICB2YXIgZSA9IHRoaXMsXG4gICAgICBpID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLmRhaWx5X2NoYWxsZW5nZSwgdCk7XG4gICAgaWYgKCFpKSByZXR1cm4gbnVsbDtcbiAgICBmb3IgKHZhciBvID0gdGhpcy5fbW9kZWwuZ2V0TW9udGhEYXRhKGkuSUQpLCBuID0gdGhpcy5fbW9kZWwuZ2V0TW9udGhTdGFydEJsYW5rRGF5cyhpLlllYXIsIGkuTW9udGgpLCBhID0gW10sIGwgPSAwOyBsIDwgbjsgbCsrKSBhLnB1c2goe1xuICAgICAgaWQ6IDAsXG4gICAgICBkYXk6IDAsXG4gICAgICBzdGF0dXM6IERhaWx5U3RhdHVzLlVub3BlbmVkLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgdGltZXN0YW1wOiAwXG4gICAgfSk7XG4gICAgby5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGEucHVzaCh7XG4gICAgICAgIGlkOiB0LmlkLFxuICAgICAgICBkYXk6IHQuZGF5LFxuICAgICAgICBzdGF0dXM6IHQuc3RhdHVzLFxuICAgICAgICBzZWxlY3RlZDogKG51bGwgPT09IChpID0gZS5fc2VsZWN0ZWREYXkpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZGF5KSA9PT0gdC5kYXksXG4gICAgICAgIHRpbWVzdGFtcDogdC50aW1lc3RhbXBcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdCxcbiAgICAgIGRheXM6IGFcbiAgICB9O1xuICB9XG4gIHVwZGF0ZVJld2FyZEljb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9tb2RlbC5pc01vbnRoQ29tcGxldGVkKHRoaXMuX2N1cnJlbnREYWlseUlkKSxcbiAgICAgIGUgPSB0aGlzLl9tb2RlbC5nZXRNb250aFJld2FyZEl0ZW1JZCh0aGlzLl9jdXJyZW50RGFpbHlJZCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJ1cGRhdGVSZXdhcmRcIiwge1xuICAgICAgcmV3YXJkSWQ6IGUsXG4gICAgICBjb21wbGV0ZWQ6IHRcbiAgICB9KTtcbiAgfVxuICBnZXRSZXdhcmRJY29uRGF0YSh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLl9tb2RlbC5pc01vbnRoQ29tcGxldGVkKHQpO1xuICAgIHJldHVybiB7XG4gICAgICByZXdhcmRJZDogdGhpcy5fbW9kZWwuZ2V0TW9udGhSZXdhcmRJdGVtSWQodCksXG4gICAgICBjb21wbGV0ZWQ6IGVcbiAgICB9O1xuICB9XG4gIHVwZGF0ZVJld2FyZEZvck1vbnRoKHQpIHtcbiAgICB0aGlzLl9jdXJyZW50RGFpbHlJZCA9IHQ7XG4gICAgdGhpcy51cGRhdGVSZXdhcmRJY29uKCk7XG4gICAgdGhpcy51cGRhdGVNb250aE5hdkJ1dHRvbnMoKTtcbiAgfVxuICB1cGRhdGVCdXR0b25TdGF0ZSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWREYXkpIHtcbiAgICAgIHZhciBpID0gSTE4TlN0cmluZ3MuZ2V0KFwiRGFpbHlDaGFsbGVuZ2VfUGxheVwiLCBcIlBsYXlcIiksXG4gICAgICAgIG8gPSB0cnVlLFxuICAgICAgICBuID0gdGhpcy5fbW9kZWwuZ2V0U2VsZWN0ZWREYXRhKCksXG4gICAgICAgIGEgPSB0aGlzLl9zZWxlY3RlZERheS5zdGF0dXM7XG4gICAgICBhIHx8IChhID0gdGhpcy5fbW9kZWwuZ2V0RGF5U3RhdHVzKHRoaXMuX3NlbGVjdGVkRGF5LmlkLCB0aGlzLl9zZWxlY3RlZERheS5kYXkpKTtcbiAgICAgIHN3aXRjaCAoYSkge1xuICAgICAgICBjYXNlIERhaWx5U3RhdHVzLkNvbXBsZXRlZDpcbiAgICAgICAgICBpID0gSTE4TlN0cmluZ3MuZ2V0KFwiRGFpbHlDaGFsbGVuZ2VfUmVwbGF5XCIsIFwiUmVwbGF5XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIERhaWx5U3RhdHVzLlVubG9ja2VkOlxuICAgICAgICAgIG4gJiYgbi5pZCA9PSAobnVsbCA9PT0gKHQgPSB0aGlzLl9zZWxlY3RlZERheSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pZCkgJiYgbi5kYXkgPT0gKG51bGwgPT09IChlID0gdGhpcy5fc2VsZWN0ZWREYXkpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZGF5KSAmJiAoaSA9IEkxOE5TdHJpbmdzLmdldChcIkRhaWx5Q2hhbGxlbmdlX0NvbnRpbnVlXCIsIFwiQ29udGludWVcIikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIG8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwidXBkYXRlUGxheUJ1dHRvblwiLCB7XG4gICAgICAgIHRleHQ6IGksXG4gICAgICAgIGVuYWJsZWQ6IG9cbiAgICAgIH0pO1xuICAgICAgaWYgKERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5kYWlseV9jaGFsbGVuZ2UsIHRoaXMuX3NlbGVjdGVkRGF5LmlkKSkge1xuICAgICAgICB2YXIgbCA9IHRoaXMuX21vZGVsLmdldE1vbnRoUmV3YXJkSXRlbUlkKHRoaXMuX3NlbGVjdGVkRGF5LmlkKSxcbiAgICAgICAgICByID0gdGhpcy5fbW9kZWwuaXNNb250aENvbXBsZXRlZCh0aGlzLl9zZWxlY3RlZERheS5pZCk7XG4gICAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwidXBkYXRlTW9udGhcIiwgdGhpcy5fc2VsZWN0ZWREYXkuaWQsIGwsIHIsIHRoaXMuX3NlbGVjdGVkRGF5LmRheSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZU1vbnRoTmF2QnV0dG9ucygpIHtcbiAgICBEYXRhUmVhZGVyLmdldExpc3QoQ29uZmlnVHlwZS5kYWlseV9jaGFsbGVuZ2UpO1xuICAgIHZhciB0ID0gdGhpcy5fY3VycmVudERhaWx5SWQgPiB0aGlzLl9taW5pSWQsXG4gICAgICBlID0gdGhpcy5fY3VycmVudERhaWx5SWQgPCB0aGlzLl9tYXhJZDtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInVwZGF0ZU5hdkJ1dHRvbnNcIiwge1xuICAgICAgbGVmdEVuYWJsZWQ6IHQsXG4gICAgICByaWdodEVuYWJsZWQ6IGVcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVNb3JlQ2xpY2soKSB7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEJhZGdlKEVCYWRnZUNsaWNrVHlwZS5EYWlseUJ0bik7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5Q29sbENvbnRyb2xsZXJcIiwge1xuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZSxcbiAgICAgIGVudGVyVHlwZTogMVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZUNoYW5nZU1vbnRoKHQpIHtcbiAgICBpZiAodCkge1xuICAgICAgdGhpcy5fY3VycmVudERhaWx5SWQtLTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3VycmVudERhaWx5SWQrKztcbiAgICB9XG4gICAgRGFpbHlNb2RlbC5nZXRJbnN0YW5jZSgpLmlzU2VsZWN0ZWREYXkgPSBmYWxzZTtcbiAgICB0aGlzLl9jdXJyZW50RGFpbHlJZCA9IE1hdGgubWF4KHRoaXMuX2N1cnJlbnREYWlseUlkLCB0aGlzLl9taW5pSWQpO1xuICAgIHRoaXMuX2N1cnJlbnREYWlseUlkID0gTWF0aC5taW4odGhpcy5fY3VycmVudERhaWx5SWQsIHRoaXMuX21heElkKTtcbiAgICB2YXIgZSA9IHRoaXMuX21vZGVsLmdldExhc3RBdmFpbGFibGVEYXkodGhpcy5fY3VycmVudERhaWx5SWQpO1xuICAgIGUgJiYgKHRoaXMuX3NlbGVjdGVkRGF5ID0gZSk7XG4gICAgdGhpcy5fbW9kZWwuc2V0Q3VycmVudERheSh0aGlzLl9zZWxlY3RlZERheSk7XG4gICAgdmFyIGkgPSBEYXRhUmVhZGVyLmdldEJ5S2V5KENvbmZpZ1R5cGUuZGFpbHlfY2hhbGxlbmdlLCB0aGlzLl9jdXJyZW50RGFpbHlJZCk7XG4gICAgaSAmJiBEb3RHYW1lQnRuQ2xpY2suZG90RGFpbHkoRURhaWx5Q2xpY2tUeXBlLk1vbnRoQ2hhbmdlLCBpLlllYXIgKyBcIuW5tFwiICsgaS5Nb250aCArIFwi5pyIXCIpO1xuICAgIHRoaXMudXBkYXRlQ3VycmVudE1vbnRoKCk7XG4gIH1cbiAgdXBkYXRlQ3VycmVudE1vbnRoKCkge1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2Nyb2xsVG9Nb250aFwiLCB0aGlzLl9jdXJyZW50RGFpbHlJZCwgdHJ1ZSk7XG4gICAgdGhpcy51cGRhdGVSZXdhcmRJY29uKCk7XG4gICAgdGhpcy51cGRhdGVNb250aE5hdkJ1dHRvbnMoKTtcbiAgICB2YXIgdCA9IHRoaXMuYnVpbGRNb250aENlbGxEYXRhKHRoaXMuX2N1cnJlbnREYWlseUlkKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInJlZnJlc2hNb250aFwiLCB0aGlzLl9jdXJyZW50RGFpbHlJZCwgdCk7XG4gICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG4gIGhhbmRsZURheVNlbGVjdCh0LCBlKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9tb2RlbC5nZXRNb250aERhdGEodCkuZmluZChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZGF5ID09PSBlO1xuICAgIH0pO1xuICAgIGlmIChpKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZERheSA9IGk7XG4gICAgICB0aGlzLl9tb2RlbC5zZXRDdXJyZW50RGF5KGkpO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZSgpO1xuICAgICAgdmFyIG8gPSB0aGlzLmJ1aWxkTW9udGhDZWxsRGF0YSh0KTtcbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwicmVmcmVzaE1vbnRoXCIsIHQsIG8pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVQbGF5Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkRGF5KSB7XG4gICAgICB0aGlzLl9tb2RlbC5zZXRQbGF5ZWQodGhpcy5fc2VsZWN0ZWREYXkuaWQsIHRoaXMuX3NlbGVjdGVkRGF5LmRheSwgdGhpcy5fc2VsZWN0ZWREYXkuc3RhdHVzKTtcbiAgICAgIHZhciB0ID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLmRhaWx5X2NoYWxsZW5nZSwgdGhpcy5fc2VsZWN0ZWREYXkuaWQpO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdERhaWx5KEVEYWlseUNsaWNrVHlwZS5QbGF5LCB0LlllYXIgKyBcIuW5tFwiICsgdC5Nb250aCArIFwi5pyIXCIgKyB0aGlzLl9zZWxlY3RlZERheS5kYXkgKyBcIuaXpVwiKTtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkRhaWx5Q2hhbGxlbmdlQ29udHJvbGxlclwiLCB7XG4gICAgICAgICAgdGltZVN0YW1wOiBuZXcgRGF0ZSh0aGlzLl9zZWxlY3RlZERheS50aW1lc3RhbXApLmZvcm1hdChcIllZWVktbW0tZGRcIiksXG4gICAgICAgICAgaXNSZXBsYWNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWZyZXNoRm9yUmV1c2UoZSkge1xuICAgIHN1cGVyLnJlZnJlc2hGb3JSZXVzZS5jYWxsKHRoaXMsIGUpO1xuICAgIHZhciBpID0gZSB8fCB7fTtcbiAgICB0aGlzLmluaXRpYWxpemVEYXRlKGkpO1xuICAgIHRoaXMucmVmcmVzaFVJKCk7XG4gIH1cbiAgb25EYWlseURheUl0ZW1DbGlja0NCKHQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZERheSA9IHQ7XG4gICAgdGhpcy51cGRhdGVCdXR0b25TdGF0ZSgpO1xuICB9XG4gIG9uRGFpbHlEYXlJdGVtU2hvd1Jld2FyZCgpIHtcbiAgICB0aGlzLl9tb2RlbC5yZXNldFNob3dEb25lRGF5KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYWlseUN0cmxfY2xvc2VWaWV3XCIpXG4gIGNsb3NlVmlldygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90RGFpbHkoRURhaWx5Q2xpY2tUeXBlLkNsb3NlZCk7XG4gICAgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkRhaWx5Q2hhbGxlbmdlVG9NYWluUGFnZSk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59Il19