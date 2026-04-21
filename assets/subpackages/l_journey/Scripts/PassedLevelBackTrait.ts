import Trait from '../../../Scripts/framework/trait/Trait';
import JumpManager from '../../../Scripts/base/jump/JumpManager';
@mj.trait
@mj.class("PassedLevelBackTrait")
export default class PassedLevelBackTrait extends Trait {
  static traitKey = "PassedLevelBack";
  get delayTime() {
    var t, e;
    return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 2;
  }
  onLoad() {
    super.onLoad.call(this);
  }
  onTLMapVw_collectBadge(t, e) {
    t.ins.isCollecting && t.ins.curLevelId > t.ins.levelConfig.levelCount && this.delayCloseMapView(t.ins);
    e();
  }
  onTLMapVw_viewShow(t, e) {
    t.ins.isCollecting || t.ins.curLevelId > t.ins.levelConfig.levelCount && this.delayCloseMapView(t.ins);
    e();
  }
  delayCloseMapView(t) {
    cc.isValid(t) && t.scheduleOnce(function () {
      JumpManager.getInstance().jumpToHall();
    }, this.delayTime);
  }
}