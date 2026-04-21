import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("MirrorLockTrait")
export default class MirrorLockTrait extends Trait {
  static traitKey = "MirrorLock";
  onLoad() {
    super.onLoad.call(this);
  }
  onClickSwLkBhv_playLockAni(t, r) {
    var e = t.args[0];
    if (e && cc.isValid(e)) {
      var o = e.getChildByName("lock");
      if (o && cc.isValid(o)) {
        o.scaleX = -1;
        r();
      } else r();
    } else r();
  }
}