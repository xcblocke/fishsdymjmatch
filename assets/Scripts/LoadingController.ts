import ViewController, { viewMode } from './framework/controller/ViewController';
import LoadingView from './view/LoadingView';
import { DotGamePageShow, EPageShowType } from './dot/DGamePageShow';
import { TileNodePool } from './TileNodePool';
import CardUtil from './gamePlay/user/CardUtil';
@mj.class("LoadingController")
export default class LoadingController extends ViewController {
  viewClass = LoadingView;
  viewMode = viewMode.ALERT;
  _model = null;
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.rootView.zIndex = 10001;
  }
  initDependRes() {
    var e = CardUtil.getAtlasName();
    this.preloadResMap.SpriteAtlas = [e];
  }
  viewDidShow(t) {
    super.viewDidShow.call(this, t);
    var o = CardUtil.getAtlasName();
    this.getRes(o, cc.SpriteAtlas).addRef();
    DotGamePageShow.dot(EPageShowType.LoadingPage);
    TileNodePool.getInstance().preLoadNode();
  }
}