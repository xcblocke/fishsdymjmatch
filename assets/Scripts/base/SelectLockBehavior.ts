import { EAudioID } from '../core/simulator/constant/GameTypeEnums';
import { ShakeNodeStateAni } from '../tilenodes/fsm/ani/ShakeNodeStateAni';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class SelectLockBehavior extends GameBehaviorsBase {
  start(e) {
    this.finish();
    mj.audioManager.playEffect(EAudioID.Wrong);
    var t = this.context.getTileNodeMap(),
      o = [e.data.tileId],
      n = e.data.lockCorrelationCard;
    for (var i in n) {
      var l = n[i];
      o.push(l.id);
    }
    for (var s = 0; s < o.length; s++) {
      var c = o[s],
        u = t.get(c);
      if (u) {
        var p = new ShakeNodeStateAni(u.tileNode, u),
          f = new ShakeNodeStateAni(u.shadowNode, u);
        u.attachNodeStateAnis([p, f]);
        u.playAttachEnterAni(null, function () {});
      }
    }
  }
}