import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
export var TrailEffType = {
  START: "start",
  END: "end"
};
@mj.class
export default class TaskTrailEffView extends BaseUI {
  @mj.component("spineTrail", sp.Skeleton)
  spineTrail: "spineTrail" = null;
  static prefabUrl = "prefabs/TaskTrailEff";
  static bundleName = "r_taskRewardProg";
  onLoad() {
    super.onLoad.call(this);
  }
  playEffect(e, t, i) {
    if (cc.isValid(this.node) && cc.isValid(this.node.parent)) {
      var n = this.node.parent.convertToNodeSpaceAR(e);
      this.node.setPosition(n);
      this.playSpineEffect(t, i);
    } else null == i || i();
  }
  playSpineEffect(e, t) {
    if (this.spineTrail && cc.isValid(this.spineTrail.node)) {
      playSpineAnim(this.spineTrail, 1, e, function () {
        null == t || t();
      });
    } else {
      null == t || t();
    }
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
}