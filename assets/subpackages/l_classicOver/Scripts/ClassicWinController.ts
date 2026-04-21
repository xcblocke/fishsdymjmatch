import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ClassicWinView from './ClassicWinView';
@mj.class("ClassicWinController")
export default class ClassicWinController extends ViewController {
  viewClass = ClassicWinView;
  viewMode = viewMode.PANEL;
  bundleName = "l_classicOver";
  viewDidShow(t) {
    t = t || this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("showView", t.data);
  }
}