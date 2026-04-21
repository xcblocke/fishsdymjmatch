import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HardLevelNewTrait")
export default class HardLevelNewTrait extends ExtractTrait {
  static traitKey = "HardLevelNew";
  static MAX_CACHE_SIZE = 10;
  onLoad() {
    var t, r, a, i, o, l;
    super.onLoad.call(this);
    var n = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.firstHardLevel) && void 0 !== r ? r : 10;
    this._config = {
      firstHardLevel: n,
      cooldown: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.cooldown) && void 0 !== i ? i : 4,
      hardDeathRate: 4,
      initDeathRate: 1,
      maxNotDieLevel: n - 1,
      useFixedLevel: null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.useFixedLevel) && void 0 !== l && l
    };
  }
  onExtNormLv_getDeathLv(e, t) {
    if (this.checkGameMode()) {
      var r = e.beforReturnVal,
        a = e.args[4],
        i = r;
      if (a === this._config.firstHardLevel) {
        r = "0" + this._config.hardDeathRate;
      } else {
        a <= this._config.maxNotDieLevel && (r = "0" + this._config.initDeathRate);
      }
      if (r !== i) {
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: r
        });
      } else {
        t();
      }
    } else t();
  }
  onExtractTool_isHardUI(e, t) {
    if (this.checkGameMode()) {
      this.handleLabel(e, t, true);
    } else {
      t();
    }
  }
  onExtractTool_isExpertUI(e, t) {
    if (this.checkGameMode()) {
      this.handleLabel(e, t, false);
    } else {
      t();
    }
  }
  onExtractTool_isHardUseFix(e, t) {
    if (this.checkGameMode()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: this._config.useFixedLevel
      });
    } else {
      t();
    }
  }
  handleLabel(e, t, r) {
    var a = e.args[0];
    this.ensureCacheStructure();
    var i = this.getLevelCache(a);
    if (i && void 0 !== i.hardResult && void 0 !== i.expertResult) {
      var o = r ? i.hardResult : i.expertResult;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: o
      });
    } else {
      var l = UserModel.getInstance().getCurrentGameData().getDieResult(),
        s = this.calcShow(a, l, true),
        u = this.calcShow(a, l, false);
      this.setLevelCache(a, s, u);
      if (s) {
        this.localData.lastHardLevelID = a;
        this.localData.lastShowType = 1;
      } else if (u) {
        this.localData.lastHardLevelID = a;
        this.localData.lastShowType = 2;
      }
      var h = r ? s : u;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: h
      });
    }
  }
  @mj.traitEvent("HardLvNew_getLastId")
  getLastHardLevelID() {
    return this.toNumber(this.localData.lastHardLevelID);
  }
  calcShow(e, t, r) {
    if (e === this._config.firstHardLevel) return r;
    if (e <= this._config.maxNotDieLevel) return false;
    var a = this.getLastHardLevelID();
    if (1 !== t) return false;
    if (e > a && a > 0 && e - a <= this._config.cooldown) return false;
    if (e === a) {
      var i = this.toNumber(this.localData.lastShowType);
      if (1 === i) return r;
      if (2 === i) return !r;
    }
    var o = this.toNumber(this.localData.lastShowType);
    return !(0 !== o && 2 !== o || !r) || 1 === o && !r;
  }
  ensureCacheStructure() {
    this.localData.levelCacheMap || (this.localData.levelCacheMap = {});
    this.localData.levelCacheOrder && Array.isArray(this.localData.levelCacheOrder) || (this.localData.levelCacheOrder = []);
  }
  getLevelCache(e) {
    var t,
      r = String(e);
    return null !== (t = this.localData.levelCacheMap[r]) && void 0 !== t ? t : null;
  }
  setLevelCache(e, t, a) {
    var i = String(e),
      o = this.localData.levelCacheOrder,
      l = o.indexOf(e);
    -1 !== l && o.splice(l, 1);
    for (; o.length >= HardLevelNewTrait.MAX_CACHE_SIZE;) {
      var n = o.shift();
      void 0 !== n && delete this.localData.levelCacheMap[String(n)];
    }
    this.localData.levelCacheMap[i] = {
      levelID: e,
      hardResult: t,
      expertResult: a
    };
    o.push(e);
    this.localData.levelCacheMap = this.localData.levelCacheMap;
    this.localData.levelCacheOrder = this.localData.levelCacheOrder;
  }
  toNumber(e, t = 0) {
    if ("number" == typeof e && !isNaN(e)) return e;
    if ("string" == typeof e && "" !== e) {
      var r = Number(e);
      return isNaN(r) ? t : r;
    }
    return t;
  }
}