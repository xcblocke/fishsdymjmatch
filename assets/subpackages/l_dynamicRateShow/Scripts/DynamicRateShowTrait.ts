import Trait from '../../../Scripts/framework/trait/Trait';
import NormalGameData from '../../../Scripts/core/simulator/data/NormalGameData';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("DynamicRateShowTrait")
export default class DynamicRateShowTrait extends Trait {
  _experimentType = 1;
  _rateThreshold = 86;
  _mCoefficient = 1.4388571428571428;
  static traitKey = "DynamicRateShow";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData;
    void 0 !== e.experimentType && (this._experimentType = e.experimentType);
    void 0 !== e.rateThreshold && (this._rateThreshold = e.rateThreshold);
    void 0 !== e.mCoefficient && (this._mCoefficient = e.mCoefficient);
    this.localData.lastRate || (this.localData.lastRate = 0);
    void 0 === this.localData.lastFullCombo && (this.localData.lastFullCombo = false);
    this.localData.lastLevelId || (this.localData.lastLevelId = 0);
    this.registerEvent([{
      event: "Tile2WinVw_show",
      type: 2,
      priority: -10
    }]);
  }
  calculateRate(t, e) {
    if (e <= 0) return 0;
    var r = Math.min(10, e),
      a = 600 * e + 20 * r * r - 420 * r;
    if (a <= 0) return 0;
    var o = 100 * Math.sqrt(t / a);
    3 !== this._experimentType && 4 !== this._experimentType || (o *= this._mCoefficient);
    return Math.min(o, 99.99);
  }
  isCurrentFullCombo() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal ? UserModel.getInstance().getCurrentGameData().getHasTriggeredAllClear() : NormalGameData.getInstance().getHasTriggeredFullCombo();
  }
  getAdjustedRate(t, e) {
    return e ? t : this.localData.lastFullCombo ? 0.7 * t : 0.9 * t;
  }
  @mj.traitEvent("DynRateShow_shouldShow")
  shouldShowRate(t, e) {
    if (e) return false;
    switch (this._experimentType) {
      case 1:
      case 3:
        return true;
      case 2:
      case 4:
        return t > this._rateThreshold;
      default:
        return true;
    }
  }
  calculateRateIncrease(t) {
    var e = this.localData.lastRate;
    return e <= 0 ? 0 : t / e - 1;
  }
  createRateRichText(t, e) {
    var r = t.toFixed(2) + "%";
    return e.replace("{0}", "<color=#00ff00>" + r + "</color>");
  }
  getOrCreateRichText(t) {
    var e = t._lblSubtitle;
    if (!e || !cc.isValid(e.node)) return null;
    var r = e.node,
      a = r.parent;
    if (!a) return null;
    var o = a.getChildByName("rate_richtext");
    if (o) {
      o.active = true;
      return o.getComponent(cc.RichText);
    }
    var i = e.fontSize,
      n = e.lineHeight,
      c = e.font,
      l = r.color;
    (o = new cc.Node("rate_richtext")).setParent(a);
    o.setPosition(r.position);
    o.height = r.height;
    o.color = l;
    o.anchorX = r.anchorX;
    o.anchorY = r.anchorY;
    o.opacity = r.opacity;
    o.width = 1000;
    var s = o.addComponent(cc.RichText);
    s.fontSize = i;
    s.lineHeight = n;
    s.maxWidth = 1000;
    s.horizontalAlign = cc.macro.TextAlignment.CENTER;
    c && (s.font = c);
    return s;
  }
  syncAnimation(t, e, r) {
    if (t && e) {
      e.opacity = t.opacity;
      var a = r._animSpeedRate || 1,
        o = 1.53 * a,
        i = 0.2 * a;
      cc.tween(e).delay(o).to(i, {
        opacity: 255
      }, {
        easing: "linear"
      }).start();
    }
  }
  @mj.traitEvent("DynRateShow_getRateTxt")
  getRateRichText(t, e) {
    var r = I18NStrings.get("MahjongBlast_GameEnd_Word_1", "You beat {0} of players!");
    return this.createRateRichText(e, r);
  }
  onWinVw_showWinVw(t, e) {
    this.handleShowWinView(t.ins, t.args[0]);
    e();
  }
  onTile2WinVw_show(t, e) {
    this.handleShowWinView(t.ins, t.args[0]);
    e();
  }
  handleShowWinView(t, e) {
    if (cc.isValid(t)) try {
      var r = UserModel.getInstance().getCurrentGameData(),
        a = r.getCurrentLevelId(),
        o = e.data.settlementScore || 0,
        i = r.getCurLevelComboMaxLimit() || 0,
        n = this.calculateRate(o, i),
        c = this.isCurrentFullCombo(),
        l = this.getAdjustedRate(n, c),
        u = this.shouldShowRate(l, c);
      1 === a && (u = false);
      var p = t._lblSubtitle;
      if (u) {
        var h = this.getOrCreateRichText(t);
        if (h) {
          var f = this.calculateRateIncrease(l),
            d = this.getRateRichText(this._experimentType, l, f);
          h.string = d;
          this.syncAnimation(p.node, h.node, t);
        }
        p && cc.isValid(p.node) && (p.enabled = false);
      } else if (p && cc.isValid(p.node)) {
        var y = p.node.parent;
        if (y) {
          var m = y.getChildByName("rate_richtext");
          m && (m.active = false);
        }
        p.enabled = true;
      }
      this.localData.lastRate = l;
      this.localData.lastFullCombo = c;
      this.localData.lastLevelId = a;
    } catch (t) {}
  }
}