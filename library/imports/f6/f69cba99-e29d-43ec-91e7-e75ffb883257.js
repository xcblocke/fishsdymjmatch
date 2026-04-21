"use strict";
cc._RF.push(module, 'f69cbqZ4p1D7JHn51/7iDJX', 'DAdRewardEnter');
// Scripts/gamePlay/dot/DAdRewardEnter.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotAdRewardEnter = exports.EAdEnterAction = void 0;
var AdManager_1 = require("../../base/ad/AdManager");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DGameAdShow_1 = require("./DGameAdShow");
var DotUtil_1 = require("./DotUtil");
exports.EAdEnterAction = {
    Show: "show",
    Click: "click"
};
var DotAdRewardEnter = /** @class */ (function () {
    function DotAdRewardEnter() {
    }
    DotAdRewardEnter.dot = function (e, t) {
        var o = UserModel_1.default.getInstance(), u = o.getCurrentGameType(), p = o.getCurrentGameData(), f = Math.floor((Date.now() - o.getAppStartTime()) / 1000), d = Math.floor((Date.now() - p.getStartGameTime()) / 1000), h = Math.floor(p.getCurrentRoundTime()), y = {
            ad_enter_action: e ? exports.EAdEnterAction.Show : exports.EAdEnterAction.Click,
            ad_enter_scene: DGameAdShow_1.DGameAdShow.getAdPositionName(t),
            ad_is_ready: AdManager_1.default.getInstance().checkVideoAdIsReady() ? 1 : 0,
            session_time: f,
            reward_ad_num: o.getTotalRewardAdCount(),
            game_mode: DotUtil_1.DotUtil.getGameId(u),
            game_mode_name: DotUtil_1.DotUtil.getGameModeName(u),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(u),
            level: p.getCurrentLevelId(),
            mode_num: p.getGameCount(),
            mode_num_all: o.getTotalGames(),
            mode_winnum: p.getWinGames(),
            mode_winnum_all: o.getTotalWinGames(),
            game_time: d,
            game_time_real: h
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.AdRewardEnter, y);
    };
    return DotAdRewardEnter;
}());
exports.DotAdRewardEnter = DotAdRewardEnter;

cc._RF.pop();