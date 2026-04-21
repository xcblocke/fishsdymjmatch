import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("NormalShowBackTrait")
export default class NormalShowBackTrait extends Trait {
  static traitKey = "NormalShowBack";
  onLoad() {
    super.onLoad.call(this);
  }
  onBaseTileNode_upAnimMgr(e, t) {
    var o,
      i,
      r,
      a,
      p = e.ins;
    if (p.context.gameType == MjGameType.Normal) {
      var s = null === (i = null === (o = p.context) || void 0 === o ? void 0 : o.gameView) || void 0 === i ? void 0 : i.delegate;
      s && s.loadRes("spine/spinebase/gameplay_flip_regular", sp.SkeletonData, "l_normalshowback");
      if (p.info.tileObject.type === ETileType.Normal || p.info.tileObject.type === ETileType.Bomb) {
        p.updateNormalFlip();
        if (p.info.tileObject.isCardLock()) {
          null === (r = p.normalFlip) || void 0 === r || r.forceExit();
        } else {
          null === (a = p.normalFlip) || void 0 === a || a.forceEnter();
        }
      }
      t();
    } else t();
  }
  onClearBhv_collision(e, t) {
    var o = e.ins;
    if (o.context.gameType == MjGameType.Normal) {
      o.context.getTileNodeManager().getTileNodes().forEach(function (e) {
        var t = e.normalFlip;
        !t || t.hasRun || e.info.tileObject.isCardLock() || t.tryPlayAni();
      });
      t();
    } else t();
  }
  getAnimCfg() {
    return {
      path: "spine/spinebase/gameplay_flip_regular",
      anims: ["normal_in_1", "normal_in_2"],
      bundleName: "l_normalshowback"
    };
  }
  onNorFlipStateAni_spineCfg(e, t) {
    t({
      returnVal: this.getAnimCfg(),
      isBreak: true,
      returnType: TraitCallbackReturnType.jump
    });
  }
  onTileNodeObj_reToNormal(e, t) {
    var o,
      i = e.ins;
    if (i.context.gameType == MjGameType.Normal) {
      null === (o = i.normalFlip) || void 0 === o || o.forceEnter();
      t();
    } else t();
  }
}