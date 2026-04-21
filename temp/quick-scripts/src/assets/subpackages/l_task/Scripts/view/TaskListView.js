"use strict";
cc._RF.push(module, '5381fw3XnxM06rq9np9XX0u', 'TaskListView');
// subpackages/l_task/Scripts/view/TaskListView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var TableView_1 = require("../../../../Scripts/TableView");
var TaskItemView_1 = require("../TaskItemView");
var TaskListView = /** @class */ (function (_super) {
    __extends(TaskListView, _super);
    function TaskListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._taskDataList = [];
        _this._cellHeight = 230;
        _this._cellWidth = 900;
        return _this;
    }
    TaskListView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._scrollView = this.node.getComponent(cc.ScrollView);
        if (this._scrollView) {
            var e = this.node.getContentSize();
            this._cellWidth = e.width;
            this.initTableView();
        }
    };
    TaskListView.prototype.initTableView = function () {
        var t = this;
        if (this._scrollView) {
            this._tableView = new TableView_1.TableView({
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
                o || (o = TaskItemView_1.default.createCell("task"));
                var i = o.getComponent(TaskItemView_1.default);
                i && a < t._taskDataList.length && i.updateCell(t._taskDataList[a]);
                return o;
            };
        }
    };
    TaskListView.prototype.refreshList = function (t) {
        this._taskDataList = t || [];
        this._tableView && this._tableView.reloadData();
    };
    TaskListView.prototype.getDataList = function () {
        return this._taskDataList;
    };
    TaskListView.prototype.getTableView = function () {
        return this._tableView;
    };
    __decorate([
        mj.traitEvent("TaskListView_onLoad")
    ], TaskListView.prototype, "onLoad", null);
    TaskListView = __decorate([
        mj.class
    ], TaskListView);
    return TaskListView;
}(BaseUI_1.default));
exports.default = TaskListView;

cc._RF.pop();