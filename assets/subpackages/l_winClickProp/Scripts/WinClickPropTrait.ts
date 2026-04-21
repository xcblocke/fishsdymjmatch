import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { DotGameUseItem } from '../../../Scripts/gamePlay/dot/DGameUseItem';
import { EItemId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("WinClickPropTrait")
export default class WinClickPropTrait extends Trait {
  static traitKey = "WinClickProp";
  onLoad() {
    super.onLoad.call(this);
  }
  onIptHitTips_chgPropDef(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onIptHitTips_execTempFix(t, e) {
    t.args[0];
    var r = t.ins.gameContext,
      o = r.getGameData().getHitTipsNums();
    r.getGameData().changeHitTipsNums(-1);
    r.getGameData().recordToolUse(EItemId.Hint);
    r.getGameData().toolChange(EItemId.Hint, -1);
    var i = r.getGameData().getHitTipsNums();
    t.ins.pushUpdateHitTipsPropEffect(i);
    DotGameUseItem.dot(r, {
      itemId: EItemId.Hint,
      afterNum: i,
      beforeNum: o
    });
    e();
  }
}