"use strict";
cc._RF.push(module, 'a930dZr/vhHIYYnYGEifPIL', 'DGamePageShow');
// Scripts/dot/DGamePageShow.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGamePageShow = exports.EPageShowType = void 0;
var EventData_1 = require("../base/event/EventData");
var EventTrackingManager_1 = require("../base/event/EventTrackingManager");
var EPageShowType;
(function (EPageShowType) {
    EPageShowType[EPageShowType["StartupPage"] = 0] = "StartupPage";
    EPageShowType[EPageShowType["LoadingPage"] = 1] = "LoadingPage";
    EPageShowType[EPageShowType["LoadingToMainPage"] = 2] = "LoadingToMainPage";
    EPageShowType[EPageShowType["LevelToMainPage"] = 3] = "LevelToMainPage";
    EPageShowType[EPageShowType["ExhibitionHallPage"] = 4] = "ExhibitionHallPage";
    EPageShowType[EPageShowType["ExhibitionHallToMainPage"] = 5] = "ExhibitionHallToMainPage";
    EPageShowType[EPageShowType["DailyChallengePage"] = 6] = "DailyChallengePage";
    EPageShowType[EPageShowType["DailyChallengeToMainPage"] = 7] = "DailyChallengeToMainPage";
    EPageShowType[EPageShowType["TravelPage"] = 8] = "TravelPage";
    EPageShowType[EPageShowType["TravelToMainPage"] = 9] = "TravelToMainPage";
    EPageShowType[EPageShowType["LeaderBoard"] = 10] = "LeaderBoard";
    EPageShowType[EPageShowType["LeaderBoardResultPage"] = 11] = "LeaderBoardResultPage";
    EPageShowType[EPageShowType["LeaderBoardToMainPage"] = 12] = "LeaderBoardToMainPage";
    EPageShowType[EPageShowType["AgeSurveyPage1"] = 13] = "AgeSurveyPage1";
    EPageShowType[EPageShowType["AgeSurveyPage2"] = 14] = "AgeSurveyPage2";
})(EPageShowType = exports.EPageShowType || (exports.EPageShowType = {}));
var DotGamePageShow = /** @class */ (function () {
    function DotGamePageShow() {
    }
    DotGamePageShow.getPageShowName = function (e) {
        switch (e) {
            case EPageShowType.StartupPage:
                return "启动页";
            case EPageShowType.LoadingPage:
                return "加载页";
            case EPageShowType.LoadingToMainPage:
                return "加载页进主页";
            case EPageShowType.LevelToMainPage:
                return "关卡进主页";
            case EPageShowType.ExhibitionHallPage:
                return "展示厅页";
            case EPageShowType.ExhibitionHallToMainPage:
                return "展示厅进主页";
            case EPageShowType.DailyChallengePage:
                return "每日挑战页";
            case EPageShowType.DailyChallengeToMainPage:
                return "每日挑战进主页";
            case EPageShowType.TravelPage:
                return "旅行活动页";
            case EPageShowType.TravelToMainPage:
                return "旅行活动进主页";
            case EPageShowType.LeaderBoard:
                return "排行榜页";
            case EPageShowType.LeaderBoardResultPage:
                return "排行榜结算页";
            case EPageShowType.LeaderBoardToMainPage:
                return "排行榜进主页";
            case EPageShowType.AgeSurveyPage1:
                return "年龄问卷弹窗1";
            case EPageShowType.AgeSurveyPage2:
                return "年龄问卷弹窗2";
            default:
                return "";
        }
    };
    DotGamePageShow.dot = function (e) {
        var t = {
            show_type: this.getPageShowName(e)
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.PageShow, t);
    };
    return DotGamePageShow;
}());
exports.DotGamePageShow = DotGamePageShow;

cc._RF.pop();