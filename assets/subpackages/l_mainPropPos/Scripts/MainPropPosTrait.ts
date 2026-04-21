import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
@mj.trait
@mj.class("MainPropPosTrait")
export default class MainPropPosTrait extends Trait {
  static traitKey = "MainPropPos";
  onMainGmVw_calcAreaSz(t, e) {
    var r,
      o = t.ins;
    if (o.gameType !== MjGameType.Classic) {
      var i = null === (r = t.ins) || void 0 === r ? void 0 : r._bottomRootNode;
      if (cc.isValid(i)) {
        if (!i.getChildByName("nodePropBg")) {
          var n = new cc.Node("nodePropBg");
          n.setAnchorPoint(0.5, 1);
          n.height = 640;
          i.addChild(n);
          n.setSiblingIndex(0);
          var c = n.addComponent(cc.Widget);
          c.isAlignLeft = c.isAlignRight = true;
          c.isAlignTop = true;
          c.left = c.right = 0;
          c.top = 55;
          c.target = i;
          n.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
          BaseSprite.refreshWithNode(n, "texture/journeyMap/01/journey_bg_dn", false, true);
          this.createNodePropBg(o, n);
        }
        e();
      } else e();
    } else e();
  }
  @mj.traitEvent("MainPrPosTrait_crtNoPrBg")
  createNodePropBg() {}
}