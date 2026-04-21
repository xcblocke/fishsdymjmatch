import Trait from '../../../Scripts/framework/trait/Trait';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import RateUtils from '../../../Scripts/RateUtils';
import NodeSkinTool from '../../../Scripts/NodeSkinTool';
import { EVT_MSG_KEY_EVENT_HIDE, EVT_MSG_KEY_EVENT_SHOW } from '../../../Scripts/Config';
export enum HighlightType {
  None = 0,
  HardLevel = 1,
  Speed = 2,
  HighScore = 3,
  RateWithIncrease = 4,
  RateOnly = 5,
  FullCombo = 6,
  General = 7,
}
@mj.trait
@mj.class("GameEndHighlightTrait")
export default class GameEndHighlightTrait extends Trait {
  static traitKey = "GameEndHighlight";
  @mj.traitEvent("GameEndHighLT_getSpeedTh")
  getSpeedThreshold() {
    var t;
    return null !== (t = this._traitData.speedThreshold) && void 0 !== t ? t : 0.5;
  }
  @mj.traitEvent("GameEndHighLT_getScoreTh")
  getScoreThreshold() {
    var t;
    return null !== (t = this._traitData.scoreThreshold) && void 0 !== t ? t : 7500;
  }
  @mj.traitEvent("GameEndHighLT_getRateTh")
  getRateThreshold() {
    var t;
    return null !== (t = this._traitData.rateThreshold) && void 0 !== t ? t : 86;
  }
  @mj.traitEvent("GameEndHighLT_getExpType")
  getExperimentType() {
    var t;
    return null !== (t = this._traitData.experimentType) && void 0 !== t ? t : 1;
  }
  @mj.traitEvent("GameEndHighLT_getMCoef1")
  getMCoefficient1() {
    var t;
    return null !== (t = this._traitData.mCoefficient1) && void 0 !== t ? t : 100.72;
  }
  @mj.traitEvent("GameEndHighLT_getMCoef2")
  getMCoefficient2() {
    var t;
    return null !== (t = this._traitData.mCoefficient2) && void 0 !== t ? t : 70;
  }
  @mj.traitEvent("GameEndHighLT_getEnbAdj")
  getEnableRateAdjust() {
    var t;
    return null !== (t = this._traitData.enableRateAdjust) && void 0 !== t && t;
  }
  @mj.traitEvent("GameEndHighLT_getI18NKey")
  getHighlightI18NKey(t) {
    return "MahjongBlast_GameEnd_Type" + t + "_" + (Math.floor(11 * Math.random()) + 1).toString().padStart(2, "0");
  }
  onLoad() {
    super.onLoad.call(this);
    this.localData.lastRate || (this.localData.lastRate = 0);
    void 0 === this.localData.lastFullCombo && (this.localData.lastFullCombo = false);
    this.localData.pairTrackTime || (this.localData.pairTrackTime = 0);
    this.localData.lastUpdateTimestamp || (this.localData.lastUpdateTimestamp = 0);
    this.localData.firstPairTime || (this.localData.firstPairTime = 0);
    this.localData.lastPairTime || (this.localData.lastPairTime = 0);
    this.localData.pairCount || (this.localData.pairCount = 0);
  }
  getMessageListeners() {
    var _t = {};
    _t[EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
    _t[EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
    return _t;
  }
  onGameHide() {
    if (this.localData.lastUpdateTimestamp > 0) {
      var t = (Date.now() - this.localData.lastUpdateTimestamp) / 1000;
      t > 0 && t < 5 && (this.localData.pairTrackTime += t);
      this.localData.lastUpdateTimestamp = -2;
    }
  }
  onGameShow() {
    -2 === this.localData.lastUpdateTimestamp && (this.localData.lastUpdateTimestamp = Date.now());
  }
  onIptSetLv_newGComp(t, e) {
    if (1 !== NormalGameData.getInstance().getCurrentLevelId()) {
      if (this.localData.lastUpdateTimestamp <= 0) {
        this.localData.pairTrackTime = 0;
        this.localData.lastUpdateTimestamp = 0;
        this.localData.firstPairTime = 0;
        this.localData.lastPairTime = 0;
        this.localData.pairCount = 0;
      } else this.localData.lastUpdateTimestamp = Date.now();
      e();
    } else e();
  }
  onIptGameTime_exec(t, e) {
    if (1 !== NormalGameData.getInstance().getCurrentLevelId()) {
      var a = Date.now();
      if (-1 !== this.localData.lastUpdateTimestamp) {
        if (-2 !== this.localData.lastUpdateTimestamp) {
          if (0 !== this.localData.lastUpdateTimestamp) {
            var i = (a - this.localData.lastUpdateTimestamp) / 1000;
            this.localData.pairTrackTime;
            if (i > 0 && i < 5) {
              this.localData.pairTrackTime += i;
              this.localData.lastUpdateTimestamp = a;
            } else this.localData.lastUpdateTimestamp = a;
            e();
          } else {
            this.localData.lastUpdateTimestamp = a;
            e();
          }
        } else e();
      } else e();
    } else e();
  }
  onClearBhv_collision(t, e) {
    if (1 !== NormalGameData.getInstance().getCurrentLevelId()) {
      var a = Date.now();
      this.localData.pairTrackTime;
      if (-1 !== this.localData.lastUpdateTimestamp) {
        if (-2 !== this.localData.lastUpdateTimestamp) {
          if (0 !== this.localData.lastUpdateTimestamp) {
            var i = (a - this.localData.lastUpdateTimestamp) / 1000,
              r = this.localData.pairTrackTime + i;
            this.localData.pairTrackTime = r;
            this.localData.lastUpdateTimestamp = a;
            this.localData.pairCount++;
            this.localData.lastPairTime;
            this.localData.lastPairTime = r;
            e();
          } else {
            this.localData.lastUpdateTimestamp = a;
            this.localData.pairTrackTime = 0;
            this.localData.pairCount = 1;
            this.localData.firstPairTime = 0;
            this.localData.lastPairTime = 0;
            e();
          }
        } else {
          this.localData.lastUpdateTimestamp = a;
          this.localData.pairCount++;
          this.localData.lastPairTime = this.localData.pairTrackTime;
          e();
        }
      } else e();
    } else e();
  }
  calculatePairSpeed() {
    var t = this.localData.pairCount,
      e = this.localData.firstPairTime,
      a = this.localData.lastPairTime;
    if (t <= 1) return 0;
    var i = a - e;
    return i <= 0 ? 0 : (t - 1) / i;
  }
  isCurrentFullCombo() {
    return NormalGameData.getInstance().getHasTriggeredFullCombo();
  }
  isHardLevel(t) {
    return ExtractTool.getInstance().isHardLevel(t);
  }
  determineHighlightType(t, e, a, i, r, o) {
    if (this.isHardLevel(t)) return HighlightType.HardLevel;
    if (r > this.getSpeedThreshold()) return HighlightType.Speed;
    if (e >= this.getScoreThreshold()) return HighlightType.HighScore;
    var n = a > this.getRateThreshold();
    return n && i > 0 ? HighlightType.RateWithIncrease : n ? HighlightType.RateOnly : o ? HighlightType.FullCombo : HighlightType.General;
  }
  getHighlightText(t, e, a, i, r) {
    var n = this.getHighlightI18NKey(t, r);
    if (!n) return "";
    var _o = {};
    _o[HighlightType.HardLevel] = "Hard level completed!";
    _o[HighlightType.Speed] = "Great speed!";
    _o[HighlightType.HighScore] = "High score achieved!";
    _o[HighlightType.RateWithIncrease] = "Great improvement!";
    _o[HighlightType.RateOnly] = "Great performance!";
    _o[HighlightType.FullCombo] = "Full combo!";
    _o[HighlightType.General] = "Great job!";
    var s = _o[t] || "",
      p = I18NStrings.get(n, s);
    if (p.includes("{0}")) if (t === HighlightType.Speed) {
      var h = (3 * e).toFixed(1);
      p = p.replace("{0}", h);
    } else t !== HighlightType.RateWithIncrease && t !== HighlightType.RateOnly || (p = p.replace("{0}", a.toFixed(2) + "%"));
    p.includes("{1}") && t === HighlightType.RateWithIncrease && (p = p.replace("{1}", (100 * i).toFixed(1) + "%"));
    return p;
  }
  createRichText(t, e) {
    if (void 0 !== e) {
      var a = e.toFixed(2) + "%";
      return t.replace(a, "<color=#00ff00>" + a + "</color>");
    }
    return t;
  }
  syncAnimation(t, e, a) {
    if (t && e) {
      e.opacity = t.opacity;
      var i = a._animSpeedRate || 1,
        r = 1.53 * i,
        o = 0.2 * i;
      cc.tween(e).delay(r).to(o, {
        opacity: 255
      }, {
        easing: "linear"
      }).start();
    }
  }
  onBeforeWinBhv_start(t, e) {
    this.localData.lastUpdateTimestamp > 0 && (this.localData.lastUpdateTimestamp = -1);
    e();
  }
  onWinVw_showWinVw(t, e) {
    var a,
      i = t.ins,
      r = t.args[0];
    if (cc.isValid(i)) {
      try {
        var o = NormalGameData.getInstance(),
          l = o.getCurrentLevelId();
        if (1 === l) {
          e();
          return;
        }
        var n = r.data.settlementScore || 0,
          c = o.getCurLevelComboMaxLimit() || 0,
          p = this.isCurrentFullCombo(),
          u = this.getExperimentType(),
          m = 3 === u || 4 === u ? this.getMCoefficient1() / this.getMCoefficient2() : void 0,
          f = RateUtils.calculateRate(n, c, m),
          g = this.getEnableRateAdjust() ? RateUtils.getAdjustedRate(f, p, this.localData.lastFullCombo) : f;
        this.getEnableRateAdjust();
        var T = RateUtils.calculateRateIncrease(g, this.localData.lastRate),
          y = this.calculatePairSpeed(),
          v = this.determineHighlightType(l, n, g, T, y, p),
          D = i._lblSubtitle,
          _ = this.getHighlightText(v, y, g, T, u),
          E = g.toFixed(2) + "%",
          b = _.includes(E),
          C = null === (a = null == D ? void 0 : D.node) || void 0 === a ? void 0 : a.parent;
        if (C) {
          var R = C.getChildByName("rate_richtext");
          R && (R.active = false);
        }
        if (b) {
          var H = D.node,
            x = C.getChildByName("highlight_richtext");
          if (!x) {
            x = NodeSkinTool.createNodeByPath(C, "highlight_richtext");
            NodeSkinTool.applyNodeInfo(x, {
              position: [H.x, H.y],
              anchor: [H.anchorX, H.anchorY],
              size: [1000, 160],
              colorArr: [H.color.r, H.color.g, H.color.b],
              opacity: H.opacity
            });
          }
          x.active = true;
          var S = this.createRichText(_, g);
          NodeSkinTool.applyRichTextInfo(x, {
            fontSize: D.fontSize,
            lineHeight: D.lineHeight,
            maxWidth: 1000,
            hAlign: cc.macro.TextAlignment.CENTER,
            string: S
          });
          var G = x.getComponent(cc.RichText);
          G && D.font && (G.font = D.font);
          this.syncAnimation(H, x, i);
          D && cc.isValid(H) && (D.enabled = false);
        } else if (D && cc.isValid(D.node)) {
          if (C) {
            var j = C.getChildByName("highlight_richtext");
            j && (j.active = false);
          }
          D.node.setContentSize(1000, 160);
          D.enabled = true;
          D.string = _;
        }
        this.localData.lastRate = g;
        this.localData.lastFullCombo = p;
      } catch (t) {}
      e();
    } else e();
  }
  onFailBhv_start(t, e) {
    this.localData.lastUpdateTimestamp > 0 && (this.localData.lastUpdateTimestamp = -1);
    e();
  }
  onGameUI_onBtnSettings(t, e) {
    if (this.localData.lastUpdateTimestamp > 0) {
      var a = (Date.now() - this.localData.lastUpdateTimestamp) / 1000;
      a > 0 && a < 5 && (this.localData.pairTrackTime += a);
      this.localData.lastUpdateTimestamp = -2;
    }
    e();
  }
  onUISetDlg_close(t, e) {
    -2 === this.localData.lastUpdateTimestamp && (this.localData.lastUpdateTimestamp = Date.now());
    e();
  }
}