import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("TopOnlyMatchHideFloatTrait")
export default class TopOnlyMatchHideFloatTrait extends Trait {
  static traitKey = "TopOnlyMatchHideFloat";
  onLoad() {
    super.onLoad.call(this);
  }
  getMainTraitIfEnabled() {
    var t,
      e = mj.getClassByName("TopOnlyShowMatchTrait"),
      i = null == e ? void 0 : e.getInstance();
    if (!(null == i ? void 0 : i.eventEnabled)) return null;
    if (!(null === (t = i.isInitialized) || void 0 === t ? void 0 : t.call(i))) return null;
    var a = UserModel.getInstance().getCurrentGameType();
    return i.isMatchGameType(a) ? i : null;
  }
  onScrFloatBhv_getScale(t, e) {
    if (this.getMainTraitIfEnabled()) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          inScale: 0,
          outScale: 0
        }
      });
    } else {
      e();
    }
  }
  onScoreItem_updScore(t, e) {
    var i, a, o, n;
    if (this.getMainTraitIfEnabled()) {
      var r = null !== (a = null === (i = t.args) || void 0 === i ? void 0 : i[0]) && void 0 !== a ? a : 0,
        c = null !== (n = null === (o = t.args) || void 0 === o ? void 0 : o[2]) && void 0 !== n && n;
      if (r <= 0) {
        e();
      } else {
        if (c) {
          e();
        } else {
          e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: void 0
          });
        }
      }
    } else e();
  }
}