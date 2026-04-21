import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
@mj.trait
@mj.class("ChangeDefaultSkinTrait")
export default class ChangeDefaultSkinTrait extends Trait {
  static traitKey = "ChangeDefaultSkin";
  onChCardByLanTt_getDSk(t, e) {
    var a,
      r,
      n,
      i,
      o,
      c,
      u,
      p,
      d = "EN";
    if (1 === (null === (a = this._traitData) || void 0 === a ? void 0 : a.langType)) d = (null === (n = null === (r = this._traitData) || void 0 === r ? void 0 : r.langCode) || void 0 === n ? void 0 : n[0]) || "EN";else if (2 === (null === (i = this._traitData) || void 0 === i ? void 0 : i.langType)) {
      d = "US" === (LoginModel.getInstance().country || "").toUpperCase() ? (null === (c = null === (o = this._traitData) || void 0 === o ? void 0 : o.langCode) || void 0 === c ? void 0 : c[0]) || "EN" : (null === (p = null === (u = this._traitData) || void 0 === u ? void 0 : u.langCode) || void 0 === p ? void 0 : p[1]) || "EN";
    }
    d || (d = "EN");
    d = "l_lanCard" + d;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: d
    });
  }
}