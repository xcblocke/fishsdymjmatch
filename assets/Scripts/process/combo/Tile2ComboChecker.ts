import UserModel from '../../gamePlay/user/UserModel';
import { BaseCoreObject } from '../../BaseCoreObject';
import { ETile2SlotType } from '../../core/simulator/constant/GameTypeEnums';
export class Tile2ComboChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  getComboLimit() {
    return 5;
  }
  getBreakLimit() {
    return 1;
  }
  checkIsComboState(e) {
    return !!UserModel.getInstance().isGuideFinished() && e >= this.getComboLimit();
  }
  checkIsBreakComboState(e) {
    return e >= this.getBreakLimit();
  }
  getComboDisplayThresholds() {
    return [5, 10, 15, 20, 30, 40, 50];
  }
  canShowComboDisplay(e) {
    return this.getComboDisplayThresholds().includes(e);
  }
  getScreenEdgeThresholds() {
    return [5, 15, 30];
  }
  canShowScreenEdge(e) {
    return this.context.getTile2SlotType() === ETile2SlotType.Slot4 ? e > 0 && e % 5 == 0 : this.getScreenEdgeThresholds().includes(e);
  }
  getReachedScreenEdgeThreshold(e) {
    for (var t = this.getScreenEdgeThresholds(), o = t.length - 1; o >= 0; o--) if (e >= t[o]) return t[o];
    return 0;
  }
  canShowScreenTop(e) {
    return e.advanced;
  }
  getSlotLevelThresholds() {
    return [[30, 5], [20, 4], [15, 3], [10, 2], [5, 1]];
  }
  getSlotLevel(e) {
    var t, o;
    try {
      for (var n = __values(this.getSlotLevelThresholds()), i = n.next(); !i.done; i = n.next()) {
        var r = __read(i.value, 2),
          s = r[0],
          c = r[1];
        if (e >= s) return c;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        i && !i.done && (o = n.return) && o.call(n);
      } finally {
        if (t) throw t.error;
      }
    }
    return 0;
  }
  canSlotAdvance(e, t) {
    return !!UserModel.getInstance().isGuideFinished() && e > t;
  }
  checkComboDisplayState() {
    var e = this.context.getGameData(),
      t = e.getComboNum(),
      o = this.checkIsComboState(t),
      n = e.getSlotLevel(),
      i = this.getSlotLevel(e.getCurMaxCombo()),
      r = !(this.context.getTile2SlotType() === ETile2SlotType.Slot3) && this.canSlotAdvance(i, n),
      a = this.showTopEffect();
    return {
      comboNum: t,
      comboState: o,
      showComboDisplay: o && this.canShowComboDisplay(t),
      showScreenEdge: o && this.canShowScreenEdge(t),
      showScreenTop: o && r && a,
      showSlotAdvance: r,
      slotLevel: r ? i : n
    };
  }
  @mj.traitEvent("T2CmbChk_showTopEff")
  showTopEffect() {
    return true;
  }
}