import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import RankModel from './RankModel';
import RankBonusView from './RankBonusView';
@mj.class("RankBonusController")
export default class RankBonusController extends ViewController {
  viewClass = RankBonusView;
  viewMode = viewMode.PANEL;
  bundleName = "mainRes";
  _model = null;
  get model() {
    return this._model;
  }
  @mj.traitEvent("RankBonusCtrl_initRes")
  initDependRes() {
    this.preloadResMap = {
      Prefab: ["prefabs/rank/RankBonusView"]
    };
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this._model = RankModel.getInstance();
  }
  @mj.traitEvent("RankBonusCtrl_viewShow")
  viewDidShow(e) {
    e = e || this.args;
    super.viewDidShow.call(this, e);
    this.viewDoAction("show");
  }
  viewDidHide() {
    super.viewDidHide.call(this);
  }
}