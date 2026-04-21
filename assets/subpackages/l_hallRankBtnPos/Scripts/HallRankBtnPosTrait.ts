import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("HallRankBtnPosTrait")
export default class HallRankBtnPosTrait extends Trait {
  static traitKey = "HallRankBtnPos";
  onRankBtn_onLoad(t, r) {
    var e = t.ins.node;
    cc.isValid(e) && e.setPosition(e.position.x, 106);
    r();
  }
}