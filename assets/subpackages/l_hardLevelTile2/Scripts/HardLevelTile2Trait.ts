import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("HardLevelTile2Trait")
export default class HardLevelTile2Trait extends Trait {
  static traitKey = "HardLevelTile2";
  static MAX_CACHE_SIZE = 10;
  onLoad() {
    var t, r, a, i;
    super.onLoad.call(this);
    var l = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.firstHardLevel) && void 0 !== r ? r : 10;
    this._config = {
      firstHardLevel: l,
      cooldown: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.cooldown) && void 0 !== i ? i : 4
    };
  }
  onExtractTool_isHardUI(e, t) {
    if (this.isTile2Mode()) {
      this.handleLabel(e, t, true);
    } else {
      t();
    }
  }
  onExtractTool_isExpertUI(e, t) {
    if (this.isTile2Mode()) {
      this.handleLabel(e, t, false);
    } else {
      t();
    }
  }
  onExtractTool_isHardUseFix(e, t) {
    if (this.isTile2Mode()) {
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: false
      });
    } else {
      t();
    }
  }
  isTile2Mode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Tile2Normal;
  }
  handleLabel(e, t, r) {
    var a = e.args[0];
    this.ensureCacheStructure();
    var i = this.getLevelCache(a);
    if (i && void 0 !== i.hardResult && void 0 !== i.expertResult) {
      var l = r ? i.hardResult : i.expertResult;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: l
      });
    } else {
      var o = UserModel.getInstance().getCurrentGameData().getDieResult(),
        c = this.calcShow(a, o, true),
        u = this.calcShow(a, o, false);
      this.setLevelCache(a, c, u);
      if (c) {
        this.localData.lastHardLevelID = a;
        this.localData.lastShowType = 1;
      } else if (u) {
        this.localData.lastHardLevelID = a;
        this.localData.lastShowType = 2;
      }
      var p = r ? c : u;
      t({
        returnType: TraitCallbackReturnType.return,
        isBreak: true,
        returnVal: p
      });
    }
  }
  @mj.traitEvent("HardLvT2_getLastId")
  getLastHardLevelID() {
    return this.toNumber(this.localData.lastHardLevelID);
  }
  calcShow(e, t, r) {
    if (e < this._config.firstHardLevel) return false;
    if (e === this._config.firstHardLevel) return r;
    var a = this.getLastHardLevelID();
    if (1 !== t) return false;
    if (e > a && a > 0 && e - a <= this._config.cooldown) return false;
    if (e === a) {
      var i = this.toNumber(this.localData.lastShowType);
      if (1 === i) return r;
      if (2 === i) return !r;
    }
    var l = this.toNumber(this.localData.lastShowType);
    return !(0 !== l && 2 !== l || !r) || 1 === l && !r;
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
      l = this.localData.levelCacheOrder,
      o = l.indexOf(e);
    -1 !== o && l.splice(o, 1);
    for (; l.length >= HardLevelTile2Trait.MAX_CACHE_SIZE;) {
      var n = l.shift();
      void 0 !== n && delete this.localData.levelCacheMap[String(n)];
    }
    this.localData.levelCacheMap[i] = {
      levelID: e,
      hardResult: t,
      expertResult: a
    };
    l.push(e);
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