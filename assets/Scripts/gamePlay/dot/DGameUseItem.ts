import { EShuffleFrom } from '../../simulator/constant/GameInputEnum';
import { EItemName } from '../../core/simulator/constant/GameTypeEnums';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import { DotUtil } from './DotUtil';
export class DotGameUseItem {
  static dot(e, t) {
    var o = e.getGameData(),
      n = t.from === EShuffleFrom.ClassicRevive || t.from === EShuffleFrom.Revive ? 0 : 1,
      c = o.getClearTileCount(),
      u = o.getTotalTileCount(),
      p = u > 0 ? c / u : 0,
      f = {
        item_id: t.itemId,
        item_name: EItemName[t.itemId],
        number: t.beforeNum - t.afterNum,
        before_num: t.beforeNum,
        after_num: t.afterNum,
        game_mode: DotUtil.getGameId(o.gameType),
        game_type: DotUtil.getGameId(o.gameType),
        game_play_method: DotUtil.getGamePlayMethod(o.gameType),
        level: o.getCurrentLevelId(),
        mode_num: o.getGameCount(),
        mode_num_all: o.userModel.getTotalGames(),
        reason: n,
        process: p,
        use_num: DotUtil.getGameUseNum(o, t.itemId),
        holder_num: 0,
        holder_card_id: "",
        board_string: o.getLevelData()
      };
    DotUtil.isClassicGame(e.gameType) && this.fixClassicData(f, e);
    DotUtil.isTile2Game(e.gameType) && this.fixTile2Data(f, e);
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.UseItem, f);
  }
  static fixTile2Data(e, t) {
    var o,
      i,
      r = t.getGameData(),
      a = t.getTileMapObject(),
      l = r.slotBarIds,
      s = [];
    try {
      for (var c = __values(l), u = c.next(); !u.done; u = c.next()) {
        var p = u.value,
          f = a.getTileObjectByPosId(p);
        f && s.push(f.cardId);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (i = c.return) && i.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    e.holder_card_id = s.join(",");
    e.holder_num = r.slotBarCount;
  }
  static fixClassicData(e, t) {
    var o = t.getGameData();
    e.wave = o.getCurrentBatchId();
  }
}