import Model from '../../../Scripts/framework/data/Model';
@mj.class("SettingRedDotModel")
export default class SettingRedDotModel extends Model {
  _modelName = "SettingRedDot";
  constructor() {
    super();
    this.localData.redDotTypes || (this.localData.redDotTypes = []);
  }
  addRedDot(t) {
    var e = this.localData.redDotTypes;
    -1 === e.indexOf(t) && e.push(t);
    this.localData.redDotTypes = e;
  }
  removeRedDot(t) {
    var e = this.localData.redDotTypes,
      o = e.indexOf(t);
    if (-1 !== o) {
      e.splice(o, 1);
      this.localData.redDotTypes = e;
    }
  }
  getRedDotCount(t) {
    var e;
    return -1 !== (null === (e = this.localData) || void 0 === e ? void 0 : e.redDotTypes.indexOf(t)) ? 1 : 0;
  }
  getTotalRedDotCount() {
    var t;
    return (null === (t = this.localData) || void 0 === t ? void 0 : t.redDotTypes.length) || 0;
  }
  hasRedDot() {
    return this.getTotalRedDotCount() > 0;
  }
  clearAllRedDots() {
    this.localData.redDotTypes = [];
  }
}