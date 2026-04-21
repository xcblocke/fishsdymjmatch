import { DotGameUseItem } from './gamePlay/dot/DGameUseItem';
import { EInsertType } from './constant/BehaviorsEnum';
import { EItemId } from './core/simulator/constant/GameTypeEnums';
import { DaxiaoClearEffectEffect } from './DaxiaoClearEffectEffect';
import { Tile2RemoveHitTipsEffect } from './Tile2RemoveHitTipsEffect';
import { Tile2ReviveEffect } from './Tile2ReviveEffect';
import { Tile2RollCardEffect } from './Tile2RollCardEffect';
import { InputBase } from './inputbase/InputBase';
import ClearHelper from './ClearHelper';
import { Tile2NormalBackEffect } from './Tile2NormalBackEffect';
import { Tile2SlotCardNumChangeEffect } from './Tile2SlotCardNumChangeEffect';
export default class InputTile2Revive extends InputBase {
  excute(e) {
    var t,
      o,
      n = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(),
      i = this.gameContext.getGameData().getReviveNums();
    this.gameContext.getGameData().changeReviveNums(-1);
    this.onPropUsed();
    this.gameContext.getGameData().recordToolUse(EItemId.Revive, e.from);
    this.gameContext.getGameData().toolChange(EItemId.Revive, -1);
    this.gameContext.tile2DotTrackerModifier.recordUseRevive();
    DotGameUseItem.dot(this.gameContext, {
      itemId: EItemId.Revive,
      afterNum: this.gameContext.getGameData().getReviveNums(),
      beforeNum: i
    });
    var r = false;
    this.canMagnetRevive() && (r = this.pushMagnetReviveEffect(e));
    r || this.pushReviveEffect(e);
    var a = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot();
    this.pushTile2SlotCardNumChangeEffect(null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, null !== (o = null == a ? void 0 : a.length) && void 0 !== o ? o : 0);
    this.reviveEnd();
  }
  @mj.traitEvent("T2Revive_reviveEnd")
  reviveEnd() {}
  @mj.traitEvent("T2Revive_used")
  onPropUsed() {}
  pushTile2SlotCardNumChangeEffect(e, t) {
    var o = this.pushNewRootEffect(this.input, "Tile2SlotCardNumChangeEffect"),
      n = new Tile2SlotCardNumChangeEffect({
        startSlotBarCardCount: e,
        endSlotBarCardCount: t
      });
    this.pushEffect(n, EInsertType.Parallel, o.newEffectId, false);
  }
  @mj.traitEvent("T2Revive_animType")
  getReviveAnimType() {
    return 0;
  }
  @mj.traitEvent("T2Revive_pushReturn")
  pushReturnEffects(e) {
    this.pushEffect(new Tile2ReviveEffect({
      returnedTileIds: e
    }), EInsertType.Root);
  }
  @mj.traitEvent("T2Revive_pushClear")
  pushClearEffects(e, t) {
    var o = this.buildClearMatchInfos(t);
    if (0 !== o.length) {
      this.gameContext.daxiaoModifier.modifyDaxiaoCard(e, o);
      this.pushEffect(new Tile2ReviveEffect({
        returnedTileIds: t,
        reviveType: "clear"
      }), EInsertType.Root);
      var n = o.flatMap(function (e) {
        return [e.tileId1, e.tileId2];
      });
      this.pushEffect(new DaxiaoClearEffectEffect({
        tileIds: n,
        finalMatchInfos: o
      }), EInsertType.Root);
    } else this.pushReturnEffects(t);
  }
  buildClearMatchInfos(e) {
    var t,
      o,
      n,
      i,
      r = this.gameContext.getTileMapObject(),
      l = new Set(e),
      s = new Map();
    try {
      for (var c = __values(r.aliveTiles()), u = c.next(); !u.done; u = c.next()) {
        var p = u.value;
        if (!l.has(p.id)) {
          var f = p.cardId;
          s.has(f) || s.set(f, []);
          s.get(f).push(p.id);
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        u && !u.done && (o = c.return) && o.call(c);
      } finally {
        if (t) throw t.error;
      }
    }
    var d = [],
      h = new Set();
    try {
      for (var y = __values(e), m = y.next(); !m.done; m = y.next()) {
        var v = m.value,
          g = r.getTileObject(v);
        if (g) {
          var _ = (s.get(g.cardId) || []).filter(function (e) {
            return !h.has(e);
          });
          if (0 !== _.length) {
            var T = _[Math.floor(Math.random() * _.length)];
            h.add(T);
            d.push({
              tileId1: v,
              tileId2: T,
              isFix: false
            });
          }
        }
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        m && !m.done && (i = y.return) && i.call(y);
      } finally {
        if (n) throw n.error;
      }
    }
    return d;
  }
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
  pushReviveEffect(e) {
    var t = this.gameContext.tile2SlotBarModifier.returnSlotBarToBoard(),
      o = this.gameContext.tile2RollCardModifier.modifyRollCardDatas(),
      n = this.gameContext.getCanHitTips();
    n.length >= 2 && this.gameContext.setCanHitTips();
    if (1 === this.getReviveAnimType()) {
      this.pushClearEffects(e, t);
    } else {
      this.pushReturnEffects(t);
    }
    var i = this.gameContext.tile2NormalBackModifier.modifyStatus();
    this.pushNormalBackEffects(i);
    var r = this.pushNewRootEffect(this.input, "roll");
    this.pushRollCardEffects(r, o);
    this.pushEffect(new Tile2RemoveHitTipsEffect({
      tileId1: n[0],
      tileId2: n[1]
    }), EInsertType.Root);
  }
  pushNormalBackEffects(e) {
    if (e && 0 != e.length) {
      var t = this.pushNewRootEffect(this.input, "Tile2NormalBackEffect"),
        o = new Tile2NormalBackEffect({
          normalBackList: e
        });
      this.pushEffect(o, EInsertType.Serial, t.newEffectId, false);
    }
  }
  @mj.traitEvent("T2Revive_magnetRevive")
  canMagnetRevive() {
    return false;
  }
  @mj.traitEvent("T2Revive_magnetCnt")
  getMagnetCnt() {
    return 0;
  }
  pushMagnetReviveEffect(e) {
    var t = this.getMagnetCnt();
    if (t <= 0) return false;
    var o = this.gameContext.tile2MagnetChecker.findMagnetTiles(t);
    if (!o || 0 === o.length) return false;
    var n = o.slice();
    ClearHelper.runClear(this.gameContext, e, this, {
      tileIds: o,
      outTiles: n,
      magnetPair: t
    });
    return true;
  }
}