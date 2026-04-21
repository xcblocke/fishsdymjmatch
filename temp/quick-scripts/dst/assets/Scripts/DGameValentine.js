
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DGameValentine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53cf547eRlIe4pt3NdYffxx', 'DGameValentine');
// Scripts/DGameValentine.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameValentine = exports.EValentineClickTarget = exports.EValentineEffectSwitch = exports.EValentineStage = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var EValentineStage;
(function (EValentineStage) {
    EValentineStage[EValentineStage["Stage1"] = 1] = "Stage1";
    EValentineStage[EValentineStage["Stage2"] = 2] = "Stage2";
    EValentineStage[EValentineStage["Stage3"] = 3] = "Stage3";
})(EValentineStage = exports.EValentineStage || (exports.EValentineStage = {}));
exports.EValentineEffectSwitch = {
    Off: "off",
    On: "on"
};
exports.EValentineClickTarget = {
    Close: "close",
    Button: "button",
    Switch: "switch"
};
var DotGameValentine = /** @class */ (function () {
    function DotGameValentine() {
    }
    DotGameValentine.dotValentineClickIcon = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineClickIcon, e);
    };
    DotGameValentine.dotValentineClickPopup = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineClickPopup, e);
    };
    DotGameValentine.dotValentineViewIcon = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineViewIcon, e);
    };
    DotGameValentine.dotValentineViewPopup = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.ValentineViewPopup, e);
    };
    return DotGameValentine;
}());
exports.DotGameValentine = DotGameValentine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RHYW1lVmFsZW50aW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTJEO0FBQzNELDBFQUFxRTtBQUNyRSxJQUFZLGVBSVg7QUFKRCxXQUFZLGVBQWU7SUFDekIseURBQVUsQ0FBQTtJQUNWLHlEQUFVLENBQUE7SUFDVix5REFBVSxDQUFBO0FBQ1osQ0FBQyxFQUpXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBSTFCO0FBQ1UsUUFBQSxzQkFBc0IsR0FBRztJQUNsQyxHQUFHLEVBQUUsS0FBSztJQUNWLEVBQUUsRUFBRSxJQUFJO0NBQ1QsQ0FBQztBQUNTLFFBQUEscUJBQXFCLEdBQUc7SUFDakMsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBQ0Y7SUFBQTtJQWFBLENBQUM7SUFaUSxzQ0FBcUIsR0FBNUIsVUFBNkIsQ0FBQztRQUM1Qiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNNLHVDQUFzQixHQUE3QixVQUE4QixDQUFDO1FBQzdCLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ00scUNBQW9CLEdBQTNCLFVBQTRCLENBQUM7UUFDM0IsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDTSxzQ0FBcUIsR0FBNUIsVUFBNkIsQ0FBQztRQUM1Qiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5leHBvcnQgZW51bSBFVmFsZW50aW5lU3RhZ2Uge1xuICBTdGFnZTEgPSAxLFxuICBTdGFnZTIgPSAyLFxuICBTdGFnZTMgPSAzLFxufVxuZXhwb3J0IHZhciBFVmFsZW50aW5lRWZmZWN0U3dpdGNoID0ge1xuICBPZmY6IFwib2ZmXCIsXG4gIE9uOiBcIm9uXCJcbn07XG5leHBvcnQgdmFyIEVWYWxlbnRpbmVDbGlja1RhcmdldCA9IHtcbiAgQ2xvc2U6IFwiY2xvc2VcIixcbiAgQnV0dG9uOiBcImJ1dHRvblwiLFxuICBTd2l0Y2g6IFwic3dpdGNoXCJcbn07XG5leHBvcnQgY2xhc3MgRG90R2FtZVZhbGVudGluZSB7XG4gIHN0YXRpYyBkb3RWYWxlbnRpbmVDbGlja0ljb24oZSkge1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5WYWxlbnRpbmVDbGlja0ljb24sIGUpO1xuICB9XG4gIHN0YXRpYyBkb3RWYWxlbnRpbmVDbGlja1BvcHVwKGUpIHtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuVmFsZW50aW5lQ2xpY2tQb3B1cCwgZSk7XG4gIH1cbiAgc3RhdGljIGRvdFZhbGVudGluZVZpZXdJY29uKGUpIHtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuVmFsZW50aW5lVmlld0ljb24sIGUpO1xuICB9XG4gIHN0YXRpYyBkb3RWYWxlbnRpbmVWaWV3UG9wdXAoZSkge1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5WYWxlbnRpbmVWaWV3UG9wdXAsIGUpO1xuICB9XG59Il19