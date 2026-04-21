
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameRefreshTiles.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4950ey61zVP9qtPox/2+sCe', 'DGameRefreshTiles');
// Scripts/gamePlay/dot/DGameRefreshTiles.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameRefreshTiles = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotGameRefreshTiles = /** @class */ (function () {
    function DotGameRefreshTiles() {
    }
    DotGameRefreshTiles.dot = function (e, t) {
        if (!e.isVideo) {
            var o = e.getGameData(), r = {
                source_csv: t.sourceCsv,
                game_id: o.getGameId(),
                game_count: o.getGameCount(),
                round_num: o.getCurrentBatchId(),
                score: o.getScore(),
                combo_cnt: o.getComboNum(),
                pre_op_pairs: t.preOpPairs,
                end_op_pairs: t.endOpPairs,
                algo_coord: t.algoCoord,
                algo_cardid: t.algoCardId,
                pre_tile_num: t.preTileNum,
                end_tile_num: t.endTileNum,
                pre_board_xyz: t.preBoardXyz,
                board_xyz: t.boardXyz,
                pre_board_structure: t.preBoardStructure,
                end_board_structure: t.endBoardStructure
            };
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameRefreshTiles, r);
        }
    };
    return DotGameRefreshTiles;
}());
exports.DotGameRefreshTiles = DotGameRefreshTiles;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZVJlZnJlc2hUaWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUErRDtBQUMvRCw4RUFBeUU7QUFDekU7SUFBQTtJQXlCQSxDQUFDO0lBeEJRLHVCQUFHLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNyQixDQUFDLEdBQUc7Z0JBQ0YsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFDdEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzVCLFNBQVMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNuQixTQUFTLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLENBQUMsQ0FBQyxVQUFVO2dCQUMxQixZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVU7Z0JBQzFCLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUztnQkFDdkIsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVO2dCQUN6QixZQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVU7Z0JBQzFCLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVTtnQkFDMUIsYUFBYSxFQUFFLENBQUMsQ0FBQyxXQUFXO2dCQUM1QixTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ3JCLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxpQkFBaUI7Z0JBQ3hDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxpQkFBaUI7YUFDekMsQ0FBQztZQUNKLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7SUFDSCwwQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRUcmFja2luZ1R5cGUgfSBmcm9tICcuLi8uLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5leHBvcnQgY2xhc3MgRG90R2FtZVJlZnJlc2hUaWxlcyB7XG4gIHN0YXRpYyBkb3QoZSwgdCkge1xuICAgIGlmICghZS5pc1ZpZGVvKSB7XG4gICAgICB2YXIgbyA9IGUuZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgciA9IHtcbiAgICAgICAgICBzb3VyY2VfY3N2OiB0LnNvdXJjZUNzdixcbiAgICAgICAgICBnYW1lX2lkOiBvLmdldEdhbWVJZCgpLFxuICAgICAgICAgIGdhbWVfY291bnQ6IG8uZ2V0R2FtZUNvdW50KCksXG4gICAgICAgICAgcm91bmRfbnVtOiBvLmdldEN1cnJlbnRCYXRjaElkKCksXG4gICAgICAgICAgc2NvcmU6IG8uZ2V0U2NvcmUoKSxcbiAgICAgICAgICBjb21ib19jbnQ6IG8uZ2V0Q29tYm9OdW0oKSxcbiAgICAgICAgICBwcmVfb3BfcGFpcnM6IHQucHJlT3BQYWlycyxcbiAgICAgICAgICBlbmRfb3BfcGFpcnM6IHQuZW5kT3BQYWlycyxcbiAgICAgICAgICBhbGdvX2Nvb3JkOiB0LmFsZ29Db29yZCxcbiAgICAgICAgICBhbGdvX2NhcmRpZDogdC5hbGdvQ2FyZElkLFxuICAgICAgICAgIHByZV90aWxlX251bTogdC5wcmVUaWxlTnVtLFxuICAgICAgICAgIGVuZF90aWxlX251bTogdC5lbmRUaWxlTnVtLFxuICAgICAgICAgIHByZV9ib2FyZF94eXo6IHQucHJlQm9hcmRYeXosXG4gICAgICAgICAgYm9hcmRfeHl6OiB0LmJvYXJkWHl6LFxuICAgICAgICAgIHByZV9ib2FyZF9zdHJ1Y3R1cmU6IHQucHJlQm9hcmRTdHJ1Y3R1cmUsXG4gICAgICAgICAgZW5kX2JvYXJkX3N0cnVjdHVyZTogdC5lbmRCb2FyZFN0cnVjdHVyZVxuICAgICAgICB9O1xuICAgICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkdhbWVSZWZyZXNoVGlsZXMsIHIpO1xuICAgIH1cbiAgfVxufSJdfQ==