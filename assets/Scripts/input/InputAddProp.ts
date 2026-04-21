import { DotGameGetItem } from '../gamePlay/dot/DGameGetItem';
import { EInsertType } from '../constant/BehaviorsEnum';
import { EItemId } from '../core/simulator/constant/GameTypeEnums';
import { UpdateHitTipsPropEffect } from '../UpdateHitTipsPropEffect';
import { UpdateShufflePropEffect } from '../UpdateShufflePropEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputAddProp extends InputBase {
  @mj.traitEvent("IptAddProp_exec")
  excute(e) {
    var t = e.propType,
      o = e.num,
      n = this.gameContext.getGameData();
    if ("shuffle" === t) {
      n.changeShuffleNums(o);
      n.toolChange(EItemId.Shuffle, o);
      var i = n.getShuffleNums();
      DotGameGetItem.dot(this.gameContext, {
        itemId: EItemId.Shuffle,
        number: o,
        afterNum: i,
        reasonId: e.reasonId,
        reasonInfo: e.reasonInfo
      });
      this.pushUpdateShufflePropEffect(i);
    } else if ("hitTips" === t) {
      n.changeHitTipsNums(o);
      n.toolChange(EItemId.Hint, o);
      i = n.getHitTipsNums();
      DotGameGetItem.dot(this.gameContext, {
        itemId: EItemId.Hint,
        number: o,
        afterNum: i,
        reasonId: e.reasonId,
        reasonInfo: e.reasonInfo
      });
      this.pushUpdateHitTipsPropEffect(i);
    } else if ("revert" === t) {
      n.changeRevertNums(o);
      n.toolChange(EItemId.Revert, o);
      i = n.getRevertNums();
      DotGameGetItem.dot(this.gameContext, {
        itemId: EItemId.Revert,
        number: o,
        afterNum: i,
        reasonId: e.reasonId,
        reasonInfo: e.reasonInfo
      });
    } else console.error("[InputAddProp] 未知的道具类型: " + t);
  }
  pushUpdateShufflePropEffect(e) {
    var t = new UpdateShufflePropEffect({
      curNum: e
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
  pushUpdateHitTipsPropEffect(e) {
    var t = new UpdateHitTipsPropEffect({
      curNum: e
    });
    this.pushEffect(t);
  }
}