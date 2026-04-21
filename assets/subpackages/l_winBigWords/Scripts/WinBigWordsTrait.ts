import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("WinBigWordsTrait")
export default class WinBigWordsTrait extends Trait {
  static traitKey = "WinBigWords";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "Tile2WinVw_show"
    }]);
  }
  onWinVw_showWinVw(t, r) {
    this._applyBigWordsToWinView(t.ins);
    r();
  }
  onTile2WinVw_show(t, r) {
    this._applyBigWordsToWinView(t.ins);
    r();
  }
  _applyBigWordsToWinView(t) {
    var r;
    if (t && cc.isValid(t.node)) {
      var i = null === (r = this._traitData) || void 0 === r ? void 0 : r.fontSize;
      if (i) for (var o in i) {
        var e = i[o];
        if (e) {
          var n = t[o];
          n && cc.isValid(n.node) && (n.fontSize = e);
        }
      }
      var a = null == i ? void 0 : i._lblTitle;
      if (a) {
        var c = t._lblTitle2;
        c && cc.isValid(c.node) && (c.fontSize = a);
      }
      var f = t._contentNode;
      if (f) {
        var s = cc.find("BoxProgress/BarLayout/Condition", f);
        if (s) {
          var p = s.getComponent(cc.Label);
          p && (p.fontSize = 50);
        }
      }
    }
  }
}