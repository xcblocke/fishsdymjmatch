import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("HomeBtnAdjustTrait")
export default class HomeBtnAdjustTrait extends Trait {
  _scale = 1.2;
  _positions = [20, 20, 0, 20, -20];
  _widgetValues = [210, 53];
  static traitKey = "HomeBtnAdjust";
  get scale() {
    return null != this._traitData.scale ? this._traitData.scale : this._scale;
  }
  get positions() {
    return null != this._traitData.positions ? this._traitData.positions : this._positions;
  }
  get widgetValues() {
    return null != this._traitData.widgetValues ? this._traitData.widgetValues : this._widgetValues;
  }
  onRankBtn_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[2] && (o.node.y += this.positions[2]);
    null != this.widgetValues[4] && (o.node.getComponent(cc.Widget).right = this.widgetValues[4]);
  }
  onHDailyBtn_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[0] && (o.node.y += this.positions[0]);
    null != this.widgetValues[2] && (o.node.getComponent(cc.Widget).left = this.widgetValues[2]);
  }
  onTaskTt_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[1] && (o.node.y += this.positions[1]);
    null != this.widgetValues[3] && (o.node.getComponent(cc.Widget).right = this.widgetValues[3]);
  }
  onHallNmlBtn_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[3] && (o.node.y += this.positions[3]);
  }
  onTravelBtn_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[4] && (o.node.y += this.positions[4]);
  }
  onHallSetBtn_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[5] && (o.node.y += this.positions[5]);
    null != this.widgetValues[1] && (o.node.getComponent(cc.Widget).right = this.widgetValues[1]);
  }
  onHallBadgeBtn_onLoad(t, e) {
    e();
    var o = t.ins;
    o.node.scale = this.scale;
    null != this.positions[6] && (o.node.y += this.positions[6]);
    null != this.widgetValues[0] && (o.node.getComponent(cc.Widget).right = this.widgetValues[0]);
  }
}