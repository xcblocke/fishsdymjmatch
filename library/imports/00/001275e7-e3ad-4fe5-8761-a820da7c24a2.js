"use strict";
cc._RF.push(module, '00127Xn461P5YdhqCDafCSi', 'DChangeBaseSkin');
// Scripts/gamePlay/dot/DChangeBaseSkin.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotChangeBaseSkin = exports.BUNDLE_SKIN_ID_MAP = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
exports.BUNDLE_SKIN_ID_MAP = {
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
var DotChangeBaseSkin = /** @class */ (function () {
    function DotChangeBaseSkin() {
    }
    DotChangeBaseSkin._buildEventData = function (e) {
        var t, o, n, i, l = UserModel_1.default.getInstance(), s = l.getCurrentGameType(), c = l.getCurrentGameData();
        return {
            game_id: null !== (o = null === (t = null == c ? void 0 : c.getGameId) || void 0 === t ? void 0 : t.call(c)) && void 0 !== o ? o : "",
            game_type: DotUtil_1.DotUtil.getGameId(s),
            level_id: null !== (i = null === (n = null == c ? void 0 : c.getCurrentLevelId) || void 0 === n ? void 0 : n.call(c)) && void 0 !== i ? i : 1,
            language_skin_id: e
        };
    };
    DotChangeBaseSkin.dotPopupView = function (t) {
        var o = this.getLanguageSkinId(t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.g_game_language_skin_reward_popup_view, DotChangeBaseSkin._buildEventData(o));
    };
    DotChangeBaseSkin.dotPopupClick = function (t) {
        var o = this.getLanguageSkinId(t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.g_game_language_skin_reward_popup_click, DotChangeBaseSkin._buildEventData(o));
    };
    DotChangeBaseSkin.dotSkinUnlockSuccess = function (t) {
        var o = this.getLanguageSkinId(t);
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.g_game_language_skin_reward_unlock_success, DotChangeBaseSkin._buildEventData(o));
    };
    DotChangeBaseSkin.getLanguageSkinId = function (e) {
        var t;
        return null !== (t = exports.BUNDLE_SKIN_ID_MAP[e]) && void 0 !== t ? t : 1;
    };
    return DotChangeBaseSkin;
}());
exports.DotChangeBaseSkin = DotChangeBaseSkin;

cc._RF.pop();