import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import { DotUtil } from './DotUtil';
export class DotGameMoveStep {
  static dot(e, t) {
    if (!e.isVideo) {
      var o = Object.assign({
        dt: Number(new Date().format("YYYYmmdd")),
        game_id: e.getGameData().getGameId(),
        game_type: DotUtil.getGameId(e.getGameData().gameType)
      }, t);
      EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameMoveStep, o);
    }
  }
}