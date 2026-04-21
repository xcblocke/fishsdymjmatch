
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyCollectListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c874e8+eVpPf7VLwCyBHgg8', 'DailyCollectListView');
// subpackages/l_daily/Scripts/DailyCollectListView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DailyCollectCellItem_1 = require("./DailyCollectCellItem");
var CollectListUI_1 = require("./CollectListUI");
var DailyCollectListView = /** @class */ (function (_super) {
    __extends(DailyCollectListView, _super);
    function DailyCollectListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyCollectListView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyCollectListView.prototype.cellAtIndex = function (t, e) {
        var i = this._tableView.dequeueCellByKey("dailyCollectCellItem");
        i || (i = DailyCollectCellItem_1.default.createCell("dailyCollectCellItem"));
        var o = i.getComponent(DailyCollectCellItem_1.default);
        o && o.updateCell(this._dataList[e]);
        return i;
    };
    DailyCollectListView = __decorate([
        mj.class
    ], DailyCollectListView);
    return DailyCollectListView;
}(CollectListUI_1.default));
exports.default = DailyCollectListView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlDb2xsZWN0TGlzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxpREFBNEM7QUFFNUM7SUFBa0Qsd0NBQWE7SUFBL0Q7O0lBV0EsQ0FBQztJQVZDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwwQ0FBVyxHQUFYLFVBQVksQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDakUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLDhCQUFvQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyw4QkFBb0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFWa0Isb0JBQW9CO1FBRHhDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksb0JBQW9CLENBV3hDO0lBQUQsMkJBQUM7Q0FYRCxBQVdDLENBWGlELHVCQUFhLEdBVzlEO2tCQVhvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFpbHlDb2xsZWN0Q2VsbEl0ZW0gZnJvbSAnLi9EYWlseUNvbGxlY3RDZWxsSXRlbSc7XG5pbXBvcnQgQ29sbGVjdExpc3RVSSBmcm9tICcuL0NvbGxlY3RMaXN0VUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUNvbGxlY3RMaXN0VmlldyBleHRlbmRzIENvbGxlY3RMaXN0VUkge1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgY2VsbEF0SW5kZXgodCwgZSkge1xuICAgIHZhciBpID0gdGhpcy5fdGFibGVWaWV3LmRlcXVldWVDZWxsQnlLZXkoXCJkYWlseUNvbGxlY3RDZWxsSXRlbVwiKTtcbiAgICBpIHx8IChpID0gRGFpbHlDb2xsZWN0Q2VsbEl0ZW0uY3JlYXRlQ2VsbChcImRhaWx5Q29sbGVjdENlbGxJdGVtXCIpKTtcbiAgICB2YXIgbyA9IGkuZ2V0Q29tcG9uZW50KERhaWx5Q29sbGVjdENlbGxJdGVtKTtcbiAgICBvICYmIG8udXBkYXRlQ2VsbCh0aGlzLl9kYXRhTGlzdFtlXSk7XG4gICAgcmV0dXJuIGk7XG4gIH1cbn0iXX0=