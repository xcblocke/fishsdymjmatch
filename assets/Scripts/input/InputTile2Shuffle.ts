import { DotGameUseItem } from '../gamePlay/dot/DGameUseItem';
import DynamicCurve from '../types/DynamicCurve';
import { EInsertType } from '../constant/BehaviorsEnum';
import { EItemId } from '../core/simulator/constant/GameTypeEnums';
import { Tile2HitTipsEffect } from '../Tile2HitTipsEffect';
import { Tile2NotEnoughItemsEffect } from '../Tile2NotEnoughItemsEffect';
import { Tile2ShuffleEffect } from '../Tile2ShuffleEffect';
import { Tile2ShuffleVibrateEffect } from '../Tile2ShuffleVibrateEffect';
import { Tile2UpdateItemEffect } from '../Tile2UpdateItemEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2Shuffle extends InputBase {
  @mj.traitEvent("IptT2Shuffle_exec")
  excute(e) {
    var t,
      o,
      n = false,
      i = this.gameContext.getTileMapObject();
    try {
      for (var r = __values(i.tileObjectMap().values()), d = r.next(); !d.done; d = r.next()) {
        var h = d.value;
        if (h.isValid && !h.getIsInSlotBar()) {
          n = true;
          break;
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        d && !d.done && (o = r.return) && o.call(r);
      } finally {
        if (t) throw t.error;
      }
    }
    if (n) {
      var m = this.gameContext.getGameData().getShuffleNums(),
        v = e.isFree;
      if (!v) {
        if (!this.gameContext.getGameData().isShuffleEnough()) {
          this.pushEffect(new Tile2NotEnoughItemsEffect({
            from: "shuffle"
          }), EInsertType.Parallel);
          return;
        }
        this.gameContext.getGameData().changeShuffleNums(-1);
        this.gameContext.getGameData().recordToolUse(EItemId.Shuffle, e.from);
        this.gameContext.getGameData().toolChange(EItemId.Shuffle, -1);
        DynamicCurve.instance.useShuffle(this.gameContext.gameType);
        DotGameUseItem.dot(this.gameContext, {
          itemId: EItemId.Shuffle,
          beforeNum: m,
          afterNum: this.gameContext.getGameData().getShuffleNums(),
          from: e.from
        });
      }
      this.onPropUsed();
      this.gameContext.tile2TouchData.clear();
      this.gameContext.tile2ShuffleModifier.shuffle();
      var g = this.gameContext.tile2HitTipsModifier.clearAllHitTips();
      this.gameContext.saveModifier.saveLevelDataToLocalStorage();
      this.gameContext.tile2TileTypesModifier.saveToGameData();
      this.gameContext.tile2DotTrackerModifier.recordUseShuffle(v);
      this.gameContext.tile2NormalBackModifier.modifyStatus();
      var _ = this.pushNewRootEffect(e, "Tile2ShuffleEffect");
      g && g.length > 0 && this.pushEffect(new Tile2HitTipsEffect({
        isClearHit: true,
        tileId1: g[0] || "",
        tileId2: g[1] || ""
      }), EInsertType.Parallel, _.newEffectId, false);
      this.pushEffect(new Tile2UpdateItemEffect({
        curNum: this.gameContext.getGameData().getShuffleNums()
      }), EInsertType.Parallel, _.newEffectId, false);
      this.pushShuffleEffect(_.newEffectId);
    }
  }
  @mj.traitEvent("IptT2Shuffle_used")
  onPropUsed() {}
  @mj.traitEvent("IptT2Shuffle_getEff")
  getShuffleEffect() {
    return new Tile2ShuffleEffect({});
  }
  @mj.traitEvent("IptT2Shuffle_pushEff")
  pushShuffleEffect(e) {
    var t = this.getShuffleEffect();
    this.pushEffect(t, EInsertType.Parallel, e, false);
    this.pushEffect(new Tile2ShuffleVibrateEffect({}), EInsertType.Parallel, e, false);
  }
}