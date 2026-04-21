import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameTouchComponent } from '../component/GameTouchComponent';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class EnterAnimationFinishBehavior extends GameBehaviorsBase {
  @mj.traitEvent("EntAniFiBhv_start")
  start() {
    this.enableTouchEvents();
    this.finish(EBehaviorEnum.Success);
  }
  enableTouchEvents() {
    var e = this.context.gameView;
    if (e) {
      var t = e._gameNode;
      if (t && cc.isValid(t)) {
        var o = t.getComponent(GameTouchComponent);
        o && o.registerTouchEvents(this.context.gameType);
      }
    }
  }
}