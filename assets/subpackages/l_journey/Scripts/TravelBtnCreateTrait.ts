import { DataReader } from '../../../Scripts/framework/data/DataReader';
import Trait from '../../../Scripts/framework/trait/Trait';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import TravelGameModel from '../../../Scripts/gamePlay/travel/model/TravelGameModel';
import HallTravelBtn from '../../../Scripts/HallTravelBtn';
@mj.trait
@mj.class("TravelBtnCreateTrait")
export default class TravelBtnCreateTrait extends Trait {
  static traitKey = "TravelBtnCreate";
  onLoad() {
    super.onLoad.call(this);
  }
  onJourney_CreateBtn(t, e) {
    this.createTravelBtn(t.ins, t.args[0]);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  createTravelBtn(t, e) {
    if (cc.isValid(e)) {
      var r = TravelGameModel.getInstance().getCurJourney(),
        o = false;
      if (t.isSessionEnd()) {
        r = __read(t.getNextSession(), 1)[0];
        o = true;
      }
      if (o && "" === r) return;
      if (!DataReader.getByKey(ConfigType.Travel, r)) return;
      var n = e.getChildByName("HallJourneyBtn");
      if (cc.isValid(n, true)) {
        if (t.createdHallButton) {
          n.destroy();
          t.doCreateHallButton(e, r, o);
          return;
        }
        var i = n.getComponent(HallTravelBtn);
        i && i.updateUI(r, t.getLimitLevel(), o);
      } else t.doCreateHallButton(e, r, o);
    }
  }
}