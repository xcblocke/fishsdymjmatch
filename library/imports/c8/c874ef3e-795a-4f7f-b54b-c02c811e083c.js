"use strict";
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