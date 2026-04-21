import { ETileType } from '../../simulator/constant/TileTypeEnum';
import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
export enum EFuncUnlockType {
  Leaderboard = 0,
  Travel = 1,
  DailyChallenge = 2,
  Task = 3,
  DiscardedCard = 4,
  ItemCard = 5,
}
export class DotGameUnlock {
  static getFunctionName(e) {
    switch (e) {
      case EFuncUnlockType.Leaderboard:
        return "排行榜";
      case EFuncUnlockType.Travel:
        return "旅行";
      case EFuncUnlockType.DailyChallenge:
        return "每日挑战";
      case EFuncUnlockType.Task:
        return "任务";
      case EFuncUnlockType.DiscardedCard:
        return "扣牌";
      case EFuncUnlockType.ItemCard:
        return "道具牌";
    }
    return "未知功能名";
  }
  static dot(e) {
    var t,
      o,
      l = UserModel.getInstance().isFunctionUnlocked(EFuncUnlockType.ItemCard),
      s = UserModel.getInstance().isFunctionUnlocked(EFuncUnlockType.DiscardedCard);
    if (!l || !s) {
      var u = e.getTileMapObject().tileObjectMap(),
        p = false,
        f = false;
      try {
        for (var d = __values(u), h = d.next(); !h.done; h = d.next()) {
          var y = __read(h.value, 2),
            m = (y[0], y[1]);
          m.checkHasType(ETileType.Bomb) && (p = true);
          m.checkHasType(ETileType.RollCard) && (f = true);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          h && !h.done && (o = d.return) && o.call(d);
        } finally {
          if (t) throw t.error;
        }
      }
      !l && p && this.dotByType(EFuncUnlockType.ItemCard);
      !s && f && this.dotByType(EFuncUnlockType.DiscardedCard);
    }
  }
  static dotByType(e) {
    if (!UserModel.getInstance().isFunctionUnlocked(e)) {
      UserModel.getInstance().addFunctionUnlocked(e);
      var t = {
        function_name: this.getFunctionName(e)
      };
      EventTrackingManager.getInstance().trackEvent(EventTrackingType.FunctionUnlock, t);
    }
  }
}