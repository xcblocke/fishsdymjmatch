import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
@mj.trait
@mj.class("MainGameUIEdgeTrait")
export default class MainGameUIEdgeTrait extends Trait {
  static traitKey = "MainGameUIEdge";
  onLoad() {
    super.onLoad.call(this);
  }
  onGameUI_onLoad(t, e) {
    var o = t.ins;
    if (o && cc.isValid(o.node)) {
      var i = UserModel.getInstance().getCurrentGameType();
      if (i === MjGameType.DailyChallenge || i === MjGameType.Normal) {
        var n = cc.find("nodeTop/gameplay_bg_up", o.node),
          r = cc.find("nodeTop/gameplay_bg_mask_top", o.node);
        if (n && cc.isValid(n)) {
          var a = n.getComponent(cc.Widget);
          a && a.isAlignTop && (a.top = a.top - 20);
        }
        if (r && cc.isValid(r)) {
          var s = r.getComponent(cc.Widget);
          s && s.isAlignTop && (s.top = s.top - 20);
        }
      }
      o.btnShuffle && cc.isValid(o.btnShuffle) && (o.btnShuffle.position = new cc.Vec3(o.btnShuffle.position.x, o.btnShuffle.position.y + 10, 0));
      o.btnHitTips && cc.isValid(o.btnHitTips) && (o.btnHitTips.position = new cc.Vec3(o.btnHitTips.position.x, o.btnHitTips.position.y + 10, 0));
      e();
    } else e();
  }
}