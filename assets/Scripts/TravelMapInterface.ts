export enum MapElementId {
  E01Normal = 101,
  E01GiftBox1 = 102,
  E01GiftBox2 = 103,
  E01GiftBox3 = 104,
  E01LevelGiftBox1 = 105,
  E01LevelGiftBox2 = 106,
  E01LevelGiftBox3 = 107,
  E01LevelGiftBox4 = 108,
  E01Snowman = 110,
  E01House = 111,
  E01TopFinish = 199,
  E02Normal = 201,
  E02GiftBox1 = 202,
  E02GiftBox2 = 203,
  E02GiftBox3 = 204,
  E02LevelGiftBox1 = 205,
  E02LevelGiftBox2 = 206,
  E02LevelGiftBox3 = 207,
  E02LevelGiftBox4 = 208,
  E02Bg1 = 220,
  E02Bg2 = 221,
  E02Bg3 = 222,
  E02Building1 = 230,
  E02Building2 = 231,
  E02Building3 = 232,
  E02TopFinish = 299,
  E03GiftBox1 = 301,
  E03GiftBox2 = 302,
  E03GiftBox3 = 303,
  E03Scarf = 304,
  E03Tree = 305,
  E04GiftBox1 = 401,
  E04GiftBox2 = 402,
  E04GiftBox3 = 403,
  E04Panda1 = 404,
  E04Panda2 = 405,
  E05GiftBox1 = 501,
  E05GiftBox2 = 502,
  E05GiftBox3 = 503,
  E05Jeep = 504,
  E05Balloon = 505,
  E06Normal = 601,
  E06GiftBox1 = 602,
  E06GiftBox2 = 603,
  E06GiftBox3 = 604,
  E06Rose = 605,
  E06Letter = 606,
  E06LevelGiftBox1 = 607,
  E06LevelGiftBox2 = 608,
  E06LevelGiftBox3 = 609,
  E06LevelGiftBox4 = 610,
  E07Normal = 701,
  E07GiftBox1 = 702,
  E07GiftBox2 = 703,
  E07GiftBox3 = 704,
  E07Dog = 705,
  E07Ball = 706,
  E07LevelGiftBox1 = 707,
  E07LevelGiftBox2 = 708,
  E07LevelGiftBox3 = 709,
  E07LevelGiftBox4 = 710,
}
export enum EJourneyMapState {
  Locked = 0,
  Selected = 1,
  Unlocked = 2,
  Collecting = 3,
  UnlockedPass = 4,
  SelectedUnlocked = 5,
}
export var FinishLevelElement = [MapElementId.E01TopFinish, MapElementId.E02TopFinish];
(LevelBoxIconPath = {})[MapElementId.E01LevelGiftBox1] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E01LevelGiftBox2] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E01LevelGiftBox3] = {
  path: "atlas/task/task_img_middle_close",
  openPath: "atlas/task/task_img_middle_open",
  atlas: true,
  scale: 0.75,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E01LevelGiftBox4] = {
  path: "atlas/task/task_img_big_close",
  openPath: "atlas/task/task_img_big_open",
  atlas: true,
  scale: 0.65,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E02LevelGiftBox1] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E02LevelGiftBox2] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E02LevelGiftBox3] = {
  path: "atlas/task/task_img_middle_close",
  openPath: "atlas/task/task_img_middle_open",
  atlas: true,
  scale: 0.75,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E02LevelGiftBox4] = {
  path: "atlas/task/task_img_big_close",
  openPath: "atlas/task/task_img_big_open",
  atlas: true,
  scale: 0.65,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E06LevelGiftBox1] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E06LevelGiftBox2] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E06LevelGiftBox3] = {
  path: "atlas/task/task_img_middle_close",
  openPath: "atlas/task/task_img_middle_open",
  atlas: true,
  scale: 0.75,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E06LevelGiftBox4] = {
  path: "atlas/task/task_img_big_close",
  openPath: "atlas/task/task_img_big_open",
  atlas: true,
  scale: 0.65,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E07LevelGiftBox1] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E07LevelGiftBox2] = {
  path: "atlas/task/task_img_small_close",
  openPath: "atlas/task/task_img_small_open",
  atlas: true,
  scale: 0.85,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E07LevelGiftBox3] = {
  path: "atlas/task/task_img_middle_close",
  openPath: "atlas/task/task_img_middle_open",
  atlas: true,
  scale: 0.75,
  offsetX: 0,
  offsetY: 0
};
LevelBoxIconPath[MapElementId.E07LevelGiftBox4] = {
  path: "atlas/task/task_img_big_close",
  openPath: "atlas/task/task_img_big_open",
  atlas: true,
  scale: 0.65,
  offsetX: 0,
  offsetY: 0
};
export var LevelBoxIconPath = LevelBoxIconPath;
export var TopThanLevelElement = [MapElementId.E01TopFinish, MapElementId.E02Building1, MapElementId.E02Building2, MapElementId.E02Building3];
export enum EJourneyMapMode {
  Simple = 1,
  Complex = 2,
}