
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DChampaignStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51c19HLY0VBGaFDHxb22Fhj', 'DChampaignStart');
// Scripts/DChampaignStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DChampaignStart = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var DChampaignStart = /** @class */ (function () {
    function DChampaignStart() {
    }
    DChampaignStart.dot = function (e) {
        var t = e;
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ChampaignStart, t);
    };
    return DChampaignStart;
}());
exports.DChampaignStart = DChampaignStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RDaGFtcGFpZ25TdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUEyRDtBQUMzRCwwRUFBcUU7QUFDckU7SUFBQTtJQUtBLENBQUM7SUFKUSxtQkFBRyxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmV4cG9ydCBjbGFzcyBEQ2hhbXBhaWduU3RhcnQge1xuICBzdGF0aWMgZG90KGUpIHtcbiAgICB2YXIgdCA9IGU7XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkNoYW1wYWlnblN0YXJ0LCB0KTtcbiAgfVxufSJdfQ==