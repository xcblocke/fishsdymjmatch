import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("MtlClearEffectTrait")
export default class MtlClearEffectTrait extends Trait {
  _currentMaterialId = 0;
  _currSkData = null;
  _isBaseClear = true;
  static traitKey = "MtlClearEffect";
  static BundleName = "r_mtlClearEffect";
  static COLOR_SPECIAL = "Special";
  getCurrMaterialId() {
    var t = UserModel.getInstance().getCurrentGameData().getCardMaterialID();
    t || (t = 0);
    return t;
  }
  onChangeCEff5Trait_setType(t, e) {
    var r = t.args[0];
    this._isBaseClear = 5 == r;
    e();
  }
  onChangeCEffTrait_setType(t, e) {
    var r = t.args[0];
    this._isBaseClear = 5 == r;
    e();
  }
  onChangeCEffTrait_bundle(t, e) {
    var r = t.args[0];
    this._currentMaterialId = this.getCurrMaterialId();
    if (r < 1 || !this.isChangeClear()) e();else {
      var a = this.getBundleName(r);
      if (a) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: a
        });
      } else {
        e();
      }
    }
  }
  onChangeCEff5Trait_bundle(t, e) {
    var r = t.args[0];
    this._currentMaterialId = this.getCurrMaterialId();
    if (r < 1 || !this.isChangeClear()) e();else {
      var a = this.getBundleName(r);
      if (a) {
        e({
          isBreak: true,
          returnType: TraitCallbackReturnType.return,
          returnVal: a
        });
      } else {
        e();
      }
    }
  }
  isChangeClear() {
    this._currentMaterialId = this.getCurrMaterialId();
    var t = DataReader.getByKey(ConfigType.MaterialConfig, this._currentMaterialId);
    return !(!t || 1 != t.ChangeClear);
  }
  getBundleName(t) {
    this._isBaseClear = 5 === t;
    var e = DataReader.getByKey(ConfigType.MaterialConfig, this._currentMaterialId);
    return e && 1 === e.ChangeClear ? e.Color === MtlClearEffectTrait.COLOR_SPECIAL ? 5 === t ? "r_materialCard" + this._currentMaterialId : null : 5 === t ? "l_mtlClear" + e.Color : "r_mtlClear" + e.Color + t : null;
  }
  getAniCfg() {
    var t = DataReader.getByKey(ConfigType.MaterialConfig, this._currentMaterialId),
      e = null;
    t && 1 === t.ChangeClear && (e = t.Color === MtlClearEffectTrait.COLOR_SPECIAL ? "r_materialCard" + this._currentMaterialId : "l_mtlClear" + t.Color);
    return {
      bundleName: e,
      spinePath: "spine/gameplay_elimination_a"
    };
  }
  loadSpine(t) {
    var e,
      r = this,
      a = this.getAniCfg(),
      i = a.bundleName,
      n = a.spinePath;
    this._currSkData = null;
    var o = DataReader.getByKey(ConfigType.MaterialConfig, this._currentMaterialId);
    o && 0 !== o.ChangeClear && i && (null === (e = null == t ? void 0 : t.gameCtr) || void 0 === e || e.loadRes(n, sp.SkeletonData, i).then(function (t) {
      var e = Array.isArray(t) ? t[0] : t;
      r._currSkData = e || null;
    }).catch(function () {
      r._currSkData = null;
    }));
  }
  onInitViewBhv_crtTls(t, e) {
    this._currentMaterialId = this.getCurrMaterialId();
    this.loadSpine(t.ins.context);
    e();
  }
  onChangeBatchBhv_start(t, e) {
    this._currentMaterialId = this.getCurrMaterialId();
    mj.EventManager.emit(EGameEvent.Clear_ClassicChange, this, {
      context: t.ins.context
    });
    this.loadSpine(t.ins.context);
    e();
  }
  onClearEffBhv_changeSkd(t, e) {
    var a = t.args[0];
    cc.isValid(a.skeletonData) || (a.skeletonData = null);
    if (this.isChangeClear()) {
      if (!this._isBaseClear) {
        var i = DataReader.getByKey(ConfigType.MaterialConfig, this._currentMaterialId);
        if (!i || i.Color !== MtlClearEffectTrait.COLOR_SPECIAL) {
          e();
          return;
        }
      }
      if (cc.isValid(this._currSkData)) {
        var n = this._currSkData;
        if (a.skeletonData === n) e();else {
          a.skeletonData = n;
          e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
          });
        }
      } else e();
    } else e();
  }
  onChangeCEffTrait_isGTOpen(t, e) {
    this._currentMaterialId = this.getCurrMaterialId();
    if (this._currentMaterialId) {
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: true
      });
    } else {
      e();
    }
  }
}