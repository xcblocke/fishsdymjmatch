import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("FlipCardEff2Trait")
export default class FlipCardEff2Trait extends Trait {
  static traitKey = "FlipCardEff2";
  get playFlipEff() {
    var e, t;
    return null == (null === (e = this._traitData) || void 0 === e ? void 0 : e.playFlipEff) || (null === (t = this._traitData) || void 0 === t ? void 0 : t.playFlipEff);
  }
  onMainGameCtrl_initRes(e, t) {
    t();
    e.ins.addPreloadRes("SkeletonData", ['r_flipCardEff2:spine/gameplay_flip', 'r_flipCardEff2:spine/gameplay_flip_efx']);
  }
  onFlipAni_playEnter(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
    this.playNewEnter(e);
  }
  playNewEnter(e) {
    var t = this,
      a = e.ins,
      r = e.args[0],
      n = null;
    a._baseTileNode.tileNode.active = false;
    a._baseTileNode.shadowNode.active = false;
    var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "in", false, a.handleEnterAnimationComplete.bind(a, r), function () {
      var e = t.getCardFrontNode();
      a.createAnimNode().parent = e;
      (n = t.getCardBackNode()).parent = e;
      return e;
    }, false, "r_flipCardEff2");
    i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
    i.getSkeleton().setEventListener(function (e, t) {
      "event_mahjong" === t.data.name && cc.isValid(n) && (n.active = false);
    });
    if (this.playFlipEff) {
      var o = a._baseTileNode.animNode.getChildByName("tempAnimNode"),
        l = BaseSpine.create("spine/gameplay_flip_efx", "in", 1, null, true, "r_flipCardEff2");
      l.node.parent = o;
      l.node.zIndex = 10;
    }
  }
  onFlipAni_playExit(e, t) {
    t({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
    this.playNewExit(e);
  }
  playNewExit(e) {
    var t = this,
      a = e.ins,
      r = e.args[0],
      n = null;
    a._baseTileNode.tileNode.active = false;
    a._baseTileNode.shadowNode.active = false;
    var i = a._baseTileNode.playAnimNodeAnimation("spine/gameplay_flip", "out", false, a.handleExitAnimationComplete.bind(a, r), function () {
      var e = t.getCardFrontNode();
      a.createAnimNode().parent = e;
      (n = t.getCardBackNode()).parent = e;
      n.active = false;
      return e;
    }, false, "r_flipCardEff2");
    i.getSkeleton().setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
    i.getSkeleton().setEventListener(function (e, t) {
      "event_mahjong" === t.data.name && cc.isValid(n) && (n.active = true);
    });
    var o = a._baseTileNode.animNode.getChildByName("tempAnimNode"),
      l = BaseSpine.create("spine/gameplay_flip_efx", "out", 1, null, true, "r_flipCardEff2");
    l.node.parent = o;
    l.node.zIndex = 10;
  }
  @mj.traitEvent("FlipCardEff_frontNode")
  getCardFrontNode() {
    return BaseSprite.createByAtlas("atlas/cardIcon", "gameplay_special_mj_2").node;
  }
  @mj.traitEvent("FlipCardEff_backNode")
  getCardBackNode() {
    return BaseSprite.createByAtlas("atlas/cardIcon", "gameplay_img_mj_dn").node;
  }
}