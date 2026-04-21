import VibrateManager, { EVibrateStrength } from '../gamePlay/base/vibrate/VibrateManager';
import { EGameEvent } from '../simulator/constant/GameEvent';
import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { EAudioID, MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { ShuffleAnimationManager } from '../animation/manager/ShuffleAnimationManager';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import ShuffleUtils from '../UiUtils/ShuffleUtils';
export class SpiralShuffleBehavior extends GameBehaviorsBase {
  @mj.traitEvent("SpiralShfBhv_playAud")
  playShuffleAudio() {
    mj.audioManager.playEffect(EAudioID.Refresh);
  }
  start() {
    var e, t;
    this.playShuffleAudio();
    var o = ShuffleUtils.getPrePlayTime(this.context);
    if (o) {
      var n = null === (t = null === (e = this.context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.timerComponent;
      if (n) {
        n.doOnce(o, this.playShuffleAnimation, this);
      } else {
        this.playShuffleAnimation();
      }
    } else this.playShuffleAnimation();
  }
  playShuffleAnimation() {
    var e = this,
      t = ShuffleAnimationManager.getInstance(),
      o = this.context.getTileNodeManager(),
      n = o.getTileNodes().filter(function (e) {
        var t;
        return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
      });
    if (0 !== n.length) {
      n.forEach(function (e) {
        cc.Tween.stopAllByTarget(e.cardNode);
        cc.Tween.stopAllByTarget(e.shadowCardNode);
        e.stopAllAnimation();
      });
      var i = this.getCenterPosition(n[0].cardNode.parent),
        r = {
          tileNodes: n,
          centerPos: i,
          onRebuild: function (t) {
            var n = e.context.gameType === MjGameType.Tile2Normal;
            if (n) {
              o.rebuildTileNodeInfosAfterShuffle(t);
            } else {
              o.rebuildChangeTypeTileNodes(t);
            }
            var r = o.getTileNodes().filter(function (e) {
              var t;
              return (null === (t = e.tileObject) || void 0 === t ? void 0 : t.isValid) && !e.tileObject.getIsInSlotBar();
            });
            r.forEach(function (e) {
              e.cardNode.position = i;
              e.shadowCardNode.position = i;
              e.shadowCardNode.opacity = 0;
              n || e.refreshNode(e.info);
            });
            return r;
          }
        };
      t.setStrategy("SpiralShuffle");
      t.play({
        context: r,
        timerComponent: this.context.gameView.timerComponent,
        callbacks: {
          onStart: function () {
            e.onShuffleStayStart(n);
          },
          onPhaseComplete: function (t) {
            "stay" === t && e.onShuffleStayEnd(n);
          },
          onComplete: function () {
            e.onShuffleAnimationEnd();
          }
        }
      });
    } else this.finish(EBehaviorEnum.Success);
  }
  getCenterPosition(e) {
    var t = e.convertToNodeSpaceAR(cc.v2(0.5 * cc.winSize.width, 0.5 * cc.winSize.height));
    return cc.v3(t.x, t.y);
  }
  onShuffleStayStart(e) {
    var t, o;
    this.context.gameView.setSwallowEventNodeActive(true);
    if (this.context.gameType !== MjGameType.Tile2Normal) try {
      for (var n = __values(e), i = n.next(); !i.done; i = n.next()) {
        var r = i.value;
        r.cancelSelected();
        r.hidePropHint();
        r.stopAllAnimation();
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    this.onShuffleStayStartPlay();
    ShuffleUtils.onShuffleStayStartPlay(this._context);
  }
  onShuffleStayStartPlay() {}
  onShuffleStayEnd() {
    ShuffleUtils.playRefreshAnimation(this._context);
    mj.EventManager.emit(EGameEvent.Behavior_ShuffleStayEnd, this);
  }
  onShuffleAnimationEnd() {
    this.playShuffleVibrate();
    mj.EventManager.emit(EGameEvent.Behavior_ShuffleBehaviorFinish);
    this.context.gameView.setSwallowEventNodeActive(false);
    this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("SpiralShfBhv_vibrate")
  playShuffleVibrate() {
    this.context.gameType === MjGameType.Tile2Normal && VibrateManager.executeVibrate(EVibrateStrength.Strong);
  }
  onAbort() {
    var e;
    ShuffleAnimationManager.getInstance().stop();
    null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
  }
}