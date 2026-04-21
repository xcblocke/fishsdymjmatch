import Trait from '../../../Scripts/framework/trait/Trait';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
import ClassicGameData from '../../../Scripts/core/simulator/data/ClassicGameData';
import { EClassicWinType } from './ClassicOverTypes';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
@mj.trait
@mj.class("ClassicOverTrait")
export default class ClassicOverTrait extends Trait {
  static traitKey = "ClassicOver";
  onLoad() {
    super.onLoad.call(this);
  }
  onClcFailBhv_start(e, t) {
    var i = e.args[0];
    if (i && i.data) {
      this.showOverView(i.data);
      t();
    } else t();
  }
  showOverView() {
    var e = ClassicGameData.getInstance(),
      t = e.getScore(),
      i = e.getMaxScore(),
      o = e.getPreBestScore(),
      s = __read(e.getPreTodayScore(), 2),
      n = s[0],
      c = s[1],
      f = __read(e.getPreWeekScore(), 2),
      d = f[0],
      h = f[1],
      y = __read(e.getTodayScore(), 2),
      v = y[0],
      m = y[1],
      S = __read(e.getWeekScore(), 2),
      _ = S[0],
      b = S[1],
      w = GameUtils.isSameDay(m, c),
      g = GameUtils.isSameWeek(b, h),
      C = {
        curScore: t,
        bestScore: i,
        winType: EClassicWinType.Lose
      };
    if (t > o) {
      C.winType = EClassicWinType.Best;
    } else {
      if (g && _ > d) {
        C.winType = EClassicWinType.Week;
      } else {
        if (g || t !== _) {
          if (w && v > n) {
            C.winType = EClassicWinType.Today;
          } else {
            w || t !== v || (C.winType = EClassicWinType.Today);
          }
        } else {
          C.winType = EClassicWinType.Week;
        }
      }
    }
    var P = C.winType === EClassicWinType.Lose ? "ClassicLoseController" : "ClassicWinController";
    ControllerManager.getInstance().pushViewByController(P, {
      bgStyle: {
        blackOpacity: 0
      },
      isShowAction: false,
      data: C
    });
  }
}