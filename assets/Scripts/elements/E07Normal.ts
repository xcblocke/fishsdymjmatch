import ESimpleNormal from '../ESimpleNormal';
var l = cc.color(122, 56, 14, 255);
var s = cc.color(52, 67, 7, 255);
@mj.class
export default class E07Normal extends ESimpleNormal {
  static prefabUrl = "prefabs/E07Normal";
  static bundleName = "l_travel05";
  onLevelSelect() {
    super.onLevelSelect.call(this);
    this.titleLabel.node.color = l;
  }
  onLevelLock() {
    super.onLevelLock.call(this);
    this.titleLabel.node.color = s;
  }
  onLevelUnlock() {
    super.onLevelUnlock.call(this);
    this.titleLabel.node.color = s;
  }
  onLevelUnlockPass() {
    super.onLevelUnlockPass.call(this);
    this.titleLabel.node.color = s;
  }
}