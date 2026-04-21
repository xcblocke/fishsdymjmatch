import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("FlipCardEff1Trait")
export default class FlipCardEff1Trait extends Trait {
  static traitKey = "FlipCardEff1";
  onMainGameCtrl_initRes(e, t) {
    t();
    e.ins.addPreloadRes("SkeletonData", ['l_flipCardEff1:spine/gameplay_flip']);
  }
  onFlipAni_playEnter(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
    var a = e.ins,
      n = e.args[0],
      r = null;
    a._baseTileNode.tileNode.active = false;
    a._baseTileNode.shadowNode.active = false;
    var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "in", false, a.handleEnterAnimationComplete.bind(a, n), function () {
      var e = BaseSprite.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2");
      a.createAnimNode().parent = e.node;
      (r = BaseSprite.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn")).node.parent = e.node;
      return e.node;
    }, false, "l_flipCardEff1");
    i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
    i.getSkeleton().setEventListener(function (e, t) {
      "event_mahjong" === t.data.name && r && cc.isValid(r.node) && (r.node.active = false);
    });
    a.ensureLockBgState(a._baseTileNode);
  }
  onFlipAni_playExit(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
    var a = e.ins,
      n = e.args[0],
      r = null;
    a._baseTileNode.tileNode.active = false;
    a._baseTileNode.shadowNode.active = false;
    var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "out", false, a.handleExitAnimationComplete.bind(a, n), function () {
      var e = BaseSprite.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2");
      a.createAnimNode().parent = e.node;
      (r = BaseSprite.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn")).node.parent = e.node;
      r.node.active = false;
      return e.node;
    }, false, "l_flipCardEff1");
    i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
    i.getSkeleton().setEventListener(function (e, t) {
      "event_mahjong" === t.data.name && r && cc.isValid(r.node) && (r.node.active = true);
    });
    a.ensureLockBgState(a._baseTileNode);
  }
}