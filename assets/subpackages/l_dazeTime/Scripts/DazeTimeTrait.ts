import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("DazeTimeTrait")
export default class DazeTimeTrait extends Trait {
  static traitKey = "DazeTime";
  get dazeTime() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.dazeTime) && void 0 !== t ? t : 180;
  }
  get supportMode() {
    var e, t;
    return null !== (t = null === (e = this.traitData) || void 0 === e ? void 0 : e.mode) && void 0 !== t ? t : [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge, MjGameType.Classic];
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onIptGameTime_exec(e, t) {
    var r = e.ins,
      a = r.gameContext;
    if (this.supportMode.includes(a.gameType)) {
      var i = a.getGameData().getLastOpTime();
      if ((Date.now() - i) / 1000 > this.dazeTime) {
        var o = a.getGameData().getLastOpRealTime() + this.dazeTime - r.gameController.gameTimeData.time;
        o > 0 && (r.gameController.gameTimeData.time = o);
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else t();
    } else t();
  }
}