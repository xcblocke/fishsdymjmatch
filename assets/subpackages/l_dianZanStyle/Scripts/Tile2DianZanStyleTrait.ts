import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2DianZanStyleTrait")
export default class Tile2DianZanStyleTrait extends Trait {
  static traitKey = "Tile2DianZanStyle";
  get styleCount() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.styleCount) || 5;
  }
  get switchInterval() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.switchInterval) || 5;
  }
  get animPrefix() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.animPrefix) || "in_";
  }
  get bundleName() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spineBundle) || "l_dianZanStyle";
  }
  get spinePath() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.spinePath) || "spine/dianzan_styles";
  }
  get scale() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.scale) || 1;
  }
  get gameTypes() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.gameTypes) || [];
  }
  get levelLimit() {
    var t;
    return (null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) || 1;
  }
  getCurrentGameType() {
    return UserModel.getInstance().getCurrentGameType();
  }
  onLoad() {
    super.onLoad.call(this);
  }
  isMatchGameType(t) {
    var e = UserModel.getInstance().getCurrentGameData();
    if (1 === ((null == e ? void 0 : e.getLevelId()) || 0)) return false;
    var a = this.gameTypes;
    return !a || 0 === a.length || a.includes(t);
  }
  getStyleData() {
    this.localData.modeData || (this.localData.modeData = {});
    var t = this.getCurrentGameType();
    if (!this.localData.modeData[t]) {
      this.localData.modeData[t] = {
        gameCount: 0,
        currentGameStyleIndex: 0,
        lastPlayedStyleIndex: 0
      };
      this.localData.modeData = this.localData.modeData;
    }
    return this.localData.modeData[t];
  }
  saveStyleData(t) {
    var e = this.getCurrentGameType();
    this.localData.modeData[e] = t;
    this.localData.modeData = this.localData.modeData;
  }
  onT2DianZCheck_isDianZan(t, e) {
    var a,
      r = (null === (a = UserModel.getInstance().getCurrentGameData()) || void 0 === a ? void 0 : a.getLevelId()) || 0;
    e({
      isBreak: true,
      returnType: TraitCallbackReturnType.return,
      returnVal: r > this.levelLimit
    });
  }
  onGsListener_onNewGame(t, e) {
    this.isMatchGameType(this.getCurrentGameType()) && this.increaseGameCount();
    e();
  }
  onGsListener_onReplayGame(t, e) {
    this.isMatchGameType(this.getCurrentGameType()) && this.increaseGameCount();
    e();
  }
  increaseGameCount() {
    var t = this.getStyleData();
    t.gameCount += 1;
    if (t.currentGameStyleIndex > 0) {
      t.lastPlayedStyleIndex = t.currentGameStyleIndex;
      t.currentGameStyleIndex = 0;
    }
    this.saveStyleData(t);
  }
  onTile2DZanBhv_spUrl(t, e) {
    var a;
    if (this.isMatchGameType(this.getCurrentGameType())) {
      null === (a = t.args) || void 0 === a || a[0];
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.spinePath
      });
    } else e();
  }
  onTile2DZanBhv_spBundle(t, e) {
    var a;
    if (this.isMatchGameType(this.getCurrentGameType())) {
      null === (a = t.args) || void 0 === a || a[0];
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.bundleName
      });
    } else e();
  }
  onTile2DZanBhv_scale(t, e) {
    if (this.isMatchGameType(this.getCurrentGameType())) {
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: this.scale
      });
    } else {
      e();
    }
  }
  onTile2DZanBhv_animName(t, e) {
    var a;
    if (this.isMatchGameType(this.getCurrentGameType())) {
      null === (a = t.args) || void 0 === a || a[0], this.getStyleData().lastPlayedStyleIndex;
      var r = this.getNextStyleIndex(),
        n = "" + this.animPrefix + r;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return,
        returnVal: n
      });
    } else e();
  }
  getNextStyleIndex() {
    var t,
      e = this.getStyleData();
    if (0 !== e.currentGameStyleIndex) return e.currentGameStyleIndex;
    t = e.gameCount % this.switchInterval == 1 || 0 === e.lastPlayedStyleIndex ? this.randomStyleExcludeLast(e) : e.lastPlayedStyleIndex;
    e.currentGameStyleIndex = t;
    this.saveStyleData(e);
    return t;
  }
  randomStyleExcludeLast(t) {
    var e = (t || this.getStyleData()).lastPlayedStyleIndex || 0,
      a = Array.from({
        length: this.styleCount
      }, function (t, e) {
        return e + 1;
      }),
      r = a.indexOf(e);
    -1 !== r && a.splice(r, 1);
    return a[Math.floor(Math.random() * a.length)];
  }
}