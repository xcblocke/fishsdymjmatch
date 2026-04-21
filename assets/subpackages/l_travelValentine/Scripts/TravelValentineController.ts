import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import TravelValentineView from './TravelValentineView';
@mj.class("TravelValentineController")
export default class TravelValentineController extends ViewController {
  viewClass = TravelValentineView;
  viewMode = viewMode.PANEL;
  bundleName = "l_travelValentine";
  viewDidShow(t) {
    t = null != t ? t : this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("updateData", t);
  }
}