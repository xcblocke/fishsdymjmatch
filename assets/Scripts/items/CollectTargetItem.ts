import { ETileType } from '../simulator/constant/TileTypeEnum';
import BaseUI from '../framework/ui/BaseUI';
import BaseSprite from '../gamePlay/base/ui/BaseSprite';
import BaseSpine from '../gamePlay/base/ui/BaseSpine';
import TravelGameModel from '../gamePlay/travel/model/TravelGameModel';
import CardUtil from '../gamePlay/user/CardUtil';
@mj.class
export default class CollectTargetItem extends BaseUI {
  @mj.node("Card")
  card: "Card" = null;
  @mj.component("Card/Icon", cc.Sprite)
  cardIcon: "Card/Icon" = null;
  @mj.node("Card/Down")
  cardDown: "Card/Down" = null;
  @mj.node("Card/Up")
  cardUp: "Card/Up" = null;
  @mj.node("Finish")
  finishNode: "Finish" = null;
  @mj.component("Label", cc.Label)
  collectLabel: "Label" = null;
  @mj.node("EffectTop")
  EffectTopNode: "EffectTop" = null;
  @mj.node("EffectDown")
  EffectDownNode: "EffectDown" = null;
  data = null;
  isLoaded = false;
  _customScale = null;
  _baseCardScale = 0.56;
  static prefabUrl = "prefabs/journey/CollectItem";
  static bundleName = "mainRes";
  onLoad() {
    super.onLoad.call(this);
    this.isLoaded = true;
    this.updateUI();
  }
  updateUI() {
    if (this.data && this.isLoaded) {
      var e = this.data;
      this.setupCardDisplay(e.type, e.resId);
      this.setupCardScale(e.type);
      null !== this._customScale && this.card && cc.isValid(this.card) && (this.card.scale *= this._customScale);
      this.updateCountLabel();
      this.updateFinishState();
    }
  }
  initUI(e) {
    if (e) {
      this.data = e;
      this.updateUI();
    }
  }
  refreshUI() {
    if (this.data) {
      this.updateCountLabel();
      this.updateFinishState();
    }
  }
  setupCardDisplay(e, t) {
    switch (e) {
      case ETileType.ColorCard:
        this.showNormalCard(e, t);
        break;
      case ETileType.Yoga:
        this.showSpecialCard(e, t);
        break;
      case ETileType.RollCard:
        this.showFlipCard();
        break;
      default:
        this.showNormalCard(e, t);
    }
  }
  showNormalCard() {
    this.cardUp.active = true;
    this.cardDown.active = false;
    this.cardIcon.node.active = true;
    var e = CardUtil.getAtlasPathAndBundleName(this.data.resName),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this.cardIcon.node, t, n, false, o);
    var i = CardUtil.getAtlasPathAndBundleName("journey_special_mj_green"),
      r = i.path,
      a = i.bundleName,
      l = i.fromAtlas;
    BaseSprite.refreshWithNode(this.cardUp, r, l, false, a);
  }
  showSpecialCard(e, t) {
    this.cardUp.active = false;
    this.cardDown.active = false;
    this.cardIcon.node.active = true;
    this.collectLabel.node.x += 0.7 * this.cardIcon.node.width * this.card.scale;
    this.finishNode.x += 0.7 * this.cardIcon.node.width * this.card.scale;
    var o = this.getSpecialIconPath(e, t),
      n = o.path,
      i = o.bundleName,
      r = o.fromAtlas;
    n && BaseSprite.refreshWithNode(this.cardIcon.node, n, r, false, i);
  }
  showFlipCard() {
    this.cardUp.active = false;
    this.cardDown.active = true;
    this.cardIcon.node.active = false;
    var e = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_dn"),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this.cardDown, t, n, false, o);
  }
  getSpecialIconPath(e) {
    if (e === ETileType.Yoga) {
      var t = TravelGameModel.getInstance().getCurJourney(),
        o = TravelGameModel.getInstance().getConfig(t);
      if (o && o.yoga) {
        var n = __read(this.getYogaIconPath(o.yoga), 2),
          i = n[0];
        return {
          path: n[1],
          bundleName: i,
          fromAtlas: false
        };
      }
    }
    if (this.data && this.data.resName) {
      var r = CardUtil.getAtlasPathAndBundleName(this.data.resName);
      return {
        path: r.path,
        bundleName: r.bundleName,
        fromAtlas: r.fromAtlas
      };
    }
  }
  getYogaIconPath(e) {
    var t = e.split(":");
    return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journey/yoga/" + e];
  }
  setupCardScale(e) {
    var t = 0.56;
    switch (e) {
      case ETileType.ColorCard:
      case ETileType.RollCard:
        t = 0.56;
        break;
      case ETileType.Yoga:
        t = 0.78;
    }
    this._baseCardScale = t;
    this.card.scale = t;
  }
  updateCountLabel() {
    if (this.collectLabel && this.data) {
      var e = this.data.count;
      this.collectLabel.string = "" + e;
    }
  }
  updateFinishState() {
    if (this.finishNode && this.data) {
      var e = this.data.count <= 0;
      this.finishNode.active = e;
      this.collectLabel.node.active = !e;
    }
  }
  getData() {
    return this.data;
  }
  updateData(e) {
    if (this.data) {
      this.data.count = e.count;
      this.data.allCount = e.allCount;
    }
  }
  playCollectAnimation(e) {
    var t = this;
    if (this.card && this.collectLabel) {
      cc.Tween.stopAllByTarget(this.card);
      cc.Tween.stopAllByTarget(this.collectLabel.node);
      var o = this.getBaseCardScale();
      this.card.scale = o;
      this.collectLabel.node.scale = 1;
      this.playSpineEffect();
      cc.tween(this.card).to(0.07, {
        scale: 1.2 * o
      }).to(0.1, {
        scale: o
      }).start();
      cc.tween(this.collectLabel.node).to(0.07, {
        scale: 2
      }).call(function () {
        t.updateCountLabel();
      }).to(0.1, {
        scale: 1
      }).call(function () {
        t.updateFinishState();
        e && e();
      }).start();
    } else e && e();
  }
  getBaseCardScale() {
    return this._baseCardScale;
  }
  playSpineEffect() {
    if (this.EffectTopNode) {
      var e = BaseSpine.create("spine/collect/gameplay_light_goal", "in", 1, function () {}, true);
      if (e && e.node) {
        this.EffectTopNode.addChild(e.node);
        e.node.scale = this.card.scale;
      }
    }
  }
  onDestroy() {
    this.data = null;
    super.onDestroy.call(this);
  }
}