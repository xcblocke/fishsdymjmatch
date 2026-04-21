import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
var u = /^([btWAC][1-9]|Z_(dong|nan|xi|bei|bai|fa|zhong)|H_(mei|lan|zhu|ju)|J_(chun|xia|qiu|dong))$/;
var c = [45, 95, 145, 195];
var p = ["l_lanCardEN2", "l_lanCardFLOWER1", "l_lanCardEN", "l_lanCardBLOCKMJ"];
@mj.trait
@mj.class("ChangeLoopCardSkinTrait")
export default class ChangeLoopCardSkinTrait extends Trait {
  _cfg = {};
  static traitKey = "ChangeLoopCardSkin";
  onLoad() {
    var e = this;
    super.onLoad.call(this);
    this._cfg = this._traitData || {};
    Promise.resolve().then(function () {
      e.registerEvent([{
        event: "CardUtil_skinBundle"
      }]);
    });
  }
  onCardUtil_skinBundle(t, e) {
    var r,
      n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
    if (n && u.test(n)) {
      var a = this._getLevelId(),
        i = this._bundleForMainLevel(a) || "mainRes";
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.jump,
        returnVal: i
      });
    } else e();
  }
  onMainGameCtrl_initRes(t, e) {
    var n;
    try {
      var a = this._getLevelId(),
        i = null !== (n = this._cfg.levelCaps) && void 0 !== n ? n : c,
        o = (this._levelInCycle(a, i), this._bundleForMainLevel(a));
      o && t.ins && "function" == typeof t.ins.addPreloadRes && t.ins.addPreloadRes("SpriteAtlas", o + ":atlas/cardIcon");
    } catch (t) {
      console.error("[" + ChangeLoopCardSkinTrait.traitKey + "] initRes " + (null == t ? void 0 : t.message));
    }
    e();
  }
  onCardUtil_atlasPathBundle(t, e) {
    var n;
    try {
      var a = null === (n = t.args) || void 0 === n ? void 0 : n[0];
      if (!a || !u.test(a)) {
        e();
        return;
      }
      var i = this._getLevelId(),
        o = this._bundleForMainLevel(i);
      if (!o) {
        e();
        return;
      }
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: {
          path: "atlas/cardIcon/" + a,
          bundleName: o,
          fromAtlas: true
        }
      });
    } catch (t) {
      console.error("[" + ChangeLoopCardSkinTrait.traitKey + "] atlasPathBundle " + (null == t ? void 0 : t.message));
      e();
    }
  }
  _bundleForMainLevel(t) {
    var e,
      r,
      n = null !== (e = this._cfg.skinBundles) && void 0 !== e ? e : p;
    if (!n.length) return null;
    for (var a = null !== (r = this._cfg.levelCaps) && void 0 !== r ? r : c, i = this._levelInCycle(t, a), o = n.length - 1, l = Math.min(a.length, o), s = 0; s < a.length; s++) if (i <= a[s]) {
      l = Math.min(s, o);
      break;
    }
    return n[l];
  }
  _levelInCycle(t, e) {
    var r = e.length > 0 ? e[e.length - 1] : 195;
    return r <= 0 ? Math.max(1, t) : (((t <= 0 ? 1 : t) - 1) % r + r) % r + 1;
  }
  _getLevelId() {
    var t = UserModel.getInstance().getMainGameData(),
      e = 1;
    t && (e = t.getLevelId());
    return e;
  }
}