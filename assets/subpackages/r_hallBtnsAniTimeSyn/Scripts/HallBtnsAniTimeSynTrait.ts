import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
@mj.trait
@mj.class("HallBtnsAniTimeSynTrait")
export default class HallBtnsAniTimeSynTrait extends Trait {
  static traitKey = "HallBtnsAniTimeSyn";
  static BUNDLE_NAME = "r_hallBtnsAniTimeSyn";
  static TRAVEL_SPINE_PATH = "spine/main_icon_tile";
  static RANK_SPINE_PATH = "spine/main_icon_gardeningMaster";
  static TASK_SPINE_PATH = "spine/main_icon_dailyTask";
  static CHALLENGE_SPINE_PATH = "spine/main_dailyChallenge_btn";
  onHallCtl_initRes(t, n) {
    t.ins.addPreloadRes("SkeletonData", [HallBtnsAniTimeSynTrait.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait.TRAVEL_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait.TASK_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait.CHALLENGE_SPINE_PATH]);
    n();
  }
  onRankBtn_initComp(t, n) {
    var i = t.ins,
      r = cc.find("bg/down", i.node),
      o = cc.find("bg/up", i.node),
      a = BaseSpine.refreshWithNode(r, HallBtnsAniTimeSynTrait.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME);
    a.setAnimation("init_down", -1, null, false);
    a.attachNode("photo", function () {
      return i._cardSprNode;
    });
    BaseSpine.refreshWithNode(o, HallBtnsAniTimeSynTrait.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME).setAnimation("init_up", -1, null, false);
    n({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
  onTravelBtn_onLoad(t, n) {
    var i = t.ins,
      r = cc.find("Root/BgWood", i.node);
    BaseSpine.refreshWithNode(r, HallBtnsAniTimeSynTrait.TRAVEL_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME).setAnimation("init", -1, null, false);
    n();
  }
  onTaskTt_onLoad(t, n) {
    var i = t.ins,
      r = cc.find("Bg/Icon", i.node);
    BaseSpine.refreshWithNode(r, HallBtnsAniTimeSynTrait.TASK_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME).setAnimation("init", -1, null, false);
    n();
  }
  onHDailyBtn_initEff(t, n) {
    var i = t.ins,
      r = cc.find("eff_btn", i.node),
      o = BaseSpine.refreshWithNode(r, HallBtnsAniTimeSynTrait.CHALLENGE_SPINE_PATH, HallBtnsAniTimeSynTrait.BUNDLE_NAME);
    o.setAnimation("init", -1, null, false);
    i.animProxy = o;
    o.attachNode("hook_date", function () {
      if (!cc.isValid(i) || !cc.isValid(i.node)) return null;
      var t = i._txtDay.node,
        n = i._txtDaily.node;
      o.attachNode("hook_date", function () {
        return t;
      });
      o.attachNode("hook_txtDaily", function () {
        return n;
      });
      t.setPosition(0, 0);
      n.setPosition(0, 0);
      return null;
    });
    n({
      isBreak: true,
      returnType: TraitCallbackReturnType.return
    });
  }
}