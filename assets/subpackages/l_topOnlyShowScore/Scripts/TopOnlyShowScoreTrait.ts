import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import BaseLabel from '../../../Scripts/gamePlay/base/ui/BaseLabel';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("TopOnlyShowScoreTrait")
export default class TopOnlyShowScoreTrait extends Trait {
  static traitKey = "TopOnlyShowScore";
  static NO_CONTROL_MAP = new Map([[MjGameType.Normal, ["levelDesc", "labelLevel", "labelMatch", "labelCanMatchNum"]], [MjGameType.DailyChallenge, ["lblDateDesc", "lblDate", "labelMatch", "labelCanMatchNum"]]]);
  static LEVEL_NODES_MAP = new Map([[MjGameType.Normal, ["levelDesc", "labelLevel"]], [MjGameType.DailyChallenge, ["lblDateDesc", "lblDate"]]]);
  getBundleName() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.bundle) || "l_topOnlyShowScore";
  }
  getScoreFontPath() {
    return "font/gameplay_num_score";
  }
  getComboSpinePath() {
    return "spine/gameplay_comboTips";
  }
  @mj.traitEvent("TOSScore_isMatchGType")
  isMatchGameType(t) {
    var e,
      r = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [],
      o = MjGameType[t];
    return r.includes(o);
  }
  getNoControlList(t) {
    return TopOnlyShowScoreTrait.NO_CONTROL_MAP.get(t);
  }
  getLevelNodesList(t) {
    return TopOnlyShowScoreTrait.LEVEL_NODES_MAP.get(t);
  }
  onLoad() {
    var e;
    super.onLoad.call(this);
    null === (e = this.traitData) || void 0 === e || e.gameTypes;
  }
  onMGTxtShow_canChgActive(t, e) {
    var r,
      o,
      a = null === (r = t.args) || void 0 === r ? void 0 : r[0],
      i = null === (o = t.args) || void 0 === o ? void 0 : o[2];
    if (this.isMatchGameType(i)) {
      var n = this.getNoControlList(i);
      if (n && n.includes(a)) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: false
        });
      } else {
        e();
      }
    } else e();
  }
  onMainGRTop_applyTSCfg(t, e) {
    var r,
      o = null === (r = t.args) || void 0 === r ? void 0 : r[0],
      a = null == o ? void 0 : o.topRootNode,
      i = null == o ? void 0 : o.gameType;
    if (a) {
      if (this.isMatchGameType(i)) {
        var n = this.getNoControlList(i);
        n && this.hideNodes(a, n);
        this.replaceScoreFont(a);
        e();
      } else e();
    } else e();
  }
  onGameUI_updateLevel(t, e) {
    var r,
      o = t.ins,
      a = null === (r = null == o ? void 0 : o.node) || void 0 === r ? void 0 : r.getChildByName("nodeTop");
    if (a) {
      var i = UserModel.getInstance().getCurrentGameType();
      if (this.isMatchGameType(i)) {
        var n = this.getLevelNodesList(i);
        n && this.hideNodes(a, n);
        e();
      } else e();
    } else e();
  }
  hideNodes(t, e) {
    var r, o;
    try {
      for (var a = __values(e), i = a.next(); !i.done; i = a.next()) {
        var l = i.value,
          c = t.getChildByName(l);
        c && (c.active = false);
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        i && !i.done && (o = a.return) && o.call(a);
      } finally {
        if (r) throw r.error;
      }
    }
  }
  replaceScoreFont(t) {
    var e,
      r,
      o,
      a,
      i = t.getChildByName("nodeScore");
    if (i) {
      var n = i.getChildByName("scoreItem");
      if (n) {
        var l = this.getBundleName(),
          c = n.getChildByName("lbl_normal");
        if (c) {
          BaseLabel.refreshWithNode(c, this.getScoreFontPath(), l);
          var s = c.getComponent(cc.Label);
          if (s) {
            s.fontSize = (null === (e = this.traitData) || void 0 === e ? void 0 : e.scoreFontSize) || 68;
            s.lineHeight = (null === (r = this.traitData) || void 0 === r ? void 0 : r.scoreFontSize) || 80;
          }
          var y = n.getChildByName("spin_combo");
          y && (y.y = (null === (o = this.traitData) || void 0 === o ? void 0 : o.spineComboY) || 0);
        }
        var f = null === (a = this.traitData) || void 0 === a ? void 0 : a.scoreLabelY;
        null != f && (n.y = f);
        var d = n.getChildByName("spin_combo");
        d && BaseSpine.refreshWithNode(d, this.getComboSpinePath(), l);
      }
    }
  }
  onScoreItem_playComboAni(t, e) {
    var r,
      o = t.ins,
      a = null === (r = null == o ? void 0 : o.node) || void 0 === r ? void 0 : r.getChildByName("spin_combo");
    if (null == a ? void 0 : a.getComponent(BaseSpine)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: void 0
      });
    } else {
      e();
    }
  }
  onScoreItem_updScore(t, e) {
    var r,
      o,
      a = t.ins,
      i = null === (r = t.args) || void 0 === r ? void 0 : r[2],
      n = null === (o = null == a ? void 0 : a.node) || void 0 === o ? void 0 : o.getChildByName("spin_combo"),
      l = null == n ? void 0 : n.getComponent(BaseSpine);
    i && l && l.setAnimation("init", -1);
    e();
  }
  onGameUI_updateDCDate(t, e) {
    var r = UserModel.getInstance().getCurrentGameType();
    if (this.isMatchGameType(r)) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: void 0
      });
    } else {
      e();
    }
  }
}