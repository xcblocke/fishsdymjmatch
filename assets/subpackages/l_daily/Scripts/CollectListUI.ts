import DailyCollectCellItem from './DailyCollectCellItem';
import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { TableView } from '../../../Scripts/TableView';
@mj.class
export default class CollectListUI extends BaseUI {
  _dataList = [];
  static CELL_HEIGHTS = {
    NORMAL: 400,
    START: 660,
    FIRST: 550
  };
  static CELL_KEY = "dailyCollectCellItem";
  static SCROLL_DELAY = 0.1;
  onLoad() {
    super.onLoad.call(this);
    this.initCellSize();
    this._scrollView = this.node.getComponent(cc.ScrollView);
    this.initTableView();
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
  initCellSize() {
    var t = CollectListUI.CELL_HEIGHTS,
      e = t.NORMAL,
      o = t.START,
      n = t.FIRST;
    this._cellHeight = e;
    this._startCellHeight = o;
    this._firstCellHeight = n;
  }
  initTableView() {
    if (this._scrollView && cc.isValid(this._scrollView.node)) {
      this._tableView = new TableView({
        view: this._scrollView,
        isReused: true,
        isCellActive: false
      });
      this._tableView.cellSizeForTable = this.cellSizeForTable.bind(this);
      this._tableView.numberOfCellsInTableView = this.numberOfCellsInTableView.bind(this);
      this._tableView.cellAtIndex = this.cellAtIndex.bind(this);
      this._tableView.cellWillShow = this.cellWillShow.bind(this);
      this._tableView.cellWillHide = this.cellWillHide.bind(this);
    } else console.error("[CollectListUI] ScrollView未初始化");
  }
  cellSizeForTable(t, e) {
    var i = this._dataList[e];
    if (!i) return cc.size(t.content.width, this._cellHeight);
    var o = this._cellHeight;
    if (null == i ? void 0 : i.start) {
      o = this._startCellHeight;
    } else {
      (null == i ? void 0 : i.first) && (o = this._firstCellHeight);
    }
    return cc.size(t.content.width, o);
  }
  numberOfCellsInTableView() {
    return this._dataList ? this._dataList.length : 0;
  }
  cellAtIndex(t, e) {
    if (e < 0 || e >= this._dataList.length) return null;
    var o = this._tableView.dequeueCellByKey(CollectListUI.CELL_KEY);
    if (!o && !(o = DailyCollectCellItem.createCell(CollectListUI.CELL_KEY))) return null;
    var n = o.getComponent(DailyCollectCellItem);
    n && n.updateCell(this._dataList[e]);
    return o;
  }
  cellWillShow() {}
  cellWillHide() {}
  refreshList(t) {
    var e,
      o = this;
    if (t && 0 !== t.length) {
      this._dataList = t;
      this._scrollView.node.opacity = 0;
      this._tableView.reloadData();
      this._scrollView && cc.isValid(this._scrollView.node) && this.scheduleOnce(function () {
        if (cc.isValid(o._scrollView)) {
          o._scrollView.node.opacity = 255;
          o._scrollView.scrollToOffset(cc.v2(0, 0), 0);
        }
      }, CollectListUI.SCROLL_DELAY);
    } else {
      this._dataList = [];
      null === (e = this._tableView) || void 0 === e || e.reloadData();
    }
  }
}