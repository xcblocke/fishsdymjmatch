import Trait from '../../../Scripts/framework/trait/Trait';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import QuoteItem from './QuoteItem';
@mj.trait
@mj.class("LoadingQuoteTrait")
export default class LoadingQuoteTrait extends Trait {
  _quoteNode = null;
  _useTarot = false;
  _useDailyFirstMotto = false;
  _isFirstColdStartOfDay = false;
  static traitKey = "LoadingQuote";
  static QUOTE_KEYS = ["Loading_Motto_1", "Loading_Motto_2", "Loading_Motto_3", "Loading_Motto_4", "Loading_Motto_5", "Loading_Motto_6", "Loading_Motto_7", "Loading_Motto_8", "Loading_Motto_9", "Loading_Motto_10", "Loading_Motto_11", "Loading_Motto_12", "Loading_Motto_13", "Loading_Motto_14", "Loading_Motto_15", "Loading_Motto_16", "Loading_Motto_17", "Loading_Motto_18", "Loading_Motto_19", "Loading_Motto_20", "Loading_Motto_21", "Loading_Motto_22", "Loading_Motto_23", "Loading_Motto_24", "Loading_Motto_25", "Loading_Motto_26", "Loading_Motto_27", "Loading_Motto_28", "Loading_Motto_29", "Loading_Motto_30", "Loading_Motto_31", "Loading_Motto_32", "Loading_Motto_33", "Loading_Motto_34", "Loading_Motto_35", "Loading_Motto_36", "Loading_Motto_37", "Loading_Motto_38", "Loading_Motto_39", "Loading_Motto_40"];
  static FIRST_COLD_START_QUOTE_KEYS = ["Loading_Motto_38", "Loading_Motto_39", "Loading_Motto_40"];
  static TAROT_QUOTE_KEYS = ["Loading_Tarot_01", "Loading_Tarot_02", "Loading_Tarot_03", "Loading_Tarot_04", "Loading_Tarot_05", "Loading_Tarot_06", "Loading_Tarot_07", "Loading_Tarot_08", "Loading_Tarot_09", "Loading_Tarot_10", "Loading_Tarot_11", "Loading_Tarot_12", "Loading_Tarot_13", "Loading_Tarot_14", "Loading_Tarot_15", "Loading_Tarot_16", "Loading_Tarot_17", "Loading_Tarot_18", "Loading_Tarot_19", "Loading_Tarot_20", "Loading_Tarot_21", "Loading_Tarot_22", "Loading_Tarot_23", "Loading_Tarot_24", "Loading_Tarot_25", "Loading_Tarot_26", "Loading_Tarot_27", "Loading_Tarot_28", "Loading_Tarot_29", "Loading_Tarot_30", "Loading_Tarot_31", "Loading_Tarot_32", "Loading_Tarot_33", "Loading_Tarot_34", "Loading_Tarot_35", "Loading_Tarot_36", "Loading_Tarot_37", "Loading_Tarot_38", "Loading_Tarot_39", "Loading_Tarot_40", "Loading_Tarot_41", "Loading_Tarot_42", "Loading_Tarot_43", "Loading_Tarot_44", "Loading_Tarot_45", "Loading_Tarot_46", "Loading_Tarot_47", "Loading_Tarot_48", "Loading_Tarot_49", "Loading_Tarot_50", "Loading_Tarot_51", "Loading_Tarot_52"];
  onLoad() {
    var o, a, i, e;
    super.onLoad.call(this);
    this._useTarot = null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.useTarot) && void 0 !== a && a;
    this._useDailyFirstMotto = null !== (e = null === (i = this._traitData) || void 0 === i ? void 0 : i.useDailyFirstMotto) && void 0 !== e && e;
    if (this._useDailyFirstMotto) {
      var r = this.getTodayDate();
      if (this.localData.lastQuoteDate !== r) {
        this._isFirstColdStartOfDay = true;
        this.localData.lastQuoteDate = r;
        this.localData.lastQuoteDate = this.localData.lastQuoteDate;
      } else this._isFirstColdStartOfDay = false;
    }
  }
  getTodayDate() {
    var t = new Date();
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  onLoadingView_updProAni(t, o) {
    try {
      var a = t.ins;
      if (!a || !cc.isValid(a.node)) {
        o();
        return;
      }
      this.showQuote(a);
    } catch (t) {}
    o();
  }
  showQuote(t) {
    var o = this;
    if (this._quoteNode && cc.isValid(this._quoteNode)) this._quoteNode.active = true;else {
      var a = t.node;
      if (a) {
        var i = this.getRandomQuote();
        QuoteItem.createUI().then(function (t) {
          if (cc.isValid(t)) if (cc.isValid(a)) {
            var e = cc.find("logo", a);
            e.addChild(t);
            o._quoteNode = t;
            var r = e.height / 2 + 162;
            t.setPosition(0, -r);
            var n = t.getComponent(QuoteItem);
            n && n.setText(i);
          } else t.destroy();
        }).catch(function () {});
      }
    }
  }
  getRandomQuote() {
    var t,
      o = (t = this._useTarot ? LoadingQuoteTrait.TAROT_QUOTE_KEYS : this._useDailyFirstMotto && this._isFirstColdStartOfDay ? LoadingQuoteTrait.FIRST_COLD_START_QUOTE_KEYS : LoadingQuoteTrait.QUOTE_KEYS)[Math.floor(Math.random() * t.length)];
    return I18NStrings.get(o, o);
  }
}