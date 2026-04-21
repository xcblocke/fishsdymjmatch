import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("Tile2DuoXiaoWinStreakTrait")
export default class Tile2DuoXiaoWinStreakTrait extends Trait {
  _winStreak = 0;
  static traitKey = "Tile2DuoXiaoWinStreak";
  getLevelLimit() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.levelLimit) && void 0 !== e ? e : 2;
  }
  getWinStreakLimit() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.winStreakLimit) && void 0 !== e ? e : 2;
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
  setWinStreak(t) {
    this._winStreak = t;
  }
  getWinStreak() {
    return this._winStreak;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  enableTrait() {
    var t = UserModel.getInstance().getCurrentGameType();
    return this.isMatchGameType(t);
  }
  isMatchGameType(t) {
    return !(this.traitData.gameTypes && this.traitData.gameTypes.length > 0 && !this.traitData.gameTypes.includes(t));
  }
  onTile2FailBhv_start(t, e) {
    this.enableTrait() && this.setWinStreak(0);
    e();
  }
  onTile2WinBhv_start(t, e) {
    this.enableTrait() && this.setWinStreak(this.getWinStreak() + 1);
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
    var r = "";
    if (this.checkCanGen()) {
      if (this.getWinStreak() < this.getWinStreakLimit()) r = "" + ETileType.Bomb;else {
        var o = this.getDuoXiaoCount();
        o > 0 && (r = "" + ETileType.DuoxiaoCard);
        this.getBombCntAfterWin() > 0 && (r = r + (o > 0 ? "," : "") + ETileType.Bomb);
      }
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
      e({
        returnVal: this.getWinStreak() < this.getWinStreakLimit() ? this.getBombCntDefault() : this.getBombCntAfterWin(),
        returnType: TraitCallbackReturnType.return,
        isBreak: true
      });
    } else e();
  }
}