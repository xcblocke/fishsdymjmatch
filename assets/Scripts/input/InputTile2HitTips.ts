import { DotGameUseItem } from '../gamePlay/dot/DGameUseItem';
import { EInsertType } from '../constant/BehaviorsEnum';
import { EItemId } from '../core/simulator/constant/GameTypeEnums';
import { Tile2HitTipsEffect } from '../Tile2HitTipsEffect';
import { Tile2HitTipsVibrateEffect } from '../Tile2HitTipsVibrateEffect';
import { Tile2NoHintTipsEffect } from '../Tile2NoHintTipsEffect';
import { Tile2NotEnoughItemsEffect } from '../Tile2NotEnoughItemsEffect';
import { Tile2UpdateHitTipsItemEffect } from '../Tile2UpdateHitTipsItemEffect';
import { InputBase } from '../inputbase/InputBase';
export default class InputTile2HitTips extends InputBase {
  @mj.traitEvent("IptT2HitTips_exec")
  excute(e) {
    if (!(this.gameController.gameContext.getCanHitTips().length > 0)) if (this.gameContext.getGameData().isHitTipsEnough()) {
      var t = this.selectHitTipIds();
      if (t && t.tileIds && 2 === t.tileIds.length) {
        var o = t.tileIds[0],
          n = t.tileIds[1],
          i = t.flipId,
          r = this.gameContext.getGameData().getHitTipsNums();
        this.gameContext.getGameData().changeHitTipsNums(-1);
        this.gameContext.getGameData().recordToolUse(EItemId.Hint);
        this.gameContext.getGameData().toolChange(EItemId.Hint, -1);
        var c = this.gameContext.getGameData().getHitTipsNums();
        DotGameUseItem.dot(this.gameContext, {
          itemId: EItemId.Hint,
          afterNum: c,
          beforeNum: r
        });
        this.gameContext.tile2DotTrackerModifier.recordUseHint([o, n]);
        this.onPropUsed();
        this.gameController.tileMapObject.getTileObject(o).isHint = true;
        this.gameController.tileMapObject.getTileObject(n).isHint = true;
        this.gameController.gameContext.setCanHitTips([o, n]);
        var u = this.pushNewRootEffect(e, "Tile2HitTipsEffect");
        this.pushEffect(new Tile2UpdateHitTipsItemEffect({
          curNum: this.gameContext.getGameData().getHitTipsNums()
        }), EInsertType.Parallel, u.newEffectId, false);
        this.pushHitTipsEffectWithId(o, n, i, false, u.newEffectId);
      } else this.pushEffect(new Tile2NoHintTipsEffect({}));
    } else this.pushEffect(new Tile2NotEnoughItemsEffect({
      from: "hitTips"
    }), EInsertType.Parallel);
  }
  @mj.traitEvent("IptT2HitTips_used")
  onPropUsed() {}
  @mj.traitEvent("IptT2HitTips_hinkIds")
  selectHitTipIds() {
    this.gameController.tileMapObject.updateCanMatchTiles();
    var e = this.gameContext.tile2HitTipsChecker.computeTile2Hint();
    return e ? {
      tileIds: [e.clearId1, e.clearId2],
      flipId: e.flipId
    } : null;
  }
  @mj.traitEvent("IptT2HitTips_pushEff")
  pushHitTipsEffectWithId(e, t, o, n, i) {
    this.pushEffect(new Tile2HitTipsEffect({
      isClearHit: n,
      tileId1: e,
      tileId2: t,
      flipId: o
    }), EInsertType.Parallel, i, false);
    this.pushEffect(new Tile2HitTipsVibrateEffect({}), EInsertType.Parallel, i, false);
  }
}