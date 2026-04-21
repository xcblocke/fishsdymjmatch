"use strict";
cc._RF.push(module, 'cba30lGHS9GNKqU2cz/dQgt', 'PushManager');
// Scripts/gamePlay/base/push/PushManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SingletonFactory_1 = require("../../../framework/utils/SingletonFactory");
var DotAppPush_1 = require("../../dot/DotAppPush");
var PushManager = /** @class */ (function () {
    function PushManager() {
    }
    PushManager.getInstance = function () {
        return SingletonFactory_1.SingletonFactory.getInstance(this);
    };
    PushManager.prototype.init = function () { };
    PushManager.prototype.sendGamePush = function (e) {
        if (mj.sdk.canInvoke("sendGamePush")) {
            var t = {
                opewaynum: e.opewaynum,
                taskType: e.taskType,
                sendTime: e.sendTime,
                silent: e.silent || 1
            };
            mj.sdk.sendGamePush(t);
        }
    };
    PushManager.prototype.sendGamePushRemoved = function (e) {
        if (mj.sdk.canInvoke("sendGamePushRemoved")) {
            DotAppPush_1.DotAppPush.dotPushRemove(e);
            if (e) {
                var t = this.getGamePushInfo();
                (null == t ? void 0 : t.opewaynum) === e && mj.sdk.sendGamePushRemoved();
            }
            else
                mj.sdk.sendGamePushRemoved();
        }
    };
    PushManager.prototype.getGamePushInfo = function (e) {
        if (!mj.sdk.canInvoke("getGamePushInfo"))
            return null;
        var t = mj.sdk.getGamePushInfo(e || "");
        if (!t)
            return null;
        try {
            var o = "string" == typeof t ? JSON.parse(t) : t;
            o.sendLastTimeAll && "string" == typeof o.sendLastTimeAll && (o.sendLastTimeAll = JSON.parse(o.sendLastTimeAll));
            o.pushClickTimeAll && "string" == typeof o.pushClickTimeAll && (o.pushClickTimeAll = JSON.parse(o.pushClickTimeAll));
            return o;
        }
        catch (e) {
            console.error("[PushManager] getGamePushInfo parse error: " + e.message);
            return null;
        }
    };
    PushManager.prototype.getOpenAppOpeway = function () {
        if (!mj.sdk.canInvoke("getOpenAppOpeway"))
            return null;
        var e = mj.sdk.getOpenAppOpeway();
        if (!e)
            return null;
        try {
            var t = "string" == typeof e ? JSON.parse(e) : e;
            return {
                opewaynum: (null == t ? void 0 : t.click) || ""
            };
        }
        catch (e) {
            console.error("[PushManager] getOpenAppOpeway parse error: " + e.message);
            return null;
        }
    };
    PushManager.prototype.getPushTimestamp = function (e) {
        var t = new Date(), o = new Date(t.getFullYear(), t.getMonth(), t.getDate(), e, 0, 0, 0);
        t.getTime() > o.getTime() && o.setDate(o.getDate() + 1);
        return o.getTime();
    };
    __decorate([
        mj.traitEvent("PushMgr_init")
    ], PushManager.prototype, "init", null);
    __decorate([
        mj.traitEvent("PushMgr_sendPush")
    ], PushManager.prototype, "sendGamePush", null);
    __decorate([
        mj.traitEvent("PushMgr_removePush")
    ], PushManager.prototype, "sendGamePushRemoved", null);
    __decorate([
        mj.traitEvent("PushMgr_getPushInfo")
    ], PushManager.prototype, "getGamePushInfo", null);
    __decorate([
        mj.traitEvent("PushMgr_getOpeway")
    ], PushManager.prototype, "getOpenAppOpeway", null);
    return PushManager;
}());
exports.default = PushManager;

cc._RF.pop();