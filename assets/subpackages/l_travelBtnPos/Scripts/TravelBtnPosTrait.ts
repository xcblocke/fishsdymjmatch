import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("TravelBtnPosTrait")
export default class TravelBtnPosTrait extends Trait {
  static traitKey = "TravelBtnPos";
  onHallNmlBtn_updateUI(t, e) {
    var r = t.ins.node;
    cc.isValid(r) && r.setPosition(cc.v3(r.position.x, -755, 0));
    e();
  }
  onTravelBtn_updateUI(t, e) {
    var r = t.ins.node;
    cc.isValid(r) && r.setPosition(cc.v3(r.position.x, -532, 0));
    e();
  }
}