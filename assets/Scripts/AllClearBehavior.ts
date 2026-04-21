import { EBehaviorEnum, EGameInputEnum } from './simulator/constant/GameInputEnum';
import { EAudioID } from './core/simulator/constant/GameTypeEnums';
import { GameInteraction } from './GameInteraction/GameInteraction';
import { applyAllClearSlotCardNodeScaleToBoard } from './IAllClearStrategy';
import { AllClearStrategyRegistry } from './AllClearStrategyRegistry';
import { GameBehaviorsBase } from './base/GameBehaviorsBase';
import VibrateManager, { EVibrateStrength, EVibratePoint } from './gamePlay/base/vibrate/VibrateManager';
export class AllClearBehavior extends GameBehaviorsBase {
  _timeout = 12000;
  _effectId = 0;
  _allClearRemoveVibrateDone = false;
  _allClearRevealRollMaxWaitSec = 0.8;
  start(e) {
    if (this.shouldSkip()) this.finish(EBehaviorEnum.Success);else {
      this.context.gameView.setSwallowEventNodeActive(true);
      this.play(e);
    }
  }
  play(e) {
    var t,
      o,
      n = e.data.effectId,
      i = null !== (t = e.data.tileIds) && void 0 !== t ? t : this._getAllTileIds(),
      r = null !== (o = e.data.isSkip) && void 0 !== o && o;
    this._effectId = n;
    this._allClearRemoveVibrateDone = false;
    this.playVibrateFullCombo();
    var a = AllClearStrategyRegistry.getOrDefault(n);
    if (a) {
      var l = null;
      if (this.isPreFullCombo()) {
        l = 1 !== n ? AllClearStrategyRegistry.get(1) : null;
        mj.audioManager.playEffect(EAudioID.FullCombo);
      }
      this._playViaStrategy(a, i, r, l);
    } else {
      this.context.gameView.setSwallowEventNodeActive(false);
      this.finish(EBehaviorEnum.Success);
    }
  }
  @mj.traitEvent("AllClearBhv_isPreFCb")
  isPreFullCombo() {
    return false;
  }
  playVibrateFullCombo() {
    VibrateManager.executeVibrate(EVibrateStrength.RewardStrong, EVibratePoint.Tile2FullCombo);
  }
  _playViaStrategy(e, t, o, n) {
    var i = this;
    return new Promise(function (o) {
      var a = i._buildContext(o);
      if (n) {
        var l = Object.assign(Object.assign({}, a), {
          onComplete: function () {
            i.playStrategy(e, t, a);
          }
        });
        n.play(t, l);
      } else i.playStrategy(e, t, a);
    }).then(function () {
      i.context.gameView.setSwallowEventNodeActive(false);
      i.shouldSkipAutoMerge() || o || i.autoMerger();
      i.finish(EBehaviorEnum.Success);
    });
  }
  playStrategy(e, t, o) {
    var n = this;
    e && this._revealAllClearBackRollCardsThen(t, function () {
      e.play(t, o);
      n.playAudio();
    });
  }
  _clearTile2LockDarkenForTile(e) {
    var t = this.context.getTileNodeMap().get(e);
    t && cc.isValid(t.tileNode) && t.tile2SetLockDarken(false, false);
  }
  _revealAllClearBackRollCardIfNeeded(e, t) {
    var o = this.context.getTileMapObject();
    if (o) {
      var n = o.getTileObject(e);
      if (n && n.isHasRollCard() && n.getIsBack()) {
        n.setIsBack(false);
        var i = this.context.getTileNodeMap().get(e);
        if (i && cc.isValid(i.tileNode)) {
          i.tile2RevealRollCard(false, t);
        } else {
          t();
        }
      } else t();
    } else t();
  }
  _revealAllClearBackRollCardsThen(e, t) {
    var o;
    if (e) for (var n = 0; n < e.length; n++) this._clearTile2LockDarkenForTile(e[n]);
    for (var i, r = 0, a = (i = false, function () {
        if (!i) {
          i = true;
          t();
        }
      }), l = function l() {
        --r <= 0 && a();
      }, s = 0; s < e.length; s++) {
      var c = this.context.getTileMapObject(),
        u = null == c ? void 0 : c.getTileObject(e[s]),
        p = this.context.getTileNodeMap().get(e[s]);
      u && u.isHasRollCard() && u.getIsBack() && p && cc.isValid(p.tileNode) && r++;
    }
    if (r <= 0 || 1 == this._effectId) a();else {
      null === (o = this.context.gameView.timerComponent) || void 0 === o || o.doOnce(this._allClearRevealRollMaxWaitSec, a);
      for (s = 0; s < e.length; s++) this._revealAllClearBackRollCardIfNeeded(e[s], l);
    }
  }
  _getAllTileIds() {
    return this.context.getTileMapObject().aliveTiles().map(function (e) {
      return e.id;
    });
  }
  _buildContext(e) {
    var t,
      o,
      n,
      i,
      r = this,
      a = this.context.gameView.nodeTopEffectRoot,
      c = function c() {
        var e, t;
        try {
          for (var o = __values(r.context.getTileNodeMap()), n = o.next(); !n.done; n = o.next()) {
            var i = __read(n.value, 2)[1];
            if ((null == i ? void 0 : i.tileObject) && !i.tileObject.getIsInSlotBar() && cc.isValid(i.cardNode)) return i.cardNode;
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            n && !n.done && (t = o.return) && t.call(o);
          } finally {
            if (e) throw e.error;
          }
        }
        return null;
      };
    return {
      effectNode: a,
      layoutScale: this.context.layoutScale,
      loadRes: function (e, t, o) {
        return r.context.gameCtr.loadRes(e, t, o);
      },
      getTileNodePos: function (e) {
        var t = r.context.getTileNodeMap().get(e);
        return t ? r._toLocalPos(t.cardNode, a) : null;
      },
      getReferenceBoardCardNode: c,
      cloneTileNode: function (e) {
        var t = r.context.getTileNodeMap().get(e);
        if (!t) return null;
        var o = cc.instantiate(t.cardNode);
        t.tileObject.getIsInSlotBar() && applyAllClearSlotCardNodeScaleToBoard(o, t.cardNode, c());
        return o;
      },
      removeTileNode: function (e) {
        if (r._effectId >= 2 && r._effectId <= 8 && !r._allClearRemoveVibrateDone) {
          r._allClearRemoveVibrateDone = true;
          VibrateManager.executeVibrate(EVibrateStrength.RewardStrong);
        }
        r.context.removeTileNodeByTileId(e);
      },
      getTileObject: function (e) {
        var t = r.context.getTileNodeMap().get(e);
        return t ? t.info.tileObject : null;
      },
      getTileNode: function (e) {
        var t;
        return null !== (t = r.context.getTileNodeMap().get(e)) && void 0 !== t ? t : null;
      },
      getRandomIndexes: function (e) {
        return r.context.randomGenerator.shuffle(Array.from({
          length: e
        }, function (e, t) {
          return t;
        }));
      },
      getCardSpace: function () {
        return 0;
      },
      onShake: function () {
        return r.context.gameView.playShake();
      },
      onComplete: e,
      beamOriginWorld: (i = null !== (n = null === (o = null === (t = r.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem) || void 0 === o ? void 0 : o.node) && void 0 !== n ? n : null, i && cc.isValid(i) ? i.convertToWorldSpaceAR(cc.v2(0, 0)) : null)
    };
  }
  _toLocalPos(e, t) {
    var o = e.convertToWorldSpaceAR(cc.v2(0, 0)),
      n = t.convertToNodeSpaceAR(o);
    return cc.v3(n.x, n.y, 0);
  }
  autoMerger() {
    GameInteraction.input({
      inputType: EGameInputEnum.Tile2StartAutoMerge,
      type: "allClear"
    });
  }
  @mj.traitEvent("AllClearBhv_playAud")
  playAudio() {
    var e = EAudioID.AllClear;
    if (1 === this._effectId) {
      e = EAudioID.FullCombo;
    } else {
      8 === this._effectId && (e = EAudioID.AllClearGather);
    }
    mj.audioManager.playEffect(e);
  }
  @mj.traitEvent("AllClearBhv_skip")
  shouldSkip() {
    return false;
  }
  @mj.traitEvent("AllClearBhv_skipMrg")
  shouldSkipAutoMerge() {
    return false;
  }
}