import BaseUI from '../../../framework/ui/BaseUI';
const {
  property
} = cc._decorator;
export var SPRITE_LOAD_COMPLETE = "sprite-load-complete";
@mj.class
export default class BaseSprite extends BaseUI {
  _isLoading = false;
  _loadingPath = "";
  _loadInitiated = false;
  @property
  _texturePath = "";
  @property
  _textureBundleName = void 0;
  @property
  _fromAtlas = false;
  static create(e, t, o = cc.Sprite.SizeMode.RAW) {
    var n = new cc.Node(),
      i = n.addComponent(this);
    n.addComponent(cc.Sprite).sizeMode = o;
    i.loadTexture(e, false, true, t);
    return i;
  }
  static createByAtlas(e, t, o, n = cc.Sprite.SizeMode.RAW) {
    var i = new cc.Node(),
      r = i.addComponent(this);
    i.addComponent(cc.Sprite).sizeMode = n;
    r.loadTexture(e + "/" + t, true, true, o);
    return r;
  }
  static refreshWithNode(e, t, o = false, i = true, r?) {
    var a = e.getComponent(BaseSprite);
    if (a) {
      a.loadTexture(t, o, i, r);
      return a;
    }
    var l = e.getComponent(cc.Sprite);
    if (!l) {
      (l = e.addComponent(cc.Sprite)).sizeMode = cc.Sprite.SizeMode.CUSTOM;
      l.trim = false;
    }
    var s = e.addComponent(this);
    s.loadTexture(t, o, i, r);
    return s;
  }
  onLoad() {
    super.onLoad.call(this);
    this._texturePath && !this._loadInitiated && this.loadTexture(this._texturePath, this._fromAtlas, true, this._textureBundleName);
  }
  setSpriteByUrl(e, t, o = cc.Sprite.SizeMode.RAW) {
    var n = this.node.getComponent(cc.Sprite);
    if (n) {
      n.sizeMode = o;
      this.loadTexture(e, false, true, t);
    }
  }
  loadTexture(e, t = false, o = true, n?) {
    if (e) {
      this._texturePath = e;
      this._textureBundleName = n;
      this._fromAtlas = t;
      this._loadInitiated = true;
      if (!this._isLoading || this._loadingPath !== e) {
        o || this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).spriteFrame = null);
        if (t) {
          this.loadAtlasTexture(e, n);
        } else {
          this.loadSpriteTexture(e, n);
        }
      }
    }
  }
  emitLoadComplete(e, t, n = false) {
    if (cc.isValid(this.node)) {
      var i = {
        spriteFrame: e,
        path: t,
        fromCache: n
      };
      this.node.emit(SPRITE_LOAD_COMPLETE, i);
    }
  }
  resetState(e) {
    if (this._loadingPath === e) {
      this._isLoading = false;
      this._loadingPath = "";
    }
  }
  loadSpriteTexture(e, t) {
    var o = this,
      n = this.getRes(e, cc.SpriteFrame, t);
    if (n && this.node.getComponent(cc.Sprite)) {
      this.node.getComponent(cc.Sprite).spriteFrame = n;
      this.emitLoadComplete(n, e, true);
      this._isLoading = false;
      this._loadingPath = "";
    } else {
      this._isLoading = true;
      this._loadingPath = e;
      this.loadRes(e, cc.SpriteFrame, t).then(function (t) {
        if (cc.isValid(o.node)) {
          if (o._loadingPath === e) if (o.node.getComponent(cc.Sprite)) {
            if (t) {
              var n = o.node.getComponent(cc.Sprite);
              if (n.spriteFrame !== t) {
                n.spriteFrame = t;
                0 === o.node.width && 0 === o.node.height && o.node.setContentSize(t.getRect().width, t.getRect().height);
              }
              o.emitLoadComplete(t, e, false);
              o.resetState(e);
            } else o.resetState(e);
          } else o.resetState(e);
        } else o.resetState(e);
      });
    }
  }
  loadAtlasTexture(e, t) {
    var o = this,
      n = __read(this.splitAtlasPath(e), 2),
      i = n[0],
      r = n[1],
      l = this.getRes(i, cc.SpriteAtlas, t);
    if (l) {
      var s = l.getSpriteFrame(r);
      if (s && this.node.getComponent(cc.Sprite)) {
        this.node.getComponent(cc.Sprite).spriteFrame = s;
        this.emitLoadComplete(s, e, true);
      }
      this._isLoading = false;
      this._loadingPath = "";
    } else {
      this._isLoading = true;
      this._loadingPath = e;
      this.loadRes(i, cc.SpriteAtlas, t).then(function (t) {
        if (cc.isValid(o.node)) {
          if (o._loadingPath === e) if (t) {
            var n = o.node.getComponent(cc.Sprite);
            if (n) {
              var i = t.getSpriteFrame(r);
              if (i) {
                if (n.spriteFrame !== i) {
                  n.spriteFrame = i;
                  0 === o.node.width && 0 === o.node.height && o.node.setContentSize(i.getRect().width, i.getRect().height);
                }
                o.emitLoadComplete(i, e, false);
              }
              o.resetState(e);
            } else o.resetState(e);
          } else o.resetState(e);
        } else o.resetState(e);
      });
    }
  }
  splitAtlasPath(e) {
    var t = e.lastIndexOf("/");
    return -1 === t ? [e, ""] : [e.substring(0, t), e.substring(t + 1)];
  }
}