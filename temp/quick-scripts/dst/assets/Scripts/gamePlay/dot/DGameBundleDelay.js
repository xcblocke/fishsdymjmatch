
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/dot/DGameBundleDelay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a06533S/fJK6pOjUwGxWXLi', 'DGameBundleDelay');
// Scripts/gamePlay/dot/DGameBundleDelay.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameBundleDelay = void 0;
var EventData_1 = require("../../base/event/EventData");
var EventTrackingManager_1 = require("../../base/event/EventTrackingManager");
var DotGameBundleDelay = /** @class */ (function () {
    function DotGameBundleDelay() {
    }
    DotGameBundleDelay.dot = function (e) {
        var t = {
            bundle_type: e
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.GameBundleDelay, t);
    };
    return DotGameBundleDelay;
}());
exports.DotGameBundleDelay = DotGameBundleDelay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUJ1bmRsZURlbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQStEO0FBQy9ELDhFQUF5RTtBQUN6RTtJQUFBO0lBT0EsQ0FBQztJQU5RLHNCQUFHLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUc7WUFDTixXQUFXLEVBQUUsQ0FBQztTQUNmLENBQUM7UUFDRiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDSCx5QkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRUcmFja2luZ1R5cGUgfSBmcm9tICcuLi8uLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi4vLi4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5leHBvcnQgY2xhc3MgRG90R2FtZUJ1bmRsZURlbGF5IHtcbiAgc3RhdGljIGRvdChlKSB7XG4gICAgdmFyIHQgPSB7XG4gICAgICBidW5kbGVfdHlwZTogZVxuICAgIH07XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkdhbWVCdW5kbGVEZWxheSwgdCk7XG4gIH1cbn0iXX0=