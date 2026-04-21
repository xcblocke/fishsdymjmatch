import Trait from '../../../Scripts/framework/trait/Trait';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("ThemeSnowTrait")
export default class ThemeSnowTrait extends Trait {
  static traitKey = "ThemeSnow";
  onLoad() {
    super.onLoad.call(this);
  }
  onMainGameCtrl_initRes(e, t) {
    e.ins.addPreloadRes("SpriteFrame", ["l_themesnow:texture/gameplay_btn_hint", "l_themesnow:texture/gameplay_btn_refresh", "l_themesnow:texture/gameplay_img1", "l_themesnow:texture/gameplay_img2", "l_themesnow:texture/gameplay_pic_snow"]);
    t();
  }
  onMainGmVw_beChangeTheme(e, t) {
    var o = e.ins,
      r = (e.args[0], e.args[1]);
    e.args[2];
    if ("ThemeSnow" == r || "" == r) {
      e.args[1] = "ThemeSnow";
      t();
    } else {
      this.resetOtherNodes(o);
      t();
    }
  }
  resetOtherNodes(e) {
    var t;
    if (cc.isValid(null == e ? void 0 : e.node)) {
      var o = null === (t = e.bottomRootNode) || void 0 === t ? void 0 : t.getChildByName("nodePropBg"),
        r = null == o ? void 0 : o.getChildByName("gameplay_pic_snow");
      cc.isValid(r) && r.destroy();
      var i = e.node.getChildByName("bg");
      if (i) {
        var n = i.getChildByName("gameplay_img1"),
          a = i.getChildByName("gameplay_img2");
        cc.isValid(n) && n.destroy();
        cc.isValid(a) && a.destroy();
      }
    }
  }
  onMainGmVw_afChangeTheme(e, t) {
    var o = e.ins,
      r = (e.args[0], e.args[1]);
    e.args[2];
    if ("ThemeSnow" == r || "" == r) {
      e.args[1] = "ThemeSnow";
      this.changeThemeRes(o);
      t();
    } else t();
  }
  onMainGmVw_resetTheme(e, t) {
    var o = e.ins,
      r = (e.args[0], e.args[1]);
    e.args[2];
    "" == r && this.changeThemeRes(o);
    e.args[1] = "ThemeSnow";
    t();
  }
  changeThemeRes(e) {
    var t,
      o,
      r,
      i = e.gameUI;
    if (i) {
      var n = null === (t = i.btnShuffle) || void 0 === t ? void 0 : t.getChildByName("Background"),
        a = null === (o = i.btnHitTips) || void 0 === o ? void 0 : o.getChildByName("Background");
      BaseSprite.refreshWithNode(n, "texture/gameplay_btn_refresh", false, true, "l_themesnow");
      BaseSprite.refreshWithNode(a, "texture/gameplay_btn_hint", false, true, "l_themesnow");
    }
    var p = e.node.getChildByName("bg");
    if (p) {
      var c = new cc.Node("gameplay_img1");
      c.parent = p;
      var l = c.addComponent(cc.Widget);
      l.isAlignTop = true;
      l.top = 0;
      BaseSprite.refreshWithNode(c, "texture/gameplay_img1", false, true, "l_themesnow");
      c.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
      l.updateAlignment();
      c.setPosition(-305, c.position.y);
      var d = new cc.Node("gameplay_img2");
      d.parent = p;
      var m = d.addComponent(cc.Widget);
      m.isAlignTop = true;
      m.top = 0;
      BaseSprite.refreshWithNode(d, "texture/gameplay_img2", false, true, "l_themesnow");
      d.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
      m.updateAlignment();
      d.setPosition(389, d.position.y);
    }
    var g = null === (r = e.bottomRootNode) || void 0 === r ? void 0 : r.getChildByName("nodePropBg");
    g && this.changeBar(g);
  }
  isCurTheme(e) {
    var t,
      o = null === (t = UserModel.getInstance().getGameDataByGameType(e)) || void 0 === t ? void 0 : t.getTheme();
    return "ThemeSnow" == o || "" == o;
  }
  changeBar(e) {
    if (cc.isValid(e)) {
      var t = new cc.Node("gameplay_pic_snow");
      t.parent = e;
      var o = t.addComponent(cc.Widget);
      o.isAlignTop = true;
      o.isAlignLeft = true;
      o.isAlignRight = true;
      o.top = -62;
      o.left = 0;
      o.right = 0;
      var r = t.addComponent(cc.Sprite);
      r.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      r.type = cc.Sprite.Type.SIMPLE;
      BaseSprite.refreshWithNode(t, "texture/gameplay_pic_snow", false, true, "l_themesnow");
      t.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
    }
  }
  onMainPrPosTrait_crtNoPrBg(e, t) {
    var o = e.args[0];
    this.isCurTheme(o.gameType) && this.changeBar(e.args[1]);
    t();
  }
}