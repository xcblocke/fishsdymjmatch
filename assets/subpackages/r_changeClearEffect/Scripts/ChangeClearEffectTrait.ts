import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
@mj.trait
@mj.class("ChangeClearEffectTrait")
export default class ChangeClearEffectTrait extends Trait {
  _currSkData = null;
  _selectedType = 1;
  _gameType = MjGameType.None;
  _bundleName = "clear_effect1";
  static traitKey = "ChangeClearEffect";
  onLoad() {
    super.onLoad.call(this);
    this._selectedType = this.resolveType();
    this.registerEvent([{
      event: "T2ClearEffBhv_getAniCfg"
    }]);
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.Clear_ClassicChange] = this.onClassicChange.bind(this);
    return _t;
  }
  getRandomEffect(t) {
    var e = Math.max(1, t || 1);
    return Math.floor(Math.random() * e) + 1;
  }
  resolveType() {
    var t,
      e,
      r = Number((null === (t = this.traitData) || void 0 === t ? void 0 : t.type) || 1);
    if (0 === r) {
      var a = Number((null === (e = this.traitData) || void 0 === e ? void 0 : e.maxType) || 2);
      r = this.getRandomEffect(a);
    }
    (!r || r < 1 || r > 5) && (r = 1);
    return r;
  }
  @mj.traitEvent("ChangeCEffTrait_bundle")
  getBundleName(t) {
    return "clear_effect" + t;
  }
  @mj.traitEvent("ChangeCEffTrait_loadSpine")
  loadSpine(t, e) {
    var r = this;
    if (5 !== t) {
      this._selectedType = t;
      var a = this.getBundleName(this._selectedType);
      this._bundleName = a;
      var n = e;
      if (n && "function" == typeof n.loadRes) {
        this._currSkData = null;
        n.loadRes("spine/gameplay_elimination_a", sp.SkeletonData, a).then(function (t) {
          var e = Array.isArray(t) ? t[0] : t;
          r._currSkData = e || null;
        }).catch(function () {
          r._currSkData = null;
        });
      }
    } else this._currSkData = null;
  }
  @mj.traitEvent("ChangeCEffTrait_isGTOpen")
  isGameTypeOpen(t) {
    return t === MjGameType.Normal;
  }
  @mj.traitEvent("ChangeCEffTrait_setType")
  setType(t) {
    this._selectedType = t;
  }
  @mj.traitEvent("ChangeCEffTrait_getType")
  getType() {
    return this._selectedType;
  }
  @mj.traitEvent("ChangeCEffTrait_getSKDt")
  getCurrSkData() {
    return this._currSkData;
  }
  onClassicChange(t, e) {
    var r;
    this.loadSpine(this._selectedType, null === (r = null == e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameCtr);
  }
  onInitViewBhv_crtTls(t, e) {
    var r, a, n, i;
    this._gameType = null === (a = null === (r = t.ins) || void 0 === r ? void 0 : r._context) || void 0 === a ? void 0 : a.gameType;
    0 == this._traitData.type && (this._selectedType = this.getRandomEffect(4));
    this.setType(this._selectedType);
    this.loadSpine(this._selectedType, null === (i = null === (n = t.ins) || void 0 === n ? void 0 : n.context) || void 0 === i ? void 0 : i.gameCtr);
    e();
  }
  onClearEffBhv_changeSkd(t, e) {
    var r = t.args[0],
      a = this._currSkData;
    a && cc.isValid(a) && r && r.skeletonData !== a && this.isGameTypeOpen(this._gameType) && (r.skeletonData = a);
    e();
  }
  onClearEffBhv_getAnimName(t, e) {
    var r = t.args[0],
      a = t.args[1],
      n = "in";
    if (this.isGameTypeOpen(this._gameType) && this._currSkData && cc.isValid(this._currSkData)) {
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
  }
  getAnimNameByType(t, e) {
    var r = "in";
    if (1 == t) {
      r = Math.random() < 0.5 ? "in_1" : "in_2";
    } else {
      4 == t && (r = e.x < -75 ? "in_left" : e.x > 75 ? "in_right3" : "in_middle");
    }
    return r;
  }
  onT2ClearEffBhv_getAniCfg(t, e) {
    if (this.getCurrSkData()) {
      var r = this.getType(),
        a = this.getBundleName(r),
        n = "spine/gameplay_elimination_a";
      "mainRes" === a && (n = "spine/clear/gameplay_elimination_a");
      var i = this.getAnimNameByType(r, t.args[1]);
      e({
        returnType: TraitCallbackReturnType.jump,
        returnVal: {
          path: n,
          bundle: a,
          animName: i
        }
      });
    } else e();
  }
}