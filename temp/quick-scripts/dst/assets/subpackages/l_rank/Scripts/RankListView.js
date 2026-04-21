
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ecba7aWBjRAmqoMvhyzRamo', 'RankListView');
// subpackages/l_rank/Scripts/RankListView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var TableView_1 = require("../../../Scripts/TableView");
var RankItem_1 = require("./RankItem");
var RankListView = /** @class */ (function (_super) {
    __extends(RankListView, _super);
    function RankListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankDataList = [];
        _this._cellHeight = 203;
        _this._cellWidth = 1050;
        _this._isScrolling = false;
        _this._scrollEndTimer = null;
        _this._delegate = null;
        return _this;
    }
    RankListView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._scrollView = this.node.getComponent(cc.ScrollView);
        var e = this.node.getContentSize();
        this._cellWidth = e.width;
        this.initTableView();
        this.initScrollEvents();
    };
    RankListView.prototype.setDelegate = function (t) {
        this._delegate = t;
    };
    RankListView.prototype.initScrollEvents = function () {
        this._scrollView.node.on("scrolling", this.onScrolling, this);
        this._scrollView.node.on("scroll-ended", this.onScrollEnded, this);
        this._scrollView.node.on("touch-start", this.onTouchStart, this);
    };
    RankListView.prototype.onScrolling = function () {
        var t = this;
        if (!this._isScrolling) {
            this._isScrolling = true;
            this.setScrollViewInteractable(false);
        }
        if (null !== this._scrollEndTimer) {
            clearTimeout(this._scrollEndTimer);
            this._scrollEndTimer = null;
        }
        this._scrollEndTimer = setTimeout(function () {
            t.onScrollEnded();
        }, 100);
    };
    RankListView.prototype.onScrollEnded = function () {
        if (this._isScrolling) {
            this._isScrolling = false;
            this.setScrollViewInteractable(true);
        }
        if (null !== this._scrollEndTimer) {
            clearTimeout(this._scrollEndTimer);
            this._scrollEndTimer = null;
        }
    };
    RankListView.prototype.onTouchStart = function () {
        if (!this._isScrolling) {
            this._isScrolling = true;
            this.setScrollViewInteractable(false);
        }
    };
    RankListView.prototype.setInteractable = function (t) {
        this.setScrollViewInteractable(t);
    };
    RankListView.prototype.setScrollViewInteractable = function (t) {
        if (this._scrollView && cc.isValid(this._scrollView.node)) {
            var e = this._scrollView.content;
            e && cc.isValid(e) && this.setNodeInteractable(e, t);
        }
    };
    RankListView.prototype.setNodeInteractable = function (t, e) {
        if (t && cc.isValid(t)) {
            var o = t.getComponent(cc.Button);
            o && (o.interactable = e);
            for (var n = 0; n < t.children.length; n++)
                this.setNodeInteractable(t.children[n], e);
        }
    };
    RankListView.prototype.initTableView = function () {
        var t = this;
        this._tableView = new TableView_1.TableView({
            view: this._scrollView,
            isReused: true,
            isCellActive: false
        });
        this._tableView.cellSizeForTable = function () {
            return cc.size(t._cellWidth, t._cellHeight);
        };
        this._tableView.numberOfCellsInTableView = function () {
            return t._rankDataList.length;
        };
        this._tableView.cellAtIndex = function (e, o) {
            var n = t._tableView.dequeueCellByKey("rank");
            n || (n = RankItem_1.default.createCell("rank"));
            var a = n.getComponent(RankItem_1.default);
            if (a) {
                a.setDelegate(t._delegate);
                a.updateCell(t._rankDataList[o]);
            }
            return n;
        };
    };
    RankListView.prototype.refreshList = function (t) {
        this._rankDataList = t;
        this._tableView.reloadData();
    };
    RankListView.prototype.onDestroy = function () {
        if (this._scrollView && cc.isValid(this._scrollView.node)) {
            this._scrollView.node.off("scrolling", this.onScrolling, this);
            this._scrollView.node.off("scroll-ended", this.onScrollEnded, this);
            this._scrollView.node.off("touch-start", this.onTouchStart, this);
        }
        if (null !== this._scrollEndTimer) {
            clearTimeout(this._scrollEndTimer);
            this._scrollEndTimer = null;
        }
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    RankListView = __decorate([
        mj.class
    ], RankListView);
    return RankListView;
}(BaseUI_1.default));
exports.default = RankListView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rTGlzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCx3REFBdUQ7QUFDdkQsdUNBQWtDO0FBRWxDO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBNkdDO1FBNUdDLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBdUduQixDQUFDO0lBdEdDLDZCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsdUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELGtDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztZQUNoQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNqQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUNELG1DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBQ0Qsc0NBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxnREFBeUIsR0FBekIsVUFBMEIsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBQ2pDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBQ0QsMENBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hGO0lBQ0gsQ0FBQztJQUNELG9DQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQVMsQ0FBQztZQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsUUFBUSxFQUFFLElBQUk7WUFDZCxZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixHQUFHO1lBQ3pDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGtDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkU7UUFDRCxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFDRCxpQkFBTSxTQUFTLElBQUksaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBNUdrQixZQUFZO1FBRGhDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksWUFBWSxDQTZHaEM7SUFBRCxtQkFBQztDQTdHRCxBQTZHQyxDQTdHeUMsZ0JBQU0sR0E2Ry9DO2tCQTdHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IFRhYmxlVmlldyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvVGFibGVWaWV3JztcbmltcG9ydCBSYW5rSXRlbSBmcm9tICcuL1JhbmtJdGVtJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0xpc3RWaWV3IGV4dGVuZHMgQmFzZVVJIHtcbiAgX3JhbmtEYXRhTGlzdCA9IFtdO1xuICBfY2VsbEhlaWdodCA9IDIwMztcbiAgX2NlbGxXaWR0aCA9IDEwNTA7XG4gIF9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICBfc2Nyb2xsRW5kVGltZXIgPSBudWxsO1xuICBfZGVsZWdhdGUgPSBudWxsO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fc2Nyb2xsVmlldyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICB0aGlzLl9jZWxsV2lkdGggPSBlLndpZHRoO1xuICAgIHRoaXMuaW5pdFRhYmxlVmlldygpO1xuICAgIHRoaXMuaW5pdFNjcm9sbEV2ZW50cygpO1xuICB9XG4gIHNldERlbGVnYXRlKHQpIHtcbiAgICB0aGlzLl9kZWxlZ2F0ZSA9IHQ7XG4gIH1cbiAgaW5pdFNjcm9sbEV2ZW50cygpIHtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Lm5vZGUub24oXCJzY3JvbGxpbmdcIiwgdGhpcy5vblNjcm9sbGluZywgdGhpcyk7XG4gICAgdGhpcy5fc2Nyb2xsVmlldy5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25TY3JvbGxFbmRlZCwgdGhpcyk7XG4gICAgdGhpcy5fc2Nyb2xsVmlldy5ub2RlLm9uKFwidG91Y2gtc3RhcnRcIiwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICB9XG4gIG9uU2Nyb2xsaW5nKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNldFNjcm9sbFZpZXdJbnRlcmFjdGFibGUoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5fc2Nyb2xsRW5kVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zY3JvbGxFbmRUaW1lcik7XG4gICAgICB0aGlzLl9zY3JvbGxFbmRUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3Njcm9sbEVuZFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0Lm9uU2Nyb2xsRW5kZWQoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIG9uU2Nyb2xsRW5kZWQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRTY3JvbGxWaWV3SW50ZXJhY3RhYmxlKHRydWUpO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5fc2Nyb2xsRW5kVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zY3JvbGxFbmRUaW1lcik7XG4gICAgICB0aGlzLl9zY3JvbGxFbmRUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG4gIG9uVG91Y2hTdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2Nyb2xsaW5nKSB7XG4gICAgICB0aGlzLl9pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNldFNjcm9sbFZpZXdJbnRlcmFjdGFibGUoZmFsc2UpO1xuICAgIH1cbiAgfVxuICBzZXRJbnRlcmFjdGFibGUodCkge1xuICAgIHRoaXMuc2V0U2Nyb2xsVmlld0ludGVyYWN0YWJsZSh0KTtcbiAgfVxuICBzZXRTY3JvbGxWaWV3SW50ZXJhY3RhYmxlKHQpIHtcbiAgICBpZiAodGhpcy5fc2Nyb2xsVmlldyAmJiBjYy5pc1ZhbGlkKHRoaXMuX3Njcm9sbFZpZXcubm9kZSkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fc2Nyb2xsVmlldy5jb250ZW50O1xuICAgICAgZSAmJiBjYy5pc1ZhbGlkKGUpICYmIHRoaXMuc2V0Tm9kZUludGVyYWN0YWJsZShlLCB0KTtcbiAgICB9XG4gIH1cbiAgc2V0Tm9kZUludGVyYWN0YWJsZSh0LCBlKSB7XG4gICAgaWYgKHQgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIG8gPSB0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgbyAmJiAoby5pbnRlcmFjdGFibGUgPSBlKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5jaGlsZHJlbi5sZW5ndGg7IG4rKykgdGhpcy5zZXROb2RlSW50ZXJhY3RhYmxlKHQuY2hpbGRyZW5bbl0sIGUpO1xuICAgIH1cbiAgfVxuICBpbml0VGFibGVWaWV3KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl90YWJsZVZpZXcgPSBuZXcgVGFibGVWaWV3KHtcbiAgICAgIHZpZXc6IHRoaXMuX3Njcm9sbFZpZXcsXG4gICAgICBpc1JldXNlZDogdHJ1ZSxcbiAgICAgIGlzQ2VsbEFjdGl2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLl90YWJsZVZpZXcuY2VsbFNpemVGb3JUYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYy5zaXplKHQuX2NlbGxXaWR0aCwgdC5fY2VsbEhlaWdodCk7XG4gICAgfTtcbiAgICB0aGlzLl90YWJsZVZpZXcubnVtYmVyT2ZDZWxsc0luVGFibGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuX3JhbmtEYXRhTGlzdC5sZW5ndGg7XG4gICAgfTtcbiAgICB0aGlzLl90YWJsZVZpZXcuY2VsbEF0SW5kZXggPSBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgdmFyIG4gPSB0Ll90YWJsZVZpZXcuZGVxdWV1ZUNlbGxCeUtleShcInJhbmtcIik7XG4gICAgICBuIHx8IChuID0gUmFua0l0ZW0uY3JlYXRlQ2VsbChcInJhbmtcIikpO1xuICAgICAgdmFyIGEgPSBuLmdldENvbXBvbmVudChSYW5rSXRlbSk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICBhLnNldERlbGVnYXRlKHQuX2RlbGVnYXRlKTtcbiAgICAgICAgYS51cGRhdGVDZWxsKHQuX3JhbmtEYXRhTGlzdFtvXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9O1xuICB9XG4gIHJlZnJlc2hMaXN0KHQpIHtcbiAgICB0aGlzLl9yYW5rRGF0YUxpc3QgPSB0O1xuICAgIHRoaXMuX3RhYmxlVmlldy5yZWxvYWREYXRhKCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3ICYmIGNjLmlzVmFsaWQodGhpcy5fc2Nyb2xsVmlldy5ub2RlKSkge1xuICAgICAgdGhpcy5fc2Nyb2xsVmlldy5ub2RlLm9mZihcInNjcm9sbGluZ1wiLCB0aGlzLm9uU2Nyb2xsaW5nLCB0aGlzKTtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXcubm9kZS5vZmYoXCJzY3JvbGwtZW5kZWRcIiwgdGhpcy5vblNjcm9sbEVuZGVkLCB0aGlzKTtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXcubm9kZS5vZmYoXCJ0b3VjaC1zdGFydFwiLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XG4gICAgfVxuICAgIGlmIChudWxsICE9PSB0aGlzLl9zY3JvbGxFbmRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Njcm9sbEVuZFRpbWVyKTtcbiAgICAgIHRoaXMuX3Njcm9sbEVuZFRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgc3VwZXIub25EZXN0cm95ICYmIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG59Il19