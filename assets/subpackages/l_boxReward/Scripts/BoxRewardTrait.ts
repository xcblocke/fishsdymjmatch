import Trait from '../../../Scripts/framework/trait/Trait';
import BoxRewardUI from './BoxRewardUI';
@mj.trait
@mj.class("BoxRewardTrait")
export default class BoxRewardTrait extends Trait {
  requireRes = ["prefabs/boxReward/RewardUI", "prefabs/boxReward/OpenAnim", "prefabs/boxReward/BoxBarItem"];
  static traitKey = "BoxReward";
  onLoad() {
    super.onLoad.call(this);
  }
  onWinCtrl_initRes(t, e) {
    var i = t.ins;
    null == i || i.addPreloadRes("Prefab", this.requireRes);
    e();
  }
  onWinCtrl_viewShow(t, e) {
    var o,
      n = t.ins,
      a = null == n ? void 0 : n.rootView;
    try {
      if (cc.isValid(a)) {
        var r = ((null === (o = n.args) || void 0 === o ? void 0 : o.data) || {}).curLv,
          c = void 0 === r ? 1 : r,
          l = n._viewComponent;
        if (cc.isValid(l)) {
          var d = l.getContentNode();
          if (cc.isValid(d)) {
            var p = d.getChildByName("RewardUI");
            if (!cc.isValid(p)) {
              p = l.createUISync(BoxRewardUI);
              if (cc.isValid(p)) {
                d.addChild(p);
                var u = p.getComponent(BoxRewardUI);
                cc.isValid(u) && u.showBoxRewardUI(c, this._traitData.config);
              }
            }
          }
        }
      }
    } catch (t) {
      console.error("[" + BoxRewardTrait.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
    }
    e();
  }
}