import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import TravelGameModel, { ETravelRedPointState } from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("JourneyUnlockTrait")
export default class JourneyUnlockTrait extends Trait {
  static traitKey = "JourneyUnlock";
  onLoad() {
    super.onLoad.call(this);
    this.registerEvent([{
      event: "Tile2BfWinBhv_doOthLgc",
      priority: 20
    }]);
  }
  onJourney_getLimitDay(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.traitData.installDay
    });
  }
  onJourney_getLimitLevel(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: this.traitData.levelLimit
    });
  }
  onJourney_IsLevelValid(t, e) {
    var r = UserModel.getInstance().getMainGameData().getLevelId();
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r >= t.ins.getLimitLevel()
    });
  }
  onBeforeWinBhv_doOthLgc(t, e) {
    this.checkRedPoint();
    e();
  }
  onTile2BfWinBhv_doOthLgc(t, e) {
    this.checkRedPoint();
    e();
  }
  checkRedPoint() {
    var t = UserModel.getInstance().getMainGameData().getLevelId(),
      e = TravelGameModel.getInstance().isUnlocked(),
      r = TravelGameModel.getInstance().getRedPointState();
    if (!e && r === ETravelRedPointState.None && t >= this.traitData.levelLimit) {
      TravelGameModel.getInstance().setRedPointState(ETravelRedPointState.Show);
      mj.EventManager.emit(EGameEvent.RedDot_addNotify, "journey");
    }
  }
}