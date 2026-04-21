"use strict";
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