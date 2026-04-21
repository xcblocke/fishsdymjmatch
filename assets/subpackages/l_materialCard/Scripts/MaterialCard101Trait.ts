import ClassicMaterialCardBaseTrait from './ClassicMaterialCardBaseTrait';
@mj.trait
@mj.class("MaterialCard101Trait")
export default class MaterialCard101Trait extends ClassicMaterialCardBaseTrait {
  _interval = 1;
  static traitKey = "MaterialCard101";
  onLoad() {
    var e, r;
    super.onLoad.call(this);
    this._interval = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && void 0 !== r ? r : 1;
  }
  onChgBatchAnimBhv_start(t, e) {
    var a, i, o;
    try {
      if (!this.isClassicMode()) {
        e();
        return;
      }
      var l = null === (a = t.args) || void 0 === a ? void 0 : a[0],
        n = null !== (o = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.batchId) && void 0 !== o ? o : 0;
      if (0 === n) {
        e();
        return;
      }
      if (n % this._interval == 0) {
        this.switchToNextMaterialCard();
        this.getCurMaterialCard();
        var s = t.ins;
        this.refreshExistingCards(null == s ? void 0 : s.context);
      }
      e();
    } catch (t) {
      console.error("[" + MaterialCard101Trait.traitKey + "] 波次切换处理失败: " + (null == t ? void 0 : t.message));
      e();
    }
  }
}