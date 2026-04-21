import { EAudioID } from '../../../../Scripts/core/simulator/constant/GameTypeEnums';
import ViewController, { viewMode } from '../../../../Scripts/framework/controller/ViewController';
import { DataReader } from '../../../../Scripts/framework/data/DataReader';
import I18NStrings from '../../../../Scripts/framework/data/I18NStrings';
import ControllerManager from '../../../../Scripts/framework/manager/ControllerManager';
import { ConfigType } from '../../../../Scripts/gamePlay/base/data/ConfigType';
import { DotGameBtnClick, EBadgeClickType, EDailyClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { DotGamePageShow, EPageShowType } from '../../../../Scripts/dot/DGamePageShow';
import DailyModel from '../DailyModel';
import { DailyEvents, DailyStatus } from '../DailyTypes';
import DailyView from '../DailyView';
@mj.class("DailyController")
export default class DailyController extends ViewController {
  viewClass = DailyView;
  viewMode = viewMode.SCENE;
  _model = null;
  _currentDailyId = 0;
  _miniId = 1;
  _maxId = 1;
  _selectedDay = null;
  getMessageListeners() {
    var _t = {};
    _t[DailyEvents.DAILY_DAY_ITEM_CLICK] = this.onDailyDayItemClickCB.bind(this);
    _t[DailyEvents.DAILY_SHOW_REWARD_ITEM] = this.onDailyDayItemShowReward.bind(this);
    return _t;
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this._model = DailyModel.getInstance();
  }
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    var i = this.args || {};
    this.initializeDate(i);
    this.refreshUI();
    if (i.success) {
      mj.audioManager.playBGM(EAudioID.Bgm, true);
      mj.audioManager.fadeBGMIn();
    }
  }
  initializeDate(t) {
    new Date();
    if (t.specifiedDate && t.id) {
      this._currentDailyId = t.id;
      var e = this._model.getMonthData(t.id);
      this._selectedDay = e.find(function (e) {
        return 1 === e.day && e.id === t.id;
      }) || e[0];
    } else {
      var i = this._model.getCurrentDay();
      if (i && !this._model.isFirstGame()) {
        this._selectedDay = i;
        this._currentDailyId = i.id;
      } else {
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
    var a = DataReader.getList(ConfigType.daily_challenge);
    this._miniId = a[0].ID;
    this._maxId = a[a.length - 1].ID;
  }
  refreshUI() {
    var t = this.buildAllMonthsData();
    this._maxId = t[t.length - 1].id;
    this.viewDoAction("showView");
    this.viewDoAction("showMonthList", t);
    this.viewDoAction("scrollToMonth", this._currentDailyId, false);
    this.updateRewardIcon();
    this.updateButtonState();
    this.updateMonthNavButtons();
  }
  buildAllMonthsData() {
    var t,
      e,
      i = [],
      o = DataReader.getList(ConfigType.daily_challenge),
      n = new Date(),
      a = n.getFullYear(),
      r = n.getMonth() + 1;
    try {
      for (var s = __values(o), d = s.next(); !d.done; d = s.next()) {
        var h = d.value;
        if (!(h.Year > a || h.Year === a && h.Month > r)) {
          var y = this.buildMonthCellData(h.ID);
          i.push(y);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (e = s.return) && e.call(s);
      } finally {
        if (t) throw t.error;
      }
    }
    return i;
  }
  buildMonthCellData(t) {
    var e = this,
      i = DataReader.getByKey(ConfigType.daily_challenge, t);
    if (!i) return null;
    for (var o = this._model.getMonthData(i.ID), n = this._model.getMonthStartBlankDays(i.Year, i.Month), a = [], l = 0; l < n; l++) a.push({
      id: 0,
      day: 0,
      status: DailyStatus.Unopened,
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
  }
  updateRewardIcon() {
    var t = this._model.isMonthCompleted(this._currentDailyId),
      e = this._model.getMonthRewardItemId(this._currentDailyId);
    this.viewDoAction("updateReward", {
      rewardId: e,
      completed: t
    });
  }
  getRewardIconData(t) {
    var e = this._model.isMonthCompleted(t);
    return {
      rewardId: this._model.getMonthRewardItemId(t),
      completed: e
    };
  }
  updateRewardForMonth(t) {
    this._currentDailyId = t;
    this.updateRewardIcon();
    this.updateMonthNavButtons();
  }
  updateButtonState() {
    var t, e;
    if (this._selectedDay) {
      var i = I18NStrings.get("DailyChallenge_Play", "Play"),
        o = true,
        n = this._model.getSelectedData(),
        a = this._selectedDay.status;
      a || (a = this._model.getDayStatus(this._selectedDay.id, this._selectedDay.day));
      switch (a) {
        case DailyStatus.Completed:
          i = I18NStrings.get("DailyChallenge_Replay", "Replay");
          break;
        case DailyStatus.Unlocked:
          n && n.id == (null === (t = this._selectedDay) || void 0 === t ? void 0 : t.id) && n.day == (null === (e = this._selectedDay) || void 0 === e ? void 0 : e.day) && (i = I18NStrings.get("DailyChallenge_Continue", "Continue"));
          break;
        default:
          o = false;
      }
      this.viewDoAction("updatePlayButton", {
        text: i,
        enabled: o
      });
      if (DataReader.getByKey(ConfigType.daily_challenge, this._selectedDay.id)) {
        var l = this._model.getMonthRewardItemId(this._selectedDay.id),
          r = this._model.isMonthCompleted(this._selectedDay.id);
        this.viewDoAction("updateMonth", this._selectedDay.id, l, r, this._selectedDay.day);
      }
    }
  }
  updateMonthNavButtons() {
    DataReader.getList(ConfigType.daily_challenge);
    var t = this._currentDailyId > this._miniId,
      e = this._currentDailyId < this._maxId;
    this.viewDoAction("updateNavButtons", {
      leftEnabled: t,
      rightEnabled: e
    });
  }
  handleMoreClick() {
    DotGameBtnClick.dotBadge(EBadgeClickType.DailyBtn);
    ControllerManager.getInstance().pushViewByController("DailyCollController", {
      isShowAction: false,
      enterType: 1
    });
  }
  handleChangeMonth(t) {
    if (t) {
      this._currentDailyId--;
    } else {
      this._currentDailyId++;
    }
    DailyModel.getInstance().isSelectedDay = false;
    this._currentDailyId = Math.max(this._currentDailyId, this._miniId);
    this._currentDailyId = Math.min(this._currentDailyId, this._maxId);
    var e = this._model.getLastAvailableDay(this._currentDailyId);
    e && (this._selectedDay = e);
    this._model.setCurrentDay(this._selectedDay);
    var i = DataReader.getByKey(ConfigType.daily_challenge, this._currentDailyId);
    i && DotGameBtnClick.dotDaily(EDailyClickType.MonthChange, i.Year + "年" + i.Month + "月");
    this.updateCurrentMonth();
  }
  updateCurrentMonth() {
    this.viewDoAction("scrollToMonth", this._currentDailyId, true);
    this.updateRewardIcon();
    this.updateMonthNavButtons();
    var t = this.buildMonthCellData(this._currentDailyId);
    this.viewDoAction("refreshMonth", this._currentDailyId, t);
    this.updateButtonState();
  }
  handleDaySelect(t, e) {
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
  }
  handlePlayClick() {
    if (this._selectedDay) {
      this._model.setPlayed(this._selectedDay.id, this._selectedDay.day, this._selectedDay.status);
      var t = DataReader.getByKey(ConfigType.daily_challenge, this._selectedDay.id);
      if (t) {
        DotGameBtnClick.dotDaily(EDailyClickType.Play, t.Year + "年" + t.Month + "月" + this._selectedDay.day + "日");
        ControllerManager.getInstance().pushViewByController("DailyChallengeController", {
          timeStamp: new Date(this._selectedDay.timestamp).format("YYYY-mm-dd"),
          isReplace: true
        });
      }
    }
  }
  refreshForReuse(e) {
    super.refreshForReuse.call(this, e);
    var i = e || {};
    this.initializeDate(i);
    this.refreshUI();
  }
  onDailyDayItemClickCB(t) {
    this._selectedDay = t;
    this.updateButtonState();
  }
  onDailyDayItemShowReward() {
    this._model.resetShowDoneDay();
  }
  @mj.traitEvent("DailyCtrl_closeView")
  closeView() {
    DotGameBtnClick.dotDaily(EDailyClickType.Closed);
    DotGamePageShow.dot(EPageShowType.DailyChallengeToMainPage);
    this.close();
  }
}