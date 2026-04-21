import { EGameInputEnum, EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameInteraction } from '../GameInteraction/GameInteraction';
import { AutoMergeSpeedType } from './StartAutoMergeBehavior';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class Tile2StartAutoMergeBehavior extends GameBehaviorsBase {
  _timeout = 100;
  start(e) {
    var t,
      o = this,
      n = null !== (t = e.data.type) && void 0 !== t ? t : "",
      i = this.getSpeedConfig(n),
      r = i.initialDelay,
      c = false,
      u = function u() {
        var e, t;
        if (!c) {
          var p = o.context.getTileMapObject();
          p.updateCanMatchTiles();
          p.getCanMatchTilesHint();
          var f = p.getAllCardTiles();
          if (!f || f.length <= 0) {
            c = true;
            o._onAllPairsExhausted(n);
          } else {
            GameInteraction.input({
              inputType: EGameInputEnum.Tile2AutoMerge,
              type: n
            });
            if (i.type === AutoMergeSpeedType.Accelerate) {
              var d = null !== (e = i.minDelay) && void 0 !== e ? e : 0.1,
                h = null !== (t = i.decreaseStep) && void 0 !== t ? t : 0.02;
              r > d && (r = Math.max(d, r - h));
            }
            o.context.gameView.timerComponent.doOnce(r, u);
          }
        }
      };
    u();
    this.finish(EBehaviorEnum.Success);
  }
  _onAllPairsExhausted(e) {
    "allClear" === e && this._handleAllClearComplete();
  }
  _handleAllClearComplete() {}
  getSpeedConfig(e) {
    return "travelVictory" === e ? this.getTravelSpeedConfig() : this.getMainlineSpeedConfig();
  }
  @mj.traitEvent("T2StAutoMrgBhv_mainSpd")
  getMainlineSpeedConfig() {
    return {
      type: AutoMergeSpeedType.Constant,
      initialDelay: 0.33
    };
  }
  @mj.traitEvent("T2StAutoMrgBhv_trvSpd")
  getTravelSpeedConfig() {
    return {
      type: AutoMergeSpeedType.Accelerate,
      initialDelay: 0.33,
      decreaseStep: 0.02,
      minDelay: 0.1
    };
  }
}