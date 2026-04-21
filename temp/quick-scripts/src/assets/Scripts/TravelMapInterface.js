"use strict";
cc._RF.push(module, '194e4v3rEhA25N9QFpSn1ju', 'TravelMapInterface');
// Scripts/TravelMapInterface.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EJourneyMapMode = exports.TopThanLevelElement = exports.LevelBoxIconPath = exports.FinishLevelElement = exports.EJourneyMapState = exports.MapElementId = void 0;
var MapElementId;
(function (MapElementId) {
    MapElementId[MapElementId["E01Normal"] = 101] = "E01Normal";
    MapElementId[MapElementId["E01GiftBox1"] = 102] = "E01GiftBox1";
    MapElementId[MapElementId["E01GiftBox2"] = 103] = "E01GiftBox2";
    MapElementId[MapElementId["E01GiftBox3"] = 104] = "E01GiftBox3";
    MapElementId[MapElementId["E01LevelGiftBox1"] = 105] = "E01LevelGiftBox1";
    MapElementId[MapElementId["E01LevelGiftBox2"] = 106] = "E01LevelGiftBox2";
    MapElementId[MapElementId["E01LevelGiftBox3"] = 107] = "E01LevelGiftBox3";
    MapElementId[MapElementId["E01LevelGiftBox4"] = 108] = "E01LevelGiftBox4";
    MapElementId[MapElementId["E01Snowman"] = 110] = "E01Snowman";
    MapElementId[MapElementId["E01House"] = 111] = "E01House";
    MapElementId[MapElementId["E01TopFinish"] = 199] = "E01TopFinish";
    MapElementId[MapElementId["E02Normal"] = 201] = "E02Normal";
    MapElementId[MapElementId["E02GiftBox1"] = 202] = "E02GiftBox1";
    MapElementId[MapElementId["E02GiftBox2"] = 203] = "E02GiftBox2";
    MapElementId[MapElementId["E02GiftBox3"] = 204] = "E02GiftBox3";
    MapElementId[MapElementId["E02LevelGiftBox1"] = 205] = "E02LevelGiftBox1";
    MapElementId[MapElementId["E02LevelGiftBox2"] = 206] = "E02LevelGiftBox2";
    MapElementId[MapElementId["E02LevelGiftBox3"] = 207] = "E02LevelGiftBox3";
    MapElementId[MapElementId["E02LevelGiftBox4"] = 208] = "E02LevelGiftBox4";
    MapElementId[MapElementId["E02Bg1"] = 220] = "E02Bg1";
    MapElementId[MapElementId["E02Bg2"] = 221] = "E02Bg2";
    MapElementId[MapElementId["E02Bg3"] = 222] = "E02Bg3";
    MapElementId[MapElementId["E02Building1"] = 230] = "E02Building1";
    MapElementId[MapElementId["E02Building2"] = 231] = "E02Building2";
    MapElementId[MapElementId["E02Building3"] = 232] = "E02Building3";
    MapElementId[MapElementId["E02TopFinish"] = 299] = "E02TopFinish";
    MapElementId[MapElementId["E03GiftBox1"] = 301] = "E03GiftBox1";
    MapElementId[MapElementId["E03GiftBox2"] = 302] = "E03GiftBox2";
    MapElementId[MapElementId["E03GiftBox3"] = 303] = "E03GiftBox3";
    MapElementId[MapElementId["E03Scarf"] = 304] = "E03Scarf";
    MapElementId[MapElementId["E03Tree"] = 305] = "E03Tree";
    MapElementId[MapElementId["E04GiftBox1"] = 401] = "E04GiftBox1";
    MapElementId[MapElementId["E04GiftBox2"] = 402] = "E04GiftBox2";
    MapElementId[MapElementId["E04GiftBox3"] = 403] = "E04GiftBox3";
    MapElementId[MapElementId["E04Panda1"] = 404] = "E04Panda1";
    MapElementId[MapElementId["E04Panda2"] = 405] = "E04Panda2";
    MapElementId[MapElementId["E05GiftBox1"] = 501] = "E05GiftBox1";
    MapElementId[MapElementId["E05GiftBox2"] = 502] = "E05GiftBox2";
    MapElementId[MapElementId["E05GiftBox3"] = 503] = "E05GiftBox3";
    MapElementId[MapElementId["E05Jeep"] = 504] = "E05Jeep";
    MapElementId[MapElementId["E05Balloon"] = 505] = "E05Balloon";
    MapElementId[MapElementId["E06Normal"] = 601] = "E06Normal";
    MapElementId[MapElementId["E06GiftBox1"] = 602] = "E06GiftBox1";
    MapElementId[MapElementId["E06GiftBox2"] = 603] = "E06GiftBox2";
    MapElementId[MapElementId["E06GiftBox3"] = 604] = "E06GiftBox3";
    MapElementId[MapElementId["E06Rose"] = 605] = "E06Rose";
    MapElementId[MapElementId["E06Letter"] = 606] = "E06Letter";
    MapElementId[MapElementId["E06LevelGiftBox1"] = 607] = "E06LevelGiftBox1";
    MapElementId[MapElementId["E06LevelGiftBox2"] = 608] = "E06LevelGiftBox2";
    MapElementId[MapElementId["E06LevelGiftBox3"] = 609] = "E06LevelGiftBox3";
    MapElementId[MapElementId["E06LevelGiftBox4"] = 610] = "E06LevelGiftBox4";
    MapElementId[MapElementId["E07Normal"] = 701] = "E07Normal";
    MapElementId[MapElementId["E07GiftBox1"] = 702] = "E07GiftBox1";
    MapElementId[MapElementId["E07GiftBox2"] = 703] = "E07GiftBox2";
    MapElementId[MapElementId["E07GiftBox3"] = 704] = "E07GiftBox3";
    MapElementId[MapElementId["E07Dog"] = 705] = "E07Dog";
    MapElementId[MapElementId["E07Ball"] = 706] = "E07Ball";
    MapElementId[MapElementId["E07LevelGiftBox1"] = 707] = "E07LevelGiftBox1";
    MapElementId[MapElementId["E07LevelGiftBox2"] = 708] = "E07LevelGiftBox2";
    MapElementId[MapElementId["E07LevelGiftBox3"] = 709] = "E07LevelGiftBox3";
    MapElementId[MapElementId["E07LevelGiftBox4"] = 710] = "E07LevelGiftBox4";
})(MapElementId = exports.MapElementId || (exports.MapElementId = {}));
var EJourneyMapState;
(function (EJourneyMapState) {
    EJourneyMapState[EJourneyMapState["Locked"] = 0] = "Locked";
    EJourneyMapState[EJourneyMapState["Selected"] = 1] = "Selected";
    EJourneyMapState[EJourneyMapState["Unlocked"] = 2] = "Unlocked";
    EJourneyMapState[EJourneyMapState["Collecting"] = 3] = "Collecting";
    EJourneyMapState[EJourneyMapState["UnlockedPass"] = 4] = "UnlockedPass";
    EJourneyMapState[EJourneyMapState["SelectedUnlocked"] = 5] = "SelectedUnlocked";
})(EJourneyMapState = exports.EJourneyMapState || (exports.EJourneyMapState = {}));
exports.FinishLevelElement = [MapElementId.E01TopFinish, MapElementId.E02TopFinish];
(exports.LevelBoxIconPath = {})[MapElementId.E01LevelGiftBox1] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E01LevelGiftBox2] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E01LevelGiftBox3] = {
    path: "atlas/task/task_img_middle_close",
    openPath: "atlas/task/task_img_middle_open",
    atlas: true,
    scale: 0.75,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E01LevelGiftBox4] = {
    path: "atlas/task/task_img_big_close",
    openPath: "atlas/task/task_img_big_open",
    atlas: true,
    scale: 0.65,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E02LevelGiftBox1] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E02LevelGiftBox2] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E02LevelGiftBox3] = {
    path: "atlas/task/task_img_middle_close",
    openPath: "atlas/task/task_img_middle_open",
    atlas: true,
    scale: 0.75,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E02LevelGiftBox4] = {
    path: "atlas/task/task_img_big_close",
    openPath: "atlas/task/task_img_big_open",
    atlas: true,
    scale: 0.65,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E06LevelGiftBox1] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E06LevelGiftBox2] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E06LevelGiftBox3] = {
    path: "atlas/task/task_img_middle_close",
    openPath: "atlas/task/task_img_middle_open",
    atlas: true,
    scale: 0.75,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E06LevelGiftBox4] = {
    path: "atlas/task/task_img_big_close",
    openPath: "atlas/task/task_img_big_open",
    atlas: true,
    scale: 0.65,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E07LevelGiftBox1] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E07LevelGiftBox2] = {
    path: "atlas/task/task_img_small_close",
    openPath: "atlas/task/task_img_small_open",
    atlas: true,
    scale: 0.85,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E07LevelGiftBox3] = {
    path: "atlas/task/task_img_middle_close",
    openPath: "atlas/task/task_img_middle_open",
    atlas: true,
    scale: 0.75,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath[MapElementId.E07LevelGiftBox4] = {
    path: "atlas/task/task_img_big_close",
    openPath: "atlas/task/task_img_big_open",
    atlas: true,
    scale: 0.65,
    offsetX: 0,
    offsetY: 0
};
exports.LevelBoxIconPath = exports.LevelBoxIconPath;
exports.TopThanLevelElement = [MapElementId.E01TopFinish, MapElementId.E02Building1, MapElementId.E02Building2, MapElementId.E02Building3];
var EJourneyMapMode;
(function (EJourneyMapMode) {
    EJourneyMapMode[EJourneyMapMode["Simple"] = 1] = "Simple";
    EJourneyMapMode[EJourneyMapMode["Complex"] = 2] = "Complex";
})(EJourneyMapMode = exports.EJourneyMapMode || (exports.EJourneyMapMode = {}));

cc._RF.pop();