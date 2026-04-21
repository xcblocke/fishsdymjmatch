
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/JourneyCollectListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvSm91cm5leUNvbGxlY3RMaXN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELGlEQUE0QztBQUU1QztJQUFvRCwwQ0FBYTtJQUFqRTs7SUEwQkEsQ0FBQzsrQkExQm9CLHNCQUFzQjtJQU16Qyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLHdCQUFzQixDQUFDLGFBQWEsRUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELDRDQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ25FLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxnQ0FBc0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGdDQUFzQixDQUFDLENBQUM7UUFDcEUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7SUF4Qk0sb0NBQWEsR0FBRztRQUNyQixNQUFNLEVBQUUsR0FBRztRQUNYLEtBQUssRUFBRSxHQUFHO1FBQ1YsS0FBSyxFQUFFLEdBQUc7S0FDWCxDQUFDO0lBTGlCLHNCQUFzQjtRQUQxQyxFQUFFLENBQUMsS0FBSztPQUNZLHNCQUFzQixDQTBCMUM7SUFBRCw2QkFBQztDQTFCRCxBQTBCQyxDQTFCbUQsdUJBQWEsR0EwQmhFO2tCQTFCb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvdXJuZXlDb2xsZWN0Q2VsbEl0ZW0gZnJvbSAnLi9Kb3VybmV5Q29sbGVjdENlbGxJdGVtJztcbmltcG9ydCBDb2xsZWN0TGlzdFVJIGZyb20gJy4vQ29sbGVjdExpc3RVSSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvdXJuZXlDb2xsZWN0TGlzdFZpZXcgZXh0ZW5kcyBDb2xsZWN0TGlzdFVJIHtcbiAgc3RhdGljIENFTExfSEVJR0hUUzIgPSB7XG4gICAgTk9STUFMOiA0NTAsXG4gICAgU1RBUlQ6IDYwMCxcbiAgICBGSVJTVDogNTAwXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBpbml0Q2VsbFNpemUoKSB7XG4gICAgdmFyIHQgPSBKb3VybmV5Q29sbGVjdExpc3RWaWV3LkNFTExfSEVJR0hUUzIsXG4gICAgICBlID0gdC5OT1JNQUwsXG4gICAgICBvID0gdC5TVEFSVCxcbiAgICAgIG4gPSB0LkZJUlNUO1xuICAgIHRoaXMuX2NlbGxIZWlnaHQgPSBlO1xuICAgIHRoaXMuX3N0YXJ0Q2VsbEhlaWdodCA9IG87XG4gICAgdGhpcy5fZmlyc3RDZWxsSGVpZ2h0ID0gbjtcbiAgfVxuICBjZWxsQXRJbmRleCh0LCBlKSB7XG4gICAgaWYgKGUgPCAwIHx8IGUgPj0gdGhpcy5fZGF0YUxpc3QubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaSA9IHRoaXMuX3RhYmxlVmlldy5kZXF1ZXVlQ2VsbEJ5S2V5KFwiam91cm5leUNvbGxlY3RDZWxsSXRlbVwiKTtcbiAgICBpIHx8IChpID0gSm91cm5leUNvbGxlY3RDZWxsSXRlbS5jcmVhdGVDZWxsKFwiam91cm5leUNvbGxlY3RDZWxsSXRlbVwiKSk7XG4gICAgdmFyIG8gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmdldENvbXBvbmVudChKb3VybmV5Q29sbGVjdENlbGxJdGVtKTtcbiAgICBvICYmIG8udXBkYXRlQ2VsbCh0aGlzLl9kYXRhTGlzdFtlXSk7XG4gICAgcmV0dXJuIGk7XG4gIH1cbn0iXX0=