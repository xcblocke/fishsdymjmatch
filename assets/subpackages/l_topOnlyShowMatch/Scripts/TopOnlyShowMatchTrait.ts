import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import BaseLabel from '../../../Scripts/gamePlay/base/ui/BaseLabel';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
@mj.trait
@mj.class("TopOnlyShowMatchTrait")
export default class TopOnlyShowMatchTrait extends Trait {
  _isInitialized = false;
  _lastMatchNum = -1;
  _matchScaleTween = null;
  static traitKey = "TopOnlyShowMatch";
  static NO_CONTROL_MAP = new Map([[MjGameType.Normal, ["levelDesc", "labelLevel", "nodeScore"]], [MjGameType.DailyChallenge, ["lblDateDesc", "lblDate", "nodeScore"]]]);
  static LEVEL_NODES_MAP = new Map([[MjGameType.Normal, ["levelDesc", "labelLevel"]], [MjGameType.DailyChallenge, ["lblDateDesc", "lblDate"]]]);
  onLoad() {
    var e;
    super.onLoad.call(this);
    null === (e = this.traitData) || void 0 === e || e.gameTypes;
  }
  getBundleName() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.bundle) || "l_topOnlyShowMatch";
  }
  getMatchFontPath() {
    return "font/gameplay_num_matches";
  }
  getComboSpinePath() {
    return "spine/gameplay_comboTips";
  }
  getShowSpinePath() {
    return "spine/gameplay_comboTips";
  }
  isInitialized() {
    return this._isInitialized;
  }
  @mj.traitEvent("TOSMatch_isMatchGType")
  isMatchGameType(t) {
    var e,
      i = (null === (e = this.traitData) || void 0 === e ? void 0 : e.gameTypes) || [],
      a = MjGameType[t];
    return i.includes(a);
  }
  getNoControlList(t) {
    return TopOnlyShowMatchTrait.NO_CONTROL_MAP.get(t);
  }
  getLevelNodesList(t) {
    return TopOnlyShowMatchTrait.LEVEL_NODES_MAP.get(t);
  }
  onMGTxtShow_canChgActive(t, e) {
    var i, a;
    if (this._isInitialized) {
      var o = null === (i = t.args) || void 0 === i ? void 0 : i[0],
        n = null === (a = t.args) || void 0 === a ? void 0 : a[2];
      if (this.isMatchGameType(n)) {
        var r = this.getNoControlList(n);
        if (r && r.includes(o)) {
          e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: false
          });
        } else {
          e();
        }
      } else e();
    } else e();
  }
  onChgMtchNmsPos_applyCfg(t, e) {
    var i;
    this._isInitialized = true;
    var a = null === (i = t.args) || void 0 === i ? void 0 : i[0],
      o = null == a ? void 0 : a.topRootNode,
      n = null == a ? void 0 : a.gameType;
    if (o) {
      if (this.isMatchGameType(n)) {
        var r = this.getNoControlList(n);
        r && this.hideNodes(o, r);
        this.replaceMatchFont(o);
        e();
      } else e();
    } else e();
  }
  onGameUI_updateLevel(t, e) {
    var i;
    if (this._isInitialized) {
      var a = t.ins,
        o = null === (i = null == a ? void 0 : a.node) || void 0 === i ? void 0 : i.getChildByName("nodeTop");
      if (o) {
        var n = UserModel.getInstance().getCurrentGameType();
        if (this.isMatchGameType(n)) {
          var r = this.getLevelNodesList(n);
          r && this.hideNodes(o, r);
          e();
        } else e();
      } else e();
    } else e();
  }
  onGameUI_updateDCDate(t, e) {
    if (this._isInitialized) {
      var i = UserModel.getInstance().getCurrentGameType();
      if (this.isMatchGameType(i)) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: void 0
        });
      } else {
        e();
      }
    } else e();
  }
  hideNodes(t, e) {
    var i, a;
    try {
      for (var o = __values(e), n = o.next(); !n.done; n = o.next()) {
        var l = n.value,
          c = t.getChildByName(l);
        c && (c.active = false);
      }
    } catch (t) {
      i = {
        error: t
      };
    } finally {
      try {
        n && !n.done && (a = o.return) && a.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
  }
  replaceMatchFont(t) {
    var e,
      i,
      a,
      o = t.getChildByName("labelCanMatchNum");
    if (o) {
      BaseLabel.refreshWithNode(o, this.getMatchFontPath(), this.getBundleName());
      var n = o.getComponent(cc.Label);
      if (n) {
        n.fontSize = (null === (e = this.traitData) || void 0 === e ? void 0 : e.matchFontSize) || 68;
        n.lineHeight = (null === (i = this.traitData) || void 0 === i ? void 0 : i.matchFontSize) || 80;
      }
      var r = null === (a = this.traitData) || void 0 === a ? void 0 : a.matchLabelY;
      null != r && (o.y = r);
      var l = this.getOrCreateMatchSpineNode(t, o);
      this.getOrCreateSpineNodeByType(l, "combo");
      this.getOrCreateSpineNodeByType(l, "show");
    }
  }
  getOrCreateMatchSpineNode(t, e) {
    var i = t.getChildByName("matchSpineNode");
    if (!i) {
      (i = new cc.Node("matchSpineNode")).parent = t;
      var a = e.getSiblingIndex();
      i.setSiblingIndex(a);
      i.position = e.position;
    }
    return i;
  }
  getMatchSpineNode(t) {
    return (null == t ? void 0 : t.getChildByName("matchSpineNode")) || null;
  }
  getOrCreateSpineNode(t, e, i, a) {
    var o = NodeSkinTool.createNodeByPath(t, e);
    NodeSkinTool.applyNodeInfo(o, i);
    NodeSkinTool.applySpineInfo(o, a);
    return o;
  }
  getOrCreateSpineNodeByType(t, e) {
    var i,
      a,
      o = "combo" === e,
      n = {
        position: [0, o ? (null === (i = this.traitData) || void 0 === i ? void 0 : i.spineComboY) || 0 : (null === (a = this.traitData) || void 0 === a ? void 0 : a.spineShowY) || 0],
        active: false
      },
      r = {
        skelPath: o ? this.getComboSpinePath() : this.getShowSpinePath(),
        bundleName: this.getBundleName()
      };
    return this.getOrCreateSpineNode(t, o ? "spin_combo" : "spin_show", n, r);
  }
  playComboAnimation(t, e) {
    var i = t.parent,
      a = this.getMatchSpineNode(i);
    if (a && a.active) {
      var o = this.getOrCreateSpineNodeByType(a, "combo");
      if (o) {
        o.active = e;
        if (e) {
          var n = o.getComponent(BaseSpine);
          if (n) n.setAnimation("init", -1);else {
            var r = o.getComponent(sp.Skeleton);
            r && GameUtils.playSpine(r, "init", true);
          }
        }
      }
    }
  }
  playShowAnimation(t, e) {
    var i = t.parent,
      a = this.getMatchSpineNode(i);
    if (a && a.active) {
      var o = this.getOrCreateSpineNodeByType(a, "show");
      if (o) {
        o.active = true;
        var n = e ? "in_2" : "in_1",
          r = o.getComponent(BaseSpine);
        if (r) r.setAnimation(n, 0, function () {
          o.active = false;
        });else {
          var l = o.getComponent(sp.Skeleton);
          l && GameUtils.playSpine(l, n, false, function () {
            o.active = false;
          });
        }
      }
    }
  }
  handleMatchScaleAnimation(t) {
    var e = this;
    if (t && cc.isValid(t)) {
      this.stopMatchScaleTween();
      this._matchScaleTween = cc.tween(t).to(0.2, {
        scale: 1.3
      }, {
        easing: "backOut"
      }).to(0.2, {
        scale: 1
      }, {
        easing: "sineIn"
      }).call(function () {
        e._matchScaleTween = null;
      }).start();
    }
  }
  stopMatchScaleTween() {
    if (this._matchScaleTween) {
      this._matchScaleTween.stop();
      this._matchScaleTween = null;
    }
  }
  resetMatchScaleState(t) {
    this.stopMatchScaleTween();
    t && cc.isValid(t) && (t.scale = 1);
  }
  resetMatchAnimationState(t) {
    if (t && cc.isValid(t)) {
      var e = t.parent,
        i = this.getMatchSpineNode(e);
      if (i) {
        var a = i.getChildByName("spin_combo"),
          o = i.getChildByName("spin_show");
        a && (a.active = false);
        o && (o.active = false);
      }
      this.resetMatchScaleState(t);
    }
  }
  onUpdateMatchNumBhv_start(t, e) {
    var i, a, o, n, r, l, c;
    if (this._isInitialized) {
      var s = UserModel.getInstance().getCurrentGameType();
      if (this.isMatchGameType(s)) {
        var p = t.ins,
          u = null === (a = null === (i = null == p ? void 0 : p.context) || void 0 === i ? void 0 : i.gameView) || void 0 === a ? void 0 : a.gameUI,
          h = null === (o = null == u ? void 0 : u.node) || void 0 === o ? void 0 : o.getChildByName("nodeTop"),
          y = null == h ? void 0 : h.getChildByName("labelCanMatchNum");
        if (y) {
          var v = null === (n = t.args) || void 0 === n ? void 0 : n[0],
            f = null !== (l = null === (r = null == v ? void 0 : v.data) || void 0 === r ? void 0 : r.canMatchCardPairNum) && void 0 !== l ? l : 0;
          if (null === (c = null == v ? void 0 : v.data) || void 0 === c ? void 0 : c.isShow) {
            var m = this.getMatchSpineNode(h);
            m && !m.active && (m.active = true);
          }
          this._lastMatchNum < 0 && this.resetMatchAnimationState(y);
          this._lastMatchNum = f;
          e();
        } else e();
      } else e();
    } else e();
  }
  onScoreItem_updScore(t, e) {
    var i, a, o, n, r, l, s;
    if (this._isInitialized) {
      var p = UserModel.getInstance().getCurrentGameType();
      if (this.isMatchGameType(p)) {
        var u = null !== (a = null === (i = t.args) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : 0,
          h = null !== (n = null === (o = t.args) || void 0 === o ? void 0 : o[2]) && void 0 !== n && n,
          y = t.ins,
          v = null === (s = null === (l = null === (r = null == y ? void 0 : y.node) || void 0 === r ? void 0 : r.parent) || void 0 === l ? void 0 : l.parent) || void 0 === s ? void 0 : s.parent,
          f = null == v ? void 0 : v.getChildByName("nodeTop"),
          m = null == f ? void 0 : f.getChildByName("labelCanMatchNum");
        if (m && cc.isValid(m)) {
          this.playComboAnimation(m, h);
          u > 0 && this.playShowAnimation(m, h);
          u > 0 && this.handleMatchScaleAnimation(m);
        }
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: void 0
        });
      } else e();
    } else e();
  }
  onBeforeWinBhv_start(t, e) {
    if (this._isInitialized) {
      this.hideMatchComboState(t);
      e();
    } else e();
  }
  onBeforeDCWinBhv_start(t, e) {
    if (this._isInitialized) {
      this.hideMatchComboState(t);
      e();
    } else e();
  }
  onFullComboBhv_playAudio(t, e) {
    if (this._isInitialized) {
      this.hideMatchSpineNode(t, "FullCombo");
      e();
    } else e();
  }
  onRwdComboBhv_bonusAud(t, e) {
    if (this._isInitialized) {
      this.hideMatchSpineNode(t, "破局奖励");
      e();
    } else e();
  }
  hideMatchSpineNode(t) {
    var e,
      i,
      a,
      o = UserModel.getInstance().getCurrentGameType();
    if (this.isMatchGameType(o)) {
      var n = t.ins,
        r = null === (i = null === (e = null == n ? void 0 : n.context) || void 0 === e ? void 0 : e.gameView) || void 0 === i ? void 0 : i.gameUI,
        l = null === (a = null == r ? void 0 : r.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop");
      if (l && cc.isValid(l)) {
        var c = this.getMatchSpineNode(l);
        c && cc.isValid(c) && (c.active = false);
      }
    }
  }
  hideMatchComboState(t) {
    var e,
      i,
      a,
      o = UserModel.getInstance().getCurrentGameType();
    if (this.isMatchGameType(o)) {
      var n = t.ins,
        r = null === (i = null === (e = null == n ? void 0 : n.context) || void 0 === e ? void 0 : e.gameView) || void 0 === i ? void 0 : i.gameUI,
        l = null === (a = null == r ? void 0 : r.node) || void 0 === a ? void 0 : a.getChildByName("nodeTop"),
        c = null == l ? void 0 : l.getChildByName("labelCanMatchNum");
      if (c) {
        var s = this.getMatchSpineNode(l);
        if (s) {
          var p = s.getChildByName("spin_combo"),
            u = s.getChildByName("spin_show");
          p && (p.active = false);
          u && (u.active = false);
        }
        this.resetMatchScaleState(c);
        this._lastMatchNum = -1;
      }
    }
  }
  onScrFloatBhv_getTopPos(t, e) {
    var i, a, o;
    if (this._isInitialized) {
      var n = UserModel.getInstance().getCurrentGameType();
      if (this.isMatchGameType(n)) {
        var r = t.ins,
          l = null === (a = null === (i = null == r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameView) || void 0 === a ? void 0 : a.gameUI,
          s = null === (o = null == l ? void 0 : l.node) || void 0 === o ? void 0 : o.getChildByName("nodeTop");
        if (s) {
          var p = s.getChildByName("labelCanMatchNum");
          if (p && !p.active) {
            e({
              isBreak: true,
              returnType: TraitCallbackReturnType.return,
              returnVal: null
            });
            return;
          }
          var u = this.getMatchSpineNode(s);
          if (u && !u.active) {
            e({
              isBreak: true,
              returnType: TraitCallbackReturnType.return,
              returnVal: null
            });
            return;
          }
        }
        var h = this.getMatchesNodePosition(t.ins);
        e(h ? {
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: h
        } : {
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: null
        });
      } else e();
    } else e();
  }
  getMatchesNodePosition(t) {
    var e;
    try {
      var i = null === (e = null == t ? void 0 : t.context) || void 0 === e ? void 0 : e.gameView;
      if (!i) return null;
      var a = i.topRootNode;
      if (!a) return null;
      var o = a.getChildByName("labelCanMatchNum");
      if (!o || !cc.isValid(o)) return null;
      var n = o.convertToWorldSpaceAR(cc.v2(0, 0));
      return cc.v3(n.x, n.y, 0);
    } catch (t) {
      return null;
    }
  }
}