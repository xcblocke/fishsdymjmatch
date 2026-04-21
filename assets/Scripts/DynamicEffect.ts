const {
  ccclass,
  executeInEditMode,
  property
} = cc._decorator;
function u(e, t) {
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
export default class DynamicEffect extends cc.Component {
  @property({
    type: cc.Node,
    tooltip: "指定动态效果的源节点"
  })
  targetNode: cc.Node = null;
  srcNode = null;
  defaultGroup = "";
  _renderCamera = null;
  @property
  _isDynamic = false;
  @property({
    type: cc.Boolean,
    tooltip: "效果受体是否动态，比如播放中的spine，默认静态,节省性能"
  })
  get isDynamic() {
    return this._isDynamic;
  }
  set isDynamic(e) {
    this._isDynamic = e;
  }
  start() {
    this.srcNode = this.node.getChildByName("src");
    u(this.srcNode, this.node.name + "此节点下需要有容器节点src,将内容放入容器节点");
    this.srcNode.active = true;
    this.targetNode && (this.defaultGroup = this.targetNode.group);
    this.targetNode = this.targetNode || this.srcNode;
    var e = this.targetNode.getContentSize(),
      t = e.width * this.targetNode.scaleX,
      o = e.height * this.targetNode.scaleY;
    u(t > 0 && o > 0, "节点boundingBox大小需要大于0");
    var n = new cc.RenderTexture();
    n.initWithSize(t, o, cc.gfx.RB_FMT_S8);
    var i = this.srcNode.getChildByName("dynamicRender");
    if (this.targetNode.getChildByName("dynamicRender")) {
      i = this.targetNode.getChildByName("dynamicRender");
    } else {
      (i = cc.instantiate(i)).parent = this.targetNode;
    }
    this._renderCamera = i.getComponent(cc.Camera);
    this._renderCamera.targetTexture = n;
    this._renderCamera.orthoSize = 0.5 * o;
    i.active = true;
    this._renderCamera.enabled = false;
    this.refreshSrcEffect();
    var r = new cc.SpriteFrame();
    r.setFlipY(true);
    r.setTexture(n);
    var a = this.node.getComponent(cc.Sprite);
    a || (a = this.node.addComponent(cc.Sprite));
    a.spriteFrame = r;
    a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    this.node.setContentSize(t, o);
  }
  lateUpdate() {
    this.targetNode && this._renderCamera && this._isDynamic && this.refreshSrcEffect();
  }
  refreshSrcEffect() {
    this.targetNode.walk(function (e) {
      e.group = "dynamicRender";
    }, null);
    this._renderCamera.render();
    this.targetNode.walk(function (e) {
      e.group = "null";
    }, null);
  }
  onDestroy() {
    var e = this;
    this.defaultGroup && this.targetNode.isValid && this.targetNode.walk(function (t) {
      t.group = e.defaultGroup;
    }, null);
  }
}