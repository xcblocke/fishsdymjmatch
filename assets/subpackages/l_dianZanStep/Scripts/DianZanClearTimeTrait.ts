import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DianZanClearTimeTrait")
export default class DianZanClearTimeTrait extends Trait {
  _lastClearTimestamp = 0;
  _currSkData = null;
  _triggerDianZan = false;
  _currentLevel = 1;
  _lastTriggered = false;
  _isPlayDianZan = false;
  static traitKey = "DianZanClearTime";
  get bundleName() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStep";
  }
  get matchNum() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.matchNum) && void 0 !== e ? e : 2;
  }
  get clearTime() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.clearTime) && void 0 !== e ? e : 6;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.Effect_InitView] = this.onEffectInitViewCB.bind(this);
    return _t;
  }
  onEffectInitViewCB() {
    this._lastClearTimestamp = Date.now();
    this._currentLevel = 1;
    this._lastTriggered = false;
    this._triggerDianZan = false;
    this._isPlayDianZan = false;
  }
  onIptRestart_excute(t, e) {
    this._currentLevel = 1;
    this._lastTriggered = false;
    e();
  }
  onFailBhv_start(t, e) {
    this._currentLevel = 1;
    this._lastTriggered = false;
    e();
  }
  onWinVw_showWinVw(t, e) {
    this._currentLevel = 1;
    this._lastTriggered = false;
    e();
  }
  onDCWinVw_showWinVw(t, e) {
    this._currentLevel = 1;
    this._lastTriggered = false;
    e();
  }
  onTLWinVw_showTLWinVw(t, e) {
    this._currentLevel = 1;
    this._lastTriggered = false;
    e();
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
    return t <= this.matchNum;
  }
  checkInterval() {
    return (Date.now() - this._lastClearTimestamp) / 1000 <= this.clearTime;
  }
  onDianZanTt_checkDZ(t, e) {
    var r,
      i = null !== (r = t.ins._beforeClearMatchNum) && void 0 !== r ? r : 0,
      n = this.checkBeforeMatchNum(i),
      a = this.checkInterval(),
      o = n && a;
    this._lastClearTimestamp = Date.now();
    if (o) {
      if (this._isPlayDianZan) {
        this._currentLevel = Math.min(3, this._currentLevel + 1);
      } else {
        this._currentLevel = 1;
      }
      this._lastTriggered = true;
      this._triggerDianZan = true;
    } else {
      this._lastTriggered;
      this._currentLevel = 1;
      this._lastTriggered = false;
      this._triggerDianZan = false;
    }
    this._isPlayDianZan = false;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: o
    });
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
        this._isPlayDianZan = true;
        var r = "in_" + (this._currentLevel || 1);
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.jump,
          returnVal: r
        });
      } else e();
    } else e();
  }
  onDianZanTt_checkDZSpecial(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: true
    });
  }
}