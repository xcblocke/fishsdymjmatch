import { SingletonFactory } from '../../../framework/utils/SingletonFactory';
import { DotAppPush } from '../../dot/DotAppPush';
export default class PushManager {
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  @mj.traitEvent("PushMgr_init")
  init() {}
  @mj.traitEvent("PushMgr_sendPush")
  sendGamePush(e) {
    if (mj.sdk.canInvoke("sendGamePush")) {
      var t = {
        opewaynum: e.opewaynum,
        taskType: e.taskType,
        sendTime: e.sendTime,
        silent: e.silent || 1
      };
      mj.sdk.sendGamePush(t);
    }
  }
  @mj.traitEvent("PushMgr_removePush")
  sendGamePushRemoved(e) {
    if (mj.sdk.canInvoke("sendGamePushRemoved")) {
      DotAppPush.dotPushRemove(e);
      if (e) {
        var t = this.getGamePushInfo();
        (null == t ? void 0 : t.opewaynum) === e && mj.sdk.sendGamePushRemoved();
      } else mj.sdk.sendGamePushRemoved();
    }
  }
  @mj.traitEvent("PushMgr_getPushInfo")
  getGamePushInfo(e) {
    if (!mj.sdk.canInvoke("getGamePushInfo")) return null;
    var t = mj.sdk.getGamePushInfo(e || "");
    if (!t) return null;
    try {
      var o = "string" == typeof t ? JSON.parse(t) : t;
      o.sendLastTimeAll && "string" == typeof o.sendLastTimeAll && (o.sendLastTimeAll = JSON.parse(o.sendLastTimeAll));
      o.pushClickTimeAll && "string" == typeof o.pushClickTimeAll && (o.pushClickTimeAll = JSON.parse(o.pushClickTimeAll));
      return o;
    } catch (e) {
      console.error("[PushManager] getGamePushInfo parse error: " + e.message);
      return null;
    }
  }
  @mj.traitEvent("PushMgr_getOpeway")
  getOpenAppOpeway() {
    if (!mj.sdk.canInvoke("getOpenAppOpeway")) return null;
    var e = mj.sdk.getOpenAppOpeway();
    if (!e) return null;
    try {
      var t = "string" == typeof e ? JSON.parse(e) : e;
      return {
        opewaynum: (null == t ? void 0 : t.click) || ""
      };
    } catch (e) {
      console.error("[PushManager] getOpenAppOpeway parse error: " + e.message);
      return null;
    }
  }
  getPushTimestamp(e) {
    var t = new Date(),
      o = new Date(t.getFullYear(), t.getMonth(), t.getDate(), e, 0, 0, 0);
    t.getTime() > o.getTime() && o.setDate(o.getDate() + 1);
    return o.getTime();
  }
}