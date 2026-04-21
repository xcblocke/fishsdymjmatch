
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/view/TaskListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy92aWV3L1Rhc2tMaXN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDJEQUEwRDtBQUMxRCxnREFBMkM7QUFFM0M7SUFBMEMsZ0NBQU07SUFBaEQ7UUFBQSxxRUErQ0M7UUE5Q0MsbUJBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVcsR0FBRyxHQUFHLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxHQUFHLENBQUM7O0lBNENuQixDQUFDO0lBMUNDLDZCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQVMsQ0FBQztnQkFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN0QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxZQUFZLEVBQUUsS0FBSzthQUNwQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsR0FBRztnQkFDekMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsc0JBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLE9BQU8sQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ0Qsa0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDRCxrQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUF6Q0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzhDQVNwQztJQWJrQixZQUFZO1FBRGhDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksWUFBWSxDQStDaEM7SUFBRCxtQkFBQztDQS9DRCxBQStDQyxDQS9DeUMsZ0JBQU0sR0ErQy9DO2tCQS9Db0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IFRhYmxlVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvVGFibGVWaWV3JztcbmltcG9ydCBUYXNrSXRlbVZpZXcgZnJvbSAnLi4vVGFza0l0ZW1WaWV3JztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0xpc3RWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgX3Rhc2tEYXRhTGlzdCA9IFtdO1xuICBfY2VsbEhlaWdodCA9IDIzMDtcbiAgX2NlbGxXaWR0aCA9IDkwMDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUYXNrTGlzdFZpZXdfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICBpZiAodGhpcy5fc2Nyb2xsVmlldykge1xuICAgICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgIHRoaXMuX2NlbGxXaWR0aCA9IGUud2lkdGg7XG4gICAgICB0aGlzLmluaXRUYWJsZVZpZXcoKTtcbiAgICB9XG4gIH1cbiAgaW5pdFRhYmxlVmlldygpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcpIHtcbiAgICAgIHRoaXMuX3RhYmxlVmlldyA9IG5ldyBUYWJsZVZpZXcoe1xuICAgICAgICB2aWV3OiB0aGlzLl9zY3JvbGxWaWV3LFxuICAgICAgICBpc1JldXNlZDogdHJ1ZSxcbiAgICAgICAgaXNDZWxsQWN0aXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLl90YWJsZVZpZXcuY2VsbFNpemVGb3JUYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNjLnNpemUodC5fY2VsbFdpZHRoLCB0Ll9jZWxsSGVpZ2h0KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl90YWJsZVZpZXcubnVtYmVyT2ZDZWxsc0luVGFibGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdC5fdGFza0RhdGFMaXN0Lmxlbmd0aDtcbiAgICAgIH07XG4gICAgICB0aGlzLl90YWJsZVZpZXcuY2VsbEF0SW5kZXggPSBmdW5jdGlvbiAoZSwgYSkge1xuICAgICAgICB2YXIgbyA9IHQuX3RhYmxlVmlldy5kZXF1ZXVlQ2VsbEJ5S2V5KFwidGFza1wiKTtcbiAgICAgICAgbyB8fCAobyA9IFRhc2tJdGVtVmlldy5jcmVhdGVDZWxsKFwidGFza1wiKSk7XG4gICAgICAgIHZhciBpID0gby5nZXRDb21wb25lbnQoVGFza0l0ZW1WaWV3KTtcbiAgICAgICAgaSAmJiBhIDwgdC5fdGFza0RhdGFMaXN0Lmxlbmd0aCAmJiBpLnVwZGF0ZUNlbGwodC5fdGFza0RhdGFMaXN0W2FdKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZWZyZXNoTGlzdCh0KSB7XG4gICAgdGhpcy5fdGFza0RhdGFMaXN0ID0gdCB8fCBbXTtcbiAgICB0aGlzLl90YWJsZVZpZXcgJiYgdGhpcy5fdGFibGVWaWV3LnJlbG9hZERhdGEoKTtcbiAgfVxuICBnZXREYXRhTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0RhdGFMaXN0O1xuICB9XG4gIGdldFRhYmxlVmlldygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFibGVWaWV3O1xuICB9XG59Il19