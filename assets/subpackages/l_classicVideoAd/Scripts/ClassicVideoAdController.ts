import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import ClassicVideoAdView from './ClassicVideoAdView';
@mj.class("ClassicVideoAdController")
export default class ClassicVideoAdController extends ViewController {
  viewClass = ClassicVideoAdView;
  viewMode = viewMode.PANEL;
  bundleName = "l_classicVideoAd";
  onClickWatch() {
    this.close();
    var t = mj.getClassByName("ClassicVideoAdTrait");
    t && t.getInstance() && true === t.getInstance().eventEnabled && t.getInstance().onClickWatch();
  }
  onClickRefuse() {
    this.close();
    var t = mj.getClassByName("ClassicVideoAdTrait");
    t && t.getInstance() && true === t.getInstance().eventEnabled && t.getInstance().onClickRefuse();
  }
}