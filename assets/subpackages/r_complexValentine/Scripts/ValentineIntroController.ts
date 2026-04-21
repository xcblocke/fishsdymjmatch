import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ValentineIntroView from './view/ValentineIntroView';
@mj.class("ValentineIntroController")
export default class ValentineIntroController extends ViewController {
  viewClass = ValentineIntroView;
  viewMode = viewMode.ALERT;
  bundleName = "r_complexValentine";
  getMessageListeners() {
    return {};
  }
  @mj.traitEvent("VltnIntroCtl_initRes")
  initDependRes() {}
  @mj.traitEvent("VltnIntroCtl_viewDidLoad")
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("VltnIntroCtl_viewDidShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
}