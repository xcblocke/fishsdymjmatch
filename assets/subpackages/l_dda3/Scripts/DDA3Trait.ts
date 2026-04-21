import { getCustomDataKey } from '../../../Scripts/types/Common';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DDA3Trait")
export default class DDA3Trait extends Trait {
  static traitKey = "DDA3";
  onLoad() {
    super.onLoad.call(this);
  }
  getStrategy() {
    return this.traitData.strategy || {
      x: 3,
      y: 60,
      z: 10
    };
  }
  onDCMgr_setDDASgy(t, e) {
    t.ins.ddaLayer.addStrategy({
      name: "DDA3",
      param: this.getStrategy()
    });
    e();
  }
  onDCMgr_recordGameEnd(t, e) {
    var r = t.args[1],
      o = t.args[0],
      n = this.getStrategy(),
      i = n.x,
      c = n.y,
      s = n.z;
    if (!r.win && r.time < c) {
      var u = getCustomDataKey("DDA4", [i, c, s]),
        p = o.getCachedData(u, 0);
      o.cacheData(u, p + 1);
    }
    e();
  }
}