import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("Block4StarStoreTrait")
export default class Block4StarStoreTrait extends Trait {
  static traitKey = "Block4StarStore";
  onLoad() {
    super.onLoad.call(this);
  }
  onRatingDlg_getHighStar(t, e) {
    if (this._traitData.feedback4Star) {
      e({
        returnType: TraitCallbackReturnType.return,
        returnVal: 5,
        isBreak: true
      });
    } else {
      e();
    }
  }
  onRatingDlg_GotoStore(t, e) {
    var o,
      i = null === (o = null == t ? void 0 : t.args) || void 0 === o ? void 0 : o[0];
    if (i && i <= 4) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else {
      e();
    }
  }
}