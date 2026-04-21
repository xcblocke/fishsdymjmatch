
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/event/EventTrackingManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51600sBUohJk4ikrqwDlFF4', 'EventTrackingManager');
// Scripts/base/event/EventTrackingManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../framework/utils/SingletonFactory");
var EventTrackingManager = /** @class */ (function () {
    function EventTrackingManager() {
    }
    EventTrackingManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    EventTrackingManager.prototype.trackEvent = function (e, t, o, n) {
        mj.sdk.report(e, t, o, n);
    };
    return EventTrackingManager;
}());
exports.default = EventTrackingManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvZXZlbnQvRXZlbnRUcmFja2luZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUEwRTtBQUMxRTtJQUFBO0lBT0EsQ0FBQztJQU5RLGdDQUFXLEdBQWxCO1FBQ0UsT0FBTyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELHlDQUFVLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCwyQkFBQztBQUFELENBUEEsQUFPQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25GYWN0b3J5JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50VHJhY2tpbmdNYW5hZ2VyIHtcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBTaW5nbGV0b25GYWN0b3J5LmdldEluc3RhbmNlKHRoaXMpO1xuICB9XG4gIHRyYWNrRXZlbnQoZSwgdCwgbywgbikge1xuICAgIG1qLnNkay5yZXBvcnQoZSwgdCwgbywgbik7XG4gIH1cbn0iXX0=