const {
  ccclass,
  property
} = cc._decorator;
@ccclass
export class GLMahjongButtonColor extends cc.Component {
  grayBrightness = 210;
  duration = 0.1;
  originalColor = cc.Color.WHITE;
  button = null;
  originalChildColors = new Map();
  onLoad() {
    this.button || (this.button = this.getComponent(cc.Button));
    if (this.button) {
      this.originalColor = this.node.color.clone();
      this.saveChildrenColors(this.node);
      this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
  }
  saveChildrenColors(e) {
    var t = this;
    e.children.forEach(function (e) {
      if (cc.isValid(e)) {
        t.originalChildColors.set(e, e.color.clone());
        t.saveChildrenColors(e);
      }
    });
  }
  onTouchStart() {
    if (this.button.interactable) {
      var e = cc.color(this.grayBrightness, this.grayBrightness, this.grayBrightness, 255);
      cc.tween(this.node).to(this.duration, {
        color: e
      }).start();
      this.applyGrayToChildren(this.node, e);
    }
  }
  applyGrayToChildren(e, t) {
    var o = this;
    e.children.forEach(function (e) {
      if (cc.isValid(e)) {
        cc.tween(e).to(o.duration, {
          color: t
        }).start();
        o.applyGrayToChildren(e, t);
      }
    });
  }
  onTouchEnd() {
    cc.Tween.stopAllByTarget(this.node);
    this.node.color = this.originalColor.clone();
    this.restoreChildrenColors(this.node);
  }
  restoreChildrenColors(e) {
    var t = this;
    e.children.forEach(function (e) {
      if (cc.isValid(e)) {
        cc.Tween.stopAllByTarget(e);
        var o = t.originalChildColors.get(e);
        o && (e.color = o.clone());
        t.restoreChildrenColors(e);
      }
    });
  }
  onDestroy() {
    if (this.node) {
      this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
      this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }
    this.originalChildColors.clear();
  }
}