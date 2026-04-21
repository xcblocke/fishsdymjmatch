import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("SelectSpine1Trait")
export default class SelectSpine1Trait extends Trait {
  static traitKey = "SelectSpine1";
  onLoad() {
    super.onLoad.call(this);
  }
  getPicConfig(e) {
    return 1 == e ? {
      bgPic: "texture/selecttex/gameplay_select_mj_greenLight",
      spine: "spine/selectspine/gameplay_selected_efx",
      animation: "init_green"
    } : 2 == e ? {
      bgPic: "texture/selecttex/gameplay_select_mj_purpleLight",
      spine: "spine/selectspine/gameplay_selected_efx",
      animation: "init_purple"
    } : {
      bgPic: "texture/selecttex/gameplay_select_mj_redLight",
      spine: "spine/selectspine/gameplay_selected_efx",
      animation: "init_red"
    };
  }
  onMainGameCtrl_initRes(e, t) {
    var i = e.ins;
    if (i && i.addPreloadRes) {
      i.addPreloadRes("SkeletonData", ["l_selectspine:spine/selectspine/gameplay_selected_efx"]);
      i.addPreloadRes("SpriteFrame", ["l_selectspine:texture/selecttex/gameplay_select_mj_greenLight", "l_selectspine:texture/selecttex/gameplay_select_mj_purpleLight", "l_selectspine:texture/selecttex/gameplay_select_mj_redLight"]);
    }
    t();
  }
  onBaseTileNode_rsSelectEff(e, t) {
    var i = e.ins,
      a = i.imgSelectedCardBg,
      r = i.effectSelected,
      n = (i.context.gameType, this.getPicConfig(1));
    if (n && n.bgPic && n.spine && n.animation) {
      if (cc.isValid(a) && cc.isValid(r)) {
        var s = BaseSprite.refreshWithNode(a, n.bgPic, false, false, "l_selectspine");
        s.node.getComponent(cc.Sprite).trim = false;
        s.node.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        s.node.setScale(i.info.tileObject.layoutScale);
        BaseSpine.refreshWithNode(r, n.spine, "l_selectspine").setAnimation(n.animation, -1);
        t({
          returnType: TraitCallbackReturnType.return,
          isBreak: true
        });
      } else t();
    } else t();
  }
}