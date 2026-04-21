
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameAdShow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZFQUF5RTtBQUN6RSx3REFBK0Q7QUFDL0QsOEVBQXlFO0FBQ3pFLCtDQUEwQztBQUMxQyxxQ0FBb0M7QUFDcEMsSUFBWSxXQTJCWDtBQTNCRCxXQUFZLFdBQVc7SUFDckIsdUZBQTZCLENBQUE7SUFDN0IsaUdBQWtDLENBQUE7SUFDbEMsbUdBQW1DLENBQUE7SUFDbkMsK0ZBQWlDLENBQUE7SUFDakMscUZBQTRCLENBQUE7SUFDNUIsaUdBQWtDLENBQUE7SUFDbEMseUZBQThCLENBQUE7SUFDOUIsNkZBQWdDLENBQUE7SUFDaEMsNkdBQXdDLENBQUE7SUFDeEMsaUdBQWtDLENBQUE7SUFDbEMsd0ZBQThCLENBQUE7SUFDOUIsb0ZBQTRCLENBQUE7SUFDNUIsMEZBQStCLENBQUE7SUFDL0IsZ0ZBQTBCLENBQUE7SUFDMUIsb0ZBQTRCLENBQUE7SUFDNUIsc0dBQXFDLENBQUE7SUFDckMsd0VBQXNCLENBQUE7SUFDdEIsNEVBQXdCLENBQUE7SUFDeEIsc0ZBQTZCLENBQUE7SUFDN0Isb0dBQW9DLENBQUE7SUFDcEMsZ0hBQTBDLENBQUE7SUFDMUMsd0dBQXNDLENBQUE7SUFDdEMsOEVBQXlCLENBQUE7SUFDekIsb0ZBQTRCLENBQUE7SUFDNUIsZ0dBQWtDLENBQUE7SUFDbEMsb0ZBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQTNCVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQTJCdEI7QUFDVSxRQUFBLGNBQWMsR0FBRztJQUMxQixXQUFXLEVBQUUsYUFBYTtJQUMxQixRQUFRLEVBQUUsVUFBVTtJQUNwQixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFDRjtJQUFBO0lBNEVBLENBQUM7SUEzRVEsNkJBQWlCLEdBQXhCLFVBQXlCLENBQUM7UUFDeEIsUUFBUSxDQUFDLEVBQUU7WUFDVCxLQUFL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QixFQUFFLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxjQUFjLEVBQUUsaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO2dCQUM1QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDMUIsWUFBWSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUU7Z0JBQy9CLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO2dCQUM1QixlQUFlLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO2FBQ3RDLENBQUM7WUFDSiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0E1RUEsQUE0RUMsSUFBQTtBQTVFWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBEb3RVdGlsIH0gZnJvbSAnLi9Eb3RVdGlsJztcbmV4cG9ydCBlbnVtIEVBZFBvc2l0aW9uIHtcbiAgRnJvbnRJbnNlcnRTY3JlZW5fR2FtZU5ldyA9IDAsXG4gIEZyb250SW5zZXJ0U2NyZWVuX0dhbWVDb250aW51ZSA9IDEsXG4gIEZyb250SW5zZXJ0U2NyZWVuX0FjdGl2ZVJlc3RhcnQgPSAyLFxuICBGcm9udEluc2VydFNjcmVlbl9GYWlsUmVzdGFydCA9IDMsXG4gIFJlYXJJbnNlcnRTY3JlZW5fU3VjY2VzcyA9IDQsXG4gIFJlYXJJbnNlcnRTY3JlZW5fVHJhdmVsU3VjY2VzcyA9IDUsXG4gIFJlYXJJbnNlcnRTY3JlZW5fRGNTdWNjZXNzID0gNixcbiAgUmVhckluc2VydFNjcmVlbl9UcmF2ZWxFbnRlciA9IDcsXG4gIFJlYXJJbnNlcnRTY3JlZW5fRGFpbHlDaGFsbGVuZ2VFbnRlciA9IDgsXG4gIFJlYXJJbnNlcnRTY3JlZW5fRGFpbHlUYXNrUGxheSA9IDksXG4gIFJlYXJJbnNlcnRTY3JlZW5fSGFsbFBsYXkgPSAxMCxcbiAgUmVhckluc2VydFNjcmVlbl9SYW5rR28gPSAxMSxcbiAgSW5HYW1lTW90aXZhdGlvbl9SZXNodWZmbGUgPSAxMixcbiAgSW5HYW1lTW90aXZhdGlvbl9IaW50ID0gMTMsXG4gIEluR2FtZU1vdGl2YXRpb25fUmV2aXZlID0gMTQsXG4gIEluR2FtZUluc2VydFNjcmVlbl9QYXVzZUNvbnRpbnVlID0gMTUsXG4gIE91dEdhbWVNb3RpdmF0aW9uID0gMTYsXG4gIE5vSW50ZXJBZE1vdGl2YXRpb24gPSAxNyxcbiAgUmVhckluc2VydFNjcmVlbl9GYWlsdXJlID0gMTgsXG4gIEluR2FtZU1vdGl2YXRpb25fUmV2aXZlX0NsYXNzaWMgPSAxOSxcbiAgSW5HYW1lTW90aXZhdGlvbl9HYW1lQ29udGludWVfQ2xhc3NpYyA9IDIwLFxuICBSZWFySW5zZXJ0U2NyZWVuX0Nsb3NlRnJlZVNodWZmbGUgPSAyMSxcbiAgT3BlblNraW5CeUxhbmd1YWdlQWQgPSAyMixcbiAgSW5HYW1lTW90aXZhdGlvbl9SZXZlcnQgPSAyMyxcbiAgUmVhckluc2VydFNjcmVlbl9UaWxlMlN1Y2Nlc3MgPSAyNCxcbiAgSW5HYW1lTW90aXZhdGlvbl9NYWduZXQgPSAyNSxcbn1cbmV4cG9ydCB2YXIgQWRDYWxsQmFja1R5cGUgPSB7XG4gIFNob3dTdWNjZXNzOiBcInNob3dzdWNjZXNzXCIsXG4gIFNob3dGYWlsOiBcInNob3dmYWlsXCIsXG4gIENsb3NlOiBcImNsb3NlXCJcbn07XG5leHBvcnQgY2xhc3MgREdhbWVBZFNob3cge1xuICBzdGF0aWMgZ2V0QWRQb3NpdGlvbk5hbWUoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9HYW1lTmV3OlxuICAgICAgICByZXR1cm4gXCLliY3mj5LlsY8tLea4uOaIj+aWsOW8gFwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5Gcm9udEluc2VydFNjcmVlbl9HYW1lQ29udGludWU6XG4gICAgICAgIHJldHVybiBcIuWJjeaPkuWxjy0t5ri45oiP57un57utXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0FjdGl2ZVJlc3RhcnQ6XG4gICAgICAgIHJldHVybiBcIuWJjeaPkuWxjy0t5Li75Yqo6YeN5byAXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLkZyb250SW5zZXJ0U2NyZWVuX0ZhaWxSZXN0YXJ0OlxuICAgICAgICByZXR1cm4gXCLliY3mj5LlsY8tLeWksei0pemHjeW8gFwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX1N1Y2Nlc3M6XG4gICAgICAgIHJldHVybiBcIuWQjuaPkuWxjy0t5oiQ5YqfXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLlJlYXJJbnNlcnRTY3JlZW5fVHJhdmVsRW50ZXI6XG4gICAgICAgIHJldHVybiBcIuWJjeaPkuWxjy0t5peF6KGM6L+b5YWlXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLlJlYXJJbnNlcnRTY3JlZW5fRGFpbHlUYXNrUGxheTpcbiAgICAgICAgcmV0dXJuIFwi5YmN5o+S5bGPLS3ku7vliqHlvIDlp4vmuLjmiI9cIjtcbiAgICAgIGNhc2UgRUFkUG9zaXRpb24uUmVhckluc2VydFNjcmVlbl9IYWxsUGxheTpcbiAgICAgICAgcmV0dXJuIFwi5YmN5o+S5bGPLS3lpKfljoXlvIDlp4vmuLjmiI9cIjtcbiAgICAgIGNhc2UgRUFkUG9zaXRpb24uUmVhckluc2VydFNjcmVlbl9SYW5rR286XG4gICAgICAgIHJldHVybiBcIuWJjeaPkuWxjy0t5o6S6KGM5qac5byA5aeL5ri45oiPXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmVzaHVmZmxlOlxuICAgICAgICByZXR1cm4gXCLlsYDkuK3mv4DlirEtLemHjea0l+eJjOa/gOWKsVwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX0hpbnQ6XG4gICAgICAgIHJldHVybiBcIuWxgOS4rea/gOWKsS0t5o+Q56S65r+A5YqxXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlOlxuICAgICAgICByZXR1cm4gXCLlsYDkuK3mv4DlirEtLeWkjea0u+a/gOWKsVwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jldml2ZV9DbGFzc2ljOlxuICAgICAgICByZXR1cm4gXCLlsYDkuK3mv4DlirEtLeWkjea0u+a/gOWKsS0t5peg5bC9XCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fR2FtZUNvbnRpbnVlX0NsYXNzaWM6XG4gICAgICAgIHJldHVybiBcIuWxgOS4rea/gOWKsS0t5peg5bC9Lea4uOaIj+e7p+e7rVwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5JbkdhbWVJbnNlcnRTY3JlZW5fUGF1c2VDb250aW51ZTpcbiAgICAgICAgcmV0dXJuIFwi5bGA5Lit5o+S5bGPLS3mmoLlgZznu6fnu61cIjtcbiAgICAgIGNhc2UgRUFkUG9zaXRpb24uT3V0R2FtZU1vdGl2YXRpb246XG4gICAgICAgIHJldHVybiBcIuWxgOWklua/gOWKsVwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5Ob0ludGVyQWRNb3RpdmF0aW9uOlxuICAgICAgICByZXR1cm4gXCLlhY3lub/mv4DlirFcIjtcbiAgICAgIGNhc2UgRUFkUG9zaXRpb24uUmVhckluc2VydFNjcmVlbl9EYWlseUNoYWxsZW5nZUVudGVyOlxuICAgICAgICByZXR1cm4gXCLliY3mj5LlsY8tLeaXpeW4uOaMkeaImOi/m+WFpVwiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5SZWFySW5zZXJ0U2NyZWVuX1RyYXZlbFN1Y2Nlc3M6XG4gICAgICAgIHJldHVybiBcIuWQjuaPkuWxjy0t5peF6KGM5oiQ5YqfXCI7XG4gICAgICBjYXNlIEVBZFBvc2l0aW9uLlJlYXJJbnNlcnRTY3JlZW5fRGNTdWNjZXNzOlxuICAgICAgICByZXR1cm4gXCLlkI7mj5LlsY8tLeaXpeW4uOaMkeaImOaIkOWKn1wiO1xuICAgICAgY2FzZSBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1JldmVydDpcbiAgICAgICAgcmV0dXJuIFwi5bGA5Lit5r+A5YqxLS3mkqTlm57mv4DlirFcIjtcbiAgICAgIGNhc2UgRUFkUG9zaXRpb24uUmVhckluc2VydFNjcmVlbl9UaWxlMlN1Y2Nlc3M6XG4gICAgICAgIHJldHVybiBcIuWQjuaPkuWxjy0tVGlsZTLmiJDlip9cIjtcbiAgICAgIGNhc2UgRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9NYWduZXQ6XG4gICAgICAgIHJldHVybiBcIuWxgOS4rea/gOWKsS0t56OB6ZOB5r+A5YqxXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJhZFBvc2l0aW9uIGVycm9yXCI7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBkb3QodCkge1xuICAgIHZhciBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBuID0gby5nZXRDdXJyZW50R2FtZURhdGEoKTtcbiAgICBpZiAobikge1xuICAgICAgdmFyIGMgPSBvLmdldEN1cnJlbnRHYW1lVHlwZSgpLFxuICAgICAgICB1ID0ge1xuICAgICAgICAgIGFkX3R5cGU6IFwiMlwiID09IHQuYWRUeXBlID8gRG90VXRpbC5nZXRSZXdhcmRBZFBvaW50KCkgOiBEb3RVdGlsLmdldEludGVyQWRQb2ludCgpLFxuICAgICAgICAgIGFkX3Bvc2l0aW9uOiBER2FtZUFkU2hvdy5nZXRBZFBvc2l0aW9uTmFtZSh0LmFkUG9zaXRpb24pLFxuICAgICAgICAgIGFkX3N0YXJ0X3RpbWVzdGFtcDogdC5kb3RUaW1lLnN0YXJ0VGltZSxcbiAgICAgICAgICBhZF9lbmRfdGltZXN0YW1wOiB0LmRvdFRpbWUuZW5kVGltZSxcbiAgICAgICAgICBhZF9zaG93X3RpbWU6IHQuZG90VGltZS5zaG93VGltZSxcbiAgICAgICAgICBnYW1lX21vZGU6IGMgPT0gTWpHYW1lVHlwZS5DbGFzc2ljID8gMyA6IERvdFV0aWwuZ2V0R2FtZUlkKGMpLFxuICAgICAgICAgIGdhbWVfcGxheV9tZXRob2Q6IERvdFV0aWwuZ2V0R2FtZVBsYXlNZXRob2QoYyksXG4gICAgICAgICAgZ2FtZV9tb2RlX25hbWU6IERvdFV0aWwuZ2V0R2FtZU1vZGVOYW1lKGMpLFxuICAgICAgICAgIGxldmVsOiBuLmdldEN1cnJlbnRMZXZlbElkKCksXG4gICAgICAgICAgbW9kZV9udW06IG4uZ2V0R2FtZUNvdW50KCksXG4gICAgICAgICAgbW9kZV9udW1fYWxsOiBvLmdldFRvdGFsR2FtZXMoKSxcbiAgICAgICAgICBtb2RlX3dpbm51bTogbi5nZXRXaW5HYW1lcygpLFxuICAgICAgICAgIG1vZGVfd2lubnVtX2FsbDogby5nZXRUb3RhbFdpbkdhbWVzKClcbiAgICAgICAgfTtcbiAgICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5HYW1lQWRTaG93LCB1KTtcbiAgICB9XG4gIH1cbn0iXX0=