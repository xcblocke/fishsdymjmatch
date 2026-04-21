import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { InitCollectTargetEffect } from '../../../Scripts/InitCollectTargetEffect';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("FixTravelCollectTrait")
export default class FixTravelCollectTrait extends Trait {
  static traitKey = "FixTravelCollect";
  onIptEnterAni_pushColTag(t, e) {
    var r,
      o,
      i = t.ins,
      n = null === (o = null === (r = i.gameContext) || void 0 === r ? void 0 : r.getTileMapObject()) || void 0 === o ? void 0 : o.collectSystem;
    if (n) {
      var a = new InitCollectTargetEffect({
        collectDetails: n.getAllCollectDetails()
      });
      i.pushEffect(a, EInsertType.Parallel);
      e();
    } else e();
  }
  onIptEnterAniFin_pushColTag(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump
    });
  }
}