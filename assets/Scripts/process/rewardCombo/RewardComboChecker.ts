import UserModel from '../../gamePlay/user/UserModel';
import { BaseCoreObject } from '../../BaseCoreObject';
export class RewardComboChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  shouldTriggerRewardCombo() {
    var e = this.context.getGameData().getLevelId();
    if (1 === e) return false;
    var t = this.getTriggerLevelRate(e);
    return !(t <= 0) && Math.random() <= t;
  }
  @mj.traitEvent("RwdComboChk_lvMult")
  getLevelMult() {
    return 4;
  }
  @mj.traitEvent("RwdComboChk_getTrigRate")
  getTriggerLevelRate(e) {
    return e % this.getLevelMult() == 0 ? this.getLevelMultRate() : this.getOtherLevelRate();
  }
  calculateTriTileCnt(e) {
    var t = this.getCountRates(),
      o = t[Math.floor(Math.random() * t.length)],
      n = Math.floor(e * o);
    return this.getMinEvenNumber(n);
  }
  getMinEvenNumber(e) {
    return e % 2 == 0 ? e : e + 1;
  }
  @mj.traitEvent("RwdComboChk_cntRt")
  getCountRates() {
    return [0.2, 0.3];
  }
  @mj.traitEvent("RwdComboChk_lvMultRt")
  getLevelMultRate() {
    return 1;
  }
  @mj.traitEvent("RwdComboChk_othLvRt")
  getOtherLevelRate() {
    return 0.3;
  }
  @mj.traitEvent("RwdComboChk_sTriNow")
  shouldTriNow() {
    if (!UserModel.getInstance().isGuideFinished()) return false;
    switch (this._context.getGameData().getCurLvCanTriRewardCombo()) {
      case 0:
        var e = this.shouldTriggerRewardCombo();
        this._context.getGameData().setCurLvCanTriRewardCombo(e ? 1 : 2);
        if (!e) return false;
        break;
      case 1:
        break;
      case 2:
        return false;
    }
    var t = this._context.getTileMapObject().getCurTilesCnt(),
      o = 2 * this._context.getGameData().getCurLevelComboMaxLimit(),
      n = 0,
      i = this._context.getGameData().getRewardComboTriTileCnt();
    if (0 !== i) n = i;else {
      n = this.calculateTriTileCnt(o);
      this._context.getGameData().setRewardComboTriTileCnt(n);
    }
    return t <= n;
  }
}