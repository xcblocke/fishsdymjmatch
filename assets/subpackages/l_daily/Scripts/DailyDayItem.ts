import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { EDailyAudioID, DailyStatus } from './DailyTypes';
@mj.class
export default class DailyDayItem extends BaseUI {
  _label = null;
  _btnClick = null;
  _imgComplete = null;
  _data = null;
  _hasEvent = false;
  _onClick = null;
  static prefabUrl = "prefabs/daily/DailyDayItem";
  onLoad() {
    super.onLoad.call(this);
    this.initComponents();
  }
  initComponents() {
    var t, e;
    this._label = null === (t = this.node.getChildByName("txt_day")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    this._imgComplete = this.node.getChildByName("img_complete");
    this._btnClick = null === (e = this.node.getChildByName("btn_click")) || void 0 === e ? void 0 : e.getComponent(cc.Button);
    this._imgComplete && (this._imgComplete.active = false);
  }
  setClickCallback(t) {
    this._onClick = t;
  }
  registerClickEvent() {
    if (!this._hasEvent && this._btnClick) {
      this.OnButtonClick(this._btnClick.node, {
        func: this.onItemClick.bind(this),
        clickAudio: EDailyAudioID.DailyDay
      });
      this._hasEvent = true;
    }
  }
  updateData(t) {
    this._data = t;
    this.refreshUI();
  }
  refreshUI() {
    this.registerClickEvent();
    this._imgComplete && (this._imgComplete.active = false);
    if (this._data && 0 !== this._data.day) {
      this.node.opacity = 255;
      this.node.active = true;
      this._label && (this._label.string = this._data.day.toString());
      this.updateState();
    } else {
      this.node.opacity = 0;
      this.node.active = true;
      this._btnClick && (this._btnClick.interactable = false);
    }
  }
  updateState() {
    if (this._data) switch (this._data.status) {
      case DailyStatus.Unopened:
      case DailyStatus.Locked:
        this.setUnopenedState();
        break;
      case DailyStatus.Unlocked:
        this.setUnlockedState();
        break;
      case DailyStatus.Completed:
        this.setCompletedState();
    }
  }
  setUnopenedState() {
    this._label && (this._label.node.color = new cc.Color().fromHEX("#c38d53"));
    this._btnClick && (this._btnClick.interactable = false);
  }
  setUnlockedState() {
    this._label && (this._label.node.color = new cc.Color().fromHEX("#9c6a4b"));
    this._btnClick && (this._btnClick.interactable = true);
  }
  setCompletedState() {
    this._label && (this._label.node.color = new cc.Color().fromHEX("#9c6a4b"));
    this._btnClick && (this._btnClick.interactable = true);
    this._imgComplete && (this._imgComplete.active = true);
  }
  getData() {
    return this._data;
  }
  onItemClick() {
    var t, e, i;
    (null === (t = this._data) || void 0 === t ? void 0 : t.day) && (null === (e = this._btnClick) || void 0 === e ? void 0 : e.interactable) && this._data.status !== DailyStatus.Unopened && this._data.status !== DailyStatus.Locked && (null === (i = this._onClick) || void 0 === i || i.call(this, this._data));
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.onItemClick, this);
    this._onClick = null;
    this._data = null;
  }
}