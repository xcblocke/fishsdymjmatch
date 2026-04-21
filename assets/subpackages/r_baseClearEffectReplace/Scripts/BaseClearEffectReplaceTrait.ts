import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("BaseClearEffectReplaceTrait")
export default class BaseClearEffectReplaceTrait extends Trait {
  _currSkData = null;
  _gameType = MjGameType.None;
  _config = {};
  static traitKey = "BaseClearEffectReplace";
  onLoad() {
    var e, r, a;
    super.onLoad.call(this);
    this._config = {
      resBundle: (null === (e = this.traitData) || void 0 === e ? void 0 : e.resBundle) || "r_baseClearEffectReplace",
      skeletonPath: (null === (r = this.traitData) || void 0 === r ? void 0 : r.skeletonPath) || "spine/gameplay_elimination_a",
      animName: (null === (a = this.traitData) || void 0 === a ? void 0 : a.animName) || "in"
    };
  }
  loadSpineResource(t) {
    var e = this,
      r = this._config,
      a = r.resBundle,
      n = r.skeletonPath;
    if (a && n) {
      var i = t;
      if (i && "function" == typeof i.loadRes) {
        this._currSkData = null;
        i.loadRes(n, sp.SkeletonData, a).then(function (t) {
          var r = Array.isArray(t) ? t[0] : t;
          e._currSkData = r || null;
        }).catch(function () {
          e._currSkData = null;
        });
      }
    }
  }
  isGameTypeEnabled() {
    return true;
  }
  onInitViewBhv_crtTls(t, e) {
    var r, a, n, i;
    try {
      this._gameType = (null === (a = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType) || MjGameType.None;
      var o = null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr;
      this.loadSpineResource(o);
    } catch (t) {}
    e();
  }
  onClearEffBhv_changeSkd(t, e) {
    try {
      var r = t.args[0],
        a = this._currSkData;
      a && cc.isValid(a) && r && r.skeletonData !== a && this.isGameTypeEnabled(this._gameType) && (r.skeletonData = a);
    } catch (t) {}
    e();
  }
  onClearEffBhv_getAnimName(t, e) {
    try {
      if (this._currSkData && cc.isValid(this._currSkData) && this.isGameTypeEnabled(this._gameType)) {
        var r = this._config.animName || "in";
        e({
          returnType: TraitCallbackReturnType.jump,
          returnVal: r
        });
        return;
      }
      e();
    } catch (t) {
      e();
    }
  }
}