import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class RemoveLockMaskBehavior extends GameBehaviorsBase {
  start() {
    var e = this.context.getTileNodeMap();
    this.removeAllLockMasks(e);
    this.finish(EBehaviorEnum.Success);
  }
  removeAllLockMasks(e) {
    e.forEach(function (e) {
      if (e && cc.isValid(e.tileNode)) {
        var t = e.tileNode.getChildByName("imgMaskFadeOut");
        cc.isValid(t) && t.destroy();
      }
    });
  }
}