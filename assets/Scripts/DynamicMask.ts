import CustomMaskSprite from './CustomMaskSprite';
const {
  ccclass,
  executeInEditMode,
  property
} = cc._decorator;
function p(e, t) {
  if (!e) {
    var o = new Error(t),
      n = "" + (o.stack.split("\n")[1] || "");
    n = (n = n + "\n" + (o.stack.split("\n")[2] || "")) + "\n" + (o.stack.split("\n")[3] || "");
    o.message = o.message + "\n" + n;
    throw o;
  }
}
@ccclass
@executeInEditMode
export default class DynamicMask extends cc.Component {
  srcNode = null;
  maskNode = null;
  _maskCamera = null;
  _renderCamera = null;
  @property
  _isSrcDynamic = false;
  @property
  _isMaskDynamic = false;
  @property({
    type: cc.Boolean,
    tooltip: "被遮罩内容是否为动态的，默认静态,节省性能"
  })
  get isSrcDynamic() {
    return this._isSrcDynamic;
  }
  set isSrcDynamic(e) {
    this._isSrcDynamic = e;
  }
  @property({
    type: cc.Boolean,
    tooltip: "遮罩是否为动态的，默认静态,节省性能"
  })
  get isMaskDynamic() {
    return this._isMaskDynamic;
  }
  set isMaskDynamic(e) {
    this._isMaskDynamic = e;
  }
  start() {
    this.srcNode = this.node.getChildByName("src");
    p(this.srcNode, this.node.name + "此节点下需要有被遮罩节点src");
    this.srcNode.active = true;
    this.maskNode = this.node.getChildByName("mask");
    p(this.maskNode, this.node.name + "此节点下需要有被遮罩节点mask");
    this.maskNode.active = true;
    var e = this.maskNode.getBoundingBoxToWorld();
    cc.AffineTransform.transformRect(e, e, this.maskNode.parent.getWorldToNodeTransform());
    e.transformMat4(e, this.maskNode.getLocalMatrix(cc.mat4()));
    var t = cc.size(2 * Math.max(Math.abs(e.xMax), Math.abs(e.xMin)), 2 * Math.max(Math.abs(e.yMax), Math.abs(e.yMin))),
      o = t.width * this.maskNode.scaleX,
      n = t.height * this.maskNode.scaleY;
    p(o > 0 && n > 0, "mask节点boundingBox大小需要大于0");
    var i = new cc.RenderTexture();
    i.initWithSize(o, n, cc.gfx.RB_FMT_S8);
    var r = this.srcNode.getChildByName("dynamicRender");
    if (!r) {
      (r = cc.instantiate(cc.Canvas.instance.node.getChildByName("dynamicRenderTemplate"))).name = "dynamicRender";
      r.parent = this.srcNode;
    }
    this._renderCamera = r.getComponent(cc.Camera);
    this._renderCamera.targetTexture = i;
    this._renderCamera.orthoSize = 0.5 * n;
    r.active = true;
    this._renderCamera.enabled = false;
    this.refreshSrcEffect();
    var l = new cc.RenderTexture();
    l.initWithSize(o, n, cc.gfx.RB_FMT_S8);
    var s = this.maskNode.getChildByName("dynamicMask");
    if (!s) {
      (s = cc.instantiate(cc.Canvas.instance.node.getChildByName("dynamicMaskTemplate"))).name = "dynamicMask";
      s.parent = this.maskNode;
    }
    this._maskCamera = s.getComponent(cc.Camera);
    this._maskCamera.targetTexture = l;
    this._maskCamera.orthoSize = 0.5 * n;
    s.active = true;
    this._maskCamera.enabled = false;
    this.refreshMaskEffect();
    var c = new cc.SpriteFrame();
    c.setFlipY(true);
    c.setTexture(i);
    var u = this.node.getComponent(cc.Sprite);
    u || (u = this.node.addComponent(cc.Sprite));
    u.spriteFrame = c;
    u.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    this.node.setContentSize(o, n);
    var f = this.node.getComponent(CustomMaskSprite);
    f || (f = this.node.addComponent(CustomMaskSprite));
    f.maskSpriteFrame = new cc.SpriteFrame(l);
  }
  lateUpdate() {
    if (this.srcNode && this.maskNode && this._renderCamera && this._maskCamera) {
      this._isSrcDynamic && this.refreshSrcEffect();
      this._isMaskDynamic && this.refreshMaskEffect();
    }
  }
  refreshSrcEffect() {
    this.srcNode.walk(function (e) {
      e.group = "dynamicRender";
    }, null);
    this._renderCamera.render();
    this.srcNode.walk(function (e) {
      e.group = "null";
    }, null);
  }
  refreshMaskEffect() {
    this.maskNode.walk(function (e) {
      e.group = "dynamicMask";
    }, null);
    this._maskCamera.render();
    this.maskNode.walk(function (e) {
      e.group = "null";
    }, null);
  }
  onDestroy() {}
}