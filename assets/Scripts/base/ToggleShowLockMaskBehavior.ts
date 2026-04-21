import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class ToggleShowLockMaskBehavior extends GameBehaviorsBase {
  start(e) {
    var t = e.data.enabled,
      o = this.context.getTileNodeMap();
    this.toggleAllLockMasks(o, t);
    this.finish(EBehaviorEnum.Success);
  }
  toggleAllLockMasks(e, t) {
    e.forEach(function (e) {
      if (e && cc.isValid(e.tileNode)) {
        var o = e.tileNode.getChildByName("imgMaskFadeOut");
        if (o && cc.isValid(o)) {
          cc.Tween.stopAllByTarget(o);
          if (t) {
            o.opacity = 0;
            o.active = false;
          } else {
            o.active = true;
            o.opacity = 255;
          }
        }
      }
    });
  }
}