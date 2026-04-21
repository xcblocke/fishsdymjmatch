
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '074fc7r/BZMZrpc4PnU3t2g', 'TaskData');
// subpackages/l_task/Scripts/TaskData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultTaskStage = exports.createDefaultTaskData = exports.ETaskUIType = exports.ETaskUIStageType = exports.ETaskType = exports.ETaskStageState = void 0;
var ETaskStageState;
(function (ETaskStageState) {
    ETaskStageState[ETaskStageState["Doing"] = 1] = "Doing";
    ETaskStageState[ETaskStageState["Wait"] = 2] = "Wait";
    ETaskStageState[ETaskStageState["Finish"] = 3] = "Finish";
})(ETaskStageState = exports.ETaskStageState || (exports.ETaskStageState = {}));
var ETaskType;
(function (ETaskType) {
    ETaskType[ETaskType["UseItem"] = 1] = "UseItem";
    ETaskType[ETaskType["ClearMahjong"] = 2] = "ClearMahjong";
    ETaskType[ETaskType["FinishLevel"] = 3] = "FinishLevel";
    ETaskType[ETaskType["FinishXLevel"] = 4] = "FinishXLevel";
})(ETaskType = exports.ETaskType || (exports.ETaskType = {}));
var ETaskUIStageType;
(function (ETaskUIStageType) {
    ETaskUIStageType[ETaskUIStageType["Finish"] = 1] = "Finish";
    ETaskUIStageType[ETaskUIStageType["Doing"] = 2] = "Doing";
    ETaskUIStageType[ETaskUIStageType["Wait"] = 3] = "Wait";
})(ETaskUIStageType = exports.ETaskUIStageType || (exports.ETaskUIStageType = {}));
var ETaskUIType;
(function (ETaskUIType) {
    ETaskUIType[ETaskUIType["Home"] = 1] = "Home";
    ETaskUIType[ETaskUIType["Result"] = 2] = "Result";
})(ETaskUIType = exports.ETaskUIType || (exports.ETaskUIType = {}));
var createDefaultTaskData = function () {
    return {
        isFirstHomeShow: false,
        isFirstTaskIntervention: false,
        lastTime: 0,
        taskStage: 1,
        listTaskType: [],
        dictStageState: {},
        dictTaskProgress: {},
        pendingClearCount: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    };
};
exports.createDefaultTaskData = createDefaultTaskData;
var createDefaultTaskStage = function () {
    return {
        stageState: ETaskStageState.Doing,
        taskCompleteList: []
    };
};
exports.createDefaultTaskStage = createDefaultTaskStage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qix1REFBUyxDQUFBO0lBQ1QscURBQVEsQ0FBQTtJQUNSLHlEQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFDRCxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDbkIsK0NBQVcsQ0FBQTtJQUNYLHlEQUFnQixDQUFBO0lBQ2hCLHVEQUFlLENBQUE7SUFDZix5REFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFDRCxJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDMUIsMkRBQVUsQ0FBQTtJQUNWLHlEQUFTLENBQUE7SUFDVCx1REFBUSxDQUFBO0FBQ1YsQ0FBQyxFQUpXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBSTNCO0FBQ0QsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLDZDQUFRLENBQUE7SUFDUixpREFBVSxDQUFBO0FBQ1osQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBQ00sSUFBSSxxQkFBcUIsR0FBRztJQUNqQyxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUs7UUFDdEIsdUJBQXVCLEVBQUUsS0FBSztRQUM5QixRQUFRLEVBQUUsQ0FBQztRQUNYLFNBQVMsRUFBRSxDQUFDO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixpQkFBaUIsRUFBRTtZQUNqQixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0w7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBakJTLFFBQUEscUJBQXFCLHlCQWlCOUI7QUFDSyxJQUFJLHNCQUFzQixHQUFHO0lBQ2xDLE9BQU87UUFDTCxVQUFVLEVBQUUsZUFBZSxDQUFDLEtBQUs7UUFDakMsZ0JBQWdCLEVBQUUsRUFBRTtLQUNyQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBTFMsUUFBQSxzQkFBc0IsMEJBSy9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRVRhc2tTdGFnZVN0YXRlIHtcbiAgRG9pbmcgPSAxLFxuICBXYWl0ID0gMixcbiAgRmluaXNoID0gMyxcbn1cbmV4cG9ydCBlbnVtIEVUYXNrVHlwZSB7XG4gIFVzZUl0ZW0gPSAxLFxuICBDbGVhck1haGpvbmcgPSAyLFxuICBGaW5pc2hMZXZlbCA9IDMsXG4gIEZpbmlzaFhMZXZlbCA9IDQsXG59XG5leHBvcnQgZW51bSBFVGFza1VJU3RhZ2VUeXBlIHtcbiAgRmluaXNoID0gMSxcbiAgRG9pbmcgPSAyLFxuICBXYWl0ID0gMyxcbn1cbmV4cG9ydCBlbnVtIEVUYXNrVUlUeXBlIHtcbiAgSG9tZSA9IDEsXG4gIFJlc3VsdCA9IDIsXG59XG5leHBvcnQgdmFyIGNyZWF0ZURlZmF1bHRUYXNrRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBpc0ZpcnN0SG9tZVNob3c6IGZhbHNlLFxuICAgIGlzRmlyc3RUYXNrSW50ZXJ2ZW50aW9uOiBmYWxzZSxcbiAgICBsYXN0VGltZTogMCxcbiAgICB0YXNrU3RhZ2U6IDEsXG4gICAgbGlzdFRhc2tUeXBlOiBbXSxcbiAgICBkaWN0U3RhZ2VTdGF0ZToge30sXG4gICAgZGljdFRhc2tQcm9ncmVzczoge30sXG4gICAgcGVuZGluZ0NsZWFyQ291bnQ6IHtcbiAgICAgIDE6IDAsXG4gICAgICAyOiAwLFxuICAgICAgMzogMCxcbiAgICAgIDQ6IDAsXG4gICAgICA1OiAwXG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCB2YXIgY3JlYXRlRGVmYXVsdFRhc2tTdGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGFnZVN0YXRlOiBFVGFza1N0YWdlU3RhdGUuRG9pbmcsXG4gICAgdGFza0NvbXBsZXRlTGlzdDogW11cbiAgfTtcbn07Il19