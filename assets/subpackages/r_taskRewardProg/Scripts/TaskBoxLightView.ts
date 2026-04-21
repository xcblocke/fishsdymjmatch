import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class
export default class TaskBoxLightView extends BaseUI {
  @mj.component("spine_box", sp.Skeleton)
  spineBox: "spine_box" = null;
  isShown = false;
  static prefabUrl = "prefabs/TaskBoxLight";
  static bundleName = "r_taskRewardProg";
  onLoad() {
    super.onLoad.call(this);
  }
  playAnimation(e, t, i) {
    if (this.isShown) null == i || i();else {
      this.isShown = true;
      var n = this.findBoxNode(e, t);
      n && this.alignToTarget(n);
      this.playBoxSpineAnimation(t, function () {
        null == i || i();
      });
    }
  }
  findBoxNode(e, t) {
    if (!cc.isValid(e) || !cc.isValid(e.node)) return null;
    var i = "content/box/btn_box_close" + t,
      n = cc.find(i, e.node);
    return cc.isValid(n) ? n : null;
  }
  alignToTarget(e) {
    if (cc.isValid(this.node) && cc.isValid(e) && cc.isValid(this.node.parent) && this.spineBox && cc.isValid(this.spineBox.node)) {
      var t = e.convertToWorldSpaceAR(cc.v2(0, 0)),
        i = this.node.parent.convertToNodeSpaceAR(t);
      this.spineBox.node.setPosition(cc.v3(i.x, i.y, 0));
    }
  }
  playBoxSpineAnimation(e, t) {
    if (this.spineBox && cc.isValid(this.spineBox.node)) {
      var i = "in" + e;
      playSpineAnim(this.spineBox, 1, i, function () {
        null == t || t();
      });
    } else null == t || t();
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.isShown = false;
  }
}