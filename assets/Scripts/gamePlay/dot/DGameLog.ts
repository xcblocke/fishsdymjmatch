import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import { DotUtil } from './DotUtil';
export class DotGameLog {
  @mj.traitEvent("DGameLog_dot")
  static dot(e) {
    if (!e.isVideo) {
      var t = e.getGameTracker();
      if (t) {
        var o = {
          log_info: JSON.stringify(t.cmds),
          puzzle: e.getGameData().getOriginalLevelData(),
          level: e.getGameData().getCurrentLevelId(),
          game_mode_name: DotUtil.getGameModeName(e.getGameData().gameType),
          game_play_method: DotUtil.getGamePlayMethod(e.getGameData().gameType),
          game_mode: DotUtil.getGameId(e.getGameData().gameType),
          mode_num: e.getGameData().getGameCount(),
          index: 1
        };
        EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameLog, o);
      }
    }
  }
}