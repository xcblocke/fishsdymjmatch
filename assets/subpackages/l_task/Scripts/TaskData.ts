export enum ETaskStageState {
  Doing = 1,
  Wait = 2,
  Finish = 3,
}
export enum ETaskType {
  UseItem = 1,
  ClearMahjong = 2,
  FinishLevel = 3,
  FinishXLevel = 4,
}
export enum ETaskUIStageType {
  Finish = 1,
  Doing = 2,
  Wait = 3,
}
export enum ETaskUIType {
  Home = 1,
  Result = 2,
}
export var createDefaultTaskData = function () {
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
export var createDefaultTaskStage = function () {
  return {
    stageState: ETaskStageState.Doing,
    taskCompleteList: []
  };
};