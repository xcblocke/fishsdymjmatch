import { EBehaviorEnum } from '../simulator/constant/GameInputEnum';
import GameUtils from '../core/simulator/util/GameUtils';
import { PoolName } from '../constant/enumRes';
import { GameBehaviorsBase } from './GameBehaviorsBase';
export default class MotivationalWordsEffectBehavior extends GameBehaviorsBase {
  start(e) {
    var t = this.context.gameView.effectNode,
      o = this.context.gameView.gameObjectPool.get(this.getPoolName());
    if (o && cc.isValid(t)) {
      o.parent = t;
      o.setPosition(cc.v3(0, 0, 0));
      o.active = true;
      this.playAni(o, e);
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("MotivWdsEff_playAni")
  playAni(e) {
    var t,
      o,
      n = this,
      i = null === (t = cc.find("leftNode/spin", e)) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton),
      r = null === (o = cc.find("rightNode/spin", e)) || void 0 === o ? void 0 : o.getComponent(sp.Skeleton);
    if (i && r) {
      var s = this.getEffectAnimationName();
      GameUtils.playSpine(i, s, false, function () {
        n.finish(EBehaviorEnum.Success);
        n.context.gameView.gameObjectPool.push(n.getPoolName(), e);
      });
      GameUtils.playSpine(r, s, false, function () {});
    } else this.finish(EBehaviorEnum.Success);
  }
  @mj.traitEvent("MotivWdsEff_poolName")
  getPoolName() {
    return PoolName.MotivationalWordsEffect;
  }
  @mj.traitEvent("MotivWdsEff_getAni")
  getEffectAnimationName() {
    return "in";
  }
}