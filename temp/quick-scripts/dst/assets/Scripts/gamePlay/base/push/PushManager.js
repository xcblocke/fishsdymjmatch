
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/push/PushManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvcHVzaC9QdXNoTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQTZFO0FBQzdFLG1EQUFrRDtBQUNsRDtJQUFBO0lBZ0VBLENBQUM7SUEvRFEsdUJBQVcsR0FBbEI7UUFDRSxPQUFPLG1DQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMEJBQUksR0FBSixjQUFRLENBQUM7SUFFVCxrQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUc7Z0JBQ04sU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTO2dCQUN0QixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQzthQUN0QixDQUFDO1lBQ0YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQseUNBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQzNDLHVCQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLG1C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REMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7MkNBQ3JCO0lBRVQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO21EQVdqQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzswREFTbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7c0RBY3BDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3VEQWNsQztJQU9ILGtCQUFDO0NBaEVELEFBZ0VDLElBQUE7a0JBaEVvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91dGlscy9TaW5nbGV0b25GYWN0b3J5JztcbmltcG9ydCB7IERvdEFwcFB1c2ggfSBmcm9tICcuLi8uLi9kb3QvRG90QXBwUHVzaCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdXNoTWFuYWdlciB7XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gU2luZ2xldG9uRmFjdG9yeS5nZXRJbnN0YW5jZSh0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlB1c2hNZ3JfaW5pdFwiKVxuICBpbml0KCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJQdXNoTWdyX3NlbmRQdXNoXCIpXG4gIHNlbmRHYW1lUHVzaChlKSB7XG4gICAgaWYgKG1qLnNkay5jYW5JbnZva2UoXCJzZW5kR2FtZVB1c2hcIikpIHtcbiAgICAgIHZhciB0ID0ge1xuICAgICAgICBvcGV3YXludW06IGUub3Bld2F5bnVtLFxuICAgICAgICB0YXNrVHlwZTogZS50YXNrVHlwZSxcbiAgICAgICAgc2VuZFRpbWU6IGUuc2VuZFRpbWUsXG4gICAgICAgIHNpbGVudDogZS5zaWxlbnQgfHwgMVxuICAgICAgfTtcbiAgICAgIG1qLnNkay5zZW5kR2FtZVB1c2godCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUHVzaE1ncl9yZW1vdmVQdXNoXCIpXG4gIHNlbmRHYW1lUHVzaFJlbW92ZWQoZSkge1xuICAgIGlmIChtai5zZGsuY2FuSW52b2tlKFwic2VuZEdhbWVQdXNoUmVtb3ZlZFwiKSkge1xuICAgICAgRG90QXBwUHVzaC5kb3RQdXNoUmVtb3ZlKGUpO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldEdhbWVQdXNoSW5mbygpO1xuICAgICAgICAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5vcGV3YXludW0pID09PSBlICYmIG1qLnNkay5zZW5kR2FtZVB1c2hSZW1vdmVkKCk7XG4gICAgICB9IGVsc2UgbWouc2RrLnNlbmRHYW1lUHVzaFJlbW92ZWQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJQdXNoTWdyX2dldFB1c2hJbmZvXCIpXG4gIGdldEdhbWVQdXNoSW5mbyhlKSB7XG4gICAgaWYgKCFtai5zZGsuY2FuSW52b2tlKFwiZ2V0R2FtZVB1c2hJbmZvXCIpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdCA9IG1qLnNkay5nZXRHYW1lUHVzaEluZm8oZSB8fCBcIlwiKTtcbiAgICBpZiAoIXQpIHJldHVybiBudWxsO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgPyBKU09OLnBhcnNlKHQpIDogdDtcbiAgICAgIG8uc2VuZExhc3RUaW1lQWxsICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIG8uc2VuZExhc3RUaW1lQWxsICYmIChvLnNlbmRMYXN0VGltZUFsbCA9IEpTT04ucGFyc2Uoby5zZW5kTGFzdFRpbWVBbGwpKTtcbiAgICAgIG8ucHVzaENsaWNrVGltZUFsbCAmJiBcInN0cmluZ1wiID09IHR5cGVvZiBvLnB1c2hDbGlja1RpbWVBbGwgJiYgKG8ucHVzaENsaWNrVGltZUFsbCA9IEpTT04ucGFyc2Uoby5wdXNoQ2xpY2tUaW1lQWxsKSk7XG4gICAgICByZXR1cm4gbztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1B1c2hNYW5hZ2VyXSBnZXRHYW1lUHVzaEluZm8gcGFyc2UgZXJyb3I6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlB1c2hNZ3JfZ2V0T3Bld2F5XCIpXG4gIGdldE9wZW5BcHBPcGV3YXkoKSB7XG4gICAgaWYgKCFtai5zZGsuY2FuSW52b2tlKFwiZ2V0T3BlbkFwcE9wZXdheVwiKSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGUgPSBtai5zZGsuZ2V0T3BlbkFwcE9wZXdheSgpO1xuICAgIGlmICghZSkgcmV0dXJuIG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ID0gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IEpTT04ucGFyc2UoZSkgOiBlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3Bld2F5bnVtOiAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5jbGljaykgfHwgXCJcIlxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1B1c2hNYW5hZ2VyXSBnZXRPcGVuQXBwT3Bld2F5IHBhcnNlIGVycm9yOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgZ2V0UHVzaFRpbWVzdGFtcChlKSB7XG4gICAgdmFyIHQgPSBuZXcgRGF0ZSgpLFxuICAgICAgbyA9IG5ldyBEYXRlKHQuZ2V0RnVsbFllYXIoKSwgdC5nZXRNb250aCgpLCB0LmdldERhdGUoKSwgZSwgMCwgMCwgMCk7XG4gICAgdC5nZXRUaW1lKCkgPiBvLmdldFRpbWUoKSAmJiBvLnNldERhdGUoby5nZXREYXRlKCkgKyAxKTtcbiAgICByZXR1cm4gby5nZXRUaW1lKCk7XG4gIH1cbn0iXX0=