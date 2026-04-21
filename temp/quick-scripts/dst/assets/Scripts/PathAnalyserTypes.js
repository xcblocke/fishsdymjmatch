
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PathAnalyserTypes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1BhdGhBbmFseXNlclR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBSSx1QkFBdUIsR0FBRztJQUNuQyxPQUFPO1FBQ0wsdUJBQXVCLEVBQUUsS0FBSztRQUM5QixNQUFNLEVBQUU7WUFDTixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUFMsUUFBQSx1QkFBdUIsMkJBT2hDO0FBQ1MsUUFBQSxvQkFBb0IsR0FBRztJQUNoQyxZQUFZLEVBQUUsRUFBRTtDQUNqQixDQUFDO0FBQ0YsSUFBWSxrQkFLWDtBQUxELFdBQVksa0JBQWtCO0lBQzVCLGlFQUFXLENBQUE7SUFDWCwrREFBVSxDQUFBO0lBQ1YscUVBQWEsQ0FBQTtJQUNiLHFFQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFLN0I7QUFDTSxJQUFJLG1CQUFtQixHQUFHLFVBQVUsQ0FBd0I7SUFBeEIsa0JBQUEsRUFBQSxJQUFJLDRCQUFvQjtJQUNqRSxPQUFPO1FBQ0wsS0FBSyxFQUFFLGtCQUFrQixDQUFDLE9BQU87UUFDakMsY0FBYyxFQUFFLENBQUM7UUFDakIsTUFBTSxFQUFFLENBQUM7UUFDVCxXQUFXLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssa0JBQWtCLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ25ILENBQUM7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztRQUMxQyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWJTLFFBQUEsbUJBQW1CLHVCQWE1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgY3JlYXRlQ2FuY2VsbGF0aW9uVG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGZhbHNlLFxuICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZCA9IHRydWU7XG4gICAgfVxuICB9O1xufTtcbmV4cG9ydCB2YXIgREVGQVVMVF9GUkFNRV9DT05GSUcgPSB7XG4gIG1heEZyYW1lVGltZTogMTBcbn07XG5leHBvcnQgZW51bSBFRnJhbWVDb21wdXRlU3RhdGUge1xuICBSdW5uaW5nID0gMCxcbiAgUGF1c2VkID0gMSxcbiAgQ29tcGxldGVkID0gMixcbiAgQ2FuY2VsbGVkID0gMyxcbn1cbmV4cG9ydCB2YXIgY3JlYXRlRnJhbWVDb21wdXRlciA9IGZ1bmN0aW9uIChlID0gREVGQVVMVF9GUkFNRV9DT05GSUcpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogRUZyYW1lQ29tcHV0ZVN0YXRlLlJ1bm5pbmcsXG4gICAgZnJhbWVTdGFydFRpbWU6IDAsXG4gICAgY29uZmlnOiBlLFxuICAgIHNob3VsZFlpZWxkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZSAhPT0gRUZyYW1lQ29tcHV0ZVN0YXRlLlJ1bm5pbmcgfHwgRGF0ZS5ub3coKSAtIHRoaXMuZnJhbWVTdGFydFRpbWUgPj0gdGhpcy5jb25maWcubWF4RnJhbWVUaW1lO1xuICAgIH0sXG4gICAgc3RhcnRGcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5mcmFtZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnN0YXRlID0gRUZyYW1lQ29tcHV0ZVN0YXRlLlJ1bm5pbmc7XG4gICAgfVxuICB9O1xufTsiXX0=