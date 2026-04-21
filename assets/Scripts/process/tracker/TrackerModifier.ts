import { BaseCoreObject } from '../../BaseCoreObject';
import { EGameInputEnum, EShuffleFrom } from '../../simulator/constant/GameInputEnum';
import { EMergeType } from '../../core/simulator/constant/GameTypeEnums';
import { EGameStepCmd, EClearType } from '../../tracker/TrackerInterface';
export class TrackerModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  triggerInvalid(e) {
    this.context.isVideo || this.context.getGameTracker() && this.context.getGameTracker().pushStep(this.context, {
      cmd: EGameStepCmd.Invalid,
      tileId: e
    });
  }
  triggerClear(e, t, o) {
    var n;
    if (!this.context.isVideo && this.context.getGameTracker()) {
      var i = EClearType.Single,
        r = false;
      if (e.inputType === EGameInputEnum.TouchStart) (null === (n = e) || void 0 === n ? void 0 : n.multiTouch) && (i = EClearType.Multi);else if (e.inputType === EGameInputEnum.TouchEnd) i = EClearType.Drag;else if (e.inputType === EGameInputEnum.AutoMerge) {
        r = true;
        i = EClearType.AutoMerge;
      }
      switch (t) {
        case EMergeType.Daxiao:
          i = EClearType.Daxiao;
          break;
        case EMergeType.Duoxiao:
          i = EClearType.Duoxiao;
          break;
        case EMergeType.Bomb:
          i = r ? EClearType.AutoMergeBomb : EClearType.Bomb;
      }
      var c = this.context.getTileMapObject().getMatchTileIds();
      if (2 === c.length) {
        var u = this.context.getTileMapObject().getTileObject(c[0]),
          p = this.context.getTileMapObject().getTileObject(c[1]);
        if (u && p) {
          var f = o ? EGameStepCmd.AutoMerge : EGameStepCmd.KillPair;
          this.context.getGameTracker().pushStep(this.context, {
            cmd: f,
            tileId1: c[0],
            tileId2: c[1],
            typeId: u.cardId,
            clear: i
          });
        }
      }
    }
  }
  triggerShuffle(e, t, o) {
    if (!this.context.isVideo && this.context.getGameTracker()) {
      var n = o === EShuffleFrom.Revive || o === EShuffleFrom.ClassicRevive ? EGameStepCmd.ReviveShuffle : EGameStepCmd.Shuffle;
      this.context.getGameTracker().pushStep(this.context, {
        cmd: n,
        boardAfter: e,
        boardBefore: t
      });
    }
  }
  triggerUndo(e, t) {
    if (!this.context.isVideo && this.context.getGameTracker()) {
      var o = this.context.getTileMapObject().getTileObject(e);
      o && this.context.getGameTracker().pushStep(this.context, {
        cmd: EGameStepCmd.Hint,
        tileId1: e,
        tileId2: t,
        typeId: o.cardId
      });
    }
  }
  triggerHint(e, t) {
    if (!this.context.isVideo && this.context.getGameTracker()) {
      var o = this.context.getTileMapObject().getTileObject(e);
      o && this.context.getGameTracker().pushStep(this.context, {
        cmd: EGameStepCmd.Hint,
        tileId1: e,
        tileId2: t,
        typeId: o.cardId
      });
    }
  }
}