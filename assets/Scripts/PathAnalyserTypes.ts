export var createCancellationToken = function () {
  return {
    isCancellationRequested: false,
    cancel: function () {
      this.isCancellationRequested = true;
    }
  };
};
export var DEFAULT_FRAME_CONFIG = {
  maxFrameTime: 10
};
export enum EFrameComputeState {
  Running = 0,
  Paused = 1,
  Completed = 2,
  Cancelled = 3,
}
export var createFrameComputer = function (e = DEFAULT_FRAME_CONFIG) {
  return {
    state: EFrameComputeState.Running,
    frameStartTime: 0,
    config: e,
    shouldYield: function () {
      return this.state !== EFrameComputeState.Running || Date.now() - this.frameStartTime >= this.config.maxFrameTime;
    },
    startFrame: function () {
      this.frameStartTime = Date.now();
      this.state = EFrameComputeState.Running;
    }
  };
};