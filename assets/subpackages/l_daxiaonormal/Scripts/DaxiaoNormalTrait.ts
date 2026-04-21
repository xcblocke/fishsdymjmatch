import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("DaxiaoNormalTrait")
export default class DaxiaoNormalTrait extends Trait {
  static traitKey = "DaxiaoNormal";
  onLoad() {
    super.onLoad.call(this);
    this.localData.gameEndCount || (this.localData.gameEndCount = 0);
  }
  getNeedCount() {
    return this._traitData.needCount || 6;
  }
  onMainGameCtrl_getTile(t, e) {
    if (this.localData.gameEndCount < this.getNeedCount()) e();else {
      this.localData.gameEndCount = -1;
      t.beforReturnVal = t.beforReturnVal + "," + ETileType.DaxiaoCard;
      e({
        returnVal: t.beforReturnVal
      });
    }
  }
  isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  onDaxiaoCardType_getCount(t, e) {
    if (this.isTile2Mode()) e();else {
      e({
        returnVal: this._traitData.count || 0,
        returnType: TraitCallbackReturnType.jump,
        isBreak: true
      });
    }
  }
  onGsListener_onGameEnd(t, e) {
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Normal) {
      this.localData.gameEndCount = this.localData.gameEndCount + 1;
      e();
    } else e();
  }
  onDaxiaoCardType_cenRange(t, e) {
    if (this.isTile2Mode()) {
      e();
    } else {
      e({
        returnVal: this._traitData.cenRange || [3, 3],
        isBreak: true
      });
    }
  }
  onDaxiaoCardType_cInCenter(t, e) {
    if (this.isTile2Mode()) {
      e();
    } else {
      e({
        returnVal: this._traitData.cInCenter || false,
        isBreak: true
      });
    }
  }
}