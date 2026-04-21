import { DisplayType, EDailyAudioID, DailyStatus } from './DailyTypes';
import DailyCollectListView from './DailyCollectListView';
import JourneyCollectListView from './JourneyCollectListView';
import DailyModel from './DailyModel';
import UIView from '../../../Scripts/framework/ui/UIView';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import { DotGameBtnClick, EBadgeClickType } from '../../../Scripts/dot/DGameBtnClick';
@mj.class
export default class DailyCollectView extends UIView {
  @mj.component("nodeCollectView", cc.ScrollView)
  _scrollViewNode: "nodeCollectView" = null;
  @mj.component("nodeCollectView0", cc.ScrollView)
  _scrollViewNode0: "nodeCollectView0" = null;
  @mj.component("node_top/btn_back", cc.Button)
  _btnBack: "node_top/btn_back" = null;
  @mj.component("btn_change/btn_daily", cc.Button)
  _btnDaily: "btn_change/btn_daily" = null;
  @mj.component("btn_change/btn_journey", cc.Button)
  _btnJourney: "btn_change/btn_journey" = null;
  @mj.component("btn_change/lab_deily", cc.Label)
  _labDaily: "btn_change/lab_deily" = null;
  @mj.component("btn_change/lab_journey", cc.Label)
  _labJourney: "btn_change/lab_journey" = null;
  @mj.component("node_top/txt_title", cc.Label)
  _txtTitle: "node_top/txt_title" = null;
  @mj.node("item_empty")
  _itemEmpty: "item_empty" = null;
  @mj.component("item_empty/txt_empty", cc.RichText)
  _txtEmpty: "item_empty/txt_empty" = null;
  _dailyListView = null;
  _journeyListView = null;
  _dataList = [];
  _currentType = DisplayType.Daily;
  static prefabUrl = "prefabs/daily/DailyCollectView";
  static bundleName = "mainRes";
  @mj.traitEvent("DailyCollVw_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.initUserInfoUI();
    this.initDailyListView();
    this.registerEvents();
  }
  initDailyListView() {
    this._dailyListView = this._scrollViewNode.addComponent(DailyCollectListView);
    this._scrollViewNode.node.active = false;
    this._journeyListView = this._scrollViewNode0.addComponent(JourneyCollectListView);
    this._scrollViewNode0.node.active = false;
  }
  initUserInfoUI() {}
  registerEvents() {
    this.OnButtonClick(this._btnJourney.node, {
      func: this.onJourneyTabClick.bind(this),
      clickAudio: EDailyAudioID.DailyMonthSlide,
      eventType: cc.Node.EventType.TOUCH_START
    });
    this.OnButtonClick(this._btnDaily.node, {
      func: this.onDailyTabClick.bind(this),
      clickAudio: EDailyAudioID.DailyMonthSlide,
      eventType: cc.Node.EventType.TOUCH_START
    });
    this.OnButtonClick(this._btnBack.node, this.onCloseClick.bind(this));
    mj.EventManager.on("openDailyView", this.onOpenDailyView, this);
  }
  onJourneyTabClick() {
    if (this._currentType !== DisplayType.Journey) {
      this._currentType = DisplayType.Journey;
      this.updateTabButtonState(DisplayType.Journey);
      this.delegate.setCurrentType(DisplayType.Journey);
    }
  }
  onDailyTabClick() {
    if (this._currentType !== DisplayType.Daily) {
      this._currentType = DisplayType.Daily;
      this.updateTabButtonState(DisplayType.Daily);
      this.delegate.setCurrentType(DisplayType.Daily);
    }
  }
  onCloseClick() {
    DotGameBtnClick.dotBadge(EBadgeClickType.Closed);
    this.delegate.closeView();
  }
  updateTabButtonState(t) {
    var e = t === DisplayType.Journey;
    this._currentType = t;
    this._btnJourney && (this._btnJourney.node.opacity = e ? 255 : 0);
    this._btnDaily && (this._btnDaily.node.opacity = e ? 0 : 255);
    this._labJourney && (this._labJourney.node.opacity = e ? 0 : 255);
    this._labDaily && (this._labDaily.node.opacity = e ? 255 : 0);
  }
  showDataList(t) {
    this._dataList = t;
    this._scrollViewNode.node.active = this._currentType === DisplayType.Daily;
    this._scrollViewNode0.node.active = this._currentType === DisplayType.Journey;
    var e = false,
      i = "";
    if (this._currentType === DisplayType.Daily) {
      DotGameBtnClick.dotBadge(EBadgeClickType.Daily);
      this._dailyListView.refreshList(this._dataList);
      e = !DailyModel.getInstance().isOpen();
      i = "Badges_DailyChallenge_Nothing";
    } else {
      DotGameBtnClick.dotBadge(EBadgeClickType.Journey);
      this._journeyListView.refreshList(this._dataList);
      e = 0 == this._dataList.length;
      i = "Badges_Journey_Nothing";
    }
    this._itemEmpty.active = e;
    e && (this._txtEmpty.string = I18NStrings.get(i));
  }
  onOpenDailyView(t) {
    t && t.type === DailyStatus.Unlocked && mj.EventManager.emit("openDailyView", {
      year: t.year,
      month: t.month,
      type: t.type
    });
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
}