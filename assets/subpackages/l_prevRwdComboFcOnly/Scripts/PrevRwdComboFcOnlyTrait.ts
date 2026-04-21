import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("PrevRwdComboFcOnlyTrait")
export default class PrevRwdComboFcOnlyTrait extends Trait {
  _prevHadRewardCombo = false;
  static traitKey = "PrevRwdComboFcOnly";
  onLoad() {
    super.onLoad.call(this);
  }
  onDGameEnd_adjust(e, r) {
    var t,
      o,
      n,
      a,
      l,
      c = UserModel.getInstance().getCurrentGameType();
    if (c === MjGameType.Normal || c === MjGameType.Tile2Normal) {
      var s = null === (t = e.args) || void 0 === t ? void 0 : t[2];
      if (null == s ? void 0 : s.win) {
        var p = null === (o = e.args) || void 0 === o ? void 0 : o[1],
          d = true === (null === (l = null === (a = null === (n = null == p ? void 0 : p.getGameData) || void 0 === n ? void 0 : n.call(p)) || void 0 === a ? void 0 : a.getHasTriggeredRewardCombo) || void 0 === l ? void 0 : l.call(a));
        this._prevHadRewardCombo = d;
        r();
      } else r();
    } else r();
  }
  onRwdComboChk_sTriNow(e, r) {
    var t = UserModel.getInstance().getCurrentGameType();
    if (t !== MjGameType.Normal && t !== MjGameType.Tile2Normal || !this._prevHadRewardCombo) {
      r();
    } else {
      r({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: false
      });
    }
  }
}