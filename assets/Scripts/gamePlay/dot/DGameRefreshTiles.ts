import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
export class DotGameRefreshTiles {
  static dot(e, t) {
    if (!e.isVideo) {
      var o = e.getGameData(),
        r = {
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
      EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameRefreshTiles, r);
    }
  }
}