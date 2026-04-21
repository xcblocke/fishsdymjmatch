import { EventTrackingType } from '../../base/event/EventData';
import EventTrackingManager from '../../base/event/EventTrackingManager';
import UserModel from '../user/UserModel';
import { DotUtil } from './DotUtil';
export var BUNDLE_SKIN_ID_MAP = {
  l_lanCardEN: 1,
  l_lanCardFR: 2,
  l_lanCardDE: 3,
  l_lanCardPT: 4,
  l_lanCardES: 5,
  l_lanCardJP: 6,
  l_lanCardKO: 7,
  l_lanCardRU: 8,
  l_lanCardCN: 9,
  l_lanCardTW: 10
};
export class DotChangeBaseSkin {
  static _buildEventData(e) {
    var t,
      o,
      n,
      i,
      l = UserModel.getInstance(),
      s = l.getCurrentGameType(),
      c = l.getCurrentGameData();
    return {
      game_id: null !== (o = null === (t = null == c ? void 0 : c.getGameId) || void 0 === t ? void 0 : t.call(c)) && void 0 !== o ? o : "",
      game_type: DotUtil.getGameId(s),
      level_id: null !== (i = null === (n = null == c ? void 0 : c.getCurrentLevelId) || void 0 === n ? void 0 : n.call(c)) && void 0 !== i ? i : 1,
      language_skin_id: e
    };
  }
  static dotPopupView(t) {
    var o = this.getLanguageSkinId(t);
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.g_game_language_skin_reward_popup_view, DotChangeBaseSkin._buildEventData(o));
  }
  static dotPopupClick(t) {
    var o = this.getLanguageSkinId(t);
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.g_game_language_skin_reward_popup_click, DotChangeBaseSkin._buildEventData(o));
  }
  static dotSkinUnlockSuccess(t) {
    var o = this.getLanguageSkinId(t);
    EventTrackingManager.getInstance().trackEvent(EventTrackingType.g_game_language_skin_reward_unlock_success, DotChangeBaseSkin._buildEventData(o));
  }
  static getLanguageSkinId(e) {
    var t;
    return null !== (t = BUNDLE_SKIN_ID_MAP[e]) && void 0 !== t ? t : 1;
  }
}