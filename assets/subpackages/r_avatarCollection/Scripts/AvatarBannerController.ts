import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import AvatarBannerView from './AvatarBannerView';
import { getBundleName } from './Utils';
@mj.class("AvatarBannerController")
export default class AvatarBannerController extends ViewController {
  viewClass = AvatarBannerView;
  viewMode = viewMode.ALERT;
  bundleName = getBundleName();
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show", e);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}