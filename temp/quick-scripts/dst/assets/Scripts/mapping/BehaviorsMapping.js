
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/mapping/BehaviorsMapping.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0aedsW+o9G6q1rGhzxurjz', 'BehaviorsMapping');
// Scripts/mapping/BehaviorsMapping.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BehaviorsMapping = void 0;
exports.BehaviorsMapping = {
    EnterAnimation: "enterAnimation",
    CleanView: "cleanView",
    Select: "select",
    UnSelect: "unSelect",
    SelectLock: "selectLock",
    Move: "move",
    TouchCancel: "touchCancel",
    Clear: "clear",
    BeforeWin: "beforeWin",
    End: "end",
    Fail: "fail",
    InitView: "initView",
    UpdateHitTipsProp: "updateHitTipsProp",
    UpdateShuffleProp: "updateShuffleProp",
    UpdateScore: "updateScore",
    ScoreFloat: "scoreFloat",
    UpdateCombo: "updateCombo",
    FullCombo: "fullCombo",
    DuoxiaoCombo: "duoxiaoCombo",
    ClearEffect: "clearEffect",
    UpdateMatchNum: "updateMatchNum",
    UpdateLevel: "updateLevel",
    HitTips: "hitTips",
    Shuffle: "shuffle",
    SpiralShuffle: "spiralShuffle",
    StackShuffle: "stackShuffle",
    GuaranteedShuffle: "guaranteedShuffle",
    Empty: "empty",
    MotivationalWords: "motivationalWords",
    MotivationalWordsEffect: "motivationalWordsEffect",
    ClickShowLock: "clickShowLock",
    ClickCoverLockTip: "clickCoverLockTip",
    HardLevelTips: "hardLevelTips",
    UpdateShadow: "updateShadow",
    ShowDianZan: "showDianZan",
    Guide: "guide",
    CardLockDarken: "cardLockDarken",
    RewardCombo: "rewardCombo",
    Bomb: "bomb",
    ShowLockMask: "showLockMask",
    ToggleShowLockMask: "toggleShowLockMask",
    RemoveLockMask: "removeLockMask",
    StartAutoMerge: "startAutoMerge",
    SkipAutoMerge: "skipAutoMerge",
    DailyChallengeDate: "dailyChallengeDate",
    BeforeDailyChallengeEnd: "beforeDailyChallengeEnd",
    YogaCard: "yogaCard",
    DailyChallengeEnd: "dailyChallengeEnd",
    InitCollectTarget: "initCollectTarget",
    UpdateCollectTarget: "updateCollectTarget",
    CollectFly: "collectFly",
    GoalAchieve: "goalAchieve",
    TravelEnd: "travelEnd",
    BlockInput: "blockInput",
    DaxiaoClearEffectEffect: "daxiaoClearEffectEffect",
    DaxiaoClearTipEffect: "daxiaoClearTipEffect",
    BlockInputRef: "blockInputRef",
    BlockInputRefWithParam: "blockInputRefWithParam",
    EnterAnimationFinish: "enterAnimationFinish",
    StartInit: "startInit",
    TargetCollected: "targetCollected",
    Match1PropTips: "match1PropTips",
    AddPropOff3h: "addPropOff3h",
    InitNextLevel: "InitNextLevel",
    AddLevelEnterAni: "addLevelEnterAni",
    AddLevelDrop: "addLevelDrop",
    AddLevelDropAni: "addLevelDropAni",
    AddLevelFinish: "addLevelFinish",
    AddLevelUnlock: "addLevelUnlock",
    PushBatchInfo: "pushBatchInfo",
    BreakBestScore: "breakBestScore",
    ClassicRevive: "classicRevive",
    ClassicFail: "classicFail",
    ClassicBeforeFail: "classicBeforeFail",
    ChangeBatch: "changeBatch",
    ChangeBatchAnim: "changeBatchAnim",
    ClearLayer: "clearLayer",
    NormalNewRecord: "normalNewRecord",
    AllClear: "allClear",
    Tile2ResetMove: "tile2ResetMove",
    Tile2UpdateSlotBar: "tile2UpdateSlotBar",
    Tile2Clear: "tile2Clear",
    Tile2ClearEffect: "tile2ClearEffect",
    Tile2InitSlotBar: "tile2InitSlotBar",
    Tile2InitBottom: "tile2InitBottom",
    Tile2InitTop: "tile2InitTop",
    Tile2End: "tile2End",
    Tile2BeforeEnd: "tile2BeforeEnd",
    Tile2BeforeFail: "tile2BeforeFail",
    Tile2Fail: "tile2Fail",
    Tile2Move: "tile2Move",
    Tile2Revive: "tile2Revive",
    Tile2NotEnoughItems: "tile2NotEnoughItems",
    Tile2UpdateItem: "tile2UpdateItem",
    Tile2Shuffle: "tile2Shuffle",
    Tile2HitTips: "tile2HitTips",
    Tile2UpdateHitTipsItem: "tile2UpdateHitTipsItem",
    Tile2Revert: "tile2Revert",
    Tile2UpdateRevertItem: "tile2UpdateRevertItem",
    Tile2ScoreFloat: "tile2ScoreFloat",
    Tile2UpdateScore: "tile2UpdateScore",
    Tile2UpdateCombo: "tile2UpdateCombo",
    Tile2DuoxiaoCombo: "tile2DuoxiaoCombo",
    Tile2DianZan: "tile2DianZan",
    Tile2RollCard: "tile2RollCard",
    Tile2ShuffleVibrate: "tile2ShuffleVibrate",
    Tile2HitTipsVibrate: "tile2HitTipsVibrate",
    Tile2RevertVibrate: "tile2RevertVibrate",
    Tile2TouchStart: "tile2TouchStart",
    Tile2NoHintTips: "tile2NoHintTips",
    Tile2ScreenEdgeEffect: "tile2ScreenEdgeEffect",
    Tile2ScreenTopEffect: "tile2ScreenTopEffect",
    Tile2SlotAdvance: "tile2SlotAdvance",
    Tile2Restart: "tile2Restart",
    Tile2Cheer: "tile2Cheer",
    Tile2NoValidTiles: "tile2NoValidTiles",
    Tile2Guide: "tile2Guide",
    Tile2StartAutoMerge: "tile2StartAutoMerge",
    Tile2Magnet: "tile2Magnet",
    Tile2MagnetHide: "tile2MagnetHide",
    Tile2MagnetMerge: "tile2MagnetMerge",
    Tile2RemoveHitTips: "tile2RemoveHitTips",
    Tile2Lucky: "tile2Lucky",
    Tile2Perfect: "tile2Perfect",
    Tile2NormalBack: "tile2NormalBack",
    Tile2SlotCardNumChange: "tile2SlotCardNumChange"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFXLFFBQUEsZ0JBQWdCLEdBQUc7SUFDNUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxTQUFTLEVBQUUsV0FBVztJQUN0QixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsVUFBVTtJQUNwQixVQUFVLEVBQUUsWUFBWTtJQUN4QixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0lBQzFCLEtBQUssRUFBRSxPQUFPO0lBQ2QsU0FBUyxFQUFFLFdBQVc7SUFDdEIsR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxXQUFXLEVBQUUsYUFBYTtJQUMxQixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixhQUFhLEVBQUUsZUFBZTtJQUM5QixZQUFZLEVBQUUsY0FBYztJQUM1QixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsS0FBSyxFQUFFLE9BQU87SUFDZCxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsdUJBQXVCLEVBQUUseUJBQXlCO0lBQ2xELGFBQWEsRUFBRSxlQUFlO0lBQzlCLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxhQUFhLEVBQUUsZUFBZTtJQUM5QixZQUFZLEVBQUUsY0FBYztJQUM1QixXQUFXLEVBQUUsYUFBYTtJQUMxQixLQUFL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QUFVLEVBQUUsWUFBWTtJQUN4QixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsVUFBVSxFQUFFLFlBQVk7SUFDeEIsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzFDLFdBQVcsRUFBRSxhQUFhO0lBQzFCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4QyxVQUFVLEVBQUUsWUFBWTtJQUN4QixZQUFZLEVBQUUsY0FBYztJQUM1QixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLHNCQUFzQixFQUFFLHdCQUF3QjtDQUNqRCxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBCZWhhdmlvcnNNYXBwaW5nID0ge1xuICBFbnRlckFuaW1hdGlvbjogXCJlbnRlckFuaW1hdGlvblwiLFxuICBDbGVhblZpZXc6IFwiY2xlYW5WaWV3XCIsXG4gIFNlbGVjdDogXCJzZWxlY3RcIixcbiAgVW5TZWxlY3Q6IFwidW5TZWxlY3RcIixcbiAgU2VsZWN0TG9jazogXCJzZWxlY3RMb2NrXCIsXG4gIE1vdmU6IFwibW92ZVwiLFxuICBUb3VjaENhbmNlbDogXCJ0b3VjaENhbmNlbFwiLFxuICBDbGVhcjogXCJjbGVhclwiLFxuICBCZWZvcmVXaW46IFwiYmVmb3JlV2luXCIsXG4gIEVuZDogXCJlbmRcIixcbiAgRmFpbDogXCJmYWlsXCIsXG4gIEluaXRWaWV3OiBcImluaXRWaWV3XCIsXG4gIFVwZGF0ZUhpdFRpcHNQcm9wOiBcInVwZGF0ZUhpdFRpcHNQcm9wXCIsXG4gIFVwZGF0ZVNodWZmbGVQcm9wOiBcInVwZGF0ZVNodWZmbGVQcm9wXCIsXG4gIFVwZGF0ZVNjb3JlOiBcInVwZGF0ZVNjb3JlXCIsXG4gIFNjb3JlRmxvYXQ6IFwic2NvcmVGbG9hdFwiLFxuICBVcGRhdGVDb21ibzogXCJ1cGRhdGVDb21ib1wiLFxuICBGdWxsQ29tYm86IFwiZnVsbENvbWJvXCIsXG4gIER1b3hpYW9Db21ibzogXCJkdW94aWFvQ29tYm9cIixcbiAgQ2xlYXJFZmZlY3Q6IFwiY2xlYXJFZmZlY3RcIixcbiAgVXBkYXRlTWF0Y2hOdW06IFwidXBkYXRlTWF0Y2hOdW1cIixcbiAgVXBkYXRlTGV2ZWw6IFwidXBkYXRlTGV2ZWxcIixcbiAgSGl0VGlwczogXCJoaXRUaXBzXCIsXG4gIFNodWZmbGU6IFwic2h1ZmZsZVwiLFxuICBTcGlyYWxTaHVmZmxlOiBcInNwaXJhbFNodWZmbGVcIixcbiAgU3RhY2tTaHVmZmxlOiBcInN0YWNrU2h1ZmZsZVwiLFxuICBHdWFyYW50ZWVkU2h1ZmZsZTogXCJndWFyYW50ZWVkU2h1ZmZsZVwiLFxuICBFbXB0eTogXCJlbXB0eVwiLFxuICBNb3RpdmF0aW9uYWxXb3JkczogXCJtb3RpdmF0aW9uYWxXb3Jkc1wiLFxuICBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdDogXCJtb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdFwiLFxuICBDbGlja1Nob3dMb2NrOiBcImNsaWNrU2hvd0xvY2tcIixcbiAgQ2xpY2tDb3ZlckxvY2tUaXA6IFwiY2xpY2tDb3ZlckxvY2tUaXBcIixcbiAgSGFyZExldmVsVGlwczogXCJoYXJkTGV2ZWxUaXBzXCIsXG4gIFVwZGF0ZVNoYWRvdzogXCJ1cGRhdGVTaGFkb3dcIixcbiAgU2hvd0RpYW5aYW46IFwic2hvd0RpYW5aYW5cIixcbiAgR3VpZGU6IFwiZ3VpZGVcIixcbiAgQ2FyZExvY2tEYXJrZW46IFwiY2FyZExvY2tEYXJrZW5cIixcbiAgUmV3YXJkQ29tYm86IFwicmV3YXJkQ29tYm9cIixcbiAgQm9tYjogXCJib21iXCIsXG4gIFNob3dMb2NrTWFzazogXCJzaG93TG9ja01hc2tcIixcbiAgVG9nZ2xlU2hvd0xvY2tNYXNrOiBcInRvZ2dsZVNob3dMb2NrTWFza1wiLFxuICBSZW1vdmVMb2NrTWFzazogXCJyZW1vdmVMb2NrTWFza1wiLFxuICBTdGFydEF1dG9NZXJnZTogXCJzdGFydEF1dG9NZXJnZVwiLFxuICBTa2lwQXV0b01lcmdlOiBcInNraXBBdXRvTWVyZ2VcIixcbiAgRGFpbHlDaGFsbGVuZ2VEYXRlOiBcImRhaWx5Q2hhbGxlbmdlRGF0ZVwiLFxuICBCZWZvcmVEYWlseUNoYWxsZW5nZUVuZDogXCJiZWZvcmVEYWlseUNoYWxsZW5nZUVuZFwiLFxuICBZb2dhQ2FyZDogXCJ5b2dhQ2FyZFwiLFxuICBEYWlseUNoYWxsZW5nZUVuZDogXCJkYWlseUNoYWxsZW5nZUVuZFwiLFxuICBJbml0Q29sbGVjdFRhcmdldDogXCJpbml0Q29sbGVjdFRhcmdldFwiLFxuICBVcGRhdGVDb2xsZWN0VGFyZ2V0OiBcInVwZGF0ZUNvbGxlY3RUYXJnZXRcIixcbiAgQ29sbGVjdEZseTogXCJjb2xsZWN0Rmx5XCIsXG4gIEdvYWxBY2hpZXZlOiBcImdvYWxBY2hpZXZlXCIsXG4gIFRyYXZlbEVuZDogXCJ0cmF2ZWxFbmRcIixcbiAgQmxvY2tJbnB1dDogXCJibG9ja0lucHV0XCIsXG4gIERheGlhb0NsZWFyRWZmZWN0RWZmZWN0OiBcImRheGlhb0NsZWFyRWZmZWN0RWZmZWN0XCIsXG4gIERheGlhb0NsZWFyVGlwRWZmZWN0OiBcImRheGlhb0NsZWFyVGlwRWZmZWN0XCIsXG4gIEJsb2NrSW5wdXRSZWY6IFwiYmxvY2tJbnB1dFJlZlwiLFxuICBCbG9ja0lucHV0UmVmV2l0aFBhcmFtOiBcImJsb2NrSW5wdXRSZWZXaXRoUGFyYW1cIixcbiAgRW50ZXJBbmltYXRpb25GaW5pc2g6IFwiZW50ZXJBbmltYXRpb25GaW5pc2hcIixcbiAgU3RhcnRJbml0OiBcInN0YXJ0SW5pdFwiLFxuICBUYXJnZXRDb2xsZWN0ZWQ6IFwidGFyZ2V0Q29sbGVjdGVkXCIsXG4gIE1hdGNoMVByb3BUaXBzOiBcIm1hdGNoMVByb3BUaXBzXCIsXG4gIEFkZFByb3BPZmYzaDogXCJhZGRQcm9wT2ZmM2hcIixcbiAgSW5pdE5leHRMZXZlbDogXCJJbml0TmV4dExldmVsXCIsXG4gIEFkZExldmVsRW50ZXJBbmk6IFwiYWRkTGV2ZWxFbnRlckFuaVwiLFxuICBBZGRMZXZlbERyb3A6IFwiYWRkTGV2ZWxEcm9wXCIsXG4gIEFkZExldmVsRHJvcEFuaTogXCJhZGRMZXZlbERyb3BBbmlcIixcbiAgQWRkTGV2ZWxGaW5pc2g6IFwiYWRkTGV2ZWxGaW5pc2hcIixcbiAgQWRkTGV2ZWxVbmxvY2s6IFwiYWRkTGV2ZWxVbmxvY2tcIixcbiAgUHVzaEJhdGNoSW5mbzogXCJwdXNoQmF0Y2hJbmZvXCIsXG4gIEJyZWFrQmVzdFNjb3JlOiBcImJyZWFrQmVzdFNjb3JlXCIsXG4gIENsYXNzaWNSZXZpdmU6IFwiY2xhc3NpY1Jldml2ZVwiLFxuICBDbGFzc2ljRmFpbDogXCJjbGFzc2ljRmFpbFwiLFxuICBDbGFzc2ljQmVmb3JlRmFpbDogXCJjbGFzc2ljQmVmb3JlRmFpbFwiLFxuICBDaGFuZ2VCYXRjaDogXCJjaGFuZ2VCYXRjaFwiLFxuICBDaGFuZ2VCYXRjaEFuaW06IFwiY2hhbmdlQmF0Y2hBbmltXCIsXG4gIENsZWFyTGF5ZXI6IFwiY2xlYXJMYXllclwiLFxuICBOb3JtYWxOZXdSZWNvcmQ6IFwibm9ybWFsTmV3UmVjb3JkXCIsXG4gIEFsbENsZWFyOiBcImFsbENsZWFyXCIsXG4gIFRpbGUyUmVzZXRNb3ZlOiBcInRpbGUyUmVzZXRNb3ZlXCIsXG4gIFRpbGUyVXBkYXRlU2xvdEJhcjogXCJ0aWxlMlVwZGF0ZVNsb3RCYXJcIixcbiAgVGlsZTJDbGVhcjogXCJ0aWxlMkNsZWFyXCIsXG4gIFRpbGUyQ2xlYXJFZmZlY3Q6IFwidGlsZTJDbGVhckVmZmVjdFwiLFxuICBUaWxlMkluaXRTbG90QmFyOiBcInRpbGUySW5pdFNsb3RCYXJcIixcbiAgVGlsZTJJbml0Qm90dG9tOiBcInRpbGUySW5pdEJvdHRvbVwiLFxuICBUaWxlMkluaXRUb3A6IFwidGlsZTJJbml0VG9wXCIsXG4gIFRpbGUyRW5kOiBcInRpbGUyRW5kXCIsXG4gIFRpbGUyQmVmb3JlRW5kOiBcInRpbGUyQmVmb3JlRW5kXCIsXG4gIFRpbGUyQmVmb3JlRmFpbDogXCJ0aWxlMkJlZm9yZUZhaWxcIixcbiAgVGlsZTJGYWlsOiBcInRpbGUyRmFpbFwiLFxuICBUaWxlMk1vdmU6IFwidGlsZTJNb3ZlXCIsXG4gIFRpbGUyUmV2aXZlOiBcInRpbGUyUmV2aXZlXCIsXG4gIFRpbGUyTm90RW5vdWdoSXRlbXM6IFwidGlsZTJOb3RFbm91Z2hJdGVtc1wiLFxuICBUaWxlMlVwZGF0ZUl0ZW06IFwidGlsZTJVcGRhdGVJdGVtXCIsXG4gIFRpbGUyU2h1ZmZsZTogXCJ0aWxlMlNodWZmbGVcIixcbiAgVGlsZTJIaXRUaXBzOiBcInRpbGUySGl0VGlwc1wiLFxuICBUaWxlMlVwZGF0ZUhpdFRpcHNJdGVtOiBcInRpbGUyVXBkYXRlSGl0VGlwc0l0ZW1cIixcbiAgVGlsZTJSZXZlcnQ6IFwidGlsZTJSZXZlcnRcIixcbiAgVGlsZTJVcGRhdGVSZXZlcnRJdGVtOiBcInRpbGUyVXBkYXRlUmV2ZXJ0SXRlbVwiLFxuICBUaWxlMlNjb3JlRmxvYXQ6IFwidGlsZTJTY29yZUZsb2F0XCIsXG4gIFRpbGUyVXBkYXRlU2NvcmU6IFwidGlsZTJVcGRhdGVTY29yZVwiLFxuICBUaWxlMlVwZGF0ZUNvbWJvOiBcInRpbGUyVXBkYXRlQ29tYm9cIixcbiAgVGlsZTJEdW94aWFvQ29tYm86IFwidGlsZTJEdW94aWFvQ29tYm9cIixcbiAgVGlsZTJEaWFuWmFuOiBcInRpbGUyRGlhblphblwiLFxuICBUaWxlMlJvbGxDYXJkOiBcInRpbGUyUm9sbENhcmRcIixcbiAgVGlsZTJTaHVmZmxlVmlicmF0ZTogXCJ0aWxlMlNodWZmbGVWaWJyYXRlXCIsXG4gIFRpbGUySGl0VGlwc1ZpYnJhdGU6IFwidGlsZTJIaXRUaXBzVmlicmF0ZVwiLFxuICBUaWxlMlJldmVydFZpYnJhdGU6IFwidGlsZTJSZXZlcnRWaWJyYXRlXCIsXG4gIFRpbGUyVG91Y2hTdGFydDogXCJ0aWxlMlRvdWNoU3RhcnRcIixcbiAgVGlsZTJOb0hpbnRUaXBzOiBcInRpbGUyTm9IaW50VGlwc1wiLFxuICBUaWxlMlNjcmVlbkVkZ2VFZmZlY3Q6IFwidGlsZTJTY3JlZW5FZGdlRWZmZWN0XCIsXG4gIFRpbGUyU2NyZWVuVG9wRWZmZWN0OiBcInRpbGUyU2NyZWVuVG9wRWZmZWN0XCIsXG4gIFRpbGUyU2xvdEFkdmFuY2U6IFwidGlsZTJTbG90QWR2YW5jZVwiLFxuICBUaWxlMlJlc3RhcnQ6IFwidGlsZTJSZXN0YXJ0XCIsXG4gIFRpbGUyQ2hlZXI6IFwidGlsZTJDaGVlclwiLFxuICBUaWxlMk5vVmFsaWRUaWxlczogXCJ0aWxlMk5vVmFsaWRUaWxlc1wiLFxuICBUaWxlMkd1aWRlOiBcInRpbGUyR3VpZGVcIixcbiAgVGlsZTJTdGFydEF1dG9NZXJnZTogXCJ0aWxlMlN0YXJ0QXV0b01lcmdlXCIsXG4gIFRpbGUyTWFnbmV0OiBcInRpbGUyTWFnbmV0XCIsXG4gIFRpbGUyTWFnbmV0SGlkZTogXCJ0aWxlMk1hZ25ldEhpZGVcIixcbiAgVGlsZTJNYWduZXRNZXJnZTogXCJ0aWxlMk1hZ25ldE1lcmdlXCIsXG4gIFRpbGUyUmVtb3ZlSGl0VGlwczogXCJ0aWxlMlJlbW92ZUhpdFRpcHNcIixcbiAgVGlsZTJMdWNreTogXCJ0aWxlMkx1Y2t5XCIsXG4gIFRpbGUyUGVyZmVjdDogXCJ0aWxlMlBlcmZlY3RcIixcbiAgVGlsZTJOb3JtYWxCYWNrOiBcInRpbGUyTm9ybWFsQmFja1wiLFxuICBUaWxlMlNsb3RDYXJkTnVtQ2hhbmdlOiBcInRpbGUyU2xvdENhcmROdW1DaGFuZ2VcIlxufTsiXX0=