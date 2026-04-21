import Adapter from '../../../Scripts/component/Adapter';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("WideScreenAdaptTrait")
export default class WideScreenAdaptTrait extends Trait {
  static traitKey = "WideScreenAdapt";
  onLoad() {
    super.onLoad.call(this);
    this.registerTile2Event();
  }
  registerTile2Event() {
    this.registerEvent([{
      event: "T2TopVw_onLoad",
      priority: 0,
      type: 2
    }]);
  }
  isWideScreen() {
    var t = cc.view.getFrameSize();
    return t.height / t.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width;
  }
  getBlackX() {
    return Adapter.blackX || 0;
  }
  onMainGmVw_initLayers(t, i) {
    var e = t.ins;
    if (e && cc.isValid(e.node)) {
      this.adaptMainGameTop(e);
      i();
    } else i();
  }
  onT2TopVw_onLoad(t, i) {
    var e = t.ins;
    if (e && cc.isValid(e.node)) {
      this.adaptTile2TopView(e);
      i();
    } else i();
  }
  adaptTile2TopView(t) {
    if (this.isWideScreen()) {
      var i = this.getBlackX();
      if (!(i <= 0)) {
        var e = t.node;
        if (e && cc.isValid(e)) {
          var o = e.getChildByName("btnBack");
          if (o && cc.isValid(o)) {
            var n = o.position;
            o.setPosition(n.x - i, n.y);
          }
          var a = e.getChildByName("btnSettings");
          if (a && cc.isValid(a)) {
            n = a.position;
            a.setPosition(n.x + i, n.y);
          }
        }
      }
    }
  }
  onDailyView_onLoad(t, i) {
    var e = t.ins;
    if (e && cc.isValid(e.node)) {
      this.adaptDailyViewTop(e);
      i();
    } else i();
  }
  onRankVw_onLoad(t, i) {
    var e = t.ins;
    if (e && cc.isValid(e.node)) {
      this.adaptRankViewTop(e);
      i();
    } else i();
  }
  adaptRankViewTop(t) {
    if (this.isWideScreen()) {
      var i = this.getBlackX();
      if (!(i <= 0)) {
        var e = t.node.getChildByName("top_adapt");
        if (e && cc.isValid(e)) {
          var o = e.getChildByName("btn_back");
          if (o && cc.isValid(o)) {
            var n = o.position;
            o.setPosition(n.x - i, n.y);
          }
          var a = e.getChildByName("btn_tips");
          if (a && cc.isValid(a)) {
            n = a.position;
            a.setPosition(n.x + i, n.y);
          }
        }
      }
    }
  }
  adaptMainGameTop(t) {
    if (this.isWideScreen()) {
      var i = this.getBlackX();
      if (!(i <= 0)) {
        var e = t.topRootNode;
        if (e && cc.isValid(e)) {
          var o = e.getChildByName("btnBack");
          if (o && cc.isValid(o)) {
            var n = o.position;
            o.setPosition(n.x - i, n.y);
          }
          var a = e.getChildByName("btnSettings");
          if (a && cc.isValid(a)) {
            n = a.position;
            a.setPosition(n.x + i, n.y);
          }
        }
      }
    }
  }
  onDailyCollVw_onLoad(t, i) {
    var e = t.ins;
    if (e && cc.isValid(e.node)) {
      this.adaptDailyCollectViewTop(e);
      i();
    } else i();
  }
  adaptDailyCollectViewTop(t) {
    if (this.isWideScreen()) {
      var i = this.getBlackX();
      if (!(i <= 0)) {
        var e = t.node.getChildByName("node_top");
        if (e && cc.isValid(e)) {
          var o = e.getChildByName("btn_back");
          if (o && cc.isValid(o)) {
            var n = o.position;
            o.setPosition(n.x - i, n.y);
          }
        }
      }
    }
  }
  adaptDailyViewTop(t) {
    if (this.isWideScreen()) {
      var i = this.getBlackX();
      if (!(i <= 0)) {
        var e = t.node.getChildByName("node_top");
        if (e && cc.isValid(e)) {
          var o = e.getChildByName("btn_back");
          if (o && cc.isValid(o)) {
            var n = o.position;
            o.setPosition(n.x - i, n.y);
          }
          var a = e.getChildByName("btn_more");
          if (a && cc.isValid(a)) {
            n = a.position;
            a.setPosition(n.x + i, n.y);
          }
        }
      }
    }
  }
}