import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ClassicReviveView from './ClassicReviveView';
@mj.class("ClassicReviveController")
export default class ClassicReviveController extends ViewController {
  viewClass = ClassicReviveView;
  viewMode = viewMode.PANEL;
  bundleName = "l_classicRevive";
  viewDidShow(t) {
    t = null != t ? t : this.args;
    super.viewDidShow.call(this, t);
  }
  onUIDestroy() {
    super.onUIDestroy.call(this);
  }
}