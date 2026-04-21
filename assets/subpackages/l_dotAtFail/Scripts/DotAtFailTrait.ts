import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { EventTrackingType } from '../../../Scripts/base/event/EventData';
import EventTrackingManager from '../../../Scripts/base/event/EventTrackingManager';
import { DotUtil } from '../../../Scripts/gamePlay/dot/DotUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
enum i {
  UseShuffle = 0,
  UseAdShuffle = 1,
  Replay = 2,
}
@mj.trait
@mj.class("DotAtFailTrait")
export default class DotAtFailTrait extends Trait {
  static traitKey = "DotAtFail";
  onFailVw_show(t, e) {
    var r = this.generateData();
    this.dotPopup(r);
    e();
  }
  onFailVw_watchAdShuffle(t, e) {
    var r = this.generateData(true, i.UseAdShuffle);
    this.dotClick(r);
    e();
  }
  onFailVw_useShuffle(t, e) {
    var r = this.generateData(true, i.UseShuffle);
    this.dotClick(r);
    e();
  }
  onFailVw_replay(t, e) {
    var r = this.generateData(true, i.Replay);
    this.dotClick(r);
    e();
  }
  generateData(t = false, e = i.UseShuffle) {
    var r = UserModel.getInstance(),
      a = r.getCurrentGameType();
    if (a === MjGameType.None) return null;
    var o = r.getGameDataByGameType(a),
      n = o.getClearTileCount() / o.getTotalTileCount(),
      l = o.getPopupFailCnt(),
      s = Math.floor(o.getCurrentRoundTime()),
      u = o.getShuffleNums(),
      d = u > 0 ? 0 : 1,
      y = {
        game_id: o.getGameId(),
        game_type: DotUtil.getGameId(a),
        process: n,
        deadlock_cnt: l,
        level_id: o.getCurrentLevelId(),
        game_time_real: s,
        popup_type: d
      };
    t && (e === i.UseShuffle ? y.click_target = 0 : e === i.UseAdShuffle ? y.click_target = 3 : e === i.Replay && (y.click_target = u > 0 ? 1 : 2));
    return y;
  }
  dotPopup(t) {
    t && EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameDeadLockPopup, t);
  }
  dotClick(t) {
    t && EventTrackingManager.getInstance().trackEvent(EventTrackingType.GameDeadLockClick, t);
  }
}