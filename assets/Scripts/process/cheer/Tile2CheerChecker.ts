import UserModel from '../../gamePlay/user/UserModel';
import { BaseCoreObject } from '../../BaseCoreObject';
export class Tile2CheerChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("T2CheerChk_thresholds")
  getThresholds() {
    return [[5, 0], [10, 1], [15, 2], [20, 3], [30, 4], [40, 4], [50, 4]];
  }
  @mj.traitEvent("T2CheerChk_canShow")
  canShowCheer(e) {
    var t, o;
    if (!UserModel.getInstance().isGuideFinished()) return {
      isShow: false,
      index: 0
    };
    var n = this.getThresholds();
    try {
      for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
        var c = __read(r.value, 2),
          u = c[0],
          p = c[1];
        if (e === u) return {
          isShow: true,
          index: p
        };
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return {
      isShow: false,
      index: 0
    };
  }
  @mj.traitEvent("T2CheerChk_stepThresholds")
  getStepThresholds() {
    return [[5, 4], [4, 3], [3, 2], [2, 1], [1, 0]];
  }
  @mj.traitEvent("T2CheerChk_canShowByStep")
  canShowCheerByStep(e) {
    var t, o;
    if (!UserModel.getInstance().isGuideFinished()) return {
      isShow: false,
      index: 0
    };
    var n = this.getStepThresholds();
    try {
      for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
        var c = __read(r.value, 2),
          u = c[0],
          p = c[1];
        if (e >= u) return {
          isShow: true,
          index: p
        };
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (o = i.return) && o.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    return {
      isShow: false,
      index: 0
    };
  }
}