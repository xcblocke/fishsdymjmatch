
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DDebugInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6c59Ids81Dra2LXYbh0YHV', 'DDebugInfo');
// Scripts/gamePlay/dot/DDebugInfo.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DDebugInfo = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DDebugInfo = /** @class */ (function () {
    function DDebugInfo() {
    }
    DDebugInfo.dot = function (e) {
        var t = {
            g_debugInfo: e
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.DebugInfo, t);
    };
    return DDebugInfo;
}());
exports.DDebugInfo = DDebugInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ERGVidWdJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQStEO0FBQy9ELDhFQUF5RTtBQUN6RTtJQUFBO0lBT0EsQ0FBQztJQU5RLGNBQUcsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRztZQUNOLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztRQUNGLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXInO1xuZXhwb3J0IGNsYXNzIEREZWJ1Z0luZm8ge1xuICBzdGF0aWMgZG90KGUpIHtcbiAgICB2YXIgdCA9IHtcbiAgICAgIGdfZGVidWdJbmZvOiBlXG4gICAgfTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuRGVidWdJbmZvLCB0KTtcbiAgfVxufSJdfQ==