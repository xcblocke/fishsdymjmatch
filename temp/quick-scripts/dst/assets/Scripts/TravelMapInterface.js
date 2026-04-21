
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TravelMapInterface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RyYXZlbE1hcEludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksWUE4RFg7QUE5REQsV0FBWSxZQUFZO0lBQ3RCLDJEQUFlLENBQUE7SUFDZiwrREFBaUIsQ0FBQTtJQUNqQiwrREFBaUIsQ0FBQTtJQUNqQiwrREFBaUIsQ0FBQTtJQUNqQix5RUFBc0IsQ0FBQTtJQUN0Qix5RUFBc0IsQ0FBQTtJQUN0Qix5RUFBc0IsQ0FBQTtJQUN0Qix5RUFBc0IsQ0FBQTtJQUN0Qiw2REFBZ0IsQ0FBQTtJQUNoQix5REFBYyxDQUFBO0lBQ2QsaUVBQWtCLENBQUE7SUFDbEIsMkRBQWUsQ0FBQTtJQUNmLCtEQUFpQixDQUFBO0lBQ2pCLCtEQUFpQixDQUFBO0lBQ2pCLCtEQUFpQixDQUFBO0lBQ2pCLHlFQUFzQixDQUFBO0lBQ3RCLHlFQUFzQixDQUFBO0lBQ3RCLHlFQUFzQixDQUFBO0lBQ3RCLHlFQUFzQixDQUFBO0lBQ3RCLHFEQUFZLENBQUE7SUFDWixxREFBWSxDQUFBO0lBQ1oscURBQVksQ0FBQTtJQUNaLGlFQUFrQixDQUFBO0lBQ2xCLGlFQUFrQixDQUFBO0lBQ2xCLGlFQUFrQixDQUFBO0lBQ2xCLGlFQUFrQixDQUFBO0lBQ2xCLCtEQUFpQixDQUFBO0lBQ2pCLCtEQUFpQixDQUFBO0lBQ2pCLCtEQUFpQixDQUFBO0lBQ2pCLHlEQUFjLENBQUE7SUFDZCx1REFBYSxDQUFBO0lBQ2IsK0RBQWlCLENBQUE7SUFDakIsK0RBQWlCLENBQUE7SUFDakIsK0RBQWlCLENBQUE7SUFDakIsMkRBQWUsQ0FBQTtJQUNmLDJEQUFlLENBQUE7SUFDZiwrREFBaUIsQ0FBQTtJQUNqQiwrREFBaUIsQ0FBQTtJQUNqQiwrREFBaUIsQ0FBQTtJQUNqQix1REFBYSxDQUFBO0lBQ2IsNkRBQWdCLENBQUE7SUFDaEIsMkRBQWUsQ0FBQTtJQUNmLCtEQUFpQixDQUFBO0lBQ2pCLCtEQUFpQixD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WUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDOUksSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLHlEQUFVLENBQUE7SUFDViwyREFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTWFwRWxlbWVudElkIHtcbiAgRTAxTm9ybWFsID0gMTAxLFxuICBFMDFHaWZ0Qm94MSA9IDEwMixcbiAgRTAxR2lmdEJveDIgPSAxMDMsXG4gIEUwMUdpZnRCb3gzID0gMTA0LFxuICBFMDFMZXZlbEdpZnRCb3gxID0gMTA1LFxuICBFMDFMZXZlbEdpZnRCb3gyID0gMTA2LFxuICBFMDFMZXZlbEdpZnRCb3gzID0gMTA3LFxuICBFMDFMZXZlbEdpZnRCb3g0ID0gMTA4LFxuICBFMDFTbm93bWFuID0gMTEwLFxuICBFMDFIb3VzZSA9IDExMSxcbiAgRTAxVG9wRmluaXNoID0gMTk5LFxuICBFMDJOb3JtYWwgPSAyMDEsXG4gIEUwMkdpZnRCb3gxID0gMjAyLFxuICBFMDJHaWZ0Qm94MiA9IDIwMyxcbiAgRTAyR2lmdEJveDMgPSAyMDQsXG4gIEUwMkxldmVsR2lmdEJveDEgPSAyMDUsXG4gIEUwMkxldmVsR2lmdEJveDIgPSAyMDYsXG4gIEUwMkxldmVsR2lmdEJveDMgPSAyMDcsXG4gIEUwMkxldmVsR2lmdEJveDQgPSAyMDgsXG4gIEUwMkJnMSA9IDIyMCxcbiAgRTAyQmcyID0gMjIxLFxuICBFMDJCZzMgPSAyMjIsXG4gIEUwMkJ1aWxkaW5nMSA9IDIzMCxcbiAgRTAyQnVpbGRpbmcyID0gMjMxLFxuICBFMDJCdWlsZGluZzMgPSAyMzIsXG4gIEUwMlRvcEZpbmlzaCA9IDI5OSxcbiAgRTAzR2lmdEJveDEgPSAzMDEsXG4gIEUwM0dpZnRCb3gyID0gMzAyLFxuICBFMDNHaWZ0Qm94MyA9IDMwMyxcbiAgRTAzU2NhcmYgPSAzMDQsXG4gIEUwM1RyZWUgPSAzMDUsXG4gIEUwNEdpZnRCb3gxID0gNDAxLFxuICBFMDRHaWZ0Qm94MiA9IDQwMixcbiAgRTA0R2lmdEJveDMgPSA0MDMsXG4gIEUwNFBhbmRhMSA9IDQwNCxcbiAgRTA0UGFuZGEyID0gNDA1LFxuICBFMDVHaWZ0Qm94MSA9IDUwMSxcbiAgRTA1R2lmdEJveDIgPSA1MDIsXG4gIEUwNUdpZnRCb3gzID0gNTAzLFxuICBFMDVKZWVwID0gNTA0LFxuICBFMDVCYWxsb29uID0gNTA1LFxuICBFMDZOb3JtYWwgPSA2MDEsXG4gIEUwNkdpZnRCb3gxID0gNjAyLFxuICBFMDZHaWZ0Qm94MiA9IDYwMyxcbiAgRTA2R2lmdEJveDMgPSA2MDQsXG4gIEUwNlJvc2UgPSA2MDUsXG4gIEUwNkxldHRlciA9IDYwNixcbiAgRTA2TGV2ZWxHaWZ0Qm94MSA9IDYwNyxcbiAgRTA2TGV2ZWxHaWZ0Qm94MiA9IDYwOCxcbiAgRTA2TGV2ZWxHaWZ0Qm94MyA9IDYwOSxcbiAgRTA2TGV2ZWxHaWZ0Qm94NCA9IDYxMCxcbiAgRTA3Tm9ybWFsID0gNzAxLFxuICBFMDdHaWZ0Qm94MSA9IDcwMixcbiAgRTA3R2lmdEJveDIgPSA3MDMsXG4gIEUwN0dpZnRCb3gzID0gNzA0LFxuICBFMDdEb2cgPSA3MDUsXG4gIEUwN0JhbGwgPSA3MDYsXG4gIEUwN0xldmVsR2lmdEJveDEgPSA3MDcsXG4gIEUwN0xldmVsR2lmdEJveDIgPSA3MDgsXG4gIEUwN0xldmVsR2lmdEJveDMgPSA3MDksXG4gIEUwN0xldmVsR2lmdEJveDQgPSA3MTAsXG59XG5leHBvcnQgZW51bSBFSm91cm5leU1hcFN0YXRlIHtcbiAgTG9ja2VkID0gMCxcbiAgU2VsZWN0ZWQgPSAxLFxuICBVbmxvY2tlZCA9IDIsXG4gIENvbGxlY3RpbmcgPSAzLFxuICBVbmxvY2tlZFBhc3MgPSA0LFxuICBTZWxlY3RlZFVubG9ja2VkID0gNSxcbn1cbmV4cG9ydCB2YXIgRmluaXNoTGV2ZWxFbGVtZW50ID0gW01hcEVsZW1lbnRJZC5FMDFUb3BGaW5pc2gsIE1hcEVsZW1lbnRJZC5FMDJUb3BGaW5pc2hdO1xuKExldmVsQm94SWNvblBhdGggPSB7fSlbTWFwRWxlbWVudElkLkUwMUxldmVsR2lmdEJveDFdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfc21hbGxfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19zbWFsbF9vcGVuXCIsXG4gIGF0bGFzOiB0cnVlLFxuICBzY2FsZTogMC44NSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufTtcbkxldmVsQm94SWNvblBhdGhbTWFwRWxlbWVudElkLkUwMUxldmVsR2lmdEJveDJdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfc21hbGxfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19zbWFsbF9vcGVuXCIsXG4gIGF0bGFzOiB0cnVlLFxuICBzY2FsZTogMC44NSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufTtcbkxldmVsQm94SWNvblBhdGhbTWFwRWxlbWVudElkLkUwMUxldmVsR2lmdEJveDNdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfbWlkZGxlX2Nsb3NlXCIsXG4gIG9wZW5QYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfbWlkZGxlX29wZW5cIixcbiAgYXRsYXM6IHRydWUsXG4gIHNjYWxlOiAwLjc1LFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59O1xuTGV2ZWxCb3hJY29uUGF0aFtNYXBFbGVtZW50SWQuRTAxTGV2ZWxHaWZ0Qm94NF0gPSB7XG4gIHBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19iaWdfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19iaWdfb3BlblwiLFxuICBhdGxhczogdHJ1ZSxcbiAgc2NhbGU6IDAuNjUsXG4gIG9mZnNldFg6IDAsXG4gIG9mZnNldFk6IDBcbn07XG5MZXZlbEJveEljb25QYXRoW01hcEVsZW1lbnRJZC5FMDJMZXZlbEdpZnRCb3gxXSA9IHtcbiAgcGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX3NtYWxsX2Nsb3NlXCIsXG4gIG9wZW5QYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfc21hbGxfb3BlblwiLFxuICBhdGxhczogdHJ1ZSxcbiAgc2NhbGU6IDAuODUsXG4gIG9mZnNldFg6IDAsXG4gIG9mZnNldFk6IDBcbn07XG5MZXZlbEJveEljb25QYXRoW01hcEVsZW1lbnRJZC5FMDJMZXZlbEdpZnRCb3gyXSA9IHtcbiAgcGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX3NtYWxsX2Nsb3NlXCIsXG4gIG9wZW5QYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfc21hbGxfb3BlblwiLFxuICBhdGxhczogdHJ1ZSxcbiAgc2NhbGU6IDAuODUsXG4gIG9mZnNldFg6IDAsXG4gIG9mZnNldFk6IDBcbn07XG5MZXZlbEJveEljb25QYXRoW01hcEVsZW1lbnRJZC5FMDJMZXZlbEdpZnRCb3gzXSA9IHtcbiAgcGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX21pZGRsZV9jbG9zZVwiLFxuICBvcGVuUGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX21pZGRsZV9vcGVuXCIsXG4gIGF0bGFzOiB0cnVlLFxuICBzY2FsZTogMC43NSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufTtcbkxldmVsQm94SWNvblBhdGhbTWFwRWxlbWVudElkLkUwMkxldmVsR2lmdEJveDRdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfYmlnX2Nsb3NlXCIsXG4gIG9wZW5QYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfYmlnX29wZW5cIixcbiAgYXRsYXM6IHRydWUsXG4gIHNjYWxlOiAwLjY1LFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59O1xuTGV2ZWxCb3hJY29uUGF0aFtNYXBFbGVtZW50SWQuRTA2TGV2ZWxHaWZ0Qm94MV0gPSB7XG4gIHBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19zbWFsbF9jbG9zZVwiLFxuICBvcGVuUGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX3NtYWxsX29wZW5cIixcbiAgYXRsYXM6IHRydWUsXG4gIHNjYWxlOiAwLjg1LFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59O1xuTGV2ZWxCb3hJY29uUGF0aFtNYXBFbGVtZW50SWQuRTA2TGV2ZWxHaWZ0Qm94Ml0gPSB7XG4gIHBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19zbWFsbF9jbG9zZVwiLFxuICBvcGVuUGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX3NtYWxsX29wZW5cIixcbiAgYXRsYXM6IHRydWUsXG4gIHNjYWxlOiAwLjg1LFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59O1xuTGV2ZWxCb3hJY29uUGF0aFtNYXBFbGVtZW50SWQuRTA2TGV2ZWxHaWZ0Qm94M10gPSB7XG4gIHBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19taWRkbGVfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19taWRkbGVfb3BlblwiLFxuICBhdGxhczogdHJ1ZSxcbiAgc2NhbGU6IDAuNzUsXG4gIG9mZnNldFg6IDAsXG4gIG9mZnNldFk6IDBcbn07XG5MZXZlbEJveEljb25QYXRoW01hcEVsZW1lbnRJZC5FMDZMZXZlbEdpZnRCb3g0XSA9IHtcbiAgcGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX2JpZ19jbG9zZVwiLFxuICBvcGVuUGF0aDogXCJhdGxhcy90YXNrL3Rhc2tfaW1nX2JpZ19vcGVuXCIsXG4gIGF0bGFzOiB0cnVlLFxuICBzY2FsZTogMC42NSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufTtcbkxldmVsQm94SWNvblBhdGhbTWFwRWxlbWVudElkLkUwN0xldmVsR2lmdEJveDFdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfc21hbGxfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19zbWFsbF9vcGVuXCIsXG4gIGF0bGFzOiB0cnVlLFxuICBzY2FsZTogMC44NSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufTtcbkxldmVsQm94SWNvblBhdGhbTWFwRWxlbWVudElkLkUwN0xldmVsR2lmdEJveDJdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfc21hbGxfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19zbWFsbF9vcGVuXCIsXG4gIGF0bGFzOiB0cnVlLFxuICBzY2FsZTogMC44NSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufTtcbkxldmVsQm94SWNvblBhdGhbTWFwRWxlbWVudElkLkUwN0xldmVsR2lmdEJveDNdID0ge1xuICBwYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfbWlkZGxlX2Nsb3NlXCIsXG4gIG9wZW5QYXRoOiBcImF0bGFzL3Rhc2svdGFza19pbWdfbWlkZGxlX29wZW5cIixcbiAgYXRsYXM6IHRydWUsXG4gIHNjYWxlOiAwLjc1LFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59O1xuTGV2ZWxCb3hJY29uUGF0aFtNYXBFbGVtZW50SWQuRTA3TGV2ZWxHaWZ0Qm94NF0gPSB7XG4gIHBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19iaWdfY2xvc2VcIixcbiAgb3BlblBhdGg6IFwiYXRsYXMvdGFzay90YXNrX2ltZ19iaWdfb3BlblwiLFxuICBhdGxhczogdHJ1ZSxcbiAgc2NhbGU6IDAuNjUsXG4gIG9mZnNldFg6IDAsXG4gIG9mZnNldFk6IDBcbn07XG5leHBvcnQgdmFyIExldmVsQm94SWNvblBhdGggPSBMZXZlbEJveEljb25QYXRoO1xuZXhwb3J0IHZhciBUb3BUaGFuTGV2ZWxFbGVtZW50ID0gW01hcEVsZW1lbnRJZC5FMDFUb3BGaW5pc2gsIE1hcEVsZW1lbnRJZC5FMDJCdWlsZGluZzEsIE1hcEVsZW1lbnRJZC5FMDJCdWlsZGluZzIsIE1hcEVsZW1lbnRJZC5FMDJCdWlsZGluZzNdO1xuZXhwb3J0IGVudW0gRUpvdXJuZXlNYXBNb2RlIHtcbiAgU2ltcGxlID0gMSxcbiAgQ29tcGxleCA9IDIsXG59Il19