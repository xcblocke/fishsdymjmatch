import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ChangeDailyCollectTrait")
export default class ChangeDailyCollectTrait extends Trait {
  _changes = [];
  static traitKey = "ChangeDailyCollect";
  onLoad() {
    super.onLoad.call(this);
    this._changes = this._traitData.changes;
  }
  onDailyMdl_itemUrl(t, e) {
    var r,
      n = t.args[0],
      o = null === (r = (this._changes || []).find(function (t) {
        return t.itemId === n;
      })) || void 0 === r ? void 0 : r.itemUrl;
    if (o) {
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: "texture/badge/" + o
      });
    } else {
      e();
    }
  }
}