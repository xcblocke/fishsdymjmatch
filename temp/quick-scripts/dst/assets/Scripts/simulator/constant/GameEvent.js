
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/simulator/constant/GameEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4df0Rg3kxAsKVoOiVc4/C8', 'GameEvent');
// Scripts/simulator/constant/GameEvent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EGameEvent = void 0;
exports.EGameEvent = {
    Input_Register: "Input_Register",
    Effect_InitView: "Effect_InitView",
    Effect_Clear: "Effect_Clear",
    Effect_ClearAfter: "Effect_ClearAfter",
    Effect_StartAutoMerge: "Effect_StartAutoMerge",
    Effect_SkipAutoMerge: "Effect_SkipAutoMerge",
    Effect_Shuffle: "Effect_Shuffle",
    TileMapObject_OnClear: "TileMapObject_OnClear",
    Behavior_CreateTileNodesOk: "Behavior_CreateTileNodesOk",
    Behavior_TileNodesBirthAniOk: "Behavior_TileNodesBirthAniOk",
    Behavior_ClearBehaviorStart: "Behavior_ClearBehaviorStart",
    Behavior_ClearBehaviorFinish: "Behavior_ClearBehaviorFinish",
    Behavior_ShuffleStayEnd: "Behavior_ShuffleStayEnd",
    Behavior_ShuffleBehaviorFinish: "Behavior_ShuffleBehaviorFinish",
    TileNode_BeginSelected: "TileNode_BeginSelected",
    TileNode_BeginMove: "TileNode_BeginMove",
    TileNode_BeginUnSelected: "TileNode_BeginUnSelected",
    TileNode_SelectedFinish: "TileNode_SelectedFinish",
    TileNode_MoveFinish: "TileNode_MoveFinish",
    TileNode_UnSelectedFinish: "TileNode_UnSelectedFinish",
    TileNode_HidePropHint: "TileNode_HidePropHint",
    RedDot_addNotify: "RedDot_addNotify",
    RedDot_clearNotify: "RedDot_clearNotify",
    RedDot_clearAllNotify: "RedDot_clearAllNotify",
    IptSetLevel_AfterSetLevel: "IptSetLevel_AfterSetLevel",
    Fail_Auto: "Fail_Auto",
    ClassicRevive_UseRevive: "ClassicRevive_UseRevive",
    Clear_ClassicChange: "Clear_ClassicChange",
    View_RefreshBaseCards: "View_RefreshBaseCards"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVyxRQUFBLFVBQVUsR0FBRztJQUN0QixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsWUFBWSxFQUFFLGNBQWM7SUFDNUIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLHFCQUFxQixFQUFFLHVCQUF1QjtJQUM5QyxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxxQkFBcUIsRUFBRSx1QkFBdUI7SUFDOUMsMEJBQTBCLEVBQUUsNEJBQTRCO0lBQ3hELDRCQUE0QixFQUFFLDhCQUE4QjtJQUM1RCwyQkFBMkIsRUFBRSw2QkFBNkI7SUFDMUQsNEJBQTRCLEVBQUUsOEJBQThCO0lBQzVELHVCQUF1QixFQUFFLHlCQUF5QjtJQUNsRCw4QkFBOEIsRUFBRSxnQ0FBZ0M7SUFDaEUsc0JBQXNCLEVBQUUsd0JBQXdCO0lBQ2hELGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4Qyx3QkFBd0IsRUFBRSwwQkFBMEI7SUFDcEQsdUJBQXVCLEVBQUUseUJBQXlCO0lBQ2xELG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQyx5QkFBeUIsRUFBRSwyQkFBMkI7SUFDdEQscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLHlCQUF5QixFQUFFLDJCQUEyQjtJQUN0RCxTQUFTLEVBQUUsV0FBVztJQUN0Qix1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzFDLHFCQUFxQixFQUFFLHVCQUF1QjtDQUMvQyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBFR2FtZUV2ZW50ID0ge1xuICBJbnB1dF9SZWdpc3RlcjogXCJJbnB1dF9SZWdpc3RlclwiLFxuICBFZmZlY3RfSW5pdFZpZXc6IFwiRWZmZWN0X0luaXRWaWV3XCIsXG4gIEVmZmVjdF9DbGVhcjogXCJFZmZlY3RfQ2xlYXJcIixcbiAgRWZmZWN0X0NsZWFyQWZ0ZXI6IFwiRWZmZWN0X0NsZWFyQWZ0ZXJcIixcbiAgRWZmZWN0X1N0YXJ0QXV0b01lcmdlOiBcIkVmZmVjdF9TdGFydEF1dG9NZXJnZVwiLFxuICBFZmZlY3RfU2tpcEF1dG9NZXJnZTogXCJFZmZlY3RfU2tpcEF1dG9NZXJnZVwiLFxuICBFZmZlY3RfU2h1ZmZsZTogXCJFZmZlY3RfU2h1ZmZsZVwiLFxuICBUaWxlTWFwT2JqZWN0X09uQ2xlYXI6IFwiVGlsZU1hcE9iamVjdF9PbkNsZWFyXCIsXG4gIEJlaGF2aW9yX0NyZWF0ZVRpbGVOb2Rlc09rOiBcIkJlaGF2aW9yX0NyZWF0ZVRpbGVOb2Rlc09rXCIsXG4gIEJlaGF2aW9yX1RpbGVOb2Rlc0JpcnRoQW5pT2s6IFwiQmVoYXZpb3JfVGlsZU5vZGVzQmlydGhBbmlPa1wiLFxuICBCZWhhdmlvcl9DbGVhckJlaGF2aW9yU3RhcnQ6IFwiQmVoYXZpb3JfQ2xlYXJCZWhhdmlvclN0YXJ0XCIsXG4gIEJlaGF2aW9yX0NsZWFyQmVoYXZpb3JGaW5pc2g6IFwiQmVoYXZpb3JfQ2xlYXJCZWhhdmlvckZpbmlzaFwiLFxuICBCZWhhdmlvcl9TaHVmZmxlU3RheUVuZDogXCJCZWhhdmlvcl9TaHVmZmxlU3RheUVuZFwiLFxuICBCZWhhdmlvcl9TaHVmZmxlQmVoYXZpb3JGaW5pc2g6IFwiQmVoYXZpb3JfU2h1ZmZsZUJlaGF2aW9yRmluaXNoXCIsXG4gIFRpbGVOb2RlX0JlZ2luU2VsZWN0ZWQ6IFwiVGlsZU5vZGVfQmVnaW5TZWxlY3RlZFwiLFxuICBUaWxlTm9kZV9CZWdpbk1vdmU6IFwiVGlsZU5vZGVfQmVnaW5Nb3ZlXCIsXG4gIFRpbGVOb2RlX0JlZ2luVW5TZWxlY3RlZDogXCJUaWxlTm9kZV9CZWdpblVuU2VsZWN0ZWRcIixcbiAgVGlsZU5vZGVfU2VsZWN0ZWRGaW5pc2g6IFwiVGlsZU5vZGVfU2VsZWN0ZWRGaW5pc2hcIixcbiAgVGlsZU5vZGVfTW92ZUZpbmlzaDogXCJUaWxlTm9kZV9Nb3ZlRmluaXNoXCIsXG4gIFRpbGVOb2RlX1VuU2VsZWN0ZWRGaW5pc2g6IFwiVGlsZU5vZGVfVW5TZWxlY3RlZEZpbmlzaFwiLFxuICBUaWxlTm9kZV9IaWRlUHJvcEhpbnQ6IFwiVGlsZU5vZGVfSGlkZVByb3BIaW50XCIsXG4gIFJlZERvdF9hZGROb3RpZnk6IFwiUmVkRG90X2FkZE5vdGlmeVwiLFxuICBSZWREb3RfY2xlYXJOb3RpZnk6IFwiUmVkRG90X2NsZWFyTm90aWZ5XCIsXG4gIFJlZERvdF9jbGVhckFsbE5vdGlmeTogXCJSZWREb3RfY2xlYXJBbGxOb3RpZnlcIixcbiAgSXB0U2V0TGV2ZWxfQWZ0ZXJTZXRMZXZlbDogXCJJcHRTZXRMZXZlbF9BZnRlclNldExldmVsXCIsXG4gIEZhaWxfQXV0bzogXCJGYWlsX0F1dG9cIixcbiAgQ2xhc3NpY1Jldml2ZV9Vc2VSZXZpdmU6IFwiQ2xhc3NpY1Jldml2ZV9Vc2VSZXZpdmVcIixcbiAgQ2xlYXJfQ2xhc3NpY0NoYW5nZTogXCJDbGVhcl9DbGFzc2ljQ2hhbmdlXCIsXG4gIFZpZXdfUmVmcmVzaEJhc2VDYXJkczogXCJWaWV3X1JlZnJlc2hCYXNlQ2FyZHNcIlxufTsiXX0=