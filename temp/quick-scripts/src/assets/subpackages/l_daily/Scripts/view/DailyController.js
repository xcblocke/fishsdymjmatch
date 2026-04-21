"use strict";
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