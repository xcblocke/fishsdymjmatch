import I18NStrings from '../framework/data/I18NStrings';
import ControllerManager from '../framework/manager/ControllerManager';
import { DotAdRewardEnter } from '../gamePlay/dot/DAdRewardEnter';
import { EAdPosition } from '../gamePlay/dot/DGameAdShow';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
var p = {
  shuffle: 0,
  hitTips: 1,
  revert: 2
};
var f = {
  shuffle: EAdPosition.InGameMotivation_Reshuffle,
  hitTips: EAdPosition.InGameMotivation_Hint,
  revert: EAdPosition.InGameMotivation_Revert
};
export class Tile2NotEnoughItemsBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.from;
    if (t) {
      ControllerManager.getInstance().pushViewByController("WatchAdGetPropController", {
        type: p[t],
        isShowAction: true
      });
      DotAdRewardEnter.dot(true, f[t]);
    } else {
      var o = I18NStrings.get("Tile4_item_not_enough", "Not enough items");
      mj.EventManager.emit("SHOWTILE2TIPS", o);
    }
    this.finish(EBehaviorEnum.Success);
  }
}