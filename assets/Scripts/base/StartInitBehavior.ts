import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import { GameTouchComponent } from '../component/GameTouchComponent';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export class StartInitBehavior extends GameBehaviorsBase {
  _timeout = 0;
  start() {
    this.disableTouchEvents();
    this.finish(EBehaviorEnum.Success);
  }
  disableTouchEvents() {
    var e = this.context.gameView;
    if (e) {
      var t = e._gameNode;
      if (t && cc.isValid(t)) {
        var o = t.getComponent(GameTouchComponent);
        o && o.unregisterTouchEvents();
      }
    }
  }
}