import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import Trait from '../../../Scripts/framework/trait/Trait';
import { WatchAdGetPropType } from './WatchAdGetPropView';
var i;
(i = {})[WatchAdGetPropType.shuffle] = {
  key: "Tiles_PropPurchase_Purchase_1",
  defaultText: "Watch an ad to get {0} Shuffle"
};
i[WatchAdGetPropType.hitTips] = {
  key: "Tiles_PropPurchase_Purchase_2",
  defaultText: "Watch an ad to get {0} Hint"
};
i[WatchAdGetPropType.revert] = {
  key: "Tiles_PropPurchase_Purchase_3",
  defaultText: "Watch an ad to get {0} Undo"
};
var p = i;
@mj.trait
@mj.class("WatchAdGetPropShowNumTrait")
export default class WatchAdGetPropShowNumTrait extends Trait {
  _richTextMap = new Map();
  static traitKey = "WatchAdGetPropShowNum";
  onLoad() {
    super.onLoad.call(this);
  }
  onWatchAdVw_setContent(t, e) {
    var r;
    e();
    var o = t.ins,
      i = t.args[0],
      n = o.getDescNode();
    if (n && cc.isValid(n)) {
      var a = this._richTextMap.get(o);
      if (!a) {
        var c = n.getComponent(cc.Label),
          u = n.width,
          d = c.lineHeight,
          h = c.fontSize,
          f = c.font,
          y = c.useSystemFont;
        c && (c.enabled = false);
        a = null !== (r = n.getComponent(cc.RichText)) && void 0 !== r ? r : n.addComponent(cc.RichText);
        if (c) {
          a.fontSize = h;
          a.lineHeight = d + 12;
          a.maxWidth = u;
          a.font = f;
          a.useSystemFont = y;
          a.horizontalAlign = cc.macro.TextAlignment.CENTER;
        }
        this._richTextMap.set(o, a);
      }
      var _ = o.delegate,
        m = i === WatchAdGetPropType.shuffle ? "shuffle" : i === WatchAdGetPropType.hitTips ? "hitTips" : "revert",
        v = "<color=#36a550>" + _.getWatchAdItemNum(m) + "</color>",
        g = p[i],
        T = I18NStrings.get(g.key, g.defaultText);
      a.string = I18NStrings.stringFormat(T, v);
    }
  }
}