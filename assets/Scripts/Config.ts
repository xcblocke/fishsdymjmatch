export var SHOWBLOCK = "SHOWBLOCK";
export var HIDEBLOCK = "HIDEBLOCK";
export var SHOWTIPS = "SHOWTIPS";
export var SHOWLOADING = "SHOWLOADING";
export var HIDELOADING = "HIDELOADING";
export var EVT_MSG_KEY_EVENT_HIDE = "EVT_MSG_KEY_EVENT_HIDE";
export var EVT_MSG_KEY_EVENT_SHOW = "EVT_MSG_KEY_EVENT_SHOW";
export var EVT_MSG_KEY_EVENT_TOP_TOUCH_START = "EVT_MSG_KEY_EVENT_TOP_TOUCH_START";
export var EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE = "EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE";
export var EVT_MSG_KEY_EVENT_TOP_TOUCH_END = "EVT_MSG_KEY_EVENT_TOP_TOUCH_END";
export var EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL = "EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL";
export var EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY = "EVT_MSG_KEY_EVENT_MAIN_GAME_VIEW_DESTROY";
export var EVT_MSG_KEY_CHANGETHEME = "EVT_MSG_KEY_CHANGETHEME";
export var EVT_MSG_KEY_RESETTHEME = "EVT_MSG_KEY_RESETTHEME";
export var EVT_AD_SHOW_START = "EVT_AD_SHOW_START";
export var EVT_AD_SHOW_END = "EVT_AD_SHOW_END";
export var EVT_TIME_STAT_UPDATE = "EVT_TIME_STAT_UPDATE";


export enum ServerType {
  develop = 1,  // 开发服
  release = 2, // 正式服
}

export const MainConfig = {
  curServerType: 1,
  serveUrl: "",
};


export var PLATFORM_CONFIG = {
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