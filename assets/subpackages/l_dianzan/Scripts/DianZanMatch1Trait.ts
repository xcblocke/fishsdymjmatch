import DianZanTrait from './DianZanTrait';
@mj.trait
@mj.class("DianZanMatch1Trait")
export default class DianZanMatch1Trait extends DianZanTrait {
  static traitKey = "DianZanMatch1";
  onLoad() {
    super.onLoad.call(this);
  }
  _checkDianZan() {
    return 1 == this._beforeClearMatchNum && this._afterClearMatchNum >= 1;
  }
}