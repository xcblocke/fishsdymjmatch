
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/sdk/SDKManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b281fjRZG1B7bEbIP5yO2C/', 'SDKManager');
// Scripts/gamePlay/base/sdk/SDKManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../../framework/utils/SingletonFactory");
var a = function a(e) {
    for (var t, o = [], n = 1; n < arguments.length; n++)
        o[n - 1] = arguments[n];
    var r = (t = jsb.invokerManager).invokeSync.apply(t, __spreadArrays([e], o));
    if (!r.error)
        return r.result;
    var a = "invokeSync:" + e + ": " + r.error.message;
    window['_reportError'] && window['_reportError'](a);
    console.error(a);
};
var l = {};
var SDKManager = /** @class */ (function () {
    function SDKManager() {
        this._isValid = false;
        var e;
        if (cc.sys.isNative && cc.sys.isMobile && (null === (e = null === jsb || void 0 === jsb ? void 0 : jsb.invokerManager) || void 0 === e ? void 0 : e.invokeSync)) {
            var t = jsb.invokerManager.invokeSync("getDeviceInfo");
            if (!t || t.error) {
                console.error("无原生接口，走纯净兼容模式");
                return;
            }
            this._isValid = true;
            this.registerEvent();
        }
    }
    SDKManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    SDKManager.prototype.registerEvent = function () {
        jsb.eventManager.on("adShowCallBack", function (e) {
            var t = ["0", "", null, "showfail", "0", ""];
            try {
                var o = JSON.parse(e);
                t = [o.adType, o.adSceneId, o.ext && JSON.parse(o.ext), o.status, o.reach, o.ecpm];
            }
            catch (e) {
                console.error("adShowCallBack parse error:" + e.message);
            }
            l.adShowCallBack && l.adShowCallBack.apply(l, __spreadArrays(t));
        });
    };
    SDKManager.prototype.canInvoke = function (e) {
        if (this._isValid)
            return jsb.invokerManager.canInvoke(e);
    };
    SDKManager.prototype.getDeviceInfo = function () {
        if (this._isValid) {
            var e = a("getDeviceInfo");
            try {
                return JSON.parse(e);
            }
            catch (e) {
                console.error("getDeviceInfo parse error:" + e.message);
                return;
            }
        }
    };
    SDKManager.prototype.loadAd = function (e) {
        if (this._isValid)
            return a("adLoad", e);
    };
    SDKManager.prototype.getAdIsReady = function (e) {
        var t = "1" === e ? "interAd" : "rewardAd";
        if (this._isValid) {
            return "true" === a("callGetAdReady", t);
        }
        return false;
    };
    SDKManager.prototype.showAd = function (e, t, o, n) {
        if (o === void 0) { o = "0"; }
        if (n === void 0) { n = {}; }
        var i = JSON.stringify({
            adType: e,
            adSceneId: o,
            extraData: n && JSON.stringify(n)
        });
        if (this._isValid) {
            l.adShowCallBack = t;
            return a("adShow", i);
        }
        setTimeout(function () {
            t(e, o, n, "showfail", "0", "");
        }, 32);
    };
    SDKManager.prototype.report = function (e, t, o, n) {
        if (o === void 0) { o = false; }
        if (n === void 0) { n = false; }
        var i = JSON.stringify({
            eventName: e,
            eventValue: JSON.stringify(t)
        });
        if (this._isValid)
            return a(o ? "hsEventTrack" : n ? "eventTrackFlush" : "eventTrack", i);
    };
    SDKManager.prototype.userDataUpload = function (e) {
        if (this._isValid)
            return a("userSet", JSON.stringify(e));
    };
    SDKManager.prototype.eventSuperProperties = function (e) {
        if (this._isValid)
            return a("eventSuperProperties", JSON.stringify(e));
    };
    SDKManager.prototype.feedback = function () {
        if (this._isValid)
            return a("feedback");
    };
    SDKManager.prototype.shake = function (e) {
        if (this._isValid)
            return a("callSystemVibration", e);
    };
    SDKManager.prototype.shakeRepeat = function (e) {
        if (this._isValid)
            return a("callVibrateRepeat", e);
    };
    SDKManager.prototype.shakeAdvence = function (e) {
        if (this._isValid)
            return a("callNativeVibrateByType", e);
    };
    SDKManager.prototype.isSupportShakeAdvence = function () {
        return this._isValid ? a("callIsVibrationAdvanced") : "";
    };
    SDKManager.prototype.getApiLevel = function () {
        return this._isValid ? a("getOsVersionInt") : "";
    };
    SDKManager.prototype.showBanner = function () {
        if (this._isValid)
            return a("showBanner");
    };
    SDKManager.prototype.hideBanner = function () {
        if (this._isValid)
            return a("hideBanner");
    };
    SDKManager.prototype.closeSplash = function () {
        if (this._isValid)
            return a("callNativeHideLoading");
    };
    SDKManager.prototype.callOpenFeedback = function (e) {
        if (this._isValid)
            return a("callOpenFeedback", e);
    };
    SDKManager.prototype.contactUs = function () {
        if (this._isValid)
            return a("callContactUs");
    };
    SDKManager.prototype.aboutUs = function () {
        if (this._isValid)
            return a("callNativeTerms");
    };
    SDKManager.prototype.privacy = function () {
        if (this._isValid)
            return a("callNativePrivacy");
    };
    SDKManager.prototype.comment = function (e) {
        if (this._isValid)
            return a("callComment", e);
    };
    SDKManager.prototype.callGetBannerRevenueSum = function () {
        if (this._isValid)
            return a("callGetBannerRevenueSum");
    };
    SDKManager.prototype.callTrackGameEndRevenue = function (e) {
        if (this._isValid)
            return a("callTrackGameEndRevenue", JSON.stringify(e));
    };
    SDKManager.prototype.setGameSoundStatus = function (e) {
        if (this._isValid && this.canInvoke("setGameSoundStatus"))
            return a("setGameSoundStatus", JSON.stringify({
                status: e
            }));
    };
    SDKManager.prototype.setGameBGMStatus = function (e) {
        if (this._isValid && this.canInvoke("setGameBGMStatus"))
            return a("setGameBGMStatus", JSON.stringify({
                status: e
            }));
    };
    SDKManager.prototype.getIsAudioBusy = function () {
        if (this._isValid) {
            var e = a("getIsAudioBusy"), t = false;
            try {
                var o = JSON.parse(e);
                t = null == o ? void 0 : o.status;
            }
            catch (e) {
                console.error("getIsAudioBusy parse error:" + e.message);
                return false;
            }
            return t;
        }
        return false;
    };
    SDKManager.prototype.sendGamePush = function (e) {
        if (this._isValid)
            return a("sendGamePush", JSON.stringify(e));
    };
    SDKManager.prototype.sendGamePushRemoved = function () {
        if (this._isValid)
            return a("sendGamePushRemoved");
    };
    SDKManager.prototype.getGamePushInfo = function (e) {
        if (this._isValid)
            return a("getGamePushInfo", e);
    };
    SDKManager.prototype.getOpenAppOpeway = function () {
        if (this._isValid)
            return a("getOpenAppOpeway");
    };
    SDKManager.prototype.getFirstInterLoadEcpm = function () {
        if (this._isValid) {
            var e = a("callNativeGetFirstEcpm");
            return Number(e);
        }
    };
    return SDKManager;
}());
exports.default = SDKManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2Uvc2RrL1NES01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUE2RTtBQUM3RSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQU0sQ0FBQyxDQUFDLENBQUMsRUFBSyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7UUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDOUIsSUFBSSxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDbkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUNGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNYO0lBRUU7UUFEQSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWYsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxL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RyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsaUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxDQUFDLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0Qsd0NBQW1CLEdBQW5CO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELG9DQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QscUNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELDBDQUFxQixHQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNwQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBM0tBLEFBMktDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW5nbGV0b25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3V0aWxzL1NpbmdsZXRvbkZhY3RvcnknO1xudmFyIGEgPSBmdW5jdGlvbiBhKGUpIHtcbiAgZm9yICh2YXIgdCwgbyA9IFtdLCBuID0gMTsgbiA8IGFyZ3VtZW50cy5sZW5ndGg7IG4rKykgb1tuIC0gMV0gPSBhcmd1bWVudHNbbl07XG4gIHZhciByID0gKHQgPSBqc2IuaW52b2tlck1hbmFnZXIpLmludm9rZVN5bmMuYXBwbHkodCwgWy4uLltlXSwgLi4ub10pO1xuICBpZiAoIXIuZXJyb3IpIHJldHVybiByLnJlc3VsdDtcbiAgdmFyIGEgPSBcImludm9rZVN5bmM6XCIgKyBlICsgXCI6IFwiICsgci5lcnJvci5tZXNzYWdlO1xuICB3aW5kb3dbJ19yZXBvcnRFcnJvciddICYmIHdpbmRvd1snX3JlcG9ydEVycm9yJ10oYSk7XG4gIGNvbnNvbGUuZXJyb3IoYSk7XG59O1xudmFyIGwgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNES01hbmFnZXIge1xuICBfaXNWYWxpZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgZTtcbiAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5pc01vYmlsZSAmJiAobnVsbCA9PT0gKGUgPSBudWxsID09PSBqc2IgfHwgdm9pZCAwID09PSBqc2IgPyB2b2lkIDAgOiBqc2IuaW52b2tlck1hbmFnZXIpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaW52b2tlU3luYykpIHtcbiAgICAgIHZhciB0ID0ganNiLmludm9rZXJNYW5hZ2VyLmludm9rZVN5bmMoXCJnZXREZXZpY2VJbmZvXCIpO1xuICAgICAgaWYgKCF0IHx8IHQuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIuaXoOWOn+eUn+aOpeWPo++8jOi1sOe6r+WHgOWFvOWuueaooeW8j1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5faXNWYWxpZCA9IHRydWU7XG4gICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBTaW5nbGV0b25GYWN0b3J5LmdldEluc3RhbmNlKHRoaXMpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnQoKSB7XG4gICAganNiLmV2ZW50TWFuYWdlci5vbihcImFkU2hvd0NhbGxCYWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IFtcIjBcIiwgXCJcIiwgbnVsbCwgXCJzaG93ZmFpbFwiLCBcIjBcIiwgXCJcIl07XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgbyA9IEpTT04ucGFyc2UoZSk7XG4gICAgICAgIHQgPSBbby5hZFR5cGUsIG8uYWRTY2VuZUlkLCBvLmV4dCAmJiBKU09OLnBhcnNlKG8uZXh0KSwgby5zdGF0dXMsIG8ucmVhY2gsIG8uZWNwbV07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhZFNob3dDYWxsQmFjayBwYXJzZSBlcnJvcjpcIiArIGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBsLmFkU2hvd0NhbGxCYWNrICYmIGwuYWRTaG93Q2FsbEJhY2suYXBwbHkobCwgWy4uLnRdKTtcbiAgICB9KTtcbiAgfVxuICBjYW5JbnZva2UoZSkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4ganNiLmludm9rZXJNYW5hZ2VyLmNhbkludm9rZShlKTtcbiAgfVxuICBnZXREZXZpY2VJbmZvKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICB2YXIgZSA9IGEoXCJnZXREZXZpY2VJbmZvXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXREZXZpY2VJbmZvIHBhcnNlIGVycm9yOlwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2FkQWQoZSkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcImFkTG9hZFwiLCBlKTtcbiAgfVxuICBnZXRBZElzUmVhZHkoZSkge1xuICAgIHZhciB0ID0gXCIxXCIgPT09IGUgPyBcImludGVyQWRcIiA6IFwicmV3YXJkQWRcIjtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgcmV0dXJuIFwidHJ1ZVwiID09PSBhKFwiY2FsbEdldEFkUmVhZHlcIiwgdCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzaG93QWQoZSwgdCwgbyA9IFwiMFwiLCBuID0ge30pIHtcbiAgICB2YXIgaSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGFkVHlwZTogZSxcbiAgICAgIGFkU2NlbmVJZDogbyxcbiAgICAgIGV4dHJhRGF0YTogbiAmJiBKU09OLnN0cmluZ2lmeShuKVxuICAgIH0pO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICBsLmFkU2hvd0NhbGxCYWNrID0gdDtcbiAgICAgIHJldHVybiBhKFwiYWRTaG93XCIsIGkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHQoZSwgbywgbiwgXCJzaG93ZmFpbFwiLCBcIjBcIiwgXCJcIik7XG4gICAgfSwgMzIpO1xuICB9XG4gIHJlcG9ydChlLCB0LCBvID0gZmFsc2UsIG4gPSBmYWxzZSkge1xuICAgIHZhciBpID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZXZlbnROYW1lOiBlLFxuICAgICAgZXZlbnRWYWx1ZTogSlNPTi5zdHJpbmdpZnkodClcbiAgICB9KTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEobyA/IFwiaHNFdmVudFRyYWNrXCIgOiBuID8gXCJldmVudFRyYWNrRmx1c2hcIiA6IFwiZXZlbnRUcmFja1wiLCBpKTtcbiAgfVxuICB1c2VyRGF0YVVwbG9hZChlKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwidXNlclNldFwiLCBKU09OLnN0cmluZ2lmeShlKSk7XG4gIH1cbiAgZXZlbnRTdXBlclByb3BlcnRpZXMoZSkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcImV2ZW50U3VwZXJQcm9wZXJ0aWVzXCIsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgfVxuICBmZWVkYmFjaygpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJmZWVkYmFja1wiKTtcbiAgfVxuICBzaGFrZShlKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwiY2FsbFN5c3RlbVZpYnJhdGlvblwiLCBlKTtcbiAgfVxuICBzaGFrZVJlcGVhdChlKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwiY2FsbFZpYnJhdGVSZXBlYXRcIiwgZSk7XG4gIH1cbiAgc2hha2VBZHZlbmNlKGUpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJjYWxsTmF0aXZlVmlicmF0ZUJ5VHlwZVwiLCBlKTtcbiAgfVxuICBpc1N1cHBvcnRTaGFrZUFkdmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQgPyBhKFwiY2FsbElzVmlicmF0aW9uQWR2YW5jZWRcIikgOiBcIlwiO1xuICB9XG4gIGdldEFwaUxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkID8gYShcImdldE9zVmVyc2lvbkludFwiKSA6IFwiXCI7XG4gIH1cbiAgc2hvd0Jhbm5lcigpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJzaG93QmFubmVyXCIpO1xuICB9XG4gIGhpZGVCYW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwiaGlkZUJhbm5lclwiKTtcbiAgfVxuICBjbG9zZVNwbGFzaCgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJjYWxsTmF0aXZlSGlkZUxvYWRpbmdcIik7XG4gIH1cbiAgY2FsbE9wZW5GZWVkYmFjayhlKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwiY2FsbE9wZW5GZWVkYmFja1wiLCBlKTtcbiAgfVxuICBjb250YWN0VXMoKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwiY2FsbENvbnRhY3RVc1wiKTtcbiAgfVxuICBhYm91dFVzKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcImNhbGxOYXRpdmVUZXJtc1wiKTtcbiAgfVxuICBwcml2YWN5KCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcImNhbGxOYXRpdmVQcml2YWN5XCIpO1xuICB9XG4gIGNvbW1lbnQoZSkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcImNhbGxDb21tZW50XCIsIGUpO1xuICB9XG4gIGNhbGxHZXRCYW5uZXJSZXZlbnVlU3VtKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcImNhbGxHZXRCYW5uZXJSZXZlbnVlU3VtXCIpO1xuICB9XG4gIGNhbGxUcmFja0dhbWVFbmRSZXZlbnVlKGUpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJjYWxsVHJhY2tHYW1lRW5kUmV2ZW51ZVwiLCBKU09OLnN0cmluZ2lmeShlKSk7XG4gIH1cbiAgc2V0R2FtZVNvdW5kU3RhdHVzKGUpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCAmJiB0aGlzLmNhbkludm9rZShcInNldEdhbWVTb3VuZFN0YXR1c1wiKSkgcmV0dXJuIGEoXCJzZXRHYW1lU291bmRTdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgc3RhdHVzOiBlXG4gICAgfSkpO1xuICB9XG4gIHNldEdhbWVCR01TdGF0dXMoZSkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkICYmIHRoaXMuY2FuSW52b2tlKFwic2V0R2FtZUJHTVN0YXR1c1wiKSkgcmV0dXJuIGEoXCJzZXRHYW1lQkdNU3RhdHVzXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHN0YXR1czogZVxuICAgIH0pKTtcbiAgfVxuICBnZXRJc0F1ZGlvQnVzeSgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgdmFyIGUgPSBhKFwiZ2V0SXNBdWRpb0J1c3lcIiksXG4gICAgICAgIHQgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBvID0gSlNPTi5wYXJzZShlKTtcbiAgICAgICAgdCA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8uc3RhdHVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0SXNBdWRpb0J1c3kgcGFyc2UgZXJyb3I6XCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHNlbmRHYW1lUHVzaChlKSB7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHJldHVybiBhKFwic2VuZEdhbWVQdXNoXCIsIEpTT04uc3RyaW5naWZ5KGUpKTtcbiAgfVxuICBzZW5kR2FtZVB1c2hSZW1vdmVkKCkge1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSByZXR1cm4gYShcInNlbmRHYW1lUHVzaFJlbW92ZWRcIik7XG4gIH1cbiAgZ2V0R2FtZVB1c2hJbmZvKGUpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJnZXRHYW1lUHVzaEluZm9cIiwgZSk7XG4gIH1cbiAgZ2V0T3BlbkFwcE9wZXdheSgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkgcmV0dXJuIGEoXCJnZXRPcGVuQXBwT3Bld2F5XCIpO1xuICB9XG4gIGdldEZpcnN0SW50ZXJMb2FkRWNwbSgpIHtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgdmFyIGUgPSBhKFwiY2FsbE5hdGl2ZUdldEZpcnN0RWNwbVwiKTtcbiAgICAgIHJldHVybiBOdW1iZXIoZSk7XG4gICAgfVxuICB9XG59Il19