import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import LoginModel from '../../../Scripts/gamePlay/login/model/LoginModel';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var p = /^([btWAC][1-9]|Z_(dong|nan|xi|bei|bai|fa|zhong)|H_(mei|lan|zhu|ju)|J_(chun|xia|qiu|dong))$/;
@mj.trait
@mj.class("ChangeDefCardSkinTrait")
export default class ChangeDefCardSkinTrait extends Trait {
  _currSkin = null;
  static traitKey = "ChangeDefCardSkin";
  skinBundle(t) {
    var r,
      e,
      n,
      i,
      a,
      o = null === (r = this._traitData) || void 0 === r ? void 0 : r.skin,
      s = null,
      l = (LoginModel.getInstance().country || "").toUpperCase(),
      p = "US" === l;
    if (Array.isArray(o)) {
      var f = p ? o[0] || "" : o[1] || "";
      "" == f && (f = null);
      s = f;
    } else s = o;
    var d = null === (e = this._traitData) || void 0 === e ? void 0 : e.types;
    if (d && d.length >= 2) {
      var y = t;
      y || (y = UserModel.getInstance().getCurrentGameType());
      var h = d[p ? 0 : 1];
      s = this.isMainType(y) ? h[0] : h[1];
    }
    if ((null === (n = this._traitData) || void 0 === n ? void 0 : n.countrys) && (null === (i = this._traitData) || void 0 === i ? void 0 : i.countrys.length) > 0) {
      for (var _ = null === (a = this._traitData) || void 0 === a ? void 0 : a.countrys, v = null, g = 0; g < _.length; g++) if (_[g][0].toUpperCase() === l) {
        v = _[g][1];
        break;
      }
      v && (s = v);
    }
    return s || null;
  }
  isMainType(t) {
    return t == MjGameType.Normal || t == MjGameType.Tile2Normal;
  }
  onLoad() {
    super.onLoad.call(this);
    Promise.resolve().then(function () {});
  }
  onMainGameCtrl_initRes(t, r) {
    var e = t.ins;
    this._currSkin = this.skinBundle(e.gameType);
    this._currSkin && e && "function" == typeof e.addPreloadRes && e.addPreloadRes("SpriteAtlas", this._currSkin + ":atlas/cardIcon");
    r();
  }
  onCardUtil_atlasPathBundle(t, r) {
    var e;
    if (this._currSkin) {
      var n = null === (e = t.args) || void 0 === e ? void 0 : e[0];
      if (n && p.test(n)) {
        r({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: {
            path: "atlas/cardIcon/" + n,
            bundleName: this._currSkin,
            fromAtlas: true
          }
        });
      } else {
        r();
      }
    } else r();
  }
}