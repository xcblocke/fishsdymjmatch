"use strict";
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