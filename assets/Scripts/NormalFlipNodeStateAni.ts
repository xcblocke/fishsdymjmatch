import BaseSpine from './gamePlay/base/ui/BaseSpine';
import CardUtil from './gamePlay/user/CardUtil';
import { NodeStateAniBase } from './base/NodeStateAniBase';
export class NormalFlipNodeStateAni extends NodeStateAniBase {
  _easing = "";
  _isLeft = true;
  _hasRun = false;
  _baseTileNode = null;
  get hasRun() {
    return this._hasRun;
  }
  constructor(t, o) {
    super(t, "normalFlip");
    this._baseTileNode = o;
    this.forceExit();
  }
  @mj.traitEvent("NorFlipStateAni_spineCfg")
  getSpineCfg() {
    return {
      path: null,
      anims: null,
      bundleName: null,
      extraAnimInfo: {
        path: null,
        anims: null,
        bundleName: null
      }
    };
  }
  onEnterStart(t) {
    var o = this;
    super.onEnterStart.call(this, t);
    if (cc.isValid(this._node)) {
      this._hasRun = true;
      this.playSpineAnim(this._baseTileNode.tileNode, function () {
        o._baseTileNode.updateImgCard();
        o._baseTileNode.stopAnimNodeAnimation();
        o.onEnterEnd(t);
      }, t);
      this.playBgSpineAnim();
    } else this.onEnterEnd(t);
  }
  @mj.traitEvent("NorFlipStateAni_onEnd")
  onEnterEnd(t) {
    super.onEnterEnd.call(this, t);
  }
  createAnimNode(e, t, o) {
    var n = new cc.Node();
    n.name = "NormalFlipNodeExtra";
    for (var i = BaseSpine.refreshWithNode(n, e, t), r = 0; r < o.length; r++) i.queueAnimation(o[r], 1, null, r === o.length - 1);
    return n;
  }
  playBgSpineAnim() {
    var e,
      t = this,
      o = this.getSpineCfg(),
      n = o.path,
      i = o.anims,
      r = o.bundleName;
    if (n) {
      var l = new cc.Node();
      this._baseTileNode.shadowCardNode.addChild(l);
      var s = this._baseTileNode.shadowNode.opacity,
        c = BaseSpine.refreshWithNode(l, n, r);
      null === (e = c.getSkeleton()) || void 0 === e || e.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
      for (var u = 0; u < i.length; u++) if (u == i.length - 1) {
        c.queueAnimation(i[u], 1, function () {
          t._baseTileNode.shadowNode.opacity = s;
        }, true);
      } else {
        c.queueAnimation(i[u], 1);
      }
      c.attachNode("hook_mahjong", function () {
        var e = cc.instantiate(t._baseTileNode.shadowNode);
        e.opacity = 255;
        return e;
      });
      this._baseTileNode.shadowNode.opacity = 0;
    }
  }
  playSpineAnim(e, t) {
    var o,
      n = this,
      i = this.getSpineCfg(),
      r = i.path,
      a = i.anims,
      l = i.bundleName,
      s = i.extraAnimInfo;
    if (r) {
      if (s && s.path) {
        var c = this.createAnimNode(s.path, s.bundleName, s.anims);
        this._baseTileNode.cardNode.addChild(c);
      }
      var u = null;
      null === (o = (u = this._baseTileNode.playAnimNodeAnimation(r, a[0], false, function () {
        if (u) {
          u.setAnimation(a[1], 1, t);
        } else {
          null == t || t();
        }
        n._baseTileNode.updateImgCard();
      }, function () {
        return e;
      }, null, l)).getSkeleton()) || void 0 === o || o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
    } else t();
  }
  onExitStart(t) {
    super.onExitStart.call(this, t);
    var o = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_dn", this._baseTileNode),
      n = o.path,
      i = o.bundleName,
      r = o.fromAtlas;
    this._baseTileNode.updateImgCardByImg(n, i, r);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    this._baseTileNode.updateImgCard();
  }
  isLock() {
    return this._baseTileNode.info.tileObject.isCardLock() > 0;
  }
  onExit(t) {
    super.onExit.call(this, t);
    var o = CardUtil.getAtlasPathAndBundleName("gameplay_img_mj_dn", this._baseTileNode),
      n = o.path,
      i = o.bundleName,
      r = o.fromAtlas;
    this._baseTileNode.updateImgCardByImg(n, i, r);
  }
  applyImmediate() {
    cc.isValid(this._node);
  }
  reset() {
    if (this._onEnteredCallBack) {
      this._onEnteredCallBack();
      this._onEnteredCallBack = void 0;
    }
  }
  tryPlayAni() {
    this.hasRun || this.playAni();
  }
}