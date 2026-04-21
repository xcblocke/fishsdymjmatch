"use strict";
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