import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ZeroRemainFullComboTrait")
export default class ZeroRemainFullComboTrait extends Trait {
  _isZeroRemainFullCombo = false;
  static traitKey = "ZeroRemainFullCombo";
  onInitViewBhv_crtTls(t, o) {
    this._isZeroRemainFullCombo = false;
    o();
  }
  onFullComboChk_canFullCb(t, o) {
    var e,
      r,
      i,
      n = t.ins,
      l = (null == n ? void 0 : n.context) || (null == n ? void 0 : n._context),
      u = null === (e = null == l ? void 0 : l.getTileMapObject) || void 0 === e ? void 0 : e.call(l),
      a = null !== (i = null === (r = null == u ? void 0 : u.getCurTilesCnt) || void 0 === r ? void 0 : r.call(u)) && void 0 !== i ? i : -1;
    this._isZeroRemainFullCombo = 0 === a;
    this._isZeroRemainFullCombo;
    o();
  }
  onFullComboBhv_skipMerge(t, o) {
    if (this._isZeroRemainFullCombo) {
      o({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: true
      });
    } else {
      o();
    }
  }
  onClrNormHlp_bfrPushEnd(t, o) {
    var e;
    if (this._isZeroRemainFullCombo) {
      var r = t.ins,
        i = null == r ? void 0 : r._options;
      if (null === (e = null == i ? void 0 : i.fullComboEffectOptions) || void 0 === e ? void 0 : e.newEffectId) {
        i.insertEndEffectId = i.fullComboEffectOptions.newEffectId;
        i.insertEndEffectType = EInsertType.Serial;
      }
    }
    o();
  }
}