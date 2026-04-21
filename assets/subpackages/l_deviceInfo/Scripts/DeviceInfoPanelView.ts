import UIView from '../../../Scripts/framework/ui/UIView';
import QRCodeUtils from '../../../Scripts/QRCodeUtils';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import DeviceInfoTrait from './DeviceInfoTrait';
@mj.class
export default class DeviceInfoPanelView extends UIView {
  _contentNode = null;
  _closeBtn = null;
  _sdkVersionLabel = null;
  _appVersionLabel = null;
  _deviceIdLabel = null;
  _userIdLabel = null;
  _planInfoLabel = null;
  _planInfoNode = null;
  _copyTipNode = null;
  static prefabUrl = "prefabs/UIDeviceInfoPanel";
  static bundleName = "l_deviceInfo";
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.initEvents();
  }
  start() {
    super.start.call(this);
    this.updateDeviceInfo();
  }
  initUI() {
    this._contentNode = this.node.getChildByName("Container");
    if (cc.isValid(this._contentNode)) {
      this._closeBtn = this._contentNode.getChildByName("cancelBtn");
      var e = this._contentNode.getChildByName("list");
      if (cc.isValid(e)) {
        this._sdkVersionLabel = this.findLabel(e, "sdk");
        this._appVersionLabel = this.findLabel(e, "app");
        this._deviceIdLabel = this.findLabel(e, "device_id");
        this._userIdLabel = this.findLabel(e, "distance_id");
        this._planInfoNode = e.getChildByName("plans");
        cc.isValid(this._planInfoNode) && (this._planInfoLabel = this._planInfoNode.getComponentInChildren(cc.Label));
      }
      this._copyTipNode = this._contentNode.getChildByName("copy_tip");
      cc.isValid(this._copyTipNode) && (this._copyTipNode.active = false);
    }
  }
  findLabel(e, t) {
    var i = e.getChildByName(t);
    return cc.isValid(i) ? i.getComponentInChildren(cc.Label) : null;
  }
  initEvents() {
    cc.isValid(this._closeBtn) && this.OnButtonClick(this._closeBtn, this.onCloseClick.bind(this));
  }
  updateDeviceInfo() {
    var e = LoginModel.getInstance(),
      t = e.deviceInfo,
      i = "SDK:" + ((null == t ? void 0 : t.app_version) || "N/A"),
      o = "APP:" + (e.baseVersion || (null === G_Cfg || void 0 === G_Cfg ? void 0 : G_Cfg.baseVersion) || "N/A"),
      n = "DeviceID:" + ((null == t ? void 0 : t.deviceid) || "N/A"),
      r = "DistanceID:" + ((null == t ? void 0 : t.distinct_id) || "N/A");
    cc.isValid(this._sdkVersionLabel) && (this._sdkVersionLabel.string = i);
    cc.isValid(this._appVersionLabel) && (this._appVersionLabel.string = o);
    cc.isValid(this._deviceIdLabel) && (this._deviceIdLabel.string = n);
    cc.isValid(this._userIdLabel) && (this._userIdLabel.string = r);
    if (cc.isValid(this._planInfoNode)) {
      var l = this.getPlanNumbers();
      if (DeviceInfoTrait.getInstance().isShowPlanInfo()) {
        var f = i + "\n" + o + "\n" + n + "\n" + r + "\n首次（新增）命中方案：" + this.getFirstNumbers() + "\n当前方案：" + l;
        QRCodeUtils.createQRCodeNode(f, 450).parent = this._planInfoNode;
      } else this._planInfoLabel.string = "Plans:" + l;
    }
  }
  getFirstNumbers() {
    var e = LoginModel.getInstance().getFirstCachedWayNum();
    return e && e.length ? e.filter(Boolean).join(",") : "无";
  }
  getPlanNumbers() {
    var e = LoginModel.getInstance().curWayNum();
    return e && e.length ? e.filter(Boolean).join(",") : "无";
  }
  onCloseClick() {
    this.delegate.close();
  }
}