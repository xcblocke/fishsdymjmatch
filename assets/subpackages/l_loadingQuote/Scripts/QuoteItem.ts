import BaseUI from '../../../Scripts/framework/ui/BaseUI';
var _ = /\n?\s*—+/;
@mj.class
export default class QuoteItem extends BaseUI {
  _label = null;
  _labelAuthor = null;
  static prefabUrl = "prefabs/QuoteItem";
  static bundleName = "l_loadingQuote";
  static AUTHOR_MARGIN_TOP = 7;
  onLoad() {
    super.onLoad.call(this);
    var o = this.node.getChildByName("label");
    cc.isValid(o) && (this._label = o.getComponent(cc.Label));
    var a = this.node.getChildByName("labelAuthor");
    cc.isValid(a) && (this._labelAuthor = a.getComponent(cc.Label));
  }
  setText(t) {
    var o = this.parseQuoteText(t),
      a = o.content,
      i = o.author;
    if (cc.isValid(this._label)) {
      this._label.string = "“ " + a + " ”";
      this._label._forceUpdateRenderData();
    }
    if (cc.isValid(this._labelAuthor)) if (i) {
      this._labelAuthor.string = "——" + i;
      this._labelAuthor.node.active = true;
      this.updateAuthorPosition();
    } else this._labelAuthor.node.active = false;
  }
  parseQuoteText(t) {
    if (!t) return {
      content: "",
      author: ""
    };
    var o = t.split(_);
    return o.length >= 2 ? {
      content: o[0].trim(),
      author: o[o.length - 1].trim()
    } : {
      content: t.trim(),
      author: ""
    };
  }
  updateAuthorPosition() {
    if (cc.isValid(this._label) && cc.isValid(this._labelAuthor)) {
      var t = this._label.node,
        o = this._labelAuthor.node,
        i = t.y - t.height;
      o.y = i - QuoteItem.AUTHOR_MARGIN_TOP;
    }
  }
}