import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import { ValentineEvents } from './model/ValentineModel';
import ValentineActivateView from './view/ValentineActivateView';
@mj.class("ValentineActivateController")
export default class ValentineActivateController extends ViewController {
  viewClass = ValentineActivateView;
  viewMode = viewMode.ALERT;
  bundleName = "r_complexValentine";
  getMessageListeners() {
    return {};
  }
  @mj.traitEvent("VltnActCtl_initRes")
  initDependRes() {}
  @mj.traitEvent("VltnActCtl_viewDidLoad")
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("VltnActCtl_viewDidShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
  close() {
    super.close.call(this);
    this.dispatchEvent(ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW);
  }
}