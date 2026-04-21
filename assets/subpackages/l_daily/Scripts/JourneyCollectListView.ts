import JourneyCollectCellItem from './JourneyCollectCellItem';
import CollectListUI from './CollectListUI';
@mj.class
export default class JourneyCollectListView extends CollectListUI {
  static CELL_HEIGHTS2 = {
    NORMAL: 450,
    START: 600,
    FIRST: 500
  };
  onLoad() {
    super.onLoad.call(this);
  }
  initCellSize() {
    var t = JourneyCollectListView.CELL_HEIGHTS2,
      e = t.NORMAL,
      o = t.START,
      n = t.FIRST;
    this._cellHeight = e;
    this._startCellHeight = o;
    this._firstCellHeight = n;
  }
  cellAtIndex(t, e) {
    if (e < 0 || e >= this._dataList.length) return null;
    var i = this._tableView.dequeueCellByKey("journeyCollectCellItem");
    i || (i = JourneyCollectCellItem.createCell("journeyCollectCellItem"));
    var o = null == i ? void 0 : i.getComponent(JourneyCollectCellItem);
    o && o.updateCell(this._dataList[e]);
    return i;
  }
}