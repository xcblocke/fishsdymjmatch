import { EAudioID } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HomeBgmSplitTrait")
export default class HomeBgmSplitTrait extends Trait {
  static traitKey = "HomeBgmSplit";
  onLoad() {
    super.onLoad.call(this);
  }
  firstInit() {
    if (!this.localData.isInit) {
      var t = UserModel.getInstance().isMusicEnabled();
      this.localData.homeMusicEnabled = false !== t;
      this.localData.gameMusicEnabled = false !== t;
      this.localData.isInit = true;
    }
  }
  onHallCtl_viewDidShow(t, e) {
    this.firstInit();
    this.applyMusicState(this.localData.homeMusicEnabled);
    e();
  }
  onMainGameCtrl_vwShow(t, e) {
    this.firstInit();
    this.applyMusicState(this.localData.gameMusicEnabled);
    e();
  }
  applyMusicState(t) {
    UserModel.getInstance().setMusicEnabled(t);
    mj.audioManager.setBGMMuted(!t);
    if (t) {
      mj.audioManager.playBGM(EAudioID.Bgm, true);
    } else {
      mj.audioManager.stopBGM();
    }
  }
  onUISetHome_onMusicClick(t, e) {
    var a = UserModel.getInstance().isMusicEnabled();
    this.localData.homeMusicEnabled = a;
    this.localData.homeMusicEnabled = this.localData.homeMusicEnabled;
    e();
  }
  onUISetDlg_onMusicClick(t, e) {
    var a = UserModel.getInstance().isMusicEnabled();
    this.localData.gameMusicEnabled = a;
    this.localData.gameMusicEnabled = this.localData.gameMusicEnabled;
    e();
  }
  isHomeMusicEnabled() {
    return this.localData.homeMusicEnabled;
  }
  isGameMusicEnabled() {
    return this.localData.gameMusicEnabled;
  }
}