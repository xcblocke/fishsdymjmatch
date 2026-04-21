import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import HallView from './HallView';
import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { DotGameBtnClick, EBgmOccupationClickType } from '../../../Scripts/dot/DGameBtnClick';
@mj.class("HallController")
export default class HallController extends ViewController {
  viewClass = HallView;
  viewMode = viewMode.SCENE;
  bundleName = "mainRes";
  init(e) {
    this.initViewResource();
    super.init.call(this, e);
  }
  @mj.traitEvent("HallCtl_initVwRes")
  initViewResource() {
    this.viewClass.prefabUrl = "prefabs/hall/Hall";
  }
  getMessageListeners() {
    return {};
  }
  @mj.traitEvent("HallCtl_initRes")
  initDependRes() {}
  @mj.traitEvent("HallCtl_viewDidLoad")
  viewDidLoad() {
    super.viewDidLoad.call(this);
    this.viewDoAction("createButtons", this.args);
    mj.audioManager.playBGM(EAudioID.Bgm, true);
    mj.audioManager.fadeBGMIn();
  }
  @mj.traitEvent("HallCtl_viewDidShow")
  viewDidShow(e) {
    super.viewDidShow.call(this, e);
    this.viewDoAction("updateUI", null != e ? e : this.args);
    DotGameBtnClick.dotBgmOccupation(EBgmOccupationClickType.Hall);
  }
}