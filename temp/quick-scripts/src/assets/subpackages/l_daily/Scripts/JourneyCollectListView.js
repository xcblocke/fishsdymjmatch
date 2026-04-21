"use strict";
cc._RF.push(module, 'd296ebLCvVPpquyGR5BqrWp', 'JourneyCollectListView');
// subpackages/l_daily/Scripts/JourneyCollectListView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var JourneyCollectCellItem_1 = require("./JourneyCollectCellItem");
var CollectListUI_1 = require("./CollectListUI");
var JourneyCollectListView = /** @class */ (function (_super) {
    __extends(JourneyCollectListView, _super);
    function JourneyCollectListView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JourneyCollectListView_1 = JourneyCollectListView;
    JourneyCollectListView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    JourneyCollectListView.prototype.initCellSize = function () {
        var t = JourneyCollectListView_1.CELL_HEIGHTS2, e = t.NORMAL, o = t.START, n = t.FIRST;
        this._cellHeight = e;
        this._startCellHeight = o;
        this._firstCellHeight = n;
    };
    JourneyCollectListView.prototype.cellAtIndex = function (t, e) {
        if (e < 0 || e >= this._dataList.length)
            return null;
        var i = this._tableView.dequeueCellByKey("journeyCollectCellItem");
        i || (i = JourneyCollectCellItem_1.default.createCell("journeyCollectCellItem"));
        var o = null == i ? void 0 : i.getComponent(JourneyCollectCellItem_1.default);
        o && o.updateCell(this._dataList[e]);
        return i;
    };
    var JourneyCollectListView_1;
    JourneyCollectListView.CELL_HEIGHTS2 = {
        NORMAL: 450,
        START: 600,
        FIRST: 500
    };
    JourneyCollectListView = JourneyCollectListView_1 = __decorate([
        mj.class
    ], JourneyCollectListView);
    return JourneyCollectListView;
}(CollectListUI_1.default));
exports.default = JourneyCollectListView;

cc._RF.pop();