import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("ChestAdShowTrait")
export default class ChestAdShowTrait extends Trait {
  static traitKey = "ChestAdShow";
  onChest_AdClkShow(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onChest_AdClose(t, e) {
    var r,
      o,
      n = t.ins;
    if (cc.isValid(n) && n.showAdRewards && "function" == typeof n.showAdRewards) {
      var i = null !== (o = null === (r = this.traitData) || void 0 === r ? void 0 : r.showAnim) && void 0 !== o && o;
      n.showAdRewards(i);
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}