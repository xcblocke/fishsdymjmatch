"use strict";
cc._RF.push(module, '7da5a0lSpVANobbF4NV0ZrN', 'DGameAdShow');
// Scripts/gamePlay/dot/DGameAdShow.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DGameAdShow = exports.AdCallBackType = exports.EAdPosition = void 0;
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var UserModel_1 = require("../user/UserModel");
var DotUtil_1 = require("./DotUtil");
var EAdPosition;
(function (EAdPosition) {
    EAdPosition[EAdPosition["FrontInsertScreen_GameNew"] = 0] = "FrontInsertScreen_GameNew";
    EAdPosition[EAdPosition["FrontInsertScreen_GameContinue"] = 1] = "FrontInsertScreen_GameContinue";
    EAdPosition[EAdPosition["FrontInsertScreen_ActiveRestart"] = 2] = "FrontInsertScreen_ActiveRestart";
    EAdPosition[EAdPosition["FrontInsertScreen_FailRestart"] = 3] = "FrontInsertScreen_FailRestart";
    EAdPosition[EAdPosition["RearInsertScreen_Success"] = 4] = "RearInsertScreen_Success";
    EAdPosition[EAdPosition["RearInsertScreen_TravelSuccess"] = 5] = "RearInsertScreen_TravelSuccess";
    EAdPosition[EAdPosition["RearInsertScreen_DcSuccess"] = 6] = "RearInsertScreen_DcSuccess";
    EAdPosition[EAdPosition["RearInsertScreen_TravelEnter"] = 7] = "RearInsertScreen_TravelEnter";
    EAdPosition[EAdPosition["RearInsertScreen_DailyChallengeEnter"] = 8] = "RearInsertScreen_DailyChallengeEnter";
    EAdPosition[EAdPosition["RearInsertScreen_DailyTaskPlay"] = 9] = "RearInsertScreen_DailyTaskPlay";
    EAdPosition[EAdPosition["RearInsertScreen_HallPlay"] = 10] = "RearInsertScreen_HallPlay";
    EAdPosition[EAdPosition["RearInsertScreen_RankGo"] = 11] = "RearInsertScreen_RankGo";
    EAdPosition[EAdPosition["InGameMotivation_Reshuffle"] = 12] = "InGameMotivation_Reshuffle";
    EAdPosition[EAdPosition["InGameMotivation_Hint"] = 13] = "InGameMotivation_Hint";
    EAdPosition[EAdPosition["InGameMotivation_Revive"] = 14] = "InGameMotivation_Revive";
    EAdPosition[EAdPosition["InGameInsertScreen_PauseContinue"] = 15] = "InGameInsertScreen_PauseContinue";
    EAdPosition[EAdPosition["OutGameMotivation"] = 16] = "OutGameMotivation";
    EAdPosition[EAdPosition["NoInterAdMotivation"] = 17] = "NoInterAdMotivation";
    EAdPosition[EAdPosition["RearInsertScreen_Failure"] = 18] = "RearInsertScreen_Failure";
    EAdPosition[EAdPosition["InGameMotivation_Revive_Classic"] = 19] = "InGameMotivation_Revive_Classic";
    EAdPosition[EAdPosition["InGameMotivation_GameContinue_Classic"] = 20] = "InGameMotivation_GameContinue_Classic";
    EAdPosition[EAdPosition["RearInsertScreen_CloseFreeShuffle"] = 21] = "RearInsertScreen_CloseFreeShuffle";
    EAdPosition[EAdPosition["OpenSkinByLanguageAd"] = 22] = "OpenSkinByLanguageAd";
    EAdPosition[EAdPosition["InGameMotivation_Revert"] = 23] = "InGameMotivation_Revert";
    EAdPosition[EAdPosition["RearInsertScreen_Tile2Success"] = 24] = "RearInsertScreen_Tile2Success";
    EAdPosition[EAdPosition["InGameMotivation_Magnet"] = 25] = "InGameMotivation_Magnet";
})(EAdPosition = exports.EAdPosition || (exports.EAdPosition = {}));
exports.AdCallBackType = {
    ShowSuccess: "showsuccess",
    ShowFail: "showfail",
    Close: "close"
};
var DGameAdShow = /** @class */ (function () {
    function DGameAdShow() {
    }
    DGameAdShow.getAdPositionName = function (e) {
        switch (e) {
            case EAdPosition.FrontInsertScreen_GameNew:
                return "前插屏--游戏新开";
            case EAdPosition.FrontInsertScreen_GameContinue:
                return "前插屏--游戏继续";
            case EAdPosition.FrontInsertScreen_ActiveRestart:
                return "前插屏--主动重开";
            case EAdPosition.FrontInsertScreen_FailRestart:
                return "前插屏--失败重开";
            case EAdPosition.RearInsertScreen_Success:
                return "后插屏--成功";
            case EAdPosition.RearInsertScreen_TravelEnter:
                return "前插屏--旅行进入";
            case EAdPosition.RearInsertScreen_DailyTaskPlay:
                return "前插屏--任务开始游戏";
            case EAdPosition.RearInsertScreen_HallPlay:
                return "前插屏--大厅开始游戏";
            case EAdPosition.RearInsertScreen_RankGo:
                return "前插屏--排行榜开始游戏";
            case EAdPosition.InGameMotivation_Reshuffle:
                return "局中激励--重洗牌激励";
            case EAdPosition.InGameMotivation_Hint:
                return "局中激励--提示激励";
            case EAdPosition.InGameMotivation_Revive:
                return "局中激励--复活激励";
            case EAdPosition.InGameMotivation_Revive_Classic:
                return "局中激励--复活激励--无尽";
            case EAdPosition.InGameMotivation_GameContinue_Classic:
                return "局中激励--无尽-游戏继续";
            case EAdPosition.InGameInsertScreen_PauseContinue:
                return "局中插屏--暂停继续";
            case EAdPosition.OutGameMotivation:
                return "局外激励";
            case EAdPosition.NoInterAdMotivation:
                return "免广激励";
            case EAdPosition.RearInsertScreen_DailyChallengeEnter:
                return "前插屏--日常挑战进入";
            case EAdPosition.RearInsertScreen_TravelSuccess:
                return "后插屏--旅行成功";
            case EAdPosition.RearInsertScreen_DcSuccess:
                return "后插屏--日常挑战成功";
            case EAdPosition.InGameMotivation_Revert:
                return "局中激励--撤回激励";
            case EAdPosition.RearInsertScreen_Tile2Success:
                return "后插屏--Tile2成功";
            case EAdPosition.InGameMotivation_Magnet:
                return "局中激励--磁铁激励";
            default:
                return "adPosition error";
        }
    };
    DGameAdShow.dot = function (t) {
        var o = UserModel_1.default.getInstance(), n = o.getCurrentGameData();
        if (n) {
            var c = o.getCurrentGameType(), u = {
                ad_type: "2" == t.adType ? DotUtil_1.DotUtil.getRewardAdPoint() : DotUtil_1.DotUtil.getInterAdPoint(),
                ad_position: DGameAdShow.getAdPositionName(t.adPosition),
                ad_start_timestamp: t.dotTime.startTime,
                ad_end_timestamp: t.dotTime.endTime,
                ad_show_time: t.dotTime.showTime,
                game_mode: c == GameTypeEnums_1.MjGameType.Classic ? 3 : DotUtil_1.DotUtil.getGameId(c),
                game_play_method: DotUtil_1.DotUtil.getGamePlayMethod(c),
                game_mode_name: DotUtil_1.DotUtil.getGameModeName(c),
                level: n.getCurrentLevelId(),
                mode_num: n.getGameCount(),
                mode_num_all: o.getTotalGames(),
                mode_winnum: n.getWinGames(),
                mode_winnum_all: o.getTotalWinGames()
            };
            EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameAdShow, u);
        }
    };
    return DGameAdShow;
}());
exports.DGameAdShow = DGameAdShow;

cc._RF.pop();