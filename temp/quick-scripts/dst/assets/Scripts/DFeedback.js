
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DFeedback.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30990FAp4JEm4cQtV1/23Cp', 'DFeedback');
// Scripts/DFeedback.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotFeedback = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var LoginModel_1 = require("./gamePlay/login/model/LoginModel");
var DotFeedback = /** @class */ (function () {
    function DotFeedback() {
    }
    DotFeedback.dot = function (e, t) {
        var o = {
            rating: e,
            language: LoginModel_1.default.getInstance().language,
            feedback: t
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.Feedback, o);
    };
    DotFeedback.dotPopupShow = function () {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.FeedbackPopupShow, {});
    };
    DotFeedback.dotPopupClose = function () {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.FeedbackPopupClose, {});
    };
    return DotFeedback;
}());
exports.DotFeedback = DotFeedback;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RGZWVkYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUEyRDtBQUMzRCwwRUFBcUU7QUFDckUsZ0VBQTJEO0FBQzNEO0lBQUE7SUFlQSxDQUFDO0lBZFEsZUFBRyxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRztZQUNOLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUTtZQUMzQyxRQUFRLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFDRiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDTSx3QkFBWSxHQUFuQjtRQUNFLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ00seUJBQWEsR0FBcEI7UUFDRSw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4vZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5leHBvcnQgY2xhc3MgRG90RmVlZGJhY2sge1xuICBzdGF0aWMgZG90KGUsIHQpIHtcbiAgICB2YXIgbyA9IHtcbiAgICAgIHJhdGluZzogZSxcbiAgICAgIGxhbmd1YWdlOiBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkubGFuZ3VhZ2UsXG4gICAgICBmZWVkYmFjazogdFxuICAgIH07XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLkZlZWRiYWNrLCBvKTtcbiAgfVxuICBzdGF0aWMgZG90UG9wdXBTaG93KCkge1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5GZWVkYmFja1BvcHVwU2hvdywge30pO1xuICB9XG4gIHN0YXRpYyBkb3RQb3B1cENsb3NlKCkge1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5GZWVkYmFja1BvcHVwQ2xvc2UsIHt9KTtcbiAgfVxufSJdfQ==