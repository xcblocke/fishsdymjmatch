import { resManager } from './framework/manager/ResManager';
const {
  ccclass,
  property,
  executeInEditMode,
  requireComponent
} = cc._decorator;
@ccclass
@executeInEditMode
@requireComponent(cc.Sprite)
export default class CustomMaskSprite extends cc.Component {
  @property
  _maskSpriteFrame = null;
  _renderComponent = null;
  _loadComplete = false;
  @property
  _isAdaptMaskSize = false;
  @property
  _srcOffset = cc.Vec2.ZERO;
  @property({
    type: cc.SpriteFrame,
    tooltip: "遮罩精灵帧"
  })
  get maskSpriteFrame() {
    return this._maskSpriteFrame;
  }
  set maskSpriteFrame(e) {
    this._maskSpriteFrame = e;
    this.updateProperties();
  }
  @property({
    type: cc.Boolean,
    tooltip: "是否为遮罩相交区域大小，需运行可见"
  })
  get isAdaptMaskSize() {
    return this._isAdaptMaskSize;
  }
  set isAdaptMaskSize(e) {
    this._isAdaptMaskSize = e;
    this.updateProperties();
  }
  @property({
    type: cc.Vec2,
    tooltip: "被遮罩图片偏移,isAdaptMaskSize=true情况下生效"
  })
  get srcOffset() {
    return this._srcOffset;
  }
  set srcOffset(e) {
    this._srcOffset = e;
    this.updateProperties();
  }
  onLoad() {
    var e = this;
    if (!this._renderComponent) {
      this._renderComponent = this.getComponent(cc.Sprite);
      var t = function t(t) {
        t.addRef();
        e._loadComplete = true;
        var o = cc.MaterialVariant.create(t, e._renderComponent);
        e._renderComponent.setMaterial(0, o);
        e.updateProperties();
      };
      resManager.loadRes("materials/CustomMask", cc.Material, "resources").then(function (e) {
        t(e);
      });
    }
  }
  updateProperties() {
    if (this._renderComponent && this._loadComplete && this._maskSpriteFrame) {
      var e = this._maskSpriteFrame.getTexture(),
        t = this._renderComponent.spriteFrame.getTexture(),
        o = this._maskSpriteFrame.getRect(),
        n = this._renderComponent.spriteFrame.getRect();
      if (this._isAdaptMaskSize) {
        var i = cc.size(o.width, o.height),
          r = cc.size(n.width, n.height),
          a = Math.min(i.width, r.width),
          l = Math.min(i.height, r.height),
          s = cc.v2((r.width - a) / 2, (r.height - l) / 2),
          c = cc.v2((i.width - a) / 2, (i.height - l) / 2);
        Math.abs(this._srcOffset.y) > s.y && (this._srcOffset.y = this._srcOffset.y / this._srcOffset.y * s.y);
        Math.abs(this._srcOffset.x) > s.x && (this._srcOffset.x = this._srcOffset.x / this._srcOffset.x * s.x);
        var u = this._renderComponent.spriteFrame.clone(),
          p = this._maskSpriteFrame.clone();
        if (this._maskSpriteFrame.isRotated()) {
          p.setRect(cc.rect(o.x + c.y, o.y + c.x, a, l));
        } else {
          p.setRect(cc.rect(o.x + c.x, o.y + c.y, a, l));
        }
        p.setOriginalSize(cc.size(a, l));
        if (this._renderComponent.spriteFrame.isRotated()) {
          u.setRect(cc.rect(n.x + s.y + this._srcOffset.y, n.y + s.x - this._srcOffset.x, a, l));
        } else {
          u.setRect(cc.rect(n.x + s.x - this._srcOffset.x, n.y + s.y + this._srcOffset.y, a, l));
        }
        u.setOriginalSize(cc.size(a, l));
        this._maskSpriteFrame = p;
        this._renderComponent.spriteFrame = u;
        o = this._maskSpriteFrame.getRect();
        n = this._renderComponent.spriteFrame.getRect();
        this.node.setContentSize(a, l);
      }
      var f = new cc.Vec4(1, 1, 1, 1);
      if (this._renderComponent.spriteFrame.isRotated()) {
        f.x = n.x / t.width + n.height / t.width;
        f.y = -n.y / t.height;
        f.z = t.height / n.width;
        f.w = t.width / n.height;
      } else {
        f.x = n.x / t.width;
        f.y = n.y / t.height;
        f.z = t.width / n.width;
        f.w = t.height / n.height;
      }
      var d = new cc.Vec4(1, 1, 1, 1);
      if (this._maskSpriteFrame.isRotated()) {
        d.x = o.x / e.width + o.height / e.width;
        d.y = o.y / e.height;
        d.z = e.height / o.width;
        d.w = -e.width / o.height;
      } else {
        d.x = o.x / e.width;
        d.y = o.y / e.height;
        d.z = e.width / o.width;
        d.w = e.height / o.height;
      }
      this._renderComponent.getMaterial(0).setProperty("maskTexture", e);
      this._renderComponent.getMaterial(0).setProperty("srcOffset", f);
      this._renderComponent.getMaterial(0).setProperty("maskOffset", d);
    }
  }
  start() {}
}