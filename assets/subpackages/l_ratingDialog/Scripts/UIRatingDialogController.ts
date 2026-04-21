import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import { UIRatingDialog } from './UIRatingDialog';
@mj.class("UIRatingDialogController")
export default class UIRatingDialogController extends ViewController {
  viewClass = UIRatingDialog;
  viewMode = viewMode.ALERT;
  @mj.traitEvent("UIRatingDlgCtrl_initRes")
  initDependRes() {}
  getMessageListeners() {
    return {};
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10000;
  }
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}