import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ValentineIntroPopTimeTrait")
export default class ValentineIntroPopTimeTrait extends Trait {
  static traitKey = "ValentineIntroPopTime";
  onComplexVal_onMsgSetLevel(t, e) {
    var r,
      o,
      n = t.ins;
    if (null !== (o = null === (r = n.model) || void 0 === r ? void 0 : r.shouldShowIntroPopup) && void 0 !== o && o.call(r)) {
      n.showIntroducePopup();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onVltnIntroVw_goto(t, e) {
    var r,
      o = t.ins;
    if (UserModel.getInstance().isInGameView()) {
      null === (r = null == o ? void 0 : o.delegate) || void 0 === r || r.close();
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
}