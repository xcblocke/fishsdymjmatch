import { LockMaskNodeStateAni } from '../tilenodes/fsm/ani/LockMaskNodeStateAni';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ShowLockMaskBehavior extends GameBehaviorsBase {
  start(e) {
    var t,
      o = this.context.getTileNodeMap(),
      n = e.data.tileId,
      i = null !== (t = e.data.delay) && void 0 !== t ? t : 0.7,
      a = o.get(n);
    if (a) {
      var l = new LockMaskNodeStateAni(a.tileNode, a, i);
      a.attachNodeStateAnis([l]);
      a.playAttachEnterAni(null, function () {});
      this.finish();
    } else this.finish();
  }
}