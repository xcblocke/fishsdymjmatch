import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import { UILanguageSelector } from './UILanguageSelector';
@mj.class("UILanguageSelectorController")
export default class UILanguageSelectorController extends ViewController {
  viewClass = UILanguageSelector;
  viewMode = viewMode.ALERT;
  viewDidLoad() {
    super.viewDidLoad.call(this);
  }
  @mj.traitEvent("UILangSelCtrl_UIDestroy")
  onUIDestroy() {
    super.onUIDestroy.call(this);
  }
}