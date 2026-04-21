
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '187f2EzowFAJ4eR5y0XxWGh', 'DailyTypes');
// subpackages/l_daily/Scripts/DailyTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EDailyAudioID = exports.DailyEvents = exports.DisplayType = exports.DailyStatus = void 0;
var DailyStatus;
(function (DailyStatus) {
    DailyStatus[DailyStatus["Unopened"] = 0] = "Unopened";
    DailyStatus[DailyStatus["Unlocked"] = 1] = "Unlocked";
    DailyStatus[DailyStatus["Locked"] = 2] = "Locked";
    DailyStatus[DailyStatus["Completed"] = 3] = "Completed";
})(DailyStatus = exports.DailyStatus || (exports.DailyStatus = {}));
exports.DisplayType = {
    Journey: "journey",
    Daily: "daily"
};
exports.DailyEvents = {
    OPEN_REWARD_VIEW: "openRewardView",
    DAILY_DAY_ITEM_CLICK: "dailyDayItemClick",
    DAILY_SHOW_REWARD_ITEM: "dailyShowRewardItem",
    DAILY_DAY_EFFECT_SHOW: "dailyDayEffectShow"
};
var EDailyAudioID;
(function (EDailyAudioID) {
    EDailyAudioID[EDailyAudioID["BadgeTags"] = 34] = "BadgeTags";
    EDailyAudioID[EDailyAudioID["BadgeSite"] = 35] = "BadgeSite";
    EDailyAudioID[EDailyAudioID["DailyDay"] = 36] = "DailyDay";
    EDailyAudioID[EDailyAudioID["DailyMonthSlide"] = 37] = "DailyMonthSlide";
    EDailyAudioID[EDailyAudioID["DailyComplete"] = 38] = "DailyComplete";
})(EDailyAudioID = exports.EDailyAudioID || (exports.EDailyAudioID = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixxREFBWSxDQUFBO0lBQ1oscURBQVksQ0FBQTtJQUNaLGlEQUFVLENBQUE7SUFDVix1REFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBS3RCO0FBQ1UsUUFBQSxXQUFXLEdBQUc7SUFDdkIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBQ1MsUUFBQSxXQUFXLEdBQUc7SUFDdkIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLG9CQUFvQixFQUFFLG1CQUFtQjtJQUN6QyxzQkFBc0IsRUFBRSxxQkFBcUI7SUFDN0MscUJBQXFCLEVBQUUsb0JBQW9CO0NBQzVDLENBQUM7QUFDRixJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsNERBQWMsQ0FBQTtJQUNkLDREQUFjLENBQUE7SUFDZCwwREFBYSxDQUFBO0lBQ2Isd0VBQW9CLENBQUE7SUFDcEIsb0VBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQU5XLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBTXhCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRGFpbHlTdGF0dXMge1xuICBVbm9wZW5lZCA9IDAsXG4gIFVubG9ja2VkID0gMSxcbiAgTG9ja2VkID0gMixcbiAgQ29tcGxldGVkID0gMyxcbn1cbmV4cG9ydCB2YXIgRGlzcGxheVR5cGUgPSB7XG4gIEpvdXJuZXk6IFwiam91cm5leVwiLFxuICBEYWlseTogXCJkYWlseVwiXG59O1xuZXhwb3J0IHZhciBEYWlseUV2ZW50cyA9IHtcbiAgT1BFTl9SRVdBUkRfVklFVzogXCJvcGVuUmV3YXJkVmlld1wiLFxuICBEQUlMWV9EQVlfSVRFTV9DTElDSzogXCJkYWlseURheUl0ZW1DbGlja1wiLFxuICBEQUlMWV9TSE9XX1JFV0FSRF9JVEVNOiBcImRhaWx5U2hvd1Jld2FyZEl0ZW1cIixcbiAgREFJTFlfREFZX0VGRkVDVF9TSE9XOiBcImRhaWx5RGF5RWZmZWN0U2hvd1wiXG59O1xuZXhwb3J0IGVudW0gRURhaWx5QXVkaW9JRCB7XG4gIEJhZGdlVGFncyA9IDM0LFxuICBCYWRnZVNpdGUgPSAzNSxcbiAgRGFpbHlEYXkgPSAzNixcbiAgRGFpbHlNb250aFNsaWRlID0gMzcsXG4gIERhaWx5Q29tcGxldGUgPSAzOCxcbn0iXX0=