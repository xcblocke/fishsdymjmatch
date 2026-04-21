
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/CollectListUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de88cag5M5H2JipCulKVl2T', 'CollectListUI');
// subpackages/l_daily/Scripts/CollectListUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DailyCollectCellItem_1 = require("./DailyCollectCellItem");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var TableView_1 = require("../../../Scripts/TableView");
var CollectListUI = /** @class */ (function (_super) {
    __extends(CollectListUI, _super);
    function CollectListUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dataList = [];
        return _this;
    }
    CollectListUI_1 = CollectListUI;
    CollectListUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initCellSize();
        this._scrollView = this.node.getComponent(cc.ScrollView);
        this.initTableView();
    };
    CollectListUI.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    CollectListUI.prototype.initCellSize = function () {
        var t = CollectListUI_1.CELL_HEIGHTS, e = t.NORMAL, o = t.START, n = t.FIRST;
        this._cellHeight = e;
        this._startCellHeight = o;
        this._firstCellHeight = n;
    };
    CollectListUI.prototype.initTableView = function () {
        if (this._scrollView && cc.isValid(this._scrollView.node)) {
            this._tableView = new TableView_1.TableView({
                view: this._scrollView,
                isReused: true,
                isCellActive: false
            });
            this._tableView.cellSizeForTable = this.cellSizeForTable.bind(this);
            this._tableView.numberOfCellsInTableView = this.numberOfCellsInTableView.bind(this);
            this._tableView.cellAtIndex = this.cellAtIndex.bind(this);
            this._tableView.cellWillShow = this.cellWillShow.bind(this);
            this._tableView.cellWillHide = this.cellWillHide.bind(this);
        }
        else
            console.error("[CollectListUI] ScrollView未初始化");
    };
    CollectListUI.prototype.cellSizeForTable = function (t, e) {
        var i = this._dataList[e];
        if (!i)
            return cc.size(t.content.width, this._cellHeight);
        var o = this._cellHeight;
        if (null == i ? void 0 : i.start) {
            o = this._startCellHeight;
        }
        else {
            (null == i ? void 0 : i.first) && (o = this._firstCellHeight);
        }
        return cc.size(t.content.width, o);
    };
    CollectListUI.prototype.numberOfCellsInTableView = function () {
        return this._dataList ? this._dataList.length : 0;
    };
    CollectListUI.prototype.cellAtIndex = function (t, e) {
        if (e < 0 || e >= this._dataList.length)
            return null;
        var o = this._tableView.dequeueCellByKey(CollectListUI_1.CELL_KEY);
        if (!o && !(o = DailyCollectCellItem_1.default.createCell(CollectListUI_1.CELL_KEY)))
            return null;
        var n = o.getComponent(DailyCollectCellItem_1.default);
        n && n.updateCell(this._dataList[e]);
        return o;
    };
    CollectListUI.prototype.cellWillShow = function () { };
    CollectListUI.prototype.cellWillHide = function () { };
    CollectListUI.prototype.refreshList = function (t) {
        var e, o = this;
        if (t && 0 !== t.length) {
            this._dataList = t;
            this._scrollView.node.opacity = 0;
            this._tableView.reloadData();
            this._scrollView && cc.isValid(this._scrollView.node) && this.scheduleOnce(function () {
                if (cc.isValid(o._scrollView)) {
                    o._scrollView.node.opacity = 255;
                    o._scrollView.scrollToOffset(cc.v2(0, 0), 0);
                }
            }, CollectListUI_1.SCROLL_DELAY);
        }
        else {
            this._dataList = [];
            null === (e = this._tableView) || void 0 === e || e.reloadData();
        }
    };
    var CollectListUI_1;
    CollectListUI.CELL_HEIGHTS = {
        NORMAL: 400,
        START: 660,
        FIRST: 550
    };
    CollectListUI.CELL_KEY = "dailyCollectCellItem";
    CollectListUI.SCROLL_DELAY = 0.1;
    CollectListUI = CollectListUI_1 = __decorate([
        mj.class
    ], CollectListUI);
    return CollectListUI;
}(BaseUI_1.default));
exports.default = CollectListUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvQ29sbGVjdExpc3RVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELCtEQUEwRDtBQUMxRCx3REFBdUQ7QUFFdkQ7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFtRkM7UUFsRkMsZUFBUyxHQUFHLEVBQUUsQ0FBQzs7SUFrRmpCLENBQUM7c0JBbkZvQixhQUFhO0lBU2hDLDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcsZUFBYSxDQUFDLFlBQVksRUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHFDQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxF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VixLQUFLLEVBQUUsR0FBRztLQUNYLENBQUM7SUFDSyxzQkFBUSxHQUFHLHNCQUFzQixDQUFDO0lBQ2xDLDBCQUFZLEdBQUcsR0FBRyxDQUFDO0lBUlAsYUFBYTtRQURqQyxFQUFFLENBQUMsS0FBSztPQUNZLGFBQWEsQ0FtRmpDO0lBQUQsb0JBQUM7Q0FuRkQsQUFtRkMsQ0FuRjBDLGdCQUFNLEdBbUZoRDtrQkFuRm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFpbHlDb2xsZWN0Q2VsbEl0ZW0gZnJvbSAnLi9EYWlseUNvbGxlY3RDZWxsSXRlbSc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgeyBUYWJsZVZpZXcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1RhYmxlVmlldyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3RMaXN0VUkgZXh0ZW5kcyBCYXNlVUkge1xuICBfZGF0YUxpc3QgPSBbXTtcbiAgc3RhdGljIENFTExfSEVJR0hUUyA9IHtcbiAgICBOT1JNQUw6IDQwMCxcbiAgICBTVEFSVDogNjYwLFxuICAgIEZJUlNUOiA1NTBcbiAgfTtcbiAgc3RhdGljIENFTExfS0VZID0gXCJkYWlseUNvbGxlY3RDZWxsSXRlbVwiO1xuICBzdGF0aWMgU0NST0xMX0RFTEFZID0gMC4xO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q2VsbFNpemUoKTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICB0aGlzLmluaXRUYWJsZVZpZXcoKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbiAgaW5pdENlbGxTaXplKCkge1xuICAgIHZhciB0ID0gQ29sbGVjdExpc3RVSS5DRUxMX0hFSUdIVFMsXG4gICAgICBlID0gdC5OT1JNQUwsXG4gICAgICBvID0gdC5TVEFSVCxcbiAgICAgIG4gPSB0LkZJUlNUO1xuICAgIHRoaXMuX2NlbGxIZWlnaHQgPSBlO1xuICAgIHRoaXMuX3N0YXJ0Q2VsbEhlaWdodCA9IG87XG4gICAgdGhpcy5fZmlyc3RDZWxsSGVpZ2h0ID0gbjtcbiAgfVxuICBpbml0VGFibGVWaWV3KCkge1xuICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3ICYmIGNjLmlzVmFsaWQodGhpcy5fc2Nyb2xsVmlldy5ub2RlKSkge1xuICAgICAgdGhpcy5fdGFibGVWaWV3ID0gbmV3IFRhYmxlVmlldyh7XG4gICAgICAgIHZpZXc6IHRoaXMuX3Njcm9sbFZpZXcsXG4gICAgICAgIGlzUmV1c2VkOiB0cnVlLFxuICAgICAgICBpc0NlbGxBY3RpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsU2l6ZUZvclRhYmxlID0gdGhpcy5jZWxsU2l6ZUZvclRhYmxlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLl90YWJsZVZpZXcubnVtYmVyT2ZDZWxsc0luVGFibGVWaWV3ID0gdGhpcy5udW1iZXJPZkNlbGxzSW5UYWJsZVZpZXcuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsQXRJbmRleCA9IHRoaXMuY2VsbEF0SW5kZXguYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsV2lsbFNob3cgPSB0aGlzLmNlbGxXaWxsU2hvdy5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5fdGFibGVWaWV3LmNlbGxXaWxsSGlkZSA9IHRoaXMuY2VsbFdpbGxIaWRlLmJpbmQodGhpcyk7XG4gICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoXCJbQ29sbGVjdExpc3RVSV0gU2Nyb2xsVmlld+acquWIneWni+WMllwiKTtcbiAgfVxuICBjZWxsU2l6ZUZvclRhYmxlKHQsIGUpIHtcbiAgICB2YXIgaSA9IHRoaXMuX2RhdGFMaXN0W2VdO1xuICAgIGlmICghaSkgcmV0dXJuIGNjLnNpemUodC5jb250ZW50LndpZHRoLCB0aGlzLl9jZWxsSGVpZ2h0KTtcbiAgICB2YXIgbyA9IHRoaXMuX2NlbGxIZWlnaHQ7XG4gICAgaWYgKG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuc3RhcnQpIHtcbiAgICAgIG8gPSB0aGlzLl9zdGFydENlbGxIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIChudWxsID09IGkgPyB2b2lkIDAgOiBpLmZpcnN0KSAmJiAobyA9IHRoaXMuX2ZpcnN0Q2VsbEhlaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBjYy5zaXplKHQuY29udGVudC53aWR0aCwgbyk7XG4gIH1cbiAgbnVtYmVyT2ZDZWxsc0luVGFibGVWaWV3KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhTGlzdCA/IHRoaXMuX2RhdGFMaXN0Lmxlbmd0aCA6IDA7XG4gIH1cbiAgY2VsbEF0SW5kZXgodCwgZSkge1xuICAgIGlmIChlIDwgMCB8fCBlID49IHRoaXMuX2RhdGFMaXN0Lmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG8gPSB0aGlzLl90YWJsZVZpZXcuZGVxdWV1ZUNlbGxCeUtleShDb2xsZWN0TGlzdFVJLkNFTExfS0VZKTtcbiAgICBpZiAoIW8gJiYgIShvID0gRGFpbHlDb2xsZWN0Q2VsbEl0ZW0uY3JlYXRlQ2VsbChDb2xsZWN0TGlzdFVJLkNFTExfS0VZKSkpIHJldHVybiBudWxsO1xuICAgIHZhciBuID0gby5nZXRDb21wb25lbnQoRGFpbHlDb2xsZWN0Q2VsbEl0ZW0pO1xuICAgIG4gJiYgbi51cGRhdGVDZWxsKHRoaXMuX2RhdGFMaXN0W2VdKTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBjZWxsV2lsbFNob3coKSB7fVxuICBjZWxsV2lsbEhpZGUoKSB7fVxuICByZWZyZXNoTGlzdCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBvID0gdGhpcztcbiAgICBpZiAodCAmJiAwICE9PSB0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YUxpc3QgPSB0O1xuICAgICAgdGhpcy5fc2Nyb2xsVmlldy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fdGFibGVWaWV3LnJlbG9hZERhdGEoKTtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXcgJiYgY2MuaXNWYWxpZCh0aGlzLl9zY3JvbGxWaWV3Lm5vZGUpICYmIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoby5fc2Nyb2xsVmlldykpIHtcbiAgICAgICAgICBvLl9zY3JvbGxWaWV3Lm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICBvLl9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIDApLCAwKTtcbiAgICAgICAgfVxuICAgICAgfSwgQ29sbGVjdExpc3RVSS5TQ1JPTExfREVMQVkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhTGlzdCA9IFtdO1xuICAgICAgbnVsbCA9PT0gKGUgPSB0aGlzLl90YWJsZVZpZXcpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnJlbG9hZERhdGEoKTtcbiAgICB9XG4gIH1cbn0iXX0=