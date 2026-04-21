import DynamicCurve from '../../../Scripts/types/DynamicCurve';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DynamicCurveTrait")
export default class DynamicCurveTrait extends Trait {
  static traitKey = "DynamicCurve";
  get isOpen() {
    var e, t;
    return null === (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.isOpen) || void 0 === t || t;
  }
  get isPreLoad() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.preLoad) && void 0 !== t && t;
  }
  get forceLoaded() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.forceLoaded) && void 0 !== t && t;
  }
  onDCMgr_isEnabled(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: this.isOpen
    });
  }
  onLoginM_enterGame(e, t) {
    if (this.isOpen) {
      DynamicCurve.instance.init();
      if (this.isPreLoad) {
        if (this.forceLoaded) DynamicCurve.instance.preLoadLevelLibrary().then(function () {
          t();
        }).catch(function () {
          t();
        });else {
          DynamicCurve.instance.preLoadLevelLibrary();
          t();
        }
      } else t();
    } else t();
  }
}