
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowDevicePerf/Scripts/LowDevicePerfTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a06832po4pIAL8i4cUy5aBe', 'LowDevicePerfTrait');
// subpackages/l_lowDevicePerf/Scripts/LowDevicePerfTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var LowDevicePerfTrait = /** @class */ (function (_super) {
    __extends(LowDevicePerfTrait, _super);
    function LowDevicePerfTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowDevicePerfTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowDevicePerfTrait.prototype.onAdMgr_loadVideoAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_loadInterAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_showBanner = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkInterAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkVideoAd = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            var r = e.ins;
            r && r.playVideoAdFailed && r.playVideoAdFailed(false);
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkVideoReady = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.prototype.onAdMgr_chkInterReady = function (e, t) {
        if (LoginModel_1.default.getInstance().isLowEndDevice()) {
            t({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            t();
        }
    };
    LowDevicePerfTrait.traitKey = "LowDevicePerf";
    LowDevicePerfTrait = __decorate([
        mj.trait,
        mj.class("LowDevicePerfTrait")
    ], LowDevicePerfTrait);
    return LowDevicePerfTrait;
}(Trait_1.default));
exports.default = LowDevicePerfTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd0RldmljZVBlcmYvU2NyaXB0cy9Mb3dEZXZpY2VQZXJmVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsK0VBQTBFO0FBRzFFO0lBQWdELHNDQUFLO0lBQXJEOztJQStFQSxDQUFDO0lBN0VDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzdDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzdDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCwrQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzdDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCwrQ0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzdDLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsS0FBSztnQkFDaEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsK0NBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsQ0FBQyxDQUFDO2dCQUNBLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQzdDLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsS0FBSztnQkFDaEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksb0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUM3QyxDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQTdFTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0ErRXRDO0lBQUQseUJBQUM7Q0EvRUQsQUErRUMsQ0EvRStDLGVBQUssR0ErRXBEO2tCQS9Fb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxvd0RldmljZVBlcmZUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG93RGV2aWNlUGVyZlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd0RldmljZVBlcmZcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQWRNZ3JfbG9hZFZpZGVvQWQoZSwgdCkge1xuICAgIGlmIChMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuaXNMb3dFbmREZXZpY2UoKSkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25BZE1ncl9sb2FkSW50ZXJBZChlLCB0KSB7XG4gICAgaWYgKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0xvd0VuZERldmljZSgpKSB7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkFkTWdyX3Nob3dCYW5uZXIoZSwgdCkge1xuICAgIGlmIChMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuaXNMb3dFbmREZXZpY2UoKSkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlckFkKGUsIHQpIHtcbiAgICBpZiAoTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmlzTG93RW5kRGV2aWNlKCkpIHtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uQWRNZ3JfY2hrVmlkZW9BZChlLCB0KSB7XG4gICAgaWYgKExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0xvd0VuZERldmljZSgpKSB7XG4gICAgICB2YXIgciA9IGUuaW5zO1xuICAgICAgciAmJiByLnBsYXlWaWRlb0FkRmFpbGVkICYmIHIucGxheVZpZGVvQWRGYWlsZWQoZmFsc2UpO1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkFkTWdyX2Noa1ZpZGVvUmVhZHkoZSwgdCkge1xuICAgIGlmIChMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuaXNMb3dFbmREZXZpY2UoKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25BZE1ncl9jaGtJbnRlclJlYWR5KGUsIHQpIHtcbiAgICBpZiAoTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmlzTG93RW5kRGV2aWNlKCkpIHtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG59Il19