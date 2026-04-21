import BaseUI from '../../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../../Scripts/framework/utils/CommonUtils';
import RankModel from '../RankModel';
import { ERankAudioID } from './RankEnums';
import BaseSprite from '../../../../Scripts/gamePlay/base/ui/BaseSprite';
import CardUtil from '../../../../Scripts/gamePlay/user/CardUtil';
import UserModel from '../../../../Scripts/gamePlay/user/UserModel';
@mj.class
export default class RankSpecialCardEffect extends BaseUI {
  sp_collision = null;
  _card0 = null;
  _cardContent0 = null;
  _card1 = null;
  _cardContent1 = null;
  _spLight0 = null;
  _spLight1 = null;
  _card0Position = cc.v2(0, 0);
  static prefabUrl = "prefabs/rank/RankSpecialCardEffect";
  @mj.traitEvent("RankSpCardEff_getUrl")
  static getUrl() {
    return this.prefabUrl;
  }
  onLoad() {
    var e, o, n, a, i, r, s, l, c;
    super.onLoad.call(this);
    this.sp_collision = null === (e = this.node.getChildByName("sp_collision")) || void 0 === e ? void 0 : e.getComponent(sp.Skeleton);
    this._card0 = cc.find("card_0", this.node);
    this._cardContent0 = null === (o = this._card0) || void 0 === o ? void 0 : o.getChildByName("content");
    this._spLight0 = null === (a = null === (n = this._card0) || void 0 === n ? void 0 : n.getChildByName("sp_light")) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton);
    this._spLight0 && (this._spLight0.node.active = false);
    this._card1 = cc.find("card_1", this.node);
    this._cardContent1 = null === (i = this._card1) || void 0 === i ? void 0 : i.getChildByName("content");
    this._spLight1 = null === (s = null === (r = this._card1) || void 0 === r ? void 0 : r.getChildByName("sp_light")) || void 0 === s ? void 0 : s.getComponent(sp.Skeleton);
    this._spLight1 && (this._spLight1.node.active = false);
    this._card0Position = (null === (c = null === (l = this._card0) || void 0 === l ? void 0 : l.getPosition()) || void 0 === c ? void 0 : c.clone()) || cc.v2(0, 0);
  }
  playEffect(t, e = false, o?, n?) {
    var a;
    if (this._card0 && this._card1) {
      this.removeGameplayPrefix(null === (a = RankModel.getInstance().getCurBoardData()) || void 0 === a ? void 0 : a.CollectThing);
      try {
        if (!o || !cc.isValid(o) || !o.parent) {
          n && n();
          return;
        }
        var i = o.parent.convertToWorldSpaceAR(o.position),
          r = this.node.convertToNodeSpaceAR(i),
          s = cc.v2(r.x, r.y);
        Promise.all([this.playCardFlySequence(e, this._card1, this._cardContent1, this._spLight1, s, o, 0), this.playCardFlySequence(e, this._card0, this._cardContent0, this._spLight0, s, o, 0.2)]).then(function () {
          n && n();
        });
      } catch (t) {
        console.error("[RankSpecialCardEffect] 播放特效失败: " + t.message);
        n && n();
      }
    } else n && n();
  }
  updatePos(t) {
    if (this._card0 && this._card1) if (!t || t.length < 2) {
      this._card0.setPosition(cc.v2(-80, 0));
      this._card1.setPosition(cc.v2(80, 0));
    } else {
      var e = t[0].x > t[1].x,
        o = e ? t[0] : t[1],
        n = e ? t[1] : t[0],
        a = cc.v2(this.node.x, this.node.y),
        i = this.convertToLocalPos(n, this.node, a);
      this._card0.setPosition(i);
      var r = this.convertToLocalPos(o, this.node, a);
      this._card1.setPosition(r);
    }
  }
  convertToLocalPos(t, e, o) {
    var n = this.node.convertToWorldSpaceAR(cc.v2(t.x, t.y)),
      a = e.convertToNodeSpaceAR(n);
    return cc.v2(a.x - o.x, a.y - o.y);
  }
  refreshCards() {
    var t = this;
    return new Promise(function (e) {
      var o, n, a, i;
      if (t._card0 && t._card1 && t._cardContent0 && t._cardContent1 && t._spLight0 && t._spLight1) {
        t._card0.scale = 1;
        t._card0.active = true;
        t.upSprites(null === (o = t._cardContent0) || void 0 === o ? void 0 : o.getChildByName("card_bg"), null === (n = t._cardContent0) || void 0 === n ? void 0 : n.getChildByName("card"));
        t._spLight0.node.active = false;
        t._card1.scale = 1;
        t._card1.active = true;
        t.upSprites(null === (a = t._cardContent1) || void 0 === a ? void 0 : a.getChildByName("card_bg"), null === (i = t._cardContent1) || void 0 === i ? void 0 : i.getChildByName("card"));
        t._spLight1.node.active = false;
        e();
      } else e();
    });
  }
  @mj.traitEvent("RankSpCardEff_upSprites")
  upSprites(t, e) {
    var o, n;
    if (null === (n = null === (o = RankModel.getInstance()) || void 0 === o ? void 0 : o.getCurBoardData()) || void 0 === n ? void 0 : n.CollectThing) {
      if (null == t ? void 0 : t.activeInHierarchy) {
        var a = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2"),
          i = a.path,
          r = a.bundleName,
          s = a.fromAtlas;
        BaseSprite.refreshWithNode(t, i, s, false, r);
      }
      (null == e ? void 0 : e.activeInHierarchy) && this.updateImgCard(e);
    }
  }
  @mj.traitEvent("RankSpCardEff_updImgCard")
  updateImgCard(t) {
    var e = UserModel.getInstance().getRankCardResName(),
      o = CardUtil.getAtlasPathAndBundleName(e),
      n = o.path,
      a = o.bundleName,
      i = o.fromAtlas;
    BaseSprite.refreshWithNode(t, n, i, false, a);
  }
  resetCardPositions() {
    if (this._card0Position) {
      this._card0 && this._card0.setPosition(this._card0Position);
      this._card1 && this._card1.setPosition(-this._card0Position.x, this._card0Position.y);
    }
  }
  playCollisionAndSeparation() {
    var t = this;
    return new Promise(function (e) {
      if (t._card0 && t._card1 && t.sp_collision) {
        t.playRankCardClearEffect();
        var o = t._card0.x,
          n = t._card1.x;
        cc.tween(t._card0).to(0.3, {
          position: cc.v3(o - 100, t._card0.y, 0)
        }).start();
        cc.tween(t._card1).to(0.3, {
          position: cc.v3(n + 100, t._card1.y, 0)
        }).call(function () {
          e();
        }).start();
      } else e();
    });
  }
  @mj.traitEvent("RankSpCardEff_clearEff")
  playRankCardClearEffect() {
    if (cc.isValid(this.sp_collision)) {
      this.sp_collision.node.active = true;
      playSpineAnim(this.sp_collision, 1, "in", function () {});
    }
  }
  playCardFlySequence(t, e, o, n, a, i, r) {
    var l = this;
    return new Promise(function (c) {
      try {
        if (!(e && cc.isValid(e) && o && cc.isValid(o))) {
          l.onFlyEnd(i);
          c();
          return;
        }
        l._card0;
        var d = e.getPosition(),
          p = 100 * Math.cos(-45 * Math.PI / 180),
          u = 100 * Math.sin(-45 * Math.PI / 180),
          h = cc.v3(d.x + p, d.y + u, 0),
          f = d.x + 0.2 * (h.x - d.x),
          m = d.y + 0.3 * (h.y - d.y),
          _ = cc.v2(f, m),
          y = d.x + 0.5 * (h.x - d.x),
          g = d.y + 0.85 * (h.y - d.y),
          v = cc.v2(y, g),
          k = cc.v2(h.x, h.y),
          C = h.x + 0.25 * (a.x - h.x),
          R = h.y + 0.15 * (a.y - h.y),
          b = cc.v2(C, R),
          w = h.x + 0.7 * (a.x - h.x),
          B = h.y + 0.6 * (a.y - h.y),
          S = cc.v2(w, B),
          I = cc.v2(a.x, a.y);
        r += t ? 0.2 : 0.6;
        var N = l.onFlyEnd.bind(l);
        cc.tween(e).delay(r).bezierTo(0.15, _, v, k).call(function () {}).bezierTo(0.3, b, S, I).call(function () {
          if (o && cc.isValid(o) && n && cc.isValid(n)) {
            o.active = false;
            n.node.active = true;
            l.playCollectEffect();
            playSpineAnim(n, 1, "in", function () {
              n && (n.node.active = false);
              c();
            });
            N(i);
          } else {
            N(i);
            c();
          }
        }).start();
      } catch (t) {
        console.error("[RankSpecialCardEffect] " + (e === l._card0 ? "card_0" : "card_1") + " 飞行序列失败: " + t.message);
        c();
      }
    });
  }
  @mj.traitEvent("RankSpCardEff_colEff")
  playCollectEffect() {
    mj.audioManager.playEffect(ERankAudioID.Collect2);
  }
  onFlyEnd(t) {
    if (cc.isValid(t)) {
      var e = t.getComponent("RankCollectCard");
      e && "function" == typeof e.onCardArrived && e.onCardArrived();
    }
  }
  removeGameplayPrefix(t) {
    return t && t.startsWith("gameplay_special_") ? t.substring("gameplay_special_".length) : t;
  }
  onDestroy() {
    super.onDestroy.call(this);
    this._card0 = null;
    this._cardContent0 = null;
    this._card1 = null;
    this._cardContent1 = null;
    this._spLight0 = null;
    this._spLight1 = null;
    this.sp_collision = null;
  }
}