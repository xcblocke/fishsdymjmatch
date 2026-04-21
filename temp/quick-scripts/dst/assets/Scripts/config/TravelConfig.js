
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/config/TravelConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '461bajWMnlJt4ZBYO7pDOIJ', 'TravelConfig');
// Scripts/config/TravelConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TRAVEL_GAME_SESSION_CHANGE = exports.TRAVEL_GAME_SESSION_START = exports.TRAVEL_WIN_VIEW_VISIBLE = exports.TRAVEL_GAME_SESSION_END = exports.TRAVEL_GAME_COLLECT_BADGE = exports.TravelAudios = exports.ETravelRewardType = void 0;
var ETravelRewardType;
(function (ETravelRewardType) {
    ETravelRewardType[ETravelRewardType["EGiftBox"] = 1] = "EGiftBox";
    ETravelRewardType[ETravelRewardType["EBadge"] = 2] = "EBadge";
})(ETravelRewardType = exports.ETravelRewardType || (exports.ETravelRewardType = {}));
exports.TravelAudios = {
    Tags: "m_tags",
    BlankCommon: "m_blank",
    Button1: "m_button1",
    Collect: "m_collect1"
};
exports.TRAVEL_GAME_COLLECT_BADGE = "TravelGame_CollectBadge";
exports.TRAVEL_GAME_SESSION_END = "TravelGame_SessionEnd";
exports.TRAVEL_WIN_VIEW_VISIBLE = "TravelWinViewVisible";
exports.TRAVEL_GAME_SESSION_START = "TravelGame_SessionStart";
exports.TRAVEL_GAME_SESSION_CHANGE = "TravelGame_SessionChange";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvbmZpZy9UcmF2ZWxDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLGlCQUdYO0FBSEQsV0FBWSxpQkFBaUI7SUFDM0IsaUVBQVksQ0FBQTtJQUNaLDZEQUFVLENBQUE7QUFDWixDQUFDLEVBSFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFHNUI7QUFDVSxRQUFBLFlBQVksR0FBRztJQUN4QixJQUFJLEVBQUUsUUFBUTtJQUNkLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLE9BQU8sRUFBRSxXQUFXO0lBQ3BCLE9BQU8sRUFBRSxZQUFZO0NBQ3RCLENBQUM7QUFDUyxRQUFBLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO0FBQ3RELFFBQUEsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7QUFDbEQsUUFBQSx1QkFBdUIsR0FBRyxzQkFBc0IsQ0FBQztBQUNqRCxRQUFBLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO0FBQ3RELFFBQUEsMEJBQTBCLEdBQUcsMEJBQTBCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFVHJhdmVsUmV3YXJkVHlwZSB7XG4gIEVHaWZ0Qm94ID0gMSxcbiAgRUJhZGdlID0gMixcbn1cbmV4cG9ydCB2YXIgVHJhdmVsQXVkaW9zID0ge1xuICBUYWdzOiBcIm1fdGFnc1wiLFxuICBCbGFua0NvbW1vbjogXCJtX2JsYW5rXCIsXG4gIEJ1dHRvbjE6IFwibV9idXR0b24xXCIsXG4gIENvbGxlY3Q6IFwibV9jb2xsZWN0MVwiXG59O1xuZXhwb3J0IHZhciBUUkFWRUxfR0FNRV9DT0xMRUNUX0JBREdFID0gXCJUcmF2ZWxHYW1lX0NvbGxlY3RCYWRnZVwiO1xuZXhwb3J0IHZhciBUUkFWRUxfR0FNRV9TRVNTSU9OX0VORCA9IFwiVHJhdmVsR2FtZV9TZXNzaW9uRW5kXCI7XG5leHBvcnQgdmFyIFRSQVZFTF9XSU5fVklFV19WSVNJQkxFID0gXCJUcmF2ZWxXaW5WaWV3VmlzaWJsZVwiO1xuZXhwb3J0IHZhciBUUkFWRUxfR0FNRV9TRVNTSU9OX1NUQVJUID0gXCJUcmF2ZWxHYW1lX1Nlc3Npb25TdGFydFwiO1xuZXhwb3J0IHZhciBUUkFWRUxfR0FNRV9TRVNTSU9OX0NIQU5HRSA9IFwiVHJhdmVsR2FtZV9TZXNzaW9uQ2hhbmdlXCI7Il19