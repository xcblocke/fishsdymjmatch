import Trait from '../../../Scripts/framework/trait/Trait';
import { WatchAdGetPropType } from './WatchAdGetPropView';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { DotAdRewardEnter } from '../../../Scripts/gamePlay/dot/DAdRewardEnter';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { EShuffleFrom } from '../../../Scripts/simulator/constant/GameInputEnum';
@mj.trait
@mj.class("WatchAdGetPropTrait")
export default class WatchAdGetPropTrait extends Trait {
  static traitKey = "WatchAdGetProp";
  onIptShuffle_exec(t, e) {
    if (t.args[0].isFree) e();else if (t.args[0].from && t.args[0].from === EShuffleFrom.Free) e();else if (t.ins.gameContext.getGameData().isShuffleEnough()) e();else {
      ControllerManager.getInstance().pushViewByController("WatchAdGetPropController", {
        type: WatchAdGetPropType.shuffle,
        isShowAction: true
      });
      DotAdRewardEnter.dot(true, EAdPosition.InGameMotivation_Reshuffle);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    }
  }
  onIptHitTips_exec(t, e) {
    var r = t.ins.gameContext.getGameData();
    if (t.ins.gameContext.getCanHitTips().length) e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });else {
      var o = t.ins.gameController.tileMapObject.getCanMatchTilesHint();
      if (r.isHitTipsEnough()) e();else {
        if (o.length <= 0) {
          e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
          return;
        }
        ControllerManager.getInstance().pushViewByController("WatchAdGetPropController", {
          type: WatchAdGetPropType.hitTips,
          isShowAction: true
        });
        DotAdRewardEnter.dot(true, EAdPosition.InGameMotivation_Hint);
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      }
    }
  }
}