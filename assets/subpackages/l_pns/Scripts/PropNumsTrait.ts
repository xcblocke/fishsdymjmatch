import { EItemId, EGetItemReasonId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { DotGameGetItem } from '../../../Scripts/gamePlay/dot/DGameGetItem';
@mj.trait
@mj.class("PropNumsTrait")
export default class PropNumsTrait extends Trait {
  static traitKey = "PropNumsTrait";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptSetLv_setData(t, e) {
    if (1 == t.args[0].levelId && !this.localData.isPropNumsTraitDone) {
      t.ins.gameContext.getGameData().changeShuffleNums(this._traitData.shuffleNums, true);
      t.ins.gameContext.getGameData().changeHitTipsNums(this._traitData.hitTipsNums, true);
      this.localData.isPropNumsTraitDone = true;
      DotGameGetItem.dot(t.ins.gameContext, {
        itemId: EItemId.Shuffle,
        number: this._traitData.shuffleNums,
        afterNum: t.ins.gameContext.getGameData().getShuffleNums(),
        reasonId: EGetItemReasonId.SystemGift,
        reasonInfo: "首次进入送3次重洗牌",
        replace: true
      });
      DotGameGetItem.dot(t.ins.gameContext, {
        itemId: EItemId.Hint,
        number: this._traitData.hitTipsNums,
        afterNum: t.ins.gameContext.getGameData().getHitTipsNums(),
        reasonId: EGetItemReasonId.SystemGift,
        reasonInfo: "首次进入送3次提示",
        replace: true
      });
    }
    e();
  }
}