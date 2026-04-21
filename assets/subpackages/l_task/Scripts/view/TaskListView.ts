import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import { TableView } from '../../../../Scripts/TableView';
import TaskItemView from '../TaskItemView';
@mj.class
export default class TaskListView extends BaseUI {
  _taskDataList = [];
  _cellHeight = 230;
  _cellWidth = 900;
  @mj.traitEvent("TaskListView_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this._scrollView = this.node.getComponent(cc.ScrollView);
    if (this._scrollView) {
      var e = this.node.getContentSize();
      this._cellWidth = e.width;
      this.initTableView();
    }
  }
  initTableView() {
    var t = this;
    if (this._scrollView) {
      this._tableView = new TableView({
        view: this._scrollView,
        isReused: true,
        isCellActive: false
      });
      this._tableView.cellSizeForTable = function () {
        return cc.size(t._cellWidth, t._cellHeight);
      };
      this._tableView.numberOfCellsInTableView = function () {
        return t._taskDataList.length;
      };
      this._tableView.cellAtIndex = function (e, a) {
        var o = t._tableView.dequeueCellByKey("task");
        o || (o = TaskItemView.createCell("task"));
        var i = o.getComponent(TaskItemView);
        i && a < t._taskDataList.length && i.updateCell(t._taskDataList[a]);
        return o;
      };
    }
  }
  refreshList(t) {
    this._taskDataList = t || [];
    this._tableView && this._tableView.reloadData();
  }
  getDataList() {
    return this._taskDataList;
  }
  getTableView() {
    return this._tableView;
  }
}