import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2DianZanTrait")
export default class Tile2DianZanTrait extends Trait {
  static traitKey = "Tile2DianZan";
  onLoad() {
    super.onLoad.call(this);
  }
  onT2DianZCheck_isDianZan(t, e) {
    var n,
      r = (null === (n = UserModel.getInstance().getCurrentGameData()) || void 0 === n ? void 0 : n.getLevelId()) || 0;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r > 1
    });
  }
  getSpineUrl() {
    return this.traitData.spineUrl || "spine/dianzan/gameplay_hand";
  }
  getSpineBundleName() {
    return this.traitData.spineBundle || "mainRes";
  }
  getAnimName() {
    return "" + (this.traitData.animPrefix || "in_") + (Math.floor(5 * Math.random()) + 1);
  }
  getScale() {
    return this.traitData.scale || 1;
  }
  onTile2DZanBhv_spUrl(t, e) {
    var n,
      r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getSpineUrl(r)
    });
  }
  onTile2DZanBhv_spBundle(t, e) {
    var n,
      r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getSpineBundleName(r)
    });
  }
  onTile2DZanBhv_animName(t, e) {
    var n,
      r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getAnimName(r)
    });
  }
  onTile2DZanBhv_scale(t, e) {
    var n,
      r = null === (n = t.args) || void 0 === n ? void 0 : n[0];
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.getScale(r)
    });
  }
}