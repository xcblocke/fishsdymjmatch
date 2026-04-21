
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/dot/DGamePageShow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RvdC9ER2FtZVBhZ2VTaG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQTREO0FBQzVELDJFQUFzRTtBQUN0RSxJQUFZLGFBZ0JYO0FBaEJELFdBQVksYUFBYTtJQUN2QiwrREFBZSxDQUFBO0lBQ2YsK0RBQWUsQ0FBQTtJQUNmLDJFQUFxQixDQUFBO0lBQ3JCLHVFQUFtQixDQUFBO0lBQ25CLDZFQUFzQixDQUFBO0lBQ3RCLHlGQUE0QixDQUFBO0lBQzVCLDZFQUFzQixDQUFBO0lBQ3RCLHlGQUE0QixDQUFBO0lBQzVCLDZEQUFjLENBQUE7SUFDZCx5RUFBb0IsQ0FBQTtJQUNwQixnRUFBZ0IsQ0FBQTtJQUNoQixvRkFBMEIsQ0FBQTtJQUMxQixvRkFBMEIsQ0FBQTtJQUMxQixzRUFBbUIsQ0FBQTtJQUNuQixzRUFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBaEJXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBZ0J4QjtBQUNEO0lBQUE7SUEyQ0EsQ0FBQztJQTFDUSwrQkFBZSxHQUF0QixVQUF1QixDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxFQUFFO1lBQ1QsS0FBSyxhQUFhLENBQUMsV0FBVztnQkFDNUIsT0FBTyxLQUFLLENBQUM7WUFDZixLQUFLLGFBQWEsQ0FBQyxXQUFXO2dCQUM1QixPQUFPLEtBQUssQ0FBQztZQUNmLEtBQUssYUFBYSxDQUFDLGlCQUFpQjtnQkFDbEMsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxhQUFhLENBQUMsZUFBZTtnQkFDaEMsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxhQUFhLENBQUMsa0JBQWtCO2dCQUNuQyxPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLGFBQWEsQ0FBQyx3QkFBd0I7Z0JBQ3pDLE9BQU8sUUFBUSxDQUFDO1lBQ2xCLEtBQUssYUFBYSxDQUFDLGtCQUFrQjtnQkFDbkMsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxhQUFhLENBQUMsd0JBQXdCO2dCQUN6QyxPQUFPLFNBQVMsQ0FBQztZQUNuQixLQUFLLGFBQWEsQ0FBQyxVQUFVO2dCQUMzQixPQUFPLE9BQU8sQ0FBQztZQUNqQixLQUFLLGFBQWEsQ0FBQyxnQkFBZ0I7Z0JBQ2pDLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssYUFBYSxDQUFDLFdBQVc7Z0JBQzVCLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLEtBQUssYUFBYSxDQUFDLHFCQUFxQjtnQkFDdEMsT0FBTyxRQUFRLENBQUM7WUFDbEIsS0FBSyxhQUFhLENBQUMscUJBQXFCO2dCQUN0QyxPQUFPLFFBQVEsQ0FBQztZQUNsQixLQUFLLGFBQWEsQ0FBQyxjQUFjO2dCQUMvQixPQUFPLFNBQVMsQ0FBQztZQUNuQixLQUFLLGFBQWEsQ0FBQyxjQUFjO2dCQUMvQixPQUFPLFNBQVMsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUNNLG1CQUFHLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUc7WUFDTixTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDbkMsQ0FBQztRQUNGLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuZXhwb3J0IGVudW0gRVBhZ2VTaG93VHlwZSB7XG4gIFN0YXJ0dXBQYWdlID0gMCxcbiAgTG9hZGluZ1BhZ2UgPSAxLFxuICBMb2FkaW5nVG9NYWluUGFnZSA9IDIsXG4gIExldmVsVG9NYWluUGFnZSA9IDMsXG4gIEV4aGliaXRpb25IYWxsUGFnZSA9IDQsXG4gIEV4aGliaXRpb25IYWxsVG9NYWluUGFnZSA9IDUsXG4gIERhaWx5Q2hhbGxlbmdlUGFnZSA9IDYsXG4gIERhaWx5Q2hhbGxlbmdlVG9NYWluUGFnZSA9IDcsXG4gIFRyYXZlbFBhZ2UgPSA4LFxuICBUcmF2ZWxUb01haW5QYWdlID0gOSxcbiAgTGVhZGVyQm9hcmQgPSAxMCxcbiAgTGVhZGVyQm9hcmRSZXN1bHRQYWdlID0gMTEsXG4gIExlYWRlckJvYXJkVG9NYWluUGFnZSA9IDEyLFxuICBBZ2VTdXJ2ZXlQYWdlMSA9IDEzLFxuICBBZ2VTdXJ2ZXlQYWdlMiA9IDE0LFxufVxuZXhwb3J0IGNsYXNzIERvdEdhbWVQYWdlU2hvdyB7XG4gIHN0YXRpYyBnZXRQYWdlU2hvd05hbWUoZSkge1xuICAgIHN3aXRjaCAoZSkge1xuICAgICAgY2FzZSBFUGFnZVNob3dUeXBlLlN0YXJ0dXBQYWdlOlxuICAgICAgICByZXR1cm4gXCLlkK/liqjpobVcIjtcbiAgICAgIGNhc2UgRVBhZ2VTaG93VHlwZS5Mb2FkaW5nUGFnZTpcbiAgICAgICAgcmV0dXJuIFwi5Yqg6L296aG1XCI7XG4gICAgICBjYXNlIEVQYWdlU2hvd1R5cGUuTG9hZGluZ1RvTWFpblBhZ2U6XG4gICAgICAgIHJldHVybiBcIuWKoOi9vemhtei/m+S4u+mhtVwiO1xuICAgICAgY2FzZSBFUGFnZVNob3dUeXBlLkxldmVsVG9NYWluUGFnZTpcbiAgICAgICAgcmV0dXJuIFwi5YWz5Y2h6L+b5Li76aG1XCI7XG4gICAgICBjYXNlIEVQYWdlU2hvd1R5cGUuRXhoaWJpdGlvbkhhbGxQYWdlOlxuICAgICAgICByZXR1cm4gXCLlsZXnpLrljoXpobVcIjtcbiAgICAgIGNhc2UgRVBhZ2VTaG93VHlwZS5FeGhpYml0aW9uSGFsbFRvTWFpblBhZ2U6XG4gICAgICAgIHJldHVybiBcIuWxleekuuWOhei/m+S4u+mhtVwiO1xuICAgICAgY2FzZSBFUGFnZVNob3dUeXBlLkRhaWx5Q2hhbGxlbmdlUGFnZTpcbiAgICAgICAgcmV0dXJuIFwi5q+P5pel5oyR5oiY6aG1XCI7XG4gICAgICBjYXNlIEVQYWdlU2hvd1R5cGUuRGFpbHlDaGFsbGVuZ2VUb01haW5QYWdlOlxuICAgICAgICByZXR1cm4gXCLmr4/ml6XmjJHmiJjov5vkuLvpobVcIjtcbiAgICAgIGNhc2UgRVBhZ2VTaG93VHlwZS5UcmF2ZWxQYWdlOlxuICAgICAgICByZXR1cm4gXCLml4XooYzmtLvliqjpobVcIjtcbiAgICAgIGNhc2UgRVBhZ2VTaG93VHlwZS5UcmF2ZWxUb01haW5QYWdlOlxuICAgICAgICByZXR1cm4gXCLml4XooYzmtLvliqjov5vkuLvpobVcIjtcbiAgICAgIGNhc2UgRVBhZ2VTaG93VHlwZS5MZWFkZXJCb2FyZDpcbiAgICAgICAgcmV0dXJuIFwi5o6S6KGM5qac6aG1XCI7XG4gICAgICBjYXNlIEVQYWdlU2hvd1R5cGUuTGVhZGVyQm9hcmRSZXN1bHRQYWdlOlxuICAgICAgICByZXR1cm4gXCLmjpLooYzmppznu5PnrpfpobVcIjtcbiAgICAgIGNhc2UgRVBhZ2VTaG93VHlwZS5MZWFkZXJCb2FyZFRvTWFpblBhZ2U6XG4gICAgICAgIHJldHVybiBcIuaOkuihjOamnOi/m+S4u+mhtVwiO1xuICAgICAgY2FzZSBFUGFnZVNob3dUeXBlLkFnZVN1cnZleVBhZ2UxOlxuICAgICAgICByZXR1cm4gXCLlubTpvoTpl67ljbflvLnnqpcxXCI7XG4gICAgICBjYXNlIEVQYWdlU2hvd1R5cGUuQWdlU3VydmV5UGFnZTI6XG4gICAgICAgIHJldHVybiBcIuW5tOm+hOmXruWNt+W8ueeqlzJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZG90KGUpIHtcbiAgICB2YXIgdCA9IHtcbiAgICAgIHNob3dfdHlwZTogdGhpcy5nZXRQYWdlU2hvd05hbWUoZSlcbiAgICB9O1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5QYWdlU2hvdywgdCk7XG4gIH1cbn0iXX0=