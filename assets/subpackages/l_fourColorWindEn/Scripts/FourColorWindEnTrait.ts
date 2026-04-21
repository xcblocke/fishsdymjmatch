import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("FourColorWindEnTrait")
export default class FourColorWindEnTrait extends Trait {
  static traitKey = "FourColorWindEn";
  static BUNDLE_NAME = "l_fourColorWindEn";
  static WIND_CARDS = ["Z_dong", "Z_nan", "Z_xi", "Z_bei"];
  onLoad() {
    super.onLoad.call(this);
  }
  _getFlowerSeriesID() {
    var r, t, e;
    try {
      var o = null === (r = mj.getClassByName("FlowerCardSeriesTrait")) || void 0 === r ? void 0 : r.getInstance();
      return o && o.eventEnabled && null !== (e = null === (t = o.getCurrentModeSeriesId) || void 0 === t ? void 0 : t.call(o)) && void 0 !== e ? e : -1;
    } catch (r) {
      return -1;
    }
  }
  onMainGameCtrl_initRes(r, t) {
    try {
      if (this._getFlowerSeriesID() <= 0) {
        var o = r.ins;
        if (o && "function" == typeof o.addPreloadRes) {
          var n = FourColorWindEnTrait.BUNDLE_NAME + ":atlas/cardIcon";
          o.addPreloadRes("SpriteAtlas", n);
        }
      }
    } catch (r) {
      console.error("[" + FourColorWindEnTrait.traitKey + "] 预加载图集失败: " + (null == r ? void 0 : r.message));
    }
    t();
  }
  onCardRepNonUs_tarResCfg(r, t) {
    var o, n;
    try {
      var i = null === (o = r.args) || void 0 === o ? void 0 : o[0],
        l = null === (n = r.args) || void 0 === n ? void 0 : n[1];
      if (FourColorWindEnTrait.WIND_CARDS.includes(i)) {
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            bundleName: FourColorWindEnTrait.BUNDLE_NAME,
            path: l
          }
        });
        return;
      }
      t();
    } catch (r) {
      console.error("[" + FourColorWindEnTrait.traitKey + "] 劫持资源配置失败: " + (null == r ? void 0 : r.message));
      t();
    }
  }
  onCardUtil_atlasPathBundle(r, t) {
    var o;
    try {
      var n = null === (o = r.args) || void 0 === o ? void 0 : o[0];
      if (FourColorWindEnTrait.WIND_CARDS.includes(n)) {
        var i = "atlas/cardIcon/" + n;
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            path: i,
            bundleName: FourColorWindEnTrait.BUNDLE_NAME,
            fromAtlas: true
          }
        });
        return;
      }
      t();
    } catch (r) {
      console.error("[" + FourColorWindEnTrait.traitKey + "] 劫持图片失败: " + (null == r ? void 0 : r.message));
      t();
    }
  }
}