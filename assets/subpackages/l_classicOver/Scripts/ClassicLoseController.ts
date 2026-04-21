import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ClassicLoseView from './ClassicLoseView';
@mj.class("ClassicLoseController")
export default class ClassicLoseController extends ViewController {
  viewClass = ClassicLoseView;
  viewMode = viewMode.PANEL;
  bundleName = "l_classicOver";
  viewDidShow(t) {
    t = null != t ? t : this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("showView", t.data);
  }
}