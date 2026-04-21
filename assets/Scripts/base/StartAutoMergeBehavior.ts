import { EGameInputEnum, EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export var AutoMergeSpeedType = {
  Constant: "constant",
  Accelerate: "accelerate"
};
export class StartAutoMergeBehavior extends GameBehaviorsBase {
  _timeout = 100;
  start(e) {
    var t,
      o = this;
    (t = "travelVictory" === e.data.type ? this.getTravelVictorySkipConfig() : this.getSkipConfig()).canSkip && this.setupSkipLogic(e, t);
    var n = e.data.type,
      i = false,
      r = "travelVictory" === n ? this.getTravelSpeedConfig() : this.getMainlineSpeedConfig(),
      c = r.initialDelay,
      u = function u() {
        var e, t;
        if (!i) {
          var p = o.context.getTileMapObject().gameContext.fullComboChecker.getAllCardPair();
          if (p && 0 !== p.length) {
            var f = p[0];
            if (f && !(f.length < 2)) if (f[0].isValid && f[1].isValid) {
              GameInteraction.input({
                inputType: EGameInputEnum.AutoMerge,
                tileId1: f[0].id,
                tileId2: f[1].id,
                type: n
              });
              if (r.type === AutoMergeSpeedType.Accelerate) {
                var d = null !== (e = r.minDelay) && void 0 !== e ? e : 0.1,
                  h = null !== (t = r.decreaseStep) && void 0 !== t ? t : 0.02;
                c > d && (c = Math.max(d, c - h));
              }
              o.context.gameView.timerComponent.doOnce(c, u);
            } else o.context.gameView.timerComponent.doOnce(0.05, u);
          } else {
            i = true;
            "travelVictory" === n && o.handleTravelVictoryComplete();
          }
        }
      };
    u();
    this.finish(EBehaviorEnum.Success);
  }
  setupSkipLogic(e, t) {
    var o = t.mode,
      n = t.delayTime;
    switch (o) {
      case 0:
        this.registerImmediateSkip(e);
        break;
      case 1:
        this.registerClickThenDelaySkip(e, n);
        break;
      case 2:
        this.registerDelayThenClickSkip(e, n);
    }
  }
  registerImmediateSkip(e) {
    var t = this;
    this._context.gameView.registerScreenTouchEnd(function (o) {
      o.stopPropagation();
      GameInteraction.input({
        inputType: EGameInputEnum.SkipAutoMerge,
        type: e.data.type
      });
      t._context.gameView.unregisterScreenTouchEnd();
    });
  }
  registerClickThenDelaySkip(e, t) {
    var o = this,
      n = false;
    this._context.gameView.registerScreenTouchEnd(function (i) {
      i.stopPropagation();
      if (!n) {
        n = true;
        var r = function r() {
          GameInteraction.input({
            inputType: EGameInputEnum.SkipAutoMerge,
            type: e.data.type
          });
          n = false;
        };
        o._context.gameView.unregisterScreenTouchEnd();
        o.context.gameView.timerComponent.doOnce(t, r);
        o.context.registerAutoMergeTimer(r);
      }
    });
  }
  registerDelayThenClickSkip(e, t) {
    var o = this,
      n = function n() {
        o._context.gameView.registerScreenTouchEnd(function (t) {
          t.stopPropagation();
          GameInteraction.input({
            inputType: EGameInputEnum.SkipAutoMerge,
            type: e.data.type
          });
          o._context.gameView.unregisterScreenTouchEnd();
        });
      };
    this.context.gameView.timerComponent.doOnce(t, n);
    this.context.registerAutoMergeTimer(n);
  }
  @mj.traitEvent("StAutoMrgBhv_skipCfg")
  getSkipConfig() {
    return {
      canSkip: true,
      mode: 0,
      delayTime: 3
    };
  }
  @mj.traitEvent("StAutoMrgBhv_trvSkip")
  getTravelVictorySkipConfig() {
    return {
      canSkip: false,
      mode: 0,
      delayTime: 2
    };
  }
  handleTravelVictoryComplete() {
    GameInteraction.input({
      inputType: EGameInputEnum.TravelEnd
    });
  }
  @mj.traitEvent("StAutoMrgBhv_mainSpd")
  getMainlineSpeedConfig() {
    return {
      type: AutoMergeSpeedType.Constant,
      initialDelay: 0.33
    };
  }
  @mj.traitEvent("StAutoMrgBhv_trvSpd")
  getTravelSpeedConfig() {
    return {
      type: AutoMergeSpeedType.Accelerate,
      initialDelay: 0.33,
      decreaseStep: 0.02,
      minDelay: 0.1
    };
  }
}