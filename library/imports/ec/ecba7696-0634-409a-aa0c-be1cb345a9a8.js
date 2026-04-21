"use strict";
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