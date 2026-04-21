import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("ChangeClearEffect5Trait")
export default class ChangeClearEffect5Trait extends Trait {
  _currSkData = null;
  _selectedType = 1;
  _isGameOpen = false;
  static traitKey = "ChangeClearEffect5";
  onLoad() {
    super.onLoad.call(this);
    this._selectedType = this.getRandomEffect();
    this.registerEvent([{
      event: "ChangeCEffTrait_bundle"
    }, {
      event: "ChangeCEffTrait_getType"
    }, {
      event: "ChangeCEffTrait_getSKDt"
    }]);
  }
  @mj.traitEvent("ChangeCEff5Trait_bundle")
  getBundleName() {
    var t = this._selectedType;
    return 5 === t ? "mainRes" : "clear_effect" + t;
  }
  @mj.traitEvent("ChangeCEff5Trait_setType")
  setType(t) {
    this._selectedType = t;
  }
  onChangeCEffTrait_bundle(t, e) {
    var r = this.getBundleName();
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: r
    });
  }
  onChangeCEffTrait_getType(t, e) {
    var r = this._selectedType;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: r
    });
  }
  onChangeCEffTrait_getSKDt(t, e) {
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.jump,
      returnVal: this._currSkData
    });
  }
  onChangeCEffTrait_loadSpine(t, e) {
    var r = this;
    this._isGameOpen = t.ins.isGameTypeOpen(t.ins._gameType);
    var a = t.args[0],
      n = t.args[1];
    0 == this._traitData.type && (a = this.getRandomEffect());
    this.setType(a);
    this._selectedType = a;
    var i = this.getBundleName(),
      o = "spine/gameplay_elimination_a";
    "mainRes" === i && (o = "spine/clear/gameplay_elimination_a");
    var s = n;
    if (s && "function" == typeof s.loadRes) {
      this._currSkData = null;
      s.loadRes(o, sp.SkeletonData, i).then(function (t) {
        var e = Array.isArray(t) ? t[0] : t;
        r._currSkData = e || null;
      }).catch(function () {
        r._currSkData = null;
      });
      e({
        returnType: TraitCallbackReturnType.jump
      });
    } else e();
  }
  getRandomEffect() {
    var t = Math.random() > 0.5 ? 5 : 0;
    0 == t && (t = Math.floor(4 * Math.random()) + 1);
    return t;
  }
  onClearEffBhv_changeSkd(t, e) {
    if (0 == this._traitData.type) {
      var r = t.args[0],
        a = this._currSkData;
      a && cc.isValid(a) && r && r.skeletonData !== a && this._isGameOpen && (r.skeletonData = a);
      e();
    } else e();
  }
  onClearEffBhv_getAnimName(t, e) {
    if (0 == this._traitData.type) {
      var r = t.args[0],
        a = t.args[1],
        n = "in";
      if (this._isGameOpen && this._currSkData && cc.isValid(this._currSkData)) {
        if (1 == this._selectedType) {
          n = Math.random() < 0.5 ? "in_1" : "in_2";
        } else {
          4 == this._selectedType && (n = a.x < -75 ? "in_left" : a.x > 75 ? "in_right3" : "in_middle");
        }
      } else {
        n = r ? "in_1" : "in";
      }
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: n
      });
    } else e();
  }
}