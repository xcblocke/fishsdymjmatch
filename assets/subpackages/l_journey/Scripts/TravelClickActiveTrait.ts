import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.trait
@mj.class("TravelClickActiveTrait")
export default class TravelClickActiveTrait extends Trait {
  static traitKey = "TravelClickActive";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_TryChange(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: false
    });
  }
  onJourney_SeasonStart(t, e) {
    t.ins.changeJourney();
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onJourney_SessionEnd(t, e) {
    this.onTravelGameSessionEnd(t.ins);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onTravelGameSessionEnd(t) {
    var e = __read(t.getNextSession(), 1)[0];
    if ("" !== e) {
      var r = DataReader.getByKey(ConfigType.Travel, e);
      if (r) {
        var o = new Date(),
          n = Math.floor(o.getTime() / 1000);
        if (!(r.startTime > 0 && n < r.startTime)) {
          t.doHideActiveView();
          var i = ControllerManager.getInstance().getControByName("HallController");
          if (i) {
            t.createHallButton(i.rootView.getChildByName("Hall"));
            t.showJourneyActiveView();
          }
        }
      }
    }
  }
  onJourney_ShowActiveVw(t, e) {
    var r = this.showJourneyActiveView(t.ins);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: r
    });
  }
  onJourney_CanShowActiveVw(t, e) {
    e({
      returnType: TraitCallbackReturnType.jump,
      isBreak: true,
      returnVal: this.canShowActiveView(t.ins)
    });
  }
  canShowActiveView(t) {
    if (!t.isActiveJourney()) return false;
    var e = __read(this.getActiveViewSessionId(t), 2),
      r = e[0];
    e[1];
    if (r === t.curSession) return false;
    t.curSession = r;
    return true;
  }
  getActiveViewSessionId(t) {
    var e = TravelGameModel.getInstance(),
      r = e.getCurJourney(),
      o = e.getCurSession(),
      n = false;
    if (t.canChangeJourney()) {
      r = __read(t.getNextSession(), 1)[0];
      o += 1;
      n = true;
    }
    return [o, r, n];
  }
  showJourneyActiveView(t) {
    if (t.canShowActiveView()) {
      var e = __read(this.getActiveViewSessionId(t), 3),
        r = (e[0], e[1]),
        o = e[2];
      if ("" === r) return false;
      var n = DataReader.getByKey(ConfigType.Travel, r);
      if (!n) return false;
      t.doShowActiveView({
        config: n,
        isNewSession: o
      });
      return true;
    }
    return false;
  }
}