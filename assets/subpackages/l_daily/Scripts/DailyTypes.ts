export enum DailyStatus {
  Unopened = 0,
  Unlocked = 1,
  Locked = 2,
  Completed = 3,
}
export var DisplayType = {
  Journey: "journey",
  Daily: "daily"
};
export var DailyEvents = {
  OPEN_REWARD_VIEW: "openRewardView",
  DAILY_DAY_ITEM_CLICK: "dailyDayItemClick",
  DAILY_SHOW_REWARD_ITEM: "dailyShowRewardItem",
  DAILY_DAY_EFFECT_SHOW: "dailyDayEffectShow"
};
export enum EDailyAudioID {
  BadgeTags = 34,
  BadgeSite = 35,
  DailyDay = 36,
  DailyMonthSlide = 37,
  DailyComplete = 38,
}