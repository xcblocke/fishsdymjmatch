import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("WatchAdAutoUseHintTrait")
export default class WatchAdAutoUseHintTrait extends Trait {
  static traitKey = "WatchAdAutoUseHint";
  onWatchAdCtrl_autoUse(t, e) {
    var r = t.args[0];
    if (UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal && "hitTips" === r) {
      GameInteraction.input({
        inputType: EGameInputEnum.Tile2HitTips
      });
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}