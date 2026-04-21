"use strict";
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