const {
  ccclass,
  property,
  executeInEditMode
} = cc._decorator;
@ccclass
@executeInEditMode()
export default class PolygonButton extends cc.Component {
  @property({
    displayName: "是否为正多边形"
  })
  isRegularPolygon = true;
  @property({
    displayName: "是否显示调试框"
  })
  showDebugPolygon = false;
  @property({
    displayName: "是否播放点击缩放动画"
  })
  clickAnim = false;
  @property({
    type: cc.Integer,
    displayName: "正多边形顶点数量",
    visible: function () {
      return this.isRegularPolygon;
    }
  })
  pointCount: number = 0;
  @property({
    type: cc.Float,
    displayName: "正多边形半径",
    visible: function () {
      return this.isRegularPolygon;
    }
  })
  radius: number = 0;
  @property({
    displayName: "坐标偏移",
    tooltip: "多边形区域距离坐标原点偏移",
    visible: function () {
      return this.isRegularPolygon;
    }
  })
  offset = cc.Vec2.ZERO;
  @property({
    type: [cc.Vec2],
    tooltip: "多边形定点位置信息（局部坐标，至少3个点）",
    visible: function () {
      return !this.isRegularPolygon;
    }
  })
  points: [cc.Vec2] = [];
  _isMove = false;
  _ignoreClickAudio = false;
  _clickAnim = false;
  _scaleX = 1;
  _scaleY = 1;
  _originalHitTest = null;
  onLoad() {
    this._originalHitTest = this.node._hitTest.bind(this.node);
    this.node._hitTest = this._hitTest.bind(this);
    this.isRegularPolygon && this.calcPoints();
  }
  start() {
    if (this.showDebugPolygon) {
      this.showPolygon();
    } else {
      this.clearPolygonShow();
    }
    var e = this.node;
    this._scaleX = e.scaleX;
    this._scaleY = e.scaleY;
    e.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
    e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    e.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  }
  onDestroy() {
    var e = this.node;
    e.off(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);
    e.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    e.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    e.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
  }
  initParams(e) {
    this.points = e.points ? e.points : this.points;
    this._clickAnim = e.clickAnim ? e.clickAnim : this._clickAnim;
    var t = e.regularPolygon;
    if (t) {
      this.radius = t.radius ? t.radius : this.radius;
      this.pointCount = t.pointCount ? t.pointCount : this.pointCount;
      this.offset = t.offset ? t.offset : this.offset;
      this.calcPoints();
    }
  }
  registerClick(e) {
    this._callback = e;
  }
  _hitTest(e) {
    return !!this.checkBtnPolygonCollider(e) && this._originalHitTest(e, this.node);
  }
  onTouchBegin(e) {
    this._isMove = false;
    e.stopPropagation();
    this.clickAnim && this.playClickAnim(0.9 * this._scaleX, 0.9 * this._scaleY);
  }
  onTouchMove(e) {
    var t = e.getLocation(),
      o = e.getStartLocation();
    t.sub(o).mag() > 20 && (this._isMove = true);
  }
  onTouchEnd(e) {
    e.stopPropagation();
    this._isMove || this._callback && this._callback(e);
    this.onTouchCancel(e);
  }
  onTouchCancel() {
    this._isMove = false;
    this.clickAnim && this.playClickAnim(this._scaleX, this._scaleY);
  }
  playClickAnim(e, t) {
    cc.Tween.stopAllByTarget(this.node);
    cc.tween(this.node).to(0.1, {
      scaleX: e,
      scaleY: t
    }).start();
  }
  checkBtnPolygonCollider(e) {
    if (this.points.length < 3) return true;
    var t = this.node.convertToNodeSpaceAR(e);
    return cc.Intersection.pointInPolygon(t, this.points);
  }
  calcPoints() {
    this.points = [];
    for (var e = 0; e < this.pointCount; e++) {
      var t = this.offset.x + this.radius * Math.cos(2 * Math.PI * e / this.pointCount),
        o = this.offset.y + this.radius * Math.sin(2 * Math.PI * e / this.pointCount);
      this.points[e] = cc.v2(t, o);
    }
  }
  showPolygon(e = 2, t = cc.Color.RED, o = true, n = cc.color(255, 0, 0, 50)) {
    var i = this.node.getChildByName("PolygonButtonDebugNode");
    if (null == i) {
      i = new cc.Node("PolygonButtonDebugNode");
      this.node.addChild(i, 10000, "PolygonButtonDebugNode");
    }
    i.width = this.node.width;
    i.height = this.node.height;
    i.setAnchorPoint(this.node.getAnchorPoint());
    i.setPosition(0, 0);
    var r = i.getComponent(cc.Graphics) || i.addComponent(cc.Graphics);
    r.clear();
    r.lineWidth = e;
    r.strokeColor = t;
    r.fillColor = n;
    var a = this.points[0];
    r.moveTo(a.x, a.y);
    for (var l = 1; l < this.points.length; l++) {
      var s = this.points[l];
      r.lineTo(s.x, s.y);
    }
    r.lineTo(a.x, a.y);
    r.moveTo(a.x, a.y);
    o && r.fill();
    r.stroke();
  }
  clearPolygonShow() {
    var e = this.node.getChildByName("PolygonButtonDebugNode");
    null != e && e.destroy();
  }
}