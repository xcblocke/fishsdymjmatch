"use strict";
cc._RF.push(module, '640ebQFkvtNUZVMh4vbQdWh', 'Config');
// Scripts/Config.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PLATFORM_CONFIG = exports.EVT_TIME_STAT_UPDATE = exports.EVT_AD_SHOW_END = exports.EVT_AD_SHOW_START = exports.EVT_MSG_KEY_RESETTHEME = exports.EVT_MSG_KEY_CHANGETHEME = exports.EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY = exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL = exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_END = exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE = exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_START = exports.EVT_MSG_KEY_EVENT_SHOW = exports.EVT_MSG_KEY_EVENT_HIDE = exports.HIDELOADING = exports.SHOWLOADING = exports.SHOWTIPS = exports.HIDEBLOCK = exports.SHOWBLOCK = void 0;
exports.SHOWBLOCK = "SHOWBLOCK";
exports.HIDEBLOCK = "HIDEBLOCK";
exports.SHOWTIPS = "SHOWTIPS";
exports.SHOWLOADING = "SHOWLOADING";
exports.HIDELOADING = "HIDELOADING";
exports.EVT_MSG_KEY_EVENT_HIDE = "EVT_MSG_KEY_EVENT_HIDE";
exports.EVT_MSG_KEY_EVENT_SHOW = "EVT_MSG_KEY_EVENT_SHOW";
exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_START = "EVT_MSG_KEY_EVENT_TOP_TOUCH_START";
exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE = "EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE";
exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_END = "EVT_MSG_KEY_EVENT_TOP_TOUCH_END";
exports.EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL = "EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL";
exports.EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY = "EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY";
exports.EVT_MSG_KEY_CHANGETHEME = "EVT_MSG_KEY_CHANGETHEME";
exports.EVT_MSG_KEY_RESETTHEME = "EVT_MSG_KEY_RESETTHEME";
exports.EVT_AD_SHOW_START = "EVT_AD_SHOW_START";
exports.EVT_AD_SHOW_END = "EVT_AD_SHOW_END";
exports.EVT_TIME_STAT_UPDATE = "EVT_TIME_STAT_UPDATE";
exports.PLATFORM_CONFIG = {
    iOS: {
        bundleID: "com.hungrystudio.mahjong.ios",
        signSecret: "xCDLs49NhV0mfjeKGyJrUUqQdCywSGnK",
        projectId: "BlockMahjongIOS"
    },
    Android: {
        bundleID: "com.hungrystudio.mahjong",
        signSecret: "sd1vTZ7clLFPuIJYhJPXWrkmXrWNk5Ij",
        projectId: "BlockMahjongGP"
    }
};

cc._RF.pop();