import Model from '../../../framework/data/Model';
@mj.class("LowPriorityModel")
export default class LowPriorityModel extends Model {
  saveToLocal(e) {
    if (e) {
      this.localData.lowPriorityBundle || (this.localData.lowPriorityBundle = {});
      this.localData.lowPriorityBundle[e] = 1;
      this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
    }
  }
  isHasDownloaded(e) {
    return !!e && !!this.localData.lowPriorityBundle && 1 === this.localData.lowPriorityBundle[e];
  }
  removeFromLocal(e) {
    if (e && this.localData.lowPriorityBundle) {
      delete this.localData.lowPriorityBundle[e];
      this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
    }
  }
  clearAllDownloadedFlags() {
    if (this.localData.lowPriorityBundle) {
      this.localData.lowPriorityBundle = {};
      this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
    }
  }
}