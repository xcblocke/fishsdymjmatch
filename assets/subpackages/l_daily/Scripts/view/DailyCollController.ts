import ViewController, { viewMode } from '../../../../Scripts/framework/controller/ViewController';
import { BadgeType } from '../../../../Scripts/gamePlay/badge/mode/BadgeMode';
import { DotGameBtnClick, EDailyClickType } from '../../../../Scripts/dot/DGameBtnClick';
import { DotGamePageShow, EPageShowType } from '../../../../Scripts/dot/DGamePageShow';
import DailyModel from '../DailyModel';
import { DisplayType } from '../DailyTypes';
import DailyCollectView from '../DailyCollectView';
@mj.class("DailyCollController")
export default class DailyCollController extends ViewController {
  viewClass = DailyCollectView;
  viewMode = viewMode.SCENE;
  _model = null;
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this._model = DailyModel.getInstance();
  }
  viewDidShow() {
    var e;
    super.viewDidShow.call(this);
    var i = this.getOpenType(null === (e = this.args) || void 0 === e ? void 0 : e.type);
    this.setCurrentType(i);
    DotGamePageShow.dot(EPageShowType.ExhibitionHallPage);
  }
  @mj.traitEvent("DailyCollCtrl_getOpType")
  getOpenType(t) {
    var e = DisplayType.Daily;
    t == BadgeType.Journey && (e = DisplayType.Journey);
    t == DisplayType.Journey && (e = DisplayType.Journey);
    t == DisplayType.Daily && (e = DisplayType.Daily);
    return e;
  }
  refreshUI() {
    DotGameBtnClick.dotDaily(EDailyClickType.Collect);
    this.checkTabDataList();
  }
  checkTabDataList() {
    var t = this.buildDailyRewardData();
    this.viewDoAction("updateTabButtonState", this._model.currentType);
    this.viewDoAction("showDataList", t);
  }
  buildDailyRewardData() {
    return this._model.currentType === DisplayType.Journey ? this.getJourneyDataList() : this.getDailyDataList();
  }
  getDailyDataList() {
    return this._model.getDailyDataList();
  }
  getJourneyDataList() {
    return this._model.getJourneyDataList();
  }
  setCurrentType(t) {
    this._model.currentType = t;
    this.refreshUI();
  }
  getCurrentType() {
    return this._model.currentType;
  }
  closeView() {
    var t;
    this.close();
    3 == (null === (t = this.args) || void 0 === t ? void 0 : t.enterType) && DotGamePageShow.dot(EPageShowType.ExhibitionHallToMainPage);
  }
}