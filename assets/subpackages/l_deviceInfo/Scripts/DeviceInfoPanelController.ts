import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import DeviceInfoPanelView from './DeviceInfoPanelView';
@mj.class("DeviceInfoPanelController")
export default class DeviceInfoPanelController extends ViewController {
  viewClass = DeviceInfoPanelView;
  viewMode = viewMode.ALERT;
  bundleName = "l_deviceInfo";
  initDependRes() {}
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  viewDidShow(t) {
    super.viewDidShow.call(this, t);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}