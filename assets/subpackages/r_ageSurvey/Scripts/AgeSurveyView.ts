import UIView from '../../../Scripts/framework/ui/UIView';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
@mj.class
export default class AgeSurveyView extends UIView {
  @mj.node("content_node/btn_close")
  closeBtn: "content_node/btn_close" = null;
  @mj.node("content_node/btns")
  btnsContainer: "content_node/btns" = null;
  @mj.node("content_node/desc")
  descNode: "content_node/desc" = null;
  @mj.node("bg_spr")
  bgSprNode: "bg_spr" = null;
  _ageBtnNodes = [];
  _autoCloseTimerId = 0;
  static bundleName = "r_ageSurvey";
  static prefabUrl = "prefabs/AgeSurveyView";
  static LAYOUT_CONFIG = {
    BTN_ROW_GAP: 14,
    COL3: {
      btnWidth: 256,
      btnHeight: 140,
      colGap: 0
    },
    COL2: {
      btnWidth: 318,
      btnHeight: 140,
      colGap: 20
    },
    ROW_CONFIG: {
      1: {
        btnsY: -68,
        bgHeight: 690
      },
      2: {
        btnsY: -42,
        bgHeight: 765
      }
    },
    BASE_BTNS_Y: -42,
    BASE_BG_HEIGHT: 765
  };
  @mj.traitEvent("AgeSurveyView_onLoad")
  onLoad() {
    super.onLoad.call(this);
    this.collectAgeButtons();
    this.registerCloseButton();
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.clearAutoCloseTimer();
  }
  collectAgeButtons() {
    if (this.btnsContainer) {
      this._ageBtnNodes = [];
      for (var t = 0; t < this.btnsContainer.childrenCount; t++) {
        var e = this.btnsContainer.children[t];
        e.name.startsWith("btn_") && this._ageBtnNodes.push(e);
      }
    }
  }
  registerCloseButton() {
    this.closeBtn && this.OnButtonClick(this.closeBtn, this.onCloseClick.bind(this));
  }
  calculateLayout(t) {
    var e,
      o,
      i = AgeSurveyView.LAYOUT_CONFIG,
      n = t % 2 == 1,
      a = n ? 3 : 2,
      s = n ? i.COL3 : i.COL2,
      c = Math.ceil(t / a),
      l = s.btnWidth + s.colGap,
      u = 2 === c ? i.BTN_ROW_GAP : s.colGap,
      p = s.btnHeight + u;
    if (c <= 2) {
      var d = i.ROW_CONFIG[c];
      e = d.btnsY;
      o = d.bgHeight;
    } else {
      e = i.BASE_BTNS_Y;
      o = i.BASE_BG_HEIGHT + (c - 2) * p;
    }
    for (var f = [], h = 0, y = 0; y < c; y++) for (var g = Math.min(a, t - h), v = -l * (g - 1) / 2, _ = 0; _ < g; _++) {
      f.push({
        x: v + _ * l,
        y: -y * p
      });
      h++;
    }
    return {
      btnWidth: s.btnWidth,
      btnHeight: s.btnHeight,
      bgHeight: o,
      btnsY: e,
      positions: f
    };
  }
  applyLayout(t, e) {
    if (this.bgSprNode) {
      var r = this.bgSprNode.getContentSize();
      this.bgSprNode.setContentSize(r.width, t.bgHeight);
    }
    this.btnsContainer && (this.btnsContainer.y = t.btnsY);
    for (var o = 0; o < this._ageBtnNodes.length; o++) {
      var i = this._ageBtnNodes[o];
      if (o < e && o < t.positions.length) {
        i.active = true;
        var n = t.positions[o];
        i.setPosition(n.x, n.y);
        i.setContentSize(t.btnWidth, t.btnHeight);
      } else i.active = false;
    }
  }
  initData(t, e = true, r?, o = 0) {
    var i = this;
    r && this.descNode && I18NStrings.setText(this.descNode, "", r);
    if (0 !== this._ageBtnNodes.length) {
      t.map(function (t) {
        return t.label;
      }).join(", ");
      var n = e ? this.shuffleArray([...t]) : [...t],
        a = (n.map(function (t) {
          return t.label;
        }).join(", "), this.calculateLayout(n.length));
      this.applyLayout(a, n.length);
      for (var c = function c(t) {
          var e = u._ageBtnNodes[t],
            r = n[t],
            o = e.getComponentInChildren(cc.Label);
          o && (o.string = r.label);
          u.OnButtonClick(e, function () {
            i.onAgeBtnClick(r.id);
          });
        }, u = this, p = 0; p < n.length && p < this._ageBtnNodes.length; p++) c(p);
      o > 0 && this.startAutoCloseTimer(o);
    }
  }
  startAutoCloseTimer(t) {
    var e = this;
    this.clearAutoCloseTimer();
    this._autoCloseTimerId = setTimeout(function () {
      e.onCloseClick();
    }, 1000 * t);
  }
  clearAutoCloseTimer() {
    if (this._autoCloseTimerId) {
      clearTimeout(this._autoCloseTimerId);
      this._autoCloseTimerId = 0;
    }
  }
  shuffleArray(t) {
    for (var e, r = t.length - 1; r > 0; r--) {
      var o = Math.floor(Math.random() * (r + 1));
      e = __read([t[o], t[r]], 2), t[r] = e[0], t[o] = e[1];
    }
    return t;
  }
  onAgeBtnClick(t) {
    this.clearAutoCloseTimer();
    this.delegate.onAgeSelected(t);
  }
  onCloseClick() {
    this.clearAutoCloseTimer();
    this.delegate.onCloseClick();
  }
}