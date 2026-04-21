
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/simulator/constant/GameInputEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1ddbzK6hlLMpYExQ9DBDMT', 'GameInputEnum');
// Scripts/simulator/constant/GameInputEnum.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EShuffleFrom = exports.InputRunType = exports.EBehaviorEnum = exports.EGameInputEnum = void 0;
exports.EGameInputEnum = {
    StartSimulator: "startSimulator",
    StopSimulator: "stopSimulator",
    PauseSimulator: "pauseSimulator",
    ResumeSimulator: "resumeSimulator",
    DisplaySimulator: "displaySimulator",
    StartInit: "startInit",
    OpenGenerateState: "openGenerateState",
    EnterAnimation: "enterAnimation",
    EnterAnimationFinish: "enterAnimationFinish",
    SetLevel: "setLevel",
    ChooseLayout: "chooseLayout",
    ChooseLayoutClassic: "chooseLayoutClassic",
    InitView: "initView",
    InitViewFinish: "initViewFinish",
    TouchStart: "touchStart",
    TouchEnd: "touchEnd",
    TouchMove: "touchMove",
    TouchCancel: "touchCancel",
    HitTips: "hitTips",
    Shuffle: "shuffle",
    Restart: "restart",
    StartAutoMerge: "startAutoMerge",
    AutoMerge: "autoMerge",
    SkipAutoMerge: "skipAutoMerge",
    UpdateTime: "updateTime",
    Guide: "guide",
    AddProp: "addProp",
    ToggleCardLockDarken: "toggleCardLockDarken",
    RefreshCardLockDarken: "refreshCardLockDarken",
    ToggleShowLockMask: "toggleShowLockMask",
    RemoveLockMask: "removeLockMask",
    CleanView: "cleanView",
    InitCollectCard: "initCollectCard",
    InitEndStrategy: "initEndStrategy",
    TravelEnd: "travelEnd",
    TimeoutBreakCombo: "timeoutBreakCombo",
    UserOperate: "userOperate",
    DuoxiaoAutoMerge: "duoxiaoAutoMerge",
    NoMatchFail: "noMatchFail",
    SetLevelClassic: "setLevelClassic",
    AddLevelClassic: "addLevelClassic",
    ClassicFail: "classicFail",
    DropClassic: "dropClassic",
    AddPropOff3h: "addPropOff3h",
    TipsPropAutoMerge: "tipsPropAutoMerge",
    GameActive: "gameActive",
    Tile2SetSlotBarCount: "tile2SetSlotBarCount",
    Tile2InitSlotBar: "tile2InitSlotBar",
    Tile2Revive: "tile2Revive",
    Tile2InitBottom: "tile2InitBottom",
    Tile2InitTop: "tile2InitTop",
    Tile2InitView: "tile2InitView",
    Tile2InitViewFinish: "tile2InitViewFinish",
    Tile2Shuffle: "tile2Shuffle",
    Tile2HitTips: "tile2HitTips",
    Tile2Revert: "tile2Revert",
    Tile2EnterAnimation: "tile2EnterAnimation",
    Tile2EnterAnimationFinish: "tile2EnterAnimationFinish",
    Tile2DuoxiaoAutoMerge: "tile2DuoxiaoAutoMerge",
    Tile2SetLevel: "tile2SetLevel",
    Tile2AddProp: "tile2AddProp",
    Tile2StartAutoMerge: "tile2StartAutoMerge",
    Tile2AutoMerge: "tile2AutoMerge",
    Tile2MagnetMerge: "tile2MagnetMerge",
    Tile2SetSlotType: "tile2SetSlotType"
};
exports.EBehaviorEnum = {
    Success: "success",
    Fail: "fail",
    Abort: "abort"
};
exports.InputRunType = {
    Normal: "normal",
    Wait: "wait",
    RunInIdle: "runInIdle"
};
exports.EShuffleFrom = {
    Free: "free",
    WatchAd: "watchAd",
    Normal: "normal",
    Revive: "Revive",
    ClassicRevive: "ClassicRevive"
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVcsUUFBQSxjQUFjLEdBQUc7SUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxhQUFhLEVBQUUsZUFBZTtJQUM5QixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QyxRQUFRLEVBQUUsVUFBVTtJQUNwQixZQUFZLEVBQUUsY0FBYztJQUM1QixtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxVQUFVLEVBQUUsWUFBWTtJQUN4QixRQUFRLEVBQUUsVUFBVTtJQUNwQixTQUFTLEVBQUUsV0FBVztJQUN0QixXQUFXLEVBQUUsYUFBYTtJQUMxQixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLHFCQUFxQixFQUFFLHVCQUF1QjtJQUM5QyxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxTQUFTLEVBQUUsV0FBVztJQUN0QixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsU0FBUyxFQUFFLFdBQVc7SUFDdEIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxXQUFXLEVBQUUsYUFBYTtJQUMxQixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QyxnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxZQUFZLEVBQUUsY0FBYztJQUM1QixhQUFhLEVBQUUsZUFBZTtJQUM5QixtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzFDLHlCQUF5QixFQUFFLDJCQUEyQjtJQUN0RCxxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsYUFBYSxFQUFFLGVBQWU7SUFDOUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzFDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLGdCQUFnQixFQUFFLGtCQUFrQjtDQUNyQyxDQUFDO0FBQ1MsUUFBQSxhQUFhLEdBQUc7SUFDekIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFDUyxRQUFBLFlBQVksR0FBRztJQUN4QixNQUFNLEVBQUUsUUFBUTtJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxXQUFXO0NBQ3ZCLENBQUM7QUFDUyxRQUFBLFlBQVksR0FBRztJQUN4QixJQUFJLEVBQUUsTUFBTTtJQUNaLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGFBQWEsRUFBRSxlQUFlO0NBQy9CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEVHYW1lSW5wdXRFbnVtID0ge1xuICBTdGFydFNpbXVsYXRvcjogXCJzdGFydFNpbXVsYXRvclwiLFxuICBTdG9wU2ltdWxhdG9yOiBcInN0b3BTaW11bGF0b3JcIixcbiAgUGF1c2VTaW11bGF0b3I6IFwicGF1c2VTaW11bGF0b3JcIixcbiAgUmVzdW1lU2ltdWxhdG9yOiBcInJlc3VtZVNpbXVsYXRvclwiLFxuICBEaXNwbGF5U2ltdWxhdG9yOiBcImRpc3BsYXlTaW11bGF0b3JcIixcbiAgU3RhcnRJbml0OiBcInN0YXJ0SW5pdFwiLFxuICBPcGVuR2VuZXJhdGVTdGF0ZTogXCJvcGVuR2VuZXJhdGVTdGF0ZVwiLFxuICBFbnRlckFuaW1hdGlvbjogXCJlbnRlckFuaW1hdGlvblwiLFxuICBFbnRlckFuaW1hdGlvbkZpbmlzaDogXCJlbnRlckFuaW1hdGlvbkZpbmlzaFwiLFxuICBTZXRMZXZlbDogXCJzZXRMZXZlbFwiLFxuICBDaG9vc2VMYXlvdXQ6IFwiY2hvb3NlTGF5b3V0XCIsXG4gIENob29zZUxheW91dENsYXNzaWM6IFwiY2hvb3NlTGF5b3V0Q2xhc3NpY1wiLFxuICBJbml0VmlldzogXCJpbml0Vmlld1wiLFxuICBJbml0Vmlld0ZpbmlzaDogXCJpbml0Vmlld0ZpbmlzaFwiLFxuICBUb3VjaFN0YXJ0OiBcInRvdWNoU3RhcnRcIixcbiAgVG91Y2hFbmQ6IFwidG91Y2hFbmRcIixcbiAgVG91Y2hNb3ZlOiBcInRvdWNoTW92ZVwiLFxuICBUb3VjaENhbmNlbDogXCJ0b3VjaENhbmNlbFwiLFxuICBIaXRUaXBzOiBcImhpdFRpcHNcIixcbiAgU2h1ZmZsZTogXCJzaHVmZmxlXCIsXG4gIFJlc3RhcnQ6IFwicmVzdGFydFwiLFxuICBTdGFydEF1dG9NZXJnZTogXCJzdGFydEF1dG9NZXJnZVwiLFxuICBBdXRvTWVyZ2U6IFwiYXV0b01lcmdlXCIsXG4gIFNraXBBdXRvTWVyZ2U6IFwic2tpcEF1dG9NZXJnZVwiLFxuICBVcGRhdGVUaW1lOiBcInVwZGF0ZVRpbWVcIixcbiAgR3VpZGU6IFwiZ3VpZGVcIixcbiAgQWRkUHJvcDogXCJhZGRQcm9wXCIsXG4gIFRvZ2dsZUNhcmRMb2NrRGFya2VuOiBcInRvZ2dsZUNhcmRMb2NrRGFya2VuXCIsXG4gIFJlZnJlc2hDYXJkTG9ja0RhcmtlbjogXCJyZWZyZXNoQ2FyZExvY2tEYXJrZW5cIixcbiAgVG9nZ2xlU2hvd0xvY2tNYXNrOiBcInRvZ2dsZVNob3dMb2NrTWFza1wiLFxuICBSZW1vdmVMb2NrTWFzazogXCJyZW1vdmVMb2NrTWFza1wiLFxuICBDbGVhblZpZXc6IFwiY2xlYW5WaWV3XCIsXG4gIEluaXRDb2xsZWN0Q2FyZDogXCJpbml0Q29sbGVjdENhcmRcIixcbiAgSW5pdEVuZFN0cmF0ZWd5OiBcImluaXRFbmRTdHJhdGVneVwiLFxuICBUcmF2ZWxFbmQ6IFwidHJhdmVsRW5kXCIsXG4gIFRpbWVvdXRCcmVha0NvbWJvOiBcInRpbWVvdXRCcmVha0NvbWJvXCIsXG4gIFVzZXJPcGVyYXRlOiBcInVzZXJPcGVyYXRlXCIsXG4gIER1b3hpYW9BdXRvTWVyZ2U6IFwiZHVveGlhb0F1dG9NZXJnZVwiLFxuICBOb01hdGNoRmFpbDogXCJub01hdGNoRmFpbFwiLFxuICBTZXRMZXZlbENsYXNzaWM6IFwic2V0TGV2ZWxDbGFzc2ljXCIsXG4gIEFkZExldmVsQ2xhc3NpYzogXCJhZGRMZXZlbENsYXNzaWNcIixcbiAgQ2xhc3NpY0ZhaWw6IFwiY2xhc3NpY0ZhaWxcIixcbiAgRHJvcENsYXNzaWM6IFwiZHJvcENsYXNzaWNcIixcbiAgQWRkUHJvcE9mZjNoOiBcImFkZFByb3BPZmYzaFwiLFxuICBUaXBzUHJvcEF1dG9NZXJnZTogXCJ0aXBzUHJvcEF1dG9NZXJnZVwiLFxuICBHYW1lQWN0aXZlOiBcImdhbWVBY3RpdmVcIixcbiAgVGlsZTJTZXRTbG90QmFyQ291bnQ6IFwidGlsZTJTZXRTbG90QmFyQ291bnRcIixcbiAgVGlsZTJJbml0U2xvdEJhcjogXCJ0aWxlMkluaXRTbG90QmFyXCIsXG4gIFRpbGUyUmV2aXZlOiBcInRpbGUyUmV2aXZlXCIsXG4gIFRpbGUySW5pdEJvdHRvbTogXCJ0aWxlMkluaXRCb3R0b21cIixcbiAgVGlsZTJJbml0VG9wOiBcInRpbGUySW5pdFRvcFwiLFxuICBUaWxlMkluaXRWaWV3OiBcInRpbGUySW5pdFZpZXdcIixcbiAgVGlsZTJJbml0Vmlld0ZpbmlzaDogXCJ0aWxlMkluaXRWaWV3RmluaXNoXCIsXG4gIFRpbGUyU2h1ZmZsZTogXCJ0aWxlMlNodWZmbGVcIixcbiAgVGlsZTJIaXRUaXBzOiBcInRpbGUySGl0VGlwc1wiLFxuICBUaWxlMlJldmVydDogXCJ0aWxlMlJldmVydFwiLFxuICBUaWxlMkVudGVyQW5pbWF0aW9uOiBcInRpbGUyRW50ZXJBbmltYXRpb25cIixcbiAgVGlsZTJFbnRlckFuaW1hdGlvbkZpbmlzaDogXCJ0aWxlMkVudGVyQW5pbWF0aW9uRmluaXNoXCIsXG4gIFRpbGUyRHVveGlhb0F1dG9NZXJnZTogXCJ0aWxlMkR1b3hpYW9BdXRvTWVyZ2VcIixcbiAgVGlsZTJTZXRMZXZlbDogXCJ0aWxlMlNldExldmVsXCIsXG4gIFRpbGUyQWRkUHJvcDogXCJ0aWxlMkFkZFByb3BcIixcbiAgVGlsZTJTdGFydEF1dG9NZXJnZTogXCJ0aWxlMlN0YXJ0QXV0b01lcmdlXCIsXG4gIFRpbGUyQXV0b01lcmdlOiBcInRpbGUyQXV0b01lcmdlXCIsXG4gIFRpbGUyTWFnbmV0TWVyZ2U6IFwidGlsZTJNYWduZXRNZXJnZVwiLFxuICBUaWxlMlNldFNsb3RUeXBlOiBcInRpbGUyU2V0U2xvdFR5cGVcIlxufTtcbmV4cG9ydCB2YXIgRUJlaGF2aW9yRW51bSA9IHtcbiAgU3VjY2VzczogXCJzdWNjZXNzXCIsXG4gIEZhaWw6IFwiZmFpbFwiLFxuICBBYm9ydDogXCJhYm9ydFwiXG59O1xuZXhwb3J0IHZhciBJbnB1dFJ1blR5cGUgPSB7XG4gIE5vcm1hbDogXCJub3JtYWxcIixcbiAgV2FpdDogXCJ3YWl0XCIsXG4gIFJ1bkluSWRsZTogXCJydW5JbklkbGVcIlxufTtcbmV4cG9ydCB2YXIgRVNodWZmbGVGcm9tID0ge1xuICBGcmVlOiBcImZyZWVcIixcbiAgV2F0Y2hBZDogXCJ3YXRjaEFkXCIsXG4gIE5vcm1hbDogXCJub3JtYWxcIixcbiAgUmV2aXZlOiBcIlJldml2ZVwiLFxuICBDbGFzc2ljUmV2aXZlOiBcIkNsYXNzaWNSZXZpdmVcIlxufTsiXX0=