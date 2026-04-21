import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FlowFailPopupTrait")
export default class FlowFailPopupTrait extends Trait {
  static traitKey = "FlowFailPopup";
  onLoad() {
    var a, e, i;
    super.onLoad.call(this);
    this._introLevels = null !== (a = this._traitData.introLevels) && void 0 !== a ? a : 10;
    this._defaultStage = null !== (e = this._traitData.defaultStage) && void 0 !== e ? e : 2;
    this._initialStage = null !== (i = this._traitData.initialStage) && void 0 !== i ? i : this._defaultStage;
    if (void 0 === this.localData.ffpShown || null === this.localData.ffpShown) {
      this.localData.ffpShown = false;
      this.localData.ffpShown = this.localData.ffpShown;
    }
    if (!this.localData.ffpStage) {
      this.localData.ffpStage = this._defaultStage;
      this.localData.ffpStage = this.localData.ffpStage;
    }
  }
  onTile2FailVw_show(t, a) {
    if (!this.localData.ffpShown && UserModel.getInstance().isGuideFinished()) {
      this.localData.ffpShown = true;
      this.localData.ffpShown = this.localData.ffpShown;
    }
    a();
  }
  _shouldBlockDynamic(t) {
    return !(!UserModel.getInstance().isGuideFinished() || t > 0 && t <= this._introLevels + 1 || this.localData.ffpShown);
  }
  onT2DynStr_isDyn(t, a) {
    var e,
      i,
      o = t.args[0],
      l = (null === (i = null === (e = null == o ? void 0 : o.gameData) || void 0 === e ? void 0 : e.getLevelId) || void 0 === i ? void 0 : i.call(e)) || 0;
    if (this._shouldBlockDynamic(l)) {
      a({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: false
      });
    } else {
      a();
    }
  }
  onT2DynStr_extract(t, a) {
    var e,
      i,
      o = t.args[0],
      l = (null === (i = null === (e = null == o ? void 0 : o.gameData) || void 0 === e ? void 0 : e.getLevelId) || void 0 === i ? void 0 : i.call(e)) || 0;
    if (this._shouldBlockDynamic(l)) {
      a({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: Promise.resolve(null)
      });
    } else {
      a();
    }
  }
  onFlwLv_getAbilStg(t, a) {
    var e = t.args[0] || 0;
    if (e > 0 && e <= this._introLevels) {
      this.localData.ffpShown = false;
      this.localData.ffpShown = this.localData.ffpShown;
      a();
    } else if (e !== this._introLevels + 1) {
      this._evaluateFailPopup();
      var i = this.localData.ffpStage || this._defaultStage;
      a({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: i - 1
      });
    } else {
      this.localData.ffpStage = this._initialStage;
      this.localData.ffpStage = this.localData.ffpStage;
      this.localData.ffpShown = false;
      this.localData.ffpShown = this.localData.ffpShown;
      a({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._initialStage - 1
      });
    }
  }
  _evaluateFailPopup() {
    this.localData.ffpShown;
    this.localData.ffpShown = false;
    this.localData.ffpShown = this.localData.ffpShown;
    this.localData.ffpStage || this._defaultStage;
    var t = this._defaultStage;
    this.localData.ffpStage = t;
    this.localData.ffpStage = this.localData.ffpStage;
  }
}