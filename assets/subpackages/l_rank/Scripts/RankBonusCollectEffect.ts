import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import RankModel from './RankModel';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class RankBonusCollectEffect extends BaseUI {
  card_node = null;
  sp_light = null;
  static prefabUrl = "prefabs/rank/RankBonusCollectEffect";
  onLoad() {
    super.onLoad.call(this);
    this.card_node = this.node.getChildByName("card_node");
    var e = this.node.getChildByName("sp_light");
    e && (this.sp_light = e.getComponent(sp.Skeleton));
    this.updateCardSprite();
  }
  updateCardSprite() {
    if (cc.isValid(this.card_node)) {
      var t = RankModel.getInstance().getCurBoardData();
      if (t && t.CollectThing) {
        this.updateImgCard(this.card_node.getChildByName("card"));
        var e = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
          o = e.path,
          n = e.bundleName,
          a = e.fromAtlas;
        BaseSprite.refreshWithNode(this.card_node.getChildByName("card_bg"), o, a, false, n);
      }
    }
  }
  @mj.traitEvent("RankColEff_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
  playEffect(t, e, o) {
    var n = this;
    if (this.card_node) {
      this.card_node.scale = 0;
      this.card_node.position = cc.v3(0, 0, 0);
      if (this.sp_light) {
        this.sp_light.node.position = cc.v3(0, 0, 0);
        this.sp_light.node.active = false;
      }
      this.card_node.parent.convertToWorldSpaceAR(this.card_node.position);
      cc.tween(this.card_node).to(0.16, {
        scale: 1.3
      }, {
        easing: "cubicIn"
      }).call(function () {
        var a = n.card_node.parent.convertToNodeSpaceAR(t);
        n.sp_light.node.position = cc.v3(a.x, a.y, 0);
        cc.tween(n.card_node).parallel(cc.tween().to(0.34, {
          scale: 1
        }, {
          easing: "cubicIn"
        }), cc.tween().to(0.34, {
          position: cc.v3(a.x, a.y, 0)
        }, {
          easing: "sineInOut"
        })).call(function () {
          n.card_node.active = false;
          n.playLightEffect(e);
          o && o();
        }).start();
      }).start();
    } else o && o();
  }
  @mj.traitEvent("RankColEff_playLightEff")
  playLightEffect(t) {
    var e = this;
    this.sp_light;
    this.sp_light.node.active = true;
    var o = t ? "in_2" : "in_1";
    this.sp_light.setAnimation(0, o, false);
    this.sp_light.setCompleteListener(function () {
      e.sp_light.setCompleteListener(null);
      e.node.destroy();
    });
  }
  stopEffect() {
    this.card_node && cc.Tween.stopAllByTarget(this.card_node);
    this.sp_light && this.sp_light.setCompleteListener(null);
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    this.stopEffect();
  }
}