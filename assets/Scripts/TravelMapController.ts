import ViewController, { viewMode } from './framework/controller/ViewController';
import TravelMapView from './view/TravelMapView';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
@mj.class("TravelMapController")
export default class TravelMapController extends ViewController {
  viewClass = TravelMapView;
  viewMode = viewMode.SCENE;
  bundleName = "mainRes";
  init(t) {
    this.initConfig(t);
    super.init.call(this, t);
  }
  initConfig() {
    var e = TravelGameModel.getInstance().getCurJourney(),
      t = TravelGameModel.getInstance().getLevelConfig(e);
    if (t) {
      var o = __read(this.getMapPath(t.mapRes), 2),
        n = o[0],
        i = o[1];
      TravelMapView.prefabUrl = i;
      TravelMapView.bundleName = n;
      this.bundleName = n;
    }
  }
  getMapPath(e) {
    var t = e.split(":");
    return 2 === t.length ? [t[0], "prefabs/" + t[1]] : ["mainRes", "prefabs/journeyMap/" + t[0]];
  }
  getMessageListeners() {
    return {};
  }
  @mj.traitEvent("TLMapCtl_initRes")
  initDependRes() {
    this.addPreloadRes("Prefab", "mainRes:prefabs/journey/JourneyReward");
  }
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("viewDidLoad", this.args);
  }
  viewDidShow(t) {
    super.viewDidShow.call(this, t);
    this.viewDoAction("viewDidShow", this.args);
  }
}