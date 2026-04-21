import DailyDayItem from './DailyDayItem';
import { DailyEvents, DailyStatus, EDailyAudioID } from './DailyTypes';
import DailyModel from './DailyModel';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class
export default class DailyMonthCellItem extends BaseUI {
  @mj.node("/view/content")
  _calendarContainer: "/view/content" = null;
  _effDay = null;
  _effDayParent = null;
  _dayItems = [];
  _data = null;
  _onDaySelect = null;
  _dataChanged = false;
  _isInitialized = false;
  _dailyModel = null;
  _onDayItemClickBound = null;
  static MAX_DAY_ITEMS = 42;
  static INIT_DELAY_FRAMES = 1;
  static DONE_EFFECT_DURATION = 30;
  onLoad() {
    super.onLoad.call(this);
    this._dailyModel = DailyModel.getInstance();
    var e = cc.find("view/eff_day", this.node);
    if (e) {
      this._effDay = e.getComponent(sp.Skeleton);
      this._effDayParent = e.parent;
      e.active = false;
    }
    this._onDayItemClickBound = this.onDayItemClick.bind(this);
    this.initWidget();
  }
  initViewAsync() {
    var t = this;
    return this._isInitialized ? Promise.resolve() : this.initDayItems().then(function () {
      if (cc.isValid(t.node)) {
        mj.EventManager.on(DailyEvents.DAILY_DAY_EFFECT_SHOW, t.onDayEffectShow, t);
        t._dataChanged && t.updateUI();
        t._isInitialized = true;
      }
    }).catch(function (e) {
      t.destroyDayItems();
      throw e;
    });
  }
  initDayItems() {
    var t = this;
    if (!cc.isValid(this._calendarContainer)) return Promise.resolve();
    this._dayItems.length > 0 && this.destroyDayItems();
    var e = this._calendarContainer.getComponent(cc.Layout);
    e && (e.enabled = false);
    for (var o = new Array(DailyMonthCellItem.MAX_DAY_ITEMS), n = [], a = 0; a < DailyMonthCellItem.MAX_DAY_ITEMS; a++) n.push(this.createDayItem(a, o));
    return Promise.all(n).then(function () {
      t._dayItems = o.filter(function (t) {
        return t;
      });
      t.scheduleLayoutUpdate(e);
    });
  }
  scheduleLayoutUpdate(t) {
    var e = this;
    t && cc.isValid(this.node) && this.scheduleOnce(function () {
      if (cc.isValid(t) && cc.isValid(e.node)) {
        t.enabled = true;
        t.updateLayout();
      }
    }, 0);
  }
  createDayItem(t, e) {
    var i = this;
    return DailyDayItem.createUI().then(function (o) {
      if (cc.isValid(o) && cc.isValid(i.node)) {
        i._calendarContainer.addChild(o);
        o.setSiblingIndex(t);
        o.active = false;
        var n = o.getComponent(DailyDayItem);
        if (n) {
          n.setClickCallback(i._onDayItemClickBound);
          n.registerClickEvent();
          e[t] = n;
        }
      }
    }).catch(function () {});
  }
  destroyDayItems() {
    this._dayItems.forEach(function (t) {
      return cc.isValid(null == t ? void 0 : t.node) && t.node.destroy();
    });
    this._dayItems = [];
  }
  updateCell(t, e) {
    var i;
    this._data = t;
    this._dataChanged = true;
    (null === (i = this._effDay) || void 0 === i ? void 0 : i.node) && (this._effDay.node.active = e);
    this._isInitialized && this._dayItems.length > 0 && this.updateUI();
  }
  updateUI() {
    var t;
    if (null === (t = this._data) || void 0 === t ? void 0 : t.days) {
      var e = this._data.days.length,
        o = this._calendarContainer.getComponent(cc.Layout);
      if (o) {
        o.enabled = false;
        o.spacingY = e >= 36 ? 20 : 25;
      }
      for (var n = this._dailyModel.getCurrentDay(), a = this._dailyModel.showDoneDay, l = null, r = null, s = 0; s < e; s++) {
        var c = this._data.days[s],
          d = this._dayItems[s];
        if (d) {
          d.node.active = true;
          d.updateData(c);
          (null == c ? void 0 : c.selected) && (null == n ? void 0 : n.id) > 0 && n.id === c.id && (l = {
            item: d,
            data: c
          });
          c && (null == a ? void 0 : a.id) > 0 && a.day > 0 && a.id === c.id && a.day === c.day && (r = {
            item: d,
            data: c
          });
        }
      }
      for (s = e; s < this._dayItems.length; s++) {
        var h = this._dayItems[s];
        (null == h ? void 0 : h.node) && (h.node.active = false);
      }
      if (o) {
        o.enabled = true;
        o.updateLayout();
      }
      var p = DailyMonthCellItem.INIT_DELAY_FRAMES;
      if (r) {
        this.scheduleDelayedEffect(r.item, r.data, "done", DailyMonthCellItem.INIT_DELAY_FRAMES);
        p = DailyMonthCellItem.INIT_DELAY_FRAMES + DailyMonthCellItem.DONE_EFFECT_DURATION;
      }
      l && this.scheduleDelayedEffect(l.item, l.data, "select", p, true);
      this._dataChanged = false;
    }
  }
  scheduleDelayedEffect(t, e, i, o, n = false) {
    var a = this;
    if (o <= 0) {
      this.triggerEffect(t, e, i, n);
    } else {
      this.scheduleOnce(function () {
        cc.isValid(a.node) && cc.isValid(null == t ? void 0 : t.node) && a.scheduleDelayedEffect(t, e, i, o - 1, n);
      }, 0);
    }
  }
  triggerEffect(t, e, i, o = false) {
    if (cc.isValid(null == t ? void 0 : t.node)) {
      if (o && DailyModel.getInstance().isSelectedDay) return;
      var n = "select" === i ? e.status === DailyStatus.Completed ? "select" : "mark" : "done";
      mj.EventManager.emit(DailyEvents.DAILY_DAY_EFFECT_SHOW, {
        data: e,
        effectType: n,
        position: t.node.position
      });
      if ("done" === i) {
        mj.audioManager.playEffect(EDailyAudioID.DailyComplete);
        mj.EventManager.emit(DailyEvents.DAILY_SHOW_REWARD_ITEM, e);
      }
    }
  }
  initWidget() {
    var t,
      e = null === (t = this.node) || void 0 === t ? void 0 : t.getComponent(cc.Widget);
    if (e) {
      Object.assign(e, {
        isAlignTop: true,
        isAbsoluteTop: true,
        top: 0,
        isAlignBottom: true,
        isAbsoluteBottom: true,
        bottom: 0,
        isAlignLeft: false,
        isAlignRight: false
      });
      e.updateAlignment();
    }
  }
  setDaySelectCallback(t) {
    this._onDaySelect = t;
  }
  onDayItemClick(t) {
    var e;
    if (null == t ? void 0 : t.day) {
      var i = this._dayItems.find(function (e) {
        var i = e.getData();
        return (null == i ? void 0 : i.id) === t.id && (null == i ? void 0 : i.day) === t.day;
      });
      if (i) {
        this.triggerEffect(i, t, "select");
        DailyModel.getInstance().isSelectedDay = true;
      }
      null === (e = this._onDaySelect) || void 0 === e || e.call(this, t.id, t.day);
    }
  }
  onMoreClick() {
    ControllerManager.getInstance().pushViewByController("DailyCollController", {
      isShowAction: false,
      enterType: 1
    });
  }
  onDayEffectShow(t) {
    var e;
    if ((null == t ? void 0 : t.data) && this._effDay && this._effDayParent && t.data.id === (null === (e = this._data) || void 0 === e ? void 0 : e.id)) {
      var i = {
        select: "in_select",
        mark: "in_mark",
        done: "in_done"
      }[t.effectType];
      if (i) {
        var o = this._calendarContainer.convertToWorldSpaceAR(cc.v2(t.position.x, t.position.y)),
          n = this._effDayParent.convertToNodeSpaceAR(o);
        this._effDay.node.active = true;
        this._effDay.node.position = cc.v3(n.x, n.y, 0);
        playSpineAnim(this._effDay, 1, i, null, false, 1);
      }
    }
  }
  getCellData() {
    return this._data;
  }
  isInitialized() {
    return this._isInitialized;
  }
  onDestroy() {
    mj.EventManager.off(DailyEvents.DAILY_DAY_EFFECT_SHOW, this.onDayEffectShow, this);
    this.destroyDayItems();
    this._data = null;
    this._onDaySelect = null;
    this._dailyModel = null;
    this._effDay = null;
    this._effDayParent = null;
    this._onDayItemClickBound = null;
    this._isInitialized = false;
    super.onDestroy.call(this);
  }
}