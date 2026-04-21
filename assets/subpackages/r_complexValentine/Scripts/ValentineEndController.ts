import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ValentineEndView from './view/ValentineEndView';
@mj.class("ValentineEndController")
export default class ValentineEndController extends ViewController {
  viewClass = ValentineEndView;
  viewMode = viewMode.ALERT;
  bundleName = "r_complexValentine";
  getMessageListeners() {
    return {};
  }
  @mj.traitEvent("VltnEndCtl_initRes")
  initDependRes() {}
  @mj.traitEvent("VltnEndCtl_viewDidLoad")
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("VltnEndCtl_viewDidShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
}