import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import AdManager from '../../../Scripts/base/ad/AdManager';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("WatchAdFreeAdLimitTrait")
export default class WatchAdFreeAdLimitTrait extends Trait {
  _pendingMode = null;
  _pendingAutoClose = -1;
  static traitKey = "WatchAdFreeAdLimit";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._pendingAutoClose = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.autoCloseTime) && void 0 !== r ? r : -1;
  }
  onAdUnavailVw_autoCloseTime(t, e) {
    if (this._pendingAutoClose > 0) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this._pendingAutoClose
      });
    } else {
      e();
    }
  }
  onAdUnavailVw_ShowRetry(t, e) {
    if ("noRetry" !== this._pendingMode) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onAdUnavailVw_ShowNoNet(t, e) {
    if ("noRetry" !== this._pendingMode && "freebie" !== this._pendingMode) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onAdUnavailVw_ShowLoading(t, e) {
    if ("noRetry" !== this._pendingMode) {
      e();
    } else {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onAdUnavailVw_onLoad(t, e) {
    var r, o, i;
    if (AdManager.getInstance().checkVideoAdIsReady()) e();else {
      var n = t.ins,
        a = null === (o = null === (r = n.node) || void 0 === r ? void 0 : r.getChildByName) || void 0 === o ? void 0 : o.call(r, "content_node");
      if (a) {
        if ("noRetry" === this._pendingMode) {
          this._hideBtns(a, ["btn_retry", "btn_noNet", "btn_loading"]);
          var s = a.getChildByName("btn_cancel");
          s && cc.isValid(s) && s.setPosition(s.position.x, -221);
          var c = null === (i = n.node) || void 0 === i ? void 0 : i.getChildByName("bg_spr");
          c && cc.isValid(c) && (c.height = 820);
        } else "freebie" === this._pendingMode && this._hideBtns(a, ["btn_noNet", "btn_loading"]);
        e();
      } else e();
    }
  }
  _hideBtns(t, e) {
    var r, o;
    try {
      for (var i = __values(e), n = i.next(); !n.done; n = i.next()) {
        var s = n.value,
          c = t.getChildByName(s);
        c && cc.isValid(c) && (c.active = false);
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (o = i.return) && o.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
  }
  onWatchAdCtrl_playAd(t, e) {
    var r;
    if (AdManager.getInstance().checkVideoAdIsReady()) e();else {
      var o = null === (r = this._traitData) || void 0 === r ? void 0 : r.tag,
        i = t.ins,
        n = i.getPropType();
      if (1 !== o && 2 !== o) {
        if (3 === o) {
          this._pendingMode = "noRetry";
          i.close();
          ControllerManager.getInstance().pushViewByController("AdUnavailableController", {
            isShowAction: true
          });
        } else {
          if (4 !== o) {
            e();
            return;
          }
          this._pendingMode = "noRetry";
          i.close();
          ControllerManager.getInstance().pushViewByController("AdUnavailableController", {
            isShowAction: true
          });
        }
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        this._handleDailyLimitTag(o, n, i);
        e();
      }
    }
  }
  _handleDailyLimitTag(t, e, r) {
    var o = this._getTodayStr(),
      i = e + "_" + (2 === t ? this._getModeKey() : "all");
    if (this._getFreebieUsed(i) !== o) {
      this._setFreebieUsed(i, o);
      this._pendingMode = "freebie";
    } else this._pendingMode = "noRetry";
    r.close();
    ControllerManager.getInstance().pushViewByController("AdUnavailableController", {
      isShowAction: true
    });
  }
  _getFreebieUsed(t) {
    var e, r;
    return null !== (r = null === (e = this.localData.freebieUsed) || void 0 === e ? void 0 : e[t]) && void 0 !== r ? r : null;
  }
  _setFreebieUsed(t, e) {
    this.localData.freebieUsed || (this.localData.freebieUsed = {});
    this.localData.freebieUsed[t] = e;
    this.localData.freebieUsed = this.localData.freebieUsed;
  }
  _getTodayStr() {
    var t = new Date();
    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
  }
  _getModeKey() {
    var t = UserModel.getInstance().getCurrentGameType();
    return t ? String(t) : "unknown";
  }
}