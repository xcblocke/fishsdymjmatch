import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("WinLayoutOptTrait")
export default class WinLayoutOptTrait extends Trait {
  static traitKey = "WinLayoutOpt";
  get barLayoutBottom() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.barLayoutBottom) || 18;
  }
  get levelBoxSpinePath() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.levelBoxSpinePath) || "spine/levelBox/result_rewardsCollection";
  }
  get normalSpinePath() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.normalSpinePath) || "spine/normal/result_rewardsCollection";
  }
  get bundleName() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.bundle) || "l_winLayoutOpt";
  }
  get subtitleY() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.subtitleY) || -77;
  }
  get descAnimationDelay() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.descAnimDelay) || 0.9;
  }
  get boxAnimDelay() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.boxAnimDelay) || 0.01;
  }
  get btnNextDelay() {
    var t;
    return (null === (t = this._traitData) || void 0 === t ? void 0 : t.btnNextDelay) || 1.53;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onWinVw_getDescAniDly(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.descAnimationDelay
    });
  }
  onWinVw_popNextView(t, e) {
    t.ins.scheduleOnce(function () {
      e();
    }, this.boxAnimDelay);
  }
  onWinVw_getBtnNextDly(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.btnNextDelay
    });
  }
  isLevelBoxTraitEnabled() {
    var t = mj.getClassByName("LevelBoxTrait");
    return t && true === t.getInstance().eventEnabled;
  }
  onMainGameCtrl_initRes(t, e) {
    var o = t.ins;
    if (o && "function" == typeof o.addPreloadRes) {
      var i = this.isLevelBoxTraitEnabled() ? this.levelBoxSpinePath : this.normalSpinePath,
        n = this.bundleName + ":" + i;
      o.addPreloadRes("SkeletonData", [n]);
    }
    e();
  }
  onLvBoxVw_initComps(t, e) {
    var o = t.ins;
    this.replaceRewardBoxSpine(o, this.levelBoxSpinePath);
    e();
  }
  onBoxOpenUI_initComponents(t, e) {
    var o = t.ins;
    this.replaceRewardBoxSpine(o, this.normalSpinePath);
    e();
  }
  replaceRewardBoxSpine(t, e) {
    var o = null == t ? void 0 : t.getAnimSkeleton;
    if (o && cc.isValid(o.node)) {
      var i = BaseSpine.refreshWithNode(o.node, e, this.bundleName);
      null == i || i.setOnReadyCallback(function () {
        cc.isValid(t) && "function" == typeof t.hookRewardNodes && t.hookRewardNodes();
      });
    }
  }
  onWinVw_mvSubTitToBtnBtm(t, e) {
    var o = t.ins;
    this.setSubtitlePosition(o);
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onDCWinVw_mvSubTitToBtnBtm(t, e) {
    var o = t.ins;
    this.setSubtitlePosition(o);
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true
    });
  }
  onWinVw_showWinVw(t, e) {
    var o = this,
      i = t.ins;
    i.scheduleOnce(function () {
      cc.isValid(i) && o.setSubtitlePosition(i);
    }, 0);
    e();
  }
  onDCWinVw_showWinVw(t, e) {
    var o = this,
      i = t.ins;
    i.scheduleOnce(function () {
      cc.isValid(i) && o.setSubtitlePosition(i);
    }, 0);
    e();
  }
  setSubtitlePosition(t) {
    var e;
    if (cc.isValid(t)) {
      var o = null === (e = t.getContentNode) || void 0 === e ? void 0 : e.call(t);
      if (cc.isValid(o)) {
        var i = o.getChildByName("lbl_subtitle");
        cc.isValid(i) && (i.y = this.subtitleY);
      }
    }
  }
  onLvBoxProg_barBoxEnter(t, e) {
    var o = t.ins;
    this.adjustBarLayoutPosition(o, true);
    e();
  }
  onBoxRwdUI_barBoxEnter(t, e) {
    var o = t.ins;
    this.adjustBarLayoutPosition(o, true);
    e();
  }
  onLvBoxProg_showNextBox(t, e) {
    var o = t.ins;
    this.adjustBarLayoutPosition(o, true);
    e();
  }
  adjustBarLayoutPosition(t, e = false) {
    var o, i;
    if (cc.isValid(null == t ? void 0 : t.node)) {
      var n = t.node.getChildByName("BarLayout"),
        r = t.node.getChildByName("BoxBtn");
      if (n) {
        NodeSkinTool.applyWidgetInfo(n, {
          isAlignBottom: true,
          bottom: this.barLayoutBottom,
          isAlignTop: false,
          isAlignVerticalCenter: false
        });
        var a = n.getComponent(cc.Widget);
        a && a.updateAlignment();
      }
      var l = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.boxBtnOffset) && void 0 !== i ? i : 24;
      r && n && (e && t.scheduleOnce ? t.scheduleOnce(function () {
        cc.isValid(r) && cc.isValid(n) && (r.y = n.y + l);
      }, 0) : r.y = n.y + l);
    }
  }
}