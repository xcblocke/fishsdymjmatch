import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("Tile2FailSwapBtnTrait")
export default class Tile2FailSwapBtnTrait extends Trait {
  static traitKey = "Tile2FailSwapBtn";
  onLoad() {
    super.onLoad.call(this);
  }
  onTile2FailVw_show(t, e) {
    var r = t.ins;
    if (r && cc.isValid(r.node)) {
      var o = r.node.getChildByName("content_node");
      if (o) {
        var i = o.getChildByName("btn_use"),
          n = o.getChildByName("btn_replay");
        if (i && n) {
          var a = i.getPosition(),
            c = n.getPosition();
          i.setPosition(c);
          n.setPosition(a);
          e();
        } else e();
      } else e();
    } else e();
  }
}