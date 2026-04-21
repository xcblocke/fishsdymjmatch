"use strict";
cc._RF.push(module, 'eece0gOZ2xFCLvvoF6u5mMn', 'PathAnalyserTypes');
// Scripts/PathAnalyserTypes.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.createFrameComputer = exports.EFrameComputeState = exports.DEFAULT_FRAME_CONFIG = exports.createCancellationToken = void 0;
var createCancellationToken = function () {
    return {
        isCancellationRequested: false,
        cancel: function () {
            this.isCancellationRequested = true;
        }
    };
};
exports.createCancellationToken = createCancellationToken;
exports.DEFAULT_FRAME_CONFIG = {
    maxFrameTime: 10
};
var EFrameComputeState;
(function (EFrameComputeState) {
    EFrameComputeState[EFrameComputeState["Running"] = 0] = "Running";
    EFrameComputeState[EFrameComputeState["Paused"] = 1] = "Paused";
    EFrameComputeState[EFrameComputeState["Completed"] = 2] = "Completed";
    EFrameComputeState[EFrameComputeState["Cancelled"] = 3] = "Cancelled";
})(EFrameComputeState = exports.EFrameComputeState || (exports.EFrameComputeState = {}));
var createFrameComputer = function (e) {
    if (e === void 0) { e = exports.DEFAULT_FRAME_CONFIG; }
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
exports.createFrameComputer = createFrameComputer;

cc._RF.pop();