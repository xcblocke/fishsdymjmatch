import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import VibrateManager, { EVibrateStrength, EVibratePoint } from '../gamePlay/base/vibrate/VibrateManager';
export class Tile2ReviveBehavior extends GameBehaviorsBase {
  _timeout = 0;
  @mj.traitEvent("T2RvBhv_start")
  start(e) {
    var t = e.data,
      o = t.returnedTileIds,
      n = t.reviveType;
    if (o && 0 !== o.length) {
      if ("clear" === n) {
        this.startClearMode(e);
      } else {
        this.startReturnMode(e);
      }
    } else {
      this.finish(EBehaviorEnum.Success);
    }
  }
  startReturnMode(e) {
    var t,
      o,
      n = this,
      i = e.data.returnedTileIds,
      r = this.context.gameView,
      s = null == r ? void 0 : r.slotBarView,
      u = this.context.getTileNodeMap();
    if (s) {
      var p = s.getNodeLayer();
      s.removeSlotBar(i);
      mj.audioManager.playEffect(EAudioID.Tile2Fit);
      var f = 0,
        d = function d(e) {
          var t = u.get(e);
          if (!t) {
            ++f >= i.length && h.finish(EBehaviorEnum.Success);
            return "continue";
          }
          t.tile2ReturnFromSlotBar(p, function () {
            t.tile2RollCard();
            if (++f >= i.length) {
              n.playReviveVibrate();
              n.finish(EBehaviorEnum.Success);
            }
          });
        },
        h = this;
      try {
        for (var y = __values(i), m = y.next(); !m.done; m = y.next()) d(m.value);
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          m && !m.done && (o = y.return) && o.call(y);
        } finally {
          if (t) throw t.error;
        }
      }
    } else this.finish(EBehaviorEnum.Success);
  }
  playReviveVibrate() {
    VibrateManager.executeVibrate(EVibrateStrength.StrongShort, EVibratePoint.Tile2Revive);
  }
  startClearMode(e) {
    var t = e.data.returnedTileIds,
      o = this.context.gameView,
      n = null == o ? void 0 : o.slotBarView;
    n && n.removeSlotBar(t);
    this.finish(EBehaviorEnum.Success);
  }
}