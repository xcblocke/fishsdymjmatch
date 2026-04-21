import ViewController, { viewMode } from './framework/controller/ViewController';
import LoginModel from './gamePlay/login/model/LoginModel';
import DailyChallengeWinView from './view/DailyChallengeWinView';
@mj.class("DailyChallengeWinController")
export default class DailyChallengeWinController extends ViewController {
  viewClass = DailyChallengeWinView;
  viewMode = viewMode.PANEL;
  _model = null;
  @mj.traitEvent("DCWinCtrl_initRes")
  initDependRes() {}
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this._model = LoginModel.getInstance();
  }
  @mj.traitEvent("DCWinCtrl_viewShow")
  viewDidShow(t) {
    t = t || this.args;
    super.viewDidShow.call(this, t);
    this.viewDoAction("showWinView", t);
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}