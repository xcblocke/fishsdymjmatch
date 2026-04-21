import { DotGameUseItem } from '../gamePlay/dot/DGameUseItem';
import { EInsertType } from '../constant/BehaviorsEnum';
import { EItemId } from '../core/simulator/constant/GameTypeEnums';
import { Tile2NotEnoughItemsEffect } from '../Tile2NotEnoughItemsEffect';
import { Tile2RevertEffect } from '../Tile2RevertEffect';
import { Tile2RevertVibrateEffect } from '../Tile2RevertVibrateEffect';
import { Tile2UpdateRevertItemEffect } from '../Tile2UpdateRevertItemEffect';
import { Tile2UpdateSlotBarEffect } from '../Tile2UpdateSlotBarEffect';
import { InputBase } from '../inputbase/InputBase';
import { Tile2NoValidTilesEffect } from '../Tile2NoValidTilesEffect';
import { Tile2RollCardEffect } from '../Tile2RollCardEffect';
import { Tile2NormalBackEffect } from '../Tile2NormalBackEffect';
import { Tile2SlotCardNumChangeEffect } from '../Tile2SlotCardNumChangeEffect';
export default class InputTile2Revert extends InputBase {
  @mj.traitEvent("IptT2Revert_exec")
  excute(e) {
    var t,
      o,
      n,
      i,
      r = this.gameContext.getGameData().getRevertNums();
    if (this.gameContext.getGameData().isRevertEnough()) {
      if (0 !== this.gameContext.getGameData().slotBarIds.length) {
        var p = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(),
          f = this.gameContext.tile2RollCardModifier.getRvertIgnoreIds(),
          y = this.gameContext.tile2SlotBarModifier.revertLastTile();
        if (y) {
          var v = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(),
            g = this.gameContext.tile2RollCardModifier.modifyRollCardDatas(f);
          this.gameContext.getGameData().changeRevertNums(-1);
          this.gameContext.getGameData().recordToolUse(EItemId.Revert);
          this.gameContext.getGameData().toolChange(EItemId.Revert, -1);
          this.gameContext.tile2DotTrackerModifier.recordUseRevert();
          this.onPropUsed();
          var _ = this.gameContext.getGameData().getRevertNums();
          DotGameUseItem.dot(this.gameContext, {
            itemId: EItemId.Revert,
            afterNum: _,
            beforeNum: r
          });
          var T = this.gameContext.tile2SlotBarChecker.getSlotBarChangeList(p, v),
            C = this.gameContext.tile2NormalBackModifier.modifyStatus(),
            b = this.pushNewRootEffect(e, "Tile2RevertEffect");
          this.pushEffect(new Tile2UpdateRevertItemEffect({
            curNum: _
          }), EInsertType.Parallel, b.newEffectId, false);
          if (T.length > 0) try {
            for (var E = __values(T), S = E.next(); !S.done; S = E.next()) {
              var I = S.value;
              this.pushEffect(new Tile2UpdateSlotBarEffect({
                changeInfo: I
              }), EInsertType.Parallel, b.newEffectId);
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              S && !S.done && (o = E.return) && o.call(E);
            } finally {
              if (t) throw t.error;
            }
          }
          this.pushTile2SlotCardNumChangeEffect(null !== (n = null == p ? void 0 : p.length) && void 0 !== n ? n : 0, null !== (i = null == v ? void 0 : v.length) && void 0 !== i ? i : 0);
          this.pushRevertEffect(y, b.newEffectId);
          this.pushNormalBackEffects(C);
          var w = this.pushNewRootEffect(this.input, "roll");
          this.pushRollCardEffects(w, g);
          this.revetEnd();
        }
      } else this.pushEffect(new Tile2NoValidTilesEffect({}), EInsertType.Parallel);
    } else this.pushEffect(new Tile2NotEnoughItemsEffect({
      from: "revert"
    }), EInsertType.Parallel);
  }
  @mj.traitEvent("IptT2Revert_revetEnd")
  revetEnd() {}
  pushNormalBackEffects(e) {
    if (e && 0 != e.length) {
      var t = this.pushNewRootEffect(this.input, "Tile2NormalBackEffect"),
        o = new Tile2NormalBackEffect({
          normalBackList: e
        });
      this.pushEffect(o, EInsertType.Serial, t.newEffectId, false);
    }
  }
  @mj.traitEvent("IptT2Revert_used")
  onPropUsed() {}
  pushRollCardEffects(e, t) {
    var o, n;
    try {
      for (var i = __values(t), r = i.next(); !r.done; r = i.next()) {
        var l = r.value,
          c = new Tile2RollCardEffect({
            tileId: l.tileId,
            frontToBack: l.frontToBack
          });
        this.pushEffect(c, EInsertType.Parallel, e.newEffectId, false);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
  }
  pushRevertEffect(e, t) {
    var o = new Tile2RevertEffect({
      tileId: e
    });
    this.pushEffect(o, EInsertType.Parallel, t, false);
    var n = new Tile2RevertVibrateEffect({});
    this.pushEffect(n, EInsertType.Parallel, t, false);
  }
  pushTile2SlotCardNumChangeEffect(e, t) {
    var o = this.pushNewRootEffect(this.input, "Tile2SlotCardNumChangeEffect"),
      n = new Tile2SlotCardNumChangeEffect({
        startSlotBarCardCount: e,
        endSlotBarCardCount: t
      });
    this.pushEffect(n, EInsertType.Parallel, o.newEffectId, false);
  }
}