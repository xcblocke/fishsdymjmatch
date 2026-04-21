"use strict";
cc._RF.push(module, '6fd29h2aeBAnqnbhUW3C5sR', 'DAdVisit');
// Scripts/gamePlay/dot/DAdVisit.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotAdVisit = exports.EAdVisitAction = void 0;
var AdManager_1 = require("../../base/ad/AdManager");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var DGameAdShow_1 = require("./DGameAdShow");
exports.EAdVisitAction = {
    Play: "play",
    Close: "close"
};
var DotAdVisit = /** @class */ (function () {
    function DotAdVisit() {
    }
    DotAdVisit.dot = function (e, t, o) {
        var c = UserModel_1.default.getInstance(), u = c.getCurrentGameType(), p = c.getCurrentGameData(), f = Math.floor((Date.now() - c.getAppStartTime()) / 1000), d = Math.floor((Date.now() - p.getStartGameTime()) / 1000), h = Math.floor(p.getCurrentRoundTime()), y = o ? AdManager_1.default.getInstance().checkInterAdIsReady() : AdManager_1.default.getInstance().checkVideoAdIsReady(), m = {
            ad_type: o ? DotUtil_1.DotUtil.getInterAdPoint() : DotUtil_1.DotUtil.getRewardAdPoint(),
            ad_visit_scene: e,
            ad_visit_action: t ? exports.EAdVisitAction.Play : exports.EAdVisitAction.Close,
            ad_is_ready: y ? 1 : 0,
            session_time: f,
            game_mode: DotUtil_1.DotUtil.getGameId(u),
            game_mode_name: DotUtil_1.DotUtil.getGameModeName(u),
            game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(u),
            level: p.getCurrentLevelId(),
            mode_num: p.getGameCount(),
            mode_num_all: c.getTotalGames(),
            mode_winnum: p.getWinGames(),
            mode_winnum_all: c.getTotalWinGames(),
            game_time: d,
            game_time_real: h
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.AdVisit, m);
    };
    DotAdVisit.dotAdVisitRewardAD = function (t, o) {
        DotAdVisit.noAdPosition = t;
        var n = DGameAdShow_1.DGameAdShow.getAdPositionName(t);
        this.dot(n, o, false);
    };
    DotAdVisit.dotAdVisitInterAD = function (e) {
        var t = DGameAdShow_1.DGameAdShow.getAdPositionName(e);
        this.dot(t, true, true);
    };
    DotAdVisit.dotAdVisitNoAd = function (t) {
        var o = DGameAdShow_1.DGameAdShow.getAdPositionName(DotAdVisit.noAdPosition), n = DotAdVisit.noAdPosition;
        if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Hint) {
            o = "无法加载广告-提示激励";
        }
        else {
            if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle) {
                o = "无法加载广告-重洗牌激励";
            }
            else {
                if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Revive) {
                    o = "无法加载广告-复活激励";
                }
                else {
                    if (n == DGameAdShow_1.EAdPosition.InGameMotivation_Revive_Classic) {
                        o = "无法加载广告-复活激励-无尽";
                    }
                    else {
                        if (n == DGameAdShow_1.EAdPosition.OutGameMotivation) {
                            o = "无法加载广告-局外激励";
                        }
                        else {
                            if (n == DGameAdShow_1.EAdPosition.NoInterAdMotivation) {
                                o = "无法加载广告-免广激励";
                            }
                            else {
                                n == DGameAdShow_1.EAdPosition.InGameMotivation_GameContinue_Classic && (o = "无法加载广告-无尽-游戏继续");
                            }
                        }
                    }
                }
            }
        }
        this.dot(o, t, false);
    };
    DotAdVisit.noAdPosition = DGameAdShow_1.EAdPosition.OutGameMotivation;
    return DotAdVisit;
}());
exports.DotAdVisit = DotAdVisit;

cc._RF.pop();