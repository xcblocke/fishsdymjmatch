import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import RankModel from './RankModel';
@mj.class
export default class RankCollectCard extends BaseUI {
  lab_count = null;
  _cardNode = null;
  _cardBgNode = null;
  _cardSpriteNode = null;
  bg = null;
  _isPlayingScaleAnim = false;
  _pendingAnimCount = 0;
  _currentCount = 0;
  _pendingCardCount = 0;
  static prefabUrl = "prefabs/rank/RankCollectCard";
  @mj.traitEvent("RankColCard_getUrl")
  static getUrl() {
    return this.prefabUrl;
  }
  onLoad() {
    super.onLoad.call(this);
    this.bg = this.node.getChildByName("bg");
    this.lab_count = cc.find("bg/lab_count", this.node);
    this._cardNode = cc.find("bg/card_node", this.node);
    this._cardBgNode = this._cardNode.getChildByName("card_bg");
    this._cardSpriteNode = this._cardNode.getChildByName("card");
  }
  @mj.traitEvent("RankColCard_initUI")
  initUI() {
    var t = RankModel.getInstance(),
      e = t.getCurBoardData();
    this.updateCardBg();
    var o = (null == e ? void 0 : e.CollectThing) || "";
    o && this.updateCardSprite(o);
    var n = t.getLevelCollectCount();
    this.updateCount(n);
  }
  updateCount(t) {
    if (cc.isValid(this.lab_count)) {
      var e = this.lab_count.getComponent(cc.Label);
      e && (e.string = t.toString());
    }
  }
  updateCardBg() {
    if (cc.isValid(this._cardBgNode)) {
      var t = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
        e = t.path,
        o = t.bundleName,
        n = t.fromAtlas;
      BaseSprite.refreshWithNode(this._cardBgNode, e, n, false, o);
    }
  }
  updateCardSprite() {
    cc.isValid(this._cardNode) && this.updateImgCard(this._cardSpriteNode);
  }
  @mj.traitEvent("RankColCard_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
  getCardNode() {
    return this._cardNode;
  }
  getCardWorldPosition() {
    if (!cc.isValid(this._cardSpriteNode)) return null;
    var t = this._cardSpriteNode.convertToWorldSpaceAR(cc.v2(0, 0));
    return cc.v2(t.x, t.y);
  }
  addPendingCard(t = 1) {
    this._pendingCardCount += t;
  }
  @mj.traitEvent("RankColCard_onCardArrived")
  onCardArrived() {
    var t = this;
    if (cc.isValid(this.node)) {
      this._pendingCardCount > 0 && this._pendingCardCount--;
      if (this._isPlayingScaleAnim) {
        this._pendingAnimCount++;
        this.unschedule(this.hideCard);
      } else {
        this._isPlayingScaleAnim = true;
        if (cc.isValid(this.bg)) {
          cc.Tween.stopAllByTarget(this.bg);
          cc.tween(this.bg).to(0.2, {
            scale: 1.2
          }, {
            easing: "sineOut"
          }).to(0.2, {
            scale: 1
          }, {
            easing: "sineIn"
          }).call(function () {
            t._currentCount++;
            t.updateCount(t._currentCount);
            t._isPlayingScaleAnim = false;
            if (t._pendingAnimCount > 0) {
              t._pendingAnimCount--;
              t.onCardArrived();
            } else 0 === t._pendingCardCount && t.scheduleOnce(t.hideCard, 0.2);
          }).start();
        } else this._isPlayingScaleAnim = false;
      }
    }
  }
  hideCard() {
    cc.isValid(this.node) && (this.node.active = false);
  }
  resetCount() {
    this._pendingAnimCount = 0;
    this._pendingCardCount = 0;
    this._isPlayingScaleAnim = false;
    var t = RankModel.getInstance().getLevelCollectCount();
    this._currentCount = Math.max(0, t - 2);
    this.updateCount(this._currentCount);
  }
  startShowAnimation() {
    this.resetCount();
    this.playShowAnimation();
  }
  playShowAnimation() {
    var t = this;
    return new Promise(function (e) {
      if (cc.isValid(t.node)) {
        t.node.opacity = 0;
        t.node.scale = 0;
        cc.Tween.stopAllByTarget(t.node);
        cc.tween(t.node).to(0.2, {
          opacity: 255,
          scale: 1
        }, {
          easing: "sineOut"
        }).call(function () {
          e();
        }).start();
      } else e();
    });
  }
  onDestroy() {
    cc.Tween.stopAllByTarget(this.node);
    this.unscheduleAllCallbacks();
    super.onDestroy.call(this);
  }
  @mj.traitEvent("RankColCard_clearNode")
  clearNode() {
    this._cardNode = null;
    this._cardSpriteNode = null;
    this.destroy();
  }
  @mj.traitEvent("RankColCard_setVisible")
  setVisible(t) {
    this.node && this._cardNode && (this.node.active = t);
  }
}