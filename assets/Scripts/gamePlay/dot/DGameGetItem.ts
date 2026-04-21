import { EItemName, EGetItemReasonId } from '../../core/simulator/constant/GameTypeEnums';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import { DotUtil } from './DotUtil';
export class DotGameGetItem {
  static dot(e, t) {
    var o = e.getGameData(),
      n = {
        item_id: t.itemId,
        item_name: t.itemName ? t.itemName : EItemName[t.itemId],
        number: t.number,
        before_num: t.afterNum - t.number,
        after_num: t.afterNum,
        game_type: DotUtil.getGameId(o.gameType),
        game_mode: DotUtil.getGameId(o.gameType),
        game_play_method: DotUtil.getGamePlayMethod(o.gameType),
        level: o.getCurrentLevelId(),
        mode_num: o.getGameCount(),
        mode_num_all: o.userModel.getTotalGames(),
        reason_id: t.reasonId,
        reason_info: t.reasonInfo,
        get_num: 0,
        holder_num: 0,
        holder_card_id: "",
        process: 0,
        board_string: o.getLevelData()
      };
    this.fixInGameData(n, e, t);
    DotUtil.isTile2Game(o.gameType) && this.fixTile2Data(n, e, t);
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.GetItem, n);
  }
  static fixInGameData(e, t, o) {
    if (o.reasonId === EGetItemReasonId.AdReward) {
      var n = t.getGameData(),
        r = n.getTotalTileCount() > 0 ? n.getClearTileCount() / n.getTotalTileCount() : 0;
      e.get_num = DotUtil.getGameGotNum(t.getGameData(), o.itemId);
      e.process = r;
    }
  }
  static fixTile2Data(e, t, o) {
    var r, a;
    if (o.reasonId === EGetItemReasonId.AdReward) {
      var l = t.getGameData(),
        s = t.getTileMapObject(),
        c = l.slotBarIds,
        u = [];
      try {
        for (var p = __values(c), f = p.next(); !f.done; f = p.next()) {
          var d = f.value,
            h = s.getTileObjectByPosId(d);
          h && u.push(h.cardId);
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          f && !f.done && (a = p.return) && a.call(p);
        } finally {
          if (r) throw r.error;
        }
      }
      e.holder_card_id = u.join(",");
      e.holder_num = l.slotBarCount;
    }
  }
  static dotGetItem(e, t) {
    var o = {
      item_id: t.itemId,
      item_name: t.itemName ? t.itemName : EItemName[t.itemId],
      number: t.number,
      before_num: t.afterNum - t.number,
      after_num: t.afterNum,
      game_type: DotUtil.getGameId(e.gameType),
      game_mode: DotUtil.getGameId(e.gameType),
      game_play_method: DotUtil.getGamePlayMethod(e.gameType),
      level: e.getCurrentLevelId(),
      mode_num: e.getGameCount(),
      mode_num_all: e.userModel.getTotalGames(),
      reason_id: t.reasonId,
      reason_info: t.reasonInfo,
      get_num: 0,
      holder_num: 0,
      holder_card_id: "",
      process: 0,
      board_string: ""
    };
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.GetItem, o);
  }
}