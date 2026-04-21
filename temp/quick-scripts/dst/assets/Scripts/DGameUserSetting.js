
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DGameUserSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe5b0sMGQZMUq55QGX6enWL', 'DGameUserSetting');
// Scripts/DGameUserSetting.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotGameUserSetting = void 0;
var EventData_1 = require("./base/event/EventData");
var EventTrackingManager_1 = require("./base/event/EventTrackingManager");
var UserModel_1 = require("./gamePlay/user/UserModel");
var DotGameUserSetting = /** @class */ (function () {
    function DotGameUserSetting() {
    }
    DotGameUserSetting.dot = function () {
        var e = UserModel_1.default.getInstance(), t = {
            vibration: e.isVibrationEnabled() ? 1 : 0,
            sound: e.isSoundEnabled() ? 1 : 0,
            music: e.isMusicEnabled() ? 1 : 0,
            highlight_free_tiles: e.isLockHighlightEnabled() ? 1 : 0
        };
        EventTrackingManager_1.default.getInstance().trackEvent(EventData_1.EventTrackingType.UserSetting, t);
    };
    return DotGameUserSetting;
}());
exports.DotGameUserSetting = DotGameUserSetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RHYW1lVXNlclNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBMkQ7QUFDM0QsMEVBQXFFO0FBQ3JFLHVEQUFrRDtBQUNsRDtJQUFBO0lBV0EsQ0FBQztJQVZRLHNCQUFHLEdBQVY7UUFDRSxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxFQUM3QixDQUFDLEdBQUc7WUFDRixTQUFTLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekQsQ0FBQztRQUNKLDhCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyw2QkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFRyYWNraW5nVHlwZSB9IGZyb20gJy4vYmFzZS9ldmVudC9FdmVudERhdGEnO1xuaW1wb3J0IEV2ZW50VHJhY2tpbmdNYW5hZ2VyIGZyb20gJy4vYmFzZS9ldmVudC9FdmVudFRyYWNraW5nTWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuZXhwb3J0IGNsYXNzIERvdEdhbWVVc2VyU2V0dGluZyB7XG4gIHN0YXRpYyBkb3QoKSB7XG4gICAgdmFyIGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHQgPSB7XG4gICAgICAgIHZpYnJhdGlvbjogZS5pc1ZpYnJhdGlvbkVuYWJsZWQoKSA/IDEgOiAwLFxuICAgICAgICBzb3VuZDogZS5pc1NvdW5kRW5hYmxlZCgpID8gMSA6IDAsXG4gICAgICAgIG11c2ljOiBlLmlzTXVzaWNFbmFibGVkKCkgPyAxIDogMCxcbiAgICAgICAgaGlnaGxpZ2h0X2ZyZWVfdGlsZXM6IGUuaXNMb2NrSGlnaGxpZ2h0RW5hYmxlZCgpID8gMSA6IDBcbiAgICAgIH07XG4gICAgRXZlbnRUcmFja2luZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmFja0V2ZW50KEV2ZW50VHJhY2tpbmdUeXBlLlVzZXJTZXR0aW5nLCB0KTtcbiAgfVxufSJdfQ==