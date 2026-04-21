import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2DuoXiaoAdTrait")
export default class Tile2DuoXiaoAdTrait extends Trait {
  _playAdCount = 0;
  static traitKey = "Tile2DuoXiaoAd";
  getLevelLimit() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 2;
  }
  getPlayAdLimit() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.playAdLimit) && void 0 !== e ? e : 1;
  }
  getDuoXiaoCount() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.duoXiaoCount) && void 0 !== e ? e : 2;
  }
  getBombCntDefault() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCntDefault) && void 0 !== e ? e : 2;
  }
  getBombCntAfterWin() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.bombCountAfterWin) && void 0 !== e ? e : 0;
  }
  isMatchGameType(t) {
    return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t));
  }
  enableTrait() {
    var t = UserModel.getInstance().getCurrentGameType();
    return this.isMatchGameType(t);
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onAdMgr_videoSuccess(t, e) {
    var r;
    this.enableTrait() && (null === (r = UserModel.getInstance()) || void 0 === r ? void 0 : r.isInGameView()) && this._playAdCount++;
    e();
  }
  onGsListener_onNewGame(t, e) {
    this.enableTrait() && (this._playAdCount = 0);
    e();
  }
  onGsListener_onReplayGame(t, e) {
    this.enableTrait() && (this._playAdCount = 0);
    e();
  }
  checkCanGen() {
    var t,
      e,
      r = this.getLevelLimit(),
      o = (null === (e = null === (t = UserModel.getInstance()) || void 0 === t ? void 0 : t.getCurrentGameData()) || void 0 === e ? void 0 : e.getLevelId()) || 0;
    return !(r > 0 && o <= r);
  }
  onT2DuoxiaoGenTt_genTypes(t, e) {
    var r = "",
      o = this.getPlayAdLimit();
    if (this.checkCanGen()) if (this._playAdCount < o) r = "" + ETileType.Bomb;else {
      var n = this.getDuoXiaoCount();
      n > 0 && (r = "" + ETileType.DuoxiaoCard);
      this.getBombCntAfterWin() > 0 && (r = r + (n > 0 ? "," : "") + ETileType.Bomb);
    }
    e({
      returnVal: r,
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onDuoxiaoCt_genCountRange(t, e) {
    if (this.enableTrait()) {
      var r = this.getDuoXiaoCount();
      e({
        returnVal: [r, r],
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else e();
  }
  onBombCdTp_bombCount(t, e) {
    if (this.enableTrait()) {
      var r = this.getPlayAdLimit();
      e({
        returnVal: this._playAdCount < r ? this.getBombCntDefault() : this.getBombCntAfterWin(),
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else e();
  }
}