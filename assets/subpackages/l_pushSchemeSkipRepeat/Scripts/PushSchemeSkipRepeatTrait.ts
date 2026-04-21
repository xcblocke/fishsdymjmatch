import Trait from '../../../Scripts/framework/trait/Trait';
import PushManager from '../../../Scripts/gamePlay/base/push/PushManager';
@mj.trait
@mj.class("PushSchemeSkipRepeatTrait")
export default class PushSchemeSkipRepeatTrait extends Trait {
  static traitKey = "PushSchemeSkipRepeat";
  onLoad() {
    super.onLoad.call(this);
  }
  getPushRecordMap() {
    this.localData.pushSchemeRecord && "object" == typeof this.localData.pushSchemeRecord || (this.localData.pushSchemeRecord = {});
    Array.isArray(this.localData.pushSchemeRecord) && (this.localData.pushSchemeRecord = {});
    return this.localData.pushSchemeRecord;
  }
  getKeyNum(e) {
    return this.getPushRecordMap()[e] || null;
  }
  saveKeyNum(e, t) {
    var r = this.getPushRecordMap();
    r[e] = t;
    this.localData.pushSchemeRecord = r;
  }
  isDuplicate(e, t, r) {
    if (e !== r) return false;
    var o = this.getKeyNum(e);
    return !!o && o === t;
  }
  onPushMgr_sendPush(e, t) {
    var r,
      o,
      a = null === (r = e.args) || void 0 === r ? void 0 : r[0],
      i = null === (o = e.args) || void 0 === o ? void 0 : o[1];
    if (a && a.opewaynum) {
      var n = a.opewaynum,
        c = (null == i ? void 0 : i.keyNum) || "",
        s = PushManager.getInstance().getGamePushInfo(),
        p = null == s ? void 0 : s.opewaynum;
      if (p) {
        if (this.isDuplicate(n, c, p)) t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });else {
          this.saveKeyNum(n, c);
          t();
        }
      } else {
        this.saveKeyNum(n, c);
        t();
      }
    } else t();
  }
}