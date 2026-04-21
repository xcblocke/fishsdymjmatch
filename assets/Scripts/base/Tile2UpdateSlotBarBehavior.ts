import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { ETile2SlotType, EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { ETile2ClearType } from '../simulator/constant/Tile2Interface';
export class Tile2UpdateSlotBarBehavior extends GameBehaviorsBase {
  @mj.traitEvent("T2UpSlotBarBhv_start")
  start(e) {
    var t,
      o,
      n = this,
      i = e.data.changeInfo;
    this.context.gameView;
    if (i) {
      var r = i.oldIndex < 0,
        c = [];
      if (this.context.getTile2SlotType() === ETile2SlotType.Slot3) {
        this.newFunction(i, r, c);
      } else {
        this.oldFunction(i, r, c);
      }
      var u = 0,
        p = function p() {
          ++u >= c.length && n.finish(EBehaviorEnum.Success);
        };
      try {
        for (var f = __values(c), d = f.next(); !d.done; d = f.next()) (0, d.value)(p);
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          d && !d.done && (o = f.return) && o.call(f);
        } finally {
          if (t) throw t.error;
        }
      }
      0 === c.length && this.finish(EBehaviorEnum.Success);
    } else this.finish(EBehaviorEnum.Success);
  }
  calcCenterPosInParent(e, t, o) {
    var n = e.convertToWorldSpaceAR(cc.v2(0, 0)),
      i = t.convertToWorldSpaceAR(cc.v2(0, 0)),
      r = cc.v2((n.x + i.x) / 2, (n.y + i.y) / 2);
    return o.convertToNodeSpaceAR(r);
  }
  newFunction(e, t, o) {
    var n = this,
      i = this.context.getTileNodeMap(),
      r = this.context.gameView,
      a = (null == r || r.slotBarView, e.tileId),
      l = e.index,
      s = e.oldIndex,
      c = e.clearInfo,
      p = i.get(a);
    if (c) {
      if (!p) return;
      if (c.clearType == ETile2ClearType.InSlotBar) {
        if (c.isAddToSlotBar) {
          o.push(function (t) {
            return n.doClearFromBoardToSlotBar(e, p, t);
          });
        } else {
          o.push(function (t) {
            return n.doClearWaitOnSlotBar(e, p, t);
          });
        }
      } else {
        var f = i.get(c.clearTildId);
        if (c.isAddToSlotBar) {
          var d = this.calcCenterPosInParent(p.cardNode, f.cardNode, p.cardNode.parent),
            h = p.cardNode.convertToWorldSpaceAR(cc.v2(0, 0)).x > 0;
          o.push(function (e) {
            return n.doClearFromBoardToPos(p, d, h, e);
          });
        } else {
          var y = this.calcCenterPosInParent(p.cardNode, f.cardNode, r.nodeDragCardRoot);
          o.push(function (t) {
            return n.doClearFromSlotBarToPos(e, p, y, t);
          });
        }
      }
    } else if (l < 0) o.push(function (t) {
      return n.doRemoveTile(e, p, t);
    });else if (p) if (s < 0) {
      p.hideSelectEffect();
      e.isDead || o.push(function (t) {
        return n.doNoClearAddToSlotBar(e, p, t);
      });
    } else o.push(function (t) {
      return n.doMoveInSlot(e, p, t);
    });
  }
  doNoClearAddToSlotBar(e, t, o) {
    var n,
      i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView,
      r = e.oldIndex,
      a = e.index;
    i.moveTileNode(t, r, a, true);
    this.playTouchAudio();
    t.tile2NoClearAddToSlotBar(null, function () {
      o();
    });
  }
  oldFunction(e, t, o) {
    var n = this,
      i = this.context.getTileNodeMap(),
      r = this.context.gameView,
      a = (null == r || r.slotBarView, e.index),
      l = e.oldIndex,
      s = e.tileId,
      c = i.get(s);
    if (a < 0) {
      o.push(function (t) {
        return n.doRemoveTile(e, c, t);
      });
    } else {
      c && (l < 0 ? o.push(function (t) {
        return n.doAddToSlotBar(e, c, t);
      }) : o.push(function (t) {
        return n.doMoveInSlot(e, c, t);
      }));
    }
  }
  doClearFromSlotBarToPos(e, t, o, n) {
    t.tile2ClearFromSlotBarToPos({
      targetLocalPos: o
    }, function () {
      n();
    });
  }
  doClearFromBoardToPos(e, t, o, n) {
    e.tile2ClearFromBoardToPos({
      targetLocalPos: t,
      isRight: o
    }, function () {
      n();
    });
  }
  doClearFromBoardToSlotBar(e, t, o) {
    var n, i;
    t.tile2ClearFromBoardToSlotBar({
      clearPosIndex: null !== (i = null === (n = e.clearInfo) || void 0 === n ? void 0 : n.clearPosIndex) && void 0 !== i ? i : -1
    }, function () {
      o();
    });
  }
  doClearWaitOnSlotBar(e, t, o) {
    var n,
      i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView,
      r = e.oldIndex,
      a = e.clearInfo.clearPosIndex;
    i.moveTileNode(t, r, a, true);
    t.tile2ClearWaitOnSlotBar(null, function () {
      o();
    });
  }
  @mj.traitEvent("T2UpSlotBarBhv_playTchAud")
  playTouchAudio() {
    mj.audioManager.playEffect(EAudioID.Tile2Touch);
  }
  doRemoveTile(e, t, o) {
    var n,
      i = e.tileId;
    (null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView).removeSlotBar([i]);
    o();
  }
  doAddToSlotBar(e, t, o) {
    var n,
      i = e.oldIndex,
      r = e.index;
    (null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView).moveTileNode(t, i, r, true);
    this.playTouchAudio();
    t.tile2AddToSlotBar4(null, function () {
      o();
    });
  }
  doMoveInSlot(e, t, o) {
    var n,
      i = e.oldIndex,
      r = e.index;
    (null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView).moveTileNode(t, i, r, true);
    var a = {
      index: r
    };
    t.tile2MoveInSlot(a, function () {
      o();
    });
  }
}