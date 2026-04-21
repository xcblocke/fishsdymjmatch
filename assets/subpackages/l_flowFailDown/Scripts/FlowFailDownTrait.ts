import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("FlowFailDownTrait")
export default class FlowFailDownTrait extends Trait {
  _downInterval = 4;
  _initialStage = 1;
  _ffdCurLevel = 0;
  _ffdPrevLevel = 0;
  _ffdNextLevel = -1;
  static traitKey = "FlowFailDown";
  onLoad() {
    var t, a;
    super.onLoad.call(this);
    this._downInterval = null !== (t = this._traitData.downInterval) && void 0 !== t ? t : 4;
    this._initialStage = null !== (a = this._traitData.initialStage) && void 0 !== a ? a : 1;
    this.ensureLocalData();
  }
  ensureLocalData() {
    this.isEmptyField(this.localData.isDeadNoRevive) && (this.localData.isDeadNoRevive = false);
    this.isEmptyField(this.localData.curLevelId) && (this.localData.curLevelId = 0);
  }
  isEmptyField(e) {
    return null == e || "" === e;
  }
  onGsListener_onNewGame(e, t) {
    var a,
      r = null === (a = e.args) || void 0 === a ? void 0 : a[0];
    if (r === MjGameType.Tile2Normal) {
      var i = UserModel.getInstance().getGameDataByGameType(r);
      if (i) {
        this.localData.isDeadNoRevive = false;
        this.localData.curLevelId = i.getLevelId();
        t();
      } else t();
    } else t();
  }
  onTile2FailVw_replay(e, t) {
    this.localData.isDeadNoRevive = true;
    t();
  }
  onFlwLv_getResolveStg(e, t) {
    var a,
      r,
      i = null === (a = e.args) || void 0 === a ? void 0 : a[0],
      o = null === (r = e.args) || void 0 === r ? void 0 : r[1];
    if (i <= 0 || !o) t();else {
      e.args[0] = this.getFixedLevel(i, o);
      t();
    }
  }
  getFixedLevel(e, t) {
    var a = e;
    if (this._ffdCurLevel > 0) a = this._ffdCurLevel + (e - this._ffdPrevLevel);else {
      var r = Math.max(0, Math.min(t.length - 1, this._initialStage - 1));
      a = t.slice(0, r).reduce(function (e, t) {
        var a;
        return e + (null !== (a = t.levelsInStage) && void 0 !== a ? a : 10);
      }, 0) + e;
    }
    return a;
  }
  onFlwLv_fixLevelStage(e, t) {
    var a,
      r,
      i,
      o = null === (a = e.args) || void 0 === a ? void 0 : a[0],
      n = null === (r = e.args) || void 0 === r ? void 0 : r[1],
      l = null === (i = e.args) || void 0 === i ? void 0 : i[2];
    if (o <= 0 || !n || !l) t();else {
      var v = this.fixLevelStage(o, n, l);
      if (v.hasDown) {
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true,
          returnVal: {
            stageIdx: v.stageIdx,
            levelInStage: v.levelInStage,
            posInStage: v.posInStage
          }
        });
      } else {
        t();
      }
    }
  }
  fixLevelStage(e, t, a) {
    var r;
    if (e <= this._ffdNextLevel) return {
      stageIdx: a.stageIdx,
      levelInStage: a.levelInStage,
      posInStage: a.posInStage,
      hasDown: false
    };
    if (!this.localData.isDeadNoRevive) return {
      stageIdx: a.stageIdx,
      levelInStage: a.levelInStage,
      posInStage: a.posInStage,
      hasDown: false
    };
    var i = this.getFixedLevel(e, t),
      o = a.stageIdx,
      n = Math.max(0, o - 1),
      l = (i - 1) % (null !== (r = t[n].levelsInStage) && void 0 !== r ? r : 10) + 1,
      s = t.slice(0, n).reduce(function (e, t) {
        var a;
        return e + (null !== (a = t.levelsInStage) && void 0 !== a ? a : 10);
      }, 0) + l;
    this._ffdCurLevel = s;
    this._ffdPrevLevel = e;
    this.localData.isDeadNoRevive = false;
    this._ffdNextLevel = e + this._downInterval;
    var v = this.resolveStage(s, t);
    return {
      stageIdx: v.stageIdx,
      levelInStage: v.levelInStage,
      posInStage: v.posInStage,
      hasDown: true
    };
  }
  resolveStage(e, t) {
    for (var a, r = Math.max(0, e - 1), i = 0; i < t.length; i++) {
      var o = null !== (a = t[i].levelsInStage) && void 0 !== a ? a : 10;
      if (r < o) return {
        stageIdx: i,
        levelInStage: r + 1,
        posInStage: o > 1 ? r / (o - 1) : 0,
        overflow: 0
      };
      r -= o;
    }
    return {
      stageIdx: t.length - 1,
      levelInStage: 0,
      posInStage: 1,
      overflow: r + 1
    };
  }
}