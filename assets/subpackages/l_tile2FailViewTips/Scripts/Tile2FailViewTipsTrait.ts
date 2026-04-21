import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import Trait from '../../../Scripts/framework/trait/Trait';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("Tile2FailViewTipsTrait")
export default class Tile2FailViewTipsTrait extends Trait {
  static traitKey = "Tile2FailViewTips";
  static BTN_DOWN_DELTA = 80;
  static BG1_HEIGHT = 1052;
  static COM_BG_POP2_HEIGHT = 500;
  static COM_BG_POP2_Y = -305;
  static BTN_HEIGHT = 200;
  static COLOR_MAIN = "#954d10";
  static COLOR_NUM = "#da342e";
  static FONT_SIZE_1LINE = 46;
  static FONT_SIZE_2LINE = 40;
  static LINE_HEIGHT_EXTRA = 20;
  static I18N_KEY = "TileXiPai_Tips_01";
  onLoad() {
    super.onLoad.call(this);
  }
  onGsListener_onNewGame(t, e) {
    if (t.args[0] === MjGameType.Tile2Normal) {
      this.localData.tipsValue = void 0;
      e();
    } else e();
  }
  onTile2FailVw_show(t, e) {
    var o,
      r,
      n = t.ins;
    if (n && cc.isValid(n.node)) {
      var l = null === (o = t.args) || void 0 === o ? void 0 : o[0];
      if ("row4" === (null == l ? void 0 : l.tilePreviewLayout)) {
        var s = n.node.getChildByName("content_node");
        if (s) {
          var c = s.getChildByName("btn_use"),
            _ = s.getChildByName("btn_replay");
          if (c && _) {
            var p = Tile2FailViewTipsTrait.BTN_DOWN_DELTA,
              u = c.getPosition(),
              f = _.getPosition();
            c.setPosition(u.x, u.y - p);
            _.setPosition(f.x, f.y - p);
            var d = n.node.getChildByName("bg1");
            if (d) {
              var T = 0;
              c.active && T++;
              _.active && T++;
              d.height = Tile2FailViewTipsTrait.BG1_HEIGHT - Tile2FailViewTipsTrait.BTN_HEIGHT * (2 - T);
              var h = d.getChildByName("com_bg_pop_2");
              if (h) {
                h.height = Tile2FailViewTipsTrait.COM_BG_POP2_HEIGHT;
                h.setPosition(h.position.x, Tile2FailViewTipsTrait.COM_BG_POP2_Y);
              }
            }
            var N = this._getOrGenTipsValue().toFixed(1).replace(/\.0$/, ""),
              v = I18NStrings.get(Tile2FailViewTipsTrait.I18N_KEY, "{0}"),
              y = "<color=" + Tile2FailViewTipsTrait.COLOR_NUM + ">" + N + "%</color>",
              E = I18NStrings.stringFormat(v, y),
              m = "<color=" + Tile2FailViewTipsTrait.COLOR_MAIN + ">" + E + "</color>",
              O = new cc.Node("node_tips_fail");
            O.setPosition(0, -20);
            var g = Tile2FailViewTipsTrait.FONT_SIZE_1LINE,
              I = O.addComponent(cc.RichText);
            I.maxWidth = 700;
            I.fontSize = g;
            I.lineHeight = g + Tile2FailViewTipsTrait.LINE_HEIGHT_EXTRA;
            I.horizontalAlign = cc.macro.TextAlignment.CENTER;
            I.string = m;
            var w = s.getChildByName("title"),
              L = null == w ? void 0 : w.getComponent(cc.Label),
              G = null !== (r = null == L ? void 0 : L.font) && void 0 !== r ? r : null;
            G && (I.font = G);
            s.addChild(O);
            var H = m.replace(/<[^>]*>/g, ""),
              C = this._measureFontSize(s, H, G);
            I.fontSize = C;
            I.lineHeight = C + Tile2FailViewTipsTrait.LINE_HEIGHT_EXTRA;
            e();
          } else e();
        } else e();
      } else e();
    } else e();
  }
  _measureFontSize(t, e, o) {
    var r = Tile2FailViewTipsTrait.FONT_SIZE_1LINE,
      n = Tile2FailViewTipsTrait.FONT_SIZE_2LINE,
      a = new cc.Node("_tips_measure");
    a.opacity = 0;
    t.addChild(a);
    var l = a.addComponent(cc.Label);
    l.overflow = cc.Label.Overflow.NONE;
    l.fontSize = r;
    l.lineHeight = r + Tile2FailViewTipsTrait.LINE_HEIGHT_EXTRA;
    l.string = e;
    if (o) {
      l.font = o;
      l.useSystemFont = false;
    }
    l._forceUpdateRenderData();
    var s = a.width;
    a.destroy();
    return s <= 700 ? r : n;
  }
  isLocalEmpty(t) {
    return null == t || "" === t;
  }
  _getOrGenTipsValue() {
    if (!this.isLocalEmpty(this.localData.tipsValue)) return this.localData.tipsValue;
    this.localData.tipsValue = Math.round(380 * Math.random() + 10) / 10;
    return this.localData.tipsValue;
  }
}