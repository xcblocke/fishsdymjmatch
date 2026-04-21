import { EBehaviorEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import BaseEffect from '../../../Scripts/BaseEffect';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { GameBehaviorsBase } from '../../../Scripts/base/GameBehaviorsBase';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
export class TargetCollectedEffect extends BaseEffect {
  _name = BehaviorsMapping.TargetCollected;
  _data = null;
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}
export class TargetCollectedBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this.context.gameView;
    if (cc.isValid(t) && cc.isValid(t.nodeTopEffectRoot)) {
      this.finish(EBehaviorEnum.Success);
      try {
        this.playAnimation(t.nodeTopEffectRoot, e);
      } catch (e) {}
    } else this.finish(EBehaviorEnum.Success);
  }
  playAnimation(e, t) {
    var r = e.width,
      o = BaseSpine.create(t.data.spinePath, "in", 1, null, true, t.data.bundleName);
    e.addChild(o.node);
    o.node.setPosition(-r / 2, 0, 0);
    var a = BaseSpine.create(t.data.spinePath, "in", 1, null, true, t.data.bundleName);
    e.addChild(a.node);
    a.node.setPosition(r / 2, 0, 0);
    a.node.scale = -1;
  }
}