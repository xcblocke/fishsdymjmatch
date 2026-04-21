
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DChampaignEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1f04ISRtFJtrlel+5bV2n9', 'DChampaignEnd');
// Scripts/DChampaignEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DChampaignEnd = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var DChampaignEnd = /** @class */ (function () {
    function DChampaignEnd() {
    }
    DChampaignEnd.dot = function (e) {
        var t = e;
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ChampaignEnd, t);
    };
    return DChampaignEnd;
}());
exports.DChampaignEnd = DChampaignEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RDaGFtcGFpZ25FbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBMkQ7QUFDM0QsMEVBQXFFO0FBQ3JFO0lBQUE7SUFLQSxDQUFDO0lBSlEsaUJBQUcsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDViw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDSCxvQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5leHBvcnQgY2xhc3MgRENoYW1wYWlnbkVuZCB7XG4gIHN0YXRpYyBkb3QoZSkge1xuICAgIHZhciB0ID0gZTtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuQ2hhbXBhaWduRW5kLCB0KTtcbiAgfVxufSJdfQ==