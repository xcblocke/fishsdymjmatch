import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ClassInterStartGeCntTrait")
export default class ClassInterStartGeCntTrait extends Trait {
  _skipAdGameCount = 2;
  static traitKey = "ClassInterStartGeCnt";
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData;
    this._skipAdGameCount = (null == e ? void 0 : e.skipAdGameCount) || 2;
    void 0 !== this.localData.playedGameCount && null !== this.localData.playedGameCount && "" !== this.localData.playedGameCount || (this.localData.playedGameCount = 0);
  }
  onAdMgr_chkInterAd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Classic) {
      if (this.localData.playedGameCount <= this._skipAdGameCount) {
        e({
          returnVal: false,
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else {
        e();
      }
    } else e();
  }
  onGsListener_onNewGame(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Classic) {
      this.localData.playedGameCount++;
      this.localData = this.localData;
    }
    e();
  }
  onGsListener_onReplayGame(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Classic) {
      this.localData.playedGameCount++;
      this.localData = this.localData;
    }
    e();
  }
}