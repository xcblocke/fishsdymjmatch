import { DotGameGetItem } from '../gamePlay/dot/DGameGetItem';
import { EInsertType } from '../constant/BehaviorsEnum';
import { EItemId } from '../core/simulator/constant/GameTypeEnums';
import { Tile2UpdateHitTipsItemEffect } from '../Tile2UpdateHitTipsItemEffect';
import { Tile2UpdateItemEffect } from '../Tile2UpdateItemEffect';
import { Tile2UpdateRevertItemEffect } from '../Tile2UpdateRevertItemEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2AddProp extends InputBase {
  @mj.traitEvent("IptT2AddProp_exec")
  excute(e) {
    var t = e.propType,
      o = Number(e.num),
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
      var r = this.pushNewRootEffect(e, "tile2AddPropShuffle");
      this.pushEffect(new Tile2UpdateItemEffect({
        curNum: i
      }), EInsertType.Parallel, r.newEffectId, false);
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
      r = this.pushNewRootEffect(e, "tile2AddPropHitTips");
      this.pushEffect(new Tile2UpdateHitTipsItemEffect({
        curNum: i
      }), EInsertType.Parallel, r.newEffectId, false);
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
      r = this.pushNewRootEffect(e, "tile2AddPropRevert");
      this.pushEffect(new Tile2UpdateRevertItemEffect({
        curNum: i
      }), EInsertType.Parallel, r.newEffectId, false);
    } else if ("revive" === t) {
      n.changeReviveNums(o);
      n.toolChange(EItemId.Revive, o);
      i = n.getReviveNums();
      DotGameGetItem.dot(this.gameContext, {
        itemId: EItemId.Revive,
        number: o,
        afterNum: i,
        reasonId: e.reasonId,
        reasonInfo: e.reasonInfo
      });
    } else console.error("[InputTile2AddProp] 未知的道具类型: " + t);
  }
}