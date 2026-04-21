
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DGameUserInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74110Ko6OpNraJxtg/qBNdI', 'DGameUserInfo');
// Scripts/DGameUserInfo.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameUserInfo = exports.EAvatarButtonType = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var EAvatarButtonType;
(function (EAvatarButtonType) {
    EAvatarButtonType[EAvatarButtonType["GoToGet"] = 1] = "GoToGet";
    EAvatarButtonType[EAvatarButtonType["Save"] = 2] = "Save";
    EAvatarButtonType[EAvatarButtonType["WaitReturn"] = 3] = "WaitReturn";
})(EAvatarButtonType = exports.EAvatarButtonType || (exports.EAvatarButtonType = {}));
var DotGameUserInfo = /** @class */ (function () {
    function DotGameUserInfo() {
    }
    DotGameUserInfo.dotAvatarActive = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserInfoAvatarActive, e);
    };
    DotGameUserInfo.dotAvatarCollect = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserInfoAvatarCollect, e);
    };
    DotGameUserInfo.dotClickInfoPopup = function (e) {
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserInfoClickBtnClick, e);
    };
    return DotGameUserInfo;
}());
exports.DotGameUserInfo = DotGameUserInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RHYW1lVXNlckluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBMkQ7QUFDM0QsMEVBQXFFO0FBQ3JFLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtJQUMzQiwrREFBVyxDQUFBO0lBQ1gseURBQVEsQ0FBQTtJQUNSLHFFQUFjLENBQUE7QUFDaEIsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCO0FBQ0Q7SUFBQTtJQVVBLENBQUM7SUFUUSwrQkFBZSxHQUF0QixVQUF1QixDQUFDO1FBQ3RCLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBQ00sZ0NBQWdCLEdBQXZCLFVBQXdCLENBQUM7UUFDdkIsOEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLDZCQUFpQixDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDTSxpQ0FBaUIsR0FBeEIsVUFBeUIsQ0FBQztRQUN4Qiw4QkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsNkJBQWlCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50VHJhY2tpbmdUeXBlIH0gZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50RGF0YSc7XG5pbXBvcnQgRXZlbnRUcmFja2luZ01hbmFnZXIgZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50VHJhY2tpbmdNYW5hZ2VyJztcbmV4cG9ydCBlbnVtIEVBdmF0YXJCdXR0b25UeXBlIHtcbiAgR29Ub0dldCA9IDEsXG4gIFNhdmUgPSAyLFxuICBXYWl0UmV0dXJuID0gMyxcbn1cbmV4cG9ydCBjbGFzcyBEb3RHYW1lVXNlckluZm8ge1xuICBzdGF0aWMgZG90QXZhdGFyQWN0aXZlKGUpIHtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuVXNlckluZm9BdmF0YXJBY3RpdmUsIGUpO1xuICB9XG4gIHN0YXRpYyBkb3RBdmF0YXJDb2xsZWN0KGUpIHtcbiAgICBFdmVudFRyYWNraW5nTWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyYWNrRXZlbnQoRXZlbnRUcmFja2luZ1R5cGUuVXNlckluZm9BdmF0YXJDb2xsZWN0LCBlKTtcbiAgfVxuICBzdGF0aWMgZG90Q2xpY2tJbmZvUG9wdXAoZSkge1xuICAgIEV2ZW50VHJhY2tpbmdNYW5hZ2VyLmdldEluc3RhbmNlKCkudHJhY2tFdmVudChFdmVudFRyYWNraW5nVHlwZS5Vc2VySW5mb0NsaWNrQnRuQ2xpY2ssIGUpO1xuICB9XG59Il19