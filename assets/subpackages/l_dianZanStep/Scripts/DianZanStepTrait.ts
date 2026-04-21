import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DianZanStepTrait")
export default class DianZanStepTrait extends Trait {
  _currSkData = null;
  _currentMatchDelta = 0;
  _triggerDianZan = false;
  static traitKey = "DianZanStep";
  get bundleName() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStep";
  }
  get matchNum() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.matchNum) || 1;
  }
  onInitViewBhv_crtTls(t, e) {
    var r, i;
    this.loadSpine(null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr);
    e();
  }
  loadSpine(t) {
    var e,
      r = this;
    if (t && "function" == typeof t.loadRes) {
      var i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.spinePath) || "spine/gamplay_doubleLikes";
      this._currSkData = null;
      t.loadRes(i, sp.SkeletonData, this.bundleName).then(function (t) {
        var e = Array.isArray(t) ? t[0] : t;
        r._currSkData = e || null;
      }).catch(function () {
        r._currSkData = null;
      });
    }
  }
  checkBeforeMatchNum(t) {
    return t === this.matchNum;
  }
  onDianZanTt_checkDZ(t, e) {
    var r,
      i,
      n = t.ins,
      a = null !== (r = n._beforeClearMatchNum) && void 0 !== r ? r : 0,
      c = null !== (i = n._afterClearMatchNum) && void 0 !== i ? i : 0;
    if (this.checkBeforeMatchNum(a)) {
      this._currentMatchDelta = c - a;
      this._triggerDianZan = this._currentMatchDelta >= 1;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: this._triggerDianZan
      });
    } else {
      this._triggerDianZan = false;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: false
      });
    }
  }
  onDianZanItem_initComp(t, e) {
    var r;
    if (this._triggerDianZan) {
      var i = null === (r = t.ins) || void 0 === r ? void 0 : r._spineAnim,
        n = this._currSkData;
      if (n && i && i.skeletonData !== n) {
        i.clearTracks();
        i.setToSetupPose();
        i.skeletonData = n;
      }
      e();
    } else e();
  }
  onDianZanBhv_getAniName(t, e) {
    if (this._triggerDianZan) {
      if (this._currSkData) {
        var r = "in_" + this._currentMatchDelta;
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.jump,
          returnVal: r
        });
      } else e();
    } else e();
  }
}