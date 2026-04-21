import DailyCollectCellItem from './DailyCollectCellItem';
import CollectListUI from './CollectListUI';
@mj.class
export default class DailyCollectListView extends CollectListUI {
  onLoad() {
    super.onLoad.call(this);
  }
  cellAtIndex(t, e) {
    var i = this._tableView.dequeueCellByKey("dailyCollectCellItem");
    i || (i = DailyCollectCellItem.createCell("dailyCollectCellItem"));
    var o = i.getComponent(DailyCollectCellItem);
    o && o.updateCell(this._dataList[e]);
    return i;
  }
}