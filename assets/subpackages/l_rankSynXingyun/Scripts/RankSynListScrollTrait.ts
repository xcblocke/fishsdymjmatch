import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("RankSynListScrollTrait")
export default class RankSynListScrollTrait extends Trait {
  isStopScroll = true;
  static traitKey = "RankSynListScroll";
  get minMemory() {
    return null == this._traitData.minMemory ? 5 : this._traitData.minMemory;
  }
  get maxMemory() {
    return null == this._traitData.maxMemory ? 11 : this._traitData.maxMemory;
  }
  get isCheckMemory() {
    return null != this._traitData.checkMemory && this._traitData.checkMemory;
  }
  onLoad() {
    super.onLoad.call(this);
    this._checkDeviceMemory();
  }
  onRankVw_listScroll(t, e) {
    if (!this.isCheckMemory || this.isStopScroll) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
  _checkDeviceMemory() {
    try {
      var t = mj.sdk.getDeviceInfo(),
        e = null == t ? void 0 : t.all_memory;
      if (e) {
        var r = Number(e) / 1024;
        if (this.minMemory <= r && r <= this.maxMemory) {
          this.isStopScroll = true;
        } else {
          this.isStopScroll = false;
        }
      }
    } catch (t) {}
  }
}